/*
[rewrite_local]
https:\/\/proapi\.115\.com\/115ios\/2\.0\/ufile\/files url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/115Cookie.js

[mitm]
hostname = proapi.115.com
*/


let url = $request.url;
let headers = $request.headers;
let cid = url.match(/cid=(\d+)/);

if (cid) {
    let cidValue = cid[1];
    let cookie = headers['Cookie'];
    $notify("💡115 Notification💡", "", `当前文件夹CID: ${cidValue}\n当前Cookie: ${cookie}`);
}
$done({});


/*
if (cid && cid[1] != '0') {
    let cidValue = cid[1];
    let cookie = headers['Cookie'];
    $notify("💡115 Notification💡", "", `当前文件夹CID: ${cidValue}\n当前Cookie: ${cookie}`);
}
$done({});
*/
