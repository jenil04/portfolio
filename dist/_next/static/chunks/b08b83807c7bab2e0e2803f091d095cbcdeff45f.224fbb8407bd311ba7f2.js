(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},ODaL:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={error:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console&&(n&&n.length<=1&&(n=n[0]||""),console.error("[next-auth][error][".concat(e.toLowerCase(),"]"),n,"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase())))},warn:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console&&(n&&n.length<=1&&(n=n[0]||""),console.warn("[next-auth][warn][".concat(e.toLowerCase(),"]"),n,"\nhttps://next-auth.js.org/warning#".concat(e.toLowerCase())))},debug:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console&&(r&&r.length<=1&&(r=r[0]||""),e&&e.env&&e.env._NEXTAUTH_DEBUG&&console.log("[next-auth][debug][".concat(t.toLowerCase(),"]"),r))}};t.default=n}).call(this,n("8oxB"))},XJ4Q:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("q1tI"),o=a(n("ODaL")),i=a(n("vFaK"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}var d={baseUrl:(0,i.default)(e.env.NEXTAUTH_URL||e.env.VERCEL_URL).baseUrl,basePath:(0,i.default)(e.env.NEXTAUTH_URL).basePath,keepAlive:0,clientMaxAge:0,_clientLastSync:0,_clientSyncTimer:null,_eventListenersAdded:!1,_clientSession:void 0,_clientId:Math.random().toString(36).substring(2)+Date.now().toString(36),_getSession:()=>{}};"undefined"!==typeof window&&!1===d._eventListenersAdded&&(d._eventListenersAdded=!0,window.addEventListener("storage",function(){var e=f((function*(e){if("nextauth.message"===e.key){var t=JSON.parse(e.newValue);if(t.event&&"session"===t.event&&t.data){if(d._clientId===t.clientId)return;yield d._getSession({event:"storage"})}}}));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("focus",function(){var e=f((function*(e){return d._getSession({event:"focus"})}));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("blur",function(){var e=f((function*(e){return d._getSession({event:"blur"})}));return function(t){return e.apply(this,arguments)}}()));var p=function(){var{baseUrl:e,basePath:t,clientMaxAge:n,keepAlive:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&(d.baseUrl=e),t&&(d.basePath=t),n&&(d.clientMaxAge=n),r&&(d.keepAlive=r,"undefined"!==typeof window&&r>0&&(null!==d._clientSyncTimer&&clearTimeout(d._clientSyncTimer),d._clientSyncTimer=setTimeout(f((function*(){d._clientSession&&(yield d._getSession({event:"timer"}))})),1e3*r)))},v=function(){var e=f((function*(){var{req:e,ctx:t,triggerEvent:n=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!e&&t&&t.req&&(e=t.req);var r=S(),o=e?{headers:{cookie:e.headers.cookie}}:{},i=yield O("".concat(r,"/session"),o);return n&&j({event:"session",data:{trigger:"getSession"}}),i}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=f((function*(){var{req:e,ctx:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!e&&t&&t.req&&(e=t.req);var n=S(),r=e?{headers:{cookie:e.headers.cookie}}:{},o=yield O("".concat(n,"/csrf"),r);return o&&o.csrfToken?o.csrfToken:null}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=f((function*(){var e=S();return O("".concat(e,"/providers"))}));return function(){return e.apply(this,arguments)}}(),b=(0,r.createContext)(),_=e=>{var t=(0,r.useContext)(b);return void 0===t?w(e):t},w=e=>{var[t,n]=(0,r.useState)(e),[i,a]=(0,r.useState)(!0),c=function(){var e=f((function*(){var{event:e=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=null!==e,r=!(!e||"storage"!==e),i=d.clientMaxAge,c=parseInt(d._clientLastSync),u=Math.floor((new Date).getTime()/1e3),l=d._clientSession;if(!1===r&&void 0!==l){if(0===i&&!0!==t)return;if(i>0&&null===l)return;if(i>0&&u<c+i)return}void 0===l&&(d._clientSession=null),d._clientLastSync=Math.floor((new Date).getTime()/1e3);var s=!1===r,f=yield v({triggerEvent:s});d._clientSession=f,n(f),a(!1)}catch(p){o.default.error("CLIENT_USE_SESSION_ERROR",p)}}));return function(){return e.apply(this,arguments)}}();return d._getSession=c,(0,r.useEffect)(()=>{c()}),[t,i]},g=function(){var e=f((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=S(),r=t&&t.callbackUrl?t.callbackUrl:window.location,o=yield h();if(e&&o[e]){var i="credentials"===o[e].type?"".concat(n,"/callback/").concat(e):"".concat(n,"/signin/").concat(e),a={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:P(u(u({},t),{},{csrfToken:yield y(),callbackUrl:r,json:!0}))},c=yield fetch(i,a),l=yield c.json();window.location=l.url?l.url:r}else window.location="".concat(n,"/signin?callbackUrl=").concat(encodeURIComponent(r))}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=f((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e&&e.callbackUrl?e.callbackUrl:window.location,n=S(),r={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:P({csrfToken:yield y(),callbackUrl:t,json:!0})},o=yield fetch("".concat(n,"/signout"),r),i=yield o.json();j({event:"session",data:{trigger:"signout"}}),window.location=i.url?i.url:t}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=f((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var n=yield fetch(e,t),r=yield n.json();return Promise.resolve(Object.keys(r).length>0?r:null)}catch(i){return o.default.error("CLIENT_FETCH_ERROR",e,i),Promise.resolve(null)}}));return function(t){return e.apply(this,arguments)}}(),S=()=>"undefined"===typeof window?(e.env.NEXTAUTH_URL||o.default.warn("NEXTAUTH_URL","NEXTAUTH_URL environment variable not set"),"".concat(d.baseUrl).concat(d.basePath)):d.basePath,P=e=>Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&"),j=e=>{if("undefined"!==typeof localStorage){var t=Math.floor((new Date).getTime()/1e3);localStorage.setItem("nextauth.message",JSON.stringify(u(u({},e),{},{clientId:d._clientId,timestamp:t})))}},x={getSession:v,getCsrfToken:y,getProviders:h,useSession:_,signIn:g,signOut:m,Provider:e=>{var{children:t,session:n,options:o}=e;return p(o),(0,r.createElement)(b.Provider,{value:_(n)},t)},setOptions:p,options:p,session:v,providers:h,csrfToken:y,signin:g,signout:m};t.default=x}).call(this,n("8oxB"))},mrSG:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return c})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return s})),n.d(t,"__generator",(function(){return f})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return v})),n.d(t,"__read",(function(){return y})),n.d(t,"__spread",(function(){return h})),n.d(t,"__spreadArrays",(function(){return b})),n.d(t,"__await",(function(){return _})),n.d(t,"__asyncGenerator",(function(){return w})),n.d(t,"__asyncDelegator",(function(){return g})),n.d(t,"__asyncValues",(function(){return m})),n.d(t,"__makeTemplateObject",(function(){return O})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return P})),n.d(t,"__classPrivateFieldGet",(function(){return j})),n.d(t,"__classPrivateFieldSet",(function(){return x}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function d(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function v(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof _?Promise.resolve(n.value.v).then(u,l):s(i[0][2],n)}catch(r){s(i[0][3],r)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function s(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:_(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function m(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function P(e){return e&&e.__esModule?e:{default:e}}function j(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function x(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},nGE6:function(e,t,n){e.exports=n("XJ4Q").default},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vFaK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>{e||(e="".concat("http://localhost:3000").concat("/api/auth"));var t=e.match(/^http?:\/\//)?"http":"https";e=e.replace(/^https?:\/\//,"").replace(/\/$/,"");var[n,...r]=e.split("/");return{baseUrl:n?"".concat(t,"://").concat(n):"http://localhost:3000",basePath:r.length>0?"/".concat(r.join("/")):"/api/auth"}}},z946:function(e,t,n){"use strict";var r=n("q1tI"),o=(n("Wqxj"),Object(r.createContext)({}));t.a=o}}]);