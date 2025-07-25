!function(t){function e(e){for(var n,r,i=e[0],s=e[1],a=0,c=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(l&&l(e);c.length;)c.shift()()}var n={},o={0:0};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(t){return r.p+"VAADIN/build/vaadin-"+({}[t]||t)+"-"+{1:"9dd14f5d529fc44172c2",2:"7b563ffec3b112c18e22",3:"18369501df6164f6c2e9",4:"60d05a7fd1f23ecbe699",5:"f4cc105ac53a929ea87d",6:"6120fef6214af5855f9b"}[t]+".cache.js"}(t);var l=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=s;r(r.s=20)}([function(t,e,n){"use strict";var o,r;n.d(e,"a",(function(){return r})),function(t){t.CONNECTED="connected",t.LOADING="loading",t.RECONNECTING="reconnecting",t.CONNECTION_LOST="connection-lost"}(r||(r={}));class i{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(t=>{var e;null===(e=null==t?void 0:t.active)||void 0===e||e.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=r.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(r.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(r.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,0===this.loadingCount&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const e=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const t of this.stateChangeListeners)t(e,this.connectionState)}}get online(){return this.connectionState===r.CONNECTED||this.connectionState===r.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){"object"==typeof t.data&&"Vaadin.ServiceWorker.isConnectionLost"===t.data.id&&(!0===t.data.result&&(this.state=r.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const s=window;(null===(o=s.Vaadin)||void 0===o?void 0:o.connectionState)||(s.Vaadin=s.Vaadin||{},s.Vaadin.connectionState=new i(navigator.onLine?r.CONNECTED:r.CONNECTION_LOST))},function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));n(6);var o=n(2),r=n(5);n.d(e,"a",(function(){return o.c}));let i=0;const s={},a=(t,e,n)=>{const a=n&&n.moduleId||"custom-style-module-"+i++;Array.isArray(e)||(e=e?[e]:[]);const l=e.map(t=>{if(!(t instanceof o.a))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!s[t]){const e=document.createElement("template");e.innerHTML=`<style>${t.toString()}</style>`,s[t]=Object(r.c)(e)[0]}return s[t].textContent}),c=document.createElement("dom-module");if(t){const e=customElements.get(t);e&&Object.prototype.hasOwnProperty.call(e,"__finalized")&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),c.setAttribute("theme-for",t)}const d=n&&n.include||[];c.innerHTML=`\n    <template>\n      ${d.map(t=>`<style include=${t}></style>`)}\n      ${l.length?`<style>${l.join("\n")}</style>`:""}\n    </template>\n  `,c.register(a)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return S.b})),n.d(e,"e",(function(){return S.d})),n.d(e,"f",(function(){return S.e})),n.d(e,"g",(function(){return S.f})),n.d(e,"b",(function(){return C}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new a(n,t,i)},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const u=window,h=u.trustedTypes,p=h?h.emptyScript:"",m=u.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v},y="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const o=this._$Ep(n,e);void 0!==o&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const n=document.createElement("style"),r=o.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=g){var o;const r=this.constructor._$Ep(t,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==(null===(o=n.converter)||void 0===o?void 0:o.toAttribute)?n.converter:f).toAttribute(e,n.type);this._$El=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$El=null}}_$AK(t,e){var n;const o=this.constructor,r=o._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=o.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:f;this._$El=r,this[r]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,n){let o=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(n)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}_[y]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:_}),(null!==(d=u.reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.6.3");var w,b,S=n(3);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Object(S.e)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return S.c}}C.finalized=!0,C._$litElement$=!0,null===(w=globalThis.litElementHydrateSupport)||void 0===w||w.call(globalThis,{LitElement:C});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:C});(null!==(b=globalThis.litElementVersions)&&void 0!==b?b:globalThis.litElementVersions=[]).push("3.3.3")},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var o;n.d(e,"a",(function(){return F})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return W})),n.d(e,"f",(function(){return $}));const r=window,i=r.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,c="?"+l,d=`<${c}>`,u=document,h=()=>u.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,f=t=>m(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,_=/>/g,w=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,S=/"/g,C=/^(?:script|style|textarea|title)$/i,E=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),x=E(1),$=E(2),A=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),O=new WeakMap,R=u.createTreeWalker(u,129,null,!1);function k(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const L=(t,e)=>{const n=t.length-1,o=[];let r,i=2===e?"<svg>":"",s=g;for(let e=0;e<n;e++){const n=t[e];let c,u,h=-1,p=0;for(;p<n.length&&(s.lastIndex=p,u=s.exec(n),null!==u);)p=s.lastIndex,s===g?"!--"===u[1]?s=y:void 0!==u[1]?s=_:void 0!==u[2]?(C.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=w):void 0!==u[3]&&(s=w):s===w?">"===u[0]?(s=null!=r?r:g,h=-1):void 0===u[1]?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=void 0===u[3]?w:'"'===u[3]?S:b):s===S||s===b?s=w:s===y||s===_?s=g:(s=w,r=void 0);const m=s===w&&t[e+1].startsWith("/>")?" ":"";i+=s===g?n+d:h>=0?(o.push(c),n.slice(0,h)+a+n.slice(h)+l+m):n+l+(-2===h?(o.push(void 0),e):m)}return[k(t,i+(t[n]||"<?>")+(2===e?"</svg>":"")),o]};class N{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let r=0,s=0;const d=t.length-1,u=this.parts,[p,m]=L(t,e);if(this.el=N.createElement(p,n),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=R.nextNode())&&u.length<d;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(a)||e.startsWith(l)){const n=m[s++];if(t.push(e),void 0!==n){const t=o.getAttribute(n.toLowerCase()+a).split(l),e=/([.?@])?(.*)/.exec(n);u.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?D:"@"===e[1]?V:M})}else u.push({type:6,index:r})}for(const e of t)o.removeAttribute(e)}if(C.test(o.tagName)){const t=o.textContent.split(l),e=t.length-1;if(e>0){o.textContent=i?i.emptyScript:"";for(let n=0;n<e;n++)o.append(t[n],h()),R.nextNode(),u.push({type:2,index:++r});o.append(t[e],h())}}}else if(8===o.nodeType)if(o.data===c)u.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(l,t+1));)u.push({type:7,index:r}),t+=l.length-1}r++}}static createElement(t,e){const n=u.createElement("template");return n.innerHTML=t,n}}function P(t,e,n=t,o){var r,i,s,a;if(e===A)return e;let l=void 0!==o?null===(r=n._$Co)||void 0===r?void 0:r[o]:n._$Cl;const c=p(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,n,o)),void 0!==o?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:n._$Cl=l),void 0!==l&&(e=P(t,l._$AS(t,e.values),l,o)),e}class I{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:o}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(n,!0);R.currentNode=r;let i=R.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new j(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new H(i,this,t)),this._$AV.push(e),l=o[++a]}s!==(null==l?void 0:l.index)&&(i=R.nextNode(),s++)}return R.currentNode=u,r}v(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class j{constructor(t,e,n,o){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cp=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),p(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==A&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=N.createElement(k(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(n);else{const t=new I(r,this),e=t.u(this.options);t.v(n),this.$(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new N(t)),e}T(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,o=0;for(const r of t)o===e.length?e.push(n=new j(this.k(h()),this.k(h()),this,this.options)):n=e[o],n._$AI(r),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class M{constructor(t,e,n,o,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,o){const r=this.strings;let i=!1;if(void 0===r)t=P(this,t,e,0),i=!p(t)||t!==this._$AH&&t!==A,i&&(this._$AH=t);else{const o=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=P(this,o[n+s],e,s),a===A&&(a=this._$AH[s]),i||(i=!p(a)||a!==this._$AH[s]),a===T?t=T:t!==T&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}i&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const B=i?i.emptyScript:"";class D extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class V extends M{constructor(t,e,n,o,r){super(t,e,n,o,r),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=P(this,t,e,0))&&void 0!==n?n:T)===A)return;const o=this._$AH,r=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==T&&(o===T||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const F={O:a,P:l,A:c,C:1,M:L,L:I,R:f,D:P,I:j,V:M,H:D,N:V,U:U,F:H},z=r.litHtmlPolyfillSupport;null==z||z(N,j),(null!==(o=r.litHtmlVersions)&&void 0!==o?o:r.litHtmlVersions=[]).push("2.8.0");const W=(t,e,n)=>{var o,r;const i=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:e;let s=i._$litPart$;if(void 0===s){const t=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;i._$litPart$=s=new j(e.insertBefore(h(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s}},function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o,r,i=/(url\()([^)]*)(\))/g,s=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if(void 0===o){o=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",o="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),o?new URL(t,e).href:(r||(r=document.implementation.createHTMLDocument("temp"),r.base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t)}function l(t,e){return t.replace(i,(function(t,n,o,r){return n+"'"+a(o.replace(/["']/g,""),e)+"'"+r}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h}));var o=n(6),r=n(4);function i(t){return o.a.import(t)}function s(t){let e=t.body?t.body:t;const n=Object(r.b)(e.textContent,t.baseURI),o=document.createElement("style");return o.textContent=n,o}function a(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...l(e[t]));return n}function l(t){const e=i(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...u(e));const n=e.querySelector("template");n&&t.push(...c(n,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const n=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let i=o[t],s=i.getAttribute("include");s&&n.push(...a(s).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(i.textContent=Object(r.b)(i.textContent,e)),n.push(i)}t._styles=n}return t._styles}function d(t){let e=i(t);return e?u(e):[]}function u(t){const e=[],n=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<n.length;t++){let o=n[t];if(o.import){const t=o.import,n=o.hasAttribute("shady-unscoped");if(n&&!t._unscopedStyle){const e=s(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=s(t));e.push(n?t._unscopedStyle:t._style)}}return e}function h(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=p(e[t]);return n}function p(t){let e=i(t);if(e&&void 0===e._cssText){let t=m(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const o=c(t,e);for(let t=0;t<o.length;t++){let e=o[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function m(t){let e="",n=u(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(11);var o=n(4),r=n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i={},s={};function a(t,e){i[t]=s[t.toLowerCase()]=e}function l(t){return i[t]||s[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,o){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(o.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(o.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(r.f&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=i,customElements.define("dom-module",c)},function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,i;function s(t){r=(!t||!t.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=r},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var o=n(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function i(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function s(t){const e=o.b.test(t)||o.c.test(t);return o.b.lastIndex=0,o.c.lastIndex=0,e}},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return u}));n(11);var o=n(4);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let i=Object(o.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;let l=!1;let c=!1;let d=!1;let u=!1},function(t,e,n){"use strict";
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class o extends HTMLElement{static get version(){return"21.0.5"}}customElements.define("vaadin-lumo-styles",o)},function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):r(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements;var a=n(3),l=n(9);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c=Object(l.c)(class extends l.a{constructor(t){var e;if(super(t),t.type!==l.b.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(n=this.nt)||void 0===n?void 0:n.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach(t=>{t in e||(r.remove(t),this.it.delete(t))});for(const t in e){const n=!!e[t];n===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(n?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return a.c}});var d=n(0),u=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};class h extends o.b{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState="",this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=d.a.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>this.expanded=!1,this.expandedDuration)}}static create(){var t,e;const n=window;return(null===(t=n.Vaadin)||void 0===t?void 0:t.connectionIndicator)||(n.Vaadin=n.Vaadin||{},n.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(n.Vaadin.connectionIndicator)),null===(e=n.Vaadin)||void 0===e?void 0:e.connectionIndicator}render(){return o.d`
      <div class="v-loading-indicator ${this.loadingBarState}" style="${this.getLoadingBarStyle()}"></div>

      <div
        class="v-status-message ${c({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const e=window;(null===(t=e.Vaadin)||void 0===t?void 0:t.connectionState)&&(this.connectionStateStore=e.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const e=null===(t=this.connectionStateStore)||void 0===t?void 0:t.state;return this.offline=e===d.a.CONNECTION_LOST,this.reconnecting=e===d.a.RECONNECTING,this.updateLoading(e===d.a.LOADING),!this.loading&&(e!==this.lastMessageState&&(this.lastMessageState=e,!0))}updateLoading(t){this.loading=t,this.loadingBarState="",this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>this.loadingBarState="first",this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>this.loadingBarState="second",this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>this.loadingBarState="third",this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById("css-loading-indicator")){const t=document.createElement("style");t.id="css-loading-indicator",t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById("css-loading-indicator");t&&document.head.removeChild(t)}}getDefaultStyle(){return"\n      @keyframes v-progress-start {\n        0% {\n          width: 0%;\n        }\n        100% {\n          width: 50%;\n        }\n      }\n      @keyframes v-progress-delay {\n        0% {\n          width: 50%;\n        }\n        100% {\n          width: 90%;\n        }\n      }\n      @keyframes v-progress-wait {\n        0% {\n          width: 90%;\n          height: 4px;\n        }\n        3% {\n          width: 91%;\n          height: 7px;\n        }\n        100% {\n          width: 96%;\n          height: 7px;\n        }\n      }\n      @keyframes v-progress-wait-pulse {\n        0% {\n          opacity: 1;\n        }\n        50% {\n          opacity: 0.1;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n      .v-loading-indicator,\n      .v-status-message {\n        position: fixed;\n        z-index: 251;\n        left: 0;\n        right: auto;\n        top: 0;\n        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));\n        transition: none;\n      }\n      .v-loading-indicator {\n        width: 50%;\n        height: 4px;\n        opacity: 1;\n        pointer-events: none;\n        animation: v-progress-start 1000ms 200ms both;\n      }\n      .v-loading-indicator[style*='none'] {\n        display: block !important;\n        width: 100%;\n        opacity: 0;\n        animation: none;\n        transition: opacity 500ms 300ms, width 300ms;\n      }\n      .v-loading-indicator.second {\n        width: 90%;\n        animation: v-progress-delay 3.8s forwards;\n      }\n      .v-loading-indicator.third {\n        width: 96%;\n        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;\n      }\n\n      vaadin-connection-indicator[offline] .v-loading-indicator,\n      vaadin-connection-indicator[reconnecting] .v-loading-indicator {\n        display: none;\n      }\n\n      .v-status-message {\n        opacity: 0;\n        width: 100%;\n        max-height: var(--status-height-collapsed, 8px);\n        overflow: hidden;\n        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));\n        color: var(\n          --status-text-color-online,\n          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))\n        );\n        font-size: 0.75rem;\n        font-weight: 600;\n        line-height: 1;\n        transition: all 0.5s;\n        padding: 0 0.5em;\n      }\n\n      vaadin-connection-indicator[offline] .v-status-message,\n      vaadin-connection-indicator[reconnecting] .v-status-message {\n        opacity: 1;\n        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));\n        color: var(\n          --status-text-color-offline,\n          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))\n        );\n        background-image: repeating-linear-gradient(\n          45deg,\n          rgba(255, 255, 255, 0),\n          rgba(255, 255, 255, 0) 10px,\n          rgba(255, 255, 255, 0.1) 10px,\n          rgba(255, 255, 255, 0.1) 20px\n        );\n      }\n\n      vaadin-connection-indicator[reconnecting] .v-status-message {\n        animation: show-reconnecting-status 2s;\n      }\n\n      vaadin-connection-indicator[offline] .v-status-message:hover,\n      vaadin-connection-indicator[reconnecting] .v-status-message:hover,\n      vaadin-connection-indicator[expanded] .v-status-message {\n        max-height: var(--status-height, 1.75rem);\n      }\n\n      vaadin-connection-indicator[expanded] .v-status-message {\n        opacity: 1;\n      }\n\n      .v-status-message span {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--status-height, 1.75rem);\n      }\n\n      vaadin-connection-indicator[reconnecting] .v-status-message span::before {\n        content: '';\n        width: 1em;\n        height: 1em;\n        border-top: 2px solid\n          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));\n        border-left: 2px solid\n          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));\n        border-right: 2px solid transparent;\n        border-bottom: 2px solid transparent;\n        border-radius: 50%;\n        box-sizing: border-box;\n        animation: v-spin 0.4s linear infinite;\n        margin: 0 0.5em;\n      }\n\n      @keyframes v-spin {\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    "}getLoadingBarStyle(){switch(this.loadingBarState){case"":return"display: none";case"first":case"second":case"third":return"display: block";default:return""}}timeoutFor(t,e,n,o){return 0!==t&&window.clearTimeout(t),e?window.setTimeout(n,o):0}static get instance(){return h.create()}}u([i({type:Number})],h.prototype,"firstDelay",void 0),u([i({type:Number})],h.prototype,"secondDelay",void 0),u([i({type:Number})],h.prototype,"thirdDelay",void 0),u([i({type:Number})],h.prototype,"expandedDuration",void 0),u([i({type:String})],h.prototype,"onlineText",void 0),u([i({type:String})],h.prototype,"offlineText",void 0),u([i({type:String})],h.prototype,"reconnectingText",void 0),u([i({type:Boolean,reflect:!0})],h.prototype,"offline",void 0),u([i({type:Boolean,reflect:!0})],h.prototype,"reconnecting",void 0),u([i({type:Boolean,reflect:!0})],h.prototype,"expanded",void 0),u([i({type:Boolean,reflect:!0})],h.prototype,"loading",void 0),u([i({type:String})],h.prototype,"loadingBarState",void 0),u([i({type:Boolean})],h.prototype,"applyDefaultTheme",null),void 0===customElements.get("vaadin-connection-indicator")&&customElements.define("vaadin-connection-indicator",h);h.instance},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o,r=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame((function(){i?i(t):(r||(r=new Promise(t=>{o=t}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),r.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[a])continue;const o=this.getStyleForCustomStyle(n);if(o){const t=o.__appliedElement||o;l&&l(t),n[a]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,n){"use strict";var o=n(1);n(13);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=o.a`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 52%);
    --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
    --lumo-primary-text-color: var(--lumo-primary-color);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 100%, 61%);
    --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
    --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
    --lumo-error-text-color: hsl(3, 92%, 53%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
    --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
    --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
    --lumo-success-text-color: hsl(145, 100%, 32%);
    --lumo-success-contrast-color: #fff;
  }
