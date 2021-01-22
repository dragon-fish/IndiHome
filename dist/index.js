!function(){var t={840:function(t,e,n){"use strict";var A=n(15),i=n.n(A),o=n(645),r=n.n(o)()(i());r.push([t.id,"html,body{margin:0 auto;padding:0;width:100vw;height:100vh;font-size:14px;font-family:'微软雅黑',Arial,'Helvetica Neue',Helvetica,sans-serif;background:#fff}#beforeArea{position:relative;width:100%;height:100%;text-align:center}#beforeArea #startBtn{position:absolute;top:50%;left:50%}#showArea{display:none;margin:0 auto;width:800px;height:600px}header{display:flex;text-align:center}header > div{flex:1}header #leftLogo img,header #rightLogo img{width:180px;height:auto}header #centerLogo{margin-top:1rem;font-weight:bold}header #centerLogo .first{color:#222522;font-size:2rem}header #centerLogo .second{color:#b00c24;font-size:2rem}header #centerLogo .third > span{font-weight:normal}main{position:relative}main #bgArea{position:absolute;width:100%;height:100%;left:0;bottom:0}main #bgArea img{width:100%;height:auto}main #goodsArea{color:#222522;transform:scale(.75)}main #goodsArea ul{list-style:none;padding-left:0;width:400px;position:relative;animation:swing 2.4s infinite}main #goodsArea ul li{display:flex;border-bottom:1px solid rgba(0,0,0,0.25);padding:4px 8px}main #goodsArea ul li .left{flex:2;font-weight:bold}main #goodsArea ul li .left .title{color:#b00c24;font-size:1.8rem}main #goodsArea ul li .left .speed{color:#222522;font-size:1.8rem}main #goodsArea ul li .right{flex:1}main #goodsArea ul li .right .cost{color:#b00c24;font-size:2rem}main #extraNote{margin-top:1rem}main #charaArea > div{position:absolute;display:none;width:240px;height:480px;bottom:-135px}main #charaArea #chara1{right:0}main #charaArea img{width:100%;height:100%}footer #debugTimer{position:absolute;right:4px;bottom:4px;text-align:right;font-size:small;color:#808080}@-moz-keyframes swing{0%{top:0;left:0}10%{top:-24px;left:-12px}20%{top:-14px;left:-22px}30%{top:-2px;left:4px}40%{top:7px;left:-5px}50%{top:-13px;left:8px}60%{top:-24px;left:-10px}70%{top:-5px;left:4px}80%{top:8px;left:18px}90%{top:-14px;left:-2px}100%{top:0;left:0}}@-webkit-keyframes swing{0%{top:0;left:0}10%{top:-24px;left:-12px}20%{top:-14px;left:-22px}30%{top:-2px;left:4px}40%{top:7px;left:-5px}50%{top:-13px;left:8px}60%{top:-24px;left:-10px}70%{top:-5px;left:4px}80%{top:8px;left:18px}90%{top:-14px;left:-2px}100%{top:0;left:0}}@-o-keyframes swing{0%{top:0;left:0}10%{top:-24px;left:-12px}20%{top:-14px;left:-22px}30%{top:-2px;left:4px}40%{top:7px;left:-5px}50%{top:-13px;left:8px}60%{top:-24px;left:-10px}70%{top:-5px;left:4px}80%{top:8px;left:18px}90%{top:-14px;left:-2px}100%{top:0;left:0}}@keyframes swing{0%{top:0;left:0}10%{top:-24px;left:-12px}20%{top:-14px;left:-22px}30%{top:-2px;left:4px}40%{top:7px;left:-5px}50%{top:-13px;left:8px}60%{top:-24px;left:-10px}70%{top:-5px;left:4px}80%{top:8px;left:18px}90%{top:-14px;left:-2px}100%{top:0;left:0}}","",{version:3,sources:["webpack://./static/style.styl"],names:[],mappings:"AAGA,UACE,aAAQ,CACR,SAAS,CACT,WAAO,CACP,YAAQ,CACR,cAAW,CACX,8DAAmB,CACnB,eAAY,CAEd,YACE,iBAAU,CACV,UAAO,CACP,WAAQ,CACR,iBAAY,CAEZ,sBACE,iBAAU,CACV,OAAK,CACL,QAAM,CAEV,UACE,YAAS,CACT,aAAQ,CACR,WAAO,CACP,YAAQ,CAMV,OACE,YAAS,CACT,iBAAY,CAEZ,aACE,MAAM,CAGN,2CACE,WAAO,CACP,WAAQ,CAEZ,mBACE,eAAY,CACZ,gBAAa,CAEb,0BACE,aAAO,CACP,cAAW,CAEb,2BACE,aAAO,CACP,cAAW,CAGX,iCACE,kBAAa,CAErB,KACE,iBAAU,CAEV,aACE,iBAAU,CACV,UAAO,CACP,WAAQ,CACR,MAAM,CACN,QAAQ,CAER,iBACE,UAAO,CACP,WAAQ,CAEZ,gBACE,aAAO,CACP,oBAAW,CAEX,mBACE,eAAY,CACZ,cAAc,CACd,WAAO,CACP,iBAAU,CACV,6BAAW,CAEX,sBACE,YAAS,CACT,wCAAe,CACf,eAAS,CAET,4BACE,MAAM,CACN,gBAAa,CAEb,mCACE,aAAO,CACP,gBAAW,CAEb,mCACE,aAAO,CACP,gBAAW,CAEf,6BACE,MAAM,CAEN,mCACE,aAAO,CACP,cAAW,CAErB,gBACE,eAAY,CAGZ,sBACE,iBAAU,CACV,YAAS,CACT,WAAO,CACP,YAAQ,CACR,aAAQ,CAEV,wBACE,OAAO,CAET,oBACE,UAAO,CACP,WAAQ,CAIZ,mBACE,iBAAU,CACV,SAAO,CACP,UAAQ,CACR,gBAAY,CACZ,eAAW,CACX,aAAO,CAEX,sBACE,GACE,KAAK,CACL,MAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,QAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,SAAM,CAER,KACE,KAAK,CACL,MAAM,CAAA,CA3CV,yBACE,GACE,KAAK,CACL,MAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,QAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,SAAM,CAER,KACE,KAAK,CACL,MAAM,CAAA,CA3CV,oBACE,GACE,KAAK,CACL,MAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,QAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,SAAM,CAER,KACE,KAAK,CACL,MAAM,CAAA,CA3CV,iBACE,GACE,KAAK,CACL,MAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,QAAM,CAER,IACE,SAAK,CACL,UAAM,CAER,IACE,QAAK,CACL,QAAM,CAER,IACE,OAAK,CACL,SAAM,CAER,IACE,SAAK,CACL,SAAM,CAER,KACE,KAAK,CACL,MAAM,CAAA",sourcesContent:["titleBlack = #222522\ntitleRed = #b00c24\n\nhtml, body\n  margin: 0 auto\n  padding: 0\n  width: 100vw\n  height: 100vh\n  font-size: 14px\n  font-family: '微软雅黑', Arial, 'Helvetica Neue', Helvetica, sans-serif\n  background: #fff\n\n#beforeArea\n  position: relative\n  width: 100%\n  height: 100%\n  text-align: center\n\n  #startBtn\n    position: absolute\n    top: 50%\n    left: 50%\n\n#showArea\n  display: none\n  margin: 0 auto\n  width: 800px\n  height: 600px\n  // background-image: url('/static/image/background.png')\n  // background-repeat: no-repeat\n  // background-position: bottom left\n  // background-size: 100% 450px\n\nheader\n  display: flex\n  text-align: center\n\n  > div\n    flex: 1\n\n  #leftLogo, #rightLogo\n    img\n      width: 180px\n      height: auto\n\n  #centerLogo\n    margin-top: 1rem\n    font-weight: bold\n\n    .first\n      color: titleBlack\n      font-size: 2rem\n\n    .second\n      color: titleRed\n      font-size: 2rem\n\n    .third\n      > span\n        font-weight: normal\n\nmain\n  position: relative\n\n  #bgArea\n    position: absolute\n    width: 100%\n    height: 100%\n    left: 0\n    bottom: 0\n\n    img\n      width: 100%\n      height: auto\n\n  #goodsArea\n    color: titleBlack\n    transform: scale(0.75)\n\n    ul\n      list-style: none\n      padding-left: 0\n      width: 400px\n      position: relative\n      animation: swing 2.4s infinite\n\n      li\n        display: flex\n        border-bottom: 1px solid rgba(0, 0, 0, 0.25)\n        padding: 4px 8px\n\n        .left\n          flex: 2\n          font-weight: bold\n\n          .title\n            color: titleRed\n            font-size: 1.8rem\n\n          .speed\n            color: titleBlack\n            font-size: 1.8rem\n\n        .right\n          flex: 1\n\n          .cost\n            color: titleRed\n            font-size: 2rem\n\n  #extraNote\n    margin-top: 1rem\n\n  #charaArea\n    > div\n      position: absolute\n      display: none\n      width: 240px\n      height: 480px\n      bottom: -135px\n\n    #chara1\n      right: 0\n\n    img\n      width: 100%\n      height: 100%\n      // position: absolute\n\nfooter\n  #debugTimer\n    position: absolute\n    right: 4px\n    bottom: 4px\n    text-align: right\n    font-size: small\n    color: gray\n\n@keyframes swing\n  0%\n    top: 0\n    left: 0\n\n  10%\n    top: -24px\n    left: -12px\n\n  20%\n    top: -14px\n    left: -22px\n\n  30%\n    top: -2px\n    left: 4px\n\n  40%\n    top: 7px\n    left: -5px\n\n  50%\n    top: -13px\n    left: 8px\n\n  60%\n    top: -24px\n    left: -10px\n\n  70%\n    top: -5px\n    left: 4px\n\n  80%\n    top: 8px\n    left: 18px\n\n  90%\n    top: -14px\n    left: -2px\n\n  100%\n    top: 0\n    left: 0"],sourceRoot:""}]),e.Z=r},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,A){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(A)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);A&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},15:function(t){"use strict";function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],A=!0,i=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(A=(r=a.next()).done)&&(n.push(r.value),!e||n.length!==e);A=!0);}catch(t){i=!0,o=t}finally{try{A||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var A=Object.prototype.toString.call(t).slice(8,-1);"Object"===A&&t.constructor&&(A=t.constructor.name);if("Map"===A||"Set"===A)return Array.from(t);if("Arguments"===A||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,A=new Array(e);n<e;n++)A[n]=t[n];return A}t.exports=function(t){var n=e(t,4),A=n[1],i=n[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),l=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[A].concat(l).concat([a]).join("\n")}return[A].join("\n")}},351:function(t,e,n){"use strict";n.r(e),e.default=n.p+"7ef4c456c9ffb8a91da9aeb682b6483b.png"},834:function(t,e,n){"use strict";n.r(e),e.default=n.p+"69e83b027c21b28d839d190c0be375db.png"},499:function(t,e,n){"use strict";n.r(e),e.default=n.p+"11ce7fa1e8dd10a21b497d779ddf0805.png"},602:function(t,e,n){"use strict";n.r(e),e.default=n.p+"acb9aa6daeddb42a9b4876f093ca9325.png"},653:function(t,e,n){"use strict";n.r(e),e.default=n.p+"150a0aa0e049856de54eedd5c509ee4d.jpg"},405:function(t,e,n){var A=n(91),i=n(653),o=n(834),r=n(351),a=n(499),l=n(602),s='<!DOCTYPE html> <html lang="en"> <body> <div id="showArea"> <header> <div id="leftLogo"> <img src="'+A(i)+'" alt="TelkomIndinesia"/> </div> <div id="centerLogo"> <div class="first">IndiHome</div> <div class="second">Paket Phoenix</div> <div class="third"> Telap dekat <span>dengan</span> lelepon jernih <span>dan</span> internet cepat </div> </div> <div id="rightLogo"> <img src="'+A(o)+'" alt="IndiHome"/> </div> </header> <main> <div id="bgArea"> <img src="'+A(r)+'" alt=""/> </div> <div id="charaArea"> <div id="chara1"> <img src="'+A(a)+'" alt="剪刀哥"/> </div> <div id="chara2"> <img src="'+A(l)+'" alt="六六哥"/> </div> </div> <div id="goodsArea"> <ul> <li> <div class="left"> <div class="title">Paket Phoenix</div> <div class="speed">10 Mbps</div> </div> <div class="right"> <div class="cost">280.000</div> </div> </li> <li> <div class="left"> <div class="title">Paket Phoenix</div> <div class="speed">20 Mbps</div> </div> <div class="right"> <div class="cost">345.000</div> </div> </li> <li> <div class="left"> <div class="title">Paket Phoenix</div> <div class="speed">50 Mbps</div> </div> <div class="right"> <div class="cost">575.000</div> </div> </li> <li> <div class="left"> <div class="title">Paket Phoenix</div> <div class="speed">100 Mbps</div> </div> <div class="right"> <div class="cost">935.000</div> </div> </li> </ul> <p id="extraNote">*Syral & xxxxxxxxxxxxxxxxx</p> </div> </main> <footer> <div id="phoneNum"></div> </footer> </div> <aside id="beforeArea"><button id="startBtn">START</button></aside> </body> </html> ';t.exports=s},91:function(t){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},379:function(t,e,n){"use strict";var A,i=function(){return void 0===A&&(A=Boolean(window&&document&&document.all&&!window.atob)),A},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function a(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},A=[],i=0;i<t.length;i++){var o=t[i],l=e.base?o[0]+e.base:o[0],s=n[l]||0,C="".concat(l," ").concat(s);n[l]=s+1;var p=a(C),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(r[p].references++,r[p].updater(d)):r.push({identifier:C,updater:h(d,e),references:1}),A.push(C)}return A}function s(t){var e=document.createElement("style"),A=t.attributes||{};if(void 0===A.nonce){var i=n.nc;i&&(A.nonce=i)}if(Object.keys(A).forEach((function(t){e.setAttribute(t,A[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var C,p=(C=[],function(t,e){return C[t]=e,C.filter(Boolean).join("\n")});function d(t,e,n,A){var i=n?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(t.styleSheet)t.styleSheet.cssText=p(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function c(t,e,n){var A=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=A;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(A))}}var f=null,u=0;function h(t,e){var n,A,i;if(e.singleton){var o=u++;n=f||(f=s(e)),A=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(e),A=c.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return A(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;A(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var A=0;A<n.length;A++){var i=a(n[A]);r[i].references--}for(var o=l(t,e),s=0;s<n.length;s++){var C=a(n[s]);0===r[C].references&&(r[C].updater(),r.splice(C,1))}n=o}}}}},e={};function n(A){if(e[A])return e[A].exports;var i=e[A]={id:A,exports:{}};return t[A](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var A in e)n.o(e,A)&&!n.o(t,A)&&Object.defineProperty(t,A,{enumerable:!0,get:e[A]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var A=e.getElementsByTagName("script");A.length&&(t=A[A.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";var t,e=n(405),A=n.n(e),i=n(379),o=n.n(i),r=n(840),a={insert:"head",singleton:!1};o()(r.Z,a),r.Z.locals;window,(t=jQuery)("body").html("").append(A()),t("#startBtn").click((function(){t("#showArea").show(),t("#beforeArea").hide();const e=new Audio("asset/bgm.mp3");e.load(),e.play();const n=(new Date).getTime(),A=t("<div>",{title:"Debug Timer",id:"debugTimer"});A.appendTo("footer"),setInterval((()=>{let t=(new Date).getTime()-n;A.text(`${(t/1e3).toFixed(2)} s`)}),50),t("#charaArea").find("#chara1").show()}))}()}();
//# sourceMappingURL=index.js.map