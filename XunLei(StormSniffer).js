/*
使用前请先添加以下解密Host

conf-m-ssl.xunlei.com
api-shoulei-ssl.xunlei.com
api-pan.xunlei.com
xluser-ssl.xunlei.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

// 针对不同的API做不同的修改

if (url.includes('https:/\/api-pan.xunlei.com/drive/v1/files/')) {
    // 仅当URL中包含'PLAY'参数时执行修改
    if(url.includes('PLAY')){
        obj.medias[0].link = obj.links["application/octet-stream"];
        obj.medias[0].need_more_quota = false;
        obj.medias[0].video.frame_rate = 60;
        obj.medias[0].is_default = true;
        obj.medias[0].is_visible = true;
        var media_name = obj.medias[0].media_name; //新增变量存储画质名称
        var video_name = obj.name; // 新增变量存储视频名称

        // 确保索引存在然后再进行修改
        for (var i = 1; i < obj.medias.length; i++) {
            if(obj.medias[i]) {
                obj.medias[i].is_default = false;
                obj.medias[i].is_visible = false;
            }
        }
        body = JSON.stringify(obj);
        $notification.post("🎉再次恭喜你🤡叼毛", "🎬" + video_name , "🔓"+ media_name + "已解锁✅我已经帮你锁定了🫵必须给爷看完！");
}

    $done({ body });
} else if (url.includes('https:/\/xluser-ssl.xunlei.com/')) {
    if (url.includes('/session/v1/register')) {
        $notification.post("🎉恭喜你🤡叼毛", "✅已为你解锁9999年超级会员Svip", "🚨专家强烈建议你将此帐号纳入传家宝");
        //var source_site = "webhd.top";
        //$notify("🤭要是找不到电影资源，就去下面这个网址吧👇", "⌨️" + source_site, "🔗复制资源的磁力链接再打开迅雷上传就可以看了");
    }

    if (url.includes('/xluser.core.login/v3/getuserinfo')) {
        obj.nickName = "解锁成功！By:白了个鹿";
        obj.province = "北京市";
        obj.city = "日本区";
        obj.role = "1";
        obj.isAutoDeduct = true;
        obj.imgURL = "https:/\/xfile2.a.88cdn.com/file/k/711806727/avatar/Ceiyww.jpg/%s";
    
        obj.vipList = [{
            "daily": "9999",
            "payId": "0",
            "lastPay": "1686211943",
            "isVip": "1",
            "icon": {
                "general": "https:/\/xluser-ssl.xunlei.com/v1/file/icon/level/svip/normal_a/svip_level8_normal.png",
                "small": "https:/\/xluser-ssl.xunlei.com/v1/file/icon/level/svip/normal_b/svip_lever8_normal.png"
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
                    "end": "9999-09-09T16:12:23+08:00",
                    "surplus_day": 21,
                    "start": "2023-06-08T16:12:23+08:00"
                },
                {
                    "isvip": 1,
                    "vas_type": "3",
                    "end": "9999-09-09T16:11:43+08:00",
                    "surplus_day": 1,
                    "start": "2023-07-11T16:12:23+08:00"
                }
            ],
            "expireDate": "99990909",
            "expireTime": "9999-09-09T16:11:43+08:00",
            "vipLevel": "10"
        }];
    }

    body = JSON.stringify(obj);
    $done({ body });
} else if (url.includes('https:/\/api-shoulei-ssl.xunlei.com/flowhub/v1/slots:batchGet')) {
    // 直接修改指定的键值
    obj.slots[0].native.assets.title.text.value = "🎬影视资源网址：webhd.top";
    obj.slots[0].native.assets.desc.text.value = "🔗复制资源磁力链上传云笔记后再存至云盘即可观看";
    obj.slots[0].native.assets.cta.text.value = "点我直达";
    obj.slots[0].native.links[0].url = "https:/\/webhd.top";
    obj.slots[0].native.links[0].landing_type = "LANDING_OPEN_IN_BROWSER";

    body = JSON.stringify(obj);

$done({ body });

} else if (url.includes('https:/\/conf-m-ssl.xunlei.com/external/')) {
    obj.values.me_config.common_service_list = [
        {
          "reportClick" : "cloudNoteList",
          "icon" : "ic_mine_list_cloudnote",
          "reportShow" : "cloudNoteList",
          "title" : "我的云笔记",
          "xunleiUrl" : "xunlei:/\/cloud/openNoteList"
        },
        {
          "reportClick" : "feedback",
          "icon" : "ic_mine_list_service",
          "reportShow" : "feedback",
          "title" : "联系客服",
          "xunleiUrl" : "xunlei:/\/hybrid/openHybridWeb?url=https%3A%2F%2Fsj-m-ssl.xunlei.com%2Ffeedback&title=%E8%81%94%E7%B3%BB%E5%AE%A2%E6%9C%8D"
        }
      ];
     obj.values.me_config.entrance_list = [
        {
          "reportClick" : "file_list",
          "icon" : "ic_mine_localfile",
          "darkIcon" : "ic_mine_localfile",
          "reportShow" : "file_list",
          "title" : "本地文件",
          "xunleiUrl" : "xunlei:/\/file/localFileList?from=personal"
        },
        {
          "reportClick" : "trash",
          "icon" : "ic_mine_bin",
          "darkIcon" : "ic_mine_bin",
          "reportShow" : "trash",
          "title" : "回收站",
          "xunleiUrl" : "xunlei:/\/cloud/trash"
        },
        {
          "reportClick" : "my_share",
          "icon" : "ic_mine_share",
          "darkIcon" : "ic_mine_share",
          "reportShow" : "my_share",
          "title" : "我的分享",
          "xunleiUrl" : "xunlei:/\/hybrid/openHybridWeb?hidebar=true&url=https%3A%2F%2Fpan.xunlei.com%2Fshare%2F%3FnoActionBar%3Dtrue"
        },
        {
          "reportClick" : "my_restore",
          "icon" : "ic_mine_myforwarding",
          "darkIcon" : "ic_mine_myforwarding",
          "reportShow" : "my_restore",
          "title" : "我的转存",
          "xunleiUrl" : "xunlei:/\/hybrid/openHybridWeb?url=https%3A%2F%2Fpan.xunlei.com%2Frestore&hidebar=true&isAuth=true&showFullScreen=true"
        },
        {
          "reportClick" : "nas",
          "icon" : "ic_mine_device",
          "darkIcon" : "ic_mine_device",
          "reportShow" : "nas",
          "title" : "远程设备",
          "xunleiUrl" : "xunlei:/\/hybrid/openHybridWeb?hidebar=true&url=https%3A%2F%2Fpan.xunlei.com%2Fyc%3FnoActionBar%3Dtrue%26noStatusBar%3Dtrue%26layoutMode%3DadjustLayout"
        }
      ];

    body = JSON.stringify(obj);

}

$done({ body });
