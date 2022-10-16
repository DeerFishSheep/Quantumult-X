/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
✅迅雷解锁视频默认原画
By: 白了个鹿🦌
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.medias[0].need_more_quota = false;
obj.medias[1].need_more_quota = false;
obj.medias[1].is_default = false;
obj.medias[2].is_default = false;
obj.medias[3].is_default = false;
obj.medias[0].is_default = true;
obj.medias[0].link = obj.links["application/octet-stream"];
obj.medias[0].vip_types = [

      ];
obj.medias[1].vip_types = [

      ];

body = JSON.stringify(obj);
$done({body});
