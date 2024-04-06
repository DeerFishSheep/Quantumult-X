/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
✅解锁EnglishTimes无限听力阅读时间
By: 白了个鹿🦌
*/

^https://uploadpro.hellotalk8.com/et_login_config_querier/query url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/EnglishTimes.js
hostname = uploadpro.hellotalk8.com

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj.data.switch.free_read_time = 600240;
obj.data.free_read_count = 9999;
body = JSON.stringify(obj);
$done({body});
