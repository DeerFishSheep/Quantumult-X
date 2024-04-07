// ==UserScript==
// @ScriptName        迅雷
// @Author            @白了个鹿
// @Function          迅雷解锁Svip + 原画倍速
// @ScriptTime        20221017
// @ScriptURL         https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLei.js
// ==/UserScript==

# > 迅雷 by 白了个鹿

[rewrite_local]
^https://api-pan.xunlei.com/drive/v1/files/ url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLeiHuaZhi.js
^https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLeiVip.js

[mitm]
hostname = api-pan.xunlei.com, xluser-ssl.xunlei.com
