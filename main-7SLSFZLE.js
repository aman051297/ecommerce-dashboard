import{$ as J,A as Te,B as rt,C as D,D as we,E as be,F as ot,G as Re,H as st,I as N,J as it,K as Me,L as at,M as X,N as oe,O as ct,P as R,Q as lt,R as dt,S as G,T as se,U as S,V as Pe,W as _e,X as I,Y as u,Z as m,_ as U,a as ne,aa as _,b as Je,ba as W,ca as ut,d as We,da as ht,e as Ye,ea as g,f as z,fa as Y,g as C,ga as B,h as Ze,ha as ft,i as Ke,ia as Ae,j as qe,ja as pt,k as ve,ka as mt,l as He,la as M,m as A,ma as ie,n as y,na as gt,o as Ee,oa as yt,p as T,pa as Z,q as d,qa as vt,r as w,ra as De,s as $,sa as ae,t as Qe,u as et,v as tt,w as F,x as j,y as re,z as nt}from"./chunk-URLZFZ7J.js";var q=class{},le=class{},x=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(o,s)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let o=(t.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let s=t.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(c=>s.indexOf(c)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),o=t.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ie=class{encodeKey(t){return Et(t)}encodeValue(t){return Et(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function tn(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(o=>{let s=o.indexOf("="),[i,c]=s==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,s)),t.decodeValue(o.slice(s+1))],a=e.get(i)||[];a.push(c),e.set(i,a)}),e}var nn=/%(\d[a-f0-9])/gi,rn={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Et(r){return encodeURIComponent(r).replace(nn,(t,e)=>rn[e]??t)}function ce(r){return`${r}`}var O=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Ie,t.fromString){if(t.fromObject)throw new A(2805,!1);this.map=tn(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],o=Array.isArray(n)?n.map(ce):[ce(n)];this.map.set(e,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let o=t[n];Array.isArray(o)?o.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(ce(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],o=n.indexOf(ce(t.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Oe=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function on(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Tt(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function wt(r){return typeof Blob<"u"&&r instanceof Blob}function bt(r){return typeof FormData<"u"&&r instanceof FormData}function sn(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var Rt="Content-Type",At="X-Request-URL",Dt="text/plain",St="application/json",an=`${St}, ${Dt}, */*`,K=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,n,o){this.url=e,this.method=t.toUpperCase();let s;if(on(this.method)||o?(this.body=n!==void 0?n:null,s=o):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new x,this.context??=new Oe,!this.params)this.params=new O,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Tt(this.body)||wt(this.body)||bt(this.body)||sn(this.body)?this.body:this.body instanceof O?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||bt(this.body)?null:wt(this.body)?this.body.type||null:Tt(this.body)?null:typeof this.body=="string"?Dt:this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?St:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,s=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,f=t.params||this.params,v=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((P,E)=>P.set(E,t.setHeaders[E]),l)),t.setParams&&(f=Object.keys(t.setParams).reduce((P,E)=>P.set(E,t.setParams[E]),f)),new r(e,n,i,{params:f,headers:l,context:v,reportProgress:a,responseType:o,withCredentials:c,transferCache:s})}},V=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(V||{}),H=class{headers;status;statusText;url;ok;type;constructor(t,e=200,n="OK"){this.headers=t.headers||new x,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Ce=class r extends H{constructor(t={}){super(t)}type=V.ResponseHeader;clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},de=class r extends H{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=V.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},ue=class extends H{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},cn=200,ln=204;function Se(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Ne=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,o={}){let s;if(e instanceof K)s=e;else{let a;o.headers instanceof x?a=o.headers:a=new x(o.headers);let l;o.params&&(o.params instanceof O?l=o.params:l=new O({fromObject:o.params})),s=new K(e,n,o.body!==void 0?o.body:null,{headers:a,context:o.context,params:l,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=z(s).pipe(qe(a=>this.handler.handle(a)));if(e instanceof K||o.observe==="events")return i;let c=i.pipe(Ze(a=>a instanceof de));switch(o.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return c.pipe(C(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(C(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(C(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(C(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new O().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Se(o,n))}post(e,n,o={}){return this.request("POST",e,Se(o,n))}put(e,n,o={}){return this.request("PUT",e,Se(o,n))}static \u0275fac=function(n){return new(n||r)(d(q))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})();var dn=new T("");function It(r,t){return t(r)}function un(r,t){return(e,n)=>t.intercept(e,{handle:o=>r(o,n)})}function hn(r,t,e){return(n,o)=>tt(e,()=>t(n,s=>r(s,o)))}var fn=new T(""),xe=new T(""),pn=new T(""),Ot=new T("",{providedIn:"root",factory:()=>!0});function mn(){let r=null;return(t,e)=>{r===null&&(r=(w(fn,{optional:!0})??[]).reduceRight(un,It));let n=w(Te);if(w(Ot)){let s=n.add();return r(t,e).pipe(ve(()=>n.remove(s)))}else return r(t,e)}}var Mt=(()=>{class r extends q{backend;injector;chain=null;pendingTasks=w(Te);contributeToStability=w(Ot);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(xe),...this.injector.get(pn,[])]));this.chain=n.reduceRight((o,s)=>hn(o,s,this.injector),It)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(ve(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||r)(d(le),d(et))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})();var gn=/^\)\]\}',?\n/,yn=RegExp(`^${At}:`,"m");function vn(r){return"responseURL"in r&&r.responseURL?r.responseURL:yn.test(r.getAllResponseHeaders())?r.getResponseHeader(At):null}var Pt=(()=>{class r{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Ye(n.\u0275loadImpl()):z(null)).pipe(He(()=>new We(s=>{let i=n.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((h,p)=>i.setRequestHeader(h,p.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept",an),!e.headers.has(Rt)){let h=e.detectContentTypeHeader();h!==null&&i.setRequestHeader(Rt,h)}if(e.responseType){let h=e.responseType.toLowerCase();i.responseType=h!=="json"?h:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let h=i.statusText||"OK",p=new x(i.getAllResponseHeaders()),L=vn(i)||e.url;return a=new Ce({headers:p,status:i.status,statusText:h,url:L}),a},f=()=>{let{headers:h,status:p,statusText:L,url:Ge}=l(),b=null;p!==ln&&(b=typeof i.response>"u"?i.responseText:i.response),p===0&&(p=b?cn:0);let ye=p>=200&&p<300;if(e.responseType==="json"&&typeof b=="string"){let Kt=b;b=b.replace(gn,"");try{b=b!==""?JSON.parse(b):null}catch(qt){b=Kt,ye&&(ye=!1,b={error:qt,text:b})}}ye?(s.next(new de({body:b,headers:h,status:p,statusText:L,url:Ge||void 0})),s.complete()):s.error(new ue({error:b,headers:h,status:p,statusText:L,url:Ge||void 0}))},v=h=>{let{url:p}=l(),L=new ue({error:h,status:i.status||0,statusText:i.statusText||"Unknown Error",url:p||void 0});s.error(L)},P=!1,E=h=>{P||(s.next(l()),P=!0);let p={type:V.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),e.responseType==="text"&&i.responseText&&(p.partialText=i.responseText),s.next(p)},Xe=h=>{let p={type:V.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),s.next(p)};return i.addEventListener("load",f),i.addEventListener("error",v),i.addEventListener("timeout",v),i.addEventListener("abort",v),e.reportProgress&&(i.addEventListener("progress",E),c!==null&&i.upload&&i.upload.addEventListener("progress",Xe)),i.send(c),s.next({type:V.Sent}),()=>{i.removeEventListener("error",v),i.removeEventListener("abort",v),i.removeEventListener("load",f),i.removeEventListener("timeout",v),e.reportProgress&&(i.removeEventListener("progress",E),c!==null&&i.upload&&i.upload.removeEventListener("progress",Xe)),i.readyState!==i.DONE&&i.abort()}})))}static \u0275fac=function(n){return new(n||r)(d(ae))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),Ct=new T(""),En="XSRF-TOKEN",Tn=new T("",{providedIn:"root",factory:()=>En}),wn="X-XSRF-TOKEN",bn=new T("",{providedIn:"root",factory:()=>wn}),he=class{},Rn=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,o){this.doc=e,this.platform=n,this.cookieName=o}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ie(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||r)(d(M),d(N),d(Tn))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})();function Mn(r,t){let e=r.url.toLowerCase();if(!w(Ct)||r.method==="GET"||r.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(r);let n=w(he).getToken(),o=w(bn);return n!=null&&!r.headers.has(o)&&(r=r.clone({headers:r.headers.set(o,n)})),t(r)}var Nt=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(Nt||{});function Pn(r,t){return{\u0275kind:r,\u0275providers:t}}function ke(...r){let t=[Ne,Pt,Mt,{provide:q,useExisting:Mt},{provide:le,useFactory:()=>w(dn,{optional:!0})??w(Pt)},{provide:xe,useValue:Mn,multi:!0},{provide:Ct,useValue:!0},{provide:he,useClass:Rn}];for(let e of r)t.push(...e.\u0275providers);return $(t)}var _t=new T("");function _n(){return Pn(Nt.LegacyInterceptors,[{provide:_t,useFactory:mn},{provide:xe,useExisting:_t,multi:!0}])}var xt=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Pe({type:r});static \u0275inj=Ee({providers:[ke(_n())]})}return r})();var Fe=class extends mt{supportsDOMEvents=!0},je=class r extends Fe{static makeCurrent(){pt(new r)}onAndCancel(t,e,n,o){return t.addEventListener(e,n,o),()=>{t.removeEventListener(e,n,o)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Dn();return e==null?null:Sn(e)}resetBaseElement(){Q=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return ie(document.cookie,t)}},Q=null;function Dn(){return Q=Q||document.querySelector("base"),Q?Q.getAttribute("href"):null}function Sn(r){return new URL(r,document.baseURI).pathname}var In=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),Ue=new T(""),Ut=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,o,s){return this._findPluginFor(n).addEventListener(e,n,o,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new A(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||r)(d(Ue),d(D))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),pe=class{_doc;constructor(t){this._doc=t}manager},fe="ng-app-id";function kt(r){for(let t of r)t.remove()}function Lt(r,t){let e=t.createElement("style");return e.textContent=r,e}function On(r,t,e,n){let o=r.head?.querySelectorAll(`style[${fe}="${t}"],link[${fe}="${t}"]`);if(o)for(let s of o)s.removeAttribute(fe),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function Be(r,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var Bt=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,o,s={}){this.doc=e,this.appId=n,this.nonce=o,this.isServer=De(s),On(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,Lt);n?.forEach(o=>this.addUsage(o,this.external,Be))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(kt(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])kt(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,Lt(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,Be(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(fe,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||r)(d(M),d(Re),d(Me,8),d(N))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),Le={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ze=/%COMP%/g,Vt="%COMP%",Cn=`_nghost-${Vt}`,Nn=`_ngcontent-${Vt}`,xn=!0,kn=new T("",{providedIn:"root",factory:()=>xn});function Ln(r){return Nn.replace(ze,r)}function Fn(r){return Cn.replace(ze,r)}function zt(r,t){return t.map(e=>e.replace(ze,r))}var me=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,o,s,i,c,a,l=null,f=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=l,this.tracingService=f,this.platformIsServer=De(c),this.defaultRenderer=new ee(e,i,a,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===X.ShadowDom&&(n=Je(ne({},n),{encapsulation:X.Emulated}));let o=this.getOrCreateRenderer(e,n);return o instanceof ge?o.applyToHost(e):o instanceof te&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,s=o.get(n.id);if(!s){let i=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,v=this.platformIsServer;switch(n.encapsulation){case X.Emulated:s=new ge(a,l,n,this.appId,f,i,c,v,this.tracingService);break;case X.ShadowDom:return new Ve(a,l,e,n,i,c,this.nonce,v,this.tracingService);default:s=new te(a,l,n,f,i,c,v,this.tracingService);break}o.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||r)(d(Ut),d(Bt),d(Re),d(kn),d(M),d(N),d(D),d(Me),d(at,8))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),ee=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,o,s){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=o,this.tracingService=s}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Le[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Ft(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Ft(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new A(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,o){if(o){e=o+":"+e;let s=Le[o];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let o=Le[n];o?t.removeAttributeNS(o,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,o){o&(G.DashCase|G.Important)?t.style.setProperty(e,n,o&G.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&G.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,o){if(typeof t=="string"&&(t=Ae().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);let s=this.decoratePreventDefault(n);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(t,e,s)),this.eventManager.addEventListener(t,e,s,o)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function Ft(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var Ve=class extends ee{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,o,s,i,c,a,l){super(t,s,i,a,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=zt(o.id,o.styles);for(let P of f){let E=document.createElement("style");c&&E.setAttribute("nonce",c),E.textContent=P,this.shadowRoot.appendChild(E)}let v=o.getExternalStyles?.();if(v)for(let P of v){let E=Be(P,s);c&&E.setAttribute("nonce",c),this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},te=class extends ee{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,o,s,i,c,a,l){super(t,s,i,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=l?zt(l,n.styles):n.styles,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ge=class extends te{contentAttr;hostAttr;constructor(t,e,n,o,s,i,c,a,l){let f=o+"-"+n.id;super(t,e,n,s,i,c,a,l,f),this.contentAttr=Ln(f),this.hostAttr=Fn(f)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},jn=(()=>{class r extends pe{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,s){return e.addEventListener(n,o,s),()=>this.removeEventListener(e,n,o,s)}removeEventListener(e,n,o,s){return e.removeEventListener(n,o,s)}static \u0275fac=function(n){return new(n||r)(d(M))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),jt=["alt","control","meta","shift"],Un={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Bn={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Vn=(()=>{class r extends pe{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,o,s){let i=r.parseEventName(n),c=r.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ae().onAndCancel(e,i.domEventName,c,s))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let s=r._normalizeKey(n.pop()),i="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),i="code."),jt.forEach(l=>{let f=n.indexOf(l);f>-1&&(n.splice(f,1),i+=l+".")}),i+=s,n.length!=0||s.length===0)return null;let a={};return a.domEventName=o,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let o=Un[e.key]||e.key,s="";return n.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),jt.forEach(i=>{if(i!==o){let c=Bn[i];c(e)&&(s+=i+".")}}),s+=o,s===n)}static eventCallback(e,n,o){return s=>{r.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>n(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||r)(d(M))};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})();function $t(r,t){return ft(ne({rootComponent:r},zn(t)))}function zn(r){return{appProviders:[...Wn,...r?.providers??[]],platformProviders:Jn}}function $n(){je.makeCurrent()}function Xn(){return new we}function Gn(){return ot(document),document}var Jn=[{provide:N,useValue:vt},{provide:st,useValue:$n,multi:!0},{provide:M,useFactory:Gn,deps:[]}];var Wn=[{provide:Qe,useValue:"root"},{provide:we,useFactory:Xn,deps:[]},{provide:Ue,useClass:jn,multi:!0,deps:[M,D,N]},{provide:Ue,useClass:Vn,multi:!0,deps:[M]},me,Bt,Ut,{provide:se,useExisting:me},{provide:ae,useClass:In,deps:[]},[]];var Xt=(()=>{class r{sortChanged=new rt;changeSorting(e){let n=e.target.value;this.sortChanged.emit(n)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=S({type:r,selectors:[["app-filter-bar"]],outputs:{sortChanged:"sortChanged"},decls:8,vars:0,consts:[[1,"filter-bar"],[3,"change"],["value","priceAsc"],["value","priceDesc"]],template:function(n,o){n&1&&(u(0,"div",0)(1,"label"),g(2,"Sort By: "),u(3,"select",1),_("change",function(i){return o.changeSorting(i)}),u(4,"option",2),g(5,"Price: Low to High"),m(),u(6,"option",3),g(7,"Price: High to Low"),m()()()())},encapsulation:2})}return r})();var Gt=(()=>{class r{product;static \u0275fac=function(n){return new(n||r)};static \u0275cmp=S({type:r,selectors:[["app-product-card"]],inputs:{product:"product"},decls:8,vars:5,consts:[[1,"product-card"],[3,"src","alt"]],template:function(n,o){n&1&&(u(0,"div",0),U(1,"img",1),u(2,"h3"),g(3),m(),u(4,"p"),g(5),m(),u(6,"p"),g(7),m()()),n&2&&(R(),ut("alt",o.product.title),I("src",o.product.image,oe),R(2),Y(o.product.title),R(2),B("Price: $",o.product.price,""),R(2),Y(o.product.category))},encapsulation:2})}return r})();var Jt=(()=>{class r{http;apiUrl="https://fakestoreapi.com/products";constructor(e){this.http=e}getProducts(){return this.http.get(this.apiUrl).pipe(C(e=>e&&e.length>0?e:this.getDummyData()),Ke(e=>(console.error("Error fetching products:",e),z(this.getDummyData()))))}getDummyData(){return[{id:1,name:"Dummy Product 1",price:100,category:"Electronics"},{id:2,name:"Dummy Product 2",price:200,category:"Home Appliances"},{id:3,name:"Dummy Product 3",price:300,category:"Furniture"},{id:4,name:"Dummy Product 4",price:150,category:"Books"},{id:5,name:"Dummy Product 5",price:50,category:"Clothing"}]}static \u0275fac=function(n){return new(n||r)(d(Ne))};static \u0275prov=y({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Zn(r,t){if(r&1){let e=J();u(0,"app-product-card",4),_("click",function(){let o=F(e).$implicit,s=W();return j(s.showModal(o))}),m()}if(r&2){let e=t.$implicit;I("product",e)}}function Kn(r,t){r&1&&(u(0,"div",5),g(1,` Loading more products...
`),m())}function qn(r,t){if(r&1){let e=J();u(0,"div",6)(1,"div",7)(2,"span",8),_("click",function(){F(e);let o=W();return j(o.hideModal())}),g(3,"\xD7"),m(),u(4,"h2"),g(5),m(),u(6,"p")(7,"b"),g(8,"Description: "),m(),g(9),m(),u(10,"p")(11,"b"),g(12,"Rating: "),m(),g(13),u(14,"sub"),g(15),u(16,"sup"),g(17,"Customers"),m()()(),U(18,"img",9),u(19,"button",10),_("click",function(){F(e);let o=W();return j(o.hideModal())}),g(20,"Close"),m()()()}if(r&2){let e=W();R(5),B("Product: ",e.selectedProduct.title,""),R(4),Y(e.selectedProduct.description),R(4),B("",e.selectedProduct.rating.rate," "),R(2),B("By ",e.selectedProduct.rating.count," "),R(3),I("src",e.selectedProduct.image,oe)}}var Wt=(()=>{class r{productService;products=[];displayedProducts=[];isLoading=!1;itemsPerPage=10;currentPage=0;isModalVisible=!1;selectedProduct={name:"",description:"",title:"",image:"",rating:{rate:"",count:""}};constructor(e){this.productService=e}ngOnInit(){this.fetchProducts()}fetchProducts(){this.isLoading=!0,this.productService.getProducts().subscribe({next:e=>{this.products=e,this.loadMoreProducts(),this.isLoading=!1},error:()=>{this.isLoading=!1,alert("Failed to load products!")}})}loadMoreProducts(){let e=this.products.slice(this.currentPage*this.itemsPerPage,(this.currentPage+1)*this.itemsPerPage);this.displayedProducts.push(...e),this.currentPage++}onScroll(){let n=window.innerHeight+window.scrollY,o=document.body.scrollHeight;n>=o-300&&!this.isLoading&&this.loadMoreProducts()}onSortChange(e){e==="priceAsc"?this.displayedProducts.sort((n,o)=>n.price-o.price):e==="priceDesc"&&this.displayedProducts.sort((n,o)=>o.price-n.price)}showModal(e){this.selectedProduct=e,this.isModalVisible=!0}hideModal(){this.isModalVisible=!1,this.selectedProduct={name:"",description:"",title:"",image:"",rating:{rate:"",count:""}}}static \u0275fac=function(n){return new(n||r)(lt(Jt))};static \u0275cmp=S({type:r,selectors:[["app-product-list"]],hostBindings:function(n,o){n&1&&_("scroll",function(i){return o.onScroll(i)},!1,ct)},decls:4,vars:3,consts:[[1,"product-list"],[3,"product","click",4,"ngFor","ngForOf"],["class","loading-spinner",4,"ngIf"],["class","modal",4,"ngIf"],[3,"click","product"],[1,"loading-spinner"],[1,"modal"],[1,"modal-content"],[1,"close",3,"click"],["alt","Product Image",1,"product-image",3,"src"],[3,"click"]],template:function(n,o){n&1&&(u(0,"div",0),_e(1,Zn,1,1,"app-product-card",1),m(),_e(2,Kn,2,0,"div",2)(3,qn,21,5,"div",3)),n&2&&(R(),I("ngForOf",o.displayedProducts),R(),I("ngIf",o.isLoading),R(),I("ngIf",o.isModalVisible))},dependencies:[Z,gt,yt,Gt],styles:[".modal[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;background-color:#00000080;overflow:auto}.modal-content[_ngcontent-%COMP%]{background-color:#fff;margin:15% auto;padding:20px;border:1px solid #888;width:35%}.close[_ngcontent-%COMP%]{color:#aaa;font-size:28px;font-weight:700;position:absolute;top:0;right:10px;cursor:pointer}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer}.product[_ngcontent-%COMP%]{cursor:pointer;margin:10px}.product-image[_ngcontent-%COMP%]{width:30%}"]})}return r})();var Yt=(()=>{class r{title="E-commerce Dashboard";static \u0275fac=function(n){return new(n||r)};static \u0275cmp=S({type:r,selectors:[["app-root"]],decls:3,vars:0,consts:[["productList",""],[3,"sortChanged"]],template:function(n,o){if(n&1){let s=J();u(0,"app-filter-bar",1),_("sortChanged",function(c){F(s);let a=ht(2);return j(a.onSortChange(c))}),m(),U(1,"app-product-list",null,0)}},dependencies:[Z,Xt,Wt,xt],encapsulation:2})}return r})();var Hn="@",Qn=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=w(re);loadingSchedulerFn=w(er,{optional:!0});_engine;constructor(e,n,o,s,i){this.doc=e,this.delegate=n,this.zone=o,this.animationType=s,this.moduleImpl=i}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-Z37SEDXL.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new A(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:s})=>{this._engine=o(this.animationType,this.doc);let i=new s(this.delegate,this._engine,this.zone);return this.delegate=i,i})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let s=new $e(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(i=>{let c=i.createRenderer(e,n);s.use(c),this.scheduler??=this.injector.get(nt,null,{optional:!0}),this.scheduler?.notify(11)}).catch(i=>{s.use(o)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){dt()};static \u0275prov=y({token:r,factory:r.\u0275fac})}return r})(),$e=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,o){this.delegate.insertBefore(t,e,n,o)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,o){this.delegate.setAttribute(t,e,n,o)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,o){this.delegate.setStyle(t,e,n,o)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,o){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(t,e,n,o)),this.delegate.listen(t,e,n,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(Hn)}},er=new T("");function Zt(r="animations"){return be("NgAsyncAnimations"),$([{provide:se,useFactory:(t,e,n)=>new Qn(t,e,n,r),deps:[M,me,D]},{provide:it,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}$t(Yt,{providers:[ke(),Zt()]}).catch(r=>console.error(r));
