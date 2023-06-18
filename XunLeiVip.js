/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
✅迅雷解锁部分超级会员功能
By: 白了个鹿🦌
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.vipList = [
    {
      "isAutoDeduct" : "1",
      "isYear" : "1",
      "payId" : "1422461465",
      "isVip" : "2",
      "vipLevel" : "8",
      "register" : "20220520",
      "expireDate" : "20991231",
      "payName" : "白了个鹿",
      "vipDayGrow" : "9999",
      "vipGrow" : "99999",
      "vasid" : "2",
      "vasType" : "5"
    }
  ];

body = JSON.stringify(obj);
$done({body});
