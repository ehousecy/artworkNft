const GreeterContract = artifacts.require("derivativesNft")

contract("derivativesNft", (accounts) => {
  it("has been deployed successfully", async () => {
    const greeter = await GreeterContract.deployed("BaoKu", "BK");
    assert(greeter, "contract was not deployed");
  })

  // procedure test
  // P1
  // 1. release to A
  // 2. self transferRelease(A -> A)
  // check A balance, owner info, release  info, etc
  // 3. transfer to another person
  // check related account info: A & B
  // infos: balance, owner info, release info, tokenInfo etc
  it("test procedures P1", async () =>{
    const nftContract = await  GreeterContract.deployed("BaoKu", "BK");
    const tokenId = 2208020200000053;
    const releaseId = "2208020200000053#0001"
    const artwork = ["虤 门票", "author", "issuer", "copyright owner", "producer name", "designer"];
    const category = [ 1, "typename", "imageUrl", 1000, 1000];
    const tokenUrl = "url link";
    const totalReleases = 1000;
    const accountA = accounts[1];

    //step1. mint NFT token
    await nftContract.mintToken(tokenId, artwork, [category], tokenUrl, totalReleases, accounts[0]);

    // @demo: how to call a contract and display the result
    // const tokenInfo = await nftContract.tokenId2Artwork.call(tokenId);
    // console.log("tokenInfo:", tokenInfo.name);

    //step2. release token to accountA
    await  nftContract.releaseArtwork(tokenId, 1, releaseId,accountA);

    //@check
    // account[1] balance and token info
    //owner2Releases && balanceOf &&  tokenId2Releases && releaseBalanceOfOwner
    //
    let accBalA = await nftContract.releaseBalanceOfOwner(tokenId,accountA,{from: accountA});
    console.log("Token balance:", accBalA.toNumber());
    let idReleaseInfoA =  await  nftContract.tokenId2Releases(tokenId, releaseId);
    let ownerReleaseInfoA = await  nftContract.owner2Releases(tokenId, accountA, 0);
    console.log(idReleaseInfoA.owner, ownerReleaseInfoA.owner);
    // console.log(accounts[0], accounts[1], accounts[2]);

    //step3. transfer release to self
    const accountB = accounts[2];
    await nftContract.transferArtworkRelease(tokenId, releaseId, accountA,{from:accountA});

    // @check
    accBalA = await nftContract.releaseBalanceOfOwner(tokenId,accountA,{from: accountA});
    console.log("Token balance:", accBalA.toNumber());
    idReleaseInfoA =  await  nftContract.tokenId2Releases(tokenId, releaseId);
    ownerReleaseInfoA = await  nftContract.owner2Releases(tokenId, accountA, 0);
    // const owmerReleaseInfoAaa = await  nftContract.owner2Releases(tokenId, accountA, 1);
    console.log(idReleaseInfoA.owner, ownerReleaseInfoA.owner);


    //@step4 send to another account
    await nftContract.transferArtworkRelease(tokenId, releaseId, accountB,{from:accountA});


    //@check blockchain data
    accBalA = await nftContract.releaseBalanceOfOwner(tokenId,accountA,{from: accountA});
    console.log("Token balance:", accBalA.toNumber());
    idReleaseInfoA =  await  nftContract.tokenId2Releases(tokenId, releaseId);
    ownerReleaseInfoA = await  nftContract.owner2Releases(tokenId, accountB, 0);
    // const owmerReleaseInfoAaa = await  nftContract.owner2Releases(tokenId, accountA, 1);
    console.log(idReleaseInfoA.owner, ownerReleaseInfoA.owner);

    const accBalB = await nftContract.releaseBalanceOfOwner(tokenId,accountA,{from: accountB});
    console.log("TokenBalance:", accBalB.toNumber());


  })
})
