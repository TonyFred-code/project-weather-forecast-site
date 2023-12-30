(()=>{"use strict";var n={5426:(n,e,t)=>{t.d(e,{Z:()=>l});var a=t(7537),r=t.n(a),i=t(3645),o=t.n(i),c=t(1667),A=t.n(c),d=new URL(t(5843),t.b),p=o()(r()),s=A()(d);p.push([n.id,`*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --header-height: 90px;\n  --form-field-height: 80px;\n  --footer-height: 90px;\n  --offset: calc(\n    100vh - var(--header-height) - var(--form-field-height) -\n      var(--footer-height)\n  );\n}\n\nhtml,\nbody {\n  width: 100%;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  background: linear-gradient(180deg, #b0bac9 55%, #e7e9eb);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.6rem;\n  display: grid;\n  grid-template-rows: var(--header-height) var(--form-field-height) minmax(\n      var(--offset),\n      1fr\n    ) var(--footer-height);\n}\n\n.icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n}\n\n.big-icon {\n  width: 82px;\n  height: 82px;\n}\n\n.icon-container img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nheader {\n  display: flex;\n  margin: 21px 0 18px 0;\n  justify-content: center;\n}\n\nheader h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  padding: 12px;\n  margin: 12px;\n  font-size: 1.9rem;\n}\n\nheader .header-logo {\n  width: 35px;\n  height: 35px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\ninput#city-search {\n  height: 45px;\n  width: 350px;\n  padding-left: 21px;\n  padding-right: 45px;\n  border-radius: 21px;\n  font-size: 1.3rem;\n  background-color: #efefef;\n  border: none;\n  outline: none;\n}\n\ninput#city-search:focus {\n  border: 2px solid black;\n}\n\nform button.start-search {\n  position: absolute;\n  right: calc(50% - 165px);\n  background-image: url(${s});\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  outline: none;\n  border: none;\n}\n\nform button.start-search:hover {\n  cursor: pointer;\n}\n\n.day-weather-container {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  gap: 24px;\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n}\n\n.current-day-weather {\n  width: 370px;\n  height: 330px;\n  padding: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(176, 186, 201, 0.45);\n  border-radius: 20px;\n  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.475),\n    -2px -2px 12px 0px rgba(0, 0, 0, 0.475);\n}\n\n.city-name {\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n.date-time {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.time {\n  font-weight: bold;\n}\n\n.temperature-details {\n  text-align: center;\n}\n\n.current-temp {\n  font-size: 4.5rem;\n  font-weight: bold;\n}\n\n.condition {\n  font-weight: bold;\n  text-align: center;\n}\n\n.weather-conditions {\n  list-style-type: none;\n  display: flex;\n  flex-flow: column nowrap;\n  width: 370px;\n  height: 330px;\n  justify-content: space-around;\n  padding: 18px;\n  gap: 12px;\n  background-color: #bfdbfe;\n  border-radius: 20px;\n  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.475),\n    -2px -2px 12px 0px rgba(0, 0, 0, 0.475);\n}\n\n.weather-condition {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.weather-condition div:nth-of-type(1) {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.weather-condition .icon-container {\n  width: 60px;\n  height: 50px;\n}\n\n.weather-condition div:nth-of-type(2) {\n  font-weight: bold;\n  font-size: 1.95rem;\n}\n\n.loading-screen {\n  z-index: 3;\n  width: 100%;\n  background: #e7e9eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n}\n\n.loader {\n  width: 100px;\n  height: 100px;\n  background-color: #eee;\n  border-radius: 50%;\n  margin: 50px;\n  position: relative;\n}\n\n.loader::after {\n  content: '';\n  display: block;\n  height: 100px;\n  width: 100px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 50%;\n  border: 8px solid transparent;\n  border-top-color: orangered;\n  border-bottom-color: #bebcbc;\n  border-left-color: #b3bcbc;\n  border-right-color: #b3bcbc;\n  animation: spinner 2s linear infinite;\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error-screen {\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n  justify-content: center;\n}\n\n.offline-screen {\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n  justify-content: center;\n}\n\nfooter {\n  height: var(--footer-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.github-icon,\nfooter p:nth-of-type(2) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter p:nth-of-type(2) {\n  gap: 12px;\n}\n\n@media screen and (max-width: 700px) {\n  body {\n    height: 100%;\n  }\n\n  .day-weather-container {\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n  }\n\n  .current-day-weather,\n  .weather-conditions {\n    width: 90%;\n    max-width: 350px;\n  }\n\n  .loading-screen.show {\n    top: 180px;\n  }\n}\n\n.show {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --header-height: 90px;\n  --form-field-height: 80px;\n  --footer-height: 90px;\n  --offset: calc(\n    100vh - var(--header-height) - var(--form-field-height) -\n      var(--footer-height)\n  );\n}\n\nhtml,\nbody {\n  width: 100%;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  background: linear-gradient(180deg, #b0bac9 55%, #e7e9eb);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.6rem;\n  display: grid;\n  grid-template-rows: var(--header-height) var(--form-field-height) minmax(\n      var(--offset),\n      1fr\n    ) var(--footer-height);\n}\n\n.icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n}\n\n.big-icon {\n  width: 82px;\n  height: 82px;\n}\n\n.icon-container img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nheader {\n  display: flex;\n  margin: 21px 0 18px 0;\n  justify-content: center;\n}\n\nheader h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  padding: 12px;\n  margin: 12px;\n  font-size: 1.9rem;\n}\n\nheader .header-logo {\n  width: 35px;\n  height: 35px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\ninput#city-search {\n  height: 45px;\n  width: 350px;\n  padding-left: 21px;\n  padding-right: 45px;\n  border-radius: 21px;\n  font-size: 1.3rem;\n  background-color: #efefef;\n  border: none;\n  outline: none;\n}\n\ninput#city-search:focus {\n  border: 2px solid black;\n}\n\nform button.start-search {\n  position: absolute;\n  right: calc(50% - 165px);\n  background-image: url(./icons/magnify.svg);\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  outline: none;\n  border: none;\n}\n\nform button.start-search:hover {\n  cursor: pointer;\n}\n\n.day-weather-container {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  gap: 24px;\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n}\n\n.current-day-weather {\n  width: 370px;\n  height: 330px;\n  padding: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(176, 186, 201, 0.45);\n  border-radius: 20px;\n  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.475),\n    -2px -2px 12px 0px rgba(0, 0, 0, 0.475);\n}\n\n.city-name {\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n.date-time {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.time {\n  font-weight: bold;\n}\n\n.temperature-details {\n  text-align: center;\n}\n\n.current-temp {\n  font-size: 4.5rem;\n  font-weight: bold;\n}\n\n.condition {\n  font-weight: bold;\n  text-align: center;\n}\n\n.weather-conditions {\n  list-style-type: none;\n  display: flex;\n  flex-flow: column nowrap;\n  width: 370px;\n  height: 330px;\n  justify-content: space-around;\n  padding: 18px;\n  gap: 12px;\n  background-color: #bfdbfe;\n  border-radius: 20px;\n  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.475),\n    -2px -2px 12px 0px rgba(0, 0, 0, 0.475);\n}\n\n.weather-condition {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.weather-condition div:nth-of-type(1) {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.weather-condition .icon-container {\n  width: 60px;\n  height: 50px;\n}\n\n.weather-condition div:nth-of-type(2) {\n  font-weight: bold;\n  font-size: 1.95rem;\n}\n\n.loading-screen {\n  z-index: 3;\n  width: 100%;\n  background: #e7e9eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n}\n\n.loader {\n  width: 100px;\n  height: 100px;\n  background-color: #eee;\n  border-radius: 50%;\n  margin: 50px;\n  position: relative;\n}\n\n.loader::after {\n  content: '';\n  display: block;\n  height: 100px;\n  width: 100px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 50%;\n  border: 8px solid transparent;\n  border-top-color: orangered;\n  border-bottom-color: #bebcbc;\n  border-left-color: #b3bcbc;\n  border-right-color: #b3bcbc;\n  animation: spinner 2s linear infinite;\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error-screen {\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n  justify-content: center;\n}\n\n.offline-screen {\n  grid-row: 3 / -2;\n  grid-column: 1 / -1;\n  justify-content: center;\n}\n\nfooter {\n  height: var(--footer-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.github-icon,\nfooter p:nth-of-type(2) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter p:nth-of-type(2) {\n  gap: 12px;\n}\n\n@media screen and (max-width: 700px) {\n  body {\n    height: 100%;\n  }\n\n  .day-weather-container {\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n  }\n\n  .current-day-weather,\n  .weather-conditions {\n    width: 90%;\n    max-width: 350px;\n  }\n\n  .loading-screen.show {\n    top: 180px;\n  }\n}\n\n.show {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n"],sourceRoot:""}]);const l=p},3645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(o[A]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);a&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},1667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},7537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},3379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],c=0;c<n.length;c++){var A=n[c],d=a.base?A[0]+a.base:A[0],p=i[d]||0,s="".concat(d," ").concat(p);i[d]=p+1;var l=t(s),f={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var g=r(f,a);a.byIndex=c,e.splice(c,0,{identifier:s,updater:g,references:1})}o.push(s)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var A=a(n,r),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=A}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},9216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},3565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},7795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},4589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},5843:(n,e,t)=>{n.exports=t.p+"54ff7732bb1a5ff166c6.svg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!n;)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(3379),e=t.n(n),a=t(7795),r=t.n(a),i=t(569),o=t.n(i),c=t(3565),A=t.n(c),d=t(9216),p=t.n(d),s=t(4589),l=t.n(s),f=t(5426),g={};function u(n,e,t){let a;var r;return void 0===(r=e)||"locale"in r?t=e:a=e,new Intl.DateTimeFormat(t?.locale,a).format(function(n){const e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new n.constructor(+n):"number"==typeof n||"[object Number]"===e||"string"==typeof n||"[object String]"===e?new Date(n):new Date(NaN)}(n))}g.styleTagTransform=l(),g.setAttributes=A(),g.insert=o().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"07dcab8172c8775c308a.svg",b=t.p+"9882b540a5b90ad9c3e8.svg",m=t.p+"a8ed6cca798852710a51.svg",y=t.p+"0d009a86fe476d22fa4d.svg",E=t.p+"4330aee62c15966e4035.svg",B=t.p+"563b93403499d128af66.svg",C=t.p+"550985caaa8859d4b95f.svg";function x(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=new Image;return t.src=n,t.alt=e,t}var v={"113Day":t.p+"17608b0baa1391eb05a0.png","113Night":t.p+"9a181351a22b54059f46.png","116Day":t.p+"8ea9e73debaf4c25a8cf.png","116Night":t.p+"337f58255916e54ea1e1.png","119Day":t.p+"e740cebbccd7be04d824.png","119Night":t.p+"877a68f87ae89bb957ef.png","122Day":t.p+"036a7f4b9402e1d74535.png","122Night":t.p+"fe1ad0ff1820050f573a.png","143Day":t.p+"a93c5cdce8f09616fc0e.png","143Night":t.p+"3a38774211eb11741b54.png","176Day":t.p+"307889846f4a6877a9ea.png","176Night":t.p+"2274b0f9afde269933e5.png","179Day":t.p+"ff6c626ccae29522a258.png","179Night":t.p+"a05c0ed9c03235edca96.png","182Day":t.p+"6fe62e8748f042a1cbc4.png","182Night":t.p+"17b97c48fb138ff20843.png","185Day":t.p+"b29c7a91f5f0986860ea.png","185Night":t.p+"73c62dfd22eaf889b373.png","200Day":t.p+"cc1054a285a2ec8fecca.png","200Night":t.p+"a85bb9589ece1a589e53.png","227Day":t.p+"b129e818f96bfd5302e9.png","227Night":t.p+"a417dc841fb787a3121e.png","230Day":t.p+"b8b0bf9be35bccc67ed8.png","230Night":t.p+"af63c80cb02f1b88520b.png","248Day":t.p+"b2a1d4434712ee44f9ba.png","248Night":t.p+"360b1cd2a1b3bf3eccf0.png","260Day":t.p+"83e24a5eb9c1903d153a.png","260Night":t.p+"cb1570c9ecb894bc1087.png","263Day":t.p+"9f768941645c662c7fad.png","263Night":t.p+"3e3495b8348354827949.png","266Day":t.p+"9f768941645c662c7fad.png","266Night":t.p+"3e3495b8348354827949.png","281Day":t.p+"b29c7a91f5f0986860ea.png","281Night":t.p+"73c62dfd22eaf889b373.png","284Day":t.p+"56ec9edb8b4e68fe86cd.png","284Night":t.p+"bf216d4d2f4aa9d2a734.png","293Day":t.p+"307889846f4a6877a9ea.png","293Night":t.p+"2274b0f9afde269933e5.png","296Day":t.p+"be8d48a6fb6962fa1edd.png","296Night":t.p+"e15944de07d227742faa.png","299Day":t.p+"307889846f4a6877a9ea.png","299Night":t.p+"2274b0f9afde269933e5.png","302Day":t.p+"be8d48a6fb6962fa1edd.png","302Night":t.p+"e15944de07d227742faa.png","305Day":t.p+"b79f79a47ff26675bbb6.png","305Night":t.p+"f3012ddd8e268e19eb2e.png","308Day":t.p+"abccde130cb90d6b8d28.png","308Night":t.p+"3b4d7dcbbedd8be85713.png","311Day":t.p+"a856df694720212e414a.png","311Night":t.p+"32aa06f17c3f7cfb3a99.png","314Day":t.p+"a856df694720212e414a.png","314Night":t.p+"32aa06f17c3f7cfb3a99.png","317Day":t.p+"21cb978b0b5bc99863da.png","317Night":t.p+"5b39c4234abc34044d08.png","320Day":t.p+"21cb978b0b5bc99863da.png","320Night":t.p+"5b39c4234abc34044d08.png","323Day":t.p+"ff6c626ccae29522a258.png","323Night":t.p+"a05c0ed9c03235edca96.png","326Day":t.p+"997f80887a654d8e2bd8.png","326Night":t.p+"66cad1fd4ea2b425476d.png","329Day":t.p+"ff6c626ccae29522a258.png","329Night":t.p+"a05c0ed9c03235edca96.png","332Day":t.p+"997f80887a654d8e2bd8.png","332Night":t.p+"66cad1fd4ea2b425476d.png","335Day":t.p+"f112e7b7295449ca0f2c.png","335Night":t.p+"a05c0ed9c03235edca96.png","338Day":t.p+"33ecc25ad9b9bcdead64.png","338Night":t.p+"68e33fb0d2d3d215a5fe.png","350Day":t.p+"e2ffeba8f660e868882d.png","350Night":t.p+"1c33e3dd2cb58a8c51b7.png","353Day":t.p+"307889846f4a6877a9ea.png","353Night":t.p+"2274b0f9afde269933e5.png","356Day":t.p+"b79f79a47ff26675bbb6.png","356Night":t.p+"f3012ddd8e268e19eb2e.png","359Day":t.p+"a4e620fd4749c3b4e4e0.png","359Night":t.p+"f0ea4e443a205a9cfbbf.png","362Day":t.p+"6fe62e8748f042a1cbc4.png","362Night":t.p+"17b97c48fb138ff20843.png","365Day":t.p+"de693c69934c56d7621b.png","365Night":t.p+"3e3b2a1ad34b9471b980.png","368Day":t.p+"ff6c626ccae29522a258.png","368Night":t.p+"a05c0ed9c03235edca96.png","371Day":t.p+"f112e7b7295449ca0f2c.png","371Night":t.p+"2c7b41d4dea564886958.png","374Day":t.p+"bbb2a9027eb47dd6fc81.png","374Night":t.p+"42f4df0e587e14e2ec2d.png","377Day":t.p+"d5b7ec94bf807ad7a1f5.png","377Night":t.p+"2821934c72b0870a790d.png","386Day":t.p+"cc1054a285a2ec8fecca.png","386Night":t.p+"a85bb9589ece1a589e53.png","389Day":t.p+"f01fba5ae744838fbf95.png","389Night":t.p+"815a9988eef459cc98c3.png","392Day":t.p+"654b4a200e85db363fc9.png","392Night":t.p+"972cf01edfd40c105c6c.png","395Day":t.p+"1cb8e1c8dd3b23368d56.png","395Night":t.p+"1cb8e1c8dd3b23368d56.png"};function w(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,r,i,o,c=[],A=!0,d=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;A=!1}else for(;!(A=(a=i.call(t)).done)&&(c.push(a.value),c.length!==e);A=!0);}catch(n){d=!0,r=n}finally{try{if(!A&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(d)throw r}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return D(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}var N=document.querySelector("form"),S=document.querySelector(".day-weather-container"),j=document.querySelector(".loading-screen"),k=document.querySelector(".error-screen"),q=document.querySelector(".offline-screen");function L(){q.classList.add("hide"),q.classList.remove("show")}function Y(){k.classList.add("hide"),k.classList.remove("show")}function z(){k.classList.add("show"),k.classList.remove("hide")}function I(){j.classList.remove("show"),j.classList.add("hide")}function T(){S.classList.add("hide"),S.classList.remove("show")}function W(n){if(console.log(n),L(),"location"in n)console.log("getting location"),function(n){document.querySelector(".city-name").textContent="".concat(n.location.name,", ").concat(n.location.country);var e=w(n.location.localtime.split(" "),2),t=e[0],a=e[1];document.querySelector(".time").textContent=a,document.querySelector(".date").textContent=u(new Date(t),{weekday:"long",year:"numeric",month:"long",day:"numeric"});var r=document.querySelector(".weather-icon.icon-container");r.textContent="";var i,o,c,A,d=(i=n.current.condition.icon,o=w(i.split("/"),7),c=o[5],A=o[6].split(".")[0],"night"===c.toLowerCase()?A+="Night":A+="Day",function(n){var e=v[n];return e?x(e):null}(A));null!==d&&(r.appendChild(d),document.querySelector(".current-temp").innerHTML="".concat(n.current.temp_c,"&deg;c"),document.querySelector(".high-low").innerHTML="H: ".concat(n.forecast.forecastday[0].day.maxtemp_c,"&deg;c&nbsp;&nbsp; L: ").concat(n.forecast.forecastday[0].day.mintemp_c,"&deg;c"),document.querySelector(".condition").textContent=n.current.condition.text,document.querySelector(".feels-like-temp").innerHTML="".concat(n.current.feelslike_c,"&deg;c"),document.querySelector(".humidity-percentage").textContent="".concat(n.current.humidity,"%"),document.querySelector(".rain-probability-value").textContent="".concat(n.forecast.forecastday[0].day.daily_will_it_rain,"%"),document.querySelector(".wind-speed-value").textContent="".concat(n.current.wind_mph," m/s"),document.querySelector(".uv-index-value").textContent=n.current.uv)}(n),S.classList.add("show"),S.classList.remove("hide"),Y();else if("error"in n){if(1006===n.error.code){var e=document.querySelector(".location-not-found");e.classList.remove("hide"),e.classList.add("show")}else{var t=document.querySelector(".error-message");t.textContent=n.error.message,t.classList.add("show"),t.classList.remove("hide")}T(),z()}setTimeout((function(){I()}),800)}function Z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Lagos",e="https://api.weatherapi.com/v1/forecast.json?key=871ceab34975437482c100138230112&q=".concat(n,"&days=3&api=yes");fetch(e,{mode:"cors"}).then((function(n){return n.json()})).then((function(e){W(e),console.log(n)})).catch((function(n){console.error(n),T(),I(),navigator.onLine?z():(console.log("You are offline"),q.classList.add("show"),q.classList.remove("hide"))}))}var U,M,H,_,O,R,X,V,Q,F,P,$,G,J,K=N.elements.q;K.addEventListener("input",(function(){""===K.value.trim()?K.setCustomValidity("Enter a city name"):K.setCustomValidity(""),K.reportValidity()})),N.addEventListener("submit",(function(n){n.preventDefault();var e=K.value;if(K.value="",K.blur(),""===e.trim())return K.setCustomValidity("Enter a city name"),void K.reportValidity();Y(),T(),L(),j.classList.add("show"),j.classList.remove("hide"),Z(e)})),U=document.querySelector(".icon-container.header-logo"),M=x(h,"Weather App Logo"),H=document.querySelector(".icon-container.humidity-icon"),_=x(b,"Humidity Icon"),O=document.querySelector(".icon-container.temp-icon"),R=x(m,"Humidity Icon"),X=document.querySelector(".icon-container.rain-prob-icon"),V=x(y,"Rain Probability Icon"),Q=document.querySelector(".icon-container.wind-speed-icon"),F=x(E,"Wind Speed Icon"),P=document.querySelector(".icon-container.uv-index-icon"),$=x(B,"Humidity Icon"),G=document.querySelector(".icon-container.github-icon"),J=x(C,"Humidity Icon"),U.appendChild(M),H.appendChild(_),O.appendChild(R),X.appendChild(V),Q.appendChild(F),P.appendChild($),G.appendChild(J),Z()})()})();
//# sourceMappingURL=main.bundle.js.map