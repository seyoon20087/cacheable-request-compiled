(()=>{var e={481:(e,t,r)=>{"use strict";const s=r(361),i=r(310),o=r(15),a=r(31),n=r(214),c=r(259),h=r(989),u=r(715),l=r(958);class d{constructor(e,t){if("function"!=typeof e)throw new TypeError("Parameter `request` must be a function");return this.cache=new l({uri:"string"==typeof t&&t,store:"string"!=typeof t&&t,namespace:"cacheable-request"}),this.createCacheableRequest(e)}createCacheableRequest(e){return(t,r)=>{let l;if("string"==typeof t)l=p(i.parse(t)),t={};else if(t instanceof i.URL)l=p(i.parse(t.toString())),t={};else{const[e,...r]=(t.path||"").split("?"),s=r.length>0?`?${r.join("?")}`:"";l=p({...t,pathname:e,search:s})}(t={headers:{},method:"GET",cache:!0,strictTtl:!1,automaticFailover:!1,...t,...f(l)}).headers=h(t.headers);const m=new s,_=o(i.format(l),{stripWWW:!1,removeTrailingSlash:!1,stripAuthentication:!1}),y=`${t.method}:${_}`;let g=!1,v=!1;const w=t=>{v=!0;let s,i=!1;const o=new Promise((e=>{s=()=>{i||(i=!0,e())}})),h=e=>{if(g&&!t.forceRefresh){e.status=e.statusCode;const r=n.fromObject(g.cachePolicy).revalidatedPolicy(t,e);if(!r.modified){const t=r.policy.responseHeaders();(e=new c(g.statusCode,t,g.body,g.url)).cachePolicy=r.policy,e.fromCache=!0}}let s;e.fromCache||(e.cachePolicy=new n(t,e,t),e.fromCache=!1),t.cache&&e.cachePolicy.storable()?(s=u(e),(async()=>{try{const r=a.buffer(e);if(await Promise.race([o,new Promise((t=>e.once("end",t)))]),i)return;const s=await r,n={cachePolicy:e.cachePolicy.toObject(),url:e.url,statusCode:e.fromCache?g.statusCode:e.statusCode,body:s};let c=t.strictTtl?e.cachePolicy.timeToLive():void 0;t.maxTtl&&(c=c?Math.min(c,t.maxTtl):t.maxTtl),await this.cache.set(y,n,c)}catch(e){m.emit("error",new d.CacheError(e))}})()):t.cache&&g&&(async()=>{try{await this.cache.delete(y)}catch(e){m.emit("error",new d.CacheError(e))}})(),m.emit("response",s||e),"function"==typeof r&&r(s||e)};try{const r=e(t,h);r.once("error",s),r.once("abort",s),m.emit("request",r)}catch(e){m.emit("error",new d.RequestError(e))}};return(async()=>{const e=async e=>{await Promise.resolve();const t=e.cache?await this.cache.get(y):void 0;if(void 0===t)return w(e);const s=n.fromObject(t.cachePolicy);if(s.satisfiesWithoutRevalidation(e)&&!e.forceRefresh){const e=s.responseHeaders(),i=new c(t.statusCode,e,t.body,t.url);i.cachePolicy=s,i.fromCache=!0,m.emit("response",i),"function"==typeof r&&r(i)}else g=t,e.headers=s.revalidationHeaders(e),w(e)},s=e=>m.emit("error",new d.CacheError(e));this.cache.once("error",s),m.on("response",(()=>this.cache.removeListener("error",s)));try{await e(t)}catch(e){t.automaticFailover&&!v&&w(t),m.emit("error",new d.CacheError(e))}})(),m}}}function f(e){const t={...e};return t.path=`${e.pathname||"/"}${e.search||""}`,delete t.pathname,delete t.search,t}function p(e){return{protocol:e.protocol,auth:e.auth,hostname:e.hostname||e.host||"localhost",port:e.port,pathname:e.pathname,search:e.search}}d.RequestError=class extends Error{constructor(e){super(e.message),this.name="RequestError",Object.assign(this,e)}},d.CacheError=class extends Error{constructor(e){super(e.message),this.name="CacheError",Object.assign(this,e)}},e.exports=d},715:(e,t,r)=>{"use strict";const s=r(781).PassThrough,i=r(344);e.exports=e=>{if(!e||!e.pipe)throw new TypeError("Parameter `response` must be a response stream.");const t=new s;return i(e,t),e.pipe(t)}},840:(e,t,r)=>{var s=r(778),i=function(){},o=function(e,t,r){if("function"==typeof t)return o(e,null,t);t||(t={}),r=s(r||i);var a=e._writableState,n=e._readableState,c=t.readable||!1!==t.readable&&e.readable,h=t.writable||!1!==t.writable&&e.writable,u=!1,l=function(){e.writable||d()},d=function(){h=!1,c||r.call(e)},f=function(){c=!1,h||r.call(e)},p=function(t){r.call(e,t?new Error("exited with error code: "+t):null)},m=function(t){r.call(e,t)},_=function(){process.nextTick(y)},y=function(){if(!u)return(!c||n&&n.ended&&!n.destroyed)&&(!h||a&&a.ended&&!a.destroyed)?void 0:r.call(e,new Error("premature close"))},g=function(){e.req.on("finish",d)};return!function(e){return e.setHeader&&"function"==typeof e.abort}(e)?h&&!a&&(e.on("end",l),e.on("close",l)):(e.on("complete",d),e.on("abort",_),e.req?g():e.on("request",g)),function(e){return e.stdio&&Array.isArray(e.stdio)&&3===e.stdio.length}(e)&&e.on("exit",p),e.on("end",f),e.on("finish",d),!1!==t.error&&e.on("error",m),e.on("close",_),function(){u=!0,e.removeListener("complete",d),e.removeListener("abort",_),e.removeListener("request",g),e.req&&e.req.removeListener("finish",d),e.removeListener("end",l),e.removeListener("close",l),e.removeListener("finish",d),e.removeListener("exit",p),e.removeListener("end",f),e.removeListener("error",m),e.removeListener("close",_)}};e.exports=o},105:(e,t,r)=>{"use strict";const{PassThrough:s}=r(781);e.exports=e=>{e={...e};const{array:t}=e;let{encoding:r}=e;const i="buffer"===r;let o=!1;t?o=!(r||i):r=r||"utf8",i&&(r=null);const a=new s({objectMode:o});r&&a.setEncoding(r);let n=0;const c=[];return a.on("data",(e=>{c.push(e),o?n=c.length:n+=e.length})),a.getBufferedValue=()=>t?c:i?Buffer.concat(c,n):c.join(""),a.getBufferedLength=()=>n,a}},31:(e,t,r)=>{"use strict";const{constants:s}=r(300),i=r(286),o=r(105);class a extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}}async function n(e,t){if(!e)return Promise.reject(new Error("Expected a stream"));t={maxBuffer:1/0,...t};const{maxBuffer:r}=t;let n;return await new Promise(((c,h)=>{const u=e=>{e&&n.getBufferedLength()<=s.MAX_LENGTH&&(e.bufferedData=n.getBufferedValue()),h(e)};n=i(e,o(t),(e=>{e?u(e):c()})),n.on("data",(()=>{n.getBufferedLength()>r&&u(new a)}))})),n.getBufferedValue()}e.exports=n,e.exports.default=n,e.exports.buffer=(e,t)=>n(e,{...t,encoding:"buffer"}),e.exports.array=(e,t)=>n(e,{...t,array:!0}),e.exports.MaxBufferError=a},214:e=>{"use strict";const t=new Set([200,203,204,206,300,301,308,404,405,410,414,501]),r=new Set([200,203,204,300,301,302,303,307,308,404,405,410,414,501]),s=new Set([500,502,503,504]),i={date:!0,connection:!0,"keep-alive":!0,"proxy-authenticate":!0,"proxy-authorization":!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0},o={"content-length":!0,"content-encoding":!0,"transfer-encoding":!0,"content-range":!0};function a(e){const t=parseInt(e,10);return isFinite(t)?t:0}function n(e){const t={};if(!e)return t;const r=e.trim().split(/,/);for(const e of r){const[r,s]=e.split(/=/,2);t[r.trim()]=void 0===s||s.trim().replace(/^"|"$/g,"")}return t}function c(e){let t=[];for(const r in e){const s=e[r];t.push(!0===s?r:r+"="+s)}if(t.length)return t.join(", ")}e.exports=class{constructor(e,t,{shared:r,cacheHeuristic:s,immutableMinTimeToLive:i,ignoreCargoCult:o,_fromObject:a}={}){if(a)this._fromObject(a);else{if(!t||!t.headers)throw Error("Response headers missing");this._assertRequestHasHeaders(e),this._responseTime=this.now(),this._isShared=!1!==r,this._cacheHeuristic=void 0!==s?s:.1,this._immutableMinTtl=void 0!==i?i:864e5,this._status="status"in t?t.status:200,this._resHeaders=t.headers,this._rescc=n(t.headers["cache-control"]),this._method="method"in e?e.method:"GET",this._url=e.url,this._host=e.headers.host,this._noAuthorization=!e.headers.authorization,this._reqHeaders=t.headers.vary?e.headers:null,this._reqcc=n(e.headers["cache-control"]),o&&"pre-check"in this._rescc&&"post-check"in this._rescc&&(delete this._rescc["pre-check"],delete this._rescc["post-check"],delete this._rescc["no-cache"],delete this._rescc["no-store"],delete this._rescc["must-revalidate"],this._resHeaders=Object.assign({},this._resHeaders,{"cache-control":c(this._rescc)}),delete this._resHeaders.expires,delete this._resHeaders.pragma),null==t.headers["cache-control"]&&/no-cache/.test(t.headers.pragma)&&(this._rescc["no-cache"]=!0)}}now(){return Date.now()}storable(){return!(this._reqcc["no-store"]||!("GET"===this._method||"HEAD"===this._method||"POST"===this._method&&this._hasExplicitExpiration())||!r.has(this._status)||this._rescc["no-store"]||this._isShared&&this._rescc.private||this._isShared&&!this._noAuthorization&&!this._allowsStoringAuthenticated()||!(this._resHeaders.expires||this._rescc["max-age"]||this._isShared&&this._rescc["s-maxage"]||this._rescc.public||t.has(this._status)))}_hasExplicitExpiration(){return this._isShared&&this._rescc["s-maxage"]||this._rescc["max-age"]||this._resHeaders.expires}_assertRequestHasHeaders(e){if(!e||!e.headers)throw Error("Request headers missing")}satisfiesWithoutRevalidation(e){this._assertRequestHasHeaders(e);const t=n(e.headers["cache-control"]);if(t["no-cache"]||/no-cache/.test(e.headers.pragma))return!1;if(t["max-age"]&&this.age()>t["max-age"])return!1;if(t["min-fresh"]&&this.timeToLive()<1e3*t["min-fresh"])return!1;if(this.stale()){if(!(t["max-stale"]&&!this._rescc["must-revalidate"]&&(!0===t["max-stale"]||t["max-stale"]>this.age()-this.maxAge())))return!1}return this._requestMatches(e,!1)}_requestMatches(e,t){return(!this._url||this._url===e.url)&&this._host===e.headers.host&&(!e.method||this._method===e.method||t&&"HEAD"===e.method)&&this._varyMatches(e)}_allowsStoringAuthenticated(){return this._rescc["must-revalidate"]||this._rescc.public||this._rescc["s-maxage"]}_varyMatches(e){if(!this._resHeaders.vary)return!0;if("*"===this._resHeaders.vary)return!1;const t=this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);for(const r of t)if(e.headers[r]!==this._reqHeaders[r])return!1;return!0}_copyWithoutHopByHopHeaders(e){const t={};for(const r in e)i[r]||(t[r]=e[r]);if(e.connection){const r=e.connection.trim().split(/\s*,\s*/);for(const e of r)delete t[e]}if(t.warning){const e=t.warning.split(/,/).filter((e=>!/^\s*1[0-9][0-9]/.test(e)));e.length?t.warning=e.join(",").trim():delete t.warning}return t}responseHeaders(){const e=this._copyWithoutHopByHopHeaders(this._resHeaders),t=this.age();return t>86400&&!this._hasExplicitExpiration()&&this.maxAge()>86400&&(e.warning=(e.warning?`${e.warning}, `:"")+'113 - "rfc7234 5.5.4"'),e.age=`${Math.round(t)}`,e.date=new Date(this.now()).toUTCString(),e}date(){const e=Date.parse(this._resHeaders.date);return isFinite(e)?e:this._responseTime}age(){return this._ageValue()+(this.now()-this._responseTime)/1e3}_ageValue(){return a(this._resHeaders.age)}maxAge(){if(!this.storable()||this._rescc["no-cache"])return 0;if(this._isShared&&this._resHeaders["set-cookie"]&&!this._rescc.public&&!this._rescc.immutable)return 0;if("*"===this._resHeaders.vary)return 0;if(this._isShared){if(this._rescc["proxy-revalidate"])return 0;if(this._rescc["s-maxage"])return a(this._rescc["s-maxage"])}if(this._rescc["max-age"])return a(this._rescc["max-age"]);const e=this._rescc.immutable?this._immutableMinTtl:0,t=this.date();if(this._resHeaders.expires){const r=Date.parse(this._resHeaders.expires);return Number.isNaN(r)||r<t?0:Math.max(e,(r-t)/1e3)}if(this._resHeaders["last-modified"]){const r=Date.parse(this._resHeaders["last-modified"]);if(isFinite(r)&&t>r)return Math.max(e,(t-r)/1e3*this._cacheHeuristic)}return e}timeToLive(){const e=this.maxAge()-this.age(),t=e+a(this._rescc["stale-if-error"]),r=e+a(this._rescc["stale-while-revalidate"]);return 1e3*Math.max(0,e,t,r)}stale(){return this.maxAge()<=this.age()}_useStaleIfError(){return this.maxAge()+a(this._rescc["stale-if-error"])>this.age()}useStaleWhileRevalidate(){return this.maxAge()+a(this._rescc["stale-while-revalidate"])>this.age()}static fromObject(e){return new this(void 0,void 0,{_fromObject:e})}_fromObject(e){if(this._responseTime)throw Error("Reinitialized");if(!e||1!==e.v)throw Error("Invalid serialization");this._responseTime=e.t,this._isShared=e.sh,this._cacheHeuristic=e.ch,this._immutableMinTtl=void 0!==e.imm?e.imm:864e5,this._status=e.st,this._resHeaders=e.resh,this._rescc=e.rescc,this._method=e.m,this._url=e.u,this._host=e.h,this._noAuthorization=e.a,this._reqHeaders=e.reqh,this._reqcc=e.reqcc}toObject(){return{v:1,t:this._responseTime,sh:this._isShared,ch:this._cacheHeuristic,imm:this._immutableMinTtl,st:this._status,resh:this._resHeaders,rescc:this._rescc,m:this._method,u:this._url,h:this._host,a:this._noAuthorization,reqh:this._reqHeaders,reqcc:this._reqcc}}revalidationHeaders(e){this._assertRequestHasHeaders(e);const t=this._copyWithoutHopByHopHeaders(e.headers);if(delete t["if-range"],!this._requestMatches(e,!0)||!this.storable())return delete t["if-none-match"],delete t["if-modified-since"],t;this._resHeaders.etag&&(t["if-none-match"]=t["if-none-match"]?`${t["if-none-match"]}, ${this._resHeaders.etag}`:this._resHeaders.etag);if(t["accept-ranges"]||t["if-match"]||t["if-unmodified-since"]||this._method&&"GET"!=this._method){if(delete t["if-modified-since"],t["if-none-match"]){const e=t["if-none-match"].split(/,/).filter((e=>!/^\s*W\//.test(e)));e.length?t["if-none-match"]=e.join(",").trim():delete t["if-none-match"]}}else this._resHeaders["last-modified"]&&!t["if-modified-since"]&&(t["if-modified-since"]=this._resHeaders["last-modified"]);return t}revalidatedPolicy(e,t){if(this._assertRequestHasHeaders(e),this._useStaleIfError()&&function(e){return!e||s.has(e.status)}(t))return{modified:!1,matches:!1,policy:this};if(!t||!t.headers)throw Error("Response headers missing");let r=!1;if(void 0!==t.status&&304!=t.status?r=!1:t.headers.etag&&!/^\s*W\//.test(t.headers.etag)?r=this._resHeaders.etag&&this._resHeaders.etag.replace(/^\s*W\//,"")===t.headers.etag:this._resHeaders.etag&&t.headers.etag?r=this._resHeaders.etag.replace(/^\s*W\//,"")===t.headers.etag.replace(/^\s*W\//,""):this._resHeaders["last-modified"]?r=this._resHeaders["last-modified"]===t.headers["last-modified"]:this._resHeaders.etag||this._resHeaders["last-modified"]||t.headers.etag||t.headers["last-modified"]||(r=!0),!r)return{policy:new this.constructor(e,t),modified:304!=t.status,matches:!1};const i={};for(const e in this._resHeaders)i[e]=e in t.headers&&!o[e]?t.headers[e]:this._resHeaders[e];const a=Object.assign({},t,{status:this._status,method:this._method,headers:i});return{policy:new this.constructor(e,a,{shared:this._isShared,cacheHeuristic:this._cacheHeuristic,immutableMinTimeToLive:this._immutableMinTtl}),modified:!1,matches:!0}}}},85:(e,t)=>{t.stringify=function e(t){if(void 0===t)return t;if(t&&Buffer.isBuffer(t))return JSON.stringify(":base64:"+t.toString("base64"));if(t&&t.toJSON&&(t=t.toJSON()),t&&"object"==typeof t){var r="",s=Array.isArray(t);r=s?"[":"{";var i=!0;for(var o in t){var a="function"==typeof t[o]||!s&&void 0===t[o];Object.hasOwnProperty.call(t,o)&&!a&&(i||(r+=","),i=!1,s?null==t[o]?r+="null":r+=e(t[o]):void 0!==t[o]&&(r+=e(o)+":"+e(t[o])))}return r+=s?"]":"}"}return"string"==typeof t?JSON.stringify(/^:/.test(t)?":"+t:t):void 0===t?"null":JSON.stringify(t)},t.parse=function(e){return JSON.parse(e,(function(e,t){return"string"==typeof t?/^:base64:/.test(t)?Buffer.from(t.substring(8),"base64"):/^:/.test(t)?t.substring(1):t:t}))}},958:(e,t,r)=>{"use strict";const s=r(361),i=r(85),o=["sqlite","postgres","mysql","mongo","redis","tiered"];e.exports=class extends s{constructor(e,{emitErrors:t=!0,...r}={}){if(super(),this.opts={namespace:"keyv",serialize:i.stringify,deserialize:i.parse,..."string"==typeof e?{uri:e}:e,...r},!this.opts.store){this.opts;this.opts.store=new Map}if(this.opts.compression){const e=this.opts.compression;this.opts.serialize=e.serialize.bind(e),this.opts.deserialize=e.deserialize.bind(e)}"function"==typeof this.opts.store.on&&t&&this.opts.store.on("error",(e=>this.emit("error",e))),this.opts.store.namespace=this.opts.namespace;const s=e=>async function*(){for await(const[t,r]of"function"==typeof e?e(this.opts.store.namespace):e){const e=this.opts.deserialize(r);this.opts.store.namespace&&!t.includes(this.opts.store.namespace)||("number"==typeof e.expires&&Date.now()>e.expires?this.delete(t):yield[this._getKeyUnprefix(t),e.value])}};"function"==typeof this.opts.store[Symbol.iterator]&&this.opts.store instanceof Map?this.iterator=s(this.opts.store):"function"==typeof this.opts.store.iterator&&this.opts.store.opts&&this._checkIterableAdaptar()&&(this.iterator=s(this.opts.store.iterator.bind(this.opts.store)))}_checkIterableAdaptar(){return o.includes(this.opts.store.opts.dialect)||o.findIndex((e=>this.opts.store.opts.url.includes(e)))>=0}_getKeyPrefix(e){return`${this.opts.namespace}:${e}`}_getKeyPrefixArray(e){return e.map((e=>`${this.opts.namespace}:${e}`))}_getKeyUnprefix(e){return e.split(":").splice(1).join(":")}get(e,t){const{store:r}=this.opts,s=Array.isArray(e),i=s?this._getKeyPrefixArray(e):this._getKeyPrefix(e);if(s&&void 0===r.getMany){const e=[];for(const s of i)e.push(Promise.resolve().then((()=>r.get(s))).then((e=>"string"==typeof e||this.opts.compression?this.opts.deserialize(e):e)).then((e=>{if(null!=e)return"number"==typeof e.expires&&Date.now()>e.expires?this.delete(s).then((()=>{})):t&&t.raw?e:e.value})));return Promise.allSettled(e).then((e=>{const t=[];for(const r of e)t.push(r.value);return t}))}return Promise.resolve().then((()=>s?r.getMany(i):r.get(i))).then((e=>"string"==typeof e||this.opts.compression?this.opts.deserialize(e):e)).then((r=>{if(null!=r){if(s){const s=[];for(let i of r)"string"==typeof i&&(i=this.opts.deserialize(i)),null!=i?"number"==typeof i.expires&&Date.now()>i.expires?(this.delete(e).then((()=>{})),s.push(void 0)):s.push(t&&t.raw?i:i.value):s.push(void 0);return s}return"number"==typeof r.expires&&Date.now()>r.expires?this.delete(e).then((()=>{})):t&&t.raw?r:r.value}}))}set(e,t,r){const s=this._getKeyPrefix(e);void 0===r&&(r=this.opts.ttl),0===r&&(r=void 0);const{store:i}=this.opts;return Promise.resolve().then((()=>{const e="number"==typeof r?Date.now()+r:null;return"symbol"==typeof t&&this.emit("error","symbol cannot be serialized"),t={value:t,expires:e},this.opts.serialize(t)})).then((e=>i.set(s,e,r))).then((()=>!0))}delete(e){const{store:t}=this.opts;if(Array.isArray(e)){const r=this._getKeyPrefixArray(e);if(void 0===t.deleteMany){const e=[];for(const s of r)e.push(t.delete(s));return Promise.allSettled(e).then((e=>e.every((e=>!0===e.value))))}return Promise.resolve().then((()=>t.deleteMany(r)))}const r=this._getKeyPrefix(e);return Promise.resolve().then((()=>t.delete(r)))}clear(){const{store:e}=this.opts;return Promise.resolve().then((()=>e.clear()))}has(e){const t=this._getKeyPrefix(e),{store:r}=this.opts;return Promise.resolve().then((async()=>{if("function"==typeof r.has)return r.has(t);return void 0!==await r.get(t)}))}disconnect(){const{store:e}=this.opts;if("function"==typeof e.disconnect)return e.disconnect()}}},989:e=>{"use strict";e.exports=e=>{const t={};for(const[r,s]of Object.entries(e))t[r.toLowerCase()]=s;return t}},344:e=>{"use strict";const t=["destroy","setTimeout","socket","headers","trailers","rawHeaders","statusCode","httpVersion","httpVersionMinor","httpVersionMajor","rawTrailers","statusMessage"];e.exports=(e,r)=>{const s=new Set(Object.keys(e).concat(t));for(const t of s)t in r||(r[t]="function"==typeof e[t]?e[t].bind(e):e[t])}},15:e=>{"use strict";const t=(e,t)=>t.some((t=>t instanceof RegExp?t.test(e):t===e));e.exports=(e,r)=>{if(r={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,sortQueryParameters:!0,...r},e=e.trim(),/^data:/i.test(e))return((e,{stripHash:t})=>{const r=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);if(!r)throw new Error(`Invalid URL: ${e}`);let{type:s,data:i,hash:o}=r.groups;const a=s.split(";");o=t?"":o;let n=!1;"base64"===a[a.length-1]&&(a.pop(),n=!0);const c=(a.shift()||"").toLowerCase(),h=[...a.map((e=>{let[t,r=""]=e.split("=").map((e=>e.trim()));return"charset"===t&&(r=r.toLowerCase(),"us-ascii"===r)?"":`${t}${r?`=${r}`:""}`})).filter(Boolean)];return n&&h.push("base64"),(0!==h.length||c&&"text/plain"!==c)&&h.unshift(c),`data:${h.join(";")},${n?i.trim():i}${o?`#${o}`:""}`})(e,r);if(/^view-source:/i.test(e))throw new Error("`view-source:` is not supported as it is a non-standard protocol");const s=e.startsWith("//");!s&&/^\.*\//.test(e)||(e=e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,r.defaultProtocol));const i=new URL(e);if(r.forceHttp&&r.forceHttps)throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");if(r.forceHttp&&"https:"===i.protocol&&(i.protocol="http:"),r.forceHttps&&"http:"===i.protocol&&(i.protocol="https:"),r.stripAuthentication&&(i.username="",i.password=""),r.stripHash?i.hash="":r.stripTextFragment&&(i.hash=i.hash.replace(/#?:~:text.*?$/i,"")),i.pathname&&(i.pathname=i.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g,"/")),i.pathname)try{i.pathname=decodeURI(i.pathname)}catch(e){}if(!0===r.removeDirectoryIndex&&(r.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(r.removeDirectoryIndex)&&r.removeDirectoryIndex.length>0){let e=i.pathname.split("/");const s=e[e.length-1];t(s,r.removeDirectoryIndex)&&(e=e.slice(0,e.length-1),i.pathname=e.slice(1).join("/")+"/")}if(i.hostname&&(i.hostname=i.hostname.replace(/\.$/,""),r.stripWWW&&/^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(i.hostname)&&(i.hostname=i.hostname.replace(/^www\./,""))),Array.isArray(r.removeQueryParameters))for(const e of[...i.searchParams.keys()])t(e,r.removeQueryParameters)&&i.searchParams.delete(e);!0===r.removeQueryParameters&&(i.search=""),r.sortQueryParameters&&i.searchParams.sort(),r.removeTrailingSlash&&(i.pathname=i.pathname.replace(/\/$/,""));const o=e;return e=i.toString(),r.removeSingleSlash||"/"!==i.pathname||o.endsWith("/")||""!==i.hash||(e=e.replace(/\/$/,"")),(r.removeTrailingSlash||"/"===i.pathname)&&""===i.hash&&r.removeSingleSlash&&(e=e.replace(/\/$/,"")),s&&!r.normalizeProtocol&&(e=e.replace(/^http:\/\//,"//")),r.stripProtocol&&(e=e.replace(/^(?:https?:)?\/\//,"")),e}},778:(e,t,r)=>{var s=r(479);function i(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=s(i),e.exports.strict=s(o),i.proto=i((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return i(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})}))},286:(e,t,r)=>{var s=r(778),i=r(840),o=r(147),a=function(){},n=/^v?\.0/.test(process.version),c=function(e){return"function"==typeof e},h=function(e,t,r,h){h=s(h);var u=!1;e.on("close",(function(){u=!0})),i(e,{readable:t,writable:r},(function(e){if(e)return h(e);u=!0,h()}));var l=!1;return function(t){if(!u&&!l)return l=!0,function(e){return!!n&&!!o&&(e instanceof(o.ReadStream||a)||e instanceof(o.WriteStream||a))&&c(e.close)}(e)?e.close(a):function(e){return e.setHeader&&c(e.abort)}(e)?e.abort():c(e.destroy)?e.destroy():void h(t||new Error("stream was destroyed"))}},u=function(e){e()},l=function(e,t){return e.pipe(t)};e.exports=function(){var e,t=Array.prototype.slice.call(arguments),r=c(t[t.length-1]||a)&&t.pop()||a;if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new Error("pump requires two streams per minimum");var s=t.map((function(i,o){var a=o<t.length-1;return h(i,a,o>0,(function(t){e||(e=t),t&&s.forEach(u),a||(s.forEach(u),r(e))}))}));return t.reduce(l)}},259:(e,t,r)=>{"use strict";const s=r(781).Readable,i=r(989);e.exports=class extends s{constructor(e,t,r,s){if("number"!=typeof e)throw new TypeError("Argument `statusCode` should be a number");if("object"!=typeof t)throw new TypeError("Argument `headers` should be an object");if(!(r instanceof Buffer))throw new TypeError("Argument `body` should be a buffer");if("string"!=typeof s)throw new TypeError("Argument `url` should be a string");super(),this.statusCode=e,this.headers=i(t),this.body=r,this.url=s}_read(){this.push(this.body),this.push(null)}}},479:e=>{e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach((function(e){s[e]=t[e]})),s;function s(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var s=t.apply(this,e),i=e[e.length-1];return"function"==typeof s&&s!==i&&Object.keys(i).forEach((function(e){s[e]=i[e]})),s}}},300:e=>{"use strict";e.exports=require("buffer")},361:e=>{"use strict";e.exports=require("events")},147:e=>{"use strict";e.exports=require("fs")},781:e=>{"use strict";e.exports=require("stream")},310:e=>{"use strict";e.exports=require("url")}},t={};var r=function r(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}(481);module.exports=r})();