/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "934c552d6e86d5ab7fd228218c967c9d"
  },
  {
    "url": "assets/css/0.styles.5e959126.css",
    "revision": "f7eb1f66bbc86dc3456f7de8c1e3e8ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e59f6636.js",
    "revision": "361089da4c38d4c7bc7b7b1d9b51c25d"
  },
  {
    "url": "assets/js/11.18084a50.js",
    "revision": "f21c1e055bccb05b96f38777d71bec7b"
  },
  {
    "url": "assets/js/12.51af7fee.js",
    "revision": "3298b79c20c3b963c592c71627453c51"
  },
  {
    "url": "assets/js/13.1acd7bc0.js",
    "revision": "c99fb043e49a6be097d2a229cc53bbf7"
  },
  {
    "url": "assets/js/14.5ede1d83.js",
    "revision": "38ead5768a361bdec803b77e6cbc7ca5"
  },
  {
    "url": "assets/js/15.27c63b40.js",
    "revision": "e51911346cc1c0905e24043eb89967ab"
  },
  {
    "url": "assets/js/16.b8638cae.js",
    "revision": "83610be6a6ce492c8d2bdc97db244ba2"
  },
  {
    "url": "assets/js/17.100fd529.js",
    "revision": "e25d05bb02101f87df1262c1b2bb5488"
  },
  {
    "url": "assets/js/18.4bb0d67c.js",
    "revision": "5970d704d639d43edf89430332d615ff"
  },
  {
    "url": "assets/js/19.1c5750ca.js",
    "revision": "f72c4c2b97c63410c616ad7eed22b526"
  },
  {
    "url": "assets/js/20.64b984ad.js",
    "revision": "38a16aa8f41efd513cb9d913d09ddba0"
  },
  {
    "url": "assets/js/21.1e8fe2c2.js",
    "revision": "b47b935d0ec3177cefa1f01a77e33360"
  },
  {
    "url": "assets/js/22.f3e42657.js",
    "revision": "84fff5a5e5751c1440cadd25ee8e7525"
  },
  {
    "url": "assets/js/23.0334924b.js",
    "revision": "2a1dde375d98ecb06ef466b179008dba"
  },
  {
    "url": "assets/js/24.56287581.js",
    "revision": "e6d8b7e2412372e5741ba2fc8178866d"
  },
  {
    "url": "assets/js/25.c9a55e83.js",
    "revision": "70bd6d4cf7d239b035c0cce544174822"
  },
  {
    "url": "assets/js/26.4f62b3b1.js",
    "revision": "f38edb32b147c2a46c03cf798cbd7c92"
  },
  {
    "url": "assets/js/27.c64b3efa.js",
    "revision": "a9c270fd0a6795e33982d6313e5f09aa"
  },
  {
    "url": "assets/js/28.2cb1d878.js",
    "revision": "0d6fde73c5b2646400cddf0d3df62d6e"
  },
  {
    "url": "assets/js/29.2a7ab6c3.js",
    "revision": "71d0cdb71fa40279112ea2f4b8bfc58d"
  },
  {
    "url": "assets/js/30.491ca7ca.js",
    "revision": "674a631fea72e5144be19cd1eee1da35"
  },
  {
    "url": "assets/js/31.aa3cd31a.js",
    "revision": "ced1b5acec5aea0f6478b6e6ec9c4d6e"
  },
  {
    "url": "assets/js/32.b51be829.js",
    "revision": "30f686c8d77a5f61f049c5ff63f20c6a"
  },
  {
    "url": "assets/js/33.8d793728.js",
    "revision": "ebb25f616df8877c8b4d987bad61f12a"
  },
  {
    "url": "assets/js/34.4c2a5a0e.js",
    "revision": "55440601a3a864256fda3e126ab796f2"
  },
  {
    "url": "assets/js/35.7d8f746e.js",
    "revision": "f84f7ed3d614a53deec1421db92b8a5e"
  },
  {
    "url": "assets/js/36.83142024.js",
    "revision": "b98a93892aa139654686ddbd63c67b1c"
  },
  {
    "url": "assets/js/37.d1d1ff88.js",
    "revision": "1bf588a610d95c06e5a09c65ec88d3d0"
  },
  {
    "url": "assets/js/38.089646a7.js",
    "revision": "4a00c09c9081db84772f1e95699f3963"
  },
  {
    "url": "assets/js/39.64ac2641.js",
    "revision": "88e7f97e802a9a326e9a991fac147025"
  },
  {
    "url": "assets/js/4.0e309b48.js",
    "revision": "76954a78e5d6821b7f74866174b48921"
  },
  {
    "url": "assets/js/40.13a9ba08.js",
    "revision": "2df739ab4e20074190fff3ca5c53b213"
  },
  {
    "url": "assets/js/41.b0742315.js",
    "revision": "37b685b86e9a47d9123a0e6686e46920"
  },
  {
    "url": "assets/js/42.df1cfb58.js",
    "revision": "b1561add6800a1d12c44ca88bf900965"
  },
  {
    "url": "assets/js/43.0e3e7e31.js",
    "revision": "7d9ad48d0cfce5208c34398490b6591f"
  },
  {
    "url": "assets/js/44.5d159b70.js",
    "revision": "a7ca4c77d3aefd4c954eef374eb6978f"
  },
  {
    "url": "assets/js/45.19f5ba4c.js",
    "revision": "dad6b7f6eeace73c65edefd8659443c5"
  },
  {
    "url": "assets/js/46.68f26138.js",
    "revision": "632f9c6e14213a661ed63c2f40db5768"
  },
  {
    "url": "assets/js/47.f50e6879.js",
    "revision": "c533981ec349a756d8cdf70800191aae"
  },
  {
    "url": "assets/js/48.42218557.js",
    "revision": "1de328a700ca4d0e705753064c90601c"
  },
  {
    "url": "assets/js/49.f17b4e77.js",
    "revision": "28834d678b34f744ba71c61c3fa1a4e8"
  },
  {
    "url": "assets/js/5.f1c043bd.js",
    "revision": "5660892119d6fbef761f2d199ab22eb4"
  },
  {
    "url": "assets/js/50.e7bd40b3.js",
    "revision": "024a852cc77bbe110c2dc59f63b184bb"
  },
  {
    "url": "assets/js/51.dbca24cf.js",
    "revision": "3e57fd0c1473020d17d0f9c0484e172a"
  },
  {
    "url": "assets/js/52.7f782fdf.js",
    "revision": "21b801939d24781571ddea42ad1d0cee"
  },
  {
    "url": "assets/js/53.41138e33.js",
    "revision": "7b54c7d6c51ac21beab74bc1c17fc74e"
  },
  {
    "url": "assets/js/54.833de773.js",
    "revision": "5f8fdf2ed34d0bd915b5a6eb418d5e55"
  },
  {
    "url": "assets/js/55.84b50624.js",
    "revision": "f506ff95cdef5afec029f6211eeb7add"
  },
  {
    "url": "assets/js/56.0cc50c21.js",
    "revision": "faca8ef2526e482a5ab034334b4f9ae3"
  },
  {
    "url": "assets/js/57.37ee8bbf.js",
    "revision": "bddc1dd203d54915a4bb10da95dfe231"
  },
  {
    "url": "assets/js/58.b330125d.js",
    "revision": "b05d98ff07c0ab39599bb08da28fddb8"
  },
  {
    "url": "assets/js/59.29f0ddf8.js",
    "revision": "dc4f2e632ab3ec44ed46c8ad5ced6b1b"
  },
  {
    "url": "assets/js/6.836e5fed.js",
    "revision": "1127134b6732c7532eab70634cae6f80"
  },
  {
    "url": "assets/js/60.9b2f16bd.js",
    "revision": "66c04c4d85da8ee970e21afcee5c4834"
  },
  {
    "url": "assets/js/61.58a6c71b.js",
    "revision": "088ea98901b50ed71a0e9e64e8ae11cc"
  },
  {
    "url": "assets/js/62.936b9c86.js",
    "revision": "a3851ecaf9745cedd8238d07d1467368"
  },
  {
    "url": "assets/js/63.f9ac1cb4.js",
    "revision": "da372522a5c5a874879e19fa411996ce"
  },
  {
    "url": "assets/js/64.07afc969.js",
    "revision": "339fc565873d280f4ab738211328e993"
  },
  {
    "url": "assets/js/65.48dba69f.js",
    "revision": "263087ceb715120a403bcda016f6d105"
  },
  {
    "url": "assets/js/66.9c8e1b0b.js",
    "revision": "fbdf91f73f8537dbb9c226d62f365878"
  },
  {
    "url": "assets/js/67.e7cfcd1b.js",
    "revision": "37b065e00a0e8ce9906919f3c505833d"
  },
  {
    "url": "assets/js/68.d4b80359.js",
    "revision": "1bb735623d6cd0858add0479b295f674"
  },
  {
    "url": "assets/js/69.21963ec4.js",
    "revision": "9ebc79a02c767acd683078c9878822e2"
  },
  {
    "url": "assets/js/7.d18d03ab.js",
    "revision": "976f0ecbb45b872a4dfd061d5e2d1fe8"
  },
  {
    "url": "assets/js/8.a5f38894.js",
    "revision": "a66915005b8da2f0a9d91ff522c33f3e"
  },
  {
    "url": "assets/js/9.69b11c1a.js",
    "revision": "92d6f9e6317ea3d4f5822361135fee6f"
  },
  {
    "url": "assets/js/app.80a1a652.js",
    "revision": "fe71d3883ba14d4c1dea06fe92aa4817"
  },
  {
    "url": "assets/js/vendors~flowchart.4af2219b.js",
    "revision": "79ff26e6a72976119d3ca6ae87e3dafd"
  },
  {
    "url": "assets/js/vendors~notification.720c539b.js",
    "revision": "e0cbc3a164d5b5d0732607021147b312"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "85658b5c996e65199afc38e8bdbc0e66"
  },
  {
    "url": "middleware/flyway.html",
    "revision": "1dc3e3bdae1b7b61c534a78d8fd4757b"
  },
  {
    "url": "middleware/shardingsphere-jdbc.html",
    "revision": "c2a4f57fe66904c2355551592269ed2b"
  },
  {
    "url": "middleware/shardingsphere.html",
    "revision": "dc85d85218a74074b471c8eff9df7e58"
  },
  {
    "url": "nosql/cassandra.html",
    "revision": "1e3cc8b4f66c98ef2e97e976e413b9fe"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats-ops.html",
    "revision": "e0dba06c7b243d603e94819d9a3e45d8"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats.html",
    "revision": "5384cccb0c1ec88866e1225deffb4827"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana-ops.html",
    "revision": "80dc1af825d4818d2cb398353b10003c"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana.html",
    "revision": "58f9703febed65292c0d763cc40ea05b"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash-ops.html",
    "revision": "98b1dd8a3dd5ee182d88d6f33feca5b1"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash.html",
    "revision": "340529b003afb69194117cdff1c63dd5"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-quickstart.html",
    "revision": "0e3fedb90b06ff8801ae0a05b417a667"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-api.html",
    "revision": "a9787abb3e8dbab7332f3e84b9db9132"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-interview.html",
    "revision": "c41ab1aea09fb9f89599057761d28f3a"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-ops.html",
    "revision": "aeb484a40740abd57d1ecbb9aad499dd"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-quickstart.html",
    "revision": "fcba4fd1a1ddf3bbf40cfccf64d21edd"
  },
  {
    "url": "nosql/elasticsearch/index.html",
    "revision": "62cadaaf1ec52f49dabaf4bb34caee12"
  },
  {
    "url": "nosql/hbase.html",
    "revision": "f35ec30b9348fbb76e075383dc65a1f5"
  },
  {
    "url": "nosql/index.html",
    "revision": "f0343649c16a10303b0aed406ae746f9"
  },
  {
    "url": "nosql/mongodb/index.html",
    "revision": "50614e6b7dcf19aa8a05f0d2c52e0602"
  },
  {
    "url": "nosql/mongodb/mongodb-aggregation.html",
    "revision": "e8aadfe7c50161f2ce9f4a347333668c"
  },
  {
    "url": "nosql/mongodb/mongodb-crud.html",
    "revision": "eccd5f2604a7e5c1fb1c79f90b7fb7dd"
  },
  {
    "url": "nosql/mongodb/mongodb-index.html",
    "revision": "fa32a2f12c9935549ad6e686e6873ade"
  },
  {
    "url": "nosql/mongodb/mongodb-model-example.html",
    "revision": "d785961dff2d663f61acc03a38cb49ac"
  },
  {
    "url": "nosql/mongodb/mongodb-model.html",
    "revision": "a3b53001edb882cec5a876199ae2734a"
  },
  {
    "url": "nosql/mongodb/mongodb-ops.html",
    "revision": "c51cdbd4f64a7c1d0df896eba3f6dce1"
  },
  {
    "url": "nosql/mongodb/mongodb-quickstart.html",
    "revision": "1ad0593cad9910e117c37d96182e2dc3"
  },
  {
    "url": "nosql/mongodb/mongodb-replication.html",
    "revision": "fc61119a0758153ab03e92b4f58bf535"
  },
  {
    "url": "nosql/mongodb/mongodb-sharding.html",
    "revision": "95b9da63f1d9614dd17f1e9ad7c21679"
  },
  {
    "url": "nosql/mongodb/mongodb-transaction.html",
    "revision": "6bd5bc7335fda6710fc5798be2293fd1"
  },
  {
    "url": "nosql/nosql-selection.html",
    "revision": "6bede8196057ae3b2ec3548970f300b8"
  },
  {
    "url": "nosql/redis/index.html",
    "revision": "d04ace8c60284e0917503ee342339ea2"
  },
  {
    "url": "nosql/redis/redis-action.html",
    "revision": "3422398eb5c7ad545c07dac4fc5b392f"
  },
  {
    "url": "nosql/redis/redis-cluster.html",
    "revision": "bf6ec94458dd25239889b0a4595d903d"
  },
  {
    "url": "nosql/redis/redis-datatype.html",
    "revision": "501ce5f70b08b4deae1c50eca550e957"
  },
  {
    "url": "nosql/redis/redis-interview.html",
    "revision": "d64b863e395206d5e7891b300e0a8faf"
  },
  {
    "url": "nosql/redis/redis-ops.html",
    "revision": "0ac783840d95a918d5b32365d7241faf"
  },
  {
    "url": "nosql/redis/redis-persistence.html",
    "revision": "0d39a28a42eebe572eff23e2450ff167"
  },
  {
    "url": "nosql/redis/redis-quickstart.html",
    "revision": "0a73e61dac3e586c14484ae6cd082fb3"
  },
  {
    "url": "nosql/redis/redis-replication.html",
    "revision": "9bc37bc7f3dd49347abd59e21c41cb07"
  },
  {
    "url": "nosql/redis/redis-sentinel.html",
    "revision": "ec9ecd5aa8ee50d453acf409b71c3d0c"
  },
  {
    "url": "sql/common/index.html",
    "revision": "41aae7b4928ae94b2fc0f5d3cb62384e"
  },
  {
    "url": "sql/common/sql-advanced.html",
    "revision": "128fab25301fe69e6b624c3ec650be29"
  },
  {
    "url": "sql/common/sql-cheat-sheet.html",
    "revision": "6c1142e213de8286bdb60ef22ff47ac1"
  },
  {
    "url": "sql/common/sql-interview.html",
    "revision": "97bb489b36e9de8ade0bfc9674cfbae2"
  },
  {
    "url": "sql/h2.html",
    "revision": "3f2d97406044a005fb7a060fe6ff8580"
  },
  {
    "url": "sql/index.html",
    "revision": "84e1c1a1509915d953de3d6a9cdbc03d"
  },
  {
    "url": "sql/mysql/index.html",
    "revision": "97a19a25be030230bca4893b900cc734"
  },
  {
    "url": "sql/mysql/mysql-config.html",
    "revision": "32fb5bd83d91dc3e77a4cc7bf3ef07ef"
  },
  {
    "url": "sql/mysql/mysql-faq.html",
    "revision": "61e609ddb8368693dc0c5f01c1fa854e"
  },
  {
    "url": "sql/mysql/mysql-index.html",
    "revision": "43983235dcdb1aa43d1fae8f21fc634b"
  },
  {
    "url": "sql/mysql/mysql-lock.html",
    "revision": "3e42a3d552bac8a9b7ef271bfd2b7055"
  },
  {
    "url": "sql/mysql/mysql-ops.html",
    "revision": "55acd8dca0451ae9a2af203ba8c7d722"
  },
  {
    "url": "sql/mysql/mysql-optimization.html",
    "revision": "267c47a886192846189f544b0d2ef378"
  },
  {
    "url": "sql/mysql/mysql-quickstart.html",
    "revision": "d78b51a7f8c2936e6ae99669bb1c0f22"
  },
  {
    "url": "sql/mysql/mysql-transaction.html",
    "revision": "3c36196df20ea7612d5bcb8a0164726b"
  },
  {
    "url": "sql/mysql/mysql-workflow.html",
    "revision": "ff5ef85eaa0e339b89cfd35c1b1ebe09"
  },
  {
    "url": "sql/postgresql.html",
    "revision": "8214fca17da12b291c5e60281e21a3cd"
  },
  {
    "url": "sql/sqlite.html",
    "revision": "51f036d23f19232aacb46ee3b403f26b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
