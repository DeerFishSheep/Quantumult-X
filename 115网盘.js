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