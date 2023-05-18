/*
百度网盘 解锁在线视频倍率/清晰度
*/

if ($response.body) {
    $done({
        body: JSON.stringify({
  "product_infos" : [
    {
      "product_id" : "5210897752128663390",
      "end_time" : 2147483648,
      "buy_time" : "1386839306",
      "cluster" : "offlinedl",
      "status" : "0",
      "start_time" : 1386839306,
      "function_num" : 2,
      "buy_description" : "离线下载套餐(永久)",
      "product_description" : "离线下载套餐(永久)",
      "detail_cluster" : "offlinedl",
      "product_name" : "offlinedl_permanent"
    },
    {
      "product_id" : "1",
      "end_time" : 2147483648,
      "buy_time" : "0",
      "cluster" : "vip",
      "status" : 0,
      "start_time" : 1682870400,
      "function_num" : 0,
      "buy_description" : "",
      "product_description" : "超级会员",
      "detail_cluster" : "svip",
      "product_name" : "svip2_nd"
    }
  ],
  "center_skip_config" : {
    "action_type" : 0,
    "action_url" : "https://pan.baidu.com/buy/center?tag=8"
  },
  "last_privilege_card_v2" : {

  },
  "current_privilege_card" : [

  ],
  "current_product_v2" : {

  },
  "request_id" : 8957646377693781363,
  "current_privilege_card_v2" : {

  },
  "up_product_infos" : [

  ],
  "last_privilege_card" : [

  ],
  "level_info" : {
    "history_value" : 0,
    "current_level" : 1,
    "last_manual_collection_time" : 0,
    "current_value" : 0,
    "history_level" : 1,
    "v10_id" : ""
  },
  "user_tag" : "{\"has_buy_record\":1,\"has_buy_vip_svip_record\":1,\"last_buy_record_creat_time\":1546609997,\"is_vip\":0,\"is_svip\":0,\"last_vip_type\":1,\"last_vip_svip_end_time\":1549295999,\"is_svip_sign\":0,\"notice_user_type\":2,\"notice_user_status\":2,\"is_first_act\":0,\"is_first_charge\":0}",
  "currenttime" : 1684397396,
  "previous_product" : {
    "detail_cluster" : "svip",
    "expired_time" : 1549295999,
    "cluster" : "vip",
    "product_type" : "vip2_1m"
  },
  "current_mvip_v2" : {

  },
  "current_product" : [

  ],
  "reminder" : {
    "reminderWithContent" : [

    ],
    "advertiseContent" : [

    ]
  },
  "current_mvip" : [

  ],
  "previous_product_v2" : {
    "detail_cluster" : "svip",
    "expired_time" : 1549295999,
    "cluster" : "vip",
    "product_type" : "vip2_1m"
  }
}
)
    });
} else {
    $done({});
}
