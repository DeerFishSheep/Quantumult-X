// ==UserScript==
// @ScriptName        Notability
// @AppVersion        V14.7.10
// @AppUrl            https://apps.apple.com/app/id360593530
// @Function          解锁永久订阅会员可更新
// @Author            @白了个鹿
// @ScriptTime        20240408
// @ScriptURL         https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/Notability.js


[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/Notability.js

[mitm]
hostname = notability.com



var obj = JSON.parse($response.body);

obj = {
   "data": {
     "processAppleReceipt": {
       "error": 0,
       "subscription": {
         "productId": "com.gingerlabs.Notability.premium_subscription",
         "originalTransactionId": "570001184068302",
         "tier": "premium",
         "refundedDate": null,
         "refundedReason": null,
         "isInBillingRetryPeriod": false,
         "expirationDate": "9999-09-09T09:09:09.000Z",
         "gracePeriodExpiresAt": null,
         "overDeviceLimit": false,
         "expirationIntent": null,
         "__typename": "AppStoreSubscription",
         "user": null,
         "status": "canceled",
         "originalPurchaseDate": "2022-09-09T09:09:09.000Z"
       },
       "__typename": "SubscriptionResult"
     }
   }
};

$done({body: JSON.stringify(obj)});
