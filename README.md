# 接口
接口列表
* mintArtWorksToken
* mintArtWorksToken2Owner
* updateTradeInfo
* deliverNFT
* updateEscrow

## mintArtWorksToken
|参数|类型|备注|
|:---:|:---:|:---:|
|aw|artwork类型的struct，传参为tuple，具体字段参考以下说明|艺术品相关信息|
|awImages|artWorkImage（struct）数组，传参为tuple数组，具体字段参考以下说明|艺术品的图片信息|
|tokenId|uint256|艺术品nft的tokenId|
|tokenURI|string|token的链接，可为空|

传参示例
```
{[["zzz", "111", "ZHH", "lately", "asdasd", "morden", "1", "2", "3", "4", "5", "6" ], true ], [[ "https://sad", "adasd" ], [ "https://sad", "adasd" ]], "12334" } 
```

### aw参数字段
|参数|类型|备注|
|:---:|:---:|:---:|
|artWorkBasicInfo|struct|艺术品基础信息|
|isDeposited|bool|是否托管|

#### aw::artWorkBasicInfo字段
|参数|类型|备注|
|:---:|:---:|:---:|
|name|string|艺术品名|
|number|string|艺术品编号|
|author|string|艺术品作者|
|createdEra|string|艺术品创作年代|
|createdTime|string|艺术品创作时间|
|style|string|艺术品风格|
|length|string|艺术长度|
|width|string|宽|
|height|string|高|
|caliber|string|口径|
|capacity|string|容量|
|weight|string|重量|


### artWorkImage
|参数|类型|备注|
|:---:|:---:|:---:|
|imageUrl|string|艺术品存储链接|
|hash|string|艺术品数字指纹信息|

---

## mintArtWorksToken2Owner
|参数|类型|备注|
|:---:|:---:|:---:|
|aw|artwork类型的struct，传参为tuple，具体字段参考以下说明|艺术品相关信息|
|awImages|artWorkImage（struct）数组，传参为tuple数组，具体字段参考以下说明|艺术品的图片信息|
|tokenId|uint256|艺术品nft的tokenId|
|tokenURI|string|token的链接，可为空|
|owner|string|指定token的owner|


## updateTradeInfo    

交易信息上链，用于上传更新拍卖相关记录，包含时间，地点，交易结果等。

|参数|类型|备注|
|:---:|:---:|:---:|
|tokenId|uint256|艺术品nft的tokenId|
|info|tradeInfo（struct），传参为tuple，具体字段参考以下说明|交易信息|

#### tradeInfo字段
|参数|类型|备注|
|:---:|:---:|:---:|
|bidLocation|string|交易地点|
|bidTime|string|交易时间|
|bidId|string|交易的ID|
|bidResult|string|交易结果|
|bidPrice|string|交易价格|


## deliverNFT

更新NFT交割信息，记录信息包含交易ID及相关凭证。

|参数|类型|备注|
|:---:|:---:|:---:|
|tokenId|uint256|艺术品nft的tokenId|
|bidId|string|交易的ID|
|evidence|bidEvidence（struct）数组，传参为tuple数组，不得超过4组，具体字段参考以下说明|交易凭证|
|receiver|string|接收地址|

#### bidEvidence字段
|参数|类型|备注|
|:---:|:---:|:---:|
|imageUrl|string|图片URL|
|hashValue|string|哈希值|



## updateEscrow    

更新托管信息上链，记录信息包含NFT相关实品托管状态及托管时间。

|参数|类型|备注|
|:---:|:---:|:---:|
|tokenId|uint256|NFT token ID|
|info|escrowInfo（struct），传参为tuple，具体字段参考以下说明|交易凭证|

#### escrowInfo字段
|参数|类型|备注|
|:---:|:---:|:---:|
|escrowType|uint8|托管状态，枚举类型，0代表入库，1代表出库|
|updateTime|string|更新时间|

