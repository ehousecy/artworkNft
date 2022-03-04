# 合约地址
cfxtest:acgpt4e14t9dxxrn7gsw110n9fr516wnky7juugfda

# 接口
接口列表
* mintToken
* releaseArtwork
* transferArtworkReleases

# 事件列表
* event CreateToken(uint256 indexed tokenId, string indexed artworkName);
* event ReleaseArtwork(uint256 indexed tokenId, address indexed newOwner);
* event TransferArtworkRelease(uint256 indexed tokenId, uint256 indexed categortyId, address owner, address newOwner);


## mintToken
创建数字衍生品token以及相关信息，触发CreateToken

|参数|类型|备注|
|:---:|:---:|:---:|
|tokenId|uint256|nft的tokenId|
|aw|artwork类型的struct，传参为tuple，具体字段参考以下说明|艺术品基础信息|
|categories|artworkCategory（struct）数组，传参为tuple数组，具体字段参考以下说明|艺术品的分类信息|
|tokenURI|string|token的链接，可为空|
|totalRelease|uint256|总的可发布艺术品数量|

传参示例
```
{
    12,
    ["name","author","issuer","proprietors","producer","designer"],
    [[1,"automn","sdasa",2,2],[2,"Spring","sdasa",3,3]],
    "https://test.com",
    5
}
注意要确保 2+3 = 5；每个category的release相加=totalRelease
```


### artWork字段
|参数|类型|备注|
|:---:|:---:|:---:|
|name|string|艺术品名|
|author|string|艺术品作者|
|issuer|string|艺术品发行方|
|proprietors|string|艺术品版权方|
|producer|string|艺术品监制方|
|designer|string|设计方|



### artworkCategory
|参数|类型|备注|
|:---:|:---:|:---:|
|categoryId|uint256|艺术品|
|typeName|string|艺术品分类名|
|image|string|图片信息|
|releases|uint256|发布数量|
|onsale|uint256|可销售数量|

---


## releaseArtwork
发行衍生品，触发ReleaseArtwork

|参数|类型|备注|
|:---:|:---:|:---:|
|tokenId|uint256|nft的tokenId|
|categoryId|uint256|衍生品分类id| 
|awReleaseId|string|发布的衍生品id|
|newOwner|address|衍生品购买者的地址|

## transferArtworkRelease   
交割衍生品，触发TransferArtworkRelease

|参数|类型|备注|
|:---:|:---:|:---:|
|tokenId|uint256|nft的tokenId|
|awReleaseId|string|发布的衍生品id|
|newOwner|address|衍生品购买者的地址|
