let e,t;var r,n,a,i,s,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},l={},d=o.parcelRequire3427;null==d&&((d=function(e){if(e in c)return c[e].exports;if(e in l){var t=l[e];delete l[e];var r={id:e,exports:{}};return c[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},o.parcelRequire3427=d),d("amrNH");const u=document.querySelector(".js-mobile-menu"),h=document.querySelector(".js-header-open-modal"),p=document.querySelector(".js-header-close"),f=document.querySelector("body"),m=document.querySelector(".header-nav-item");h.addEventListener("click",function(){u.classList.add("is-open"),p.classList.remove("is-hidden"),h.classList.add("is-hidden"),f.style.overflow="hidden"}),p.addEventListener("click",function(){u.classList.remove("is-open"),p.classList.add("is-hidden"),h.classList.remove("is-hidden"),f.style.overflow="auto"}),m.addEventListener("click",function(e){});const g=document.querySelectorAll(".active-home"),b=document.querySelectorAll(".active-shoping");document.title,"/shoping_list.html"===window.location.pathname&&(g.forEach(e=>{e.classList.remove("active")}),b.forEach(e=>{e.classList.add("active")})),d("mpUiK");const y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://i.ibb.co/ZKXN8rg/sup1.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://i.ibb.co/JdtRHqp/sup2.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://i.ibb.co/JyQXRMf/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://i.ibb.co/p4CWCH5/sup4.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://i.ibb.co/CVJQ8Gz/sup5.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://i.ibb.co/tLVRLhJ/sup6.png"},{title:"World vision",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://i.ibb.co/b5zgNMz/sup7.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://www.wvi.org/emergencies/ukraine",img:"https://i.ibb.co/Bs51z6p/sup8.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://i.ibb.co/gDs4nFt/sup9.png"}],E=document.querySelector(".support-list"),v=document.getElementById("button");v&&v.addEventListener("click",function(){let e=document.getElementById("support-list"),t=e.firstElementChild,r="World vision"===t.alt;t.classList.add("hidden"),e.removeChild(t),setTimeout(()=>{r?e.insertBefore(t,e.firstChild):e.appendChild(t),t.classList.remove("hidden")},300)}),d("8o8fR"),function(){let e=document.querySelector("#dn");e.addEventListener("click",function(e){(function(){let e=document.documentElement,t="light"===e.getAttribute("data-theme")?"dark":"light";e.setAttribute("data-theme",t),localStorage.setItem("theme",t)})()}),"dark"===localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme","dark")}(),d("amrNH"),(()=>{let e={openModalBtn:document.querySelector(".header-open-modal-btn"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const w=document.getElementById("signup-btn"),S=document.getElementById("signin-btn"),L=document.querySelector(".js-up"),_=document.querySelector(".js-in");function I(){let e=firebase.auth().currentUser;if(e){let t=firebase.database().ref("comments");t.on("value",function(t){let r=document.getElementById("comments");r.innerHTML="",t.forEach(function(t){let n=t.val(),a=t.key;if(n.userId===e.uid){let e=document.createElement("div");e.innerHTML=`
            <span>${n.comment}</span>
            <button id="${a}">Видалити</button>
          `,r.appendChild(e),document.getElementById(a).addEventListener("click",function(){(function(e){let t=firebase.auth().currentUser;if(t){let r=firebase.database().ref("comments").child(e);r.once("value",function(e){let n=e.val();n.userId===t.uid&&r.remove().then(function(){I()}).catch(function(e){console.log(e)})})}})(a)})}})})}}L.addEventListener("click",function(){L.classList.add("hover-color"),_.classList.remove("hover-color"),w.classList.remove("is-display"),S.classList.add("is-display")}),_.addEventListener("click",function(){L.classList.remove("hover-color"),_.classList.add("hover-color"),w.classList.add("is-display"),S.classList.remove("is-display")});let B=document.getElementById("btnOpenModal");var C={};function D(){throw Error("setTimeout has not been defined")}function A(){throw Error("clearTimeout has not been defined")}function T(e){if(n===setTimeout)return setTimeout(e,0);if((n===D||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:D}catch(e){n=D}try{a="function"==typeof clearTimeout?clearTimeout:A}catch(e){a=A}}();var N=[],k=!1,O=-1;function M(){k&&i&&(k=!1,i.length?N=i.concat(N):O=-1,N.length&&H())}function H(){if(!k){var e=T(M);k=!0;for(var t=N.length;t;){for(i=N,N=[];++O<t;)i&&i[O].run();O=-1,t=N.length}i=null,k=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===A||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function R(e,t){this.fun=e,this.array=t}function $(){}C.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];N.push(new R(e,t)),1!==N.length||k||T(H)},R.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=$,C.addListener=$,C.once=$,C.off=$,C.removeListener=$,C.removeAllListeners=$,C.emit=$,C.prependListener=$,C.prependOnceListener=$,C.listeners=function(e){return[]},C.binding=function(e){throw Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(e){throw Error("process.chdir is not supported")},C.umask=function(){return 0};const P=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:(a<2048?t[r++]=a>>6|192:((64512&a)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128):t[r++]=a>>12|224,t[r++]=a>>6&63|128),t[r++]=63&a|128)}return t},x=function(e){let t=[],r=0,n=0;for(;r<e.length;){let a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=e[r++],s=e[r++],o=e[r++],c=((7&a)<<18|(63&i)<<12|(63&s)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(1023&c))}else{let i=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&s)}}return t.join("")},j={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,l=a>>2,d=(3&a)<<4|s>>4,u=(15&s)<<2|c>>6,h=63&c;o||(h=64,i||(u=64)),n.push(r[l],r[d],r[u],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(P(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):x(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let a=r[e.charAt(t++)],i=t<e.length,s=i?r[e.charAt(t)]:0;++t;let o=t<e.length,c=o?r[e.charAt(t)]:64;++t;let l=t<e.length,d=l?r[e.charAt(t)]:64;if(++t,null==a||null==s||null==c||null==d)throw new V;let u=a<<2|s>>4;if(n.push(u),64!==c){let e=s<<4&240|c>>2;if(n.push(e),64!==d){let e=c<<6&192|d;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class V extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W=function(e){let t=P(e);return j.encodeByteArray(t,!0)},F=function(e){return W(e).replace(/\./g,"")};class U extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,q.prototype.create)}}class q{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,a=this.errors[e],i=a?a.replace(z,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${i} (${n}).`,o=new U(n,s,r);return o}}const z=/\{\$([^}]+)}/g;class G{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const J=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(s||(s={}));const K={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},Z=s.INFO,Q={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},X=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),a=Q[t];if(a)console[a](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Y=(e,t)=>t.some(t=>e instanceof t),ee=new WeakMap,et=new WeakMap,er=new WeakMap,en=new WeakMap,ea=new WeakMap;let ei={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return et.get(e);if("objectStoreNames"===t)return e.objectStoreNames||er.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return es(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function es(r){var n;if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(es(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&ee.set(t,e)}).catch(()=>{}),ea.set(t,e),t}(r);if(en.has(r))return en.get(r);let a="function"==typeof(n=r)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(eo(this),e),es(ee.get(this))}:function(...e){return es(n.apply(eo(this),e))}:function(e,...t){let r=n.call(eo(this),e,...t);return er.set(r,e.sort?e.sort():[e]),es(r)}:(n instanceof IDBTransaction&&function(e){if(et.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});et.set(e,t)}(n),Y(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,ei):n;return a!==r&&(en.set(r,a),ea.set(a,r)),a}const eo=e=>ea.get(e),ec=["get","getKey","getAll","getAllKeys","count"],el=["put","add","delete","clear"],ed=new Map;function eu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ed.get(t))return ed.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,a=el.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(a||ec.includes(r)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),s=i.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),a&&i.done]))[0]};return ed.set(t,i),i}ei={...r=ei,get:(e,t,n)=>eu(e,t)||r.get(e,t,n),has:(e,t)=>!!eu(e,t)||r.has(e,t)};class eh{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ep="@firebase/app",ef="0.9.14",em=new class{constructor(e){this.name=e,this._logLevel=Z,this._logHandler=X,this._userLogHandler=null,J.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?K[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}("@firebase/app"),eg={[ep]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eb=new Map,ey=new Map;function eE(e){let t=e.name;if(ey.has(t))return em.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(ey.set(t,e),eb.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){em.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}const ev=new q("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});function ew(e,t,r){var n;let a=null!==(n=eg[e])&&void 0!==n?n:e;r&&(a+=`-${r}`);let i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${a}" with version "${t}":`];i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),em.warn(e.join(" "));return}eE(new G(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}const eS="firebase-heartbeat-store";let eL=null;function e_(){return eL||(eL=(function(e,t,{blocked:r,upgrade:n,blocking:a,terminated:i}={}){let s=indexedDB.open(e,1),o=es(s);return n&&s.addEventListener("upgradeneeded",e=>{n(es(s.result),e.oldVersion,e.newVersion,es(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eS)}}).catch(e=>{throw ev.create("idb-open",{originalErrorMessage:e.message})})),eL}async function eI(e){try{let t=await e_(),r=await t.transaction(eS).objectStore(eS).get(eC(e));return r}catch(e){if(e instanceof U)em.warn(e.message);else{let t=ev.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});em.warn(t.message)}}}async function eB(e,t){try{let r=await e_(),n=r.transaction(eS,"readwrite"),a=n.objectStore(eS);await a.put(t,eC(e)),await n.done}catch(e){if(e instanceof U)em.warn(e.message);else{let t=ev.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});em.warn(t.message)}}}function eC(e){return`${e.name}!${e.options.appId}`}class eD{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eT(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=eA();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eA(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let a of e){let e=r.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),eN(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),eN(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=F(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function eA(){let e=new Date;return e.toISOString().substring(0,10)}class eT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eI(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function eN(e){return F(JSON.stringify({version:2,heartbeats:e})).length}eE(new G("platform-logger",e=>new eh(e),"PRIVATE")),eE(new G("heartbeat",e=>new eD(e),"PRIVATE")),ew(ep,ef,""),ew(ep,ef,"esm2017"),ew("fire-js",""),ew("firebase","10.0.0","app"),firebase.initializeApp({apiKey:"AIzaSyCFBwN4f9PmRfsv-nwy-H-N5NRWZgQ_2wA",authDomain:"auth-boock-project.firebaseapp.com",databaseURL:"https://auth-boock-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"auth-boock-project",storageBucket:"auth-boock-project.appspot.com",messagingSenderId:"547291511782",appId:"1:547291511782:web:dd5afcb2d3d0d0b2013427",databaseURL:"https://auth-boock-project-default-rtdb.europe-west1.firebasedatabase.app/"});let ek=document.getElementById("signout-btn");function eO(){let e=document.getElementById("auth-container"),t=document.getElementById("comments-container"),r=firebase.auth().currentUser.displayName,n=document.getElementById("user-name");n.textContent="Вітаємо, "+r+"!",e.style.display="none",t.style.display="block"}function eM(){let e=document.getElementById("auth-container"),t=document.getElementById("comments-container");e.style.display="block",t.style.display="none"}ek.classList.add("is-display"),w.addEventListener("click",function(){let e=document.getElementById("email").value,t=document.getElementById("password").value,r=document.getElementById("name").value;firebase.auth().createUserWithEmailAndPassword(e,t).then(function(e){let t=e.user;ek.classList.remove("is-display"),document.getElementById("header-auth").classList.remove("is-hidden"),B.textContent=`${r}`,t.updateProfile({displayName:r}).then(function(){eO()}).catch(function(e){console.log(e),ek.classList.add("is-display")})}).catch(function(e){console.log(e),B.textContent="sing up"})}),S.addEventListener("click",function(){let e=document.getElementById("email").value,t=document.getElementById("password").value,r=document.getElementById("name").value;firebase.auth().signInWithEmailAndPassword(e,t).then(function(){eO(),I(),ek.classList.remove("is-display"),document.getElementById("header-auth").classList.remove("is-hidden"),B.textContent=`${r}`}).catch(function(e){console.log(e),ek.classList.add("is-display"),B.textContent="sing up"})}),ek.addEventListener("click",function(){firebase.auth().signOut().then(function(){eM(),ek.classList.add("is-display"),document.getElementById("header-auth").classList.add("is-hidden"),B.textContent="sing up"}).catch(function(e){console.log(e)})}),document.getElementById("add-comment-btn").addEventListener("click",function(){let e=firebase.auth().currentUser,t=document.getElementById("comment-input").value;if(e){let r=firebase.database().ref("comments");r.push().set({userId:e.uid,comment:t}).then(function(){document.getElementById("comment-input").value="",I()}).catch(function(e){console.log(e)})}}),firebase.auth().onAuthStateChanged(function(e){e?(eO(),I()):eM()}),function(){let e=document.querySelector(".dn"),t="true"===localStorage.getItem("toggleState");e.checked=t,e.addEventListener("change",function(){localStorage.setItem("toggleState",e.checked)})}(),function(){let e="",t=0;y.forEach(r=>{let{title:n,url:a,img:i}=r;t+=1;let s=`
      <li class="support_item">
        <a class="support_a" href="${a}"><span>0${t}</span>
          <img class="sup-img" src="${i}" alt="${n}" alt='support'>
        </a>
      </li>`;e+=s}),E.insertAdjacentHTML("beforeend",e)}();
//# sourceMappingURL=main.4f11015b.js.map
