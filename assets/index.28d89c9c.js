const ku=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),ao={},xu="/",Xt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${xu}${r}`,r in ao)return;ao[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":ku,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ei(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ce={},_n=[],$e=()=>{},Nu=()=>!1,Qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ii=e=>e.startsWith("onUpdate:"),ge=Object.assign,Si=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lu=Object.prototype.hasOwnProperty,se=(e,t)=>Lu.call(e,t),W=Array.isArray,vn=e=>Xr(e)==="[object Map]",Ja=e=>Xr(e)==="[object Set]",K=e=>typeof e=="function",he=e=>typeof e=="string",Ft=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ya=e=>(ue(e)||K(e))&&K(e.then)&&K(e.catch),Qa=Object.prototype.toString,Xr=e=>Qa.call(e),Du=e=>Xr(e).slice(8,-1),Xa=e=>Xr(e)==="[object Object]",Ti=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mu=/-(\w)/g,We=Zr(e=>e.replace(Mu,(t,n)=>n?n.toUpperCase():"")),Uu=/\B([A-Z])/g,on=Zr(e=>e.replace(Uu,"-$1").toLowerCase()),es=Zr(e=>e.charAt(0).toUpperCase()+e.slice(1)),vs=Zr(e=>e?`on${es(e)}`:""),Mt=(e,t)=>!Object.is(e,t),ys=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Za=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Fu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$u=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let co;const ec=()=>co||(co=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Ci(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=he(r)?Vu(r):Ci(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(he(e)||ue(e))return e}const ju=/;(?![^(]*\))/g,Hu=/:([^]+)/,Bu=/\/\*[^]*?\*\//g;function Vu(e){const t={};return e.replace(Bu,"").split(ju).forEach(n=>{if(n){const r=n.split(Hu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ri(e){let t="";if(he(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Ri(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zu=Ei(Wu);function tc(e){return!!e||e===""}const nc=e=>!!(e&&e.__v_isRef===!0),Ku=e=>he(e)?e:e==null?"":W(e)||ue(e)&&(e.toString===Qa||!K(e.toString))?nc(e)?Ku(e.value):JSON.stringify(e,rc,2):String(e),rc=(e,t)=>nc(t)?rc(e,t.value):vn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[bs(r,i)+" =>"]=s,n),{})}:Ja(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>bs(n))}:Ft(t)?bs(t):ue(t)&&!W(t)&&!Xa(t)?String(t):t,bs=(e,t="")=>{var n;return Ft(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class sc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ic(e){return new sc(e)}function oc(){return we}function qu(e,t=!1){we&&we.cleanups.push(e)}let oe;const ws=new WeakSet;class ac{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ws.has(this)&&(ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=$n,$n=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lo(this),lc(this);const t=oe,n=je;oe=this,je=!0;try{return this.fn()}finally{uc(this),oe=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Oi(t);this.deps=this.depsTail=void 0,lo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qs(this)&&this.run()}get dirty(){return qs(this)}}let cc=0,$n;function Ai(){cc++}function Pi(){if(--cc>0)return;let e;for(;$n;){let t=$n;for($n=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function lc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function uc(e){let t,n=e.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),Oi(r),Gu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function qs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&fc(t.dep.computed)===!1||t.dep.version!==t.version)return!0;return!!e._dirty}function fc(e){if(e.flags&2)return!1;if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Jn))return;e.globalVersion=Jn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!qs(e)){e.flags&=-3;return}const n=oe,r=je;oe=e,je=!0;try{lc(e);const s=e.fn(e._value);(t.version===0||Mt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=n,je=r,uc(e),e.flags&=-3}}function Oi(e){const{dep:t,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Oi(s)}}function Gu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const dc=[];function $t(){dc.push(je),je=!1}function jt(){const e=dc.pop();je=e===void 0?!0:e}function lo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=oe;oe=void 0;try{t()}finally{oe=n}}}let Jn=0;class ki{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!oe||!je||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink={dep:this,sub:oe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,oe.flags&4&&hc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=r)}return n}trigger(t){this.version++,Jn++,this.notify(t)}notify(t){Ai();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Pi()}}}function hc(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)hc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Ur=new WeakMap,Zt=Symbol(""),Gs=Symbol(""),Yn=Symbol("");function ye(e,t,n){if(je&&oe){let r=Ur.get(e);r||Ur.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=new ki),s.track()}}function dt(e,t,n,r,s,i){const o=Ur.get(e);if(!o){Jn++;return}let c=[];if(t==="clear")c=[...o.values()];else{const a=W(e),l=a&&Ti(n);if(a&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===Yn||!Ft(h)&&h>=u)&&c.push(f)})}else{const u=f=>f&&c.push(f);switch(n!==void 0&&u(o.get(n)),l&&u(o.get(Yn)),t){case"add":a?l&&u(o.get("length")):(u(o.get(Zt)),vn(e)&&u(o.get(Gs)));break;case"delete":a||(u(o.get(Zt)),vn(e)&&u(o.get(Gs)));break;case"set":vn(e)&&u(o.get(Zt));break}}}Ai();for(const a of c)a.trigger();Pi()}function Ju(e,t){var n;return(n=Ur.get(e))==null?void 0:n.get(t)}function fn(e){const t=Z(e);return t===e?t:(ye(t,"iterate",Yn),He(e)?t:t.map(Ee))}function xi(e){return ye(e=Z(e),"iterate",Yn),e}const Yu={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,Ee)},concat(...e){return fn(this).concat(...e.map(t=>W(t)?fn(t):t))},entries(){return Es(this,"entries",e=>(e[1]=Ee(e[1]),e))},every(e,t){return it(this,"every",e,t,void 0,arguments)},filter(e,t){return it(this,"filter",e,t,n=>n.map(Ee),arguments)},find(e,t){return it(this,"find",e,t,Ee,arguments)},findIndex(e,t){return it(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return it(this,"findLast",e,t,Ee,arguments)},findLastIndex(e,t){return it(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return it(this,"forEach",e,t,void 0,arguments)},includes(...e){return Is(this,"includes",e)},indexOf(...e){return Is(this,"indexOf",e)},join(e){return fn(this).join(e)},lastIndexOf(...e){return Is(this,"lastIndexOf",e)},map(e,t){return it(this,"map",e,t,void 0,arguments)},pop(){return xn(this,"pop")},push(...e){return xn(this,"push",e)},reduce(e,...t){return uo(this,"reduce",e,t)},reduceRight(e,...t){return uo(this,"reduceRight",e,t)},shift(){return xn(this,"shift")},some(e,t){return it(this,"some",e,t,void 0,arguments)},splice(...e){return xn(this,"splice",e)},toReversed(){return fn(this).toReversed()},toSorted(e){return fn(this).toSorted(e)},toSpliced(...e){return fn(this).toSpliced(...e)},unshift(...e){return xn(this,"unshift",e)},values(){return Es(this,"values",Ee)}};function Es(e,t,n){const r=xi(e),s=r[t]();return r!==e&&!He(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Qu=Array.prototype;function it(e,t,n,r,s,i){const o=xi(e),c=o!==e&&!He(e),a=o[t];if(a!==Qu[t]){const f=a.apply(e,i);return c?Ee(f):f}let l=n;o!==e&&(c?l=function(f,h){return n.call(this,Ee(f),h,e)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,e)}));const u=a.call(o,l,r);return c&&s?s(u):u}function uo(e,t,n,r){const s=xi(e);let i=n;return s!==e&&(He(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,Ee(c),a,e)}),s[t](i,...r)}function Is(e,t,n){const r=Z(e);ye(r,"iterate",Yn);const s=r[t](...n);return(s===-1||s===!1)&&Mi(n[0])?(n[0]=Z(n[0]),r[t](...n)):s}function xn(e,t,n=[]){$t(),Ai();const r=Z(e)[t].apply(e,n);return Pi(),jt(),r}const Xu=Ei("__proto__,__v_isRef,__isVue"),pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft));function Zu(e){Ft(e)||(e=String(e));const t=Z(this);return ye(t,"has",e),t.hasOwnProperty(e)}class gc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?hf:yc:i?vc:_c).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){let a;if(o&&(a=Yu[n]))return a;if(n==="hasOwnProperty")return Zu}const c=Reflect.get(t,n,de(t)?t:r);return(Ft(n)?pc.has(n):Xu(n))||(s||ye(t,"get",n),i)?c:de(c)?o&&Ti(n)?c:c.value:ue(c)?s?wc(c):an(c):c}}class mc extends gc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=tn(i);if(!He(r)&&!tn(r)&&(i=Z(i),r=Z(r)),!W(t)&&de(i)&&!de(r))return a?!1:(i.value=r,!0)}const o=W(t)&&Ti(n)?Number(n)<t.length:se(t,n),c=Reflect.set(t,n,r,de(t)?t:s);return t===Z(s)&&(o?Mt(r,i)&&dt(t,"set",n,r):dt(t,"add",n,r)),c}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&dt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ft(n)||!pc.has(n))&&ye(t,"has",n),r}ownKeys(t){return ye(t,"iterate",W(t)?"length":Zt),Reflect.ownKeys(t)}}class ef extends gc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const tf=new mc,nf=new ef,rf=new mc(!0);const Ni=e=>e,ts=e=>Reflect.getPrototypeOf(e);function yr(e,t,n=!1,r=!1){e=e.__v_raw;const s=Z(e),i=Z(t);n||(Mt(t,i)&&ye(s,"get",t),ye(s,"get",i));const{has:o}=ts(s),c=r?Ni:n?Ui:Ee;if(o.call(s,t))return c(e.get(t));if(o.call(s,i))return c(e.get(i));e!==s&&e.get(t)}function br(e,t=!1){const n=this.__v_raw,r=Z(n),s=Z(e);return t||(Mt(e,s)&&ye(r,"has",e),ye(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function wr(e,t=!1){return e=e.__v_raw,!t&&ye(Z(e),"iterate",Zt),Reflect.get(e,"size",e)}function fo(e,t=!1){!t&&!He(e)&&!tn(e)&&(e=Z(e));const n=Z(this);return ts(n).has.call(n,e)||(n.add(e),dt(n,"add",e,e)),this}function ho(e,t,n=!1){!n&&!He(t)&&!tn(t)&&(t=Z(t));const r=Z(this),{has:s,get:i}=ts(r);let o=s.call(r,e);o||(e=Z(e),o=s.call(r,e));const c=i.call(r,e);return r.set(e,t),o?Mt(t,c)&&dt(r,"set",e,t):dt(r,"add",e,t),this}function po(e){const t=Z(this),{has:n,get:r}=ts(t);let s=n.call(t,e);s||(e=Z(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&dt(t,"delete",e,void 0),i}function go(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Er(e,t){return function(r,s){const i=this,o=i.__v_raw,c=Z(o),a=t?Ni:e?Ui:Ee;return!e&&ye(c,"iterate",Zt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Ir(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=vn(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),u=n?Ni:t?Ui:Ee;return!t&&ye(i,"iterate",a?Gs:Zt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:c?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function vt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sf(){const e={get(i){return yr(this,i)},get size(){return wr(this)},has:br,add:fo,set:ho,delete:po,clear:go,forEach:Er(!1,!1)},t={get(i){return yr(this,i,!1,!0)},get size(){return wr(this)},has:br,add(i){return fo.call(this,i,!0)},set(i,o){return ho.call(this,i,o,!0)},delete:po,clear:go,forEach:Er(!1,!0)},n={get(i){return yr(this,i,!0)},get size(){return wr(this,!0)},has(i){return br.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Er(!0,!1)},r={get(i){return yr(this,i,!0,!0)},get size(){return wr(this,!0)},has(i){return br.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ir(i,!1,!1),n[i]=Ir(i,!0,!1),t[i]=Ir(i,!1,!0),r[i]=Ir(i,!0,!0)}),[e,n,t,r]}const[of,af,cf,lf]=sf();function Li(e,t){const n=t?e?lf:cf:e?af:of;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const uf={get:Li(!1,!1)},ff={get:Li(!1,!0)},df={get:Li(!0,!1)};const _c=new WeakMap,vc=new WeakMap,yc=new WeakMap,hf=new WeakMap;function pf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gf(e){return e.__v_skip||!Object.isExtensible(e)?0:pf(Du(e))}function an(e){return tn(e)?e:Di(e,!1,tf,uf,_c)}function bc(e){return Di(e,!1,rf,ff,vc)}function wc(e){return Di(e,!0,nf,df,yc)}function Di(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=gf(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function Nt(e){return tn(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function Mi(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Pn(e){return Object.isExtensible(e)&&Za(e,"__v_skip",!0),e}const Ee=e=>ue(e)?an(e):e,Ui=e=>ue(e)?wc(e):e;function de(e){return e?e.__v_isRef===!0:!1}function cr(e){return Ec(e,!1)}function mf(e){return Ec(e,!0)}function Ec(e,t){return de(e)?e:new _f(e,t)}class _f{constructor(t,n){this.dep=new ki,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:Ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||He(t)||tn(t);t=r?t:Z(t),Mt(t,n)&&(this._rawValue=t,this._value=r?t:Ee(t),this.dep.trigger())}}function yn(e){return de(e)?e.value:e}const vf={get:(e,t,n)=>t==="__v_raw"?e:yn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ic(e){return Nt(e)?e:new Proxy(e,vf)}function yf(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=Sc(e,n);return t}class bf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ju(Z(this._object),this._key)}}class wf{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ef(e,t,n){return de(e)?e:K(e)?new wf(e):ue(e)&&arguments.length>1?Sc(e,t,n):cr(e)}function Sc(e,t,n){const r=e[t];return de(r)?r:new bf(e,t,n)}class If{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ki(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){oe!==this&&(this.flags|=16,this.dep.notify())}get value(){const t=this.dep.track();return fc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sf(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new If(r,s,n)}const Sr={},Fr=new WeakMap;let Jt;function Tf(e,t=!1,n=Jt){if(n){let r=Fr.get(n);r||Fr.set(n,r=[]),r.push(e)}}function Cf(e,t,n=ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=A=>s?A:He(A)||s===!1||s===0?ct(A,1):ct(A);let u,f,h,g,_=!1,T=!1;if(de(e)?(f=()=>e.value,_=He(e)):Nt(e)?(f=()=>l(e),_=!0):W(e)?(T=!0,_=e.some(A=>Nt(A)||He(A)),f=()=>e.map(A=>{if(de(A))return A.value;if(Nt(A))return l(A);if(K(A))return a?a(A,2):A()})):K(e)?t?f=a?()=>a(e,2):e:f=()=>{if(h){$t();try{h()}finally{jt()}}const A=Jt;Jt=u;try{return a?a(e,3,[g]):e(g)}finally{Jt=A}}:f=$e,t&&s){const A=f,$=s===!0?1/0:s;f=()=>ct(A(),$)}const F=oc(),N=()=>{u.stop(),F&&Si(F.effects,u)};if(i)if(t){const A=t;t=(...$)=>{A(...$),N()}}else{const A=f;f=()=>{A(),N()}}let k=T?new Array(e.length).fill(Sr):Sr;const D=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(t){const $=u.run();if(s||_||(T?$.some((J,q)=>Mt(J,k[q])):Mt($,k))){h&&h();const J=Jt;Jt=u;try{const q=[$,k===Sr?void 0:T&&k[0]===Sr?[]:k,g];a?a(t,3,q):t(...q),k=$}finally{Jt=J}}}else u.run()};return c&&c(D),u=new ac(f),u.scheduler=o?()=>o(D,!1):D,g=A=>Tf(A,!1,u),h=u.onStop=()=>{const A=Fr.get(u);if(A){if(a)a(A,4);else for(const $ of A)$();Fr.delete(u)}},t?r?D(!0):k=u.run():o?o(D.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function ct(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,de(e))ct(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)ct(e[r],t,n);else if(Ja(e)||vn(e))e.forEach(r=>{ct(r,t,n)});else if(Xa(e)){for(const r in e)ct(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ct(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lr(e,t,n,r){try{return r?e(...r):e()}catch(s){ns(s,t,n)}}function ze(e,t,n,r){if(K(e)){const s=lr(e,t,n,r);return s&&Ya(s)&&s.catch(i=>{ns(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ze(e[i],t,n,r));return s}}function ns(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ce;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,a,l)===!1)return}c=c.parent}if(i){$t(),lr(i,null,10,[e,a,l]),jt();return}}Rf(e,n,s,r,o)}function Rf(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}let Qn=!1,Js=!1;const Ie=[];let Qe=0;const bn=[];let St=null,hn=0;const Tc=Promise.resolve();let Fi=null;function $i(e){const t=Fi||Tc;return e?t.then(this?e.bind(this):e):t}function Af(e){let t=Qn?Qe+1:0,n=Ie.length;for(;t<n;){const r=t+n>>>1,s=Ie[r],i=Xn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ji(e){if(!(e.flags&1)){const t=Xn(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=Xn(n)?Ie.push(e):Ie.splice(Af(t),0,e),e.flags|=1,Cc()}}function Cc(){!Qn&&!Js&&(Js=!0,Fi=Tc.then(Ac))}function Pf(e){W(e)?bn.push(...e):St&&e.id===-1?St.splice(hn+1,0,e):e.flags&1||(bn.push(e),e.flags|=1),Cc()}function mo(e,t,n=Qn?Qe+1:0){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Rc(e){if(bn.length){const t=[...new Set(bn)].sort((n,r)=>Xn(n)-Xn(r));if(bn.length=0,St){St.push(...t);return}for(St=t,hn=0;hn<St.length;hn++){const n=St[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,hn=0}}const Xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ac(e){Js=!1,Qn=!0;const t=$e;try{for(Qe=0;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),lr(n,n.i,n.i?15:14),n.flags&=-2)}}finally{for(;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&(n.flags&=-2)}Qe=0,Ie.length=0,Rc(),Qn=!1,Fi=null,(Ie.length||bn.length)&&Ac()}}let Se=null,Pc=null;function $r(e){const t=Se;return Se=e,Pc=e&&e.type.__scopeId||null,t}function Of(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ao(-1);const i=$r(t);let o;try{o=e(...s)}finally{$r(i),r._d&&Ao(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function iy(e,t){if(Se===null)return e;const n=ls(Se),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,c,a=ce]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&ct(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return e}function zt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&($t(),ze(a,n,8,[e.el,c,e,t]),jt())}}const Oc=Symbol("_vte"),kc=e=>e.__isTeleport,jn=e=>e&&(e.disabled||e.disabled===""),kf=e=>e&&(e.defer||e.defer===""),_o=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,vo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ys=(e,t)=>{const n=e&&e.to;return he(n)?t?t(n):null:n},xf={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:u,pc:f,pbc:h,o:{insert:g,querySelector:_,createText:T,createComment:F}}=l,N=jn(t.props);let{shapeFlag:k,children:D,dynamicChildren:A}=t;if(e==null){const $=t.el=T(""),J=t.anchor=T("");g($,n,r),g(J,n,r);const q=(I,H)=>{k&16&&u(D,I,H,s,i,o,c,a)},j=()=>{const I=t.target=Ys(t.props,_),H=xc(I,t,T,g);I&&(o!=="svg"&&_o(I)?o="svg":o!=="mathml"&&vo(I)&&(o="mathml"),N||(q(I,H),Ar(t)))};N&&(q(n,J),Ar(t)),kf(t.props)?Re(j,i):j()}else{t.el=e.el,t.targetStart=e.targetStart;const $=t.anchor=e.anchor,J=t.target=e.target,q=t.targetAnchor=e.targetAnchor,j=jn(e.props),I=j?n:J,H=j?$:q;if(o==="svg"||_o(J)?o="svg":(o==="mathml"||vo(J))&&(o="mathml"),A?(h(e.dynamicChildren,A,I,s,i,o,c),Wi(e,t,!0)):a||f(e,t,I,H,s,i,o,c,!1),N)j?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Tr(t,n,$,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Y=t.target=Ys(t.props,_);Y&&Tr(t,Y,null,l,0)}else j&&Tr(t,J,q,l,1);Ar(t)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:a,targetStart:l,targetAnchor:u,target:f,props:h}=e;if(f&&(s(l),s(u)),i&&s(a),o&16){const g=i||!jn(h);for(let _=0;_<c.length;_++){const T=c[_];r(T,t,n,g,!!T.dynamicChildren)}}},move:Tr,hydrate:Nf};function Tr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||jn(u))&&a&16)for(let h=0;h<l.length;h++)s(l[h],t,n,2);f&&r(c,t,n)}function Nf(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a,insert:l,createText:u}},f){const h=t.target=Ys(t.props,a);if(h){const g=h._lpa||h.firstChild;if(t.shapeFlag&16)if(jn(t.props))t.anchor=f(o(e),t,c(e),n,r,s,i),t.targetStart=g,t.targetAnchor=g&&o(g);else{t.anchor=o(e);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")t.targetStart=_;else if(_.data==="teleport anchor"){t.targetAnchor=_,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}}_=o(_)}t.targetAnchor||xc(h,t,u,l),f(g&&o(g),t,h,n,r,s,i)}Ar(t)}return t.anchor&&o(t.anchor)}const oy=xf;function Ar(e){const t=e.ctx;if(t&&t.ut){let n=e.targetStart;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function xc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[Oc]=i,e&&(r(s,e),r(i,e)),i}const Tt=Symbol("_leaveCb"),Cr=Symbol("_enterCb");function Lf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hi(()=>{e.isMounted=!0}),jc(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],Nc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},Lc=e=>{const t=e.subTree;return t.component?Lc(t.component):t},Df={name:"BaseTransition",props:Nc,setup(e,{slots:t}){const n=Nd(),r=Lf();return()=>{const s=t.default&&Uc(t.default(),!0);if(!s||!s.length)return;const i=Dc(s),o=Z(e),{mode:c}=o;if(r.isLeaving)return Ss(i);const a=yo(i);if(!a)return Ss(i);let l=Qs(a,o,r,n,h=>l=h);a.type!==Ae&&Zn(a,l);const u=n.subTree,f=u&&yo(u);if(f&&f.type!==Ae&&!Qt(a,f)&&Lc(n).type!==Ae){const h=Qs(f,o,r,n);if(Zn(f,h),c==="out-in"&&a.type!==Ae)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},Ss(i);c==="in-out"&&a.type!==Ae&&(h.delayLeave=(g,_,T)=>{const F=Mc(r,f);F[String(f.key)]=f,g[Tt]=()=>{_(),g[Tt]=void 0,delete l.delayedLeave},l.delayedLeave=T})}return i}}};function Dc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ae){t=n;break}}return t}const Mf=Df;function Mc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Qs(e,t,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:F,onAppear:N,onAfterAppear:k,onAppearCancelled:D}=t,A=String(e.key),$=Mc(n,e),J=(I,H)=>{I&&ze(I,r,9,H)},q=(I,H)=>{const Y=H[1];J(I,H),W(I)?I.every(L=>L.length<=1)&&Y():I.length<=1&&Y()},j={mode:o,persisted:c,beforeEnter(I){let H=a;if(!n.isMounted)if(i)H=F||a;else return;I[Tt]&&I[Tt](!0);const Y=$[A];Y&&Qt(e,Y)&&Y.el[Tt]&&Y.el[Tt](),J(H,[I])},enter(I){let H=l,Y=u,L=f;if(!n.isMounted)if(i)H=N||l,Y=k||u,L=D||f;else return;let Q=!1;const pe=I[Cr]=Pe=>{Q||(Q=!0,Pe?J(L,[I]):J(Y,[I]),j.delayedLeave&&j.delayedLeave(),I[Cr]=void 0)};H?q(H,[I,pe]):pe()},leave(I,H){const Y=String(e.key);if(I[Cr]&&I[Cr](!0),n.isUnmounting)return H();J(h,[I]);let L=!1;const Q=I[Tt]=pe=>{L||(L=!0,H(),pe?J(T,[I]):J(_,[I]),I[Tt]=void 0,$[Y]===e&&delete $[Y])};$[Y]=e,g?q(g,[I,Q]):Q()},clone(I){const H=Qs(I,t,n,r,s);return s&&s(H),H}};return j}function Ss(e){if(ss(e))return e=Ut(e),e.children=null,e}function yo(e){if(!ss(e))return kc(e.type)&&e.children?Dc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Uc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(Uc(o.children,t,c))):(t||o.type!==Ae)&&r.push(c!=null?Ut(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function rs(e,t){return K(e)?(()=>ge({name:e.name},t,{setup:e}))():e}function Fc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xs(e,t,n,r,s=!1){if(W(e)){e.forEach((_,T)=>Xs(_,t&&(W(t)?t[T]:t),n,r,s));return}if(Hn(r)&&!s)return;const i=r.shapeFlag&4?ls(r.component):r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,u=c.refs===ce?c.refs={}:c.refs,f=c.setupState,h=Z(f),g=f===ce?()=>!1:_=>se(h,_);if(l!=null&&l!==a&&(he(l)?(u[l]=null,g(l)&&(f[l]=null)):de(l)&&(l.value=null)),K(a))lr(a,c,12,[o,u]);else{const _=he(a),T=de(a);if(_||T){const F=()=>{if(e.f){const N=_?g(a)?f[a]:u[a]:a.value;s?W(N)&&Si(N,i):W(N)?N.includes(i)||N.push(i):_?(u[a]=[i],g(a)&&(f[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else _?(u[a]=o,g(a)&&(f[a]=o)):T&&(a.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,Re(F,n)):F()}}}const Hn=e=>!!e.type.__asyncLoader,ss=e=>e.type.__isKeepAlive;function Uf(e,t){$c(e,"a",t)}function Ff(e,t){$c(e,"da",t)}function $c(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(is(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ss(s.parent.vnode)&&$f(r,t,n,s),s=s.parent}}function $f(e,t,n,r){const s=is(t,e,r,!0);Hc(()=>{Si(r[t],s)},n)}function is(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{$t();const c=ur(n),a=ze(t,n,e,o);return c(),jt(),a});return r?s.unshift(i):s.push(i),i}}const mt=e=>(t,n=me)=>{(!cs||e==="sp")&&is(e,(...r)=>t(...r),n)},jf=mt("bm"),Hi=mt("m"),Hf=mt("bu"),Bf=mt("u"),jc=mt("bum"),Hc=mt("um"),Vf=mt("sp"),Wf=mt("rtg"),zf=mt("rtc");function Kf(e,t=me){is("ec",e,t)}const Bc="components";function qf(e,t){return Jf(Bc,e,!0,t)||e}const Gf=Symbol.for("v-ndc");function Jf(e,t,n=!0,r=!1){const s=Se||me;if(s){const i=s.type;if(e===Bc){const c=Fd(i,!1);if(c&&(c===t||c===We(t)||c===es(We(t))))return i}const o=bo(s[e]||i[e],t)||bo(s.appContext[e],t);return!o&&r?i:o}}function bo(e,t){return e&&(e[t]||e[We(t)]||e[es(We(t))])}const Zs=e=>e?ul(e)?ls(e):Zs(e.parent):null,Bn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zs(e.parent),$root:e=>Zs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bi(e),$forceUpdate:e=>e.f||(e.f=()=>{ji(e.update)}),$nextTick:e=>e.n||(e.n=$i.bind(e.proxy)),$watch:e=>_d.bind(e)}),Ts=(e,t)=>e!==ce&&!e.__isScriptSetup&&se(e,t),Yf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ts(r,t))return o[t]=1,r[t];if(s!==ce&&se(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&se(l,t))return o[t]=3,i[t];if(n!==ce&&se(n,t))return o[t]=4,n[t];ei&&(o[t]=0)}}const u=Bn[t];let f,h;if(u)return t==="$attrs"&&ye(e.attrs,"get",""),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==ce&&se(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,se(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ts(s,t)?(s[t]=n,!0):r!==ce&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==ce&&se(e,o)||Ts(t,o)||(c=i[0])&&se(c,o)||se(r,o)||se(Bn,o)||se(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function wo(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ei=!0;function Qf(e){const t=Bi(e),n=e.proxy,r=e.ctx;ei=!1,t.beforeCreate&&Eo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:T,deactivated:F,beforeDestroy:N,beforeUnmount:k,destroyed:D,unmounted:A,render:$,renderTracked:J,renderTriggered:q,errorCaptured:j,serverPrefetch:I,expose:H,inheritAttrs:Y,components:L,directives:Q,filters:pe}=t;if(l&&Xf(l,r,null),o)for(const G in o){const ee=o[G];K(ee)&&(r[G]=ee.bind(n))}if(s){const G=s.call(n,n);ue(G)&&(e.data=an(G))}if(ei=!0,i)for(const G in i){const ee=i[G],st=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):$e,_t=!K(ee)&&K(ee.set)?ee.set.bind(n):$e,Ge=Ue({get:st,set:_t});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ce=>Ge.value=Ce})}if(c)for(const G in c)Vc(c[G],r,n,G);if(a){const G=K(a)?a.call(n):a;Reflect.ownKeys(G).forEach(ee=>{Pr(ee,G[ee])})}u&&Eo(u,e,"c");function ie(G,ee){W(ee)?ee.forEach(st=>G(st.bind(n))):ee&&G(ee.bind(n))}if(ie(jf,f),ie(Hi,h),ie(Hf,g),ie(Bf,_),ie(Uf,T),ie(Ff,F),ie(Kf,j),ie(zf,J),ie(Wf,q),ie(jc,k),ie(Hc,A),ie(Vf,I),W(H))if(H.length){const G=e.exposed||(e.exposed={});H.forEach(ee=>{Object.defineProperty(G,ee,{get:()=>n[ee],set:st=>n[ee]=st})})}else e.exposed||(e.exposed={});$&&e.render===$e&&(e.render=$),Y!=null&&(e.inheritAttrs=Y),L&&(e.components=L),Q&&(e.directives=Q),I&&Fc(e)}function Xf(e,t,n=$e){W(e)&&(e=ti(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Eo(e,t,n){ze(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vc(e,t,n,r){let s=r.includes(".")?nl(n,r):()=>n[r];if(he(e)){const i=t[e];K(i)&&Vn(s,i)}else if(K(e))Vn(s,e.bind(n));else if(ue(e))if(W(e))e.forEach(i=>Vc(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&Vn(s,i,e)}}function Bi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>jr(a,l,o,!0)),jr(a,t,o)),ue(t)&&i.set(t,a),a}function jr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&jr(e,i,n,!0),s&&s.forEach(o=>jr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=Zf[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const Zf={data:Io,props:So,emits:So,methods:Dn,computed:Dn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Dn,directives:Dn,watch:td,provide:Io,inject:ed};function Io(e,t){return t?e?function(){return ge(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function ed(e,t){return Dn(ti(e),ti(t))}function ti(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Dn(e,t){return e?ge(Object.create(null),e,t):t}function So(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:ge(Object.create(null),wo(e),wo(t!=null?t:{})):t}function td(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Wc(){return{app:null,config:{isNativeTag:Nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function rd(e,t){return function(r,s=null){K(r)||(r=ge({},r)),s!=null&&!ue(s)&&(s=null);const i=Wc(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:nd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:jd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(l,...f)):K(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!a){const g=l._ceVNode||Le(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(g,u):e(g,u,h),a=!0,l._container=u,u.__vue_app__=l,ls(g.component)}},onUnmount(u){c.push(u)},unmount(){a&&(ze(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=en;en=l;try{return u()}finally{en=f}}};return l}}let en=null;function Pr(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Be(e,t,n=!1){const r=me||Se;if(r||en){const s=en?en._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function sd(){return!!(me||Se||en)}const zc={},Kc=()=>Object.create(zc),qc=e=>Object.getPrototypeOf(e)===zc;function id(e,t,n,r=!1){const s={},i=Kc();e.propsDefaults=Object.create(null),Gc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:bc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function od(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=Z(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(os(e.emitsOptions,h))continue;const g=t[h];if(a)if(se(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const _=We(h);s[_]=ni(a,c,_,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Gc(e,t,s,i)&&(l=!0);let u;for(const f in c)(!t||!se(t,f)&&((u=on(f))===f||!se(t,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ni(a,c,f,void 0,e,!0)):delete s[f]);if(i!==c)for(const f in i)(!t||!se(t,f)&&!0)&&(delete i[f],l=!0)}l&&dt(e.attrs,"set","")}function Gc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(Fn(a))continue;const l=t[a];let u;s&&se(s,u=We(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:os(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Z(n),l=c||ce;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ni(s,a,f,l[f],e,!se(l,f))}}return o}function ni(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=se(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ur(s);r=l[n]=a.call(null,t),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}const ad=new WeakMap;function Jc(e,t,n=!1){const r=n?ad:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!K(e)){const u=f=>{a=!0;const[h,g]=Jc(f,t,!0);ge(o,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return ue(e)&&r.set(e,_n),_n;if(W(i))for(let u=0;u<i.length;u++){const f=We(i[u]);To(f)&&(o[f]=ce)}else if(i)for(const u in i){const f=We(u);if(To(f)){const h=i[u],g=o[f]=W(h)||K(h)?{type:h}:ge({},h),_=g.type;let T=!1,F=!0;if(W(_))for(let N=0;N<_.length;++N){const k=_[N],D=K(k)&&k.name;if(D==="Boolean"){T=!0;break}else D==="String"&&(F=!1)}else T=K(_)&&_.name==="Boolean";g[0]=T,g[1]=F,(T||se(g,"default"))&&c.push(f)}}const l=[o,c];return ue(e)&&r.set(e,l),l}function To(e){return e[0]!=="$"&&!Fn(e)}const Yc=e=>e[0]==="_"||e==="$stable",Vi=e=>W(e)?e.map(Ze):[Ze(e)],cd=(e,t,n)=>{if(t._n)return t;const r=Of((...s)=>Vi(t(...s)),n);return r._c=!1,r},Qc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Yc(s))continue;const i=e[s];if(K(i))t[s]=cd(s,i,r);else if(i!=null){const o=Vi(i);t[s]=()=>o}}},Xc=(e,t)=>{const n=Vi(t);e.slots.default=()=>n},Zc=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},ld=(e,t,n)=>{const r=e.slots=Kc();if(e.vnode.shapeFlag&32){const s=t._;s?(Zc(r,t,n),n&&Za(r,"_",s,!0)):Qc(t,r)}else t&&Xc(e,t)},ud=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ce;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Zc(s,t,n):(i=!t.$stable,Qc(t,s)),o=t}else t&&(Xc(e,t),o={default:1});if(i)for(const c in s)!Yc(c)&&o[c]==null&&delete s[c]},Re=Sd;function fd(e){return dd(e)}function dd(e,t){const n=ec();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=$e,insertStaticContent:_}=e,T=(d,p,m,b=null,v=null,w=null,R=void 0,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Qt(d,p)&&(b=y(d),Ce(d,v,w,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:B,shapeFlag:O}=p;switch(E){case as:F(d,p,m,b);break;case Ae:N(d,p,m,b);break;case As:d==null&&k(p,m,b,R);break;case Xe:L(d,p,m,b,v,w,R,C,S);break;default:O&1?$(d,p,m,b,v,w,R,C,S):O&6?Q(d,p,m,b,v,w,R,C,S):(O&64||O&128)&&E.process(d,p,m,b,v,w,R,C,S,M)}B!=null&&v&&Xs(B,d&&d.ref,w,p||d,!p)},F=(d,p,m,b)=>{if(d==null)r(p.el=c(p.children),m,b);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},N=(d,p,m,b)=>{d==null?r(p.el=a(p.children||""),m,b):p.el=d.el},k=(d,p,m,b)=>{[d.el,d.anchor]=_(d.children,p,m,b,d.el,d.anchor)},D=({el:d,anchor:p},m,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,b),d=v;r(p,m,b)},A=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},$=(d,p,m,b,v,w,R,C,S)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?J(p,m,b,v,w,R,C,S):I(d,p,v,w,R,C,S)},J=(d,p,m,b,v,w,R,C)=>{let S,E;const{props:B,shapeFlag:O,transition:U,dirs:z}=d;if(S=d.el=o(d.type,w,B&&B.is,B),O&8?u(S,d.children):O&16&&j(d.children,S,null,b,v,Cs(d,w),R,C),z&&zt(d,null,b,"created"),q(S,d,d.scopeId,R,b),B){for(const le in B)le!=="value"&&!Fn(le)&&i(S,le,null,B[le],w,b);"value"in B&&i(S,"value",null,B.value,w),(E=B.onVnodeBeforeMount)&&Ye(E,b,d)}z&&zt(d,null,b,"beforeMount");const X=hd(v,U);X&&U.beforeEnter(S),r(S,p,m),((E=B&&B.onVnodeMounted)||X||z)&&Re(()=>{E&&Ye(E,b,d),X&&U.enter(S),z&&zt(d,null,b,"mounted")},v)},q=(d,p,m,b,v)=>{if(m&&g(d,m),b)for(let w=0;w<b.length;w++)g(d,b[w]);if(v){let w=v.subTree;if(p===w||sl(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=v.vnode;q(d,R,R.scopeId,R.slotScopeIds,v.parent)}}},j=(d,p,m,b,v,w,R,C,S=0)=>{for(let E=S;E<d.length;E++){const B=d[E]=C?Ct(d[E]):Ze(d[E]);T(null,B,p,m,b,v,w,R,C)}},I=(d,p,m,b,v,w,R)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:B}=p;S|=d.patchFlag&16;const O=d.props||ce,U=p.props||ce;let z;if(m&&Kt(m,!1),(z=U.onVnodeBeforeUpdate)&&Ye(z,m,p,d),B&&zt(p,d,m,"beforeUpdate"),m&&Kt(m,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&u(C,""),E?H(d.dynamicChildren,E,C,m,b,Cs(p,v),w):R||ee(d,p,C,null,m,b,Cs(p,v),w,!1),S>0){if(S&16)Y(C,O,U,m,v);else if(S&2&&O.class!==U.class&&i(C,"class",null,U.class,v),S&4&&i(C,"style",O.style,U.style,v),S&8){const X=p.dynamicProps;for(let le=0;le<X.length;le++){const ne=X[le],Oe=O[ne],_e=U[ne];(_e!==Oe||ne==="value")&&i(C,ne,Oe,_e,v,m)}}S&1&&d.children!==p.children&&u(C,p.children)}else!R&&E==null&&Y(C,O,U,m,v);((z=U.onVnodeUpdated)||B)&&Re(()=>{z&&Ye(z,m,p,d),B&&zt(p,d,m,"updated")},b)},H=(d,p,m,b,v,w,R)=>{for(let C=0;C<p.length;C++){const S=d[C],E=p[C],B=S.el&&(S.type===Xe||!Qt(S,E)||S.shapeFlag&70)?f(S.el):m;T(S,E,B,null,b,v,w,R,!0)}},Y=(d,p,m,b,v)=>{if(p!==m){if(p!==ce)for(const w in p)!Fn(w)&&!(w in m)&&i(d,w,p[w],null,v,b);for(const w in m){if(Fn(w))continue;const R=m[w],C=p[w];R!==C&&w!=="value"&&i(d,w,C,R,v,b)}"value"in m&&i(d,"value",p.value,m.value,v)}},L=(d,p,m,b,v,w,R,C,S)=>{const E=p.el=d?d.el:c(""),B=p.anchor=d?d.anchor:c("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:z}=p;z&&(C=C?C.concat(z):z),d==null?(r(E,m,b),r(B,m,b),j(p.children||[],m,B,v,w,R,C,S)):O>0&&O&64&&U&&d.dynamicChildren?(H(d.dynamicChildren,U,m,v,w,R,C),(p.key!=null||v&&p===v.subTree)&&Wi(d,p,!0)):ee(d,p,m,B,v,w,R,C,S)},Q=(d,p,m,b,v,w,R,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?v.ctx.activate(p,m,b,R,S):pe(p,m,b,v,w,R,S):Pe(d,p,S)},pe=(d,p,m,b,v,w,R)=>{const C=d.component=xd(d,b,v);if(ss(d)&&(C.ctx.renderer=M),Ld(C,!1,R),C.asyncDep){if(v&&v.registerDep(C,ie,R),!d.el){const S=C.subTree=Le(Ae);N(null,S,p,m)}}else ie(C,d,p,m,v,w,R)},Pe=(d,p,m)=>{const b=p.component=d.component;if(Ed(d,p,m))if(b.asyncDep&&!b.asyncResolved){G(b,p,m);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},ie=(d,p,m,b,v,w,R)=>{const C=()=>{if(d.isMounted){let{next:O,bu:U,u:z,parent:X,vnode:le}=d;{const ke=el(d);if(ke){O&&(O.el=le.el,G(d,O,R)),ke.asyncDep.then(()=>{d.isUnmounted||C()});return}}let ne=O,Oe;Kt(d,!1),O?(O.el=le.el,G(d,O,R)):O=le,U&&ys(U),(Oe=O.props&&O.props.onVnodeBeforeUpdate)&&Ye(Oe,X,O,le),Kt(d,!0);const _e=Rs(d),Fe=d.subTree;d.subTree=_e,T(Fe,_e,f(Fe.el),y(Fe),d,v,w),O.el=_e.el,ne===null&&Id(d,_e.el),z&&Re(z,v),(Oe=O.props&&O.props.onVnodeUpdated)&&Re(()=>Ye(Oe,X,O,le),v)}else{let O;const{el:U,props:z}=p,{bm:X,m:le,parent:ne,root:Oe,type:_e}=d,Fe=Hn(p);if(Kt(d,!1),X&&ys(X),!Fe&&(O=z&&z.onVnodeBeforeMount)&&Ye(O,ne,p),Kt(d,!0),U&&fe){const ke=()=>{d.subTree=Rs(d),fe(U,d.subTree,d,v,null)};Fe&&_e.__asyncHydrate?_e.__asyncHydrate(U,d,ke):ke()}else{Oe.ce&&Oe.ce._injectChildStyle(_e);const ke=d.subTree=Rs(d);T(null,ke,m,b,d,v,w),p.el=ke.el}if(le&&Re(le,v),!Fe&&(O=z&&z.onVnodeMounted)){const ke=p;Re(()=>Ye(O,ne,ke),v)}(p.shapeFlag&256||ne&&Hn(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Re(d.a,v),d.isMounted=!0,p=m=b=null}};d.scope.on();const S=d.effect=new ac(C);d.scope.off();const E=d.update=S.run.bind(S),B=d.job=S.runIfDirty.bind(S);B.i=d,B.id=d.uid,S.scheduler=()=>ji(B),Kt(d,!0),E()},G=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,od(d,p.props,b,m),ud(d,p.children,m),$t(),mo(d),jt()},ee=(d,p,m,b,v,w,R,C,S=!1)=>{const E=d&&d.children,B=d?d.shapeFlag:0,O=p.children,{patchFlag:U,shapeFlag:z}=p;if(U>0){if(U&128){_t(E,O,m,b,v,w,R,C,S);return}else if(U&256){st(E,O,m,b,v,w,R,C,S);return}}z&8?(B&16&&De(E,v,w),O!==E&&u(m,O)):B&16?z&16?_t(E,O,m,b,v,w,R,C,S):De(E,v,w,!0):(B&8&&u(m,""),z&16&&j(O,m,b,v,w,R,C,S))},st=(d,p,m,b,v,w,R,C,S)=>{d=d||_n,p=p||_n;const E=d.length,B=p.length,O=Math.min(E,B);let U;for(U=0;U<O;U++){const z=p[U]=S?Ct(p[U]):Ze(p[U]);T(d[U],z,m,null,v,w,R,C,S)}E>B?De(d,v,w,!0,!1,O):j(p,m,b,v,w,R,C,S,O)},_t=(d,p,m,b,v,w,R,C,S)=>{let E=0;const B=p.length;let O=d.length-1,U=B-1;for(;E<=O&&E<=U;){const z=d[E],X=p[E]=S?Ct(p[E]):Ze(p[E]);if(Qt(z,X))T(z,X,m,null,v,w,R,C,S);else break;E++}for(;E<=O&&E<=U;){const z=d[O],X=p[U]=S?Ct(p[U]):Ze(p[U]);if(Qt(z,X))T(z,X,m,null,v,w,R,C,S);else break;O--,U--}if(E>O){if(E<=U){const z=U+1,X=z<B?p[z].el:b;for(;E<=U;)T(null,p[E]=S?Ct(p[E]):Ze(p[E]),m,X,v,w,R,C,S),E++}}else if(E>U)for(;E<=O;)Ce(d[E],v,w,!0),E++;else{const z=E,X=E,le=new Map;for(E=X;E<=U;E++){const xe=p[E]=S?Ct(p[E]):Ze(p[E]);xe.key!=null&&le.set(xe.key,E)}let ne,Oe=0;const _e=U-X+1;let Fe=!1,ke=0;const kn=new Array(_e);for(E=0;E<_e;E++)kn[E]=0;for(E=z;E<=O;E++){const xe=d[E];if(Oe>=_e){Ce(xe,v,w,!0);continue}let Je;if(xe.key!=null)Je=le.get(xe.key);else for(ne=X;ne<=U;ne++)if(kn[ne-X]===0&&Qt(xe,p[ne])){Je=ne;break}Je===void 0?Ce(xe,v,w,!0):(kn[Je-X]=E+1,Je>=ke?ke=Je:Fe=!0,T(xe,p[Je],m,null,v,w,R,C,S),Oe++)}const io=Fe?pd(kn):_n;for(ne=io.length-1,E=_e-1;E>=0;E--){const xe=X+E,Je=p[xe],oo=xe+1<B?p[xe+1].el:b;kn[E]===0?T(null,Je,m,oo,v,w,R,C,S):Fe&&(ne<0||E!==io[ne]?Ge(Je,m,oo,2):ne--)}}},Ge=(d,p,m,b,v=null)=>{const{el:w,type:R,transition:C,children:S,shapeFlag:E}=d;if(E&6){Ge(d.component.subTree,p,m,b);return}if(E&128){d.suspense.move(p,m,b);return}if(E&64){R.move(d,p,m,M);return}if(R===Xe){r(w,p,m);for(let O=0;O<S.length;O++)Ge(S[O],p,m,b);r(d.anchor,p,m);return}if(R===As){D(d,p,m);return}if(b!==2&&E&1&&C)if(b===0)C.beforeEnter(w),r(w,p,m),Re(()=>C.enter(w),v);else{const{leave:O,delayLeave:U,afterLeave:z}=C,X=()=>r(w,p,m),le=()=>{O(w,()=>{X(),z&&z()})};U?U(w,X,le):le()}else r(w,p,m)},Ce=(d,p,m,b=!1,v=!1)=>{const{type:w,props:R,ref:C,children:S,dynamicChildren:E,shapeFlag:B,patchFlag:O,dirs:U,cacheIndex:z}=d;if(O===-2&&(v=!1),C!=null&&Xs(C,null,m,d,!0),z!=null&&(p.renderCache[z]=void 0),B&256){p.ctx.deactivate(d);return}const X=B&1&&U,le=!Hn(d);let ne;if(le&&(ne=R&&R.onVnodeBeforeUnmount)&&Ye(ne,p,d),B&6)vr(d.component,m,b);else{if(B&128){d.suspense.unmount(m,b);return}X&&zt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,M,b):E&&!E.hasOnce&&(w!==Xe||O>0&&O&64)?De(E,p,m,!1,!0):(w===Xe&&O&384||!v&&B&16)&&De(S,p,m),b&&ln(d)}(le&&(ne=R&&R.onVnodeUnmounted)||X)&&Re(()=>{ne&&Ye(ne,p,d),X&&zt(d,null,p,"unmounted")},m)},ln=d=>{const{type:p,el:m,anchor:b,transition:v}=d;if(p===Xe){un(m,b);return}if(p===As){A(d);return}const w=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:C}=v,S=()=>R(m,w);C?C(d.el,w,S):S()}else w()},un=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},vr=(d,p,m)=>{const{bum:b,scope:v,job:w,subTree:R,um:C,m:S,a:E}=d;Co(S),Co(E),b&&ys(b),v.stop(),w&&(w.flags|=8,Ce(R,d,p,m)),C&&Re(C,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},De=(d,p,m,b=!1,v=!1,w=0)=>{for(let R=w;R<d.length;R++)Ce(d[R],p,m,b,v)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[Oc];return m?h(m):p};let x=!1;const P=(d,p,m)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),p._vnode=d,x||(x=!0,mo(),Rc(),x=!1)},M={p:T,um:Ce,m:Ge,r:ln,mt:pe,mc:j,pc:ee,pbc:H,n:y,o:e};let te,fe;return t&&([te,fe]=t(M)),{render:P,hydrate:te,createApp:rd(P,te)}}function Cs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function hd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wi(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ct(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Wi(o,c)),c.type===as&&(c.el=o.el)}}function pd(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function el(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:el(t)}function Co(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const gd=Symbol.for("v-scx"),md=()=>Be(gd);function Vn(e,t,n){return tl(e,t,n)}function tl(e,t,n=ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=ge({},n);let a;if(cs)if(i==="sync"){const h=md();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||r)c.once=!0;else return{stop:$e,resume:$e,pause:$e};const l=me;c.call=(h,g,_)=>ze(h,l,g,_);let u=!1;i==="post"?c.scheduler=h=>{Re(h,l&&l.suspense)}:i!=="sync"&&(u=!0,c.scheduler=(h,g)=>{g?h():ji(h)}),c.augmentJob=h=>{t&&(h.flags|=4),u&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};const f=Cf(e,t,c);return a&&a.push(f),f}function _d(e,t,n){const r=this.proxy,s=he(e)?e.includes(".")?nl(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=ur(this),c=tl(s,i.bind(r),n);return o(),c}function nl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const vd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${on(t)}Modifiers`];function yd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ce;let s=n;const i=t.startsWith("update:"),o=i&&vd(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>he(u)?u.trim():u)),o.number&&(s=n.map(Fu)));let c,a=r[c=vs(t)]||r[c=vs(We(t))];!a&&i&&(a=r[c=vs(on(t))]),a&&ze(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ze(l,e,6,s)}}function rl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!K(e)){const a=l=>{const u=rl(l,t,!0);u&&(c=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(ue(e)&&r.set(e,null),null):(W(i)?i.forEach(a=>o[a]=null):ge(o,i),ue(e)&&r.set(e,o),o)}function os(e,t){return!e||!Qr(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,on(t))||se(e,t))}function Rs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:_,inheritAttrs:T}=e,F=$r(e);let N,k;try{if(n.shapeFlag&4){const A=s||r,$=A;N=Ze(l.call($,A,u,f,g,h,_)),k=c}else{const A=t;N=Ze(A.length>1?A(f,{attrs:c,slots:o,emit:a}):A(f,null)),k=t.props?c:bd(c)}}catch(A){Wn.length=0,ns(A,e,1),N=Le(Ae)}let D=N;if(k&&T!==!1){const A=Object.keys(k),{shapeFlag:$}=D;A.length&&$&7&&(i&&A.some(Ii)&&(k=wd(k,i)),D=Ut(D,k,!1,!0))}return n.dirs&&(D=Ut(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Zn(D,n.transition),N=D,$r(F),N}const bd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qr(n))&&((t||(t={}))[n]=e[n]);return t},wd=(e,t)=>{const n={};for(const r in e)(!Ii(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ed(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ro(r,o,l):!!o;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!os(l,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ro(r,o,l):!0:!!o;return!1}function Ro(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!os(n,i))return!0}return!1}function Id({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const sl=e=>e.__isSuspense;function Sd(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Pf(e)}const Xe=Symbol.for("v-fgt"),as=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),As=Symbol.for("v-stc"),Wn=[];let Ne=null;function il(e=!1){Wn.push(Ne=e?null:[])}function Td(){Wn.pop(),Ne=Wn[Wn.length-1]||null}let er=1;function Ao(e){er+=e,e<0&&Ne&&(Ne.hasOnce=!0)}function ol(e){return e.dynamicChildren=er>0?Ne||_n:null,Td(),er>0&&Ne&&Ne.push(e),e}function ay(e,t,n,r,s,i){return ol(ll(e,t,n,r,s,i,!0))}function al(e,t,n,r,s){return ol(Le(e,t,n,r,s,!0))}function ri(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const cl=({key:e})=>e!=null?e:null,Or=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||de(e)||K(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function ll(e,t=null,n=null,r=0,s=null,i=e===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cl(t),ref:t&&Or(t),scopeId:Pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return c?(zi(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),er>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const Le=Cd;function Cd(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Gf)&&(e=Ae),ri(e)){const c=Ut(e,t,!0);return n&&zi(c,n),er>0&&!i&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(e)]=c:Ne.push(c)),c.patchFlag=-2,c}if($d(e)&&(e=e.__vccOpts),t){t=Rd(t);let{class:c,style:a}=t;c&&!he(c)&&(t.class=Ri(c)),ue(a)&&(Mi(a)&&!W(a)&&(a=ge({},a)),t.style=Ci(a))}const o=he(e)?1:sl(e)?128:kc(e)?64:ue(e)?4:K(e)?2:0;return ll(e,t,n,r,s,o,i,!0)}function Rd(e){return e?Mi(e)||qc(e)?ge({},e):e:null}function Ut(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=e,l=t?Pd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&cl(l),ref:t&&t.ref?n&&i?W(i)?i.concat(Or(t)):[i,Or(t)]:Or(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Zn(u,a.clone(u)),u}function Ad(e=" ",t=0){return Le(as,null,e,t)}function cy(e="",t=!1){return t?(il(),al(Ae,null,e)):Le(Ae,null,e)}function Ze(e){return e==null||typeof e=="boolean"?Le(Ae):W(e)?Le(Xe,null,e.slice()):typeof e=="object"?Ct(e):Le(as,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function zi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),zi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!qc(t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Ad(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ri([t.class,r.class]));else if(s==="style")t.style=Ci([t.style,r.style]);else if(Qr(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ye(e,t,n,r=null){ze(e,t,7,[n,r])}const Od=Wc();let kd=0;function xd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Od,i={uid:kd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jc(r,s),emitsOptions:rl(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=yd.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Nd=()=>me||Se;let Hr,si;{const e=ec(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Hr=t("__VUE_INSTANCE_SETTERS__",n=>me=n),si=t("__VUE_SSR_SETTERS__",n=>cs=n)}const ur=e=>{const t=me;return Hr(e),e.scope.on(),()=>{e.scope.off(),Hr(t)}},Po=()=>{me&&me.scope.off(),Hr(null)};function ul(e){return e.vnode.shapeFlag&4}let cs=!1;function Ld(e,t=!1,n=!1){t&&si(t);const{props:r,children:s}=e.vnode,i=ul(e);id(e,r,i,t),ld(e,s,n);const o=i?Dd(e,t):void 0;return t&&si(!1),o}function Dd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yf);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ud(e):null,i=ur(e);$t();const o=lr(r,e,0,[e.props,s]);if(jt(),i(),Ya(o)){if(Hn(e)||Fc(e),o.then(Po,Po),t)return o.then(c=>{Oo(e,c,t)}).catch(c=>{ns(c,e,0)});e.asyncDep=o}else Oo(e,o,t)}else fl(e,t)}function Oo(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Ic(t)),fl(e,n)}let ko;function fl(e,t,n){const r=e.type;if(!e.render){if(!t&&ko&&!r.render){const s=r.template||Bi(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ge(ge({isCustomElement:i,delimiters:c},o),a);r.render=ko(s,l)}}e.render=r.render||$e}{const s=ur(e);$t();try{Qf(e)}finally{jt(),s()}}}const Md={get(e,t){return ye(e,"get",""),e[t]}};function Ud(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Md),slots:e.slots,emit:e.emit,expose:t}}function ls(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ic(Pn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)},has(t,n){return n in t||n in Bn}})):e.proxy}function Fd(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function $d(e){return K(e)&&"__vccOpts"in e}const Ue=(e,t)=>Sf(e,t,cs);function Ki(e,t,n){const r=arguments.length;return r===2?ue(t)&&!W(t)?ri(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ri(n)&&(n=[n]),Le(e,t,n))}const jd="3.5.3";/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ii;const xo=typeof window!="undefined"&&window.trustedTypes;if(xo)try{ii=xo.createPolicy("vue",{createHTML:e=>e})}catch{}const dl=ii?e=>ii.createHTML(e):e=>e,Hd="http://www.w3.org/2000/svg",Bd="http://www.w3.org/1998/Math/MathML",at=typeof document!="undefined"?document:null,No=at&&at.createElement("template"),Vd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?at.createElementNS(Hd,e):t==="mathml"?at.createElementNS(Bd,e):n?at.createElement(e,{is:n}):at.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=dl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=No.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yt="transition",Nn="animation",tr=Symbol("_vtc"),hl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wd=ge({},Nc,hl),zd=e=>(e.displayName="Transition",e.props=Wd,e),ly=zd((e,{slots:t})=>Ki(Mf,Kd(e),t)),qt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Lo=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function Kd(e){const t={};for(const L in e)L in hl||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=qd(s),T=_&&_[0],F=_&&_[1],{onBeforeEnter:N,onEnter:k,onEnterCancelled:D,onLeave:A,onLeaveCancelled:$,onBeforeAppear:J=N,onAppear:q=k,onAppearCancelled:j=D}=t,I=(L,Q,pe)=>{Gt(L,Q?u:c),Gt(L,Q?l:o),pe&&pe()},H=(L,Q)=>{L._isLeaving=!1,Gt(L,f),Gt(L,g),Gt(L,h),Q&&Q()},Y=L=>(Q,pe)=>{const Pe=L?q:k,ie=()=>I(Q,L,pe);qt(Pe,[Q,ie]),Do(()=>{Gt(Q,L?a:i),bt(Q,L?u:c),Lo(Pe)||Mo(Q,r,T,ie)})};return ge(t,{onBeforeEnter(L){qt(N,[L]),bt(L,i),bt(L,o)},onBeforeAppear(L){qt(J,[L]),bt(L,a),bt(L,l)},onEnter:Y(!1),onAppear:Y(!0),onLeave(L,Q){L._isLeaving=!0;const pe=()=>H(L,Q);bt(L,f),bt(L,h),Yd(),Do(()=>{!L._isLeaving||(Gt(L,f),bt(L,g),Lo(A)||Mo(L,r,F,pe))}),qt(A,[L,pe])},onEnterCancelled(L){I(L,!1),qt(D,[L])},onAppearCancelled(L){I(L,!0),qt(j,[L])},onLeaveCancelled(L){H(L),qt($,[L])}})}function qd(e){if(e==null)return null;if(ue(e))return[Ps(e.enter),Ps(e.leave)];{const t=Ps(e);return[t,t]}}function Ps(e){return $u(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[tr]||(e[tr]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[tr];n&&(n.delete(t),n.size||(e[tr]=void 0))}function Do(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gd=0;function Mo(e,t,n,r){const s=e._endId=++Gd,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=Jd(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=a&&f()};setTimeout(()=>{u<a&&f()},c+1),e.addEventListener(l,h)}function Jd(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${yt}Delay`),i=r(`${yt}Duration`),o=Uo(s,i),c=r(`${Nn}Delay`),a=r(`${Nn}Duration`),l=Uo(c,a);let u=null,f=0,h=0;t===yt?o>0&&(u=yt,f=o,h=i.length):t===Nn?l>0&&(u=Nn,f=l,h=a.length):(f=Math.max(o,l),u=f>0?o>l?yt:Nn:null,h=u?u===yt?i.length:a.length:0);const g=u===yt&&/\b(transform|all)(,|$)/.test(r(`${yt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function Uo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Fo(n)+Fo(e[r])))}function Fo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Yd(){return document.body.offsetHeight}function Qd(e,t,n){const r=e[tr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $o=Symbol("_vod"),Xd=Symbol("_vsh"),Zd=Symbol(""),eh=/(^|;)\s*display\s*:/;function th(e,t,n){const r=e.style,s=he(n);let i=!1;if(n&&!s){if(t)if(he(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&kr(r,c,"")}else for(const o in t)n[o]==null&&kr(r,o,"");for(const o in n)o==="display"&&(i=!0),kr(r,o,n[o])}else if(s){if(t!==n){const o=r[Zd];o&&(n+=";"+o),r.cssText=n,i=eh.test(n)}}else t&&e.removeAttribute("style");$o in e&&(e[$o]=i?r.display:"",e[Xd]&&(r.display="none"))}const jo=/\s*!important$/;function kr(e,t,n){if(W(n))n.forEach(r=>kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=nh(e,t);jo.test(n)?e.setProperty(on(r),n.replace(jo,""),"important"):e[r]=n}}const Ho=["Webkit","Moz","ms"],Os={};function nh(e,t){const n=Os[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Os[t]=r;r=es(r);for(let s=0;s<Ho.length;s++){const i=Ho[s]+r;if(i in e)return Os[t]=i}return t}const Bo="http://www.w3.org/1999/xlink";function Vo(e,t,n,r,s,i=zu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Bo,t.slice(6,t.length)):e.setAttributeNS(Bo,t,n):n==null||i&&!tc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ft(n)?String(n):n)}function rh(e,t,n,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?dl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=tc(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function sh(e,t,n,r){e.addEventListener(t,n,r)}function ih(e,t,n,r){e.removeEventListener(t,n,r)}const Wo=Symbol("_vei");function oh(e,t,n,r,s=null){const i=e[Wo]||(e[Wo]={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=ah(t);if(r){const l=i[t]=uh(r,s);sh(e,c,l,a)}else o&&(ih(e,c,o,a),i[t]=void 0)}}const zo=/(?:Once|Passive|Capture)$/;function ah(e){let t;if(zo.test(e)){t={};let r;for(;r=e.match(zo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):on(e.slice(2)),t]}let ks=0;const ch=Promise.resolve(),lh=()=>ks||(ch.then(()=>ks=0),ks=Date.now());function uh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(fh(r,n.value),t,5,[r])};return n.value=e,n.attached=lh(),n}function fh(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,dh=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Qd(e,r,o):t==="style"?th(e,n,r):Qr(t)?Ii(t)||oh(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hh(e,t,r,o))?(rh(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vo(e,t,r,o,i,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Vo(e,t,r,o))};function hh(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ko(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ko(t)&&he(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!he(n)))}const ph=ge({patchProp:dh},Vd);let qo;function gh(){return qo||(qo=fd(ph))}const mh=(...e)=>{const t=gh().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=vh(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_h(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function _h(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vh(e){return he(e)?document.querySelector(e):e}function qi(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const nn=cr(!1);let oi;function yh(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function bh(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const pl="ontouchstart"in window||window.navigator.maxTouchPoints>0;function wh(e){const t=e.toLowerCase(),n=bh(t),r=yh(t,n),s={};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),nn.value===!0&&(oi={is:{...s}}),pl===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Go=navigator.userAgent||navigator.vendor||window.opera,Eh={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Ve={userAgent:Go,is:wh(Go),has:{touch:pl},within:{iframe:window.self!==window.top}},ai={install(e){const{$q:t}=e;nn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,Ve),nn.value=!1}),t.platform=an(this)):t.platform=this}};{let e;qi(Ve.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(ai,Ve),nn.value===!0&&(Object.assign(ai,oi,Eh),oi=null)}function uy(e){return Pn(rs(e))}function fy(e){return Pn(e)}const us=(e,t)=>{const n=an(e);for(const r in e)qi(t,r,()=>n[r],s=>{n[r]=s});return t},Tn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(Tn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function et(){}function dy(e){return e.button===0}function hy(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function py(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function gy(e){e.stopPropagation()}function Jo(e){e.cancelable!==!1&&e.preventDefault()}function my(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function _y(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Jo,Tn.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Jo,Tn.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function vy(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],Tn[s[3]])})}function yy(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],Tn[r[3]])}),e[n]=void 0)}function Ih(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,n!==!0&&e.apply(this,i)};r!==null?clearTimeout(r):n===!0&&e.apply(this,i),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const xs=["sm","md","lg","xl"],{passive:Yo}=Tn;var Sh=us({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:et,setDebounce:et,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||Ve.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=f=>{const[h,g]=i();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(f!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let c,a={},l=16;this.setSizes=f=>{xs.forEach(h=>{f[h]!==void 0&&(a[h]=f[h])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&xs.forEach(h=>{this.sizes[h]=parseInt(f.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{xs.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{c!==void 0&&r.removeEventListener("resize",c,Yo),c=h>0?Ih(this.__update,h):this.__update,r.addEventListener("resize",c,Yo)},this.setDebounce(l),Object.keys(a).length!==0?(this.setSizes(a),a=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};nn.value===!0?t.push(u):u()}});const ve=us({isActive:!1,mode:!1},{__media:void 0,set(e){ve.mode=e,e==="auto"?(ve.__media===void 0&&(ve.__media=window.matchMedia("(prefers-color-scheme: dark)"),ve.__updateMedia=()=>{ve.set("auto")},ve.__media.addListener(ve.__updateMedia)),e=ve.__media.matches):ve.__media!==void 0&&(ve.__media.removeListener(ve.__updateMedia),ve.__media=void 0),ve.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){ve.set(ve.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function Th(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let gl=!1;function Ch(e){gl=e.isComposing===!0}function Rh(e){return gl===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function by(e,t){return Rh(e)===!0?!1:[].concat(t).includes(e.keyCode)}function ml(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function Ah({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=ml(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function Ph(){const{is:e}=Ve,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=ml(e);s!==void 0&&n.add(`platform-${s}`)}}Ve.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Ve.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function Oh(e){for(const t in e)Th(t,e[t])}var kh={install(e){if(this.__installed!==!0){if(nn.value===!0)Ph();else{const{$q:t}=e;t.config.brand!==void 0&&Oh(t.config.brand);const n=Ah(Ve,t.config);document.body.classList.add.apply(document.body.classList,n)}Ve.is.ios===!0&&document.body.addEventListener("touchstart",et),window.addEventListener("keydown",Ch,!0)}}};const _l=()=>!0;function xh(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Nh(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function Lh(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return _l;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(xh).map(Nh)),()=>t.includes(window.location.hash)}var Dh={__history:[],add:et,remove:et,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=Ve.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=_l),this.__history.push(o)},this.remove=o=>{const c=this.__history.indexOf(o);c>=0&&this.__history.splice(c,1)};const s=Lh(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Qo={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Xo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Rt=us({__qLang:{}},{getLocale:Xo,set(e=Qo,t){const n={...e,rtl:e.rtl===!0,getLocale:Xo};{if(n.set=Rt.set,Rt.__langConfig===void 0||Rt.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Rt.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Rt.__qLang,Rt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Qo))}});var Mh={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Br=us({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Br.set,Object.assign(Br.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,qi(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||Mh))}}),Uh="_q_",wy="_q_l_",Ey="_q_pc_",Iy="_q_fo_";function Sy(){}const Zo={};let vl=!1;function Fh(){vl=!0}function Ns(e,t){if(e===t)return!0;if(e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,r;if(e.constructor===Array){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(Ns(e[r],t[r])!==!0)return!1;return!0}if(e.constructor===Map){if(e.size!==t.size)return!1;let i=e.entries();for(r=i.next();r.done!==!0;){if(t.has(r.value[0])!==!0)return!1;r=i.next()}for(i=e.entries(),r=i.next();r.done!==!0;){if(Ns(r.value[1],t.get(r.value[0]))!==!0)return!1;r=i.next()}return!0}if(e.constructor===Set){if(e.size!==t.size)return!1;const i=e.entries();for(r=i.next();r.done!==!0;){if(t.has(r.value[0])!==!0)return!1;r=i.next()}return!0}if(e.buffer!=null&&e.buffer.constructor===ArrayBuffer){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const s=Object.keys(e).filter(i=>e[i]!==void 0);if(n=s.length,n!==Object.keys(t).filter(i=>t[i]!==void 0).length)return!1;for(r=n;r--!==0;){const i=s[r];if(Ns(e[i],t[i])!==!0)return!1}return!0}return e!==e&&t!==t}function ea(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}function $h(e){return Object.prototype.toString.call(e)==="[object Date]"}function jh(e){return Object.prototype.toString.call(e)==="[object RegExp]"}const ta=[ai,kh,ve,Sh,Dh,Rt,Br];function na(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function Hh(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(Uh,n.$q),na(n,ta),t.components!==void 0&&Object.values(t.components).forEach(r=>{ea(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{ea(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&na(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&ta.includes(r)===!1)),nn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var Bh=function(e,t={}){const n={version:"2.16.11"};vl===!1?(t.config!==void 0&&Object.assign(Zo,t.config),n.config={...Zo},Fh()):n.config=t.config||{},Hh(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},Vh={name:"Quasar",version:"2.16.11",install:Bh,lang:Rt,iconSet:Br};/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof document!="undefined";function Wh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function Ls(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ke(s)?s.map(e):e(s)}return n}const zn=()=>{},Ke=Array.isArray,yl=/#/g,zh=/&/g,Kh=/\//g,qh=/=/g,Gh=/\?/g,bl=/\+/g,Jh=/%5B/g,Yh=/%5D/g,wl=/%5E/g,Qh=/%60/g,El=/%7B/g,Xh=/%7C/g,Il=/%7D/g,Zh=/%20/g;function Gi(e){return encodeURI(""+e).replace(Xh,"|").replace(Jh,"[").replace(Yh,"]")}function ep(e){return Gi(e).replace(El,"{").replace(Il,"}").replace(wl,"^")}function ci(e){return Gi(e).replace(bl,"%2B").replace(Zh,"+").replace(yl,"%23").replace(zh,"%26").replace(Qh,"`").replace(El,"{").replace(Il,"}").replace(wl,"^")}function tp(e){return ci(e).replace(qh,"%3D")}function np(e){return Gi(e).replace(yl,"%23").replace(Gh,"%3F")}function rp(e){return e==null?"":np(e).replace(Kh,"%2F")}function nr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const sp=/\/$/,ip=e=>e.replace(sp,"");function Ds(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=lp(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:nr(o)}}function op(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ra(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ap(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cn(t.matched[r],n.matched[s])&&Sl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cp(e[n],t[n]))return!1;return!0}function cp(e,t){return Ke(e)?sa(e,t):Ke(t)?sa(t,e):e===t}function sa(e,t){return Ke(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var rr;(function(e){e.pop="pop",e.push="push"})(rr||(rr={}));var Kn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kn||(Kn={}));function up(e){if(!e)if(pn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ip(e)}const fp=/^[^#]+#/;function dp(e,t){return e.replace(fp,"#")+t}function hp(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fs=()=>({left:window.scrollX,top:window.scrollY});function pp(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=hp(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ia(e,t){return(history.state?history.state.position-t:-1)+e}const li=new Map;function gp(e,t){li.set(e,t)}function mp(e){const t=li.get(e);return li.delete(e),t}let _p=()=>location.protocol+"//"+location.host;function Tl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),ra(a,"")}return ra(n,e)+r+s}function vp(e,t,n,r){let s=[],i=[],o=null;const c=({state:h})=>{const g=Tl(e,location),_=n.value,T=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===_){o=null;return}F=T?h.position-T.position:0}else r(g);s.forEach(N=>{N(n.value,_,{delta:F,type:rr.pop,direction:F?F>0?Kn.forward:Kn.back:Kn.unknown})})};function a(){o=n.value}function l(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(re({},h.state,{scroll:fs()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function oa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?fs():null}}function yp(e){const{history:t,location:n}=window,r={value:Tl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:_p()+e+a;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(a,l){const u=re({},t.state,oa(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=re({},s.value,t.state,{forward:a,scroll:fs()});i(u.current,u,!0);const f=re({},oa(r.value,a,null),{position:u.position+1},l);i(a,f,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function bp(e){e=up(e);const t=yp(e),n=vp(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:e,go:r,createHref:dp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function wp(e){return typeof e=="string"||e&&typeof e=="object"}function Cl(e){return typeof e=="string"||typeof e=="symbol"}const Rl=Symbol("");var aa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(aa||(aa={}));function Rn(e,t){return re(new Error,{type:e,[Rl]:!0},t)}function ot(e,t){return e instanceof Error&&Rl in e&&(t==null||!!(e.type&t))}const ca="[^/]+?",Ep={sensitive:!1,strict:!1,start:!0,end:!0},Ip=/[.+*?^${}()[\]/\\]/g;function Sp(e,t){const n=re({},Ep,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Ip,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:T,optional:F,regexp:N}=h;i.push({name:_,repeatable:T,optional:F});const k=N||ca;if(k!==ca){g+=10;try{new RegExp(`(${k})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+A.message)}}let D=T?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(D=F&&l.length<2?`(?:/${D})`:"/"+D),F&&(D+="?"),s+=D,g+=20,F&&(g+=-8),T&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",_=i[h-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function a(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:T,optional:F}=g,N=_ in l?l[_]:"";if(Ke(N)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=Ke(N)?N.join("/"):N;if(!k)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Tp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Al(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Tp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(la(r))return 1;if(la(s))return-1}return s.length-r.length}function la(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Cp={type:0,value:""},Rp=/[a-zA-Z0-9_]/;function Ap(e){if(!e)return[[]];if(e==="/")return[[Cp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:a==="("?n=2:Rp.test(a)?h():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Pp(e,t,n){const r=Sp(Ap(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Op(e,t){const n=[],r=new Map;t=da({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,h,g){const _=!g,T=kp(f);T.aliasOf=g&&g.record;const F=da(t,f),N=[T];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of A)N.push(re({},T,{components:g?g.record.components:T.components,path:$,aliasOf:g?g.record:T}))}let k,D;for(const A of N){const{path:$}=A;if(h&&$[0]!=="/"){const J=h.record.path,q=J[J.length-1]==="/"?"":"/";A.path=h.record.path+($&&q+$)}if(k=Pp(A,h,F),g?g.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),_&&f.name&&!fa(k)&&o(f.name)),Pl(k)&&a(k),T.children){const J=T.children;for(let q=0;q<J.length;q++)i(J[q],k,g&&g.children[q])}g=g||k}return D?()=>{o(D)}:zn}function o(f){if(Cl(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){const h=Lp(f,n);n.splice(h,0,f),f.record.name&&!fa(f)&&r.set(f.record.name,f)}function l(f,h){let g,_={},T,F;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Rn(1,{location:f});F=g.record.name,_=re(ua(h.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&ua(f.params,g.keys.map(D=>D.name))),T=g.stringify(_)}else if(f.path!=null)T=f.path,g=n.find(D=>D.re.test(T)),g&&(_=g.parse(T),F=g.record.name);else{if(g=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!g)throw Rn(1,{location:f,currentLocation:h});F=g.record.name,_=re({},h.params,f.params),T=g.stringify(_)}const N=[];let k=g;for(;k;)N.unshift(k.record),k=k.parent;return{name:F,path:T,params:_,matched:N,meta:Np(N)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function ua(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function kp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function xp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function fa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Np(e){return e.reduce((t,n)=>re(t,n.meta),{})}function da(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Lp(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Al(e,t[i])<0?r=i:n=i+1}const s=Dp(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Dp(e){let t=e;for(;t=t.parent;)if(Pl(t)&&Al(e,t)===0)return t}function Pl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Mp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bl," "),o=i.indexOf("="),c=nr(o<0?i:i.slice(0,o)),a=o<0?null:nr(i.slice(o+1));if(c in t){let l=t[c];Ke(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function ha(e){let t="";for(let n in e){const r=e[n];if(n=tp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&ci(i)):[r&&ci(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Up(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Fp=Symbol(""),pa=Symbol(""),ds=Symbol(""),Ol=Symbol(""),ui=Symbol("");function Ln(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function At(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=h=>{h===!1?a(Rn(4,{from:n,to:t})):h instanceof Error?a(h):wp(h)?a(Rn(2,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),c())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function Ms(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const c in o.components){let a=o.components[c];if(!(t!=="beforeRouteEnter"&&!o.instances[c]))if($p(a)){const u=(a.__vccOpts||a)[t];u&&i.push(At(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const f=Wh(u)?u.default:u;o.components[c]=f;const g=(f.__vccOpts||f)[t];return g&&At(g,n,r,o,c,s)()}))}}return i}function $p(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ga(e){const t=Be(ds),n=Be(Ol),r=Ue(()=>{const a=yn(e.to);return t.resolve(a)}),s=Ue(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Cn.bind(null,u));if(h>-1)return h;const g=ma(a[l-2]);return l>1&&ma(u)===g&&f[f.length-1].path!==g?f.findIndex(Cn.bind(null,a[l-2])):h}),i=Ue(()=>s.value>-1&&Vp(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Sl(n.params,r.value.params));function c(a={}){return Bp(a)?t[yn(e.replace)?"replace":"push"](yn(e.to)).catch(zn):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const jp=rs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ga,setup(e,{slots:t}){const n=an(ga(e)),{options:r}=Be(ds),s=Ue(()=>({[_a(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_a(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ki("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Hp=jp;function Bp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Vp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ma(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _a=(e,t,n)=>e!=null?e:t!=null?t:n,Wp=rs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Be(ui),s=Ue(()=>e.route||r.value),i=Be(pa,0),o=Ue(()=>{let l=yn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),c=Ue(()=>s.value.matched[o.value]);Pr(pa,Ue(()=>o.value+1)),Pr(Fp,c),Pr(ui,s);const a=cr();return Vn(()=>[a.value,c.value,e.name],([l,u,f],[h,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Cn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=c.value,h=f&&f.components[u];if(!h)return va(n.default,{Component:h,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,F=Ki(h,re({},_,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return va(n.default,{Component:F,route:l})||F}}});function va(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zp=Wp;function Kp(e){const t=Op(e.routes,e),n=e.parseQuery||Mp,r=e.stringifyQuery||ha,s=e.history,i=Ln(),o=Ln(),c=Ln(),a=mf(wt);let l=wt;pn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ls.bind(null,y=>""+y),f=Ls.bind(null,rp),h=Ls.bind(null,nr);function g(y,x){let P,M;return Cl(y)?(P=t.getRecordMatcher(y),M=x):M=y,t.addRoute(M,P)}function _(y){const x=t.getRecordMatcher(y);x&&t.removeRoute(x)}function T(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function N(y,x){if(x=re({},x||a.value),typeof y=="string"){const p=Ds(n,y,x.path),m=t.resolve({path:p.path},x),b=s.createHref(p.fullPath);return re(p,m,{params:h(m.params),hash:nr(p.hash),redirectedFrom:void 0,href:b})}let P;if(y.path!=null)P=re({},y,{path:Ds(n,y.path,x.path).path});else{const p=re({},y.params);for(const m in p)p[m]==null&&delete p[m];P=re({},y,{params:f(p)}),x.params=f(x.params)}const M=t.resolve(P,x),te=y.hash||"";M.params=u(h(M.params));const fe=op(r,re({},y,{hash:ep(te),path:M.path})),d=s.createHref(fe);return re({fullPath:fe,hash:te,query:r===ha?Up(y.query):y.query||{}},M,{redirectedFrom:void 0,href:d})}function k(y){return typeof y=="string"?Ds(n,y,a.value.path):re({},y)}function D(y,x){if(l!==y)return Rn(8,{from:x,to:y})}function A(y){return q(y)}function $(y){return A(re(k(y),{replace:!0}))}function J(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let M=typeof P=="function"?P(y):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),re({query:y.query,hash:y.hash,params:M.path!=null?{}:y.params},M)}}function q(y,x){const P=l=N(y),M=a.value,te=y.state,fe=y.force,d=y.replace===!0,p=J(P);if(p)return q(re(k(p),{state:typeof p=="object"?re({},te,p.state):te,force:fe,replace:d}),x||P);const m=P;m.redirectedFrom=x;let b;return!fe&&ap(r,M,P)&&(b=Rn(16,{to:m,from:M}),Ge(M,M,!0,!1)),(b?Promise.resolve(b):H(m,M)).catch(v=>ot(v)?ot(v,2)?v:_t(v):ee(v,m,M)).then(v=>{if(v){if(ot(v,2))return q(re({replace:d},k(v.to),{state:typeof v.to=="object"?re({},te,v.to.state):te,force:fe}),x||m)}else v=L(m,M,!0,d,te);return Y(m,M,v),v})}function j(y,x){const P=D(y,x);return P?Promise.reject(P):Promise.resolve()}function I(y){const x=un.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function H(y,x){let P;const[M,te,fe]=qp(y,x);P=Ms(M.reverse(),"beforeRouteLeave",y,x);for(const p of M)p.leaveGuards.forEach(m=>{P.push(At(m,y,x))});const d=j.bind(null,y,x);return P.push(d),De(P).then(()=>{P=[];for(const p of i.list())P.push(At(p,y,x));return P.push(d),De(P)}).then(()=>{P=Ms(te,"beforeRouteUpdate",y,x);for(const p of te)p.updateGuards.forEach(m=>{P.push(At(m,y,x))});return P.push(d),De(P)}).then(()=>{P=[];for(const p of fe)if(p.beforeEnter)if(Ke(p.beforeEnter))for(const m of p.beforeEnter)P.push(At(m,y,x));else P.push(At(p.beforeEnter,y,x));return P.push(d),De(P)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),P=Ms(fe,"beforeRouteEnter",y,x,I),P.push(d),De(P))).then(()=>{P=[];for(const p of o.list())P.push(At(p,y,x));return P.push(d),De(P)}).catch(p=>ot(p,8)?p:Promise.reject(p))}function Y(y,x,P){c.list().forEach(M=>I(()=>M(y,x,P)))}function L(y,x,P,M,te){const fe=D(y,x);if(fe)return fe;const d=x===wt,p=pn?history.state:{};P&&(M||d?s.replace(y.fullPath,re({scroll:d&&p&&p.scroll},te)):s.push(y.fullPath,te)),a.value=y,Ge(y,x,P,d),_t()}let Q;function pe(){Q||(Q=s.listen((y,x,P)=>{if(!vr.listening)return;const M=N(y),te=J(M);if(te){q(re(te,{replace:!0}),M).catch(zn);return}l=M;const fe=a.value;pn&&gp(ia(fe.fullPath,P.delta),fs()),H(M,fe).catch(d=>ot(d,12)?d:ot(d,2)?(q(d.to,M).then(p=>{ot(p,20)&&!P.delta&&P.type===rr.pop&&s.go(-1,!1)}).catch(zn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ee(d,M,fe))).then(d=>{d=d||L(M,fe,!1),d&&(P.delta&&!ot(d,8)?s.go(-P.delta,!1):P.type===rr.pop&&ot(d,20)&&s.go(-1,!1)),Y(M,fe,d)}).catch(zn)}))}let Pe=Ln(),ie=Ln(),G;function ee(y,x,P){_t(y);const M=ie.list();return M.length?M.forEach(te=>te(y,x,P)):console.error(y),Promise.reject(y)}function st(){return G&&a.value!==wt?Promise.resolve():new Promise((y,x)=>{Pe.add([y,x])})}function _t(y){return G||(G=!y,pe(),Pe.list().forEach(([x,P])=>y?P(y):x()),Pe.reset()),y}function Ge(y,x,P,M){const{scrollBehavior:te}=e;if(!pn||!te)return Promise.resolve();const fe=!P&&mp(ia(y.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return $i().then(()=>te(y,x,fe)).then(d=>d&&pp(d)).catch(d=>ee(d,y,x))}const Ce=y=>s.go(y);let ln;const un=new Set,vr={currentRoute:a,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:T,resolve:N,options:e,push:A,replace:$,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:st,install(y){const x=this;y.component("RouterLink",Hp),y.component("RouterView",zp),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(a)}),pn&&!ln&&a.value===wt&&(ln=!0,A(s.location).catch(te=>{}));const P={};for(const te in wt)Object.defineProperty(P,te,{get:()=>a.value[te],enumerable:!0});y.provide(ds,x),y.provide(Ol,bc(P)),y.provide(ui,a);const M=y.unmount;un.add(y),y.unmount=function(){un.delete(y),un.size<1&&(l=wt,Q&&Q(),Q=null,a.value=wt,ln=!1,G=!1),M()}}};function De(y){return y.reduce((x,P)=>x.then(()=>I(P)),Promise.resolve())}return vr}function qp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>Cn(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>Cn(l,a))||s.push(a))}return[n,r,s]}function Gp(){return Be(ds)}var Jp=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let kl;const hs=e=>kl=e,xl=Symbol();function fi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qn||(qn={}));function Yp(){const e=ic(!0),t=e.run(()=>cr({}));let n=[],r=[];const s=Pn({install(i){hs(s),s._a=i,i.provide(xl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Jp?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Nl=()=>{};function ya(e,t,n,r=Nl){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&oc()&&qu(s),s}function dn(e,...t){e.slice().forEach(n=>{n(...t)})}const Qp=e=>e(),ba=Symbol(),Us=Symbol();function di(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];fi(s)&&fi(r)&&e.hasOwnProperty(n)&&!de(r)&&!Nt(r)?e[n]=di(s,r):e[n]=r}return e}const Xp=Symbol();function Zp(e){return!fi(e)||!e.hasOwnProperty(Xp)}const{assign:It}=Object;function eg(e){return!!(de(e)&&e.effect)}function tg(e,t,n,r){const{state:s,actions:i,getters:o}=t,c=n.state.value[e];let a;function l(){c||(n.state.value[e]=s?s():{});const u=yf(n.state.value[e]);return It(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Pn(Ue(()=>{hs(n);const g=n._s.get(e);return o[h].call(g,g)})),f),{}))}return a=Ll(e,l,t,n,r,!0),a}function Ll(e,t,n={},r,s,i){let o;const c=It({actions:{}},n),a={deep:!0};let l,u,f=[],h=[],g;const _=r.state.value[e];!i&&!_&&(r.state.value[e]={}),cr({});let T;function F(j){let I;l=u=!1,typeof j=="function"?(j(r.state.value[e]),I={type:qn.patchFunction,storeId:e,events:g}):(di(r.state.value[e],j),I={type:qn.patchObject,payload:j,storeId:e,events:g});const H=T=Symbol();$i().then(()=>{T===H&&(l=!0)}),u=!0,dn(f,I,r.state.value[e])}const N=i?function(){const{state:I}=n,H=I?I():{};this.$patch(Y=>{It(Y,H)})}:Nl;function k(){o.stop(),f=[],h=[],r._s.delete(e)}const D=(j,I="")=>{if(ba in j)return j[Us]=I,j;const H=function(){hs(r);const Y=Array.from(arguments),L=[],Q=[];function pe(G){L.push(G)}function Pe(G){Q.push(G)}dn(h,{args:Y,name:H[Us],store:$,after:pe,onError:Pe});let ie;try{ie=j.apply(this&&this.$id===e?this:$,Y)}catch(G){throw dn(Q,G),G}return ie instanceof Promise?ie.then(G=>(dn(L,G),G)).catch(G=>(dn(Q,G),Promise.reject(G))):(dn(L,ie),ie)};return H[ba]=!0,H[Us]=I,H},A={_p:r,$id:e,$onAction:ya.bind(null,h),$patch:F,$reset:N,$subscribe(j,I={}){const H=ya(f,j,I.detached,()=>Y()),Y=o.run(()=>Vn(()=>r.state.value[e],L=>{(I.flush==="sync"?u:l)&&j({storeId:e,type:qn.direct,events:g},L)},It({},a,I)));return H},$dispose:k},$=an(A);r._s.set(e,$);const q=(r._a&&r._a.runWithContext||Qp)(()=>r._e.run(()=>(o=ic()).run(()=>t({action:D}))));for(const j in q){const I=q[j];if(de(I)&&!eg(I)||Nt(I))i||(_&&Zp(I)&&(de(I)?I.value=_[j]:di(I,_[j])),r.state.value[e][j]=I);else if(typeof I=="function"){const H=D(I,j);q[j]=H,c.actions[j]=I}}return It($,q),It(Z($),q),Object.defineProperty($,"$state",{get:()=>r.state.value[e],set:j=>{F(I=>{It(I,j)})}}),r._p.forEach(j=>{It($,o.run(()=>j({store:$,app:r._a,pinia:r,options:c})))}),_&&i&&n.hydrate&&n.hydrate($.$state,_),l=!0,u=!0,$}function ng(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(c,a){const l=sd();return c=c||(l?Be(xl,null):null),c&&hs(c),c=kl,c._s.has(r)||(i?Ll(r,t,s,c):tg(r,s,c)),c._s.get(r)}return o.$id=r,o}function Ty(e){{e=Z(e);const t={};for(const n in e){const r=e[n];(de(r)||Nt(r))&&(t[n]=Ef(e,n))}return t}}function Cy(e){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},rg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,u=i>>2,f=(i&3)<<4|c>>4;let h=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||f==null)throw new sg;const h=i<<2|c>>4;if(r.push(h),l!==64){const g=c<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(e){const t=Dl(e);return Ml.encodeByteArray(t,!0)},Vr=function(e){return ig(e).replace(/\./g,"")},Ul=function(e){try{return Ml.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=()=>og().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},lg=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ul(e[1]);return t&&JSON.parse(t)},ps=()=>{try{return ag()||cg()||lg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fl=e=>{var t,n;return(n=(t=ps())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ry=e=>{const t=Fl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},$l=()=>{var e;return(e=ps())===null||e===void 0?void 0:e.config},jl=e=>{var t;return(t=ps())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[Vr(JSON.stringify(n)),Vr(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function dg(){var e;const t=(e=ps())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gg(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Py(){return!dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="FirebaseError";class Ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=vg,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?yg(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,c,r)}}function yg(e,t){return e.replace(bg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const bg=/\{\$([^}]+)}/g;function wg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(wa(i)&&wa(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wa(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Un(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Eg(e,t){const n=new Ig(e,t);return n.subscribe.bind(n)}class Ig{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sg(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Fs),s.error===void 0&&(s.error=Fs),s.complete===void 0&&(s.complete=Fs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return e&&e._delegate?e._delegate:e}class An{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ug;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rg(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(e){return e===Yt?void 0:e}function Rg(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Tg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const Pg={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Og=ae.INFO,kg={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},xg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=kg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hl{constructor(t){this.name=t,this._logLevel=Og,this._logHandler=xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const Ng=(e,t)=>t.some(n=>e instanceof n);let Ea,Ia;function Lg(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dg(){return Ia||(Ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,hi=new WeakMap,Vl=new WeakMap,$s=new WeakMap,Ji=new WeakMap;function Mg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Lt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bl.set(n,e)}).catch(()=>{}),Ji.set(t,e),t}function Ug(e){if(hi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});hi.set(e,t)}let pi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Fg(e){pi=e(pi)}function $g(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(js(this),t,...n);return Vl.set(r,t.sort?t.sort():[t]),Lt(r)}:Dg().includes(e)?function(...t){return e.apply(js(this),t),Lt(Bl.get(this))}:function(...t){return Lt(e.apply(js(this),t))}}function jg(e){return typeof e=="function"?$g(e):(e instanceof IDBTransaction&&Ug(e),Ng(e,Lg())?new Proxy(e,pi):e)}function Lt(e){if(e instanceof IDBRequest)return Mg(e);if($s.has(e))return $s.get(e);const t=jg(e);return t!==e&&($s.set(e,t),Ji.set(t,e)),t}const js=e=>Ji.get(e);function Hg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=Lt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Lt(o.result),a.oldVersion,a.newVersion,Lt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Bg=["get","getKey","getAll","getAllKeys","count"],Vg=["put","add","delete","clear"],Hs=new Map;function Sa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hs.get(t))return Hs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Hs.set(t,i),i}Fg(e=>({...e,get:(t,n,r)=>Sa(t,n)||e.get(t,n,r),has:(t,n)=>!!Sa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gi="@firebase/app",Ta="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Hl("@firebase/app"),Kg="@firebase/app-compat",qg="@firebase/analytics-compat",Gg="@firebase/analytics",Jg="@firebase/app-check-compat",Yg="@firebase/app-check",Qg="@firebase/auth",Xg="@firebase/auth-compat",Zg="@firebase/database",em="@firebase/database-compat",tm="@firebase/functions",nm="@firebase/functions-compat",rm="@firebase/installations",sm="@firebase/installations-compat",im="@firebase/messaging",om="@firebase/messaging-compat",am="@firebase/performance",cm="@firebase/performance-compat",lm="@firebase/remote-config",um="@firebase/remote-config-compat",fm="@firebase/storage",dm="@firebase/storage-compat",hm="@firebase/firestore",pm="@firebase/vertexai-preview",gm="@firebase/firestore-compat",mm="firebase",_m="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="[DEFAULT]",vm={[gi]:"fire-core",[Kg]:"fire-core-compat",[Gg]:"fire-analytics",[qg]:"fire-analytics-compat",[Yg]:"fire-app-check",[Jg]:"fire-app-check-compat",[Qg]:"fire-auth",[Xg]:"fire-auth-compat",[Zg]:"fire-rtdb",[em]:"fire-rtdb-compat",[tm]:"fire-fn",[nm]:"fire-fn-compat",[rm]:"fire-iid",[sm]:"fire-iid-compat",[im]:"fire-fcm",[om]:"fire-fcm-compat",[am]:"fire-perf",[cm]:"fire-perf-compat",[lm]:"fire-rc",[um]:"fire-rc-compat",[fm]:"fire-gcs",[dm]:"fire-gcs-compat",[hm]:"fire-fst",[gm]:"fire-fst-compat",[pm]:"fire-vertex","fire-js":"fire-js",[mm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map,ym=new Map,_i=new Map;function Ca(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function sr(e){const t=e.name;if(_i.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;_i.set(t,e);for(const n of zr.values())Ca(n,e);for(const n of ym.values())Ca(n,e);return!0}function Wl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function tt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Dt=new fr("app","Firebase",bm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=_m;function zl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:mi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=$l()),!n)throw Dt.create("no-options");const i=zr.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new Ag(s);for(const a of _i.values())o.addComponent(a);const c=new wm(n,r,o);return zr.set(s,c),c}function Em(e=mi){const t=zr.get(e);if(!t&&e===mi&&$l())return zl();if(!t)throw Dt.create("no-app",{appName:e});return t}function wn(e,t,n){var r;let s=(r=vm[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}sr(new An(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="firebase-heartbeat-database",Sm=1,ir="firebase-heartbeat-store";let Bs=null;function Kl(){return Bs||(Bs=Hg(Im,Sm,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ir)}catch(n){console.warn(n)}}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),Bs}async function Tm(e){try{const n=(await Kl()).transaction(ir),r=await n.objectStore(ir).get(ql(e));return await n.done,r}catch(t){if(t instanceof Ht)pt.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}async function Ra(e,t){try{const r=(await Kl()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,ql(e)),await r.done}catch(n){if(n instanceof Ht)pt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function ql(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=1024,Rm=30*24*60*60*1e3;class Am{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Om(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Aa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Rm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Aa(),{heartbeatsToSend:r,unsentEntries:s}=Pm(this._heartbeatsCache.heartbeats),i=Vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function Aa(){return new Date().toISOString().substring(0,10)}function Pm(e,t=Cm){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pa(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Om{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Pa(e){return Vr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(e){sr(new An("platform-logger",t=>new Wg(t),"PRIVATE")),sr(new An("heartbeat",t=>new Am(t),"PRIVATE")),wn(gi,Ta,e),wn(gi,Ta,"esm2017"),wn("fire-js","")}km("");var xm="firebase",Nm="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(xm,Nm,"app");function Yi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Gl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lm=Gl,Jl=new fr("auth","Firebase",Gl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Hl("@firebase/auth");function Dm(e,...t){Kr.logLevel<=ae.WARN&&Kr.warn(`Auth (${hr}): ${e}`,...t)}function xr(e,...t){Kr.logLevel<=ae.ERROR&&Kr.error(`Auth (${hr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e,...t){throw Qi(e,...t)}function nt(e,...t){return Qi(e,...t)}function Yl(e,t,n){const r=Object.assign(Object.assign({},Lm()),{[t]:n});return new fr("auth","Firebase",r).create(t,{appName:e.name})}function ht(e){return Yl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Jl.create(e,...t)}function V(e,t,...n){if(!e)throw Qi(t,...n)}function lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xr(t),new Error(t)}function gt(e,t){e||lt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Mm(){return Oa()==="http:"||Oa()==="https:"}function Oa(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mm()||hg()||"connection"in navigator)?navigator.onLine:!0}function Fm(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=fg()||pg()}get(){return Um()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new pr(3e4,6e4);function Vt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wt(e,t,n,r,s={}){return Xl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=dr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ql.fetch()(Zl(e,e.config.apiHost,n,c),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function Xl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$m),t);try{const s=new Bm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Rr(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw Rr(e,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yl(e,u,l);qe(e,u)}}catch(s){if(s instanceof Ht)throw s;qe(e,"network-request-failed",{message:String(s)})}}async function gr(e,t,n,r,s={}){const i=await Wt(e,t,n,r,s);return"mfaPendingCredential"in i&&qe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Zl(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Xi(e.config,s):`${e.config.apiScheme}://${s}`}function Hm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),jm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(e,t,r);return s.customData._tokenResponse=n,s}function ka(e){return e!==void 0&&e.enterprise!==void 0}class Vm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Hm(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Wm(e,t){return Wt(e,"GET","/v2/recaptchaConfig",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(e,t){return Wt(e,"POST","/v1/accounts:delete",t)}async function eu(e,t){return Wt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Km(e,t=!1){const n=Bt(e),r=await n.getIdToken(t),s=Zi(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gn(Vs(s.auth_time)),issuedAtTime:Gn(Vs(s.iat)),expirationTime:Gn(Vs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vs(e){return Number(e)*1e3}function Zi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return xr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ul(n);return s?JSON.parse(s):(xr("Failed to decode base64 JWT payload"),null)}catch(s){return xr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xa(e){const t=Zi(e);return V(t,"internal-error"),V(typeof t.exp!="undefined","internal-error"),V(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ht&&qm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function qm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await or(e,eu(n,{idToken:r}));V(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?tu(i.providerUserInfo):[],c=Ym(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new yi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Jm(e){const t=Bt(e);await qr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ym(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function tu(e){return e.map(t=>{var{providerId:n}=t,r=Yi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(e,t){const n=await Xl(e,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Zl(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ql.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xm(e,t){return Wt(e,"POST","/v2/accounts:revokeToken",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken!="undefined","internal-error"),V(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):xa(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=xa(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new En;return r&&(V(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t){V(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class ut{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Yi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await or(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Km(this,t)}reload(){return Jm(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(ht(this.auth));const t=await this.getIdToken();return await or(this,zm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,N=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:A,isAnonymous:$,providerData:J,stsTokenManager:q}=n;V(D&&q,t,"internal-error");const j=En.fromJSON(this.name,q);V(typeof D=="string",t,"internal-error"),Et(f,t.name),Et(h,t.name),V(typeof A=="boolean",t,"internal-error"),V(typeof $=="boolean",t,"internal-error"),Et(g,t.name),Et(_,t.name),Et(T,t.name),Et(F,t.name),Et(N,t.name),Et(k,t.name);const I=new ut({uid:D,auth:t,email:h,emailVerified:A,displayName:f,isAnonymous:$,photoURL:_,phoneNumber:g,tenantId:T,stsTokenManager:j,createdAt:N,lastLoginAt:k});return J&&Array.isArray(J)&&(I.providerData=J.map(H=>Object.assign({},H))),F&&(I._redirectEventId=F),I}static async _fromIdTokenResponse(t,n,r=!1){const s=new En;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await qr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];V(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new En;c.updateFromIdToken(r);const a=new ut({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;function ft(e){gt(e instanceof Function,"Expected a class definition");let t=Na.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Na.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}nu.type="NONE";const La=nu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e,t,n){return`firebase:${e}:${t}:${n}`}class In{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new In(ft(La),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(La);const o=Nr(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ut._fromJSON(t,u);l!==i&&(c=f),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new In(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new In(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ou(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ru(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cu(t))return"Blackberry";if(lu(t))return"Webos";if(su(t))return"Safari";if((t.includes("chrome/")||iu(t))&&!t.includes("edge/"))return"Chrome";if(au(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ru(e=Te()){return/firefox\//i.test(e)}function su(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function iu(e=Te()){return/crios\//i.test(e)}function ou(e=Te()){return/iemobile/i.test(e)}function au(e=Te()){return/android/i.test(e)}function cu(e=Te()){return/blackberry/i.test(e)}function lu(e=Te()){return/webos/i.test(e)}function eo(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Zm(e=Te()){var t;return eo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function e_(){return gg()&&document.documentMode===10}function uu(e=Te()){return eo(e)||au(e)||lu(e)||cu(e)||/windows phone/i.test(e)||ou(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e,t=[]){let n;switch(e){case"Browser":n=Da(Te());break;case"Worker":n=`${Da(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(e,t={}){return Wt(e,"GET","/v2/passwordPolicy",Vt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=6;class s_{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:r_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ma(this),this.idTokenSubscription=new Ma(this),this.beforeStateQueue=new t_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await eu(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Fm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tt(this.app))return Promise.reject(ht(this));const n=t?Bt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tt(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await n_(this),n=new s_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new fr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xm(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Dm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cn(e){return Bt(e)}class Ma{constructor(t){this.auth=t,this.observer=null,this.addObserver=Eg(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o_(e){gs=e}function du(e){return gs.loadJS(e)}function a_(){return gs.recaptchaEnterpriseScript}function c_(){return gs.gapiScript}function l_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const u_="recaptcha-enterprise",f_="NO_RECAPTCHA";class d_{constructor(t){this.type=u_,this.auth=cn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Wm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Vm(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;ka(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(f_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&ka(window.grecaptcha))s(c,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=a_();a.length!==0&&(a+=c),du(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Ua(e,t,n,r=!1){const s=new d_(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bi(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ua(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ua(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(e,t){const n=Wl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,t!=null?t:{}))return s;qe(s,"already-initialized")}return n.initialize({options:t})}function p_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function g_(e,t,n){const r=cn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=hu(t),{host:o,port:c}=m_(t),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||__()}function hu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function m_(e){const t=hu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fa(o)}}}function Fa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function __(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(t){return lt("not implemented")}_linkToIdToken(t,n){return lt("not implemented")}_getReauthenticationResolver(t){return lt("not implemented")}}async function v_(e,t){return Wt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(e,t){return gr(e,"POST","/v1/accounts:signInWithPassword",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(e,t){return gr(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}async function w_(e,t){return gr(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends to{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ar(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ar(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bi(t,n,"signInWithPassword",y_);case"emailLink":return b_(t,{email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bi(t,r,"signUpPassword",v_);case"emailLink":return w_(t,{idToken:n,email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t){return gr(e,"POST","/v1/accounts:signInWithIdp",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="http://localhost";class rn extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Yi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Sn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Sn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Sn(t,n)}buildRequest(){const t={requestUri:E_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=dr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S_(e){const t=Mn(Un(e)).link,n=t?Mn(Un(t)).deep_link_id:null,r=Mn(Un(e)).deep_link_id;return(r?Mn(Un(r)).link:null)||r||n||t||e}class no{constructor(t){var n,r,s,i,o,c;const a=Mn(Un(t)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,f=I_((s=a.mode)!==null&&s!==void 0?s:null);V(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=S_(t);try{return new no(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(t,n){return ar._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=no.parseLink(n);return V(r,"argument-error"),ar._fromEmailAndCode(t,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends pu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends mr{constructor(){super("facebook.com")}static credential(t){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends mr{constructor(){super("github.com")}static credential(t){return rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends mr{constructor(){super("twitter.com")}static credential(t,n){return rn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(e,t){return gr(e,"POST","/v1/accounts:signUp",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await ut._fromIdTokenResponse(t,r,s),o=$a(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=$a(r);return new sn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function $a(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Ht{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Gr(t,n,r,s)}}function gu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(e,i,t,r):i})}async function C_(e,t,n=!1){const r=await or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(e,t,n=!1){const{auth:r}=e;if(tt(r.app))return Promise.reject(ht(r));const s="reauthenticate";try{const i=await or(e,gu(r,s,t,e),n);V(i.idToken,r,"internal-error");const o=Zi(i.idToken);V(o,r,"internal-error");const{sub:c}=o;return V(e.uid===c,r,"user-mismatch"),sn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(e,t,n=!1){if(tt(e.app))return Promise.reject(ht(e));const r="signIn",s=await gu(e,r,t),i=await sn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function A_(e,t){return mu(cn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(e){const t=cn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function P_(e,t,n){if(tt(e.app))return Promise.reject(ht(e));const r=cn(e),o=await bi(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",T_).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&_u(e),a}),c=await sn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function O_(e,t,n){return tt(e.app)?Promise.reject(ht(e)):A_(Bt(e),On.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_u(e),r})}function k_(e,t,n,r){return Bt(e).onIdTokenChanged(t,n,r)}function x_(e,t,n){return Bt(e).beforeAuthStateChanged(t,n)}function N_(e){return Bt(e).signOut()}const Jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=1e3,D_=10;class yu extends vu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);e_()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,D_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},L_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yu.type="LOCAL";const M_=yu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends vu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}bu.type="SESSION";const wu=bu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ms(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await U_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ro("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function $_(e){rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){return typeof rt().WorkerGlobalScope!="undefined"&&typeof rt().importScripts=="function"}async function j_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function B_(){return Eu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firebaseLocalStorageDb",V_=1,Yr="firebaseLocalStorage",Su="fbase_key";class _r{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _s(e,t){return e.transaction([Yr],t?"readwrite":"readonly").objectStore(Yr)}function W_(){const e=indexedDB.deleteDatabase(Iu);return new _r(e).toPromise()}function wi(){const e=indexedDB.open(Iu,V_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Yr,{keyPath:Su})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Yr)?t(r):(r.close(),await W_(),t(await wi()))})})}async function ja(e,t,n){const r=_s(e,!0).put({[Su]:t,value:n});return new _r(r).toPromise()}async function z_(e,t){const n=_s(e,!1).get(t),r=await new _r(n).toPromise();return r===void 0?null:r.value}function Ha(e,t){const n=_s(e,!0).delete(t);return new _r(n).toPromise()}const K_=800,q_=3;class Tu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(B_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await j_(),!this.activeServiceWorker)return;this.sender=new F_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wi();return await ja(t,Jr,"1"),await Ha(t,Jr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ja(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>z_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ha(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=_s(s,!1).getAll();return new _r(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tu.type="LOCAL";const G_=Tu;new pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(e,t){return t?ft(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends to{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Sn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Sn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Sn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Y_(e){return mu(e.auth,new so(e),e.bypassAuthState)}function Q_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),R_(n,new so(e),e.bypassAuthState)}async function X_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),C_(n,new so(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Y_;case"linkViaPopup":case"linkViaRedirect":return X_;case"reauthViaPopup":case"reauthViaRedirect":return Q_;default:qe(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new pr(2e3,1e4);class gn extends Cu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Z_.get())};t()}}gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="pendingRedirect",Lr=new Map;class tv extends Cu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Lr.get(this.auth._key());if(!t){try{const r=await nv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Lr.set(this.auth._key(),t)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nv(e,t){const n=iv(t),r=sv(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rv(e,t){Lr.set(e._key(),t)}function sv(e){return ft(e._redirectPersistence)}function iv(e){return Nr(ev,e.config.apiKey,e.name)}async function ov(e,t,n=!1){if(tt(e.app))return Promise.reject(ht(e));const r=cn(e),s=J_(r,t),o=await new tv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=10*60*1e3;class cv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ru(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=av&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ba(t))}saveEventToCache(t){this.cachedEventUids.add(Ba(t)),this.lastProcessedEventTime=Date.now()}}function Ba(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ru({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ru(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(e,t={}){return Wt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dv=/^https?/;async function hv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await uv(e);for(const n of t)try{if(pv(n))return}catch{}qe(e,"unauthorized-domain")}function pv(e){const t=vi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dv.test(n))return!1;if(fv.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new pr(3e4,6e4);function Va(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function mv(e){return new Promise((t,n)=>{var r,s,i;function o(){Va(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Va(),n(nt(e,"network-request-failed"))},timeout:gv.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const c=l_("iframefcb");return rt()[c]=()=>{gapi.load?o():n(nt(e,"network-request-failed"))},du(`${c_()}?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw Dr=null,t})}let Dr=null;function _v(e){return Dr=Dr||mv(e),Dr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=new pr(5e3,15e3),yv="__/auth/iframe",bv="emulator/auth/iframe",wv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Iv(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xi(t,bv):`https://${e.config.authDomain}/${yv}`,r={apiKey:t.apiKey,appName:e.name,v:hr},s=Ev.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${dr(r).slice(1)}`}async function Sv(e){const t=await _v(e),n=rt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:Iv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),c=rt().setTimeout(()=>{i(o)},vv.get());function a(){rt().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cv=500,Rv=600,Av="_blank",Pv="http://localhost";class Wa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ov(e,t,n,r=Cv,s=Rv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Tv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(c=iu(l)?Av:n),ru(l)&&(t=t||Pv,a.scrollbars="yes");const u=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(Zm(l)&&c!=="_self")return kv(t||"",c),new Wa(null);const f=window.open(t||"",c,u);V(f,e,"popup-blocked");try{f.focus()}catch{}return new Wa(f)}function kv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="__/auth/handler",Nv="emulator/auth/handler",Lv=encodeURIComponent("fac");async function za(e,t,n,r,s,i){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:s};if(t instanceof pu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",wg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof mr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await e._getAppCheckToken(),l=a?`#${Lv}=${encodeURIComponent(a)}`:"";return`${Dv(e)}?${dr(c).slice(1)}${l}`}function Dv({config:e}){return e.emulator?Xi(e,Nv):`https://${e.authDomain}/${xv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="webStorageSupport";class Mv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wu,this._completeRedirectFn=ov,this._overrideRedirectResult=rv}async _openPopup(t,n,r,s){var i;gt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await za(t,n,r,vi(),s);return Ov(t,o,ro())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await za(t,n,r,vi(),s);return $_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Sv(t),r=new cv(t);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return uu()||su()||eo()}}const Uv=Mv;var Ka="@firebase/auth",qa="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jv(e){sr(new An("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(e)},l=new i_(r,s,i,a);return p_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),sr(new An("auth-internal",t=>{const n=cn(t.getProvider("auth").getImmediate());return(r=>new Fv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Ka,qa,$v(e)),wn(Ka,qa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=5*60,Bv=jl("authIdTokenMaxAge")||Hv;let Ga=null;const Vv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bv)return;const s=n==null?void 0:n.token;Ga!==s&&(Ga=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wv(e=Em()){const t=Wl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=h_(e,{popupRedirectResolver:Uv,persistence:[G_,M_,wu]}),r=jl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Vv(i.toString());x_(n,o,()=>o(n.currentUser)),k_(n,c=>o(c))}}const s=Fl("auth");return s&&g_(n,`http://${s}`),n}function zv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}o_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jv("Browser");const Kv={apiKey:"AIzaSyAX9d-cxoiHG8wzyB9DLsNhQYiN-ApvSKE",authDomain:"huemul-app.firebaseapp.com",projectId:"huemul-app",storageBucket:"huemul-app.appspot.com",messagingSenderId:"103840484633",appId:"1:103840484633:web:9de49e29e0932cdb4c0988",measurementId:"G-EBLHZLX9QG"},Au=zl(Kv),mn=Wv(Au);var qv=({app:e})=>{e.config.globalProperties.$firebase=e,e.config.globalProperties.$auth=mn},Gv=Object.freeze(Object.defineProperty({__proto__:null,default:qv,auth:mn,app:Au},Symbol.toStringTag,{value:"Module"}));function Jv(e){return $h(e)===!0?"__q_date|"+e.getTime():jh(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function Yv(e){if(e.length<9)return e;const n=e.substring(0,8),r=e.substring(9);switch(n){case"__q_date":const s=Number(r);return new Date(Number.isNaN(s)===!0?r:s);case"__q_expr":return new RegExp(r);case"__q_numb":return Number(r);case"__q_bool":return Boolean(r==="1");case"__q_strn":return""+r;case"__q_objt":return JSON.parse(r);default:return e}}function Qv(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:et,setItem:et,remove:et,removeItem:et,clear:et,isEmpty:()=>!0}}function Xv(e){const t=window[e+"Storage"],n=o=>{const c=t.getItem(o);return c?Yv(c):null},r=o=>t.getItem(o)!==null,s=(o,c)=>{t.setItem(o,Jv(c))},i=o=>{t.removeItem(o)};return{has:r,hasItem:r,getLength:()=>t.length,getItem:n,getIndex:o=>o<t.length?n(t.key(o)):null,getKey:o=>o<t.length?t.key(o):null,getAll:()=>{let o;const c={},a=t.length;for(let l=0;l<a;l++)o=t.key(l),c[o]=n(o);return c},getAllKeys:()=>{const o=[],c=t.length;for(let a=0;a<c;a++)o.push(t.key(a));return o},set:s,setItem:s,remove:i,removeItem:i,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const Pu=Ve.has.webStorage===!1?Qv():Xv("local"),Mr={install({$q:e}){e.localStorage=Pu}};Object.assign(Mr,Pu);const Ou=ng("auth",{state:()=>({user:null}),getters:{isAuthenticated:e=>Mr.getItem("uid")||!!e.user},actions:{async checkLogin(){this.user=mn.currentUser},async login(e,t){try{const n=await O_(mn,e,t);this.user=n.user,Mr.setItem("uid",n.user.uid)}catch(n){throw console.error("Error en el inicio de sesi\xF3n:",n),n}},async register(e,t){try{const n=await P_(mn,e,t);this.user=n.user}catch(n){throw console.error("Error en el registro:",n),n}},async logout(){try{await N_(mn),this.user=null,Mr.removeItem("uid")}catch(e){throw console.error("Error al cerrar sesi\xF3n:",e),e}}}}),Zv=rs({__name:"App",setup(e){const t=Gp(),n=Ou();return Hi(()=>{n.isAuthenticated&&t.currentRoute.value.path==="/"&&t.push("/dashboard")}),(r,s)=>{const i=qf("router-view");return il(),al(i)}}});var zs=()=>Yp();const ey=[{path:"/",component:()=>Xt(()=>import("./MainLayout.825ed08b.js"),["assets/MainLayout.825ed08b.js","assets/QBtn.23495869.js","assets/format.7d24bdb3.js","assets/use-dark.4543c1a4.js"]),children:[{path:"",component:()=>Xt(()=>import("./LoginPage.3f8e5c6b.js"),["assets/LoginPage.3f8e5c6b.js","assets/QBtn.23495869.js","assets/QPage.140d98cb.js","assets/use-dark.4543c1a4.js"])},{path:"dashboard",component:()=>Xt(()=>import("./DashboardPage.cac73894.js"),["assets/DashboardPage.cac73894.js","assets/DashboardPage.9f8918c3.css","assets/QPage.140d98cb.js","assets/QBtn.23495869.js","assets/use-dark.4543c1a4.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/format.7d24bdb3.js"])}]},{path:"/:catchAll(.*)*",component:()=>Xt(()=>import("./ErrorNotFound.6f2eabc3.js"),["assets/ErrorNotFound.6f2eabc3.js","assets/QBtn.23495869.js","assets/plugin-vue_export-helper.21dcd24c.js"])}];var Ks=function({store:e}){const t=Ou(e),r=Kp({scrollBehavior:()=>({left:0,top:0}),routes:ey,history:bp("/")});return r.beforeEach((s,i,o)=>{s.path==="/dashboard"&&!t.isAuthenticated?o("/"):o()}),r};async function ty(e,t){const n=e(Zv);n.use(Vh,t);const r=typeof zs=="function"?await zs({}):zs;n.use(r);const s=Pn(typeof Ks=="function"?await Ks({store:r}):Ks);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}var ny={config:{}};const ry="/";async function sy({app:e,router:t,store:n},r){let s=!1;const i=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},o=a=>{if(s=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const l=i(a);l!==null&&(window.location.href=l)},c=window.location.href.replace(window.location.origin,"");for(let a=0;s===!1&&a<r.length;a++)try{await r[a]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:c,publicPath:ry})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}ty(mh,ny).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([Xt(()=>import("./i18n.3b67f154.js"),[]),Xt(()=>import("./axios.35d19235.js"),[]),Xt(()=>Promise.resolve().then(function(){return Gv}),void 0)]).then(r=>{const s=n(r).filter(i=>typeof i=="function");sy(e,s)})});export{Rh as $,_y as A,Jo as B,gy as C,hy as D,yy as E,Xe as F,my as G,iy as H,Pr as I,Ey as J,an as K,Ou as L,Ty as M,qf as N,il as O,al as P,Of as Q,Ad as R,yn as S,as as T,cy as U,by as V,ly as W,Dh as X,py as Y,Ff as Z,ai as _,Hc as a,qi as a0,Uf as a1,Iy as a2,Uh as a3,Gp as a4,ll as a5,Hf as a6,Ih as a7,Ku as a8,ay as a9,Z as aa,jd as ab,Mi as ac,Zo as ad,oy as ae,jf as af,Bf as ag,Ns as ah,sr as ai,An as aj,wn as ak,Hl as al,Ht as am,Em as an,Wl as ao,Ry as ap,ae as aq,Ay as ar,Bt as as,hr as at,Py as au,Te as av,Au as aw,de as b,Ue as c,rs as d,ic as e,Le as f,Nd as g,Ki as h,Be as i,Cy as j,uy as k,nn as l,jc as m,et as n,Hi as o,$i as p,Tn as q,cr as r,mf as s,Sy as t,wy as u,fy as v,Vn as w,Ve as x,dy as y,vy as z};
