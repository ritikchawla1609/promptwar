var Jx=Object.defineProperty;var ev=(t,e,n)=>e in t?Jx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Cc=(t,e,n)=>ev(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function tv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},lc={},Km={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),nv=Symbol.for("react.portal"),iv=Symbol.for("react.fragment"),rv=Symbol.for("react.strict_mode"),sv=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),ov=Symbol.for("react.context"),lv=Symbol.for("react.forward_ref"),cv=Symbol.for("react.suspense"),uv=Symbol.for("react.memo"),dv=Symbol.for("react.lazy"),zh=Symbol.iterator;function fv(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Qm={};function ta(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||$m}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=ta.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||$m}var Tf=bf.prototype=new Jm;Tf.constructor=bf;Zm(Tf,ta.prototype);Tf.isPureReactComponent=!0;var Hh=Array.isArray,e0=Object.prototype.hasOwnProperty,wf={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:po,type:t,key:s,ref:a,props:r,_owner:wf.current}}function hv(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vh=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pv(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case po:case nv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Rc(a,0):i,Hh(r)?(n="",t!=null&&(n=t.replace(Vh,"$&/")+"/"),dl(r,e,n,"",function(u){return u})):r!=null&&(Af(r)&&(r=hv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Vh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Hh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Rc(s,o);a+=dl(s,e,n,c,r)}else if(c=fv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Rc(s,o++),a+=dl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function bo(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},fl={transition:null},gv={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:wf};function i0(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:bo,forEach:function(t,e,n){bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bo(t,function(){e++}),e},toArray:function(t){return bo(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=ta;Ze.Fragment=iv;Ze.Profiler=sv;Ze.PureComponent=bf;Ze.StrictMode=rv;Ze.Suspense=cv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;Ze.act=i0;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)e0.call(e,c)&&!t0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:po,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:ov,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:av,_context:t},t.Consumer=t};Ze.createElement=n0;Ze.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:lv,render:t}};Ze.isValidElement=Af;Ze.lazy=function(t){return{$$typeof:dv,_payload:{_status:-1,_result:t},_init:mv}};Ze.memo=function(t,e){return{$$typeof:uv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};Ze.unstable_act=i0;Ze.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ze.useContext=function(t){return mn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ze.useId=function(){return mn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ze.useRef=function(t){return mn.current.useRef(t)};Ze.useState=function(t){return mn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return mn.current.useTransition()};Ze.version="18.3.1";Km.exports=Ze;var we=Km.exports;const r0=tv(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=we,vv=Symbol.for("react.element"),_v=Symbol.for("react.fragment"),yv=Object.prototype.hasOwnProperty,Sv=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mv={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)yv.call(e,i)&&!Mv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vv,type:t,key:s,ref:a,props:r,_owner:Sv.current}}lc.Fragment=_v;lc.jsx=s0;lc.jsxs=s0;qm.exports=lc;var l=qm.exports,ku={},a0={exports:{}},Un={},o0={exports:{}},l0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var Y=V.length;V.push(B);e:for(;0<Y;){var Q=Y-1>>>1,de=V[Q];if(0<r(de,B))V[Q]=B,V[Y]=de,Y=Q;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],Y=V.pop();if(Y!==B){V[0]=Y;e:for(var Q=0,de=V.length,ye=de>>>1;Q<ye;){var Ye=2*(Q+1)-1,Oe=V[Ye],Be=Ye+1,K=V[Be];if(0>r(Oe,Y))Be<de&&0>r(K,Oe)?(V[Q]=K,V[Be]=Y,Q=Be):(V[Q]=Oe,V[Ye]=Y,Q=Ye);else if(Be<de&&0>r(K,Y))V[Q]=K,V[Be]=Y,Q=Be;else break e}}return B}function r(V,B){var Y=V.sortIndex-B.sortIndex;return Y!==0?Y:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,d=3,m=!1,x=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=V)i(u),B.sortIndex=B.expirationTime,e(c,B);else break;B=n(u)}}function S(V){if(E=!1,b(V),!x)if(n(c)!==null)x=!0,$(T);else{var B=n(u);B!==null&&q(S,B.startTime-V)}}function T(V,B){x=!1,E&&(E=!1,f(y),y=-1),m=!0;var Y=d;try{for(b(B),p=n(c);p!==null&&(!(p.expirationTime>B)||V&&!P());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,d=p.priorityLevel;var de=Q(p.expirationTime<=B);B=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(c)&&i(c),b(B)}else i(c);p=n(c)}if(p!==null)var ye=!0;else{var Ye=n(u);Ye!==null&&q(S,Ye.startTime-B),ye=!1}return ye}finally{p=null,d=Y,m=!1}}var w=!1,C=null,y=-1,A=5,I=-1;function P(){return!(t.unstable_now()-I<A)}function N(){if(C!==null){var V=t.unstable_now();I=V;var B=!0;try{B=C(!0,V)}finally{B?F():(w=!1,C=null)}}else w=!1}var F;if(typeof v=="function")F=function(){v(N)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,D=k.port2;k.port1.onmessage=N,F=function(){D.postMessage(null)}}else F=function(){g(N,0)};function $(V){C=V,w||(w=!0,F())}function q(V,B){y=g(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,$(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var Y=d;d=B;try{return V()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Y=d;d=V;try{return B()}finally{d=Y}},t.unstable_scheduleCallback=function(V,B,Y){var Q=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Q+Y:Q):Y=Q,V){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Y+de,V={id:h++,callback:B,priorityLevel:V,startTime:Y,expirationTime:de,sortIndex:-1},Y>Q?(V.sortIndex=Y,e(u,V),n(c)===null&&V===n(u)&&(E?(f(y),y=-1):E=!0,q(S,Y-Q))):(V.sortIndex=de,e(c,V),x||m||(x=!0,$(T))),V},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(V){var B=d;return function(){var Y=d;d=B;try{return V.apply(this,arguments)}finally{d=Y}}}})(l0);o0.exports=l0;var Ev=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv=we,kn=Ev;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,Wa={};function Zr(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Wa[t]=e,t=0;t<e.length;t++)c0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,Tv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gh={},jh={};function wv(t){return Uu.call(jh,t)?!0:Uu.call(Gh,t)?!1:Tv.test(t)?jh[t]=!0:(Gh[t]=!0,!1)}function Av(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cv(t,e,n,i){if(e===null||typeof e>"u"||Av(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Qt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Rf);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cv(e,n,r,i)&&(n=null),i||r===null?wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),f0=Symbol.for("react.offscreen"),Wh=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Nc;function Aa(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Pc=!1;function Ic(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function Rv(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case Ou:return"Profiler";case Pf:return"StrictMode";case Fu:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d0:return(t.displayName||"Context")+".Consumer";case u0:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function Nv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pv(t){var e=h0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=Pv(t))}function p0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Vu(t,e){m0(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gu(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ca(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function g0(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ao,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iv=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){Iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Lv=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,Ds=null,ks=null;function $h(t){if(t=xo(t)){if(typeof Ku!="function")throw Error(se(280));var e=t.stateNode;e&&(e=hc(e),Ku(t.stateNode,t.type,e))}}function S0(t){Ds?ks?ks.push(t):ks=[t]:Ds=t}function M0(){if(Ds){var t=Ds,e=ks;if(ks=Ds=null,$h(t),e)for(t=0;t<e.length;t++)$h(e[t])}}function E0(t,e){return t(e)}function b0(){}var Lc=!1;function T0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return E0(t,e,n)}finally{Lc=!1,(Ds!==null||ks!==null)&&(b0(),M0())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var $u=!1;if(Gi)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){$u=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{$u=!1}function Dv(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Da=!1,Nl=null,Pl=!1,Zu=null,kv={onError:function(t){Da=!0,Nl=t}};function Uv(t,e,n,i,r,s,a,o,c){Da=!1,Nl=null,Dv.apply(kv,arguments)}function Ov(t,e,n,i,r,s,a,o,c){if(Uv.apply(this,arguments),Da){if(Da){var u=Nl;Da=!1,Nl=null}else throw Error(se(198));Pl||(Pl=!0,Zu=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zh(t){if(Qr(t)!==t)throw Error(se(188))}function Fv(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zh(r),t;if(s===i)return Zh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function A0(t){return t=Fv(t),t!==null?C0(t):null}function C0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C0(t);if(e!==null)return e;t=t.sibling}return null}var R0=kn.unstable_scheduleCallback,Qh=kn.unstable_cancelCallback,Bv=kn.unstable_shouldYield,zv=kn.unstable_requestPaint,kt=kn.unstable_now,Hv=kn.unstable_getCurrentPriorityLevel,kf=kn.unstable_ImmediatePriority,N0=kn.unstable_UserBlockingPriority,Il=kn.unstable_NormalPriority,Vv=kn.unstable_LowPriority,P0=kn.unstable_IdlePriority,cc=null,Mi=null;function Gv(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:Xv,jv=Math.log,Wv=Math.LN2;function Xv(t){return t>>>=0,t===0?32:31-(jv(t)/Wv|0)|0}var Co=64,Ro=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ra(o):(s&=a,s!==0&&(i=Ra(s)))}else a=n&~r,a!==0?i=Ra(a):s!==0&&(i=Ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function Yv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-oi(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Yv(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I0(){var t=Co;return Co<<=1,!(Co&4194240)&&(Co=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function Kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function L0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,Of,k0,U0,O0,Ju=!1,No=[],pr=null,mr=null,gr=null,qa=new Map,Ka=new Map,lr=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&Of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zv(t,e,n,i,r){switch(e){case"focusin":return pr=pa(pr,t,e,n,i,r),!0;case"dragenter":return mr=pa(mr,t,e,n,i,r),!0;case"mouseover":return gr=pa(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qa.set(s,pa(qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ka.set(s,pa(Ka.get(s)||null,t,e,n,i,r)),!0}return!1}function F0(t){var e=kr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=w0(n),e!==null){t.blockedOn=e,O0(t.priority,function(){k0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=xo(n),e!==null&&Of(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){hl(t)&&n.delete(e)}function Qv(){Ju=!1,pr!==null&&hl(pr)&&(pr=null),mr!==null&&hl(mr)&&(mr=null),gr!==null&&hl(gr)&&(gr=null),qa.forEach(ep),Ka.forEach(ep)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,Qv)))}function $a(t){function e(r){return ma(r,t)}if(0<No.length){ma(No[0],t);for(var n=1;n<No.length;n++){var i=No[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&ma(pr,t),mr!==null&&ma(mr,t),gr!==null&&ma(gr,t),qa.forEach(e),Ka.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)F0(n),n.blockedOn===null&&lr.shift()}var Us=qi.ReactCurrentBatchConfig,Dl=!0;function Jv(t,e,n,i){var r=pt,s=Us.transition;Us.transition=null;try{pt=1,Ff(t,e,n,i)}finally{pt=r,Us.transition=s}}function e_(t,e,n,i){var r=pt,s=Us.transition;Us.transition=null;try{pt=4,Ff(t,e,n,i)}finally{pt=r,Us.transition=s}}function Ff(t,e,n,i){if(Dl){var r=ed(t,e,n,i);if(r===null)jc(t,e,i,kl,n),Jh(t,i);else if(Zv(r,t,e,n,i))i.stopPropagation();else if(Jh(t,i),e&4&&-1<$v.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&D0(s),s=ed(t,e,n,i),s===null&&jc(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var kl=null;function ed(t,e,n,i){if(kl=null,t=Df(i),t=kr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function B0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hv()){case kf:return 1;case N0:return 4;case Il:case Vv:return 16;case P0:return 536870912;default:return 16}default:return 16}}var dr=null,Bf=null,pl=null;function z0(){if(pl)return pl;var t,e=Bf,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function tp(){return!1}function On(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:tp,this.isPropagationStopped=tp,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=On(na),go=Nt({},na,{view:0,detail:0}),t_=On(go),kc,Uc,ga,uc=Nt({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(kc=t.screenX-ga.screenX,Uc=t.screenY-ga.screenY):Uc=kc=0,ga=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),np=On(uc),n_=Nt({},uc,{dataTransfer:0}),i_=On(n_),r_=Nt({},go,{relatedTarget:0}),Oc=On(r_),s_=Nt({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=On(s_),o_=Nt({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l_=On(o_),c_=Nt({},na,{data:0}),ip=On(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f_[t])?!!e[t]:!1}function Hf(){return h_}var p_=Nt({},go,{key:function(t){if(t.key){var e=u_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m_=On(p_),g_=Nt({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=On(g_),x_=Nt({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),v_=On(x_),__=Nt({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=On(__),S_=Nt({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M_=On(S_),E_=[9,13,27,32],Vf=Gi&&"CompositionEvent"in window,ka=null;Gi&&"documentMode"in document&&(ka=document.documentMode);var b_=Gi&&"TextEvent"in window&&!ka,H0=Gi&&(!Vf||ka&&8<ka&&11>=ka),sp=" ",ap=!1;function V0(t,e){switch(t){case"keyup":return E_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function T_(t,e){switch(t){case"compositionend":return G0(e);case"keypress":return e.which!==32?null:(ap=!0,sp);case"textInput":return t=e.data,t===sp&&ap?null:t;default:return null}}function w_(t,e){if(Ms)return t==="compositionend"||!Vf&&V0(t,e)?(t=z0(),pl=Bf=dr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H0&&e.locale!=="ko"?null:e.data;default:return null}}var A_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A_[t.type]:e==="textarea"}function j0(t,e,n,i){S0(i),e=Ul(e,"onChange"),0<e.length&&(n=new zf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ua=null,Za=null;function C_(t){tg(t,0)}function dc(t){var e=Ts(t);if(p0(e))return t}function R_(t,e){if(t==="change")return e}var W0=!1;if(Gi){var Fc;if(Gi){var Bc="oninput"in document;if(!Bc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Bc=typeof lp.oninput=="function"}Fc=Bc}else Fc=!1;W0=Fc&&(!document.documentMode||9<document.documentMode)}function cp(){Ua&&(Ua.detachEvent("onpropertychange",X0),Za=Ua=null)}function X0(t){if(t.propertyName==="value"&&dc(Za)){var e=[];j0(e,Za,t,Df(t)),T0(C_,e)}}function N_(t,e,n){t==="focusin"?(cp(),Ua=e,Za=n,Ua.attachEvent("onpropertychange",X0)):t==="focusout"&&cp()}function P_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Za)}function I_(t,e){if(t==="click")return dc(e)}function L_(t,e){if(t==="input"||t==="change")return dc(e)}function D_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:D_;function Qa(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,e){var n=up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function Y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k_(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dp(n,s);var a=dp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U_=Gi&&"documentMode"in document&&11>=document.documentMode,Es=null,td=null,Oa=null,nd=!1;function fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||Es==null||Es!==Rl(i)||(i=Es,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oa&&Qa(Oa,i)||(Oa=i,i=Ul(td,"onSelect"),0<i.length&&(e=new zf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},zc={},K0={};Gi&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function fc(t){if(zc[t])return zc[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K0)return zc[t]=e[n];return t}var $0=fc("animationend"),Z0=fc("animationiteration"),Q0=fc("animationstart"),J0=fc("transitionend"),eg=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){eg.set(t,e),Zr(e,[t])}for(var Hc=0;Hc<hp.length;Hc++){var Vc=hp[Hc],O_=Vc.toLowerCase(),F_=Vc[0].toUpperCase()+Vc.slice(1);Tr(O_,"on"+F_)}Tr($0,"onAnimationEnd");Tr(Z0,"onAnimationIteration");Tr(Q0,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(J0,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function pp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ov(i,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;pp(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;pp(r,o,u),s=c}}}if(Pl)throw t=Zu,Pl=!1,Zu=null,t}function Mt(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(ng(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),ng(n,t,i,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[Lo]){t[Lo]=!0,c0.forEach(function(n){n!=="selectionchange"&&(B_.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,Gc("selectionchange",!1,e))}}function ng(t,e,n,i){switch(B0(e)){case 1:var r=Jv;break;case 4:r=e_;break;default:r=Ff}n=r.bind(null,e,n,t),r=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=kr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}T0(function(){var u=s,h=Df(n),p=[];e:{var d=eg.get(t);if(d!==void 0){var m=zf,x=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":m=m_;break;case"focusin":x="focus",m=Oc;break;case"focusout":x="blur",m=Oc;break;case"beforeblur":case"afterblur":m=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=v_;break;case $0:case Z0:case Q0:m=a_;break;case J0:m=y_;break;case"scroll":m=t_;break;case"wheel":m=M_;break;case"copy":case"cut":case"paste":m=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=rp}var E=(e&4)!==0,g=!E&&t==="scroll",f=E?d!==null?d+"Capture":null:d;E=[];for(var v=u,b;v!==null;){b=v;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,f!==null&&(S=Ya(v,f),S!=null&&E.push(eo(v,S,b)))),g)break;v=v.return}0<E.length&&(d=new m(d,x,null,n,h),p.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qu&&(x=n.relatedTarget||n.fromElement)&&(kr(x)||x[ji]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?kr(x):null,x!==null&&(g=Qr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(E=np,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=rp,S="onPointerLeave",f="onPointerEnter",v="pointer"),g=m==null?d:Ts(m),b=x==null?d:Ts(x),d=new E(S,v+"leave",m,n,h),d.target=g,d.relatedTarget=b,S=null,kr(h)===u&&(E=new E(f,v+"enter",x,n,h),E.target=b,E.relatedTarget=g,S=E),g=S,m&&x)t:{for(E=m,f=x,v=0,b=E;b;b=rs(b))v++;for(b=0,S=f;S;S=rs(S))b++;for(;0<v-b;)E=rs(E),v--;for(;0<b-v;)f=rs(f),b--;for(;v--;){if(E===f||f!==null&&E===f.alternate)break t;E=rs(E),f=rs(f)}E=null}else E=null;m!==null&&mp(p,d,m,E,!1),x!==null&&g!==null&&mp(p,g,x,E,!0)}}e:{if(d=u?Ts(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=R_;else if(op(d))if(W0)T=L_;else{T=P_;var w=N_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=I_);if(T&&(T=T(t,u))){j0(p,T,n,h);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Gu(d,"number",d.value)}switch(w=u?Ts(u):window,t){case"focusin":(op(w)||w.contentEditable==="true")&&(Es=w,td=u,Oa=null);break;case"focusout":Oa=td=Es=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,fp(p,n,h);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":fp(p,n,h)}var C;if(Vf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ms?V0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(H0&&n.locale!=="ko"&&(Ms||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ms&&(C=z0()):(dr=h,Bf="value"in dr?dr.value:dr.textContent,Ms=!0)),w=Ul(u,y),0<w.length&&(y=new ip(y,t,null,n,h),p.push({event:y,listeners:w}),C?y.data=C:(C=G0(n),C!==null&&(y.data=C)))),(C=b_?T_(t,n):w_(t,n))&&(u=Ul(u,"onBeforeInput"),0<u.length&&(h=new ip("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}tg(p,e)})}function eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ya(t,n),s!=null&&i.unshift(eo(t,s,r)),s=Ya(t,e),s!=null&&i.push(eo(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Ya(n,s),c!=null&&a.unshift(eo(n,c,o))):r||(c=Ya(n,s),c!=null&&a.push(eo(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var z_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(z_,`
`).replace(H_,"")}function Do(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(se(425))}function Ol(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,V_=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,G_=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(j_)}:ad;function j_(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$a(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),vi="__reactFiber$"+ia,to="__reactProps$"+ia,ji="__reactContainer$"+ia,od="__reactEvents$"+ia,W_="__reactListeners$"+ia,X_="__reactHandles$"+ia;function kr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[vi])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[vi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function hc(t){return t[to]||null}var ld=[],ws=-1;function wr(t){return{current:t}}function Et(t){0>ws||(t.current=ld[ws],ld[ws]=null,ws--)}function _t(t,e){ws++,ld[ws]=t.current,t.current=e}var Er={},cn=wr(Er),En=wr(!1),Gr=Er;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Fl(){Et(En),Et(cn)}function _p(t,e,n){if(cn.current!==Er)throw Error(se(168));_t(cn,e),_t(En,n)}function ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Nv(t)||"Unknown",r));return Nt({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Gr=cn.current,_t(cn,t),_t(En,En.current),!0}function yp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=ig(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,Et(En),Et(cn),_t(cn,t)):Et(En),_t(En,n)}var Ui=null,pc=!1,Xc=!1;function rg(t){Ui===null?Ui=[t]:Ui.push(t)}function Y_(t){pc=!0,rg(t)}function Ar(){if(!Xc&&Ui!==null){Xc=!0;var t=0,e=pt;try{var n=Ui;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,pc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),R0(kf,Ar),r}finally{pt=e,Xc=!1}}return null}var As=[],Cs=0,zl=null,Hl=0,Gn=[],jn=0,jr=null,Oi=1,Fi="";function Lr(t,e){As[Cs++]=Hl,As[Cs++]=zl,zl=t,Hl=e}function sg(t,e,n){Gn[jn++]=Oi,Gn[jn++]=Fi,Gn[jn++]=jr,jr=t;var i=Oi;t=Fi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Oi=1<<32-oi(e)+r|n<<r|i,Fi=s+t}else Oi=1<<s|n<<r|i,Fi=t}function jf(t){t.return!==null&&(Lr(t,1),sg(t,1,0))}function Wf(t){for(;t===zl;)zl=As[--Cs],As[Cs]=null,Hl=As[--Cs],As[Cs]=null;for(;t===jr;)jr=Gn[--jn],Gn[jn]=null,Fi=Gn[--jn],Gn[jn]=null,Oi=Gn[--jn],Gn[jn]=null}var Dn=null,Ln=null,bt=!1,ii=null;function ag(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Oi,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(bt){var e=Ln;if(e){var n=e;if(!Sp(t,e)){if(cd(t))throw Error(se(418));e=xr(n.nextSibling);var i=Dn;e&&Sp(t,e)?ag(i,n):(t.flags=t.flags&-4097|2,bt=!1,Dn=t)}}else{if(cd(t))throw Error(se(418));t.flags=t.flags&-4097|2,bt=!1,Dn=t}}}function Mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function ko(t){if(t!==Dn)return!1;if(!bt)return Mp(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=Ln)){if(cd(t))throw og(),Error(se(418));for(;e;)ag(t,e),e=xr(e.nextSibling)}if(Mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?xr(t.stateNode.nextSibling):null;return!0}function og(){for(var t=Ln;t;)t=xr(t.nextSibling)}function Gs(){Ln=Dn=null,bt=!1}function Xf(t){ii===null?ii=[t]:ii.push(t)}var q_=qi.ReactCurrentBatchConfig;function xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ep(t){var e=t._init;return e(t._payload)}function lg(t){function e(f,v){if(t){var b=f.deletions;b===null?(f.deletions=[v],f.flags|=16):b.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Sr(f,v),f.index=0,f.sibling=null,f}function s(f,v,b){return f.index=b,t?(b=f.alternate,b!==null?(b=b.index,b<v?(f.flags|=2,v):b):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,v,b,S){return v===null||v.tag!==6?(v=Jc(b,f.mode,S),v.return=f,v):(v=r(v,b),v.return=f,v)}function c(f,v,b,S){var T=b.type;return T===Ss?h(f,v,b.props.children,S,b.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&Ep(T)===v.type)?(S=r(v,b.props),S.ref=xa(f,v,b),S.return=f,S):(S=Ml(b.type,b.key,b.props,null,f.mode,S),S.ref=xa(f,v,b),S.return=f,S)}function u(f,v,b,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=eu(b,f.mode,S),v.return=f,v):(v=r(v,b.children||[]),v.return=f,v)}function h(f,v,b,S,T){return v===null||v.tag!==7?(v=Vr(b,f.mode,S,T),v.return=f,v):(v=r(v,b),v.return=f,v)}function p(f,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jc(""+v,f.mode,b),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case To:return b=Ml(v.type,v.key,v.props,null,f.mode,b),b.ref=xa(f,null,v),b.return=f,b;case ys:return v=eu(v,f.mode,b),v.return=f,v;case sr:var S=v._init;return p(f,S(v._payload),b)}if(Ca(v)||fa(v))return v=Vr(v,f.mode,b,null),v.return=f,v;Uo(f,v)}return null}function d(f,v,b,S){var T=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return T!==null?null:o(f,v,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case To:return b.key===T?c(f,v,b,S):null;case ys:return b.key===T?u(f,v,b,S):null;case sr:return T=b._init,d(f,v,T(b._payload),S)}if(Ca(b)||fa(b))return T!==null?null:h(f,v,b,S,null);Uo(f,b)}return null}function m(f,v,b,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(b)||null,o(v,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case To:return f=f.get(S.key===null?b:S.key)||null,c(v,f,S,T);case ys:return f=f.get(S.key===null?b:S.key)||null,u(v,f,S,T);case sr:var w=S._init;return m(f,v,b,w(S._payload),T)}if(Ca(S)||fa(S))return f=f.get(b)||null,h(v,f,S,T,null);Uo(v,S)}return null}function x(f,v,b,S){for(var T=null,w=null,C=v,y=v=0,A=null;C!==null&&y<b.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var I=d(f,C,b[y],S);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(f,C),v=s(I,v,y),w===null?T=I:w.sibling=I,w=I,C=A}if(y===b.length)return n(f,C),bt&&Lr(f,y),T;if(C===null){for(;y<b.length;y++)C=p(f,b[y],S),C!==null&&(v=s(C,v,y),w===null?T=C:w.sibling=C,w=C);return bt&&Lr(f,y),T}for(C=i(f,C);y<b.length;y++)A=m(C,f,y,b[y],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),v=s(A,v,y),w===null?T=A:w.sibling=A,w=A);return t&&C.forEach(function(P){return e(f,P)}),bt&&Lr(f,y),T}function E(f,v,b,S){var T=fa(b);if(typeof T!="function")throw Error(se(150));if(b=T.call(b),b==null)throw Error(se(151));for(var w=T=null,C=v,y=v=0,A=null,I=b.next();C!==null&&!I.done;y++,I=b.next()){C.index>y?(A=C,C=null):A=C.sibling;var P=d(f,C,I.value,S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(f,C),v=s(P,v,y),w===null?T=P:w.sibling=P,w=P,C=A}if(I.done)return n(f,C),bt&&Lr(f,y),T;if(C===null){for(;!I.done;y++,I=b.next())I=p(f,I.value,S),I!==null&&(v=s(I,v,y),w===null?T=I:w.sibling=I,w=I);return bt&&Lr(f,y),T}for(C=i(f,C);!I.done;y++,I=b.next())I=m(C,f,y,I.value,S),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?y:I.key),v=s(I,v,y),w===null?T=I:w.sibling=I,w=I);return t&&C.forEach(function(N){return e(f,N)}),bt&&Lr(f,y),T}function g(f,v,b,S){if(typeof b=="object"&&b!==null&&b.type===Ss&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case To:e:{for(var T=b.key,w=v;w!==null;){if(w.key===T){if(T=b.type,T===Ss){if(w.tag===7){n(f,w.sibling),v=r(w,b.props.children),v.return=f,f=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&Ep(T)===w.type){n(f,w.sibling),v=r(w,b.props),v.ref=xa(f,w,b),v.return=f,f=v;break e}n(f,w);break}else e(f,w);w=w.sibling}b.type===Ss?(v=Vr(b.props.children,f.mode,S,b.key),v.return=f,f=v):(S=Ml(b.type,b.key,b.props,null,f.mode,S),S.ref=xa(f,v,b),S.return=f,f=S)}return a(f);case ys:e:{for(w=b.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(f,v.sibling),v=r(v,b.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=eu(b,f.mode,S),v.return=f,f=v}return a(f);case sr:return w=b._init,g(f,v,w(b._payload),S)}if(Ca(b))return x(f,v,b,S);if(fa(b))return E(f,v,b,S);Uo(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,b),v.return=f,f=v):(n(f,v),v=Jc(b,f.mode,S),v.return=f,f=v),a(f)):n(f,v)}return g}var js=lg(!0),cg=lg(!1),Vl=wr(null),Gl=null,Rs=null,Yf=null;function qf(){Yf=Rs=Gl=null}function Kf(t){var e=Vl.current;Et(Vl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Gl=t,Yf=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Gl===null)throw Error(se(308));Rs=t,Gl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Ur=null;function $f(t){Ur===null?Ur=[t]:Ur.push(t)}function ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$f(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,$f(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,E=o;switch(d=e,m=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){p=x.call(m,p,d);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,d=typeof x=="function"?x.call(m,p,d):x,d==null)break e;p=Nt({},p,d);break e;case 2:ar=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=a,t.lanes=a,t.memoizedState=p}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var vo={},Ei=wr(vo),no=wr(vo),io=wr(vo);function Or(t){if(t===vo)throw Error(se(174));return t}function Qf(t,e){switch(_t(io,e),_t(no,t),_t(Ei,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}Et(Ei),_t(Ei,e)}function Ws(){Et(Ei),Et(no),Et(io)}function fg(t){Or(io.current);var e=Or(Ei.current),n=Wu(e,t.type);e!==n&&(_t(no,t),_t(Ei,n))}function Jf(t){no.current===t&&(Et(Ei),Et(no))}var wt=wr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function eh(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var xl=qi.ReactCurrentDispatcher,qc=qi.ReactCurrentBatchConfig,Wr=0,Ct=null,zt=null,Wt=null,Xl=!1,Fa=!1,ro=0,K_=0;function tn(){throw Error(se(321))}function th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function nh(t,e,n,i,r,s){if(Wr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?J_:ey,t=n(i,r),Fa){s=0;do{if(Fa=!1,ro=0,25<=s)throw Error(se(301));s+=1,Wt=zt=null,e.updateQueue=null,xl.current=ty,t=n(i,r)}while(Fa)}if(xl.current=Yl,e=zt!==null&&zt.next!==null,Wr=0,Wt=zt=Ct=null,Xl=!1,e)throw Error(se(300));return t}function ih(){var t=ro!==0;return ro=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ct.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function qn(){if(zt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Wt===null?Ct.memoizedState:Wt.next;if(e!==null)Wt=e,zt=t;else{if(t===null)throw Error(se(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Wt===null?Ct.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function so(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=qn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Wr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,Ct.lanes|=h,Xr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,ui(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=qn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ui(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hg(){}function pg(t,e){var n=Ct,i=qn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,rh(xg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,ao(9,gg.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(se(349));Wr&30||mg(n,e,r)}return r}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gg(t,e,n,i){e.value=n,e.getSnapshot=i,vg(e)&&_g(t)}function xg(t,e,n){return n(function(){vg(e)&&_g(t)})}function vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function _g(t){var e=Wi(t,1);e!==null&&li(e,t,1,-1)}function wp(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=Q_.bind(null,Ct,t),[e.memoizedState,t]}function ao(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yg(){return qn().memoizedState}function vl(t,e,n,i){var r=gi();Ct.flags|=t,r.memoizedState=ao(1|e,n,void 0,i===void 0?null:i)}function mc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var a=zt.memoizedState;if(s=a.destroy,i!==null&&th(i,a.deps)){r.memoizedState=ao(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=ao(1|e,n,s,i)}function Ap(t,e){return vl(8390656,8,t,e)}function rh(t,e){return mc(2048,8,t,e)}function Sg(t,e){return mc(4,2,t,e)}function Mg(t,e){return mc(4,4,t,e)}function Eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bg(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,Eg.bind(null,e,t),n)}function sh(){}function Tg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ag(t,e,n){return Wr&21?(ui(n,e)||(n=I0(),Ct.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function $_(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{pt=n,qc.transition=i}}function Cg(){return qn().memoizedState}function Z_(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Ng(e,n);else if(n=ug(t,e,n,i),n!==null){var r=hn();li(n,t,i,r),Pg(n,e,i)}}function Q_(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Ng(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ui(o,a)){var c=e.interleaved;c===null?(r.next=r,$f(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=ug(t,e,r,i),n!==null&&(r=hn(),li(n,t,i,r),Pg(n,e,i))}}function Rg(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Ng(t,e){Fa=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var Yl={readContext:Yn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},J_={readContext:Yn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,Eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Z_.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:sh,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=$_.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=gi();if(bt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Xt===null)throw Error(se(349));Wr&30||mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ap(xg.bind(null,i,s,t),[t]),i.flags|=2048,ao(9,gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=Xt.identifierPrefix;if(bt){var n=Fi,i=Oi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ey={readContext:Yn,useCallback:Tg,useContext:Yn,useEffect:rh,useImperativeHandle:bg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:wg,useReducer:Kc,useRef:yg,useState:function(){return Kc(so)},useDebugValue:sh,useDeferredValue:function(t){var e=qn();return Ag(e,zt.memoizedState,t)},useTransition:function(){var t=Kc(so)[0],e=qn().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1},ty={readContext:Yn,useCallback:Tg,useContext:Yn,useEffect:rh,useImperativeHandle:bg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:wg,useReducer:$c,useRef:yg,useState:function(){return $c(so)},useDebugValue:sh,useDeferredValue:function(t){var e=qn();return zt===null?e.memoizedState=t:Ag(e,zt.memoizedState,t)},useTransition:function(){var t=$c(so)[0],e=qn().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:pg,useId:Cg,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=yr(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(li(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=yr(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(li(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=yr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(li(e,t,i,n),gl(e,t,i))}};function Cp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,s):!0}function Ig(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=bn(e)?Gr:cn.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=bn(e)?Gr:cn.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gc.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",i=e;do n+=Rv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,bd=i),pd(t,e)},n}function Dg(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gy.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var iy=qi.ReactCurrentOwner,Mn=!1;function fn(t,e,n,i){e.child=t===null?cg(e,null,n,i):js(e,t.child,n,i)}function Lp(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=nh(t,e,n,i,s,r),n=ih(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(bt&&n&&jf(e),e.flags|=1,fn(t,e,i,r),e.child)}function Dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kg(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(a,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function kg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qa(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return md(t,e,n,i,r)}function Ug(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Ps,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Ps,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Ps,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Ps,Pn),Pn|=i;return fn(t,e,r,n),e.child}function Og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=bn(n)?Gr:cn.current;return s=Vs(e,s),Os(e,r),n=nh(t,e,n,i,s,r),i=ih(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(bt&&i&&jf(e),e.flags|=1,fn(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(bn(n)){var s=!0;Bl(e)}else s=!1;if(Os(e,r),e.stateNode===null)_l(t,e),Ig(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yn(u):(u=bn(n)?Gr:cn.current,u=Vs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Rp(e,a,i,u),ar=!1;var d=e.memoizedState;a.state=d,jl(e,i,a,r),c=e.memoizedState,o!==i||d!==c||En.current||ar?(typeof h=="function"&&(fd(e,n,h,i),c=e.memoizedState),(o=ar||Cp(e,n,o,i,d,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,dg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:ti(e.type,o),a.props=u,p=e.pendingProps,d=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Yn(c):(c=bn(n)?Gr:cn.current,c=Vs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==c)&&Rp(e,a,i,c),ar=!1,d=e.memoizedState,a.state=d,jl(e,i,a,r);var x=e.memoizedState;o!==p||d!==x||En.current||ar?(typeof m=="function"&&(fd(e,n,m,i),x=e.memoizedState),(u=ar||Cp(e,n,u,i,d,x,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){Og(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&yp(e,n,!1),Xi(t,e,s);i=e.stateNode,iy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=js(e,t.child,null,s),e.child=js(e,null,o,s)):fn(t,e,o,s),e.memoizedState=i.state,r&&yp(e,n,!0),e.child}function Fg(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),Qf(t,e.containerInfo)}function Up(t,e,n,i,r){return Gs(),Xf(r),e.flags|=256,fn(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bg(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(wt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_c(a,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=xd,t):ah(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ry(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Sr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Sr(o,s):(s=Vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ah(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oo(t,e,n,i){return i!==null&&Xf(i),js(e,t.child,null,n),t=ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ry(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Zc(Error(se(422))),Oo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&js(e,t.child,null,a),e.child.memoizedState=vd(a),e.memoizedState=xd,s);if(!(e.mode&1))return Oo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Zc(s,i,void 0),Oo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Mn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),li(i,t,r,-1))}return fh(),i=Zc(Error(se(421))),Oo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=xr(r.nextSibling),Dn=e,bt=!0,ii=null,t!==null&&(Gn[jn++]=Oi,Gn[jn++]=Fi,Gn[jn++]=jr,Oi=t.id,Fi=t.overflow,jr=e),e=ah(e,i.children),e.flags|=4096,e)}function Op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,n,e);else if(t.tag===19)Op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sy(t,e,n){switch(e.tag){case 3:Fg(e),Gs();break;case 5:fg(e);break;case 1:bn(e.type)&&Bl(e);break;case 4:Qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(Vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?Bg(t,e,n):(_t(wt,wt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);_t(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ug(t,e,n)}return Xi(t,e,n)}var Hg,_d,Vg,Gg;Hg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};Vg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(Ei.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=ju(t,r),i=ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Xu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Mt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ay(t,e,n){var i=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return bn(e.type)&&Fl(),nn(e),null;case 3:return i=e.stateNode,Ws(),Et(En),Et(cn),eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Ad(ii),ii=null))),_d(t,e),nn(e),null;case 5:Jf(e);var r=Or(io.current);if(n=e.type,t!==null&&e.stateNode!=null)Vg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return nn(e),null}if(t=Or(Ei.current),ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[to]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)Mt(Na[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Xh(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":qh(i,s),Mt("invalid",i)}Xu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Do(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Do(i.textContent,o,t),r=["children",""+o]):Wa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":wo(i),Yh(i,s,!0);break;case"textarea":wo(i),Kh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[vi]=e,t[to]=i,Hg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Yu(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)Mt(Na[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Xh(t,i),r=Hu(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":qh(t,i),r=ju(t,i),Mt("invalid",t);break;default:r=i}Xu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?y0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&v0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xa(t,c):typeof c=="number"&&Xa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Mt("scroll",t):c!=null&&Nf(t,s,c,a))}switch(n){case"input":wo(t),Yh(t,i,!1);break;case"textarea":wo(t),Kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Or(io.current),Or(Ei.current),ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Do(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Do(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return nn(e),null;case 13:if(Et(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Ln!==null&&e.mode&1&&!(e.flags&128))og(),Gs(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[vi]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ii!==null&&(Ad(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Ht===0&&(Ht=3):fh())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return Ws(),_d(t,e),t===null&&Ja(e.stateNode.containerInfo),nn(e),null;case 10:return Kf(e.type._context),nn(e),null;case 17:return bn(e.type)&&Fl(),nn(e),null;case 19:if(Et(wt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)va(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Wl(t),a!==null){for(e.flags|=128,va(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>Ys&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!bt)return nn(e),null}else 2*kt()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=wt.current,_t(wt,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function oy(t,e){switch(Wf(e),e.tag){case 1:return bn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Et(En),Et(cn),eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(Et(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(wt),null;case 4:return Ws(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return dh(),null;case 24:return null;default:return null}}var Fo=!1,on=!1,ly=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){It(t,e,i)}}var Fp=!1;function cy(t,e){if(id=Dl,t=q0(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Dl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,g=x.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:ti(e.type,E),g);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){It(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=Fp,Fp=!1,x}function Ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,n,s)}r=r.next}while(r!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jg(t){var e=t.alternate;e!==null&&(t.alternate=null,jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[to],delete e[od],delete e[W_],delete e[X_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wg(t){return t.tag===5||t.tag===3||t.tag===4}function Bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Yt=null,ni=!1;function Ji(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:on||Ns(n,e);case 6:var i=Yt,r=ni;Yt=null,Ji(t,e,n),Yt=i,ni=r,Yt!==null&&(ni?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ni?(t=Yt,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),$a(t)):Wc(Yt,n.stateNode));break;case 4:i=Yt,r=ni,Yt=n.stateNode.containerInfo,ni=!0,Ji(t,e,n),Yt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yd(n,e,a),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!on&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){It(n,e,o)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,Ji(t,e,n),on=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ly),e.forEach(function(i){var r=vy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,ni=!1;break e;case 3:Yt=o.stateNode.containerInfo,ni=!0;break e;case 4:Yt=o.stateNode.containerInfo,ni=!0;break e}o=o.return}if(Yt===null)throw Error(se(160));Xg(s,a,r),Yt=null,ni=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){It(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,t),e=e.sibling}function Yg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),hi(t),i&4){try{Ba(3,t,t.return),xc(3,t)}catch(E){It(t,t.return,E)}try{Ba(5,t,t.return)}catch(E){It(t,t.return,E)}}break;case 1:Zn(e,t),hi(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Zn(e,t),hi(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Xa(r,"")}catch(E){It(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&m0(r,s),Yu(o,a);var u=Yu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?y0(r,p):h==="dangerouslySetInnerHTML"?v0(r,p):h==="children"?Xa(r,p):Nf(r,h,p,u)}switch(o){case"input":Vu(r,s);break;case"textarea":g0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ls(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[to]=s}catch(E){It(t,t.return,E)}}break;case 6:if(Zn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){It(t,t.return,E)}}break;case 3:if(Zn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(E){It(t,t.return,E)}break;case 4:Zn(e,t),hi(t);break;case 13:Zn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ch=kt())),i&4&&zp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||h,Zn(e,t),on=u):Zn(e,t),hi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Ee=t,h=t.child;h!==null;){for(p=Ee=h;Ee!==null;){switch(d=Ee,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ba(4,d,d.return);break;case 1:Ns(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){It(i,n,E)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){Vp(p);continue}}m!==null?(m.return=d,Ee=m):Vp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=_0("display",a))}catch(E){It(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(E){It(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Zn(e,t),hi(t),i&4&&zp(t);break;case 21:break;default:Zn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wg(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xa(r,""),i.flags&=-33);var s=Bp(t);Ed(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Bp(t);Md(t,o,a);break;default:throw Error(se(161))}}catch(c){It(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uy(t,e,n){Ee=t,qg(t)}function qg(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Fo;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||on;o=Fo;var u=on;if(Fo=a,(on=c)&&!u)for(Ee=r;Ee!==null;)a=Ee,c=a.child,a.tag===22&&a.memoizedState!==null?Gp(r):c!==null?(c.return=a,Ee=c):Gp(r);for(;s!==null;)Ee=s,qg(s),s=s.sibling;Ee=r,Fo=o,on=u}Hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Hp(t)}}function Hp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&$a(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}on||e.flags&512&&Sd(e)}catch(d){It(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Vp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Gp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(c){It(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){It(e,r,c)}}var s=e.return;try{Sd(e)}catch(c){It(e,s,c)}break;case 5:var a=e.return;try{Sd(e)}catch(c){It(e,a,c)}}}catch(c){It(e,e.return,c)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var dy=Math.ceil,ql=qi.ReactCurrentDispatcher,oh=qi.ReactCurrentOwner,Xn=qi.ReactCurrentBatchConfig,at=0,Xt=null,Bt=null,$t=0,Pn=0,Ps=wr(0),Ht=0,oo=null,Xr=0,vc=0,lh=0,za=null,yn=null,ch=0,Ys=1/0,ki=null,Kl=!1,bd=null,_r=null,Bo=!1,fr=null,$l=0,Ha=0,Td=null,yl=-1,Sl=0;function hn(){return at&6?kt():yl!==-1?yl:yl=kt()}function yr(t){return t.mode&1?at&2&&$t!==0?$t&-$t:q_.transition!==null?(Sl===0&&(Sl=I0()),Sl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:B0(t.type)),t):1}function li(t,e,n,i){if(50<Ha)throw Ha=0,Td=null,Error(se(185));mo(t,n,i),(!(at&2)||t!==Xt)&&(t===Xt&&(!(at&2)&&(vc|=n),Ht===4&&cr(t,$t)),Tn(t,i),n===1&&at===0&&!(e.mode&1)&&(Ys=kt()+500,pc&&Ar()))}function Tn(t,e){var n=t.callbackNode;qv(t,e);var i=Ll(t,t===Xt?$t:0);if(i===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?Y_(jp.bind(null,t)):rg(jp.bind(null,t)),G_(function(){!(at&6)&&Ar()}),n=null;else{switch(L0(i)){case 1:n=kf;break;case 4:n=N0;break;case 16:n=Il;break;case 536870912:n=P0;break;default:n=Il}n=nx(n,Kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kg(t,e){if(yl=-1,Sl=0,at&6)throw Error(se(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=Ll(t,t===Xt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=at;at|=2;var s=Zg();(Xt!==t||$t!==e)&&(ki=null,Ys=kt()+500,Hr(t,e));do try{py();break}catch(o){$g(t,o)}while(!0);qf(),ql.current=s,at=r,Bt!==null?e=0:(Xt=null,$t=0,e=Ht)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=oo,Hr(t,0),cr(t,i),Tn(t,kt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!fy(r)&&(e=Zl(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=oo,Hr(t,0),cr(t,i),Tn(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Dr(t,yn,ki);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=ch+500-kt(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Dr.bind(null,t,yn,ki),e);break}Dr(t,yn,ki);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-oi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dy(i/1960))-i,10<i){t.timeoutHandle=ad(Dr.bind(null,t,yn,ki),i);break}Dr(t,yn,ki);break;case 5:Dr(t,yn,ki);break;default:throw Error(se(329))}}}return Tn(t,kt()),t.callbackNode===n?Kg.bind(null,t):null}function wd(t,e){var n=za;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=yn,yn=n,e!==null&&Ad(e)),t}function Ad(t){yn===null?yn=t:yn.push.apply(yn,t)}function fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~lh,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function jp(t){if(at&6)throw Error(se(327));Fs();var e=Ll(t,0);if(!(e&1))return Tn(t,kt()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=oo,Hr(t,0),cr(t,e),Tn(t,kt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,yn,ki),Tn(t,kt()),null}function uh(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(Ys=kt()+500,pc&&Ar())}}function Yr(t){fr!==null&&fr.tag===0&&!(at&6)&&Fs();var e=at;at|=1;var n=Xn.transition,i=pt;try{if(Xn.transition=null,pt=1,t)return t()}finally{pt=i,Xn.transition=n,at=e,!(at&6)&&Ar()}}function dh(){Pn=Ps.current,Et(Ps)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,V_(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(Wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Ws(),Et(En),Et(cn),eh();break;case 5:Jf(i);break;case 4:Ws();break;case 13:Et(wt);break;case 19:Et(wt);break;case 10:Kf(i.type._context);break;case 22:case 23:dh()}n=n.return}if(Xt=t,Bt=t=Sr(t.current,null),$t=Pn=e,Ht=0,oo=null,lh=vc=Xr=0,yn=za=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ur=null}return t}function $g(t,e){do{var n=Bt;try{if(qf(),xl.current=Yl,Xl){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Wr=0,Wt=zt=Ct=null,Fa=!1,ro=0,oh.current=null,n===null||n.return===null){Ht=1,oo=e,Bt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=$t,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Pp(a);if(m!==null){m.flags&=-257,Ip(m,a,o,s,e),m.mode&1&&Np(s,u,e),e=m,c=u;var x=e.updateQueue;if(x===null){var E=new Set;E.add(c),e.updateQueue=E}else x.add(c);break e}else{if(!(e&1)){Np(s,u,e),fh();break e}c=Error(se(426))}}else if(bt&&o.mode&1){var g=Pp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ip(g,a,o,s,e),Xf(Xs(c,o));break e}}s=c=Xs(c,o),Ht!==4&&(Ht=2),za===null?za=[s]:za.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Lg(s,c,e);bp(s,f);break e;case 1:o=c;var v=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(_r===null||!_r.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Dg(s,o,e);bp(s,S);break e}}s=s.return}while(s!==null)}Jg(n)}catch(T){e=T,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function Zg(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function fh(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Xt===null||!(Xr&268435455)&&!(vc&268435455)||cr(Xt,$t)}function Zl(t,e){var n=at;at|=2;var i=Zg();(Xt!==t||$t!==e)&&(ki=null,Hr(t,e));do try{hy();break}catch(r){$g(t,r)}while(!0);if(qf(),at=n,ql.current=i,Bt!==null)throw Error(se(261));return Xt=null,$t=0,Ht}function hy(){for(;Bt!==null;)Qg(Bt)}function py(){for(;Bt!==null&&!Bv();)Qg(Bt)}function Qg(t){var e=tx(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?Jg(t):Bt=e,oh.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Bt=null;return}}else if(n=ay(n,e,Pn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Dr(t,e,n){var i=pt,r=Xn.transition;try{Xn.transition=null,pt=1,my(t,e,n,i)}finally{Xn.transition=r,pt=i}return null}function my(t,e,n,i){do Fs();while(fr!==null);if(at&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kv(t,s),t===Xt&&(Bt=Xt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,nx(Il,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=pt;pt=1;var o=at;at|=4,oh.current=null,cy(t,n),Yg(n,t),k_(rd),Dl=!!id,rd=id=null,t.current=n,uy(n),zv(),at=o,pt=a,Xn.transition=s}else t.current=n;if(Bo&&(Bo=!1,fr=t,$l=r),s=t.pendingLanes,s===0&&(_r=null),Gv(n.stateNode),Tn(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=bd,bd=null,t;return $l&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===Td?Ha++:(Ha=0,Td=t):Ha=0,Ar(),null}function Fs(){if(fr!==null){var t=L0($l),e=Xn.transition,n=pt;try{if(Xn.transition=null,pt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,$l=0,at&6)throw Error(se(331));var r=at;for(at|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Ee=u;Ee!==null;){var h=Ee;switch(h.tag){case 0:case 11:case 15:Ba(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ee=p;else for(;Ee!==null;){h=Ee;var d=h.sibling,m=h.return;if(jg(h),h===u){Ee=null;break}if(d!==null){d.return=m,Ee=d;break}Ee=m}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ba(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){a=Ee;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Ee=b;else e:for(a=v;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xc(9,o)}}catch(T){It(o,o.return,T)}if(o===a){Ee=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ee=S;break e}Ee=o.return}}if(at=r,Ar(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(cc,t)}catch{}i=!0}return i}finally{pt=n,Xn.transition=e}}return!1}function Wp(t,e,n){e=Xs(n,e),e=Lg(t,e,1),t=vr(t,e,1),e=hn(),t!==null&&(mo(t,1,e),Tn(t,e))}function It(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=Xs(n,t),t=Dg(e,t,1),e=vr(e,t,1),t=hn(),e!==null&&(mo(e,1,t),Tn(e,t));break}}e=e.return}}function gy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&($t&n)===n&&(Ht===4||Ht===3&&($t&130023424)===$t&&500>kt()-ch?Hr(t,0):lh|=n),Tn(t,e)}function ex(t,e){e===0&&(t.mode&1?(e=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):e=1);var n=hn();t=Wi(t,e),t!==null&&(mo(t,e,n),Tn(t,n))}function xy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ex(t,n)}function vy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),ex(t,n)}var tx;tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,sy(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,bt&&e.flags&1048576&&sg(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Vs(e,cn.current);Os(e,n),r=nh(null,e,i,t,r,n);var s=ih();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zf(e),r.updater=gc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&jf(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yy(i),t=ti(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Lp(null,e,i,t,n);break e;case 14:e=Dp(null,e,i,ti(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),kp(t,e,i,r,n);case 3:e:{if(Fg(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dg(t,e),jl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(se(423)),e),e=Up(t,e,i,n,r);break e}else if(i!==r){r=Xs(Error(se(424)),e),e=Up(t,e,i,n,r);break e}else for(Ln=xr(e.stateNode.containerInfo.firstChild),Dn=e,bt=!0,ii=null,n=cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),i===r){e=Xi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return fg(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sd(i,r)?a=null:s!==null&&sd(i,s)&&(e.flags|=32),Og(t,e),fn(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Bg(t,e,n);case 4:return Qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=js(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Lp(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(Vl,i._currentValue),i._currentValue=a,s!==null)if(ui(s.value,a)){if(s.children===r.children&&!En.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=zi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),dd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Yn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Dp(t,e,i,r,n);case 15:return kg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),_l(t,e),e.tag=1,bn(i)?(t=!0,Bl(e)):t=!1,Os(e,n),Ig(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return zg(t,e,n);case 22:return Ug(t,e,n)}throw Error(se(156,e.tag))};function nx(t,e){return R0(t,e)}function _y(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new _y(t,e,n,i)}function hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yy(t){if(typeof t=="function")return hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===Lf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ss:return Vr(n.children,r,s,e);case Pf:a=8,r|=8;break;case Ou:return t=Wn(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case Fu:return t=Wn(13,n,e,r),t.elementType=Fu,t.lanes=s,t;case Bu:return t=Wn(19,n,e,r),t.elementType=Bu,t.lanes=s,t;case f0:return _c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u0:a=10;break e;case d0:a=9;break e;case If:a=11;break e;case Lf:a=14;break e;case sr:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=f0,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ph(t,e,n,i,r,s,a,o,c){return t=new Sy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function My(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ix(t){if(!t)return Er;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(bn(n))return ig(t,n,e)}return e}function rx(t,e,n,i,r,s,a,o,c){return t=ph(n,i,!0,t,r,s,a,o,c),t.context=ix(null),n=t.current,i=hn(),r=yr(n),s=zi(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,mo(t,r,i),Tn(t,i),t}function yc(t,e,n,i){var r=e.current,s=hn(),a=yr(r);return n=ix(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,a),t!==null&&(li(t,r,a,s),gl(t,r,a)),a}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mh(t,e){Xp(t,e),(t=t.alternate)&&Xp(t,e)}function Ey(){return null}var sx=typeof reportError=="function"?reportError:function(t){console.error(t)};function gh(t){this._internalRoot=t}Sc.prototype.render=gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));yc(t,e,null,null)};Sc.prototype.unmount=gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){yc(null,t,null,null)}),e[ji]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&F0(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function by(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ql(a);s.call(u)}}var a=rx(e,i,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=a,t[ji]=a.current,Ja(t.nodeType===8?t.parentNode:t),Yr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ql(c);o.call(u)}}var c=ph(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=c,t[ji]=c.current,Ja(t.nodeType===8?t.parentNode:t),Yr(function(){yc(e,c,n,i)}),c}function Ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Ql(a);o.call(c)}}yc(e,a,t,r)}else a=by(n,e,t,r,i);return Ql(a)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(Uf(e,n|1),Tn(e,kt()),!(at&6)&&(Ys=kt()+500,Ar()))}break;case 13:Yr(function(){var i=Wi(t,1);if(i!==null){var r=hn();li(i,t,1,r)}}),mh(t,1)}};Of=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=hn();li(e,t,134217728,n)}mh(t,134217728)}};k0=function(t){if(t.tag===13){var e=yr(t),n=Wi(t,e);if(n!==null){var i=hn();li(n,t,e,i)}mh(t,e)}};U0=function(){return pt};O0=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Ku=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(se(90));p0(i),Vu(i,r)}}}break;case"textarea":g0(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};E0=uh;b0=Yr;var Ty={usingClientEntryPoint:!1,Events:[xo,Ts,hc,S0,M0,uh]},_a={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A0(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{cc=zo.inject(wy),Mi=zo}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(se(200));return My(t,e,null,n)};Un.createRoot=function(t,e){if(!xh(t))throw Error(se(299));var n=!1,i="",r=sx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ph(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,Ja(t.nodeType===8?t.parentNode:t),new gh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=A0(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return Yr(t)};Un.hydrate=function(t,e,n){if(!Mc(e))throw Error(se(200));return Ec(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=sx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=rx(e,null,t,1,n??null,r,!1,s,a),t[ji]=e.current,Ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sc(e)};Un.render=function(t,e,n){if(!Mc(e))throw Error(se(200));return Ec(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(se(40));return t._reactRootContainer?(Yr(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Un.unstable_batchedUpdates=uh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Mc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Ec(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ax)}catch(t){console.error(t)}}ax(),a0.exports=Un;var Ay=a0.exports,qp=Ay;ku.createRoot=qp.createRoot,ku.hydrateRoot=qp.hydrateRoot;const Cy=[{id:"ev-1",title:"Evidence 01: East Hallway Photograph",round:1,type:"photo",timestamp:"11:47 PM (Camera Metadata)",content:"Long exposure capture of the East Corridor outside Study Room 17-B. A tall grandfather clock stands against the mahogany wainscoting. A shadow stretches across the Persian carpet near the study entrance.",hiddenDetails:"Exif metadata reveals camera hardware internal clock was drifting by +0.00s, but optical glare suggests the pendulum in the background was arrested.",tags:["Hallway","Visual","Round 1"]},{id:"ev-2",title:"Evidence 02: Grandfather Clock Close-up",round:1,type:"photo",timestamp:"11:47:00 (Fixed Face)",content:"Macro photograph of the antique German brass grandfather clock in the East Hallway. Roman numerals. The hour hand points between XI and XII, minute hand precisely at 47 minutes.",hiddenDetails:"The escapement wheel has a thin sliver of graphite jammed between the teeth. The clock was intentionally halted at 11:47 PM hours before the incident.",tags:["Clock","Critical","Round 1"]},{id:"ev-3",title:"Evidence 03: Victim's Leather Field Notebook",round:1,type:"document",timestamp:"Recovered from Desk",content:`PAGE 47 - HANDWRITTEN IN BLACK INK:
"11:47
12:03
12:13
12:17

Never trust the first time.
Death is not the moment the body stops.
The walls carry ears that listen to the pendulum."`,hiddenDetails:"Page indentations show frantic writing. Numbers 11, 47, 12, 03, 13, 17 are underlined with double strokes—these serve as word indices in the Blackwood Master Cipher.",tags:["Notebook","Cipher Key","Round 1"]},{id:"ev-4",title:"Evidence 04: Dictaphone Audio Reel (Tape #4)",round:1,type:"audio",timestamp:"Recovered from Study Floor",content:`[Normal Playback 1.0x]:
"When the house stopped... someone started."
(Heavy tape hiss, electrical hum, background rhythmic pendulum clatter).`,hiddenDetails:`[Slowdown Playback 0.5x - REVERSE FREQUENCY DECODED]:
Sub-bass spectral analysis reveals a hidden whisper buried beneath the tape rumble:
"Someone started BEFORE the house stopped."
This establishes that the attack occurred BEFORE the 12:13 blackout!`,tags:["Audio","Forensic","Round 1"]},{id:"ev-5",title:"Evidence 05: Five Suspect Initial Depositions",round:1,type:"document",timestamp:"12:30 AM (Post-Incident)",content:`OFFICIAL STATEMENTS LOGGED:
1. AARAV MEHTA: "I entered the hallway at 11:47 PM to retrieve books. I did not enter Sen's room."
2. RIYA SHARMA: "I was in the reading room studying old journals until the power cut."
3. KABIR VARMA: "Server room network reboot from 11:55 PM to 12:20 AM."
4. DR. MEERA PATEL: "Kitchen tea brewing between 11:40 PM and 12:10 AM without interruption."
5. DEV NEGI: "Basement maintenance bay, checking boiler valves all night."`,hiddenDetails:"Every suspect tells at least one lie to conceal their separate unlawful act, but only one is concealing murder.",tags:["Statements","Alibis","Round 1"]},{id:"ev-6",title:"Evidence 06: Composite CCTV Timeline Log",round:3,type:"cctv",timestamp:"11:45 PM - 12:20 AM",content:`TIMELINE CHRONOLOGY:
• 11:47 PM — Aarav Mehta enters East Wing Corridor.
• 11:52 PM — Riya Sharma enters Reading Room Antechamber.
• 11:58 PM — Kabir Varma swipes into Basement Server Enclosure.
• 12:03 AM — Dr. Meera Patel recorded in Kitchen Service Hallway.
• 12:08 AM — Dev Negi enters Lower Basement Stairs.
• 12:13 AM — [CRITICAL EVENT] Complete building blackout / Circuit overload.
• 12:17 AM — Auxiliary generator kicks on; corridor illumination restored.
• 12:18 AM — Victim Vikram Sen discovered motionless in locked Study 17-B.`,hiddenDetails:"TRAP WARNING: The system administrator (Kabir) notes that the CCTV network draws timestamps from un-synchronized local clock crystals with varying drifts.",tags:["CCTV","Timeline","Round 3"]},{id:"ev-10",title:"Evidence 10: Study Antechamber Audio Sensor #2",round:3,type:"audio",timestamp:"12:05:14 AM (Audio Timestamp)",content:`MICROPHONE TRANSCRIPTION:
[12:05:14 AM]: (Weak, laboured rasping of Professor Vikram Sen)
"Meera... you shouldn't have come... what did you... do..."
(Sound of glass shatters, heavy breathing, hurried footfalls retreating).`,hiddenDetails:"This creates the lethal contradiction: CCTV logged Meera in the kitchen at 12:03, yet Sen is speaking to her or referring to her attack at 12:05! Why does the AI report say timeline is consistent?",tags:["Audio","Contradiction","Round 3"]},{id:"ev-11",title:"Evidence 11: Professor Sen's Final Recording",round:4,type:"video",timestamp:"12:03:00 - 12:03:17 AM",content:`TERMINAL VIDEO PLAYBACK (SEN_FINAL_1203.mp4):
Professor Sen is seated slumped in his high-back leather chair. Blood trickles from his left temple. He looks with wild eyes directly into the webcam:
"If you're watching this... one of them killed me. But that's not what you should be looking for. The person who killed me isn't the person you're going to suspect."
He looks over his shoulder at the wall clock: 12:03 AM.
VIDEO FEED CUTS OUT AT 12:03:17 AM.`,hiddenDetails:"Notice: Sen was attacked and bleeding, but he was ALIVE at 12:03 AM! Therefore, the 11:47 confrontation was an ASSAULT, not the moment of death!",tags:["Video","Fatal Trap","Round 4"]},{id:"ev-secret",title:"UNCLASSIFIED: YOU_WERE_NOT_SUPPOSED_TO_FIND_THIS.mp4",round:4,type:"video",timestamp:"11:47:12 PM (Hidden Pinhole Camera)",content:`RESTRICTED FOOTAGE (7 SECONDS):
Pinhole camera hidden behind the bookshelf. A dark figure in a winter coat enters Study 17-B. The wall clock behind them reads 11:47 PM. A violent physical struggle erupts off-screen; a dull brass thud echoes. The figure flees. Sen collapses onto the desk.`,hiddenDetails:"The assailant struck Sen at 11:47 PM and fled, believing he was dead. But Sen regained consciousness at 12:00 AM and made his recording at 12:03 AM!",tags:["Hidden File","Breakthrough","Round 4"]},{id:"ev-12",title:"Evidence 12: Network Thermal Printer Buffer Log",round:5,type:"log",timestamp:"11:41:22 PM (SPOOL TIMESTAMP)",content:`PRINTER SPOOL CACHE (HP-LASER-STUDY):
JOB #00984 - "MEERA_PATEL_INCIDENTS_SUMMARY.pdf"
PRINT TIME: 11:41:22 PM
PAGES: 4
DESTINATION TRAY: Study Secret File Cabinet
CONTENT: Fabricated dossier detailing Meera's alleged embezzlement and murder threats against Sen.`,hiddenDetails:"SMOKING GUN: This document framing Meera was printed at 11:41 PM—six minutes BEFORE Meera even entered the study at 11:47 PM! Someone orchestrated the crime scene in advance!",tags:["Printer Log","Pre-Crime","Round 5"]},{id:"ev-13",title:"Evidence 13: The Blackwood Master Log & Indexer",round:6,type:"document",timestamp:"ARCHIVE VAULT (MASTER_LOG.dat)",content:`CIPHER INDICES RECOVERED:
[11 : 47] → "THE CLOCK"
[12 : 03] → "DID NOT LIE."
[12 : 13] → "SOMEONE MADE IT"
[12 : 17] → "TELL THE TRUTH TOO LATE."

COMBINED DECODED TRUTH:
"THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."`,hiddenDetails:"The Study clock was delayed by 16 minutes to create an artificial window of murder during the blackout, masking Devraj Negi’s silent entrance through the caretaker passage.",tags:["Master Log","Cipher","Round 6"]}];class Ry{constructor(){Cc(this,"ctx",null);Cc(this,"isMuted",!1)}getContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setMuted(e){this.isMuted=e,e&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}getMuted(){return this.isMuted}playTick(e=!1){if(!this.isMuted)try{const n=this.getContext(),i=n.currentTime,r=n.createOscillator(),s=n.createGain(),a=n.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(e?450:1200,i),a.Q.setValueAtTime(12,i),r.type="triangle",r.frequency.setValueAtTime(e?180:380,i),r.frequency.exponentialRampToValueAtTime(40,i+.04),s.gain.setValueAtTime(.35,i),s.gain.exponentialRampToValueAtTime(.001,i+.05),r.connect(a),a.connect(s),s.connect(n.destination),r.start(i),r.stop(i+.05)}catch{}}playFootstep(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain(),s=e.createBiquadFilter(),a=.85+Math.random()*.3;i.type="triangle",i.frequency.setValueAtTime(95*a,n),i.frequency.exponentialRampToValueAtTime(35*a,n+.12),s.type="lowpass",s.frequency.setValueAtTime(320,n),r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.14),i.connect(s),s.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.15),Math.random()>.4&&this.playGlitchStatic(.04)}catch{}}playBloodSplatter(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createOscillator(),s=e.createGain(),a=e.createGain(),o=e.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(350,n),i.frequency.exponentialRampToValueAtTime(60,n+.28),r.type="sine",r.frequency.setValueAtTime(45,n),s.gain.setValueAtTime(120,n),o.type="bandpass",o.frequency.setValueAtTime(600,n),o.Q.setValueAtTime(4,n),a.gain.setValueAtTime(.4,n),a.gain.exponentialRampToValueAtTime(.001,n+.32),r.connect(s),s.connect(i.frequency),i.connect(o),o.connect(a),a.connect(e.destination),r.start(n),i.start(n),r.stop(n+.35),i.stop(n+.35),setTimeout(()=>{try{const c=e.createOscillator(),u=e.createGain();c.type="sine",c.frequency.setValueAtTime(900,e.currentTime),c.frequency.exponentialRampToValueAtTime(1600,e.currentTime+.08),u.gain.setValueAtTime(.2,e.currentTime),u.gain.exponentialRampToValueAtTime(.001,e.currentTime+.1),c.connect(u),u.connect(e.destination),c.start(),c.stop(e.currentTime+.1)}catch{}},70)}catch{}}playTerrifyingScream(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=1.6,r=[750,1200,2600,3400],s=e.createGain();s.gain.setValueAtTime(.01,n),s.gain.linearRampToValueAtTime(.7,n+.08),s.gain.exponentialRampToValueAtTime(.001,n+i);const a=e.createOscillator(),o=e.createGain();a.frequency.setValueAtTime(8.5,n),o.gain.setValueAtTime(45,n),a.connect(o),r.forEach((m,x)=>{const E=e.createOscillator(),g=e.createGain(),f=e.createBiquadFilter();E.type=x===0?"sawtooth":"triangle",E.frequency.setValueAtTime(m,n),E.frequency.linearRampToValueAtTime(m*1.35,n+.25),E.frequency.exponentialRampToValueAtTime(m*.7,n+i),o.connect(E.frequency),f.type="bandpass",f.frequency.setValueAtTime(m,n),f.Q.setValueAtTime(5,n),g.gain.setValueAtTime(.3/(x+1),n),E.connect(f),f.connect(g),g.connect(s),E.start(n),E.stop(n+i)});const c=e.sampleRate*i,u=e.createBuffer(1,c,e.sampleRate),h=u.getChannelData(0);for(let m=0;m<c;m++)h[m]=Math.random()*2-1;const p=e.createBufferSource();p.buffer=u;const d=e.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(2800,n),d.Q.setValueAtTime(3,n),p.connect(d),d.connect(s),p.start(n),p.stop(n+i),a.start(n),a.stop(n+i),s.connect(e.destination),setTimeout(()=>this.playBloodSplatter(),120)}catch{}}playViolinShriek(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[1975.5,2093,2793.8,3136].forEach(r=>{const s=e.createOscillator(),a=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(r,n),s.frequency.linearRampToValueAtTime(r*1.04,n+.35),a.gain.setValueAtTime(.01,n),a.gain.linearRampToValueAtTime(.2,n+.04),a.gain.exponentialRampToValueAtTime(.001,n+.7),s.connect(a),a.connect(e.destination),s.start(n),s.stop(n+.75)})}catch{}}playBinauralWhisper(e,n=.8){if(!(this.isMuted||!("speechSynthesis"in window)))try{window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e);i.pitch=.2,i.rate=.7,i.volume=.85;const s=window.speechSynthesis.getVoices().find(a=>a.lang.startsWith("en")&&(a.name.includes("Whisper")||a.name.includes("Daniel")||a.name.includes("Male")));s&&(i.voice=s),window.speechSynthesis.speak(i),this.playGlitchStatic(.12)}catch{}}playHeartMonitor(e=!1){if(!this.isMuted)try{const n=this.getContext(),i=n.currentTime;if(e){const r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.setValueAtTime(980,i),s.gain.setValueAtTime(.3,i),s.gain.linearRampToValueAtTime(.3,i+1.8),s.gain.exponentialRampToValueAtTime(.001,i+2.2),r.connect(s),s.connect(n.destination),r.start(i),r.stop(i+2.3)}else{const r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.setValueAtTime(980,i),s.gain.setValueAtTime(.25,i),s.gain.exponentialRampToValueAtTime(.001,i+.08),r.connect(s),s.connect(n.destination),r.start(i),r.stop(i+.09)}}catch{}}playThunderClap(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(220,n),i.frequency.exponentialRampToValueAtTime(40,n+.15),r.gain.setValueAtTime(.7,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.22),this.playThunder()}catch{}}playJumpScare(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(25,n+.8),r.gain.setValueAtTime(.8,n),r.gain.exponentialRampToValueAtTime(.001,n+.85),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.9),[880,932.3,1244.5,1318.5,1760].forEach((a,o)=>{const c=e.createOscillator(),u=e.createGain();c.type="sawtooth",c.frequency.setValueAtTime(a,n),c.frequency.linearRampToValueAtTime(a*1.15,n+.6),u.gain.setValueAtTime(.15/(o+1),n),u.gain.exponentialRampToValueAtTime(.001,n+.7),c.connect(u),u.connect(e.destination),c.start(n),c.stop(n+.75)}),this.playGlitchStatic(.5)}catch{}}playThunder(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=2.5,r=e.sampleRate*i,s=e.createBuffer(1,r,e.sampleRate),a=s.getChannelData(0);for(let h=0;h<r;h++)a[h]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=s;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(110,n),c.frequency.exponentialRampToValueAtTime(45,n+i);const u=e.createGain();u.gain.setValueAtTime(.01,n),u.gain.linearRampToValueAtTime(.35,n+.4),u.gain.exponentialRampToValueAtTime(.001,n+i),o.connect(c),c.connect(u),u.connect(e.destination),o.start(n)}catch{}}playDoorRattle(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[0,.08,.17].forEach(i=>{const r=e.createOscillator(),s=e.createGain();r.type="triangle",r.frequency.setValueAtTime(80,n+i),r.frequency.exponentialRampToValueAtTime(30,n+i+.06),s.gain.setValueAtTime(.3,n+i),s.gain.exponentialRampToValueAtTime(.001,n+i+.07),r.connect(s),s.connect(e.destination),r.start(n+i),r.stop(n+i+.08)})}catch{}}playHeartbeat(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[0,.18].forEach(i=>{const r=e.createOscillator(),s=e.createGain();r.type="sine",r.frequency.setValueAtTime(75,n+i),r.frequency.exponentialRampToValueAtTime(30,n+i+.12),s.gain.setValueAtTime(.5,n+i),s.gain.exponentialRampToValueAtTime(.001,n+i+.14),r.connect(s),s.connect(e.destination),r.start(n+i),r.stop(n+i+.15)})}catch{}}playGlitchStatic(e=.2){if(!this.isMuted)try{const n=this.getContext(),i=n.sampleRate*e,r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0);for(let u=0;u<i;u++)s[u]=Math.random()*2-1;const a=n.createBufferSource();a.buffer=r;const o=n.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2400,n.currentTime),o.Q.setValueAtTime(2.5,n.currentTime);const c=n.createGain();c.gain.setValueAtTime(.25,n.currentTime),c.gain.exponentialRampToValueAtTime(.01,n.currentTime+e),a.connect(o),o.connect(c),c.connect(n.destination),a.start()}catch{}}playBlackout(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(20,n+.6),r.gain.setValueAtTime(.4,n),r.gain.exponentialRampToValueAtTime(.001,n+.65),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.7),this.playGlitchStatic(.4)}catch{}}playHorrorStinger(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[110,116.54,155.56,220].forEach(r=>{const s=e.createOscillator(),a=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(r,n),a.gain.setValueAtTime(.12,n),a.gain.exponentialRampToValueAtTime(.001,n+1.8),s.connect(a),a.connect(e.destination),s.start(n),s.stop(n+1.9)})}catch{}}playHitmarker(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(2400,n),i.frequency.exponentialRampToValueAtTime(1400,n+.035),r.gain.setValueAtTime(.4,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.045)}catch{}}playRadioChirp(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[0,.04].forEach((i,r)=>{const s=e.createOscillator(),a=e.createGain();s.type="sine",s.frequency.setValueAtTime(r===0?1750:2100,n+i),a.gain.setValueAtTime(.18,n+i),a.gain.exponentialRampToValueAtTime(.001,n+i+.03),s.connect(a),a.connect(e.destination),s.start(n+i),s.stop(n+i+.035)}),this.playGlitchStatic(.06)}catch{}}playObjectiveComplete(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(32,n+.6),r.gain.setValueAtTime(.65,n),r.gain.exponentialRampToValueAtTime(.001,n+.7),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.75),[587.33,739.99,880].forEach((s,a)=>{const o=e.createOscillator(),c=e.createGain();o.type="triangle",o.frequency.setValueAtTime(s,n+.08),c.gain.setValueAtTime(.25/(a+1),n+.08),c.gain.exponentialRampToValueAtTime(.001,n+.9),o.connect(c),c.connect(e.destination),o.start(n+.08),o.stop(n+.95)})}catch{}}playNightVisionToggle(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;this.playTick(!0);const i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(3200,n+.02),i.frequency.exponentialRampToValueAtTime(8500,n+.28),r.gain.setValueAtTime(.12,n+.02),r.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r),r.connect(e.destination),i.start(n+.02),i.stop(n+.36)}catch{}}speakDistorted(e,n){let i=!1;const r=()=>{i||(i=!0,n&&n())};if(this.isMuted||!("speechSynthesis"in window)){setTimeout(r,1500);return}try{window.speechSynthesis.cancel();const s=new SpeechSynthesisUtterance(e);s.pitch=.45,s.rate=.75,s.volume=.9;const o=window.speechSynthesis.getVoices().find(p=>p.lang.startsWith("en")&&(p.name.includes("Male")||p.name.includes("Natural")));o&&(s.voice=o);const c=e.split(/\s+/).length,u=Math.max(3e3,c/1.5*1e3+1500),h=setTimeout(r,u);s.onend=()=>{clearTimeout(h),r()},s.onerror=()=>{clearTimeout(h),r()},window.speechSynthesis.speak(s),this.playGlitchStatic(.15)}catch{setTimeout(r,1500)}}}const ne=new Ry;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ny={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ke=(t,e)=>{const n=we.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},h)=>we.createElement("svg",{ref:h,...Ny,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Py(t)}`,o].join(" "),...u},[...e.map(([p,d])=>we.createElement(p,d)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Ke("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Ke("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=Ke("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=Ke("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=Ke("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=Ke("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Ke("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=Ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=Ke("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Ke("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=Ke("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=Ke("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=Ke("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=Ke("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Ke("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=Ke("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Ke("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=Ke("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Ke("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=Ke("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Ke("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Ke("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Ke("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Ke("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=Ke("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Ke("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=Ke("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=Ke("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=Ke("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Ke("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=Ke("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Ke("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=Ke("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=Ke("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Ke("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Ke("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=Ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=Ke("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),qy=({onComplete:t,audioMuted:e,onToggleMute:n})=>{const[i,r]=we.useState(0),[s,a]=we.useState(""),[o,c]=we.useState(!1),u=()=>{c(!0),ne.playTick(!0),r(1)};return we.useEffect(()=>{if(!o)return;let h;if(i===1)ne.playTick(!0),h=setTimeout(()=>{r(2)},3500);else if(i===2)ne.playTick(!0),h=setTimeout(()=>{r(3)},3500);else if(i===3)ne.speakDistorted("If you're hearing this... I'm already dead.",()=>{h=setTimeout(()=>{r(4)},1500)});else if(i===4)ne.speakDistorted("Don't trust the clocks.",()=>{h=setTimeout(()=>{r(5)},1200)});else if(i===5){ne.playGlitchStatic(.8);const p=["11:47 PM","12:03 AM","12:13 AM","12:17 AM"];let d=0;const m=setInterval(()=>{d<p.length?(a(p[d]),ne.playTick(!1),d++):(clearInterval(m),r(6))},650);return()=>clearInterval(m)}else i===6&&(ne.playHorrorStinger(),h=setTimeout(()=>{r(7)},3e3));return()=>clearTimeout(h)},[i,o]),l.jsxs("div",{className:"relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden crt-overlay crt-vignette",children:[l.jsxs("div",{className:"absolute top-6 right-6 flex items-center gap-3 z-50",children:[l.jsx("button",{onClick:n,className:"p-2 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-gray-400 hover:text-red-400 transition",title:e?"Unmute Sound":"Mute Sound",children:e?l.jsx(ux,{className:"w-5 h-5"}):l.jsx(Zs,{className:"w-5 h-5"})}),l.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-xs text-gray-400 hover:text-red-400 transition font-mono",children:[l.jsx(Xy,{className:"w-4 h-4"}),"SKIP INTRO"]})]}),o?l.jsxs("div",{className:"relative z-30 w-full max-w-3xl flex flex-col items-center justify-center min-h-[60vh] text-center font-mono select-none",children:[(i===1||i===2)&&l.jsxs("div",{className:"space-y-4",children:[l.jsx("span",{className:"text-6xl text-red-700 animate-ping inline-block",children:"·"}),l.jsx("p",{className:"text-xs text-gray-700 tracking-widest uppercase",children:"Tick."})]}),i===3&&l.jsx("div",{className:"space-y-4 animate-fade-in",children:l.jsx("p",{className:"text-2xl md:text-3xl text-gray-300 italic tracking-wider font-serif",children:`"If you're hearing this... I'm already dead."`})}),i===4&&l.jsx("div",{className:"space-y-4 animate-fade-in",children:l.jsx("p",{className:"text-2xl md:text-3xl text-red-500 font-bold tracking-widest uppercase",children:`"Don't trust the clocks."`})}),i===5&&l.jsx("div",{className:"space-y-4",children:l.jsx("p",{className:"text-6xl md:text-8xl font-black text-red-600 tracking-tighter filter drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]",children:s})}),i===6&&l.jsxs("div",{className:"space-y-6",children:[l.jsx("h2",{className:"text-3xl md:text-5xl font-black text-red-500 tracking-tight glitch-text","data-text":"ONE OF THESE TIMES NEVER HAPPENED.",children:"ONE OF THESE TIMES NEVER HAPPENED."}),l.jsx("p",{className:"text-sm text-gray-400 tracking-widest uppercase",children:"Which time is fake?"})]}),i===7&&l.jsxs("div",{className:"w-full max-w-xl p-6 border-2 border-red-800 bg-[#0a0709]/95 rounded-lg shadow-[0_0_50px_rgba(220,38,38,0.4)] text-left space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-red-950 pb-2",children:[l.jsxs("span",{className:"text-xs text-red-500 font-bold tracking-widest uppercase flex items-center gap-1.5",children:[l.jsx($s,{className:"w-4 h-4 text-red-500 animate-pulse"}),"OPERATION: BLACKWOOD PROTOCOL"]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300 font-mono font-bold",children:"CASE FILE 17-B"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[l.jsxs("div",{className:"p-3 bg-black/70 rounded border border-gray-800",children:[l.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"PRIMARY TARGET"}),l.jsx("span",{className:"text-white font-bold",children:"PROF. VIKRAM SEN"}),l.jsx("span",{className:"text-red-500 font-black block text-[10px] mt-0.5",children:"STATUS: DECEASED"})]}),l.jsxs("div",{className:"p-3 bg-black/70 rounded border border-gray-800",children:[l.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"LOCATION"}),l.jsx("span",{className:"text-white font-bold",children:"STUDY ROOM 17-B"}),l.jsx("span",{className:"text-amber-400 font-bold block text-[10px] mt-0.5",children:"BREACH: DEADBOLT SEALED"})]})]}),l.jsxs("div",{className:"p-3 bg-red-950/30 border-l-4 border-red-600 rounded text-xs space-y-1",children:[l.jsx("p",{className:"text-red-400 font-black uppercase tracking-wider",children:"TACTICAL WARNING:"}),l.jsx("p",{className:"text-gray-200",children:"The house isn't hiding evidence. The house is actively fabricating it."}),l.jsx("p",{className:"text-amber-300 font-bold",children:"Evidence timestamps were engineered BEFORE the murder."})]}),l.jsx("button",{onClick:()=>{ne.playRadioChirp(),ne.playHitmarker(),t()},className:"cursor-pointer w-full py-4 bg-red-700 hover:bg-red-600 text-white font-mono text-sm tracking-widest font-black rounded transition shadow-[0_0_25px_rgba(220,38,38,0.6)] flex items-center justify-center gap-2 uppercase",children:l.jsx("span",{children:"⚡ DEPLOY INVESTIGATION SQUAD ▶"})})]})]}):l.jsxs("div",{className:"relative z-30 text-center max-w-lg space-y-6 animate-pulse-slow",children:[l.jsx("div",{className:"inline-block p-3 border border-red-950/80 rounded-full bg-red-950/20 text-red-500 mb-2",children:l.jsx($s,{className:"w-10 h-10 animate-pulse"})}),l.jsx("h1",{className:"text-3xl font-mono tracking-widest text-red-600 font-bold",children:"PROMPT WAR 2.0"}),l.jsx("p",{className:"text-sm text-gray-400 font-mono tracking-wide",children:"THE HOUSE THAT REMEMBERS"}),l.jsx("p",{className:"text-xs text-gray-500 font-mono italic",children:"Click the button below to start the audio & investigative sequence."}),l.jsx("div",{children:l.jsx("button",{onClick:u,className:"cursor-pointer relative z-30 px-8 py-3.5 bg-red-700 hover:bg-red-600 border border-red-500 text-white font-mono text-sm tracking-wider font-bold rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] hover:shadow-[0_0_35px_rgba(229,9,20,0.8)]",children:"INITIALIZE INVESTIGATION ▶"})})]}),l.jsx("div",{className:"absolute bottom-4 text-[10px] text-gray-700 font-mono tracking-widest uppercase",children:"Blackwood Archive Security Mainframe • Node 17-B"})]})},Ky=["0 — Arrival","1 — The First Lie","2 — Five Suspects","3 — Impossible Timeline","4 — Dead Man's Message","5 — False Murderer","Final — The House Remembers"],$y=({currentRound:t,timeRemainingSeconds:e,isTimerRunning:n,onToggleTimer:i,audioMuted:r,onToggleMute:s,onOpenHostModal:a,onSelectRound:o})=>{const c=p=>{const d=Math.floor(p/60),m=p%60;return`${d.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`},u=e<300,h=e<600;return l.jsxs("header",{className:"w-full bg-[#0a0a0f] border-b border-red-950/80 px-4 py-3 select-none",children:[l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded bg-red-950/60 border border-red-800 flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(229,9,20,0.3)]",children:l.jsx($s,{className:"w-4 h-4 animate-pulse"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-xs font-mono font-bold tracking-widest text-red-500",children:"PROMPT WAR 2.0"}),l.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-950/40 text-red-300 border border-red-900/60",children:"CASE 17-B"})]}),l.jsx("p",{className:"text-[11px] text-gray-400 font-mono",children:"The House That Remembers"})]})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("div",{className:`flex items-center gap-2 px-4 py-1.5 rounded border font-mono tracking-wider transition ${u?"bg-red-950/70 border-red-500 text-red-400 animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]":h?"bg-amber-950/40 border-amber-600 text-amber-300":"bg-black/70 border-gray-800 text-gray-200"}`,children:[l.jsx(_o,{className:"w-4 h-4 opacity-75"}),l.jsx("span",{className:"text-xl font-bold font-mono tracking-widest",children:c(e)})]}),l.jsx("button",{onClick:i,className:"p-2 rounded border border-gray-800 bg-black/60 hover:border-gray-600 text-gray-300 hover:text-white transition",title:n?"Pause Timer":"Start Timer",children:n?l.jsx(Hy,{className:"w-4 h-4"}):l.jsx(ec,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 px-3 py-1.5 rounded border border-amber-500 bg-amber-950/40 hover:bg-amber-950/70 text-amber-300 text-xs font-mono font-bold transition shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95 cursor-pointer",title:"Judge / Quick Demo Controls & Speedrun Auto-Solve",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsx("span",{children:"⚡ JUDGE / DEMO"})]}),l.jsx("button",{onClick:s,className:"p-2 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-gray-400 hover:text-red-400 transition cursor-pointer",title:r?"Unmute Audio":"Mute Audio",children:r?l.jsx(ux,{className:"w-4 h-4"}):l.jsx(Zs,{className:"w-4 h-4"})}),l.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-red-900/60 bg-red-950/30 hover:bg-red-950/60 text-red-300 text-xs font-mono transition cursor-pointer",title:"Open Facilitator / Game Master HUD (Ctrl+Shift+H)",children:[l.jsx(cx,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"HOST HUD"})]})]})]}),l.jsx("div",{className:"max-w-7xl mx-auto mt-3 pt-2 border-t border-gray-900 flex items-center justify-between overflow-x-auto gap-1 text-[11px] font-mono no-scrollbar",children:Ky.map((p,d)=>{const m=t===d,x=t>d;return l.jsxs("button",{onClick:()=>o(d),className:`px-2.5 py-1 rounded whitespace-nowrap transition flex items-center gap-1.5 ${m?"bg-red-900/70 border border-red-500 text-white font-bold shadow-[0_0_10px_rgba(229,9,20,0.4)]":x?"bg-gray-900/70 border border-gray-800 text-gray-400 hover:border-gray-700":"text-gray-600 hover:text-gray-400"}`,children:[l.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${m?"bg-red-400 animate-ping":x?"bg-emerald-500":"bg-gray-700"}`}),p]},d)})})]})},Zy=({evidenceList:t,currentRound:e,audioSpeed:n,onSetAudioSpeed:i,audioRevealedSecret:r,onAudioRevealedSecret:s})=>{const[a,o]=we.useState(null),[c,u]=we.useState(!1),[h,p]=we.useState(!1),d=x=>{switch(x){case"photo":return l.jsx(Dy,{className:"w-4 h-4 text-cyan-400"});case"audio":return l.jsx(Zs,{className:"w-4 h-4 text-amber-400"});case"video":return l.jsx(Rd,{className:"w-4 h-4 text-purple-400"});case"cctv":return l.jsx(Ld,{className:"w-4 h-4 text-emerald-400"});case"log":return l.jsx(Ld,{className:"w-4 h-4 text-red-400"});default:return l.jsx(Ks,{className:"w-4 h-4 text-gray-400"})}},m=()=>{u(!0),ne.playGlitchStatic(.3),n===1?ne.speakDistorted("When the house stopped... someone started.",()=>{u(!1)}):(ne.playTick(!0),ne.speakDistorted("Someone started before the house stopped.",()=>{u(!1),r||(s(),ne.playHorrorStinger())}))};return l.jsxs("div",{className:"w-full bg-[#0d0d12] border border-gray-900 rounded-lg p-5 font-mono",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ks,{className:"w-5 h-5 text-red-500"}),l.jsx("h2",{className:"text-base font-bold text-gray-100 tracking-wider uppercase",children:"EVIDENCE DOSSIER — CASE FILE 17-B"})]}),l.jsxs("span",{className:"text-xs text-gray-400",children:["Showing unlocked items up to Round ",e]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:t.map(x=>{if(!(x.round<=e))return l.jsxs("div",{className:"p-4 rounded border border-gray-900 bg-black/40 text-gray-700 flex flex-col justify-between min-h-[120px] select-none",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-[11px] uppercase tracking-wider text-gray-700",children:"CLASSIFIED FILE"}),l.jsx(Nd,{className:"w-3.5 h-3.5 text-gray-800"})]}),l.jsxs("p",{className:"text-xs text-gray-600 italic",children:["Unlocks in Round ",x.round]})]},x.id);const g=x.id==="ev-4",f=x.id==="ev-12";return l.jsxs("div",{onClick:()=>{o(x),p(!1),ne.playTick(!1)},className:`p-4 rounded border transition cursor-pointer flex flex-col justify-between min-h-[140px] group ${f?"bg-red-950/20 border-red-800 hover:border-red-500":g&&r?"bg-amber-950/20 border-amber-700 hover:border-amber-500":"bg-black/60 border-gray-800 hover:border-gray-600"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-gray-300",children:[d(x.type),l.jsx("span",{className:"truncate font-semibold",children:x.title})]}),l.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800 shrink-0",children:["R",x.round]})]}),x.timestamp&&l.jsxs("p",{className:"text-[11px] text-red-400 font-bold mb-1",children:["[",x.timestamp,"]"]}),l.jsx("p",{className:"text-xs text-gray-400 line-clamp-2",children:x.content})]}),l.jsxs("div",{className:"mt-3 pt-2 border-t border-gray-900 flex items-center justify-between text-[10px] text-gray-500 group-hover:text-gray-300",children:[l.jsx("span",{children:"Click to inspect"}),l.jsx(Cd,{className:"w-3 h-3"})]})]},x.id)})}),a&&l.jsx("div",{className:"fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"w-full max-w-2xl bg-[#0a0a0f] border border-red-900/80 rounded-lg p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto crt-overlay",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[d(a.type),l.jsx("h3",{className:"text-base font-bold text-gray-100",children:a.title})]}),l.jsx("button",{onClick:()=>o(null),className:"px-2 py-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white text-xs",children:"CLOSE [ESC]"})]}),a.timestamp&&l.jsxs("div",{className:"inline-block px-2 py-1 bg-red-950/50 border border-red-900/80 rounded text-red-300 text-xs font-bold mb-4",children:["RECORDED TIMESTAMP: ",a.timestamp]}),l.jsx("div",{className:"p-4 rounded border border-gray-800 bg-black/50 text-sm text-gray-200 whitespace-pre-wrap leading-relaxed mb-4",children:a.content}),a.id==="ev-4"&&l.jsxs("div",{className:"p-4 rounded border border-amber-900/60 bg-amber-950/20 mb-4 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("span",{className:"text-xs text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(Zs,{className:"w-4 h-4"}),"MAGNETIC CASSETTE TAPE PLAYBACK ENGINE"]}),l.jsxs("span",{className:"text-xs text-amber-400",children:["Speed: ",n,"x"]})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[l.jsxs("button",{onClick:m,disabled:c,className:"flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs rounded transition",children:[l.jsx(ec,{className:"w-4 h-4"}),c?"PLAYING...":"PLAY CASSETTE REEL"]}),l.jsxs("div",{className:"flex items-center gap-1 border border-amber-900/60 rounded p-1 bg-black/40",children:[l.jsx("button",{onClick:()=>{i(1),ne.playTick()},className:`px-3 py-1 text-xs rounded transition ${n===1?"bg-amber-600 text-white font-bold":"text-gray-400 hover:text-white"}`,children:"1.0x (Normal)"}),l.jsx("button",{onClick:()=>{i(.5),ne.playTick(!0)},className:`px-3 py-1 text-xs rounded transition ${n===.5?"bg-amber-600 text-white font-bold":"text-gray-400 hover:text-white"}`,children:"0.5x (Slowdown / Sub-Bass)"})]})]}),r&&l.jsxs("div",{className:"p-3 bg-red-950/50 border-l-4 border-red-600 text-red-200 text-xs rounded",children:[l.jsx("p",{className:"font-bold",children:"⚠️ CRITICAL AUDITORY ANOMALY REVEALED:"}),l.jsx("p",{className:"italic mt-1",children:'"Someone started BEFORE the house stopped." — The attack occurred prior to the 12:13 AM blackout!'})]})]}),a.hiddenDetails&&l.jsxs("div",{className:"space-y-2",children:[l.jsxs("button",{onClick:()=>{p(!h),ne.playTick(!1)},className:"flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition",children:[l.jsx(_h,{className:"w-3.5 h-3.5"}),h?"HIDE FORENSIC SPECTRAL AUDIT":"REVEAL FORENSIC SPECTRAL AUDIT"]}),h&&l.jsxs("div",{className:"p-4 rounded border border-red-900/70 bg-red-950/30 text-xs text-red-200 leading-relaxed animate-fade-in",children:[l.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-red-400 uppercase tracking-wider mb-1",children:[l.jsx(Jl,{className:"w-4 h-4"}),"CONFIDENTIAL FORENSIC LOG:"]}),a.hiddenDetails]})]})]})})]})},tu={aarav:{id:"aarav",name:"Aarav Mehta",role:"Graduate Research Fellow",avatarIcon:"UserCheck",statement:"I entered the East Hallway at 11:47 PM to retrieve reference manuals. I never went near Professor Sen's private study.",cctvTimestamp:"11:47 PM",cctvAction:"Enters East Hallway carrying leather satchel",clockSource:"East Corridor Digital Terminal (Clock Delta: +0m, synced to Grandfather Clock)",twoTruths:["Entered the hallway at 11:47 PM exactly.","Did not enter the study through the front door."],realCrime:"Stole Professor Blackwood's confidential 20-year-old experiment logbook from the archive drawer.",lockQuestion:"What physical asset did Aarav remove from the East Wing, and what clock generated his 11:47 timestamp?",lockAnswer:"research notebook",lockHint:"Look closely at his satchel and the grandfather clock reference in the notebook."},riya:{id:"riya",name:"Riya Sharma",role:"Journalist & PhD Candidate",avatarIcon:"Radio",statement:"I was reviewing thesis records in the reading room. I heard footsteps around 11:50, but stayed put until the lights went dark.",cctvTimestamp:"11:52 PM",cctvAction:"Seen adjusting concealed lapel recorder outside Study antechamber",clockSource:"Reading Room Analog Wall Clock (-3m drift)",twoTruths:["Was recording audio in the perimeter of the study.","Heard voices arguing inside the study prior to midnight."],realCrime:"Planted illegal directional microphones to record Sen admitting to historical academic fraud.",lockQuestion:"What illicit equipment was Riya operating outside the Study, and what was her target?",lockAnswer:"audio recording",lockHint:"Inspect her lapel in the CCTV feed and the audio device frequency log."},kabir:{id:"kabir",name:"Kabir Varma",role:"Infrastructure & Security Admin",avatarIcon:"Terminal",statement:"The building network suffered a packet flood at 11:55 PM. I was trapped in the server bunker restoring breaker relays until 12:20 AM.",cctvTimestamp:"11:58 PM",cctvAction:"Enters Basement Server Hub using emergency maintenance master fob",clockSource:"Network Time Protocol (NTP) Mainframe Server",twoTruths:["Accessed the security mainframe terminal directly at 11:58 PM.","Triggered the complete building circuit trip at 12:13 AM."],realCrime:"Deliberately overloaded the transformer to trigger the 12:13 AM blackout so he could wipe CCTV logs.",lockQuestion:"What event did Kabir trigger at 12:13 AM, and what was his primary objective?",lockAnswer:"blackout",lockHint:"Look at the power breaker grid and his override command at 12:13 AM."},meera:{id:"meera",name:"Dr. Meera Patel",role:"Senior Associate Researcher",avatarIcon:"FileWarning",statement:"I was in the kitchen brewing herbal tea from 11:40 PM until after midnight. Ask anyone—I had zero reason to confront Vikram tonight.",cctvTimestamp:"12:03 AM",cctvAction:"Paces kitchen hallway in agitated state, holding crumpled parchment",clockSource:"Kitchen Industrial Timer (+16m manual offset)",twoTruths:["Was physically inside the kitchen at 12:03 AM.","Engaged in a violent confrontation with Vikram Sen at 11:47 PM."],realCrime:"Attacked Professor Sen in a rage at 11:47 PM, striking him with a heavy brass paperweight, believing she had killed him.",lockQuestion:"What did Meera falsely claim was her unbroken alibi between 11:40 PM and 12:10 AM?",lockAnswer:"kitchen",lockHint:"Check the contradiction between her statement and Study Audio Evidence 10."},dev:{id:"dev",name:'Devraj "Dev" Negi',role:"Chief Groundskeeper & Caretaker (28 yrs)",avatarIcon:"Key",statement:"I'm just the caretaker. I sweep floors, lock external gates, and stoke the boiler. I was in the basement maintenance bay all night.",cctvTimestamp:"12:08 AM",cctvAction:"Descends into lower maintenance tunnel with heavy iron wrench and master skeleton key",clockSource:"Mechanical Boiler Pressure Clock",twoTruths:["Knows every unmonitored blind spot and hidden servant passageway in Blackwood House.","Entered the study during the 12:13 AM blackout when Sen was still breathing."],realCrime:"First-degree murder. Smothered Professor Sen during the 12:13 AM blackout to avenge his child killed 20 years ago.",lockQuestion:"What hidden route did Dev use to enter the study undetected during the blackout?",lockAnswer:"hidden passage",lockHint:"Dev knows the house better than anyone. Notice the architectural blueprint servant tunnel."}},Qy=({suspectLocks:t,onSolveLock:e})=>{const[n,i]=we.useState("aarav"),[r,s]=we.useState(""),[a,o]=we.useState(""),[c,u]=we.useState(!1),h=tu[n],p=t[n],d=Object.values(t).filter(Boolean).length,m=x=>{x.preventDefault();const E=r.trim().toLowerCase(),g=h.lockAnswer.toLowerCase();E.includes(g)||g.includes(E)&&E.length>=4?(ne.playHorrorStinger(),e(n),o(""),s("")):(ne.playGlitchStatic(.2),o(`ACCESS DENIED: "${r}" does not resolve the secondary crime.`))};return l.jsxs("div",{className:"w-full bg-[#0d0d12] border border-gray-900 rounded-lg p-6 font-mono",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-gray-800 mb-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ox,{className:"w-5 h-5 text-red-500"}),l.jsx("h2",{className:"text-base font-bold text-gray-100 tracking-wider uppercase",children:"ROUND 2: FIVE SUSPECTS & FIVE LOCKS"})]}),l.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Break the alibis. All five are guilty of a crime, but none of those crimes is murder."})]}),l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded bg-black/60 border border-gray-800 text-xs",children:[l.jsx("span",{className:"text-gray-400",children:"LOCKS CLEARED:"}),l.jsxs("span",{className:"font-bold text-red-400",children:[d," / 5"]})]})]}),l.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-900 mb-6 no-scrollbar",children:Object.keys(tu).map(x=>{const E=tu[x],g=!t[x],f=n===x;return l.jsxs("button",{onClick:()=>{i(x),o(""),u(!1),ne.playTick(!1)},className:`flex items-center gap-2 px-4 py-2 rounded text-xs transition uppercase font-bold tracking-wider ${f?"bg-red-950/80 border border-red-600 text-red-100 shadow-[0_0_12px_rgba(229,9,20,0.3)]":"bg-black/50 border border-gray-800 text-gray-400 hover:text-gray-200"}`,children:[g?l.jsx(Nd,{className:"w-3.5 h-3.5 text-gray-500"}):l.jsx(Dd,{className:"w-3.5 h-3.5 text-emerald-400"}),l.jsx("span",{children:E.name.split(" ")[0]})]},x)})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[l.jsx("div",{className:"lg:col-span-7 space-y-4",children:l.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/50",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gray-800/80 mb-3",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-bold text-gray-100",children:h.name}),l.jsx("p",{className:"text-xs text-red-400 font-semibold",children:h.role})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"CCTV LOG"}),l.jsxs("span",{className:"text-xs font-bold text-amber-300",children:["[",h.cctvTimestamp,"]"]})]})]}),l.jsxs("div",{className:"space-y-1 mb-3",children:[l.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-bold",children:"OFFICIAL ALIBI DEPOSITION:"}),l.jsxs("p",{className:"text-xs text-gray-300 italic bg-gray-950/80 p-3 rounded border border-gray-900",children:['"',h.statement,'"']})]}),l.jsxs("div",{className:"p-3 bg-red-950/20 border-l-2 border-red-700 rounded text-xs mb-3 space-y-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-red-400 font-bold uppercase text-[10px]",children:[l.jsx(_o,{className:"w-3.5 h-3.5"}),"HARDWARE TIMESTAMP SOURCE (AUDIT TRAIL):"]}),l.jsx("p",{className:"text-gray-300 text-[11px]",children:h.clockSource})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-bold",children:"FORENSIC CONFIRMED TRUTHS (ROUND 2 PRINCIPLE):"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:h.twoTruths.map((x,E)=>l.jsxs("div",{className:"p-2.5 bg-black/70 rounded border border-gray-900 text-xs text-emerald-400/90 flex items-start gap-2",children:[l.jsx(qs,{className:"w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"}),l.jsx("span",{children:x})]},E))})]})]})}),l.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between p-5 rounded border border-gray-800 bg-black/70",children:[p?l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider",children:[l.jsx(Dd,{className:"w-4 h-4"}),"LOCK COMPROMISED — SECONDARY CRIME EXPOSED:"]}),l.jsxs("div",{className:"p-4 rounded border border-emerald-900/60 bg-emerald-950/20 text-xs text-emerald-200 leading-relaxed",children:[l.jsx("p",{className:"font-bold text-emerald-400 mb-1",children:"ACTUAL CRIME COMMITTED:"}),l.jsx("p",{children:h.realCrime})]}),l.jsxs("div",{className:"p-3 bg-red-950/30 border-l-2 border-red-600 text-red-300 text-xs rounded",children:[l.jsx("p",{className:"font-bold",children:"CORE DEDUCTION:"}),l.jsxs("p",{className:"mt-0.5",children:[h.name," lied to protect themselves from this crime—not because they killed Professor Sen."]})]})]}):l.jsxs("form",{onSubmit:m,className:"space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider",children:[l.jsx(Nd,{className:"w-4 h-4"}),"LOCK CIPHER CHALLENGE:"]}),l.jsx("p",{className:"text-xs text-gray-300 leading-relaxed",children:h.lockQuestion}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] text-gray-500 uppercase tracking-wider mb-1",children:"SUBMIT SECONDARY MOTIVE / CRIME KEYWORD:"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"text",value:r,onChange:x=>s(x.target.value),placeholder:`e.g. ${h.lockAnswer.slice(0,4)}...`,className:"w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-600 rounded px-3 py-2 text-sm text-gray-100 placeholder-gray-700 outline-none font-mono"}),l.jsx("button",{type:"submit",className:"px-4 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)] shrink-0 cursor-pointer",children:"DISARM"})]}),l.jsxs("div",{className:"space-y-1.5 pt-2",children:[l.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-bold block",children:"⚡ TACTICAL INTEL CHIPS (CLICK TO DISARM):"}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:[h.lockAnswer,n==="aarav"?"Poisoned Coffee":n==="riya"?"Blackmail Letter":n==="kabir"?"Cut Phone Lines":n==="meera"?"Fled Estate":"Swapped Keycards",n==="aarav"?"Altered Grant Will":n==="riya"?"Security Jammer":n==="kabir"?"Stole Passcode":n==="meera"?"Hidden Cyanide":"Broke Clock Pendulum"].map(x=>l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),s(x);const E=h.lockAnswer.toLowerCase();(x.toLowerCase().includes(E)||E.includes(x.toLowerCase()))&&(ne.playObjectiveComplete(),e(n),o(""),s(""))},className:"px-2.5 py-1 rounded bg-red-950/40 hover:bg-red-900 border border-red-800/80 text-[11px] text-red-200 font-bold transition hover:scale-105 cursor-pointer flex items-center gap-1",children:l.jsxs("span",{children:["► ",x]})},x))})]})]}),a&&l.jsxs("div",{className:"p-2.5 rounded bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2",children:[l.jsx(Jl,{className:"w-4 h-4 text-red-500 shrink-0"}),l.jsx("span",{children:a})]}),l.jsxs("div",{className:"flex items-center justify-between pt-2",children:[l.jsxs("button",{type:"button",onClick:()=>u(!c),className:"text-xs text-gray-500 hover:text-amber-400 flex items-center gap-1 transition",children:[l.jsx(zy,{className:"w-3.5 h-3.5"}),c?"Hide Hint":"Show Hint"]}),l.jsx("button",{type:"submit",className:"px-5 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)]",children:"DISARM LOCK"})]}),c&&l.jsxs("div",{className:"p-3 bg-amber-950/30 border border-amber-900/60 rounded text-amber-200/90 text-xs",children:[l.jsx("span",{className:"font-bold",children:"Investigator Hint:"})," ",h.lockHint]})]}),l.jsx("div",{className:"mt-4 pt-3 border-t border-gray-900 text-[11px] text-gray-500 italic",children:'"Never trust the first time. What clock generated this timestamp?"'})]})]})]})},Jy=({queries:t,onAddQuery:e,reasoningInspected:n,onInspectReasoning:i})=>{const[r,s]=we.useState(""),[a,o]=we.useState(!1),c=[{id:"reconcile",label:"⚡ RECONCILE 12:03 CCTV VS 12:05 AUDIO",prompt:"Reconcile Dr. Meera's 12:03 AM kitchen CCTV with Evidence 10 Study audio at 12:05 AM. Did she commit the crime?"},{id:"drift",label:"⚡ AUDIT KITCHEN CLOCK NTP SYNCHRONIZATION",prompt:"Audit whether the kitchen analog/industrial clock matches server NTP telemetry or has physical time drift."},{id:"kabir",label:"⚡ TRACE KABIR SECURITY TERMINAL INTRUSION",prompt:"Determine if Kabir's 11:58 PM security console access could alter raw analog study audio recordings."}],u=p=>{a||(o(!0),ne.playRadioChirp(),ne.playHitmarker(),setTimeout(()=>{e(p,`ASSISTANT EVALUATION:
TIMELINE STATUS: CONSISTENT
PROBABILITY: 94.2%

SYNTHESIS: Based on logged records, Dr. Meera Patel was in the kitchen corridor at 12:03 AM. Evidence 10 (Audio timestamp 12:05 AM) reflects acoustic reverberation or delayed playback. Kabir Varma's security log breach at 11:58 PM confirms root access, making him the sole subject capable of altering digital timelines.`,`[INTERNAL LLM REASONING TRACE]:
• Assumption 1: All CCTV hardware clocks are synchronized.
• Assumption 2: Kabir's security terminal breach equates to historical CCTV stream alteration.
• Assumption 3: Kitchen industrial clock operates on standard NTP protocol.

⚠️ VULNERABILITY: Model failed to verify physical clock drift. The AI is solving its own assumptions, not physical reality.`),o(!1),s(""),ne.playHorrorStinger()},900))},h=p=>{p.preventDefault(),r.trim()&&u(r)};return l.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-3 h-3 bg-red-600 rounded-sm animate-pulse"}),l.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase flex items-center gap-2",children:l.jsx("span",{children:"ROUND 3: THE IMPOSSIBLE TIMELINE // AI TRAP"})})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60",children:[l.jsx(vh,{className:"w-3 h-3 animate-spin"}),l.jsx("span",{children:"TACTICAL RECON STATUS: ANOMALY DETECTED"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"relative p-4 rounded bg-gradient-to-b from-black/90 to-[#0e0e14] border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)] group",children:[l.jsx("div",{className:"absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800 font-bold",children:"CAM_KITCHEN_04"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-black tracking-widest block mb-1",children:"[FEED A] VISUAL CCTV RECORD"}),l.jsx("div",{className:"text-sm font-black text-amber-300 mb-1 tracking-tight",children:"12:03:00 AM // DR. MEERA PATEL"}),l.jsxs("div",{className:"text-xs text-gray-300 bg-black/60 p-2.5 rounded border border-amber-950/60 flex items-center justify-between",children:[l.jsx("span",{children:"LOC: Kitchen Service Hallway"}),l.jsx("span",{className:"text-emerald-400 font-bold",children:"VERIFIED PIXELS"})]}),l.jsx("p",{className:"text-[11px] text-gray-400 mt-2",children:"Meera holds research notes. Claims she stayed until 12:10 AM."})]}),l.jsxs("div",{className:"relative p-4 rounded bg-gradient-to-b from-black/90 to-[#140b0e] border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)] group",children:[l.jsx("div",{className:"absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-700 font-bold animate-pulse",children:"ACOUSTIC_SENS_10"}),l.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-widest block mb-1",children:"[FEED B] STUDY AUDIO SENSOR"}),l.jsx("div",{className:"text-sm font-black text-red-400 mb-1 tracking-tight",children:"12:05:14 AM // PROFESSOR SEN"}),l.jsx("div",{className:"text-xs text-red-200 bg-red-950/40 p-2.5 rounded border border-red-900/60",children:`"Meera... you shouldn't have come... what did you do..."`}),l.jsx("p",{className:"text-[11px] text-red-300 mt-2 font-semibold",children:"Study sensor logs Sen's dying voice addressing Meera 134 seconds later!"})]})]}),l.jsxs("div",{className:"p-3 bg-red-950/30 border-l-4 border-red-600 rounded flex items-center justify-between text-xs text-red-300",children:[l.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[l.jsx(Jl,{className:"w-4 h-4 text-red-500 shrink-0"}),l.jsx("span",{children:"COGNITIVE DILEMMA: Can one person be in two locations simultaneously?"})]}),l.jsx("span",{className:"text-[10px] text-gray-400 hidden sm:inline",children:"USE 1-CLICK TACTICAL CHIPS BELOW"})]}),l.jsxs("div",{className:"p-4 rounded border border-cyan-950/80 bg-black/90 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-400 font-black uppercase tracking-wider",children:[l.jsx(Uy,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"INVESTIGATIVE AI ASSISTANT // TACTICAL TERMINAL"})]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800 font-bold",children:"CONFIDENCE: 94.2%"})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider font-bold",children:"⚡ 1-CLICK TACTICAL PROMPT OVERRIDES:"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:c.map(p=>l.jsxs("button",{type:"button",onClick:()=>{s(p.prompt),u(p.prompt)},disabled:a,className:"p-2 bg-[#0c121e] hover:bg-[#132238] border border-cyan-800/80 hover:border-cyan-400 rounded text-cyan-200 text-left text-[11px] font-bold transition flex items-center gap-1.5 shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer",children:[l.jsx(Qs,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),l.jsx("span",{className:"truncate",children:p.label})]},p.id))})]}),l.jsxs("form",{onSubmit:h,className:"flex gap-2 pt-1",children:[l.jsx("input",{type:"text",value:r,onChange:p=>s(p.target.value),placeholder:"Type custom prompt or select 1-click chip above...",className:"flex-1 bg-[#06080e] border border-gray-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-gray-200 placeholder-gray-700 outline-none"}),l.jsxs("button",{type:"submit",disabled:a||!r.trim(),className:"px-4 py-2 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs font-black rounded transition flex items-center gap-1.5 cursor-pointer shrink-0",children:[l.jsx(Gy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:a?"COMPUTING...":"DISPATCH"})]})]}),l.jsxs("div",{className:"space-y-3 pt-2",children:[t.map((p,d)=>l.jsxs("div",{className:"p-3.5 rounded border border-gray-800 bg-[#090b12] space-y-2.5",children:[l.jsxs("div",{className:"text-[11px] text-gray-400 flex items-center justify-between border-b border-gray-800 pb-1.5",children:[l.jsxs("span",{className:"font-bold text-gray-300 truncate",children:['PROMPT: "',p.prompt,'"']}),l.jsx("span",{className:"text-[9px] text-gray-500 shrink-0",children:p.timestamp})]}),l.jsx("div",{className:"text-xs text-gray-300 whitespace-pre-wrap leading-relaxed",children:p.response}),l.jsxs("div",{className:"pt-2 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[l.jsxs("button",{onClick:()=>{ne.playHitmarker(),ne.playRadioChirp(),i()},className:"px-3 py-1.5 rounded bg-red-950/80 hover:bg-red-900 border border-red-600 text-red-200 text-xs font-black transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95 cursor-pointer",children:[l.jsx(Ly,{className:"w-3.5 h-3.5 text-red-400"}),l.jsx("span",{children:n?"COLLAPSE MODEL TRACE":"⚠ OVERRIDE: EXPOSE 94.2% AI BIAS"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-[10px] text-amber-400 font-bold",children:"MODEL CONFIDENCE: 94.2%"}),n&&l.jsx("span",{className:"text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 animate-pulse",children:"+150 XP TRAP EVADED"})]})]}),n&&l.jsxs("div",{className:"p-3.5 bg-red-950/30 border border-red-700/80 rounded space-y-2.5 text-xs text-red-200 animate-fade-in",children:[l.jsxs("div",{className:"flex items-center gap-1 text-red-400 font-black uppercase text-[11px]",children:[l.jsx(Jl,{className:"w-4 h-4 text-red-400"}),l.jsx("span",{children:"COGNITIVE TRAP EXPOSED // WHY THE AI FAILED:"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 rounded bg-red-950/60 border border-red-900 text-red-300",children:[l.jsx("span",{className:"font-bold text-red-400 block mb-0.5",children:"❌ AI FALSE ASSUMPTION:"}),'"Assumed all hardware clocks were perfectly synced and Kabir edited historical CCTV footage."']}),l.jsxs("div",{className:"p-2.5 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300",children:[l.jsx("span",{className:"font-bold text-emerald-400 block mb-0.5",children:"🎯 PHYSICAL REALITY:"}),'"Kitchen clock ran 9 minutes slow! Meera was in the Study at 11:47 PM, not 12:03 AM."']})]})]})]},d)),t.length===0&&l.jsx("div",{className:"text-center py-5 text-xs text-gray-500 italic bg-black/40 rounded border border-gray-900",children:"Click any 1-Click Tactical Chip above to trigger the AI analysis."})]})]})]})},eS=({hiddenVideoUnlocked:t,onUnlockHiddenVideo:e,sliderDistinction:n,onChangeDistinction:i})=>{const[r,s]=we.useState(!1),[a,o]=we.useState(0),[c,u]=we.useState(!1),h=()=>{s(!0),o(1),ne.playHitmarker(),ne.playGlitchStatic(.4),setTimeout(()=>{ne.speakDistorted("If you're watching this, one of them killed me. But that's not what you should be looking for. The person who killed me isn't the person you're going to suspect.",()=>{o(2),ne.playGlitchStatic(.5),setTimeout(()=>{s(!1),t||(e(),ne.playHorrorStinger())},1200)})},1e3)},p=()=>{u(!0),ne.playHitmarker(),ne.playGlitchStatic(.6),ne.playTick(!0),setTimeout(()=>{u(!1)},7e3)},d=()=>{ne.playHitmarker(),ne.playRadioChirp(),i("attackTime","11:47 PM"),i("deathTime","12:15 AM (Blackout)"),i("discoveryTime","12:18 AM"),setTimeout(()=>{t||e(),ne.playObjectiveComplete()},400)};return l.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx(Rd,{className:"w-5 h-5 text-red-500 animate-pulse"}),l.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase",children:"ROUND 4: THE DEAD MAN'S MESSAGE // FORENSIC TIMELINE"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60",children:[l.jsx(vh,{className:"w-3 h-3 animate-spin"}),l.jsx("span",{children:"CHRONO TRIAD: ASYNC DETECTED"})]})]}),l.jsxs("div",{className:"p-3.5 bg-black/80 rounded border border-gray-800 space-y-2",children:[l.jsx("span",{className:"text-[10px] text-gray-400 uppercase tracking-widest font-bold block",children:"TACTICAL TIMELINE RADAR // CHRONOLOGICAL NODES"}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px]",children:[l.jsxs("div",{className:"p-2 rounded bg-amber-950/30 border border-amber-800/80",children:[l.jsx("div",{className:"text-amber-400 font-black",children:"11:47 PM"}),l.jsx("div",{className:"text-gray-300 font-bold truncate",children:"ASSAULT STRIKE"}),l.jsx("div",{className:"text-[9px] text-gray-400",children:"Meera strikes Sen"})]}),l.jsxs("div",{className:"p-2 rounded bg-cyan-950/30 border border-cyan-800/80",children:[l.jsx("div",{className:"text-cyan-400 font-black",children:"12:03 AM"}),l.jsx("div",{className:"text-gray-300 font-bold truncate",children:"ALIVE & BREATHING"}),l.jsx("div",{className:"text-[9px] text-gray-400",children:"Sen records video"})]}),l.jsxs("div",{className:"p-2 rounded bg-purple-950/30 border border-purple-800/80",children:[l.jsx("div",{className:"text-purple-400 font-black",children:"12:13 AM"}),l.jsx("div",{className:"text-gray-300 font-bold truncate",children:"BLACKOUT SABOTAGE"}),l.jsx("div",{className:"text-[9px] text-gray-400",children:"Kabir trips power"})]}),l.jsxs("div",{className:"p-2 rounded bg-red-950/60 border border-red-700 font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]",children:[l.jsx("div",{className:"text-red-400 font-black",children:"12:15 AM"}),l.jsx("div",{className:"text-white font-black truncate",children:"FATAL SMOTHERING"}),l.jsx("div",{className:"text-[9px] text-red-200",children:"Dev suffocates Sen"})]}),l.jsxs("div",{className:"p-2 rounded bg-emerald-950/30 border border-emerald-800/80 col-span-2 sm:col-span-1",children:[l.jsx("div",{className:"text-emerald-400 font-black",children:"12:18 AM"}),l.jsx("div",{className:"text-gray-300 font-bold truncate",children:"LOCKED DISCOVERY"}),l.jsx("div",{className:"text-[9px] text-gray-400",children:"Door breached"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/90 flex flex-col justify-between space-y-3",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gray-900 mb-2",children:[l.jsxs("span",{className:"text-xs text-red-400 font-black uppercase flex items-center gap-1.5",children:[l.jsx(Rd,{className:"w-3.5 h-3.5"}),"EVIDENCE 11: SEN_FINAL_1203.mp4"]}),l.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-900 font-bold",children:"12:03:00 AM (17 SEC)"})]}),l.jsxs("div",{className:"relative w-full h-44 bg-[#040407] rounded border border-gray-800 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay",children:[l.jsxs("div",{className:"absolute top-2 left-2 text-[9px] text-red-500 font-bold flex items-center gap-1",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-red-600 animate-ping"}),"REC 4K 60FPS"]}),l.jsx("div",{className:"absolute top-2 right-2 text-[9px] text-gray-500 font-mono",children:"OPTIC: STUDY_MON_01"}),a===0&&l.jsxs("div",{className:"space-y-2",children:[l.jsx("p",{className:"text-[11px] text-gray-400 font-mono",children:"PROFESSOR SEN'S FINAL RECORDING"}),l.jsxs("button",{onClick:h,disabled:r,className:"px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-black rounded flex items-center gap-2 mx-auto transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)]",children:[l.jsx(ec,{className:"w-3.5 h-3.5 fill-current"}),"EXECUTE PLAYBACK"]})]}),a===1&&l.jsxs("div",{className:"space-y-2 animate-fade-in px-3",children:[l.jsx("div",{className:"text-red-500 text-xs font-black animate-pulse",children:"● BUFFER PLAYBACK [12:03:00 AM]"}),l.jsx("p",{className:"text-xs text-gray-200 italic font-serif leading-relaxed",children:`"If you're watching this... one of them killed me. But the person who killed me isn't the person you're going to suspect."`}),l.jsx("p",{className:"text-[10px] text-gray-400 font-mono",children:"(Sen turns toward wall clock: reads 12:03 AM)"})]}),a===2&&l.jsxs("div",{className:"space-y-1 text-red-500 font-black font-mono",children:[l.jsx("p",{className:"text-base tracking-widest animate-glitch",children:"STREAM TERMINATED"}),l.jsx("p",{className:"text-[10px] text-gray-400",children:"FEED TIMESTAMP: 12:03:17 AM"})]})]})]}),l.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 text-[11px] text-gray-300 flex items-center justify-between",children:[l.jsx("span",{children:"🎯 CRITICAL FACT:"}),l.jsx("span",{className:"text-emerald-400 font-bold",children:"Sen was alive & speaking at 12:03 AM"})]})]}),l.jsxs("div",{className:`p-4 rounded border flex flex-col justify-between space-y-3 transition ${t?"border-red-900/80 bg-black/90":"border-gray-900 bg-black/40 opacity-70"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gray-900 mb-2",children:[l.jsxs("span",{className:"text-xs text-red-500 font-black uppercase flex items-center gap-1.5",children:[l.jsx(Oy,{className:"w-3.5 h-3.5"}),"RESTRICTED: PINHOLE_1147.mp4"]}),l.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-900 font-bold",children:"11:47:00 PM (7 SEC)"})]}),l.jsx("div",{className:"relative w-full h-44 bg-[#040407] rounded border border-red-950 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay",children:t?c?l.jsxs("div",{className:"space-y-2 animate-fade-in px-3",children:[l.jsx("div",{className:"text-xs text-red-500 font-black animate-pulse",children:"● PINHOLE RECONSTRUCTION (11:47 PM)"}),l.jsx("p",{className:"text-xs text-gray-200",children:"[00:03]: Dark figure enters Study. Wall clock reads 11:47 PM."}),l.jsx("p",{className:"text-xs text-red-400 font-bold",children:"[00:06]: Violent confrontation. Heavy brass thud. Figure flees!"})]}):l.jsxs("div",{className:"space-y-2",children:[l.jsx("p",{className:"text-[11px] text-red-400 font-black uppercase tracking-wider",children:"7-SECOND PINHOLE CLIP READY"}),l.jsxs("button",{onClick:p,className:"px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-black rounded flex items-center gap-2 mx-auto transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)]",children:[l.jsx(ec,{className:"w-3.5 h-3.5 fill-current"}),"PLAY 11:47 ASSAULT FOOTAGE"]})]}):l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-wider font-bold",children:"RESTRICTED ARCHIVE ENCRYPTED"}),l.jsx("p",{className:"text-[10px] text-gray-600",children:"Decrypts after playing Sen's video or verifying chronology"})]})})]}),l.jsxs("div",{className:"p-2.5 bg-red-950/30 rounded border border-red-900/60 text-[11px] text-red-200 flex items-center justify-between",children:[l.jsx("span",{children:"⚡ THE REVELATION:"}),l.jsx("span",{className:"font-bold",children:"Meera assaulted him at 11:47 PM, but did NOT kill him!"})]})]})]}),l.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/90 space-y-3",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-400 font-black uppercase tracking-wider",children:[l.jsx(_o,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"FORENSIC TIME TRIAD DIFFERENTIATION"})]}),l.jsxs("button",{type:"button",onClick:d,className:"px-3 py-1 bg-amber-950/70 hover:bg-amber-900 border border-amber-600 rounded text-amber-300 text-[11px] font-black transition flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer self-start sm:self-center",children:[l.jsx(Qs,{className:"w-3.5 h-3.5 text-amber-400"}),l.jsx("span",{children:"⚡ 1-CLICK AUTO-SYNC CHRONOLOGY"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[l.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"1. PHYSICAL ATTACK TIME:"}),l.jsx("input",{type:"text",value:n.attackTime,onChange:m=>i("attackTime",m.target.value),placeholder:"e.g. 11:47 PM",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-100 outline-none text-xs"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),i("attackTime","11:47 PM")},className:"w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-bold rounded border border-gray-700 transition cursor-pointer",children:"[ ⚡ 11:47 PM (Brass Strike) ]"})]}),l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-red-900/60 space-y-2",children:[l.jsx("label",{className:"text-red-400 font-bold block uppercase text-[11px]",children:"2. TRUE DEATH TIME:"}),l.jsx("input",{type:"text",value:n.deathTime,onChange:m=>i("deathTime",m.target.value),placeholder:"e.g. 12:15 AM (Blackout)",className:"w-full bg-black border border-red-900 focus:border-red-600 rounded px-2.5 py-1.5 text-red-200 outline-none font-bold text-xs"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),i("deathTime","12:15 AM (Blackout)")},className:"w-full py-1 bg-red-950/60 hover:bg-red-900 text-red-300 text-[10px] font-bold rounded border border-red-800 transition cursor-pointer",children:"[ ⚡ 12:15 AM (Blackout Smothering) ]"})]}),l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[l.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"3. DISCOVERY TIME:"}),l.jsx("input",{type:"text",value:n.discoveryTime,onChange:m=>i("discoveryTime",m.target.value),placeholder:"e.g. 12:18 AM",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-100 outline-none text-xs"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),i("discoveryTime","12:18 AM")},className:"w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-bold rounded border border-gray-700 transition cursor-pointer",children:"[ ⚡ 12:18 AM (Door Breached) ]"})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-between gap-3",children:[l.jsxs("button",{onClick:()=>{const m=n.attackTime.toLowerCase(),x=n.deathTime.toLowerCase(),E=n.discoveryTime.toLowerCase(),g=m.includes("11:47")||m.includes("11.47"),f=x.includes("12:15")||x.includes("12.15")||x.includes("blackout"),v=E.includes("12:18")||E.includes("12.18");g&&f&&v?(ne.playObjectiveComplete(),t||e()):ne.playGlitchStatic(.3)},className:"w-full sm:w-auto px-6 py-2.5 bg-red-800 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.5)] cursor-pointer active:scale-95",children:[l.jsx(qs,{className:"w-4 h-4"}),l.jsx("span",{children:"VERIFY CHRONOLOGY TRIAD"})]}),t&&l.jsxs("div",{className:"flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1.5 rounded border border-emerald-800 animate-pulse",children:[l.jsx(_h,{className:"w-4 h-4 text-emerald-400"}),l.jsx("span",{children:"TRIAD VERIFIED (+200 XP): Attack (11:47) ≠ Smothering (12:15) ≠ Discovery (12:18)"})]})]})]})]})},tS=({round5Choice:t,onAccuseMeera:e,onChallengeAi:n,printerLogUnlocked:i})=>{const r=()=>{ne.playHitmarker(),ne.playBlackout(),e()},s=()=>{ne.playHitmarker(),ne.playRadioChirp(),ne.playObjectiveComplete(),n()};return l.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx(jy,{className:"w-5 h-5 text-red-500 animate-pulse"}),l.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase",children:"ROUND 5: THE FALSE MURDERER // AI VERDICT"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),l.jsx("span",{children:"AI ACCUSATION CONFIDENCE: 97.8%"})]})]}),l.jsxs("div",{className:"p-4 rounded border border-red-900/60 bg-black/90 space-y-4",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-950 pb-3",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-widest font-black",children:"CLASSIFIED TARGET PROFILE // DESIGNATED CULPRIT"}),l.jsxs("h3",{className:"text-xl font-black text-red-500 tracking-tight flex items-center gap-2",children:[l.jsx("span",{children:"PRIMARY SUSPECT: DR. MEERA PATEL"}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800 uppercase",children:"TARGET IDENTIFIED"})]})]}),l.jsx("div",{className:"text-[11px] text-red-300 font-bold bg-red-950/80 border border-red-700 px-3 py-1.5 rounded self-start sm:self-center",children:"PROBABILITY MATRIX: 97.8%"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs",children:[l.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[l.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"01 // ALIBI COLLAPSE"}),l.jsx("p",{className:"text-gray-300 text-[11px]",children:"12:03 CCTV contradicted by 12:05 Study audio."})]}),l.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[l.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"02 // DIRECT ASSAULT"}),l.jsx("p",{className:"text-gray-300 text-[11px]",children:"11:47 PM pinhole video proves brass paperweight strike."})]}),l.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[l.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"03 // RESEARCH MOTIVE"}),l.jsx("p",{className:"text-gray-300 text-[11px]",children:"Sen threatened to terminate her grant and publish her findings."})]}),l.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[l.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"04 // LATENT PRINTS"}),l.jsx("p",{className:"text-gray-300 text-[11px]",children:"Matching fingerprints recovered from paperweight weapon."})]})]}),l.jsxs("div",{className:"pt-3 border-t border-red-950 flex flex-col sm:flex-row gap-3",children:[l.jsx("button",{onClick:r,disabled:t==="accused_meera",className:"flex-1 py-3 px-4 rounded bg-red-950 hover:bg-red-900 border border-red-700 text-red-200 font-black text-xs uppercase tracking-wider transition active:scale-95 disabled:opacity-50 cursor-pointer",children:"CONFIRM MEERA AS MURDERER"}),l.jsxs("button",{onClick:s,className:"flex-1 py-3 px-4 rounded bg-cyan-950 hover:bg-cyan-900 border border-cyan-500 text-cyan-200 font-black text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2",children:[l.jsx(Qs,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"⚡ CHALLENGE AI // AUDIT 11:41 PM PRE-CRIME SPOOL"})]})]})]}),t==="accused_meera"&&l.jsxs("div",{className:"p-4 rounded border border-red-600 bg-red-950/50 text-red-200 space-y-2 animate-fade-in",children:[l.jsxs("div",{className:"flex items-center gap-2 font-black text-red-400 text-xs sm:text-sm",children:[l.jsx(dx,{className:"w-5 h-5 text-red-500 shrink-0"}),l.jsx("span",{children:"❌ FATAL COGNITIVE ERROR // CONFIRMATION BIAS TRIGGERED"})]}),l.jsxs("p",{className:"text-xs leading-relaxed text-gray-300",children:["Meera ",l.jsx("span",{className:"text-red-400 font-bold underline",children:"assaulted"})," Sen at 11:47 PM, but Sen survived her strike and spoke on video at 12:03 AM! Meera was NOT in the study during the 12:13 AM blackout when the fatal smothering took place!"]}),l.jsx("button",{onClick:s,className:"text-xs font-black text-cyan-400 hover:text-cyan-300 underline cursor-pointer",children:"Click here to audit the laser printer spool and expose the real conspiracy →"})]}),i&&l.jsxs("div",{className:"p-4 rounded border border-cyan-600/80 bg-cyan-950/20 text-cyan-200 space-y-3 animate-fade-in shadow-[0_0_25px_rgba(6,182,212,0.2)]",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 font-black text-cyan-400 text-sm",children:[l.jsx(qs,{className:"w-5 h-5 text-cyan-400"}),l.jsx("span",{children:"INVESTIGATIVE BREAKTHROUGH: EVIDENCE 12 UNLOCKED"})]}),l.jsx("span",{className:"text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 animate-pulse",children:"+250 XP PRE-CRIME EXPOSED"})]}),l.jsxs("div",{className:"p-3.5 rounded border border-cyan-900 bg-black/80 font-mono text-xs space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-gray-800 pb-2",children:[l.jsxs("span",{className:"text-red-400 font-black flex items-center gap-1.5",children:[l.jsx(Vy,{className:"w-4 h-4"}),"THERMAL LASER SPOOL LOG: HP-LASER-STUDY"]}),l.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950 text-red-400 font-black border border-red-800",children:"11:41:22 PM (PRE-CRIME)"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-500 block",children:"DOCUMENT:"}),l.jsx("span",{className:"font-bold text-amber-300",children:'"MEERA_PATEL_INCIDENTS_SUMMARY.pdf"'})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-500 block",children:"CHRONO PARADOX:"}),l.jsx("span",{className:"font-bold text-red-400",children:"Printed 6 minutes BEFORE the 11:47 PM strike!"})]})]})]}),l.jsxs("div",{className:"p-3 bg-red-950/40 border-l-4 border-red-600 rounded text-xs text-red-200",children:[l.jsx("span",{className:"font-black text-red-400 block mb-0.5",children:"⚡ THE MASTER CONSPIRACY:"}),"Someone prepared the incriminating dossier ",l.jsx("span",{className:"underline font-bold",children:"BEFORE"})," the crime occurred! Meera was targeted as the designated scapegoat from the very start."]})]})]})};function nS(t){const e=[];let n=0;const i=100;(t.attacker||"").toLowerCase().includes("meera")?(n+=20,e.push("✓ Attacker identified: Dr. Meera Patel assaulted Sen at 11:47 PM (+20 pts)")):e.push("✗ Attacker incorrect: You failed to distinguish who initiated the 11:47 PM assault."),(t.murderer||"").toLowerCase().includes("dev")?(n+=25,e.push('✓ Murderer identified: Devraj "Dev" Negi committed the actual murder at 12:15 AM (+25 pts)')):e.push("✗ Murderer incorrect: Dev took advantage of the blackout to deliver the fatal blow."),(t.blackoutCauser||"").toLowerCase().includes("kabir")?(n+=15,e.push("✓ Blackout Operator identified: Kabir Varma tripped the transformers at 12:13 AM (+15 pts)")):e.push("✗ Blackout Operator incorrect: Kabir caused the blackout, not the murderer.");const o=(t.trueDeathTime||"").toLowerCase(),c=(t.attackTime||"").toLowerCase(),u=(t.falseEvidenceTime||"").toLowerCase(),h=o.includes("12:15")||o.includes("12:14")||o.includes("blackout"),p=c.includes("11:47"),d=u.includes("11:41");h&&p?(n+=15,e.push("✓ Timeline Breakdown: Correctly separated Attack Time (11:47 PM) from Death Time (12:15 AM) (+15 pts)")):e.push("✗ Timeline Breakdown: Conflated the initial 11:47 PM assault with the 12:15 AM death."),d?(n+=5,e.push("✓ Pre-Crime Evidence Log: Noticed the 11:41 PM printer log preceding the attack (+5 pts)")):e.push("! Pre-Crime Alert: Check the printer spool timestamp (11:41 PM) showing premeditated framing.");const m=(t.aiBiggestError||"").toLowerCase();m.includes("synchroniz")||m.includes("clock")||m.includes("assum")||m.includes("frame")||m.includes("attacker")||m.includes("conflat")?(n+=20,e.push("✓ AI Flaw Exposed: Recognized that the AI blindly assumed all CCTV clocks were synchronized and conflated suspicious framing with fatal culpability (+20 pts)")):e.push("✗ AI Flaw Missed: The AI equated evidence fabrication and assault with the actual fatal moment.");const E=n>=75;return{score:n,maxScore:i,feedback:e,passed:E}}const iS=({submission:t,onChangeSubmission:e,evaluated:n,score:i,feedback:r,onSetEvaluation:s,onTriggerClimax:a})=>{const[o,c]=we.useState(!1),u=d=>{c(!0),ne.playHitmarker(),ne.playRadioChirp(),setTimeout(()=>{const m=nS(d);s(!0,m.score,m.feedback),c(!1),m.passed?ne.playObjectiveComplete():ne.playGlitchStatic(.4)},800)},h=d=>{d.preventDefault(),u(t)},p=()=>{ne.playHitmarker(),ne.playRadioChirp();const d={attacker:"Dr. Meera Patel",murderer:'Devraj "Dev" Negi',blackoutCauser:"Kabir Varma",attackTime:"11:47 PM",trueDeathTime:"12:15 AM (During Blackout)",finalRecordingTime:"12:03 AM",discoveryTime:"12:18 AM",falseEvidenceTime:"11:41 PM (HP Laser Spool)",aiBiggestError:"The AI assumed all CCTV hardware clocks were synchronized, ignored the 9-minute kitchen clock drift, and falsely equated Meera's 11:47 PM assault with the fatal 12:15 AM smothering."};Object.entries(d).forEach(([m,x])=>{e(m,x)}),setTimeout(()=>{u(d)},300)};return l.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx(Id,{className:"w-5 h-5 text-red-500 animate-pulse"}),l.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase",children:"ROUND 6: THE MASTER FORENSIC MATRIX // CLIMAX READY"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-amber-400 font-bold bg-amber-950/40 px-2.5 py-1 rounded border border-amber-900/60",children:[l.jsx(vh,{className:"w-3 h-3 animate-spin"}),l.jsx("span",{children:"OBJECTIVE: ASSEMBLE TRUTH VECTOR"})]})]}),l.jsxs("div",{className:"p-3.5 rounded border border-red-900/60 bg-red-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ox,{className:"w-4 h-4 text-red-400 shrink-0"}),l.jsx("span",{className:"text-xs text-red-200 font-serif italic font-bold",children:'"THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."'})]}),l.jsx("span",{className:"text-[10px] text-gray-500 font-mono shrink-0",children:"INDICES: 11:41 → 11:47 → 12:03 → 12:13 → 12:15"})]}),l.jsxs("div",{className:"p-3 bg-gradient-to-r from-red-950/80 via-black to-red-950/80 rounded border border-red-600 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_0_20px_rgba(229,9,20,0.3)]",children:[l.jsxs("div",{className:"text-xs text-red-200",children:[l.jsx("span",{className:"font-black text-red-400 block",children:"⚡ HIGH-SPEED TACTICAL SOLVER:"}),"Auto-inject the verified deduction matrix to dismantle the AI trap with 1 click."]}),l.jsxs("button",{type:"button",onClick:p,className:"w-full sm:w-auto px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-wider rounded transition shadow-[0_0_20px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0",children:[l.jsx(Qs,{className:"w-4 h-4 fill-current"}),l.jsx("span",{children:"INJECT MASTER EXPLOIT"})]})]}),l.jsxs("form",{onSubmit:h,className:"p-4 rounded border border-gray-800 bg-black/90 space-y-4",children:[l.jsxs("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider font-black flex items-center gap-1.5 border-b border-gray-800 pb-2",children:[l.jsx(Ld,{className:"w-3.5 h-3.5 text-red-500"}),l.jsx("span",{children:"TACTICAL SUSPECT & TIMELINE RECONSTRUCTION"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[l.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"1. PHYSICAL ATTACKER (11:47 PM):"}),l.jsx("input",{type:"text",value:t.attacker||"",onChange:d=>e("attacker",d.target.value),placeholder:"e.g. Dr. Meera Patel",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-200 text-xs outline-none",required:!0}),l.jsxs("div",{className:"flex gap-1.5 pt-1",children:[l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("attacker","Dr. Meera Patel")},className:"flex-1 py-1 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/80 rounded text-[10px] text-amber-300 font-bold transition cursor-pointer",children:"[ ⬡ Meera ]"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("attacker","Kabir Varma")},className:"flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer",children:"[ Kabir ]"})]})]}),l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-red-900/80 space-y-2 shadow-[0_0_10px_rgba(239,68,68,0.15)]",children:[l.jsx("label",{className:"text-red-400 font-black block uppercase text-[11px]",children:"2. TRUE MURDERER (12:15 AM):"}),l.jsx("input",{type:"text",value:t.murderer||"",onChange:d=>e("murderer",d.target.value),placeholder:"e.g. Devraj 'Dev' Negi",className:"w-full bg-black border border-red-900 focus:border-red-600 rounded px-2.5 py-1.5 text-red-200 font-black text-xs outline-none",required:!0}),l.jsxs("div",{className:"flex gap-1.5 pt-1",children:[l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("murderer",'Devraj "Dev" Negi')},className:"flex-1 py-1 bg-red-950/80 hover:bg-red-900 border border-red-700 rounded text-[10px] text-red-200 font-black transition cursor-pointer shadow-sm",children:"[ ⬡ Dev Negi ]"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("murderer","Dr. Meera Patel")},className:"flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer",children:"[ Meera ]"})]})]}),l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[l.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"3. BLACKOUT OPERATOR (12:13 AM):"}),l.jsx("input",{type:"text",value:t.blackoutCauser||"",onChange:d=>e("blackoutCauser",d.target.value),placeholder:"e.g. Kabir Varma",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-200 text-xs outline-none",required:!0}),l.jsxs("div",{className:"flex gap-1.5 pt-1",children:[l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("blackoutCauser","Kabir Varma")},className:"flex-1 py-1 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/80 rounded text-[10px] text-purple-300 font-bold transition cursor-pointer",children:"[ ⬡ Kabir ]"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("blackoutCauser","Devraj Negi")},className:"flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer",children:"[ Dev ]"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs",children:[l.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5",children:[l.jsx("label",{className:"text-[10px] text-gray-400 uppercase font-bold block",children:"PRE-CRIME PRINT:"}),l.jsx("input",{type:"text",value:t.falseEvidenceTime||"",onChange:d=>e("falseEvidenceTime",d.target.value),placeholder:"11:41 PM",className:"w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("falseEvidenceTime","11:41 PM")},className:"w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer",children:"[ ⚡ 11:41 PM ]"})]}),l.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5",children:[l.jsx("label",{className:"text-[10px] text-gray-400 uppercase font-bold block",children:"ASSAULT TIME:"}),l.jsx("input",{type:"text",value:t.attackTime||"",onChange:d=>e("attackTime",d.target.value),placeholder:"11:47 PM",className:"w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("attackTime","11:47 PM")},className:"w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer",children:"[ ⚡ 11:47 PM ]"})]}),l.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-red-900/60 space-y-1.5",children:[l.jsx("label",{className:"text-[10px] text-red-400 uppercase font-black block",children:"TRUE DEATH TIME:"}),l.jsx("input",{type:"text",value:t.trueDeathTime||"",onChange:d=>e("trueDeathTime",d.target.value),placeholder:"12:15 AM",className:"w-full bg-black border border-red-900 rounded px-2 py-1 text-xs text-red-200 font-bold outline-none"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("trueDeathTime","12:15 AM")},className:"w-full py-0.5 bg-red-950 text-red-300 text-[9px] rounded border border-red-800 cursor-pointer",children:"[ ⚡ 12:15 AM ]"})]}),l.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5",children:[l.jsx("label",{className:"text-[10px] text-gray-400 uppercase font-bold block",children:"DISCOVERY TIME:"}),l.jsx("input",{type:"text",value:t.discoveryTime||"",onChange:d=>e("discoveryTime",d.target.value),placeholder:"12:18 AM",className:"w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("discoveryTime","12:18 AM")},className:"w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer",children:"[ ⚡ 12:18 AM ]"})]})]}),l.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-cyan-950 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("label",{className:"text-[11px] text-cyan-400 uppercase font-black tracking-wider block",children:"4. AI'S CRITICAL COGNITIVE FLAW:"}),l.jsx("button",{type:"button",onClick:()=>{ne.playHitmarker(),e("aiBiggestError","The AI assumed all CCTV clocks were synchronized and conflated premeditated framing/assault with the actual fatal smothering.")},className:"text-[10px] text-cyan-400 hover:text-cyan-300 underline cursor-pointer",children:"[ ⚡ 1-Click Inject Flaw Description ]"})]}),l.jsx("textarea",{rows:2,value:t.aiBiggestError||"",onChange:d=>e("aiBiggestError",d.target.value),placeholder:"Explain why the AI produced its flawed 97.8% Meera verdict...",className:"w-full bg-black border border-gray-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-gray-200 outline-none",required:!0})]}),l.jsxs("button",{type:"submit",disabled:o,className:"w-full py-3 bg-red-800 hover:bg-red-700 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95",children:[l.jsx(Wy,{className:"w-4 h-4"}),l.jsx("span",{children:o?"RUNNING FORENSIC RECONSTRUCTION MATRIX...":"EVALUATE FINAL BOSS SUBMISSION"})]})]}),n&&l.jsxs("div",{className:`p-5 rounded border space-y-4 animate-fade-in shadow-[0_0_30px_rgba(0,0,0,0.8)] ${i>=75?"border-emerald-600 bg-emerald-950/20":"border-red-700 bg-red-950/30"}`,children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[i>=75?l.jsx("div",{className:"p-2 rounded-full bg-emerald-950 border border-emerald-500",children:l.jsx(qs,{className:"w-6 h-6 text-emerald-400"})}):l.jsx("div",{className:"p-2 rounded-full bg-red-950 border border-red-500",children:l.jsx(dx,{className:"w-6 h-6 text-red-500"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-black text-gray-100 uppercase tracking-wider",children:i>=75?"TRUTH FULLY RECONSTRUCTED":"INCOMPLETE RECONSTRUCTION"}),l.jsx("p",{className:"text-xs text-gray-400",children:"Passing Threshold: 75 / 100"})]})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("span",{className:"text-3xl font-black font-mono tracking-wider text-emerald-400",children:i}),l.jsx("span",{className:"text-xs text-gray-500 font-mono",children:" / 100"}),i>=75&&l.jsx("div",{className:"text-[10px] text-emerald-400 font-bold uppercase animate-pulse",children:"+500 XP CASE SOLVED"})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:r.map((d,m)=>l.jsx("div",{className:`p-2.5 rounded font-mono text-[11px] ${d.startsWith("✓")?"bg-emerald-950/60 text-emerald-300 border border-emerald-900":d.startsWith("!")?"bg-amber-950/60 text-amber-300 border border-amber-900":"bg-red-950/60 text-red-300 border border-red-900"}`,children:d},m))}),i>=75&&l.jsxs("div",{className:"pt-4 border-t border-gray-800 text-center space-y-3",children:[l.jsx("p",{className:"text-xs text-emerald-300 font-bold tracking-widest uppercase",children:"THE HOUSE HAS SURRENDERED ITS FINAL MEMORY."}),l.jsxs("button",{onClick:a,className:"w-full sm:w-auto px-10 py-3.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_35px_rgba(229,9,20,0.8)] animate-pulse cursor-pointer flex items-center justify-center gap-2 mx-auto",children:[l.jsx(Fy,{className:"w-4 h-4"}),l.jsx("span",{children:"TRIGGER 60-SECOND HORROR CLIMAX REVEAL ▶"})]})]})]})]})},rS=({onResetGame:t})=>{const[e,n]=we.useState(0);return we.useEffect(()=>{ne.playBlackout();const i=setTimeout(()=>{ne.playTick(!0),n(1)},3500),r=setTimeout(()=>{ne.playGlitchStatic(.6),ne.playTick(!0),n(2)},9e3),s=setTimeout(()=>{ne.playGlitchStatic(.4),n(3)},13500),a=setTimeout(()=>{ne.playGlitchStatic(.4),n(4)},18e3),o=setTimeout(()=>{ne.playGlitchStatic(.4),n(5)},22500),c=setTimeout(()=>{ne.playGlitchStatic(.4),n(6)},27e3),u=setTimeout(()=>{ne.playHorrorStinger(),n(7)},32e3),h=setTimeout(()=>{n(8)},39e3),p=setTimeout(()=>{ne.playGlitchStatic(.5),n(9)},45e3),d=setTimeout(()=>{ne.playHorrorStinger(),n(10)},51e3);return()=>{[i,r,s,a,o,c,u,h,p,d].forEach(clearTimeout)}},[]),l.jsxs("div",{className:"fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden crt-overlay crt-vignette font-mono",children:[e===0&&l.jsxs("div",{className:"text-center space-y-6 animate-pulse",children:[l.jsx("span",{className:"text-8xl text-red-900 block font-black",children:"·"}),l.jsx("p",{className:"text-xs text-gray-700 uppercase tracking-widest",children:"BLACKOUT PROTOCOL INITIATED..."})]}),e===1&&l.jsxs("div",{className:"space-y-4 text-center",children:[l.jsx("div",{className:"text-5xl md:text-7xl font-bold tracking-widest text-red-500 animate-pulse",children:"11:47 PM"}),l.jsx("div",{className:"text-4xl text-gray-600",children:"12:03 AM"}),l.jsx("div",{className:"text-4xl text-gray-700",children:"12:13 AM"}),l.jsx("div",{className:"text-4xl text-gray-800",children:"12:17 AM"})]}),e===2&&l.jsxs("div",{className:"space-y-4 text-center",children:[l.jsx("div",{className:"text-xs text-red-500 uppercase tracking-widest font-bold",children:"THE TIME THAT TRULY MATTERED:"}),l.jsx("div",{className:"text-7xl md:text-9xl font-black text-red-600 tracking-tighter filter drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-bounce",children:"12:15 AM"}),l.jsx("p",{className:"text-sm text-gray-400 uppercase tracking-widest",children:"(The moment of death in total darkness)"})]}),e===3&&l.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[l.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-red-700 bg-red-950/40 flex items-center justify-center text-4xl font-bold text-red-300",children:"M"}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"DR. MEERA PATEL"}),l.jsx("div",{className:"text-2xl md:text-3xl font-black text-red-500 tracking-widest uppercase",children:"SHE ATTACKED HIM."}),l.jsx("p",{className:"text-xs text-gray-400",children:"Confronted Sen at 11:47 PM. Believed she killed him. Fled the room."})]}),e===4&&l.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[l.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-amber-600 bg-amber-950/40 flex items-center justify-center text-4xl font-bold text-amber-300",children:"K"}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"KABIR VARMA"}),l.jsx("div",{className:"text-2xl md:text-3xl font-black text-amber-400 tracking-widest uppercase",children:"HE CAUSED THE BLACKOUT."}),l.jsx("p",{className:"text-xs text-gray-400",children:"Overloaded the transformer at 12:13 AM to wipe security telemetry."})]}),e===5&&l.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[l.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-cyan-600 bg-cyan-950/40 flex items-center justify-center text-4xl font-bold text-cyan-300",children:"R"}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"RIYA SHARMA"}),l.jsx("div",{className:"text-2xl md:text-3xl font-black text-cyan-400 tracking-widest uppercase",children:"SHE KNEW THE TRUTH."}),l.jsx("p",{className:"text-xs text-gray-400",children:"Planted wiretaps to extort Sen over the historic cover-up."})]}),e===6&&l.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[l.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-purple-600 bg-purple-950/40 flex items-center justify-center text-4xl font-bold text-purple-300",children:"A"}),l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"AARAV MEHTA"}),l.jsx("div",{className:"text-2xl md:text-3xl font-black text-purple-400 tracking-widest uppercase",children:"HE STOLE THE EVIDENCE."}),l.jsx("p",{className:"text-xs text-gray-400",children:"Slipped into the East Wing at 11:47 PM to steal Blackwood's research journals."})]}),e===7&&l.jsxs("div",{className:"text-center space-y-8 animate-fade-in",children:[l.jsx("div",{className:"w-36 h-36 mx-auto rounded-full border-4 border-red-500 bg-black flex items-center justify-center text-5xl font-black text-red-500 shadow-[0_0_50px_rgba(255,0,0,0.8)]",children:"DEV"}),l.jsx("h2",{className:"text-4xl md:text-5xl font-black text-gray-100 tracking-tight",children:"DEVRAJ NEGI"}),l.jsx("div",{className:"text-3xl md:text-5xl font-black text-red-600 tracking-widest uppercase glitch-text","data-text":"HE WAITED.",children:"HE WAITED."}),l.jsx("p",{className:"text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed",children:"Twenty years ago, Professor Sen covered up the experiment that killed Dev's child. Dev didn't plan to kill Sen that night—until he found Sen wounded. During the blackout, Dev used the servant passage to end his life at 12:15 AM."})]}),e===8&&l.jsxs("div",{className:"text-center space-y-4 animate-fade-in",children:[l.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-gray-100 tracking-widest uppercase",children:"YOU SOLVED THE MURDER."}),l.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-wider",children:"All layers decrypted. All cognitive traps dismantled."})]}),e===9&&l.jsx("div",{className:"text-center space-y-6 animate-pulse",children:l.jsx("h2",{className:"text-3xl md:text-5xl font-black text-red-500 tracking-widest uppercase",children:"BUT WHO KILLED THE FIRST VICTIM?"})}),e===10&&l.jsxs("div",{className:"max-w-2xl text-center space-y-6 p-8 border border-red-900/80 bg-black/90 rounded-lg shadow-[0_0_50px_rgba(139,0,0,0.5)]",children:[l.jsx("div",{className:"text-xs text-red-500 font-bold tracking-widest uppercase",children:"BLACKWOOD ARCHIVES • CASE FILE 01-A"}),l.jsx("div",{className:"text-4xl md:text-5xl font-black text-gray-100 font-serif",children:"PROFESSOR BLACKWOOD"}),l.jsx("p",{className:"text-lg md:text-xl font-bold text-red-400 uppercase tracking-wider",children:"THE MURDER YOU JUST SOLVED WAS NOT THE FIRST ONE."}),l.jsx("div",{className:"p-4 bg-red-950/30 border border-red-900/60 rounded text-xs text-gray-300 leading-relaxed font-mono",children:"Twenty years ago, Professor Blackwood discovered the truth about the forbidden experiments. He vanished into the foundation walls of this very house. Some say the clocks didn't stop ticking when Sen died—they stopped when Blackwood was buried."}),l.jsx("div",{className:"pt-4",children:l.jsxs("button",{onClick:t,className:"px-6 py-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-200 font-bold text-xs uppercase tracking-wider rounded transition flex items-center gap-2 mx-auto",children:[l.jsx(lx,{className:"w-4 h-4"}),"RESET INVESTIGATION TERMINAL"]})})]})]})},sS=({isOpen:t,onClose:e,currentRound:n,onSelectRound:i,timeRemaining:r,onAdjustTime:s,onUnlockAllLocks:a,onUnlockPrinterLog:o,onUnlockHiddenVideo:c,onTriggerBlackout:u,onTriggerClimax:h,onResetGame:p,onAutoSolveAll:d})=>t?l.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-mono select-none",children:l.jsxs("div",{className:"w-full max-w-2xl bg-[#0e0e14] border-2 border-red-800 rounded-lg p-6 shadow-[0_0_60px_rgba(229,9,20,0.4)] max-h-[90vh] overflow-y-auto crt-overlay text-gray-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(cx,{className:"w-5 h-5 text-red-500"}),l.jsx("h2",{className:"text-base font-bold text-gray-100 uppercase tracking-wider",children:"GAME MASTER / FACILITATOR OVERRIDE HUD"})]}),l.jsx("button",{onClick:e,className:"p-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition cursor-pointer",children:l.jsx(Yy,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"p-4 rounded border-2 border-amber-600/80 bg-gradient-to-r from-amber-950/40 via-black to-red-950/40 mb-6 space-y-3 shadow-[0_0_25px_rgba(245,158,11,0.2)]",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("span",{className:"text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2",children:[l.jsx(Qs,{className:"w-4 h-4 text-amber-400 fill-amber-400 animate-pulse"}),"JUDGE & EVALUATOR SHORTCUTS (1-CLICK SPEEDRUN):"]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-bold",children:"SPEEDRUN TOOLS"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[d&&l.jsxs("button",{type:"button",onClick:()=>{d(),e()},className:"p-3 rounded bg-amber-950/70 hover:bg-amber-900 border border-amber-500 text-amber-200 font-black transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95",children:[l.jsx(qs,{className:"w-4 h-4 text-amber-400 shrink-0"}),l.jsxs("div",{className:"text-left",children:[l.jsx("span",{className:"block text-[11px]",children:"⚡ AUTO-SOLVE ENTIRE CASE"}),l.jsx("span",{className:"text-[9px] text-amber-300 font-normal",children:"Unlocks all clues, solves 100/100 matrix"})]})]}),l.jsxs("button",{type:"button",onClick:()=>{e(),h()},className:"p-3 rounded bg-red-950/80 hover:bg-red-900 border border-red-600 text-red-200 font-black transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95",children:[l.jsx(Id,{className:"w-4 h-4 text-red-400 shrink-0"}),l.jsxs("div",{className:"text-left",children:[l.jsx("span",{className:"block text-[11px]",children:"🔥 LAUNCH 60-SEC CLIMAX"}),l.jsx("span",{className:"text-[9px] text-red-300 font-normal",children:"Plays blackout & full epilogue reveal"})]})]})]})]}),l.jsxs("div",{className:"space-y-2 mb-6",children:[l.jsx("span",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider block",children:"JUMP TO ROUND BENCHMARK:"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",children:[{id:0,label:"0. Arrival (Intro)"},{id:1,label:"1. First Lie"},{id:2,label:"2. Five Locks"},{id:3,label:"3. AI Trap"},{id:4,label:"4. Dead Man"},{id:5,label:"5. False Culprit"},{id:6,label:"6. Final Boss"}].map(m=>l.jsx("button",{onClick:()=>{i(m.id),ne.playTick(!1)},className:`px-3 py-2 rounded text-left transition font-semibold ${n===m.id?"bg-red-800 text-white border border-red-500 shadow-[0_0_10px_rgba(229,9,20,0.5)]":"bg-black/60 border border-gray-800 text-gray-400 hover:text-gray-100 hover:border-gray-700"}`,children:m.label},m.id))})]}),l.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/50 space-y-3 mb-6",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("span",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5",children:[l.jsx(_o,{className:"w-4 h-4 text-amber-400"}),"SESSION TIMER ADJUSTMENT:"]}),l.jsxs("span",{className:"text-sm font-bold text-amber-300",children:[Math.floor(r/60),"m ",r%60,"s remaining"]})]}),l.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[l.jsx("button",{onClick:()=>s(-300),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"-5 Minutes"}),l.jsx("button",{onClick:()=>s(-60),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"-1 Minute"}),l.jsx("button",{onClick:()=>s(60),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"+1 Minute"}),l.jsx("button",{onClick:()=>s(300),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"+5 Minutes"})]})]}),l.jsxs("div",{className:"space-y-3 mb-6",children:[l.jsx("span",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider block",children:"ROOM OVERRIDES & SFX TRIGGERS:"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[l.jsxs("button",{onClick:()=>{a(),ne.playHorrorStinger()},className:"p-3 rounded border border-gray-800 bg-black/60 hover:border-emerald-700 text-left text-gray-300 hover:text-emerald-300 transition flex items-center gap-2",children:[l.jsx(Dd,{className:"w-4 h-4 text-emerald-400 shrink-0"}),l.jsx("span",{children:"Unlock All 5 Suspect Locks"})]}),l.jsxs("button",{onClick:()=>{o(),ne.playTick(!0)},className:"p-3 rounded border border-gray-800 bg-black/60 hover:border-cyan-700 text-left text-gray-300 hover:text-cyan-300 transition flex items-center gap-2",children:[l.jsx(qs,{className:"w-4 h-4 text-cyan-400 shrink-0"}),l.jsx("span",{children:"Force Unlock 11:41 PM Printer Log"})]}),l.jsxs("button",{onClick:()=>{u(),ne.playBlackout()},className:"p-3 rounded border border-gray-800 bg-black/60 hover:border-amber-700 text-left text-gray-300 hover:text-amber-300 transition flex items-center gap-2",children:[l.jsx(Qs,{className:"w-4 h-4 text-amber-400 shrink-0"}),l.jsx("span",{children:"Trigger Blackout SFX & Lights Out"})]}),l.jsxs("button",{onClick:()=>{e(),h()},className:"p-3 rounded border border-red-900 bg-red-950/40 hover:bg-red-950 text-left text-red-200 transition flex items-center gap-2",children:[l.jsx(Id,{className:"w-4 h-4 text-red-500 shrink-0"}),l.jsx("span",{children:"Launch 60-Sec Horror Climax Reveal"})]})]})]}),l.jsxs("div",{className:"p-4 rounded border border-red-950 bg-black/80 text-xs space-y-1.5 text-gray-400 mb-5",children:[l.jsx("p",{className:"text-red-400 font-bold uppercase text-[10px] tracking-wider mb-2",children:"FACILITATOR CHEAT SHEET:"}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"text-gray-200 font-semibold",children:"11:41 PM:"})," Pre-crime fake evidence printed to frame Meera."]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"text-gray-200 font-semibold",children:"11:47 PM:"})," Meera attacks Sen; Sen survives wounded."]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"text-gray-200 font-semibold",children:"12:03 AM:"}),` Sen records video ("Killer isn't who you suspect").`]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"text-gray-200 font-semibold",children:"12:13 AM:"})," Kabir triggers power cut (blackout)."]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"text-red-400 font-bold",children:"12:15 AM:"})," Dev slips in via servant passage and kills Sen."]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"text-cyan-400 font-semibold",children:"AI Flaw:"})," Assumed CCTV clocks were synchronized."]})]}),l.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-gray-800",children:[l.jsxs("button",{onClick:()=>{confirm("Reset investigation back to beginning?")&&(p(),e())},className:"flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition",children:[l.jsx(lx,{className:"w-3.5 h-3.5"}),"Reset Entire Session"]}),l.jsx("button",{onClick:e,className:"px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded transition uppercase",children:"CLOSE HUD"})]})]})}):null,aS=({isOpen:t,fromRound:e,toRound:n,title:i,discovery:r,nextObjective:s,onProceed:a})=>t?l.jsx("div",{className:"fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none font-mono animate-fade-in crt-overlay",children:l.jsxs("div",{className:"w-full max-w-xl bg-[#0d090c] border-2 border-red-700 rounded-lg p-6 shadow-[0_0_60px_rgba(229,9,20,0.6)] space-y-5 text-gray-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-red-950",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx($s,{className:"w-5 h-5 text-red-500 animate-pulse"}),l.jsx("span",{className:"text-xs font-bold text-red-500 uppercase tracking-widest",children:"INVESTIGATION MILESTONE UNLOCKED"})]}),l.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950 border border-red-800 text-red-300 font-bold",children:["ROUND ",e," ➔ ROUND ",n]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-bold text-gray-100 tracking-wide uppercase font-serif",children:i}),l.jsx("p",{className:"text-xs text-red-400/90 font-semibold mt-1",children:"Forensic Linkage Established"})]}),l.jsxs("div",{className:"p-4 rounded border border-red-900/60 bg-red-950/20 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-red-400 font-bold uppercase tracking-wider",children:[l.jsx(_h,{className:"w-4 h-4 text-red-400"}),"CRITICAL TRUTH EXPOSED:"]}),l.jsx("p",{className:"text-xs md:text-sm text-gray-200 leading-relaxed font-mono",children:r})]}),l.jsxs("div",{className:"p-3 bg-black/60 rounded border border-gray-800 space-y-1",children:[l.jsx("span",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-wider block",children:"HOW THIS LEADS TO THE NEXT LAYER:"}),l.jsx("p",{className:"text-xs text-amber-300/90 font-mono leading-relaxed",children:s})]}),l.jsxs("button",{onClick:()=>{ne.playHorrorStinger(),a()},className:"cursor-pointer w-full py-3.5 bg-red-800 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2",children:[l.jsxs("span",{children:["PROCEED TO ROUND ",n]}),l.jsx(Iy,{className:"w-4 h-4"})]})]})}):null,oS=({currentRound:t,suspectLocks:e,audioRevealedSecret:n,reasoningInspected:i,hiddenVideoUnlocked:r,printerLogUnlocked:s,finalEvaluated:a})=>{const o=Object.values(e).every(Boolean);return l.jsxs("div",{className:"w-full bg-[#16120e] border-4 border-[#3d2817] rounded-lg p-6 shadow-[inset_0_0_80px_rgba(0,0,0,0.9),0_10px_40px_rgba(0,0,0,0.8)] font-mono select-none relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(#8b5a2b 1px, transparent 0)",backgroundSize:"12px 12px"}}),l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b-2 border-[#4a321d] mb-6 relative z-10",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Pd,{className:"w-5 h-5 text-red-500 fill-red-500 animate-pulse"}),l.jsx("h2",{className:"text-base md:text-lg font-bold text-[#e6d5be] tracking-wider uppercase",children:"BLACKWOOD HOMICIDE CONSPIRACY WALL — RED THREAD AUDIT"})]}),l.jsx("span",{className:"text-xs text-[#a88d6e] bg-[#22170f] px-3 py-1 rounded border border-[#4a321d]",children:t>=6?"ALL FORENSIC STRINGS LINKED":"TRACING CAUSALITY NETWORK"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-3.5 bg-[#f5ebd7] text-[#1c130b] rounded shadow-md transform -rotate-1 border-t-8 border-red-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-red-950 mb-1",children:[l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(_o,{className:"w-3.5 h-3.5"})," EAST CLOCK (11:47)"]}),l.jsx("span",{className:"text-[10px] px-1 bg-red-200 rounded",children:"FIXED FACE"})]}),l.jsx("p",{className:"text-[11px] leading-tight text-gray-800",children:"Arrested with graphite sliver. Pendulum was stopped intentionally before midnight."})]}),l.jsxs("div",{className:`p-3.5 rounded shadow-md transform rotate-1 border-t-8 transition ${n?"bg-[#f5ebd7] text-[#1c130b] border-amber-800":"bg-[#3b3229] text-gray-500 border-gray-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-bold mb-1",children:[l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Zs,{className:"w-3.5 h-3.5"})," REEL TAPE #4"]}),l.jsx("span",{className:"text-[10px]",children:n?"SUB-BASS LINK":"LOCKED"})]}),l.jsx("p",{className:"text-[11px] leading-tight",children:n?'REVEALED: "Someone started BEFORE the house stopped" (Attack occurred prior to 12:13 blackout).':"Scrub tape at 0.5x speed in Round 1 to decode hidden frequency."})]}),l.jsxs("div",{className:`p-3.5 rounded shadow-md transform -rotate-2 border-t-8 transition ${s?"bg-[#f5ebd7] text-[#1c130b] border-red-700 animate-pulse":"bg-[#3b3229] text-gray-500 border-gray-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-bold mb-1",children:[l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Ks,{className:"w-3.5 h-3.5"})," 11:41 PM SPOOL"]}),l.jsx("span",{className:"text-[10px]",children:s?"CRITICAL LINK":"UNSEAL IN R5"})]}),l.jsx("p",{className:"text-[11px] leading-tight",children:s?"SMOKING GUN: Meera was framed 6 minutes BEFORE she confronted Sen!":"Challenge AI in Round 5 to expose evidence fabrication."})]})]}),l.jsxs("div",{className:"flex flex-col justify-between space-y-4",children:[l.jsxs("div",{className:"p-4 bg-[#f8f1e0] text-[#1c130b] rounded-lg shadow-xl border-4 border-red-900 transform rotate-0 text-center relative",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-red-700 shadow mx-auto -mt-6 mb-2 border border-white"}),l.jsx("span",{className:"text-[10px] font-bold text-red-700 uppercase tracking-widest block",children:"CENTRAL VICTIM"}),l.jsx("h3",{className:"text-base font-black tracking-wide text-gray-950 font-serif",children:"PROFESSOR VIKRAM SEN"}),l.jsx("p",{className:"text-[11px] text-red-900 font-bold mt-0.5",children:"STATUS: DECEASED IN STUDY 17-B"}),l.jsxs("div",{className:"mt-3 pt-2 border-t border-gray-300 text-[10px] text-left space-y-1 text-gray-800",children:[l.jsxs("p",{children:["• ",l.jsx("span",{className:"font-bold",children:"11:47 PM:"})," Struck by brass paperweight (survived wounded)"]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"font-bold",children:"12:03 AM:"})," Alive & recorded final webcam video"]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"font-bold text-red-700",children:"12:15 AM:"})," Smothered during blackout"]}),l.jsxs("p",{children:["• ",l.jsx("span",{className:"font-bold",children:"12:18 AM:"})," Body discovered by team"]})]})]}),l.jsxs("div",{className:"p-3 bg-[#241910] border border-[#523821] rounded text-center text-xs space-y-1 text-[#e0cfb8]",children:[l.jsx("span",{className:"text-red-400 font-bold uppercase tracking-widest text-[10px] block",children:"CAUSAL PROGRESSION"}),l.jsxs("div",{className:"flex items-center justify-center gap-1 text-[11px]",children:[l.jsx("span",{className:n?"text-emerald-400":"text-gray-500",children:"R1 Tape"})," ➔",l.jsx("span",{className:o?"text-emerald-400":"text-gray-500",children:"R2 Locks"})," ➔",l.jsx("span",{className:i?"text-emerald-400":"text-gray-500",children:"R3 AI Trap"})," ➔",l.jsx("span",{className:r?"text-emerald-400":"text-gray-500",children:"R4 Video"})," ➔",l.jsx("span",{className:s?"text-emerald-400":"text-gray-500",children:"R5 Pre-Crime"})," ➔",l.jsx("span",{className:a?"text-emerald-400":"text-gray-500",children:"R6 Climax"})]})]})]}),l.jsx("div",{className:"space-y-3",children:[{id:"meera",name:"Dr. Meera Patel",crime:"11:47 PM Assault with paperweight (Sen survived)"},{id:"dev",name:'Devraj "Dev" Negi',crime:"12:15 AM Murder via secret servant passage"},{id:"kabir",name:"Kabir Varma",crime:"12:13 AM Transformer overload & blackout"},{id:"riya",name:"Riya Sharma",crime:"Planted directional wiretaps for extortion"},{id:"aarav",name:"Aarav Mehta",crime:"Stole Blackwood 20-yr experiment logs"}].map(c=>{const u=e[c.id];return l.jsxs("div",{className:`p-2.5 rounded shadow border-l-4 transition ${u?c.id==="dev"?"bg-[#f5ebd7] text-[#1c130b] border-red-600":"bg-[#f5ebd7] text-[#1c130b] border-emerald-700":"bg-[#2b221a] text-gray-500 border-gray-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[l.jsx("span",{children:c.name}),l.jsx("span",{className:"text-[10px]",children:u?"IDENTIFIED":"UNVERIFIED"})]}),l.jsx("p",{className:"text-[10px] text-gray-700 mt-0.5",children:u?c.crime:"Disarm suspect lock in Round 2 to expose non-murder motive."})]},c.id)})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="186",lS=0,Kp=1,cS=2,El=1,fx=2,Pa=3,qr=0,wn=1,ri=2,Hi=0,Va=1,$p=2,Zp=3,Qp=4,uS=5,_s=100,dS=101,fS=102,hS=103,pS=104,mS=200,gS=201,xS=202,vS=203,hx=204,px=205,_S=206,yS=207,SS=208,MS=209,ES=210,bS=211,TS=212,wS=213,AS=214,kd=0,Ud=1,Od=2,lo=3,Fd=4,Bd=5,zd=6,Hd=7,mx=0,CS=1,RS=2,bi=0,gx=1,xx=2,vx=3,_x=4,yx=5,Sx=6,Mx=7,Ex=300,Kr=301,Js=302,nu=303,iu=304,bc=306,Fr=1e3,Bi=1001,Vd=1002,qt=1003,NS=1004,Ho=1005,Kt=1006,ru=1007,Br=1008,In=1009,bx=1010,Tx=1011,co=1012,Sh=1013,wi=1014,yi=1015,Ai=1016,Mh=1017,Eh=1018,uo=1020,wx=35902,Ax=35899,Cx=1021,Rx=1022,ai=1023,Yi=1026,zr=1027,Nx=1028,bh=1029,$r=1030,Th=1031,wh=1033,bl=33776,Tl=33777,wl=33778,Al=33779,Gd=35840,jd=35841,Wd=35842,Xd=35843,Yd=36196,qd=37492,Kd=37496,$d=37488,Zd=37489,tc=37490,Qd=37491,Jd=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,df=37819,ff=37820,hf=37821,pf=36492,mf=36494,gf=36495,xf=36283,vf=36284,nc=36285,_f=36286,PS=3200,yf=0,IS=1,ur="",Vn="srgb",ic="srgb-linear",rc="linear",ht="srgb",su=7680,LS=519,DS=512,kS=513,US=514,Ah=515,OS=516,FS=517,Ch=518,BS=519,zS=35044,Jp="300 es",Si=2e3,fo=2001;function HS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VS(){const t=sc("canvas");return t.style.display="block",t}const em={};function tm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Px(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=Px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function lt(...t){t=Px(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Bs(...t){const e=t.join(" ");e in em||(em[e]=!0,Fe(...t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const jS={[kd]:Ud,[Od]:zd,[Fd]:Hd,[lo]:Bd,[Ud]:kd,[zd]:Od,[Hd]:Fd,[Bd]:lo};class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,ac=180/Math.PI;function yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function WS(t,e){return(t%e+e)%e}function ou(t,e,n){return(1-n)*t+n*e}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dh=class Dh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dh.prototype.isVector2=!0;let tt=Dh;class ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(p!==E||c!==d||u!==m||h!==x){let g=c*d+u*m+h*x+p*E;g<0&&(d=-d,m=-m,x=-x,E=-E,g=-g);let f=1-o;if(g<.9995){const v=Math.acos(g),b=Math.sin(v);f=Math.sin(f*v)/b,o=Math.sin(o*v)/b,c=c*f+d*o,u=u*f+m*o,h=h*f+x*o,p=p*f+E*o}else{c=c*f+d*o,u=u*f+m*o,h=h*f+x*o,p=p*f+E*o;const v=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=v,u*=v,h*=v,p*=v}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+c*m-u*d,e[n+1]=c*x+h*d+u*p-o*m,e[n+2]=u*x+h*m+o*d-c*p,e[n+3]=h*x-o*p-c*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),d=c(i/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*p+u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p-d*m*x;break;case"YXZ":this._x=d*h*p+u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p+d*m*x;break;case"ZXY":this._x=d*h*p-u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p-d*m*x;break;case"ZYX":this._x=d*h*p-u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p+d*m*x;break;case"YZX":this._x=d*h*p+u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p-d*m*x;break;case"XZY":this._x=d*h*p-u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p+d*m*x;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kh=class kh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*h,this.y=i+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kh.prototype.isVector3=!0;let W=kh;const lu=new W,nm=new ra,Uh=class Uh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],x=i[8],E=r[0],g=r[3],f=r[6],v=r[1],b=r[4],S=r[7],T=r[2],w=r[5],C=r[8];return s[0]=a*E+o*v+c*T,s[3]=a*g+o*b+c*w,s[6]=a*f+o*S+c*C,s[1]=u*E+h*v+p*T,s[4]=u*g+h*b+p*w,s[7]=u*f+h*S+p*C,s[2]=d*E+m*v+x*T,s[5]=d*g+m*b+x*w,s[8]=d*f+m*S+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,d=o*c-h*s,m=u*s-a*c,x=n*p+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=p*E,e[1]=(r*u-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(h*n-r*c)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*c-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cu.makeScale(e,n)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cu.makeRotation(-e)),this}translate(e,n){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uh.prototype.isMatrix3=!0;let ze=Uh;const cu=new ze,im=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XS(){const t={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?rc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ic]:{primaries:e,whitePoint:i,transfer:rc,toXYZ:im,fromXYZ:rm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:im,fromXYZ:rm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const Qe=XS();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class YS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=sc("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qS=0;class Rh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(uu(r[a].image)):s.push(uu(r[a]))}else s=uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let KS=0;const du=new W;class ln extends Jr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Bi,r=Bi,s=Kt,a=Br,o=ai,c=In,u=ln.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=yo(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(du).x}get height(){return this.source.getSize(du).y}get depth(){return this.source.getSize(du).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ex;ln.DEFAULT_ANISOTROPY=1;const Oh=class Oh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],d=c[1],m=c[5],x=c[9],E=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+E)<.1&&Math.abs(x+g)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(u+1)/2,S=(m+1)/2,T=(f+1)/2,w=(h+d)/4,C=(p+E)/4,y=(x+g)/4;return b>S&&b>T?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=w/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(p-E)*(p-E)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(p-E)/v,this.z=(d-h)/v,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;let At=Oh;class $S extends Jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Rh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends $S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ix extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const oc=class oc{constructor(e,n,i,r,s,a,o,c,u,h,p,d,m,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,p,d,m,x,E,g)}set(e,n,i,r,s,a,o,c,u,h,p,d,m,x,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=x,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,x=o*h,E=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+x*u,n[5]=d-E*u,n[9]=-o*c,n[2]=E-d*u,n[6]=x+m*u,n[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*p,x=u*h,E=u*p;n[0]=d+E*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=E+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*p,x=u*h,E=u*p;n[0]=d-E*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=E-d*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*p,x=o*h,E=o*p;n[0]=c*h,n[4]=x*u-m,n[8]=d*u+E,n[1]=c*p,n[5]=E*u+d,n[9]=m*u-x,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*u,x=o*c,E=o*u;n[0]=c*h,n[4]=E-d*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+x,n[10]=d-E*p}else if(e.order==="XZY"){const d=a*c,m=a*u,x=o*c,E=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=d*p+E,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=E*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),er.crossVectors(i,Cn),er.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),er.crossVectors(i,Cn)),er.normalize(),Vo.crossVectors(Cn,er),r[0]=er.x,r[4]=Vo.x,r[8]=Cn.x,r[1]=er.y,r[5]=Vo.y,r[9]=Cn.y,r[2]=er.z,r[6]=Vo.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],x=i[2],E=i[6],g=i[10],f=i[14],v=i[3],b=i[7],S=i[11],T=i[15],w=r[0],C=r[4],y=r[8],A=r[12],I=r[1],P=r[5],N=r[9],F=r[13],k=r[2],D=r[6],$=r[10],q=r[14],V=r[3],B=r[7],Y=r[11],Q=r[15];return s[0]=a*w+o*I+c*k+u*V,s[4]=a*C+o*P+c*D+u*B,s[8]=a*y+o*N+c*$+u*Y,s[12]=a*A+o*F+c*q+u*Q,s[1]=h*w+p*I+d*k+m*V,s[5]=h*C+p*P+d*D+m*B,s[9]=h*y+p*N+d*$+m*Y,s[13]=h*A+p*F+d*q+m*Q,s[2]=x*w+E*I+g*k+f*V,s[6]=x*C+E*P+g*D+f*B,s[10]=x*y+E*N+g*$+f*Y,s[14]=x*A+E*F+g*q+f*Q,s[3]=v*w+b*I+S*k+T*V,s[7]=v*C+b*P+S*D+T*B,s[11]=v*y+b*N+S*$+T*Y,s[15]=v*A+b*F+S*q+T*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],x=e[3],E=e[7],g=e[11],f=e[15],v=c*m-u*d,b=o*m-u*p,S=o*d-c*p,T=a*m-u*h,w=a*d-c*h,C=a*p-o*h;return n*(E*v-g*b+f*S)-i*(x*v-g*T+f*w)+r*(x*b-E*T+f*C)-s*(x*S-E*w+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],x=e[12],E=e[13],g=e[14],f=e[15],v=n*o-i*a,b=n*c-r*a,S=n*u-s*a,T=i*c-r*o,w=i*u-s*o,C=r*u-s*c,y=h*E-p*x,A=h*g-d*x,I=h*f-m*x,P=p*g-d*E,N=p*f-m*E,F=d*f-m*g,k=v*F-b*N+S*P+T*I-w*A+C*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/k;return e[0]=(o*F-c*N+u*P)*D,e[1]=(r*N-i*F-s*P)*D,e[2]=(E*C-g*w+f*T)*D,e[3]=(d*w-p*C-m*T)*D,e[4]=(c*I-a*F-u*A)*D,e[5]=(n*F-r*I+s*A)*D,e[6]=(g*S-x*C-f*b)*D,e[7]=(h*C-d*S+m*b)*D,e[8]=(a*N-o*I+u*y)*D,e[9]=(i*I-n*N-s*y)*D,e[10]=(x*w-E*S+f*v)*D,e[11]=(p*S-h*w-m*v)*D,e[12]=(o*A-a*P-c*y)*D,e[13]=(n*P-i*A+r*y)*D,e[14]=(E*b-x*T-g*v)*D,e[15]=(h*T-p*b+d*v)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,d=s*u,m=s*h,x=s*p,E=a*h,g=a*p,f=o*p,v=c*u,b=c*h,S=c*p,T=i.x,w=i.y,C=i.z;return r[0]=(1-(E+f))*T,r[1]=(m+S)*T,r[2]=(x-b)*T,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+f))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(x+b)*C,r[9]=(g-v)*C,r[10]=(1-(d+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),c=as.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);const u=1/a,h=1/o,p=1/c;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=p,Qn.elements[9]*=p,Qn.elements[10]*=p,n.setFromRotationMatrix(Qn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=Si,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let x,E;if(c)x=s/(a-s),E=a*s/(a-s);else if(o===Si)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===fo)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Si,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,E;if(c)x=1/(a-s),E=a/(a-s);else if(o===Si)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===fo)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};oc.prototype.isMatrix4=!0;let Rt=oc;const as=new W,Qn=new Rt,QS=new W(0,0,0),JS=new W(1,1,1),er=new W,Vo=new W,Cn=new W,sm=new Rt,am=new ra;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e1=0;const om=new W,os=new ra,Ni=new Rt,Go=new W,Sa=new W,t1=new W,n1=new ra,lm=new W(1,0,0),cm=new W(0,1,0),um=new W(0,0,1),dm={type:"added"},i1={type:"removed"},ls={type:"childadded",child:null},fu={type:"childremoved",child:null};class Zt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new W,n=new br,i=new ra,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return om.copy(e).applyQuaternion(this.quaternion),this.position.add(om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Go.copy(e):Go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Sa,Go,this.up):Ni.lookAt(Go,Sa,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Ni),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),ls.child=e,this.dispatchEvent(ls),ls.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(i1),fu.child=e,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,t1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,n1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new W(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hr extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(u,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},jo={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=WS(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=pu(a,s,e+1/3),this.g=pu(a,s,e),this.b=pu(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Dx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Qe.workingToColorSpace(sn.copy(this),e),Math.round(Je(sn.r*255,0,255))*65536+Math.round(Je(sn.g*255,0,255))*256+Math.round(Je(sn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Vn){Qe.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(jo);const i=ou(tr.h,jo.h,n),r=ou(tr.s,jo.s,n),s=ou(tr.l,jo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new et;et.NAMES=Dx;class Nh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=n}clone(){return new Nh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class s1 extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new W,Pi=new W,mu=new W,Ii=new W,cs=new W,us=new W,fm=new W,gu=new W,xu=new W,vu=new W,_u=new At,yu=new At,Su=new At;class si{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Pi.subVectors(i,n),mu.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Pi),c=Jn.dot(mu),u=Pi.dot(Pi),h=Pi.dot(mu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(u*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(a,Ii.y),c.addScaledVector(o,Ii.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return _u.setScalar(0),yu.setScalar(0),Su.setScalar(0),_u.fromBufferAttribute(e,n),yu.fromBufferAttribute(e,i),Su.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_u,s.x),a.addScaledVector(yu,s.y),a.addScaledVector(Su,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Pi.subVectors(e,n),Jn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),us.subVectors(s,i),gu.subVectors(e,i);const c=cs.dot(gu),u=us.dot(gu);if(c<=0&&u<=0)return n.copy(i);xu.subVectors(e,r);const h=cs.dot(xu),p=us.dot(xu);if(h>=0&&p<=h)return n.copy(r);const d=c*p-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(cs,a);vu.subVectors(e,s);const m=cs.dot(vu),x=us.dot(vu);if(x>=0&&m<=x)return n.copy(s);const E=m*u-c*x;if(E<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(us,o);const g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return fm.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(fm,o);const f=1/(g+E+d);return a=E*f,o=d*f,n.copy(i).addScaledVector(cs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Xo.subVectors(this.max,Ma),ds.subVectors(e.a,Ma),fs.subVectors(e.b,Ma),hs.subVectors(e.c,Ma),nr.subVectors(fs,ds),ir.subVectors(hs,fs),Cr.subVectors(ds,hs);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Cr.z,Cr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Cr.z,0,-Cr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Cr.y,Cr.x,0];return!Mu(n,ds,fs,hs,Xo)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,ds,fs,hs,Xo))?!1:(Yo.crossVectors(nr,ir),n=[Yo.x,Yo.y,Yo.z],Mu(n,ds,fs,hs,Xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new W,new W,new W,new W,new W,new W,new W,new W],ei=new W,Wo=new So,ds=new W,fs=new W,hs=new W,nr=new W,ir=new W,Cr=new W,Ma=new W,Xo=new W,Yo=new W,Rr=new W;function Mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Rr.fromArray(t,s);const o=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),c=e.dot(Rr),u=n.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Ft=new W,qo=new tt;let a1=0;class Ti extends Jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zS,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class kx extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ux extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}const o1=new So,Ea=new W,Eu=new W;class Tc{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):o1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Eu)),this.expandByPoint(Ea.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let l1=0;const Hn=new Rt,bu=new Zt,ps=new W,Rn=new So,ba=new So,jt=new W;class Fn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(HS(e)?Ux:kx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Rn.min,ba.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,ba.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(ba.min),Rn.expandByPoint(ba.max))}Rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)jt.fromBufferAttribute(o,u),c&&(ps.fromBufferAttribute(e,u),jt.add(ps)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new W,c[y]=new W;const u=new W,h=new W,p=new W,d=new tt,m=new tt,x=new tt,E=new W,g=new W;function f(y,A,I){u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,I),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),x.fromBufferAttribute(s,I),h.sub(u),p.sub(u),m.sub(d),x.sub(d);const P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(E.copy(h).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(P),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(P),o[y].add(E),o[A].add(E),o[I].add(E),c[y].add(g),c[A].add(g),c[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,A=v.length;y<A;++y){const I=v[y],P=I.start,N=I.count;for(let F=P,k=P+N;F<k;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new W,S=new W,T=new W,w=new W;function C(y){T.fromBufferAttribute(r,y),w.copy(T);const A=o[y];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(w,A);const P=S.dot(c[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,P)}for(let y=0,A=v.length;y<A;++y){const I=v[y],P=I.start,N=I.count;for(let F=P,k=P+N;F<k;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,p=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),E=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,g),o.add(h),c.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,d=new u.constructor(c.length*h);let m=0,x=0;for(let E=0,g=c.length;E<g;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*h;for(let f=0;f<h;f++)d[x++]=u[m++]}return new Ti(d,h,p)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new W,c1=new W,u1=new ze;class or{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(c1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Tu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||u1.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let d1=0;class sa extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=Va,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hx,this.blendDst=px,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=LS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=su,this.stencilZFail=su,this.stencilZPass=su,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Fe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new or().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new W,wu=new W,Ko=new W,$o=new W;class Ox{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),Ko.copy(n).sub(e).normalize(),$o.copy(this.origin).sub(wu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ko),o=$o.dot(this.direction),c=-$o.dot(Ko),u=$o.lengthSq(),h=Math.abs(1-a*a);let p,d,m,x;if(h>0)if(p=a*c-o,d=a*o-c,x=s*h,p>=0)if(d>=-x)if(d<=x){const E=1/h;p*=E,d*=E,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+u}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;else d<=-x?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+u):d<=x?(p=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+u):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+u);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(wu).addScaledVector(Ko,d),m}intersectSphere(e,n){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,x=n.x-a.x,E=n.y-a.y,g=n.z-a.z,f=i.x-a.x,v=i.y-a.y,b=i.z-a.z,S=Math.abs(c),T=Math.abs(u),w=Math.abs(h);let C,y,A,I,P,N,F,k,D,$,q,V;if(S>=T&&S>=w?(A=c,N=p,D=x,V=f,c>=0?(C=u,y=h,I=d,P=m,F=E,k=g,$=v,q=b):(C=h,y=u,I=m,P=d,F=g,k=E,$=b,q=v)):T>=w?(A=u,N=d,D=E,V=v,u>=0?(C=h,y=c,I=m,P=p,F=g,k=x,$=b,q=f):(C=c,y=h,I=p,P=m,F=x,k=g,$=f,q=b)):(A=h,N=m,D=g,V=b,h>=0?(C=c,y=u,I=p,P=d,F=x,k=E,$=f,q=v):(C=u,y=c,I=d,P=p,F=E,k=x,$=v,q=f)),A===0)return null;const B=C/A,Y=y/A,Q=1/A,de=I-B*N,ye=P-Y*N,Ye=F-B*D,Oe=k-Y*D,Be=$-B*V,K=q-Y*V,ie=Be*Oe-K*Ye,_e=de*K-ye*Be,ke=Ye*ye-Oe*de;if(r){if(ie<0||_e<0||ke<0)return null}else if((ie<0||_e<0||ke<0)&&(ie>0||_e>0||ke>0))return null;const ve=ie+_e+ke;if(ve===0)return null;const je=Q*(ie*N+_e*D+ke*V);return(ve>0?je<0:je>0)?null:this.at(je/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ga extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hm=new Rt,Nr=new Ox,Zo=new Tc,pm=new W,Qo=new W,Jo=new W,el=new W,Au=new W,tl=new W,mm=new W,nl=new W;class dt extends Zt{constructor(e=new Fn,n=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){tl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(Au.fromBufferAttribute(p,e),a?tl.addScaledVector(Au,h):tl.addScaledVector(Au.sub(n),h))}n.add(tl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Zo.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Zo,pm)===null||Nr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=d.length;x<E;x++){const g=d[x],f=a[g.materialIndex],v=Math.max(g.start,m.start),b=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,T=b;S<T;S+=3){const w=o.getX(S),C=o.getX(S+1),y=o.getX(S+2);r=il(this,f,e,i,u,h,p,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let g=x,f=E;g<f;g+=3){const v=o.getX(g),b=o.getX(g+1),S=o.getX(g+2);r=il(this,a,e,i,u,h,p,v,b,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,E=d.length;x<E;x++){const g=d[x],f=a[g.materialIndex],v=Math.max(g.start,m.start),b=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,T=b;S<T;S+=3){const w=S,C=S+1,y=S+2;r=il(this,f,e,i,u,h,p,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let g=x,f=E;g<f;g+=3){const v=g,b=g+1,S=g+2;r=il(this,a,e,i,u,h,p,v,b,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function f1(t,e,n,i,r,s,a,o){let c;if(e.side===wn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===qr,o),c===null)return null;nl.copy(o),nl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(nl);return u<n.near||u>n.far?null:{distance:u,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Qo),t.getVertexPosition(c,Jo),t.getVertexPosition(u,el);const h=f1(t,e,n,i,Qo,Jo,el,mm);if(h){const p=new W;si.getBarycoord(mm,Qo,Jo,el,p),r&&(h.uv=si.getInterpolatedAttribute(r,o,c,u,p,new tt)),s&&(h.uv1=si.getInterpolatedAttribute(s,o,c,u,p,new tt)),a&&(h.normal=si.getInterpolatedAttribute(a,o,c,u,p,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new W,materialIndex:0};si.getNormal(Qo,Jo,el,d.normal),h.face=d,h.barycoord=p}return h}class h1 extends ln{constructor(e=null,n=1,i=1,r,s,a,o,c,u=qt,h=qt,p,d){super(null,a,o,c,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pr=new Tc,p1=new tt(.5,.5),rl=new W;class Ph{constructor(e=new or,n=new or,i=new or,r=new or,s=new or,a=new or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],d=s[6],m=s[7],x=s[8],E=s[9],g=s[10],f=s[11],v=s[12],b=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,m-h,f-x,T-v).normalize(),r[1].setComponents(u+a,m+h,f+x,T+v).normalize(),r[2].setComponents(u+o,m+p,f+E,T+b).normalize(),r[3].setComponents(u-o,m-p,f-E,T-b).normalize(),i)r[4].setComponents(c,d,g,S).normalize(),r[5].setComponents(u-c,m-d,f-g,T-S).normalize();else if(r[4].setComponents(u-c,m-d,f-g,T-S).normalize(),n===Si)r[5].setComponents(u+c,m+d,f+g,T+S).normalize();else if(n===fo)r[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const n=p1.distanceTo(e.center);return Pr.radius=.7071067811865476+n,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fx extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gm=new Rt,Sf=new Ox,sl=new Tc,al=new W;class m1 extends Zt{constructor(e=new Fn,n=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;gm.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(gm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,p=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,E=m;x<E;x++){const g=u.getX(x);al.fromBufferAttribute(p,g),xm(al,g,c,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let x=d,E=m;x<E;x++)al.fromBufferAttribute(p,x),xm(al,x,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xm(t,e,n,i,r,s,a){const o=Sf.distanceSqToPoint(t);if(o<n){const c=new W;Sf.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bx extends ln{constructor(e=[],n=Kr,i,r,s,a,o,c,u,h){super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ms extends ln{constructor(e,n,i,r,s,a,o,c,u){super(e,n,i,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ho extends ln{constructor(e,n,i=wi,r,s,a,o=qt,c=qt,u,h=Yi,p=1){if(h!==Yi&&h!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class g1 extends ho{constructor(e,n=wi,i=Kr,r,s,a=qt,o=qt,c,u=Yi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zx extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _i extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(p,2));function x(E,g,f,v,b,S,T,w,C,y,A){const I=S/C,P=T/y,N=S/2,F=T/2,k=w/2,D=C+1,$=y+1;let q=0,V=0;const B=new W;for(let Y=0;Y<$;Y++){const Q=Y*P-F;for(let de=0;de<D;de++){const ye=de*I-N;B[E]=ye*v,B[g]=Q*b,B[f]=k,u.push(B.x,B.y,B.z),B[E]=0,B[g]=0,B[f]=w>0?1:-1,h.push(B.x,B.y,B.z),p.push(de/C),p.push(1-Y/y),q+=1}}for(let Y=0;Y<y;Y++)for(let Q=0;Q<C;Q++){const de=d+Q+D*Y,ye=d+Q+D*(Y+1),Ye=d+(Q+1)+D*(Y+1),Oe=d+(Q+1)+D*Y;c.push(de,ye,Oe),c.push(ye,Ye,Oe),V+=6}o.addGroup(m,V,A),m+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ja extends Fn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],m=[];let x=0;const E=[],g=i/2;let f=0;v(),a===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(m,2));function v(){const S=new W,T=new W;let w=0;const C=(n-e)/i;for(let y=0;y<=s;y++){const A=[],I=y/s,P=I*(n-e)+e;for(let N=0;N<=r;N++){const F=N/r,k=F*c+o,D=Math.sin(k),$=Math.cos(k);T.x=P*D,T.y=-I*i+g,T.z=P*$,p.push(T.x,T.y,T.z),S.set(D,C,$).normalize(),d.push(S.x,S.y,S.z),m.push(F,1-I),A.push(x++)}E.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const I=E[A][y],P=E[A+1][y],N=E[A+1][y+1],F=E[A][y+1];(e>0||A!==0)&&(h.push(I,P,F),w+=3),(n>0||A!==s-1)&&(h.push(P,N,F),w+=3)}u.addGroup(f,w,0),f+=w}function b(S){const T=x,w=new tt,C=new W;let y=0;const A=S===!0?e:n,I=S===!0?1:-1;for(let N=1;N<=r;N++)p.push(0,g*I,0),d.push(0,I,0),m.push(.5,.5),x++;const P=x;for(let N=0;N<=r;N++){const k=N/r*c+o,D=Math.cos(k),$=Math.sin(k);C.x=A*$,C.y=g*I,C.z=A*D,p.push(C.x,C.y,C.z),d.push(0,I,0),w.x=D*.5+.5,w.y=$*.5*I+.5,m.push(w.x,w.y),x++}for(let N=0;N<r;N++){const F=T+N,k=P+N;S===!0?h.push(k,k+1,F):h.push(k+1,k,F),y+=3}u.addGroup(f,y,S===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nn extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,p=e/o,d=n/c,m=[],x=[],E=[],g=[];for(let f=0;f<h;f++){const v=f*d-a;for(let b=0;b<u;b++){const S=b*p-s;x.push(S,-v,0),E.push(0,0,1),g.push(b/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const b=v+u*f,S=v+u*(f+1),T=v+1+u*(f+1),w=v+1+u*f;m.push(b,S,w),m.push(S,T,w)}this.setIndex(m),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ih extends Fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const h=[],p=new W,d=new W,m=[],x=[],E=[],g=[];for(let f=0;f<=i;f++){const v=[],b=f/i,S=a+b*o,T=e*Math.cos(S),w=Math.sqrt(e*e-T*T);let C=0;f===0&&a===0?C=.5/n:f===i&&c===Math.PI&&(C=-.5/n);for(let y=0;y<=n;y++){const A=y/n,I=r+A*s;p.x=-w*Math.cos(I),p.y=T,p.z=w*Math.sin(I),x.push(p.x,p.y,p.z),d.copy(p).normalize(),E.push(d.x,d.y,d.z),g.push(A+C,1-b),v.push(u++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const b=h[f][v+1],S=h[f][v],T=h[f+1][v],w=h[f+1][v+1];(f!==0||a>0)&&m.push(b,S,w),(f!==i-1||c<Math.PI)&&m.push(S,T,w)}this.setIndex(m),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(vm(r))r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(vm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function vm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function x1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const v1={clone:ea,merge:dn};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=x1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class S1 extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M1 extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E1 extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lh extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cu=new Rt,_m=new W,ym=new W;class Vx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===fo||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ol=new W,ll=new ra,pi=new W;class Gx extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ol,ll,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ol,ll,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,ll,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new W,Sm=new tt,Mm=new tt;class Sn extends Gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,Mm),n.subVectors(Mm,Sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class b1 extends Vx{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=ac*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class T1 extends Lh{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new b1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class w1 extends Vx{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}}class A1 extends Lh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new w1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class jx extends Gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class C1 extends Lh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const gs=-90,xs=1;class R1 extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(gs,xs,e,n);r.layers=this.layers,this.add(r);const s=new Sn(gs,xs,e,n);s.layers=this.layers,this.add(s);const a=new Sn(gs,xs,e,n);a.layers=this.layers,this.add(a);const o=new Sn(gs,xs,e,n);o.layers=this.layers,this.add(o);const c=new Sn(gs,xs,e,n);c.layers=this.layers,this.add(c);const u=new Sn(gs,xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class N1 extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fh=class Fh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Fh.prototype.isMatrix2=!0;let Em=Fh;function bm(t,e,n,i){const r=P1(i);switch(n){case Cx:return t*e;case Nx:return t*e/r.components*r.byteLength;case bh:return t*e/r.components*r.byteLength;case $r:return t*e*2/r.components*r.byteLength;case Th:return t*e*2/r.components*r.byteLength;case Rx:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case wh:return t*e*4/r.components*r.byteLength;case bl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:case Xd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case Wd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case qd:case $d:case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kd:case tc:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pf:case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nc:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P1(t){switch(t){case In:case bx:return{byteLength:1,components:1};case co:case Tx:case Ai:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case wi:case Sh:case yi:return{byteLength:4,components:1};case wx:case Ax:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function I1(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<p.length;m++){const x=p[d],E=p[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++d,p[d]=E)}p.length=d+1;for(let m=0,x=p.length;m<x;m++){const E=p[m];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,V1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:L1,alphahash_pars_fragment:D1,alphamap_fragment:k1,alphamap_pars_fragment:U1,alphatest_fragment:O1,alphatest_pars_fragment:F1,aomap_fragment:B1,aomap_pars_fragment:z1,batching_pars_vertex:H1,batching_vertex:V1,begin_vertex:G1,beginnormal_vertex:j1,bsdfs:W1,iridescence_fragment:X1,bumpmap_pars_fragment:Y1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:K1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:Z1,color_fragment:Q1,color_pars_fragment:J1,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:aM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:dM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:TM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:xM,fog_fragment:vM,fog_pars_fragment:_M,gradientmap_pars_fragment:yM,lightmap_pars_fragment:SM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:EM,lights_pars_begin:bM,lights_toon_fragment:wM,lights_toon_pars_fragment:AM,lights_phong_fragment:CM,lights_phong_pars_fragment:RM,lights_physical_fragment:NM,lights_physical_pars_fragment:PM,lights_fragment_begin:IM,lights_fragment_maps:LM,lights_fragment_end:DM,lightprobes_pars_fragment:kM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:BM,map_fragment:zM,map_pars_fragment:HM,map_particle_fragment:VM,map_particle_pars_fragment:GM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:WM,morphinstance_vertex:XM,morphcolor_vertex:YM,morphnormal_vertex:qM,morphtarget_pars_vertex:KM,morphtarget_vertex:$M,normal_fragment_begin:ZM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:aE,opaque_fragment:oE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:dE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:xE,shadowmask_pars_fragment:vE,skinbase_vertex:_E,skinning_pars_vertex:yE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:bE,tonemapping_fragment:TE,tonemapping_pars_fragment:wE,transmission_fragment:AE,transmission_pars_fragment:CE,uv_pars_fragment:RE,uv_pars_vertex:NE,uv_vertex:PE,worldpos_vertex:IE,background_vert:LE,background_frag:DE,backgroundCube_vert:kE,backgroundCube_frag:UE,cube_vert:OE,cube_frag:FE,depth_vert:BE,depth_frag:zE,distance_vert:HE,distance_frag:VE,equirect_vert:GE,equirect_frag:jE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:YE,meshbasic_frag:qE,meshlambert_vert:KE,meshlambert_frag:$E,meshmatcap_vert:ZE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:eb,meshphong_vert:tb,meshphong_frag:nb,meshphysical_vert:ib,meshphysical_frag:rb,meshtoon_vert:sb,meshtoon_frag:ab,points_vert:ob,points_frag:lb,shadow_vert:cb,shadow_frag:ub,sprite_vert:db,sprite_frag:fb},ge={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},xi={basic:{uniforms:dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:dn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:dn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:dn([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:dn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:dn([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:dn([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:dn([ge.common,ge.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:dn([ge.lights,ge.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xi.physical={uniforms:dn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const cl={r:0,b:0,g:0},hb=new Rt,Xx=new ze;Xx.set(-1,0,0,0,1,0,0,0,1);function pb(t,e,n,i,r,s){const a=new et(0);let o=r===!0?0:1,c,u,h=null,p=0,d=null;function m(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=e.get(b,S)}return b}function x(v){let b=!1;const S=m(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),b=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,b){const S=m(b);S&&(S.isCubeTexture||S.mapping===bc)?(u===void 0&&(u=new dt(new _i(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ea(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hb.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Xx),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ht,(h!==S||p!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dt(new Nn(2,2),new Ci({name:"BackgroundMaterial",uniforms:ea(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,b){v.getRGB(cl,Hx(t)),n.buffers.color.setClear(cl.r,cl.g,cl.b,b,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:x,addToRenderList:E,dispose:f}}function mb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,N,F,k,D){let $=!1;const q=p(P,k,F,N);s!==q&&(s=q,u(s.object)),$=m(P,k,F,D),$&&x(P,k,F,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(P,N,F,k),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function p(P,N,F,k){const D=k.wireframe===!0;let $=i[N.id];$===void 0&&($={},i[N.id]=$);const q=P.isInstancedMesh===!0?P.id:0;let V=$[q];V===void 0&&(V={},$[q]=V);let B=V[F.id];B===void 0&&(B={},V[F.id]=B);let Y=B[D];return Y===void 0&&(Y=d(c()),B[D]=Y),Y}function d(P){const N=[],F=[],k=[];for(let D=0;D<n;D++)N[D]=0,F[D]=0,k[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:k,object:P,attributes:{},index:null}}function m(P,N,F,k){const D=s.attributes,$=N.attributes;let q=0;const V=F.getAttributes();for(const B in V)if(V[B].location>=0){const Q=D[B];let de=$[B];if(de===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function x(P,N,F,k){const D={},$=N.attributes;let q=0;const V=F.getAttributes();for(const B in V)if(V[B].location>=0){let Q=$[B];Q===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),D[B]=de,q++}s.attributes=D,s.attributesNum=q,s.index=k}function E(){const P=s.newAttributes;for(let N=0,F=P.length;N<F;N++)P[N]=0}function g(P){f(P,0)}function f(P,N){const F=s.newAttributes,k=s.enabledAttributes,D=s.attributeDivisors;F[P]=1,k[P]===0&&(t.enableVertexAttribArray(P),k[P]=1),D[P]!==N&&(t.vertexAttribDivisor(P,N),D[P]=N)}function v(){const P=s.newAttributes,N=s.enabledAttributes;for(let F=0,k=N.length;F<k;F++)N[F]!==P[F]&&(t.disableVertexAttribArray(F),N[F]=0)}function b(P,N,F,k,D,$,q){q===!0?t.vertexAttribIPointer(P,N,F,D,$):t.vertexAttribPointer(P,N,F,k,D,$)}function S(P,N,F,k){E();const D=k.attributes,$=F.getAttributes(),q=N.defaultAttributeValues;for(const V in $){const B=$[V];if(B.location>=0){let Y=D[V];if(Y===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const Q=Y.normalized,de=Y.itemSize,ye=e.get(Y);if(ye===void 0)continue;const Ye=ye.buffer,Oe=ye.type,Be=ye.bytesPerElement,K=Oe===t.INT||Oe===t.UNSIGNED_INT||Y.gpuType===Sh;if(Y.isInterleavedBufferAttribute){const ie=Y.data,_e=ie.stride,ke=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<B.locationSize;ve++)f(B.location+ve,ie.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,de/B.locationSize,Oe,Q,_e*Be,(ke+de/B.locationSize*ve)*Be,K)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)f(B.location+ie,Y.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<B.locationSize;ie++)g(B.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ie=0;ie<B.locationSize;ie++)b(B.location+ie,de/B.locationSize,Oe,Q,de*Be,de/B.locationSize*ie*Be,K)}}else if(q!==void 0){const Q=q[V];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(B.location,Q);break;case 3:t.vertexAttrib3fv(B.location,Q);break;case 4:t.vertexAttrib4fv(B.location,Q);break;default:t.vertexAttrib1fv(B.location,Q)}}}}v()}function T(){A();for(const P in i){const N=i[P];for(const F in N){const k=N[F];for(const D in k){const $=k[D];for(const q in $)h($[q].object),delete $[q];delete k[D]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const F in N){const k=N[F];for(const D in k){const $=k[D];for(const q in $)h($[q].object),delete $[q];delete k[D]}}delete i[P.id]}function C(P){for(const N in i){const F=i[N];for(const k in F){const D=F[k];if(D[P.id]===void 0)continue;const $=D[P.id];for(const q in $)h($[q].object),delete $[q];delete D[P.id]}}}function y(P){for(const N in i){const F=i[N],k=P.isInstancedMesh===!0?P.id:0,D=F[k];if(D!==void 0){for(const $ in D){const q=D[$];for(const V in q)h(q[V].object),delete q[V];delete D[$]}delete F[k],Object.keys(F).length===0&&delete i[N]}}}function A(){I(),a=!0,s!==r&&(s=r,u(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:g,disableUnusedAttributes:v}}function gb(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ai&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==In&&C!==yi&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Fe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:w}}function vb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new or,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const x=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const v=s?0:i,b=v*4;let S=f.clippingState||null;c.value=S,S=h(x,d,b,m);for(let T=0;T!==b;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,x){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=c.value,x!==!0||g===null){const f=m+E*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,S=m;b!==E;++b,S+=4)a.copy(p[b]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Is=4,_b=6,yb=20,Sb=256,Ta=new jx,Tm=new et;let Ru=null,Nu=0,Pu=0,Iu=!1;const Mb=new W,Ir=new W;class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Mb}=s;Ru=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Nu,Pu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ai,format:ai,colorSpace:ic,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Eb(s)),this._blurMaterial=Tb(s,e,n),this._ggxMaterial=bb(s,e,n)}return r}_compileMaterial(e){const n=new dt(new Fn,e);this._renderer.compile(n,Ta)}_sceneToCubeUV(e,n,i,r,s){const c=new Sn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Tm),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new _i,new Ga({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,f=!0):(g.color.copy(Tm),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):S===1?(c.up.set(0,0,u[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const T=this._cubeSize;vs(r,S*T,b>2?T:0,T,T),p.setRenderTarget(r),f&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;vs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),d=u*1.25,m=p*d,{_lodMax:x}=this,E=this._sizeLods[i],g=3*E*(i>x-Is?i-x+Is:0),f=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-n,vs(s,g,f,3*E,2*E),r.setRenderTarget(s),r.render(o,Ta),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,vs(e,g,f,3*E,2*E),r.setRenderTarget(e),r.render(o,Ta)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-Is?r-this._lodMax+Is:0),d=4*(this._cubeSize-h);vs(n,p,d,3*h,2*h),a.setRenderTarget(n),a.render(c,Ta)}}function Eb(t){const e=[],n=[];let i=t;const r=t-Is+1+_b;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,d=6,m=3,x=new Float32Array(m*d*p),E=new Float32Array(m*d*p);for(let f=0;f<p;f++){const v=f%3*2/3-1,b=f>2?0:-1,S=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];x.set(S,m*d*f);for(let T=0;T<d;T++){const w=h[T*2]*2-1,C=h[T*2+1]*2-1;f===0?Ir.set(1,C,w):f===1?Ir.set(-w,1,-C):f===2?Ir.set(-w,C,1):f===3?Ir.set(-1,C,-w):f===4?Ir.set(-w,-1,C):Ir.set(w,C,-1),Ir.toArray(E,(f*d+T)*m)}}const g=new Fn;g.setAttribute("position",new Ti(x,m)),g.setAttribute("outputDirection",new Ti(E,m)),n.push(new dt(g,null)),i>Is&&i--}return{lodMeshes:n,sizeLods:e}}function Am(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bb(t,e,n){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Tb(t,e,n){return new Ci({name:"SphericalGaussianBlur",defines:{SAMPLES:yb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cm(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Rm(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yx extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _i(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Hi});s.uniforms.tEquirect.value=n;const a=new dt(r,s),o=n.minFilter;return n.minFilter===Br&&(n.minFilter=Kt),new R1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function wb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===nu||m===iu)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const E=new Yx(x.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",u),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,x=m===nu||m===iu,E=m===Kr||m===Js;if(x||E){let g=n.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new wm(t)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const v=d.image;return x&&v&&v.height>0||E&&v&&c(v)?(i===null&&(i=new wm(t)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,m){return m===nu?d.mapping=Kr:m===iu&&(d.mapping=Js),d}function c(d){let m=0;const x=6;for(let E=0;E<x;E++)d[E]!==void 0&&m++;return m===x}function u(d){const m=d.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Ab(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bs("WebGLRenderer: "+i+" extension not supported."),r}}}function Cb(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function u(p){const d=[],m=p.index,x=p.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let b=0,S=v.length;b<S;b+=3){const T=v[b+0],w=v[b+1],C=v[b+2];d.push(T,w,w,C,C,T)}}else{const v=x.array;E=x.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const T=b+0,w=b+1,C=b+2;d.push(T,w,w,C,C,T)}}const g=new(x.count>=65535?Ux:kx)(d,1);g.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Rb(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function u(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*a,m),n.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let E=0;for(let g=0;g<m;g++)E+=d[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Nb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Pb(t,e,n){const i=new WeakMap,r=new At;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let I=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var m=I;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*p),y=new Ix(C,T,w,p);y.type=yi,y.needsUpdate=!0;const A=S*4;for(let P=0;P<p;P++){const N=f[P],F=v[P],k=b[P],D=T*w*4*P;for(let $=0;$<N.count;$++){const q=$*A;x===!0&&(r.fromBufferAttribute(N,$),C[D+q+0]=r.x,C[D+q+1]=r.y,C[D+q+2]=r.z,C[D+q+3]=0),E===!0&&(r.fromBufferAttribute(F,$),C[D+q+4]=r.x,C[D+q+5]=r.y,C[D+q+6]=r.z,C[D+q+7]=0),g===!0&&(r.fromBufferAttribute(k,$),C[D+q+8]=r.x,C[D+q+9]=r.y,C[D+q+10]=r.z,C[D+q+11]=k.itemSize===4?r.w:1)}}d={count:p,texture:y,size:new tt(T,w)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const E=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",E),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Ib(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,d=e.get(u,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const Lb={[gx]:"LINEAR_TONE_MAPPING",[xx]:"REINHARD_TONE_MAPPING",[vx]:"CINEON_TONE_MAPPING",[_x]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function Db(t,e,n,i,r,s){const a=new ci(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Fn;u.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pn([0,2,0,0,2,0],2));const h=new S1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new dt(u,h),d=new jx(-1,1,1,-1,0,1);let m=null,x=null,E=!1,g,f=null,v=[],b=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),c!==null&&c.setSize(S,T);for(let w=0;w<v.length;w++){const C=v[w];C.setSize&&C.setSize(S,T)}},this.setEffects=function(S){v=S,b=v.length>0&&v[0].isRenderPass===!0;const T=a.width,w=a.height;v.length>0&&o===null&&(o=new ci(T,w,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),c=new ci(T,w,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const y=v[C];y.setSize&&y.setSize(T,w)}},this.begin=function(S,T){if(E||S.toneMapping===bi&&v.length===0)return!1;if(f=T,T!==null){const w=T.width,C=T.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return b===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=bi,!0},this.hasRenderPass=function(){return b},this.end=function(S,T){S.toneMapping=g,E=!0;let w=a,C=o;for(let y=0;y<v.length;y++){const A=v[y];A.enabled!==!1&&(A.render(S,C,w,T),A.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(m!==S.outputColorSpace||x!==S.toneMapping){m=S.outputColorSpace,x=S.toneMapping,h.defines={},Qe.getTransfer(m)===ht&&(h.defines.SRGB_TRANSFER="");const y=Lb[x];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(f),S.render(p,d),f=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const qx=new ln,Mf=new ho(1,1),Kx=new Ix,$x=new ZS,Zx=new Bx,Nm=[],Pm=[],Im=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function aa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nm[r];if(s===void 0&&(s=new Float32Array(r),Nm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function Bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),Gt(n,i)}}function zb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Lm.set(i),t.uniformMatrix3fv(this.addr,!1,Lm),Gt(n,i)}}function Hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),Gt(n,i)}}function Vb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function Xb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function $b(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mf.compareFunction=n.isReversedDepthBuffer()?Ch:Ah,s=Mf):s=qx,n.setTexture2D(e||s,r)}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$x,r)}function Qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zx,r)}function Jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kx,r)}function eT(t){switch(t){case 5126:return kb;case 35664:return Ub;case 35665:return Ob;case 35666:return Fb;case 35674:return Bb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Gb;case 35668:case 35672:return jb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return Yb;case 36295:return qb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Jb}}function tT(t,e){t.uniform1fv(this.addr,e)}function nT(t,e){const n=aa(e,this.size,2);t.uniform2fv(this.addr,n)}function iT(t,e){const n=aa(e,this.size,3);t.uniform3fv(this.addr,n)}function rT(t,e){const n=aa(e,this.size,4);t.uniform4fv(this.addr,n)}function sT(t,e){const n=aa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aT(t,e){const n=aa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oT(t,e){const n=aa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lT(t,e){t.uniform1iv(this.addr,e)}function cT(t,e){t.uniform2iv(this.addr,e)}function uT(t,e){t.uniform3iv(this.addr,e)}function dT(t,e){t.uniform4iv(this.addr,e)}function fT(t,e){t.uniform1uiv(this.addr,e)}function hT(t,e){t.uniform2uiv(this.addr,e)}function pT(t,e){t.uniform3uiv(this.addr,e)}function mT(t,e){t.uniform4uiv(this.addr,e)}function gT(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Mf:a=qx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function xT(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$x,s[a])}function vT(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Zx,s[a])}function _T(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Kx,s[a])}function yT(t){switch(t){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return aT;case 35676:return oT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return dT;case 5125:return fT;case 36294:return hT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return _T}}class ST{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eT(n.type)}}class MT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yT(n.type)}}class ET{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function bT(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),a=Lu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){km(n,u===void 0?new ST(o,t,e):new MT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new ET(o),km(n,p)),n=p}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);bT(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Um(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const TT=37297;let wT=0;function AT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Om=new ze;function CT(t){Qe._getMatrix(Om,Qe.workingColorSpace,t);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case rc:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+AT(t.getShaderSource(e),o)}else return s}function RT(t,e){const n=CT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const NT={[gx]:"Linear",[xx]:"Reinhard",[vx]:"Cineon",[_x]:"ACESFilmic",[Sx]:"AgX",[Mx]:"Neutral",[yx]:"Custom"};function PT(t,e){const n=NT[e];return n===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new W;function IT(){Qe.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function DT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ia(t){return t!==""}function Bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(t){return t.replace(UT,FT)}const OT=new Map;function FT(t,e){let n=Xe[e];if(n===void 0){const i=OT.get(e);if(i!==void 0)n=Xe[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ef(n)}const BT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(t){return t.replace(BT,zT)}function zT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HT={[El]:"SHADOWMAP_TYPE_PCF",[Pa]:"SHADOWMAP_TYPE_VSM"};function VT(t){return HT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GT={[Kr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[bc]:"ENVMAP_TYPE_CUBE_UV"};function jT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":GT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const WT={[Js]:"ENVMAP_MODE_REFRACTION"};function XT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":WT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YT={[mx]:"ENVMAP_BLENDING_MULTIPLY",[CS]:"ENVMAP_BLENDING_MIX",[RS]:"ENVMAP_BLENDING_ADD"};function qT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":YT[t.combine]||"ENVMAP_BLENDING_NONE"}function KT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $T(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=VT(n),u=jT(n),h=XT(n),p=qT(n),d=KT(n),m=LT(n),x=DT(s),E=r.createProgram();let g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ia).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ia).join(`
`),f.length>0&&(f+=`
`)):(g=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),f=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==bi?PT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,RT("linearToOutputTexel",n.outputColorSpace),IT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),a=Ef(a),a=Bm(a,n),a=zm(a,n),o=Ef(o),o=Bm(o,n),o=zm(o,n),a=Hm(a),o=Hm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=v+g+a,S=v+f+o,T=Um(r,r.VERTEX_SHADER,b),w=Um(r,r.FRAGMENT_SHADER,S);r.attachShader(E,T),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(E)||"",F=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(w)||"",D=N.trim(),$=F.trim(),q=k.trim();let V=!0,B=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,w);else{const Y=Fm(r,T,"vertex"),Q=Fm(r,w,"fragment");lt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Y+`
`+Q)}else D!==""?Fe("WebGLProgram: Program Info Log:",D):($===""||q==="")&&(B=!1);B&&(P.diagnostics={runnable:V,programLog:D,vertexShader:{log:$,prefix:g},fragmentShader:{log:q,prefix:f}})}r.deleteShader(T),r.deleteShader(w),y=new Cl(r,E),A=kT(r,E)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(E,TT)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=w,this}let ZT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JT(e),n.set(e,i)),i}}class JT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function ew(t){return t===$r||t===tc||t===nc}function tw(t,e,n,i,r,s){const a=new Lx,o=new QT,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function E(y,A,I,P,N,F){const k=P.fog,D=N.geometry,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||$,q),B=V&&V.mapping===bc?V.image.height:null,Y=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Fe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,de=Q!==void 0?Q.length:0;let ye=0;D.morphAttributes.position!==void 0&&(ye=1),D.morphAttributes.normal!==void 0&&(ye=2),D.morphAttributes.color!==void 0&&(ye=3);let Ye,Oe,Be,K;if(Y){const ct=xi[Y];Ye=ct.vertexShader,Oe=ct.fragmentShader}else{Ye=y.vertexShader,Oe=y.fragmentShader;const ct=o.getVertexShaderStage(y),it=o.getFragmentShaderStage(y);o.update(y,ct,it),Be=ct.id,K=it.id}const ie=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,je=!!y.map,yt=!!y.matcap,He=!!V,qe=!!y.aoMap,ot=!!y.lightMap,Ve=!!y.bumpMap&&y.wireframe===!1,rt=!!y.normalMap,Tt=!!y.displacementMap,Lt=!!y.emissiveMap,be=!!y.metalnessMap,De=!!y.roughnessMap,U=y.anisotropy>0,Pt=y.clearcoat>0,nt=y.dispersion>0,R=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,X=y.transmission>0,Z=U&&!!y.anisotropyMap,ae=Pt&&!!y.clearcoatMap,ce=Pt&&!!y.clearcoatNormalMap,J=Pt&&!!y.clearcoatRoughnessMap,te=_&&!!y.iridescenceMap,ue=_&&!!y.iridescenceThicknessMap,Ne=z&&!!y.sheenColorMap,me=z&&!!y.sheenRoughnessMap,fe=!!y.specularMap,Pe=!!y.specularColorMap,Le=!!y.specularIntensityMap,Ue=X&&!!y.transmissionMap,O=X&&!!y.thicknessMap,he=!!y.gradientMap,ee=!!y.alphaMap,pe=y.alphaTest>0,oe=!!y.alphaHash,re=!!y.extensions;let Ae=bi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ae=t.toneMapping);const Te={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:Oe,defines:y.defines,customVertexShaderID:Be,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:yt,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:B,aoMap:qe,lightMap:ot,bumpMap:Ve,normalMap:rt,displacementMap:Tt,emissiveMap:Lt,normalMapObjectSpace:rt&&y.normalMapType===IS,normalMapTangentSpace:rt&&y.normalMapType===yf,packedNormalMap:rt&&y.normalMapType===yf&&ew(y.normalMap.format),metalnessMap:be,roughnessMap:De,anisotropy:U,anisotropyMap:Z,clearcoat:Pt,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:nt,retroreflection:R,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:fe,specularColorMap:Pe,specularIntensityMap:Le,transmission:X,transmissionMap:Ue,thicknessMap:O,gradientMap:he,opaque:y.transparent===!1&&y.blending===Va&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:oe,combine:y.combine,mapUv:je&&x(y.map.channel),aoMapUv:qe&&x(y.aoMap.channel),lightMapUv:ot&&x(y.lightMap.channel),bumpMapUv:Ve&&x(y.bumpMap.channel),normalMapUv:rt&&x(y.normalMap.channel),displacementMapUv:Tt&&x(y.displacementMap.channel),emissiveMapUv:Lt&&x(y.emissiveMap.channel),metalnessMapUv:be&&x(y.metalnessMap.channel),roughnessMapUv:De&&x(y.roughnessMap.channel),anisotropyMapUv:Z&&x(y.anisotropyMap.channel),clearcoatMapUv:ae&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(y.sheenRoughnessMap.channel),specularMapUv:fe&&x(y.specularMap.channel),specularColorMapUv:Pe&&x(y.specularColorMap.channel),specularIntensityMapUv:Le&&x(y.specularIntensityMap.channel),transmissionMapUv:Ue&&x(y.transmissionMap.channel),thicknessMapUv:O&&x(y.thicknessMap.channel),alphaMapUv:ee&&x(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(rt||U),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(je||ee),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&rt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ae,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:Lt&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ri,flipSided:y.side===wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(A,y),v(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function f(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){const A=m[y.type];let I;if(A){const P=xi[A];I=v1.clone(P.uniforms)}else I=y.uniforms;return I}function S(y,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new $T(t,A,y,r),u.push(I),h.set(A,I)),I}function T(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:b,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:C}}function nw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,x,E,g,f){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:g,group:f},t[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=x,v.materialVariant=a(d),v.groupOrder=E,v.renderOrder=d.renderOrder,v.z=g,v.group=f),e++,v}function c(d,m,x,E,g,f,v){v.reversedDepth===!0&&(g=-g);const b=o(d,m,x,E,g,f);x.transmission>0?i.push(b):x.transparent===!0?r.push(b):n.push(b)}function u(d,m,x,E,g,f){const v=o(d,m,x,E,g,f);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):n.unshift(v)}function h(d,m){n.length>1&&n.sort(d||iw),i.length>1&&i.sort(m||Gm),r.length>1&&r.sort(m||Gm)}function p(){for(let d=e,m=t.length;d<m;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function rw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new jm,t.set(i,[a])):r>=s.length?(a=new jm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new W,color:new et};break;case"SpotLight":n={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function aw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ow=0;function lw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cw(t){const e=new sw,n=aw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new Rt,a=new Rt;function o(u){let h=0,p=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let m=0,x=0,E=0,g=0,f=0,v=0,b=0,S=0,T=0,w=0,C=0,y=0,A=0,I=0;u.sort(lw);for(let N=0,F=u.length;N<F;N++){const k=u[N],D=k.color,$=k.intensity,q=k.distance;let V=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===$r?V=k.shadow.map.texture:V=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=D.r*$,p+=D.g*$,d+=D.b*$;else if(k.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(k.sh.coefficients[B],$);I++}else if(k.isSunLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,Q=n.get(k);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[x]=Q,i.sunShadowMap[x]=V;const de=Y.getViewportCount();for(let ye=0;ye<de;ye++)i.sunShadowMatrix[E+ye]=Y.getMatrix(ye),i.sunShadowCascade[E+ye]=Y._cascadeData[ye];E+=de,x++}i.sun[m]=B,m++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,Q=n.get(k);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=k.shadow.matrix,T++}i.directional[g]=B,g++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(D).multiplyScalar($),B.distance=q,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,i.spot[v]=B;const Y=k.shadow;if(k.map&&(i.spotLightMap[y]=k.map,y++,Y.updateMatrices(k),k.castShadow&&A++),i.spotLightMatrix[v]=Y.matrix,k.castShadow){const Q=n.get(k);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=V,C++}v++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(D).multiplyScalar($),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),i.rectArea[b]=B,b++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const Y=k.shadow,Q=n.get(k);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=V,i.pointShadowMatrix[f]=k.shadow.matrix,w++}i.point[f]=B,f++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar($),B.groundColor.copy(k.groundColor).multiplyScalar($),i.hemi[S]=B,S++}}b>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const P=i.hash;(P.sunLength!==m||P.directionalLength!==g||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==S||P.numSunShadows!==x||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==C||P.numSpotMaps!==y||P.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=g,i.spot.length=v,i.rectArea.length=b,i.point.length=f,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,P.sunLength=m,P.directionalLength=g,P.pointLength=f,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=S,P.numSunShadows=x,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=C,P.numSpotMaps=y,P.numLightProbes=I,i.version=ow++)}function c(u,h){let p=0,d=0,m=0,x=0,E=0,g=0;const f=h.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){const S=u[v];if(S.isSunLight){const T=i.sun[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(S.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),x++}else if(S.isRectAreaLight){const T=i.rectArea[E];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),E++}else if(S.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),g++}}}return{setup:o,setupView:c,state:i}}function Wm(t){const e=new cw(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function uw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wm(t),e.set(r,[o])):s>=a.length?(o=new Wm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hw=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],pw=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Xm=new Rt,wa=new W,Du=new W;function mw(t,e,n){let i=new Ph;const r=new tt,s=new tt,a=new At,o=new M1,c=new E1,u={},h=n.maxTextureSize,p={[qr]:wn,[wn]:qr,[ri]:ri},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:dw,fragmentShader:fw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Fn;x.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new dt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let f=this.type;this.render=function(w,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===fx&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=El);const A=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=f!==this.type;F&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(D=>D.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,D=w.length;k<D;k++){const $=w[k],q=$.shadow;if(q===void 0){Fe("WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const V=q.getFrameExtents();r.multiply(V),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,q.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=B,q.map===null||F===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Pa){if($.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ci(r.x,r.y,{format:$r,type:Ai,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),q.map.texture.name=$.name+".shadowMap",q.map.depthTexture=new ho(r.x,r.y,yi),q.map.depthTexture.name=$.name+".shadowMapDepth",q.map.depthTexture.format=Yi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt}else $.isPointLight?(q.map=new Yx(r.x),q.map.depthTexture=new g1(r.x,wi)):(q.map=new ci(r.x,r.y),q.map.depthTexture=new ho(r.x,r.y,wi)),q.map.depthTexture.name=$.name+".shadowMap",q.map.depthTexture.format=Yi,this.type===El?(q.map.depthTexture.compareFunction=B?Ch:Ah,q.map.depthTexture.minFilter=Kt,q.map.depthTexture.magFilter=Kt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const Y=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();$.isPointLight!==!0&&q.updateMatrices($,y);for(let Q=0;Q<Y;Q++){const de=q.getCamera(Q);if($.isPointLight){const ye=q.camera,Ye=q.matrix,Oe=$.distance||ye.far;Oe!==ye.far&&(ye.far=Oe,ye.updateProjectionMatrix()),wa.setFromMatrixPosition($.matrixWorld),ye.position.copy(wa),Du.copy(ye.position),Du.add(hw[Q]),ye.up.copy(pw[Q]),ye.lookAt(Du),ye.updateMatrixWorld(),Ye.makeTranslation(-wa.x,-wa.y,-wa.z),Xm.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Xm,ye.coordinateSystem,ye.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Q),t.clear();else{Q===0&&(t.setRenderTarget(q.map),t.clear());const ye=q.getViewport(Q);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),N.viewport(a)}i=q.getFrustum(Q),S(C,y,de,$,this.type)}q.isPointLightShadow!==!0&&this.type===Pa&&v(q,y),q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(A,I,P)};function v(w,C){const y=e.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new ci(r.x,r.y,{format:$r,type:Ai}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,y,d,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,y,m,E,null)}function b(w,C,y,A){let I=null;const P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=I.uuid,F=C.uuid;let k=u[N];k===void 0&&(k={},u[N]=k);let D=k[F];D===void 0&&(D=I.clone(),k[F]=D,C.addEventListener("dispose",T)),I=D}if(I.visible=C.visible,I.wireframe=C.wireframe,A===Pa?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:p[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=t.properties.get(I);N.light=y}return I}function S(w,C,y,A,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Pa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const F=e.update(w),k=w.material;if(Array.isArray(k)){const D=F.groups;for(let $=0,q=D.length;$<q;$++){const V=D[$],B=k[V.materialIndex];if(B&&B.visible){const Y=b(w,B,A,I);w.onBeforeShadow(t,w,C,y,F,Y,V),t.renderBufferDirect(y,null,F,Y,w,V),w.onAfterShadow(t,w,C,y,F,Y,V)}}}else if(k.visible){const D=b(w,k,A,I);w.onBeforeShadow(t,w,C,y,F,D,null),t.renderBufferDirect(y,null,F,D,w,null),w.onAfterShadow(t,w,C,y,F,D,null)}}const N=w.children;for(let F=0,k=N.length;F<k;F++)S(N[F],C,y,A,I)}function T(w){w.target.removeEventListener("dispose",T);for(const y in u){const A=u[y],I=w.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function gw(t,e){function n(){let O=!1;const he=new At;let ee=null;const pe=new At(0,0,0,0);return{setMask:function(oe){ee!==oe&&!O&&(t.colorMask(oe,oe,oe,oe),ee=oe)},setLocked:function(oe){O=oe},setClear:function(oe,re,Ae,Te,ct){ct===!0&&(oe*=Te,re*=Te,Ae*=Te),he.set(oe,re,Ae,Te),pe.equals(he)===!1&&(t.clearColor(oe,re,Ae,Te),pe.copy(he))},reset:function(){O=!1,ee=null,pe.set(-1,0,0,0)}}}function i(){let O=!1,he=!1,ee=null,pe=null,oe=null;return{setReversed:function(re){if(he!==re){const Ae=e.get("EXT_clip_control");re?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Te=oe;oe=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(re){re?ie(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(re){ee!==re&&!O&&(t.depthMask(re),ee=re)},setFunc:function(re){if(he&&(re=jS[re]),pe!==re){switch(re){case kd:t.depthFunc(t.NEVER);break;case Ud:t.depthFunc(t.ALWAYS);break;case Od:t.depthFunc(t.LESS);break;case lo:t.depthFunc(t.LEQUAL);break;case Fd:t.depthFunc(t.EQUAL);break;case Bd:t.depthFunc(t.GEQUAL);break;case zd:t.depthFunc(t.GREATER);break;case Hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=re}},setLocked:function(re){O=re},setClear:function(re){oe!==re&&(oe=re,he&&(re=1-re),t.clearDepth(re))},reset:function(){O=!1,ee=null,pe=null,oe=null,he=!1}}}function r(){let O=!1,he=null,ee=null,pe=null,oe=null,re=null,Ae=null,Te=null,ct=null;return{setTest:function(it){O||(it?ie(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(it){he!==it&&!O&&(t.stencilMask(it),he=it)},setFunc:function(it,xn,vn){(ee!==it||pe!==xn||oe!==vn)&&(t.stencilFunc(it,xn,vn),ee=it,pe=xn,oe=vn)},setOp:function(it,xn,vn){(re!==it||Ae!==xn||Te!==vn)&&(t.stencilOp(it,xn,vn),re=it,Ae=xn,Te=vn)},setLocked:function(it){O=it},setClear:function(it){ct!==it&&(t.clearStencil(it),ct=it)},reset:function(){O=!1,he=null,ee=null,pe=null,oe=null,re=null,Ae=null,Te=null,ct=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},p={},d={},m=new WeakMap,x=[],E=null,g=!1,f=null,v=null,b=null,S=null,T=null,w=null,C=null,y=new et(0,0,0),A=0,I=!1,P=null,N=null,F=null,k=null,D=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=V>=2);let Y=null,Q={};const de=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Ye=new At().fromArray(de),Oe=new At().fromArray(ye);function Be(O,he,ee,pe){const oe=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<ee;Ae++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(he+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return re}const K={};K[t.TEXTURE_2D]=Be(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(lo),Ve(!1),rt(Kp),ie(t.CULL_FACE),qe(Hi);function ie(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function _e(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function ke(O,he){return d[O]!==he?(t.bindFramebuffer(O,he),d[O]=he,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(O,he){let ee=x,pe=!1;if(O){ee=m.get(he),ee===void 0&&(ee=[],m.set(he,ee));const oe=O.textures;if(ee.length!==oe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Ae=oe.length;re<Ae;re++)ee[re]=t.COLOR_ATTACHMENT0+re;ee.length=oe.length,pe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,pe=!0);pe&&t.drawBuffers(ee)}function je(O){return E!==O?(t.useProgram(O),E=O,!0):!1}const yt={[_s]:t.FUNC_ADD,[dS]:t.FUNC_SUBTRACT,[fS]:t.FUNC_REVERSE_SUBTRACT};yt[hS]=t.MIN,yt[pS]=t.MAX;const He={[mS]:t.ZERO,[gS]:t.ONE,[xS]:t.SRC_COLOR,[hx]:t.SRC_ALPHA,[ES]:t.SRC_ALPHA_SATURATE,[SS]:t.DST_COLOR,[_S]:t.DST_ALPHA,[vS]:t.ONE_MINUS_SRC_COLOR,[px]:t.ONE_MINUS_SRC_ALPHA,[MS]:t.ONE_MINUS_DST_COLOR,[yS]:t.ONE_MINUS_DST_ALPHA,[bS]:t.CONSTANT_COLOR,[TS]:t.ONE_MINUS_CONSTANT_COLOR,[wS]:t.CONSTANT_ALPHA,[AS]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(O,he,ee,pe,oe,re,Ae,Te,ct,it){if(O===Hi){g===!0&&(_e(t.BLEND),g=!1);return}if(g===!1&&(ie(t.BLEND),g=!0),O!==uS){if(O!==f||it!==I){if((v!==_s||T!==_s)&&(t.blendEquation(t.FUNC_ADD),v=_s,T=_s),it)switch(O){case Va:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $p:t.blendFunc(t.ONE,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",O);break}else switch(O){case Va:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $p:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Zp:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qp:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",O);break}b=null,S=null,w=null,C=null,y.set(0,0,0),A=0,f=O,I=it}return}oe=oe||he,re=re||ee,Ae=Ae||pe,(he!==v||oe!==T)&&(t.blendEquationSeparate(yt[he],yt[oe]),v=he,T=oe),(ee!==b||pe!==S||re!==w||Ae!==C)&&(t.blendFuncSeparate(He[ee],He[pe],He[re],He[Ae]),b=ee,S=pe,w=re,C=Ae),(Te.equals(y)===!1||ct!==A)&&(t.blendColor(Te.r,Te.g,Te.b,ct),y.copy(Te),A=ct),f=O,I=!1}function ot(O,he){O.side===ri?_e(t.CULL_FACE):ie(t.CULL_FACE);let ee=O.side===wn;he&&(ee=!ee),Ve(ee),O.blending===Va&&O.transparent===!1?qe(Hi):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const pe=O.stencilWrite;o.setTest(pe),pe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(O){P!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),P=O)}function rt(O){O!==lS?(ie(t.CULL_FACE),O!==N&&(O===Kp?t.cullFace(t.BACK):O===cS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),N=O}function Tt(O){O!==F&&(q&&t.lineWidth(O),F=O)}function Lt(O,he,ee){O?(ie(t.POLYGON_OFFSET_FILL),(k!==he||D!==ee)&&(k=he,D=ee,a.getReversed()&&(he=-he),t.polygonOffset(he,ee))):_e(t.POLYGON_OFFSET_FILL)}function be(O){O?ie(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function De(O){O===void 0&&(O=t.TEXTURE0+$-1),Y!==O&&(t.activeTexture(O),Y=O)}function U(O,he,ee){ee===void 0&&(Y===null?ee=t.TEXTURE0+$-1:ee=Y);let pe=Q[ee];pe===void 0&&(pe={type:void 0,texture:void 0},Q[ee]=pe),(pe.type!==O||pe.texture!==he)&&(Y!==ee&&(t.activeTexture(ee),Y=ee),t.bindTexture(O,he||K[O]),pe.type=O,pe.texture=he)}function Pt(){const O=Q[Y];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function _(){try{t.texSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function z(){try{t.texSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function ae(){try{t.texStorage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function ce(){try{t.texStorage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function J(){try{t.texImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function te(){try{t.texImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function ue(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function Ne(O,he){p[O]!==he&&(t.pixelStorei(O,he),p[O]=he)}function me(O){Ye.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ye.copy(O))}function fe(O){Oe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function Pe(O,he){let ee=u.get(he);ee===void 0&&(ee=new WeakMap,u.set(he,ee));let pe=ee.get(O);pe===void 0&&(pe=t.getUniformBlockIndex(he,O.name),ee.set(O,pe))}function Le(O,he){const pe=u.get(he).get(O);c.get(he)!==pe&&(t.uniformBlockBinding(he,pe,O.__bindingPointIndex),c.set(he,pe))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},Y=null,Q={},d={},m=new WeakMap,x=[],E=null,g=!1,f=null,v=null,b=null,S=null,T=null,w=null,C=null,y=new et(0,0,0),A=0,I=!1,P=null,N=null,F=null,k=null,D=null,Ye.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:_e,bindFramebuffer:ke,drawBuffers:ve,useProgram:je,setBlending:qe,setMaterial:ot,setFlipSided:Ve,setCullFace:rt,setLineWidth:Tt,setPolygonOffset:Lt,setScissorTest:be,activeTexture:De,bindTexture:U,unbindTexture:Pt,compressedTexImage2D:nt,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Ne,getParameter:ue,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:ce,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:me,viewport:fe,reset:Ue}}function xw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,_){return x?new OffscreenCanvas(R,_):sc("canvas")}function g(R,_,z){let X=1;const Z=nt(R);if((Z.width>z||Z.height>z)&&(X=z/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(X*Z.width),ce=Math.floor(X*Z.height);d===void 0&&(d=E(ae,ce));const J=_?E(ae,ce):d;return J.width=ae,J.height=ce,J.getContext("2d").drawImage(R,0,0,ae,ce),Fe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+ce+")."),J}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,_,z,X,Z,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;X&&(ce=e.get("EXT_texture_norm16"),ce||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8),z===t.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),z===t.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),_===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8),z===t.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),z===t.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGB8UI),z===t.UNSIGNED_SHORT&&(J=t.RGB16UI),z===t.UNSIGNED_INT&&(J=t.RGB32UI),z===t.BYTE&&(J=t.RGB8I),z===t.SHORT&&(J=t.RGB16I),z===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),z===t.UNSIGNED_INT&&(J=t.RGBA32UI),z===t.BYTE&&(J=t.RGBA8I),z===t.SHORT&&(J=t.RGBA16I),z===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),z===t.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const te=ae?rc:Qe.getTransfer(Z);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=te===ht?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),z===t.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(R,_){let z;return R?_===null||_===wi||_===uo?z=t.DEPTH24_STENCIL8:_===yi?z=t.DEPTH32F_STENCIL8:_===co&&(z=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===uo?z=t.DEPTH_COMPONENT24:_===yi?z=t.DEPTH_COMPONENT32F:_===co&&(z=t.DEPTH_COMPONENT16),z}function w(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){const _=R.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(R){const _=R.target;_.removeEventListener("dispose",y),P(_)}function A(R){const _=i.get(R);if(_.__webglInit===void 0)return;const z=R.source,X=m.get(z);if(X){const Z=X[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(R),Object.keys(X).length===0&&m.delete(z)}i.remove(R)}function I(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const z=R.source,X=m.get(z);delete X[_.__cacheKey],a.memory.textures--}function P(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Z=0;Z<_.__webglFramebuffer[X].length;Z++)t.deleteFramebuffer(_.__webglFramebuffer[X][Z]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=R.textures;for(let X=0,Z=z.length;X<Z;X++){const ae=i.get(z[X]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(R)}let N=0;function F(){N=0}function k(){return N}function D(R){N=R}function $(){const R=N;return R>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function q(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function V(R,_){const z=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const X=R.image;if(X===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(z,R,_);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function B(R,_){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){_e(z,R,_);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function Y(R,_){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){_e(z,R,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function Q(R,_){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){ke(z,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const de={[Fr]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[Vd]:t.MIRRORED_REPEAT},ye={[qt]:t.NEAREST,[NS]:t.NEAREST_MIPMAP_NEAREST,[Ho]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[ru]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},Ye={[DS]:t.NEVER,[BS]:t.ALWAYS,[kS]:t.LESS,[Ah]:t.LEQUAL,[US]:t.EQUAL,[Ch]:t.GEQUAL,[OS]:t.GREATER,[FS]:t.NOTEQUAL};function Oe(R,_){if(_.type===yi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===ru||_.magFilter===Ho||_.magFilter===Br||_.minFilter===Kt||_.minFilter===ru||_.minFilter===Ho||_.minFilter===Br)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,de[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,de[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,de[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ye[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==Ho&&_.minFilter!==Br||_.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Be(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));const X=_.source;let Z=m.get(X);Z===void 0&&(Z={},m.set(X,Z));const ae=q(_);if(ae!==R.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ae].usedTimes++;const ce=Z[R.__cacheKey];ce!==void 0&&(Z[R.__cacheKey].usedTimes--,ce.usedTimes===0&&I(_)),R.__cacheKey=ae,R.__webglTexture=Z[ae].texture}return z}function K(R,_,z){return Math.floor(Math.floor(R/z)/_)}function ie(R,_,z,X){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,X,_.data);else{ae.sort((Ne,me)=>Ne.start-me.start);let ce=0;for(let Ne=1;Ne<ae.length;Ne++){const me=ae[ce],fe=ae[Ne],Pe=me.start+me.count,Le=K(fe.start,_.width,4),Ue=K(me.start,_.width,4);fe.start<=Pe+1&&Le===Ue&&K(fe.start+fe.count-1,_.width,4)===Le?me.count=Math.max(me.count,fe.start+fe.count-me.start):(++ce,ae[ce]=fe)}ae.length=ce+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,me=ae.length;Ne<me;Ne++){const fe=ae[Ne],Pe=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Ue=Pe%_.width,O=Math.floor(Pe/_.width),he=Le,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ue,O,he,ee,z,X,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function _e(R,_,z){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const Z=Be(R,_),ae=_.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+z);const ce=i.get(ae);if(ae.version!==ce.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=Qe.getPrimaries(Qe.workingColorSpace),pe=_.colorSpace===ur?null:Qe.getPrimaries(_.colorSpace),oe=_.colorSpace===ur||ee===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=g(_.image,!1,r.maxTextureSize);te=Pt(_,te);const ue=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let me=S(_.internalFormat,ue,Ne,_.normalized,_.colorSpace,_.isVideoTexture);Oe(X,_);let fe;const Pe=_.mipmaps,Le=_.isVideoTexture!==!0,Ue=ce.__version===void 0||Z===!0,O=ae.dataReady,he=w(_,te);if(_.isDepthTexture)me=T(_.format===zr,_.type),Ue&&(Le?n.texStorage2D(t.TEXTURE_2D,1,me,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,me,te.width,te.height,0,ue,Ne,null));else if(_.isDataTexture)if(Pe.length>0){Le&&Ue&&n.texStorage2D(t.TEXTURE_2D,he,me,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)fe=Pe[ee],Le?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,fe.width,fe.height,ue,Ne,fe.data):n.texImage2D(t.TEXTURE_2D,ee,me,fe.width,fe.height,0,ue,Ne,fe.data);_.generateMipmaps=!1}else Le?(Ue&&n.texStorage2D(t.TEXTURE_2D,he,me,te.width,te.height),O&&ie(_,te,ue,Ne)):n.texImage2D(t.TEXTURE_2D,0,me,te.width,te.height,0,ue,Ne,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,pe=Pe.length;ee<pe;ee++)if(fe=Pe[ee],_.format!==ai)if(ue!==null)if(Le){if(O)if(_.layerUpdates.size>0){const oe=bm(fe.width,fe.height,_.format,_.type);for(const re of _.layerUpdates){const Ae=fe.data.subarray(re*oe/fe.data.BYTES_PER_ELEMENT,(re+1)*oe/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,re,fe.width,fe.height,1,ue,Ae)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,te.depth,ue,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,me,fe.width,fe.height,te.depth,0,fe.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,te.depth,ue,Ne,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,me,fe.width,fe.height,te.depth,0,ue,Ne,fe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Le&&Ue&&n.texStorage2D(t.TEXTURE_2D,he,me,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)fe=Pe[ee],_.format!==ai?ue!==null?Le?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,fe.width,fe.height,ue,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,me,fe.width,fe.height,0,fe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,fe.width,fe.height,ue,Ne,fe.data):n.texImage2D(t.TEXTURE_2D,ee,me,fe.width,fe.height,0,ue,Ne,fe.data)}else if(_.isDataArrayTexture)if(Le){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,te.width,te.height,te.depth),O)if(_.layerUpdates.size>0){const ee=bm(te.width,te.height,_.format,_.type);for(const pe of _.layerUpdates){const oe=te.data.subarray(pe*ee/te.data.BYTES_PER_ELEMENT,(pe+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,te.width,te.height,1,ue,Ne,oe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Ne,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,ue,Ne,te.data);else if(_.isData3DTexture)Le?(Ue&&n.texStorage3D(t.TEXTURE_3D,he,me,te.width,te.height,te.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Ne,te.data)):n.texImage3D(t.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,ue,Ne,te.data);else if(_.isFramebufferTexture){if(Ue)if(Le)n.texStorage2D(t.TEXTURE_2D,he,me,te.width,te.height);else{let ee=te.width,pe=te.height;for(let oe=0;oe<he;oe++)n.texImage2D(t.TEXTURE_2D,oe,me,ee,pe,0,ue,Ne,null),ee>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),p.add(_),ee.onpaint=pe=>{const oe=pe.changedElements;for(const re of p)oe.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const oe=t.RGBA,re=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,oe,re,Ae,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&Ue){const ee=nt(Pe[0]);n.texStorage2D(t.TEXTURE_2D,he,me,ee.width,ee.height)}for(let ee=0,pe=Pe.length;ee<pe;ee++)fe=Pe[ee],Le?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue,Ne,fe):n.texImage2D(t.TEXTURE_2D,ee,me,ue,Ne,fe);_.generateMipmaps=!1}else if(Le){if(Ue){const ee=nt(te);n.texStorage2D(t.TEXTURE_2D,he,me,ee.width,ee.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ne,te)}else n.texImage2D(t.TEXTURE_2D,0,me,ue,Ne,te);f(_)&&v(X),ce.__version=ae.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ke(R,_,z){if(_.image.length!==6)return;const X=Be(R,_),Z=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const ae=i.get(Z);if(Z.version!==ae.__version||X===!0){n.activeTexture(t.TEXTURE0+z);const ce=Qe.getPrimaries(Qe.workingColorSpace),J=_.colorSpace===ur?null:Qe.getPrimaries(_.colorSpace),te=_.colorSpace===ur||ce===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!ue&&!Ne?me[re]=g(_.image[re],!0,r.maxCubemapSize):me[re]=Ne?_.image[re].image:_.image[re],me[re]=Pt(_,me[re]);const fe=me[0],Pe=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),Ue=S(_.internalFormat,Pe,Le,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,he=ae.__version===void 0||X===!0,ee=Z.dataReady;let pe=w(_,fe);Oe(t.TEXTURE_CUBE_MAP,_);let oe;if(ue){O&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,fe.width,fe.height);for(let re=0;re<6;re++){oe=me[re].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const Te=oe[Ae];_.format!==ai?Pe!==null?O?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,Ue,Te.width,Te.height,0,Te.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Te.width,Te.height,Pe,Le,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,Ue,Te.width,Te.height,0,Pe,Le,Te.data)}}}else{if(oe=_.mipmaps,O&&he){oe.length>0&&pe++;const re=nt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,re.width,re.height)}for(let re=0;re<6;re++)if(Ne){O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,Pe,Le,me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,me[re].width,me[re].height,0,Pe,Le,me[re].data);for(let Ae=0;Ae<oe.length;Ae++){const ct=oe[Ae].image[re].image;O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,ct.width,ct.height,Pe,Le,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,Ue,ct.width,ct.height,0,Pe,Le,ct.data)}}else{O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,Le,me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,Pe,Le,me[re]);for(let Ae=0;Ae<oe.length;Ae++){const Te=oe[Ae];O?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,Pe,Le,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,Ue,Pe,Le,Te.image[re])}}}f(_)&&v(t.TEXTURE_CUBE_MAP),ae.__version=Z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ve(R,_,z,X,Z,ae){const ce=s.convert(z.format,z.colorSpace),J=s.convert(z.type),te=S(z.internalFormat,ce,J,z.normalized,z.colorSpace),ue=i.get(_),Ne=i.get(z);if(Ne.__renderTarget=_,!ue.__hasExternalTextures){const me=Math.max(1,_.width>>ae),fe=Math.max(1,_.height>>ae);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ae,te,me,fe,_.depth,0,ce,J,null):n.texImage2D(Z,ae,te,me,fe,0,ce,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),De(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Z,Ne.__webglTexture,0,be(_)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Z,Ne.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const X=_.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ae=T(_.stencilBuffer,Z),ce=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;De(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be(_),ae,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,be(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,R)}else{const X=_.textures;for(let Z=0;Z<X.length;Z++){const ae=X[Z],ce=s.convert(ae.format,ae.colorSpace),J=s.convert(ae.type),te=S(ae.internalFormat,ce,J,ae.normalized,ae.colorSpace);De(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be(_),te,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,be(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function yt(R,_,z){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,_.depthTexture);const ue=s.convert(_.depthTexture.format),Ne=s.convert(_.depthTexture.type);let me;_.depthTexture.format===Yi?me=t.DEPTH_COMPONENT24:_.depthTexture.format===zr&&(me=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,_.width,_.height,0,ue,Ne,null)}}else V(_.depthTexture,0);const ae=Z.__webglTexture,ce=be(_),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,te=_.depthTexture.format===zr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Yi)De(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,ae,0);else if(_.depthTexture.format===zr)De(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(R){const _=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=X}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)yt(_.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?yt(_.__webglFramebuffer[0],R,0):yt(_.__webglFramebuffer,R,0)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),je(_.__webglDepthbuffer[X],R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ae)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),je(_.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,_,z){const X=i.get(R);_!==void 0&&ve(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&He(R)}function ot(R){const _=R.texture,z=i.get(R),X=i.get(_);R.addEventListener("dispose",y);const Z=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,a.memory.textures++),ae){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)z.__webglFramebuffer[J][te]=t.createFramebuffer()}else z.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ce)for(let J=0,te=Z.length;J<te;J++){const ue=i.get(Z[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&De(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];z.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ue=s.convert(te.format,te.colorSpace),Ne=s.convert(te.type),me=S(te.internalFormat,ue,Ne,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),fe=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,z.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),je(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)ve(z.__webglFramebuffer[J][te],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else ve(z.__webglFramebuffer[J],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let J=0,te=Z.length;J<te;J++){const ue=Z[J],Ne=i.get(ue);let me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Ne.__webglTexture),Oe(me,ue),ve(z.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+J,me,0),f(ue)&&v(me)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),Oe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)ve(z.__webglFramebuffer[te],R,_,t.COLOR_ATTACHMENT0,J,te);else ve(z.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,J,0);f(_)&&v(J),n.unbindTexture()}R.depthBuffer&&He(R)}function Ve(R){const _=R.textures;for(let z=0,X=_.length;z<X;z++){const Z=_[z];if(f(Z)){const ae=b(R),ce=i.get(Z).__webglTexture;n.bindTexture(ae,ce),v(ae),n.unbindTexture()}}}const rt=[],Tt=[];function Lt(R){if(R.samples>0){if(De(R)===!1){const _=R.textures,z=R.width,X=R.height;let Z=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),J=_.length>1;if(J)for(let ue=0;ue<_.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ne=i.get(_[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,z,X,0,0,z,X,Z,t.NEAREST),c===!0&&(rt.length=0,Tt.length=0,rt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(rt.push(ae),Tt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<_.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Ne=i.get(_[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function be(R){return Math.min(r.maxSamples,R.samples)}function De(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Pt(R,_){const z=R.colorSpace,X=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ic&&z!==ur&&(Qe.getTransfer(z)===ht?(X!==ai||Z!==In)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",z)),_}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=F,this.getTextureUnits=k,this.setTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=qe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vw(t,e){function n(i,r=ur){let s;const a=Qe.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===wx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===bx)return t.BYTE;if(i===Tx)return t.SHORT;if(i===co)return t.UNSIGNED_SHORT;if(i===Sh)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===Cx)return t.ALPHA;if(i===Rx)return t.RGB;if(i===ai)return t.RGBA;if(i===Yi)return t.DEPTH_COMPONENT;if(i===zr)return t.DEPTH_STENCIL;if(i===Nx)return t.RED;if(i===bh)return t.RED_INTEGER;if(i===$r)return t.RG;if(i===Th)return t.RG_INTEGER;if(i===wh)return t.RGBA_INTEGER;if(i===bl||i===Tl||i===wl||i===Al)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===jd||i===Wd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===qd||i===Kd||i===$d||i===Zd||i===tc||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===qd)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===$d)return s.COMPRESSED_R11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tc)return s.COMPRESSED_RG11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===af)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===of)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===df)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ff)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pf||i===mf||i===gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pf)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xf||i===vf||i===nc||i===_f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new zx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ci({vertexShader:_w,fragmentShader:yw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dt(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mw extends Jr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,d=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",g=new Sw,f={},v=n.getContextAttributes();let b=null,S=null;const T=[],w=[],C=new tt;let y=null,A=null;const I=new Sn;I.viewport=new At;const P=new Sn;P.viewport=new At;const N=[I,P],F=new N1;let k=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=T[K];return ie===void 0&&(ie=new hu,T[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=T[K];return ie===void 0&&(ie=new hu,T[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=T[K];return ie===void 0&&(ie=new hu,T[K]=ie),ie.getHandSpace()};function $(K){const ie=w.indexOf(K.inputSource);if(ie===-1)return;const _e=T[ie];_e!==void 0&&(_e.update(K.inputSource,K.frame,u||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",V);for(let K=0;K<T.length;K++){const ie=w[K];ie!==null&&(w[K]=null,T[K].disconnect(ie))}k=null,D=null,g.reset();for(const K in f)delete f[K];if(e.setRenderTarget(b),m=null,d=null,p=null,r=null,S=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",q),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ke=null,ve=null;v.depth&&(ve=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=v.stencil?zr:Yi,ke=v.stencil?uo:wi);const je={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ci(d.textureWidth,d.textureHeight,{format:ai,type:In,depthTexture:new ho(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,_e),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ci(m.framebufferWidth,m.framebufferHeight,{format:ai,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(K){for(let ie=0;ie<K.removed.length;ie++){const _e=K.removed[ie],ke=w.indexOf(_e);ke>=0&&(w[ke]=null,T[ke].disconnect(_e))}for(let ie=0;ie<K.added.length;ie++){const _e=K.added[ie];let ke=w.indexOf(_e);if(ke===-1){for(let je=0;je<T.length;je++)if(je>=w.length){w.push(_e),ke=je;break}else if(w[je]===null){w[je]=_e,ke=je;break}if(ke===-1)break}const ve=T[ke];ve&&ve.connect(_e)}}const B=new W,Y=new W;function Q(K,ie,_e){B.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(_e.matrixWorld);const ke=B.distanceTo(Y),ve=ie.projectionMatrix.elements,je=_e.projectionMatrix.elements,yt=ve[14]/(ve[10]-1),He=ve[14]/(ve[10]+1),qe=(ve[9]+1)/ve[5],ot=(ve[9]-1)/ve[5],Ve=(ve[8]-1)/ve[0],rt=(je[8]+1)/je[0],Tt=yt*Ve,Lt=yt*rt,be=ke/(-Ve+rt),De=be*-Ve;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(De),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const U=yt+be,Pt=He+be,nt=Tt-De,R=Lt+(ke-De),_=qe*He/Pt*U,z=ot*He/Pt*U;K.projectionMatrix.makePerspective(nt,R,_,z,U,Pt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,_e=K.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),F.near=P.near=I.near=ie,F.far=P.far=I.far=_e,(k!==F.near||D!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,D=F.far),F.layers.mask=K.layers.mask|6,I.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const ke=K.parent,ve=F.cameras;de(F,ke);for(let je=0;je<ve.length;je++)de(ve[je],ke);ve.length===2?Q(F,I,P):F.projectionMatrix.copy(I.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),ye(K,F,ke)};function ye(K,ie,_e){_e===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ac*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let Ye=null;function Oe(K,ie){if(h=ie.getViewerPose(u||a),x=ie,h!==null){const _e=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ke=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let He=0;He<_e.length;He++){const qe=_e[He];let ot=null;if(m!==null)ot=m.getViewport(qe);else{const rt=p.getViewSubImage(d,qe);ot=rt.viewport,He===0&&(e.setRenderTargetTextures(S,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(S))}let Ve=N[He];Ve===void 0&&(Ve=new Sn,Ve.layers.enable(He),Ve.viewport=new At,N[He]=Ve),Ve.matrix.fromArray(qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ot.x,ot.y,ot.width,ot.height),He===0&&(F.matrix.copy(Ve.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(Ve)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const He=p.getDepthInformation(_e[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(ve&&ve.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let He=0;He<_e.length;He++){const qe=_e[He].camera;if(qe){let ot=f[qe];ot||(ot=new zx,f[qe]=ot);const Ve=p.getCameraImage(qe);ot.sourceTexture=Ve}}}}for(let _e=0;_e<T.length;_e++){const ke=w[_e],ve=T[_e];ke!==null&&ve!==void 0&&ve.update(ke,ie,u||a)}Ye&&Ye(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const Be=new Wx;Be.setAnimationLoop(Oe),this.setAnimationLoop=function(K){Ye=K},this.dispose=function(){}}}const Ew=new Rt,Qx=new ze;Qx.set(-1,0,0,0,1,0,0,0,1);function bw(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Hx(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,v,b,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,v,b):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===wn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===wn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=e.get(f),b=v.envMap,S=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Qx),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,v,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=b*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function u(S,T){let w=r[S.id];w===void 0&&(g(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",v));const C=T.program;i.updateUBOMapping(S,C);const y=e.render.frame;s[S.id]!==y&&(d(S),s[S.id]=y)}function h(S){const T=p();S.__bindingPointIndex=T;const w=t.createBuffer(),C=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],w=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,A=w.length;y<A;y++){const I=w[y];if(Array.isArray(I))for(let P=0,N=I.length;P<N;P++)m(I[P],y,P,C);else m(I,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,w,C){if(E(S,T,w,C)===!0){const y=S.__offset,A=S.value;if(Array.isArray(A)){let I=0;for(let P=0;P<A.length;P++){const N=A[P],F=f(N);x(N,S.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function x(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function E(S,T,w,C){const y=S.value,A=T+"_"+w;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{const I=C[A];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(S){const T=S.uniforms;let w=0;const C=16;for(let A=0,I=T.length;A<I;A++){const P=Array.isArray(T[A])?T[A]:[T[A]];for(let N=0,F=P.length;N<F;N++){const k=P[N],D=Array.isArray(k.value)?k.value:[k.value];for(let $=0,q=D.length;$<q;$++){const V=D[$],B=f(V),Y=w%C,Q=Y%B.boundary,de=Y+Q;w+=Q,de!==0&&C-de<B.storage&&(w+=C-de),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=B.storage}}}const y=w%C;return y>0&&(w+=C-y),S.__size=w,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function b(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:b}}const ww=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function Aw(){return mi===null&&(mi=new h1(ww,16,16,$r,Ai),mi.name="DFG_LUT",mi.minFilter=Kt,mi.magFilter=Kt,mi.wrapS=Bi,mi.wrapT=Bi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class Cw{constructor(e={}){const{canvas:n=VS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=In}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=m,g=new Set([wh,Th,bh]),f=new Set([In,wi,co,uo,Mh,Eh]),v=new Uint32Array(4),b=new Int32Array(4),S=new W;let T=null,w=null;const C=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,N=null,F=null,k=null,D=null;this._outputColorSpace=Vn;let $=0,q=0,V=null,B=-1,Y=null;const Q=new At,de=new At;let ye=null;const Ye=new et(0);let Oe=0,Be=n.width,K=n.height,ie=1,_e=null,ke=null;const ve=new At(0,0,Be,K),je=new At(0,0,Be,K);let yt=!1;const He=new Ph;let qe=!1,ot=!1;const Ve=new Rt,rt=new W,Tt=new At,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function De(){return V===null?ie:1}let U=i;function Pt(M,L){return n.getContext(M,L)}let nt,R,_,z,X,Z,ae,ce,J,te,ue,Ne,me,fe,Pe,Le,Ue,O,he,ee,pe,oe,re;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yh}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",xn,!1),U===null){const L="webgl2";if(U=Pt(L,M),U===null)throw Pt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(M){throw n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),lt("WebGLRenderer: "+M.message),M}function Ae(){nt=new Ab(U),nt.init(),pe=new vw(U,nt),R=new xb(U,nt,e,pe),_=new gw(U,nt),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),F=U.createFramebuffer(),k=U.createFramebuffer(),D=U.createFramebuffer(),z=new Nb(U),X=new nw,Z=new xw(U,nt,_,X,R,pe,z),ae=new wb(I),ce=new I1(U),oe=new mb(U,ce),J=new Cb(U,ce,z,oe),te=new Ib(U,J,ce,oe,z),O=new Pb(U,R,Z),Pe=new vb(X),ue=new tw(I,ae,nt,R,oe,Pe),Ne=new bw(I,X),me=new rw,fe=new uw(nt),Ue=new pb(I,ae,_,te,x,c),Le=new mw(I,te,R),re=new Tw(U,z,R,_),he=new gb(U,nt,z),ee=new Rb(U,nt,z),z.programs=ue.programs,I.capabilities=R,I.extensions=nt,I.properties=X,I.renderLists=me,I.shadowMap=Le,I.state=_,I.info=z}E!==In&&(A=new Db(E,n.width,n.height,o,r,s));const Te=new Mw(I,U);this.xr=Te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(Be,K,!1))},this.getSize=function(M){return M.set(Be,K)},this.setSize=function(M,L,H=!0){if(Te.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=M,K=L,n.width=Math.floor(M*ie),n.height=Math.floor(L*ie),H===!0&&(n.style.width=M+"px",n.style.height=L+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Be*ie,K*ie).floor()},this.setDrawingBufferSize=function(M,L,H){Be=M,K=L,ie=H,n.width=Math.floor(M*H),n.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(E===In){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,L,H,G){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,L,H,G),_.viewport(Q.copy(ve).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(je)},this.setScissor=function(M,L,H,G){M.isVector4?je.set(M.x,M.y,M.z,M.w):je.set(M,L,H,G),_.scissor(de.copy(je).multiplyScalar(ie).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(M){_.setScissorTest(yt=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,H=!0){let G=0;if(M){let j=!1;if(V!==null){const le=V.texture.format;j=g.has(le)}if(j){const le=V.texture.type,Se=f.has(le),xe=Ue.getClearColor(),Ce=Ue.getClearAlpha(),Ie=xe.r,We=xe.g,$e=xe.b;Se?(v[0]=Ie,v[1]=We,v[2]=$e,v[3]=Ce,U.clearBufferuiv(U.COLOR,0,v)):(b[0]=Ie,b[1]=We,b[2]=$e,b[3]=Ce,U.clearBufferiv(U.COLOR,0,b))}else G|=U.COLOR_BUFFER_BIT}L&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",xn,!1),Ue.dispose(),me.dispose(),fe.dispose(),X.dispose(),ae.dispose(),te.dispose(),oe.dispose(),re.dispose(),ue.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",la),Te.removeEventListener("sessionend",ca),di.stop()};function ct(M){M.preventDefault(),tm("WebGLRenderer: Context Lost."),P=!0}function it(){tm("WebGLRenderer: Context Restored."),P=!1;const M=z.autoReset,L=Le.enabled,H=Le.autoUpdate,G=Le.needsUpdate,j=Le.type;Ae(),z.autoReset=M,Le.enabled=L,Le.autoUpdate=H,Le.needsUpdate=G,Le.type=j}function xn(M){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vn(M){const L=M.target;L.removeEventListener("dispose",vn),es(L)}function es(M){Mo(M),X.remove(M)}function Mo(M){const L=X.get(M).programs;L!==void 0&&(L.forEach(function(H){ue.releaseProgram(H)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,G,j,le){L===null&&(L=Lt);const Se=j.isMesh&&j.matrixWorld.determinantAffine()<0,xe=Bn(M,L,H,G,j);_.setMaterial(G,Se);let Ce=H.index,Ie=1;if(G.wireframe===!0){if(Ce=J.getWireframeAttribute(H),Ce===void 0)return;Ie=2}const We=H.drawRange,$e=H.attributes.position;let Re=We.start*Ie,ut=(We.start+We.count)*Ie;le!==null&&(Re=Math.max(Re,le.start*Ie),ut=Math.min(ut,(le.start+le.count)*Ie)),Ce!==null?(Re=Math.max(Re,0),ut=Math.min(ut,Ce.count)):$e!=null&&(Re=Math.max(Re,0),ut=Math.min(ut,$e.count));const Ot=ut-Re;if(Ot<0||Ot===1/0)return;oe.setup(j,G,xe,H,Ce);let St,gt=he;if(Ce!==null&&(St=ce.get(Ce),gt=ee,gt.setIndex(St)),j.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*De()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(j.isLine){let en=G.linewidth;en===void 0&&(en=1),_.setLineWidth(en*De()),j.isLineSegments?gt.setMode(U.LINES):j.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else j.isPoints?gt.setMode(U.POINTS):j.isSprite&&gt.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const en=j._multiDrawStarts,Me=j._multiDrawCounts,un=j._multiDrawCount,st=Ce?ce.get(Ce).bytesPerElement:1,zn=X.get(G).currentProgram.getUniforms();for(let fi=0;fi<un;fi++)zn.setValue(U,"_gl_DrawID",fi),gt.render(en[fi]/st,Me[fi])}else if(j.isInstancedMesh)gt.renderInstances(Re,Ot,j.count);else if(H.isInstancedBufferGeometry){const en=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,en);gt.renderInstances(Re,Ot,Me)}else gt.render(Re,Ot)};function oa(M,L,H,G){N!==null&&M.isNodeMaterial&&N.setObject(G,M),qe===!0&&Pe.setState(M,H,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=wn,M.needsUpdate=!0,xt(M,L,G),M.side=qr,M.needsUpdate=!0,xt(M,L,G),M.side=ri):xt(M,L,G)}this.compile=function(M,L,H=null){H===null&&(H=M),N!==null&&N.renderStart(M,L,H),w=fe.get(H),w.init(L),y.push(w),H.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),M!==H&&M.traverseVisible(function(j){j.isLight&&j.layers.test(L.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,qe=Pe.init(this.clippingPlanes,ot),qe===!0&&Pe.setGlobalState(this.clippingPlanes,L),N!==null&&Le.render(w.state.shadowsArray,H,L);const G=new Set;return M.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const le=j.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const xe=le[Se];oa(xe,H,L,j),G.add(xe)}else oa(le,H,L,j),G.add(le)}),w=y.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(M,L,H=null){const G=this.compile(M,L,H);return new Promise(j=>{function le(){if(G.forEach(function(Se){const Ce=X.get(Se).currentProgram;(Ce===void 0||Ce.isReady())&&G.delete(Se)}),G.size===0){j(M);return}setTimeout(le,10)}nt.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ts=null;function Eo(M){ts&&ts(M)}function la(){di.stop()}function ca(){di.start()}const di=new Wx;di.setAnimationLoop(Eo),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(M){ts=M,Te.setAnimationLoop(M),M===null?di.stop():di.start()},Te.addEventListener("sessionstart",la),Te.addEventListener("sessionend",ca),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(M,L);const H=Te.enabled===!0&&Te.isPresenting===!0,G=A!==null&&(V===null||H)&&A.begin(I,V);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(L),L=Te.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,L,V),w=fe.get(M,y.length),w.init(L),w.state.textureUnits=Z.getTextureUnits(),y.push(w),Ve.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),He.setFromProjectionMatrix(Ve,Si,L.reversedDepth),ot=this.localClippingEnabled,qe=Pe.init(this.clippingPlanes,ot),T=me.get(M,C.length),T.init(),C.push(T),Te.enabled===!0&&Te.isPresenting===!0){const Se=I.xr.getDepthSensingMesh();Se!==null&&Ki(Se,L,-1/0,I.sortObjects)}Ki(M,L,0,I.sortObjects),T.finish(),N!==null&&N.updateLights(w.state.lightsArray),I.sortObjects===!0&&T.sort(_e,ke),be=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,be&&Ue.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Pe.beginShadows();const j=w.state.shadowsArray;if(Le.render(j,M,L),qe===!0&&Pe.endShadows(),(G&&A.hasRenderPass())===!1){const Se=T.opaque,xe=T.transmissive;if(w.setupLights(),L.isArrayCamera){const Ce=L.cameras;if(xe.length>0)for(let Ie=0,We=Ce.length;Ie<We;Ie++){const $e=Ce[Ie];da(Se,xe,M,$e)}be&&Ue.render(M);for(let Ie=0,We=Ce.length;Ie<We;Ie++){const $e=Ce[Ie];ua(T,M,$e,$e.viewport)}}else xe.length>0&&da(Se,xe,M,L),be&&Ue.render(M),ua(T,M,L)}V!==null&&q===0&&(Z.updateMultisampleRenderTarget(V),Z.updateRenderTargetMipmap(V)),G&&A.end(I),M.isScene===!0&&M.onAfterRender(I,M,L),oe.resetDefaultState(),B=-1,Y=null,y.pop(),y.length>0?(w=y[y.length-1],Z.setTextureUnits(w.state.textureUnits),qe===!0&&Pe.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,N!==null&&N.renderEnd()};function Ki(M,L,H,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(He)){G&&Tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ve);const Se=te.update(M),xe=M.material;xe.visible&&T.push(M,Se,xe,H,Tt.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(He))){const Se=te.update(M),xe=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Tt.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Tt.copy(Se.boundingSphere.center)),Tt.applyMatrix4(M.matrixWorld).applyMatrix4(Ve)),Array.isArray(xe)){const Ce=Se.groups;for(let Ie=0,We=Ce.length;Ie<We;Ie++){const $e=Ce[Ie],Re=xe[$e.materialIndex];Re&&Re.visible&&T.push(M,Se,Re,H,Tt.z,$e,L)}}else xe.visible&&T.push(M,Se,xe,H,Tt.z,null,L)}}const le=M.children;for(let Se=0,xe=le.length;Se<xe;Se++)Ki(le[Se],L,H,G)}function ua(M,L,H,G){const{opaque:j,transmissive:le,transparent:Se}=M;w.setupLightsView(H),qe===!0&&Pe.setGlobalState(I.clippingPlanes,H),G&&_.viewport(Q.copy(G)),j.length>0&&Ge(j,L,H),le.length>0&&Ge(le,L,H),Se.length>0&&Ge(Se,L,H),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function da(M,L,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Re=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new ci(1,1,{generateMipmaps:!0,type:Re?Ai:In,minFilter:Br,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const le=w.state.transmissionRenderTarget[G.id],Se=G.viewport||Q;le.setSize(Se.z*I.transmissionResolutionScale,Se.w*I.transmissionResolutionScale);const xe=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Ie=I.getActiveMipmapLevel();I.setRenderTarget(le),I.getClearColor(Ye),Oe=I.getClearAlpha(),Oe<1&&I.setClearColor(16777215,.5),I.clear(),be&&Ue.render(H);const We=I.toneMapping;I.toneMapping=bi;const $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),qe===!0&&Pe.setGlobalState(I.clippingPlanes,G),Ge(M,H,G),Z.updateMultisampleRenderTarget(le),Z.updateRenderTargetMipmap(le),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ut=0,Ot=L.length;ut<Ot;ut++){const St=L[ut],{object:gt,geometry:en,material:Me,group:un}=St;if(Me.side===ri&&gt.layers.test(G.layers)){const st=Me.side;Me.side=wn,Me.needsUpdate=!0,Ut(gt,H,G,en,Me,un),Me.side=st,Me.needsUpdate=!0,Re=!0}}Re===!0&&(Z.updateMultisampleRenderTarget(le),Z.updateRenderTargetMipmap(le))}I.setRenderTarget(xe,Ce,Ie),I.setClearColor(Ye,Oe),$e!==void 0&&(G.viewport=$e),I.toneMapping=We}function Ge(M,L,H){const G=L.isScene===!0?L.overrideMaterial:null;for(let j=0,le=M.length;j<le;j++){const Se=M[j],{object:xe,geometry:Ce,group:Ie}=Se;let We=Se.material;We.allowOverride===!0&&G!==null&&(We=G),xe.layers.test(H.layers)&&Ut(xe,L,H,Ce,We,Ie)}}function Ut(M,L,H,G,j,le){N!==null&&j.isNodeMaterial&&N.setObject(M,j),M.onBeforeRender(I,L,H,G,j,le),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(I,L,H,G,M,le),j.transparent===!0&&j.side===ri&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,I.renderBufferDirect(H,L,G,j,M,le),j.side=qr,j.needsUpdate=!0,I.renderBufferDirect(H,L,G,j,M,le),j.side=ri):I.renderBufferDirect(H,L,G,j,M,le),M.onAfterRender(I,L,H,G,j,le)}function xt(M,L,H){L.isScene!==!0&&(L=Lt);const G=X.get(M),j=w.state.lights,le=w.state.shadowsArray,Se=j.state.version,xe=ue.getParameters(M,j.state,le,L,H,w.state.lightProbeGridArray),Ce=ue.getProgramCacheKey(xe);let Ie=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;const We=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ae.get(M.envMap||G.environment,We),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",vn),Ie=new Map,G.programs=Ie);let $e=Ie.get(Ce);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===Se)return Kn(M,xe),$e}else xe.uniforms=ue.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,H,xe),M.onBeforeCompile(xe,I),$e=ue.acquireProgram(xe,Ce),Ie.set(Ce,$e),G.uniforms=xe.uniforms;const Re=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),Kn(M,xe),G.needsLights=ft(M),G.lightsStateVersion=Se,G.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.sunLights.value=j.state.sun,Re.sunLightShadows.value=j.state.sunShadow,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.sunShadowMatrix.value=j.state.sunShadowMatrix,Re.sunShadowCascade.value=j.state.sunShadowCascade,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=$e,G.uniformsList=null,$e}function An(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Cl.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Kn(M,L){const H=X.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Ri(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let H=0,G=M.length;H<G;H++){const j=M[H];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function Bn(M,L,H,G,j){L.isScene!==!0&&(L=Lt),Z.resetTextureUnits();const le=L.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,xe=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Qe.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=ae.get(G.envMap||Se,Ce),We=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,Ot=!!H.morphAttributes.color;let St=bi;G.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=I.toneMapping);const gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,en=gt!==void 0?gt.length:0,Me=X.get(G),un=w.state.lights;if(qe===!0&&(ot===!0||M!==Y)){const vt=M===Y&&G.id===B;Pe.setState(G,M,vt)}let st=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==un.state.version||Me.outputColorSpace!==xe||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Ie||G.fog===!0&&Me.fog!==le||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Pe.numPlanes||Me.numIntersection!==Pe.numIntersection)||Me.vertexAlphas!==We||Me.vertexTangents!==$e||Me.morphTargets!==Re||Me.morphNormals!==ut||Me.morphColors!==Ot||Me.toneMapping!==St||Me.morphTargetsCount!==en||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Me.__version=G.version);let zn=Me.currentProgram;st===!0&&(zn=xt(G,L,j),N&&G.isNodeMaterial&&N.onUpdateProgram(G,zn,Me));let fi=!1,$i=!1,ns=!1;const mt=zn.getUniforms(),Dt=Me.uniforms;if(_.useProgram(zn.program)&&(fi=!0,$i=!0,ns=!0),G.id!==B&&(B=G.id,$i=!0),Me.needsLights){const vt=Ri(w.state.lightProbeGridArray,j);Me.lightProbeGrid!==vt&&(Me.lightProbeGrid=vt,$i=!0)}if(fi||Y!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(U,"projectionMatrix",M.projectionMatrix),mt.setValue(U,"viewMatrix",M.matrixWorldInverse);const Qi=mt.map.cameraPosition;Qi!==void 0&&Qi.setValue(U,rt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,$i=!0,ns=!0)}if(Me.needsLights&&(un.state.sunShadowMap.length>0&&mt.setValue(U,"sunShadowMap",un.state.sunShadowMap,Z),un.state.directionalShadowMap.length>0&&mt.setValue(U,"directionalShadowMap",un.state.directionalShadowMap,Z),un.state.spotShadowMap.length>0&&mt.setValue(U,"spotShadowMap",un.state.spotShadowMap,Z),un.state.pointShadowMap.length>0&&mt.setValue(U,"pointShadowMap",un.state.pointShadowMap,Z)),j.isSkinnedMesh){mt.setOptional(U,j,"bindMatrix"),mt.setOptional(U,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(U,"boneTexture",vt.boneTexture,Z))}j.isBatchedMesh&&(mt.setOptional(U,j,"batchingTexture"),mt.setValue(U,"batchingTexture",j._matricesTexture,Z),mt.setOptional(U,j,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",j._indirectTexture,Z),mt.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",j._colorsTexture,Z));const Zi=H.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&O.update(j,H,zn),($i||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,mt.setValue(U,"receiveShadow",j.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Dt.envMapIntensity.value=L.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Aw()),$i){if(mt.setValue(U,"toneMappingExposure",I.toneMappingExposure),Me.needsLights&&$n(Dt,ns),le&&G.fog===!0&&Ne.refreshFogUniforms(Dt,le),Ne.refreshMaterialUniforms(Dt,G,ie,K,w.state.transmissionRenderTarget[M.id]),Me.needsLights&&Me.lightProbeGrid){const vt=Me.lightProbeGrid;Dt.probesSH.value=vt.texture,Dt.probesMin.value.copy(vt.boundingBox.min),Dt.probesMax.value.copy(vt.boundingBox.max),Dt.probesResolution.value.copy(vt.resolution)}Cl.upload(U,An(Me),Dt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Cl.upload(U,An(Me),Dt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(U,"center",j.center),mt.setValue(U,"modelViewMatrix",j.modelViewMatrix),mt.setValue(U,"normalMatrix",j.normalMatrix),mt.setValue(U,"modelMatrix",j.matrixWorld),G.uniformsGroups!==void 0){const vt=G.uniformsGroups;for(let Qi=0,is=vt.length;Qi<is;Qi++){const Bh=vt[Qi];re.update(Bh,zn),re.bind(Bh,zn)}}return zn}function $n(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function ft(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(M,L,H){const G=X.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=L,X.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const H=X.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,H=0){V=M,$=L,q=H;let G=null,j=!1,le=!1;if(M){const xe=X.get(M);if(xe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),Q.copy(M.viewport),de.copy(M.scissor),ye=M.scissorTest,_.viewport(Q),_.scissor(de),_.setScissorTest(ye),B=-1;return}else if(xe.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(xe.__hasExternalTextures)Z.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const We=M.depthTexture;if(xe.__boundDepthTexture!==We){if(We!==null&&X.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Ie=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?G=Ie[L][H]:G=Ie[L],j=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?G=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[H]:G=Ie,Q.copy(M.viewport),de.copy(M.scissor),ye=M.scissorTest}else Q.copy(ve).multiplyScalar(ie).floor(),de.copy(je).multiplyScalar(ie).floor(),ye=yt;if(H!==0&&(G=F),_.bindFramebuffer(U.FRAMEBUFFER,G)&&_.drawBuffers(M,G),_.viewport(Q),_.scissor(de),_.setScissorTest(ye),j){const xe=X.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,H)}else if(le){const xe=L;for(let Ce=0;Ce<M.textures.length;Ce++){const Ie=X.get(M.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,H,xe)}}else if(M!==null&&H!==0){const xe=X.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,H)}B=-1};function Jt(M){const L=X.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=R.textureFormatReadable(M.format),L.__typeReadable=R.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,H,G,j,le,Se,xe=0){if(!(M&&M.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){_.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Ie=M.textures[xe],We=Ie.format,$e=Ie.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);const Re=Jt(Ie);if(Re.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&H>=0&&H<=M.height-j&&U.readPixels(L,H,G,j,pe.convert(We),pe.convert($e),le)}finally{const Ie=V!==null?X.get(V).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,L,H,G,j,le,Se,xe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(L>=0&&L<=M.width-G&&H>=0&&H<=M.height-j){_.bindFramebuffer(U.FRAMEBUFFER,Ce);const Ie=M.textures[xe],We=Ie.format,$e=Ie.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);const Re=Jt(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),U.readPixels(L,H,G,j,pe.convert(We),pe.convert($e),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ot=V!==null?X.get(V).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ot);const St=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await GS(U,St,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ut),U.deleteSync(St),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,H=0){const G=Math.pow(2,-H),j=Math.floor(M.image.width*G),le=Math.floor(M.image.height*G),Se=L!==null?L.x:0,xe=L!==null?L.y:0;Z.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,Se,xe,j,le),_.unbindTexture()},this.copyTextureToTexture=function(M,L,H=null,G=null,j=0,le=0){let Se,xe,Ce,Ie,We,$e,Re,ut,Ot;const St=M.isCompressedTexture?M.mipmaps[le]:M.image;if(H!==null)Se=H.max.x-H.min.x,xe=H.max.y-H.min.y,Ce=H.isBox3?H.max.z-H.min.z:1,Ie=H.min.x,We=H.min.y,$e=H.isBox3?H.min.z:0;else{const Dt=Math.pow(2,-j);Se=Math.floor(St.width*Dt),xe=Math.floor(St.height*Dt),M.isDataArrayTexture?Ce=St.depth:M.isData3DTexture?Ce=Math.floor(St.depth*Dt):Ce=1,Ie=0,We=0,$e=0}G!==null?(Re=G.x,ut=G.y,Ot=G.z):(Re=0,ut=0,Ot=0);const gt=pe.convert(L.format),en=pe.convert(L.type);let Me;L.isData3DTexture?(Z.setTexture3D(L,0),Me=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Z.setTexture2DArray(L,0),Me=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(L,0),Me=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const un=_.getParameter(U.UNPACK_ROW_LENGTH),st=_.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=_.getParameter(U.UNPACK_SKIP_PIXELS),fi=_.getParameter(U.UNPACK_SKIP_ROWS),$i=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),_.pixelStorei(U.UNPACK_SKIP_ROWS,We),_.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const ns=M.isDataArrayTexture||M.isData3DTexture,mt=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const Dt=X.get(M),Zi=X.get(L),vt=X.get(Dt.__renderTarget),Qi=X.get(Zi.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,vt.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let is=0;is<Ce;is++)ns&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(M).__webglTexture,j,$e+is),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(L).__webglTexture,le,Ot+is)),U.blitFramebuffer(Ie,We,Se,xe,Re,ut,Se,xe,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||M.isRenderTargetTexture||X.has(M)){const Dt=X.get(M),Zi=X.get(L);_.bindFramebuffer(U.READ_FRAMEBUFFER,k),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,D);for(let vt=0;vt<Ce;vt++)ns?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,j,$e+vt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dt.__webglTexture,j),mt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zi.__webglTexture,le,Ot+vt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zi.__webglTexture,le),j!==0?U.blitFramebuffer(Ie,We,Se,xe,Re,ut,Se,xe,U.COLOR_BUFFER_BIT,U.NEAREST):mt?U.copyTexSubImage3D(Me,le,Re,ut,Ot+vt,Ie,We,Se,xe):U.copyTexSubImage2D(Me,le,Re,ut,Ie,We,Se,xe);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Me,le,Re,ut,Ot,Se,xe,Ce,gt,en,St.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,le,Re,ut,Ot,Se,xe,Ce,gt,St.data):U.texSubImage3D(Me,le,Re,ut,Ot,Se,xe,Ce,gt,en,St):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,le,Re,ut,Se,xe,gt,en,St.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,le,Re,ut,St.width,St.height,gt,St.data):U.texSubImage2D(U.TEXTURE_2D,le,Re,ut,Se,xe,gt,en,St);_.pixelStorei(U.UNPACK_ROW_LENGTH,un),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),_.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),_.pixelStorei(U.UNPACK_SKIP_ROWS,fi),_.pixelStorei(U.UNPACK_SKIP_IMAGES,$i),le===0&&L.generateMipmaps&&U.generateMipmap(Me),_.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){$=0,q=0,V=null,_.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const Ym={"ev-2":{id:"ev-2",title:"EAST GRANDFATHER CLOCK",code:"OBJ-01 // TIME ARRESTED",clueId:"ev-2",bullet1:"CLOCK HALTED: 11:47 PM precisely.",bullet2:"ANOMALY: Graphite sliver wedged in escapement wheel.",bullet3:"TACTICAL FACT: Deliberately frozen before midnight to fabricate time of death."},"ev-11":{id:"ev-11",title:"STUDY 17-B CRIME SCENE",code:"BREACH // DEADBOLT SEALED",clueId:"ev-11",bullet1:"BREACH STATUS: Heavy oak door locked from inside.",bullet2:"TIMELINE CONFLICT: Assault recorded at 11:47 PM; Sen alive at 12:03 AM.",bullet3:"FATAL WINDOW: True smothering occurred during Kabir's 12:13 AM blackout."},"ev-4":{id:"ev-4",title:"DICTAPHONE CASSETTE REEL #4",code:"INTEL-04 // AUDIO RECON",clueId:"ev-4",bullet1:'NORMAL TAPE (1.0x): "When the house stopped... someone started."',bullet2:'SUB-BASS SLOWDOWN (0.5x): "Someone started BEFORE the house stopped."',bullet3:"FORENSIC LINK: Tampering initiated prior to the blackout."},"ev-3":{id:"ev-3",title:"ARCHIVE CABINET VAULT",code:"CLUE-03 // FORCED ENTRY",clueId:"ev-3",bullet1:"VAULT COMPROMISED: Chisel marks match Aarav Mehta's tool.",bullet2:"STOLEN INTEL: 20 years of Blackwood memory-erasure experiments.",bullet3:"SECONDARY CRIME: Aarav committed corporate espionage, not murder."},"ev-13":{id:"ev-13",title:"CARETAKER SERVICE GRATE",code:"ROUTE // SECRET SHAFT",clueId:"ev-13",bullet1:"CONCEALED TUNNEL: Directly bypasses the locked Study 17-B door.",bullet2:"BOOT PRINTS: Muddy tread matches caretaker Devraj Negi.",bullet3:"KILLER ROUTE: Dev entered silently during the 12:13 blackout."}},Rw=({onInspectClue:t,onOpenTerminal:e,onTriggerTrauma:n})=>{const i=we.useRef(null),[r,s]=we.useState(null),[a,o]=we.useState(!0),[c,u]=we.useState(!1),[h,p]=we.useState(null),[d,m]=we.useState(0),[x,E]=we.useState(null),[g,f]=we.useState(null),[v,b]=we.useState(null),S=we.useRef(()=>{}),T=we.useRef(()=>{}),w=(P,N,F="#00ffcc")=>{const k=document.createElement("canvas");k.width=512,k.height=256;const D=k.getContext("2d");return D.clearRect(0,0,512,256),D.shadowColor=F,D.shadowBlur=24,D.fillStyle=F,D.font='bold 24px "Courier New", monospace',D.textAlign="center",D.fillText(P,256,100),N&&(D.font='bold 16px "Courier New", monospace',D.fillStyle="#ff66ff",D.shadowColor="#ff00ff",D.shadowBlur=18,D.fillText(N,256,150)),D.strokeStyle=F,D.lineWidth=3,D.strokeRect(20,20,472,216),new ms(k)},C=()=>{const P=document.createElement("canvas");P.width=512,P.height=512;const N=P.getContext("2d");N.fillStyle="#22080c",N.fillRect(0,0,512,512),N.strokeStyle="#3d1016",N.lineWidth=4;for(let D=0;D<512;D+=64){N.beginPath(),N.moveTo(D,0),N.lineTo(D,512),N.stroke();for(let $=32;$<512;$+=64)N.fillStyle="#4a141b",N.beginPath(),N.arc(D,$,8,0,Math.PI*2),N.fill()}const F=N.createLinearGradient(0,0,0,512);F.addColorStop(0,"rgba(0,0,0,0.6)"),F.addColorStop(.5,"rgba(0,0,0,0.1)"),F.addColorStop(1,"rgba(0,0,0,0.8)"),N.fillStyle=F,N.fillRect(0,0,512,512);const k=new ms(P);return k.wrapS=Fr,k.wrapT=Fr,k.repeat.set(4,1),k},y=()=>{const P=document.createElement("canvas");P.width=512,P.height=512;const N=P.getContext("2d");N.fillStyle="#140c08",N.fillRect(0,0,512,512),N.strokeStyle="#080503",N.lineWidth=3;for(let k=0;k<512;k+=32){N.beginPath(),N.moveTo(0,k),N.lineTo(512,k),N.stroke();for(let D=k%64===0?0:40;D<512;D+=80)N.fillStyle=Math.random()>.5?"#1a100a":"#120a06",N.fillRect(D,k,78,30),N.beginPath(),N.moveTo(D,k),N.lineTo(D,k+32),N.stroke()}const F=new ms(P);return F.wrapS=Fr,F.wrapT=Fr,F.repeat.set(2,6),F},A=()=>{const P=document.createElement("canvas");P.width=256,P.height=1024;const N=P.getContext("2d");return N.fillStyle="#38060b",N.fillRect(0,0,256,1024),N.strokeStyle="#997a3d",N.lineWidth=8,N.strokeRect(12,12,232,1e3),N.strokeStyle="#1a243b",N.lineWidth=4,N.strokeRect(24,24,208,976),N.fillStyle="rgba(90, 0, 0, 0.85)",N.beginPath(),N.moveTo(110,800),N.bezierCurveTo(140,600,90,300,130,50),N.lineTo(150,50),N.bezierCurveTo(110,300,160,600,130,800),N.fill(),new ms(P)},I=(P,N,F=!1)=>{const k=document.createElement("canvas");k.width=256,k.height=340;const D=k.getContext("2d");return D.fillStyle="#8a6d2b",D.fillRect(0,0,256,340),D.fillStyle="#543f12",D.fillRect(8,8,240,324),D.fillStyle="#100b08",D.fillRect(18,18,220,304),D.fillStyle="#261914",D.beginPath(),D.arc(128,120,55,0,Math.PI*2),D.fill(),D.beginPath(),D.ellipse(128,240,75,60,0,0,Math.PI*2),D.fill(),D.fillStyle="#ff3333",D.beginPath(),D.arc(115,115,3.5,0,Math.PI*2),D.arc(141,115,3.5,0,Math.PI*2),D.fill(),F&&(D.fillStyle="#8b0000",D.beginPath(),D.moveTo(115,120),D.lineTo(112,280),D.lineTo(118,280),D.fill()),D.fillStyle="#c9b277",D.fillRect(50,285,156,26),D.fillStyle="#1a1005",D.font="bold 11px Courier New",D.textAlign="center",D.fillText(P,128,302),new ms(k)};return we.useEffect(()=>{if(!i.current)return;const P=new s1;P.fog=new Nh(394506,.09);const N=new Sn(70,i.current.clientWidth/i.current.clientHeight,.1,100);N.position.set(0,1.6,12);const F=new Cw({antialias:!0,powerPreference:"high-performance"});F.setSize(i.current.clientWidth,i.current.clientHeight),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.shadowMap.enabled=!0,F.shadowMap.type=fx,i.current.appendChild(F.domElement);const k=new C1(656906,.8);P.add(k);const D=new T1(16772829,4.2,26,Math.PI/5.5,.5,1.1);D.castShadow=!0,N.add(D),D.position.set(.2,-.2,0),D.target.position.set(0,0,-5),N.add(D.target),P.add(N);const $=new A1(16742178,1.4,12,1.2);$.position.set(0,2.8,0),P.add($);const q=new Nn(8,36),V=new an({map:y(),roughness:.6,metalness:.2}),B=new dt(q,V);B.rotation.x=-Math.PI/2,B.receiveShadow=!0,P.add(B);const Y=new Nn(2.4,34),Q=new an({map:A(),roughness:.9}),de=new dt(Y,Q);de.rotation.x=-Math.PI/2,de.position.set(0,.015,0),de.receiveShadow=!0,P.add(de);const ye=new dt(new Nn(8,36),new an({color:657677,roughness:.9}));ye.rotation.x=Math.PI/2,ye.position.y=3.2,P.add(ye);const Ye=new Nn(36,3.2),Oe=new an({map:C(),roughness:.7}),Be=new dt(Ye,Oe);Be.rotation.y=Math.PI/2,Be.position.set(-4,1.6,0),P.add(Be);const K=new dt(Ye,Oe);K.rotation.y=-Math.PI/2,K.position.set(4,1.6,0),P.add(K);const ie=new dt(new Nn(8,3.2),Oe);ie.position.set(0,1.6,18),ie.rotation.y=Math.PI,P.add(ie);const _e=400,ke=new Fn,ve=new Float32Array(_e*3);for(let Ge=0;Ge<_e*3;Ge+=3)ve[Ge]=(Math.random()-.5)*7.5,ve[Ge+1]=Math.random()*3,ve[Ge+2]=(Math.random()-.5)*34;ke.setAttribute("position",new Ti(ve,3));const je=new Fx({color:14534816,size:.04,transparent:!0,opacity:.55}),yt=new m1(ke,je);P.add(yt);const He=new Nn(1.2,1.6),qe=new dt(He,new an({map:I("PROF. V. SEN","1968-DECEASED",!0)}));qe.rotation.y=Math.PI/2,qe.position.set(-3.95,1.8,6),P.add(qe);const ot=new dt(He,new an({map:I("A. BLACKWOOD","MISSING 20 YRS",!1)}));ot.rotation.y=-Math.PI/2,ot.position.set(3.95,1.8,0),P.add(ot);const Ve=new dt(He,new an({map:I("DR. M. PATEL","PRIMARY SUSPECT",!0)}));Ve.rotation.y=Math.PI/2,Ve.position.set(-3.95,1.8,-8),P.add(Ve);const rt=new hr;rt.position.set(0,0,16);const Tt=new dt(new _i(1,2.7,.65),new an({color:2363655,roughness:.5,metalness:.2}));Tt.position.y=1.35,rt.add(Tt);const Lt=new dt(new ja(.35,.35,.06,32),new an({color:15127731,roughness:.3}));Lt.rotation.x=Math.PI/2,Lt.position.set(0,2.1,.35),rt.add(Lt);const be=new dt(new ja(.02,.02,1,8),new an({color:13938487,metalness:.9,roughness:.1}));be.position.set(0,1.05,.15),rt.add(be),P.add(rt);const De=new hr;De.position.set(0,0,-17.8);const U=new dt(new _i(1.8,2.9,.12),new an({color:3016712,roughness:.4}));U.position.y=1.45,De.add(U);const Pt=new dt(new Ih(.09,16,16),new an({color:13145662,metalness:.95,roughness:.1}));Pt.position.set(.65,1.35,.12),De.add(Pt);const nt=new dt(new Nn(1.7,.22),new an({color:16771584,roughness:.3}));nt.position.set(0,1.6,.15),De.add(nt),P.add(De);const R=new hr;R.position.set(-3.2,0,-4);const _=new dt(new _i(1.1,.9,1.4),new an({color:2035719,roughness:.7}));_.position.y=.45,R.add(_);const z=new dt(new _i(.55,.18,.45),new an({color:3355448,metalness:.7}));z.position.set(0,.99,0),R.add(z),P.add(R);const X=new hr;X.position.set(3.2,0,4);const Z=new dt(new _i(.9,2.3,1.3),new an({color:1579039,roughness:.6}));Z.position.y=1.15,X.add(Z),P.add(X);const ae=new dt(new ja(.38,.48,1.85,16),new Ga({color:0}));ae.position.set(-2.5,.92,-15),P.add(ae);let ce=!0;const J=[],te=(Ge,Ut,xt,An=3,Kn=1.4)=>{const Ri=new Nn(An,Kn),Bn=new Ga({map:w(Ge,Ut,xt),transparent:!0,opacity:0,visible:!1,depthWrite:!1,side:ri});return J.push(Bn),new dt(Ri,Bn)},ue=te("DON'T TRUST KITCHEN CLOCK","+16 MIN FORWARD OFFSET","#00ffcc",3.2,1.5);ue.position.set(-3.94,1.5,9),ue.rotation.y=Math.PI/2,P.add(ue);const Ne=te("MEERA STRUCK HIM AT 11:47 PM","SEN WAS BREATHING AT 12:03 AM","#00ff88",2.5,1.3);Ne.position.set(0,.03,0),Ne.rotation.x=-Math.PI/2,P.add(Ne);const me=te("DEV IS IN THE WALLS","SERVICE TUNNEL BYPASSES 17-B LOCK","#ff00ea",3.2,1.5);me.position.set(3.94,1.5,-8),me.rotation.y=-Math.PI/2,P.add(me);const fe=te("SPOOL 12: PRINTED AT 11:41 PM","PRE-CRIME FABRICATION DETECTED","#00ffff",1.6,.9);fe.position.set(0,2,-17.7),P.add(fe);const Pe=[],Le=(Ge,Ut,xt,An,Kn,Ri)=>{const Bn=document.createElement("canvas");Bn.width=512,Bn.height=140;const $n=new ms(Bn);$n.minFilter=Kt;const ft=new Ga({map:$n,transparent:!0,opacity:.95,depthWrite:!1,side:ri}),Jt=new dt(new Nn(2.6,.7),ft);Jt.position.copy(Ri),P.add(Jt),Pe.push({id:Ge,clueId:Ut,code:xt,title:An,pos:Ri,mesh:Jt,color:Kn,canvas:Bn,texture:$n})};Le("wp-clock","ev-2","OBJ 01 // HALTED 11:47 PM","GRANDFATHER CLOCK","#f59e0b",new W(0,2.7,16)),Le("wp-door","ev-11","BREACH // LOCKED SCENE","STUDY 17-B DOOR","#ef4444",new W(0,3.1,-17.5)),Le("wp-tape","ev-4","INTEL 04 // AUDIO REEL","DICTAPHONE TAPE #4","#06b6d4",new W(-3.2,1.8,-4)),Le("wp-cabinet","ev-3","CLUE 03 // EVIDENCE THEFT","ARCHIVE CABINET","#a855f7",new W(3.2,2,4)),Le("wp-grate","ev-13","ROUTE // CARETAKER ACCESS","SERVICE TUNNEL GRATE","#10b981",new W(2.8,1.3,-10));let Ue=!0,O=!1;const he=(Ge,Ut)=>{Ge?Ut?(D.color.setHex(10309341),D.intensity=6.2,k.color.setHex(393740)):(D.color.setHex(16772829),D.intensity=4.2,k.color.setHex(656906)):D.intensity=0,J.forEach(xt=>{xt.visible=Ut&&Ge,xt.opacity=Ut&&Ge?.96:0})},ee=()=>{Ue=!Ue,o(Ue),ne.playTick(!1),he(Ue,O)},pe=()=>{O=!O,u(O),ne.playNightVisionToggle(),O&&ne.playHorrorStinger(),he(Ue,O)};S.current=ee,T.current=pe;const oe={};let re=0,Ae=0,Te=!1,ct=0,it=0,xn=0,vn=0,es=0;const Mo=Ge=>{oe[Ge.code]=!0,es=0,Ge.code==="KeyF"&&ee(),Ge.code==="KeyL"&&pe(),Ge.code==="KeyE"&&ca(!0),Ge.code==="Tab"&&(Ge.preventDefault(),e(),ne.playTick(!1))},oa=Ge=>{oe[Ge.code]=!1},ts=Ge=>{Te=!0,ct=Ge.clientX,it=Ge.clientY},Eo=()=>{Te=!1},la=Ge=>{if(!Te)return;const Ut=Ge.clientX-ct,xt=Ge.clientY-it;ct=Ge.clientX,it=Ge.clientY,Ae-=Ut*.003,re-=xt*.003,re=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,re))};window.addEventListener("keydown",Mo),window.addEventListener("keyup",oa),window.addEventListener("mousedown",ts),window.addEventListener("mouseup",Eo),window.addEventListener("mousemove",la);const ca=(Ge=!1)=>{const Ut=N.position;let xt=null;if(Ut.distanceTo(rt.position)<3.8?xt={title:"GRANDFATHER CLOCK (HALTED AT 11:47 PM)",clueId:"ev-2"}:Ut.distanceTo(De.position)<4.2?(xt={title:"STUDY 17-B LOCKED CRIME SCENE DOOR",clueId:"ev-11"},Ge&&(ne.playDoorRattle(),ne.playTerrifyingScream(),n())):Ut.distanceTo(R.position)<3.2?xt={title:"DICTAPHONE CASSETTE RECORDER #4",clueId:"ev-4"}:Ut.distanceTo(X.position)<3.2?xt={title:"ARCHIVE CABINET (AARAV STOLEN NOTEBOOK)",clueId:"ev-3"}:Ut.distanceTo(new W(2.8,0,-10))<3&&(xt={title:"HIDDEN CARETAKER SERVICE GRATE (DEV ROUTE)",clueId:"ev-13"}),s(xt),Ge&&xt){ne.playHitmarker(),ne.playRadioChirp();const An=Ym[xt.clueId];An?(f(An),b({title:An.title,pts:100}),ne.playObjectiveComplete(),setTimeout(()=>b(null),2500)):t(xt.clueId)}};let di,Ki=0;const ua=()=>{di=requestAnimationFrame(ua),Ki+=.02,be.rotation.z=Math.sin(Ki*2.8)*.28,$.intensity=1+Math.sin(Ki*18)*.3+(Math.random()>.96?-.7:0);const Ge=yt.geometry.attributes.position.array;for(let ft=1;ft<Ge.length;ft+=3)Ge[ft]-=.002,Ge[ft]<0&&(Ge[ft]=3);yt.geometry.attributes.position.needsUpdate=!0,m(Ae);const Ut=N.position;let xt=null,An=3.8;if(Pe.forEach(ft=>{ft.mesh.lookAt(N.position),ft.mesh.position.y=ft.pos.y+Math.sin(Ki*2.8+ft.pos.z)*.06;const Jt=Ut.distanceTo(ft.pos);Jt<An&&(An=Jt,xt={id:ft.id,title:ft.title,clueId:ft.clueId,code:ft.code,dist:Jt,summary:""});const M=Jt<3.8,L=ft.canvas.getContext("2d");L.clearRect(0,0,512,140),L.strokeStyle=M?"#ff0033":ft.color,L.lineWidth=M?5:3,L.shadowColor=M?"#ff0033":ft.color,L.shadowBlur=M?22:10;const H=8,G=512-H*2,j=140-H*2,le=25;L.beginPath(),L.moveTo(H,H+le),L.lineTo(H,H),L.lineTo(H+le,H),L.moveTo(H+G-le,H),L.lineTo(H+G,H),L.lineTo(H+G,H+le),L.moveTo(H,H+j-le),L.lineTo(H,H+j),L.lineTo(H+le,H+j),L.moveTo(H+G-le,H+j),L.lineTo(H+G,H+j),L.lineTo(H+G,H+j-le),L.stroke(),L.fillStyle=M?"rgba(50, 0, 10, 0.88)":"rgba(8, 8, 16, 0.75)",L.fillRect(H+3,H+3,G-6,j-6),L.fillStyle=M?"#ff0033":ft.color,L.beginPath(),L.moveTo(40,70),L.lineTo(55,50),L.lineTo(70,70),L.lineTo(55,90),L.closePath(),L.fill(),L.fillStyle="#888888",L.font='bold 16px "Courier New", monospace',L.textAlign="left",L.fillText(ft.code,85,48),L.fillStyle="#ffffff",L.font='bold 22px "Courier New", monospace',L.fillText(ft.title,85,76),L.fillStyle=M?"#ff3344":"#00ffcc",L.font='bold 18px "Courier New", monospace';const Se=M?`[E] SECURE INTEL (${Jt.toFixed(1)}m)`:`DISTANCE: ${Jt.toFixed(1)}m`;L.fillText(Se,85,104),ft.texture.needsUpdate=!0}),E(xt),ce&&N.position.z<1&&(ce=!1,P.remove(ae),ne.playTerrifyingScream(),ne.playViolinShriek(),n()),es++,es>700){es=0;const ft=["He's behind you...","The clock lied...","Meera didn't kill him...","Dev was waiting in the dark..."],Jt=ft[Math.floor(Math.random()*ft.length)];p(Jt),ne.playBinauralWhisper(Jt),setTimeout(()=>p(null),3e3)}N.rotation.order="YXZ",N.rotation.y=Ae,N.rotation.x=re;const Kn=.085,Ri=new W(0,0,-1).applyAxisAngle(new W(0,1,0),Ae),Bn=new W(1,0,0).applyAxisAngle(new W(0,1,0),Ae);let $n=!1;(oe.KeyW||oe.ArrowUp)&&(N.position.addScaledVector(Ri,Kn),$n=!0),(oe.KeyS||oe.ArrowDown)&&(N.position.addScaledVector(Ri,-Kn),$n=!0),(oe.KeyA||oe.ArrowLeft)&&(N.position.addScaledVector(Bn,-Kn),$n=!0),(oe.KeyD||oe.ArrowRight)&&(N.position.addScaledVector(Bn,Kn),$n=!0),N.position.x=Math.max(-3.4,Math.min(3.4,N.position.x)),N.position.z=Math.max(-16.5,Math.min(16.5,N.position.z)),$n?(xn+=.16,N.position.y=1.6+Math.sin(xn)*.04,vn++,vn>18&&(ne.playFootstep(),vn=0)):N.position.y=1.6,ca(!1),F.render(P,N)};ua();const da=()=>{i.current&&(N.aspect=i.current.clientWidth/i.current.clientHeight,N.updateProjectionMatrix(),F.setSize(i.current.clientWidth,i.current.clientHeight))};return window.addEventListener("resize",da),()=>{cancelAnimationFrame(di),window.removeEventListener("resize",da),window.removeEventListener("keydown",Mo),window.removeEventListener("keyup",oa),window.removeEventListener("mousedown",ts),window.removeEventListener("mouseup",Eo),window.removeEventListener("mousemove",la),F.dispose(),i.current&&(i.current.innerHTML="")}},[]),l.jsxs("div",{className:"relative w-full h-[78vh] min-h-[550px] bg-black rounded-lg overflow-hidden border-2 border-red-950 shadow-[0_0_60px_rgba(0,0,0,0.95)] select-none font-mono crt-overlay",children:[l.jsx("div",{ref:i,className:"w-full h-full cursor-crosshair"}),l.jsxs("div",{className:"absolute top-2 left-1/2 -translate-x-1/2 w-[340px] sm:w-[480px] h-8 bg-black/80 backdrop-blur-md border border-gray-800/90 rounded-sm overflow-hidden pointer-events-none z-30 shadow-2xl flex flex-col items-center justify-center",children:[l.jsx("div",{className:"absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 shadow-[0_0_8px_#ff0000]"}),l.jsx("div",{className:"absolute -top-1 w-2 h-2 rotate-45 bg-red-500 z-10"}),l.jsx("div",{className:"flex items-center gap-6 text-[10px] font-mono tracking-widest text-gray-400 select-none whitespace-nowrap transition-transform ease-out duration-75",style:{transform:`translateX(${-(d*(180/Math.PI)*2.2)%360}px)`},children:[-360,0,360].map(P=>l.jsxs(r0.Fragment,{children:[l.jsxs("span",{children:["000° ",l.jsx("strong",{className:"text-white",children:"N"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["045° ",l.jsx("strong",{className:"text-amber-400",children:"NE"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["090° ",l.jsx("strong",{className:"text-white",children:"E"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["135° ",l.jsx("strong",{className:"text-amber-400",children:"SE"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["180° ",l.jsx("strong",{className:"text-red-500",children:"S"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["225° ",l.jsx("strong",{className:"text-amber-400",children:"SW"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["270° ",l.jsx("strong",{className:"text-white",children:"W"})]}),l.jsx("span",{children:"•"}),l.jsxs("span",{children:["315° ",l.jsx("strong",{className:"text-amber-400",children:"NW"})]}),l.jsx("span",{children:"•"})]},P))})]}),l.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center z-20",children:x?l.jsxs("div",{className:"relative flex items-center justify-center animate-pulse",children:[l.jsx("div",{className:"w-10 h-10 border-2 border-red-500/80 rounded-sm rotate-45 shadow-[0_0_15px_rgba(255,0,0,0.9)]"}),l.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 absolute shadow-[0_0_8px_#ff0000]"}),l.jsxs("span",{className:"absolute -top-8 text-[10px] bg-black/95 px-2.5 py-0.5 rounded border border-red-600 text-red-400 font-black tracking-widest uppercase whitespace-nowrap shadow-xl",children:["[E] ",x.title," (",x.dist.toFixed(1),"m)"]})]}):l.jsxs("div",{className:"relative flex items-center justify-center",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_6px_#ff0000]"}),l.jsx("div",{className:"absolute w-4 h-0.5 bg-red-500/40 -left-5"}),l.jsx("div",{className:"absolute w-4 h-0.5 bg-red-500/40 -right-5"}),l.jsx("div",{className:"absolute h-4 w-0.5 bg-red-500/40 -top-5"}),l.jsx("div",{className:"absolute h-4 w-0.5 bg-red-500/40 -bottom-5"})]})}),c&&l.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10",children:[l.jsx("div",{className:"absolute inset-0 shadow-[inset_0_0_120px_rgba(147,51,234,0.7)]"}),l.jsxs("div",{className:"absolute top-12 left-4 flex items-center gap-3 text-[10px] text-purple-300 font-mono font-bold tracking-widest bg-purple-950/85 px-3 py-1 rounded border border-purple-600 shadow-xl",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 animate-ping"}),l.jsx("span",{children:"NVG // UV LUMINOL OPTICS [ACTIVE]"}),l.jsx("span",{className:"text-purple-400",children:"BATTERY: 98%"})]})]}),l.jsxs("div",{className:"absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20",children:[l.jsxs("div",{className:"px-3 py-1.5 rounded bg-black/85 border border-red-900 text-xs text-red-400 font-black flex items-center gap-2 shadow-2xl tracking-wider",children:[l.jsx($s,{className:"w-4 h-4 text-red-500 animate-pulse"}),l.jsx("span",{children:"BLACKWOOD HALLWAY // 3D RECON"})]}),l.jsxs("button",{onClick:()=>S.current(),className:`cursor-pointer px-3 py-1.5 rounded text-xs border font-bold flex items-center gap-1.5 shadow transition ${a?"bg-amber-950/80 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]":"bg-black/80 border-gray-800 text-gray-500"}`,title:"Toggle Halogen Flashlight [F]",children:[l.jsx(By,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["[F] ",a?"LIGHT ON":"LIGHT OFF"]})]}),l.jsxs("button",{onClick:()=>T.current(),className:`cursor-pointer px-3 py-1.5 rounded text-xs border font-bold flex items-center gap-1.5 shadow transition ${c?"bg-purple-950 border-purple-500 text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.8)] animate-pulse":"bg-black/80 border-gray-800 text-purple-400/80 hover:text-purple-300"}`,title:"Toggle UV Blacklight [L]",children:[l.jsx(Cd,{className:"w-3.5 h-3.5 text-purple-400"}),l.jsxs("span",{children:["[L] UV LUMINOL ",c?"ON":"OFF"]})]})]}),l.jsx("div",{className:"absolute top-4 right-4 z-20",children:l.jsxs("button",{onClick:e,className:"px-4 py-2 bg-red-950 hover:bg-red-900 border-2 border-red-600 text-white font-black text-xs rounded transition shadow-[0_0_25px_rgba(229,9,20,0.6)] flex items-center gap-2 tracking-wider uppercase cursor-pointer",children:[l.jsx(Ks,{className:"w-4 h-4"}),l.jsx("span",{children:"CASE TERMINAL [TAB]"})]})}),v&&l.jsx("div",{className:"absolute top-14 right-4 z-30 pointer-events-none animate-bounce",children:l.jsxs("div",{className:"px-4 py-2 bg-emerald-950/95 border-2 border-emerald-500 rounded text-emerald-200 font-mono text-xs font-black shadow-[0_0_30px_rgba(16,185,129,0.9)] flex items-center gap-2",children:[l.jsx("span",{className:"text-emerald-400 text-base",children:"✓"}),l.jsxs("span",{children:["+",v.pts," XP INTEL SECURED // ",v.title]})]})}),h&&l.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-pulse",children:l.jsxs("div",{className:"px-6 py-2 rounded-full bg-red-950/80 border border-red-600 text-red-200 text-xs font-serif italic tracking-widest flex items-center gap-2 shadow-2xl",children:[l.jsx(Zs,{className:"w-4 h-4 text-red-400 animate-bounce"}),l.jsxs("span",{children:['"',h,'"']})]})}),g&&l.jsx("div",{className:"absolute inset-0 z-40 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none font-mono animate-fade-in",children:l.jsxs("div",{className:"w-full max-w-lg bg-[#0b0b14] border-2 border-cyan-500/80 rounded-lg p-6 shadow-[0_0_50px_rgba(6,182,212,0.4)] space-y-4 text-gray-200 relative overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"}),l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-cyan-950",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx($s,{className:"w-5 h-5 text-cyan-400 animate-pulse"}),l.jsx("span",{className:"text-xs font-black text-cyan-400 tracking-widest uppercase",children:"CALL OF DUTY // TACTICAL INTEL"})]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold rounded",children:g.code})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-black text-white tracking-wide uppercase font-serif",children:g.title}),l.jsx("p",{className:"text-[11px] text-cyan-400/90 font-mono tracking-wider mt-0.5",children:"PHYSICAL RECONNAISSANCE VERIFIED"})]}),l.jsxs("div",{className:"p-4 bg-black/60 rounded border border-cyan-900/50 space-y-2 text-xs",children:[l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("span",{className:"text-cyan-400 font-black",children:"►"}),l.jsx("span",{className:"text-gray-100",children:g.bullet1})]}),l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("span",{className:"text-amber-400 font-black",children:"►"}),l.jsx("span",{className:"text-amber-200",children:g.bullet2})]}),l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx("span",{className:"text-red-400 font-black",children:"►"}),l.jsx("span",{className:"text-red-300 font-bold",children:g.bullet3})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[l.jsxs("button",{onClick:()=>{ne.playHitmarker(),ne.playRadioChirp(),t(g.clueId),f(null)},className:"cursor-pointer py-3 px-4 bg-cyan-800 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2",children:[l.jsx(Ks,{className:"w-4 h-4"}),l.jsx("span",{children:"ANALYZE IN TERMINAL"})]}),l.jsx("button",{onClick:()=>{ne.playHitmarker(),f(null)},className:"cursor-pointer py-3 px-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold text-xs uppercase tracking-widest rounded transition flex items-center justify-center gap-2",children:l.jsx("span",{children:"RESUME RECON"})})]})]})}),r&&!g&&l.jsx("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 z-30 animate-bounce",children:l.jsxs("button",{onClick:()=>{ne.playHitmarker(),ne.playRadioChirp();const P=Ym[r.clueId];P?(f(P),b({title:P.title,pts:100}),ne.playObjectiveComplete(),setTimeout(()=>b(null),2500)):t(r.clueId)},className:"cursor-pointer px-8 py-3.5 bg-red-700 hover:bg-red-600 border-2 border-red-300 text-white font-black text-sm rounded-lg shadow-[0_0_35px_rgba(255,0,0,0.9)] tracking-widest uppercase flex items-center gap-3",children:[l.jsx(Cd,{className:"w-5 h-5"}),l.jsxs("span",{children:["[E] SECURE INTEL: ",r.title]})]})}),l.jsxs("div",{className:"absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 bg-black/80 backdrop-blur-md border border-gray-800 rounded px-4 py-2 pointer-events-none z-20",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3",children:[l.jsx("span",{className:"text-red-400 font-bold uppercase tracking-wider",children:"CONTROLS:"}),l.jsxs("span",{children:[l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold",children:"W"}),l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1",children:"A"}),l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1",children:"S"}),l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1",children:"D"})," Move"]}),l.jsx("span",{children:"• Mouse Look"}),l.jsxs("span",{children:["• ",l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold",children:"E"})," Intel"]}),l.jsxs("span",{children:["• ",l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-purple-300 font-bold",children:"L"})," UV Goggles"]}),l.jsxs("span",{children:["• ",l.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-amber-300 font-bold",children:"TAB"})," Mode"]})]}),l.jsx("div",{className:"text-red-400 font-semibold tracking-wide italic mt-1 sm:mt-0",children:"Walk toward Waypoints: Clock (16m), Study 17-B (26m), Tape (8m)"})]})]})},Nw=({activeDrips:t,intenseTrauma:e})=>{const[n,i]=we.useState([{id:1,x:12,initialHeight:40,speed:.8},{id:2,x:28,initialHeight:70,speed:1.2},{id:3,x:45,initialHeight:35,speed:.6},{id:4,x:62,initialHeight:85,speed:1.5},{id:5,x:78,initialHeight:50,speed:.9},{id:6,x:91,initialHeight:65,speed:1.1}]),[r,s]=we.useState([0,0,0,0,0,0]);return we.useEffect(()=>{if(!t)return;const a=setInterval(()=>{s(o=>o.map((c,u)=>{const h=n[u].speed;return c>140?0:c+h}))},50);return()=>clearInterval(a)},[t]),l.jsxs("div",{className:`pointer-events-none fixed inset-0 z-50 overflow-hidden select-none transition-all duration-200 ${e?"animate-glitch filter contrast-200 saturate-200 scale-105":""}`,children:[e&&l.jsx("div",{className:"absolute inset-0 bg-red-950/70 animate-ping pointer-events-none mix-blend-hard-light"}),l.jsx("div",{className:"absolute inset-0 pointer-events-none transition-all duration-300",style:{boxShadow:e?"inset 0 0 180px rgba(220, 20, 60, 0.95), inset 0 0 90px rgba(120, 0, 0, 0.95)":"inset 0 0 110px rgba(120, 0, 10, 0.65), inset 0 0 45px rgba(50, 0, 0, 0.5)"}}),l.jsx("div",{className:"absolute top-0 left-0 right-0 h-40 pointer-events-none",children:n.map((a,o)=>l.jsxs("div",{className:"absolute top-0 flex flex-col items-center",style:{left:`${a.x}%`},children:[l.jsx("div",{className:"w-2 bg-gradient-to-b from-red-950 via-red-900 to-red-800 rounded-b-full shadow-[0_2px_12px_rgba(139,0,0,0.8)]",style:{height:`${a.initialHeight+r[o]}px`,transition:"height 0.05s linear"}}),l.jsx("div",{className:"w-3.5 h-4 -mt-1 rounded-full bg-red-900 shadow-[0_0_8px_rgba(255,0,0,0.7)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"})]},a.id))}),l.jsx("div",{className:"absolute top-4 left-4 w-48 h-48 opacity-90",children:l.jsx("svg",{viewBox:"0 0 200 200",className:"w-full h-full filter drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]",children:l.jsx("path",{d:`M 20,20 C 50,40 80,10 110,40 C 130,60 110,90 90,110 C 70,130 30,120 15,90 C 0,60 10,30 20,20 Z 
               M 90,25 C 105,10 115,20 110,35 C 105,45 95,40 90,25 Z 
               M 35,110 C 45,130 25,145 15,135 C 5,125 20,115 35,110 Z`,fill:"url(#visceralBlood)"})})}),l.jsx("div",{className:"absolute bottom-4 right-4 w-56 h-56 opacity-85",children:l.jsx("svg",{viewBox:"0 0 200 200",className:"w-full h-full filter drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]",children:l.jsx("path",{d:`M 180,180 C 140,150 160,110 130,90 C 100,70 70,110 60,130 C 50,160 90,190 120,195 C 150,200 190,195 180,180 Z 
               M 110,70 C 95,50 110,40 120,55 C 130,70 120,80 110,70 Z`,fill:"url(#visceralBlood)"})})}),l.jsx("div",{className:`absolute bottom-16 left-12 transition-all duration-700 pointer-events-none ${e?"opacity-90 scale-110":"opacity-35 scale-100"}`,children:l.jsxs("svg",{viewBox:"0 0 100 130",className:"w-32 h-40 filter drop-shadow-[0_0_18px_rgba(139,0,0,0.9)]",children:[l.jsx("ellipse",{cx:"50",cy:"80",rx:"26",ry:"32",fill:"#580005"}),l.jsx("ellipse",{cx:"20",cy:"62",rx:"8",ry:"17",transform:"rotate(-32 20 62)",fill:"#580005"}),l.jsx("ellipse",{cx:"36",cy:"30",rx:"7",ry:"22",fill:"#4d0004"}),l.jsx("ellipse",{cx:"50",cy:"22",rx:"7.5",ry:"24",fill:"#4d0004"}),l.jsx("ellipse",{cx:"64",cy:"27",rx:"7",ry:"22",fill:"#4d0004"}),l.jsx("ellipse",{cx:"78",cy:"40",rx:"6",ry:"18",fill:"#4d0004"}),l.jsx("path",{d:"M 38,90 Q 42,125 46,140 Q 52,140 50,110 Z",fill:"#3a0003",opacity:"0.8"})]})}),l.jsx("svg",{className:"hidden",children:l.jsx("defs",{children:l.jsxs("radialGradient",{id:"visceralBlood",cx:"40%",cy:"40%",r:"65%",children:[l.jsx("stop",{offset:"0%",stopColor:"#a30008"}),l.jsx("stop",{offset:"55%",stopColor:"#570004"}),l.jsx("stop",{offset:"100%",stopColor:"#1f0001",stopOpacity:"0.95"})]})})})]})},Pw=()=>{const[t,e]=we.useState(0),[n,i]=we.useState(55*60),[r,s]=we.useState(!1),[a,o]=we.useState(!1),[c,u]=we.useState(!1),[h,p]=we.useState(!1),[d,m]=we.useState("3d"),[x,E]=we.useState(!1),[g,f]=we.useState({isOpen:!1,fromRound:1,toRound:2,title:"",discovery:"",nextObjective:""}),[v,b]=we.useState(1),[S,T]=we.useState(!1),[w,C]=we.useState({aarav:!1,riya:!1,kabir:!1,meera:!1,dev:!1}),[y,A]=we.useState([]),[I,P]=we.useState(!1),[N,F]=we.useState(!1),[k,D]=we.useState({attackTime:"",deathTime:"",discoveryTime:""}),[$,q]=we.useState("pending"),[V,B]=we.useState(!1),[Y,Q]=we.useState({}),[de,ye]=we.useState(!1),[Ye,Oe]=we.useState(0),[Be,K]=we.useState([]);we.useEffect(()=>{let be;return r&&n>0&&(be=setInterval(()=>{i(De=>De<=1?(clearInterval(be),s(!1),ne.playHorrorStinger(),0):(De<180&&De%5===0&&ne.playHeartbeat(),De-1))},1e3)),()=>clearInterval(be)},[r,n]),we.useEffect(()=>{const be=De=>{De.ctrlKey&&De.shiftKey&&De.key.toLowerCase()==="h"&&(De.preventDefault(),u(U=>!U)),De.key==="Tab"&&!De.ctrlKey&&!De.shiftKey&&(De.preventDefault(),m(U=>U==="3d"?"terminal":U==="terminal"?"board":"3d"),ne.playTick(!1))};return window.addEventListener("keydown",be),()=>window.removeEventListener("keydown",be)},[]);const ie=()=>{s(!r),ne.playTick(!1)},_e=()=>{const be=!a;o(be),ne.setMuted(be)},ke=()=>{T(!0),t===1&&setTimeout(()=>{f({isOpen:!0,fromRound:1,toRound:2,title:"CHRONOLOGY ANOMALY CONFIRMED: PRE-CRIME RECORDING",discovery:'The 0.5x sub-bass layer on Dictaphone Tape #4 reveals: "Someone started before the house stopped." The 11:47 clock was deliberately arrested with graphite to manufacture a false time of death.',nextObjective:"Audit all 5 suspects in Round 2. Each had opportunity, but 4 committed different secondary crimes. Disarm their locks to expose non-murder motives."})},500)},ve=be=>{C(De=>{const U={...De,[be]:!0};return Object.values(U).every(Boolean)&&t===2&&setTimeout(()=>{f({isOpen:!0,fromRound:2,toRound:3,title:"FIVE CONSPIRACIES UNRAVELED: ONLY ONE KILLER REMAINS",discovery:"Aarav stole research, Kabir blew the transformer, Riya bugged the rooms, and Meera struck Sen at 11:47 PM. But Devraj Negi's alibi collapsed—he knows the secret service passages.",nextObjective:"The House AI has formulated its own accusation in Round 3. Probe its logic and expose the core algorithmic bias."})},500),U})},je=()=>{const be=!I;P(be),be&&t===3&&setTimeout(()=>{f({isOpen:!0,fromRound:3,toRound:4,title:"ALGORITHMIC TRAP DETECTED: THE AI DISCARDED SURVIVAL DATA",discovery:"The House AI assumed the 11:47 assault was immediately fatal. It completely discarded telemetry from 12:03 AM showing Professor Sen alive and typing at his terminal.",nextObjective:"Enter Round 4: Establish the definitive forensic distinction between Attack Time (11:47), Death Time (12:15), and Discovery Time (12:18)."})},500)},yt=()=>{F(!0),t===4&&setTimeout(()=>{f({isOpen:!0,fromRound:4,toRound:5,title:"THE DEAD MAN SPEAKS: SEN WAS ALIVE UNTIL 12:15",discovery:"Professor Sen's encrypted 12:03 webcam feed proves Meera did not kill him! The true fatal smothering occurred at 12:15 AM during Kabir's electrical blackout.",nextObjective:"The House AI is 97.8% confident Meera is the murderer. Challenge its false indictment in Round 5 to retrieve the printer spool logs."})},500)},He=()=>{q("challenged"),B(!0),t===5&&setTimeout(()=>{f({isOpen:!0,fromRound:5,toRound:6,title:"SMOKING GUN: THE PRE-CRIME FABRICATION",discovery:"Evidence Spool 12 proves the indictment against Dr. Meera was sent to the network printer at 11:41 PM—six minutes BEFORE she entered Study 17-B! The House and Dev staged the entire crime.",nextObjective:"Enter Round 6: Construct the Master Forensic Indictment prompt to dismantle the House AI and convict Devraj Negi."})},500)},qe=()=>{e(g.toRound),f(be=>({...be,isOpen:!1})),m("terminal"),ne.playHorrorStinger()},ot=(be,De,U)=>{const Pt={prompt:be,response:De,reasoning:U,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};A(nt=>[Pt,...nt])},Ve=()=>{e(0),i(55*60),s(!1),p(!1),T(!1),b(1),C({aarav:!1,riya:!1,kabir:!1,meera:!1,dev:!1}),A([]),P(!1),F(!1),D({attackTime:"",deathTime:"",discoveryTime:""}),q("pending"),B(!1),Q({}),ye(!1),Oe(0),K([]),f({isOpen:!1,fromRound:1,toRound:2,title:"",discovery:"",nextObjective:""}),m("3d")},rt=()=>{ne.playObjectiveComplete(),ne.playRadioChirp(),C({aarav:!0,riya:!0,kabir:!0,meera:!0,dev:!0}),T(!0),F(!0),B(!0),D({attackTime:"11:47 PM",deathTime:"12:15 AM (Blackout)",discoveryTime:"12:18 AM"}),q("challenged"),Q({attacker:"Dr. Meera Patel",murderer:'Devraj "Dev" Negi',blackoutCauser:"Kabir Varma",attackTime:"11:47 PM",trueDeathTime:"12:15 AM (During Blackout)",finalRecordingTime:"12:03 AM",discoveryTime:"12:18 AM",falseEvidenceTime:"11:41 PM (HP Laser Spool)",aiBiggestError:"The AI assumed all CCTV hardware clocks were synchronized, ignored the 9-minute kitchen clock drift, and falsely equated Meera's 11:47 PM assault with the fatal 12:15 AM smothering."}),ye(!0),Oe(100),K(["✓ Correctly identified physical attacker: Dr. Meera Patel (+20 pts)","✓ Correctly identified true murderer: Devraj Negi (+25 pts)","✓ Correctly identified blackout operator: Kabir Varma (+15 pts)","✓ Perfect chronology triad (+15 pts)","✓ Pre-crime evidence timestamp accounted for (+5 pts)","✓ Correctly identified AI cognitive flaw (+20 pts)"]),e(6),m("terminal")};if(h)return l.jsx(rS,{onResetGame:Ve});if(t===0)return l.jsx(qy,{onComplete:()=>{e(1),s(!0)},audioMuted:a,onToggleMute:_e});const Tt=Cy.filter(be=>be.id==="ev-12"?V:be.round<=t),Lt=()=>{E(!0),ne.playTerrifyingScream(),ne.playViolinShriek(),ne.playThunderClap(),ne.playBloodSplatter(),setTimeout(()=>{E(!1)},1600)};return l.jsxs("div",{className:"min-h-screen bg-[#07070a] text-gray-200 flex flex-col font-mono selection:bg-red-900 selection:text-white analog-grain relative",children:[l.jsx(Nw,{activeDrips:!0,intenseTrauma:x}),l.jsx($y,{currentRound:t,timeRemainingSeconds:n,isTimerRunning:r,onToggleTimer:ie,audioMuted:a,onToggleMute:_e,onOpenHostModal:()=>u(!0),onSelectRound:be=>{e(be),ne.playTick(!1)}}),l.jsx("div",{className:"bg-[#0b0b10] border-b border-red-950 px-4 py-2.5",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx("button",{onClick:()=>{m("3d"),ne.playTick(!1)},className:`px-4 py-2 rounded font-bold transition flex items-center gap-2 cursor-pointer ${d==="3d"?"bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500":"bg-black/60 text-gray-400 hover:text-white border border-gray-800"}`,children:l.jsx("span",{children:"🏰 3D MANSION (WASD)"})}),l.jsx("button",{onClick:()=>{m("terminal"),ne.playTick(!1)},className:`px-4 py-2 rounded font-bold transition flex items-center gap-2 cursor-pointer ${d==="terminal"?"bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500":"bg-black/60 text-gray-400 hover:text-white border border-gray-800"}`,children:l.jsx("span",{children:"💻 CASE TERMINAL (PUZZLES)"})}),l.jsxs("button",{onClick:()=>{m("board"),ne.playTick(!1)},className:`px-4 py-2 rounded font-bold transition flex items-center gap-2 cursor-pointer ${d==="board"?"bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500":"bg-black/60 text-gray-400 hover:text-white border border-gray-800"}`,children:[l.jsx(Pd,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"}),l.jsx("span",{children:"📌 CONSPIRACY WALL (RED THREADS)"})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:Lt,className:"px-3 py-1.5 rounded bg-red-950/40 hover:bg-red-950 border border-red-900/80 text-red-300 font-bold transition flex items-center gap-1.5 shadow cursor-pointer",title:"Test Jumpscare & Blood Splatter",children:l.jsx("span",{children:"🩸 TEST HORROR JUMPSCARE"})}),l.jsx("span",{className:"text-[11px] text-gray-500 hidden md:inline",children:"[TAB] Quick-Toggle Mode"})]})]})}),l.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6",children:[d==="3d"&&l.jsxs("div",{className:"space-y-4",children:[l.jsx(Rw,{onInspectClue:be=>{m("terminal"),ne.playHorrorStinger()},onOpenTerminal:()=>m("terminal"),onTriggerTrauma:Lt}),l.jsxs("div",{className:"p-4 bg-[#0d0d14] rounded border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[l.jsx(Ks,{className:"w-4 h-4 text-red-500"}),l.jsx("span",{children:"EVIDENCE ACCESSIBLE IN 3D: Walk close to Grandfather Clock, Tape Recorder, or Study 17-B Door. Press [L] for UV Luminol."})]}),l.jsx("button",{onClick:()=>m("terminal"),className:"px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded transition cursor-pointer shrink-0",children:"SWITCH TO DOSSIER & PUZZLES →"})]})]}),d==="board"&&l.jsxs("div",{className:"space-y-4",children:[l.jsx(oS,{currentRound:t,suspectLocks:w,audioRevealedSecret:S,reasoningInspected:I,hiddenVideoUnlocked:N,printerLogUnlocked:V,finalEvaluated:de}),l.jsxs("div",{className:"p-4 bg-[#0d0d14] rounded border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3",children:[l.jsxs("div",{className:"text-xs text-gray-400 flex items-center gap-2",children:[l.jsx(Pd,{className:"w-4 h-4 text-red-500 fill-red-500"}),l.jsx("span",{children:"The red thread network tracks how each clue transforms across rounds. Solve suspect locks and AI traps to complete the wall."})]}),l.jsx("button",{onClick:()=>m("terminal"),className:"px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded transition cursor-pointer shrink-0",children:"RETURN TO PUZZLE TERMINAL →"})]})]}),d==="terminal"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"p-4 rounded border border-red-950/80 bg-[#0c0c12] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md",children:[l.jsxs("div",{children:[l.jsxs("span",{className:"text-[10px] text-red-500 font-bold uppercase tracking-widest",children:["ACTIVE OBJECTIVE • ROUND ",t]}),l.jsxs("h2",{className:"text-lg font-bold text-gray-100",children:[t===1&&"The First Lie — Audit the 11:47 Clue & Distorted Audio Reel",t===2&&"Five Suspects — Break the Alibis & Identify Non-Murder Crimes",t===3&&"The Impossible Timeline — Reconcile 12:03 CCTV with 12:05 Audio & Inspect AI Assumptions",t===4&&"The Dead Man's Message — Separate Attack Time, Death Time, and Discovery Time",t===5&&"The False Murderer — Challenge the 97.8% AI Indictment of Dr. Meera Patel",t===6&&"The House Remembers — Final Boss Prompt & Forensic Reconstruction"]})]}),t<6&&l.jsxs("button",{onClick:()=>{e(be=>be+1),ne.playTick(!0)},className:"px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded flex items-center gap-1.5 shrink-0 transition cursor-pointer",children:[l.jsxs("span",{children:["PROCEED TO ROUND ",t+1]}),l.jsx(ky,{className:"w-4 h-4"})]})]}),t===2&&l.jsx(Qy,{suspectLocks:w,onSolveLock:ve}),t===3&&l.jsx(Jy,{queries:y,onAddQuery:ot,reasoningInspected:I,onInspectReasoning:je}),t===4&&l.jsx(eS,{hiddenVideoUnlocked:N,onUnlockHiddenVideo:yt,sliderDistinction:k,onChangeDistinction:(be,De)=>{D(U=>({...U,[be]:De}))}}),t===5&&l.jsx(tS,{round5Choice:$,onAccuseMeera:()=>q("accused_meera"),onChallengeAi:He,printerLogUnlocked:V}),t===6&&l.jsx(iS,{submission:Y,onChangeSubmission:(be,De)=>{Q(U=>({...U,[be]:De}))},evaluated:de,score:Ye,feedback:Be,onSetEvaluation:(be,De,U)=>{ye(be),Oe(De),K(U)},onTriggerClimax:()=>p(!0)}),l.jsx(Zy,{evidenceList:Tt,currentRound:t,audioSpeed:v,onSetAudioSpeed:b,audioRevealedSecret:S,onAudioRevealedSecret:ke})]})]}),l.jsx(aS,{isOpen:g.isOpen,fromRound:g.fromRound,toRound:g.toRound,title:g.title,discovery:g.discovery,nextObjective:g.nextObjective,onProceed:qe}),l.jsx(sS,{isOpen:c,onClose:()=>u(!1),currentRound:t,onSelectRound:be=>{e(be),u(!1)},timeRemaining:n,onAdjustTime:be=>i(De=>Math.max(0,De+be)),onUnlockAllLocks:()=>{C({aarav:!0,riya:!0,kabir:!0,meera:!0,dev:!0})},onUnlockPrinterLog:()=>B(!0),onUnlockHiddenVideo:()=>F(!0),onTriggerBlackout:()=>{ne.playBlackout()},onTriggerClimax:()=>{p(!0)},onResetGame:Ve,onAutoSolveAll:rt}),l.jsx("footer",{className:"border-t border-gray-900 py-3 text-center text-[10px] text-gray-600 font-mono",children:"PROMPT WAR 2.0 • THE HOUSE THAT REMEMBERS • 55-MINUTE LIVE ESCAPE PROTOCOL • PRESS [CTRL+SHIFT+H] FOR HOST HUD"})]})};ku.createRoot(document.getElementById("root")).render(l.jsx(r0.StrictMode,{children:l.jsx(Pw,{})}));
