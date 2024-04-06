^https://uploadpro.hellotalk8.com/et_login_config_querier/query

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
