webpackJsonp([1],{655:function(e,t,r){"use strict";function n(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.i(f.call)(a.a.fetchMovieList);case 3:return e=t.sent,t.next=6,r.i(f.put)(r.i(u.a)(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t["catch"](0),t.next=12,r.i(f.put)(r.i(u.b)(t.t0));case 12:return t.prev=12,t.next=15,r.i(f.put)(r.i(u.b)("请求失败"));case 15:return t.finish(12);case 16:case"end":return t.stop()}},p[0],this,[[0,8,12,16]])}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(c.b)(s.a,n);case 2:case"end":return e.stop()}},p[1],this)}function i(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(f.fork)(o);case 2:case"end":return e.stop()}},p[2],this)}var s=r(724),u=r(747),a=r(844),c=r(272),f=r(271);r.n(f),t.fetchMovieList=n,t.watchFetchMovie=o,t.root=i;var p=[n,o,i].map(regeneratorRuntime.mark);t["default"]=[i]},709:function(e,t){"use strict";function r(e){return"[object Array]"===v.call(e)}function n(e){return"[object ArrayBuffer]"===v.call(e)}function o(e){return"[object FormData]"===v.call(e)}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function a(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===v.call(e)}function p(e){return"[object File]"===v.call(e)}function l(e){return"[object Blob]"===v.call(e)}function h(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function d(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function m(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)e.hasOwnProperty(i)&&t.call(null,e[i],i,e)}function y(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=y(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)m(arguments[r],e);return t}var v=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:n,isFormData:o,isArrayBufferView:i,isString:s,isNumber:u,isObject:c,isUndefined:a,isDate:f,isFile:p,isBlob:l,isStandardBrowserEnv:d,forEach:m,merge:y,trim:h}},724:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return i});var n="xmm/nav/FETCH_MOVIE_LIST",o="xmm/nav/FETCH_MOVIE_LIST_SUCCESS",i="xmm/nav/FETCH_MOVIE_LIST_ERROR"},747:function(e,t,r){"use strict";function n(){return{type:s.a}}function o(e){return{type:s.b,data:e}}function i(e){return{type:s.c,err:e}}var s=r(724);t.c=n,t.a=o,t.b=i},748:function(e,t,r){"use strict";var n=r(709),o=r(776),i=r(781),s=r(749),u=r(780),a=window.btoa||r(775);e.exports=function(e,t,c){var f=c.data,p=c.headers;n.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(!window.XDomainRequest||"withCredentials"in l||u(c.url)||(l=new window.XDomainRequest),c.auth){var h=c.auth.username||"",d=c.auth.password||"";p.Authorization="Basic "+a(h+":"+d)}if(l.open(c.method.toUpperCase(),o(c.url,c.params,c.paramsSerializer),!0),l.timeout=c.timeout,l.onload=function(){if(l){var r="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,n=["text",""].indexOf(c.responseType||"")!==-1?l.responseText:l.response,o={data:s(n,r,c.transformResponse),status:l.status,statusText:l.statusText,headers:r,config:c};(l.status>=200&&l.status<300||!("status"in l)&&l.responseText?e:t)(o),l=null}},n.isStandardBrowserEnv()){var m=r(778),y=c.withCredentials||u(c.url)?m.read(c.xsrfCookieName):void 0;y&&(p[c.xsrfHeaderName]=y)}if("setRequestHeader"in l&&n.forEach(p,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),c.withCredentials&&(l.withCredentials=!0),c.responseType)try{l.responseType=c.responseType}catch(v){if("json"!==l.responseType)throw v}n.isArrayBuffer(f)&&(f=new DataView(f)),l.send(f)}},749:function(e,t,r){"use strict";var n=r(709);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},769:function(e,t,r){e.exports=r(770)},770:function(e,t,r){"use strict";function n(e){this.defaults=i.merge({},e),this.interceptors={request:new u,response:new u}}var o=r(773),i=r(709),s=r(772),u=r(771),a=r(779),c=r(777),f=r(774),p=r(749);n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.withCredentials=e.withCredentials||this.defaults.withCredentials,e.data=p(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r};var l=new n(o),h=e.exports=f(n.prototype.request,l);h.create=function(e){return new n(e)},h.defaults=l.defaults,h.all=function(e){return Promise.all(e)},h.spread=r(782),h.interceptors=l.interceptors,i.forEach(["delete","get","head"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))},h[e]=f(n.prototype[e],l)}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))},h[e]=f(n.prototype[e],l)})},771:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(709);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},772:function(e,t,r){"use strict";(function(t){e.exports=function(e){return new Promise(function(n,o){try{var i;"function"==typeof e.adapter?i=e.adapter:"undefined"!=typeof XMLHttpRequest?i=r(748):"undefined"!=typeof t&&(i=r(748)),"function"==typeof i&&i(n,o,e)}catch(s){o(s)}})}}).call(t,r(84))},773:function(e,t,r){"use strict";var n=r(709),o=/^\)\]\}',?\n/,i={"Content-Type":"application/x-www-form-urlencoded"};e.exports={transformRequest:[function(e,t){return n.isFormData(e)?e:n.isArrayBuffer(e)?e:n.isArrayBufferView(e)?e.buffer:!n.isObject(e)||n.isFile(e)||n.isBlob(e)?e:(n.isUndefined(t)||(n.forEach(t,function(e,r){"content-type"===r.toLowerCase()&&(t["Content-Type"]=e)}),n.isUndefined(t["Content-Type"])&&(t["Content-Type"]="application/json;charset=utf-8")),JSON.stringify(e))}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(o,"");try{e=JSON.parse(e)}catch(t){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:n.merge(i),post:n.merge(i),put:n.merge(i)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"}},774:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},775:function(e,t){"use strict";function r(e){this.message=e}function n(e){for(var t,n,i=String(e),s="",u=0,a=o;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&t>>8-u%1*8)){if(n=i.charCodeAt(u+=.75),n>255)throw new r("INVALID_CHARACTER_ERR: DOM Exception 5");t=t<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=n},776:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(709);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},777:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},778:function(e,t,r){"use strict";var n=r(709);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},779:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},780:function(e,t,r){"use strict";var n=r(709);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},781:function(e,t,r){"use strict";var n=r(709);e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+r:r)}),i):i}},782:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},844:function(e,t,r){"use strict";var n=r(178),o=r(110),i=r(769),s=(r.n(i),{fetchMovieList:function(){return r.i(o.a)(n.a+"/movie/top250").then(function(e){return e})["catch"](function(e){return e})}});t.a=s}});