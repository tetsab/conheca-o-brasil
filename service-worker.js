"use strict";var precacheConfig=[["/conheca-o-brasil/index.html","daabb43a51d88df4a1e6e66dd1927218"],["/conheca-o-brasil/static/js/main.d5263b1b.js","d5009c60f84e38b3a66e547f7350c1e4"],["/conheca-o-brasil/static/media/bondinho-do-pao-de-acucar-rio-de-janeiro-rj.ea46dfc1.jpg","ea46dfc1b2536b4174a3740338f31f71"],["/conheca-o-brasil/static/media/cachoeira-do-cha-tapirai-sp.7172a6ca.jpg","7172a6caf50d09d7fb19f06c81ac4861"],["/conheca-o-brasil/static/media/casa-das-tulhas-centro-historico-sao-luis.fca25dae.jpg","fca25dae38e13aacc5d9466c78b36555"],["/conheca-o-brasil/static/media/convento-das-merces-centro-historico-sao-luis.0648588e.jpg","0648588e249ef12811e0e444a3de88b2"],["/conheca-o-brasil/static/media/embu-das-artes.16e84a04.jpg","16e84a04ab6c9a16d1fe0478b3036b24"],["/conheca-o-brasil/static/media/farol-de-cabo-branco-joao-pessoa-pb.cacaddf8.jpg","cacaddf8f7e477177b08c635d1cb82fb"],["/conheca-o-brasil/static/media/feirinha-beira-mar-fortaleza.527ecf72.jpg","527ecf72b9fc336a21cd65e0137b2089"],["/conheca-o-brasil/static/media/jardim-botanico-curitiba-pr.5887533f.jpg","5887533f758b49e983dc4d10e07ea731"],["/conheca-o-brasil/static/media/lagoa-azul-pe.79513d49.png","79513d4951ffc8753f19ea543cf3272d"],["/conheca-o-brasil/static/media/marco-zero-recife.aefec4f1.jpg","aefec4f1572abcbcbf562973248277f1"],["/conheca-o-brasil/static/media/masp-sao-paulo-sp.d70c6fd0.jpg","d70c6fd0532b6e660308aa45139ed422"],["/conheca-o-brasil/static/media/museu-do-olho-curitiba-pr.f3d3ee7f.jpg","f3d3ee7fb0cec3d8ac1d172e411f14ad"],["/conheca-o-brasil/static/media/opera-de-arame-curitiba-pr.b4aad0fb.jpg","b4aad0fb1a9a16de82b01d97bba21591"],["/conheca-o-brasil/static/media/paco-frevo-pe.09255516.jpg","09255516d69fc6372eb1a4f1d3be98f7"],["/conheca-o-brasil/static/media/paiva-pe.4dd15d25.png","4dd15d25de8e9b7ebcbb8c339119af30"],["/conheca-o-brasil/static/media/parque-da-cidade-sao-jose-dos-campos-sp.b849dda5.jpg","b849dda523ed90920e0a9d7178943b87"],["/conheca-o-brasil/static/media/parque-do-sabia.d43dfa6e.jpg","d43dfa6e542e399b4992992b0c1f114c"],["/conheca-o-brasil/static/media/parque-estadual-jalapao-to.e370cb61.jpg","e370cb61231c4861f9c6098d9abe2903"],["/conheca-o-brasil/static/media/parque-municipal-victório-siquieroli-uberlandia.b78ac864.jpg","b78ac8648096d5586988a73fbd77f619"],["/conheca-o-brasil/static/media/parque-solon-de-lucena-joao-pessoa-pb.f1392d46.jpg","f1392d460d75cdf158179c76430a4413"],["/conheca-o-brasil/static/media/parque-tangua-curitiba-pr.85bb2ee2.jpg","85bb2ee22afdd7cfd6f8a2a10dca2da8"],["/conheca-o-brasil/static/media/parque-taquaral-campinas.99c6f8b7.jpg","99c6f8b77195edc8040d114cb8180313"],["/conheca-o-brasil/static/media/patio-do-colegio.5d262ec7.jpg","5d262ec771a88a5ad25a52b6e84a7e90"],["/conheca-o-brasil/static/media/pelourinho-salvador.25b84f9e.jpg","25b84f9e939801951b93f357dab5c0a7"],["/conheca-o-brasil/static/media/picaozinho-joao-pessoa-pb.4235ca77.jpg","4235ca77d04f656d6f865a506257c6ce"],["/conheca-o-brasil/static/media/ponta-dos-seixas-joao-pessoa-pb.600c28fa.jpg","600c28faa73876d4121b192610e1dacf"],["/conheca-o-brasil/static/media/praca-clarimundo-carneiro-uberlandia.96da56de.jpg","96da56de7f32e09f6dc222809e05aec3"],["/conheca-o-brasil/static/media/praca-santa-terezinha-taubate-sp.ddbbb366.jpg","ddbbb366dd56aa6547566ad894e3fb22"],["/conheca-o-brasil/static/media/praia-de-jericoacoara.7d09499c.jpg","7d09499cc2cca7f8ac2eee6a3d656f04"],["/conheca-o-brasil/static/media/praia-do-jacare-joao-pessoa-pb.4e79492a.jpg","4e79492a8fe66214ba9dca2c57a87eb7"],["/conheca-o-brasil/static/media/sitio-do-pica-pau-amarelo-taubate-sp.8cb549c1.jpg","8cb549c1b8864251dd97281778dc9ea1"],["/conheca-o-brasil/static/media/thermas-do-vale-sao-jose-dos-campos.3a90502d.jpg","3a90502df9538c6b4160139c84d40b05"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,c,t){var r=new URL(a);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),r.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,c){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return c.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],t=new URL(e,self.location),r=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!c.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return t.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var c=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var r="/conheca-o-brasil/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});