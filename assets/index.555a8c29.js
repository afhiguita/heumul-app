const Du=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),lo={},Mu="/",Xt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Mu}${r}`,r in lo)return;lo[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Du,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Si(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ce={},_n=[],$e=()=>{},Uu=()=>!1,Xr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ti=e=>e.startsWith("onUpdate:"),ge=Object.assign,Ci=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Fu=Object.prototype.hasOwnProperty,se=(e,t)=>Fu.call(e,t),W=Array.isArray,vn=e=>Zr(e)==="[object Map]",Xa=e=>Zr(e)==="[object Set]",K=e=>typeof e=="function",he=e=>typeof e=="string",Ft=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Za=e=>(ue(e)||K(e))&&K(e.then)&&K(e.catch),ec=Object.prototype.toString,Zr=e=>ec.call(e),$u=e=>Zr(e).slice(8,-1),tc=e=>Zr(e)==="[object Object]",Ri=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ju=/-(\w)/g,We=es(e=>e.replace(ju,(t,n)=>n?n.toUpperCase():"")),Hu=/\B([A-Z])/g,on=es(e=>e.replace(Hu,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),ys=es(e=>e?`on${ts(e)}`:""),Mt=(e,t)=>!Object.is(e,t),bs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},nc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Bu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Vu=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let uo;const rc=()=>uo||(uo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Ai(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=he(r)?qu(r):Ai(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(he(e)||ue(e))return e}const Wu=/;(?![^(]*\))/g,zu=/:([^]+)/,Ku=/\/\*[^]*?\*\//g;function qu(e){const t={};return e.replace(Ku,"").split(Wu).forEach(n=>{if(n){const r=n.split(zu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pi(e){let t="";if(he(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Pi(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ju=Si(Gu);function sc(e){return!!e||e===""}const ic=e=>!!(e&&e.__v_isRef===!0),Yu=e=>he(e)?e:e==null?"":W(e)||ue(e)&&(e.toString===ec||!K(e.toString))?ic(e)?Yu(e.value):JSON.stringify(e,oc,2):String(e),oc=(e,t)=>ic(t)?oc(e,t.value):vn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[ws(r,i)+" =>"]=s,n),{})}:Xa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ws(n))}:Ft(t)?ws(t):ue(t)&&!W(t)&&!tc(t)?String(t):t,ws=(e,t="")=>{var n;return Ft(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class ac{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cc(e){return new ac(e)}function lc(){return we}function Qu(e,t=!1){we&&we.cleanups.push(e)}let oe;const Es=new WeakSet;class uc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Es.has(this)&&(Es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=$n,$n=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fo(this),dc(this);const t=oe,n=je;oe=this,je=!0;try{return this.fn()}finally{hc(this),oe=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)xi(t);this.deps=this.depsTail=void 0,fo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gs(this)&&this.run()}get dirty(){return Gs(this)}}let fc=0,$n;function Oi(){fc++}function ki(){if(--fc>0)return;let e;for(;$n;){let t=$n;for($n=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function dc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function hc(e){let t,n=e.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),xi(r),Xu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function Gs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&pc(t.dep.computed)===!1||t.dep.version!==t.version)return!0;return!!e._dirty}function pc(e){if(e.flags&2)return!1;if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Jn))return;e.globalVersion=Jn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!Gs(e)){e.flags&=-3;return}const n=oe,r=je;oe=e,je=!0;try{dc(e);const s=e.fn(e._value);(t.version===0||Mt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=n,je=r,hc(e),e.flags&=-3}}function xi(e){const{dep:t,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)xi(s)}}function Xu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const gc=[];function $t(){gc.push(je),je=!1}function jt(){const e=gc.pop();je=e===void 0?!0:e}function fo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=oe;oe=void 0;try{t()}finally{oe=n}}}let Jn=0;class Ni{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!oe||!je||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink={dep:this,sub:oe,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,oe.flags&4&&mc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=r)}return n}trigger(t){this.version++,Jn++,this.notify(t)}notify(t){Oi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ki()}}}function mc(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)mc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const Fr=new WeakMap,Zt=Symbol(""),Js=Symbol(""),Yn=Symbol("");function ye(e,t,n){if(je&&oe){let r=Fr.get(e);r||Fr.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=new Ni),s.track()}}function dt(e,t,n,r,s,i){const o=Fr.get(e);if(!o){Jn++;return}let c=[];if(t==="clear")c=[...o.values()];else{const a=W(e),l=a&&Ri(n);if(a&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===Yn||!Ft(h)&&h>=u)&&c.push(f)})}else{const u=f=>f&&c.push(f);switch(n!==void 0&&u(o.get(n)),l&&u(o.get(Yn)),t){case"add":a?l&&u(o.get("length")):(u(o.get(Zt)),vn(e)&&u(o.get(Js)));break;case"delete":a||(u(o.get(Zt)),vn(e)&&u(o.get(Js)));break;case"set":vn(e)&&u(o.get(Zt));break}}}Oi();for(const a of c)a.trigger();ki()}function Zu(e,t){var n;return(n=Fr.get(e))==null?void 0:n.get(t)}function fn(e){const t=Z(e);return t===e?t:(ye(t,"iterate",Yn),He(e)?t:t.map(Ee))}function Li(e){return ye(e=Z(e),"iterate",Yn),e}const ef={__proto__:null,[Symbol.iterator](){return Is(this,Symbol.iterator,Ee)},concat(...e){return fn(this).concat(...e.map(t=>W(t)?fn(t):t))},entries(){return Is(this,"entries",e=>(e[1]=Ee(e[1]),e))},every(e,t){return it(this,"every",e,t,void 0,arguments)},filter(e,t){return it(this,"filter",e,t,n=>n.map(Ee),arguments)},find(e,t){return it(this,"find",e,t,Ee,arguments)},findIndex(e,t){return it(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return it(this,"findLast",e,t,Ee,arguments)},findLastIndex(e,t){return it(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return it(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ss(this,"includes",e)},indexOf(...e){return Ss(this,"indexOf",e)},join(e){return fn(this).join(e)},lastIndexOf(...e){return Ss(this,"lastIndexOf",e)},map(e,t){return it(this,"map",e,t,void 0,arguments)},pop(){return xn(this,"pop")},push(...e){return xn(this,"push",e)},reduce(e,...t){return ho(this,"reduce",e,t)},reduceRight(e,...t){return ho(this,"reduceRight",e,t)},shift(){return xn(this,"shift")},some(e,t){return it(this,"some",e,t,void 0,arguments)},splice(...e){return xn(this,"splice",e)},toReversed(){return fn(this).toReversed()},toSorted(e){return fn(this).toSorted(e)},toSpliced(...e){return fn(this).toSpliced(...e)},unshift(...e){return xn(this,"unshift",e)},values(){return Is(this,"values",Ee)}};function Is(e,t,n){const r=Li(e),s=r[t]();return r!==e&&!He(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const tf=Array.prototype;function it(e,t,n,r,s,i){const o=Li(e),c=o!==e&&!He(e),a=o[t];if(a!==tf[t]){const f=a.apply(e,i);return c?Ee(f):f}let l=n;o!==e&&(c?l=function(f,h){return n.call(this,Ee(f),h,e)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,e)}));const u=a.call(o,l,r);return c&&s?s(u):u}function ho(e,t,n,r){const s=Li(e);let i=n;return s!==e&&(He(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,Ee(c),a,e)}),s[t](i,...r)}function Ss(e,t,n){const r=Z(e);ye(r,"iterate",Yn);const s=r[t](...n);return(s===-1||s===!1)&&Fi(n[0])?(n[0]=Z(n[0]),r[t](...n)):s}function xn(e,t,n=[]){$t(),Oi();const r=Z(e)[t].apply(e,n);return ki(),jt(),r}const nf=Si("__proto__,__v_isRef,__isVue"),_c=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft));function rf(e){Ft(e)||(e=String(e));const t=Z(this);return ye(t,"has",e),t.hasOwnProperty(e)}class vc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?_f:Ec:i?wc:bc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){let a;if(o&&(a=ef[n]))return a;if(n==="hasOwnProperty")return rf}const c=Reflect.get(t,n,de(t)?t:r);return(Ft(n)?_c.has(n):nf(n))||(s||ye(t,"get",n),i)?c:de(c)?o&&Ri(n)?c:c.value:ue(c)?s?Sc(c):an(c):c}}class yc extends vc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=tn(i);if(!He(r)&&!tn(r)&&(i=Z(i),r=Z(r)),!W(t)&&de(i)&&!de(r))return a?!1:(i.value=r,!0)}const o=W(t)&&Ri(n)?Number(n)<t.length:se(t,n),c=Reflect.set(t,n,r,de(t)?t:s);return t===Z(s)&&(o?Mt(r,i)&&dt(t,"set",n,r):dt(t,"add",n,r)),c}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&dt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ft(n)||!_c.has(n))&&ye(t,"has",n),r}ownKeys(t){return ye(t,"iterate",W(t)?"length":Zt),Reflect.ownKeys(t)}}class sf extends vc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const of=new yc,af=new sf,cf=new yc(!0);const Di=e=>e,ns=e=>Reflect.getPrototypeOf(e);function br(e,t,n=!1,r=!1){e=e.__v_raw;const s=Z(e),i=Z(t);n||(Mt(t,i)&&ye(s,"get",t),ye(s,"get",i));const{has:o}=ns(s),c=r?Di:n?$i:Ee;if(o.call(s,t))return c(e.get(t));if(o.call(s,i))return c(e.get(i));e!==s&&e.get(t)}function wr(e,t=!1){const n=this.__v_raw,r=Z(n),s=Z(e);return t||(Mt(e,s)&&ye(r,"has",e),ye(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Er(e,t=!1){return e=e.__v_raw,!t&&ye(Z(e),"iterate",Zt),Reflect.get(e,"size",e)}function po(e,t=!1){!t&&!He(e)&&!tn(e)&&(e=Z(e));const n=Z(this);return ns(n).has.call(n,e)||(n.add(e),dt(n,"add",e,e)),this}function go(e,t,n=!1){!n&&!He(t)&&!tn(t)&&(t=Z(t));const r=Z(this),{has:s,get:i}=ns(r);let o=s.call(r,e);o||(e=Z(e),o=s.call(r,e));const c=i.call(r,e);return r.set(e,t),o?Mt(t,c)&&dt(r,"set",e,t):dt(r,"add",e,t),this}function mo(e){const t=Z(this),{has:n,get:r}=ns(t);let s=n.call(t,e);s||(e=Z(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&dt(t,"delete",e,void 0),i}function _o(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function Ir(e,t){return function(r,s){const i=this,o=i.__v_raw,c=Z(o),a=t?Di:e?$i:Ee;return!e&&ye(c,"iterate",Zt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Sr(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=vn(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),u=n?Di:t?$i:Ee;return!t&&ye(i,"iterate",a?Js:Zt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:c?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function vt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function lf(){const e={get(i){return br(this,i)},get size(){return Er(this)},has:wr,add:po,set:go,delete:mo,clear:_o,forEach:Ir(!1,!1)},t={get(i){return br(this,i,!1,!0)},get size(){return Er(this)},has:wr,add(i){return po.call(this,i,!0)},set(i,o){return go.call(this,i,o,!0)},delete:mo,clear:_o,forEach:Ir(!1,!0)},n={get(i){return br(this,i,!0)},get size(){return Er(this,!0)},has(i){return wr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Ir(!0,!1)},r={get(i){return br(this,i,!0,!0)},get size(){return Er(this,!0)},has(i){return wr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Sr(i,!1,!1),n[i]=Sr(i,!0,!1),t[i]=Sr(i,!1,!0),r[i]=Sr(i,!0,!0)}),[e,n,t,r]}const[uf,ff,df,hf]=lf();function Mi(e,t){const n=t?e?hf:df:e?ff:uf;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const pf={get:Mi(!1,!1)},gf={get:Mi(!1,!0)},mf={get:Mi(!0,!1)};const bc=new WeakMap,wc=new WeakMap,Ec=new WeakMap,_f=new WeakMap;function vf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yf(e){return e.__v_skip||!Object.isExtensible(e)?0:vf($u(e))}function an(e){return tn(e)?e:Ui(e,!1,of,pf,bc)}function Ic(e){return Ui(e,!1,cf,gf,wc)}function Sc(e){return Ui(e,!0,af,mf,Ec)}function Ui(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=yf(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function Nt(e){return tn(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function Fi(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Pn(e){return Object.isExtensible(e)&&nc(e,"__v_skip",!0),e}const Ee=e=>ue(e)?an(e):e,$i=e=>ue(e)?Sc(e):e;function de(e){return e?e.__v_isRef===!0:!1}function lr(e){return Tc(e,!1)}function bf(e){return Tc(e,!0)}function Tc(e,t){return de(e)?e:new wf(e,t)}class wf{constructor(t,n){this.dep=new Ni,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:Ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||He(t)||tn(t);t=r?t:Z(t),Mt(t,n)&&(this._rawValue=t,this._value=r?t:Ee(t),this.dep.trigger())}}function yn(e){return de(e)?e.value:e}const Ef={get:(e,t,n)=>t==="__v_raw"?e:yn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Cc(e){return Nt(e)?e:new Proxy(e,Ef)}function If(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=Rc(e,n);return t}class Sf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Zu(Z(this._object),this._key)}}class Tf{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Cf(e,t,n){return de(e)?e:K(e)?new Tf(e):ue(e)&&arguments.length>1?Rc(e,t,n):lr(e)}function Rc(e,t,n){const r=e[t];return de(r)?r:new Sf(e,t,n)}class Rf{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ni(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){oe!==this&&(this.flags|=16,this.dep.notify())}get value(){const t=this.dep.track();return pc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Af(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new Rf(r,s,n)}const Tr={},$r=new WeakMap;let Jt;function Pf(e,t=!1,n=Jt){if(n){let r=$r.get(n);r||$r.set(n,r=[]),r.push(e)}}function Of(e,t,n=ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=A=>s?A:He(A)||s===!1||s===0?ct(A,1):ct(A);let u,f,h,g,_=!1,T=!1;if(de(e)?(f=()=>e.value,_=He(e)):Nt(e)?(f=()=>l(e),_=!0):W(e)?(T=!0,_=e.some(A=>Nt(A)||He(A)),f=()=>e.map(A=>{if(de(A))return A.value;if(Nt(A))return l(A);if(K(A))return a?a(A,2):A()})):K(e)?t?f=a?()=>a(e,2):e:f=()=>{if(h){$t();try{h()}finally{jt()}}const A=Jt;Jt=u;try{return a?a(e,3,[g]):e(g)}finally{Jt=A}}:f=$e,t&&s){const A=f,$=s===!0?1/0:s;f=()=>ct(A(),$)}const F=lc(),N=()=>{u.stop(),F&&Ci(F.effects,u)};if(i)if(t){const A=t;t=(...$)=>{A(...$),N()}}else{const A=f;f=()=>{A(),N()}}let k=T?new Array(e.length).fill(Tr):Tr;const D=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(t){const $=u.run();if(s||_||(T?$.some((J,q)=>Mt(J,k[q])):Mt($,k))){h&&h();const J=Jt;Jt=u;try{const q=[$,k===Tr?void 0:T&&k[0]===Tr?[]:k,g];a?a(t,3,q):t(...q),k=$}finally{Jt=J}}}else u.run()};return c&&c(D),u=new uc(f),u.scheduler=o?()=>o(D,!1):D,g=A=>Pf(A,!1,u),h=u.onStop=()=>{const A=$r.get(u);if(A){if(a)a(A,4);else for(const $ of A)$();$r.delete(u)}},t?r?D(!0):k=u.run():o?o(D.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function ct(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,de(e))ct(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)ct(e[r],t,n);else if(Xa(e)||vn(e))e.forEach(r=>{ct(r,t,n)});else if(tc(e)){for(const r in e)ct(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ct(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ur(e,t,n,r){try{return r?e(...r):e()}catch(s){rs(s,t,n)}}function ze(e,t,n,r){if(K(e)){const s=ur(e,t,n,r);return s&&Za(s)&&s.catch(i=>{rs(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ze(e[i],t,n,r));return s}}function rs(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ce;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,a,l)===!1)return}c=c.parent}if(i){$t(),ur(i,null,10,[e,a,l]),jt();return}}kf(e,n,s,r,o)}function kf(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}let Qn=!1,Ys=!1;const Ie=[];let Qe=0;const bn=[];let St=null,hn=0;const Ac=Promise.resolve();let ji=null;function Hi(e){const t=ji||Ac;return e?t.then(this?e.bind(this):e):t}function xf(e){let t=Qn?Qe+1:0,n=Ie.length;for(;t<n;){const r=t+n>>>1,s=Ie[r],i=Xn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Bi(e){if(!(e.flags&1)){const t=Xn(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=Xn(n)?Ie.push(e):Ie.splice(xf(t),0,e),e.flags|=1,Pc()}}function Pc(){!Qn&&!Ys&&(Ys=!0,ji=Ac.then(kc))}function Nf(e){W(e)?bn.push(...e):St&&e.id===-1?St.splice(hn+1,0,e):e.flags&1||(bn.push(e),e.flags|=1),Pc()}function vo(e,t,n=Qn?Qe+1:0){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Oc(e){if(bn.length){const t=[...new Set(bn)].sort((n,r)=>Xn(n)-Xn(r));if(bn.length=0,St){St.push(...t);return}for(St=t,hn=0;hn<St.length;hn++){const n=St[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,hn=0}}const Xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kc(e){Ys=!1,Qn=!0;const t=$e;try{for(Qe=0;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ur(n,n.i,n.i?15:14),n.flags&=-2)}}finally{for(;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&(n.flags&=-2)}Qe=0,Ie.length=0,Oc(),Qn=!1,ji=null,(Ie.length||bn.length)&&kc()}}let Se=null,xc=null;function jr(e){const t=Se;return Se=e,xc=e&&e.type.__scopeId||null,t}function Lf(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Oo(-1);const i=jr(t);let o;try{o=e(...s)}finally{jr(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dy(e,t){if(Se===null)return e;const n=us(Se),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,c,a=ce]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&ct(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return e}function zt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&($t(),ze(a,n,8,[e.el,c,e,t]),jt())}}const Nc=Symbol("_vte"),Lc=e=>e.__isTeleport,jn=e=>e&&(e.disabled||e.disabled===""),Df=e=>e&&(e.defer||e.defer===""),yo=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,bo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Qs=(e,t)=>{const n=e&&e.to;return he(n)?t?t(n):null:n},Mf={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:u,pc:f,pbc:h,o:{insert:g,querySelector:_,createText:T,createComment:F}}=l,N=jn(t.props);let{shapeFlag:k,children:D,dynamicChildren:A}=t;if(e==null){const $=t.el=T(""),J=t.anchor=T("");g($,n,r),g(J,n,r);const q=(I,H)=>{k&16&&u(D,I,H,s,i,o,c,a)},j=()=>{const I=t.target=Qs(t.props,_),H=Dc(I,t,T,g);I&&(o!=="svg"&&yo(I)?o="svg":o!=="mathml"&&bo(I)&&(o="mathml"),N||(q(I,H),Pr(t)))};N&&(q(n,J),Pr(t)),Df(t.props)?Re(j,i):j()}else{t.el=e.el,t.targetStart=e.targetStart;const $=t.anchor=e.anchor,J=t.target=e.target,q=t.targetAnchor=e.targetAnchor,j=jn(e.props),I=j?n:J,H=j?$:q;if(o==="svg"||yo(J)?o="svg":(o==="mathml"||bo(J))&&(o="mathml"),A?(h(e.dynamicChildren,A,I,s,i,o,c),Ki(e,t,!0)):a||f(e,t,I,H,s,i,o,c,!1),N)j?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Cr(t,n,$,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Y=t.target=Qs(t.props,_);Y&&Cr(t,Y,null,l,0)}else j&&Cr(t,J,q,l,1);Pr(t)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:a,targetStart:l,targetAnchor:u,target:f,props:h}=e;if(f&&(s(l),s(u)),i&&s(a),o&16){const g=i||!jn(h);for(let _=0;_<c.length;_++){const T=c[_];r(T,t,n,g,!!T.dynamicChildren)}}},move:Cr,hydrate:Uf};function Cr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||jn(u))&&a&16)for(let h=0;h<l.length;h++)s(l[h],t,n,2);f&&r(c,t,n)}function Uf(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a,insert:l,createText:u}},f){const h=t.target=Qs(t.props,a);if(h){const g=h._lpa||h.firstChild;if(t.shapeFlag&16)if(jn(t.props))t.anchor=f(o(e),t,c(e),n,r,s,i),t.targetStart=g,t.targetAnchor=g&&o(g);else{t.anchor=o(e);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")t.targetStart=_;else if(_.data==="teleport anchor"){t.targetAnchor=_,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}}_=o(_)}t.targetAnchor||Dc(h,t,u,l),f(g&&o(g),t,h,n,r,s,i)}Pr(t)}return t.anchor&&o(t.anchor)}const hy=Mf;function Pr(e){const t=e.ctx;if(t&&t.ut){let n=e.targetStart;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function Dc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[Nc]=i,e&&(r(s,e),r(i,e)),i}const Tt=Symbol("_leaveCb"),Rr=Symbol("_enterCb");function Ff(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vi(()=>{e.isMounted=!0}),Vc(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],Mc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},Uc=e=>{const t=e.subTree;return t.component?Uc(t.component):t},$f={name:"BaseTransition",props:Mc,setup(e,{slots:t}){const n=Ud(),r=Ff();return()=>{const s=t.default&&jc(t.default(),!0);if(!s||!s.length)return;const i=Fc(s),o=Z(e),{mode:c}=o;if(r.isLeaving)return Ts(i);const a=wo(i);if(!a)return Ts(i);let l=Xs(a,o,r,n,h=>l=h);a.type!==Ae&&Zn(a,l);const u=n.subTree,f=u&&wo(u);if(f&&f.type!==Ae&&!Qt(a,f)&&Uc(n).type!==Ae){const h=Xs(f,o,r,n);if(Zn(f,h),c==="out-in"&&a.type!==Ae)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},Ts(i);c==="in-out"&&a.type!==Ae&&(h.delayLeave=(g,_,T)=>{const F=$c(r,f);F[String(f.key)]=f,g[Tt]=()=>{_(),g[Tt]=void 0,delete l.delayedLeave},l.delayedLeave=T})}return i}}};function Fc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ae){t=n;break}}return t}const jf=$f;function $c(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Xs(e,t,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:F,onAppear:N,onAfterAppear:k,onAppearCancelled:D}=t,A=String(e.key),$=$c(n,e),J=(I,H)=>{I&&ze(I,r,9,H)},q=(I,H)=>{const Y=H[1];J(I,H),W(I)?I.every(L=>L.length<=1)&&Y():I.length<=1&&Y()},j={mode:o,persisted:c,beforeEnter(I){let H=a;if(!n.isMounted)if(i)H=F||a;else return;I[Tt]&&I[Tt](!0);const Y=$[A];Y&&Qt(e,Y)&&Y.el[Tt]&&Y.el[Tt](),J(H,[I])},enter(I){let H=l,Y=u,L=f;if(!n.isMounted)if(i)H=N||l,Y=k||u,L=D||f;else return;let Q=!1;const pe=I[Rr]=Pe=>{Q||(Q=!0,Pe?J(L,[I]):J(Y,[I]),j.delayedLeave&&j.delayedLeave(),I[Rr]=void 0)};H?q(H,[I,pe]):pe()},leave(I,H){const Y=String(e.key);if(I[Rr]&&I[Rr](!0),n.isUnmounting)return H();J(h,[I]);let L=!1;const Q=I[Tt]=pe=>{L||(L=!0,H(),pe?J(T,[I]):J(_,[I]),I[Tt]=void 0,$[Y]===e&&delete $[Y])};$[Y]=e,g?q(g,[I,Q]):Q()},clone(I){const H=Xs(I,t,n,r,s);return s&&s(H),H}};return j}function Ts(e){if(is(e))return e=Ut(e),e.children=null,e}function wo(e){if(!is(e))return Lc(e.type)&&e.children?Fc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function jc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(jc(o.children,t,c))):(t||o.type!==Ae)&&r.push(c!=null?Ut(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ss(e,t){return K(e)?(()=>ge({name:e.name},t,{setup:e}))():e}function Hc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Zs(e,t,n,r,s=!1){if(W(e)){e.forEach((_,T)=>Zs(_,t&&(W(t)?t[T]:t),n,r,s));return}if(Hn(r)&&!s)return;const i=r.shapeFlag&4?us(r.component):r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,u=c.refs===ce?c.refs={}:c.refs,f=c.setupState,h=Z(f),g=f===ce?()=>!1:_=>se(h,_);if(l!=null&&l!==a&&(he(l)?(u[l]=null,g(l)&&(f[l]=null)):de(l)&&(l.value=null)),K(a))ur(a,c,12,[o,u]);else{const _=he(a),T=de(a);if(_||T){const F=()=>{if(e.f){const N=_?g(a)?f[a]:u[a]:a.value;s?W(N)&&Ci(N,i):W(N)?N.includes(i)||N.push(i):_?(u[a]=[i],g(a)&&(f[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else _?(u[a]=o,g(a)&&(f[a]=o)):T&&(a.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,Re(F,n)):F()}}}const Hn=e=>!!e.type.__asyncLoader,is=e=>e.type.__isKeepAlive;function Hf(e,t){Bc(e,"a",t)}function Bf(e,t){Bc(e,"da",t)}function Bc(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(os(t,r,n),n){let s=n.parent;for(;s&&s.parent;)is(s.parent.vnode)&&Vf(r,t,n,s),s=s.parent}}function Vf(e,t,n,r){const s=os(t,e,r,!0);Wc(()=>{Ci(r[t],s)},n)}function os(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{$t();const c=fr(n),a=ze(t,n,e,o);return c(),jt(),a});return r?s.unshift(i):s.push(i),i}}const mt=e=>(t,n=me)=>{(!ls||e==="sp")&&os(e,(...r)=>t(...r),n)},Wf=mt("bm"),Vi=mt("m"),zf=mt("bu"),Kf=mt("u"),Vc=mt("bum"),Wc=mt("um"),qf=mt("sp"),Gf=mt("rtg"),Jf=mt("rtc");function Yf(e,t=me){os("ec",e,t)}const zc="components";function Qf(e,t){return Zf(zc,e,!0,t)||e}const Xf=Symbol.for("v-ndc");function Zf(e,t,n=!0,r=!1){const s=Se||me;if(s){const i=s.type;if(e===zc){const c=Bd(i,!1);if(c&&(c===t||c===We(t)||c===ts(We(t))))return i}const o=Eo(s[e]||i[e],t)||Eo(s.appContext[e],t);return!o&&r?i:o}}function Eo(e,t){return e&&(e[t]||e[We(t)]||e[ts(We(t))])}const ei=e=>e?hl(e)?us(e):ei(e.parent):null,Bn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ei(e.parent),$root:e=>ei(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Wi(e),$forceUpdate:e=>e.f||(e.f=()=>{Bi(e.update)}),$nextTick:e=>e.n||(e.n=Hi.bind(e.proxy)),$watch:e=>wd.bind(e)}),Cs=(e,t)=>e!==ce&&!e.__isScriptSetup&&se(e,t),ed={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Cs(r,t))return o[t]=1,r[t];if(s!==ce&&se(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&se(l,t))return o[t]=3,i[t];if(n!==ce&&se(n,t))return o[t]=4,n[t];ti&&(o[t]=0)}}const u=Bn[t];let f,h;if(u)return t==="$attrs"&&ye(e.attrs,"get",""),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==ce&&se(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,se(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Cs(s,t)?(s[t]=n,!0):r!==ce&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==ce&&se(e,o)||Cs(t,o)||(c=i[0])&&se(c,o)||se(r,o)||se(Bn,o)||se(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ti=!0;function td(e){const t=Wi(e),n=e.proxy,r=e.ctx;ti=!1,t.beforeCreate&&So(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:T,deactivated:F,beforeDestroy:N,beforeUnmount:k,destroyed:D,unmounted:A,render:$,renderTracked:J,renderTriggered:q,errorCaptured:j,serverPrefetch:I,expose:H,inheritAttrs:Y,components:L,directives:Q,filters:pe}=t;if(l&&nd(l,r,null),o)for(const G in o){const ee=o[G];K(ee)&&(r[G]=ee.bind(n))}if(s){const G=s.call(n,n);ue(G)&&(e.data=an(G))}if(ti=!0,i)for(const G in i){const ee=i[G],st=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):$e,_t=!K(ee)&&K(ee.set)?ee.set.bind(n):$e,Ge=Ue({get:st,set:_t});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ce=>Ge.value=Ce})}if(c)for(const G in c)Kc(c[G],r,n,G);if(a){const G=K(a)?a.call(n):a;Reflect.ownKeys(G).forEach(ee=>{Or(ee,G[ee])})}u&&So(u,e,"c");function ie(G,ee){W(ee)?ee.forEach(st=>G(st.bind(n))):ee&&G(ee.bind(n))}if(ie(Wf,f),ie(Vi,h),ie(zf,g),ie(Kf,_),ie(Hf,T),ie(Bf,F),ie(Yf,j),ie(Jf,J),ie(Gf,q),ie(Vc,k),ie(Wc,A),ie(qf,I),W(H))if(H.length){const G=e.exposed||(e.exposed={});H.forEach(ee=>{Object.defineProperty(G,ee,{get:()=>n[ee],set:st=>n[ee]=st})})}else e.exposed||(e.exposed={});$&&e.render===$e&&(e.render=$),Y!=null&&(e.inheritAttrs=Y),L&&(e.components=L),Q&&(e.directives=Q),I&&Hc(e)}function nd(e,t,n=$e){W(e)&&(e=ni(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function So(e,t,n){ze(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Kc(e,t,n,r){let s=r.includes(".")?il(n,r):()=>n[r];if(he(e)){const i=t[e];K(i)&&Vn(s,i)}else if(K(e))Vn(s,e.bind(n));else if(ue(e))if(W(e))e.forEach(i=>Kc(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&Vn(s,i,e)}}function Wi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>Hr(a,l,o,!0)),Hr(a,t,o)),ue(t)&&i.set(t,a),a}function Hr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Hr(e,i,n,!0),s&&s.forEach(o=>Hr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=rd[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const rd={data:To,props:Co,emits:Co,methods:Dn,computed:Dn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Dn,directives:Dn,watch:id,provide:To,inject:sd};function To(e,t){return t?e?function(){return ge(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function sd(e,t){return Dn(ni(e),ni(t))}function ni(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Dn(e,t){return e?ge(Object.create(null),e,t):t}function Co(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:ge(Object.create(null),Io(e),Io(t!=null?t:{})):t}function id(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function qc(){return{app:null,config:{isNativeTag:Uu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let od=0;function ad(e,t){return function(r,s=null){K(r)||(r=ge({},r)),s!=null&&!ue(s)&&(s=null);const i=qc(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:od++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(l,...f)):K(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!a){const g=l._ceVNode||Le(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(g,u):e(g,u,h),a=!0,l._container=u,u.__vue_app__=l,us(g.component)}},onUnmount(u){c.push(u)},unmount(){a&&(ze(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=en;en=l;try{return u()}finally{en=f}}};return l}}let en=null;function Or(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Be(e,t,n=!1){const r=me||Se;if(r||en){const s=en?en._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function cd(){return!!(me||Se||en)}const Gc={},Jc=()=>Object.create(Gc),Yc=e=>Object.getPrototypeOf(e)===Gc;function ld(e,t,n,r=!1){const s={},i=Jc();e.propsDefaults=Object.create(null),Qc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Ic(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ud(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=Z(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(as(e.emitsOptions,h))continue;const g=t[h];if(a)if(se(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const _=We(h);s[_]=ri(a,c,_,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Qc(e,t,s,i)&&(l=!0);let u;for(const f in c)(!t||!se(t,f)&&((u=on(f))===f||!se(t,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ri(a,c,f,void 0,e,!0)):delete s[f]);if(i!==c)for(const f in i)(!t||!se(t,f)&&!0)&&(delete i[f],l=!0)}l&&dt(e.attrs,"set","")}function Qc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(Fn(a))continue;const l=t[a];let u;s&&se(s,u=We(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:as(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Z(n),l=c||ce;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ri(s,a,f,l[f],e,!se(l,f))}}return o}function ri(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=se(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=fr(s);r=l[n]=a.call(null,t),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}const fd=new WeakMap;function Xc(e,t,n=!1){const r=n?fd:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!K(e)){const u=f=>{a=!0;const[h,g]=Xc(f,t,!0);ge(o,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return ue(e)&&r.set(e,_n),_n;if(W(i))for(let u=0;u<i.length;u++){const f=We(i[u]);Ro(f)&&(o[f]=ce)}else if(i)for(const u in i){const f=We(u);if(Ro(f)){const h=i[u],g=o[f]=W(h)||K(h)?{type:h}:ge({},h),_=g.type;let T=!1,F=!0;if(W(_))for(let N=0;N<_.length;++N){const k=_[N],D=K(k)&&k.name;if(D==="Boolean"){T=!0;break}else D==="String"&&(F=!1)}else T=K(_)&&_.name==="Boolean";g[0]=T,g[1]=F,(T||se(g,"default"))&&c.push(f)}}const l=[o,c];return ue(e)&&r.set(e,l),l}function Ro(e){return e[0]!=="$"&&!Fn(e)}const Zc=e=>e[0]==="_"||e==="$stable",zi=e=>W(e)?e.map(Ze):[Ze(e)],dd=(e,t,n)=>{if(t._n)return t;const r=Lf((...s)=>zi(t(...s)),n);return r._c=!1,r},el=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Zc(s))continue;const i=e[s];if(K(i))t[s]=dd(s,i,r);else if(i!=null){const o=zi(i);t[s]=()=>o}}},tl=(e,t)=>{const n=zi(t);e.slots.default=()=>n},nl=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},hd=(e,t,n)=>{const r=e.slots=Jc();if(e.vnode.shapeFlag&32){const s=t._;s?(nl(r,t,n),n&&nc(r,"_",s,!0)):el(t,r)}else t&&tl(e,t)},pd=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ce;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:nl(s,t,n):(i=!t.$stable,el(t,s)),o=t}else t&&(tl(e,t),o={default:1});if(i)for(const c in s)!Zc(c)&&o[c]==null&&delete s[c]},Re=Ad;function gd(e){return md(e)}function md(e,t){const n=rc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=$e,insertStaticContent:_}=e,T=(d,p,m,b=null,v=null,w=null,R=void 0,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Qt(d,p)&&(b=y(d),Ce(d,v,w,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:B,shapeFlag:O}=p;switch(E){case cs:F(d,p,m,b);break;case Ae:N(d,p,m,b);break;case Ps:d==null&&k(p,m,b,R);break;case Xe:L(d,p,m,b,v,w,R,C,S);break;default:O&1?$(d,p,m,b,v,w,R,C,S):O&6?Q(d,p,m,b,v,w,R,C,S):(O&64||O&128)&&E.process(d,p,m,b,v,w,R,C,S,M)}B!=null&&v&&Zs(B,d&&d.ref,w,p||d,!p)},F=(d,p,m,b)=>{if(d==null)r(p.el=c(p.children),m,b);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},N=(d,p,m,b)=>{d==null?r(p.el=a(p.children||""),m,b):p.el=d.el},k=(d,p,m,b)=>{[d.el,d.anchor]=_(d.children,p,m,b,d.el,d.anchor)},D=({el:d,anchor:p},m,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,b),d=v;r(p,m,b)},A=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},$=(d,p,m,b,v,w,R,C,S)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?J(p,m,b,v,w,R,C,S):I(d,p,v,w,R,C,S)},J=(d,p,m,b,v,w,R,C)=>{let S,E;const{props:B,shapeFlag:O,transition:U,dirs:z}=d;if(S=d.el=o(d.type,w,B&&B.is,B),O&8?u(S,d.children):O&16&&j(d.children,S,null,b,v,Rs(d,w),R,C),z&&zt(d,null,b,"created"),q(S,d,d.scopeId,R,b),B){for(const le in B)le!=="value"&&!Fn(le)&&i(S,le,null,B[le],w,b);"value"in B&&i(S,"value",null,B.value,w),(E=B.onVnodeBeforeMount)&&Ye(E,b,d)}z&&zt(d,null,b,"beforeMount");const X=_d(v,U);X&&U.beforeEnter(S),r(S,p,m),((E=B&&B.onVnodeMounted)||X||z)&&Re(()=>{E&&Ye(E,b,d),X&&U.enter(S),z&&zt(d,null,b,"mounted")},v)},q=(d,p,m,b,v)=>{if(m&&g(d,m),b)for(let w=0;w<b.length;w++)g(d,b[w]);if(v){let w=v.subTree;if(p===w||al(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=v.vnode;q(d,R,R.scopeId,R.slotScopeIds,v.parent)}}},j=(d,p,m,b,v,w,R,C,S=0)=>{for(let E=S;E<d.length;E++){const B=d[E]=C?Ct(d[E]):Ze(d[E]);T(null,B,p,m,b,v,w,R,C)}},I=(d,p,m,b,v,w,R)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:B}=p;S|=d.patchFlag&16;const O=d.props||ce,U=p.props||ce;let z;if(m&&Kt(m,!1),(z=U.onVnodeBeforeUpdate)&&Ye(z,m,p,d),B&&zt(p,d,m,"beforeUpdate"),m&&Kt(m,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&u(C,""),E?H(d.dynamicChildren,E,C,m,b,Rs(p,v),w):R||ee(d,p,C,null,m,b,Rs(p,v),w,!1),S>0){if(S&16)Y(C,O,U,m,v);else if(S&2&&O.class!==U.class&&i(C,"class",null,U.class,v),S&4&&i(C,"style",O.style,U.style,v),S&8){const X=p.dynamicProps;for(let le=0;le<X.length;le++){const ne=X[le],Oe=O[ne],_e=U[ne];(_e!==Oe||ne==="value")&&i(C,ne,Oe,_e,v,m)}}S&1&&d.children!==p.children&&u(C,p.children)}else!R&&E==null&&Y(C,O,U,m,v);((z=U.onVnodeUpdated)||B)&&Re(()=>{z&&Ye(z,m,p,d),B&&zt(p,d,m,"updated")},b)},H=(d,p,m,b,v,w,R)=>{for(let C=0;C<p.length;C++){const S=d[C],E=p[C],B=S.el&&(S.type===Xe||!Qt(S,E)||S.shapeFlag&70)?f(S.el):m;T(S,E,B,null,b,v,w,R,!0)}},Y=(d,p,m,b,v)=>{if(p!==m){if(p!==ce)for(const w in p)!Fn(w)&&!(w in m)&&i(d,w,p[w],null,v,b);for(const w in m){if(Fn(w))continue;const R=m[w],C=p[w];R!==C&&w!=="value"&&i(d,w,C,R,v,b)}"value"in m&&i(d,"value",p.value,m.value,v)}},L=(d,p,m,b,v,w,R,C,S)=>{const E=p.el=d?d.el:c(""),B=p.anchor=d?d.anchor:c("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:z}=p;z&&(C=C?C.concat(z):z),d==null?(r(E,m,b),r(B,m,b),j(p.children||[],m,B,v,w,R,C,S)):O>0&&O&64&&U&&d.dynamicChildren?(H(d.dynamicChildren,U,m,v,w,R,C),(p.key!=null||v&&p===v.subTree)&&Ki(d,p,!0)):ee(d,p,m,B,v,w,R,C,S)},Q=(d,p,m,b,v,w,R,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?v.ctx.activate(p,m,b,R,S):pe(p,m,b,v,w,R,S):Pe(d,p,S)},pe=(d,p,m,b,v,w,R)=>{const C=d.component=Md(d,b,v);if(is(d)&&(C.ctx.renderer=M),Fd(C,!1,R),C.asyncDep){if(v&&v.registerDep(C,ie,R),!d.el){const S=C.subTree=Le(Ae);N(null,S,p,m)}}else ie(C,d,p,m,v,w,R)},Pe=(d,p,m)=>{const b=p.component=d.component;if(Cd(d,p,m))if(b.asyncDep&&!b.asyncResolved){G(b,p,m);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},ie=(d,p,m,b,v,w,R)=>{const C=()=>{if(d.isMounted){let{next:O,bu:U,u:z,parent:X,vnode:le}=d;{const ke=rl(d);if(ke){O&&(O.el=le.el,G(d,O,R)),ke.asyncDep.then(()=>{d.isUnmounted||C()});return}}let ne=O,Oe;Kt(d,!1),O?(O.el=le.el,G(d,O,R)):O=le,U&&bs(U),(Oe=O.props&&O.props.onVnodeBeforeUpdate)&&Ye(Oe,X,O,le),Kt(d,!0);const _e=As(d),Fe=d.subTree;d.subTree=_e,T(Fe,_e,f(Fe.el),y(Fe),d,v,w),O.el=_e.el,ne===null&&Rd(d,_e.el),z&&Re(z,v),(Oe=O.props&&O.props.onVnodeUpdated)&&Re(()=>Ye(Oe,X,O,le),v)}else{let O;const{el:U,props:z}=p,{bm:X,m:le,parent:ne,root:Oe,type:_e}=d,Fe=Hn(p);if(Kt(d,!1),X&&bs(X),!Fe&&(O=z&&z.onVnodeBeforeMount)&&Ye(O,ne,p),Kt(d,!0),U&&fe){const ke=()=>{d.subTree=As(d),fe(U,d.subTree,d,v,null)};Fe&&_e.__asyncHydrate?_e.__asyncHydrate(U,d,ke):ke()}else{Oe.ce&&Oe.ce._injectChildStyle(_e);const ke=d.subTree=As(d);T(null,ke,m,b,d,v,w),p.el=ke.el}if(le&&Re(le,v),!Fe&&(O=z&&z.onVnodeMounted)){const ke=p;Re(()=>Ye(O,ne,ke),v)}(p.shapeFlag&256||ne&&Hn(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Re(d.a,v),d.isMounted=!0,p=m=b=null}};d.scope.on();const S=d.effect=new uc(C);d.scope.off();const E=d.update=S.run.bind(S),B=d.job=S.runIfDirty.bind(S);B.i=d,B.id=d.uid,S.scheduler=()=>Bi(B),Kt(d,!0),E()},G=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,ud(d,p.props,b,m),pd(d,p.children,m),$t(),vo(d),jt()},ee=(d,p,m,b,v,w,R,C,S=!1)=>{const E=d&&d.children,B=d?d.shapeFlag:0,O=p.children,{patchFlag:U,shapeFlag:z}=p;if(U>0){if(U&128){_t(E,O,m,b,v,w,R,C,S);return}else if(U&256){st(E,O,m,b,v,w,R,C,S);return}}z&8?(B&16&&De(E,v,w),O!==E&&u(m,O)):B&16?z&16?_t(E,O,m,b,v,w,R,C,S):De(E,v,w,!0):(B&8&&u(m,""),z&16&&j(O,m,b,v,w,R,C,S))},st=(d,p,m,b,v,w,R,C,S)=>{d=d||_n,p=p||_n;const E=d.length,B=p.length,O=Math.min(E,B);let U;for(U=0;U<O;U++){const z=p[U]=S?Ct(p[U]):Ze(p[U]);T(d[U],z,m,null,v,w,R,C,S)}E>B?De(d,v,w,!0,!1,O):j(p,m,b,v,w,R,C,S,O)},_t=(d,p,m,b,v,w,R,C,S)=>{let E=0;const B=p.length;let O=d.length-1,U=B-1;for(;E<=O&&E<=U;){const z=d[E],X=p[E]=S?Ct(p[E]):Ze(p[E]);if(Qt(z,X))T(z,X,m,null,v,w,R,C,S);else break;E++}for(;E<=O&&E<=U;){const z=d[O],X=p[U]=S?Ct(p[U]):Ze(p[U]);if(Qt(z,X))T(z,X,m,null,v,w,R,C,S);else break;O--,U--}if(E>O){if(E<=U){const z=U+1,X=z<B?p[z].el:b;for(;E<=U;)T(null,p[E]=S?Ct(p[E]):Ze(p[E]),m,X,v,w,R,C,S),E++}}else if(E>U)for(;E<=O;)Ce(d[E],v,w,!0),E++;else{const z=E,X=E,le=new Map;for(E=X;E<=U;E++){const xe=p[E]=S?Ct(p[E]):Ze(p[E]);xe.key!=null&&le.set(xe.key,E)}let ne,Oe=0;const _e=U-X+1;let Fe=!1,ke=0;const kn=new Array(_e);for(E=0;E<_e;E++)kn[E]=0;for(E=z;E<=O;E++){const xe=d[E];if(Oe>=_e){Ce(xe,v,w,!0);continue}let Je;if(xe.key!=null)Je=le.get(xe.key);else for(ne=X;ne<=U;ne++)if(kn[ne-X]===0&&Qt(xe,p[ne])){Je=ne;break}Je===void 0?Ce(xe,v,w,!0):(kn[Je-X]=E+1,Je>=ke?ke=Je:Fe=!0,T(xe,p[Je],m,null,v,w,R,C,S),Oe++)}const ao=Fe?vd(kn):_n;for(ne=ao.length-1,E=_e-1;E>=0;E--){const xe=X+E,Je=p[xe],co=xe+1<B?p[xe+1].el:b;kn[E]===0?T(null,Je,m,co,v,w,R,C,S):Fe&&(ne<0||E!==ao[ne]?Ge(Je,m,co,2):ne--)}}},Ge=(d,p,m,b,v=null)=>{const{el:w,type:R,transition:C,children:S,shapeFlag:E}=d;if(E&6){Ge(d.component.subTree,p,m,b);return}if(E&128){d.suspense.move(p,m,b);return}if(E&64){R.move(d,p,m,M);return}if(R===Xe){r(w,p,m);for(let O=0;O<S.length;O++)Ge(S[O],p,m,b);r(d.anchor,p,m);return}if(R===Ps){D(d,p,m);return}if(b!==2&&E&1&&C)if(b===0)C.beforeEnter(w),r(w,p,m),Re(()=>C.enter(w),v);else{const{leave:O,delayLeave:U,afterLeave:z}=C,X=()=>r(w,p,m),le=()=>{O(w,()=>{X(),z&&z()})};U?U(w,X,le):le()}else r(w,p,m)},Ce=(d,p,m,b=!1,v=!1)=>{const{type:w,props:R,ref:C,children:S,dynamicChildren:E,shapeFlag:B,patchFlag:O,dirs:U,cacheIndex:z}=d;if(O===-2&&(v=!1),C!=null&&Zs(C,null,m,d,!0),z!=null&&(p.renderCache[z]=void 0),B&256){p.ctx.deactivate(d);return}const X=B&1&&U,le=!Hn(d);let ne;if(le&&(ne=R&&R.onVnodeBeforeUnmount)&&Ye(ne,p,d),B&6)yr(d.component,m,b);else{if(B&128){d.suspense.unmount(m,b);return}X&&zt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,M,b):E&&!E.hasOnce&&(w!==Xe||O>0&&O&64)?De(E,p,m,!1,!0):(w===Xe&&O&384||!v&&B&16)&&De(S,p,m),b&&ln(d)}(le&&(ne=R&&R.onVnodeUnmounted)||X)&&Re(()=>{ne&&Ye(ne,p,d),X&&zt(d,null,p,"unmounted")},m)},ln=d=>{const{type:p,el:m,anchor:b,transition:v}=d;if(p===Xe){un(m,b);return}if(p===Ps){A(d);return}const w=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:C}=v,S=()=>R(m,w);C?C(d.el,w,S):S()}else w()},un=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},yr=(d,p,m)=>{const{bum:b,scope:v,job:w,subTree:R,um:C,m:S,a:E}=d;Ao(S),Ao(E),b&&bs(b),v.stop(),w&&(w.flags|=8,Ce(R,d,p,m)),C&&Re(C,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},De=(d,p,m,b=!1,v=!1,w=0)=>{for(let R=w;R<d.length;R++)Ce(d[R],p,m,b,v)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[Nc];return m?h(m):p};let x=!1;const P=(d,p,m)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),p._vnode=d,x||(x=!0,vo(),Oc(),x=!1)},M={p:T,um:Ce,m:Ge,r:ln,mt:pe,mc:j,pc:ee,pbc:H,n:y,o:e};let te,fe;return t&&([te,fe]=t(M)),{render:P,hydrate:te,createApp:ad(P,te)}}function Rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function _d(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ki(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ct(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ki(o,c)),c.type===cs&&(c.el=o.el)}}function vd(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function rl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rl(t)}function Ao(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yd=Symbol.for("v-scx"),bd=()=>Be(yd);function Vn(e,t,n){return sl(e,t,n)}function sl(e,t,n=ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=ge({},n);let a;if(ls)if(i==="sync"){const h=bd();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||r)c.once=!0;else return{stop:$e,resume:$e,pause:$e};const l=me;c.call=(h,g,_)=>ze(h,l,g,_);let u=!1;i==="post"?c.scheduler=h=>{Re(h,l&&l.suspense)}:i!=="sync"&&(u=!0,c.scheduler=(h,g)=>{g?h():Bi(h)}),c.augmentJob=h=>{t&&(h.flags|=4),u&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};const f=Of(e,t,c);return a&&a.push(f),f}function wd(e,t,n){const r=this.proxy,s=he(e)?e.includes(".")?il(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=fr(this),c=sl(s,i.bind(r),n);return o(),c}function il(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ed=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${on(t)}Modifiers`];function Id(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ce;let s=n;const i=t.startsWith("update:"),o=i&&Ed(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>he(u)?u.trim():u)),o.number&&(s=n.map(Bu)));let c,a=r[c=ys(t)]||r[c=ys(We(t))];!a&&i&&(a=r[c=ys(on(t))]),a&&ze(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ze(l,e,6,s)}}function ol(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!K(e)){const a=l=>{const u=ol(l,t,!0);u&&(c=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(ue(e)&&r.set(e,null),null):(W(i)?i.forEach(a=>o[a]=null):ge(o,i),ue(e)&&r.set(e,o),o)}function as(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,on(t))||se(e,t))}function As(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:_,inheritAttrs:T}=e,F=jr(e);let N,k;try{if(n.shapeFlag&4){const A=s||r,$=A;N=Ze(l.call($,A,u,f,g,h,_)),k=c}else{const A=t;N=Ze(A.length>1?A(f,{attrs:c,slots:o,emit:a}):A(f,null)),k=t.props?c:Sd(c)}}catch(A){Wn.length=0,rs(A,e,1),N=Le(Ae)}let D=N;if(k&&T!==!1){const A=Object.keys(k),{shapeFlag:$}=D;A.length&&$&7&&(i&&A.some(Ti)&&(k=Td(k,i)),D=Ut(D,k,!1,!0))}return n.dirs&&(D=Ut(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Zn(D,n.transition),N=D,jr(F),N}const Sd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xr(n))&&((t||(t={}))[n]=e[n]);return t},Td=(e,t)=>{const n={};for(const r in e)(!Ti(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Po(r,o,l):!!o;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!as(l,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Po(r,o,l):!0:!!o;return!1}function Po(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!as(n,i))return!0}return!1}function Rd({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const al=e=>e.__isSuspense;function Ad(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Nf(e)}const Xe=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Wn=[];let Ne=null;function cl(e=!1){Wn.push(Ne=e?null:[])}function Pd(){Wn.pop(),Ne=Wn[Wn.length-1]||null}let er=1;function Oo(e){er+=e,e<0&&Ne&&(Ne.hasOnce=!0)}function ll(e){return e.dynamicChildren=er>0?Ne||_n:null,Pd(),er>0&&Ne&&Ne.push(e),e}function py(e,t,n,r,s,i){return ll(dl(e,t,n,r,s,i,!0))}function ul(e,t,n,r,s){return ll(Le(e,t,n,r,s,!0))}function si(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const fl=({key:e})=>e!=null?e:null,kr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||de(e)||K(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function dl(e,t=null,n=null,r=0,s=null,i=e===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fl(t),ref:t&&kr(t),scopeId:xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return c?(qi(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),er>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const Le=Od;function Od(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Xf)&&(e=Ae),si(e)){const c=Ut(e,t,!0);return n&&qi(c,n),er>0&&!i&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(e)]=c:Ne.push(c)),c.patchFlag=-2,c}if(Vd(e)&&(e=e.__vccOpts),t){t=kd(t);let{class:c,style:a}=t;c&&!he(c)&&(t.class=Pi(c)),ue(a)&&(Fi(a)&&!W(a)&&(a=ge({},a)),t.style=Ai(a))}const o=he(e)?1:al(e)?128:Lc(e)?64:ue(e)?4:K(e)?2:0;return dl(e,t,n,r,s,o,i,!0)}function kd(e){return e?Fi(e)||Yc(e)?ge({},e):e:null}function Ut(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=e,l=t?Nd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&fl(l),ref:t&&t.ref?n&&i?W(i)?i.concat(kr(t)):[i,kr(t)]:kr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Zn(u,a.clone(u)),u}function xd(e=" ",t=0){return Le(cs,null,e,t)}function gy(e="",t=!1){return t?(cl(),ul(Ae,null,e)):Le(Ae,null,e)}function Ze(e){return e==null||typeof e=="boolean"?Le(Ae):W(e)?Le(Xe,null,e.slice()):typeof e=="object"?Ct(e):Le(cs,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function qi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),qi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Yc(t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[xd(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Pi([t.class,r.class]));else if(s==="style")t.style=Ai([t.style,r.style]);else if(Xr(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ye(e,t,n,r=null){ze(e,t,7,[n,r])}const Ld=qc();let Dd=0;function Md(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ld,i={uid:Dd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(r,s),emitsOptions:ol(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Id.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Ud=()=>me||Se;let Br,ii;{const e=rc(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Br=t("__VUE_INSTANCE_SETTERS__",n=>me=n),ii=t("__VUE_SSR_SETTERS__",n=>ls=n)}const fr=e=>{const t=me;return Br(e),e.scope.on(),()=>{e.scope.off(),Br(t)}},ko=()=>{me&&me.scope.off(),Br(null)};function hl(e){return e.vnode.shapeFlag&4}let ls=!1;function Fd(e,t=!1,n=!1){t&&ii(t);const{props:r,children:s}=e.vnode,i=hl(e);ld(e,r,i,t),hd(e,s,n);const o=i?$d(e,t):void 0;return t&&ii(!1),o}function $d(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ed);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Hd(e):null,i=fr(e);$t();const o=ur(r,e,0,[e.props,s]);if(jt(),i(),Za(o)){if(Hn(e)||Hc(e),o.then(ko,ko),t)return o.then(c=>{xo(e,c,t)}).catch(c=>{rs(c,e,0)});e.asyncDep=o}else xo(e,o,t)}else pl(e,t)}function xo(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Cc(t)),pl(e,n)}let No;function pl(e,t,n){const r=e.type;if(!e.render){if(!t&&No&&!r.render){const s=r.template||Wi(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ge(ge({isCustomElement:i,delimiters:c},o),a);r.render=No(s,l)}}e.render=r.render||$e}{const s=fr(e);$t();try{td(e)}finally{jt(),s()}}}const jd={get(e,t){return ye(e,"get",""),e[t]}};function Hd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,jd),slots:e.slots,emit:e.emit,expose:t}}function us(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Cc(Pn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)},has(t,n){return n in t||n in Bn}})):e.proxy}function Bd(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Vd(e){return K(e)&&"__vccOpts"in e}const Ue=(e,t)=>Af(e,t,ls);function Gi(e,t,n){const r=arguments.length;return r===2?ue(t)&&!W(t)?si(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),Le(e,t,n))}const Wd="3.5.3";/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oi;const Lo=typeof window!="undefined"&&window.trustedTypes;if(Lo)try{oi=Lo.createPolicy("vue",{createHTML:e=>e})}catch{}const gl=oi?e=>oi.createHTML(e):e=>e,zd="http://www.w3.org/2000/svg",Kd="http://www.w3.org/1998/Math/MathML",at=typeof document!="undefined"?document:null,Do=at&&at.createElement("template"),qd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?at.createElementNS(zd,e):t==="mathml"?at.createElementNS(Kd,e):n?at.createElement(e,{is:n}):at.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Do.innerHTML=gl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=Do.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yt="transition",Nn="animation",tr=Symbol("_vtc"),ml={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gd=ge({},Mc,ml),Jd=e=>(e.displayName="Transition",e.props=Gd,e),my=Jd((e,{slots:t})=>Gi(jf,Yd(e),t)),qt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Mo=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function Yd(e){const t={};for(const L in e)L in ml||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=Qd(s),T=_&&_[0],F=_&&_[1],{onBeforeEnter:N,onEnter:k,onEnterCancelled:D,onLeave:A,onLeaveCancelled:$,onBeforeAppear:J=N,onAppear:q=k,onAppearCancelled:j=D}=t,I=(L,Q,pe)=>{Gt(L,Q?u:c),Gt(L,Q?l:o),pe&&pe()},H=(L,Q)=>{L._isLeaving=!1,Gt(L,f),Gt(L,g),Gt(L,h),Q&&Q()},Y=L=>(Q,pe)=>{const Pe=L?q:k,ie=()=>I(Q,L,pe);qt(Pe,[Q,ie]),Uo(()=>{Gt(Q,L?a:i),bt(Q,L?u:c),Mo(Pe)||Fo(Q,r,T,ie)})};return ge(t,{onBeforeEnter(L){qt(N,[L]),bt(L,i),bt(L,o)},onBeforeAppear(L){qt(J,[L]),bt(L,a),bt(L,l)},onEnter:Y(!1),onAppear:Y(!0),onLeave(L,Q){L._isLeaving=!0;const pe=()=>H(L,Q);bt(L,f),bt(L,h),eh(),Uo(()=>{!L._isLeaving||(Gt(L,f),bt(L,g),Mo(A)||Fo(L,r,F,pe))}),qt(A,[L,pe])},onEnterCancelled(L){I(L,!1),qt(D,[L])},onAppearCancelled(L){I(L,!0),qt(j,[L])},onLeaveCancelled(L){H(L),qt($,[L])}})}function Qd(e){if(e==null)return null;if(ue(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return Vu(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[tr]||(e[tr]=new Set)).add(t)}function Gt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[tr];n&&(n.delete(t),n.size||(e[tr]=void 0))}function Uo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xd=0;function Fo(e,t,n,r){const s=e._endId=++Xd,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=Zd(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=a&&f()};setTimeout(()=>{u<a&&f()},c+1),e.addEventListener(l,h)}function Zd(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${yt}Delay`),i=r(`${yt}Duration`),o=$o(s,i),c=r(`${Nn}Delay`),a=r(`${Nn}Duration`),l=$o(c,a);let u=null,f=0,h=0;t===yt?o>0&&(u=yt,f=o,h=i.length):t===Nn?l>0&&(u=Nn,f=l,h=a.length):(f=Math.max(o,l),u=f>0?o>l?yt:Nn:null,h=u?u===yt?i.length:a.length:0);const g=u===yt&&/\b(transform|all)(,|$)/.test(r(`${yt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function $o(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>jo(n)+jo(e[r])))}function jo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}function th(e,t,n){const r=e[tr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ho=Symbol("_vod"),nh=Symbol("_vsh"),rh=Symbol(""),sh=/(^|;)\s*display\s*:/;function ih(e,t,n){const r=e.style,s=he(n);let i=!1;if(n&&!s){if(t)if(he(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&xr(r,c,"")}else for(const o in t)n[o]==null&&xr(r,o,"");for(const o in n)o==="display"&&(i=!0),xr(r,o,n[o])}else if(s){if(t!==n){const o=r[rh];o&&(n+=";"+o),r.cssText=n,i=sh.test(n)}}else t&&e.removeAttribute("style");Ho in e&&(e[Ho]=i?r.display:"",e[nh]&&(r.display="none"))}const Bo=/\s*!important$/;function xr(e,t,n){if(W(n))n.forEach(r=>xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=oh(e,t);Bo.test(n)?e.setProperty(on(r),n.replace(Bo,""),"important"):e[r]=n}}const Vo=["Webkit","Moz","ms"],ks={};function oh(e,t){const n=ks[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return ks[t]=r;r=ts(r);for(let s=0;s<Vo.length;s++){const i=Vo[s]+r;if(i in e)return ks[t]=i}return t}const Wo="http://www.w3.org/1999/xlink";function zo(e,t,n,r,s,i=Ju(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Wo,t.slice(6,t.length)):e.setAttributeNS(Wo,t,n):n==null||i&&!sc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ft(n)?String(n):n)}function ah(e,t,n,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?gl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=sc(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function ch(e,t,n,r){e.addEventListener(t,n,r)}function lh(e,t,n,r){e.removeEventListener(t,n,r)}const Ko=Symbol("_vei");function uh(e,t,n,r,s=null){const i=e[Ko]||(e[Ko]={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=fh(t);if(r){const l=i[t]=ph(r,s);ch(e,c,l,a)}else o&&(lh(e,c,o,a),i[t]=void 0)}}const qo=/(?:Once|Passive|Capture)$/;function fh(e){let t;if(qo.test(e)){t={};let r;for(;r=e.match(qo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):on(e.slice(2)),t]}let xs=0;const dh=Promise.resolve(),hh=()=>xs||(dh.then(()=>xs=0),xs=Date.now());function ph(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(gh(r,n.value),t,5,[r])};return n.value=e,n.attached=hh(),n}function gh(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Go=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,mh=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?th(e,r,o):t==="style"?ih(e,n,r):Xr(t)?Ti(t)||uh(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_h(e,t,r,o))?(ah(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&zo(e,t,r,o,i,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),zo(e,t,r,o))};function _h(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Go(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Go(t)&&he(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!he(n)))}const vh=ge({patchProp:mh},qd);let Jo;function yh(){return Jo||(Jo=gd(vh))}const bh=(...e)=>{const t=yh().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Eh(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function wh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Eh(e){return he(e)?document.querySelector(e):e}function Ji(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const nn=lr(!1);let ai;function Ih(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function Sh(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const _l="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Th(e){const t=e.toLowerCase(),n=Sh(t),r=Ih(t,n),s={};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),nn.value===!0&&(ai={is:{...s}}),_l===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Yo=navigator.userAgent||navigator.vendor||window.opera,Ch={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Ve={userAgent:Yo,is:Th(Yo),has:{touch:_l},within:{iframe:window.self!==window.top}},ci={install(e){const{$q:t}=e;nn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,Ve),nn.value=!1}),t.platform=an(this)):t.platform=this}};{let e;Ji(Ve.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(ci,Ve),nn.value===!0&&(Object.assign(ci,ai,Ch),ai=null)}function _y(e){return Pn(ss(e))}function vy(e){return Pn(e)}const fs=(e,t)=>{const n=an(e);for(const r in e)Ji(t,r,()=>n[r],s=>{n[r]=s});return t},Tn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(Tn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function et(){}function yy(e){return e.button===0}function by(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function wy(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function Ey(e){e.stopPropagation()}function Qo(e){e.cancelable!==!1&&e.preventDefault()}function Iy(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Sy(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Qo,Tn.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Qo,Tn.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function Ty(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],Tn[s[3]])})}function Cy(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],Tn[r[3]])}),e[n]=void 0)}function Rh(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,n!==!0&&e.apply(this,i)};r!==null?clearTimeout(r):n===!0&&e.apply(this,i),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const Ns=["sm","md","lg","xl"],{passive:Xo}=Tn;var Ah=fs({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:et,setDebounce:et,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||Ve.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=f=>{const[h,g]=i();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(f!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let c,a={},l=16;this.setSizes=f=>{Ns.forEach(h=>{f[h]!==void 0&&(a[h]=f[h])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Ns.forEach(h=>{this.sizes[h]=parseInt(f.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{Ns.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{c!==void 0&&r.removeEventListener("resize",c,Xo),c=h>0?Rh(this.__update,h):this.__update,r.addEventListener("resize",c,Xo)},this.setDebounce(l),Object.keys(a).length!==0?(this.setSizes(a),a=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};nn.value===!0?t.push(u):u()}});const ve=fs({isActive:!1,mode:!1},{__media:void 0,set(e){ve.mode=e,e==="auto"?(ve.__media===void 0&&(ve.__media=window.matchMedia("(prefers-color-scheme: dark)"),ve.__updateMedia=()=>{ve.set("auto")},ve.__media.addListener(ve.__updateMedia)),e=ve.__media.matches):ve.__media!==void 0&&(ve.__media.removeListener(ve.__updateMedia),ve.__media=void 0),ve.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){ve.set(ve.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function Ph(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let vl=!1;function Oh(e){vl=e.isComposing===!0}function kh(e){return vl===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Ry(e,t){return kh(e)===!0?!1:[].concat(t).includes(e.keyCode)}function yl(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function xh({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=yl(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function Nh(){const{is:e}=Ve,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=yl(e);s!==void 0&&n.add(`platform-${s}`)}}Ve.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Ve.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function Lh(e){for(const t in e)Ph(t,e[t])}var Dh={install(e){if(this.__installed!==!0){if(nn.value===!0)Nh();else{const{$q:t}=e;t.config.brand!==void 0&&Lh(t.config.brand);const n=xh(Ve,t.config);document.body.classList.add.apply(document.body.classList,n)}Ve.is.ios===!0&&document.body.addEventListener("touchstart",et),window.addEventListener("keydown",Oh,!0)}}};const bl=()=>!0;function Mh(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Uh(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function Fh(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return bl;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(Mh).map(Uh)),()=>t.includes(window.location.hash)}var $h={__history:[],add:et,remove:et,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=Ve.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=bl),this.__history.push(o)},this.remove=o=>{const c=this.__history.indexOf(o);c>=0&&this.__history.splice(c,1)};const s=Fh(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Zo={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function ea(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Rt=fs({__qLang:{}},{getLocale:ea,set(e=Zo,t){const n={...e,rtl:e.rtl===!0,getLocale:ea};{if(n.set=Rt.set,Rt.__langConfig===void 0||Rt.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Rt.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Rt.__qLang,Rt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Zo))}});var jh={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Vr=fs({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Vr.set,Object.assign(Vr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Ji(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||jh))}}),Hh="_q_",Ay="_q_l_",Py="_q_pc_",Oy="_q_fo_";function ky(){}const ta={};let wl=!1;function Bh(){wl=!0}function Ls(e,t){if(e===t)return!0;if(e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,r;if(e.constructor===Array){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(Ls(e[r],t[r])!==!0)return!1;return!0}if(e.constructor===Map){if(e.size!==t.size)return!1;let i=e.entries();for(r=i.next();r.done!==!0;){if(t.has(r.value[0])!==!0)return!1;r=i.next()}for(i=e.entries(),r=i.next();r.done!==!0;){if(Ls(r.value[1],t.get(r.value[0]))!==!0)return!1;r=i.next()}return!0}if(e.constructor===Set){if(e.size!==t.size)return!1;const i=e.entries();for(r=i.next();r.done!==!0;){if(t.has(r.value[0])!==!0)return!1;r=i.next()}return!0}if(e.buffer!=null&&e.buffer.constructor===ArrayBuffer){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const s=Object.keys(e).filter(i=>e[i]!==void 0);if(n=s.length,n!==Object.keys(t).filter(i=>t[i]!==void 0).length)return!1;for(r=n;r--!==0;){const i=s[r];if(Ls(e[i],t[i])!==!0)return!1}return!0}return e!==e&&t!==t}function na(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}function Vh(e){return Object.prototype.toString.call(e)==="[object Date]"}function Wh(e){return Object.prototype.toString.call(e)==="[object RegExp]"}const ra=[ci,Dh,ve,Ah,$h,Rt,Vr];function sa(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function zh(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(Hh,n.$q),sa(n,ra),t.components!==void 0&&Object.values(t.components).forEach(r=>{na(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{na(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&sa(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&ra.includes(r)===!1)),nn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var Kh=function(e,t={}){const n={version:"2.16.11"};wl===!1?(t.config!==void 0&&Object.assign(ta,t.config),n.config={...ta},Bh()):n.config=t.config||{},zh(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},qh={name:"Quasar",version:"2.16.11",install:Kh,lang:Rt,iconSet:Vr};/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof document!="undefined";function Gh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function Ds(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ke(s)?s.map(e):e(s)}return n}const zn=()=>{},Ke=Array.isArray,El=/#/g,Jh=/&/g,Yh=/\//g,Qh=/=/g,Xh=/\?/g,Il=/\+/g,Zh=/%5B/g,ep=/%5D/g,Sl=/%5E/g,tp=/%60/g,Tl=/%7B/g,np=/%7C/g,Cl=/%7D/g,rp=/%20/g;function Yi(e){return encodeURI(""+e).replace(np,"|").replace(Zh,"[").replace(ep,"]")}function sp(e){return Yi(e).replace(Tl,"{").replace(Cl,"}").replace(Sl,"^")}function li(e){return Yi(e).replace(Il,"%2B").replace(rp,"+").replace(El,"%23").replace(Jh,"%26").replace(tp,"`").replace(Tl,"{").replace(Cl,"}").replace(Sl,"^")}function ip(e){return li(e).replace(Qh,"%3D")}function op(e){return Yi(e).replace(El,"%23").replace(Xh,"%3F")}function ap(e){return e==null?"":op(e).replace(Yh,"%2F")}function nr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const cp=/\/$/,lp=e=>e.replace(cp,"");function Ms(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=hp(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:nr(o)}}function up(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ia(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cn(t.matched[r],n.matched[s])&&Rl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dp(e[n],t[n]))return!1;return!0}function dp(e,t){return Ke(e)?oa(e,t):Ke(t)?oa(t,e):e===t}function oa(e,t){return Ke(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function hp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var rr;(function(e){e.pop="pop",e.push="push"})(rr||(rr={}));var Kn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kn||(Kn={}));function pp(e){if(!e)if(pn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lp(e)}const gp=/^[^#]+#/;function mp(e,t){return e.replace(gp,"#")+t}function _p(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ds=()=>({left:window.scrollX,top:window.scrollY});function vp(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=_p(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function aa(e,t){return(history.state?history.state.position-t:-1)+e}const ui=new Map;function yp(e,t){ui.set(e,t)}function bp(e){const t=ui.get(e);return ui.delete(e),t}let wp=()=>location.protocol+"//"+location.host;function Al(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),ia(a,"")}return ia(n,e)+r+s}function Ep(e,t,n,r){let s=[],i=[],o=null;const c=({state:h})=>{const g=Al(e,location),_=n.value,T=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===_){o=null;return}F=T?h.position-T.position:0}else r(g);s.forEach(N=>{N(n.value,_,{delta:F,type:rr.pop,direction:F?F>0?Kn.forward:Kn.back:Kn.unknown})})};function a(){o=n.value}function l(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(re({},h.state,{scroll:ds()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function ca(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ds():null}}function Ip(e){const{history:t,location:n}=window,r={value:Al(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:wp()+e+a;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(a,l){const u=re({},t.state,ca(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=re({},s.value,t.state,{forward:a,scroll:ds()});i(u.current,u,!0);const f=re({},ca(r.value,a,null),{position:u.position+1},l);i(a,f,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Sp(e){e=pp(e);const t=Ip(e),n=Ep(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:e,go:r,createHref:mp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Tp(e){return typeof e=="string"||e&&typeof e=="object"}function Pl(e){return typeof e=="string"||typeof e=="symbol"}const Ol=Symbol("");var la;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(la||(la={}));function Rn(e,t){return re(new Error,{type:e,[Ol]:!0},t)}function ot(e,t){return e instanceof Error&&Ol in e&&(t==null||!!(e.type&t))}const ua="[^/]+?",Cp={sensitive:!1,strict:!1,start:!0,end:!0},Rp=/[.+*?^${}()[\]/\\]/g;function Ap(e,t){const n=re({},Cp,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Rp,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:T,optional:F,regexp:N}=h;i.push({name:_,repeatable:T,optional:F});const k=N||ua;if(k!==ua){g+=10;try{new RegExp(`(${k})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+A.message)}}let D=T?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(D=F&&l.length<2?`(?:/${D})`:"/"+D),F&&(D+="?"),s+=D,g+=20,F&&(g+=-8),T&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",_=i[h-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function a(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:T,optional:F}=g,N=_ in l?l[_]:"";if(Ke(N)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=Ke(N)?N.join("/"):N;if(!k)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Pp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function kl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Pp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fa(r))return 1;if(fa(s))return-1}return s.length-r.length}function fa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Op={type:0,value:""},kp=/[a-zA-Z0-9_]/;function xp(e){if(!e)return[[]];if(e==="/")return[[Op]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:a==="("?n=2:kp.test(a)?h():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Np(e,t,n){const r=Ap(xp(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Lp(e,t){const n=[],r=new Map;t=pa({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,h,g){const _=!g,T=Dp(f);T.aliasOf=g&&g.record;const F=pa(t,f),N=[T];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of A)N.push(re({},T,{components:g?g.record.components:T.components,path:$,aliasOf:g?g.record:T}))}let k,D;for(const A of N){const{path:$}=A;if(h&&$[0]!=="/"){const J=h.record.path,q=J[J.length-1]==="/"?"":"/";A.path=h.record.path+($&&q+$)}if(k=Np(A,h,F),g?g.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),_&&f.name&&!ha(k)&&o(f.name)),xl(k)&&a(k),T.children){const J=T.children;for(let q=0;q<J.length;q++)i(J[q],k,g&&g.children[q])}g=g||k}return D?()=>{o(D)}:zn}function o(f){if(Pl(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){const h=Fp(f,n);n.splice(h,0,f),f.record.name&&!ha(f)&&r.set(f.record.name,f)}function l(f,h){let g,_={},T,F;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Rn(1,{location:f});F=g.record.name,_=re(da(h.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&da(f.params,g.keys.map(D=>D.name))),T=g.stringify(_)}else if(f.path!=null)T=f.path,g=n.find(D=>D.re.test(T)),g&&(_=g.parse(T),F=g.record.name);else{if(g=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!g)throw Rn(1,{location:f,currentLocation:h});F=g.record.name,_=re({},h.params,f.params),T=g.stringify(_)}const N=[];let k=g;for(;k;)N.unshift(k.record),k=k.parent;return{name:F,path:T,params:_,matched:N,meta:Up(N)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function da(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Dp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Mp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Mp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ha(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Up(e){return e.reduce((t,n)=>re(t,n.meta),{})}function pa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Fp(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;kl(e,t[i])<0?r=i:n=i+1}const s=$p(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function $p(e){let t=e;for(;t=t.parent;)if(xl(t)&&kl(e,t)===0)return t}function xl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function jp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Il," "),o=i.indexOf("="),c=nr(o<0?i:i.slice(0,o)),a=o<0?null:nr(i.slice(o+1));if(c in t){let l=t[c];Ke(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function ga(e){let t="";for(let n in e){const r=e[n];if(n=ip(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&li(i)):[r&&li(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Hp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Bp=Symbol(""),ma=Symbol(""),hs=Symbol(""),Nl=Symbol(""),fi=Symbol("");function Ln(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function At(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=h=>{h===!1?a(Rn(4,{from:n,to:t})):h instanceof Error?a(h):Tp(h)?a(Rn(2,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),c())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function Us(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const c in o.components){let a=o.components[c];if(!(t!=="beforeRouteEnter"&&!o.instances[c]))if(Vp(a)){const u=(a.__vccOpts||a)[t];u&&i.push(At(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const f=Gh(u)?u.default:u;o.components[c]=f;const g=(f.__vccOpts||f)[t];return g&&At(g,n,r,o,c,s)()}))}}return i}function Vp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _a(e){const t=Be(hs),n=Be(Nl),r=Ue(()=>{const a=yn(e.to);return t.resolve(a)}),s=Ue(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Cn.bind(null,u));if(h>-1)return h;const g=va(a[l-2]);return l>1&&va(u)===g&&f[f.length-1].path!==g?f.findIndex(Cn.bind(null,a[l-2])):h}),i=Ue(()=>s.value>-1&&qp(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Rl(n.params,r.value.params));function c(a={}){return Kp(a)?t[yn(e.replace)?"replace":"push"](yn(e.to)).catch(zn):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Wp=ss({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_a,setup(e,{slots:t}){const n=an(_a(e)),{options:r}=Be(hs),s=Ue(()=>({[ya(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ya(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Gi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zp=Wp;function Kp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function va(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ya=(e,t,n)=>e!=null?e:t!=null?t:n,Gp=ss({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Be(fi),s=Ue(()=>e.route||r.value),i=Be(ma,0),o=Ue(()=>{let l=yn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),c=Ue(()=>s.value.matched[o.value]);Or(ma,Ue(()=>o.value+1)),Or(Bp,c),Or(fi,s);const a=lr();return Vn(()=>[a.value,c.value,e.name],([l,u,f],[h,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Cn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=c.value,h=f&&f.components[u];if(!h)return ba(n.default,{Component:h,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,F=Gi(h,re({},_,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return ba(n.default,{Component:F,route:l})||F}}});function ba(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Jp=Gp;function Yp(e){const t=Lp(e.routes,e),n=e.parseQuery||jp,r=e.stringifyQuery||ga,s=e.history,i=Ln(),o=Ln(),c=Ln(),a=bf(wt);let l=wt;pn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ds.bind(null,y=>""+y),f=Ds.bind(null,ap),h=Ds.bind(null,nr);function g(y,x){let P,M;return Pl(y)?(P=t.getRecordMatcher(y),M=x):M=y,t.addRoute(M,P)}function _(y){const x=t.getRecordMatcher(y);x&&t.removeRoute(x)}function T(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function N(y,x){if(x=re({},x||a.value),typeof y=="string"){const p=Ms(n,y,x.path),m=t.resolve({path:p.path},x),b=s.createHref(p.fullPath);return re(p,m,{params:h(m.params),hash:nr(p.hash),redirectedFrom:void 0,href:b})}let P;if(y.path!=null)P=re({},y,{path:Ms(n,y.path,x.path).path});else{const p=re({},y.params);for(const m in p)p[m]==null&&delete p[m];P=re({},y,{params:f(p)}),x.params=f(x.params)}const M=t.resolve(P,x),te=y.hash||"";M.params=u(h(M.params));const fe=up(r,re({},y,{hash:sp(te),path:M.path})),d=s.createHref(fe);return re({fullPath:fe,hash:te,query:r===ga?Hp(y.query):y.query||{}},M,{redirectedFrom:void 0,href:d})}function k(y){return typeof y=="string"?Ms(n,y,a.value.path):re({},y)}function D(y,x){if(l!==y)return Rn(8,{from:x,to:y})}function A(y){return q(y)}function $(y){return A(re(k(y),{replace:!0}))}function J(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let M=typeof P=="function"?P(y):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),re({query:y.query,hash:y.hash,params:M.path!=null?{}:y.params},M)}}function q(y,x){const P=l=N(y),M=a.value,te=y.state,fe=y.force,d=y.replace===!0,p=J(P);if(p)return q(re(k(p),{state:typeof p=="object"?re({},te,p.state):te,force:fe,replace:d}),x||P);const m=P;m.redirectedFrom=x;let b;return!fe&&fp(r,M,P)&&(b=Rn(16,{to:m,from:M}),Ge(M,M,!0,!1)),(b?Promise.resolve(b):H(m,M)).catch(v=>ot(v)?ot(v,2)?v:_t(v):ee(v,m,M)).then(v=>{if(v){if(ot(v,2))return q(re({replace:d},k(v.to),{state:typeof v.to=="object"?re({},te,v.to.state):te,force:fe}),x||m)}else v=L(m,M,!0,d,te);return Y(m,M,v),v})}function j(y,x){const P=D(y,x);return P?Promise.reject(P):Promise.resolve()}function I(y){const x=un.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function H(y,x){let P;const[M,te,fe]=Qp(y,x);P=Us(M.reverse(),"beforeRouteLeave",y,x);for(const p of M)p.leaveGuards.forEach(m=>{P.push(At(m,y,x))});const d=j.bind(null,y,x);return P.push(d),De(P).then(()=>{P=[];for(const p of i.list())P.push(At(p,y,x));return P.push(d),De(P)}).then(()=>{P=Us(te,"beforeRouteUpdate",y,x);for(const p of te)p.updateGuards.forEach(m=>{P.push(At(m,y,x))});return P.push(d),De(P)}).then(()=>{P=[];for(const p of fe)if(p.beforeEnter)if(Ke(p.beforeEnter))for(const m of p.beforeEnter)P.push(At(m,y,x));else P.push(At(p.beforeEnter,y,x));return P.push(d),De(P)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),P=Us(fe,"beforeRouteEnter",y,x,I),P.push(d),De(P))).then(()=>{P=[];for(const p of o.list())P.push(At(p,y,x));return P.push(d),De(P)}).catch(p=>ot(p,8)?p:Promise.reject(p))}function Y(y,x,P){c.list().forEach(M=>I(()=>M(y,x,P)))}function L(y,x,P,M,te){const fe=D(y,x);if(fe)return fe;const d=x===wt,p=pn?history.state:{};P&&(M||d?s.replace(y.fullPath,re({scroll:d&&p&&p.scroll},te)):s.push(y.fullPath,te)),a.value=y,Ge(y,x,P,d),_t()}let Q;function pe(){Q||(Q=s.listen((y,x,P)=>{if(!yr.listening)return;const M=N(y),te=J(M);if(te){q(re(te,{replace:!0}),M).catch(zn);return}l=M;const fe=a.value;pn&&yp(aa(fe.fullPath,P.delta),ds()),H(M,fe).catch(d=>ot(d,12)?d:ot(d,2)?(q(d.to,M).then(p=>{ot(p,20)&&!P.delta&&P.type===rr.pop&&s.go(-1,!1)}).catch(zn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ee(d,M,fe))).then(d=>{d=d||L(M,fe,!1),d&&(P.delta&&!ot(d,8)?s.go(-P.delta,!1):P.type===rr.pop&&ot(d,20)&&s.go(-1,!1)),Y(M,fe,d)}).catch(zn)}))}let Pe=Ln(),ie=Ln(),G;function ee(y,x,P){_t(y);const M=ie.list();return M.length?M.forEach(te=>te(y,x,P)):console.error(y),Promise.reject(y)}function st(){return G&&a.value!==wt?Promise.resolve():new Promise((y,x)=>{Pe.add([y,x])})}function _t(y){return G||(G=!y,pe(),Pe.list().forEach(([x,P])=>y?P(y):x()),Pe.reset()),y}function Ge(y,x,P,M){const{scrollBehavior:te}=e;if(!pn||!te)return Promise.resolve();const fe=!P&&bp(aa(y.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return Hi().then(()=>te(y,x,fe)).then(d=>d&&vp(d)).catch(d=>ee(d,y,x))}const Ce=y=>s.go(y);let ln;const un=new Set,yr={currentRoute:a,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:T,resolve:N,options:e,push:A,replace:$,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:st,install(y){const x=this;y.component("RouterLink",zp),y.component("RouterView",Jp),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(a)}),pn&&!ln&&a.value===wt&&(ln=!0,A(s.location).catch(te=>{}));const P={};for(const te in wt)Object.defineProperty(P,te,{get:()=>a.value[te],enumerable:!0});y.provide(hs,x),y.provide(Nl,Ic(P)),y.provide(fi,a);const M=y.unmount;un.add(y),y.unmount=function(){un.delete(y),un.size<1&&(l=wt,Q&&Q(),Q=null,a.value=wt,ln=!1,G=!1),M()}}};function De(y){return y.reduce((x,P)=>x.then(()=>I(P)),Promise.resolve())}return yr}function Qp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>Cn(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>Cn(l,a))||s.push(a))}return[n,r,s]}function Xp(){return Be(hs)}var Zp=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Ll;const ps=e=>Ll=e,Dl=Symbol();function di(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qn||(qn={}));function eg(){const e=cc(!0),t=e.run(()=>lr({}));let n=[],r=[];const s=Pn({install(i){ps(s),s._a=i,i.provide(Dl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Zp?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Ml=()=>{};function wa(e,t,n,r=Ml){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&lc()&&Qu(s),s}function dn(e,...t){e.slice().forEach(n=>{n(...t)})}const tg=e=>e(),Ea=Symbol(),Fs=Symbol();function hi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];di(s)&&di(r)&&e.hasOwnProperty(n)&&!de(r)&&!Nt(r)?e[n]=hi(s,r):e[n]=r}return e}const ng=Symbol();function rg(e){return!di(e)||!e.hasOwnProperty(ng)}const{assign:It}=Object;function sg(e){return!!(de(e)&&e.effect)}function ig(e,t,n,r){const{state:s,actions:i,getters:o}=t,c=n.state.value[e];let a;function l(){c||(n.state.value[e]=s?s():{});const u=If(n.state.value[e]);return It(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Pn(Ue(()=>{ps(n);const g=n._s.get(e);return o[h].call(g,g)})),f),{}))}return a=Ul(e,l,t,n,r,!0),a}function Ul(e,t,n={},r,s,i){let o;const c=It({actions:{}},n),a={deep:!0};let l,u,f=[],h=[],g;const _=r.state.value[e];!i&&!_&&(r.state.value[e]={}),lr({});let T;function F(j){let I;l=u=!1,typeof j=="function"?(j(r.state.value[e]),I={type:qn.patchFunction,storeId:e,events:g}):(hi(r.state.value[e],j),I={type:qn.patchObject,payload:j,storeId:e,events:g});const H=T=Symbol();Hi().then(()=>{T===H&&(l=!0)}),u=!0,dn(f,I,r.state.value[e])}const N=i?function(){const{state:I}=n,H=I?I():{};this.$patch(Y=>{It(Y,H)})}:Ml;function k(){o.stop(),f=[],h=[],r._s.delete(e)}const D=(j,I="")=>{if(Ea in j)return j[Fs]=I,j;const H=function(){ps(r);const Y=Array.from(arguments),L=[],Q=[];function pe(G){L.push(G)}function Pe(G){Q.push(G)}dn(h,{args:Y,name:H[Fs],store:$,after:pe,onError:Pe});let ie;try{ie=j.apply(this&&this.$id===e?this:$,Y)}catch(G){throw dn(Q,G),G}return ie instanceof Promise?ie.then(G=>(dn(L,G),G)).catch(G=>(dn(Q,G),Promise.reject(G))):(dn(L,ie),ie)};return H[Ea]=!0,H[Fs]=I,H},A={_p:r,$id:e,$onAction:wa.bind(null,h),$patch:F,$reset:N,$subscribe(j,I={}){const H=wa(f,j,I.detached,()=>Y()),Y=o.run(()=>Vn(()=>r.state.value[e],L=>{(I.flush==="sync"?u:l)&&j({storeId:e,type:qn.direct,events:g},L)},It({},a,I)));return H},$dispose:k},$=an(A);r._s.set(e,$);const q=(r._a&&r._a.runWithContext||tg)(()=>r._e.run(()=>(o=cc()).run(()=>t({action:D}))));for(const j in q){const I=q[j];if(de(I)&&!sg(I)||Nt(I))i||(_&&rg(I)&&(de(I)?I.value=_[j]:hi(I,_[j])),r.state.value[e][j]=I);else if(typeof I=="function"){const H=D(I,j);q[j]=H,c.actions[j]=I}}return It($,q),It(Z($),q),Object.defineProperty($,"$state",{get:()=>r.state.value[e],set:j=>{F(I=>{It(I,j)})}}),r._p.forEach(j=>{It($,o.run(()=>j({store:$,app:r._a,pinia:r,options:c})))}),_&&i&&n.hydrate&&n.hydrate($.$state,_),l=!0,u=!0,$}function og(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(c,a){const l=cd();return c=c||(l?Be(Dl,null):null),c&&ps(c),c=Ll,c._s.has(r)||(i?Ul(r,t,s,c):ig(r,s,c)),c._s.get(r)}return o.$id=r,o}function xy(e){{e=Z(e);const t={};for(const n in e){const r=e[n];(de(r)||Nt(r))&&(t[n]=Cf(e,n))}return t}}function Ny(e){return e}/**
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
 */const Fl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ag=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,u=i>>2,f=(i&3)<<4|c>>4;let h=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ag(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||f==null)throw new cg;const h=i<<2|c>>4;if(r.push(h),l!==64){const g=c<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lg=function(e){const t=Fl(e);return $l.encodeByteArray(t,!0)},Wr=function(e){return lg(e).replace(/\./g,"")},jl=function(e){try{return $l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ug(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fg=()=>ug().__FIREBASE_DEFAULTS__,dg=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hg=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jl(e[1]);return t&&JSON.parse(t)},gs=()=>{try{return fg()||dg()||hg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Hl=e=>{var t,n;return(n=(t=gs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ly=e=>{const t=Hl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Bl=()=>{var e;return(e=gs())===null||e===void 0?void 0:e.config},Vl=e=>{var t;return(t=gs())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Dy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[Wr(JSON.stringify(n)),Wr(JSON.stringify(o)),c].join(".")}/**
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
 */function Te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function mg(){var e;const t=(e=gs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _g(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yg(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function My(){return!mg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bg(){try{return typeof indexedDB=="object"}catch{return!1}}function wg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Eg="FirebaseError";class Ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Eg,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Ig(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,c,r)}}function Ig(e,t){return e.replace(Sg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Sg=/\{\$([^}]+)}/g;function Tg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ia(i)&&Ia(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ia(e){return e!==null&&typeof e=="object"}/**
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
 */function hr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Un(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Cg(e,t){const n=new Rg(e,t);return n.subscribe.bind(n)}class Rg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ag(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=$s),s.error===void 0&&(s.error=$s),s.complete===void 0&&(s.complete=$s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ag(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function $s(){}/**
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
 */class Pg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kg(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Og(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(e){return e===Yt?void 0:e}function kg(e){return e.instantiationMode==="EAGER"}/**
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
 */class xg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const Ng={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Lg=ae.INFO,Dg={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Mg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Dg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wl{constructor(t){this.name=t,this._logLevel=Lg,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ng[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const Ug=(e,t)=>t.some(n=>e instanceof n);let Sa,Ta;function Fg(){return Sa||(Sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $g(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,pi=new WeakMap,Kl=new WeakMap,js=new WeakMap,Qi=new WeakMap;function jg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Lt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&zl.set(n,e)}).catch(()=>{}),Qi.set(t,e),t}function Hg(e){if(pi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});pi.set(e,t)}let gi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bg(e){gi=e(gi)}function Vg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Hs(this),t,...n);return Kl.set(r,t.sort?t.sort():[t]),Lt(r)}:$g().includes(e)?function(...t){return e.apply(Hs(this),t),Lt(zl.get(this))}:function(...t){return Lt(e.apply(Hs(this),t))}}function Wg(e){return typeof e=="function"?Vg(e):(e instanceof IDBTransaction&&Hg(e),Ug(e,Fg())?new Proxy(e,gi):e)}function Lt(e){if(e instanceof IDBRequest)return jg(e);if(js.has(e))return js.get(e);const t=Wg(e);return t!==e&&(js.set(e,t),Qi.set(t,e)),t}const Hs=e=>Qi.get(e);function zg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=Lt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Lt(o.result),a.oldVersion,a.newVersion,Lt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Kg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],Bs=new Map;function Ca(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bs.get(t))return Bs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=qg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Bs.set(t,i),i}Bg(e=>({...e,get:(t,n,r)=>Ca(t,n)||e.get(t,n,r),has:(t,n)=>!!Ca(t,n)||e.has(t,n)}));/**
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
 */class Gg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mi="@firebase/app",Ra="0.10.10";/**
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
 */const pt=new Wl("@firebase/app"),Yg="@firebase/app-compat",Qg="@firebase/analytics-compat",Xg="@firebase/analytics",Zg="@firebase/app-check-compat",em="@firebase/app-check",tm="@firebase/auth",nm="@firebase/auth-compat",rm="@firebase/database",sm="@firebase/database-compat",im="@firebase/functions",om="@firebase/functions-compat",am="@firebase/installations",cm="@firebase/installations-compat",lm="@firebase/messaging",um="@firebase/messaging-compat",fm="@firebase/performance",dm="@firebase/performance-compat",hm="@firebase/remote-config",pm="@firebase/remote-config-compat",gm="@firebase/storage",mm="@firebase/storage-compat",_m="@firebase/firestore",vm="@firebase/vertexai-preview",ym="@firebase/firestore-compat",bm="firebase",wm="10.13.1";/**
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
 */const _i="[DEFAULT]",Em={[mi]:"fire-core",[Yg]:"fire-core-compat",[Xg]:"fire-analytics",[Qg]:"fire-analytics-compat",[em]:"fire-app-check",[Zg]:"fire-app-check-compat",[tm]:"fire-auth",[nm]:"fire-auth-compat",[rm]:"fire-rtdb",[sm]:"fire-rtdb-compat",[im]:"fire-fn",[om]:"fire-fn-compat",[am]:"fire-iid",[cm]:"fire-iid-compat",[lm]:"fire-fcm",[um]:"fire-fcm-compat",[fm]:"fire-perf",[dm]:"fire-perf-compat",[hm]:"fire-rc",[pm]:"fire-rc-compat",[gm]:"fire-gcs",[mm]:"fire-gcs-compat",[_m]:"fire-fst",[ym]:"fire-fst-compat",[vm]:"fire-vertex","fire-js":"fire-js",[bm]:"fire-js-all"};/**
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
 */const Kr=new Map,Im=new Map,vi=new Map;function Aa(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function sr(e){const t=e.name;if(vi.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;vi.set(t,e);for(const n of Kr.values())Aa(n,e);for(const n of Im.values())Aa(n,e);return!0}function ql(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function tt(e){return e.settings!==void 0}/**
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
 */const Sm={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Dt=new dr("app","Firebase",Sm);/**
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
 */class Tm{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=wm;function Gl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:_i,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=Bl()),!n)throw Dt.create("no-options");const i=Kr.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new xg(s);for(const a of vi.values())o.addComponent(a);const c=new Tm(n,r,o);return Kr.set(s,c),c}function Cm(e=_i){const t=Kr.get(e);if(!t&&e===_i&&Bl())return Gl();if(!t)throw Dt.create("no-app",{appName:e});return t}function wn(e,t,n){var r;let s=(r=Em[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}sr(new An(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Rm="firebase-heartbeat-database",Am=1,ir="firebase-heartbeat-store";let Vs=null;function Jl(){return Vs||(Vs=zg(Rm,Am,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ir)}catch(n){console.warn(n)}}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),Vs}async function Pm(e){try{const n=(await Jl()).transaction(ir),r=await n.objectStore(ir).get(Yl(e));return await n.done,r}catch(t){if(t instanceof Ht)pt.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}async function Pa(e,t){try{const r=(await Jl()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,Yl(e)),await r.done}catch(n){if(n instanceof Ht)pt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function Yl(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Om=1024,km=30*24*60*60*1e3;class xm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=km}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oa(),{heartbeatsToSend:r,unsentEntries:s}=Nm(this._heartbeatsCache.heartbeats),i=Wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function Oa(){return new Date().toISOString().substring(0,10)}function Nm(e,t=Om){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ka(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ka(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bg()?wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ka(e){return Wr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Dm(e){sr(new An("platform-logger",t=>new Gg(t),"PRIVATE")),sr(new An("heartbeat",t=>new xm(t),"PRIVATE")),wn(mi,Ra,e),wn(mi,Ra,"esm2017"),wn("fire-js","")}Dm("");var Mm="firebase",Um="10.13.1";/**
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
 */wn(Mm,Um,"app");function Xi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Ql(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fm=Ql,Xl=new dr("auth","Firebase",Ql());/**
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
 */const qr=new Wl("@firebase/auth");function $m(e,...t){qr.logLevel<=ae.WARN&&qr.warn(`Auth (${pr}): ${e}`,...t)}function Nr(e,...t){qr.logLevel<=ae.ERROR&&qr.error(`Auth (${pr}): ${e}`,...t)}/**
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
 */function qe(e,...t){throw Zi(e,...t)}function nt(e,...t){return Zi(e,...t)}function Zl(e,t,n){const r=Object.assign(Object.assign({},Fm()),{[t]:n});return new dr("auth","Firebase",r).create(t,{appName:e.name})}function ht(e){return Zl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xl.create(e,...t)}function V(e,t,...n){if(!e)throw Zi(t,...n)}function lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Nr(t),new Error(t)}function gt(e,t){e||lt(t)}/**
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
 */function yi(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function jm(){return xa()==="http:"||xa()==="https:"}function xa(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Hm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||_g()||"connection"in navigator)?navigator.onLine:!0}function Bm(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class gr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=gg()||vg()}get(){return Hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eo(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class eu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wm=new gr(3e4,6e4);function Vt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wt(e,t,n,r,s={}){return tu(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=hr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),eu.fetch()(nu(e,e.config.apiHost,n,c),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function tu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vm),t);try{const s=new Km(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ar(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ar(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ar(e,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Zl(e,u,l);qe(e,u)}}catch(s){if(s instanceof Ht)throw s;qe(e,"network-request-failed",{message:String(s)})}}async function mr(e,t,n,r,s={}){const i=await Wt(e,t,n,r,s);return"mfaPendingCredential"in i&&qe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function nu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?eo(e.config,s):`${e.config.apiScheme}://${s}`}function zm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Km{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(e,t,r);return s.customData._tokenResponse=n,s}function Na(e){return e!==void 0&&e.enterprise!==void 0}class qm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return zm(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Gm(e,t){return Wt(e,"GET","/v2/recaptchaConfig",Vt(e,t))}/**
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
 */async function Jm(e,t){return Wt(e,"POST","/v1/accounts:delete",t)}async function ru(e,t){return Wt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Gn(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ym(e,t=!1){const n=Bt(e),r=await n.getIdToken(t),s=to(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gn(Ws(s.auth_time)),issuedAtTime:Gn(Ws(s.iat)),expirationTime:Gn(Ws(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ws(e){return Number(e)*1e3}function to(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=jl(n);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function La(e){const t=to(e);return V(t,"internal-error"),V(typeof t.exp!="undefined","internal-error"),V(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ht&&Qm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Xm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await or(e,ru(n,{idToken:r}));V(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?su(i.providerUserInfo):[],c=e_(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new bi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Zm(e){const t=Bt(e);await Gr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function e_(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function su(e){return e.map(t=>{var{providerId:n}=t,r=Xi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function t_(e,t){const n=await tu(e,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=nu(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",eu.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function n_(e,t){return Wt(e,"POST","/v2/accounts:revokeToken",Vt(e,t))}/**
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
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken!="undefined","internal-error"),V(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):La(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=La(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await t_(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new En;return r&&(V(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
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
 */function Et(e,t){V(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class ut{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Xi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await or(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Ym(this,t)}reload(){return Zm(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(ht(this.auth));const t=await this.getIdToken();return await or(this,Jm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,N=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:A,isAnonymous:$,providerData:J,stsTokenManager:q}=n;V(D&&q,t,"internal-error");const j=En.fromJSON(this.name,q);V(typeof D=="string",t,"internal-error"),Et(f,t.name),Et(h,t.name),V(typeof A=="boolean",t,"internal-error"),V(typeof $=="boolean",t,"internal-error"),Et(g,t.name),Et(_,t.name),Et(T,t.name),Et(F,t.name),Et(N,t.name),Et(k,t.name);const I=new ut({uid:D,auth:t,email:h,emailVerified:A,displayName:f,isAnonymous:$,photoURL:_,phoneNumber:g,tenantId:T,stsTokenManager:j,createdAt:N,lastLoginAt:k});return J&&Array.isArray(J)&&(I.providerData=J.map(H=>Object.assign({},H))),F&&(I._redirectEventId=F),I}static async _fromIdTokenResponse(t,n,r=!1){const s=new En;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Gr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];V(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?su(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new En;c.updateFromIdToken(r);const a=new ut({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const Da=new Map;function ft(e){gt(e instanceof Function,"Expected a class definition");let t=Da.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Da.set(e,t),t)}/**
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
 */class iu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}iu.type="NONE";const Ma=iu;/**
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
 */function Lr(e,t,n){return`firebase:${e}:${t}:${n}`}class In{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new In(ft(Ma),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(Ma);const o=Lr(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ut._fromJSON(t,u);l!==i&&(c=f),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new In(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new In(i,t,r))}}/**
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
 */function Ua(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ou(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fu(t))return"Blackberry";if(du(t))return"Webos";if(au(t))return"Safari";if((t.includes("chrome/")||cu(t))&&!t.includes("edge/"))return"Chrome";if(uu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ou(e=Te()){return/firefox\//i.test(e)}function au(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cu(e=Te()){return/crios\//i.test(e)}function lu(e=Te()){return/iemobile/i.test(e)}function uu(e=Te()){return/android/i.test(e)}function fu(e=Te()){return/blackberry/i.test(e)}function du(e=Te()){return/webos/i.test(e)}function no(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function r_(e=Te()){var t;return no(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function s_(){return yg()&&document.documentMode===10}function hu(e=Te()){return no(e)||uu(e)||du(e)||fu(e)||/windows phone/i.test(e)||lu(e)}/**
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
 */function pu(e,t=[]){let n;switch(e){case"Browser":n=Ua(Te());break;case"Worker":n=`${Ua(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${r}`}/**
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
 */class i_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function o_(e,t={}){return Wt(e,"GET","/v2/passwordPolicy",Vt(e,t))}/**
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
 */const a_=6;class c_{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:a_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class l_{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fa(this),this.idTokenSubscription=new Fa(this),this.beforeStateQueue=new i_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ru(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Gr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Bm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tt(this.app))return Promise.reject(ht(this));const n=t?Bt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tt(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await o_(this),n=new c_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new dr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await n_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&$m(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cn(e){return Bt(e)}class Fa{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cg(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u_(e){ms=e}function gu(e){return ms.loadJS(e)}function f_(){return ms.recaptchaEnterpriseScript}function d_(){return ms.gapiScript}function h_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const p_="recaptcha-enterprise",g_="NO_RECAPTCHA";class m_{constructor(t){this.type=p_,this.auth=cn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Gm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new qm(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Na(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(g_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Na(window.grecaptcha))s(c,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=f_();a.length!==0&&(a+=c),gu(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function $a(e,t,n,r=!1){const s=new m_(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wi(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $a(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $a(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
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
 */function __(e,t){const n=ql(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,t!=null?t:{}))return s;qe(s,"already-initialized")}return n.initialize({options:t})}function v_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function y_(e,t,n){const r=cn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=mu(t),{host:o,port:c}=b_(t),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||w_()}function mu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function b_(e){const t=mu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ja(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ja(o)}}}function ja(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function w_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ro{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(t){return lt("not implemented")}_linkToIdToken(t,n){return lt("not implemented")}_getReauthenticationResolver(t){return lt("not implemented")}}async function E_(e,t){return Wt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function I_(e,t){return mr(e,"POST","/v1/accounts:signInWithPassword",Vt(e,t))}/**
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
 */async function S_(e,t){return mr(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}async function T_(e,t){return mr(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}/**
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
 */class ar extends ro{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ar(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ar(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wi(t,n,"signInWithPassword",I_);case"emailLink":return S_(t,{email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wi(t,r,"signUpPassword",E_);case"emailLink":return T_(t,{idToken:n,email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Sn(e,t){return mr(e,"POST","/v1/accounts:signInWithIdp",Vt(e,t))}/**
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
 */const C_="http://localhost";class rn extends ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Xi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Sn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Sn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Sn(t,n)}buildRequest(){const t={requestUri:C_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=hr(n)}return t}}/**
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
 */function R_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A_(e){const t=Mn(Un(e)).link,n=t?Mn(Un(t)).deep_link_id:null,r=Mn(Un(e)).deep_link_id;return(r?Mn(Un(r)).link:null)||r||n||t||e}class so{constructor(t){var n,r,s,i,o,c;const a=Mn(Un(t)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,f=R_((s=a.mode)!==null&&s!==void 0?s:null);V(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=A_(t);try{return new so(n)}catch{return null}}}/**
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
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(t,n){return ar._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=so.parseLink(n);return V(r,"argument-error"),ar._fromEmailAndCode(t,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _u{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _r extends _u{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends _r{constructor(){super("facebook.com")}static credential(t){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends _r{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class kt extends _r{constructor(){super("github.com")}static credential(t){return rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class xt extends _r{constructor(){super("twitter.com")}static credential(t,n){return rn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */async function P_(e,t){return mr(e,"POST","/v1/accounts:signUp",Vt(e,t))}/**
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
 */class sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await ut._fromIdTokenResponse(t,r,s),o=Ha(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Ha(r);return new sn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Ha(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Jr extends Ht{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Jr(t,n,r,s)}}function vu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jr._fromErrorAndOperation(e,i,t,r):i})}async function O_(e,t,n=!1){const r=await or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sn._forOperation(e,"link",r)}/**
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
 */async function k_(e,t,n=!1){const{auth:r}=e;if(tt(r.app))return Promise.reject(ht(r));const s="reauthenticate";try{const i=await or(e,vu(r,s,t,e),n);V(i.idToken,r,"internal-error");const o=to(i.idToken);V(o,r,"internal-error");const{sub:c}=o;return V(e.uid===c,r,"user-mismatch"),sn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
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
 */async function yu(e,t,n=!1){if(tt(e.app))return Promise.reject(ht(e));const r="signIn",s=await vu(e,r,t),i=await sn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function x_(e,t){return yu(cn(e),t)}/**
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
 */async function bu(e){const t=cn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function N_(e,t,n){if(tt(e.app))return Promise.reject(ht(e));const r=cn(e),o=await wi(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",P_).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&bu(e),a}),c=await sn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function L_(e,t,n){return tt(e.app)?Promise.reject(ht(e)):x_(Bt(e),On.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bu(e),r})}function D_(e,t,n,r){return Bt(e).onIdTokenChanged(t,n,r)}function M_(e,t,n){return Bt(e).beforeAuthStateChanged(t,n)}function U_(e){return Bt(e).signOut()}const Yr="__sak";/**
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
 */class wu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const F_=1e3,$_=10;class Eu extends wu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);s_()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,$_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},F_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Eu.type="LOCAL";const j_=Eu;/**
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
 */class Iu extends wu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Iu.type="SESSION";const Su=Iu;/**
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
 */function H_(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new _s(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await H_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
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
 */function io(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class B_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=io("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function V_(e){rt().location.href=e}/**
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
 */function Tu(){return typeof rt().WorkerGlobalScope!="undefined"&&typeof rt().importScripts=="function"}async function W_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function K_(){return Tu()?self:null}/**
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
 */const Cu="firebaseLocalStorageDb",q_=1,Qr="firebaseLocalStorage",Ru="fbase_key";class vr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vs(e,t){return e.transaction([Qr],t?"readwrite":"readonly").objectStore(Qr)}function G_(){const e=indexedDB.deleteDatabase(Cu);return new vr(e).toPromise()}function Ei(){const e=indexedDB.open(Cu,q_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Qr,{keyPath:Ru})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Qr)?t(r):(r.close(),await G_(),t(await Ei()))})})}async function Ba(e,t,n){const r=vs(e,!0).put({[Ru]:t,value:n});return new vr(r).toPromise()}async function J_(e,t){const n=vs(e,!1).get(t),r=await new vr(n).toPromise();return r===void 0?null:r.value}function Va(e,t){const n=vs(e,!0).delete(t);return new vr(n).toPromise()}const Y_=800,Q_=3;class Au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ei(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(K_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await W_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ei();return await Ba(t,Yr,"1"),await Va(t,Yr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ba(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>J_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Va(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=vs(s,!1).getAll();return new vr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Au.type="LOCAL";const X_=Au;new gr(3e4,6e4);/**
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
 */function Z_(e,t){return t?ft(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class oo extends ro{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Sn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Sn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Sn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ev(e){return yu(e.auth,new oo(e),e.bypassAuthState)}function tv(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),k_(n,new oo(e),e.bypassAuthState)}async function nv(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),O_(n,new oo(e),e.bypassAuthState)}/**
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
 */class Pu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ev;case"linkViaPopup":case"linkViaRedirect":return nv;case"reauthViaPopup":case"reauthViaRedirect":return tv;default:qe(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rv=new gr(2e3,1e4);class gn extends Pu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rv.get())};t()}}gn.currentPopupAction=null;/**
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
 */const sv="pendingRedirect",Dr=new Map;class iv extends Pu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Dr.get(this.auth._key());if(!t){try{const r=await ov(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Dr.set(this.auth._key(),t)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ov(e,t){const n=lv(t),r=cv(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function av(e,t){Dr.set(e._key(),t)}function cv(e){return ft(e._redirectPersistence)}function lv(e){return Lr(sv,e.config.apiKey,e.name)}async function uv(e,t,n=!1){if(tt(e.app))return Promise.reject(ht(e));const r=cn(e),s=Z_(r,t),o=await new iv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const fv=10*60*1e3;class dv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ou(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wa(t))}saveEventToCache(t){this.cachedEventUids.add(Wa(t)),this.lastProcessedEventTime=Date.now()}}function Wa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ou({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ou(e);default:return!1}}/**
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
 */async function pv(e,t={}){return Wt(e,"GET","/v1/projects",t)}/**
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
 */const gv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function _v(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pv(e);for(const n of t)try{if(vv(n))return}catch{}qe(e,"unauthorized-domain")}function vv(e){const t=yi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mv.test(n))return!1;if(gv.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yv=new gr(3e4,6e4);function za(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bv(e){return new Promise((t,n)=>{var r,s,i;function o(){za(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{za(),n(nt(e,"network-request-failed"))},timeout:yv.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const c=h_("iframefcb");return rt()[c]=()=>{gapi.load?o():n(nt(e,"network-request-failed"))},gu(`${d_()}?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw Mr=null,t})}let Mr=null;function wv(e){return Mr=Mr||bv(e),Mr}/**
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
 */const Ev=new gr(5e3,15e3),Iv="__/auth/iframe",Sv="emulator/auth/iframe",Tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rv(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?eo(t,Sv):`https://${e.config.authDomain}/${Iv}`,r={apiKey:t.apiKey,appName:e.name,v:pr},s=Cv.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hr(r).slice(1)}`}async function Av(e){const t=await wv(e),n=rt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:Rv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),c=rt().setTimeout(()=>{i(o)},Ev.get());function a(){rt().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ov=500,kv=600,xv="_blank",Nv="http://localhost";class Ka{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lv(e,t,n,r=Ov,s=kv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Pv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(c=cu(l)?xv:n),ou(l)&&(t=t||Nv,a.scrollbars="yes");const u=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(r_(l)&&c!=="_self")return Dv(t||"",c),new Ka(null);const f=window.open(t||"",c,u);V(f,e,"popup-blocked");try{f.focus()}catch{}return new Ka(f)}function Dv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mv="__/auth/handler",Uv="emulator/auth/handler",Fv=encodeURIComponent("fac");async function qa(e,t,n,r,s,i){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:pr,eventId:s};if(t instanceof _u){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Tg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof _r){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await e._getAppCheckToken(),l=a?`#${Fv}=${encodeURIComponent(a)}`:"";return`${$v(e)}?${hr(c).slice(1)}${l}`}function $v({config:e}){return e.emulator?eo(e,Uv):`https://${e.authDomain}/${Mv}`}/**
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
 */const zs="webStorageSupport";class jv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Su,this._completeRedirectFn=uv,this._overrideRedirectResult=av}async _openPopup(t,n,r,s){var i;gt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qa(t,n,r,yi(),s);return Lv(t,o,io())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await qa(t,n,r,yi(),s);return V_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Av(t),r=new dv(t);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(zs,{type:zs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zs];o!==void 0&&n(!!o),qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_v(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return hu()||au()||no()}}const Hv=jv;var Ga="@firebase/auth",Ja="1.7.8";/**
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
 */class Bv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vv(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wv(e){sr(new An("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pu(e)},l=new l_(r,s,i,a);return v_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),sr(new An("auth-internal",t=>{const n=cn(t.getProvider("auth").getImmediate());return(r=>new Bv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Ga,Ja,Vv(e)),wn(Ga,Ja,"esm2017")}/**
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
 */const zv=5*60,Kv=Vl("authIdTokenMaxAge")||zv;let Ya=null;const qv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kv)return;const s=n==null?void 0:n.token;Ya!==s&&(Ya=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gv(e=Cm()){const t=ql(e,"auth");if(t.isInitialized())return t.getImmediate();const n=__(e,{popupRedirectResolver:Hv,persistence:[X_,j_,Su]}),r=Vl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qv(i.toString());M_(n,o,()=>o(n.currentUser)),D_(n,c=>o(c))}}const s=Hl("auth");return s&&y_(n,`http://${s}`),n}function Jv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}u_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wv("Browser");const Yv={apiKey:"AIzaSyAX9d-cxoiHG8wzyB9DLsNhQYiN-ApvSKE",authDomain:"huemul-app.firebaseapp.com",projectId:"huemul-app",storageBucket:"huemul-app.appspot.com",messagingSenderId:"103840484633",appId:"1:103840484633:web:9de49e29e0932cdb4c0988",measurementId:"G-EBLHZLX9QG"},ku=Gl(Yv),mn=Gv(ku);var Qv=({app:e})=>{e.config.globalProperties.$firebase=e,e.config.globalProperties.$auth=mn},Xv=Object.freeze(Object.defineProperty({__proto__:null,default:Qv,auth:mn,app:ku},Symbol.toStringTag,{value:"Module"}));function Zv(e){return Vh(e)===!0?"__q_date|"+e.getTime():Wh(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function ey(e){if(e.length<9)return e;const n=e.substring(0,8),r=e.substring(9);switch(n){case"__q_date":const s=Number(r);return new Date(Number.isNaN(s)===!0?r:s);case"__q_expr":return new RegExp(r);case"__q_numb":return Number(r);case"__q_bool":return Boolean(r==="1");case"__q_strn":return""+r;case"__q_objt":return JSON.parse(r);default:return e}}function ty(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:et,setItem:et,remove:et,removeItem:et,clear:et,isEmpty:()=>!0}}function ny(e){const t=window[e+"Storage"],n=o=>{const c=t.getItem(o);return c?ey(c):null},r=o=>t.getItem(o)!==null,s=(o,c)=>{t.setItem(o,Zv(c))},i=o=>{t.removeItem(o)};return{has:r,hasItem:r,getLength:()=>t.length,getItem:n,getIndex:o=>o<t.length?n(t.key(o)):null,getKey:o=>o<t.length?t.key(o):null,getAll:()=>{let o;const c={},a=t.length;for(let l=0;l<a;l++)o=t.key(l),c[o]=n(o);return c},getAllKeys:()=>{const o=[],c=t.length;for(let a=0;a<c;a++)o.push(t.key(a));return o},set:s,setItem:s,remove:i,removeItem:i,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const xu=Ve.has.webStorage===!1?ty():ny("local"),Ur={install({$q:e}){e.localStorage=xu}};Object.assign(Ur,xu);const Nu=og("auth",{state:()=>({user:null}),getters:{isAuthenticated:e=>Ur.getItem("uid")||!!e.user},actions:{async checkLogin(){this.user=mn.currentUser},async login(e,t){try{const n=await L_(mn,e,t);this.user=n.user,Ur.setItem("uid",n.user.uid)}catch(n){throw console.error("Error en el inicio de sesi\xF3n:",n),n}},async register(e,t){try{const n=await N_(mn,e,t);this.user=n.user}catch(n){throw console.error("Error en el registro:",n),n}},async logout(){try{await U_(mn),this.user=null,Ur.removeItem("uid")}catch(e){throw console.error("Error al cerrar sesi\xF3n:",e),e}}}}),ry=ss({__name:"App",setup(e){const t=Xp(),n=Nu();return Vi(()=>{n.isAuthenticated&&t.currentRoute.value.path==="/"&&t.push("/dashboard")}),(r,s)=>{const i=Qf("router-view");return cl(),ul(i)}}});var Ks=()=>eg();const sy=[{path:"/",component:()=>Xt(()=>import("./MainLayout.ed427fb7.js"),["assets/MainLayout.ed427fb7.js","assets/QBtn.605a7193.js","assets/format.0c802744.js","assets/use-dark.5aea8f52.js"]),children:[{path:"",component:()=>Xt(()=>import("./LoginPage.853fbc51.js"),["assets/LoginPage.853fbc51.js","assets/QBtn.605a7193.js","assets/QPage.3e61b08a.js","assets/use-dark.5aea8f52.js"])},{path:"dashboard",component:()=>Xt(()=>import("./DashboardPage.f858ea33.js"),["assets/DashboardPage.f858ea33.js","assets/DashboardPage.9f8918c3.css","assets/QPage.3e61b08a.js","assets/QBtn.605a7193.js","assets/use-dark.5aea8f52.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/format.0c802744.js"])}]},{path:"/:catchAll(.*)*",component:()=>Xt(()=>import("./ErrorNotFound.50b6d0a9.js"),["assets/ErrorNotFound.50b6d0a9.js","assets/QBtn.605a7193.js","assets/plugin-vue_export-helper.21dcd24c.js"])}];var qs=function({store:e}){const t=Nu(e),r=Yp({scrollBehavior:()=>({left:0,top:0}),routes:sy,history:Sp("/")});return r.beforeEach((s,i,o)=>{s.path==="/dashboard"&&!t.isAuthenticated?o("/"):o()}),r};async function iy(e,t){const n=e(ry);n.use(qh,t);const r=typeof Ks=="function"?await Ks({}):Ks;n.use(r);const s=Pn(typeof qs=="function"?await qs({store:r}):qs);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}var oy={config:{}},ay=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Ii;typeof window!="undefined"&&(typeof Promise!="undefined"?Ii=new Promise(function(e){return window.addEventListener("load",e)}):Ii={then:function(e){return window.addEventListener("load",e)}});function cy(e,t){t===void 0&&(t={});var n=t.registrationOptions;n===void 0&&(n={}),delete t.registrationOptions;var r=function(s){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];t&&t[s]&&t[s].apply(t,i)};"serviceWorker"in navigator&&Ii.then(function(){ay()?(ly(e,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return cr(r,s)})):(Lu(e,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return cr(r,s)}))})}function cr(e,t){navigator.onLine||e("offline"),e("error",t)}function Lu(e,t,n){navigator.serviceWorker.register(e,n).then(function(r){if(t("registered",r),r.waiting){t("updated",r);return}r.onupdatefound=function(){t("updatefound",r);var s=r.installing;s.onstatechange=function(){s.state==="installed"&&(navigator.serviceWorker.controller?t("updated",r):t("cached",r))}}}).catch(function(r){return cr(t,r)})}function ly(e,t,n){fetch(e).then(function(r){r.status===404?(t("error",new Error("Service worker not found at "+e)),Qa()):r.headers.get("content-type").indexOf("javascript")===-1?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),Qa()):Lu(e,t,n)}).catch(function(r){return cr(t,r)})}function Qa(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){return cr(emit,e)})}cy("/sw.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const uy="/";async function fy({app:e,router:t,store:n},r){let s=!1;const i=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},o=a=>{if(s=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const l=i(a);l!==null&&(window.location.href=l)},c=window.location.href.replace(window.location.origin,"");for(let a=0;s===!1&&a<r.length;a++)try{await r[a]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:c,publicPath:uy})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}iy(bh,oy).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([Xt(()=>import("./i18n.bab8eae9.js"),[]),Xt(()=>import("./axios.ab8ebbc1.js"),[]),Xt(()=>Promise.resolve().then(function(){return Xv}),void 0)]).then(r=>{const s=n(r).filter(i=>typeof i=="function");fy(e,s)})});export{kh as $,Sy as A,Qo as B,Ey as C,by as D,Cy as E,Xe as F,Iy as G,dy as H,Or as I,Py as J,an as K,Nu as L,xy as M,Qf as N,cl as O,ul as P,Lf as Q,xd as R,yn as S,cs as T,gy as U,Ry as V,my as W,$h as X,wy as Y,Bf as Z,ci as _,Wc as a,Ji as a0,Hf as a1,Oy as a2,Hh as a3,Xp as a4,dl as a5,zf as a6,Rh as a7,Yu as a8,py as a9,Z as aa,Wd as ab,Fi as ac,ta as ad,hy as ae,Wf as af,Kf as ag,Ls as ah,sr as ai,An as aj,wn as ak,Wl as al,Ht as am,Cm as an,ql as ao,Ly as ap,ae as aq,Dy as ar,Bt as as,pr as at,My as au,Te as av,ku as aw,de as b,Ue as c,ss as d,cc as e,Le as f,Ud as g,Gi as h,Be as i,Ny as j,_y as k,nn as l,Vc as m,et as n,Vi as o,Hi as p,Tn as q,lr as r,bf as s,ky as t,Ay as u,vy as v,Vn as w,Ve as x,yy as y,Ty as z};
