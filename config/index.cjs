/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  "APP_ID":"wxf53b5c107e31858b",
  "APP_SECRET":"8aab81b0642028cbe1d716f0dec95703",
  "IS_SHOW_COLOR":true,
  "CALLBACK_TEMPLATE_ID":"",
  "CALLBACK_USERS":[{"name":"自己","id":""}],
  "USERS":[
    {"name":"老婆","id":"o25ud53pl7mfwAIxGPpPUxyI43jg",
     "useTemplateId":"RpLvqYz7QWv7q72f5SN8GdPyv1kI7gCCJmEJKUku1ZY",
     "province":"重庆","city":"渝北区","horoscopeDate":"10-05",
     "horoscopeDateType":"今日",
     "openUrl":"https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner&city=%E9%87%8D%E5%BA%86-%E9%87%8D%E5%BA%86",
     "festivals":[{"type":"节日","name":"结婚纪念日","date":"09-09","year":"2022"}],
     "customizedDateList":[]}],
  "SWITCH":{
    "weather":true,"holidaytts":true,"CIBA":true,"oneTalk":false,
    "earthyLoveWords":false,"momentCopyrighting":false,
    "poisonChickenSoup":false,"poetry":false,"horoscope":false,
    "birthdayMessage":true}
}

module.exports = USER_CONFIG

