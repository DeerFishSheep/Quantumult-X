// ==UserScript==
// @ScriptName        迅雷
// @Author            @白了个鹿
// @Function          迅雷解锁Svip + 原画倍速
// @ScriptTime        20221017
// @ScriptURL         https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLei.conf
// ==/UserScript==

# > 迅雷 by 白了个鹿
[rewrite_local]
^https://(api-pan.xunlei.com)|(xluser-ssl.xunlei.com)/(/drive/v1/files/)|(/xluser.core.login/v3/getuserinfo) url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLei.js

[mitm]
hostname = api-pan.xunlei.com, xluser-ssl.xunlei.com


// 获取原始响应体
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

// 针对不同的API做不同的修改
if (url.includes('https://api-pan.xunlei.com/drive/v1/files/')) {
    // 仅当URL中包含'PLAY'参数时执行修改
    if(url.includes('PLAY')){
        obj.medias[0].link = obj.links["application/octet-stream"];
        obj.medias[0].need_more_quota = false;
        obj.medias[0].video.frame_rate = 60;
        obj.medias[0].is_default = true;
        // 序列化修改后的对象并结束响应
        body = JSON.stringify(obj);
        $done({ body });
    } else {
        // 如果不包含'PLAY'，则不修改响应体
        $done({});
    }
} else if (url.includes('https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo')) {
    // 修改用户信息接口的响应体
    obj.nickName = "解锁成功！By:白了个鹿";
    obj.role = "1";
    obj.isAutoDeduct = true;
    // 接下来是手动指定的VIP列表对象数据
    obj.vipList = [{
        "daily": "9999",
        "payId": "0",
        "lastPay": "1686211943",
        "isVip": "1",
        "icon": {
            "general": "https://xluser-ssl.xunlei.com/v1/file/icon/level/svip/normal_a/svip_level8_normal.png",
            "small": "https://xluser-ssl.xunlei.com/v1/file/icon/level/svip/normal_b/svip_lever8_normal.png"
        },
        "isNew": "0",
        "vipDayGrow": "20",
        "vipGrow": "99999",
        "isYear": "1",
        "isRemind": "0",
        "vasid": "2",
        "suplusDay": "99999",
        "isAutoDeduct": "0",
        "vasType": "5",
        "payName": "---",
        "register": "20220520",
        "detail": [{
                "isvip": 1,
                "vas_type": "5",
                "end": "2099-12-31T16:12:23+08:00",
                "surplus_day": 21,
                "start": "2023-06-08T16:12:23+08:00"
            },
            {
                "isvip": 1,
                "vas_type": "3",
                "end": "2099-12-31T16:11:43+08:00",
                "surplus_day": 1,
                "start": "2023-07-11T16:12:23+08:00"
            }
        ],
        "expireDate": "20991231",
        "expireTime": "2099-12-31T16:11:43+08:00",
        "vipLevel": "8"
    }];
    // 序列化修改后的对象并结束响应
    body = JSON.stringify(obj);
    $done({ body });
} else {
    // 如果URL不匹配，直接返回原始响应体
    $done({});
}
