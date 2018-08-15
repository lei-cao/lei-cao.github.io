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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "03b2a669ae085763836032bbbf89af59"
  },
  {
    "url": "algorithms/index.html",
    "revision": "959c250c0eccc13b2c3c1d1f5a16bc31"
  },
  {
    "url": "assets/css/0.styles.b4ad3165.css",
    "revision": "b3a17fa58cce757aa4f2078fdcebc4be"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a3d6804.js",
    "revision": "fa8414c3ab982ab372e06f296fdc563c"
  },
  {
    "url": "assets/js/11.dc0a87f4.js",
    "revision": "71987aabb9adc9e4b647df050be90220"
  },
  {
    "url": "assets/js/12.8204d98c.js",
    "revision": "f582363b96ec1188b995ffda014f8156"
  },
  {
    "url": "assets/js/2.23124c79.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.4f5c7a70.js",
    "revision": "561ee412692a6b6fe0702eb2f2d4b7d6"
  },
  {
    "url": "assets/js/4.65566eef.js",
    "revision": "13347d27e17fe88f8a93f166a9ecf2d1"
  },
  {
    "url": "assets/js/5.6e632438.js",
    "revision": "3d8d6648fd25625971622d451c60146e"
  },
  {
    "url": "assets/js/6.de704b91.js",
    "revision": "50a7b968d44fe9daef69903fe50af295"
  },
  {
    "url": "assets/js/7.982f850a.js",
    "revision": "e4b158a97fba2139fd644721b1a87ccd"
  },
  {
    "url": "assets/js/8.10a7253a.js",
    "revision": "b7678d1bd4c38f3df9794a3064f42410"
  },
  {
    "url": "assets/js/9.be7af525.js",
    "revision": "badad4dec2fe889277ce604fb43bb146"
  },
  {
    "url": "assets/js/app.2242ed0e.js",
    "revision": "f6307b87f06c5f0fe5e249881a2c6c9b"
  },
  {
    "url": "blog/algorithm-visualization-refactoring.html",
    "revision": "780348816fc16f09464673e09ec1102d"
  },
  {
    "url": "blog/algorithm-visualization.html",
    "revision": "b3df87211aac6d533578b44193b1c557"
  },
  {
    "url": "blog/index.html",
    "revision": "5fd017dd59b1b8274a1d31592f4a73fd"
  },
  {
    "url": "index.html",
    "revision": "5083bb53bfd8f46ba85801c59a537387"
  },
  {
    "url": "languages/go/decorator.html",
    "revision": "98899cdc67b34c1c1c3eccb0a320e70c"
  },
  {
    "url": "scripts/main.js",
    "revision": "568607bca1fbb2a62518dcd1deeab181"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
