import{j as ve,k as ge,d as X,l as he,h as ke,i as xe,Q as ne}from"./QBtn.23495869.js";import{k as ae,c as B,h as Q,r as H,w as L,p as U,$ as ye,m as we,o as ce,a0 as Me,g as de,C as le,I as be,Z as Se,a1 as Ce,G as oe,a2 as Fe,i as Ve,a3 as Ee,d as Ae,a4 as Re,L as Pe,O as qe,P as Te,Q as $,f as z,R as pe,a5 as ee}from"./index.28d89c9c.js";import{u as ze,a as Oe,b as Be,c as Ie,d as _e,e as je,f as re,g as fe,h as Ne,Q as $e,i as te,j as Ze}from"./QPage.140d98cb.js";import"./use-dark.4543c1a4.js";var Ke=ae({name:"QAvatar",props:{...ve,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:S}){const A=ge(e),M=B(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),i=B(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const u=e.icon!==void 0?[Q(X,{name:e.icon})]:void 0;return Q("div",{class:M.value,style:A.value},[Q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},he(S.default,u))])}}});const ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},J={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},me=Object.keys(J);me.forEach(e=>{J[e].regex=new RegExp(J[e].pattern)});const Qe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+me.join("")+"])|(.)","g"),se=/[.*+?^${}()|[\]\\]/g,b=String.fromCharCode(1),Le={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function De(e,S,A,M){let i,u,h,R,O,g;const k=H(null),r=H(s());function P(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,I),L(()=>e.mask,l=>{if(l!==void 0)N(r.value,!0);else{const a=p(r.value);I(),e.modelValue!==a&&S("update:modelValue",a)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&N(r.value,!0)}),L(()=>e.unmaskedValue,()=>{k.value===!0&&N(r.value)});function s(){if(I(),k.value===!0){const l=E(p(e.modelValue));return e.fillMask!==!1?G(l):l}return e.modelValue}function F(l){if(l<i.length)return i.slice(-l);let a="",o=i;const n=o.indexOf(b);if(n!==-1){for(let d=l-o.length;d>0;d--)a+=b;o=o.slice(0,n)+a+o.slice(n)}return o}function I(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&P(),k.value===!1){R=void 0,i="",u="";return}const l=ie[e.mask]===void 0?e.mask:ie[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",o=a.replace(se,"\\$&"),n=[],d=[],c=[];let w=e.reverseFillMask===!0,f="",m="";l.replace(Qe,(C,t,x,Z,j)=>{if(Z!==void 0){const q=J[Z];c.push(q),m=q.negate,w===!0&&(d.push("(?:"+m+"+)?("+q.pattern+"+)?(?:"+m+"+)?("+q.pattern+"+)?"),w=!1),d.push("(?:"+m+"+)?("+q.pattern+")?")}else if(x!==void 0)f="\\"+(x==="\\"?"":x),c.push(x),n.push("([^"+f+"]+)?"+f+"?");else{const q=t!==void 0?t:j;f=q==="\\"?"\\\\\\\\":q.replace(se,"\\\\$&"),c.push(q),n.push("([^"+f+"]+)?"+f+"?")}});const D=new RegExp("^"+n.join("")+"("+(f===""?".":"[^"+f+"]")+"+)?"+(f===""?"":"["+f+"]*")+"$"),K=d.length-1,v=d.map((C,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+o+"*"+C):t===K?new RegExp("^"+C+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":o+"*")):new RegExp("^"+C));h=c,R=C=>{const t=D.exec(e.reverseFillMask===!0?C:C.slice(0,c.length+1));t!==null&&(C=t.slice(1).join(""));const x=[],Z=v.length;for(let j=0,q=C;j<Z;j++){const Y=v[j].exec(q);if(Y===null)break;q=q.slice(Y.shift().length),x.push(...Y)}return x.length!==0?x.join(""):C},i=c.map(C=>typeof C=="string"?C:b).join(""),u=i.split(b).join(a)}function N(l,a,o){const n=M.value,d=n.selectionEnd,c=n.value.length-d,w=p(l);a===!0&&I();const f=E(w),m=e.fillMask!==!1?G(f):f,D=r.value!==m;n.value!==m&&(n.value=m),D===!0&&(r.value=m),document.activeElement===n&&U(()=>{if(m===u){const v=e.reverseFillMask===!0?u.length:0;n.setSelectionRange(v,v,"forward");return}if(o==="insertFromPaste"&&e.reverseFillMask!==!0){const v=n.selectionEnd;let C=d-1;for(let t=O;t<=C&&t<v;t++)i[t]!==b&&C++;T.right(n,C);return}if(["deleteContentBackward","deleteContentForward"].indexOf(o)!==-1){const v=e.reverseFillMask===!0?d===0?m.length>f.length?1:0:Math.max(0,m.length-(m===u?0:Math.min(f.length,c)+1))+1:d;n.setSelectionRange(v,v,"forward");return}if(e.reverseFillMask===!0)if(D===!0){const v=Math.max(0,m.length-(m===u?0:Math.min(f.length,c+1)));v===1&&d===1?n.setSelectionRange(v,v,"forward"):T.rightReverse(n,v)}else{const v=m.length-c;n.setSelectionRange(v,v,"backward")}else if(D===!0){const v=Math.max(0,i.indexOf(b),Math.min(f.length,d)-1);T.right(n,v)}else{const v=d-1;T.right(n,v)}});const K=e.unmaskedValue===!0?p(m):m;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&A(K,!0)}function W(l,a,o){const n=E(p(l.value));a=Math.max(0,i.indexOf(b),Math.min(n.length,a)),O=a,l.setSelectionRange(a,o,"forward")}const T={left(l,a){const o=i.slice(a-1).indexOf(b)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n]===b){a=n,o===!0&&a++;break}if(n<0&&i[a]!==void 0&&i[a]!==b)return T.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const o=l.value.length;let n=Math.min(o,a+1);for(;n<=o;n++)if(i[n]===b){a=n;break}else i[n-1]===b&&(a=n);if(n>o&&i[a-1]!==void 0&&i[a-1]!==b)return T.left(l,o);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const o=F(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(o[n-1]===b){a=n;break}else if(o[n]===b&&(a=n,n===0))break;if(n<0&&o[a]!==void 0&&o[a]!==b)return T.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const o=l.value.length,n=F(o),d=n.slice(0,a+1).indexOf(b)===-1;let c=Math.min(o,a+1);for(;c<=o;c++)if(n[c-1]===b){a=c,a>0&&d===!0&&a--;break}if(c>o&&n[a-1]!==void 0&&n[a-1]!==b)return T.leftReverse(l,o);l.setSelectionRange(a,a,"forward")}};function y(l){S("click",l),g=void 0}function V(l){if(S("keydown",l),ye(l)===!0||l.altKey===!0)return;const a=M.value,o=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(g=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&g===void 0&&(g=a.selectionDirection==="forward"?o:n);const d=T[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),d(a,g===o?n:o),l.shiftKey){const c=a.selectionStart;a.setSelectionRange(Math.min(g,c),Math.max(g,c),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&o===n?(T.left(a,o),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&o===n&&(T.rightReverse(a,n),a.setSelectionRange(o,a.selectionEnd,"forward"))}function E(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return _(l);const a=h;let o=0,n="";for(let d=0;d<a.length;d++){const c=l[o],w=a[d];if(typeof w=="string")n+=w,c===w&&o++;else if(c!==void 0&&w.regex.test(c))n+=w.transform!==void 0?w.transform(c):c,o++;else return n}return n}function _(l){const a=h,o=i.indexOf(b);let n=l.length-1,d="";for(let c=a.length-1;c>=0&&n!==-1;c--){const w=a[c];let f=l[n];if(typeof w=="string")d=w+d,f===w&&n--;else if(f!==void 0&&w.regex.test(f))do d=(w.transform!==void 0?w.transform(f):f)+d,n--,f=l[n];while(o===c&&f!==void 0&&w.regex.test(f));else return d}return d}function p(l){return typeof l!="string"||R===void 0?typeof l=="number"?R(""+l):l:R(l)}function G(l){return u.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?u.slice(0,-l.length)+l:l+u.slice(l.length)}return{innerValue:r,hasMask:k,moveCursorForPaste:W,updateMaskValue:N,onMaskedKeydown:V,onMaskedClick:y}}function Ue(e,S){function A(){const M=e.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(M)===M&&("length"in M?Array.from(M):[M]).forEach(u=>{i.items.add(u)}),{files:i.files}}catch{return{files:void 0}}}return S===!0?B(()=>{if(e.type==="file")return A()}):B(A)}var ue=ae({name:"QInput",inheritAttrs:!1,props:{...ze,...Le,...Oe,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Be,"paste","change","keydown","click","animationend"],setup(e,{emit:S,attrs:A}){const{proxy:M}=de(),{$q:i}=M,u={};let h=NaN,R,O,g=null,k;const r=H(null),P=Ie(e),{innerValue:s,hasMask:F,moveCursorForPaste:I,updateMaskValue:N,onMaskedKeydown:W,onMaskedClick:T}=De(e,S,f,r),y=Ue(e,!0),V=B(()=>re(s.value)),E=Ne(c),_=_e({changeEvent:!0}),p=B(()=>e.type==="textarea"||e.autogrow===!0),G=B(()=>p.value===!0||["text","search","url","tel","password"].includes(e.type)),l=B(()=>{const t={..._.splitAttrs.listeners.value,onInput:c,onPaste:d,onChange:D,onBlur:K,onFocus:le};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=E,F.value===!0&&(t.onKeydown=W,t.onClick=T),e.autogrow===!0&&(t.onAnimationend=w),t}),a=B(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:P.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return p.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});L(()=>e.type,()=>{r.value&&(r.value.value=e.modelValue)}),L(()=>e.modelValue,t=>{if(F.value===!0){if(O===!0&&(O=!1,String(t)===h))return;N(t)}else s.value!==t&&(s.value=t,e.type==="number"&&u.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete u.value));e.autogrow===!0&&U(m)}),L(()=>e.autogrow,t=>{t===!0?U(m):r.value!==null&&A.rows>0&&(r.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&U(m)});function o(){fe(()=>{const t=document.activeElement;r.value!==null&&r.value!==t&&(t===null||t.id!==_.targetUid.value)&&r.value.focus({preventScroll:!0})})}function n(){r.value!==null&&r.value.select()}function d(t){if(F.value===!0&&e.reverseFillMask!==!0){const x=t.target;I(x,x.selectionStart,x.selectionEnd)}S("paste",t)}function c(t){if(!t||!t.target)return;if(e.type==="file"){S("update:modelValue",t.target.files);return}const x=t.target.value;if(t.target.qComposing===!0){u.value=x;return}if(F.value===!0)N(x,!1,t.inputType);else if(f(x),G.value===!0&&t.target===document.activeElement){const{selectionStart:Z,selectionEnd:j}=t.target;Z!==void 0&&j!==void 0&&U(()=>{t.target===document.activeElement&&x.indexOf(t.target.value)===0&&t.target.setSelectionRange(Z,j)})}e.autogrow===!0&&m()}function w(t){S("animationend",t),m()}function f(t,x){k=()=>{g=null,e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==t&&h!==t&&(h=t,x===!0&&(O=!0),S("update:modelValue",t),U(()=>{h===t&&(h=NaN)})),k=void 0},e.type==="number"&&(R=!0,u.value=t),e.debounce!==void 0?(g!==null&&clearTimeout(g),u.value=t,g=setTimeout(k,e.debounce)):k()}function m(){requestAnimationFrame(()=>{const t=r.value;if(t!==null){const x=t.parentNode.style,{scrollTop:Z}=t,{overflowY:j,maxHeight:q}=i.platform.is.firefox===!0?{}:window.getComputedStyle(t),Y=j!==void 0&&j!=="scroll";Y===!0&&(t.style.overflowY="hidden"),x.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",Y===!0&&(t.style.overflowY=parseInt(q,10)<t.scrollHeight?"auto":"hidden"),x.marginBottom="",t.scrollTop=Z}})}function D(t){E(t),g!==null&&(clearTimeout(g),g=null),k!==void 0&&k(),S("change",t.target.value)}function K(t){t!==void 0&&le(t),g!==null&&(clearTimeout(g),g=null),k!==void 0&&k(),R=!1,O=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{r.value!==null&&(r.value.value=s.value!==void 0?s.value:"")})}function v(){return u.hasOwnProperty("value")===!0?u.value:s.value!==void 0?s.value:""}we(()=>{K()}),ce(()=>{e.autogrow===!0&&m()}),Object.assign(_,{innerValue:s,fieldClass:B(()=>`q-${p.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:B(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:r,emitValue:f,hasValue:V,floatingLabel:B(()=>V.value===!0&&(e.type!=="number"||isNaN(s.value)===!1)||re(e.displayValue)),getControl:()=>Q(p.value===!0?"textarea":"input",{ref:r,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:v()}:y.value}),getShadowControl:()=>Q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(p.value===!0?"":" text-no-wrap")},[Q("span",{class:"invisible"},v()),Q("span",e.shadowText)])});const C=je(_);return Object.assign(M,{focus:o,select:n,getNativeElement:()=>r.value}),Me(M,"nativeEl",()=>r.value),C}}),He=ae({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:S,emit:A}){const M=de(),i=H(null);let u=0;const h=[];function R(s){const F=typeof s=="boolean"?s:e.noErrorFocus!==!0,I=++u,N=(y,V)=>{A(`validation${y===!0?"Success":"Error"}`,V)},W=y=>{const V=y.validate();return typeof V.then=="function"?V.then(E=>({valid:E,comp:y}),E=>({valid:!1,comp:y,err:E})):Promise.resolve({valid:V,comp:y})};return(e.greedy===!0?Promise.all(h.map(W)).then(y=>y.filter(V=>V.valid!==!0)):h.reduce((y,V)=>y.then(()=>W(V).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(y=>[y])).then(y=>{if(y===void 0||y.length===0)return I===u&&N(!0),!0;if(I===u){const{comp:V,err:E}=y[0];if(E!==void 0&&console.error(E),N(!1,V),F===!0){const _=y.find(({comp:p})=>typeof p.focus=="function"&&xe(p.$)===!1);_!==void 0&&_.comp.focus()}}return!1})}function O(){u++,h.forEach(s=>{typeof s.resetValidation=="function"&&s.resetValidation()})}function g(s){s!==void 0&&oe(s);const F=u+1;R().then(I=>{F===u&&I===!0&&(e.onSubmit!==void 0?A("submit",s):s!==void 0&&s.target!==void 0&&typeof s.target.submit=="function"&&s.target.submit())})}function k(s){s!==void 0&&oe(s),A("reset"),U(()=>{O(),e.autofocus===!0&&e.noResetFocus!==!0&&r()})}function r(){fe(()=>{if(i.value===null)return;const s=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),F=>F.tabIndex!==-1);s!=null&&s.focus({preventScroll:!0})})}be(Fe,{bindComponent(s){h.push(s)},unbindComponent(s){const F=h.indexOf(s);F!==-1&&h.splice(F,1)}});let P=!1;return Se(()=>{P=!0}),Ce(()=>{P===!0&&e.autofocus===!0&&r()}),ce(()=>{e.autofocus===!0&&r()}),Object.assign(M.proxy,{validate:R,resetValidation:O,submit:g,reset:k,focus:r,getValidationComponents:()=>h}),()=>Q("form",{class:"q-form",ref:i,onSubmit:g,onReset:k},ke(S.default))}});function We(){return Ve(Ee)}const et=Ae({__name:"LoginPage",setup(e){const S=We(),A=Re(),M=Pe(),i=H(""),u=H(""),h=H(!0);M.checkLogin().then(()=>{M.isAuthenticated&&A.push("/dashboard")});const R=k=>/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(k)||"Correo electr\xF3nico inv\xE1lido",O=async()=>{try{await M.login(i.value,u.value),A.push("/dashboard")}catch{S.notify({color:"negative",message:"Error de autenticaci\xF3n. Por favor, verifica tus credenciales.",icon:"report_problem"})}},g=()=>{S.notify({color:"info",message:"Funci\xF3n de recuperaci\xF3n de contrase\xF1a no implementada.",icon:"info"})};return(k,r)=>(qe(),Te($e,{class:"auth-container"},{default:$(()=>[z(Ze,{class:"auth-card"},{default:$(()=>[z(te,{class:"text-center"},{default:$(()=>[z(Ke,{size:"80px","font-size":"40px",color:"primary","text-color":"white"},{default:$(()=>r[3]||(r[3]=[pe(" GW ")])),_:1}),r[4]||(r[4]=ee("div",{class:"text-h5 q-mt-md text-primary"},"GreenWiser App",-1)),r[5]||(r[5]=ee("div",{class:"text-subtitle1 q-mt-sm"},"Monitoreo de Recolecci\xF3n de residuos",-1))]),_:1}),z(te,null,{default:$(()=>[z(He,{onSubmit:O,class:"q-gutter-md"},{default:$(()=>[z(ue,{filled:"",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=P=>i.value=P),label:"Correo electr\xF3nico",type:"email",rules:[P=>!!P||"El correo es requerido",R]},{prepend:$(()=>[z(X,{name:"email",color:"primary"})]),_:1},8,["modelValue","rules"]),z(ue,{filled:"",modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=P=>u.value=P),label:"Contrase\xF1a",type:h.value?"password":"text",rules:[P=>!!P||"La contrase\xF1a es requerida"]},{prepend:$(()=>[z(X,{name:"lock",color:"primary"})]),append:$(()=>[z(X,{name:h.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:r[1]||(r[1]=P=>h.value=!h.value),color:"primary"},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),ee("div",null,[z(ne,{label:"Iniciar sesi\xF3n",type:"submit",color:"primary",class:"full-width q-py-sm"})])]),_:1})]),_:1}),z(te,{class:"text-center q-pa-none"},{default:$(()=>[z(ne,{flat:"",color:"primary",label:"\xBFOlvidaste tu contrase\xF1a?",onClick:g})]),_:1})]),_:1})]),_:1}))}});export{et as default};
