# 接口
接口列表
* mintArtWorksToken
* mintArtWorksToken2Owner
* 

## mintArtWorksToken
|参数|类型|备注|
|:---:|:---:|:---:|
|artwork|struct{}，传参为tuple，具体字段参考以下说明|艺术品相关信息|
|artWorkImage[]|struct数组，传参为tuple数组，具体字段参考以下说明|艺术品的图片信息|
|tokenId|uint256|艺术品nft的tokenId|

传参示例
```
{[["zzz", "111", "ZHH", "lately", "asdasd", "morden"], ["122", "12", "33", "11", "12", "11" ], true ], [[ "https://sad", "adasd" ], [ "https://sad", "adasd" ]], "12334" } 
```

### artwork参数字段
|参数|类型|备注|
|:---:|:---:|:---:|
|artWorkBasicInfo|struct|艺术品基础信息|
|artWorkScale|struct|艺术品规格|
|isDeposited|bool|是否托管|

#### artwork::artWorkBasicInfo字段
|参数|类型|备注|
|:---:|:---:|:---:|
|name|string|艺术品名|
|number|string|艺术品编号|
|author|string|艺术品作者|
|createdEra|string|艺术品创作年代|
|createdTime|string|艺术品创作时间|
|style|string|艺术品风格|

#### artwork::artWorkScale
|参数|类型|备注|
|:---:|:---:|:---:|
|length|string|艺术长度|
|width|string|宽|
|height|string|高|
|caliber|string|口径|
|capacity|string|容量|
|weight|string|重量|


### artWorkImage
|参数|类型|备注|
|:---:|:---:|:---:|
|name|string|艺术品名|
|number|string|艺术品编号|

---

## mintArtWorksToken2Owner
|参数|类型|备注|
|:---:|:---:|:---:|
|artwork|struct{}，传参为tuple，参考以上|艺术品相关信息|
|artWorkImage[]|struct数组，传参为tuple数组，参考以上|艺术品的图片信息|
|tokenId|uint256|艺术品nft的tokenId|
|owner|string|指定token的owner|