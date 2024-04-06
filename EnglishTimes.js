/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
✅解锁EnglishTimes无限听力阅读时间
By: 白了个鹿🦌
*/

hostname = uploadpro.hellotalk8.com

let url = $request.url;
let res = $response.body;

if (url.indexOf("/et_login_config_querier/query") !== -1) {
    let obj = JSON.parse(res);
    obj.data.switch.free_read_time = 600240;
    obj.data.free_read_count = 9999;
    res = JSON.stringify(obj);
    $done({body: res});
} else {
    $done({});
}
