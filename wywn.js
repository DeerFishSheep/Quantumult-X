/*
网易蜗牛读书 解锁特权
原作者: yxiaocai & JO2EY
*/

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/WangYiWoNiuDuShu.js
hostname = p.du.163.com

let body = $response.body;
let obj = JSON.parse(body);

obj.tradeEndTime = 4102415999000;
body = JSON.stringify(obj);
$done({body});
