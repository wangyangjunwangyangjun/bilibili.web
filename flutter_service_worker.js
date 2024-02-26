'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e07fa493c517c8fa20682bea176cb089",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "13622a3006790c0ee8514f19547097be",
"index.html": "22cfa39e91cba9ca0f9e620b18739ee2",
"/": "22cfa39e91cba9ca0f9e620b18739ee2",
"main.dart.js": "e7b4f8decd80468c54fdcdb0df2d2e4b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad71435ba51578f486f516341ff935a8",
"assets/AssetManifest.json": "b20d4ae30a2c48afa0af33bf95ec34b6",
"assets/NOTICES": "90931fb61a27eb2df7b4529e9b25fe0b",
"assets/FontManifest.json": "f74b39e70937fcb37a663130381aa7b6",
"assets/AssetManifest.bin.json": "f3884eea0e0072fd3877a9fc506c3b3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "29482697c8a0f2080f8dd21ef851fef1",
"assets/fonts/en.ttf": "090668ce6fd01f63935c640be1dea21f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/cn.ttf": "242a828d266472665bf6ad46819772eb",
"assets/assets/svg/topic.svg": "4046a9a5eb9911557316b4c24b36b204",
"assets/assets/rive/download.riv": "dd0c963470b337394c01bfbbdf2c2629",
"assets/assets/rive/switch.riv": "abd34efa041d3e77029c1a065c5b8acb",
"assets/assets/emoji/emojis.json": "f5eac3a32fd2aa09af2b5a72681d7fbe",
"assets/assets/html/jquery-latest.js": "315136162c3a659832e0f3bc79377315",
"assets/assets/html/pako.js": "f3c0ea3ea23bd40fdea27168c592ca25",
"assets/assets/html/live_dan_mu.html": "41a0efb05970dcc795f3b7c336e41a34",
"assets/assets/image/canvas/avatar.png": "3f38204425fa1d2b9e9d331356ed0fba",
"assets/assets/image/canvas/rain.png": "6a3002dc12d14154b364037d193a7534",
"assets/assets/image/wechat/add.png": "c3f0e7ff513f8fffeecb40296dbd2adc",
"assets/assets/image/wechat/contacts_unselected.png": "65935ef31e1e339f738e4265909f6518",
"assets/assets/image/wechat/emoji.png": "896c0c42969a99332f45ff3f973698c0",
"assets/assets/image/wechat/package.png": "b64ea52e504343eb6e6bd0644702b7a4",
"assets/assets/image/wechat/mine_selected.png": "3a18fd2b63042f862338c318bac56e22",
"assets/assets/image/wechat/service.png": "567440e896445bc0ac2234f61f49d83e",
"assets/assets/image/wechat/wechat_main_unselected.png": "0a4cd2bb2234a994fecf33a4b2de427c",
"assets/assets/image/wechat/friend_circle.png": "2a6fd469632b899fd38b05fd3f9ebf42",
"assets/assets/image/wechat/search.png": "bc0fcd73ad4634629140b0019e312496",
"assets/assets/image/wechat/mine_unselected.png": "350f8f6cf97c8c3c9e560472c2543d0f",
"assets/assets/image/wechat/explore_selected.png": "74163f51012715ad64891db067f65b08",
"assets/assets/image/wechat/explore_unselected.png": "b0408103d5ad64561c3bccb5a13caa31",
"assets/assets/image/wechat/collection.png": "2568a950486790d275922914b4ba2788",
"assets/assets/image/wechat/contacts_selected.png": "b780e2dbf63ff7cd5b7947d1f17824d0",
"assets/assets/image/wechat/wechat_main_selected.png": "e84f6e15420bf37801bcbf098daed296",
"assets/assets/image/wechat/setting.png": "fbdfce07406c95855be58184b65e04b1",
"assets/assets/image/icon/video_call.png": "881f56e436a707e9f5e0f747dd0cfcba",
"assets/assets/image/icon/replay.png": "825b6425c072254f7eff56bfda38630a",
"assets/assets/image/icon/bilibili_benefit.png": "87d24d0f6ac3e91426987b73b51422eb",
"assets/assets/image/icon/ic_danmu_white.png": "f1319bab3e41f7d6770d55198268e2bc",
"assets/assets/image/icon/img_holder_pay_success.png": "d39384deb3c4a978e9b3c00a1504e058",
"assets/assets/image/icon/danmu_close.png": "fae7a1f359bed97527cf0a6bfda5d96a",
"assets/assets/image/icon/bili_socialize_generic.png": "0e1d75e534c43f27a14bf95f7e4caaa1",
"assets/assets/image/icon/back_custom.png": "23459e09bad139d540d8eb525f5e168b",
"assets/assets/image/icon/coin_custom.png": "d9f8668ce6485c3f7ba7be564793e1f9",
"assets/assets/image/icon/clothes.png": "038f7476d237b06672013b9f1324063c",
"assets/assets/image/icon/ar.png": "a63fae5cb68c4340015a14e6a15e22c8",
"assets/assets/image/icon/volume0.png": "7883a29f16c2b7d378d92b4aea1e1aa8",
"assets/assets/image/icon/ic_video_download_stop.png": "f3dd898f660bef94b95adf367f97835a",
"assets/assets/image/icon/flag.png": "e02ceada2f80f579cbe2cc266d5cdba1",
"assets/assets/image/icon/22_close.png": "0efad8c4437cbb2e39822b65d3157e8b",
"assets/assets/image/icon/ic_lv1_large.png": "6d38a3bb862a0963fb643f5d6aee7de5",
"assets/assets/image/icon/biligame_mine_gift_ic.png": "f1f6736f7b3734e91d16edf2208b60d6",
"assets/assets/image/icon/teenager_mode.png": "72c10cf8b35175a0f417927bbf4dad89",
"assets/assets/image/icon/circle_blue.png": "6340329438e3820a629f2abc7b4d869c",
"assets/assets/image/icon/coin_dark.png": "c703a40ef01c359361273169fd589dd5",
"assets/assets/image/icon/ic_upper_video_default.png": "a75daa2989c967168c4acd7b7cca3f9a",
"assets/assets/image/icon/play_custom02.png": "fe9a59fc61e78cf6fb40c137864af77e",
"assets/assets/image/icon/bili_socialize_dynamic.png": "85075e9dd334953a24556b526df70948",
"assets/assets/image/icon/wechat_location.png": "de97f93afe3a9a583413bbe4146e126a",
"assets/assets/image/icon/volume.png": "23dfc4867ef5ea30a84afb951afbf9c8",
"assets/assets/image/icon/emoji.png": "a51cf9bd51c953df8c585b50ab51de86",
"assets/assets/image/icon/love_dark.png": "b25f99c3353b4b8fe37e4c3ba137df0f",
"assets/assets/image/icon/more_custom.png": "c62eaccb1270915e066659d5ac7292e5",
"assets/assets/image/icon/hot_activity.png": "580b564026a5bd2a1c77b77df57dfe09",
"assets/assets/image/icon/host_activity.png": "bb0db4d2b3378c2453d32692abf612c7",
"assets/assets/image/icon/recommand_award.png": "a734f045f8a5111c4c5b5150efd323aa",
"assets/assets/image/icon/ic_recommend_avatar.png": "ddb0f9ffb7b714465c6a652d4d289c3c",
"assets/assets/image/icon/host_management.png": "7406e9ae5e8f591135b5d2148400eb50",
"assets/assets/image/icon/live_more_custom.png": "3ccc25b0b846a4836a45c72c6b3e438d",
"assets/assets/image/icon/award_activity.png": "e8e4e2b6362d4a7ebcf645b86307c44e",
"assets/assets/image/icon/save_script.png": "cf05d2f4609b835bf5c7a405f333f13f",
"assets/assets/image/icon/settings.png": "10ce88eefa8104cb7816ab1fece511fb",
"assets/assets/image/icon/22_open.png": "72c0087723834c043d5510302ac2657e",
"assets/assets/image/icon/limited_welfare.png": "565615185dd129ead596516af4c902e2",
"assets/assets/image/icon/ic_danmu.png": "84179dfd2922645731aa20789b19ace4",
"assets/assets/image/icon/play_custom.png": "7ee04a5c2e89a05da1dab4c0d979cbce",
"assets/assets/image/icon/ic_lv7_large.png": "9fdbac74c187385f3eb337a2c7cb9894",
"assets/assets/image/icon/dislike.png": "4adeab51c6a2ff0f7ce01c83bc69b582",
"assets/assets/image/icon/icon_list_player.png": "022c6bd873d281395b31d35450ce774e",
"assets/assets/image/icon/dark_model.png": "947b9eb739b8cc4612444215e2e24bf7",
"assets/assets/image/icon/mini_window_custom.png": "07fe37be1921dc5515dca6af808a70b2",
"assets/assets/image/icon/speaking.png": "00faaec9cc62d338213f0cb296fba130",
"assets/assets/image/icon/id_card.png": "2acf18cc83b153f71acc1bb65093297e",
"assets/assets/image/icon/enterprise.png": "c3af2a13aa07e7d594d0f1f13e986041",
"assets/assets/image/icon/more_dark.png": "4aebc09dec58330ad6d31635285126ba",
"assets/assets/image/icon/collect_dark.png": "8aa502aa22adc6bd66ee201f91d3c2a2",
"assets/assets/image/icon/my_game.png": "7bdeb17026793df722e7c82695e6e742",
"assets/assets/image/icon/mine_selected.png": "9d7d98996efef92e01a024a2653f9aa2",
"assets/assets/image/icon/remark_custom02.png": "cece7374351bdb392cb45909dc7e73a8",
"assets/assets/image/icon/voice_input.png": "096c47b541b09341155b2f14de62bdc2",
"assets/assets/image/icon/my_walt.png": "40aa30c90ef61cdb9c70c030f5157c27",
"assets/assets/image/icon/slider_cursor.png": "0c325907e7c2b808569aa80c7602b6b1",
"assets/assets/image/icon/seen.png": "4ab74d1d0730563c0329f98c53a5f311",
"assets/assets/image/icon/teens_mode.png": "8649ac9e6b9f1392f413a58d214dba5b",
"assets/assets/image/icon/love_custom.png": "b25f99c3353b4b8fe37e4c3ba137df0f",
"assets/assets/image/icon/loading_video_failed.png": "3a694a89b0be3349a85d1646179272c0",
"assets/assets/image/icon/collect_custom.png": "5ac13752707fd2fe2c111fd5c074c35b",
"assets/assets/image/icon/file.png": "be9ab9fb9eb7de4480b15e74fc41693b",
"assets/assets/image/icon/history_record.png": "d075c8d3eff85e96673899648c518a3f",
"assets/assets/image/icon/vip_mail_center.png": "3fc8aeac4885418a4afe806d498dd263",
"assets/assets/image/icon/pie_icon01.png": "05f8453af2f6ac04c4c43dc2df64ea0d",
"assets/assets/image/icon/dynamic_custom.png": "e9967686088d488eeb1cd5ca14e92ad2",
"assets/assets/image/icon/video_replay.png": "72b6b38bbb3362e17d622d653b67522e",
"assets/assets/image/icon/uper_custom.png": "0559cbb3e782523d4c0d1c323398eeaa",
"assets/assets/image/icon/gas_station.png": "f8e05e8f319ea05cf6429b7bb4b091f9",
"assets/assets/image/icon/bili_socialize_qq_chat.png": "16fcbe6e8fc5565e50b3ec9b4a0ee2c7",
"assets/assets/image/icon/search_dark.png": "9280f04c1c3dce78f0d4f093a518920b",
"assets/assets/image/icon/ic_lv8.png": "2db417b94e4070e9f8b3d91db08a5637",
"assets/assets/image/icon/ploading.gif": "9132e17f6a574795490e17ddc58c0e5e",
"assets/assets/image/icon/pie_icon03.png": "8a212f7d96dc5220529977eab83cf8bb",
"assets/assets/image/icon/ic_video_entry_close.png": "7de8a9464253b987aa60bedae87d885e",
"assets/assets/image/icon/bili_player_play_can_play.png": "45b5a122660c99468276e4d3383e7bee",
"assets/assets/image/icon/holder_loading.png": "702405b14a1e76bffcccbd287df80b37",
"assets/assets/image/icon/dislike_dark.png": "c948d30efdb7b65f1bddc6d62b2e8784",
"assets/assets/image/icon/ic_video_download_complete.png": "853f19ef7f84dbb27ecd6ee161bad3d7",
"assets/assets/image/icon/more_block.png": "dfe2bfa6f878a5820b40602767264ec6",
"assets/assets/image/icon/life.png": "29683f2546345576a6f06000fc53fe82",
"assets/assets/image/icon/ic_video_download_processing.png": "ff274452c7e372342ef98941f235fb71",
"assets/assets/image/icon/shopping.png": "9e372b97f1209572095733c29fe97f7a",
"assets/assets/image/icon/clear_search.png": "e17484aebef3f3d833dd40a17a888725",
"assets/assets/image/icon/file_management.png": "5ce4c3ebf2e46fe9a584539d8082e1eb",
"assets/assets/image/icon/pie_icon02.png": "159132646199b4a1092e8db0d7095b82",
"assets/assets/image/icon/music.png": "be503ea61a0668823bdc149941ebc367",
"assets/assets/image/icon/ic_lv9.png": "8fc9fd0c9ead268eed18d959459f7b9b",
"assets/assets/image/icon/ic_lv0_large.png": "0b6bbe2c27b68d89357ae3670558fba4",
"assets/assets/image/icon/game_rank.png": "e9748628cc079c2fd739788763c8e6f2",
"assets/assets/image/icon/exit_full_screen.png": "302116961b7c99c54ddaa47ca1e2f761",
"assets/assets/image/icon/share_dark.png": "4a6ddbf7ff0d266c6d16ca6270d66d01",
"assets/assets/image/icon/video_more_custom.png": "d19ef8f5b728a2b404e437d173e1955d",
"assets/assets/image/icon/video_more.png": "94b5fc43a893054bbefc9b90a129cfe2",
"assets/assets/image/icon/eletric_benefit.png": "fc03ec8764b27cc770f17670d1c030da",
"assets/assets/image/icon/game_center.png": "a398b8923d1a85806ce8a7506394d5b1",
"assets/assets/image/icon/bilibili.png": "4874bb4bff24bf39a7814be1c2bf7c1b",
"assets/assets/image/icon/ic_video_download_error.png": "936f20644abf787b1fc2e5706a543d66",
"assets/assets/image/icon/reply.png": "fc20a09bd091553d2b12536ff470d0d0",
"assets/assets/image/icon/33_open.png": "43a09438132320f6d112900afe6e4cc3",
"assets/assets/image/icon/vip_selected.png": "ede573e0a15a886d10d8c0eb64c839fe",
"assets/assets/image/icon/face.png": "a16f3a6e71791ecdfce0b2e7a9e0ce7c",
"assets/assets/image/icon/abc_btn_radio_to_on_mtrl_000.png": "33cf4bfd82b9ad23db096839169954fa",
"assets/assets/image/icon/uper_dark.png": "44f5f1a681747fc6f9001b9ac960df71",
"assets/assets/image/icon/bili_socialize_wx_moment.png": "55e02e0344e8631f5bf2281fdcf7c531",
"assets/assets/image/icon/ic_filter.png": "79f42c45cebde84e4ad7dc3547e1b7b7",
"assets/assets/image/icon/mine_custom.png": "e234b19678563ea28a08fda0c4013248",
"assets/assets/image/icon/bili_socialize_qq_zone.png": "d3d48f3bf3b6667d6018d72697fc02ab",
"assets/assets/image/icon/ic_lv6_large.png": "68815c2d78dfbab1a840a4414a779199",
"assets/assets/image/icon/bili_socialize_copy.png": "a7b7e8913edffc1b0d140e8d0b774fb2",
"assets/assets/image/icon/like.png": "d517cb75d1b34d04d3c65238ae2453e0",
"assets/assets/image/icon/key_board.png": "23793cfca437ae3e995ca632a6475064",
"assets/assets/image/icon/expanded_custom.png": "4954f17cb5d07d1681c2474b4888eaef",
"assets/assets/image/icon/ban_custom.png": "8b7eb56dc2fd5813321172556c83485e",
"assets/assets/image/icon/full_custom.png": "aac29a0f0db1b6ed5b983827e275b0ca",
"assets/assets/image/icon/background.jpg": "bf2e5ec60a86aaad92abd1794075009c",
"assets/assets/image/icon/pie_icon04.png": "fc083d5969788665c9d729947d6c9e16",
"assets/assets/image/icon/dm.png": "1f9b904c8d14c440ee2c1339e2b699a2",
"assets/assets/image/icon/abc_btn_radio_to_on_mtrl_015.png": "3f4d2053c0fc197f4cc974a1b6afaae7",
"assets/assets/image/icon/live_data.png": "1e760efca5d86f6dd7365f13ea75999b",
"assets/assets/image/icon/sexy_clothes.png": "5622f1710dc8a49e582ace9f95cfe9fe",
"assets/assets/image/icon/ic_lv2.png": "a2cf6faf0f95e015b5f548b63efd2d05",
"assets/assets/image/icon/heart.png": "34dae2fa976d2d49eba3c25e83da899d",
"assets/assets/image/icon/add_more_button.png": "c695c8739225d2db281a24e0c653eceb",
"assets/assets/image/icon/play_video_custom.png": "fc536426002bc9aa3e1bbed33363813c",
"assets/assets/image/icon/right_chat.png": "1a92a7917382d085e5e5cca9479b5e97",
"assets/assets/image/icon/photo.png": "178f8930af9e69bf650bc93a57c10127",
"assets/assets/image/icon/find_game.png": "d00a9506a5c192b3ee20fa1b7733ed66",
"assets/assets/image/icon/search_custom.png": "44295b0dfc64f0422bf81586238076ef",
"assets/assets/image/icon/up_gray.png": "77f329412f7001f2bf2d00710e7ff607",
"assets/assets/image/icon/progress_bar.png": "37110e7829dcac4b2ade7b5cc027e503",
"assets/assets/image/icon/create_first_page.png": "12e2b3a53fc33400b33bb008e56d755d",
"assets/assets/image/icon/ic_follow_dec.png": "1794f39755bce60abd2be5c874aefef1",
"assets/assets/image/icon/charts_custom.png": "fcc488503618bd325bd5c42abc99e3cc",
"assets/assets/image/icon/ic_lv3.png": "dff24f53e581d7cb51f577b39478c19b",
"assets/assets/image/icon/ic_lv3_large.png": "4d33bdc37c793d946b895f8c40e2f3bb",
"assets/assets/image/icon/brightness.png": "d7833504c9faf122ae33723676786cbc",
"assets/assets/image/icon/ic_lv1.png": "f49325aba9bba014cd81db65fc0c3396",
"assets/assets/image/icon/ic_arrow_up.png": "bf952014f534b516ed312a2a02c589ed",
"assets/assets/image/icon/vip_custom.png": "c682a8d9a4a31f10589ede610379265e",
"assets/assets/image/icon/forward.png": "2376797d4833aac9ce1844c78d6dc8b7",
"assets/assets/image/icon/my_profile.png": "b68e69d6157500d9c8cd2ef4d70d3fe0",
"assets/assets/image/icon/location_gray.png": "951a2e678c8d3bed6696476d40468e76",
"assets/assets/image/icon/bilibili_connect.png": "72887381b027ec7207c8bd13f1d3a1f6",
"assets/assets/image/icon/ic_lv0.png": "51d0ca6adb5aace55773fac710fe790f",
"assets/assets/image/icon/mail_custom.png": "ca4864dfd8c7abb1015cb9244e46980e",
"assets/assets/image/icon/my_collection.png": "7703dde15d47dee9ff6f58e64c278b11",
"assets/assets/image/icon/ic_lv4.png": "130cee79747e6637e9e8680e160b0313",
"assets/assets/image/icon/bili_socialize_sina.png": "d8801248bebeedfc102c53cc01b18aa5",
"assets/assets/image/icon/bplayer_remote.png": "b3e8955a558dc1d1148bafd40e9f0279",
"assets/assets/image/icon/small_window.png": "c0970cd01184c1d81f171d7dc5e9c637",
"assets/assets/image/icon/view_gray.png": "55f5b116b2dcf0884dfc69a9e5832626",
"assets/assets/image/icon/more_android_light.png": "b76d4ba772cffcb0f2e609de2ed2fa82",
"assets/assets/image/icon/comment.png": "fff2afc498d9093ed5bc8c7cc646a9d3",
"assets/assets/image/icon/ic_lv8_large.png": "e6a123c25dbd9d370bfc9a067450eee4",
"assets/assets/image/icon/like_custom.png": "ebacdffb6d9c7cbebb74424d2cc7b7e3",
"assets/assets/image/icon/tv_play_custom.png": "47bd7d14204aae1c16d9701b694100ec",
"assets/assets/image/icon/schedule.png": "c923e0ba3395a8880c8ca922dfb32151",
"assets/assets/image/icon/ic_lv5.png": "70e0f46c241106dadb417d9604cb8181",
"assets/assets/image/icon/gift.png": "f1f6736f7b3734e91d16edf2208b60d6",
"assets/assets/image/icon/free_flow_service.png": "c85c367b4382b4cd616da4f3e052d14e",
"assets/assets/image/icon/share.png": "236183e8da61db88f6884f729ebea9a4",
"assets/assets/image/icon/ic_lv7.png": "ecf56a4bab5734c97f7d6b829196a88c",
"assets/assets/image/icon/mail_dark.png": "438d1bc2317871402687e2906db4a854",
"assets/assets/image/icon/play_dark.png": "7ee04a5c2e89a05da1dab4c0d979cbce",
"assets/assets/image/icon/more_black.png": "67a547db94cb8a2236ade66a9e8383a9",
"assets/assets/image/icon/listen_video.png": "9cf16fe7bd186702b115159444ca8514",
"assets/assets/image/icon/location.png": "20e5ad0131cbee1e7071573fed48e828",
"assets/assets/image/icon/ic_staff_group_more.png": "71175cbf85e13edc53b1130f4e2dd4c8",
"assets/assets/image/icon/ic_lv5_large.png": "95cd4fe5745871fd941fd6661d289565",
"assets/assets/image/icon/latest_goods.png": "4103628532393a3851acffc9c290196a",
"assets/assets/image/icon/ic_lv6.png": "3382f675eefc9f520c4874552f13177f",
"assets/assets/image/icon/class_mode.png": "e03cefaca7cedf4945f5644dcf476e77",
"assets/assets/image/icon/app_logo.png": "eb9bf993d328b8eee27fc3ea703fec9c",
"assets/assets/image/icon/share_custom.png": "81c264e580f6e83e9edace70c93090dc",
"assets/assets/image/icon/danmu_open.png": "d7669d024018d9338531f6a337243a1c",
"assets/assets/image/icon/home_custom.png": "b762ab8da8457da5178584c953d013e2",
"assets/assets/image/icon/charts_selected.png": "b5a249b822a10d72056f9534a82c95a1",
"assets/assets/image/icon/query.png": "8fcdb03e7ba72b154ddc5bcb16dbdce8",
"assets/assets/image/icon/ic_arrow_down.png": "7e7a4091ddb6301fd672cd83203e531e",
"assets/assets/image/icon/online.png": "56477a22b2e32b4185375408cae4656a",
"assets/assets/image/icon/education.png": "3756fe10a4a769626798647ad628f8b8",
"assets/assets/image/icon/home_selected.png": "7ea4aab70bfd3df03545e5de94fa4af2",
"assets/assets/image/icon/ic_lv2_large.png": "9502e69f87ebf575ebeaadae26f14e1f",
"assets/assets/image/icon/my_class.png": "95661f2339df121f66bc19d0571d1ef4",
"assets/assets/image/icon/bili_player_back_button.png": "f5bc4c327954d4827b9dd7e2db393406",
"assets/assets/image/icon/more.png": "b77bd211e3c9032951e57a7e39f24629",
"assets/assets/image/icon/video_home.png": "057b0eb2b2b9be7f9c8123d7b3699c4c",
"assets/assets/image/icon/love.png": "1d607bc73899ecb4d2b88589937ae5f1",
"assets/assets/image/icon/bili_socialize_wx_chat.png": "3bdfbb8589ca79c3bd4ae4da51cad358",
"assets/assets/image/icon/game_dark.png": "3910642257bb0327d5c6f186f0844d7d",
"assets/assets/image/icon/publish.png": "5928b8989b6e0d6004c946552dee9670",
"assets/assets/image/icon/offline_cache.png": "6c61296b01b403d58ff257fdd9630568",
"assets/assets/image/icon/dislike_custom.png": "4f649944de918694c0cc981408964fb5",
"assets/assets/image/icon/red_package.png": "9068e354ada75deb8b23f1c58cc2ceb9",
"assets/assets/image/icon/unLogin.png": "465f0991a6a10cc59b91aebcc66b4fc5",
"assets/assets/image/icon/bili_socialize_im.png": "1942a60219b62be3a1f357c3724d09b9",
"assets/assets/image/icon/talk_center.png": "6e9043aaa0a80db795559c9af75b9942",
"assets/assets/image/icon/video_loading.gif": "b3e277665dbc673cccb7ebdef215d157",
"assets/assets/image/icon/bili_player_play_can_pause.png": "30b6742b073d4c1f24ab6204fc8754cb",
"assets/assets/image/icon/add_custom.png": "f937b5fc3f39c262397760ca40c45071",
"assets/assets/image/icon/broadcast.png": "88953409fa85b2fe0c27ad8d0e3d28f1",
"assets/assets/image/icon/my_live.png": "0b1f42b8071626b03f7ba9b77ddfd055",
"assets/assets/image/icon/expanded_dark.png": "9c62841d296bf98cedaf6cc7b1ec292a",
"assets/assets/image/icon/ic_play_video_white.png": "bad92ce57f595511d42c903e0fbef60a",
"assets/assets/image/icon/game_custom.png": "a48bf97db71d4ff8ceff227bcfccebdb",
"assets/assets/image/icon/ic_lv9_large.png": "6052138c300f0ddc027d12e0ed5be30c",
"assets/assets/image/icon/ic_vote_common.png": "0d81118a0962affcbaf45a94cafc678d",
"assets/assets/image/icon/my_order.png": "0c5beee5979f13bbbbb08df7c3e5a0e9",
"assets/assets/image/icon/video_player_more_custom.png": "c69671531eea2fdf8f7b9e17cd50d97a",
"assets/assets/image/icon/scan.png": "ee00afe0f376ba970006941870bf8cc5",
"assets/assets/image/icon/mini_window_close.png": "61ed77c6380f4fd8e991b6f0d74ef06b",
"assets/assets/image/icon/next_time_watch.png": "34727fb0fc68c2e9fff0807373830bba",
"assets/assets/image/icon/take_photo.png": "8377d8a64a1ef7fe7aa0f4ffb78374ec",
"assets/assets/image/icon/photo_gallery.png": "acd99f743a90266a3a73d0d903582122",
"assets/assets/image/icon/33_close.png": "eea03c39e6bb9d4b0b262150f07e9c3f",
"assets/assets/image/icon/dynamic_selected.png": "dafecafd8e8049c8b2de2c39a2728a0d",
"assets/assets/image/icon/round_add.png": "a913f17321aff02b0b5ed6a6b89999af",
"assets/assets/image/icon/my_favor.png": "c9d394e9aeb896d135433899c476ca41",
"assets/assets/image/icon/Contact_service.png": "c7948cac5b02b16ce1abe88eb173a345",
"assets/assets/image/icon/ic_lv4_large.png": "4172863e21410432f94d93ef76dde97d",
"assets/assets/json/search_result.json": "73e88c752e8f0e150d581556a50488e6",
"assets/assets/json/mall_search.json": "56cd2d08d6a49c50e16047c9af8f3967",
"assets/assets/json/live_room_stream.json": "8f0913cd9ad399fcf52cc6adeb094b1c",
"assets/assets/json/web_dynamic_fees.json": "573a137deaed166670fc192d20be3dd2",
"assets/assets/json/search.json": "8294472a60497c559a8198518c38b8e4",
"assets/assets/json/live.json": "5a528017524ebc86eca4d8bf73f9c0cf",
"assets/assets/json/pgc_rank.json": "5655626b3a9d8019674a373ed9576783",
"assets/assets/json/space_navnum.json": "56506dc3d506fc149670bc7f682e3ab0",
"assets/assets/json/relation_stat.json": "e32a89861d97f14ec457305509752f70",
"assets/assets/json/big_data02.json": "919fad49d2e45686bd02fbfc2e014c16",
"assets/assets/json/test.json": "736b15808deb7fd0ce461ce3c911b09b",
"assets/assets/json/info_by_room.json": "3599dca1db5dc2d2cb669939f1eb32c9",
"assets/assets/json/account_mine.json": "2e86d5c230725101f096a15704bbf6d4",
"assets/assets/json/ticket_project_listv2.json": "eefb6a3a4e482b0268471973f73fa25f",
"assets/assets/json/ticket_project_list.json": "d66861b23bcc84b10c7d5dab243c82d0",
"assets/assets/json/xlive_app-interface_v2_index_feed_model.json": "aaba8e033e16737b662d0f48cd8639a9",
"assets/assets/json/banggumi.json": "4d282886997e5452da3643ca9fd20618",
"assets/assets/json/pgc_timeline.json": "591a9db4ea91b5cce4fa6eb394d4959d",
"assets/assets/json/space_acc_info.json": "2db2c74c424d3792ee9680f077b7f715",
"assets/assets/json/tag_archive_tag.json": "b255fcc87f47e49980e4bcd7e2601a95",
"assets/assets/json/video_reply.json": "e329706b3e50e3e46ed2b76714796d73",
"assets/assets/json/popular_series_one.json": "0bbb7b90f17b170384e98b7fadd6ab22",
"assets/assets/json/video.json": "3328e9a85426c90fe14b3a23b9de7f95",
"assets/assets/json/video_view.json": "935c4d1563d17e3eac9eeb1d38f5b4e0",
"assets/assets/json/big_data.json": "232e1ee07a1177d9b8bbf9f2dcbb56be",
"assets/assets/json/archive_related.json": "abd1a60b3cb459ab5ea32db20636bf07",
"assets/assets/json/reply.json": "c45e1a330073836f59023c45e03ffd49",
"assets/assets/lottie/LottieLogo1.json": "07e6d1f37a8ff5a69e540ee85d2fb6e3",
"assets/assets/lottie/lottieLike.json": "363dd6c66c2fc57e3b1a3a18fbc80a3f",
"assets/assets/rsa_key/rsa_private_key.pem": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/rsa_key/rsa_public_key.pem": "91f2b1a508b7a7cc3ef435140dbe29e8",
"assets/assets/flare/favorite.flr": "a8fd5fe4a547446548460e7b45ee2cf4",
"assets/assets/flare/smiley_switch.flr": "3d6b005663d51cdaddab336ca726d9df",
"assets/assets/flare/penguin.flr": "597fe8b23d74cb9c77ef6d7b456e2259",
"assets/assets/flare/filip.flr": "5051aaf6e8829b512f89bbc83b5a7b9a",
"assets/assets/flare/animals.flr": "5673521ad4418d88ec893a0d2c89df71",
"assets/assets/realm/default.realm": "5dd79de4d8fc472a8b010b97f3c24982",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
