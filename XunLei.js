// ==UserScript==
// @ScriptName        迅雷
// @AppVersion        V2.1.32
// @AppUrl            https://apps.apple.com/app/id1503466530
// @Function          解锁Svip + 原画倍速
// @Author            @白了个鹿
// @UpdataTime        20240408
// @ScriptURL         https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLei.js

# > 迅雷 by 白了个鹿

[rewrite_local]
^https://api-pan.xunlei.com/drive/v1/files/ url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLeiHuaZhi.js
^https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLeiVip.js

[mitm]
hostname = api-pan.xunlei.com, xluser-ssl.xunlei.com
