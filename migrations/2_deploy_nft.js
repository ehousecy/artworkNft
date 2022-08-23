const GreeterContract = artifacts.require("derivativesNft");

module.exports = function(deployer) {
    deployer.deploy(GreeterContract, "BaoKu", "BK");
}
