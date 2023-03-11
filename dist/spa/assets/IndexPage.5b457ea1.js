import{c as ie,h as G,Q as ue,k as je,u as Ne,i as Ke,l as Ze}from"./use-router-link.c80326b4.js";import{e as ne,c as y,h as _,d as be,f as We,B as He,g as ee,X as Oe,w as D,o as Ce,a as he,Y as Ye,r as P,Z as Je,$ as Te,a0 as Xe,s as Ge,b as X,m as et,a1 as tt,i as nt,u as re,V as lt,a2 as ot,j as rt,v as qe,_ as ze,F as ae,N as me,J as x,I as C,a3 as Fe,T as K,a4 as J,Q as xe,O as at,M as Z,L as le,G as ut}from"./index.41c271d9.js";import{u as Le,a as Qe,c as se,Q as N,b as oe}from"./QItem.35ff6cc9.js";var it=ie({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:r}}=ee(),l=be(We,ne);if(l===ne)return console.error("QPage needs to be a deep child of QLayout"),ne;if(be(He,ne)===ne)return console.error("QPage needs to be child of QPageContainer"),ne;const f=y(()=>{const v=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof e.styleFn=="function"){const b=l.isContainer.value===!0?l.containerHeight.value:r.screen.height;return e.styleFn(v,b)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-v+"px":r.screen.height===0?v!==0?`calc(100vh - ${v}px)`:"100vh":r.screen.height-v+"px"}}),h=y(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>_("main",{class:h.value,style:f.value},G(t.default))}});const Se=Oe("core",{state:()=>({API_KEY:"61a20f5d41830810abfcc3d15f5f1b2a",units:"metric"}),getters:{},actions:{}}),Re=Se(),Me=Oe("current",{state:()=>({name:null,text:null,lat:null,lon:null,country:null,tempUnit:null,temp:null,tempFeel:null,tempMin:null,tempMax:null,description:null,icon:null,iconUrl:null,humidity:null,pressure:null,windSpeed:null}),getters:{},actions:{getCurrentWeather(){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${Re.API_KEY}&units=${Re.units}`).then(e=>e.json()).then(e=>{console.log(e),this.name=e.name,this.country=e.sys.country,this.temp=e.main.temp,this.tempFeel=e.main.feels_like,this.tempMin=e.main.temp_min,this.tempMax=e.main.temp_max,this.description=e.weather[0].description,this.icon=e.weather[0].icon,this.iconUrl=`https://openweathermap.org/img/wn/${this.icon}@2x.png`,this.humidity=e.main.humidity,this.pressure=e.main.pressure,this.windSpeed=e.wind.speed})}}});function st({validate:e,resetValidation:t,requiresQForm:r}){const l=be(Ye,!1);if(l!==!1){const{props:m,proxy:f}=ee();Object.assign(f,{validate:e,resetValidation:t}),D(()=>m.disable,h=>{h===!0?(typeof t=="function"&&t(),l.unbindComponent(f)):l.bindComponent(f)}),Ce(()=>{m.disable!==!0&&l.bindComponent(f)}),he(()=>{m.disable!==!0&&l.unbindComponent(f)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const Ve=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ae=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,de=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ce=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,pe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Ve.test(e),hexaColor:e=>Ae.test(e),hexOrHexaColor:e=>Be.test(e),rgbColor:e=>de.test(e),rgbaColor:e=>ce.test(e),rgbOrRgbaColor:e=>de.test(e)||ce.test(e),hexOrRgbColor:e=>Ve.test(e)||de.test(e),hexaOrRgbaColor:e=>Ae.test(e)||ce.test(e),anyColor:e=>Be.test(e)||de.test(e)||ce.test(e)},dt=[!0,!1,"ondemand"],ct={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>dt.includes(e)}};function ft(e,t){const{props:r,proxy:l}=ee(),m=P(!1),f=P(null),h=P(null);st({validate:$,resetValidation:R});let v=0,b;const w=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),q=y(()=>r.disable!==!0&&w.value===!0),k=y(()=>r.error===!0||m.value===!0),W=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:f.value);D(()=>r.modelValue,()=>{H()}),D(()=>r.reactiveRules,T=>{T===!0?b===void 0&&(b=D(()=>r.rules,()=>{H(!0)})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),D(e,T=>{T===!0?h.value===null&&(h.value=!1):h.value===!1&&(h.value=!0,q.value===!0&&r.lazyRules!=="ondemand"&&t.value===!1&&F())});function R(){v++,t.value=!1,h.value=null,m.value=!1,f.value=null,F.cancel()}function $(T=r.modelValue){if(q.value!==!0)return!0;const j=++v,Y=t.value!==!0?()=>{h.value=!0}:()=>{},I=(n,u)=>{n===!0&&Y(),m.value=n,f.value=u||null,t.value=!1},O=[];for(let n=0;n<r.rules.length;n++){const u=r.rules[n];let i;if(typeof u=="function"?i=u(T,pe):typeof u=="string"&&pe[u]!==void 0&&(i=pe[u](T)),i===!1||typeof i=="string")return I(!0,i),!1;i!==!0&&i!==void 0&&O.push(i)}return O.length===0?(I(!1),!0):(t.value=!0,Promise.all(O).then(n=>{if(n===void 0||Array.isArray(n)===!1||n.length===0)return j===v&&I(!1),!0;const u=n.find(i=>i===!1||typeof i=="string");return j===v&&I(u!==void 0,u),u===void 0},n=>(j===v&&(console.error(n),I(!0)),!1)))}function H(T){q.value===!0&&r.lazyRules!=="ondemand"&&(h.value===!0||r.lazyRules!==!0&&T!==!0)&&F()}const F=Je($,0);return he(()=>{b!==void 0&&b(),F.cancel()}),Object.assign(l,{resetValidation:R,validate:$}),Te(l,"hasError",()=>k.value),{isDirtyModel:h,hasRules:w,hasError:k,errorMessage:W,validate:$,resetValidation:R}}const $e=/^on[A-Z]/;function vt(e,t){const r={listeners:P({}),attributes:P({})};function l(){const m={},f={};for(const h in e)h!=="class"&&h!=="style"&&$e.test(h)===!1&&(m[h]=e[h]);for(const h in t.props)$e.test(h)===!0&&(f[h]=t.props[h]);r.attributes.value=m,r.listeners.value=f}return Xe(l),l(),r}let ye,fe=0;const E=new Array(256);for(let e=0;e<256;e++)E[e]=(e+256).toString(16).substring(1);const mt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let l=t;l>0;l--)r.push(Math.floor(Math.random()*256));return r}})(),Ee=4096;function gt(){(ye===void 0||fe+16>Ee)&&(fe=0,ye=mt(Ee));const e=Array.prototype.slice.call(ye,fe,fe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,E[e[0]]+E[e[1]]+E[e[2]]+E[e[3]]+"-"+E[e[4]]+E[e[5]]+"-"+E[e[6]]+E[e[7]]+"-"+E[e[8]]+E[e[9]]+"-"+E[e[10]]+E[e[11]]+E[e[12]]+E[e[13]]+E[e[14]]+E[e[15]]}let _e=[],ht=[];function De(e){ht.length===0?e():_e.push(e)}function pt(e){_e=_e.filter(t=>t!==e)}function we(e){return e===void 0?`f_${gt()}`:e}function ke(e){return e!=null&&(""+e).length>0}const yt={...Le,...ct,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},bt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function xt(){const{props:e,attrs:t,proxy:r,vnode:l}=ee();return{isDark:Qe(e,r.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:P(!1),focused:P(!1),hasPopupOpen:!1,splitAttrs:vt(t,l),targetUid:P(we(e.for)),rootRef:P(null),targetRef:P(null),controlRef:P(null)}}function _t(e){const{props:t,emit:r,slots:l,attrs:m,proxy:f}=ee(),{$q:h}=f;let v=null;e.hasValue===void 0&&(e.hasValue=y(()=>ke(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{r("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:d,onFocusout:c}),Object.assign(e,{clearValue:s,onControlFocusin:d,onControlFocusout:c,focus:u}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:b,hasRules:w,hasError:q,errorMessage:k,resetValidation:W}=ft(e.focused,e.innerLoading),R=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=y(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),H=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=y(()=>`q-field row no-wrap items-start q-field--${H.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(R.value===!0?" q-field--float":"")+(j.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(q.value===!0?" q-field--error":"")+(q.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),T=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(q.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),j=y(()=>t.labelSlot===!0||t.label!==void 0),Y=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&q.value!==!0?` text-${t.labelColor}`:"")),I=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:R.value,modelValue:t.modelValue,emitValue:e.emitValue})),O=y(()=>{const o={for:e.targetUid.value};return t.disable===!0?o["aria-disabled"]="true":t.readonly===!0&&(o["aria-readonly"]="true"),o});D(()=>t.for,o=>{e.targetUid.value=we(o)});function n(){const o=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(o===null||o.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==o&&g.focus({preventScroll:!0}))}function u(){De(n)}function i(){pt(n);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function d(o){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",o))}function c(o,g){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",o)),g!==void 0&&g())})}function s(o){Ge(o),h.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",t.modelValue),X(()=>{W(),h.platform.is.mobile!==!0&&(b.value=!1)})}function S(){const o=[];return l.prepend!==void 0&&o.push(_("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:re},l.prepend())),o.push(_("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},p())),q.value===!0&&t.noErrorIcon===!1&&o.push(z("error",[_(ue,{name:h.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(z("inner-loading-append",l.loading!==void 0?l.loading():[_(je,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(z("inner-clearable-append",[_(ue,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),l.append!==void 0&&o.push(_("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:re},l.append())),e.getInnerAppend!==void 0&&o.push(z("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function p(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(_("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):l.rawControl!==void 0?o.push(l.rawControl()):l.control!==void 0&&o.push(_("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(I.value))),j.value===!0&&o.push(_("div",{class:Y.value},G(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(_("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(G(l.default))}function M(){let o,g;q.value===!0?k.value!==null?(o=[_("div",{role:"alert"},k.value)],g=`q--slot-error-${k.value}`):(o=G(l.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[_("div",t.hint)],g=`q--slot-hint-${t.hint}`):(o=G(l.hint),g="q--slot-hint"));const Q=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&Q===!1&&o===void 0)return;const U=_("div",{key:g,class:"q-field__messages col"},o);return _("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:re},[t.hideBottomSpace===!0?U:_(lt,{name:"q-transition--field-message"},()=>U),Q===!0?_("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function z(o,g){return g===null?null:_("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}let L=!1;return et(()=>{L=!0}),tt(()=>{L===!0&&t.autofocus===!0&&f.focus()}),Ce(()=>{nt.value===!0&&t.for===void 0&&(e.targetUid.value=we()),t.autofocus===!0&&f.focus()}),he(()=>{v!==null&&clearTimeout(v)}),Object.assign(f,{focus:u,blur:i}),function(){const g=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...O.value}:O.value;return _("label",{ref:e.rootRef,class:[F.value,m.class],style:m.style,...g},[l.before!==void 0?_("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:re},l.before()):null,_("div",{class:"q-field__inner relative-position col self-stretch"},[_("div",{ref:e.controlRef,class:T.value,tabindex:-1,...e.controlEvents},S()),$.value===!0?M():null]),l.after!==void 0?_("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:re},l.after()):null])}}const Pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ge={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ue=Object.keys(ge);Ue.forEach(e=>{ge[e].regex=new RegExp(ge[e].pattern)});const wt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ue.join("")+"])|(.)","g"),Ie=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),kt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ct(e,t,r,l){let m,f,h,v;const b=P(null),w=P(k());function q(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,R),D(()=>e.mask,n=>{if(n!==void 0)$(w.value,!0);else{const u=I(w.value);R(),e.modelValue!==u&&t("update:modelValue",u)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{b.value===!0&&$(w.value,!0)}),D(()=>e.unmaskedValue,()=>{b.value===!0&&$(w.value)});function k(){if(R(),b.value===!0){const n=j(I(e.modelValue));return e.fillMask!==!1?O(n):n}return e.modelValue}function W(n){if(n<m.length)return m.slice(-n);let u="",i=m;const d=i.indexOf(A);if(d>-1){for(let c=n-i.length;c>0;c--)u+=A;i=i.slice(0,d)+u+i.slice(d)}return i}function R(){if(b.value=e.mask!==void 0&&e.mask.length>0&&q(),b.value===!1){v=void 0,m="",f="";return}const n=Pe[e.mask]===void 0?e.mask:Pe[e.mask],u=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",i=u.replace(Ie,"\\$&"),d=[],c=[],s=[];let S=e.reverseFillMask===!0,p="",M="";n.replace(wt,(g,Q,U,a,V)=>{if(a!==void 0){const B=ge[a];s.push(B),M=B.negate,S===!0&&(c.push("(?:"+M+"+)?("+B.pattern+"+)?(?:"+M+"+)?("+B.pattern+"+)?"),S=!1),c.push("(?:"+M+"+)?("+B.pattern+")?")}else if(U!==void 0)p="\\"+(U==="\\"?"":U),s.push(U),d.push("([^"+p+"]+)?"+p+"?");else{const B=Q!==void 0?Q:V;p=B==="\\"?"\\\\\\\\":B.replace(Ie,"\\\\$&"),s.push(B),d.push("([^"+p+"]+)?"+p+"?")}});const z=new RegExp("^"+d.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),L=c.length-1,o=c.map((g,Q)=>Q===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+g):Q===L?new RegExp("^"+g+"("+(M===""?".":M)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+g));h=s,v=g=>{const Q=z.exec(e.reverseFillMask===!0?g:g.slice(0,s.length+1));Q!==null&&(g=Q.slice(1).join(""));const U=[],a=o.length;for(let V=0,B=g;V<a;V++){const te=o[V].exec(B);if(te===null)break;B=B.slice(te.shift().length),U.push(...te)}return U.length>0?U.join(""):g},m=s.map(g=>typeof g=="string"?g:A).join(""),f=m.split(A).join(u)}function $(n,u,i){const d=l.value,c=d.selectionEnd,s=d.value.length-c,S=I(n);u===!0&&R();const p=j(S),M=e.fillMask!==!1?O(p):p,z=w.value!==M;d.value!==M&&(d.value=M),z===!0&&(w.value=M),document.activeElement===d&&X(()=>{if(M===f){const o=e.reverseFillMask===!0?f.length:0;d.setSelectionRange(o,o,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const o=c-1;F.right(d,o,o);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const o=e.reverseFillMask===!0?c===0?M.length>p.length?1:0:Math.max(0,M.length-(M===f?0:Math.min(p.length,s)+1))+1:c;d.setSelectionRange(o,o,"forward");return}if(e.reverseFillMask===!0)if(z===!0){const o=Math.max(0,M.length-(M===f?0:Math.min(p.length,s+1)));o===1&&c===1?d.setSelectionRange(o,o,"forward"):F.rightReverse(d,o,o)}else{const o=M.length-s;d.setSelectionRange(o,o,"backward")}else if(z===!0){const o=Math.max(0,m.indexOf(A),Math.min(p.length,c)-1);F.right(d,o,o)}else{const o=c-1;F.right(d,o,o)}});const L=e.unmaskedValue===!0?I(M):M;String(e.modelValue)!==L&&r(L,!0)}function H(n,u,i){const d=j(I(n.value));u=Math.max(0,m.indexOf(A),Math.min(d.length,u)),n.setSelectionRange(u,i,"forward")}const F={left(n,u,i,d){const c=m.slice(u-1).indexOf(A)===-1;let s=Math.max(0,u-1);for(;s>=0;s--)if(m[s]===A){u=s,c===!0&&u++;break}if(s<0&&m[u]!==void 0&&m[u]!==A)return F.right(n,0,0);u>=0&&n.setSelectionRange(u,d===!0?i:u,"backward")},right(n,u,i,d){const c=n.value.length;let s=Math.min(c,i+1);for(;s<=c;s++)if(m[s]===A){i=s;break}else m[s-1]===A&&(i=s);if(s>c&&m[i-1]!==void 0&&m[i-1]!==A)return F.left(n,c,c);n.setSelectionRange(d?u:i,i,"forward")},leftReverse(n,u,i,d){const c=W(n.value.length);let s=Math.max(0,u-1);for(;s>=0;s--)if(c[s-1]===A){u=s;break}else if(c[s]===A&&(u=s,s===0))break;if(s<0&&c[u]!==void 0&&c[u]!==A)return F.rightReverse(n,0,0);u>=0&&n.setSelectionRange(u,d===!0?i:u,"backward")},rightReverse(n,u,i,d){const c=n.value.length,s=W(c),S=s.slice(0,i+1).indexOf(A)===-1;let p=Math.min(c,i+1);for(;p<=c;p++)if(s[p-1]===A){i=p,i>0&&S===!0&&i--;break}if(p>c&&s[i-1]!==void 0&&s[i-1]!==A)return F.leftReverse(n,c,c);n.setSelectionRange(d===!0?u:i,i,"forward")}};function T(n){if(t("keydown",n),ot(n)===!0)return;const u=l.value,i=u.selectionStart,d=u.selectionEnd;if(n.keyCode===37||n.keyCode===39){const c=F[(n.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];n.preventDefault(),c(u,i,d,n.shiftKey)}else n.keyCode===8&&e.reverseFillMask!==!0&&i===d?F.left(u,i,d,!0):n.keyCode===46&&e.reverseFillMask===!0&&i===d&&F.rightReverse(u,i,d,!0)}function j(n){if(n==null||n==="")return"";if(e.reverseFillMask===!0)return Y(n);const u=h;let i=0,d="";for(let c=0;c<u.length;c++){const s=n[i],S=u[c];if(typeof S=="string")d+=S,s===S&&i++;else if(s!==void 0&&S.regex.test(s))d+=S.transform!==void 0?S.transform(s):s,i++;else return d}return d}function Y(n){const u=h,i=m.indexOf(A);let d=n.length-1,c="";for(let s=u.length-1;s>=0&&d>-1;s--){const S=u[s];let p=n[d];if(typeof S=="string")c=S+c,p===S&&d--;else if(p!==void 0&&S.regex.test(p))do c=(S.transform!==void 0?S.transform(p):p)+c,d--,p=n[d];while(i===s&&p!==void 0&&S.regex.test(p));else return c}return c}function I(n){return typeof n!="string"||v===void 0?typeof n=="number"?v(""+n):n:v(n)}function O(n){return f.length-n.length<=0?n:e.reverseFillMask===!0&&n.length>0?f.slice(0,-n.length)+n:n+f.slice(n.length)}return{innerValue:w,hasMask:b,moveCursorForPaste:H,updateMaskValue:$,onMaskedKeydown:T}}const St={name:String};function Mt(e){return y(()=>e.name||e.for)}function qt(e,t){function r(){const l=e.modelValue;try{const m="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(l)===l&&("length"in l?Array.from(l):[l]).forEach(f=>{m.items.add(f)}),{files:m.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return r()}):y(r)}const Ft=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Rt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Vt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,At=/[a-z0-9_ -]$/i;function Bt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(rt.is.firefox===!0?At.test(r.data)===!1:Ft.test(r.data)===!0||Rt.test(r.data)===!0||Vt.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}var $t=ie({name:"QInput",inheritAttrs:!1,props:{...yt,...kt,...St,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...bt,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:l}=ee(),{$q:m}=l,f={};let h=NaN,v,b,w=null,q;const k=P(null),W=Mt(e),{innerValue:R,hasMask:$,moveCursorForPaste:H,updateMaskValue:F,onMaskedKeydown:T}=Ct(e,t,z,k),j=qt(e,!0),Y=y(()=>ke(R.value)),I=Bt(p),O=xt(),n=y(()=>e.type==="textarea"||e.autogrow===!0),u=y(()=>n.value===!0||["text","search","url","tel","password"].includes(e.type)),i=y(()=>{const a={...O.splitAttrs.listeners.value,onInput:p,onPaste:S,onChange:o,onBlur:g,onFocus:qe};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=I,$.value===!0&&(a.onKeydown=T),e.autogrow===!0&&(a.onAnimationend=M),a}),d=y(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:W.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return n.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});D(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),D(()=>e.modelValue,a=>{if($.value===!0){if(b===!0&&(b=!1,String(a)===h))return;F(a)}else R.value!==a&&(R.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(v===!0?v=!1:delete f.value));e.autogrow===!0&&X(L)}),D(()=>e.autogrow,a=>{a===!0?X(L):k.value!==null&&r.rows>0&&(k.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&X(L)});function c(){De(()=>{const a=document.activeElement;k.value!==null&&k.value!==a&&(a===null||a.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function s(){k.value!==null&&k.value.select()}function S(a){if($.value===!0&&e.reverseFillMask!==!0){const V=a.target;H(V,V.selectionStart,V.selectionEnd)}t("paste",a)}function p(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const V=a.target.value;if(a.target.qComposing===!0){f.value=V;return}if($.value===!0)F(V,!1,a.inputType);else if(z(V),u.value===!0&&a.target===document.activeElement){const{selectionStart:B,selectionEnd:te}=a.target;B!==void 0&&te!==void 0&&X(()=>{a.target===document.activeElement&&V.indexOf(a.target.value)===0&&a.target.setSelectionRange(B,te)})}e.autogrow===!0&&L()}function M(a){t("animationend",a),L()}function z(a,V){q=()=>{w=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&h!==a&&(h=a,V===!0&&(b=!0),t("update:modelValue",a),X(()=>{h===a&&(h=NaN)})),q=void 0},e.type==="number"&&(v=!0,f.value=a),e.debounce!==void 0?(w!==null&&clearTimeout(w),f.value=a,w=setTimeout(q,e.debounce)):q()}function L(){requestAnimationFrame(()=>{const a=k.value;if(a!==null){const V=a.parentNode.style,{overflow:B}=a.style;m.platform.is.firefox!==!0&&(a.style.overflow="hidden"),V.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",a.style.overflow=B,V.marginBottom=""}})}function o(a){I(a),w!==null&&(clearTimeout(w),w=null),q!==void 0&&q(),t("change",a.target.value)}function g(a){a!==void 0&&qe(a),w!==null&&(clearTimeout(w),w=null),q!==void 0&&q(),v=!1,b=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=R.value!==void 0?R.value:"")})}function Q(){return f.hasOwnProperty("value")===!0?f.value:R.value!==void 0?R.value:""}he(()=>{g()}),Ce(()=>{e.autogrow===!0&&L()}),Object.assign(O,{innerValue:R,fieldClass:y(()=>`q-${n.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:z,hasValue:Y,floatingLabel:y(()=>Y.value===!0||ke(e.displayValue)),getControl:()=>_(n.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...d.value,...i.value,...e.type!=="file"?{value:Q()}:j.value}),getShadowControl:()=>_("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(n.value===!0?"":" text-no-wrap")},[_("span",{class:"invisible"},Q()),_("span",e.shadowText)])});const U=_t(O);return Object.assign(l,{focus:c,select:s,getNativeElement:()=>k.value}),Te(l,"nativeEl",()=>k.value),U}});const Et={id:"search-results",class:"results"},Pt={__name:"SearchLocation",setup(e){const t=Me(),r=Se();let l=P(""),m=P(null);const f=P([]),h=()=>{f.value=[],m.value=null,fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${l.value}&limit=5&appid=${r.API_KEY}`).then(v=>v.json()).then(v=>{console.log(v),v.length===1?(console.warn("new lat: ",v[0].lat),console.warn("new lon: ",v[0].lon),t.lat=v[0].lat,t.lon=v[0].lon,console.warn("currentWeather updated: ",t.lat,t.lon),t.getCurrentWeather()):v.length===2&&v[0].name===v[1].name&&v[0].state===v[1].state&&(t.lat=v[0].lat,t.lon=v[0].lon,console.warn("currentWeather updated: ",t.lat,t.lon),t.getCurrentWeather()),v.forEach(b=>f.value.push(`${b.name}, ${b.state}, ${b.country}`))}),l.value=""};return(v,b)=>(ae(),me(xe,null,[x($t,{rounded:"",dark:"",standout:"","bottom-slots":"",list:"search-results",modelValue:K(l),"onUpdate:modelValue":b[1]||(b[1]=w=>Fe(l)?l.value=w:l=w),onChange:h,label:"Search Location",counter:""},{prepend:C(()=>[x(ue,{name:"place"})]),append:C(()=>[x(ue,{name:"close",onClick:b[0]||(b[0]=w=>Fe(l)?l.value="":l=""),class:"cursor-pointer"})]),_:1},8,["modelValue"]),J("datalist",Et,[(ae(!0),me(xe,null,at(f.value,w=>(ae(),me("option",{key:w.id},Z(w),1))),128))])],64))}};var It=ze(Pt,[["__scopeId","data-v-6d28c295"]]),ve=ie({name:"QAvatar",props:{...Ne,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const r=Ke(e),l=y(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),m=y(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const f=e.icon!==void 0?[_(ue,{name:e.icon})]:void 0;return _("div",{class:l.value,style:r.value},[_("div",{class:"q-avatar__content row flex-center overflow-hidden",style:m.value},Ze(t.default,f))])}}}),Ot=ie({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const r=y(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>_(e.tag,{class:r.value},G(t.default))}}),Tt=ie({name:"QCard",props:{...Le,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=ee(),l=Qe(e,r),m=y(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>_(e.tag,{class:m.value},G(t.default))}});const zt={class:"text-italic"},Lt={class:"flex items-center"},Qt=["src"],Dt={"text-color":"white"},Ut={__name:"CurrentWeather",setup(e){const t=Me();Se();async function r(){if(navigator.geolocation){const l=await new Promise((m,f)=>{navigator.geolocation.getCurrentPosition(m,f)});t.lat=l.coords.latitude,t.lon=l.coords.longitude,t.getCurrentWeather()}}return r(),(l,m)=>(ae(),me(xe,null,[J("h5",null,Z(K(t).name),1),J("h1",null,Z(K(t).temp)+" \xB0C",1),J("p",zt,"feels like "+Z(K(t).tempFeel),1),J("div",Lt,[J("img",{src:K(t).iconUrl,alt:"weather icon",height:"96"},null,8,Qt),J("h4",null,Z(K(t).description),1)]),x(Tt,{class:"my-card bg-primary text-white"},{default:C(()=>[x(Ot,null,{default:C(()=>[x(se,null,{default:C(()=>[x(N,{top:"",avatar:""},{default:C(()=>[x(ve,{color:"secondary","text-color":"white",icon:"thermostat"})]),_:1}),x(N,{side:""},{default:C(()=>[J("strong",Dt,"min "+Z(K(t).tempMin)+" - max "+Z(K(t).tempMax),1)]),_:1})]),_:1}),x(se,null,{default:C(()=>[x(N,{top:"",avatar:""},{default:C(()=>[x(ve,{color:"secondary","text-color":"white",icon:"south_east"})]),_:1}),x(N,null,{default:C(()=>[x(oe,null,{default:C(()=>[le("Pressure")]),_:1})]),_:1}),x(N,{side:""},{default:C(()=>[x(oe,null,{default:C(()=>[le(Z(K(t).pressure),1)]),_:1})]),_:1})]),_:1}),x(se,null,{default:C(()=>[x(N,{top:"",avatar:""},{default:C(()=>[x(ve,{color:"secondary","text-color":"white",icon:"water_drop"})]),_:1}),x(N,null,{default:C(()=>[x(oe,null,{default:C(()=>[le("Humidity")]),_:1})]),_:1}),x(N,{side:""},{default:C(()=>[x(oe,null,{default:C(()=>[le(Z(K(t).humidity),1)]),_:1})]),_:1})]),_:1}),x(se,null,{default:C(()=>[x(N,{top:"",avatar:""},{default:C(()=>[x(ve,{color:"secondary","text-color":"white",icon:"air"})]),_:1}),x(N,null,{default:C(()=>[x(oe,null,{default:C(()=>[le("Wind speed")]),_:1})]),_:1}),x(N,{side:""},{default:C(()=>[x(oe,null,{default:C(()=>[le(Z(K(t).windSpeed),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}};var jt=ze(Ut,[["__scopeId","data-v-1d7d99ab"]]);const Wt={__name:"IndexPage",setup(e){return Me(),(t,r)=>(ae(),ut(it,{class:"flex flex-center column"},{default:C(()=>[x(It),x(jt)]),_:1}))}};export{Wt as default};
