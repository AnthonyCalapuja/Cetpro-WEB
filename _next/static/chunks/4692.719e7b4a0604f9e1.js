"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4692],{44692:(e,t,i)=>{let a,r,n;i.r(t),i.d(t,{VideoPlayer:()=>b2});var s=i(19749),o=i(95155);let l={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},d={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},u={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},c=Object.entries(u),h=c.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),m=c.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(m).reduce((e,[t,i])=>{let a=h[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let p=Object.entries(h).reduce((e,[t,i])=>{let a=m[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),v="subtitles",b="captions",g="disabled",f="showing",E="unavailable",y="unsupported",k={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};function T(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function A(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function w(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function C(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function S(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function I(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let R=e=>new Promise(t=>setTimeout(t,e)),L={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},x=(null==(oj=globalThis.navigator)?void 0:oj.language)||"en",M=(e,t={})=>(e=>{var t,i,a;let[r]=x.split("-");return(null==(t=L[x])?void 0:t[e])||(null==(i=L[r])?void 0:i[e])||(null==(a=L.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),D=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],P=e=>{if(!S(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?M(D[t].singular):M(D[t].plural),`${e} ${i}`)}).filter(e=>e).join(", ");return i?M("{time} remaining",{time:r}):r};function O(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class N{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class U extends N{}class H extends U{constructor(){super(...arguments),this.role=null}}class B{observe(){}unobserve(){}disconnect(){}}let W={createElement:function(){return new $.HTMLElement},createElementNS:function(){return new $.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},$={ResizeObserver:B,document:W,Node:U,Element:H,HTMLElement:class extends H{constructor(){super(...arguments),this.innerHTML=""}get content(){return new $.DocumentFragment}},DocumentFragment:class extends N{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},q="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,V=Object.keys($).every(e=>e in globalThis),F=q&&!V?$:globalThis,K=q&&!V?W:globalThis.document,j=new WeakMap,Y=e=>{let t=j.get(e);return t||j.set(e,t=new Set),t},G=new F.ResizeObserver(e=>{for(let t of e)for(let e of Y(t.target))e(t)});function z(e,t){Y(e).add(t),G.observe(e)}function Q(e,t){let i=Y(e);i.delete(t),i.size||G.unobserve(e)}function Z(e){let t={};for(let i of e)t[i.name]=i.value;return t}function X(e){var t;return null!=(t=J(e))?t:ea(e,"media-controller")}function J(e){var t;let{MEDIA_CONTROLLER:i}=d,a=e.getAttribute(i);if(a)return null==(t=en(e))?void 0:t.getElementById(a)}let ee=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},et=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},ei=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ei(e,t.getRootNode().host)),ea=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||ea(e.getRootNode().host,t)};function er(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=er(i.shadowRoot))?t:i:null}function en(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function es(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function eo(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||el(e,t)}function el(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function ed(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function eu(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}ed(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ec(e,t){return e.hasAttribute(t)}function eh(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ec(e,t)!=i&&e.toggleAttribute(t,i)}function em(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function ep(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;em(e,t,void 0)!==a&&e.setAttribute(t,a)}var ev=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eb=(e,t,i)=>(ev(e,t,"read from private field"),i?i.call(e):t.get(e)),eg=(e,t,i,a)=>(ev(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ef extends F.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oY,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=eb(this,oY))?void 0:a.unassociateElement)||r.call(a,this),eg(this,oY,null)),i&&this.isConnected&&(eg(this,oY,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=eb(this,oY))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eg(this,oY,(i=this,(r=i.getAttribute(d.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):ea(i,"media-controller"))),this.getAttribute(d.MEDIA_CONTROLLER)&&(null==(t=null==(e=eb(this,oY))?void 0:e.associateElement)||t.call(e,this)),eb(this,oY)&&(eb(this,oY).addEventListener("pointerdown",this),eb(this,oY).addEventListener("click",this),eb(this,oY).hasAttribute("tabindex")||(eb(this,oY).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(d.MEDIA_CONTROLLER)&&(null==(t=null==(e=eb(this,oY))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=eb(this,oY))||i.removeEventListener("pointerdown",this),null==(a=eb(this,oY))||a.removeEventListener("click",this),eg(this,oY,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,"touch"===d)return void this.handleTap(e);if("mouse"===d||"pen"===d)return void this.handleMouseClick(e)}}}get mediaPaused(){return ec(this,h.MEDIA_PAUSED)}set mediaPaused(e){eh(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new F.CustomEvent(t,{composed:!0,bubbles:!0}))}}oY=new WeakMap,ef.shadowRootOptions={mode:"open"},ef.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},F.customElements.get("media-gesture-receiver")||F.customElements.define("media-gesture-receiver",ef);var eE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ey=(e,t,i)=>(eE(e,t,"read from private field"),i?i.call(e):t.get(e)),e_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ek=(e,t,i,a)=>(eE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eT=(e,t,i)=>(eE(e,t,"access private method"),i);let eA="audio",ew="autohide",eC="breakpoints",eS="gesturesdisabled",eI="keyboardcontrol",eR="noautohide",eL="userinactive",ex="autohideovercontrols",eM=Object.values(h);function eD(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(eC))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(m.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(m.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class eP extends F.HTMLElement{constructor(){if(super(),e_(this,o2),e_(this,o4),e_(this,o9),e_(this,o6),e_(this,le),e_(this,oG,void 0),e_(this,oz,0),e_(this,oQ,null),e_(this,oZ,null),e_(this,oX,void 0),this.breakpointsComputed=!1,e_(this,oJ,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),e_(this,o0,!1),e_(this,o1,e=>{ey(this,o0)||(setTimeout(()=>{eD(e.target,e.contentRect.width),ek(this,o0,!1)},0),ek(this,o0,!0))}),e_(this,li,void 0),e_(this,la,()=>{if(!ey(this,li).assignedElements({flatten:!0}).length){ey(this,oQ)&&this.mediaUnsetCallback(ey(this,oQ));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}ek(this,oG,new MutationObserver(ey(this,oJ)))}static get observedAttributes(){return[ew,eS].concat(eM).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==ew&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(ek(this,oQ,e),e.localName.includes("-")&&await F.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ey(this,oG).observe(this,{childList:!0,subtree:!0}),z(this,ey(this,o1));let t=null!=this.getAttribute(eA)?M("audio player"):M("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(eL,""),eD(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(ek(this,li,i),ey(this,li).addEventListener("slotchange",ey(this,la))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=F.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Q(this,ey(this,o1)),clearTimeout(ey(this,oZ)),ey(this,oG).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=F.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),ey(this,li)&&(ey(this,li).removeEventListener("slotchange",ey(this,la)),ek(this,li,null)),ek(this,o0,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){ek(this,oQ,null)}handleEvent(e){switch(e.type){case"pointerdown":ek(this,oz,e.timeStamp);break;case"pointermove":eT(this,o2,o3).call(this,e);break;case"pointerup":eT(this,o4,o5).call(this,e);break;case"mouseleave":eT(this,o9,o8).call(this);break;case"mouseup":this.removeAttribute(eI);break;case"keyup":eT(this,le,lt).call(this),this.setAttribute(eI,"")}}set autohide(e){let t=Number(e);ek(this,oX,isNaN(t)?0:t)}get autohide(){return(void 0===ey(this,oX)?2:ey(this,oX)).toString()}get breakpoints(){return em(this,eC)}set breakpoints(e){ep(this,eC,e)}get audio(){return ec(this,eA)}set audio(e){eh(this,eA,e)}get gesturesDisabled(){return ec(this,eS)}set gesturesDisabled(e){eh(this,eS,e)}get keyboardControl(){return ec(this,eI)}set keyboardControl(e){eh(this,eI,e)}get noAutohide(){return ec(this,eR)}set noAutohide(e){eh(this,eR,e)}get autohideOverControls(){return ec(this,ex)}set autohideOverControls(e){eh(this,ex,e)}get userInteractive(){return ec(this,eL)}set userInteractive(e){eh(this,eL,e)}}oG=new WeakMap,oz=new WeakMap,oQ=new WeakMap,oZ=new WeakMap,oX=new WeakMap,oJ=new WeakMap,o0=new WeakMap,o1=new WeakMap,o2=new WeakSet,o3=function(e){if("mouse"!==e.pointerType&&e.timeStamp-ey(this,oz)<250)return;eT(this,o6,o7).call(this),clearTimeout(ey(this,oZ));let t=this.hasAttribute(ex);([this,this.media].includes(e.target)||t)&&eT(this,le,lt).call(this)},o4=new WeakSet,o5=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(eL);[this,this.media].includes(e.target)&&t?eT(this,o9,o8).call(this):eT(this,le,lt).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&eT(this,le,lt).call(this)},o9=new WeakSet,o8=function(){if(0>ey(this,oX)||this.hasAttribute(eL))return;this.setAttribute(eL,"");let e=new F.CustomEvent(m.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},o6=new WeakSet,o7=function(){if(!this.hasAttribute(eL))return;this.removeAttribute(eL);let e=new F.CustomEvent(m.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},le=new WeakSet,lt=function(){eT(this,o6,o7).call(this),clearTimeout(ey(this,oZ));let e=parseInt(this.autohide);e<0||ek(this,oZ,setTimeout(()=>{eT(this,o9,o8).call(this)},1e3*e))},li=new WeakMap,la=new WeakMap,eP.shadowRootOptions={mode:"open"},eP.getTemplateHTML=function(e){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${eA}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${eA}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${eA}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${eA}])[${eS}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${eA}])[${eS}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${eA}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${eA}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${eA}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${eA}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${eR}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${eL}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${eA}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eR}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${eL}]:not([${eR}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${eA}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${eL}][${ex}]:not([${eR}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${eA}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${eA}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ef.shadowRootOptions.mode}">
          ${ef.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},F.customElements.get("media-container")||F.customElements.define("media-container",eP);var eO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eN=(e,t,i)=>(eO(e,t,"read from private field"),i?i.call(e):t.get(e)),eU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eH=(e,t,i,a)=>(eO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eB{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eU(this,ll),eU(this,lr,void 0),eU(this,ln,void 0),eU(this,ls,void 0),eU(this,lo,new Set),eH(this,lr,e),eH(this,ln,t),eH(this,ls,new Set(i))}[Symbol.iterator](){return eN(this,ll,ld).values()}get length(){return eN(this,ll,ld).size}get value(){var e;return null!=(e=[...eN(this,ll,ld)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eH(this,lo,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...eN(this,ll,ld)][e]}values(){return eN(this,ll,ld).values()}forEach(e,t){eN(this,ll,ld).forEach(e,t)}add(...e){var t,i;e.forEach(e=>eN(this,lo).add(e)),(""!==this.value||(null==(t=eN(this,lr))?void 0:t.hasAttribute(`${eN(this,ln)}`)))&&(null==(i=eN(this,lr))||i.setAttribute(`${eN(this,ln)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>eN(this,lo).delete(e)),null==(t=eN(this,lr))||t.setAttribute(`${eN(this,ln)}`,`${this.value}`)}contains(e){return eN(this,ll,ld).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}lr=new WeakMap,ln=new WeakMap,ls=new WeakMap,lo=new WeakMap,ll=new WeakSet,ld=function(){return eN(this,lo).size?eN(this,lo):eN(this,ls)};let eW=(e="")=>{let[t,i,a]=e.split(":");return{kind:"cc"===t?b:v,language:i,label:a?decodeURIComponent(a):void 0}},e$=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=eW(e);return{...t,...i}}),eq=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?eW(e):e):"string"==typeof e?e$(e):[e]:[],eV=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,eF=(e=[])=>Array.prototype.map.call(e,eV).join(" "),eK=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},ej=(e,t=[],i=[])=>{let a=eq(i).map(eK);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eY=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:eK(t);return Array.from(e.textTracks).filter(i)},eG=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},ez="exitFullscreen"in K?"exitFullscreen":"webkitExitFullscreen"in K?"webkitExitFullscreen":"webkitCancelFullScreen"in K?"webkitCancelFullScreen":void 0,eQ="fullscreenElement"in K?"fullscreenElement":"webkitFullscreenElement"in K?"webkitFullscreenElement":void 0,eZ="fullscreenEnabled"in K?"fullscreenEnabled":"webkitFullscreenEnabled"in K?"webkitFullscreenEnabled":void 0,eX=()=>{var e;return a||(a=null==(e=null==K?void 0:K.createElement)?void 0:e.call(K,"video"))},eJ=async(e=eX())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([e0(e,i.signal),e1(e,t)]);return i.abort(),a},e0=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),e1=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await R(10)}return e.volume!==t},e2=/.*Version\/.*Safari\/.*/.test(F.navigator.userAgent),e3=(e=eX())=>(!F.matchMedia("(display-mode: standalone)").matches||!e2)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),e4=(e=eX())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[eZ])||i&&"webkitSupportsFullscreen"in i})({documentElement:K,media:e}),e5=e4(),e9=e3(),e8=!!F.WebKitPlaybackTargetAvailabilityEvent,e6=!!F.chrome,e7=e=>eY(e.media,e=>[v,b].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),te=e=>eY(e.media,e=>e.mode===f&&[v,b].includes(e.kind)),tt=(e,t)=>{let i=e7(e),a=te(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)ej(g,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=F.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...F.navigator.languages]:F.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;ej(g,i,a),ej(f,i,[{language:n,label:s,kind:o}])}}},ti=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?ta(e,t):Object.entries(e).every(([e,i])=>e in t&&ti(i,t[e])))),ta=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>ti(e,t[i])))},tr=Object.values(k),tn=eJ().then(e=>r=e),ts=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof F.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=F.customElements.get(t);i&&e instanceof i||(await F.customElements.whenDefined(t),F.customElements.upgrade(e))}))},to=new F.DOMParser,tl={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==F.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&F.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;F.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===F.localStorage.getItem("media-chrome-pref-muted");tl.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?F.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||F.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=F.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;tl.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&S(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[k.LIVE,k.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(tr.includes(r))return r===k.UNKNOWN?a:r;let n=t.duration;return n===1/0?k.LIVE:Number.isFinite(n)?k.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=tl.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===k.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(tl.mediaStreamType.get(e)!==k.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>e7(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>te(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![b,v].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||tt(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=eY(i,{kind:"chapters"});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&to.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&ei(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!K.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else K.pictureInPictureElement&&K.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[eQ];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&"fullscreen"===i.webkitPresentationMode?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(eQ in e))return ei(n,r);for(;null==e?void 0:e[eQ];){if(e[eQ]===r)return!0;e=null==(t=e[eQ])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(ez){let e=null==(t=null==i?void 0:i[ez])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&"connected"===i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&F.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!e5||!e4(t))return y}},mediaPipUnavailable:{get(e){let{media:t}=e;return e9&&e3(t)?(null==t?void 0:t.disablePictureInPicture)?E:void 0:y}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return y},stateOwnersUpdateHandlers:[e=>{null==r&&tn.then(t=>e(t?void 0:y))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return e6&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?E:void 0:y},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>e8?(null==t?void 0:t.availability)==="not-available"?E:void 0:y,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:E:y},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?E:void 0:y},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},td={[l.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=eY(l,{kind:"metadata",label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[l.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[l.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===k.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[l.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[l.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[l.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[l.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[l.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[l.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[l.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[l.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=e7(t),s=eq(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&F.localStorage.setItem("media-chrome-pref-subtitles-lang",o),ej(f,n,s)},[l.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){ej(g,e7(t),null!=i?i:[])},[l.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){tt(t,i)},[l.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[l.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[l.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[l.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[l.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[l.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[l.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[l.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[l.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var tu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tc=(e,t,i)=>(tu(e,t,"read from private field"),i?i.call(e):t.get(e)),th=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tm=(e,t,i,a)=>(tu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tp=(e,t,i)=>(tu(e,t,"access private method"),i);let tv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],tb="defaultsubtitles",tg="defaultstreamtype",tf="defaultduration",tE="fullscreenelement",ty="hotkeys",t_="keyboardbackwardseekoffset",tk="keyboardforwardseekoffset",tT="keyboarddownvolumestep",tA="keyboardupvolumestep",tw="keysused",tC="lang",tS="loop",tI="liveedgeoffset",tR="noautoseektolive",tL="nodefaultstore",tx="nohotkeys",tM="nomutedpref",tD="nosubtitleslangpref",tP="novolumepref",tO="seektoliveoffset";class tN extends eP{constructor(){super(),th(this,lf),th(this,l_),th(this,lT),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,th(this,lu,new eB(this,ty)),th(this,lc,void 0),th(this,lh,void 0),th(this,lm,null),th(this,lp,void 0),th(this,lv,void 0),th(this,lb,e=>{var t;null==(t=tc(this,lh))||t.dispatch(e)}),th(this,lg,void 0),th(this,ly,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||tv.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",tc(this,ly))}),this.associateElement(this);let e={};tm(this,lp,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new F.CustomEvent(p[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(tx,ty,tg,tb,tf,tM,tP,tC,tS,tI,tO,tR)}get mediaStore(){return tc(this,lh)}set mediaStore(e){var t,i;(tc(this,lh)&&(null==(t=tc(this,lv))||t.call(this),tm(this,lv,void 0)),tm(this,lh,e),tc(this,lh)||this.hasAttribute(tL))?tm(this,lv,null==(i=tc(this,lh))?void 0:i.subscribe(tc(this,lp))):tp(this,lf,lE).call(this)}get fullscreenElement(){var e;return null!=(e=tc(this,lc))?e:this}set fullscreenElement(e){var t;this.hasAttribute(tE)&&this.removeAttribute(tE),tm(this,lc,e),null==(t=tc(this,lh))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ec(this,tb)}set defaultSubtitles(e){eh(this,tb,e)}get defaultStreamType(){return em(this,tg)}set defaultStreamType(e){ep(this,tg,e)}get defaultDuration(){return ed(this,tf)}set defaultDuration(e){eu(this,tf,e)}get noHotkeys(){return ec(this,tx)}set noHotkeys(e){eh(this,tx,e)}get keysUsed(){return em(this,tw)}set keysUsed(e){ep(this,tw,e)}get liveEdgeOffset(){return ed(this,tI)}set liveEdgeOffset(e){eu(this,tI,e)}get noAutoSeekToLive(){return ec(this,tR)}set noAutoSeekToLive(e){eh(this,tR,e)}get noVolumePref(){return ec(this,tP)}set noVolumePref(e){eh(this,tP,e)}get noMutedPref(){return ec(this,tM)}set noMutedPref(e){eh(this,tM,e)}get noSubtitlesLangPref(){return ec(this,tD)}set noSubtitlesLangPref(e){eh(this,tD,e)}get noDefaultStore(){return ec(this,tL)}set noDefaultStore(e){eh(this,tL,e)}get resolvedLang(){return(()=>{let[e]=x.split("-");return L[x]?x:L[e]?e:"en"})()}attributeChangedCallback(e,t,i){var a,r,n,s,o,d,u,c,h,m,p,v;if(super.attributeChangedCallback(e,t,i),e===tx)i!==t&&""===i?(this.hasAttribute(ty)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===ty)tc(this,lu).value=i;else if(e===tb&&i!==t)null==(a=tc(this,lh))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tb)}});else if(e===tg)null==(n=tc(this,lh))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(tg))?r:void 0}});else if(e===tI&&i!==t)null==(s=tc(this,lh))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(tI)?+this.getAttribute(tI):void 0,seekToLiveOffset:this.hasAttribute(tO)?+this.getAttribute(tO):this.hasAttribute(tI)?+this.getAttribute(tI):void 0}});else if(e===tO&&i!==t)null==(o=tc(this,lh))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(tO)?+this.getAttribute(tO):this.hasAttribute(tI)?+this.getAttribute(tI):void 0}});else if(e===tR)null==(d=tc(this,lh))||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(tR)}});else if(e===tE){let e=i?null==(u=this.getRootNode())?void 0:u.getElementById(i):void 0;tm(this,lc,e),null==(c=tc(this,lh))||c.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===tC&&i!==t?(x=i,null==(h=tc(this,lh))||h.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===tS&&i!==t?null==(m=tc(this,lh))||m.dispatch({type:l.MEDIA_LOOP_REQUEST,detail:null!=i}):e===tP&&i!==t?null==(p=tc(this,lh))||p.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(tP)}}):e===tM&&i!==t&&(null==(v=tc(this,lh))||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(tM)}}))}connectedCallback(){var e,t,i;this.associateElement(this),tc(this,lh)||this.hasAttribute(tL)||tp(this,lf,lE).call(this),null==(e=tc(this,lh))||e.dispatch({type:"documentelementchangerequest",detail:K}),null==(t=tc(this,lh))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),tc(this,lh)&&!tc(this,lv)&&tm(this,lv,null==(i=tc(this,lh))?void 0:i.subscribe(tc(this,lp))),void 0!==tc(this,lg)&&tc(this,lh)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=tc(this,lh))||i.dispatch({type:l.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:tc(this,lg)}))},0),this.hasAttribute(tx)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),tc(this,lh)){let e=tc(this,lh).getState();tm(this,lg,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=tc(this,lh))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=tc(this,lh))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=tc(this,lh))||r.dispatch({type:l.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}tc(this,lv)&&(null==(n=tc(this,lv))||n.call(this),tm(this,lv,void 0)),this.unassociateElement(this),tc(this,lm)&&(tc(this,lm).remove(),tm(this,lm,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=tc(this,lh))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=tc(this,lh))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){tK(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=tj(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(l).forEach(t=>{e.addEventListener(t,tc(this,lb))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(l).forEach(t=>{e.removeEventListener(t,tc(this,lb))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),tc(this,lh)&&Object.entries(tc(this,lh).getState()).forEach(([t,i])=>{tK([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tp(this,l_,lk))}disableHotkeys(){this.removeEventListener("keydown",tp(this,l_,lk)),this.removeEventListener("keyup",tc(this,ly))}get hotkeys(){return tc(this,lu)}set hotkeys(e){ep(this,ty,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,d,u;let c,h,m,p=e.target;if(!((null!=(a=null!=(i=null==(t=p.getAttribute(tw))?void 0:t.split(" "))?i:null==p?void 0:p.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||tc(this,lu).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&tc(this,lu).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&tc(this,lu).contains("noshift+/")))switch(e.key){case" ":case"k":c=tc(this,lh).getState().mediaPaused?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new F.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"m":c="off"===this.mediaStore.getState().mediaVolumeLevel?l.MEDIA_UNMUTE_REQUEST:l.MEDIA_MUTE_REQUEST,this.dispatchEvent(new F.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"f":c=this.mediaStore.getState().mediaIsFullscreen?l.MEDIA_EXIT_FULLSCREEN_REQUEST:l.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new F.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new F.CustomEvent(l.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(t_)?+this.getAttribute(t_):10;h=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),m=new F.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"ArrowRight":case"l":{let e=this.hasAttribute(tk)?+this.getAttribute(tk):10;h=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),m=new F.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"ArrowUp":{let e=this.hasAttribute(tA)?+this.getAttribute(tA):.025;h=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),m=new F.CustomEvent(l.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"ArrowDown":{let e=this.hasAttribute(tT)?+this.getAttribute(tT):.025;h=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),m=new F.CustomEvent(l.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break}case"<":h=Math.max((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)-.25,.25).toFixed(2),m=new F.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break;case">":h=Math.min((null!=(u=this.mediaStore.getState().mediaPlaybackRate)?u:1)+.25,2).toFixed(2),m=new F.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(m);break;case"/":case"?":e.shiftKey&&tp(this,lT,lA).call(this);break;case"p":c=this.mediaStore.getState().mediaIsPip?l.MEDIA_EXIT_PIP_REQUEST:l.MEDIA_ENTER_PIP_REQUEST,m=new F.CustomEvent(c,{composed:!0,bubbles:!0}),this.dispatchEvent(m)}}}lu=new WeakMap,lc=new WeakMap,lh=new WeakMap,lm=new WeakMap,lp=new WeakMap,lv=new WeakMap,lb=new WeakMap,lg=new WeakMap,lf=new WeakSet,lE=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=tl,requestMap:r=td,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||ti(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,f,E,y,k,T,A,w,C;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await ts(...Object.values(e));let I=l.length>0&&0===t&&s,R=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),x=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),D=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),P=d.documentElement!==o.documentElement,O=!!d.media&&(R||I),N=!!(null==(f=d.media)?void 0:f.textTracks)&&(L||I),U=!!(null==(E=d.media)?void 0:E.videoRenditions)&&(x||I),H=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||I),B=!!(null==(k=d.media)?void 0:k.remote)&&(D||I),W=!!d.documentElement&&(P||I),$=O||N||U||H||B||W,q=0===l.length&&1===t&&s,V=!!o.media&&(R||q),F=!!(null==(T=o.media)?void 0:T.textTracks)&&(L||q),K=!!(null==(A=o.media)?void 0:A.videoRenditions)&&(x||q),j=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||q),Y=!!(null==(C=o.media)?void 0:C.remote)&&(D||q),G=!!o.documentElement&&(P||q),z=V||F||K||j||Y||G;if(!($||z)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&N&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),K&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),j&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),Y&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),G&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&$&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),z){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tb),defaultDuration:this.hasAttribute(tf)?+this.getAttribute(tf):void 0,defaultStreamType:null!=(e=this.getAttribute(tg))?e:void 0,liveEdgeOffset:this.hasAttribute(tI)?+this.getAttribute(tI):void 0,seekToLiveOffset:this.hasAttribute(tO)?+this.getAttribute(tO):this.hasAttribute(tI)?+this.getAttribute(tI):void 0,noAutoSeekToLive:this.hasAttribute(tR),noVolumePref:this.hasAttribute(tP),noMutedPref:this.hasAttribute(tM),noSubtitlesLangPref:this.hasAttribute(tD)}})},ly=new WeakMap,l_=new WeakSet,lk=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=tc(this,lm))?void 0:t.open)||i||a||!s&&!tv.includes(r))return void this.removeEventListener("keyup",tc(this,ly));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||tc(this,lu).contains(`no${r.toLowerCase()}`)||" "===r&&tc(this,lu).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",tc(this,ly),{once:!0})},lT=new WeakSet,lA=function(){tc(this,lm)||(tm(this,lm,K.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(tc(this,lm))),tc(this,lm).open=!0};let tU=Object.values(h),tH=Object.values(u),tB=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(F.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,d.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>tU.includes(e)):[]},tW=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&F.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof F.customElements.get(e.nodeName.toLowerCase()))&&F.customElements.upgrade(e),tH.some(t=>t in e)||!!tB(e).length},t$=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},tq={[h.MEDIA_SUBTITLES_LIST]:eF,[h.MEDIA_SUBTITLES_SHOWING]:eF,[h.MEDIA_SEEKABLE]:t$,[h.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(t$).join(" "),[h.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[h.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(T).join(" ")},[h.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(w).join(" ")}},tV=async(e,t,i)=>{var a,r;if(e.isConnected||await R(0),"boolean"==typeof i||null==i)return eh(e,t,i);if("number"==typeof i)return eu(e,t,i);if("string"==typeof i)return ep(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=tq[t])?void 0:a.call(tq,i))?r:i;return e.setAttribute(t,n)},tF=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;tW(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>tF(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!tW(e)?F.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},tK=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=tB(e),r=t.toLowerCase();a.includes(r)&&tV(e,r,i)})},tj=(e,t,i)=>{tF(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(l.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(l.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>tF(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>tF(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tF(e,t)),Array.prototype.forEach.call(r,e=>tF(e,i))):"attributes"===n&&o===d.MEDIA_CHROME_ATTRIBUTES&&(tW(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tF(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(l.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(l.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};F.customElements.get("media-controller")||F.customElements.define("media-controller",tN);let tY="placement",tG="bounds";class tz extends F.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!es(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=ea(this,"#"+this.bounds))?e:X(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[tY,tG]}get placement(){return em(this,tY)}set placement(e){ep(this,tY,e)}get bounds(){return em(this,tG)}set bounds(e){ep(this,tG,e)}}tz.shadowRootOptions={mode:"open"},tz.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},F.customElements.get("media-tooltip")||F.customElements.define("media-tooltip",tz);var tQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tZ=(e,t,i)=>(tQ(e,t,"read from private field"),i?i.call(e):t.get(e)),tX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tJ=(e,t,i,a)=>(tQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let t0="tooltipplacement",t1="disabled",t2="notooltip";class t3 extends F.HTMLElement{constructor(){if(super(),tX(this,lL),tX(this,lw,void 0),this.preventClick=!1,this.tooltipEl=null,tX(this,lC,e=>{this.preventClick||this.handleClick(e),setTimeout(tZ(this,lS),0)}),tX(this,lS,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),tX(this,lI,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",tZ(this,lI))}),tX(this,lR,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",tZ(this,lI)):this.addEventListener("keyup",tZ(this,lI),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",t0,d.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",tZ(this,lC)),this.addEventListener("keydown",tZ(this,lR)),this.tabIndex=0}disable(){this.removeEventListener("click",tZ(this,lC)),this.removeEventListener("keydown",tZ(this,lR)),this.removeEventListener("keyup",tZ(this,lI)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tZ(this,lw))?void 0:a.unassociateElement)||r.call(a,this),tJ(this,lw,null)),i&&this.isConnected&&(tJ(this,lw,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=tZ(this,lw))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===t0&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),tZ(this,lS).call(this)}connectedCallback(){var e,t,i;let{style:a}=eo(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(d.MEDIA_CONTROLLER);r&&(tJ(this,lw,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=tZ(this,lw))?void 0:t.associateElement)||i.call(t,this)),F.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=lL,t=lx,tQ(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=tZ(this,lw))?void 0:e.unassociateElement)||t.call(e,this),tJ(this,lw,null),this.removeEventListener("mouseenter",tZ(this,lS)),this.removeEventListener("focus",tZ(this,lS)),this.removeEventListener("click",tZ(this,lC))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return em(this,t0)}set tooltipPlacement(e){ep(this,t0,e)}get mediaController(){return em(this,d.MEDIA_CONTROLLER)}set mediaController(e){ep(this,d.MEDIA_CONTROLLER,e)}get disabled(){return ec(this,t1)}set disabled(e){eh(this,t1,e)}get noTooltip(){return ec(this,t2)}set noTooltip(e){eh(this,t2,e)}handleClick(e){}}lw=new WeakMap,lC=new WeakMap,lS=new WeakMap,lI=new WeakMap,lR=new WeakMap,lL=new WeakSet,lx=function(){this.addEventListener("mouseenter",tZ(this,lS)),this.addEventListener("focus",tZ(this,lS)),this.addEventListener("click",tZ(this,lC));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},t3.shadowRootOptions={mode:"open"},t3.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${tz.shadowRootOptions.mode}">
          ${tz.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},t3.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},t3.getTooltipContentHTML=function(){return""},F.customElements.get("media-chrome-button")||F.customElements.define("media-chrome-button",t3);let t4=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,t5=e=>{let t=e.mediaIsAirplaying?M("stop airplay"):M("start airplay");e.setAttribute("aria-label",t)};class t9 extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),t5(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_AIRPLAYING&&t5(this)}get mediaIsAirplaying(){return ec(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){eh(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return em(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ep(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new F.CustomEvent(l.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}t9.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${t4}</slot>
      <slot name="exit">${t4}</slot>
    </slot>
  `},t9.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${M("start airplay")}</slot>
    <slot name="tooltip-exit">${M("stop airplay")}</slot>
  `},F.customElements.get("media-airplay-button")||F.customElements.define("media-airplay-button",t9);let t8=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,t6=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,t7=e=>{e.setAttribute("aria-checked",eG(e).toString())};class ie extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",M("closed captions")),t7(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_SHOWING&&t7(this)}get mediaSubtitlesList(){return it(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ii(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return it(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ii(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new F.CustomEvent(l.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}ie.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${t8}</slot>
      <slot name="off">${t6}</slot>
    </slot>
  `},ie.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${M("Enable captions")}</slot>
    <slot name="tooltip-disable">${M("Disable captions")}</slot>
  `};let it=(e,t)=>{let i=e.getAttribute(t);return i?e$(i):[]},ii=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=eF(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};F.customElements.get("media-captions-button")||F.customElements.define("media-captions-button",ie);let ia=e=>{let t=e.mediaIsCasting?M("stop casting"):M("start casting");e.setAttribute("aria-label",t)};class ir extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ia(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_CASTING&&ia(this)}get mediaIsCasting(){return ec(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){eh(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return em(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ep(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?l.MEDIA_EXIT_CAST_REQUEST:l.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new F.CustomEvent(e,{composed:!0,bubbles:!0}))}}ir.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},ir.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${M("Start casting")}</slot>
    <slot name="tooltip-exit">${M("Stop casting")}</slot>
  `},F.customElements.get("media-cast-button")||F.customElements.define("media-cast-button",ir);var is=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},io=(e,t,i)=>(is(e,t,"read from private field"),i?i.call(e):t.get(e)),il=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},id=(e,t,i,a)=>(is(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iu=(e,t,i)=>(is(e,t,"access private method"),i);let ic="open";class ih extends F.HTMLElement{constructor(){super(),il(this,lO),il(this,lU),il(this,lB),il(this,l$),il(this,lV),il(this,lK),il(this,lM,!1),il(this,lD,null),il(this,lP,null)}static get observedAttributes(){return[ic,"anchor"]}get open(){return ec(this,ic)}set open(e){eh(this,ic,e)}handleEvent(e){switch(e.type){case"invoke":iu(this,l$,lq).call(this,e);break;case"focusout":iu(this,lV,lF).call(this,e);break;case"keydown":iu(this,lK,lj).call(this,e)}}connectedCallback(){iu(this,lO,lN).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){iu(this,lO,lN).call(this),e===ic&&i!==t&&(this.open?iu(this,lU,lH).call(this):iu(this,lB,lW).call(this))}focus(){id(this,lD,er());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}lM=new WeakMap,lD=new WeakMap,lP=new WeakMap,lO=new WeakSet,lN=function(){if(!io(this,lM)&&(id(this,lM,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=eo(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},lU=new WeakSet,lH=function(){var e;null==(e=io(this,lP))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},lB=new WeakSet,lW=function(){var e;null==(e=io(this,lP))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},l$=new WeakSet,lq=function(e){id(this,lP,e.relatedTarget),ei(this,e.relatedTarget)||(this.open=!this.open)},lV=new WeakSet,lF=function(e){var t;!ei(this,e.relatedTarget)&&(null==(t=io(this,lD))||t.focus(),io(this,lP)&&io(this,lP)!==e.relatedTarget&&this.open&&(this.open=!1))},lK=new WeakSet,lj=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=io(this,lD))||n.focus(),this.open=!1))},ih.shadowRootOptions={mode:"open"},ih.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},ih.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},F.customElements.get("media-chrome-dialog")||F.customElements.define("media-chrome-dialog",ih);var im=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ip=(e,t,i)=>(im(e,t,"read from private field"),i?i.call(e):t.get(e)),iv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ib=(e,t,i,a)=>(im(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ig=(e,t,i)=>(im(e,t,"access private method"),i);class iE extends F.HTMLElement{constructor(){if(super(),iv(this,l2),iv(this,l4),iv(this,l9),iv(this,l6),iv(this,de),iv(this,di),iv(this,dr),iv(this,ds),iv(this,lY,void 0),iv(this,lG,void 0),iv(this,lz,void 0),iv(this,lQ,void 0),iv(this,lZ,{}),iv(this,lX,[]),iv(this,lJ,()=>{if(this.range.matches(":focus-visible")){let{style:e}=eo(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),iv(this,l0,()=>{let{style:e}=eo(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),iv(this,l1,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),ib(this,lz,this.shadowRoot.querySelector("#startpoint")),ib(this,lQ,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",d.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ip(this,lY))?void 0:a.unassociateElement)||r.call(a,this),ib(this,lY,null)),i&&this.isConnected&&(ib(this,lY,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ip(this,lY))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),ig(this,l4,l5).call(this)):(this.range.setAttribute(e,i),ig(this,l9,l8).call(this)))}connectedCallback(){var e,t,i;let{style:a}=eo(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ip(this,lZ).pointer=eo(this.shadowRoot,"#pointer"),ip(this,lZ).progress=eo(this.shadowRoot,"#progress"),ip(this,lZ).thumb=eo(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ip(this,lZ).activeSegment=eo(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(d.MEDIA_CONTROLLER);r&&(ib(this,lY,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ip(this,lY))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ip(this,lJ)),this.shadowRoot.addEventListener("focusout",ip(this,l0)),ig(this,l4,l5).call(this),z(this.container,ip(this,l1))}disconnectedCallback(){var e,t;ig(this,l9,l8).call(this),null==(t=null==(e=ip(this,lY))?void 0:e.unassociateElement)||t.call(e,this),ib(this,lY,null),this.shadowRoot.removeEventListener("focusin",ip(this,lJ)),this.shadowRoot.removeEventListener("focusout",ip(this,l0)),Q(this.container,ip(this,l1))}updatePointerBar(e){var t;null==(t=ip(this,lZ).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ip(this,lZ).progress)||e.style.setProperty("width",`${i}%`),null==(t=ip(this,lZ).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ib(this,lX,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=K.createElementNS("http://www.w3.org/2000/svg","rect"),c=el(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=ip(this,lz).getBoundingClientRect(),n=(r=ip(this,lQ).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ig(this,ds,dl).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ig(this,de,dt).call(this,e);break;case"pointerdown":ig(this,l6,l7).call(this,e);break;case"pointerup":ig(this,di,da).call(this);break;case"pointerleave":ig(this,dr,dn).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}lY=new WeakMap,lG=new WeakMap,lz=new WeakMap,lQ=new WeakMap,lZ=new WeakMap,lX=new WeakMap,lJ=new WeakMap,l0=new WeakMap,l1=new WeakMap,l2=new WeakSet,l3=function(e){let t=ip(this,lZ).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ip(this,lX).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},l4=new WeakSet,l5=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},l9=new WeakSet,l8=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=F.window)||e.removeEventListener("pointerup",this),null==(t=F.window)||t.removeEventListener("pointermove",this)},l6=new WeakSet,l7=function(e){var t;ib(this,lG,e.composedPath().includes(this.range)),null==(t=F.window)||t.addEventListener("pointerup",this,{once:!0})},de=new WeakSet,dt=function(e){var t;"mouse"!==e.pointerType&&ig(this,l6,l7).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=F.window)||t.addEventListener("pointermove",this)},di=new WeakSet,da=function(){var e;null==(e=F.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},dr=new WeakSet,dn=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=F.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ip(this,lZ).activeSegment)||t.style.removeProperty("transform")},ds=new WeakSet,dl=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),ig(this,l2,l3).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ip(this,lG))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},iE.shadowRootOptions={mode:"open"},iE.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},iE.getContainerTemplateHTML=function(e){return""},F.customElements.get("media-chrome-range")||F.customElements.define("media-chrome-range",iE);var iy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i_=(e,t,i)=>(iy(e,t,"read from private field"),i?i.call(e):t.get(e)),ik=(e,t,i,a)=>(iy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iT extends F.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dd,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=i_(this,dd))?void 0:a.unassociateElement)||r.call(a,this),ik(this,dd,null)),i&&this.isConnected&&(ik(this,dd,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=i_(this,dd))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(d.MEDIA_CONTROLLER);a&&(ik(this,dd,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=i_(this,dd))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=i_(this,dd))?void 0:e.unassociateElement)||t.call(e,this),ik(this,dd,null)}}dd=new WeakMap,iT.shadowRootOptions={mode:"open"},iT.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},F.customElements.get("media-control-bar")||F.customElements.define("media-control-bar",iT);var iA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iw=(e,t,i)=>(iA(e,t,"read from private field"),i?i.call(e):t.get(e)),iC=(e,t,i,a)=>(iA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iS extends F.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,du,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iw(this,du))?void 0:a.unassociateElement)||r.call(a,this),iC(this,du,null)),i&&this.isConnected&&(iC(this,du,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iw(this,du))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=eo(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(d.MEDIA_CONTROLLER);r&&(iC(this,du,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iw(this,du))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iw(this,du))?void 0:e.unassociateElement)||t.call(e,this),iC(this,du,null)}}du=new WeakMap,iS.shadowRootOptions={mode:"open"},iS.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},iS.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},F.customElements.get("media-text-display")||F.customElements.define("media-text-display",iS);var iI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iR=(e,t,i)=>(iI(e,t,"read from private field"),i?i.call(e):t.get(e));class iL extends iS{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dc,void 0),((e,t,i)=>(iI(e,t,"write to private field"),t.set(e,i)))(this,dc,this.shadowRoot.querySelector("slot")),iR(this,dc).textContent=O(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===h.MEDIA_DURATION&&(iR(this,dc).textContent=O(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return ed(this,h.MEDIA_DURATION)}set mediaDuration(e){eu(this,h.MEDIA_DURATION,e)}}dc=new WeakMap,iL.getSlotTemplateHTML=function(e,t){return`
    <slot>${O(t.mediaDuration)}</slot>
  `},F.customElements.get("media-duration-display")||F.customElements.define("media-duration-display",iL);let ix={2:M("Network Error"),3:M("Decode Error"),4:M("Source Not Supported"),5:M("Encryption Error")},iM={2:M("A network error caused the media download to fail."),3:M("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:M("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:M("The media is encrypted and there are no keys to decrypt it.")},iD=e=>{var t,i;return 1===e.code?null:{title:null!=(t=ix[e.code])?t:`Error ${e.code}`,message:null!=(i=iM[e.code])?i:e.message}};var iP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function iO(e){var t;let{title:i,message:a}=null!=(t=iD(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let iN=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class iU extends ih{constructor(){super(...arguments),((e,t)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,null)})(this,dh)}static get observedAttributes(){return[...super.observedAttributes,...iN]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!iN.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==iD(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=iD(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e;return iP(this,e=dh,"read from private field"),e.get(this)}set mediaError(e){var t;iP(this,t=dh,"write to private field"),t.set(this,e)}get mediaErrorCode(){return ed(this,"mediaerrorcode")}set mediaErrorCode(e){eu(this,"mediaerrorcode",e)}get mediaErrorMessage(){return em(this,"mediaerrormessage")}set mediaErrorMessage(e){ep(this,"mediaerrormessage",e)}}dh=new WeakMap,iU.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${iO({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},iU.formatErrorMessage=iO,F.customElements.get("media-error-dialog")||F.customElements.define("media-error-dialog",iU);var iH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},iB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class iW extends ih{constructor(){super(...arguments),iB(this,dm,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),iB(this,dp,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",iH(this,dm)),document.addEventListener("keydown",iH(this,dp)))}disconnectedCallback(){this.removeEventListener("click",iH(this,dm)),document.removeEventListener("keydown",iH(this,dp))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",iH(this,dm)),document.addEventListener("keydown",iH(this,dp))):(this.removeEventListener("click",iH(this,dm)),document.removeEventListener("keydown",iH(this,dp))))}}dm=new WeakMap,dp=new WeakMap,iW.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},F.customElements.get("media-keyboard-shortcuts-dialog")||F.customElements.define("media-keyboard-shortcuts-dialog",iW);var i$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let iq=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,iV=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,iF=e=>{let t=e.mediaIsFullscreen?M("exit fullscreen mode"):M("enter fullscreen mode");e.setAttribute("aria-label",t)};class iK extends t3{constructor(){super(...arguments),((e,t)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,null)})(this,dv)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iF(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_FULLSCREEN&&iF(this)}get mediaFullscreenUnavailable(){return em(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ep(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ec(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){eh(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i;i$(this,t=dv,"write to private field"),t.set(this,e);let a=(i$(this,i=dv,"read from private field"),i.get(this)instanceof PointerEvent),r=this.mediaIsFullscreen?new F.CustomEvent(l.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new F.CustomEvent(l.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}dv=new WeakMap,iK.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iq}</slot>
      <slot name="exit">${iV}</slot>
    </slot>
  `},iK.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${M("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${M("Exit fullscreen mode")}</slot>
  `},F.customElements.get("media-fullscreen-button")||F.customElements.define("media-fullscreen-button",iK);let{MEDIA_TIME_IS_LIVE:ij,MEDIA_PAUSED:iY}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:iG,MEDIA_PLAY_REQUEST:iz}=l,iQ=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?M("seek to live"):M("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=M("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class iZ extends t3{static get observedAttributes(){return[...super.observedAttributes,ij,iY]}connectedCallback(){super.connectedCallback(),iQ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),iQ(this)}get mediaPaused(){return ec(this,h.MEDIA_PAUSED)}set mediaPaused(e){eh(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ec(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){eh(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new F.CustomEvent(iG,{composed:!0,bubbles:!0})),this.hasAttribute(iY)&&this.dispatchEvent(new F.CustomEvent(iz,{composed:!0,bubbles:!0})))}}iZ.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ij}]:not([${iY}])) slot[name=indicator] > *,
      :host([${ij}]:not([${iY}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ij}]:not([${iY}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${M("live")}</slot>
  `},F.customElements.get("media-live-button")||F.customElements.define("media-live-button",iZ);var iX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iJ=(e,t,i)=>(iX(e,t,"read from private field"),i?i.call(e):t.get(e)),i0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i1=(e,t,i,a)=>(iX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let i2="loadingdelay",i3="noautohide",i4=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class i5 extends F.HTMLElement{constructor(){if(super(),i0(this,db,void 0),i0(this,dg,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,i2]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i2&&t!==i?this.loadingDelay=Number(i):e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iJ(this,db))?void 0:a.unassociateElement)||r.call(a,this),i1(this,db,null)),i&&this.isConnected&&(i1(this,db,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iJ(this,db))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(d.MEDIA_CONTROLLER);a&&(i1(this,db,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iJ(this,db))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iJ(this,db))?void 0:e.unassociateElement)||t.call(e,this),i1(this,db,null)}get loadingDelay(){return iJ(this,dg)}set loadingDelay(e){i1(this,dg,e);let{style:t}=eo(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ec(this,h.MEDIA_PAUSED)}set mediaPaused(e){eh(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return ec(this,h.MEDIA_LOADING)}set mediaLoading(e){eh(this,h.MEDIA_LOADING,e)}get mediaController(){return em(this,d.MEDIA_CONTROLLER)}set mediaController(e){ep(this,d.MEDIA_CONTROLLER,e)}get noAutohide(){return ec(this,i3)}set noAutohide(e){eh(this,i3,e)}}db=new WeakMap,dg=new WeakMap,i5.shadowRootOptions={mode:"open"},i5.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${i4}</slot>
    <div id="status" role="status" aria-live="polite">${M("media loading")}</div>
  `},F.customElements.get("media-loading-indicator")||F.customElements.define("media-loading-indicator",i5);let i9=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,i8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,i6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,i7=e=>{let t="off"===e.mediaVolumeLevel?M("unmute"):M("mute");e.setAttribute("aria-label",t)};class ae extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),i7(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_VOLUME_LEVEL&&i7(this)}get mediaVolumeLevel(){return em(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ep(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?l.MEDIA_UNMUTE_REQUEST:l.MEDIA_MUTE_REQUEST;this.dispatchEvent(new F.CustomEvent(e,{composed:!0,bubbles:!0}))}}ae.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${i9}</slot>
      <slot name="low">${i8}</slot>
      <slot name="medium">${i8}</slot>
      <slot name="high">${i6}</slot>
    </slot>
  `},ae.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${M("Mute")}</slot>
    <slot name="tooltip-unmute">${M("Unmute")}</slot>
  `},F.customElements.get("media-mute-button")||F.customElements.define("media-mute-button",ae);let at=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,ai=e=>{let t=e.mediaIsPip?M("exit picture in picture mode"):M("enter picture in picture mode");e.setAttribute("aria-label",t)};class aa extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ai(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_IS_PIP&&ai(this)}get mediaPipUnavailable(){return em(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ep(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ec(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){eh(this,h.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?l.MEDIA_EXIT_PIP_REQUEST:l.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new F.CustomEvent(e,{composed:!0,bubbles:!0}))}}aa.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${at}</slot>
      <slot name="exit">${at}</slot>
    </slot>
  `},aa.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${M("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${M("Exit picture in picture mode")}</slot>
  `},F.customElements.get("media-pip-button")||F.customElements.define("media-pip-button",aa);var ar=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let an="rates",as=[1,1.2,1.5,1.7,2];function ao(e){return Math.round(100*e)/100}class al extends t3{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,df,new eB(this,an,{defaultValue:as})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ao(null!=(e=this.mediaPlaybackRate)?e:1)}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,an]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===an&&(ar(this,df).value=i),e===h.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=ao(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",M("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return ar(this,df)}set rates(e){e?Array.isArray(e)?ar(this,df).value=e.join(" "):"string"==typeof e&&(ar(this,df).value=e):ar(this,df).value=""}get mediaPlaybackRate(){return ed(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eu(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(ar(this,df).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new F.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}df=new WeakMap,al.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?ao(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},al.getTooltipContentHTML=function(){return M("Playback rate")},F.customElements.get("media-playback-rate-button")||F.customElements.define("media-playback-rate-button",al);let ad=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,au=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ac=e=>{let t=e.mediaPaused?M("play"):M("pause");e.setAttribute("aria-label",t)};class ah extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ac(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&ac(this)}get mediaPaused(){return ec(this,h.MEDIA_PAUSED)}set mediaPaused(e){eh(this,h.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new F.CustomEvent(e,{composed:!0,bubbles:!0}))}}ah.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ad}</slot>
      <slot name="pause">${au}</slot>
    </slot>
  `},ah.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${M("Play")}</slot>
    <slot name="tooltip-pause">${M("Pause")}</slot>
  `},F.customElements.get("media-play-button")||F.customElements.define("media-play-button",ah);let am="placeholdersrc";class ap extends F.HTMLElement{static get observedAttributes(){return[am,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===am)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return em(this,am)}set placeholderSrc(e){ep(this,"src",e)}get src(){return em(this,"src")}set src(e){ep(this,"src",e)}}ap.shadowRootOptions={mode:"open"},ap.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},F.customElements.get("media-poster-image")||F.customElements.define("media-poster-image",ap);var av=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class ab extends iS{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dE,void 0),((e,t,i)=>(av(e,t,"write to private field"),t.set(e,i)))(this,dE,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&i!==t&&null!=i){var a;if((av(this,a=dE,"read from private field"),a.get(this)).textContent=i,""!==i){let e=M("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return em(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ep(this,h.MEDIA_PREVIEW_CHAPTER,e)}}dE=new WeakMap,F.customElements.get("media-preview-chapter-display")||F.customElements.define("media-preview-chapter-display",ab);var ag=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},af=(e,t,i)=>(ag(e,t,"read from private field"),i?i.call(e):t.get(e)),aE=(e,t,i,a)=>(ag(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ay extends F.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dy,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[d.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(d.MEDIA_CONTROLLER);a&&(aE(this,dy,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=af(this,dy))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=af(this,dy))?void 0:e.unassociateElement)||t.call(e,this),aE(this,dy,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===d.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=af(this,dy))?void 0:a.unassociateElement)||r.call(a,this),aE(this,dy,null)),i&&this.isConnected&&(aE(this,dy,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=af(this,dy))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return em(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ep(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(h.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=eo(this.shadowRoot,":host"),v=eo(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let f=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,f(),b.onload=null},b.src=l,f()),f(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}dy=new WeakMap,ay.shadowRootOptions={mode:"open"},ay.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},F.customElements.get("media-preview-thumbnail")||F.customElements.define("media-preview-thumbnail",ay);var a_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ak=(e,t,i)=>(a_(e,t,"read from private field"),i?i.call(e):t.get(e));class aT extends iS{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,d_,void 0),((e,t,i)=>(a_(e,t,"write to private field"),t.set(e,i)))(this,d_,this.shadowRoot.querySelector("slot")),ak(this,d_).textContent=O(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_PREVIEW_TIME&&null!=i&&(ak(this,d_).textContent=O(parseFloat(i)))}get mediaPreviewTime(){return ed(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){eu(this,h.MEDIA_PREVIEW_TIME,e)}}d_=new WeakMap,F.customElements.get("media-preview-time-display")||F.customElements.define("media-preview-time-display",aT);let aA="seekoffset";class aw extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,aA]}connectedCallback(){super.connectedCallback(),this.seekOffset=ed(this,aA,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",M("seek back {seekOffset} seconds",{seekOffset:a})),e===aA&&(this.seekOffset=ed(this,aA,30))}get seekOffset(){return ed(this,aA,30)}set seekOffset(e){eu(this,aA,e),this.setAttribute("aria-label",M("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ee(et(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ed(this,h.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){eu(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new F.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aw.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},aw.getTooltipContentHTML=function(){return M("Seek backward")},F.customElements.get("media-seek-backward-button")||F.customElements.define("media-seek-backward-button",aw);let aC="seekoffset";class aS extends t3{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,aC]}connectedCallback(){super.connectedCallback(),this.seekOffset=ed(this,aC,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",M("seek forward {seekOffset} seconds",{seekOffset:a})),e===aC&&(this.seekOffset=ed(this,aC,30))}get seekOffset(){return ed(this,aC,30)}set seekOffset(e){eu(this,aC,e),this.setAttribute("aria-label",M("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ee(et(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ed(this,h.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){eu(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new F.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aS.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},aS.getTooltipContentHTML=function(){return M("Seek forward")},F.customElements.get("media-seek-forward-button")||F.customElements.define("media-seek-forward-button",aS);var aI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aR=(e,t,i)=>(aI(e,t,"read from private field"),i?i.call(e):t.get(e)),aL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ax=(e,t,i,a)=>(aI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aM=(e,t,i)=>(aI(e,t,"access private method"),i);let aD={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},aP=[...Object.values(aD),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],aO=["Enter"," "],aN="&nbsp;/&nbsp;",aU=(e,{timesSep:t=aN}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?O(0-(s-r)):O(r);return e.showDuration?`${o}${t}${O(s)}`:o};class aH extends iS{constructor(){super(),aL(this,dw),aL(this,dS),aL(this,dR),aL(this,dx),aL(this,dk,void 0),aL(this,dT,null),aL(this,dA,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!aO.includes(a)?this.removeEventListener("keyup",aR(this,dT)):this.addEventListener("keyup",aR(this,dT))}),ax(this,dk,this.shadowRoot.querySelector("slot")),aR(this,dk).innerHTML=`${aU(this)}`}static get observedAttributes(){return[...super.observedAttributes,...aP,"disabled"]}connectedCallback(){let{style:e}=eo(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",M("playback time")),aM(this,dR,dL).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),aM(this,dS,dI).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",M("playback time")),aP.includes(e)?this.update():"disabled"===e&&i!==t?null==i?aM(this,dR,dL).call(this):aM(this,dx,dM).call(this):e===aD.NO_TOGGLE&&i!==t&&(this.noToggle?aM(this,dx,dM).call(this):aM(this,dR,dL).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return ec(this,aD.REMAINING)}set remaining(e){eh(this,aD.REMAINING,e)}get showDuration(){return ec(this,aD.SHOW_DURATION)}set showDuration(e){eh(this,aD.SHOW_DURATION,e)}get noToggle(){return ec(this,aD.NO_TOGGLE)}set noToggle(e){eh(this,aD.NO_TOGGLE,e)}get mediaDuration(){return ed(this,h.MEDIA_DURATION)}set mediaDuration(e){eu(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return ed(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){eu(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(h.MEDIA_SEEKABLE):this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){let e=aU(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",M("video not loaded, unknown time."));let n=e.remaining?P(0-(r-i)):P(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=M("{currentTime} of {totalTime}",{currentTime:n,totalTime:P(r)});e.setAttribute("aria-description",s)})(this),e!==aR(this,dk).innerHTML&&(aR(this,dk).innerHTML=e)}}dk=new WeakMap,dT=new WeakMap,dA=new WeakMap,dw=new WeakSet,dC=function(){aR(this,dT)||(ax(this,dT,e=>{let{key:t}=e;aO.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",aR(this,dT))}),this.addEventListener("keydown",aR(this,dA)),this.addEventListener("click",this.toggleTimeDisplay))},dS=new WeakSet,dI=function(){aR(this,dT)&&(this.removeEventListener("keyup",aR(this,dT)),this.removeEventListener("keydown",aR(this,dA)),this.removeEventListener("click",this.toggleTimeDisplay),ax(this,dT,null))},dR=new WeakSet,dL=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),aM(this,dw,dC).call(this))},dx=new WeakSet,dM=function(){this.removeAttribute("role"),this.disable(),aM(this,dS,dI).call(this)},aH.getSlotTemplateHTML=function(e,t){return`
    <slot>${aU(t)}</slot>
  `},F.customElements.get("media-time-display")||F.customElements.define("media-time-display",aH);var aB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aW=(e,t,i)=>(aB(e,t,"read from private field"),i?i.call(e):t.get(e)),a$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aq=(e,t,i,a)=>(aB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aV{constructor(e,t,i){a$(this,dD,void 0),a$(this,dP,void 0),a$(this,dO,void 0),a$(this,dN,void 0),a$(this,dU,void 0),a$(this,dH,void 0),a$(this,dB,void 0),a$(this,dW,void 0),a$(this,d$,0),a$(this,dq,(e=performance.now())=>{aq(this,d$,requestAnimationFrame(aW(this,dq))),aq(this,dN,performance.now()-aW(this,dO));let t=1e3/this.fps;if(aW(this,dN)>t){let i,a;aq(this,dO,e-aW(this,dN)%t);let r=1e3/((e-aW(this,dP))/++(i=this,a=dU,{set _(value){aq(i,a,value,void 0)},get _(){return aW(i,a,void 0)}})._),n=(e-aW(this,dH))/1e3/this.duration,s=aW(this,dB)+n*this.playbackRate;s-aW(this,dD).valueAsNumber>0?aq(this,dW,this.playbackRate/this.duration/r):(aq(this,dW,.995*aW(this,dW)),s=aW(this,dD).valueAsNumber+aW(this,dW)),this.callback(s)}}),aq(this,dD,e),this.callback=t,this.fps=i}start(){0===aW(this,d$)&&(aq(this,dO,performance.now()),aq(this,dP,aW(this,dO)),aq(this,dU,0),aW(this,dq).call(this))}stop(){0!==aW(this,d$)&&(cancelAnimationFrame(aW(this,d$)),aq(this,d$,0))}update({start:e,duration:t,playbackRate:i}){let a=e-aW(this,dD).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),aq(this,dB,e),aq(this,dH,performance.now()),this.duration=t,this.playbackRate=i}}dD=new WeakMap,dP=new WeakMap,dO=new WeakMap,dN=new WeakMap,dU=new WeakMap,dH=new WeakMap,dB=new WeakMap,dW=new WeakMap,d$=new WeakMap,dq=new WeakMap;var aF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aK=(e,t,i)=>(aF(e,t,"read from private field"),i?i.call(e):t.get(e)),aj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aY=(e,t,i,a)=>(aF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aG=(e,t,i)=>(aF(e,t,"access private method"),i);let az=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},aQ=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class aZ extends iE{constructor(){super(),aj(this,d0),aj(this,d3),aj(this,d5),aj(this,d8),aj(this,d7),aj(this,ut),aj(this,ua),aj(this,dV,null),aj(this,dF,void 0),aj(this,dK,void 0),aj(this,dj,void 0),aj(this,dY,void 0),aj(this,dG,void 0),aj(this,dz,void 0),aj(this,dQ,void 0),aj(this,dZ,void 0),aj(this,dX,void 0),aj(this,dJ,()=>{aG(this,d0,d1).call(this)?aK(this,dF).start():aK(this,dF).stop()}),aj(this,d2,e=>{!this.dragging&&(S(e)&&(this.range.valueAsNumber=e),aK(this,dX)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),aY(this,dK,this.shadowRoot.querySelectorAll('[part~="box"]')),aY(this,dY,this.shadowRoot.querySelector('[part~="preview-box"]')),aY(this,dG,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);aY(this,dz,parseInt(e.getPropertyValue("--media-box-padding-left"))),aY(this,dQ,parseInt(e.getPropertyValue("--media-box-padding-right"))),aY(this,dF,new aV(this.range,aK(this,d2),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",M("seek")),aK(this,dJ).call(this),aY(this,dV,this.getRootNode()),null==(e=aK(this,dV))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),aK(this,dF).stop(),null==(e=aK(this,dV))||e.removeEventListener("transitionstart",this),aY(this,dV,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE){let e,t,i,a;aK(this,dF).update({start:az(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),aK(this,dJ).call(this),e=this.range,t=P(+aQ(this)),i=P(+this.mediaSeekableEnd),a=t&&i?M("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):M("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===h.MEDIA_BUFFERED&&this.updateBufferedBar();(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=aK(this,dZ),this.updateBar())}}get mediaChaptersCues(){return aK(this,dZ)}set mediaChaptersCues(e){var t;aY(this,dZ,e),this.updateSegments(null==(t=aK(this,dZ))?void 0:t.map(e=>({start:az(this,e.startTime),end:az(this,e.endTime)})))}get mediaPaused(){return ec(this,h.MEDIA_PAUSED)}set mediaPaused(e){eh(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return ec(this,h.MEDIA_LOADING)}set mediaLoading(e){eh(this,h.MEDIA_LOADING,e)}get mediaDuration(){return ed(this,h.MEDIA_DURATION)}set mediaDuration(e){eu(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return ed(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){eu(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ed(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eu(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(h.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(h.MEDIA_SEEKABLE):this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return em(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ep(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ed(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){eu(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ec(this,h.MEDIA_ENDED)}set mediaEnded(e){eh(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=az(this,r)}let{style:a}=eo(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=eo(this.shadowRoot,"#current-rail"),t=eo(this.shadowRoot,'[part~="current-box"]'),i=aG(this,d3,d4).call(this,aK(this,dG)),a=aG(this,d5,d9).call(this,i,this.range.valueAsNumber),r=aG(this,d8,d6).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":aG(this,ua,ur).call(this);break;case"pointermove":aG(this,d7,ue).call(this,e);break;case"pointerup":aK(this,dX)&&aY(this,dX,!1);break;case"pointerdown":aY(this,dX,!0);break;case"pointerleave":aG(this,ut,ui).call(this,null);break;case"transitionstart":ei(e.target,this)&&setTimeout(()=>aK(this,dJ).call(this),0)}}}dV=new WeakMap,dF=new WeakMap,dK=new WeakMap,dj=new WeakMap,dY=new WeakMap,dG=new WeakMap,dz=new WeakMap,dQ=new WeakMap,dZ=new WeakMap,dX=new WeakMap,dJ=new WeakMap,d0=new WeakSet,d1=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&es(this)},d2=new WeakMap,d3=new WeakSet,d4=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?ea(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},d5=new WeakSet,d9=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},d8=new WeakSet,d6=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+aK(this,dz)){let t=e.range.left-e.bounds.left-aK(this,dz);return`${n-i/2+t}px`}if(n>r-aK(this,dQ)){let t=e.bounds.right-e.range.right-aK(this,dQ);return`${n+i/2-t-e.range.width}px`}return 0},d7=new WeakSet,ue=function(e){let t=[...aK(this,dK)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void aG(this,ut,ui).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=eo(this.shadowRoot,"#preview-rail"),r=eo(this.shadowRoot,'[part~="preview-box"]'),n=aG(this,d3,d4).call(this,aK(this,dY)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=aG(this,d5,d9).call(this,n,s),l=aG(this,d8,d6).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(aK(this,dj))-Math.round(s*i))&&s>.01&&s<.99||(aY(this,dj,s*i),aG(this,ut,ui).call(this,aK(this,dj)))},ut=new WeakSet,ui=function(e){this.dispatchEvent(new F.CustomEvent(l.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},ua=new WeakSet,ur=function(){aK(this,dF).stop();let e=aQ(this);this.dispatchEvent(new F.CustomEvent(l.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aZ.shadowRootOptions={mode:"open"},aZ.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${ay.shadowRootOptions.mode}">
            ${ay.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},F.customElements.get("media-time-range")||F.customElements.define("media-time-range",aZ);var aX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class aJ extends iE{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,un,()=>{let e=this.range.value,t=new F.CustomEvent(l.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",M("volume")),this.range.addEventListener("input",aX(this,un))}disconnectedCallback(){this.range.removeEventListener("input",aX(this,un)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return ed(this,h.MEDIA_VOLUME,1)}set mediaVolume(e){eu(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return ec(this,h.MEDIA_MUTED)}set mediaMuted(e){eh(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return em(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ep(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}un=new WeakMap,F.customElements.get("media-volume-range")||F.customElements.define("media-volume-range",aJ);class a0 extends t3{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=M("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return ec(this,h.MEDIA_LOOP)}set mediaLoop(e){eh(this,h.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new F.CustomEvent(l.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}a0.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},a0.getTooltipContentHTML=function(){return M("Loop")},F.customElements.get("media-loop-button")||F.customElements.define("media-loop-button",a0);var a1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a2=(e,t,i)=>(a1(e,t,"read from private field"),i?i.call(e):t.get(e)),a3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a4=(e,t,i,a)=>(a1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let a5={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof ra&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof ra?a.element[a.attributeName]=t:a.value=t}}}};class a9 extends F.DocumentFragment{constructor(e,t,i=a5){var a;super(),a3(this,us,void 0),a3(this,uo,void 0),this.append(e.content.cloneNode(!0)),a4(this,us,a8(this)),a4(this,uo,i),null==(a=i.createCallback)||a.call(i,this,a2(this,us),t),i.processCallback(this,a2(this,us),t)}update(e){a2(this,uo).processCallback(this,a2(this,us),e)}}us=new WeakMap,uo=new WeakMap;let a8=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new ri;for([i,a]of a7(r.value))if(i){let i=new ra(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of a7(n))if(i){let i=new rr(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new rn(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else a8(r,t);return t},a6={},a7=e=>{let t="",i=0,a=a6[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),a6[e]=a};class re{get value(){return""}set value(e){}toString(){return this.value}}let rt=new WeakMap;class ri{constructor(){a3(this,ul,[])}[Symbol.iterator](){return a2(this,ul).values()}get length(){return a2(this,ul).length}item(e){return a2(this,ul)[e]}append(...e){for(let t of e)t instanceof ra&&rt.set(t,this),a2(this,ul).push(t)}toString(){return a2(this,ul).join("")}}ul=new WeakMap;class ra extends re{constructor(e,t,i){super(),a3(this,um),a3(this,ud,""),a3(this,uu,void 0),a3(this,uc,void 0),a3(this,uh,void 0),a4(this,uu,e),a4(this,uc,t),a4(this,uh,i)}get attributeName(){return a2(this,uc)}get attributeNamespace(){return a2(this,uh)}get element(){return a2(this,uu)}get value(){return a2(this,ud)}set value(e){a2(this,ud)!==e&&(a4(this,ud,e),a2(this,um,up)&&1!==a2(this,um,up).length?a2(this,uu).setAttributeNS(a2(this,uh),a2(this,uc),a2(this,um,up).toString()):null==e?a2(this,uu).removeAttributeNS(a2(this,uh),a2(this,uc)):a2(this,uu).setAttributeNS(a2(this,uh),a2(this,uc),e))}get booleanValue(){return a2(this,uu).hasAttributeNS(a2(this,uh),a2(this,uc))}set booleanValue(e){if(a2(this,um,up)&&1!==a2(this,um,up).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}ud=new WeakMap,uu=new WeakMap,uc=new WeakMap,uh=new WeakMap,um=new WeakSet,up=function(){return rt.get(this)};class rr extends re{constructor(e,t){super(),a3(this,uv,void 0),a3(this,ub,void 0),a4(this,uv,e),a4(this,ub,t?[...t]:[new Text])}get replacementNodes(){return a2(this,ub)}get parentNode(){return a2(this,uv)}get nextSibling(){return a2(this,ub)[a2(this,ub).length-1].nextSibling}get previousSibling(){return a2(this,ub)[0].previousSibling}get value(){return a2(this,ub).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),a4(this,ub,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(a2(this,ub)[0].parentNode,a2(this,ub),t,this.nextSibling))}}uv=new WeakMap,ub=new WeakMap;class rn extends rr{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let rs={string:e=>String(e)};class ro{constructor(e){this.template=e,this.state=void 0}}let rl=new WeakMap,rd=new WeakMap,ru={partial:(e,t)=>{t[e.expression]=new ro(e.template)},if:(e,t)=>{var i;if(rp(e.expression,t))if(rl.get(e)!==e.template){rl.set(e,e.template);let i=new a9(e.template,t,rh);e.replace(i),rd.set(e,i)}else null==(i=rd.get(e))||i.update(t);else e.replace(""),rl.delete(e),rd.delete(e)}},rc=Object.keys(ru),rh={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof rn){if(!n.directive){let e=rc.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=ru[n.directive])||a.call(ru,n,i);continue}let t=rp(e,i);if(t instanceof ro){rl.get(n)!==t.template?(rl.set(n,t.template),n.value=t=new a9(t.template,t.state,rh),rd.set(n,t)):null==(r=rd.get(n))||r.update(t.state);continue}t?(n instanceof ra&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof ra?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,rl.delete(n),rd.delete(n))):n instanceof ra?n.value=void 0:(n.value=void 0,rl.delete(n),rd.delete(n))}}},rm={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=rs[t])?void 0:i.call(rs,e)}};function rp(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return rv(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return rv(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=rg(d,t))}return i}if(1===d.length)return rb(d[0])?rg(d[0].token,t):rv(e);if(2===d.length){let i=rm[null==(o=d[0])?void 0:o.token];return i&&rb(d[1])?i(rg(d[1].token,t)):rv(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=rm[i];if(!a||!rb(d[0])||!rb(d[2]))return rv(e);let r=rg(d[0].token,t);return a(r,"|"===i?d[2].token:rg(d[2].token,t))}}function rv(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function rb({type:e}){return["number","boolean","string","param"].includes(e)}function rg(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):I(e)?parseFloat(e):t[e]}var rf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rE=(e,t,i)=>(rf(e,t,"read from private field"),i?i.call(e):t.get(e)),ry=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r_=(e,t,i,a)=>(rf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rk=(e,t,i)=>(rf(e,t,"access private method"),i);let rT={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},rA=K.createElement("template");rA.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class rw extends F.HTMLElement{constructor(){super(),ry(this,u_),ry(this,uT),ry(this,ug,void 0),ry(this,uf,void 0),ry(this,uE,void 0),ry(this,uy,void 0),ry(this,uw,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),r_(this,uy,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(rT[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),r_(this,uw,this.render.bind(this)),rk(this,u_,uk).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=rE(this,ug))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(r_(this,ug,e),r_(this,uE,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>rT[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=rT[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(I(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&rk(this,uT,uA).call(this)}connectedCallback(){this.addEventListener(m.BREAKPOINTS_COMPUTED,rE(this,uw)),rE(this,uy).observe(this,{attributes:!0}),rE(this,uy).observe(this.renderRoot,{attributes:!0,subtree:!0}),rk(this,uT,uA).call(this)}disconnectedCallback(){this.removeEventListener(m.BREAKPOINTS_COMPUTED,rE(this,uw)),rE(this,uy).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==rE(this,uf)&&(r_(this,uf,this.template),this.renderer=new a9(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(rA.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function rC(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function rS(e){return e.split("-")[0]}ug=new WeakMap,uf=new WeakMap,uE=new WeakMap,uy=new WeakMap,u_=new WeakSet,uk=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},uT=new WeakSet,uA=function(){var e;let t=this.getAttribute("template");if(!t||t===rE(this,uE))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){r_(this,uE,t),r_(this,ug,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(r_(this,uE,t),rC(t).then(e=>{let t=K.createElement("template");t.innerHTML=e,r_(this,ug,t),this.createRenderer()}).catch(console.error))},uw=new WeakMap,rw.observedAttributes=["template"],rw.processor=rh,F.customElements.get("media-theme")||F.customElements.define("media-theme",rw);class rI extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class rR extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var rL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rx=(e,t,i)=>(rL(e,t,"read from private field"),i?i.call(e):t.get(e)),rM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rD=(e,t,i,a)=>(rL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rP=(e,t,i)=>(rL(e,t,"access private method"),i);function rO({type:e,text:t,value:i,checked:a}){let r=K.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=K.createElement("span");return n.textContent=t,r.append(n),r}function rN(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let rU="style",rH="hidden",rB="disabled";class rW extends F.HTMLElement{constructor(){if(super(),rM(this,uD),rM(this,uO),rM(this,uH),rM(this,uW),rM(this,uq),rM(this,uF),rM(this,uG),rM(this,uQ),rM(this,uX),rM(this,u0),rM(this,u2),rM(this,u4),rM(this,u9),rM(this,u6),rM(this,ce),rM(this,ci),rM(this,cr),rM(this,cs),rM(this,uC,null),rM(this,uS,null),rM(this,uI,null),rM(this,uR,new Set),rM(this,uL,void 0),rM(this,ux,!1),rM(this,uM,null),rM(this,uU,()=>{let e=rx(this,uR),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));rD(this,uR,t)}),rM(this,uj,()=>{rP(this,uG,uz).call(this),rP(this,uQ,uZ).call(this,!1)}),rM(this,uY,()=>{rP(this,uG,uz).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),rD(this,uL,new MutationObserver(rx(this,uU)))}static get observedAttributes(){return[rB,rH,rU,"anchor",d.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":rP(this,uD,uP).call(this,e);break;case"invoke":rP(this,uW,u$).call(this,e);break;case"click":rP(this,uX,uJ).call(this,e);break;case"toggle":rP(this,u2,u3).call(this,e);break;case"focusout":rP(this,u9,u8).call(this,e);break;case"keydown":rP(this,u6,u7).call(this,e)}}connectedCallback(){var e,t;rx(this,uL).observe(this.defaultSlot,{childList:!0}),rD(this,uM,el(this.shadowRoot,":host")),rP(this,uH,uB).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),rD(this,uC,J(this)),null==(t=null==(e=rx(this,uC))?void 0:e.associateElement)||t.call(e,this),this.hidden||(z(rq(this),rx(this,uj)),z(this,rx(this,uY))),rP(this,uO,uN).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;rx(this,uL).disconnect(),Q(rq(this),rx(this,uj)),Q(this,rx(this,uY)),this.disable(),null==(t=null==(e=rx(this,uC))?void 0:e.unassociateElement)||t.call(e,this),rD(this,uC,null),rD(this,uS,null),rD(this,uI,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===rH&&i!==t?(rx(this,ux)||rD(this,ux,!0),this.hidden?rP(this,uF,uK).call(this):rP(this,uq,uV).call(this),this.dispatchEvent(new rR({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===d.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rx(this,uC))?void 0:a.unassociateElement)||r.call(a,this),rD(this,uC,null)),i&&this.isConnected&&(rD(this,uC,J(this)),null==(s=null==(n=rx(this,uC))?void 0:n.associateElement)||s.call(n,this))):e===rB&&i!==t?null==i?this.enable():this.disable():e===rU&&i!==t&&rP(this,uH,uB).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=en(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(r$)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&rP(this,cs,co).call(this,t)}focus(){if(rD(this,uS,er()),this.items.length){rP(this,cr,cn).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=rP(this,ce,ct).call(this,e);i&&(rP(this,cs,co).call(this,i,"checkbox"===i.type),rx(this,uI)&&!this.hidden&&(null==(t=rx(this,uS))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=rP(this,ce,ct).call(this,e))?t:rP(this,ci,ca).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),rP(this,cr,cn).call(this,r[s]),r[s].focus()}}function r$(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function rq(e){var t;return null!=(t=e.getAttribute("bounds")?ea(e,`#${e.getAttribute("bounds")}`):X(e)||e.parentElement)?t:e}uC=new WeakMap,uS=new WeakMap,uI=new WeakMap,uR=new WeakMap,uL=new WeakMap,ux=new WeakMap,uM=new WeakMap,uD=new WeakSet,uP=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&rP(this,uO,uN).call(this),t.name||rx(this,uU).call(this)},uO=new WeakSet,uN=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},uU=new WeakMap,uH=new WeakSet,uB=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},uW=new WeakSet,u$=function(e){rD(this,uI,e.relatedTarget),ei(this,e.relatedTarget)||(this.hidden=!this.hidden)},uq=new WeakSet,uV=function(){var e;null==(e=rx(this,uI))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),z(rq(this),rx(this,uj)),z(this,rx(this,uY))},uF=new WeakSet,uK=function(){var e;null==(e=rx(this,uI))||e.setAttribute("aria-expanded","false"),Q(rq(this),rx(this,uj)),Q(this,rx(this,uY))},uj=new WeakMap,uY=new WeakMap,uG=new WeakSet,uz=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(rS(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=rS(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=rq(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=rx(this,uM);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},uQ=new WeakSet,uZ=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=rx(this,uM);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),rP(this,uG,uz).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),rP(this,uG,uz).call(this);a.removeProperty("--media-menu-transition-in")},uX=new WeakSet,uJ=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(rx(this,u0,u1))){null==(t=rx(this,uS))||t.focus(),this.hidden=!0;return}let i=rP(this,ce,ct).call(this,e);!i||i.hasAttribute("disabled")||(rP(this,cr,cn).call(this,i),this.handleSelect(e))},u0=new WeakSet,u1=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},u2=new WeakSet,u3=function(e){if(e.target===this)return;rP(this,u4,u5).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new rI({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);rP(this,uQ,uZ).call(this,!0)},u4=new WeakSet,u5=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},u9=new WeakSet,u8=function(e){var t;ei(this,e.relatedTarget)||(rx(this,ux)&&(null==(t=rx(this,uS))||t.focus()),rx(this,uI)&&rx(this,uI)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},u6=new WeakSet,u7=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(rx(this,ux)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=rx(this,uS))||n.focus(),rx(this,ux)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},ce=new WeakSet,ct=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},ci=new WeakSet,ca=function(){return this.items.find(e=>0===e.tabIndex)},cr=new WeakSet,cn=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},cs=new WeakSet,co=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},rW.shadowRootOptions={mode:"open"},rW.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},F.customElements.get("media-chrome-menu")||F.customElements.define("media-chrome-menu",rW);var rV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rF=(e,t,i)=>(rV(e,t,"read from private field"),i?i.call(e):t.get(e)),rK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rj=(e,t,i,a)=>(rV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rY=(e,t,i)=>(rV(e,t,"access private method"),i);let rG="type",rz="value",rQ="checked",rZ="disabled";class rX extends F.HTMLElement{constructor(){if(super(),rK(this,cu),rK(this,ch),rK(this,cp),rK(this,cE),rK(this,cl,!1),rK(this,cd,void 0),rK(this,cb,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=K.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),rK(this,cg,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",rF(this,cg))}),rK(this,cf,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rF(this,cg)):this.addEventListener("keyup",rF(this,cg),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Z(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rG,rZ,rQ,rz]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),rJ(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":rY(this,cu,cc).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":rF(this,cf).call(this,e);break;case"keyup":rF(this,cg).call(this,e)}}attributeChangedCallback(e,t,i){e===rQ&&rJ(this)&&!rF(this,cl)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===rG&&i!==t?this.role="menuitem"+i:e===rZ&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(rZ)||this.enable(),this.role="menuitem"+this.type,rj(this,cd,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),rY(this,cE,cy).call(this),this.submenuElement&&rY(this,ch,cm).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),rY(this,cE,cy).call(this),rj(this,cd,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=en(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(rG))?e:""}set type(e){this.setAttribute(rG,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(rz))?e:this.text}set value(e){this.setAttribute(rz,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(rJ(this))return"true"===this.getAttribute("aria-checked")}set checked(e){rJ(this)&&(rj(this,cl,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!rJ(this)&&this.invokeTargetElement&&ei(this,e.target)&&this.invokeTargetElement.dispatchEvent(new rI({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function rJ(e){return"radio"===e.type||"checkbox"===e.type}cl=new WeakMap,cd=new WeakMap,cu=new WeakSet,cc=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?rY(this,ch,cm).call(this):rY(this,cp,cv).call(this))},ch=new WeakSet,cm=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",rF(this,cb)),this.submenuElement.addEventListener("addmenuitem",rF(this,cb)),this.submenuElement.addEventListener("removemenuitem",rF(this,cb)),rF(this,cb).call(this)},cp=new WeakSet,cv=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",rF(this,cb)),this.submenuElement.removeEventListener("addmenuitem",rF(this,cb)),this.submenuElement.removeEventListener("removemenuitem",rF(this,cb)),rF(this,cb).call(this)},cb=new WeakMap,cg=new WeakMap,cf=new WeakMap,cE=new WeakSet,cy=function(){var e;let t=null==(e=rF(this,cd))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},rX.shadowRootOptions={mode:"open"},rX.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},rX.getSuffixSlotInnerHTML=function(e){return""},F.customElements.get("media-chrome-menu-item")||F.customElements.define("media-chrome-menu-item",rX);class r0 extends rW{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:X(this).querySelector("media-settings-menu-button")}}r0.getTemplateHTML=function(e){return`
    ${rW.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},F.customElements.get("media-settings-menu")||F.customElements.define("media-settings-menu",r0);class r1 extends rX{}r1.shadowRootOptions={mode:"open"},r1.getTemplateHTML=function(e){return`
    ${rX.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},r1.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},F.customElements.get("media-settings-menu-item")||F.customElements.define("media-settings-menu-item",r1);class r2 extends t3{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=en(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new rI({relatedTarget:this}))}}F.customElements.get("media-chrome-menu-button")||F.customElements.define("media-chrome-menu-button",r2);class r3 extends r2{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",M("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:X(this).querySelector("media-settings-menu")}}r3.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},r3.getTooltipContentHTML=function(){return M("Settings")},F.customElements.get("media-settings-menu-button")||F.customElements.define("media-settings-menu-button",r3);var r4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r5=(e,t,i)=>(r4(e,t,"read from private field"),i?i.call(e):t.get(e)),r9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r8=(e,t,i,a)=>(r4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r6=(e,t,i)=>(r4(e,t,"access private method"),i);class r7 extends rW{constructor(){super(...arguments),r9(this,cT),r9(this,cw),r9(this,c_,[]),r9(this,ck,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===h.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;r8(this,c_,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(C)),r6(this,cT,cA).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",r6(this,cw,cC))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",r6(this,cw,cC))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=X(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return r5(this,c_)}set mediaAudioTrackList(e){r8(this,c_,e),r6(this,cT,cA).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=em(this,h.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ep(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}c_=new WeakMap,ck=new WeakMap,cT=new WeakSet,cA=function(){if(r5(this,ck)===JSON.stringify(this.mediaAudioTrackList))return;r8(this,ck,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=rO({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(rN(this,"checked-indicator")),this.defaultSlot.append(e)}},cw=new WeakSet,cC=function(){if(null==this.value)return;let e=new F.CustomEvent(l.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},F.customElements.get("media-audio-track-menu")||F.customElements.define("media-audio-track-menu",r7);let ne=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nt=e=>{let t=M("Audio");e.setAttribute("aria-label",t)};class ni extends r2{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nt(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_LANG&&nt(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=X(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=em(this,h.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ep(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}ni.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ne}</slot>
  `},ni.getTooltipContentHTML=function(){return M("Audio")},F.customElements.get("media-audio-track-menu-button")||F.customElements.define("media-audio-track-menu-button",ni);var na=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nn=(e,t,i)=>(na(e,t,"access private method"),i);let ns=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class no extends rW{constructor(){super(...arguments),nr(this,cI),nr(this,cL),nr(this,cS,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_LIST&&t!==i?nn(this,cI,cR).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",nn(this,cI,cR).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nn(this,cL,cx))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nn(this,cL,cx))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:X(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return nl(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nd(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nl(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nd(this,h.MEDIA_SUBTITLES_SHOWING,e)}}cS=new WeakMap,cI=new WeakSet,cR=function(){var e,t,i,a;let r=(na(this,t=cS,"read from private field"),t.get(this)!==JSON.stringify(this.mediaSubtitlesList)),n=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!r&&!n)return;i=cS,a=JSON.stringify(this.mediaSubtitlesList),na(this,i,"write to private field"),i.set(this,a),this.defaultSlot.textContent="";let s=!this.value,o=rO({type:"radio",text:this.formatMenuItemText(M("Off")),value:"off",checked:s});for(let t of(o.prepend(rN(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=rO({type:"radio",text:this.formatMenuItemText(t.label,t),value:eV(t),checked:this.value==eV(t)});i.prepend(rN(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(rN(this,"captions-indicator")),this.defaultSlot.append(i)}},cL=new WeakSet,cx=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new F.CustomEvent(l.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new F.CustomEvent(l.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},no.getTemplateHTML=function(e){return`
    ${rW.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${ns}</slot>
  `};let nl=(e,t)=>{let i=e.getAttribute(t);return i?e$(i):[]},nd=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=eF(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};F.customElements.get("media-captions-menu")||F.customElements.define("media-captions-menu",no);let nu=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nh=e=>{e.setAttribute("data-captions-enabled",eG(e).toString())},nm=e=>{e.setAttribute("aria-label",M("closed captions"))};class np extends r2{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),nm(this),nh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_SUBTITLES_SHOWING?nh(this):e===h.MEDIA_LANG&&nm(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=X(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return nv(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nb(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nv(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nb(this,h.MEDIA_SUBTITLES_SHOWING,e)}}np.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${nu}</slot>
      <slot name="off">${nc}</slot>
    </slot>
  `},np.getTooltipContentHTML=function(){return M("Captions")};let nv=(e,t)=>{let i=e.getAttribute(t);return i?e$(i):[]},nb=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=eF(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};F.customElements.get("media-captions-menu-button")||F.customElements.define("media-captions-menu-button",np);var ng=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nf=(e,t,i)=>(ng(e,t,"read from private field"),i?i.call(e):t.get(e)),nE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ny=(e,t,i)=>(ng(e,t,"access private method"),i);let n_="rates";class nk extends rW{constructor(){super(),nE(this,cD),nE(this,cO),nE(this,cM,new eB(this,n_,{defaultValue:as})),ny(this,cD,cP).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,n_]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===h.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,ny(this,cD,cP).call(this)):e===n_&&t!=i&&(nf(this,cM).value=i,ny(this,cD,cP).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ny(this,cO,cN))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ny(this,cO,cN))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:X(this).querySelector("media-playback-rate-menu-button")}get rates(){return nf(this,cM)}set rates(e){e?Array.isArray(e)?nf(this,cM).value=e.join(" "):"string"==typeof e&&(nf(this,cM).value=e):nf(this,cM).value="",ny(this,cD,cP).call(this)}get mediaPlaybackRate(){return ed(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eu(this,h.MEDIA_PLAYBACK_RATE,e)}}cM=new WeakMap,cD=new WeakSet,cP=function(){this.defaultSlot.textContent="";let e=ao(this.mediaPlaybackRate),t=new Set(Array.from(nf(this,cM)).map(e=>ao(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=rO({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(rN(this,"checked-indicator")),this.defaultSlot.append(t)}},cO=new WeakSet,cN=function(){if(!this.value)return;let e=new F.CustomEvent(l.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},F.customElements.get("media-playback-rate-menu")||F.customElements.define("media-playback-rate-menu",nk);class nT extends r2{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ao(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===h.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=ao(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",M("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:X(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ed(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){eu(this,h.MEDIA_PLAYBACK_RATE,e)}}nT.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?ao(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},nT.getTooltipContentHTML=function(){return M("Playback rate")},F.customElements.get("media-playback-rate-menu-button")||F.customElements.define("media-playback-rate-menu-button",nT);var nA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nw=(e,t,i)=>(nA(e,t,"read from private field"),i?i.call(e):t.get(e)),nC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nS=(e,t,i,a)=>(nA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nI=(e,t,i)=>(nA(e,t,"access private method"),i);class nR extends rW{constructor(){super(...arguments),nC(this,cB),nC(this,c$),nC(this,cU,[]),nC(this,cH,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT,h.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case h.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",nI(this,cB,cW).call(this);break;case h.MEDIA_RENDITION_LIST:nS(this,cU,null==i?void 0:i.split(/\s+/).map(A)),nI(this,cB,cW).call(this);break;case h.MEDIA_HEIGHT:case h.MEDIA_WIDTH:nI(this,cB,cW).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nI(this,c$,cq))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nI(this,c$,cq))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:X(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return nw(this,cU)}set mediaRenditionList(e){nS(this,cU,e),nI(this,cB,cW).call(this)}get mediaRenditionSelected(){return em(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ep(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ed(this,h.MEDIA_HEIGHT)}set mediaHeight(e){eu(this,h.MEDIA_HEIGHT,e)}get mediaWidth(){return ed(this,h.MEDIA_WIDTH)}set mediaWidth(e){eu(this,h.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}cU=new WeakMap,cH=new WeakMap,cB=new WeakSet,cW=function(){let e,t=!this.mediaRenditionSelected;if(nw(this,cH).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&nw(this,cH).mediaHeight===this.mediaHeight&&nw(this,cH).mediaWidth===this.mediaWidth&&nw(this,cH).isAuto===t)return;nw(this,cH).mediaRenditionList=JSON.stringify(this.mediaRenditionList),nw(this,cH).mediaHeight=this.mediaHeight,nw(this,cH).mediaWidth=this.mediaWidth,nw(this,cH).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=rO({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(rN(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${M("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${M("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(M("Auto")));let n=rO({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(rN(this,"checked-indicator")),this.defaultSlot.append(n)},c$=new WeakSet,cq=function(){if(null==this.value)return;let e=new F.CustomEvent(l.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},F.customElements.get("media-rendition-menu")||F.customElements.define("media-rendition-menu",nR);let nL=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class nx extends r2{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",M("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:X(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return em(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ep(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ed(this,h.MEDIA_HEIGHT)}set mediaHeight(e){eu(this,h.MEDIA_HEIGHT,e)}}nx.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${nL}</slot>
  `},nx.getTooltipContentHTML=function(){return M("Quality")},F.customElements.get("media-rendition-menu-button")||F.customElements.define("media-rendition-menu-button",nx);var nM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nD=(e,t,i)=>(nM(e,t,"read from private field"),i?i.call(e):t.get(e)),nP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nO=(e,t,i,a)=>(nM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nN=(e,t,i)=>(nM(e,t,"access private method"),i);class nU extends rW{constructor(){super(),nP(this,cF),nP(this,cj),nP(this,cG),nP(this,cQ),nP(this,cJ),nP(this,cV,!1),nP(this,cX,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=nN(this,cQ,cZ).call(this,t);(i||a)&&(nD(this,cV)?nN(this,cj,cY).call(this):nN(this,cJ,c0).call(this,e))}),nP(this,c1,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=nN(this,cQ,cZ).call(this,t);i||a&&(r||n)||nN(this,cj,cY).call(this)}),nP(this,c2,e=>{"Escape"===e.key&&nN(this,cj,cY).call(this)}),nP(this,c3,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}nN(this,cj,cY).call(this)}),this.setAttribute("noautohide",""),nN(this,cF,cK).call(this)}connectedCallback(){super.connectedCallback(),X(this).addEventListener("contextmenu",nD(this,cX)),this.addEventListener("click",nD(this,c3))}disconnectedCallback(){super.disconnectedCallback(),X(this).removeEventListener("contextmenu",nD(this,cX)),this.removeEventListener("click",nD(this,c3)),document.removeEventListener("mousedown",nD(this,c1)),document.removeEventListener("keydown",nD(this,c2))}}cV=new WeakMap,cF=new WeakSet,cK=function(){this.hidden=!nD(this,cV)},cj=new WeakSet,cY=function(){nO(this,cV,!1),nN(this,cF,cK).call(this)},cG=new WeakSet,cz=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&nN(e,cj,cY).call(e)})},cQ=new WeakSet,cZ=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},cX=new WeakMap,cJ=new WeakSet,c0=function(e){e.preventDefault(),nN(this,cG,cz).call(this),nO(this,cV,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,nN(this,cF,cK).call(this),document.addEventListener("mousedown",nD(this,c1),{once:!0}),document.addEventListener("keydown",nD(this,c2),{once:!0})},c1=new WeakMap,c2=new WeakMap,c3=new WeakMap,nU.getTemplateHTML=function(e){return`
      ${rW.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},F.customElements.get("media-context-menu")||F.customElements.define("media-context-menu",nU);class nH extends rX{}nH.shadowRootOptions={mode:"open"},nH.getTemplateHTML=function(e){return`
    ${rX.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},F.customElements.get("media-context-menu-item")||F.customElements.define("media-context-menu-item",nH);let nB=F.document?.createElement?.("template");nB&&(nB.innerHTML=String.raw`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width. */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class nW extends rw{static template=nB}F.customElements&&!F.customElements.get("media-theme-sutro")&&F.customElements.define("media-theme-sutro",nW);var n$=i(12115),nq=Object.create,nV=Object.defineProperty,nF=Object.getOwnPropertyDescriptor,nK=Object.getOwnPropertyNames,nj=Object.getPrototypeOf,nY=Object.prototype.hasOwnProperty,nG=function(e,t){return function(){return e&&(t=e(e=0)),t}},nz=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},nQ=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=nK(t),s=0,o=n.length;s<o;s++)r=n[s],nY.call(e,r)||r===i||nV(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=nF(t,r))||a.enumerable});return e},nZ=function(e,t,i){return i=null!=e?nq(nj(e)):{},nQ(!t&&e&&e.__esModule?i:nV(i,"default",{value:e,enumerable:!0}),e)},nX=nz(function(e,t){t.exports="u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{}});function nJ(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):nJ(e,t)}var n0=nG(function(){n0()});function n1(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var n2=nG(function(){}),n3=nz(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),n4=nz(function(e,t){function i(e,t){if(!nJ(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}n0(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),n5=nz(function(e,t){function i(e,t){if(!nJ(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}n0(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),n9=nz(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),n8=nz(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),n6=nz(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),n7=nz(function(e,t){n2(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=n1(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),se=nz(function(e,t){n0();var i=n3(),a=n9(),r=n8(),n=n6(),s=n7(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!nJ(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),st=nz(function(e,t){n0();var i=se();function a(e){if(!nJ(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),si=nz(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),sa=nz(function(e,t){n0();var i=n3(),a=n4(),r=n5(),n=se(),s=st(),o=si(),l=n9(),d=n8(),u=n6();function c(){if(!nJ(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),sr=nz(function(e,t){t.exports=new(sa())}),sn=nz(function(e,t){var i,a="u">typeof global?global:"u">typeof window?window:{},r=sr();"u">typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function ss(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function so(e,t){if(e){if("string"==typeof e)return ss(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ss(e,t)}}function sl(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||so(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var sd=nZ(nX()),su=nZ(nX()),sc=nZ(nX()),sh=function(){var e=sc.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},sm=function(){if("function"==typeof(null==(e=su.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),su.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=sh(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},sp=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},sv=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=sp()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},sb=function(e){e&&void 0!==e.nodeName?e=sv(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function sg(e){return function(e){if(Array.isArray(e))return ss(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||so(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var sf=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,sg(o)),d=(i=console.info).bind.apply(i,sg(o)),u=(a=console.debug).bind.apply(a,sg(o)),c=(r=console.warn).bind.apply(r,sg(o)),h=(n=console.error).bind.apply(n,sg(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,sg(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,sg(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,sg(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,sg(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,sg(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),sE=nZ(nX());function sy(){return"1"===(sE.default.doNotTrack||sE.default.navigator&&sE.default.navigator.doNotTrack)}function s_(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sk(e,t){if(!nJ(e,t))throw TypeError("Cannot call a class as a function")}function sT(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function sA(e,t,i){return t&&sT(e.prototype,t),i&&sT(e,i),e}function sw(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function sC(e){return(sC=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function sS(e,t,i){return(sS="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=sC(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function sI(e,t){return(sI=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n0(),n2();var sR=function(e){return sL(e)[0]},sL=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},sx=nZ(nX()),sM=function(){var e=sx.default.performance;return void 0!==(e&&e.timing)},sD=function(){var e=sx.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},sP=function(){var e=sx.default.performance,t=e&&e.timing;return t&&t.navigationStart};function sO(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function sN(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){sw(e,t,i[t])})}return e}function sU(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var sH=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],sB=["x-cdn","content-type"].concat(sH);function sW(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(sB.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function s$(e){if(e){var t=sH.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var sq=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},sV=function(e){if(!e)return{};var t=sP(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},sF=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return sW(e.getAllResponseHeaders())},sK=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!sM())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=sV(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",sU(sN({},sq(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:sR(r),request_response_headers:sF(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=sV(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:sR(i.url),request_response_headers:sF(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=sV(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:sR(i.url),request_response_headers:sF(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=sV(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?sF(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?sR(r.responseURL):void 0,request_id:h?s$(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?sF(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:sR(c),request_id:h?s$(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:sR(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},sj=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},sY=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=sR(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=sW(u[u.length-1]._responseHeaders||""));var c=i?s$(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},sG=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},sz=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},sQ=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},sZ=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=sQ(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:sR(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=sY(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:g,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=sY(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,f=u.requestUrl,E=u.requestId,y=sG(d,i),k=y.currentLevel,T=y.renditionWidth,A=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:g,request_id:E,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:k,request_labeled_bitrate:y.renditionBitrate,request_video_width:T,request_video_height:A})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:sz(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=sU(sN({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:sR(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:sR(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},sX=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},sJ=0,s0=function(){function e(){sk(this,e),sw(this,"_listeners",void 0)}return sA(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++sJ,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++sJ;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),s1=nZ(nX()),s2=function(){function e(t){var i=this;sk(this,e),sw(this,"_playbackHeartbeatInterval",void 0),sw(this,"_playheadShouldBeProgressing",void 0),sw(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(s1.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return sA(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=s1.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(s1.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),s3=function e(t){var i=this;sk(this,e),sw(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},s4=function(){function e(t){sk(this,e),sw(this,"_watchTimeTrackerLastCheckedTime",void 0),sw(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return sA(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),sO(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),s5=function(){function e(t){var i=this;sk(this,e),sw(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),sw(this,"_lastTime",void 0),sw(this,"_isAdPlaying",void 0),sw(this,"_callbackUpdatePlaybackTime",void 0),sw(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=sh(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=sh(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return sA(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=sh(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=sh(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&sO(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&sO(this.pm.data,"ad_playing_time_ms_cumulative",i),sO(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),s9=function(){function e(t){sk(this,e),sw(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return sA(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),s8=function e(t){if(sk(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;sO(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(sO(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},s6=function(){function e(t){var i=this;sk(this,e),sw(this,"_lastCheckedTime",void 0),sw(this,"_lastPlayheadTime",void 0),sw(this,"_lastPlayheadTimeUpdatedTime",void 0),sw(this,"_rebuffering",void 0),sw(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:sh()})}))}return sA(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),s7=function(){function e(t){var i=this;sk(this,e),sw(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||sh(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||sh(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return sA(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),oe=function e(t){var i=this;sk(this,e),sw(this,"_lastPlayerHeight",void 0),sw(this,"_lastPlayerWidth",void 0),sw(this,"_lastPlayheadPosition",void 0),sw(this,"_lastSourceHeight",void 0),sw(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),sO(t.data,"view_total_content_playback_time",e),sO(t.data,"view_total_upscaling",r*e),sO(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},ot=function e(t){var i=this;sk(this,e),sw(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=sh(),r=(t.data.viewer_time||e)-(a||e);sO(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,sO(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},oi=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},oa=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],or=function(){function e(t){var i=this;sk(this,e),sw(this,"_adHasPlayed",void 0),sw(this,"_adRequests",void 0),sw(this,"_adResponses",void 0),sw(this,"_currentAdRequestNumber",void 0),sw(this,"_currentAdResponseNumber",void 0),sw(this,"_prerollPlayTime",void 0),sw(this,"_wouldBeNewAdPlay",void 0),sw(this,"isAdBreak",void 0),sw(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),oa.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),oi(i._adRequests,a),sO(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||sO(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),oi(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&sO(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,sO(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||sO(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||sO(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return sA(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=sl(sL(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=sl(sL(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),on=function e(t){var i=this;sk(this,e),sw(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=sh(),t.on("before*",r)},r=function(e){var a=sh(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},os=nZ(nX()),oo=(oK=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=oK({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",oK(t,{expires:-1}))},i.withConverter=e,i}(function(){})),ol="muxData",od=function(){var e;try{e=(oo.get(ol)||"").split("&").reduce(function(e,t){var i=sl(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},ou=function(e){try{oo.set(ol,Object.entries(e).map(function(e){var t=sl(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},oc=function(){var e=od();return e.mux_viewer_id=e.mux_viewer_id||sm(),e.msn=e.msn||Math.random(),ou(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},oh=function(){var e=od(),t=sh();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=sm(),e.sst=t),e.sex=t+15e5,ou(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},om=ov({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),op=ov({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function ov(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function ob(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=om[s];o||(sf.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),op[e]?o+=op[e]:Number.isInteger(Number(e))?o+=e:(sf.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var og=nZ(nX()),of=nZ(sn()),oE={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},oy=["hb","requestcompleted","requestfailed","requestcanceled"],o_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},oE,t)};o_.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},o_.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},o_.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),og.default.clearTimeout(this._sendTimeout)},o_.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],ob({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);oT(this._beaconUrl,i,!0,function(){})},o_.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=sh();oT(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,sf.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=sh()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},o_.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},o_.prototype._startBeaconSending=function(){var e=this;og.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=og.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},o_.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(sh())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(sf.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===oy.indexOf(e.e)}),s()),o()||(sf.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var ok="function"==typeof of.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},oT=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(og.default.fetch)return void og.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ok(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(og.default.XMLHttpRequest){var r=new og.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},oA=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],ow=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],oC=["ad_id","ad_creative_id","ad_universal_id"],oS=["viewstart","error","ended","viewend"],oI=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,f,E,y,k,T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};sk(this,e),sw(this,"mux",void 0),sw(this,"envKey",void 0),sw(this,"options",void 0),sw(this,"eventQueue",void 0),sw(this,"sampleRate",void 0),sw(this,"disableCookies",void 0),sw(this,"respectDoNotTrack",void 0),sw(this,"previousBeaconData",void 0),sw(this,"lastEventTime",void 0),sw(this,"rateLimited",void 0),sw(this,"pageLevelData",void 0),sw(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new o_((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(E=this.options.sampleRate)?E:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(k=this.options.respectDoNotTrack)&&k,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(g=this.options.platform)||null==(b=g.os)?void 0:b.version,page_url:null===os.default||void 0===os.default||null==(f=os.default.location)?void 0:f.href},this.viewerData=this.disableCookies?{}:oc()}return sA(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&sy())return sf.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return sf.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:oh(),a=sU(sN({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=ob(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return sf.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||sf.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(sf.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(oS.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=ob(a),this.eventQueue.queueEvent(a.event,s),sf.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=sN({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=sl(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||oA.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||oC.includes(t)&&ow.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),oR=function e(t){sk(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},oL=function e(t){var i=this;sk(this,e),sw(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=sh(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,sw({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function ox(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var oM=function e(t){sk(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!ox(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(ox(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},oD=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},oP=function e(t){var i=this;sk(this,e),sw(this,"_emittingAutomaticEvent",!1),sw(this,"_hasInitialized",!1),sw(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?oD(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},oO=function(){function e(t){sk(this,e),sw(this,"pm",void 0),sw(this,"_currentRangeStart",void 0),sw(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return sA(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),oN=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),oU=function(e){if(!e)return oN.UNKNOWN;switch(e){case"cellular":case"wimax":return oN.CELLULAR;case"wifi":return oN.WIFI;case"ethernet":return oN.WIRED;case"none":return oN.NO_CONNECTION;case"bluetooth":case"other":default:return oN.OTHER;case"unknown":return oN.UNKNOWN}},oH=nZ(nX()),oB=function(){function e(t){var i=this;sk(this,e),sw(this,"pm",void 0),sw(this,"lastType",void 0),sw(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),oH.default.addEventListener("online",a),oH.default.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),oH.default.removeEventListener("online",a),oH.default.removeEventListener("offline",a)})})}return sA(e,[{key:"type",get:function(){var t,i;return(null==(t=oH.default.navigator)?void 0:t.onLine)===!1?oN.NO_CONNECTION:null!=(i=e.connection)&&i.type?oU(e.connection.type):oN.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",sN({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=oH.default.navigator)&&"connection"in e&&"object"==typeof e.connection?oH.default.navigator.connection:null}}]),e}(),oW=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],o$=new Set(["requestcompleted","requestfailed","requestcanceled"]),oq=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&sI(a,e);var t,i=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=sC(a);return e=t?Reflect.construct(i,arguments,sC(this).constructor):i.apply(this,arguments),e&&("object"===n1(e)||"function"==typeof e)?e:s_(this)});function a(e,t,r){sk(this,a),sw(s_(n=i.call(this)),"pageLoadEndTime",void 0),sw(s_(n),"pageLoadInitTime",void 0),sw(s_(n),"_destroyed",void 0),sw(s_(n),"_heartBeatTimeout",void 0),sw(s_(n),"adTracker",void 0),sw(s_(n),"dashjs",void 0),sw(s_(n),"data",void 0),sw(s_(n),"disablePlayheadRebufferTracking",void 0),sw(s_(n),"disableRebufferTracking",void 0),sw(s_(n),"disableAdPlaybackRangeFiltering",void 0),sw(s_(n),"errorTracker",void 0),sw(s_(n),"errorTranslator",void 0),sw(s_(n),"emitTranslator",void 0),sw(s_(n),"getAdData",void 0),sw(s_(n),"getPlayheadTime",void 0),sw(s_(n),"getStateData",void 0),sw(s_(n),"stateDataTranslator",void 0),sw(s_(n),"hlsjs",void 0),sw(s_(n),"id",void 0),sw(s_(n),"longResumeTracker",void 0),sw(s_(n),"minimumRebufferDuration",void 0),sw(s_(n),"mux",void 0),sw(s_(n),"playbackEventDispatcher",void 0),sw(s_(n),"playbackHeartbeat",void 0),sw(s_(n),"playbackHeartbeatTime",void 0),sw(s_(n),"playheadTime",void 0),sw(s_(n),"seekingTracker",void 0),sw(s_(n),"sustainedRebufferThreshold",void 0),sw(s_(n),"watchTimeTracker",void 0),sw(s_(n),"currentFragmentPDT",void 0),sw(s_(n),"currentFragmentStart",void 0),n.pageLoadInitTime=sP(),n.pageLoadEndTime=sD(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),sf.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new oI(e,r.data.env_key,r),n.data={player_instance_id:sm(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(s_(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),oW.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new oL(s_(n)),n.errorTracker=new s3(s_(n)),new on(s_(n)),n.seekingTracker=new ot(s_(n)),n.playheadTime=new s9(s_(n)),n.playbackHeartbeat=new s2(s_(n)),new oe(s_(n)),n.watchTimeTracker=new s4(s_(n)),new s5(s_(n)),new oO(s_(n)),n.adTracker=new or(s_(n)),new s6(s_(n)),new s8(s_(n)),new s7(s_(n)),new oR(s_(n)),new oM(s_(n)),new oP(s_(n)),new oB(s_(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return sA(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=sS(sC(a.prototype),"emit",this)).call.apply(i,[this].concat(sg(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=sl(sL(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,o$.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=sm(),i=function(){t===e.data.view_id&&sO(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,sK(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(sj(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,sZ(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(sX(this.dashjs),this.dashjs=void 0)}}]),a}(s0),oV=nZ(sn());function oF(){return oV.default&&!!(oV.default.fullscreenElement||oV.default.webkitFullscreenElement||oV.default.mozFullScreenElement||oV.default.msFullscreenElement)}var oK,oj,oY,oG,oz,oQ,oZ,oX,oJ,o0,o1,o2,o3,o4,o5,o9,o8,o6,o7,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lc,lh,lm,lp,lv,lb,lg,lf,lE,ly,l_,lk,lT,lA,lw,lC,lS,lI,lR,lL,lx,lM,lD,lP,lO,lN,lU,lH,lB,lW,l$,lq,lV,lF,lK,lj,lY,lG,lz,lQ,lZ,lX,lJ,l0,l1,l2,l3,l4,l5,l9,l8,l6,l7,de,dt,di,da,dr,dn,ds,dl,dd,du,dc,dh,dm,dp,dv,db,dg,df,dE,dy,d_,dk,dT,dA,dw,dC,dS,dI,dR,dL,dx,dM,dD,dP,dO,dN,dU,dH,dB,dW,d$,dq,dV,dF,dK,dj,dY,dG,dz,dQ,dZ,dX,dJ,d0,d1,d2,d3,d4,d5,d9,d8,d6,d7,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,ug,uf,uE,uy,u_,uk,uT,uA,uw,uC,uS,uI,uR,uL,ux,uM,uD,uP,uO,uN,uU,uH,uB,uW,u$,uq,uV,uF,uK,uj,uY,uG,uz,uQ,uZ,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cg,cf,cE,cy,c_,ck,cT,cA,cw,cC,cS,cI,cR,cL,cx,cM,cD,cP,cO,cN,cU,cH,cB,cW,c$,cq,cV,cF,cK,cj,cY,cG,cz,cQ,cZ,cX,cJ,c0,c1,c2,c3,c4,c5=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],c9={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},c8=nZ(nX());c8.default&&c8.default.WeakMap&&(c4=new WeakMap);var c6=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};c6.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},c6.prototype.processLine=function(e){var t=e.indexOf(":"),i=hn(e,t),a=i[0],r=2===i.length?ht(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":c7(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":c7(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":c7(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=sq(hs(i[1]));Object.assign(this.manifest.sessionData,s)}},c6.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var c7=function(e,t){var i,a=he(t[0].replace("#EXT-X-",""));hr(t[1])?(i={},i=Object.assign(ha(t[1]),i)):i=ht(t[1]),e[a]=i},he=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},ht=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},hi=function(e){var t={},i=e.split("=");return i.length>1&&(t[he(i[0])]=ht(i[1])),t},ha=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(hi(t[a]),i);return i},hr=function(e){return e.indexOf("=")>-1},hn=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},hs=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},ho={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){sf.info("safeCall error",e)}return r},safeIncrement:sO,getComputedStyle:function(e,t){var i;return e&&t&&c8.default&&"function"==typeof c8.default.getComputedStyle?(c4&&c4.has(e)&&(i=c4.get(e)),i||(i=c8.default.getComputedStyle(e,null),c4&&c4.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:sW,cdnHeadersToRequestId:s$,extractHostnameAndDomain:sL,extractHostname:sR,manifestParser:c6,generateShortID:sp,generateUUID:sm,now:sh,findMediaElement:sb},hl={},hd=function(e){var t=arguments;"string"==typeof e?hd.hasOwnProperty(e)?sd.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),hd[e].apply(null,t)},0):sf.warn("`"+e+"` is an unknown task"):"function"==typeof e?sd.default.setTimeout(function(){e(hd)},0):sf.warn("`"+e+"` is invalid.")},hu={loaded:sh(),NAME:"mux-embed",VERSION:"5.18.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=sl(sb(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:oF(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=sl(sb(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},c5.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=c9[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=oF()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=oF(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(hd,e,t)},destroyMonitor:function(e){var t=sl(sb(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():sf.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=sv(e);hl[i]?hl[i].addHLSJS(t):sf.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=sv(e);hl[i]?hl[i].addDashJS(t):sf.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=sv(e);hl[t]?hl[t].removeHLSJS():sf.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=sv(e);hl[t]?hl[t].removeDashJS():sf.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){sy()&&t&&t.respectDoNotTrack&&sf.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=sv(e);hl[i]=new oq(hd,i,t)},emit:function(e,t,i){var a=sv(e);hl[a]?(hl[a].emit(t,i),"destroy"===t&&delete hl[a]):sf.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=sv(e);hl[i]?hl[i].emit("hb",t):sf.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=sv(e);hl[i]?hl[i].emitTranslator=t:sf.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=sv(e);hl[i]?hl[i].stateDataTranslator=t:sf.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=sv(e);hl[i]?hl[i].getPlayheadTime=t:sf.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:sy,log:sf,utils:ho,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(hd,hu),void 0!==sd.default&&"function"==typeof sd.default.addEventListener&&sd.default.addEventListener("pagehide",function(e){e.persisted||(hd.WINDOW_UNLOADING=!0)},!1);var hc=i(38309),hh=hc.Ay,hm="video",hp=e=>e===hm?"playback":e,hv=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};hv.MEDIA_ERR_ABORTED=1,hv.MEDIA_ERR_NETWORK=2,hv.MEDIA_ERR_DECODE=3,hv.MEDIA_ERR_SRC_NOT_SUPPORTED=4,hv.MEDIA_ERR_ENCRYPTED=5,hv.MEDIA_ERR_CUSTOM=100,hv.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var hb=(e,t)=>null!=t&&e in t,hg={ANY:"any",MUTED:"muted"},hf="on-demand",hE="live",hy="unknown",h_="native",hk={HEADER:"header",QUERY:"query",NONE:"none"},hT=Object.values(hk),hA={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},hw={HLS:hA.M3U8};Object.keys(hw),[...Object.values(hA)];var hC={code:"en"},hS=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},hI=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},hR=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return hb(e,hw)?hw[e]:t}return hM(e)},hL=e=>"VOD"===e?hf:hE,hx=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,hM=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=hP(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return hN(e)?hA.M3U8:"";let r=i.slice(a+1).toUpperCase();return hb(r,hA)?hA[r]:""},hD=e=>{try{return new URL(e),!1}catch{return!0}},hP=(e,t)=>{var i;if(!hD(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&hD(t.toString())&&(r=new URL(t,a)),new URL(e,r)},hO="mux.com",hN=({src:e,customDomain:t=hO})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},hU=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function hH(e,t=!0){var i;return new hB(t&&null!=(i=null==hC?void 0:hC[e])?i:e,t?hC.code:"en")}var hB=class{constructor(e,t=(e=>null!=(e=hC)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},hW=Object.values(hg),h$=e=>"boolean"==typeof e||"string"==typeof e&&hW.includes(e),hq=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case hg.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case hg.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},hV=e=>"time"in e?e.time:e.startTime;function hF(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function hK(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function hj(e,t,i,a){let r=hK(e,i,a);return r||((r=hF(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>hV(t)-hV(e)).forEach(t=>{var i,n;let s=t.value,o=hV(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var hY="cuepoints",hG=Object.freeze({label:hY});async function hz(e,t,i=hG){return hj(e,t,i.label,"metadata")}var hQ=e=>({time:e.startTime,value:JSON.parse(e.text)});function hZ(e,t={label:hY}){var i,a;let r=hK(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return hQ(r.activeCues[0]);let{currentTime:n}=e;return hQ(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function hX(e,t=hG){return new Promise(i=>{hS(e,"loadstart",async()=>{let a=await hz(e,[],t);hS(e,"cuechange",()=>{let t=hZ(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var hJ="chapters",h0=Object.freeze({label:hJ}),h1=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function h2(e,t,i=h0){return hj(e,t,i.label,"chapters")}function h3(e,t={label:hJ}){var i,a;let r=hK(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return h1(r.activeCues[0]);let{currentTime:n}=e;return h1(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function h4(e,t=h0){return new Promise(i=>{hS(e,"loadstart",async()=>{let a=await h2(e,[],t);hS(e,"cuechange",()=>{let t=h3(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var h5=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l,d;let u,c;if(n){let i=hH("Your device appears to be offline",r),a=hv.MEDIA_ERR_NETWORK,n=new hv(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=2000002,n.data=e,n}let h="status"in e?e.status:e.code,m=Date.now(),p=hv.MEDIA_ERR_NETWORK;if(200===h)return;let v=hp(t),b=(u=hp(t),c=`${u}Token`,null!=(l=i.tokens)&&l[u]?null==(d=i.tokens)?void 0:d[u]:hb(c,i)?i[c]:void 0),g=t===hm?"v":"drm"===t?"d":void 0,[f]=hI(null!=(s=i.playbackId)?s:"");if(!h||!f)return;let E=hU(b);if(b&&!E){let i=new hv(hH("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:v}),p,!0,hH("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=2412202,i.data=e,i}if(h>=500){let e=new hv("",p,null==a||a);return e.errorCategory=t,e.muxCode=2e6,e}if(403===h)if(E){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(E,m)){let i={timeStyle:"medium",dateStyle:"medium"},a=new hv(hH("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:v}),p,!0,hH("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=E.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(m)}));return a.errorCategory=t,a.muxCode=2403210,a.data=e,a}if((({sub:e},t)=>e!==t)(E,f)){let i=new hv(hH("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v}),p,!0,hH("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:v,playbackId:f,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=2403232,i.data=e,i}if((({aud:e})=>!e)(E)){let i=new hv(hH("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,hH("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g}));return i.errorCategory=t,i.muxCode=2403221,i.data=e,i}if((({aud:e},t)=>e!==t)(E,g)){let i=new hv(hH("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,hH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g,aud:E.aud}));return i.errorCategory=t,i.muxCode=2403222,i.data=e,i}}else{let i=new hv(hH("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v,category:t}),p,null==a||a,hH("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2403201,i.data=e,i}if(412===h){let n=new hv(hH("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==a||a,hH("Specified playback ID: {playbackId}",r).format({playbackId:f}));return n.errorCategory=t,n.muxCode=2412e3,n.streamType=i.streamType===hE?"live":i.streamType===hf?"on-demand":"unknown",n.data=e,n}if(404===h){let i=new hv(hH("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==a||a,hH("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=2404e3,i.data=e,i}if(400===h){let i=new hv(hH("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==a||a,hH("Specified playback ID: {playbackId}",r).format({playbackId:f}));return i.errorCategory=t,i.muxCode=24e5,i.data=e,i}let y=new hv("",p,null==a||a);return y.errorCategory=t,y.muxCode=2e6,y.data=e,y},h9=hh.DefaultConfig.capLevelController,h8={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},h6=class e extends h9{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=h8[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:h9.getMaxLevelByMediaSize(a,16/9*n,n)}};h6.minMaxResolution=720,h6.maxAutoResolution=new WeakMap;var h7,me,mt,mi,ma,mr,mn=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),ms="fairplay",mo=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,ml=async(e,t)=>{if(t===hA.MP4)return{streamType:hf,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===hA.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await ((e,t)=>{let i,a=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(hD(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=hP(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())})(i,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(mo)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=hL(n),o=hx(n),l;if(s===hE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},md=async(e,t,i=hR({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await ml(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&mu(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=mp.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=mp.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=mp.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},mu=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=mp.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},mc=null!=(me=null==(h7=null==globalThis?void 0:globalThis.navigator)?void 0:h7.userAgent)?me:"",mh=null!=(ma=null==(mi=null==(mt=null==globalThis?void 0:globalThis.navigator)?void 0:mt.userAgentData)?void 0:mi.platform)?ma:"",mm=mc.toLowerCase().includes("android")||["x11","android"].some(e=>mh.toLowerCase().includes(e)),mp=new WeakMap,mv="mux.com",mb=null==(mr=hh.isSupported)?void 0:mr.call(hh),mg=()=>{if("u">typeof window)return hd.utils.now()},mf=hd.utils.generateUUID,mE=({playbackId:e,customDomain:t=mv,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=hI(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},my=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},m_=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},mk=e=>{var t;return null==(t=mp.get(e))?void 0:t.error},mT=e=>{var t,i;return null!=(i=null==(t=mp.get(e))?void 0:t.streamType)?i:hy},mA=e=>{var t,i;return null!=(i=null==(t=mp.get(e))?void 0:t.seekable)?i:e.seekable},mw=.034,mC=(e,t,i=mw)=>e>t||((e,t,i=mw)=>Math.abs(e-t)<=i)(e,t,i),mS=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},mI=(e,t)=>e.ended||e.loop?e.ended:!!(t&&mS(e,t))||((e,t=mw)=>e.paused&&mC(e.currentTime,e.duration,t))(e),mR=(e,t,i)=>{var a,r,n;mx(t,i,e);let{metadata:s={}}=e,{view_session_id:o=mf()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:mW(e)&&null!=(n=null!=(r=my(e.playbackId))?r:m_(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=mp.get(t))?void 0:i.coreReference;mR(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},mp.set(t,{retryCount:0});let d=mD(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return hS(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?hh:void 0}):mq(e,t,d),mV(e,t,d),hX(t),h4(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=h$(a)?a:!!a,o=()=>{r||hS(t,"playing",()=>{r=!0},{once:!0})};if(o(),hS(t,"loadstart",()=>{r=!1,o(),hq(t,s)},{once:!0}),hS(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==hy?e.streamType===hE:!Number.isFinite(t.duration)),hq(t,s)},{once:!0}),i&&i.once(hh.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==hy?e.streamType===hE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&hS(t,"play",()=>{"metadata"===t.preload?i.once(hh.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||hq(t,s=h$(e)?e:!!e)}})(e,t,d);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,hS(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(hh.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(hh.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,d),((e,t)=>{let{initialEstimateSegments:i}=e;if(null==i||i<=0||!t)return;let a=0;t.on(hh.Events.FRAG_BUFFERED,(e,{frag:r})=>{"main"===r.type&&++a<i&&t.abrController.resetEstimator(t.config.abrEwmaDefaultEstimate)})})(e,d);let h={engine:d,setAutoplay:c,setPreload:u},m=mp.get(t);return m&&(m.coreReference=h),h},mL=new WeakMap,mx=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",mK),e.removeEventListener("error",mY),e.removeEventListener("durationchange",mF),mp.delete(e),e.dispatchEvent(new Event("teardown")))};function mM(e,t){var i;let a=hR(e);if(a!==hA.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=mb&&("mse"===n||mm||!(/^((?!chrome|android).)*safari/i.test(mc)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(n===h_||!s)}var mD=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=hR(e)===hA.M3U8,c=mM(e,t);if(u&&!c&&mb){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=mP(a),h=mO(e),m=[hk.QUERY,hk.HEADER].includes(s)?{useHeaders:s===hk.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=m$(e,o),v=new hh({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==hk.QUERY)return;let r=hP(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===h6&&void 0!==l&&h6.setMaxAutoResolution(v,l),v.on(hh.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&mu(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},mP=e=>e===hE?{backBufferLength:8}:{},mO=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=my(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:mH(e,"fairplay"),serverCertificateUrl:mB(e,"fairplay")},"com.widevine.alpha":{licenseUrl:mH(e,"widevine")},"com.microsoft.playready":{licenseUrl:mH(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?ms:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},mN=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},mU=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},mH=({playbackId:e,tokens:{drm:t}={},customDomain:i=mv},a)=>{let r=my(e);return`https://license.${i.toLocaleLowerCase().endsWith(mv)?i:mv}/license/${a}/${r}?token=${t}`},mB=({playbackId:e,tokens:{drm:t}={},customDomain:i=mv},a)=>{let r=my(e);return`https://license.${i.toLocaleLowerCase().endsWith(mv)?i:mv}/appcert/${a}/${r}?token=${t}`},mW=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(mv)||!!i&&a.includes(i.toLocaleLowerCase())},m$=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=h6,i.capLevelToPlayerSize=!0):i.capLevelController=hc.Rx,i},mq=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=hd,muxDataSDKOptions:o={}}=e,l=mW(e),d=mp.get(t);if(d&&(d.muxDataDisableCookies=!!e.disableCookies),!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?hh:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},mV=(e,t,i)=>{var a,r,n;let s=mM(e,t),{src:o,customDomain:l=mv}=e,d=()=>{t.ended||e.disablePseudoEnded||!mI(t,i)||(mS(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let e=mA(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(c!==a||u!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=i,c=a};if(hS(t,"durationchange",h),t&&s){let i=hR(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(l)){let e=m_(o);mu(new URL(`https://stream.${l}/${e}/metadata.json`).toString(),t)}let n=()=>{if(mT(t)!==hE||Number.isFinite(t.duration))return;let e=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),hS(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},s=async()=>md(o,t,i).then(n).catch(i=>{if(i instanceof Response){let a=h5(i,hm,e);if(a)return void mj(t,a)}});if("none"===t.preload){let e=()=>{s(),t.removeEventListener("loadedmetadata",i)},i=()=>{s(),t.removeEventListener("play",e)};hS(t,"play",e,{once:!0}),hS(t,"loadedmetadata",i,{once:!0})}else s();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>mN(mB(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=h5(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>mU(t,mH(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=h5(t,"drm",e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:mj,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,ms)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new hv(hH("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),hv.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000005,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,c,h,m,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(i=t.initData,r=v,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(mn(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new hv("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",hv.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory="drm",e.muxCode=5000001,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new hv(hH("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),hv.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory="drm",r.muxCode=5000005,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new hv(hH("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),hv.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000001,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=hH("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new hv(e,hv.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory="drm",t.muxCode=5000004,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new hv(hH("Failed to update DRM license. This may be an issue with the player or your protected content."),hv.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory="drm",t.muxCode=5000003,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new hv(hH("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),hv.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",i.muxCode=5000005):("output-restricted"===t||"output-downscaled"===t)&&((i=new hv(hH("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),hv.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",i.muxCode=5000006),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new hv(hH("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),hv.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory="drm",e.muxCode=5000002,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):hS(t,"encrypted",()=>{let e=new hv(hH("Attempting to play DRM-protected content without providing a DRM token."),hv.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory="drm",e.muxCode=5000002,mj(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=mp.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",mF,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",mK),t.addEventListener("error",mY),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),hS(t,"pause",d),hS(t,"seeked",d),hS(t,"play",()=>{t.ended||mC(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(i&&o){let a,r;i.once(hh.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,v,b,{streamType:g,targetLiveWindow:f,liveEdgeStartOffset:E,lowLatency:y}=(m=hL(h=e.type),p=hx(h),b=!!(null!=(c=e.partList)&&c.length),m===hE&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===hE){y?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=mp.get(t))?o:{}).seekable=e}(null!=(l=mp.get(t))?l:{}).liveEdgeStartOffset=E,(null!=(d=mp.get(t))?d:{}).targetLiveWindow=f,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=mp.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),h(),mT(t)!==hE||Number.isFinite(t.duration)||(i.on(hh.Events.LEVEL_UPDATED,h),hS(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(hh.Events.LEVELS_UPDATED,h)}))});let s=null!=(n=e.maxReconnectRetries)?n:0,l=s>0?(({hls:e,mediaEl:t,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,u=!1,c=!1,h=()=>{null!=o&&(clearTimeout(o),o=void 0)},m=e=>(null==e?void 0:e.muxCode)===2000003,p=()=>{!c&&i?e.loadSource(i):e.startLoad(t.currentTime)},v=()=>{let e=a.get(t);!(null!=e&&e.networkError)||u||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=a.get(t);if(m(null==e?void 0:e.error))return;let i=new hv(hH("Attempting to reconnect..."),hv.MEDIA_ERR_NETWORK,!1);i.errorCategory=hm,i.muxCode=2000003,e&&(e.error=i),t.dispatchEvent(new CustomEvent("error",{detail:i}))})(),(()=>{if(null==o&&!d){if(l>=n){let e;return d=!1,u=!0,h(),(e=new hv(hH("Network error, try reloading."),hv.MEDIA_ERR_NETWORK,!0)).errorCategory=hm,e.reload=!0,r(t,e)}d=!0,o=setTimeout(()=>{o=void 0,l+=1,p()},Math.min(1e3*2**l,3e4))}})())},b=()=>{let e=a.get(t);null!=e&&e.networkError&&(l=0,u=!1,h(),d=!0,p())};return null==(s=globalThis.addEventListener)||s.call(globalThis,"online",b),e.on(hh.Events.FRAG_BUFFERED,()=>{let e=a.get(t);e&&(e.networkError||m(e.error))&&(e.networkError=!1,d=!1,l=0,u=!1,h(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),hS(t,"playing",()=>{let e=a.get(t);null!=e&&e.networkError&&(d=!1,l=0,u=!1,h(),e.error&&(e.error=null))}),hS(t,"waiting",v),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",b),h()},{once:!0}),{handleHlsError:(e,i)=>{var r,n;let s;if(e.type!==hh.ErrorTypes.NETWORK_ERROR)return!1;let o=null!=(n=null==(r=e.response)?void 0:r.code)?n:0;return(2000002===i.muxCode||0===o||o>=500)&&!!e.fatal&&((s=a.get(t))&&(s.networkError=!0),d=!1,v(),!0)},onManifestLoaded:()=>{c=!0,d=!1,h()}}})({hls:i,mediaEl:t,src:o,muxMediaState:mp,saveAndDispatchError:mj,maxRetries:s}):void 0;i.on(hh.Events.ERROR,(a,r)=>{var n,s;let o=mG(r,e);if(2412e3===o.muxCode){let e=null!=(n=mp.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new hv(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),mj(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new hv("Network error, try reloading.",o.code,o.fatal);Object.assign(i,o),i.reload=!0,mj(t,i);return}}null!=l&&l.handleHlsError(r,o)||mj(t,o)}),i.on(hh.Events.MANIFEST_LOADED,()=>{null==l||l.onManifestLoaded();let e=mp.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",mY),hS(t,"waiting",d),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(hh.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(hh.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(hh.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(hh.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(hh.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;hF(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(hh.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(hh.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i,a;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let r=t.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(hh.Events.MANIFEST_LOADED,r),i.once(hh.Events.MEDIA_ATTACHED,r),i.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function mF(e){var t;let i=e.target,a=null==(t=mp.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function mK(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new hv(i,a);if(t.src&&a===hv.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=mk(t))?e:t.error;(null==i?void 0:i.code)===hv.MEDIA_ERR_SRC_NOT_SUPPORTED&&mj(t,r)},500);if(t.src&&(a!==hv.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}mj(t,r)}function mj(e,t){var i;t.fatal&&((null!=(i=mp.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function mY(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof hv))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=mp.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var mG=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[hh.ErrorTypes.NETWORK_ERROR]:hv.MEDIA_ERR_NETWORK,[hh.ErrorTypes.MEDIA_ERROR]:hv.MEDIA_ERR_DECODE,[hh.ErrorTypes.KEY_SYSTEM_ERROR]:hv.MEDIA_ERR_ENCRYPTED},s,o=[hh.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,hh.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?hv.MEDIA_ERR_NETWORK:n[e.type];if(o===hv.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===hh.ErrorTypes.KEY_SYSTEM_ERROR?"drm":e.type===hh.ErrorTypes.NETWORK_ERROR?hm:void 0)?i:hm;s=null!=(a=h5(e.response,r,t,e.fatal))?a:new hv("",o,e.fatal)}else o===hv.MEDIA_ERR_ENCRYPTED?e.details===hh.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new hv(hH("Attempting to play DRM-protected content without providing a DRM token."),hv.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000002):e.details===hh.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new hv(hH("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),hv.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000001):e.details===hh.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new hv(hH("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),hv.MEDIA_ERR_ENCRYPTED,!0)).errorCategory="drm",s.muxCode=5000002):e.details===hh.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new hv(hH("Failed to update DRM license. This may be an issue with the player or your protected content."),hv.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000003):e.details===hh.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new hv(hH("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),hv.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000004):e.details===hh.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new hv(hH("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),hv.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5000005):e.details===hh.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new hv(hH("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),hv.MEDIA_ERR_ENCRYPTED,!1)).errorCategory="drm",s.muxCode=5000006):((s=new hv(e.error.message,hv.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory="drm",s.muxCode=5e6):s=new hv("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};let mz=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],mQ=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function mZ(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${m0(e)}></audio>
    </slot>
    <slot></slot>
  `}function mX(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${m0(e)}></video>
    </slot>
    <slot></slot>
  `}function mJ(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?mZ:mX;static shadowRootOptions={mode:"open"};static Events=mz;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...mQ]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();e.has(a)?!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i):this.set?this.set(t,i):this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function m0(e){let t="";for(let i in e){if(!mQ.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let m1=mJ(globalThis.HTMLElement??class{},{tag:"video"});mJ(globalThis.HTMLElement??class{},{tag:"audio"});var m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps=e=>{throw TypeError(e)},po=(e,t,i)=>t.has(e)||ps("Cannot "+i),pl=(e,t,i)=>(po(e,t,"read from private field"),i?i.call(e):t.get(e)),pd=(e,t,i)=>t.has(e)?ps("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),pu=(e,t,i,a)=>(po(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),pc=(e,t,i)=>(po(e,t,"access private method"),i),ph=(()=>{try{return"0.31.3"}catch{}return"UNKNOWN"})(),pm=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,pp={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},pv=Object.values(pp),pb="mux-video",pg=class extends m1{constructor(){super(),pd(this,pi),pd(this,m2),pd(this,m3),pd(this,m4,{}),pd(this,m5,{}),pd(this,m9),pd(this,m8),pd(this,m6),pd(this,m7),pd(this,pe,""),pd(this,pt,e=>{var t,i,a;let r=(i=this.nativeEl,null==(a=mp.get(i))?void 0:a.metadata),n=null!=(t=this.metadata)?t:{};this.metadata={...r,...n},(null==r?void 0:r["com.mux.video.branding"])==="mux-free-plan"&&(pu(this,pe,"default"),this.updateLogo())}),pd(this,pr),pu(this,m3,mg())}static get NAME(){return pb}static get VERSION(){return ph}static get observedAttributes(){var e;return[...pv,...null!=(e=m1.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?pm:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${m1.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[pp.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(pp.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?hT.includes(e)?this.setAttribute(pp.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${hT.join()}`):this.removeAttribute(pp.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(pp.PLAYER_INIT_TIME)?+this.getAttribute(pp.PLAYER_INIT_TIME):pl(this,m3)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(pp.PLAYER_INIT_TIME):this.setAttribute(pp.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=pl(this,m6))?e:pb}set playerSoftwareName(e){pu(this,m6,e)}get playerSoftwareVersion(){var e;return null!=(e=pl(this,m8))?e:ph}set playerSoftwareVersion(e){pu(this,m8,e)}get _hls(){var e;return null==(e=pl(this,pi,pa))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=mk(this.nativeEl))?e:null}get errorTranslator(){return pl(this,m7)}set errorTranslator(e){pu(this,m7,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(pp.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(pp.TYPE,e):this.removeAttribute(pp.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(pp.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(pp.DEBUG,""):this.removeAttribute(pp.DEBUG))}get disableTracking(){return this.hasAttribute(pp.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(pp.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(pp.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(pp.DISABLE_COOKIES,""):this.removeAttribute(pp.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(pp.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(pp.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(pp.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(pp.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(pp.MAX_RECONNECT_RETRIES):this.setAttribute(pp.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(pp.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(pp.START_TIME):this.setAttribute(pp.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(pp.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(pp.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(pp.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(pp.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(pp.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(pp.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(pp.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(pp.MIN_PRELOAD_SEGMENTS):this.setAttribute(pp.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(pp.PLAYBACK_ID)?this.getAttribute(pp.PLAYBACK_ID):null!=(e=m_(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(pp.PLAYBACK_ID,e):this.removeAttribute(pp.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(pp.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(pp.MAX_RESOLUTION,e):this.removeAttribute(pp.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(pp.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(pp.MIN_RESOLUTION,e):this.removeAttribute(pp.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(pp.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(pp.MAX_AUTO_RESOLUTION):this.setAttribute(pp.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(pp.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(pp.RENDITION_ORDER,e):this.removeAttribute(pp.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(pp.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(pp.PROGRAM_START_TIME):this.setAttribute(pp.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(pp.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(pp.PROGRAM_END_TIME):this.setAttribute(pp.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(pp.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(pp.ASSET_START_TIME):this.setAttribute(pp.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(pp.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(pp.ASSET_END_TIME):this.setAttribute(pp.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(pp.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(pp.CUSTOM_DOMAIN,e):this.removeAttribute(pp.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:pl(this,pr)}set capRenditionToPlayerSize(e){pu(this,pr,e)}get drmToken(){var e;return null!=(e=this.getAttribute(pp.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(pp.DRM_TOKEN,e):this.removeAttribute(pp.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(pp.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(pp.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(pp.PLAYBACK_ID)){let[,e]=hI(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(pp.PLAYBACK_TOKEN,e):this.removeAttribute(pp.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(pp.PLAYBACK_TOKEN),t=this.getAttribute(pp.DRM_TOKEN);return{...pl(this,m5),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){pu(this,m5,null!=e?e:{})}get ended(){return mI(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(pp.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(pp.ENV_KEY,e):this.removeAttribute(pp.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(pp.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(pp.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(pp.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(pp.STREAM_TYPE))?e:mT(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(pp.STREAM_TYPE,e):this.removeAttribute(pp.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(pp.TARGET_LIVE_WINDOW)?+this.getAttribute(pp.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=mp.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(pp.TARGET_LIVE_WINDOW):this.setAttribute(pp.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(pp.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=mp.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=mA(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(pp.LIVE_EDGE_OFFSET))return+this.getAttribute(pp.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(pp.LIVE_EDGE_OFFSET):this.setAttribute(pp.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return mA(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),hz(this.nativeEl,e)}get activeCuePoint(){return hZ(this.nativeEl)}get cuePoints(){return function(e,t={label:hY}){let i=hK(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>hQ(e)):[]}(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),h2(this.nativeEl,e)}get activeChapter(){return h3(this.nativeEl)}get chapters(){return function(e,t={label:hJ}){var i;let a=hK(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>h1(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(pp.PREFER_PLAYBACK);if("mse"===e||e===h_)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===h_?this.setAttribute(pp.PREFER_PLAYBACK,e):this.removeAttribute(pp.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![pp.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...pl(this,m4)}}set metadata(e){pu(this,m4,null!=e?e:{}),this.mux&&this.mux.emit("hb",pl(this,m4))}get _hlsConfig(){return pl(this,m9)}set _hlsConfig(e){pu(this,m9,e)}get logo(){var e;return null!=(e=this.getAttribute(pp.LOGO))?e:pl(this,pe)}set logo(e){e?this.setAttribute(pp.LOGO,e):this.removeAttribute(pp.LOGO)}load(){mR(this,this.nativeEl,pl(this,pi,pa))}unload(){mx(this.nativeEl,pl(this,pi,pa),this)}attributeChangedCallback(e,t,i){var a,r;switch(m1.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case pp.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case pp.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?pc(this,pi,pn).call(this):e&&!a?this.unload():e&&a&&(this.unload(),pc(this,pi,pn).call(this));break}case"autoplay":if(i===t)break;null==(a=pl(this,pi,pa))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=pl(this,pi,pa))||r.setPreload(i);break;case pp.PLAYBACK_ID:case pp.CUSTOM_DOMAIN:case pp.MAX_RESOLUTION:case pp.MIN_RESOLUTION:case pp.RENDITION_ORDER:case pp.PROGRAM_START_TIME:case pp.PROGRAM_END_TIME:case pp.ASSET_START_TIME:case pp.ASSET_END_TIME:case pp.PLAYBACK_TOKEN:this.hasAttribute(pp.PLAYBACK_ID)&&(this.src=mE(this));break;case pp.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case pp.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case pp.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case pp.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case pp.LOGO:(null==i||i!==t)&&this.updateLogo();break;case pp.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),pc(this,pi,pn).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case pp.DISABLE_COOKIES:(null==i||i!==t)&&((e,t,i)=>{if(!t)return;let a=!!e.disableCookies,r=mp.get(t);!r||r.muxDataDisableCookies===a||(t&&(t.mux&&(t.mux.deleted||t.mux.destroy(),delete t.mux),mL.has(t)||mL.set(t,Promise.resolve().then(()=>{var a,r;mL.delete(t);let n=mp.get(t);n&&(!t.mux||t.mux.deleted)&&mq(e,t,null==(r=null!=(a=n.coreReference)?a:i)?void 0:r.engine)}))),a&&Promise.resolve().then(()=>{let t,i;e.disableCookies&&(t=new Date(0).toUTCString(),i=new Set(["muxData"]),document.cookie.split(";").forEach(e=>{let t=e.split("=")[0].trim();t.startsWith("muxData")&&i.add(t)}),i.forEach(e=>{document.cookie=`${e}=;expires=${t};path=/`}))}))})(this,this.nativeEl,pl(this,pi,pa));break;case pp.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(pl(this,pe)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",pl(this,pt)),this.nativeEl&&this.src&&!pl(this,pi,pa)&&pc(this,pi,pn).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",pl(this,pt)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};m2=new WeakMap,m3=new WeakMap,m4=new WeakMap,m5=new WeakMap,m9=new WeakMap,m8=new WeakMap,m6=new WeakMap,m7=new WeakMap,pe=new WeakMap,pt=new WeakMap,pi=new WeakSet,pa=function(){var e,t;return e=this.nativeEl,null==(t=mp.get(e))?void 0:t.coreReference},pr=new WeakMap,pn=async function(){pl(this,m2)||(await pu(this,m2,Promise.resolve()),pu(this,m2,null),this.load())};let pf=new WeakMap;class pE extends Error{}class py extends Error{}let p_=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function pk(){return globalThis.cast?.framework?.CastContext.getInstance()}function pT(){return pk()?.getCurrentSession()}function pA(){return pT()?.getSessionObj().media[0]}function pw(e){return pk().setOptions({...pC(),...e})}function pC(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function pS(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function pI(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function pR(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return p_.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function pL(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=pI(i),n=pS(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=pI(i);o=pS(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let px=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),pM=new WeakSet;ve=()=>{globalThis.chrome?.cast?.isAvailable?n||(n=cast.framework,pk().addEventListener(n.CastContextEventType.CAST_STATE_CHANGED,e=>{px.forEach(t=>pf.get(t).onCastStateChanged?.(e))}),pk().addEventListener(n.CastContextEventType.SESSION_STATE_CHANGED,e=>{px.forEach(t=>pf.get(t).onSessionStateChanged?.(e))}),px.forEach(e=>pf.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?ve():customElements.whenDefined("google-cast-button").then(ve):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(ve)};let pD=0;class pP extends EventTarget{#p;#a;#v;#b;#g="disconnected";#f=!1;#E=new Set;#y=new WeakMap;#_=()=>this.#k();constructor(e){super(),this.#p=e,px.add(this),pf.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#T(),onSessionStateChanged:()=>this.#A(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#_),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&pM.delete(this.#p),this.#a=!1}get #w(){if(pM.has(this.#p))return this.#v}get state(){return this.#g}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new pE("disableRemotePlayback attribute is present.");return this.#y.set(e,++pD),this.#E.add(e),queueMicrotask(()=>e(this.#C())),pD}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new pE("disableRemotePlayback attribute is present.");e?this.#E.delete(e):this.#E.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new pE("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new py("The RemotePlayback API is disabled on this platform.");let e=pM.has(this.#p);pM.add(this.#p),pw(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await pk().requestSession()}catch(t){if(e||pM.delete(this.#p),"cancel"===t)return;throw Error(t)}pf.get(this.#p)?.loadOnPrompt?.()}#S(){pM.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),pM.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#C(){let e=pk()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#T(){let e=pk().getCastState();if(pM.has(this.#p)&&"CONNECTING"===e&&(this.#g="connecting",this.dispatchEvent(new Event("connecting"))),!this.#f&&e?.includes("CONNECT"))for(let e of(this.#f=!0,this.#E))e(!0);else if(this.#f&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#f=!1,this.#E))e(!1)}async #A(){let{SESSION_RESUMED:e}=n.SessionState;if(pk().getSessionState()===e&&this.#p.castSrc===pA()?.media.contentId){pM.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{pA().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#b[n.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[n.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){n&&!this.#a&&(this.#a=!0,pw(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#_),this.#T(),this.#v=new n.RemotePlayer,new n.RemotePlayerController(this.#v),this.#b={[n.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#g="connected",this.dispatchEvent(new Event("connect"))):(this.#S(),this.#g="disconnected",this.dispatchEvent(new Event("disconnect")))},[n.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[n.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[n.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[n.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[n.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[n.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[n.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[n.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#I())}})}#I(){this.#k()}async #k(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=pT()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{pA().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let pO=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#R={paused:!1};#L=pC();#x;#M;get remote(){if(this.#M)return this.#M;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),pf.set(this,{loadOnPrompt:()=>this.#D()}),this.#M=new pP(this)}return super.remote}get #w(){return pf.get(this.#M)?.getCastPlayer?.()}disconnectedCallback(){this.#M?.destroy(),this.#M=null,pf.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#L.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #D(){this.#R.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await pR(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await pL(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#R.paused,r.activeTrackIds=i,await pT()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#L}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#x}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#x=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class pN extends Event{track;constructor(e,t){super(e),this.track=t.track}}let pU=new WeakMap;function pH(e){var t,i;let a;return pU.get(e)??(t=e,i={},(a=pU.get(t))||pU.set(t,a={}),Object.assign(a,i))}function pB(e,t){let i=e.videoTracks;pH(t).media=new WeakRef(e),pH(t).renditionSet||(pH(t).renditionSet=new Set);let a=pH(i).trackSet;a.add(t);let r=a.size-1;r in p$.prototype||Object.defineProperty(p$.prototype,r,{get(){return[...pH(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new pN("addtrack",{track:t}))})}function pW(e){let t=pH(e).media?.deref()?.videoTracks;t&&(pH(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new pN("removetrack",{track:e}))}))}class p$ extends EventTarget{#P;#O;#N;constructor(){super(),pH(this).trackSet=new Set}get #U(){return pH(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#P}set onaddtrack(e){this.#P&&(this.removeEventListener("addtrack",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#O}set onremovetrack(e){this.#O&&(this.removeEventListener("removetrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("removetrack",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class pq extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function pV(e){let t=pH(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...pH(e).renditionSet]):[]}class pF extends EventTarget{#H;#B;#N;[Symbol.iterator](){return pV(this).values()}get length(){return pV(this).length}getRenditionById(e){return pV(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return pV(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of pV(this).entries())i.selected=t===e}get onaddrendition(){return this.#H}set onaddrendition(e){this.#H&&(this.removeEventListener("addrendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class pK{src;id;width;height;bitrate;frameRate;codec;#W=!1;get selected(){return this.#W}set selected(e){if(this.#W!==e){var t;let i;this.#W=e,t=this,(i=pH(t).media?.deref()?.videoRenditions)&&!pH(i).changeRequested&&(pH(i).changeRequested=!0,queueMicrotask(()=>{delete pH(i).changeRequested,pH(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class pj{id;kind;label="";language="";sourceBuffer;#W=!1;addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new pK;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=pH(s).media?.deref()?.videoRenditions,pH(u).media=pH(s).media,pH(u).track=s,(l=pH(s).renditionSet).add(u),(d=l.size-1)in pF.prototype||Object.defineProperty(pF.prototype,d,{get(){return pV(this)[d]}}),queueMicrotask(()=>{o&&s.selected&&o.dispatchEvent(new pq("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=pH(e).media?.deref()?.videoRenditions,i=pH(e).track,pH(i).renditionSet.delete(e),queueMicrotask(()=>{let i=pH(e).track;t&&i.selected&&t.dispatchEvent(new pq("removerendition",{rendition:e}))})}get selected(){return this.#W}set selected(e){this.#W===e||(this.#W=e,!0===e&&function(e){let t=pH(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(pH(t).changeRequested)return;pH(t).changeRequested=!0,queueMicrotask(()=>{delete pH(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function pY(e){let t=pH(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...pH(e).renditionSet]):[]}class pG extends EventTarget{#H;#B;#N;[Symbol.iterator](){return pY(this).values()}get length(){return pY(this).length}getRenditionById(e){return pY(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return pY(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of pY(this).entries())i.selected=t===e}get onaddrendition(){return this.#H}set onaddrendition(e){this.#H&&(this.removeEventListener("addrendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class pz{src;id;bitrate;codec;#W=!1;get selected(){return this.#W}set selected(e){if(this.#W!==e){var t;let i;this.#W=e,t=this,(i=pH(t).media?.deref()?.audioRenditions)&&!pH(i).changeRequested&&(pH(i).changeRequested=!0,queueMicrotask(()=>{delete pH(i).changeRequested,pH(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function pQ(e,t){let i=e.audioTracks;pH(t).media=new WeakRef(e),pH(t).renditionSet||(pH(t).renditionSet=new Set);let a=pH(i).trackSet;a.add(t);let r=a.size-1;r in pX.prototype||Object.defineProperty(pX.prototype,r,{get(){return[...pH(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new pN("addtrack",{track:t}))})}function pZ(e){let t=pH(e).media?.deref()?.audioTracks;t&&(pH(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new pN("removetrack",{track:e}))}))}class pX extends EventTarget{#P;#O;#N;constructor(){super(),pH(this).trackSet=new Set}get #U(){return pH(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#P}set onaddtrack(e){this.#P&&(this.removeEventListener("addtrack",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#O}set onremovetrack(e){this.#O&&(this.removeEventListener("removetrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("removetrack",e))}get onchange(){return this.#N}set onchange(e){this.#N&&(this.removeEventListener("change",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("change",e))}}class pJ{id;kind;label="";language="";sourceBuffer;#$=!1;addRendition(e,t,i){var a;let r,n,s,o=new pz;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=pH(a).media?.deref()?.audioRenditions,pH(o).media=pH(a).media,pH(o).track=a,(n=pH(a).renditionSet).add(o),(s=n.size-1)in pG.prototype||Object.defineProperty(pG.prototype,s,{get(){return pY(this)[s]}}),queueMicrotask(()=>{r&&a.enabled&&r.dispatchEvent(new pq("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=pH(e).media?.deref()?.audioRenditions,i=pH(e).track,pH(i).renditionSet.delete(e),queueMicrotask(()=>{let i=pH(e).track;t&&i.enabled&&t.dispatchEvent(new pq("removerendition",{rendition:e}))})}get enabled(){return this.#$}set enabled(e){if(this.#$!==e){let t;this.#$=e,(t=pH(this).media?.deref()?.audioTracks)&&!pH(t).changeRequested&&(pH(t).changeRequested=!0,queueMicrotask(()=>{delete pH(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let p0=p3(globalThis.HTMLMediaElement,"video"),p1=p3(globalThis.HTMLMediaElement,"audio");function p2(e){if(!e?.prototype)return e;let t=p3(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=pH(e).videoTracks;if(!t&&(t=new p$,pH(e).videoTracks=t,p0)){let i=p0.call(e.nativeEl??e);for(let t of i)pB(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof pj)){for(let e of i)pW(e);return}pB(e,a.track)}),i.addEventListener("removetrack",e=>{pW(e.track)})}return t}});let i=p3(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=pH(e).audioTracks;if(!t&&(t=new pX,pH(e).audioTracks=t,p1)){let i=p1.call(e.nativeEl??e);for(let t of i)pQ(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof pJ)){for(let e of i)pZ(e);return}pQ(e,a.track)}),i.addEventListener("removetrack",e=>{pZ(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new pj;return a.kind=e,a.label=t,a.language=i,pB(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=pW),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new pJ;return a.kind=e,a.label=t,a.language=i,pQ(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=pZ),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=pH(e).videoRenditions;return t||(pH(t=new pF).media=new WeakRef(e),pH(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=pH(e).audioRenditions;return t||(pH(t=new pG).media=new WeakRef(e),pH(e).audioRenditions=t),t};return e}function p3(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var p4=e=>{throw TypeError(e)},p5=(e,t,i)=>t.has(e)||p4("Cannot "+i),p9=(e,t,i)=>(p5(e,t,"read from private field"),i?i.call(e):t.get(e)),p8=(e,t,i)=>t.has(e)?p4("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),p6=(e,t,i,a)=>(p5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),p7=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends p7{}globalThis.DocumentFragment=e}var ve,vt,vi=class extends p7{},va=class{constructor(e,t={}){p8(this,vt),p6(this,vt,null==t?void 0:t.detail)}get detail(){return p9(this,vt)}initCustomEvent(){}};vt=new WeakMap;var vr={document:{createElement:function(e,t){return new vi}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vi)},CustomEvent:va,EventTarget:p7,HTMLElement:vi,HTMLVideoElement:class extends p7{}},vn="u"<typeof window||void 0===globalThis.customElements,vs=vn?vr:globalThis;vn&&vr.document;var vo,vl=class extends pO(p2(pg)){constructor(){super(...arguments),p8(this,vo)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=p9(this,vo))?e:this.muxCastCustomData}set castCustomData(e){p6(this,vo,e)}};vo=new WeakMap,vs.customElements.get("mux-video")||(vs.customElements.define("mux-video",vl),vs.MuxVideoElement=vl);var vd=e=>{throw TypeError(e)},vu=(e,t,i)=>t.has(e)||vd("Cannot "+i),vc=(e,t,i)=>(vu(e,t,"read from private field"),i?i.call(e):t.get(e)),vh=(e,t,i)=>t.has(e)?vd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),vm=(e,t,i,a)=>(vu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),vp=(e,t,i)=>(vu(e,t,"access private method"),i),vv=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends vv{}globalThis.DocumentFragment=e}var vb,vg=class extends vv{},vf=class{constructor(e,t={}){vh(this,vb),vm(this,vb,null==t?void 0:t.detail)}get detail(){return vc(this,vb)}initCustomEvent(){}};vb=new WeakMap;var vE={document:{createElement:function(e,t){return new vg}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vg)},CustomEvent:vf,EventTarget:vv,HTMLElement:vg,HTMLVideoElement:class extends vv{}},vy="u"<typeof window||void 0===globalThis.customElements,v_=vy?vE:globalThis,vk=vy?vE.document:globalThis.document;function vT(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vA(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vw(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vC(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vS,vI,vR,vL=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vL(e,t.getRootNode().host)),vx="mux.com",vM=(()=>{try{return"3.13.3"}catch{}return"UNKNOWN"})(),vD=e=>{if(e){if([hE,hf].includes(e))return e;if(null!=e&&e.includes("live"))return hE}},vP={crossorigin:"crossOrigin",playsinline:"playsInline"},vO=class{constructor(e,t){vh(this,vS),vh(this,vI),vh(this,vR,[]),vm(this,vS,e),vm(this,vI,t)}[Symbol.iterator](){return vc(this,vR).values()}get length(){return vc(this,vR).length}get value(){var e;return null!=(e=vc(this,vR).join(" "))?e:""}set value(e){var t;e!==this.value&&(vm(this,vR,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return vc(this,vR)[e]}values(){return vc(this,vR).values()}keys(){return vc(this,vR).keys()}forEach(e){vc(this,vR).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||vc(this,vR).push(e)}),(""!==this.value||null!=(t=vc(this,vS))&&t.hasAttribute(`${vc(this,vI)}`))&&null!=(i=vc(this,vS))&&i.setAttribute(`${vc(this,vI)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{vc(this,vR).splice(vc(this,vR).indexOf(e),1)}),null==(t=vc(this,vS))||t.setAttribute(`${vc(this,vI)}`,`${this.value}`)}contains(e){return vc(this,vR).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vS=new WeakMap,vI=new WeakMap,vR=new WeakMap;var vN=`[mux-player ${vM}]`;function vU(...e){console.warn(vN,...e)}function vH(...e){console.error(vN,...e)}function vB(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${hH("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),vU(i)}var vW={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},v$={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},vq=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),vV=[...Object.values(vW).filter(e=>vW.PLAYSINLINE!==e),...Object.values(v$)];function vF(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var vK=class extends v_.HTMLElement{static get observedAttributes(){return vV}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case v$.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case v$.VOLUME:{let e=null!=(a=vw(i))?a:1;this.media&&(this.media.volume=e);return}case v$.PLAYBACKRATE:{let e=null!=(r=vw(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:vq}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:vq}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vw(this.getAttribute(v$.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(v$.PLAYBACKRATE,`${e}`):this.removeAttribute(v$.PLAYBACKRATE)}get crossOrigin(){return vF(this,vW.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(vW.CROSSORIGIN,`${e}`)}get autoplay(){return null!=vF(this,vW.AUTOPLAY)}set autoplay(e){e?this.setAttribute(vW.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(vW.AUTOPLAY)}get loop(){return null!=vF(this,vW.LOOP)}set loop(e){e?this.setAttribute(vW.LOOP,""):this.removeAttribute(vW.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=vF(this,vW.MUTED)}set defaultMuted(e){e?this.setAttribute(vW.MUTED,""):this.removeAttribute(vW.MUTED)}get playsInline(){return null!=vF(this,vW.PLAYSINLINE)}set playsInline(e){vH("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(vW.PRELOAD,e):this.removeAttribute(vW.PRELOAD)}},vj=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,vY=new WeakMap,vG=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=vY.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=vY.get(this.element);e&&e.delete(this.type)}}static for(t){vY.has(t.element)||vY.set(t.element,new Map);let i=t.attributeName.slice(2),a=vY.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},vz=new Map,vQ=new WeakMap,vZ=new WeakMap,vX=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(vz.has(this.stringsKey))return vz.get(this.stringsKey);{let e=vk.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),vz.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(vQ.get(e)!==i){vQ.set(e,i);let t=new a9(i,this.values,this.processor);vZ.set(e,t),e instanceof rr?e.replace(...t.children):e.appendChild(t);return}let a=vZ.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},vJ={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof ra&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof ra){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof ra&&e.attributeName.startsWith("on")&&(vG.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof rr&&(e.replace(""),1)||t instanceof vX&&e instanceof rr&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof rr&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof ra){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function v0(e,...t){return new vX(e,t,vJ)}var v1=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),v2=e=>e.charAt(0).toUpperCase()+e.slice(1),v3=(e,t)=>{let i=(e=>{if(e.muxCode){if(2403210===e.muxCode)return"403-expired-token.md";if(2412202===e.muxCode)return"403-malformatted-token.md";if([2403222,2403221].includes(e.muxCode))return"403-incorrect-aud-value.md";if(2403232===e.muxCode)return"403-playback-id-mismatch.md";if(2403201===e.muxCode)return"missing-signed-tokens.md";if(2404e3===e.muxCode)return"404-not-found.md";if(2412e3===e.muxCode)return"412-not-playable.md"}if(e.code){if(e.code===hv.MEDIA_ERR_NETWORK)return"";if(e.code===hv.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===hv.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},v4=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,v5=vk.createElement("template");"innerHTML"in v5&&(v5.innerHTML=v4);var v9,v8,v6=class extends rw{};v6.template=null==(v8=null==(v9=v5.content)?void 0:v9.children)?void 0:v8[0],v_.customElements.get("media-theme-gerwig")||v_.customElements.define("media-theme-gerwig",v6);var v7={SRC:"src",POSTER:"poster"},be={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},bt=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],bi=iU.formatErrorMessage;function ba(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}iU.formatErrorMessage=e=>{var t,i;if(e instanceof hv){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=v2(null!=(i=e.errorCategory)?i:"video"),n=hp(null!=(a=e.errorCategory)?a:hm);if(2000002===e.muxCode)return hH("Your device appears to be offline",t);if(2000003===e.muxCode)return hH("Reconnecting...",t);if(2403210===e.muxCode)return hH("{category} URL has expired",t).format({category:r});if([2403232,2403222,2403221,2412202].includes(e.muxCode))return hH("{category} URL is formatted incorrectly",t).format({category:r});if(2403201===e.muxCode)return hH("Invalid {categoryName} URL",t).format({categoryName:n});if(2404e3===e.muxCode)return hH("{category} does not exist",t).format({category:r});if(2412e3===e.muxCode){let i="live"===e.streamType?"Live stream":"Video";return hH("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===hv.MEDIA_ERR_NETWORK)return hH("Network Error",t);if(e.code===hv.MEDIA_ERR_DECODE)return hH("Media Error",t);if(e.code===hv.MEDIA_ERR_SRC_NOT_SUPPORTED)return hH("Source Not Supported",t)}return hH("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(e.muxCode){let r=v2(null!=(i=e.errorCategory)?i:"video"),n=hp(null!=(a=e.errorCategory)?a:hm);return 2000002===e.muxCode?hH("Check your internet connection and try reloading this video.",t):2000003===e.muxCode?hH("Your connection was interrupted. Attempting to resume playback...",t):2403210===e.muxCode?hH("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):2403232===e.muxCode?hH("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):2412202===e.muxCode?hH("{category} URL is formatted incorrectly",t).format({category:r}):[2403222,2403221].includes(e.muxCode)?hH("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[2403201,24e5].includes(e.muxCode)?hH("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):2404e3===e.muxCode?"":e.message}return e.code&&(e.code===hv.MEDIA_ERR_NETWORK||e.code===hv.MEDIA_ERR_DECODE||e.code===hv.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${hH("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return bi(e)};var br,bn,bs,bo,bl,bd,bu,bc,bh,bm,bp,bv,bb,bg,bf,bE,by,b_,bk,bT,bA,bw,bC,bS,bI=Object.values(pp),bR=Object.values(v7),bL=Object.values(be),bx="mux-player",bM={isDialogOpen:!1},bD={redundant_streams:!0},bP=class extends vK{constructor(){super(),vh(this,bE),vh(this,br),vh(this,bn,!1),vh(this,bs,{}),vh(this,bo,!0),vh(this,bl,new vO(this,"hotkeys")),vh(this,bd),vh(this,bu,()=>vp(this,bE,bT).call(this)),vh(this,bc,()=>vp(this,bE,bT).call(this)),vh(this,bh,()=>vp(this,bE,bT).call(this)),vh(this,bm,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),vh(this,bp,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&vp(this,bE,bk).call(this,{isDialogOpen:!1})}),vh(this,bv,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(vL(this,vk.activeElement)||e.preventDefault())}),vh(this,bb),vh(this,bg,{...bM}),vh(this,bf,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof hv)){let{message:e,code:t}=null!=i?i:{};i=new hv(e,t)}if(!(null!=i&&i.fatal)){vU(i),i.data&&vU(`${i.name} data:`,i.data);return}let a=v3(i,!1);a.message&&vB(a),vH(i),i.data&&vH(`${i.name} data:`,i.data),vp(this,bE,bk).call(this,{isDialogOpen:!0})}),vm(this,br,mg()),this.attachShadow({mode:"open"}),vp(this,bE,b_).call(this),this.isConnected&&vp(this,bE,by).call(this)}static get NAME(){return bx}static get VERSION(){return vM}static get observedAttributes(){var e;return[...null!=(e=vK.observedAttributes)?e:[],...bR,...bI,...bL]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=ba(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=ba(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){vp(this,bE,by).call(this);let e=this.media;e&&(e.metadata=ba(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o,l,d;null==(e=vc(this,bd))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",vc(this,bu)),null==(i=this.media)||i.removeEventListener("loadstart",vc(this,bc)),this.removeEventListener("error",vc(this,bf)),this.removeEventListener("click",vc(this,bm)),null==(a=this.mediaTheme)||a.removeEventListener("close",vc(this,bp)),null==(r=this.mediaTheme)||r.removeEventListener("focusin",vc(this,bv)),this.media&&(this.media.errorTranslator=void 0),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("addtrack",vc(this,bh)),null==(l=null==(o=this.media)?void 0:o.textTracks)||l.removeEventListener("removetrack",vc(this,bh)),null==(d=vc(this,bb))||d.call(this),vm(this,bb,void 0),vm(this,bn,!1)}attributeChangedCallback(e,t,i){var a;switch(vp(this,bE,by).call(this),super.attributeChangedCallback(e,t,i),e){case be.HOTKEYS:vc(this,bl).value=i;break;case be.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&vU(hH("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case be.THUMBNAIL_TOKEN:if(i){let e=hU(i);if(e){let{aud:t}=e;"t"!==t&&vU(hH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"t",tokenNamePrefix:"thumbnail"}))}}break;case be.STORYBOARD_TOKEN:if(i){let e=hU(i);if(e){let{aud:t}=e;"s"!==t&&vU(hH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"s",tokenNamePrefix:"storyboard"}))}}break;case be.DRM_TOKEN:if(i){let e=hU(i);if(e){let{aud:t}=e;"d"!==t&&vU(hH("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:"d",tokenNamePrefix:"drm"}))}}break;case pp.PLAYBACK_ID:null!=i&&i.includes("?token")&&vH(hH("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case pp.STREAM_TYPE:i&&![hE,hf,hy].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:vB({file:"invalid-stream-type.md",message:hH("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===hE?null==this.getAttribute(be.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case be.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=vk.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case pp.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0);break;case pp.MAX_RECONNECT_RETRIES:(null==i||i!==t)&&(this.maxReconnectRetries=Number(i))}[pp.PLAYBACK_ID,v7.SRC,be.PLAYBACK_TOKEN].includes(e)&&t!==i&&vm(this,bg,{...vc(this,bg),...bM}),vp(this,bE,bT).call(this,{[null!=(a=vP[e])?a:vA(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new v_.CustomEvent(l.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(m.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new v_.CustomEvent(l.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(m.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(pp.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?hT.includes(e)?this.setAttribute(pp.PREFER_CMCD,e):vU(`Invalid value for preferCmcd. Must be one of ${hT.join()}`):this.removeAttribute(pp.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(h.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(be.THEME))?e:"gerwig"}set theme(e){this.setAttribute(be.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(bt.includes(i))continue;let a=e.getAttribute(i);t[vA(i)]=""===a||a}return t}set themeProps(e){var t,i;vp(this,bE,by).call(this);let a={...this.themeProps,...e};for(let r in a){if(bt.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vT(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vT(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(pp.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(pp.PLAYBACK_ID,e):this.removeAttribute(pp.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=bO(this,v7.SRC))?e:void 0:null!=(t=this.getAttribute(v7.SRC))?t:void 0}set src(e){e?this.setAttribute(v7.SRC,e):this.removeAttribute(v7.SRC)}get poster(){var e;let t=this.getAttribute(v7.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void vU("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=vx,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=hU(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vC({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(v7.POSTER,e):this.removeAttribute(v7.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(be.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(be.STORYBOARD_SRC,e):this.removeAttribute(be.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[hE,hy].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=vx,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=hU(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vC({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(be.AUDIO)}set audio(e){e?this.setAttribute(be.AUDIO,""):this.removeAttribute(be.AUDIO)}get hotkeys(){return vc(this,bl)}get nohotkeys(){return this.hasAttribute(be.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(be.NOHOTKEYS,""):this.removeAttribute(be.NOHOTKEYS)}get thumbnailTime(){return vw(this.getAttribute(be.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(be.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(be.VIDEO_TITLE))?e:this.getAttribute(be.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(be.VIDEO_TITLE,e):this.removeAttribute(be.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=bO(this,be.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(be.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(be.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=v_.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(be.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(be.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=v_.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(be.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(be.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=v_.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(be.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(be.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(be.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(be.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(be.PLAYBACK_RATES))return this.getAttribute(be.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(be.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(be.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=vw(this.getAttribute(be.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(be.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vw(this.getAttribute(be.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(be.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(be.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(be.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(be.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vw(this.getAttribute(be.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(be.DEFAULT_DURATION):this.setAttribute(be.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(pp.PLAYER_INIT_TIME)?vw(this.getAttribute(pp.PLAYER_INIT_TIME)):vc(this,br)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(pp.PLAYER_INIT_TIME):this.setAttribute(pp.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(pp.PLAYER_SOFTWARE_NAME))?e:bx}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(pp.PLAYER_SOFTWARE_VERSION))?e:vM}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(pp.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(pp.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(pp.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(pp.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(pp.MAX_RESOLUTION,e):this.removeAttribute(pp.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(pp.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(pp.MIN_RESOLUTION,e):this.removeAttribute(pp.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(pp.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(pp.MAX_AUTO_RESOLUTION):this.setAttribute(pp.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(pp.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(pp.RENDITION_ORDER,e):this.removeAttribute(pp.RENDITION_ORDER))}get programStartTime(){return vw(this.getAttribute(pp.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(pp.PROGRAM_START_TIME):this.setAttribute(pp.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vw(this.getAttribute(pp.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(pp.PROGRAM_END_TIME):this.setAttribute(pp.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return vw(this.getAttribute(pp.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(pp.ASSET_START_TIME):this.setAttribute(pp.ASSET_START_TIME,`${e}`)}get assetEndTime(){return vw(this.getAttribute(pp.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(pp.ASSET_END_TIME):this.setAttribute(pp.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(be.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(be.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):bD}set extraSourceParams(e){null==e?this.removeAttribute(be.EXTRA_SOURCE_PARAMS):this.setAttribute(be.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(pp.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(pp.CUSTOM_DOMAIN,e):this.removeAttribute(pp.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=bO(this,pp.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(pp.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(be.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(be.NO_VOLUME_PREF,""):this.removeAttribute(be.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(be.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(be.NO_MUTED_PREF,""):this.removeAttribute(be.NO_MUTED_PREF)}get debug(){return null!=bO(this,pp.DEBUG)}set debug(e){e?this.setAttribute(pp.DEBUG,""):this.removeAttribute(pp.DEBUG)}get disableTracking(){return null!=bO(this,pp.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(pp.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=bO(this,pp.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(pp.DISABLE_COOKIES,""):this.removeAttribute(pp.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(pp.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:hy}set streamType(e){this.setAttribute(pp.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(be.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(be.DEFAULT_STREAM_TYPE))?i:hf}set defaultStreamType(e){e?this.setAttribute(be.DEFAULT_STREAM_TYPE,e):this.removeAttribute(be.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(be.TARGET_LIVE_WINDOW)?+this.getAttribute(be.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(be.TARGET_LIVE_WINDOW):this.setAttribute(be.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vw(bO(this,pp.START_TIME))}set startTime(e){this.setAttribute(pp.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return vw(bO(this,pp.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(pp.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(pp.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return vw(bO(this,pp.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(pp.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(pp.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return vw(bO(this,pp.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(pp.MIN_PRELOAD_SEGMENTS):this.setAttribute(pp.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(pp.PREFER_PLAYBACK);if("mse"===e||e===h_)return e}set preferPlayback(e){e!==this.preferPlayback&&("mse"===e||e===h_?this.setAttribute(pp.PREFER_PLAYBACK,e):this.removeAttribute(pp.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(vp(this,bE,by).call(this),this.media)?this.media.metadata={...ba(this),...e}:vH("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(vp(this,bE,by).call(this),this.media)?this.media._hlsConfig=e:vH("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(vp(this,bE,by).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void vH("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(vp(this,bE,by).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void vH("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(be.PLAYBACK_TOKEN),t=this.getAttribute(be.DRM_TOKEN),i=this.getAttribute(be.THUMBNAIL_TOKEN),a=this.getAttribute(be.STORYBOARD_TOKEN);return{...vc(this,bs),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){vm(this,bs,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(be.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(be.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(be.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(be.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(be.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(be.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(be.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(be.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return hF(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(be.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(be.CAST_RECEIVER,e):this.removeAttribute(be.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:vH("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(be.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(be.NO_TOOLTIPS,""):this.removeAttribute(be.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(be.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(be.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(be.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:vH("underlying media element missing when trying to set capRenditionToPlayerSize")}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){this.media?this.media.maxReconnectRetries=e:vH("underlying media element missing when trying to set maxReconnectRetries")}};function bO(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}br=new WeakMap,bn=new WeakMap,bs=new WeakMap,bo=new WeakMap,bl=new WeakMap,bd=new WeakMap,bu=new WeakMap,bc=new WeakMap,bh=new WeakMap,bm=new WeakMap,bp=new WeakMap,bv=new WeakMap,bb=new WeakMap,bg=new WeakMap,bf=new WeakMap,bE=new WeakSet,by=function(){var e,t,i,a;if(!vc(this,bn)){vm(this,bn,!0),vp(this,bE,bT).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof v_.HTMLElement))throw""}catch{vH("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{vH("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof tN))throw""}catch{vH("<media-controller> failed to upgrade!")}vp(this,bE,bA).call(this),vp(this,bE,bw).call(this),vp(this,bE,bC).call(this),vm(this,bo,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eL))||t),vp(this,bE,bS).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",vc(this,bu)),null==(a=this.media)||a.addEventListener("loadstart",vc(this,bc)),this.media&&(this.media.metadata=ba(this))}},b_=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},bk=function(e){Object.assign(vc(this,bg),e),vp(this,bE,bT).call(this)},bT=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,f,E,y,k,T,A,w,C,S,I,R,L,x,M,D,P,O,N,U,H,B,W,$,q,V,F,K,j,Y,G,z,Q,Z,X;let J,ee,et,ei;t={...vc(this,bg),...e},J={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(be.STORYBOARD_SRC),fullscreenElement:this.getAttribute(be.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=v_.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(be.NOHOTKEYS),hotKeys:this.getAttribute(be.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(pp.TARGET_LIVE_WINDOW),streamType:vD(this.getAttribute(pp.STREAM_TYPE)),primaryColor:this.getAttribute(be.PRIMARY_COLOR),secondaryColor:this.getAttribute(be.SECONDARY_COLOR),accentColor:this.getAttribute(be.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(ee=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(ee).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(be.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(pp.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(be.TITLE),videoTitle:null!=(r=this.getAttribute(be.VIDEO_TITLE))?r:this.getAttribute(be.TITLE),novolumepref:this.hasAttribute(be.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(be.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(be.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(be.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=v0`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(J)}
    ${vj}
  </style>
  ${l=J,v0`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${et=l.hotKeys?`${l.hotKeys}`:"","live"===vD(l.streamType)&&(et+=" noarrowleft noarrowright"),et||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(hE))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(X={"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor},ei="",Object.entries(X).forEach(([e,t])=>{null!=t&&(ei+=`${vT(e)}: ${t}; `)}),h=ei?ei.trim():void 0)&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(p=l.backwardSeekOffset)&&p}"
    playbackrates="${null!=(v=l.playbackRates)&&v}"
    defaultshowremainingtime="${null!=(b=l.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(f=l.hideDuration)&&f}"
    title="${null!=(E=l.title)&&E}"
    videotitle="${null!=(y=l.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(k=l.proudlyDisplayMuxBadge)&&k}"
    exportparts="${v1}"
  >
    <mux-video
      slot="media"
      inert="${null!=(T=l.noHotKeys)&&T}"
      target-live-window="${null!=(A=l.targetLiveWindow)&&A}"
      stream-type="${null!=(w=vD(l.streamType))&&w}"
      crossorigin="${null!=(C=l.crossOrigin)?C:""}"
      playsinline
      autoplay="${null!=(S=l.autoplay)&&S}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(R=l.loop)&&R}"
      preload="${null!=(L=l.preload)&&L}"
      debug="${null!=(x=l.debug)&&x}"
      prefer-cmcd="${null!=(M=l.preferCmcd)&&M}"
      disable-tracking="${null!=(D=l.disableTracking)&&D}"
      disable-cookies="${null!=(P=l.disableCookies)&&P}"
      prefer-playback="${null!=(O=l.preferPlayback)&&O}"
      start-time="${null!=l.startTime&&l.startTime}"
      initial-bandwidth-estimate-kbps="${null!=l.initialBandwidthEstimateKbps&&l.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=l.initialEstimateSegments&&l.initialEstimateSegments}"
      min-preload-segments="${null!=l.minPreloadSegments&&l.minPreloadSegments}"
      beacon-collection-domain="${null!=(N=l.beaconCollectionDomain)&&N}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(H=l.playerSoftwareName)&&H}"
      player-software-version="${null!=(B=l.playerSoftwareVersion)&&B}"
      env-key="${null!=(W=l.envKey)&&W}"
      custom-domain="${null!=($=l.customDomain)&&$}"
      src="${l.src?l.src:!!l.playbackId&&mE(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&mE(l)}"
      cast-receiver="${null!=(q=l.castReceiver)&&q}"
      drm-token="${null!=(F=null==(V=l.tokens)?void 0:V.drm)&&F}"
      playback-token="${null!=(j=null==(K=l.tokens)?void 0:K.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(Y=l.disablePseudoEnded)&&Y}"
      max-reconnect-retries="${null!=(G=l.maxReconnectRetries)&&G}"
      max-auto-resolution="${null!=(z=l.maxAutoResolution)&&z}"
      cap-rendition-to-player-size="${null!=(Q=l.capRenditionToPlayerSize)&&Q}"
    >
      ${l.storyboard?v0`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:v0``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(Z=l.placeholder)&&Z}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},bA=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(bt.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};vm(this,bd,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),vc(this,bd).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},bw=function(){var e,t;this.addEventListener("error",vc(this,bf)),this.addEventListener("click",vc(this,bm)),null==(e=this.mediaTheme)||e.addEventListener("close",vc(this,bp)),null==(t=this.mediaTheme)||t.addEventListener("focusin",vc(this,bv)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof hv))return e;let r=v3(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},bC=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",vc(this,bh)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",vc(this,bh))},bS=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===hE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===hE&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eL))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,vc(this,bo))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eL))||t;vc(this,bo)!==a&&(vm(this,bo,a),n(i,vc(this,bo)))};this.addEventListener("userinactivechange",l),vm(this,bb,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var bN=e=>{throw TypeError(e)},bU=(e,t,i)=>t.has(e)||bN("Cannot "+i),bH=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends bH{}globalThis.DocumentFragment=e}var bB,bW=class extends bH{},b$=class{constructor(e,t={}){((e,t)=>t.has(e)?bN("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,void 0))(this,bB),((e,t,i)=>(bU(e,t,"write to private field"),t.set(e,i)))(this,bB,null==t?void 0:t.detail)}get detail(){let e;return bU(this,e=bB,"read from private field"),e.get(this)}initCustomEvent(){}};bB=new WeakMap;var bq={document:{createElement:function(e,t){return new bW}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(bW)},CustomEvent:b$,EventTarget:bH,HTMLElement:bW,HTMLVideoElement:class extends bH{}},bV="u"<typeof window||void 0===globalThis.customElements,bF=bV?bq:globalThis;bV&&bq.document,bF.customElements.get("mux-player")||(bF.customElements.define("mux-player",bP),bF.MuxPlayerElement=bP);var bK=parseInt(n$.version)>=19,bj={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function bY(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var bG=Object.prototype.hasOwnProperty,bz=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!bG.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),bQ=(e,t,i)=>{e[i]=t},bZ=(e,t,i,a=bQ,r=bz)=>(0,n$.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),bX=(()=>{try{return"3.13.3"}catch{}return"UNKNOWN"})(),bJ=(e,t,i)=>(0,n$.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),b0=n$.forwardRef(({children:e,...t},i)=>n$.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!bK&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=bj)&&i in a)return bj[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let r=bK||"boolean"!=typeof i?i:"";return e[a]=r,e},{})})(t),ref:i},e)),b1=n$.forwardRef((e,t)=>{var i;let a=(0,n$.useRef)(null),r=function(...e){return n$.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=bY(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():bY(e[t],null)}}}}(...e),e)}(a,t),[n]=((e,t)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:u,onDurationChange:c,onVolumeChange:h,onRateChange:m,onResize:p,onWaiting:v,onPlay:b,onPlaying:g,onTimeUpdate:f,onPause:E,onSeeking:y,onSeeked:k,onStalled:T,onSuspend:A,onEnded:w,onError:C,onCuePointChange:S,onChapterChange:I,metadata:R,tokens:L,paused:x,playbackId:M,playbackRates:D,currentTime:P,themeProps:O,extraSourceParams:N,castCustomData:U,_hlsConfig:H,...B}=t;return bZ("tokens",L,e),bZ("playbackId",M,e),bZ("playbackRates",D,e),bZ("metadata",R,e),bZ("disableCookies",null!=(i=t.disableCookies)&&i,e),bZ("extraSourceParams",N,e),bZ("_hlsConfig",H,e),bZ("themeProps",O,e),bZ("castCustomData",U,e),bZ("paused",x,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&bz(e,t,i)),bZ("currentTime",P,e,(e,t)=>{null!=t&&(e.currentTime=t)}),bJ("abort",e,a),bJ("canplay",e,r),bJ("canplaythrough",e,n),bJ("emptied",e,s),bJ("loadstart",e,o),bJ("loadeddata",e,l),bJ("loadedmetadata",e,d),bJ("progress",e,u),bJ("durationchange",e,c),bJ("volumechange",e,h),bJ("ratechange",e,m),bJ("resize",e,p),bJ("waiting",e,v),bJ("play",e,b),bJ("playing",e,g),bJ("timeupdate",e,f),bJ("pause",e,E),bJ("seeking",e,y),bJ("seeked",e,k),bJ("stalled",e,T),bJ("suspend",e,A),bJ("ended",e,w),bJ("error",e,C),bJ("cuepointchange",e,S),bJ("chapterchange",e,I),[B]})(a,e),[s]=(0,n$.useState)(null!=(i=e.playerInitTime)?i:mg());return n$.createElement(b0,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:bX,playerInitTime:s,...n})});function b2(e){let t,i=(0,s.c)(5),{customDomain:a,playbackId:r,tokens:n}=e,l;return i[0]===Symbol.for("react.memo_cache_sentinel")?(l={position:"absolute",inset:0},i[0]=l):l=i[0],i[1]!==a||i[2]!==r||i[3]!==n?(t=(0,o.jsx)(b1,{customDomain:a,theme:"sutro",playbackId:r,tokens:n,autoPlay:!1,loop:!1,style:l}),i[1]=a,i[2]=r,i[3]=n,i[4]=t):t=i[4],t}}}]);