'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "73d3d91405ea4e5c94894b85340b60ae",
"assets/assets/abi.json": "7bcabfde22a2ee6f049a7e85576b8f34",
"assets/assets/abiMMAI.json": "34b94f8adb063cef7abaafe28abb6b97",
"assets/assets/abiUniswap.json": "7908ffd4ffce0ee481416c06b1b3b1e5",
"assets/assets/abiUniswapV3R2.json": "d84c57e92a46fc075909b5e70e63fd8a",
"assets/assets/abiUSDC.json": "38015c67ea1c19f20cc5b14d8e169fb9",
"assets/assets/abiUSDT.json": "050de27710e5eb04b9e109da7eb4200f",
"assets/assets/CustomIcon.ttf": "c33484db064e9d40e004a6325c00e1fe",
"assets/assets/dummyAsset.txt": "a93743a0172ccef0d6408137f44298b6",
"assets/assets/images/%25EA%25B0%2580%25EC%258A%25A4%25ED%2586%25B5.png": "ea198a87d1a5505f5a3a7103b78dcb2e",
"assets/assets/images/%25EA%25B3%2584%25EB%258B%25A8.png": "49d85eee9fe0ad6e7384c351944f9461",
"assets/assets/images/%25EA%25B3%25A8%25EC%25A1%25B0%25EC%259E%2591%25EC%2597%2585%25EC%259E%25A5.png": "ef1a85f75f6cef29cc7adb15deafdad0",
"assets/assets/images/%25EA%25B3%25A8%25EC%25A1%25B0%25EC%25BB%25A8%25ED%2585%258C%25EC%259D%25B4%25EB%2584%2588.png": "a583bf69099eb1090368e405004d6a60",
"assets/assets/images/%25EA%25B3%25A8%25EC%25A1%25B01.png": "1340369f6aa0d8196d8a0cb03852d72b",
"assets/assets/images/%25EA%25B3%25B5%25EC%25A0%2595%25EC%259E%25A5%25EB%25B9%25841.png": "d8b3a0fca29a937a56e352bb12d1dab6",
"assets/assets/images/%25EA%25B3%25B5%25EC%25A0%2595%25EC%259E%25A5%25EB%25B9%25842.png": "acfe12538a44f55f488de680663bc270",
"assets/assets/images/%25EA%25B3%25B5%25EC%25A0%2595%25EC%259E%25A5%25EB%25B9%25843.png": "38b0da625171a2421ade5476ba03a1fd",
"assets/assets/images/%25EA%25B3%25B5%25EC%25A1%25B0%25EA%25B8%25B01.png": "7932dfdf3ed16e66de397593dab9a475",
"assets/assets/images/%25EA%25B3%25B5%25EC%25A1%25B0%25EA%25B8%25B02.png": "01742df934790acc24a4992244d023da",
"assets/assets/images/%25EA%25B3%25B5%25EC%25A1%25B0%25EA%25B8%25B03.png": "636261a9ad53f17e540c7dc745c36c8d",
"assets/assets/images/%25EB%2593%259C%25EB%259F%25BC%25ED%2586%25B5.png": "f1ab682adcca5e254ee68dd3c4e42414",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%2594%25EC%2597%2594%25EC%25A7%2584%25EA%25B3%25B5%25EC%25A0%25951.png": "147bb845aeda4a8c8429d1339d67ceca",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%2594%25EC%2597%2594%25EC%25A7%2584%25EA%25B3%25B5%25EC%25A0%25952.png": "8f87c8755241960f46cc36e9b13169be",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%2594%25EC%2597%2594%25EC%25A7%2584%25EA%25B3%25B5%25EC%25A0%25953.png": "7c6cff5cec86fb6329248edcec04dfbe",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%2594%25EC%2599%25B8%25EB%25B6%2580%25EC%2583%25B7%25EC%258B%259C%25EA%25B3%25B5%25EC%25A0%2595.png": "25ab32a938ae5ed4df0ce1d160ee01ba",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%2594%25EC%25A0%2595%25EC%25A7%2580.png": "fdc27494901bbd4ed3b90e0bb6deda2b",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%25941.png": "6a84fa434a5c705b26dfa920f88e16e5",
"assets/assets/images/%25EB%25A1%259C%25EB%25B4%2587%25ED%258C%25942.png": "fe55c3bfcc6c2aa6529cbbd77f863022",
"assets/assets/images/%25EB%25A3%25A8%25ED%2594%2584%25ED%2583%2591%25EC%259E%2591%25EC%2597%2585%25EA%25B3%25B5%25EA%25B0%2584.png": "87069234cc04c255a900feb15f4eea8f",
"assets/assets/images/%25EB%25AA%25A8%25EB%2593%2588.png": "a06dd5067e9fe5ffa98b78da858cafde",
"assets/assets/images/%25EB%25AA%25A8%25ED%2584%25B01.png": "11f3bd2eecc030840c4489a6dd15ceca",
"assets/assets/images/%25EB%25AA%25A8%25ED%2584%25B02.png": "75a831102f829a5c2f738821440e5fdc",
"assets/assets/images/%25EB%25B0%2595%25EC%258A%25A4%25EB%258D%2594%25EB%25AF%25B8.png": "aac7cc52401151327153b03341cf53ac",
"assets/assets/images/%25EC%2582%25B0%25EC%2597%2585%25EC%259A%25A9%25EA%25B3%25B5%25EA%25B8%25B0%25EC%25B2%25AD%25EC%25A0%2595%25EA%25B8%25B0.png": "a1f84358a13c02ad00b798e02f17a315",
"assets/assets/images/%25EC%2582%25B0%25EC%2597%2585%25EC%259A%25A9%25EC%2597%2590%25EC%2596%25B4%25EC%25BB%25A8.png": "ca796d225641e2ee97649cec615921f2",
"assets/assets/images/%25EC%2584%259C%25EB%259E%258D.png": "b57711d3be5d7c49b9659c1cbd8c4951",
"assets/assets/images/%25EC%2584%25A0%25EB%25B0%25981.png": "38999791f167fbc941c3eceb0e6b3b9b",
"assets/assets/images/%25EC%2584%25A0%25EB%25B0%25982.png": "f3361716cc00bc3a0c7a6c40829e73fa",
"assets/assets/images/%25EC%2584%25A0%25EB%25B0%25983.png": "cb17e8a06787320709ab693a2bbe9816",
"assets/assets/images/%25EC%2584%25A0%25EB%25B0%25984.png": "71b6ca708f07e6fd5eb5fad7152809f8",
"assets/assets/images/%25EC%2586%258C%25EC%25BC%2593.png": "568c1d68256e00f6b936daff58907629",
"assets/assets/images/%25EC%258B%25A4%25EB%2582%25B4%25EC%2582%25AC%25EB%258B%25A4%25EB%25A6%25AC%25EC%25B0%25A8.png": "ecf3fa9d078e51a9295d5382198cdd5d",
"assets/assets/images/%25EC%2597%2594%25EC%25A7%25842.png": "1cb38249ce5d4a0b45e8bbfad9a02d78",
"assets/assets/images/%25EC%2597%2598%25EB%25A6%25AC%25EB%25B2%25A0%25EC%259D%25B4%25ED%2584%25B0.png": "5f322ef5236c748fc3a25a049639e74b",
"assets/assets/images/%25EC%259A%25B4%25EB%25B0%2598%25EA%25B8%25B0.png": "8e60766c211039fabcb96527a22f9598",
"assets/assets/images/%25EC%25A1%25B0%25EB%25AA%25851.png": "de4b4f21b000d70de623405ddd1f303e",
"assets/assets/images/%25EC%25BB%25A8%25EB%25B2%25A0%25EC%259D%25B4%25EC%2596%25B4%25EB%25A1%25A4%25EB%259F%25AC1.png": "49a99b1272e37d4ceeee289acee3881f",
"assets/assets/images/%25EC%25BB%25A8%25EB%25B2%25A0%25EC%259D%25B4%25EC%2596%25B4%25EB%25A1%25A4%25EB%259F%25AC2.png": "e051d7de37de4797e459db785d000833",
"assets/assets/images/%25EC%25BB%25A8%25ED%2585%258C%25EC%259D%25B4%25EB%2584%2588.png": "28f1976320ec4b2c90bf70d9a1fadcff",
"assets/assets/images/%25EC%25BB%25A8%25ED%258A%25B8%25EB%25A1%25A4%25EB%259F%25AC.png": "8222b88182effa6651795c239b104101",
"assets/assets/images/%25EC%25BC%2580%25EC%259D%25B4%25EB%25B8%25941.png": "d0bbb97dc8a45fa7863d9d6c3b75ea1e",
"assets/assets/images/%25EC%25BC%2580%25EC%259D%25B4%25EB%25B8%25942.png": "add6304b657d5b0f1b5239ff2243ab40",
"assets/assets/images/%25ED%2583%2580%25EC%259D%25B4%25EC%2596%25B4.png": "38adbec0998dece4fe960d5735bcb09d",
"assets/assets/images/%25ED%258A%25B8%25EB%25A0%2588%25EC%259D%25B4%25EC%259A%25B4%25EB%25B0%2598%25EA%25B8%25B0.png": "0ec411dda3a2b7812f0c03c6d933c31d",
"assets/assets/images/%25ED%258A%25B8%25EB%25A0%2588%25EC%259D%25B41.png": "ebef186001ee2fe869d89959b5b4cb4a",
"assets/assets/images/%25ED%258A%25B8%25EB%25A0%2588%25EC%259D%25B42.png": "eafc050fbf02a6b224528b3012c27feb",
"assets/assets/images/%25ED%258A%25B8%25EB%25A0%2588%25EC%259D%25B43.png": "db501ac4f7dfdb83f28ec30882a7d8ed",
"assets/assets/images/%25ED%258C%258C%25EC%259D%25B4%25ED%2594%25841.png": "f358d1f20815d691682a261cc020261b",
"assets/assets/images/%25ED%2594%2584%25EB%25A1%259C%25ED%258E%25A0%25EB%259F%25AC.png": "f7784d823567747a0715d1e91d611bbd",
"assets/assets/images/air_conditioner.png": "7932dfdf3ed16e66de397593dab9a475",
"assets/assets/images/air_conditioner2.png": "01742df934790acc24a4992244d023da",
"assets/assets/images/air_conditioner3.png": "636261a9ad53f17e540c7dc745c36c8d",
"assets/assets/images/box.png": "aac7cc52401151327153b03341cf53ac",
"assets/assets/images/cable.png": "d0bbb97dc8a45fa7863d9d6c3b75ea1e",
"assets/assets/images/cable2.png": "add6304b657d5b0f1b5239ff2243ab40",
"assets/assets/images/container.png": "28f1976320ec4b2c90bf70d9a1fadcff",
"assets/assets/images/controller.png": "8222b88182effa6651795c239b104101",
"assets/assets/images/conveyor.png": "8e60766c211039fabcb96527a22f9598",
"assets/assets/images/conveyor_roller.png": "49a99b1272e37d4ceeee289acee3881f",
"assets/assets/images/conveyor_roller2.png": "e051d7de37de4797e459db785d000833",
"assets/assets/images/Crayon.png": "7932dfdf3ed16e66de397593dab9a475",
"assets/assets/images/creativia.png": "ce38344fe5e649e8c737265e332bf209",
"assets/assets/images/drawer.png": "b57711d3be5d7c49b9659c1cbd8c4951",
"assets/assets/images/drum.png": "f1ab682adcca5e254ee68dd3c4e42414",
"assets/assets/images/elevator.png": "5f322ef5236c748fc3a25a049639e74b",
"assets/assets/images/engine.png": "1cb38249ce5d4a0b45e8bbfad9a02d78",
"assets/assets/images/frame.png": "1340369f6aa0d8196d8a0cb03852d72b",
"assets/assets/images/frame_container.png": "a583bf69099eb1090368e405004d6a60",
"assets/assets/images/frame_work.png": "ef1a85f75f6cef29cc7adb15deafdad0",
"assets/assets/images/gas.png": "ea198a87d1a5505f5a3a7103b78dcb2e",
"assets/assets/images/industrial_air_conditioner.png": "ca796d225641e2ee97649cec615921f2",
"assets/assets/images/industrial_air_purifier.png": "a1f84358a13c02ad00b798e02f17a315",
"assets/assets/images/ladder_truck.png": "ecf3fa9d078e51a9295d5382198cdd5d",
"assets/assets/images/light.png": "de4b4f21b000d70de623405ddd1f303e",
"assets/assets/images/model1.png": "f625b257a858e1ed51000ab55743531d",
"assets/assets/images/model2.png": "6f4cc41e412ff974b3e1d4b617f7cd77",
"assets/assets/images/model3.png": "929feb33cf4cbfdfbeed1102bee39b51",
"assets/assets/images/model4.png": "116efbb309c5d634381a96e8dab4a09e",
"assets/assets/images/module.png": "a06dd5067e9fe5ffa98b78da858cafde",
"assets/assets/images/motor.png": "11f3bd2eecc030840c4489a6dd15ceca",
"assets/assets/images/motor2.png": "75a831102f829a5c2f738821440e5fdc",
"assets/assets/images/pipe.png": "f358d1f20815d691682a261cc020261b",
"assets/assets/images/process_equipment.png": "d8b3a0fca29a937a56e352bb12d1dab6",
"assets/assets/images/process_equipment2.png": "acfe12538a44f55f488de680663bc270",
"assets/assets/images/process_equipment3.png": "38b0da625171a2421ade5476ba03a1fd",
"assets/assets/images/propeller.png": "f7784d823567747a0715d1e91d611bbd",
"assets/assets/images/robotic_arm1.png": "6a84fa434a5c705b26dfa920f88e16e5",
"assets/assets/images/robotic_arm2.png": "fe55c3bfcc6c2aa6529cbbd77f863022",
"assets/assets/images/robotic_arm_stop.png": "fdc27494901bbd4ed3b90e0bb6deda2b",
"assets/assets/images/robot_arm_engine_process.png": "147bb845aeda4a8c8429d1339d67ceca",
"assets/assets/images/robot_arm_engine_process2.png": "8f87c8755241960f46cc36e9b13169be",
"assets/assets/images/robot_arm_engine_process3.png": "7c6cff5cec86fb6329248edcec04dfbe",
"assets/assets/images/robot_arm_exterior_process.png": "25ab32a938ae5ed4df0ce1d160ee01ba",
"assets/assets/images/rooftop_workspace.png": "87069234cc04c255a900feb15f4eea8f",
"assets/assets/images/shelf.png": "38999791f167fbc941c3eceb0e6b3b9b",
"assets/assets/images/shelf2.png": "f3361716cc00bc3a0c7a6c40829e73fa",
"assets/assets/images/shelf3.png": "cb17e8a06787320709ab693a2bbe9816",
"assets/assets/images/shelf4.png": "71b6ca708f07e6fd5eb5fad7152809f8",
"assets/assets/images/socket.png": "568c1d68256e00f6b936daff58907629",
"assets/assets/images/stair.png": "49d85eee9fe0ad6e7384c351944f9461",
"assets/assets/images/tire.png": "38adbec0998dece4fe960d5735bcb09d",
"assets/assets/images/tray.png": "ebef186001ee2fe869d89959b5b4cb4a",
"assets/assets/images/tray2.png": "eafc050fbf02a6b224528b3012c27feb",
"assets/assets/images/tray3.png": "db501ac4f7dfdb83f28ec30882a7d8ed",
"assets/assets/images/tray_carrier.png": "0ec411dda3a2b7812f0c03c6d933c31d",
"assets/FontManifest.json": "1c71ccfd529c5e0d30780acdfa00988f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/animation/loading1.json": "3148b7cee7f2fc3fb96c25699658eb05",
"assets/lib/imgs/1028x800.png": "4ef2b544e6ba44c03fcdd7746e5437e1",
"assets/lib/imgs/512x512.png": "e3b9c788f4e5111ef516f4e7c24b6eb0",
"assets/lib/imgs/background1.png": "e1e6339eacdaf10ea44eaa70af537bd2",
"assets/lib/imgs/background2.png": "54a70912a4312f0b1c40e3a02ea4633b",
"assets/lib/imgs/bluetooth.png": "96033a31223dbc7a39657362128a4b48",
"assets/lib/imgs/cryptocurrencies.png": "fbf91046689e6576336e5ff4de92becd",
"assets/lib/imgs/done.png": "9814bd706fef6256d9ec23e30a9a1cf1",
"assets/lib/imgs/ETH.png": "d85816480ddbd6e0a7ea8d5a3531d171",
"assets/lib/imgs/getStart.png": "2cd2cda23b98ab3da04e884937917446",
"assets/lib/imgs/income.png": "68997ae41c0711ef567ecc56ba941347",
"assets/lib/imgs/logoPW.png": "0ae6b88c0d33922cbca0806e56b81e23",
"assets/lib/imgs/metamask.png": "a62d646ddfe3dc4710adf7c2663a3dd0",
"assets/lib/imgs/MMAI.png": "37d16f2ffb82ee04867483684c822f53",
"assets/lib/imgs/MMaiCoin.png": "75cf763b4a662cd888991e9902f70aaa",
"assets/lib/imgs/progressPageBG.png": "54a70912a4312f0b1c40e3a02ea4633b",
"assets/lib/imgs/purewallet.png": "0ae6b88c0d33922cbca0806e56b81e23",
"assets/lib/imgs/PWLogoSquared.png": "7cab9e6836faf62a21247fba20ec2c9e",
"assets/lib/imgs/qrcode.png": "8622a2769dec239d429032d370cd7909",
"assets/lib/imgs/qrImage.png": "bba16da145e518f7439d4eefb3c7ad78",
"assets/lib/imgs/receive.png": "4ec1c49788bb3c43736589ab7abd074f",
"assets/lib/imgs/refresh.png": "4ab2f34ef9709bccdfed054d6ddd157e",
"assets/lib/imgs/splashimage.png": "39527152303e0a11d9bf5a4dd007c061",
"assets/lib/imgs/success.png": "bf4834d5383cf7a076eb36105c44221d",
"assets/lib/imgs/USDC.png": "c680739794af1338e5e08369eaf42337",
"assets/lib/imgs/USDT.png": "2997bd8c257010f68d6e7043dadc4378",
"assets/lib/imgs/wallet.png": "4802ee24f18502edc73157bc9823d855",
"assets/lib/imgs/wifi.png": "806a065e26e238bb004a02c4ecf40174",
"assets/NOTICES": "b0d63150cb20e59cff222764711ec68b",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0d63cd6e62c1ddda278f9adbfe344ef7",
"/": "0d63cd6e62c1ddda278f9adbfe344ef7",
"main.dart.js": "aab4cb14686144ead76c7f6cf4f27c3c",
"manifest.json": "0e18e239f304475026c5d0ab89ad7013",
"version.json": "07af1edab3d4ddb867173b660ca4b6ab"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