`,i=document.createElement("template");i.innerHTML=`<style>${r.toString().replace(":host","html")}</style>`,document.head.appendChild(i.content);const s=o.a`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 86%, 55%);
    --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
    --lumo-primary-text-color: hsl(214, 100%, 70%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 90%, 63%);
    --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
    --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
    --lumo-error-text-color: hsl(3, 100%, 67%);

    /* Success */
    --lumo-success-color: hsl(145, 65%, 42%);
    --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
    --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 47%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a {
    color: var(--lumo-primary-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Object(o.b)("",s,{moduleId:"lumo-color"});const a=o.a`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;Object(o.b)("",a,{moduleId:"lumo-color-legacy",include:["lumo-color"]})},function(t,e,n){"use strict";var o=n(1);n(13);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=o.a`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,i=document.createElement("template");i.innerHTML=`<style>${r.toString().replace(":host","html")}</style>`,document.head.appendChild(i.content);const s=o.a`
  html {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */

  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Object(o.b)("",s,{moduleId:"lumo-typography"})},function(t,e,n){"use strict";var o=n(15),r=n(10),i=n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=new o.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){s.processStyles(),Object(r.c)(t,e)},styleElement(t){s.processStyles()},styleDocument(t){s.processStyles(),Object(r.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(r.b)(t,e),flushCustomStyles(){},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b}),window.ShadyCSS.CustomStyleInterface=s;var a=n(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l=window.ShadyCSS.CustomStyleInterface;class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(a.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},function(t,e){!function(){"use strict";if("undefined"!=typeof document&&!("adoptedStyleSheets"in document)){var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),n=new WeakMap,o="object"==typeof DOMException?Error:DOMException,r=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm,a=CSSStyleSheet.prototype;a.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},a.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var l=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,h=A.prototype;h.replace=function(t){try{return this.replaceSync(t),Promise.resolve(this)}catch(t){return Promise.reject(t)}},h.replaceSync=function(t){if($(this),"string"==typeof t){var e=this;l.get(e).textContent=function(t){var e=t.replace(s,"");return e!==t&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),e.trim()}(t),u.set(e,[]),c.get(e).forEach((function(t){t.isConnected()&&x(e,E(e,t))}))}},r(h,"cssRules",{configurable:!0,enumerable:!0,get:function(){return $(this),l.get(this).sheet.cssRules}}),["addRule","deleteRule","insertRule","removeRule"].forEach((function(t){h[t]=function(){var e=this;$(e);var n=arguments;u.get(e).push({method:t,args:n}),c.get(e).forEach((function(o){if(o.isConnected()){var r=E(e,o).sheet;r[t].apply(r,n)}}));var o=l.get(e).sheet;return o[t].apply(o,n)}})),r(A,Symbol.hasInstance,{configurable:!0,value:S});var p={childList:!0,subtree:!0},m=new WeakMap,f=new WeakMap,v=new WeakMap,g=new WeakMap;if(N.prototype={isConnected:function(){var t=f.get(this);return t instanceof Document?"loading"!==t.readyState:function(t){return"isConnected"in t?t.isConnected:document.contains(t)}(t.host)},connect:function(){var t=k(this);g.get(this).observe(t,p),v.get(this).length>0&&L(this),R(t,(function(t){T(t).connect()}))},disconnect:function(){g.get(this).disconnect()},update:function(t){var e=this,n=f.get(e)===document?"Document":"ShadowRoot";if(!Array.isArray(t))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!t.every(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");if(t.some(C))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Can't adopt non-constructed stylesheets");e.sheets=t;var o,r,i=v.get(e),s=(o=t).filter((function(t,e){return o.indexOf(t)===e}));(r=s,i.filter((function(t){return-1===r.indexOf(t)}))).forEach((function(t){var n;(n=E(t,e)).parentNode.removeChild(n),function(t,e){d.get(t).delete(e),c.set(t,c.get(t).filter((function(t){return t!==e})))}(t,e)})),v.set(e,s),e.isConnected()&&s.length>0&&L(e)}},window.CSSStyleSheet=A,O(Document),"ShadowRoot"in window){O(ShadowRoot);var y=Element.prototype,_=y.attachShadow;y.attachShadow=function(t){var e=_.call(this,t);return"closed"===t.mode&&n.set(this,e),e}}var w=T(document);w.isConnected()?w.connect():document.addEventListener("DOMContentLoaded",w.connect.bind(w))}function b(t){return t.shadowRoot||n.get(t)}function S(t){return"object"==typeof t&&(h.isPrototypeOf(t)||a.isPrototypeOf(t))}function C(t){return"object"==typeof t&&a.isPrototypeOf(t)}function E(t,e){return d.get(t).get(e)}function x(t,e){requestAnimationFrame((function(){e.textContent=l.get(t).textContent,u.get(t).forEach((function(t){return e.sheet[t.method].apply(e.sheet,t.args)}))}))}function $(t){if(!l.has(t))throw new TypeError("Illegal invocation")}function A(){var t=document.createElement("style");e.body.appendChild(t),l.set(this,t),c.set(this,[]),d.set(this,new WeakMap),u.set(this,[])}function T(t){var e=m.get(t);return e||(e=new N(t),m.set(t,e)),e}function O(t){r(t.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return T(this).sheets},set:function(t){T(this).update(t)}})}function R(t,e){for(var n=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT,(function(t){return b(t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),o=void 0;o=n.nextNode();)e(b(o))}function k(t){var e=f.get(t);return e instanceof Document?e.body:e}function L(t){var e=document.createDocumentFragment(),n=v.get(t),o=g.get(t),r=k(t);o.disconnect(),n.forEach((function(n){e.appendChild(E(n,t)||function(t,e){var n=document.createElement("style");return d.get(t).set(e,n),c.get(t).push(e),n}(n,t))})),r.insertBefore(e,null),o.observe(r,p),n.forEach((function(e){x(e,E(e,t))}))}function N(e){var n=this;n.sheets=[],f.set(n,e),v.set(n,[]),g.set(n,new MutationObserver((function(e,o){document?e.forEach((function(e){t||i.call(e.addedNodes,(function(t){t instanceof Element&&R(t,(function(t){T(t).connect()}))})),i.call(e.removedNodes,(function(e){e instanceof Element&&(function(t,e){return e instanceof HTMLStyleElement&&v.get(t).some((function(e){return E(e,t)}))}(n,e)&&L(n),t||R(e,(function(t){T(t).disconnect()})))}))})):o.disconnect()})))}}()},function(t,e,n){"use strict";function o(t){return t=t||[],Array.isArray(t)?t:[t]}function r(t){return"[Vaadin.Router] "+t}n.r(e);const i=["module","nomodule"];function s(t){if(!t.match(/.+\.[m]?js$/))throw new Error(r(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function a(t){if(!t||!p(t.path))throw new Error(r('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,n=["component","redirect","bundle"];if(!(h(t.action)||Array.isArray(t.children)||h(t.children)||u(e)||n.some(e=>p(t[e]))))throw new Error(r(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(p(e))s(e);else{if(!i.some(t=>t in e))throw new Error(r('Expected route bundle to include either "nomodule" or "module" keys, or both'));i.forEach(t=>t in e&&s(e[t]))}t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(r(`Route config "${t.path}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function l(t){o(t).forEach(t=>a(t))}function c(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),"module"===e?n.setAttribute("type","module"):"nomodule"===e&&n.setAttribute("nomodule",""),n.async=!0),new Promise((t,e)=>{n.onreadystatechange=n.onload=e=>{n.__dynamicImportLoaded=!0,t(e)},n.onerror=t=>{n.parentNode&&n.parentNode.removeChild(n),e(t)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&t()})}function d(t,e){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+t,{cancelable:"go"===t,detail:e}))}function u(t){return"object"==typeof t&&!!t}function h(t){return"function"==typeof t}function p(t){return"string"==typeof t}function m(t){const e=new Error(r(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const f=new class{};function v(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const n=t.composedPath?t.composedPath():t.path||[];for(let t=0;t<n.length;t++){const o=n[t];if(o.nodeName&&"a"===o.nodeName.toLowerCase()){e=o;break}}for(;e&&"a"!==e.nodeName.toLowerCase();)e=e.parentNode;if(!e||"a"!==e.nodeName.toLowerCase())return;if(e.target&&"_self"!==e.target.toLowerCase())return;if(e.hasAttribute("download"))return;if(e.hasAttribute("router-ignore"))return;if(e.pathname===window.location.pathname&&""!==e.hash)return;if((e.origin||function(t){const e=t.port,n=t.protocol;return`${n}//${"http:"===n&&"80"===e||"https:"===n&&"443"===e?t.hostname:t.host}`}(e))!==window.location.origin)return;const{pathname:o,search:r,hash:i}=e;d("go",{pathname:o,search:r,hash:i})&&(t.preventDefault(),t&&"click"===t.type&&window.scrollTo(0,0))}const g={activate(){window.document.addEventListener("click",v)},inactivate(){window.document.removeEventListener("click",v)}};function y(t){if("vaadin-router-ignore"===t.state)return;const{pathname:e,search:n,hash:o}=window.location;d("go",{pathname:e,search:n,hash:o})}/Trident/.test(navigator.userAgent)&&!h(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const _={activate(){window.addEventListener("popstate",y)},inactivate(){window.removeEventListener("popstate",y)}};var w=L,b=$,S=function(t,e){return A($(t,e))},C=A,E=k,x=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function $(t,e){for(var n,o=[],r=0,i=0,s="",a=e&&e.delimiter||"/",l=e&&e.delimiters||"./",c=!1;null!==(n=x.exec(t));){var d=n[0],u=n[1],h=n.index;if(s+=t.slice(i,h),i=h+d.length,u)s+=u[1],c=!0;else{var p="",m=t[i],f=n[2],v=n[3],g=n[4],y=n[5];if(!c&&s.length){var _=s.length-1;l.indexOf(s[_])>-1&&(p=s[_],s=s.slice(0,_))}s&&(o.push(s),s="",c=!1);var w=""!==p&&void 0!==m&&m!==p,b="+"===y||"*"===y,S="?"===y||"*"===y,C=p||a,E=v||g;o.push({name:f||r++,prefix:p,delimiter:C,optional:S,repeat:b,partial:w,pattern:E?O(E):"[^"+T(C)+"]+?"})}}return(s||i<t.length)&&o.push(s+t.substr(i)),o}function A(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,o){for(var r="",i=o&&o.encode||encodeURIComponent,s=0;s<t.length;s++){var a=t[s];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=i(c[d],a),!e[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(0===d?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(r+=a.prefix)}else{if(l=i(String(c),a),!e[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');r+=a.prefix+l}}else r+=a}return r}}function T(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function k(t,e,n){for(var o=(n=n||{}).strict,r=!1!==n.start,i=!1!==n.end,s=T(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(T).concat("$").join("|"),c=r?"^":"",d=0===t.length,u=0;u<t.length;u++){var h=t[u];if("string"==typeof h)c+=T(h),d=u===t.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+T(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?c+=T(h.prefix)+"("+p+")?":c+="(?:"+T(h.prefix)+"("+p+"))?":c+=T(h.prefix)+"("+p+")"}}return i?(o||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(o||(c+="(?:"+s+"(?="+l+"))?"),d||(c+="(?="+s+"|"+l+")")),new RegExp(c,R(n))}function L(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(L(t[r],e,n).source);return new RegExp("(?:"+o.join("|")+")",R(n))}(t,e,n):function(t,e,n){return k($(t,n),e,n)}(t,e,n)}w.parse=b,w.compile=S,w.tokensToFunction=C,w.tokensToRegExp=E;const{hasOwnProperty:N}=Object.prototype,P=new Map;function I(t){try{return decodeURIComponent(t)}catch(e){return t}}function j(t,e,n,o,r){let i,s,a=0,l=t.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(t===c)return{done:!0};const d=t.__children=t.__children||t.children;if(!i&&(i=function(t,e,n,o,r){const i=`${t}|${n=!!n}`;let s=P.get(i);if(!s){const e=[];s={keys:e,pattern:w(t,e,{end:n,strict:""===t})},P.set(i,s)}const a=s.pattern.exec(e);if(!a)return null;const l=Object.assign({},r);for(let t=1;t<a.length;t++){const e=s.keys[t-1],n=e.name,o=a[t];void 0===o&&N.call(l,n)||(e.repeat?l[n]=o?o.split(e.delimiter).map(I):[]:l[n]=o?I(o):o)}return{path:a[0],keys:(o||[]).concat(s.keys),params:l}}(l,e,!d,o,r),i))return{done:!1,value:{route:t,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;a<d.length;){if(!s){const o=d[a];o.parent=t;let r=i.path.length;r>0&&"/"===e.charAt(r)&&(r+=1),s=j(o,e.substr(r),n,i.keys,i.params)}const o=s.next(c);if(!o.done)return{done:!1,value:o.value};s=null,a++}return{done:!0}}}}function M(t){if(h(t.route.action))return t.route.action(t)}P.set("|false",{keys:[],pattern:/(?:)/});class U{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||M,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){l(t);const e=[...o(t)];this.root.__children=e}addRoutes(t){return l(t),this.root.__children.push(...o(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,p(t)?{pathname:t}:t),n=j(this.root,this.__normalizePathname(e.pathname),this.baseUrl),o=this.resolveRoute;let r=null,i=null,s=e;function a(t,l=r.value.route,c){const d=null===c&&r.value.route;return r=i||n.next(d),i=null,t||!r.done&&function(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}(l,r.value.route)?r.done?Promise.reject(m(e)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},e,r.value),function(t,e){const{route:n,path:o}=e;if(n&&!n.__synthetic){const e={path:o,route:n};if(t.chain){if(n.parent){let e=t.chain.length;for(;e--&&t.chain[e].route&&t.chain[e].route!==n.parent;)t.chain.pop()}}else t.chain=[];t.chain.push(e)}}(s,r.value),Promise.resolve(o(s)).then(e=>null!=e&&e!==f?(s.result=e.result||e,s):a(t,l,e))):(i=r,Promise.resolve(f))}return e.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(t=>{const e=function(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}(s);if(t?console.warn(e):t=new Error(e),t.context=t.context||s,t instanceof DOMException||(t.code=t.code||500),this.errorHandler)return s.result=this.errorHandler(t),s;throw t})}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,e).href;return n.slice(0,e.length)===e?n.slice(e.length):void 0}}U.pathToRegexp=w;const{pathToRegexp:B}=U,D=new Map;function V(t,e){const n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function H(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,void 0!==e?e:""}function F(t,e={}){if(!(t instanceof U))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(o,r)=>{let i=V(n,o);if(!i&&(n.clear(),function t(e,n,o){const r=n.name||n.component;if(r&&(e.has(r)?e.get(r).push(n):e.set(r,[n])),Array.isArray(o))for(let r=0;r<o.length;r++){const i=o[r];i.parent=n,t(e,i,i.__children||i.children)}}(n,t.root,t.root.__children),i=V(n,o),!i))throw new Error(`Route "${o}" not found`);let s=D.get(i.fullPath);if(!s){let t=H(i),e=i.parent;for(;e;){const n=H(e);n&&(t=n.replace(/\/$/,"")+"/"+t.replace(/^\//,"")),e=e.parent}const n=B.parse(t),o=B.tokensToFunction(n),r=Object.create(null);for(let t=0;t<n.length;t++)p(n[t])||(r[n[t].name]=!0);s={toPath:o,keys:r},D.set(t,s),i.fullPath=t}let a=s.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const t={},n=Object.keys(r);for(let e=0;e<n.length;e++){const o=n[e];s.keys[o]||(t[o]=r[o])}const o=e.stringifyQueryParams(t);o&&(a+="?"===o.charAt(0)?o:"?"+o)}return a}}let z=[];function W(t){z.forEach(t=>t.inactivate()),t.forEach(t=>t.activate()),z=t}function q(t,e){return t.classList.add(e),new Promise(n=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const o=t.getBoundingClientRect(),r=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;t.setAttribute("style","position: absolute; "+r),((t,e)=>{const n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)})(t,()=>{t.classList.remove(e),t.removeAttribute("style"),n()})}else t.classList.remove(e),n()})}function G(t){return null!=t}function K({pathname:t="",search:e="",hash:n="",chain:o=[],params:r={},redirectFrom:i,resolver:s},a){const l=o.map(t=>t.route);return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:r,redirectFrom:i,getUrl:(t={})=>Y(et.pathToRegexp.compile(tt(l))(Object.assign({},r,t)),s)}}function J(t,e){const n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function Q(t,e,n){if(h(t))return t.apply(n,e)}function X(t,e,n){return o=>o&&(o.cancel||o.redirect)?o:n?Q(n[t],e,n):void 0}function Z(t){if(t&&t.length){const e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function Y(t,e){const n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function tt(t){return t.map(t=>t.path).reduce((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t,"")}class et extends U{constructor(t,e){const n=document.head.querySelector("base"),o=n&&n.getAttribute("href");super([],Object.assign({baseUrl:o&&U.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=t=>this.__resolveRoute(t);const r=et.NavigationTrigger;et.setTriggers.apply(et,Object.keys(r).map(t=>r[t])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=K({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let n=Promise.resolve();h(e.children)&&(n=n.then(()=>e.children(function(t){const e=Object.assign({},t);return delete e.next,e}(t))).then(t=>{G(t)||h(e.children)||(t=e.children),function(t,e){if(!Array.isArray(t)&&!u(t))throw new Error(r(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const n=o(t);for(let t=0;t<n.length;t++)a(n[t]),e.__children.push(n[t])}(t,e)}));const s={redirect:e=>J(t,e),component:t=>{const e=document.createElement(t);return this.__createdByRouter.set(e,!0),e}};return n.then(()=>{if(this.__isLatestRender(t))return Q(e.action,[t,s],e)}).then(t=>{return G(t)&&(t instanceof HTMLElement||t.redirect||t===f)?t:p(e.redirect)?s.redirect(e.redirect):e.bundle?(n=e.bundle,p(n)?c(n):Promise.race(i.filter(t=>t in n).map(t=>c(n[t],t)))).then(()=>{},()=>{throw new Error(r(`Bundle not found: ${e.bundle}. Check if the file name is correct`))}):void 0;var n}).then(t=>G(t)?t:p(e.component)?s.component(e.component):void 0)}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const n=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},p(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(o).then(t=>this.__fullyResolveChain(t)).then(t=>{if(this.__isLatestRender(t)){const o=this.__previousContext;if(t===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=K(t),e&&this.__updateBrowserHistory(t,1===n),d("location-changed",{router:this,location:this.location}),t.__skipAttach)return this.__copyUnchangedElements(t,o),this.__previousContext=t,this.location;this.__addAppearingContent(t,o);const r=this.__animateIfNeeded(t);return this.__runOnAfterEnterCallbacks(t),this.__runOnAfterLeaveCallbacks(t,o),r.then(()=>{if(this.__isLatestRender(t))return this.__removeDisappearingContent(),this.__previousContext=t,this.location})}}).catch(t=>{if(n===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(o),Z(this.__outlet&&this.__outlet.children),this.location=K(Object.assign(o,{resolver:this})),d("error",Object.assign({router:this,error:t},o)),t}),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then(n=>{const o=n!==e?n:t,r=Y(tt(n.chain),n.resolver)===n.pathname,i=(t,e=t.route,n)=>t.next(void 0,e,n).then(n=>null===n||n===f?r?t:null!==e.parent?i(t,e.parent,n):n:n);return i(n).then(t=>{if(null===t||t===f)throw m(o);return t&&t!==f&&t!==n?this.__fullyResolveChain(o,t):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(function(t,e){e.location=K(t);const n=t.chain.map(t=>t.route).indexOf(t.route);t.chain[n].element=e}(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then(t=>this.__findComponentContextAfterAllRedirects(t)):e instanceof Error?Promise.reject(e):Promise.reject(new Error(r(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},n=e.chain||[],o=t.chain;let r=Promise.resolve();const i=()=>({cancel:!0}),s=e=>J(t,e);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let e=0;e<Math.min(n.length,o.length)&&(n[e].route===o[e].route&&(n[e].path===o[e].path||n[e].element===o[e].element)&&this.__isReusableElement(n[e].element,o[e].element));e=++t.__divergedChainIndex);if(t.__skipAttach=o.length===n.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let e=o.length-1;e>=0;e--)r=this.__runOnBeforeLeaveCallbacks(r,t,{prevent:i},n[e]);for(let e=0;e<o.length;e++)r=this.__runOnBeforeEnterCallbacks(r,t,{prevent:i,redirect:s},o[e]),n[e].element.location=K(t,n[e].route)}else for(let e=n.length-1;e>=t.__divergedChainIndex;e--)r=this.__runOnBeforeLeaveCallbacks(r,t,{prevent:i},n[e])}if(!t.__skipAttach)for(let e=0;e<o.length;e++)e<t.__divergedChainIndex?e<n.length&&n[e].element&&(n[e].element.location=K(t,n[e].route)):(r=this.__runOnBeforeEnterCallbacks(r,t,{prevent:i,redirect:s},o[e]),o[e].element&&(o[e].element.location=K(t,o[e].route)));return r.then(e=>{if(e){if(e.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(e.redirect)return this.__redirect(e.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,e,n,o){const r=K(e);return t.then(t=>{if(this.__isLatestRender(e)){return X("onBeforeLeave",[r,n,this],o.element)(t)}}).then(t=>{if(!(t||{}).redirect)return t})}__runOnBeforeEnterCallbacks(t,e,n,o){const r=K(e,o.route);return t.then(t=>{if(this.__isLatestRender(e)){return X("onBeforeEnter",[r,n,this],o.element)(t)}})}__isReusableElement(t,e){return!(!t||!e)&&(this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e)}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,n){if(e>256)throw new Error(r("Too many redirects when rendering "+t.from));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(r(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:n=""},o){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==n){const r=o?"replaceState":"pushState";window.history[r](null,document.title,t+e+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let n=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const r=e&&e.chain[o].element;if(r){if(r.parentNode!==n)break;t.chain[o].element=r,n=r}}return n}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(e=>this.__addedByRouter.get(e)&&e!==t.result);let o=n;for(let e=t.__divergedChainIndex;e<t.chain.length;e++){const r=t.chain[e].element;r&&(o.appendChild(r),this.__addedByRouter.set(r,!0),o===n&&this.__appearingContent.push(r),o=r)}}__removeDisappearingContent(){this.__disappearingContent&&Z(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Z(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let n=e.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const o=e.chain[n].element;if(o)try{const n=K(t);Q(o.onAfterLeave,[n,{},e.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&Z(o.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const n=t.chain[e].element||{},o=K(t,t.chain[e].route);Q(n.onAfterEnter,[o,{},t.resolver],n)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],o=[],r=t.chain;let i;for(let t=r.length;t>0;t--)if(r[t-1].route.animate){i=r[t-1].route.animate;break}if(e&&n&&i){const t=u(i)&&i.leave||"leaving",r=u(i)&&i.enter||"entering";o.push(q(e,t)),o.push(q(n,r))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:n,hash:o}=t?t.detail:window.location;p(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:n,hash:o},!0))}static setTriggers(...t){W(t)}urlForName(t,e){return this.__urlForName||(this.__urlForName=F(this)),Y(this.__urlForName(t,e),this)}urlForPath(t,e){return Y(et.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:n,hash:o}=p(t)?this.__createUrl(t,"http://a"):t;return d("go",{pathname:e,search:n,hash:o})}}const nt=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ot=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function rt(t,e){if("function"!=typeof t)return;const n=nt.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const it=function(t,e){if(window.Vaadin.developmentMode)return rt(t,e)};function st(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ot?!function(){if(ot){if(Object.keys(ot).map(t=>ot[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!rt((function(){return!0})))}catch(t){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),it(st),et.NavigationTrigger={POPSTATE:_,CLICK:g};var at=n(14),lt=n(0);const ct=window.document.body,dt=window;class ut extends Error{constructor(t){super(t)}}const{serverSideRoutes:ht}=new class{constructor(t){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,ct.$=ct.$||[],this.config=t||{},dt.Vaadin=dt.Vaadin||{},dt.Vaadin.Flow=dt.Vaadin.Flow||{},dt.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const e=document.head.querySelector("base");this.baseRegex=new RegExp("^"+(document.baseURI||e&&e.href||"/").replace(/^https?:\/\/[^/]+/i,"")),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,dt.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,dt.Vaadin.connectionState.loadingFinished()}get action(){return async t=>{if(this.pathname=t.pathname,!dt.Vaadin.connectionState.online)return this.offlineStubAction();try{await this.flowInit()}catch(t){if(t instanceof ut)return dt.Vaadin.connectionState.state=lt.a.CONNECTION_LOST,this.offlineStubAction();throw t}return this.container.onBeforeEnter=(t,e)=>this.flowNavigate(t,e),this.container.onBeforeLeave=(t,e)=>this.flowLeave(t,e),this.container}}async flowLeave(t,e){const n=dt.Vaadin.connectionState;return this.pathname===t.pathname||!this.isFlowClientLoaded()||n.offline?Promise.resolve({}):new Promise(n=>{this.loadingStarted(),this.container.serverConnected=t=>{n(e&&t?e.prevent():{}),this.loadingFinished()},ct.$server.leaveNavigation(this.getFlowRoute(t))})}async flowNavigate(t,e){return this.response?new Promise(n=>{this.loadingStarted(),this.container.serverConnected=(t,o)=>{e&&t?n(e.prevent()):e&&e.redirect&&o?n(e.redirect(o.pathname)):(this.container.style.display="",n(this.container)),this.loadingFinished()},ct.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoute(t),this.appShellTitle,history.state)}):Promise.resolve(this.container)}getFlowRoute(t){return(t.pathname+(t.search||"")).replace(this.baseRegex,"")}async flowInit(t=!1){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi(t),this.response.appConfig.clientRouting=!t;const{pushScript:e,appConfig:o}=this.response;"string"==typeof e&&await this.loadScript(e);const{appId:r}=o,i=await n.e(4).then(n.bind(null,263));await i.init(this.response),"function"==typeof this.config.imports&&(this.injectAppIdScript(r),await this.config.imports());const s=await n.e(5).then(n.bind(null,264));if(await this.flowInitClient(s),!t){const t="flow-container-"+r.toLowerCase();this.container=ct.$[r]=document.createElement(t),this.container.id=r,this.container.style.display="none",document.body.appendChild(this.container)}this.loadingFinished()}return this.response}async loadScript(t){return new Promise((e,n)=>{const o=document.createElement("script");o.onload=()=>e(),o.onerror=n,o.src=t,document.body.appendChild(o)})}injectAppIdScript(t){const e=t.substring(0,t.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",e),document.body.append(n)}async flowInitClient(t){return t.init(),new Promise(t=>{const e=setInterval(()=>{Object.keys(dt.Vaadin.Flow.clients).filter(t=>"TypeScript"!==t).reduce((t,e)=>t||dt.Vaadin.Flow.clients[e].isActive(),!1)||(clearInterval(e),t())},5)})}async flowInitUi(t){const e=dt.Vaadin&&dt.Vaadin.TypeScript&&dt.Vaadin.TypeScript.initial;return e?(dt.Vaadin.TypeScript.initial=void 0,Promise.resolve(e)):new Promise((e,n)=>{const o=new XMLHttpRequest,r=t?"&serverSideRouting":"",i="?v-r=init&location="+encodeURIComponent(this.getFlowRoute(location))+r;o.open("GET",i),o.onerror=()=>n(new ut(`Invalid server response when initializing Flow UI.\n        ${o.status}\n        ${o.responseText}`)),o.onload=()=>{const t=o.getResponseHeader("content-type");t&&-1!==t.indexOf("application/json")?e(JSON.parse(o.responseText)):o.onerror()},o.send()})}addConnectionIndicator(){at.a.create(),dt.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){dt.Vaadin.connectionState.state=lt.a.RECONNECTING;const t=new XMLHttpRequest;t.open("HEAD","sw.js"),t.onload=()=>{dt.Vaadin.connectionState.state=lt.a.CONNECTED},t.onerror=()=>{dt.Vaadin.connectionState.state=lt.a.CONNECTION_LOST},t.send()}}),dt.addEventListener("offline",()=>{this.isFlowClientLoaded()||(dt.Vaadin.connectionState.state=lt.a.CONNECTION_LOST)})}async offlineStubAction(){const t=document.createElement("iframe");let e;t.setAttribute("src","./offline-stub.html"),t.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;const n=()=>{void 0!==e&&(dt.Vaadin.connectionState.removeStateChangeListener(e),e=void 0)};return t.onBeforeEnter=(t,o,r)=>{e=()=>{dt.Vaadin.connectionState.online&&(n(),r.render(t,!1))},dt.Vaadin.connectionState.addStateChangeListener(e)},t.onBeforeLeave=(t,e,o)=>{n()},t}isFlowClientLoaded(){return void 0!==this.response}}({imports:()=>Promise.all([n.e(2),n.e(6)]).then(n.bind(null,265))}),pt=[...ht];new et(document.querySelector("#outlet")).setRoutes(pt);n(19);var mt=n(6),ft=n(5),vt=(n(18),n(2).c`:host {
    font-family: Tahoma, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #f5f5f5;
}

/* Global button style */
vaadin-button {
    background-color: #e0e0e0;
    color: #000;
    font-weight: bold;
    border-radius: 0;
    box-shadow: inset 0 1px 0 #fff;
}

/* Add some spacing between buttons */
vaadin-button + vaadin-button {
    margin-left: 0.5rem;
}

/* Style for text fields */
vaadin-text-field {
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 0.2rem 0.4rem;
}

/* Panel/card-like style */
vaadin-vertical-layout,
vaadin-horizontal-layout {
    padding: 1rem;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
    margin-bottom: 1rem;
}

/* Headings */
h1, h2, h3 {
    font-weight: bold;
    color: #2c3e50;
}`);n(16),n(17);const gt=(t,e,n)=>{if(e===document){const e=function(t){let e=wt(t);return e+wt(e+t)}(t);if(-1!==window.Vaadin.theme.injectedGlobalCss.indexOf(e))return;window.Vaadin.theme.injectedGlobalCss.push(e)}const o=new CSSStyleSheet;o.replaceSync(((t,e)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\surl\((.+?)\);(?:})?/g;for(var o,r=t;null!==(o=n.exec(t));){r=r.replace(o[0],"");const t=document.createElement("link");t.rel="stylesheet",t.href=o[2],o[1]&&(t.media=o[1]),e===document?document.head.appendChild(t):e.appendChild(t)}return r})(t,e)),e.adoptedStyleSheets=n?[o,...e.adoptedStyleSheets]:[...e.adoptedStyleSheets,o]},yt=(t,e)=>{!function(t,e=!1){const n=document.createElement("template");n.innerHTML=t,document.head[e?"insertBefore":"appendChild"](n.content,document.head.firstChild)}(`<custom-style><style include="${t}"></style></custom-style>`,!0)},_t=t=>{const e=mt.a.import(t,"template");return e&&Object(ft.c)(e,"").map(t=>t.textContent).join(" ")};function wt(t){let e,n,o=2166136261;for(e=0,n=t.length;e<n;e++)o^=t.charCodeAt(e),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return("0000000"+(o>>>0).toString(16)).substr(-8)}window.Vaadin=window.Vaadin||{},window.Vaadin.theme=window.Vaadin.theme||{},window.Vaadin.theme.injectedGlobalCss=[];(t=>{gt(vt.toString(),t),document._vaadintheme_mytheme_componentCss||(document._vaadintheme_mytheme_componentCss=!0);t instanceof ShadowRoot?(gt(_t("lumo-color"),t,!0),gt(_t("lumo-typography"),t,!0)):document._vaadinthemelumoimports_||(yt("lumo-color"),yt("lumo-typography"),window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface.processStyles(),document._vaadinthemelumoimports_=!0)})(document)}]);