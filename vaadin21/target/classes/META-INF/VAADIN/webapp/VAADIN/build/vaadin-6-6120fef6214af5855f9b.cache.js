(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{265:function(e,t,s){"use strict";s.r(t),s.d(t,"addCssBlock",(function(){return R}));var a=s(2).c`/* point-theme.css */

/* Define your custom properties for the "point" theme */
/* :host([theme~="point"]), html ensures these properties are applied when "point" theme is active */
/* html selector is good for global properties */
html, :host([theme~="point"]) {
  /* Primary colors */
  --lumo-primary-color: #007bff; /* A typical blue for primary actions */
  --lumo-primary-text-color: white; /* Text color on primary background */
  --lumo-primary-color-50pct: rgba(0, 123, 255, 0.5); /* For hover/active states */

  /* Text colors */
  --lumo-text-color: #212529; /* Dark grey for general text */
  --lumo-secondary-text-color: #6c757d; /* Lighter grey for secondary text */
  --lumo-tertiary-text-color: #999; /* Even lighter */

  /* Background colors */
  --lumo-base-color: #ffffff; /* White background for most components */
  --lumo-shade-5pct: rgba(0, 0, 0, 0.05); /* Light shade for subtle backgrounds */
  --lumo-header-background-color: #e9ecef; /* A light grey for headers */
  --lumo-contrast-5pct: rgba(0, 0, 0, 0.05); /* Subtle contrast */
  --lumo-border-radius-m: 4px; /* Standard border radius */

  /* Typography variables (you can customize these directly) */
  --lumo-font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  --lumo-font-size-m: 1rem;
  --lumo-font-size-l: 1.125rem;
  --lumo-font-size-xl: 1.25rem;
  --lumo-font-size-xxxl: 2.5rem; /* For H1 */

  /* You can define your own custom variables if Lumo doesn't have one */
  --point-custom-header-height: 60px;
}

/* Example: Customizing tabs specifically */
/* Make sure these target the actual web component tag name */
vaadin-tabs[theme~="point"] {
  background-color: var(--lumo-header-background-color); /* Use a Lumo variable or your custom one */
  border-bottom: 2px solid var(--lumo-primary-color);
  box-shadow: var(--lumo-shade-5pct) 0 2px 4px 0; /* Add a subtle shadow */
}

vaadin-tab[theme~="point"] {
  color: var(--lumo-secondary-text-color);
  padding: var(--lumo-space-m) var(--lumo-space-l);
  font-size: var(--lumo-font-size-m);
}

vaadin-tab[theme~="point"][selected] {
  color: var(--lumo-primary-color);
  font-weight: bold;
  background-color: var(--lumo-base-color); /* White background for selected tab */
}

/* Style for the main header (H1) */
.main-header {
    color: var(--lumo-primary-color);
    font-size: var(--lumo-font-size-xxxl);
    margin: var(--lumo-space-m);
    /* Ensure the text is on the right */
    text-align: right; /* Added for extra safety, though justify-content-end on HorizontalLayout should handle it */
    padding-right: var(--lumo-space-l); /* Add some padding on the right */
}`,o=(s(14),s(42));s(18);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
const i=o.a`
  <custom-style>
    <style>
      html {
        --vaadin-user-color-0: #df0b92;
        --vaadin-user-color-1: #650acc;
        --vaadin-user-color-2: #097faa;
        --vaadin-user-color-3: #ad6200;
        --vaadin-user-color-4: #bf16f3;
        --vaadin-user-color-5: #084391;
        --vaadin-user-color-6: #078836;
      }

      [theme~="dark"] {
        --vaadin-user-color-0: #ff66c7;
        --vaadin-user-color-1: #9d8aff;
        --vaadin-user-color-2: #8aff66;
        --vaadin-user-color-3: #ffbd66;
        --vaadin-user-color-4: #dc6bff;
        --vaadin-user-color-5: #66fffa;
        --vaadin-user-color-6: #e6ff66;
      }
    </style>
  </custom-style>
`;document.head.appendChild(i.content);var r=s(1);s(16),s(25),s(27),s(17);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
Object(r.b)("vaadin-user-tags-overlay",r.a`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"}),Object(r.b)("vaadin-user-tag",r.a`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});var n=s(23),d=s(29),l=s(28),h=s(78),c=s(40),u=s(24),p=s(189);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
const m=window.ShadyCSS&&!window.ShadyCSS.nativeCss,g=window.ShadyDOM&&window.ShadyDOM.inUse,v=(e,t,s)=>{m?window.ShadyCSS.styleSubtree(e,{[t]:s}):e.style.setProperty(t,s)};let f={};
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
class b extends(Object(u.a)(Object(c.a)(n.a))){static get is(){return"vaadin-user-tag"}static get template(){return n.b`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <!-- TODO: image / avatar -->
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(e){null!=e&&v(this,"--vaadin-user-tag-color",`var(--vaadin-user-color-${e})`)}_onClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(b.is,b);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
const y=(e,t)=>new Promise(s=>{const a=()=>{e.removeEventListener(t,a),s()};e.addEventListener(t,a)});class w extends p.a{static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(w.is,w),Object(r.b)("vaadin-user-tags-overlay",r.a`
    :host {
      align-items: stretch;
      justify-content: flex-start;
      background: transparent;
      box-shadow: none;
      bottom: auto;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([dir='rtl']) {
      left: auto;
    }

    :host(:not([dir='rtl'])) {
      right: auto;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  `);class x extends(Object(u.a)(Object(c.a)(n.a))){static get is(){return"vaadin-user-tags"}static get template(){return n.b`
      <style>
        :host {
          position: absolute;
        }

        [part='tags'] {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      </style>
      <vaadin-user-tags-overlay modeless id="overlay" opened="[[opened]]" on-vaadin-overlay-open="_onOverlayOpen">
        <template>
          <div part="tags"></div>
        </template>
      </vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1,observer:"_openedChanged"},flashing:{type:Boolean,value:!1},target:{type:Object},users:{type:Array,value:()=>[]},_flashQueue:{type:Array,value:()=>[]}}}constructor(){super(),this._boundSetPosition=this._debounceSetPosition.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._boundSetPosition),window.addEventListener("scroll",this._boundSetPosition)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._boundSetPosition),window.removeEventListener("scroll",this._boundSetPosition)}_debounceSetPosition(){this._debouncePosition=d.a.debounce(this._debouncePosition,l.d.after(16),()=>this._setPosition())}_openedChanged(e){e&&this._setPosition()}_hasFocusChanged(e){e&&this.flashing&&this.stopFlash()}_setPosition(){if(!this.opened)return;const e=this.target.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();this._translateX="rtl"===this.getAttribute("dir")?e.right-t.right+(this._translateX||0):e.left-t.left+(this._translateX||0),this._translateY=e.top-t.top+(this._translateY||0)+e.height;const s=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*s)/s,this._translateY=Math.round(this._translateY*s)/s,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`}get wrapper(){return this.$.overlay.content.querySelector('[part="tags"]')}createUserTag(e){const t=document.createElement("vaadin-user-tag");return t.name=e.name,t.uid=e.id,t.colorIndex=e.colorIndex,t}getTagForUser(e){return Array.from(this.wrapper.children).filter(t=>t.uid===e.id)[0]}getChangedTags(e,t){const s=t.map(e=>this.getTagForUser(e));return{added:e.map(e=>this.getTagForUser(e)||this.createUserTag(e)),removed:s}}getChangedUsers(e,t){const s=[],a=[];t.forEach(t=>{for(let e=0;e<t.removed.length;e++)a.push(t.removed[e]);for(let a=t.addedCount-1;a>=0;a--)s.push(e[t.index+a])});return{addedUsers:s.filter(e=>!a.some(t=>e.id===t.id)),removedUsers:a.filter(e=>!s.some(t=>e.id===t.id))}}applyTagsStart({added:e,removed:t}){const s=this.wrapper;t.forEach(e=>{e&&(e.classList.add("removing"),e.classList.remove("show"))}),e.forEach(e=>s.insertBefore(e,s.firstChild))}applyTagsEnd({added:e,removed:t}){const s=this.wrapper;t.forEach(e=>{e&&e.parentNode===s&&s.removeChild(e)}),e.forEach(e=>e&&e.classList.add("show"))}setUsers(e){this.render();const t=Object(h.a)(e,this.users);if(0===t.length)return;const{addedUsers:s,removedUsers:a}=this.getChangedUsers(e,t);if(0===s.length&&0===a.length)return;const o=this.getChangedTags(s,a);if(this._flashQueue.length>0)for(let e=0;e<a.length;e++)if(null===o.removed[e])for(let t=0;t<this._flashQueue.length;t++)this._flashQueue[t].some(t=>t.uid===a[e].id)&&this.splice("_flashQueue",e,1);if(this.opened&&this.hasFocus)this.updateTags(e,o);else if(s.length&&"hidden"!==document.visibilityState){const t=o.added;this.flashing?this.push("_flashQueue",t):this.flashTags(t),this.set("users",e)}else this.updateTagsSync(e,o)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(e=>{e.classList.contains("removing")||e.classList.add("show")})}flashTags(e){this.flashing=!0;const t=this.wrapper,s=Array.from(t.children);s.forEach(e=>e.style.display="none"),e.forEach(e=>{t.insertBefore(e,t.firstChild)}),this.flashPromise=new Promise(t=>{y(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=d.a.debounce(this._debounceFlashStart,l.d.after(2200),()=>{this.hasFocus||e.forEach(e=>e.classList.remove("show")),this._debounceFlashEnd=d.a.debounce(this._debounceFlashEnd,l.d.after(200),()=>{const e=()=>{s.forEach(e=>e.style.display="block"),this.flashing=!1,t()};this.hasFocus?e():(y(this.$.overlay,"animationend").then(()=>{e()}),this.opened=!1)})})})}).then(()=>{if(this._flashQueue.length>0){const e=this._flashQueue[0];this.splice("_flashQueue",0,1),this.flashTags(e)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(e,t){this.applyTagsStart(t),this._debounceRender=d.a.debounce(this._debounceRender,l.d.after(200),()=>{this.set("users",e),this.applyTagsEnd(t),0===e.length&&this.opened&&(this.opened=!1)})}updateTagsSync(e,t){this.applyTagsStart(t),this.set("users",e),this.applyTagsEnd(t)}show(){this.hasFocus=!0,this.opened=!0}hide(){this.hasFocus=!1,this.opened=!1}render(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(x.is,x),
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
Object(r.b)("vaadin-field-outline",r.a`
    :host {
      transition: opacity 0.3s;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius);
      transition: box-shadow 0.3s;
    }

    :host([context='vaadin-checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context='vaadin-radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context='vaadin-item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }

    :host([context='vaadin-text-area']) {
      display: none;
    }
  `,{moduleId:"lumo-field-outline"}),Object(r.b)("vaadin-text-area",r.a`
    :host([has-highlighter]) [part="input-field"] {
      box-shadow: 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-text-area-outline"});var _=s(81);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/const F=new WeakMap,k=e=>{if(!F.has(e)){const t=(e=>{switch(e.tagName.toLowerCase()){case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-date-time-picker-date-picker":case"vaadin-date-time-picker-time-picker":case"vaadin-select":case"vaadin-time-picker":return e.focusElement;default:return e}})(e),s=(e=>{switch(e.tagName.toLowerCase()){case"vaadin-text-area":case"vaadin-text-field":case"vaadin-password-field":case"vaadin-email-field":case"vaadin-number-field":case"vaadin-integer-field":case"vaadin-big-decimal-field":case"vaadin-select-text-field":case"vaadin-date-picker-text-field":case"vaadin-time-picker-text-field":case"vaadin-date-time-picker-date-text-field":case"vaadin-date-time-picker-time-text-field":return e.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return e.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return e.shadowRoot.querySelector('[part="radio"]');default:return e}})(t);s.style.position="relative";((e,t)=>{if(g){const s=e.tagName.toLowerCase();if(!f[s]){const e=document.createElement("style"),a=t.replace(/:host\((.+)\)/,s+"$1");e.textContent=a,e.setAttribute("scope",s),f[s]=e,document.head.appendChild(e)}}else{const s=document.createElement("style");s.textContent=t,e.shadowRoot.appendChild(s)}})(t,'\n      :host([active]) [part="outline"],\n      :host([focus-ring]) [part="outline"] {\n        display: none;\n      }\n    ');const a=document.createElement("vaadin-field-outline");(s===e?e.shadowRoot:s).appendChild(a),a.setAttribute("context",t.tagName.toLowerCase()),F.set(e,{root:t,target:s,outline:a})}return F.get(e)};
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
class O{constructor(e){this.component=e,this.initTags(e)}getFields(){return[this.component]}getFieldIndex(e){return this.getFields().indexOf(e)}getFocusTarget(e){return this.component}initTags(e){const t=document.createElement("vaadin-user-tags");e.shadowRoot.appendChild(t),t.target=e,this._tags=t,e.addEventListener("mouseenter",e=>{e.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=d.a.debounce(this._mouseDebouncer,l.d.after(200),()=>{this._mouse&&this._tags.show()}))}),e.addEventListener("mouseleave",e=>{e.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),e.addEventListener("vaadin-highlight-show",e=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),e.addEventListener("vaadin-highlight-hide",e=>{this._hasFocus=!1,this._mouse||(this._debouncer=d.a.debounce(this._debouncer,l.d.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",t=>{t.relatedTarget!==e&&(this._mouse=!1,e.hasAttribute("focused")||this._tags.hide())})}setOutlines(e){const t=this.getFields();t.forEach((s,a)=>{const{outline:o}=k(s),i=1===t.length?0:e.map(e=>e.fieldIndex).indexOf(a);o.user=e[i]})}showOutline(e){this.fire("show",e)}hideOutline(e){this.fire("hide",e)}fire(e,t){this.component.dispatchEvent(new CustomEvent("vaadin-highlight-"+e,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(t)}}))}redraw(e){this._tags.setUsers(e),this.setOutlines(e)}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class E extends O{constructor(e){super(e),this.datePicker=e,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(e)}addListeners(e){this.overlay=e.$.overlay,e.addEventListener("focus",e=>this.onFocus(e),!0),e.addEventListener("opened-changed",e=>this.onOpenedChanged(e)),this.overlay.addEventListener("focusout",e=>this.onOverlayFocusOut(e)),e.addEventListener("focusin",e=>this.onFocusIn(e)),e.addEventListener("focusout",e=>this.onFocusOut(e))}onFocus(e){const t=this.datePicker;t._fullscreen&&e.relatedTarget!==this.overlay&&(this.fullscreenFocus=!0,t.opened&&(this.fullscreenFocus=!1,this.showOutline(t)))}onFocusIn(e){e.relatedTarget!==this.overlay&&(this.blurWhileOpened?this.blurWhileOpened=!1:this.showOutline(this.datePicker))}onFocusOut(e){this.fullscreenFocus||e.relatedTarget===this.overlay||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(e){e.relatedTarget!==this.datePicker&&(this.blurWhileOpened=!0)}onOpenedChanged(e){if(!1===e.detail.value&&this.blurWhileOpened)return this.blurWhileOpened=!1,void this.hideOutline(this.datePicker)}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class C extends O{constructor(e){super(e),this.addListeners(e)}addListeners(e){e.addEventListener("focusin",e=>this.onFocusIn(e)),e.addEventListener("focusout",e=>this.onFocusOut(e))}onFocusIn(e){const t=this.getFocusTarget(e);this.showOutline(t)}onFocusOut(e){const t=this.getFocusTarget(e);this.hideOutline(t)}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class T extends E{constructor(e,t){super(e),this.component=t}getFieldIndex(){return 0}}class L extends C{constructor(e,t){super(e),this.component=t,this.timePicker=e}getFocusTarget(e){return this.timePicker}getFieldIndex(){return 1}}class S extends O{constructor(e){super(e);const[t,s]=this.getFields();this.dateObserver=new T(t,e),this.timeObserver=new L(s,e)}getFields(){return this.component.$.customField.inputs}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class A extends C{getFields(){return this.component._checkboxes}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).filter(e=>-1!==t.indexOf(e))[0]}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class P extends C{getFields(){return this.component._radioButtons}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).filter(e=>-1!==t.indexOf(e))[0]}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class U extends C{constructor(e){super(e),this.blurWhileOpened=!1,this.overlay=e._overlayElement}addListeners(e){super.addListeners(e),e.addEventListener("opened-changed",t=>{e._phone&&!1===t.detail.value&&this.hideOutline(e)})}onFocusIn(e){this.overlay.contains(e.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(e)}onFocusOut(e){this.overlay.contains(e.relatedTarget)||super.onFocusOut(e)}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class I extends C{getFields(){return this.component.items||[]}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).filter(e=>-1!==t.indexOf(e))[0]}}
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/class $ extends(Object(u.a)(Object(c.a)(n.a))){static get is(){return"vaadin-field-outline"}static get template(){return n.b`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(e){const t="--_active-user-color";if(e){this.setAttribute("has-active-user","");const s=`var(--vaadin-user-color-${e.colorIndex})`;v(this,t,s),this._field&&v(this._field,t,s)}else this.removeAttribute("has-active-user"),v(this,t,"transparent"),this._field&&v(this._field,t,"transparent")}}customElements.define($.is,$);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
const j=new WeakMap;class z extends(Object(u.a)(Object(c.a)(n.a))){static init(e){if(!j.has(e)){const t=document.createElement(this.is);t._field=e,e.setAttribute("has-highlighter",""),window.ShadyDOM&&window.ShadyDOM.flush(),j.set(e,t),t.observer=this.initFieldObserver(e),e.shadowRoot.appendChild(t)}return j.get(e)}static initFieldObserver(e){let t;switch(e.tagName.toLowerCase()){case"vaadin-date-picker":t=new E(e);break;case"vaadin-date-time-picker":t=new S(e);break;case"vaadin-select":t=new U(e);break;case"vaadin-checkbox-group":t=new A(e);break;case"vaadin-radio-group":t=new P(e);break;case"vaadin-list-box":t=new I(e);break;default:t=new C(e)}return t}static addUser(e,t){this.init(e).addUser(t)}static removeUser(e,t){this.init(e).removeUser(t)}static setUsers(e,t){this.init(e).setUsers(t)}static get is(){return"vaadin-field-highlighter"}static get template(){return n.b`
      <style>
        :host {
          display: none;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"},users:{type:Array,value:()=>[]}}}ready(){super.ready(),this.redraw(),_.a.requestAvailability()}addUser(e){e&&(this.push("users",e),this.redraw(),this.user=e)}setUsers(e){Array.isArray(e)&&(this.set("users",e),this.redraw(),this.user=e[e.length-1]||null)}removeUser(e){if(e&&void 0!==e.id){let t;for(let s=0;s<this.users.length;s++)if(this.users[s].id===e.id){t=s;break}void 0!==t&&(this.splice("users",t,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw(Array.from(this.users).reverse())}_announce(e){const t=this._field.label||"";this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t?`${e} ${t}`:e}}))}_userChanged(e){e&&this._announce("root started editing")}}customElements.define(z.is,z);
/**
@license
Copyright (C) 2020 Vaadin Ltd
This program is available under Commercial Vaadin Runtime License 1.0 (CVRLv1).
For the full License, see http://vaadin.com/license/cvrl-1
*/
s(60),s(229),s(31),s(234),s(235),s(174),s(236);const R=function(e,t=!1){const s=document.createElement("template");s.innerHTML=e,document.head[t?"insertBefore":"appendChild"](s.content,document.head.firstChild)};let B;document.documentElement.setAttribute("theme","light"),R(`<dom-module id="flow_css_mod_0" theme-for="vaadin-body-wrapper"><template><style>${a}</style></template></dom-module>`),R(`<dom-module id="flow_css_mod_1" theme-for="vaadin-tabs"><template><style>${a}</style></template></dom-module>`),R(`<dom-module id="flow_css_mod_2" theme-for="vaadin-tab"><template><style>${a}</style></template></dom-module>`);const W=document.getElementsByTagName("script");for(let e=0;e<W.length;e++){const t=W[e];if("module"==t.getAttribute("type")&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){B=t;break}}if(!B)throw new Error("Could not find the bundle script to identify the application id");B["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const D=window.Vaadin.Flow.fallbacks;D[B.getAttribute("data-app-id")]={},D[B.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([s.e(1),s.e(3)]).then(s.bind(null,266))}}}]);