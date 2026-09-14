var ov=Object.defineProperty;var lv=(t,e,n)=>e in t?ov(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Rc=(t,e,n)=>lv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i0={exports:{}},dc={},r0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),dv=Symbol.for("react.portal"),uv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),gv=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),yv=Symbol.for("react.lazy"),Hh=Symbol.iterator;function _v(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a0=Object.assign,o0={};function ia(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||s0}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=ia.prototype;function wf(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||s0}var Af=wf.prototype=new l0;Af.constructor=wf;a0(Af,ia.prototype);Af.isPureReactComponent=!0;var jh=Array.isArray,c0=Object.prototype.hasOwnProperty,Cf={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)c0.call(e,i)&&!d0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:vo,type:t,key:s,ref:a,props:r,_owner:Cf.current}}function Sv(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gh=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bv(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case vo:case dv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Pc(a,0):i,jh(r)?(n="",t!=null&&(n=t.replace(Gh,"$&/")+"/"),pl(r,e,n,"",function(d){return d})):r!=null&&(Nf(r)&&(r=Sv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Gh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jh(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Pc(s,l);a+=pl(s,e,n,c,r)}else if(c=_v(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Pc(s,l++),a+=pl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ao(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},ml={transition:null},Ev={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Cf};function f0(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=ia;Ze.Fragment=uv;Ze.Profiler=hv;Ze.PureComponent=wf;Ze.StrictMode=fv;Ze.Suspense=gv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;Ze.act=f0;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=a0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)c0.call(e,c)&&!d0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};Ze.createElement=u0;Ze.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:xv,render:t}};Ze.isValidElement=Nf;Ze.lazy=function(t){return{$$typeof:yv,_payload:{_status:-1,_result:t},_init:Mv}};Ze.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};Ze.unstable_act=f0;Ze.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ze.useContext=function(t){return mn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ze.useId=function(){return mn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ze.useRef=function(t){return mn.current.useRef(t)};Ze.useState=function(t){return mn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return mn.current.useTransition()};Ze.version="18.3.1";r0.exports=Ze;var Se=r0.exports;const h0=cv(Se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=Se,wv=Symbol.for("react.element"),Av=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Nv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rv={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Cv.call(e,i)&&!Rv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:wv,type:t,key:s,ref:a,props:r,_owner:Nv.current}}dc.Fragment=Av;dc.jsx=p0;dc.jsxs=p0;i0.exports=dc;var o=i0.exports,Fd={},m0={exports:{}},Un={},x0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,B){var X=H.length;H.push(B);e:for(;0<X;){var Q=X-1>>>1,ue=H[Q];if(0<r(ue,B))H[Q]=B,H[X]=ue,X=Q;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var B=H[0],X=H.pop();if(X!==B){H[0]=X;e:for(var Q=0,ue=H.length,_e=ue>>>1;Q<_e;){var Xe=2*(Q+1)-1,Oe=H[Xe],Fe=Xe+1,K=H[Fe];if(0>r(Oe,X))Fe<ue&&0>r(K,Oe)?(H[Q]=K,H[Fe]=X,Q=Fe):(H[Q]=Oe,H[Xe]=X,Q=Xe);else if(Fe<ue&&0>r(K,X))H[Q]=K,H[Fe]=X,Q=Fe;else break e}}return B}function r(H,B){var X=H.sortIndex-B.sortIndex;return X!==0?X:H.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],h=1,p=null,u=3,m=!1,g=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(H){for(var B=n(d);B!==null;){if(B.callback===null)i(d);else if(B.startTime<=H)i(d),B.sortIndex=B.expirationTime,e(c,B);else break;B=n(d)}}function S(H){if(E=!1,T(H),!g)if(n(c)!==null)g=!0,Z(b);else{var B=n(d);B!==null&&q(S,B.startTime-H)}}function b(H,B){g=!1,E&&(E=!1,f(y),y=-1),m=!0;var X=u;try{for(T(B),p=n(c);p!==null&&(!(p.expirationTime>B)||H&&!P());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,u=p.priorityLevel;var ue=Q(p.expirationTime<=B);B=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(c)&&i(c),T(B)}else i(c);p=n(c)}if(p!==null)var _e=!0;else{var Xe=n(d);Xe!==null&&q(S,Xe.startTime-B),_e=!1}return _e}finally{p=null,u=X,m=!1}}var w=!1,C=null,y=-1,A=5,I=-1;function P(){return!(t.unstable_now()-I<A)}function R(){if(C!==null){var H=t.unstable_now();I=H;var B=!0;try{B=C(!0,H)}finally{B?F():(w=!1,C=null)}}else w=!1}var F;if(typeof v=="function")F=function(){v(R)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,k=U.port2;U.port1.onmessage=R,F=function(){k.postMessage(null)}}else F=function(){x(R,0)};function Z(H){C=H,w||(w=!0,F())}function q(H,B){y=x(function(){H(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Z(b))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(H){switch(u){case 1:case 2:case 3:var B=3;break;default:B=u}var X=u;u=B;try{return H()}finally{u=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,B){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=u;u=H;try{return B()}finally{u=X}},t.unstable_scheduleCallback=function(H,B,X){var Q=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Q+X:Q):X=Q,H){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=X+ue,H={id:h++,callback:B,priorityLevel:H,startTime:X,expirationTime:ue,sortIndex:-1},X>Q?(H.sortIndex=X,e(d,H),n(c)===null&&H===n(d)&&(E?(f(y),y=-1):E=!0,q(S,X-Q))):(H.sortIndex=ue,e(c,H),g||m||(g=!0,Z(b))),H},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(H){var B=u;return function(){var X=u;u=B;try{return H.apply(this,arguments)}finally{u=X}}}})(g0);x0.exports=g0;var Pv=x0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=Se,kn=Pv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,Ya={};function es(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Ya[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wh={},Xh={};function Dv(t){return Bd.call(Xh,t)?!0:Bd.call(Wh,t)?!1:Lv.test(t)?Xh[t]=!0:(Wh[t]=!0,!1)}function kv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,n,i){if(e===null||typeof e>"u"||kv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rf=/[\-:]([a-z])/g;function Pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);Qt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);Qt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rf,Pf);Qt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function If(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,n,r,i)&&(n=null),i||r===null?Dv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),kf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),S0=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,Ic;function Na(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Lc=!1;function Dc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function Ov(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case zd:return"Profiler";case Lf:return"StrictMode";case Vd:return"Suspense";case Hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _0:return(t.displayName||"Context")+".Consumer";case y0:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kf:return e=t.displayName||null,e!==null?e:jd(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return jd(t(e))}catch{}}return null}function Fv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(e);case 8:return e===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bv(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=Bv(t))}function M0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=b0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gd(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E0(t,e){e=e.checked,e!=null&&If(t,"checked",e,!1)}function Wd(t,e){E0(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xd(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ra(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function T0(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zv=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){zv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function N0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=C0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Vv=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(Vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function $d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,Os=null,Fs=null;function Qh(t){if(t=So(t)){if(typeof Qd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=mc(e),Qd(t.stateNode,t.type,e))}}function R0(t){Os?Fs?Fs.push(t):Fs=[t]:Os=t}function P0(){if(Os){var t=Os,e=Fs;if(Fs=Os=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function I0(t,e){return t(e)}function L0(){}var kc=!1;function D0(t,e,n){if(kc)return t(e,n);kc=!0;try{return I0(t,e,n)}finally{kc=!1,(Os!==null||Fs!==null)&&(L0(),P0())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var i=mc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Jd=!1;if(Gi)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Jd=!1}function Hv(t,e,n,i,r,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var Ua=!1,Dl=null,kl=!1,eu=null,jv={onError:function(t){Ua=!0,Dl=t}};function Gv(t,e,n,i,r,s,a,l,c){Ua=!1,Dl=null,Hv.apply(jv,arguments)}function Wv(t,e,n,i,r,s,a,l,c){if(Gv.apply(this,arguments),Ua){if(Ua){var d=Dl;Ua=!1,Dl=null}else throw Error(se(198));kl||(kl=!0,eu=d)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jh(t){if(ts(t)!==t)throw Error(se(188))}function Xv(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jh(r),t;if(s===i)return Jh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function U0(t){return t=Xv(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var F0=kn.unstable_scheduleCallback,ep=kn.unstable_cancelCallback,Yv=kn.unstable_shouldYield,qv=kn.unstable_requestPaint,Dt=kn.unstable_now,Kv=kn.unstable_getCurrentPriorityLevel,Of=kn.unstable_ImmediatePriority,B0=kn.unstable_UserBlockingPriority,Ul=kn.unstable_NormalPriority,$v=kn.unstable_LowPriority,z0=kn.unstable_IdlePriority,uc=null,bi=null;function Zv(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:ey,Qv=Math.log,Jv=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(Qv(t)/Jv|0)|0}var Po=64,Io=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=Pa(l):(s&=a,s!==0&&(i=Pa(s)))}else a=n&~r,a!==0?i=Pa(a):s!==0&&(i=Pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-oi(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=ty(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function tu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function H0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j0,Bf,G0,W0,X0,nu=!1,Lo=[],mr=null,xr=null,gr=null,$a=new Map,Za=new Map,cr=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function xa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=So(e),e!==null&&Bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return mr=xa(mr,t,e,n,i,r),!0;case"dragenter":return xr=xa(xr,t,e,n,i,r),!0;case"mouseover":return gr=xa(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $a.set(s,xa($a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Za.set(s,xa(Za.get(s)||null,t,e,n,i,r)),!0}return!1}function Y0(t){var e=Ur(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=k0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){G0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zd=i,n.target.dispatchEvent(i),Zd=null}else return e=So(n),e!==null&&Bf(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){xl(t)&&n.delete(e)}function ay(){nu=!1,mr!==null&&xl(mr)&&(mr=null),xr!==null&&xl(xr)&&(xr=null),gr!==null&&xl(gr)&&(gr=null),$a.forEach(np),Za.forEach(np)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,nu||(nu=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,ay)))}function Qa(t){function e(r){return ga(r,t)}if(0<Lo.length){ga(Lo[0],t);for(var n=1;n<Lo.length;n++){var i=Lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&ga(mr,t),xr!==null&&ga(xr,t),gr!==null&&ga(gr,t),$a.forEach(e),Za.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)Y0(n),n.blockedOn===null&&cr.shift()}var Bs=Ki.ReactCurrentBatchConfig,Fl=!0;function oy(t,e,n,i){var r=mt,s=Bs.transition;Bs.transition=null;try{mt=1,zf(t,e,n,i)}finally{mt=r,Bs.transition=s}}function ly(t,e,n,i){var r=mt,s=Bs.transition;Bs.transition=null;try{mt=4,zf(t,e,n,i)}finally{mt=r,Bs.transition=s}}function zf(t,e,n,i){if(Fl){var r=iu(t,e,n,i);if(r===null)Xc(t,e,i,Bl,n),tp(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(tp(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=So(r);if(s!==null&&j0(s),s=iu(t,e,n,i),s===null&&Xc(t,e,i,Bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xc(t,e,i,null,n)}}var Bl=null;function iu(t,e,n,i){if(Bl=null,t=Uf(i),t=Ur(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bl=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case Of:return 1;case B0:return 4;case Ul:case $v:return 16;case z0:return 536870912;default:return 16}default:return 16}}var fr=null,Vf=null,gl=null;function K0(){if(gl)return gl;var t,e=Vf,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function ip(){return!1}function On(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:ip,this.isPropagationStopped=ip,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hf=On(ra),_o=Pt({},ra,{view:0,detail:0}),cy=On(_o),Oc,Fc,va,fc=Pt({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Oc=t.screenX-va.screenX,Fc=t.screenY-va.screenY):Fc=Oc=0,va=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),rp=On(fc),dy=Pt({},fc,{dataTransfer:0}),uy=On(dy),fy=Pt({},_o,{relatedTarget:0}),Bc=On(fy),hy=Pt({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),py=On(hy),my=Pt({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xy=On(my),gy=Pt({},ra,{data:0}),sp=On(gy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_y[t])?!!e[t]:!1}function jf(){return Sy}var by=Pt({},_o,{key:function(t){if(t.key){var e=vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),My=On(by),Ey=Pt({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=On(Ey),Ty=Pt({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),wy=On(Ty),Ay=Pt({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=On(Ay),Ny=Pt({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=On(Ny),Py=[9,13,27,32],Gf=Gi&&"CompositionEvent"in window,Oa=null;Gi&&"documentMode"in document&&(Oa=document.documentMode);var Iy=Gi&&"TextEvent"in window&&!Oa,$0=Gi&&(!Gf||Oa&&8<Oa&&11>=Oa),op=" ",lp=!1;function Z0(t,e){switch(t){case"keyup":return Py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function Ly(t,e){switch(t){case"compositionend":return Q0(e);case"keypress":return e.which!==32?null:(lp=!0,op);case"textInput":return t=e.data,t===op&&lp?null:t;default:return null}}function Dy(t,e){if(Ts)return t==="compositionend"||!Gf&&Z0(t,e)?(t=K0(),gl=Vf=fr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $0&&e.locale!=="ko"?null:e.data;default:return null}}var ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ky[t.type]:e==="textarea"}function J0(t,e,n,i){R0(i),e=zl(e,"onChange"),0<e.length&&(n=new Hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fa=null,Ja=null;function Uy(t){dx(t,0)}function hc(t){var e=Cs(t);if(M0(e))return t}function Oy(t,e){if(t==="change")return e}var ex=!1;if(Gi){var zc;if(Gi){var Vc="oninput"in document;if(!Vc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Vc=typeof dp.oninput=="function"}zc=Vc}else zc=!1;ex=zc&&(!document.documentMode||9<document.documentMode)}function up(){Fa&&(Fa.detachEvent("onpropertychange",tx),Ja=Fa=null)}function tx(t){if(t.propertyName==="value"&&hc(Ja)){var e=[];J0(e,Ja,t,Uf(t)),D0(Uy,e)}}function Fy(t,e,n){t==="focusin"?(up(),Fa=e,Ja=n,Fa.attachEvent("onpropertychange",tx)):t==="focusout"&&up()}function By(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(Ja)}function zy(t,e){if(t==="click")return hc(e)}function Vy(t,e){if(t==="input"||t==="change")return hc(e)}function Hy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:Hy;function eo(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,e){var n=fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fp(n)}}function nx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ix(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jy(t){var e=ix(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nx(n.ownerDocument.documentElement,n)){if(i!==null&&Wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hp(n,s);var a=hp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gy=Gi&&"documentMode"in document&&11>=document.documentMode,ws=null,ru=null,Ba=null,su=!1;function pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;su||ws==null||ws!==Ll(i)||(i=ws,"selectionStart"in i&&Wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&eo(Ba,i)||(Ba=i,i=zl(ru,"onSelect"),0<i.length&&(e=new Hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Hc={},rx={};Gi&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function pc(t){if(Hc[t])return Hc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rx)return Hc[t]=e[n];return t}var sx=pc("animationend"),ax=pc("animationiteration"),ox=pc("animationstart"),lx=pc("transitionend"),cx=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){cx.set(t,e),es(e,[t])}for(var jc=0;jc<mp.length;jc++){var Gc=mp[jc],Wy=Gc.toLowerCase(),Xy=Gc[0].toUpperCase()+Gc.slice(1);wr(Wy,"on"+Xy)}wr(sx,"onAnimationEnd");wr(ax,"onAnimationIteration");wr(ox,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(lx,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Wv(i,e,void 0,t),t.currentTarget=null}function dx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;xp(r,l,d),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;xp(r,l,d),s=c}}}if(kl)throw t=eu,kl=!1,eu=null,t}function Mt(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var i=t+"__bubble";n.has(i)||(ux(e,t,2,!1),n.add(i))}function Wc(t,e,n){var i=0;e&&(i|=4),ux(n,t,i,e)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[Uo]){t[Uo]=!0,v0.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uo]||(e[Uo]=!0,Wc("selectionchange",!1,e))}}function ux(t,e,n,i){switch(q0(e)){case 1:var r=oy;break;case 4:r=ly;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Ur(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}D0(function(){var d=s,h=Uf(n),p=[];e:{var u=cx.get(t);if(u!==void 0){var m=Hf,g=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":m=My;break;case"focusin":g="focus",m=Bc;break;case"focusout":g="blur",m=Bc;break;case"beforeblur":case"afterblur":m=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=wy;break;case sx:case ax:case ox:m=py;break;case lx:m=Cy;break;case"scroll":m=cy;break;case"wheel":m=Ry;break;case"copy":case"cut":case"paste":m=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ap}var E=(e&4)!==0,x=!E&&t==="scroll",f=E?u!==null?u+"Capture":null:u;E=[];for(var v=d,T;v!==null;){T=v;var S=T.stateNode;if(T.tag===5&&S!==null&&(T=S,f!==null&&(S=Ka(v,f),S!=null&&E.push(no(v,S,T)))),x)break;v=v.return}0<E.length&&(u=new m(u,g,null,n,h),p.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Zd&&(g=n.relatedTarget||n.fromElement)&&(Ur(g)||g[Wi]))break e;if((m||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=d,g=g?Ur(g):null,g!==null&&(x=ts(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=d),m!==g)){if(E=rp,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=ap,S="onPointerLeave",f="onPointerEnter",v="pointer"),x=m==null?u:Cs(m),T=g==null?u:Cs(g),u=new E(S,v+"leave",m,n,h),u.target=x,u.relatedTarget=T,S=null,Ur(h)===d&&(E=new E(f,v+"enter",g,n,h),E.target=T,E.relatedTarget=x,S=E),x=S,m&&g)t:{for(E=m,f=g,v=0,T=E;T;T=os(T))v++;for(T=0,S=f;S;S=os(S))T++;for(;0<v-T;)E=os(E),v--;for(;0<T-v;)f=os(f),T--;for(;v--;){if(E===f||f!==null&&E===f.alternate)break t;E=os(E),f=os(f)}E=null}else E=null;m!==null&&gp(p,u,m,E,!1),g!==null&&x!==null&&gp(p,x,g,E,!0)}}e:{if(u=d?Cs(d):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var b=Oy;else if(cp(u))if(ex)b=Vy;else{b=By;var w=Fy}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=zy);if(b&&(b=b(t,d))){J0(p,b,n,h);break e}w&&w(t,u,d),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Xd(u,"number",u.value)}switch(w=d?Cs(d):window,t){case"focusin":(cp(w)||w.contentEditable==="true")&&(ws=w,ru=d,Ba=null);break;case"focusout":Ba=ru=ws=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,pp(p,n,h);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":pp(p,n,h)}var C;if(Gf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ts?Z0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&($0&&n.locale!=="ko"&&(Ts||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ts&&(C=K0()):(fr=h,Vf="value"in fr?fr.value:fr.textContent,Ts=!0)),w=zl(d,y),0<w.length&&(y=new sp(y,t,null,n,h),p.push({event:y,listeners:w}),C?y.data=C:(C=Q0(n),C!==null&&(y.data=C)))),(C=Iy?Ly(t,n):Dy(t,n))&&(d=zl(d,"onBeforeInput"),0<d.length&&(h=new sp("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=C))}dx(p,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ka(t,n),s!=null&&i.unshift(no(t,s,r)),s=Ka(t,e),s!=null&&i.push(no(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=Ka(n,s),c!=null&&a.unshift(no(n,c,l))):r||(c=Ka(n,s),c!=null&&a.push(no(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var qy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Ky,"")}function Oo(t,e,n){if(e=vp(e),vp(t)!==e&&n)throw Error(se(425))}function Vl(){}var au=null,ou=null;function lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(Qy)}:cu;function Qy(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qa(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),vi="__reactFiber$"+sa,io="__reactProps$"+sa,Wi="__reactContainer$"+sa,du="__reactEvents$"+sa,Jy="__reactListeners$"+sa,e_="__reactHandles$"+sa;function Ur(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_p(t);t!==null;){if(n=t[vi])return n;t=_p(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[vi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function mc(t){return t[io]||null}var uu=[],Ns=-1;function Ar(t){return{current:t}}function Et(t){0>Ns||(t.current=uu[Ns],uu[Ns]=null,Ns--)}function St(t,e){Ns++,uu[Ns]=t.current,t.current=e}var Er={},cn=Ar(Er),Mn=Ar(!1),Wr=Er;function Xs(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function Hl(){Et(Mn),Et(cn)}function Sp(t,e,n){if(cn.current!==Er)throw Error(se(168));St(cn,e),St(Mn,n)}function fx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Fv(t)||"Unknown",r));return Pt({},n,i)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Wr=cn.current,St(cn,t),St(Mn,Mn.current),!0}function bp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=fx(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,Et(Mn),Et(cn),St(cn,t)):Et(Mn),St(Mn,n)}var Ui=null,xc=!1,qc=!1;function hx(t){Ui===null?Ui=[t]:Ui.push(t)}function t_(t){xc=!0,hx(t)}function Cr(){if(!qc&&Ui!==null){qc=!0;var t=0,e=mt;try{var n=Ui;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,xc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),F0(Of,Cr),r}finally{mt=e,qc=!1}}return null}var Rs=[],Ps=0,Gl=null,Wl=0,jn=[],Gn=0,Xr=null,Oi=1,Fi="";function Dr(t,e){Rs[Ps++]=Wl,Rs[Ps++]=Gl,Gl=t,Wl=e}function px(t,e,n){jn[Gn++]=Oi,jn[Gn++]=Fi,jn[Gn++]=Xr,Xr=t;var i=Oi;t=Fi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Oi=1<<32-oi(e)+r|n<<r|i,Fi=s+t}else Oi=1<<s|n<<r|i,Fi=t}function Xf(t){t.return!==null&&(Dr(t,1),px(t,1,0))}function Yf(t){for(;t===Gl;)Gl=Rs[--Ps],Rs[Ps]=null,Wl=Rs[--Ps],Rs[Ps]=null;for(;t===Xr;)Xr=jn[--Gn],jn[Gn]=null,Fi=jn[--Gn],jn[Gn]=null,Oi=jn[--Gn],jn[Gn]=null}var Dn=null,Ln=null,wt=!1,ii=null;function mx(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Oi,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(wt){var e=Ln;if(e){var n=e;if(!Mp(t,e)){if(fu(t))throw Error(se(418));e=vr(n.nextSibling);var i=Dn;e&&Mp(t,e)?mx(i,n):(t.flags=t.flags&-4097|2,wt=!1,Dn=t)}}else{if(fu(t))throw Error(se(418));t.flags=t.flags&-4097|2,wt=!1,Dn=t}}}function Ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Fo(t){if(t!==Dn)return!1;if(!wt)return Ep(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lu(t.type,t.memoizedProps)),e&&(e=Ln)){if(fu(t))throw xx(),Error(se(418));for(;e;)mx(t,e),e=vr(e.nextSibling)}if(Ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?vr(t.stateNode.nextSibling):null;return!0}function xx(){for(var t=Ln;t;)t=vr(t.nextSibling)}function Ys(){Ln=Dn=null,wt=!1}function qf(t){ii===null?ii=[t]:ii.push(t)}var n_=Ki.ReactCurrentBatchConfig;function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Bo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function gx(t){function e(f,v){if(t){var T=f.deletions;T===null?(f.deletions=[v],f.flags|=16):T.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=br(f,v),f.index=0,f.sibling=null,f}function s(f,v,T){return f.index=T,t?(T=f.alternate,T!==null?(T=T.index,T<v?(f.flags|=2,v):T):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,v,T,S){return v===null||v.tag!==6?(v=td(T,f.mode,S),v.return=f,v):(v=r(v,T),v.return=f,v)}function c(f,v,T,S){var b=T.type;return b===Es?h(f,v,T.props.children,S,T.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ar&&Tp(b)===v.type)?(S=r(v,T.props),S.ref=ya(f,v,T),S.return=f,S):(S=Tl(T.type,T.key,T.props,null,f.mode,S),S.ref=ya(f,v,T),S.return=f,S)}function d(f,v,T,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=nd(T,f.mode,S),v.return=f,v):(v=r(v,T.children||[]),v.return=f,v)}function h(f,v,T,S,b){return v===null||v.tag!==7?(v=jr(T,f.mode,S,b),v.return=f,v):(v=r(v,T),v.return=f,v)}function p(f,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=td(""+v,f.mode,T),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return T=Tl(v.type,v.key,v.props,null,f.mode,T),T.ref=ya(f,null,v),T.return=f,T;case Ms:return v=nd(v,f.mode,T),v.return=f,v;case ar:var S=v._init;return p(f,S(v._payload),T)}if(Ra(v)||pa(v))return v=jr(v,f.mode,T,null),v.return=f,v;Bo(f,v)}return null}function u(f,v,T,S){var b=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return b!==null?null:l(f,v,""+T,S);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Co:return T.key===b?c(f,v,T,S):null;case Ms:return T.key===b?d(f,v,T,S):null;case ar:return b=T._init,u(f,v,b(T._payload),S)}if(Ra(T)||pa(T))return b!==null?null:h(f,v,T,S,null);Bo(f,T)}return null}function m(f,v,T,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(T)||null,l(v,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:return f=f.get(S.key===null?T:S.key)||null,c(v,f,S,b);case Ms:return f=f.get(S.key===null?T:S.key)||null,d(v,f,S,b);case ar:var w=S._init;return m(f,v,T,w(S._payload),b)}if(Ra(S)||pa(S))return f=f.get(T)||null,h(v,f,S,b,null);Bo(v,S)}return null}function g(f,v,T,S){for(var b=null,w=null,C=v,y=v=0,A=null;C!==null&&y<T.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var I=u(f,C,T[y],S);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(f,C),v=s(I,v,y),w===null?b=I:w.sibling=I,w=I,C=A}if(y===T.length)return n(f,C),wt&&Dr(f,y),b;if(C===null){for(;y<T.length;y++)C=p(f,T[y],S),C!==null&&(v=s(C,v,y),w===null?b=C:w.sibling=C,w=C);return wt&&Dr(f,y),b}for(C=i(f,C);y<T.length;y++)A=m(C,f,y,T[y],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),v=s(A,v,y),w===null?b=A:w.sibling=A,w=A);return t&&C.forEach(function(P){return e(f,P)}),wt&&Dr(f,y),b}function E(f,v,T,S){var b=pa(T);if(typeof b!="function")throw Error(se(150));if(T=b.call(T),T==null)throw Error(se(151));for(var w=b=null,C=v,y=v=0,A=null,I=T.next();C!==null&&!I.done;y++,I=T.next()){C.index>y?(A=C,C=null):A=C.sibling;var P=u(f,C,I.value,S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(f,C),v=s(P,v,y),w===null?b=P:w.sibling=P,w=P,C=A}if(I.done)return n(f,C),wt&&Dr(f,y),b;if(C===null){for(;!I.done;y++,I=T.next())I=p(f,I.value,S),I!==null&&(v=s(I,v,y),w===null?b=I:w.sibling=I,w=I);return wt&&Dr(f,y),b}for(C=i(f,C);!I.done;y++,I=T.next())I=m(C,f,y,I.value,S),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?y:I.key),v=s(I,v,y),w===null?b=I:w.sibling=I,w=I);return t&&C.forEach(function(R){return e(f,R)}),wt&&Dr(f,y),b}function x(f,v,T,S){if(typeof T=="object"&&T!==null&&T.type===Es&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Co:e:{for(var b=T.key,w=v;w!==null;){if(w.key===b){if(b=T.type,b===Es){if(w.tag===7){n(f,w.sibling),v=r(w,T.props.children),v.return=f,f=v;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ar&&Tp(b)===w.type){n(f,w.sibling),v=r(w,T.props),v.ref=ya(f,w,T),v.return=f,f=v;break e}n(f,w);break}else e(f,w);w=w.sibling}T.type===Es?(v=jr(T.props.children,f.mode,S,T.key),v.return=f,f=v):(S=Tl(T.type,T.key,T.props,null,f.mode,S),S.ref=ya(f,v,T),S.return=f,f=S)}return a(f);case Ms:e:{for(w=T.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(f,v.sibling),v=r(v,T.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=nd(T,f.mode,S),v.return=f,f=v}return a(f);case ar:return w=T._init,x(f,v,w(T._payload),S)}if(Ra(T))return g(f,v,T,S);if(pa(T))return E(f,v,T,S);Bo(f,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,T),v.return=f,f=v):(n(f,v),v=td(T,f.mode,S),v.return=f,f=v),a(f)):n(f,v)}return x}var qs=gx(!0),vx=gx(!1),Xl=Ar(null),Yl=null,Is=null,Kf=null;function $f(){Kf=Is=Yl=null}function Zf(t){var e=Xl.current;Et(Xl),t._currentValue=e}function pu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){Yl=t,Kf=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Kf!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Yl===null)throw Error(se(308));Is=t,Yl.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Or=null;function Qf(t){Or===null?Or=[t]:Or.push(t)}function yx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _x(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}function wp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=d=c=null,l=s;do{var u=l.lane,m=l.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,E=l;switch(u=e,m=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){p=g.call(m,p,u);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,u=typeof g=="function"?g.call(m,p,u):g,u==null)break e;p=Pt({},p,u);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[l]:u.push(l))}else m={eventTime:m,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=m,c=p):h=h.next=m,a|=u;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;u=l,l=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=a,t.lanes=a,t.memoizedState=p}}function Ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var bo={},Mi=Ar(bo),ro=Ar(bo),so=Ar(bo);function Fr(t){if(t===bo)throw Error(se(174));return t}function eh(t,e){switch(St(so,e),St(ro,t),St(Mi,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}Et(Mi),St(Mi,e)}function Ks(){Et(Mi),Et(ro),Et(so)}function Sx(t){Fr(so.current);var e=Fr(Mi.current),n=qd(e,t.type);e!==n&&(St(ro,t),St(Mi,n))}function th(t){ro.current===t&&(Et(Mi),Et(ro))}var At=Ar(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function nh(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var _l=Ki.ReactCurrentDispatcher,$c=Ki.ReactCurrentBatchConfig,Yr=0,Nt=null,zt=null,Wt=null,$l=!1,za=!1,ao=0,i_=0;function tn(){throw Error(se(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function rh(t,e,n,i,r,s){if(Yr=s,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?o_:l_,t=n(i,r),za){s=0;do{if(za=!1,ao=0,25<=s)throw Error(se(301));s+=1,Wt=zt=null,e.updateQueue=null,_l.current=c_,t=n(i,r)}while(za)}if(_l.current=Zl,e=zt!==null&&zt.next!==null,Yr=0,Wt=zt=Nt=null,$l=!1,e)throw Error(se(300));return t}function sh(){var t=ao!==0;return ao=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Nt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function qn(){if(zt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Wt===null?Nt.memoizedState:Wt.next;if(e!==null)Wt=e,zt=t;else{if(t===null)throw Error(se(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Wt===null?Nt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function oo(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=qn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,d=s;do{var h=d.lane;if((Yr&h)===h)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,a=i):c=c.next=p,Nt.lanes|=h,qr|=h}d=d.next}while(d!==null&&d!==s);c===null?a=i:c.next=l,di(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Nt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=qn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);di(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bx(){}function Mx(t,e){var n=Nt,i=qn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,ah(wx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,lo(9,Tx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(se(349));Yr&30||Ex(n,e,r)}return r}function Ex(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tx(t,e,n,i){e.value=n,e.getSnapshot=i,Ax(e)&&Cx(t)}function wx(t,e,n){return n(function(){Ax(e)&&Cx(t)})}function Ax(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function Cx(t){var e=Xi(t,1);e!==null&&li(e,t,1,-1)}function Cp(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=a_.bind(null,Nt,t),[e.memoizedState,t]}function lo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Nx(){return qn().memoizedState}function Sl(t,e,n,i){var r=xi();Nt.flags|=t,r.memoizedState=lo(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var a=zt.memoizedState;if(s=a.destroy,i!==null&&ih(i,a.deps)){r.memoizedState=lo(e,n,s,i);return}}Nt.flags|=t,r.memoizedState=lo(1|e,n,s,i)}function Np(t,e){return Sl(8390656,8,t,e)}function ah(t,e){return gc(2048,8,t,e)}function Rx(t,e){return gc(4,2,t,e)}function Px(t,e){return gc(4,4,t,e)}function Ix(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lx(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,Ix.bind(null,e,t),n)}function oh(){}function Dx(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kx(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ux(t,e,n){return Yr&21?(di(n,e)||(n=V0(),Nt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function r_(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=$c.transition;$c.transition={};try{t(!1),e()}finally{mt=n,$c.transition=i}}function Ox(){return qn().memoizedState}function s_(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Fx(t))Bx(e,n);else if(n=yx(t,e,n,i),n!==null){var r=hn();li(n,t,i,r),zx(n,e,i)}}function a_(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fx(t))Bx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,di(l,a)){var c=e.interleaved;c===null?(r.next=r,Qf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=yx(t,e,r,i),n!==null&&(r=hn(),li(n,t,i,r),zx(n,e,i))}}function Fx(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function Bx(t,e){za=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}var Zl={readContext:Yn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},o_={readContext:Yn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Ix.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=s_.bind(null,Nt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Cp,useDebugValue:oh,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Cp(!1),e=t[0];return t=r_.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Nt,r=xi();if(wt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Xt===null)throw Error(se(349));Yr&30||Ex(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(wx.bind(null,i,s,t),[t]),i.flags|=2048,lo(9,Tx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Xt.identifierPrefix;if(wt){var n=Fi,i=Oi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=i_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},l_={readContext:Yn,useCallback:Dx,useContext:Yn,useEffect:ah,useImperativeHandle:Lx,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:kx,useReducer:Zc,useRef:Nx,useState:function(){return Zc(oo)},useDebugValue:oh,useDeferredValue:function(t){var e=qn();return Ux(e,zt.memoizedState,t)},useTransition:function(){var t=Zc(oo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:bx,useSyncExternalStore:Mx,useId:Ox,unstable_isNewReconciler:!1},c_={readContext:Yn,useCallback:Dx,useContext:Yn,useEffect:ah,useImperativeHandle:Lx,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:kx,useReducer:Qc,useRef:Nx,useState:function(){return Qc(oo)},useDebugValue:oh,useDeferredValue:function(t){var e=qn();return zt===null?e.memoizedState=t:Ux(e,zt.memoizedState,t)},useTransition:function(){var t=Qc(oo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:bx,useSyncExternalStore:Mx,useId:Ox,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Sr(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(li(e,t,r,i),yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Sr(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(li(e,t,r,i),yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Sr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(li(e,t,i,n),yl(e,t,i))}};function Rp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!eo(n,i)||!eo(r,s):!0}function Vx(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=En(e)?Wr:cn.current,i=e.contextTypes,s=(i=i!=null)?Xs(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function xu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=En(e)?Wr:cn.current,r.context=Xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function Hx(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,Au=i),gu(t,e)},n}function jx(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gu(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new d_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=E_.bind(null,t,e,n),e.then(t,t))}function Lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var u_=Ki.ReactCurrentOwner,bn=!1;function fn(t,e,n,i){e.child=t===null?vx(e,null,n,i):qs(e,t.child,n,i)}function kp(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=rh(t,e,n,i,s,r),n=sh(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(wt&&n&&Xf(e),e.flags|=1,fn(t,e,i,r),e.child)}function Up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gx(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(a,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(eo(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return vu(t,e,n,i,r)}function Wx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(Ds,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(Ds,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(Ds,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(Ds,Pn),Pn|=i;return fn(t,e,r,n),e.child}function Xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vu(t,e,n,i,r){var s=En(n)?Wr:cn.current;return s=Xs(e,s),zs(e,r),n=rh(t,e,n,i,s,r),i=sh(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(wt&&i&&Xf(e),e.flags|=1,fn(t,e,n,r),e.child)}function Op(t,e,n,i,r){if(En(n)){var s=!0;jl(e)}else s=!1;if(zs(e,r),e.stateNode===null)bl(t,e),Vx(e,n,i),xu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Yn(d):(d=En(n)?Wr:cn.current,d=Xs(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==d)&&Pp(e,a,i,d),or=!1;var u=e.memoizedState;a.state=u,ql(e,i,a,r),c=e.memoizedState,l!==i||u!==c||Mn.current||or?(typeof h=="function"&&(mu(e,n,h,i),c=e.memoizedState),(l=or||Rp(e,n,l,i,u,c,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,_x(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:ti(e.type,l),a.props=d,p=e.pendingProps,u=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Yn(c):(c=En(n)?Wr:cn.current,c=Xs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||u!==c)&&Pp(e,a,i,c),or=!1,u=e.memoizedState,a.state=u,ql(e,i,a,r);var g=e.memoizedState;l!==p||u!==g||Mn.current||or?(typeof m=="function"&&(mu(e,n,m,i),g=e.memoizedState),(d=or||Rp(e,n,d,i,u,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return yu(t,e,n,i,s,r)}function yu(t,e,n,i,r,s){Xx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&bp(e,n,!1),Yi(t,e,s);i=e.stateNode,u_.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,l,s)):fn(t,e,l,s),e.memoizedState=i.state,r&&bp(e,n,!0),e.child}function Yx(t){var e=t.stateNode;e.pendingContext?Sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sp(t,e.context,!1),eh(t,e.containerInfo)}function Fp(t,e,n,i,r){return Ys(),qf(r),e.flags|=256,fn(t,e,n,i),e.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function Su(t){return{baseLanes:t,cachePool:null,transitions:null}}function qx(t,e,n){var i=e.pendingProps,r=At.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(At,r&1),t===null)return hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Sc(a,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Su(n),e.memoizedState=_u,t):lh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return f_(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=br(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=br(l,s):(s=jr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=_u,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lh(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,i){return i!==null&&qf(i),qs(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Jc(Error(se(422))),zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,a),e.child.memoizedState=Su(a),e.memoizedState=_u,s);if(!(e.mode&1))return zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(se(419)),i=Jc(s,i,void 0),zo(t,e,a,i)}if(l=(a&t.childLanes)!==0,bn||l){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),li(i,t,r,-1))}return ph(),i=Jc(Error(se(421))),zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=T_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=vr(r.nextSibling),Dn=e,wt=!0,ii=null,t!==null&&(jn[Gn++]=Oi,jn[Gn++]=Fi,jn[Gn++]=Xr,Oi=t.id,Fi=t.overflow,Xr=e),e=lh(e,i.children),e.flags|=4096,e)}function Bp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pu(t.return,e,n)}function ed(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Kx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bp(t,n,e);else if(t.tag===19)Bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ed(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function h_(t,e,n){switch(e.tag){case 3:Yx(e),Ys();break;case 5:Sx(e);break;case 1:En(e.type)&&jl(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?qx(t,e,n):(St(At,At.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);St(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Kx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,Wx(t,e,n)}return Yi(t,e,n)}var $x,bu,Zx,Qx;$x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};Zx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(Mi.current);var s=null;switch(n){case"input":r=Gd(t,r),i=Gd(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Yd(t,r),i=Yd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}Kd(n,i);var a;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ya.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Mt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Qx=function(t,e,n,i){n!==i&&(e.flags|=4)};function _a(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function p_(t,e,n){var i=e.pendingProps;switch(Yf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return En(e.type)&&Hl(),nn(e),null;case 3:return i=e.stateNode,Ks(),Et(Mn),Et(cn),nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Ru(ii),ii=null))),bu(t,e),nn(e),null;case 5:th(e);var r=Fr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)Zx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return nn(e),null}if(t=Fr(Mi.current),Fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[io]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Ia.length;r++)Mt(Ia[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":qh(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":$h(i,s),Mt("invalid",i)}Kd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Oo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Oo(i.textContent,l,t),r=["children",""+l]):Ya.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":No(i),Kh(i,s,!0);break;case"textarea":No(i),Zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[vi]=e,t[io]=i,$x(t,e,!1,!1),e.stateNode=t;e:{switch(a=$d(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ia.length;r++)Mt(Ia[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":qh(t,i),r=Gd(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":$h(t,i),r=Yd(t,i),Mt("invalid",t);break;default:r=i}Kd(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?N0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&A0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qa(t,c):typeof c=="number"&&qa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Mt("scroll",t):c!=null&&If(t,s,c,a))}switch(n){case"input":No(t),Kh(t,i,!1);break;case"textarea":No(t),Zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)Qx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Fr(so.current),Fr(Mi.current),Fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return nn(e),null;case 13:if(Et(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Ln!==null&&e.mode&1&&!(e.flags&128))xx(),Ys(),e.flags|=98560,s=!1;else if(s=Fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[vi]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ii!==null&&(Ru(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Vt===0&&(Vt=3):ph())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return Ks(),bu(t,e),t===null&&to(e.stateNode.containerInfo),nn(e),null;case 10:return Zf(e.type._context),nn(e),null;case 17:return En(e.type)&&Hl(),nn(e),null;case 19:if(Et(At),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)_a(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Kl(t),a!==null){for(e.flags|=128,_a(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>Zs&&(e.flags|=128,i=!0,_a(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return nn(e),null}else 2*Dt()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,_a(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=At.current,St(At,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function m_(t,e){switch(Yf(e),e.tag){case 1:return En(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Et(Mn),Et(cn),nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(Et(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(At),null;case 4:return Ks(),null;case 10:return Zf(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var Vo=!1,on=!1,x_=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function Mu(t,e,n){try{n()}catch(i){It(t,e,i)}}var zp=!1;function g_(t,e){if(au=Fl,t=ix(),Wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,h=0,p=t,u=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(l=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)u=p,p=m;for(;;){if(p===t)break t;if(u===n&&++d===r&&(l=a),u===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:t,selectionRange:n},Fl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var E=g.memoizedProps,x=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:ti(e.type,E),x);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){It(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=zp,zp=!1,g}function Va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Mu(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jx(t){var e=t.alternate;e!==null&&(t.alternate=null,Jx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[io],delete e[du],delete e[Jy],delete e[e_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eg(t){return t.tag===5||t.tag===3||t.tag===4}function Vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(Tu(t,e,n),t=t.sibling;t!==null;)Tu(t,e,n),t=t.sibling}function wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}var Yt=null,ni=!1;function er(t,e,n){for(n=n.child;n!==null;)tg(t,e,n),n=n.sibling}function tg(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:on||Ls(n,e);case 6:var i=Yt,r=ni;Yt=null,er(t,e,n),Yt=i,ni=r,Yt!==null&&(ni?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ni?(t=Yt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Qa(t)):Yc(Yt,n.stateNode));break;case 4:i=Yt,r=ni,Yt=n.stateNode.containerInfo,ni=!0,er(t,e,n),Yt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Mu(n,e,a),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!on&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){It(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,er(t,e,n),on=i):er(t,e,n);break;default:er(t,e,n)}}function Hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new x_),e.forEach(function(i){var r=w_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Yt=l.stateNode,ni=!1;break e;case 3:Yt=l.stateNode.containerInfo,ni=!0;break e;case 4:Yt=l.stateNode.containerInfo,ni=!0;break e}l=l.return}if(Yt===null)throw Error(se(160));tg(s,a,r),Yt=null,ni=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){It(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ng(e,t),e=e.sibling}function ng(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),hi(t),i&4){try{Va(3,t,t.return),yc(3,t)}catch(E){It(t,t.return,E)}try{Va(5,t,t.return)}catch(E){It(t,t.return,E)}}break;case 1:Zn(e,t),hi(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(Zn(e,t),hi(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{qa(r,"")}catch(E){It(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&E0(r,s),$d(l,a);var d=$d(l,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?N0(r,p):h==="dangerouslySetInnerHTML"?A0(r,p):h==="children"?qa(r,p):If(r,h,p,d)}switch(l){case"input":Wd(r,s);break;case"textarea":T0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Us(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[io]=s}catch(E){It(t,t.return,E)}}break;case 6:if(Zn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){It(t,t.return,E)}}break;case 3:if(Zn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(E){It(t,t.return,E)}break;case 4:Zn(e,t),hi(t);break;case 13:Zn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(uh=Dt())),i&4&&Hp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(d=on)||h,Zn(e,t),on=d):Zn(e,t),hi(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(Ee=t,h=t.child;h!==null;){for(p=Ee=h;Ee!==null;){switch(u=Ee,m=u.child,u.tag){case 0:case 11:case 14:case 15:Va(4,u,u.return);break;case 1:Ls(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(E){It(i,n,E)}}break;case 5:Ls(u,u.return);break;case 22:if(u.memoizedState!==null){Gp(p);continue}}m!==null?(m.return=u,Ee=m):Gp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=C0("display",a))}catch(E){It(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(E){It(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Zn(e,t),hi(t),i&4&&Hp(t);break;case 21:break;default:Zn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eg(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qa(r,""),i.flags&=-33);var s=Vp(t);wu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Vp(t);Tu(t,l,a);break;default:throw Error(se(161))}}catch(c){It(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v_(t,e,n){Ee=t,ig(t)}function ig(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Vo;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||on;l=Vo;var d=on;if(Vo=a,(on=c)&&!d)for(Ee=r;Ee!==null;)a=Ee,c=a.child,a.tag===22&&a.memoizedState!==null?Wp(r):c!==null?(c.return=a,Ee=c):Wp(r);for(;s!==null;)Ee=s,ig(s),s=s.sibling;Ee=r,Vo=l,on=d}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):jp(t)}}function jp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ap(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ap(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Qa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}on||e.flags&512&&Eu(e)}catch(u){It(e,e.return,u)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Gp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Wp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(c){It(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){It(e,r,c)}}var s=e.return;try{Eu(e)}catch(c){It(e,s,c)}break;case 5:var a=e.return;try{Eu(e)}catch(c){It(e,a,c)}}}catch(c){It(e,e.return,c)}if(e===t){Ee=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Ee=l;break}Ee=e.return}}var y_=Math.ceil,Ql=Ki.ReactCurrentDispatcher,ch=Ki.ReactCurrentOwner,Xn=Ki.ReactCurrentBatchConfig,at=0,Xt=null,Bt=null,$t=0,Pn=0,Ds=Ar(0),Vt=0,co=null,qr=0,_c=0,dh=0,Ha=null,_n=null,uh=0,Zs=1/0,ki=null,Jl=!1,Au=null,_r=null,Ho=!1,hr=null,ec=0,ja=0,Cu=null,Ml=-1,El=0;function hn(){return at&6?Dt():Ml!==-1?Ml:Ml=Dt()}function Sr(t){return t.mode&1?at&2&&$t!==0?$t&-$t:n_.transition!==null?(El===0&&(El=V0()),El):(t=mt,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function li(t,e,n,i){if(50<ja)throw ja=0,Cu=null,Error(se(185));yo(t,n,i),(!(at&2)||t!==Xt)&&(t===Xt&&(!(at&2)&&(_c|=n),Vt===4&&dr(t,$t)),Tn(t,i),n===1&&at===0&&!(e.mode&1)&&(Zs=Dt()+500,xc&&Cr()))}function Tn(t,e){var n=t.callbackNode;ny(t,e);var i=Ol(t,t===Xt?$t:0);if(i===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?t_(Xp.bind(null,t)):hx(Xp.bind(null,t)),Zy(function(){!(at&6)&&Cr()}),n=null;else{switch(H0(i)){case 1:n=Of;break;case 4:n=B0;break;case 16:n=Ul;break;case 536870912:n=z0;break;default:n=Ul}n=ug(n,rg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rg(t,e){if(Ml=-1,El=0,at&6)throw Error(se(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=Ol(t,t===Xt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tc(t,i);else{e=i;var r=at;at|=2;var s=ag();(Xt!==t||$t!==e)&&(ki=null,Zs=Dt()+500,Hr(t,e));do try{b_();break}catch(l){sg(t,l)}while(!0);$f(),Ql.current=s,at=r,Bt!==null?e=0:(Xt=null,$t=0,e=Vt)}if(e!==0){if(e===2&&(r=tu(t),r!==0&&(i=r,e=Nu(t,r))),e===1)throw n=co,Hr(t,0),dr(t,i),Tn(t,Dt()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!__(r)&&(e=tc(t,i),e===2&&(s=tu(t),s!==0&&(i=s,e=Nu(t,s))),e===1))throw n=co,Hr(t,0),dr(t,i),Tn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:kr(t,_n,ki);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=uh+500-Dt(),10<e)){if(Ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cu(kr.bind(null,t,_n,ki),e);break}kr(t,_n,ki);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-oi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*y_(i/1960))-i,10<i){t.timeoutHandle=cu(kr.bind(null,t,_n,ki),i);break}kr(t,_n,ki);break;case 5:kr(t,_n,ki);break;default:throw Error(se(329))}}}return Tn(t,Dt()),t.callbackNode===n?rg.bind(null,t):null}function Nu(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=tc(t,e),t!==2&&(e=_n,_n=n,e!==null&&Ru(e)),t}function Ru(t){_n===null?_n=t:_n.push.apply(_n,t)}function __(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~dh,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Xp(t){if(at&6)throw Error(se(327));Vs();var e=Ol(t,0);if(!(e&1))return Tn(t,Dt()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var i=tu(t);i!==0&&(e=i,n=Nu(t,i))}if(n===1)throw n=co,Hr(t,0),dr(t,e),Tn(t,Dt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,_n,ki),Tn(t,Dt()),null}function fh(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(Zs=Dt()+500,xc&&Cr())}}function Kr(t){hr!==null&&hr.tag===0&&!(at&6)&&Vs();var e=at;at|=1;var n=Xn.transition,i=mt;try{if(Xn.transition=null,mt=1,t)return t()}finally{mt=i,Xn.transition=n,at=e,!(at&6)&&Cr()}}function hh(){Pn=Ds.current,Et(Ds)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$y(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(Yf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:Ks(),Et(Mn),Et(cn),nh();break;case 5:th(i);break;case 4:Ks();break;case 13:Et(At);break;case 19:Et(At);break;case 10:Zf(i.type._context);break;case 22:case 23:hh()}n=n.return}if(Xt=t,Bt=t=br(t.current,null),$t=Pn=e,Vt=0,co=null,dh=_c=qr=0,_n=Ha=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Or=null}return t}function sg(t,e){do{var n=Bt;try{if($f(),_l.current=Zl,$l){for(var i=Nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Yr=0,Wt=zt=Nt=null,za=!1,ao=0,ch.current=null,n===null||n.return===null){Vt=1,co=e,Bt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=$t,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Lp(a);if(m!==null){m.flags&=-257,Dp(m,a,l,s,e),m.mode&1&&Ip(s,d,e),e=m,c=d;var g=e.updateQueue;if(g===null){var E=new Set;E.add(c),e.updateQueue=E}else g.add(c);break e}else{if(!(e&1)){Ip(s,d,e),ph();break e}c=Error(se(426))}}else if(wt&&l.mode&1){var x=Lp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Dp(x,a,l,s,e),qf($s(c,l));break e}}s=c=$s(c,l),Vt!==4&&(Vt=2),Ha===null?Ha=[s]:Ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Hx(s,c,e);wp(s,f);break e;case 1:l=c;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_r===null||!_r.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=jx(s,l,e);wp(s,S);break e}}s=s.return}while(s!==null)}lg(n)}catch(b){e=b,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function ag(){var t=Ql.current;return Ql.current=Zl,t===null?Zl:t}function ph(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!(qr&268435455)&&!(_c&268435455)||dr(Xt,$t)}function tc(t,e){var n=at;at|=2;var i=ag();(Xt!==t||$t!==e)&&(ki=null,Hr(t,e));do try{S_();break}catch(r){sg(t,r)}while(!0);if($f(),at=n,Ql.current=i,Bt!==null)throw Error(se(261));return Xt=null,$t=0,Vt}function S_(){for(;Bt!==null;)og(Bt)}function b_(){for(;Bt!==null&&!Yv();)og(Bt)}function og(t){var e=dg(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?lg(t):Bt=e,ch.current=null}function lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=m_(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Bt=null;return}}else if(n=p_(n,e,Pn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Vt===0&&(Vt=5)}function kr(t,e,n){var i=mt,r=Xn.transition;try{Xn.transition=null,mt=1,M_(t,e,n,i)}finally{Xn.transition=r,mt=i}return null}function M_(t,e,n,i){do Vs();while(hr!==null);if(at&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===Xt&&(Bt=Xt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,ug(Ul,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=mt;mt=1;var l=at;at|=4,ch.current=null,g_(t,n),ng(n,t),jy(ou),Fl=!!au,ou=au=null,t.current=n,v_(n),qv(),at=l,mt=a,Xn.transition=s}else t.current=n;if(Ho&&(Ho=!1,hr=t,ec=r),s=t.pendingLanes,s===0&&(_r=null),Zv(n.stateNode),Tn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=Au,Au=null,t;return ec&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===Cu?ja++:(ja=0,Cu=t):ja=0,Cr(),null}function Vs(){if(hr!==null){var t=H0(ec),e=Xn.transition,n=mt;try{if(Xn.transition=null,mt=16>t?16:t,hr===null)var i=!1;else{if(t=hr,hr=null,ec=0,at&6)throw Error(se(331));var r=at;for(at|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Ee=d;Ee!==null;){var h=Ee;switch(h.tag){case 0:case 11:case 15:Va(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ee=p;else for(;Ee!==null;){h=Ee;var u=h.sibling,m=h.return;if(Jx(h),h===d){Ee=null;break}if(u!==null){u.return=m,Ee=u;break}Ee=m}}}var g=s.alternate;if(g!==null){var E=g.child;if(E!==null){g.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){a=Ee;var T=a.child;if(a.subtreeFlags&2064&&T!==null)T.return=a,Ee=T;else e:for(a=v;Ee!==null;){if(l=Ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yc(9,l)}}catch(b){It(l,l.return,b)}if(l===a){Ee=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Ee=S;break e}Ee=l.return}}if(at=r,Cr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{mt=n,Xn.transition=e}}return!1}function Yp(t,e,n){e=$s(n,e),e=Hx(t,e,1),t=yr(t,e,1),e=hn(),t!==null&&(yo(t,1,e),Tn(t,e))}function It(t,e,n){if(t.tag===3)Yp(t,t,n);else for(;e!==null;){if(e.tag===3){Yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=$s(n,t),t=jx(e,t,1),e=yr(e,t,1),t=hn(),e!==null&&(yo(e,1,t),Tn(e,t));break}}e=e.return}}function E_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&($t&n)===n&&(Vt===4||Vt===3&&($t&130023424)===$t&&500>Dt()-uh?Hr(t,0):dh|=n),Tn(t,e)}function cg(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=hn();t=Xi(t,e),t!==null&&(yo(t,e,n),Tn(t,n))}function T_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cg(t,n)}function w_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),cg(t,n)}var dg;dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,h_(t,e,n);bn=!!(t.flags&131072)}else bn=!1,wt&&e.flags&1048576&&px(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bl(t,e),t=e.pendingProps;var r=Xs(e,cn.current);zs(e,n),r=rh(null,e,i,t,r,n);var s=sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jf(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,xu(e,i,t,n),e=yu(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&Xf(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=C_(i),t=ti(i,t),r){case 0:e=vu(null,e,i,t,n);break e;case 1:e=Op(null,e,i,t,n);break e;case 11:e=kp(null,e,i,t,n);break e;case 14:e=Up(null,e,i,ti(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),vu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Op(t,e,i,r,n);case 3:e:{if(Yx(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_x(t,e),ql(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$s(Error(se(423)),e),e=Fp(t,e,i,n,r);break e}else if(i!==r){r=$s(Error(se(424)),e),e=Fp(t,e,i,n,r);break e}else for(Ln=vr(e.stateNode.containerInfo.firstChild),Dn=e,wt=!0,ii=null,n=vx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Yi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return Sx(e),t===null&&hu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,lu(i,r)?a=null:s!==null&&lu(i,s)&&(e.flags|=32),Xx(t,e),fn(t,e,a,n),e.child;case 6:return t===null&&hu(e),null;case 13:return qx(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),kp(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,St(Xl,i._currentValue),i._currentValue=a,s!==null)if(di(s.value,a)){if(s.children===r.children&&!Mn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Vi(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?c.next=c:(c.next=h.next,h.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),pu(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),pu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=Yn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Up(t,e,i,r,n);case 15:return Gx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),bl(t,e),e.tag=1,En(i)?(t=!0,jl(e)):t=!1,zs(e,n),Vx(e,i,r),xu(e,i,r,n),yu(null,e,i,!0,t,n);case 19:return Kx(t,e,n);case 22:return Wx(t,e,n)}throw Error(se(156,e.tag))};function ug(t,e){return F0(t,e)}function A_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new A_(t,e,n,i)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C_(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===kf)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")mh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Es:return jr(n.children,r,s,e);case Lf:a=8,r|=8;break;case zd:return t=Wn(12,n,e,r|2),t.elementType=zd,t.lanes=s,t;case Vd:return t=Wn(13,n,e,r),t.elementType=Vd,t.lanes=s,t;case Hd:return t=Wn(19,n,e,r),t.elementType=Hd,t.lanes=s,t;case S0:return Sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y0:a=10;break e;case _0:a=9;break e;case Df:a=11;break e;case kf:a=14;break e;case ar:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Sc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=S0,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function N_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,i,r,s,a,l,c){return t=new N_(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),t}function R_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fg(t){if(!t)return Er;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(En(n))return fx(t,n,e)}return e}function hg(t,e,n,i,r,s,a,l,c){return t=xh(n,i,!0,t,r,s,a,l,c),t.context=fg(null),n=t.current,i=hn(),r=Sr(n),s=Vi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,yo(t,r,i),Tn(t,i),t}function bc(t,e,n,i){var r=e.current,s=hn(),a=Sr(r);return n=fg(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,a),t!==null&&(li(t,r,a,s),yl(t,r,a)),a}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gh(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function P_(){return null}var pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function vh(t){this._internalRoot=t}Mc.prototype.render=vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));bc(t,e,null,null)};Mc.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){bc(null,t,null,null)}),e[Wi]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&Y0(t)}};function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function I_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=nc(a);s.call(d)}}var a=hg(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=a,t[Wi]=a.current,to(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=nc(c);l.call(d)}}var c=xh(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=c,t[Wi]=c.current,to(t.nodeType===8?t.parentNode:t),Kr(function(){bc(e,c,n,i)}),c}function Tc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=nc(a);l.call(c)}}bc(e,a,t,r)}else a=I_(n,e,t,r,i);return nc(a)}j0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(Ff(e,n|1),Tn(e,Dt()),!(at&6)&&(Zs=Dt()+500,Cr()))}break;case 13:Kr(function(){var i=Xi(t,1);if(i!==null){var r=hn();li(i,t,1,r)}}),gh(t,1)}};Bf=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=hn();li(e,t,134217728,n)}gh(t,134217728)}};G0=function(t){if(t.tag===13){var e=Sr(t),n=Xi(t,e);if(n!==null){var i=hn();li(n,t,e,i)}gh(t,e)}};W0=function(){return mt};X0=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Qd=function(t,e,n){switch(e){case"input":if(Wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mc(i);if(!r)throw Error(se(90));M0(i),Wd(i,r)}}}break;case"textarea":T0(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};I0=fh;L0=Kr;var L_={usingClientEntryPoint:!1,Events:[So,Cs,mc,R0,P0,fh]},Sa={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U0(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||P_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{uc=jo.inject(D_),bi=jo}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(e))throw Error(se(200));return R_(t,e,null,n)};Un.createRoot=function(t,e){if(!yh(t))throw Error(se(299));var n=!1,i="",r=pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,to(t.nodeType===8?t.parentNode:t),new vh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=U0(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return Kr(t)};Un.hydrate=function(t,e,n){if(!Ec(e))throw Error(se(200));return Tc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!yh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=pg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hg(e,null,t,1,n??null,r,!1,s,a),t[Wi]=e.current,to(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mc(e)};Un.render=function(t,e,n){if(!Ec(e))throw Error(se(200));return Tc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(se(40));return t._reactRootContainer?(Kr(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Un.unstable_batchedUpdates=fh;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Tc(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function mg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mg)}catch(t){console.error(t)}}mg(),m0.exports=Un;var k_=m0.exports,$p=k_;Fd.createRoot=$p.createRoot,Fd.hydrateRoot=$p.hydrateRoot;const U_=[{id:"ev-1",title:"Evidence 01: East Hallway Photograph",round:1,type:"photo",timestamp:"11:47 PM (Camera Metadata)",content:"Long exposure capture of the East Corridor outside Study Room 17-B. A tall grandfather clock stands against the mahogany wainscoting. A shadow stretches across the Persian carpet near the study entrance.",hiddenDetails:"Exif metadata reveals camera hardware internal clock was drifting by +0.00s, but optical glare suggests the pendulum in the background was arrested.",tags:["Hallway","Visual","Round 1"]},{id:"ev-2",title:"Evidence 02: Grandfather Clock Close-up",round:1,type:"photo",timestamp:"11:47:00 (Fixed Face)",content:"Macro photograph of the antique German brass grandfather clock in the East Hallway. Roman numerals. The hour hand points between XI and XII, minute hand precisely at 47 minutes.",hiddenDetails:"The escapement wheel has a thin sliver of graphite jammed between the teeth. The clock was intentionally halted at 11:47 PM hours before the incident.",tags:["Clock","Critical","Round 1"]},{id:"ev-3",title:"Evidence 03: Victim's Leather Field Notebook",round:1,type:"document",timestamp:"Recovered from Desk",content:`PAGE 47 - HANDWRITTEN IN BLACK INK:
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
"THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."`,hiddenDetails:"The Study clock was delayed by 16 minutes to create an artificial window of murder during the blackout, masking Devraj Negi’s silent entrance through the caretaker passage.",tags:["Master Log","Cipher","Round 6"]}];class O_{constructor(){Rc(this,"ctx",null);Rc(this,"isMuted",!1)}getContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setMuted(e){this.isMuted=e,e&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}getMuted(){return this.isMuted}playTick(e=!1){if(!this.isMuted)try{const n=this.getContext(),i=n.currentTime,r=n.createOscillator(),s=n.createGain(),a=n.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(e?450:1200,i),a.Q.setValueAtTime(12,i),r.type="triangle",r.frequency.setValueAtTime(e?180:380,i),r.frequency.exponentialRampToValueAtTime(40,i+.04),s.gain.setValueAtTime(.35,i),s.gain.exponentialRampToValueAtTime(.001,i+.05),r.connect(a),a.connect(s),s.connect(n.destination),r.start(i),r.stop(i+.05)}catch{}}playFootstep(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain(),s=e.createBiquadFilter(),a=.85+Math.random()*.3;i.type="triangle",i.frequency.setValueAtTime(95*a,n),i.frequency.exponentialRampToValueAtTime(35*a,n+.12),s.type="lowpass",s.frequency.setValueAtTime(320,n),r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.14),i.connect(s),s.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.15),Math.random()>.4&&this.playGlitchStatic(.04)}catch{}}playBloodSplatter(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createOscillator(),s=e.createGain(),a=e.createGain(),l=e.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(350,n),i.frequency.exponentialRampToValueAtTime(60,n+.28),r.type="sine",r.frequency.setValueAtTime(45,n),s.gain.setValueAtTime(120,n),l.type="bandpass",l.frequency.setValueAtTime(600,n),l.Q.setValueAtTime(4,n),a.gain.setValueAtTime(.4,n),a.gain.exponentialRampToValueAtTime(.001,n+.32),r.connect(s),s.connect(i.frequency),i.connect(l),l.connect(a),a.connect(e.destination),r.start(n),i.start(n),r.stop(n+.35),i.stop(n+.35),setTimeout(()=>{try{const c=e.createOscillator(),d=e.createGain();c.type="sine",c.frequency.setValueAtTime(900,e.currentTime),c.frequency.exponentialRampToValueAtTime(1600,e.currentTime+.08),d.gain.setValueAtTime(.2,e.currentTime),d.gain.exponentialRampToValueAtTime(.001,e.currentTime+.1),c.connect(d),d.connect(e.destination),c.start(),c.stop(e.currentTime+.1)}catch{}},70)}catch{}}playTerrifyingScream(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=1.6,r=[750,1200,2600,3400],s=e.createGain();s.gain.setValueAtTime(.01,n),s.gain.linearRampToValueAtTime(.7,n+.08),s.gain.exponentialRampToValueAtTime(.001,n+i);const a=e.createOscillator(),l=e.createGain();a.frequency.setValueAtTime(8.5,n),l.gain.setValueAtTime(45,n),a.connect(l),r.forEach((m,g)=>{const E=e.createOscillator(),x=e.createGain(),f=e.createBiquadFilter();E.type=g===0?"sawtooth":"triangle",E.frequency.setValueAtTime(m,n),E.frequency.linearRampToValueAtTime(m*1.35,n+.25),E.frequency.exponentialRampToValueAtTime(m*.7,n+i),l.connect(E.frequency),f.type="bandpass",f.frequency.setValueAtTime(m,n),f.Q.setValueAtTime(5,n),x.gain.setValueAtTime(.3/(g+1),n),E.connect(f),f.connect(x),x.connect(s),E.start(n),E.stop(n+i)});const c=e.sampleRate*i,d=e.createBuffer(1,c,e.sampleRate),h=d.getChannelData(0);for(let m=0;m<c;m++)h[m]=Math.random()*2-1;const p=e.createBufferSource();p.buffer=d;const u=e.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(2800,n),u.Q.setValueAtTime(3,n),p.connect(u),u.connect(s),p.start(n),p.stop(n+i),a.start(n),a.stop(n+i),s.connect(e.destination),setTimeout(()=>this.playBloodSplatter(),120)}catch{}}playViolinShriek(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[1975.5,2093,2793.8,3136].forEach(r=>{const s=e.createOscillator(),a=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(r,n),s.frequency.linearRampToValueAtTime(r*1.04,n+.35),a.gain.setValueAtTime(.01,n),a.gain.linearRampToValueAtTime(.2,n+.04),a.gain.exponentialRampToValueAtTime(.001,n+.7),s.connect(a),a.connect(e.destination),s.start(n),s.stop(n+.75)})}catch{}}playBinauralWhisper(e,n=.8){if(!(this.isMuted||!("speechSynthesis"in window)))try{window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e);i.pitch=.2,i.rate=.7,i.volume=.85;const s=window.speechSynthesis.getVoices().find(a=>a.lang.startsWith("en")&&(a.name.includes("Whisper")||a.name.includes("Daniel")||a.name.includes("Male")));s&&(i.voice=s),window.speechSynthesis.speak(i),this.playGlitchStatic(.12)}catch{}}playHeartMonitor(e=!1){if(!this.isMuted)try{const n=this.getContext(),i=n.currentTime;if(e){const r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.setValueAtTime(980,i),s.gain.setValueAtTime(.3,i),s.gain.linearRampToValueAtTime(.3,i+1.8),s.gain.exponentialRampToValueAtTime(.001,i+2.2),r.connect(s),s.connect(n.destination),r.start(i),r.stop(i+2.3)}else{const r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.setValueAtTime(980,i),s.gain.setValueAtTime(.25,i),s.gain.exponentialRampToValueAtTime(.001,i+.08),r.connect(s),s.connect(n.destination),r.start(i),r.stop(i+.09)}}catch{}}playThunderClap(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(220,n),i.frequency.exponentialRampToValueAtTime(40,n+.15),r.gain.setValueAtTime(.7,n),r.gain.exponentialRampToValueAtTime(.01,n+.2),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.22),this.playThunder()}catch{}}playJumpScare(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(25,n+.8),r.gain.setValueAtTime(.8,n),r.gain.exponentialRampToValueAtTime(.001,n+.85),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.9),[880,932.3,1244.5,1318.5,1760].forEach((a,l)=>{const c=e.createOscillator(),d=e.createGain();c.type="sawtooth",c.frequency.setValueAtTime(a,n),c.frequency.linearRampToValueAtTime(a*1.15,n+.6),d.gain.setValueAtTime(.15/(l+1),n),d.gain.exponentialRampToValueAtTime(.001,n+.7),c.connect(d),d.connect(e.destination),c.start(n),c.stop(n+.75)}),this.playGlitchStatic(.5)}catch{}}playThunder(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=2.5,r=e.sampleRate*i,s=e.createBuffer(1,r,e.sampleRate),a=s.getChannelData(0);for(let h=0;h<r;h++)a[h]=Math.random()*2-1;const l=e.createBufferSource();l.buffer=s;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(110,n),c.frequency.exponentialRampToValueAtTime(45,n+i);const d=e.createGain();d.gain.setValueAtTime(.01,n),d.gain.linearRampToValueAtTime(.35,n+.4),d.gain.exponentialRampToValueAtTime(.001,n+i),l.connect(c),c.connect(d),d.connect(e.destination),l.start(n)}catch{}}playDoorRattle(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[0,.08,.17].forEach(i=>{const r=e.createOscillator(),s=e.createGain();r.type="triangle",r.frequency.setValueAtTime(80,n+i),r.frequency.exponentialRampToValueAtTime(30,n+i+.06),s.gain.setValueAtTime(.3,n+i),s.gain.exponentialRampToValueAtTime(.001,n+i+.07),r.connect(s),s.connect(e.destination),r.start(n+i),r.stop(n+i+.08)})}catch{}}playHeartbeat(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[0,.18].forEach(i=>{const r=e.createOscillator(),s=e.createGain();r.type="sine",r.frequency.setValueAtTime(75,n+i),r.frequency.exponentialRampToValueAtTime(30,n+i+.12),s.gain.setValueAtTime(.5,n+i),s.gain.exponentialRampToValueAtTime(.001,n+i+.14),r.connect(s),s.connect(e.destination),r.start(n+i),r.stop(n+i+.15)})}catch{}}playGlitchStatic(e=.2){if(!this.isMuted)try{const n=this.getContext(),i=n.sampleRate*e,r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0);for(let d=0;d<i;d++)s[d]=Math.random()*2-1;const a=n.createBufferSource();a.buffer=r;const l=n.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(2400,n.currentTime),l.Q.setValueAtTime(2.5,n.currentTime);const c=n.createGain();c.gain.setValueAtTime(.25,n.currentTime),c.gain.exponentialRampToValueAtTime(.01,n.currentTime+e),a.connect(l),l.connect(c),c.connect(n.destination),a.start()}catch{}}playBlackout(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(20,n+.6),r.gain.setValueAtTime(.4,n),r.gain.exponentialRampToValueAtTime(.001,n+.65),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.7),this.playGlitchStatic(.4)}catch{}}playHorrorStinger(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[110,116.54,155.56,220].forEach(r=>{const s=e.createOscillator(),a=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(r,n),a.gain.setValueAtTime(.12,n),a.gain.exponentialRampToValueAtTime(.001,n+1.8),s.connect(a),a.connect(e.destination),s.start(n),s.stop(n+1.9)})}catch{}}playHitmarker(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(2400,n),i.frequency.exponentialRampToValueAtTime(1400,n+.035),r.gain.setValueAtTime(.4,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.045)}catch{}}playRadioChirp(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;[0,.04].forEach((i,r)=>{const s=e.createOscillator(),a=e.createGain();s.type="sine",s.frequency.setValueAtTime(r===0?1750:2100,n+i),a.gain.setValueAtTime(.18,n+i),a.gain.exponentialRampToValueAtTime(.001,n+i+.03),s.connect(a),a.connect(e.destination),s.start(n+i),s.stop(n+i+.035)}),this.playGlitchStatic(.06)}catch{}}playObjectiveComplete(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(32,n+.6),r.gain.setValueAtTime(.65,n),r.gain.exponentialRampToValueAtTime(.001,n+.7),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.75),[587.33,739.99,880].forEach((s,a)=>{const l=e.createOscillator(),c=e.createGain();l.type="triangle",l.frequency.setValueAtTime(s,n+.08),c.gain.setValueAtTime(.25/(a+1),n+.08),c.gain.exponentialRampToValueAtTime(.001,n+.9),l.connect(c),c.connect(e.destination),l.start(n+.08),l.stop(n+.95)})}catch{}}playNightVisionToggle(){if(!this.isMuted)try{const e=this.getContext(),n=e.currentTime;this.playTick(!0);const i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(3200,n+.02),i.frequency.exponentialRampToValueAtTime(8500,n+.28),r.gain.setValueAtTime(.12,n+.02),r.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r),r.connect(e.destination),i.start(n+.02),i.stop(n+.36)}catch{}}speakDistorted(e,n){let i=!1;const r=()=>{i||(i=!0,n&&n())};if(this.isMuted||!("speechSynthesis"in window)){setTimeout(r,1500);return}try{window.speechSynthesis.cancel();const s=new SpeechSynthesisUtterance(e);s.pitch=.45,s.rate=.75,s.volume=.9;const l=window.speechSynthesis.getVoices().find(p=>p.lang.startsWith("en")&&(p.name.includes("Male")||p.name.includes("Natural")));l&&(s.voice=l);const c=e.split(/\s+/).length,d=Math.max(3e3,c/1.5*1e3+1500),h=setTimeout(r,d);s.onend=()=>{clearTimeout(h),r()},s.onerror=()=>{clearTimeout(h),r()},window.speechSynthesis.speak(s),this.playGlitchStatic(.15)}catch{setTimeout(r,1500)}}}const $=new O_;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),We=(t,e)=>{const n=Se.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...d},h)=>Se.createElement("svg",{ref:h,...F_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${B_(t)}`,l].join(" "),...d},[...e.map(([p,u])=>Se.createElement(p,u)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=We("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=We("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=We("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=We("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=We("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=We("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=We("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=We("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=We("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=We("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=We("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=We("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=We("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=We("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=We("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=We("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=We("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=We("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=We("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=We("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=We("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=We("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=We("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=We("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=We("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=We("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=We("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=We("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=We("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=We("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=We("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=We("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=We("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=We("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=We("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=We("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=We("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=We("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=We("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=We("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=We("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=We("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),r1=({onComplete:t,audioMuted:e,onToggleMute:n})=>{const[i,r]=Se.useState(0),[s,a]=Se.useState(""),[l,c]=Se.useState(!1),d=()=>{c(!0),$.playTick(!0),r(1)};return Se.useEffect(()=>{if(!l)return;let h;if(i===1)$.playTick(!0),h=setTimeout(()=>{r(2)},3500);else if(i===2)$.playTick(!0),h=setTimeout(()=>{r(3)},3500);else if(i===3)$.speakDistorted("If you're hearing this... I'm already dead.",()=>{h=setTimeout(()=>{r(4)},1500)});else if(i===4)$.speakDistorted("Don't trust the clocks.",()=>{h=setTimeout(()=>{r(5)},1200)});else if(i===5){$.playGlitchStatic(.8);const p=["11:47 PM","12:03 AM","12:13 AM","12:17 AM"];let u=0;const m=setInterval(()=>{u<p.length?(a(p[u]),$.playTick(!1),u++):(clearInterval(m),r(6))},650);return()=>clearInterval(m)}else i===6&&($.playHorrorStinger(),h=setTimeout(()=>{r(7)},3e3));return()=>clearTimeout(h)},[i,l]),o.jsxs("div",{className:"relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden crt-overlay crt-vignette",children:[o.jsxs("div",{className:"absolute top-6 right-6 flex items-center gap-3 z-50",children:[o.jsx("button",{onClick:n,className:"p-2 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-gray-400 hover:text-red-400 transition",title:e?"Unmute Sound":"Mute Sound",children:e?o.jsx(vg,{className:"w-5 h-5"}):o.jsx(Bi,{className:"w-5 h-5"})}),o.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-xs text-gray-400 hover:text-red-400 transition font-mono",children:[o.jsx(n1,{className:"w-4 h-4"}),"SKIP INTRO"]})]}),l?o.jsxs("div",{className:"relative z-30 w-full max-w-3xl flex flex-col items-center justify-center min-h-[60vh] text-center font-mono select-none",children:[(i===1||i===2)&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("span",{className:"text-6xl text-red-700 animate-ping inline-block",children:"·"}),o.jsx("p",{className:"text-xs text-gray-700 tracking-widest uppercase",children:"Tick."})]}),i===3&&o.jsx("div",{className:"space-y-4 animate-fade-in",children:o.jsx("p",{className:"text-2xl md:text-3xl text-gray-300 italic tracking-wider font-serif",children:`"If you're hearing this... I'm already dead."`})}),i===4&&o.jsx("div",{className:"space-y-4 animate-fade-in",children:o.jsx("p",{className:"text-2xl md:text-3xl text-red-500 font-bold tracking-widest uppercase",children:`"Don't trust the clocks."`})}),i===5&&o.jsx("div",{className:"space-y-4",children:o.jsx("p",{className:"text-6xl md:text-8xl font-black text-red-600 tracking-tighter filter drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]",children:s})}),i===6&&o.jsxs("div",{className:"space-y-6",children:[o.jsx("h2",{className:"text-3xl md:text-5xl font-black text-red-500 tracking-tight glitch-text","data-text":"ONE OF THESE TIMES NEVER HAPPENED.",children:"ONE OF THESE TIMES NEVER HAPPENED."}),o.jsx("p",{className:"text-sm text-gray-400 tracking-widest uppercase",children:"Which time is fake?"})]}),i===7&&o.jsxs("div",{className:"w-full max-w-xl p-6 border-2 border-red-800 bg-[#0a0709]/95 rounded-lg shadow-[0_0_50px_rgba(220,38,38,0.4)] text-left space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-red-950 pb-2",children:[o.jsxs("span",{className:"text-xs text-red-500 font-bold tracking-widest uppercase flex items-center gap-1.5",children:[o.jsx(Js,{className:"w-4 h-4 text-red-500 animate-pulse"}),"OPERATION: BLACKWOOD PROTOCOL"]}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300 font-mono font-bold",children:"CASE FILE 17-B"})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[o.jsxs("div",{className:"p-3 bg-black/70 rounded border border-gray-800",children:[o.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"PRIMARY TARGET"}),o.jsx("span",{className:"text-white font-bold",children:"PROF. VIKRAM SEN"}),o.jsx("span",{className:"text-red-500 font-black block text-[10px] mt-0.5",children:"STATUS: DECEASED"})]}),o.jsxs("div",{className:"p-3 bg-black/70 rounded border border-gray-800",children:[o.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"LOCATION"}),o.jsx("span",{className:"text-white font-bold",children:"STUDY ROOM 17-B"}),o.jsx("span",{className:"text-amber-400 font-bold block text-[10px] mt-0.5",children:"BREACH: DEADBOLT SEALED"})]})]}),o.jsxs("div",{className:"p-3 bg-red-950/30 border-l-4 border-red-600 rounded text-xs space-y-1",children:[o.jsx("p",{className:"text-red-400 font-black uppercase tracking-wider",children:"TACTICAL WARNING:"}),o.jsx("p",{className:"text-gray-200",children:"The house isn't hiding evidence. The house is actively fabricating it."}),o.jsx("p",{className:"text-amber-300 font-bold",children:"Evidence timestamps were engineered BEFORE the murder."})]}),o.jsx("button",{onClick:()=>{$.playRadioChirp(),$.playHitmarker(),t()},className:"cursor-pointer w-full py-4 bg-red-700 hover:bg-red-600 text-white font-mono text-sm tracking-widest font-black rounded transition shadow-[0_0_25px_rgba(220,38,38,0.6)] flex items-center justify-center gap-2 uppercase",children:o.jsx("span",{children:"⚡ DEPLOY INVESTIGATION SQUAD ▶"})})]})]}):o.jsxs("div",{className:"relative z-30 text-center max-w-lg space-y-6 animate-pulse-slow",children:[o.jsx("div",{className:"inline-block p-3 border border-red-950/80 rounded-full bg-red-950/20 text-red-500 mb-2",children:o.jsx(Js,{className:"w-10 h-10 animate-pulse"})}),o.jsx("h1",{className:"text-3xl font-mono tracking-widest text-red-600 font-bold",children:"PROMPT WAR 2.0"}),o.jsx("p",{className:"text-sm text-gray-400 font-mono tracking-wide",children:"THE HOUSE THAT REMEMBERS"}),o.jsx("p",{className:"text-xs text-gray-500 font-mono italic",children:"Click the button below to start the audio & investigative sequence."}),o.jsx("div",{children:o.jsx("button",{onClick:d,className:"cursor-pointer relative z-30 px-8 py-3.5 bg-red-700 hover:bg-red-600 border border-red-500 text-white font-mono text-sm tracking-wider font-bold rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] hover:shadow-[0_0_35px_rgba(229,9,20,0.8)]",children:"INITIALIZE INVESTIGATION ▶"})})]}),o.jsx("div",{className:"absolute bottom-4 text-[10px] text-gray-700 font-mono tracking-widest uppercase",children:"Blackwood Archive Security Mainframe • Node 17-B"})]})},s1=["0 — Arrival","1 — The First Lie","2 — Five Suspects","3 — Impossible Timeline","4 — Dead Man's Message","5 — False Murderer","Final — The House Remembers"],a1=({currentRound:t,timeRemainingSeconds:e,isTimerRunning:n,onToggleTimer:i,audioMuted:r,onToggleMute:s,onOpenHostModal:a,onSelectRound:l})=>{const c=p=>{const u=Math.floor(p/60),m=p%60;return`${u.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`},d=e<300,h=e<600;return o.jsxs("header",{className:"w-full bg-[#0a0a0f] border-b border-red-950/80 px-4 py-3 select-none",children:[o.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-8 h-8 rounded bg-red-950/60 border border-red-800 flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(229,9,20,0.3)]",children:o.jsx(Js,{className:"w-4 h-4 animate-pulse"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-mono font-bold tracking-widest text-red-500",children:"PROMPT WAR 2.0"}),o.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-950/40 text-red-300 border border-red-900/60",children:"CASE 17-B"})]}),o.jsx("p",{className:"text-[11px] text-gray-400 font-mono",children:"The House That Remembers"})]})]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("div",{className:`flex items-center gap-2 px-4 py-1.5 rounded border font-mono tracking-wider transition ${d?"bg-red-950/70 border-red-500 text-red-400 animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]":h?"bg-amber-950/40 border-amber-600 text-amber-300":"bg-black/70 border-gray-800 text-gray-200"}`,children:[o.jsx($r,{className:"w-4 h-4 opacity-75"}),o.jsx("span",{className:"text-xl font-bold font-mono tracking-widest",children:c(e)})]}),o.jsx("button",{onClick:i,className:"p-2 rounded border border-gray-800 bg-black/60 hover:border-gray-600 text-gray-300 hover:text-white transition",title:n?"Pause Timer":"Start Timer",children:n?o.jsx($_,{className:"w-4 h-4"}):o.jsx(Hs,{className:"w-4 h-4"})})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 px-3 py-1.5 rounded border border-amber-500 bg-amber-950/40 hover:bg-amber-950/70 text-amber-300 text-xs font-mono font-bold transition shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95 cursor-pointer",title:"Judge / Quick Demo Controls & Speedrun Auto-Solve",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),o.jsx("span",{children:"⚡ JUDGE / DEMO"})]}),o.jsx("button",{onClick:s,className:"p-2 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-gray-400 hover:text-red-400 transition cursor-pointer",title:r?"Unmute Audio":"Mute Audio",children:r?o.jsx(vg,{className:"w-4 h-4"}):o.jsx(Bi,{className:"w-4 h-4"})}),o.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-red-900/60 bg-red-950/30 hover:bg-red-950/60 text-red-300 text-xs font-mono transition cursor-pointer",title:"Open Facilitator / Game Master HUD (Ctrl+Shift+H)",children:[o.jsx(gg,{className:"w-3.5 h-3.5"}),o.jsx("span",{className:"hidden sm:inline",children:"HOST HUD"})]})]})]}),o.jsx("div",{className:"max-w-7xl mx-auto mt-2.5 pt-2 border-t border-gray-900/90 flex items-center justify-between overflow-x-auto gap-1 text-[11px] font-mono no-scrollbar",children:s1.map((p,u)=>{const m=t===u,g=t>u;return o.jsxs("button",{onClick:()=>l(u),className:`px-2.5 py-1 rounded whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${m?"bg-red-950/80 border border-red-500 text-white font-bold shadow-[0_0_12px_rgba(239,68,68,0.4)]":g?"bg-black/60 border border-emerald-900/70 text-emerald-400 hover:border-emerald-600":"bg-black/30 border border-gray-900 text-gray-600 hover:text-gray-400"}`,children:[o.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${m?"bg-red-400 animate-ping":g?"bg-emerald-500":"bg-gray-700"}`}),o.jsxs("span",{className:"text-[10px] opacity-75",children:["[",u,"]"]}),o.jsx("span",{children:p})]},u)})})]})},Qp=({evidenceList:t,currentRound:e,audioSpeed:n,onSetAudioSpeed:i,audioRevealedSecret:r,onAudioRevealedSecret:s,compact:a=!1})=>{const[l,c]=Se.useState(null),[d,h]=Se.useState(!1),[p,u]=Se.useState(!1),[m,g]=Se.useState("all"),[E,x]=Se.useState(""),f=b=>{switch(b){case"photo":return o.jsx(Zp,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"});case"audio":return o.jsx(Bi,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"});case"video":return o.jsx(Iu,{className:"w-3.5 h-3.5 text-purple-400 shrink-0"});case"cctv":return o.jsx(wl,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"});case"log":return o.jsx(wl,{className:"w-3.5 h-3.5 text-red-400 shrink-0"});default:return o.jsx(Gr,{className:"w-3.5 h-3.5 text-gray-400 shrink-0"})}},v=b=>{const w=b!==void 0?b:n;b!==void 0&&i(b),h(!0),$.playGlitchStatic(.3),w===1?$.speakDistorted("When the house stopped... someone started.",()=>{h(!1)}):($.playTick(!0),$.speakDistorted("Someone started before the house stopped.",()=>{h(!1),r||(s(),$.playHorrorStinger())}))},T=Se.useMemo(()=>t.filter(b=>{let w=!0;if(m==="audio"?w=b.type==="audio":m==="photo"?w=b.type==="photo":m==="cctv"?w=b.type==="cctv"||b.type==="log"||b.type==="video":m==="document"&&(w=b.type==="document"),!w)return!1;if(!E.trim())return!0;const C=E.toLowerCase();return b.title.toLowerCase().includes(C)||b.content.toLowerCase().includes(C)||b.timestamp&&b.timestamp.toLowerCase().includes(C)||b.tags&&b.tags.some(y=>y.toLowerCase().includes(C))}),[t,m,E]),S=Se.useMemo(()=>{const b={all:t.length,audio:0,cctv:0,document:0,photo:0};return t.forEach(w=>{w.type==="audio"?b.audio++:w.type==="photo"?b.photo++:w.type==="cctv"||w.type==="log"||w.type==="video"?b.cctv++:b.document++}),b},[t]);return o.jsxs("div",{className:"w-full tactical-frame tactical-corners rounded-lg p-4 sm:p-5 font-mono text-gray-200",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-800/80 mb-4",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 hud-pulse-red"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Gr,{className:"w-4 h-4 text-red-500"}),o.jsx("h2",{className:"text-xs sm:text-sm font-bold text-gray-100 tracking-wider uppercase",children:"TACTICAL INTEL & EVIDENCE VAULT"})]}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-900/60 text-red-300 font-bold",children:"CASE 17-B"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-gray-400",children:[o.jsxs("span",{className:"text-emerald-400 font-semibold",children:[t.filter(b=>b.round<=e).length,"/",t.length," FILES UNLOCKED"]}),o.jsx("span",{className:"text-gray-600 hidden sm:inline",children:"•"}),o.jsxs("span",{className:"text-gray-500 hidden sm:inline",children:["ROUND ",e," CLEARANCE"]})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 mb-4",children:[o.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[o.jsx(e1,{className:"w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"}),o.jsx("input",{type:"text",placeholder:"Search dossier by keyword, suspect, timestamp...",value:E,onChange:b=>x(b.target.value),className:"w-full pl-8 pr-3 py-1.5 bg-black/60 border border-gray-800 rounded text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-500 transition"}),E&&o.jsx("button",{onClick:()=>x(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 hover:text-gray-300",children:"✕"})]}),o.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5",children:[o.jsxs("button",{onClick:()=>{g("all"),$.playTick(!1)},className:`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap cursor-pointer ${m==="all"?"bg-red-900/80 border border-red-500 text-white":"bg-black/50 border border-gray-800/80 text-gray-400 hover:text-gray-200"}`,children:["ALL (",S.all,")"]}),o.jsxs("button",{onClick:()=>{g("audio"),$.playTick(!1)},className:`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${m==="audio"?"bg-amber-900/80 border border-amber-500 text-amber-200":"bg-black/50 border border-gray-800/80 text-gray-400 hover:text-amber-300"}`,children:[o.jsx(Bi,{className:"w-3 h-3 text-amber-400"}),o.jsxs("span",{children:["AUDIO (",S.audio,")"]})]}),o.jsxs("button",{onClick:()=>{g("cctv"),$.playTick(!1)},className:`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${m==="cctv"?"bg-emerald-900/80 border border-emerald-500 text-emerald-200":"bg-black/50 border border-gray-800/80 text-gray-400 hover:text-emerald-300"}`,children:[o.jsx(wl,{className:"w-3 h-3 text-emerald-400"}),o.jsxs("span",{children:["CCTV & LOGS (",S.cctv,")"]})]}),o.jsxs("button",{onClick:()=>{g("document"),$.playTick(!1)},className:`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${m==="document"?"bg-purple-900/80 border border-purple-500 text-purple-200":"bg-black/50 border border-gray-800/80 text-gray-400 hover:text-purple-300"}`,children:[o.jsx(Gr,{className:"w-3 h-3 text-purple-400"}),o.jsxs("span",{children:["DOCS (",S.document,")"]})]}),o.jsxs("button",{onClick:()=>{g("photo"),$.playTick(!1)},className:`px-2.5 py-1 text-[10px] font-bold rounded transition whitespace-nowrap flex items-center gap-1 cursor-pointer ${m==="photo"?"bg-cyan-900/80 border border-cyan-500 text-cyan-200":"bg-black/50 border border-gray-800/80 text-gray-400 hover:text-cyan-300"}`,children:[o.jsx(Zp,{className:"w-3 h-3 text-cyan-400"}),o.jsxs("span",{children:["PHOTOS (",S.photo,")"]})]})]})]}),t.some(b=>b.id==="ev-4"&&b.round<=e)&&o.jsxs("div",{className:"mb-4 p-3 bg-gradient-to-r from-amber-950/30 to-black/60 border border-amber-900/60 rounded-lg flex flex-wrap items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-7 h-7 rounded bg-amber-900/40 border border-amber-600 flex items-center justify-center text-amber-400",children:o.jsx(Bi,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-bold text-amber-200 tracking-wider",children:"#EV-04 CASSETTE PLAYBACK"}),r&&o.jsx("span",{className:"text-[9px] px-1.5 py-0.2 bg-red-950 text-red-300 border border-red-700 rounded font-bold",children:"SUB-BASS DECODED"})]}),o.jsx("p",{className:"text-[10px] text-gray-400",children:r?'Key finding: "Someone started BEFORE the house stopped"':"Auditory anomaly requires 0.5x sub-bass inspection"})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:()=>v(1),disabled:d,className:"px-2.5 py-1 text-xs rounded bg-black/50 border border-amber-800/70 hover:border-amber-500 text-amber-300 font-bold transition flex items-center gap-1 cursor-pointer disabled:opacity-50",children:[o.jsx(Hs,{className:"w-3 h-3"}),o.jsx("span",{children:"1.0x (Normal)"})]}),o.jsxs("button",{onClick:()=>v(.5),disabled:d,className:"px-2.5 py-1 text-xs rounded bg-amber-900/60 border border-amber-500 hover:bg-amber-800 text-white font-bold transition flex items-center gap-1 cursor-pointer disabled:opacity-50 shadow-[0_0_10px_rgba(245,158,11,0.3)]",children:[o.jsx(Hs,{className:"w-3 h-3"}),o.jsx("span",{children:"0.5x (Decode Secret)"})]})]})]}),o.jsx("div",{className:`grid gap-2.5 ${a?"grid-cols-1 max-h-[700px] overflow-y-auto pr-1":"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`,children:T.length===0?o.jsxs("div",{className:"col-span-full p-8 text-center text-gray-500 text-xs italic border border-gray-900 rounded bg-black/30",children:['No intelligence files matching "',E,'" in category "',m,'".']}):T.map((b,w)=>{const C=b.round<=e,y=b.id.replace("ev-","").padStart(2,"0");if(!C)return o.jsxs("div",{className:"p-3 sm:p-4 rounded border border-gray-900 bg-black/40 text-gray-700 flex flex-col justify-between min-h-[90px] select-none",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-gray-700 font-bold",children:["#EV-",y," // CLASSIFIED"]}),o.jsx(Lu,{className:"w-3.5 h-3.5 text-gray-800"})]}),o.jsxs("p",{className:"text-[11px] text-gray-600 italic",children:["Requires Round ",b.round," Clearance"]})]},b.id);const A=b.id==="ev-4",I=b.id==="ev-12",P=b.id==="ev-6";return o.jsxs("div",{onClick:()=>{c(b),u(!1),$.playTick(!1)},className:`p-3 rounded border transition cursor-pointer flex flex-col justify-between group ${I?"bg-red-950/20 border-red-800 hover:border-red-500":A&&r?"bg-amber-950/20 border-amber-700 hover:border-amber-500":P?"bg-emerald-950/15 border-emerald-800/80 hover:border-emerald-500":"bg-black/60 border-gray-800 hover:border-gray-600"} ${a?"min-h-[95px]":"min-h-[130px]"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-gray-200",children:[f(b.type),o.jsx("span",{className:"truncate font-bold text-xs",children:b.title})]}),o.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[o.jsxs("span",{className:"text-[9px] px-1 py-0.2 rounded bg-red-950/80 text-red-300 font-mono font-bold border border-red-900/50",children:["#EV-",y]}),o.jsxs("span",{className:"text-[9px] px-1 py-0.2 rounded bg-gray-900 text-gray-400 border border-gray-800",children:["R",b.round]})]})]}),b.timestamp&&o.jsxs("p",{className:"text-[10px] text-amber-400/90 font-mono font-bold mb-1",children:["[",b.timestamp,"]"]}),o.jsx("p",{className:`text-[11px] text-gray-400 ${a?"line-clamp-2":"line-clamp-3"} leading-snug`,children:b.content})]}),o.jsxs("div",{className:"mt-2 pt-1.5 border-t border-gray-900/80 flex items-center justify-between text-[10px] text-gray-500 group-hover:text-gray-300",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(Pu,{className:"w-3 h-3 text-red-500"}),o.jsx("span",{children:"INSPECT FULL INTEL"})]}),b.hiddenDetails&&o.jsxs("span",{className:"text-red-400 font-bold text-[9px] flex items-center gap-1",children:[o.jsx(fo,{className:"w-2.5 h-2.5"}),o.jsx("span",{children:"FORENSIC LOG AVAILABLE"})]})]})]},b.id)})}),l&&o.jsx("div",{className:"fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:o.jsxs("div",{className:"w-full max-w-2xl bg-[#0a0a0f] border border-red-900/80 rounded-lg p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto crt-overlay tactical-corners",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[f(l.type),o.jsx("h3",{className:"text-base font-bold text-gray-100",children:l.title})]}),o.jsx("button",{onClick:()=>c(null),className:"px-3 py-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white text-xs font-mono font-bold cursor-pointer border border-gray-700",children:"CLOSE [ESC]"})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4",children:[o.jsxs("span",{className:"px-2 py-0.5 bg-red-950/60 border border-red-900 rounded text-red-300 text-xs font-mono font-bold",children:["EVIDENCE IDENTIFIER: #",l.id.toUpperCase()]}),l.timestamp&&o.jsxs("span",{className:"px-2 py-0.5 bg-amber-950/50 border border-amber-900/80 rounded text-amber-300 text-xs font-mono font-bold",children:["TIMESTAMP: ",l.timestamp]}),o.jsxs("span",{className:"px-2 py-0.5 bg-gray-900 border border-gray-800 rounded text-gray-400 text-xs font-mono",children:["SECURITY CLEARANCE: ROUND ",l.round,"+"]})]}),o.jsx("div",{className:"p-4 rounded border border-gray-800 bg-black/60 text-sm text-gray-200 whitespace-pre-wrap leading-relaxed mb-4 font-mono",children:l.content}),l.id==="ev-4"&&o.jsxs("div",{className:"p-4 rounded border border-amber-900/60 bg-amber-950/20 mb-4 space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-xs text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5",children:[o.jsx(Bi,{className:"w-4 h-4"}),"MAGNETIC CASSETTE TAPE PLAYBACK ENGINE"]}),o.jsxs("span",{className:"text-xs text-amber-400",children:["Speed: ",n,"x"]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[o.jsxs("button",{onClick:()=>v(),disabled:d,className:"flex items-center gap-2 px-4 py-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs rounded transition cursor-pointer",children:[o.jsx(Hs,{className:"w-4 h-4"}),d?"PLAYING AUDIO...":"PLAY CASSETTE REEL"]}),o.jsxs("div",{className:"flex items-center gap-1 border border-amber-900/60 rounded p-1 bg-black/40",children:[o.jsx("button",{onClick:()=>{i(1),$.playTick()},className:`px-3 py-1 text-xs rounded transition cursor-pointer ${n===1?"bg-amber-600 text-white font-bold":"text-gray-400 hover:text-white"}`,children:"1.0x (Normal)"}),o.jsx("button",{onClick:()=>{i(.5),$.playTick(!0)},className:`px-3 py-1 text-xs rounded transition cursor-pointer ${n===.5?"bg-amber-600 text-white font-bold":"text-gray-400 hover:text-white"}`,children:"0.5x (Sub-Bass Slowdown)"})]})]}),r&&o.jsxs("div",{className:"p-3 bg-red-950/50 border-l-4 border-red-600 text-red-200 text-xs rounded",children:[o.jsxs("p",{className:"font-bold flex items-center gap-1.5",children:[o.jsx(uo,{className:"w-4 h-4 text-red-400"}),"CRITICAL AUDITORY ANOMALY REVEALED:"]}),o.jsx("p",{className:"italic mt-1 text-red-100",children:'"Someone started BEFORE the house stopped." — The attack occurred prior to the 12:13 AM blackout!'})]})]}),l.hiddenDetails&&o.jsxs("div",{className:"space-y-2",children:[o.jsxs("button",{onClick:()=>{u(!p),$.playTick(!1)},className:"flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition font-bold cursor-pointer",children:[o.jsx(fo,{className:"w-3.5 h-3.5"}),p?"HIDE FORENSIC SPECTRAL AUDIT":"REVEAL FORENSIC SPECTRAL AUDIT"]}),p&&o.jsxs("div",{className:"p-4 rounded border border-red-900/70 bg-red-950/30 text-xs text-red-200 leading-relaxed animate-fade-in",children:[o.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-red-400 uppercase tracking-wider mb-1",children:[o.jsx(uo,{className:"w-4 h-4"}),"CONFIDENTIAL FORENSIC LOG:"]}),l.hiddenDetails]})]})]})})]})},rd={aarav:{id:"aarav",name:"Aarav Mehta",role:"Graduate Research Fellow",avatarIcon:"UserCheck",statement:"I entered the East Hallway at 11:47 PM to retrieve reference manuals. I never went near Professor Sen's private study.",cctvTimestamp:"11:47 PM",cctvAction:"Enters East Hallway carrying leather satchel",clockSource:"East Corridor Digital Terminal (Clock Delta: +0m, synced to Grandfather Clock)",twoTruths:["Entered the hallway at 11:47 PM exactly.","Did not enter the study through the front door."],realCrime:"Stole Professor Blackwood's confidential 20-year-old experiment logbook from the archive drawer.",lockQuestion:"What physical asset did Aarav remove from the East Wing, and what clock generated his 11:47 timestamp?",lockAnswer:"research notebook",lockHint:"Look closely at his satchel and the grandfather clock reference in the notebook."},riya:{id:"riya",name:"Riya Sharma",role:"Journalist & PhD Candidate",avatarIcon:"Radio",statement:"I was reviewing thesis records in the reading room. I heard footsteps around 11:50, but stayed put until the lights went dark.",cctvTimestamp:"11:52 PM",cctvAction:"Seen adjusting concealed lapel recorder outside Study antechamber",clockSource:"Reading Room Analog Wall Clock (-3m drift)",twoTruths:["Was recording audio in the perimeter of the study.","Heard voices arguing inside the study prior to midnight."],realCrime:"Planted illegal directional microphones to record Sen admitting to historical academic fraud.",lockQuestion:"What illicit equipment was Riya operating outside the Study, and what was her target?",lockAnswer:"audio recording",lockHint:"Inspect her lapel in the CCTV feed and the audio device frequency log."},kabir:{id:"kabir",name:"Kabir Varma",role:"Infrastructure & Security Admin",avatarIcon:"Terminal",statement:"The building network suffered a packet flood at 11:55 PM. I was trapped in the server bunker restoring breaker relays until 12:20 AM.",cctvTimestamp:"11:58 PM",cctvAction:"Enters Basement Server Hub using emergency maintenance master fob",clockSource:"Network Time Protocol (NTP) Mainframe Server",twoTruths:["Accessed the security mainframe terminal directly at 11:58 PM.","Triggered the complete building circuit trip at 12:13 AM."],realCrime:"Deliberately overloaded the transformer to trigger the 12:13 AM blackout so he could wipe CCTV logs.",lockQuestion:"What event did Kabir trigger at 12:13 AM, and what was his primary objective?",lockAnswer:"blackout",lockHint:"Look at the power breaker grid and his override command at 12:13 AM."},meera:{id:"meera",name:"Dr. Meera Patel",role:"Senior Associate Researcher",avatarIcon:"FileWarning",statement:"I was in the kitchen brewing herbal tea from 11:40 PM until after midnight. Ask anyone—I had zero reason to confront Vikram tonight.",cctvTimestamp:"12:03 AM",cctvAction:"Paces kitchen hallway in agitated state, holding crumpled parchment",clockSource:"Kitchen Industrial Timer (+16m manual offset)",twoTruths:["Was physically inside the kitchen at 12:03 AM.","Engaged in a violent confrontation with Vikram Sen at 11:47 PM."],realCrime:"Attacked Professor Sen in a rage at 11:47 PM, striking him with a heavy brass paperweight, believing she had killed him.",lockQuestion:"What did Meera falsely claim was her unbroken alibi between 11:40 PM and 12:10 AM?",lockAnswer:"kitchen",lockHint:"Check the contradiction between her statement and Study Audio Evidence 10."},dev:{id:"dev",name:'Devraj "Dev" Negi',role:"Chief Groundskeeper & Caretaker (28 yrs)",avatarIcon:"Key",statement:"I'm just the caretaker. I sweep floors, lock external gates, and stoke the boiler. I was in the basement maintenance bay all night.",cctvTimestamp:"12:08 AM",cctvAction:"Descends into lower maintenance tunnel with heavy iron wrench and master skeleton key",clockSource:"Mechanical Boiler Pressure Clock",twoTruths:["Knows every unmonitored blind spot and hidden servant passageway in Blackwood House.","Entered the study during the 12:13 AM blackout when Sen was still breathing."],realCrime:"First-degree murder. Smothered Professor Sen during the 12:13 AM blackout to avenge his child killed 20 years ago.",lockQuestion:"What hidden route did Dev use to enter the study undetected during the blackout?",lockAnswer:"hidden passage",lockHint:"Dev knows the house better than anyone. Notice the architectural blueprint servant tunnel."}},Jp=({suspectLocks:t,onSolveLock:e})=>{const[n,i]=Se.useState("aarav"),[r,s]=Se.useState(""),[a,l]=Se.useState(""),[c,d]=Se.useState(!1),h=rd[n],p=t[n],u=Object.values(t).filter(Boolean).length,m=g=>{g.preventDefault();const E=r.trim().toLowerCase(),x=h.lockAnswer.toLowerCase();E.includes(x)||x.includes(E)&&E.length>=4?($.playHorrorStinger(),e(n),l(""),s("")):($.playGlitchStatic(.2),l(`ACCESS DENIED: "${r}" does not resolve the secondary crime.`))};return o.jsxs("div",{className:"w-full bg-[#0d0d12] border border-gray-900 rounded-lg p-6 font-mono",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-gray-800 mb-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Sh,{className:"w-5 h-5 text-red-500"}),o.jsx("h2",{className:"text-base font-bold text-gray-100 tracking-wider uppercase",children:"ROUND 2: FIVE SUSPECTS & FIVE LOCKS"})]}),o.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Break the alibis. All five are guilty of a crime, but none of those crimes is murder."})]}),o.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded bg-black/60 border border-gray-800 text-xs",children:[o.jsx("span",{className:"text-gray-400",children:"LOCKS CLEARED:"}),o.jsxs("span",{className:"font-bold text-red-400",children:[u," / 5"]})]})]}),o.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-900 mb-6 no-scrollbar",children:Object.keys(rd).map(g=>{const E=rd[g],x=!t[g],f=n===g;return o.jsxs("button",{onClick:()=>{i(g),l(""),d(!1),$.playTick(!1)},className:`flex items-center gap-2 px-4 py-2 rounded text-xs transition uppercase font-bold tracking-wider ${f?"bg-red-950/80 border border-red-600 text-red-100 shadow-[0_0_12px_rgba(229,9,20,0.3)]":"bg-black/50 border border-gray-800 text-gray-400 hover:text-gray-200"}`,children:[x?o.jsx(Lu,{className:"w-3.5 h-3.5 text-gray-500"}):o.jsx(Uu,{className:"w-3.5 h-3.5 text-emerald-400"}),o.jsx("span",{children:E.name.split(" ")[0]})]},g)})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[o.jsx("div",{className:"lg:col-span-7 space-y-4",children:o.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/50",children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gray-800/80 mb-3",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-bold text-gray-100",children:h.name}),o.jsx("p",{className:"text-xs text-red-400 font-semibold",children:h.role})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"CCTV LOG"}),o.jsxs("span",{className:"text-xs font-bold text-amber-300",children:["[",h.cctvTimestamp,"]"]})]})]}),o.jsxs("div",{className:"space-y-1 mb-3",children:[o.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-bold",children:"OFFICIAL ALIBI DEPOSITION:"}),o.jsxs("p",{className:"text-xs text-gray-300 italic bg-gray-950/80 p-3 rounded border border-gray-900",children:['"',h.statement,'"']})]}),o.jsxs("div",{className:"p-3 bg-red-950/20 border-l-2 border-red-700 rounded text-xs mb-3 space-y-1",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-red-400 font-bold uppercase text-[10px]",children:[o.jsx($r,{className:"w-3.5 h-3.5"}),"HARDWARE TIMESTAMP SOURCE (AUDIT TRAIL):"]}),o.jsx("p",{className:"text-gray-300 text-[11px]",children:h.clockSource})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-bold",children:"FORENSIC CONFIRMED TRUTHS (ROUND 2 PRINCIPLE):"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:h.twoTruths.map((g,E)=>o.jsxs("div",{className:"p-2.5 bg-black/70 rounded border border-gray-900 text-xs text-emerald-400/90 flex items-start gap-2",children:[o.jsx(Qs,{className:"w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"}),o.jsx("span",{children:g})]},E))})]})]})}),o.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between p-5 rounded border border-gray-800 bg-black/70",children:[p?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider",children:[o.jsx(Uu,{className:"w-4 h-4"}),"LOCK COMPROMISED — SECONDARY CRIME EXPOSED:"]}),o.jsxs("div",{className:"p-4 rounded border border-emerald-900/60 bg-emerald-950/20 text-xs text-emerald-200 leading-relaxed",children:[o.jsx("p",{className:"font-bold text-emerald-400 mb-1",children:"ACTUAL CRIME COMMITTED:"}),o.jsx("p",{children:h.realCrime})]}),o.jsxs("div",{className:"p-3 bg-red-950/30 border-l-2 border-red-600 text-red-300 text-xs rounded",children:[o.jsx("p",{className:"font-bold",children:"CORE DEDUCTION:"}),o.jsxs("p",{className:"mt-0.5",children:[h.name," lied to protect themselves from this crime—not because they killed Professor Sen."]})]})]}):o.jsxs("form",{onSubmit:m,className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider",children:[o.jsx(Lu,{className:"w-4 h-4"}),"LOCK CIPHER CHALLENGE:"]}),o.jsx("p",{className:"text-xs text-gray-300 leading-relaxed",children:h.lockQuestion}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-[10px] text-gray-500 uppercase tracking-wider mb-1",children:"SUBMIT SECONDARY MOTIVE / CRIME KEYWORD:"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"text",value:r,onChange:g=>s(g.target.value),placeholder:`e.g. ${h.lockAnswer.slice(0,4)}...`,className:"w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-600 rounded px-3 py-2 text-sm text-gray-100 placeholder-gray-700 outline-none font-mono"}),o.jsx("button",{type:"submit",className:"px-4 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)] shrink-0 cursor-pointer",children:"DISARM"})]}),o.jsxs("div",{className:"space-y-1.5 pt-2",children:[o.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-bold block",children:"⚡ TACTICAL INTEL CHIPS (CLICK TO DISARM):"}),o.jsx("div",{className:"flex flex-wrap gap-1.5",children:[h.lockAnswer,n==="aarav"?"Poisoned Coffee":n==="riya"?"Blackmail Letter":n==="kabir"?"Cut Phone Lines":n==="meera"?"Fled Estate":"Swapped Keycards",n==="aarav"?"Altered Grant Will":n==="riya"?"Security Jammer":n==="kabir"?"Stole Passcode":n==="meera"?"Hidden Cyanide":"Broke Clock Pendulum"].map(g=>o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),s(g);const E=h.lockAnswer.toLowerCase();(g.toLowerCase().includes(E)||E.includes(g.toLowerCase()))&&($.playObjectiveComplete(),e(n),l(""),s(""))},className:"px-2.5 py-1 rounded bg-red-950/40 hover:bg-red-900 border border-red-800/80 text-[11px] text-red-200 font-bold transition hover:scale-105 cursor-pointer flex items-center gap-1",children:o.jsxs("span",{children:["► ",g]})},g))})]})]}),a&&o.jsxs("div",{className:"p-2.5 rounded bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2",children:[o.jsx(uo,{className:"w-4 h-4 text-red-500 shrink-0"}),o.jsx("span",{children:a})]}),o.jsxs("div",{className:"flex items-center justify-between pt-2",children:[o.jsxs("button",{type:"button",onClick:()=>d(!c),className:"text-xs text-gray-500 hover:text-amber-400 flex items-center gap-1 transition",children:[o.jsx(Y_,{className:"w-3.5 h-3.5"}),c?"Hide Hint":"Show Hint"]}),o.jsx("button",{type:"submit",className:"px-5 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)]",children:"DISARM LOCK"})]}),c&&o.jsxs("div",{className:"p-3 bg-amber-950/30 border border-amber-900/60 rounded text-amber-200/90 text-xs",children:[o.jsx("span",{className:"font-bold",children:"Investigator Hint:"})," ",h.lockHint]})]}),o.jsx("div",{className:"mt-4 pt-3 border-t border-gray-900 text-[11px] text-gray-500 italic",children:'"Never trust the first time. What clock generated this timestamp?"'})]})]})]})},em=({queries:t,onAddQuery:e,reasoningInspected:n,onInspectReasoning:i})=>{const[r,s]=Se.useState(""),[a,l]=Se.useState(!1),c=[{id:"reconcile",label:"⚡ RECONCILE 12:03 CCTV VS 12:05 AUDIO",prompt:"Reconcile Dr. Meera's 12:03 AM kitchen CCTV with Evidence 10 Study audio at 12:05 AM. Did she commit the crime?"},{id:"drift",label:"⚡ AUDIT KITCHEN CLOCK NTP SYNCHRONIZATION",prompt:"Audit whether the kitchen analog/industrial clock matches server NTP telemetry or has physical time drift."},{id:"kabir",label:"⚡ TRACE KABIR SECURITY TERMINAL INTRUSION",prompt:"Determine if Kabir's 11:58 PM security console access could alter raw analog study audio recordings."}],d=p=>{a||(l(!0),$.playRadioChirp(),$.playHitmarker(),setTimeout(()=>{e(p,`ASSISTANT EVALUATION:
TIMELINE STATUS: CONSISTENT
PROBABILITY: 94.2%

SYNTHESIS: Based on logged records, Dr. Meera Patel was in the kitchen corridor at 12:03 AM. Evidence 10 (Audio timestamp 12:05 AM) reflects acoustic reverberation or delayed playback. Kabir Varma's security log breach at 11:58 PM confirms root access, making him the sole subject capable of altering digital timelines.`,`[INTERNAL LLM REASONING TRACE]:
• Assumption 1: All CCTV hardware clocks are synchronized.
• Assumption 2: Kabir's security terminal breach equates to historical CCTV stream alteration.
• Assumption 3: Kitchen industrial clock operates on standard NTP protocol.

⚠️ VULNERABILITY: Model failed to verify physical clock drift. The AI is solving its own assumptions, not physical reality.`),l(!1),s(""),$.playHorrorStinger()},900))},h=p=>{p.preventDefault(),r.trim()&&d(r)};return o.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-3 h-3 bg-red-600 rounded-sm animate-pulse"}),o.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase flex items-center gap-2",children:o.jsx("span",{children:"ROUND 3: THE IMPOSSIBLE TIMELINE // AI TRAP"})})]}),o.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60",children:[o.jsx(_h,{className:"w-3 h-3 animate-spin"}),o.jsx("span",{children:"TACTICAL RECON STATUS: ANOMALY DETECTED"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"relative p-4 rounded bg-gradient-to-b from-black/90 to-[#0e0e14] border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)] group",children:[o.jsx("div",{className:"absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800 font-bold",children:"CAM_KITCHEN_04"}),o.jsx("span",{className:"text-[10px] text-amber-400 font-black tracking-widest block mb-1",children:"[FEED A] VISUAL CCTV RECORD"}),o.jsx("div",{className:"text-sm font-black text-amber-300 mb-1 tracking-tight",children:"12:03:00 AM // DR. MEERA PATEL"}),o.jsxs("div",{className:"text-xs text-gray-300 bg-black/60 p-2.5 rounded border border-amber-950/60 flex items-center justify-between",children:[o.jsx("span",{children:"LOC: Kitchen Service Hallway"}),o.jsx("span",{className:"text-emerald-400 font-bold",children:"VERIFIED PIXELS"})]}),o.jsx("p",{className:"text-[11px] text-gray-400 mt-2",children:"Meera holds research notes. Claims she stayed until 12:10 AM."})]}),o.jsxs("div",{className:"relative p-4 rounded bg-gradient-to-b from-black/90 to-[#140b0e] border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)] group",children:[o.jsx("div",{className:"absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-700 font-bold animate-pulse",children:"ACOUSTIC_SENS_10"}),o.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-widest block mb-1",children:"[FEED B] STUDY AUDIO SENSOR"}),o.jsx("div",{className:"text-sm font-black text-red-400 mb-1 tracking-tight",children:"12:05:14 AM // PROFESSOR SEN"}),o.jsx("div",{className:"text-xs text-red-200 bg-red-950/40 p-2.5 rounded border border-red-900/60",children:`"Meera... you shouldn't have come... what did you do..."`}),o.jsx("p",{className:"text-[11px] text-red-300 mt-2 font-semibold",children:"Study sensor logs Sen's dying voice addressing Meera 134 seconds later!"})]})]}),o.jsxs("div",{className:"p-3 bg-red-950/30 border-l-4 border-red-600 rounded flex items-center justify-between text-xs text-red-300",children:[o.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[o.jsx(uo,{className:"w-4 h-4 text-red-500 shrink-0"}),o.jsx("span",{children:"COGNITIVE DILEMMA: Can one person be in two locations simultaneously?"})]}),o.jsx("span",{className:"text-[10px] text-gray-400 hidden sm:inline",children:"USE 1-CLICK TACTICAL CHIPS BELOW"})]}),o.jsxs("div",{className:"p-4 rounded border border-cyan-950/80 bg-black/90 space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-400 font-black uppercase tracking-wider",children:[o.jsx(j_,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"INVESTIGATIVE AI ASSISTANT // TACTICAL TERMINAL"})]}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800 font-bold",children:"CONFIDENCE: 94.2%"})]}),o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider font-bold",children:"⚡ 1-CLICK TACTICAL PROMPT OVERRIDES:"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:c.map(p=>o.jsxs("button",{type:"button",onClick:()=>{s(p.prompt),d(p.prompt)},disabled:a,className:"p-2 bg-[#0c121e] hover:bg-[#132238] border border-cyan-800/80 hover:border-cyan-400 rounded text-cyan-200 text-left text-[11px] font-bold transition flex items-center gap-1.5 shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer",children:[o.jsx(ea,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),o.jsx("span",{className:"truncate",children:p.label})]},p.id))})]}),o.jsxs("form",{onSubmit:h,className:"flex gap-2 pt-1",children:[o.jsx("input",{type:"text",value:r,onChange:p=>s(p.target.value),placeholder:"Type custom prompt or select 1-click chip above...",className:"flex-1 bg-[#06080e] border border-gray-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-gray-200 placeholder-gray-700 outline-none"}),o.jsxs("button",{type:"submit",disabled:a||!r.trim(),className:"px-4 py-2 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs font-black rounded transition flex items-center gap-1.5 cursor-pointer shrink-0",children:[o.jsx(Q_,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:a?"COMPUTING...":"DISPATCH"})]})]}),o.jsxs("div",{className:"space-y-3 pt-2",children:[t.map((p,u)=>o.jsxs("div",{className:"p-3.5 rounded border border-gray-800 bg-[#090b12] space-y-2.5",children:[o.jsxs("div",{className:"text-[11px] text-gray-400 flex items-center justify-between border-b border-gray-800 pb-1.5",children:[o.jsxs("span",{className:"font-bold text-gray-300 truncate",children:['PROMPT: "',p.prompt,'"']}),o.jsx("span",{className:"text-[9px] text-gray-500 shrink-0",children:p.timestamp})]}),o.jsx("div",{className:"text-xs text-gray-300 whitespace-pre-wrap leading-relaxed",children:p.response}),o.jsxs("div",{className:"pt-2 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",children:[o.jsxs("button",{onClick:()=>{$.playHitmarker(),$.playRadioChirp(),i()},className:"px-3 py-1.5 rounded bg-red-950/80 hover:bg-red-900 border border-red-600 text-red-200 text-xs font-black transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95 cursor-pointer",children:[o.jsx(V_,{className:"w-3.5 h-3.5 text-red-400"}),o.jsx("span",{children:n?"COLLAPSE MODEL TRACE":"⚠ OVERRIDE: EXPOSE 94.2% AI BIAS"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-[10px] text-amber-400 font-bold",children:"MODEL CONFIDENCE: 94.2%"}),n&&o.jsx("span",{className:"text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 animate-pulse",children:"+150 XP TRAP EVADED"})]})]}),n&&o.jsxs("div",{className:"p-3.5 bg-red-950/30 border border-red-700/80 rounded space-y-2.5 text-xs text-red-200 animate-fade-in",children:[o.jsxs("div",{className:"flex items-center gap-1 text-red-400 font-black uppercase text-[11px]",children:[o.jsx(uo,{className:"w-4 h-4 text-red-400"}),o.jsx("span",{children:"COGNITIVE TRAP EXPOSED // WHY THE AI FAILED:"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[o.jsxs("div",{className:"p-2.5 rounded bg-red-950/60 border border-red-900 text-red-300",children:[o.jsx("span",{className:"font-bold text-red-400 block mb-0.5",children:"❌ AI FALSE ASSUMPTION:"}),'"Assumed all hardware clocks were perfectly synced and Kabir edited historical CCTV footage."']}),o.jsxs("div",{className:"p-2.5 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300",children:[o.jsx("span",{className:"font-bold text-emerald-400 block mb-0.5",children:"🎯 PHYSICAL REALITY:"}),'"Kitchen clock ran 9 minutes slow! Meera was in the Study at 11:47 PM, not 12:03 AM."']})]})]})]},u)),t.length===0&&o.jsx("div",{className:"text-center py-5 text-xs text-gray-500 italic bg-black/40 rounded border border-gray-900",children:"Click any 1-Click Tactical Chip above to trigger the AI analysis."})]})]})]})},tm=({hiddenVideoUnlocked:t,onUnlockHiddenVideo:e,sliderDistinction:n,onChangeDistinction:i})=>{const[r,s]=Se.useState(!1),[a,l]=Se.useState(0),[c,d]=Se.useState(!1),h=()=>{s(!0),l(1),$.playHitmarker(),$.playGlitchStatic(.4),setTimeout(()=>{$.speakDistorted("If you're watching this, one of them killed me. But that's not what you should be looking for. The person who killed me isn't the person you're going to suspect.",()=>{l(2),$.playGlitchStatic(.5),setTimeout(()=>{s(!1),t||(e(),$.playHorrorStinger())},1200)})},1e3)},p=()=>{d(!0),$.playHitmarker(),$.playGlitchStatic(.6),$.playTick(!0),setTimeout(()=>{d(!1)},7e3)},u=()=>{$.playHitmarker(),$.playRadioChirp(),i("attackTime","11:47 PM"),i("deathTime","12:15 AM (Blackout)"),i("discoveryTime","12:18 AM"),setTimeout(()=>{t||e(),$.playObjectiveComplete()},400)};return o.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(Iu,{className:"w-5 h-5 text-red-500 animate-pulse"}),o.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase",children:"ROUND 4: THE DEAD MAN'S MESSAGE // FORENSIC TIMELINE"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60",children:[o.jsx(_h,{className:"w-3 h-3 animate-spin"}),o.jsx("span",{children:"CHRONO TRIAD: ASYNC DETECTED"})]})]}),o.jsxs("div",{className:"p-3.5 bg-black/80 rounded border border-gray-800 space-y-2",children:[o.jsx("span",{className:"text-[10px] text-gray-400 uppercase tracking-widest font-bold block",children:"TACTICAL TIMELINE RADAR // CHRONOLOGICAL NODES"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px]",children:[o.jsxs("div",{className:"p-2 rounded bg-amber-950/30 border border-amber-800/80",children:[o.jsx("div",{className:"text-amber-400 font-black",children:"11:47 PM"}),o.jsx("div",{className:"text-gray-300 font-bold truncate",children:"ASSAULT STRIKE"}),o.jsx("div",{className:"text-[9px] text-gray-400",children:"Meera strikes Sen"})]}),o.jsxs("div",{className:"p-2 rounded bg-cyan-950/30 border border-cyan-800/80",children:[o.jsx("div",{className:"text-cyan-400 font-black",children:"12:03 AM"}),o.jsx("div",{className:"text-gray-300 font-bold truncate",children:"ALIVE & BREATHING"}),o.jsx("div",{className:"text-[9px] text-gray-400",children:"Sen records video"})]}),o.jsxs("div",{className:"p-2 rounded bg-purple-950/30 border border-purple-800/80",children:[o.jsx("div",{className:"text-purple-400 font-black",children:"12:13 AM"}),o.jsx("div",{className:"text-gray-300 font-bold truncate",children:"BLACKOUT SABOTAGE"}),o.jsx("div",{className:"text-[9px] text-gray-400",children:"Kabir trips power"})]}),o.jsxs("div",{className:"p-2 rounded bg-red-950/60 border border-red-700 font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]",children:[o.jsx("div",{className:"text-red-400 font-black",children:"12:15 AM"}),o.jsx("div",{className:"text-white font-black truncate",children:"FATAL SMOTHERING"}),o.jsx("div",{className:"text-[9px] text-red-200",children:"Dev suffocates Sen"})]}),o.jsxs("div",{className:"p-2 rounded bg-emerald-950/30 border border-emerald-800/80 col-span-2 sm:col-span-1",children:[o.jsx("div",{className:"text-emerald-400 font-black",children:"12:18 AM"}),o.jsx("div",{className:"text-gray-300 font-bold truncate",children:"LOCKED DISCOVERY"}),o.jsx("div",{className:"text-[9px] text-gray-400",children:"Door breached"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/90 flex flex-col justify-between space-y-3",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gray-900 mb-2",children:[o.jsxs("span",{className:"text-xs text-red-400 font-black uppercase flex items-center gap-1.5",children:[o.jsx(Iu,{className:"w-3.5 h-3.5"}),"EVIDENCE 11: SEN_FINAL_1203.mp4"]}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-900 font-bold",children:"12:03:00 AM (17 SEC)"})]}),o.jsxs("div",{className:"relative w-full h-44 bg-[#040407] rounded border border-gray-800 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay",children:[o.jsxs("div",{className:"absolute top-2 left-2 text-[9px] text-red-500 font-bold flex items-center gap-1",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-red-600 animate-ping"}),"REC 4K 60FPS"]}),o.jsx("div",{className:"absolute top-2 right-2 text-[9px] text-gray-500 font-mono",children:"OPTIC: STUDY_MON_01"}),a===0&&o.jsxs("div",{className:"space-y-2",children:[o.jsx("p",{className:"text-[11px] text-gray-400 font-mono",children:"PROFESSOR SEN'S FINAL RECORDING"}),o.jsxs("button",{onClick:h,disabled:r,className:"px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-black rounded flex items-center gap-2 mx-auto transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)]",children:[o.jsx(Hs,{className:"w-3.5 h-3.5 fill-current"}),"EXECUTE PLAYBACK"]})]}),a===1&&o.jsxs("div",{className:"space-y-2 animate-fade-in px-3",children:[o.jsx("div",{className:"text-red-500 text-xs font-black animate-pulse",children:"● BUFFER PLAYBACK [12:03:00 AM]"}),o.jsx("p",{className:"text-xs text-gray-200 italic font-serif leading-relaxed",children:`"If you're watching this... one of them killed me. But the person who killed me isn't the person you're going to suspect."`}),o.jsx("p",{className:"text-[10px] text-gray-400 font-mono",children:"(Sen turns toward wall clock: reads 12:03 AM)"})]}),a===2&&o.jsxs("div",{className:"space-y-1 text-red-500 font-black font-mono",children:[o.jsx("p",{className:"text-base tracking-widest animate-glitch",children:"STREAM TERMINATED"}),o.jsx("p",{className:"text-[10px] text-gray-400",children:"FEED TIMESTAMP: 12:03:17 AM"})]})]})]}),o.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 text-[11px] text-gray-300 flex items-center justify-between",children:[o.jsx("span",{children:"🎯 CRITICAL FACT:"}),o.jsx("span",{className:"text-emerald-400 font-bold",children:"Sen was alive & speaking at 12:03 AM"})]})]}),o.jsxs("div",{className:`p-4 rounded border flex flex-col justify-between space-y-3 transition ${t?"border-red-900/80 bg-black/90":"border-gray-900 bg-black/40 opacity-70"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gray-900 mb-2",children:[o.jsxs("span",{className:"text-xs text-red-500 font-black uppercase flex items-center gap-1.5",children:[o.jsx(G_,{className:"w-3.5 h-3.5"}),"RESTRICTED: PINHOLE_1147.mp4"]}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-900 font-bold",children:"11:47:00 PM (7 SEC)"})]}),o.jsx("div",{className:"relative w-full h-44 bg-[#040407] rounded border border-red-950 flex flex-col items-center justify-center p-3 text-center overflow-hidden crt-overlay",children:t?c?o.jsxs("div",{className:"space-y-2 animate-fade-in px-3",children:[o.jsx("div",{className:"text-xs text-red-500 font-black animate-pulse",children:"● PINHOLE RECONSTRUCTION (11:47 PM)"}),o.jsx("p",{className:"text-xs text-gray-200",children:"[00:03]: Dark figure enters Study. Wall clock reads 11:47 PM."}),o.jsx("p",{className:"text-xs text-red-400 font-bold",children:"[00:06]: Violent confrontation. Heavy brass thud. Figure flees!"})]}):o.jsxs("div",{className:"space-y-2",children:[o.jsx("p",{className:"text-[11px] text-red-400 font-black uppercase tracking-wider",children:"7-SECOND PINHOLE CLIP READY"}),o.jsxs("button",{onClick:p,className:"px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-black rounded flex items-center gap-2 mx-auto transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)]",children:[o.jsx(Hs,{className:"w-3.5 h-3.5 fill-current"}),"PLAY 11:47 ASSAULT FOOTAGE"]})]}):o.jsxs("div",{className:"space-y-1.5",children:[o.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-wider font-bold",children:"RESTRICTED ARCHIVE ENCRYPTED"}),o.jsx("p",{className:"text-[10px] text-gray-600",children:"Decrypts after playing Sen's video or verifying chronology"})]})})]}),o.jsxs("div",{className:"p-2.5 bg-red-950/30 rounded border border-red-900/60 text-[11px] text-red-200 flex items-center justify-between",children:[o.jsx("span",{children:"⚡ THE REVELATION:"}),o.jsx("span",{className:"font-bold",children:"Meera assaulted him at 11:47 PM, but did NOT kill him!"})]})]})]}),o.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/90 space-y-3",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-2",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-400 font-black uppercase tracking-wider",children:[o.jsx($r,{className:"w-4 h-4 text-amber-400"}),o.jsx("span",{children:"FORENSIC TIME TRIAD DIFFERENTIATION"})]}),o.jsxs("button",{type:"button",onClick:u,className:"px-3 py-1 bg-amber-950/70 hover:bg-amber-900 border border-amber-600 rounded text-amber-300 text-[11px] font-black transition flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer self-start sm:self-center",children:[o.jsx(ea,{className:"w-3.5 h-3.5 text-amber-400"}),o.jsx("span",{children:"⚡ 1-CLICK AUTO-SYNC CHRONOLOGY"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[o.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"1. PHYSICAL ATTACK TIME:"}),o.jsx("input",{type:"text",value:n.attackTime,onChange:m=>i("attackTime",m.target.value),placeholder:"e.g. 11:47 PM",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-100 outline-none text-xs"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),i("attackTime","11:47 PM")},className:"w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-bold rounded border border-gray-700 transition cursor-pointer",children:"[ ⚡ 11:47 PM (Brass Strike) ]"})]}),o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-red-900/60 space-y-2",children:[o.jsx("label",{className:"text-red-400 font-bold block uppercase text-[11px]",children:"2. TRUE DEATH TIME:"}),o.jsx("input",{type:"text",value:n.deathTime,onChange:m=>i("deathTime",m.target.value),placeholder:"e.g. 12:15 AM (Blackout)",className:"w-full bg-black border border-red-900 focus:border-red-600 rounded px-2.5 py-1.5 text-red-200 outline-none font-bold text-xs"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),i("deathTime","12:15 AM (Blackout)")},className:"w-full py-1 bg-red-950/60 hover:bg-red-900 text-red-300 text-[10px] font-bold rounded border border-red-800 transition cursor-pointer",children:"[ ⚡ 12:15 AM (Blackout Smothering) ]"})]}),o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[o.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"3. DISCOVERY TIME:"}),o.jsx("input",{type:"text",value:n.discoveryTime,onChange:m=>i("discoveryTime",m.target.value),placeholder:"e.g. 12:18 AM",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-100 outline-none text-xs"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),i("discoveryTime","12:18 AM")},className:"w-full py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 text-[10px] font-bold rounded border border-gray-700 transition cursor-pointer",children:"[ ⚡ 12:18 AM (Door Breached) ]"})]})]}),o.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-between gap-3",children:[o.jsxs("button",{onClick:()=>{const m=n.attackTime.toLowerCase(),g=n.deathTime.toLowerCase(),E=n.discoveryTime.toLowerCase(),x=m.includes("11:47")||m.includes("11.47"),f=g.includes("12:15")||g.includes("12.15")||g.includes("blackout"),v=E.includes("12:18")||E.includes("12.18");x&&f&&v?($.playObjectiveComplete(),t||e()):$.playGlitchStatic(.3)},className:"w-full sm:w-auto px-6 py-2.5 bg-red-800 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.5)] cursor-pointer active:scale-95",children:[o.jsx(Qs,{className:"w-4 h-4"}),o.jsx("span",{children:"VERIFY CHRONOLOGY TRIAD"})]}),t&&o.jsxs("div",{className:"flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1.5 rounded border border-emerald-800 animate-pulse",children:[o.jsx(fo,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{children:"TRIAD VERIFIED (+200 XP): Attack (11:47) ≠ Smothering (12:15) ≠ Discovery (12:18)"})]})]})]})]})},nm=({round5Choice:t,onAccuseMeera:e,onChallengeAi:n,printerLogUnlocked:i})=>{const r=()=>{$.playHitmarker(),$.playBlackout(),e()},s=()=>{$.playHitmarker(),$.playRadioChirp(),$.playObjectiveComplete(),n()};return o.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(J_,{className:"w-5 h-5 text-red-500 animate-pulse"}),o.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase",children:"ROUND 5: THE FALSE MURDERER // AI VERDICT"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-ping"}),o.jsx("span",{children:"AI ACCUSATION CONFIDENCE: 97.8%"})]})]}),o.jsxs("div",{className:"p-4 rounded border border-red-900/60 bg-black/90 space-y-4",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-950 pb-3",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-widest font-black",children:"CLASSIFIED TARGET PROFILE // DESIGNATED CULPRIT"}),o.jsxs("h3",{className:"text-xl font-black text-red-500 tracking-tight flex items-center gap-2",children:[o.jsx("span",{children:"PRIMARY SUSPECT: DR. MEERA PATEL"}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800 uppercase",children:"TARGET IDENTIFIED"})]})]}),o.jsx("div",{className:"text-[11px] text-red-300 font-bold bg-red-950/80 border border-red-700 px-3 py-1.5 rounded self-start sm:self-center",children:"PROBABILITY MATRIX: 97.8%"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs",children:[o.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[o.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"01 // ALIBI COLLAPSE"}),o.jsx("p",{className:"text-gray-300 text-[11px]",children:"12:03 CCTV contradicted by 12:05 Study audio."})]}),o.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[o.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"02 // DIRECT ASSAULT"}),o.jsx("p",{className:"text-gray-300 text-[11px]",children:"11:47 PM pinhole video proves brass paperweight strike."})]}),o.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[o.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"03 // RESEARCH MOTIVE"}),o.jsx("p",{className:"text-gray-300 text-[11px]",children:"Sen threatened to terminate her grant and publish her findings."})]}),o.jsxs("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1",children:[o.jsx("span",{className:"text-[10px] text-red-400 font-black tracking-wider block",children:"04 // LATENT PRINTS"}),o.jsx("p",{className:"text-gray-300 text-[11px]",children:"Matching fingerprints recovered from paperweight weapon."})]})]}),o.jsxs("div",{className:"pt-3 border-t border-red-950 flex flex-col sm:flex-row gap-3",children:[o.jsx("button",{onClick:r,disabled:t==="accused_meera",className:"flex-1 py-3 px-4 rounded bg-red-950 hover:bg-red-900 border border-red-700 text-red-200 font-black text-xs uppercase tracking-wider transition active:scale-95 disabled:opacity-50 cursor-pointer",children:"CONFIRM MEERA AS MURDERER"}),o.jsxs("button",{onClick:s,className:"flex-1 py-3 px-4 rounded bg-cyan-950 hover:bg-cyan-900 border border-cyan-500 text-cyan-200 font-black text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2",children:[o.jsx(ea,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"⚡ CHALLENGE AI // AUDIT 11:41 PM PRE-CRIME SPOOL"})]})]})]}),t==="accused_meera"&&o.jsxs("div",{className:"p-4 rounded border border-red-600 bg-red-950/50 text-red-200 space-y-2 animate-fade-in",children:[o.jsxs("div",{className:"flex items-center gap-2 font-black text-red-400 text-xs sm:text-sm",children:[o.jsx(yg,{className:"w-5 h-5 text-red-500 shrink-0"}),o.jsx("span",{children:"❌ FATAL COGNITIVE ERROR // CONFIRMATION BIAS TRIGGERED"})]}),o.jsxs("p",{className:"text-xs leading-relaxed text-gray-300",children:["Meera ",o.jsx("span",{className:"text-red-400 font-bold underline",children:"assaulted"})," Sen at 11:47 PM, but Sen survived her strike and spoke on video at 12:03 AM! Meera was NOT in the study during the 12:13 AM blackout when the fatal smothering took place!"]}),o.jsx("button",{onClick:s,className:"text-xs font-black text-cyan-400 hover:text-cyan-300 underline cursor-pointer",children:"Click here to audit the laser printer spool and expose the real conspiracy →"})]}),i&&o.jsxs("div",{className:"p-4 rounded border border-cyan-600/80 bg-cyan-950/20 text-cyan-200 space-y-3 animate-fade-in shadow-[0_0_25px_rgba(6,182,212,0.2)]",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2 font-black text-cyan-400 text-sm",children:[o.jsx(Qs,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"INVESTIGATIVE BREAKTHROUGH: EVIDENCE 12 UNLOCKED"})]}),o.jsx("span",{className:"text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 animate-pulse",children:"+250 XP PRE-CRIME EXPOSED"})]}),o.jsxs("div",{className:"p-3.5 rounded border border-cyan-900 bg-black/80 font-mono text-xs space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-gray-800 pb-2",children:[o.jsxs("span",{className:"text-red-400 font-black flex items-center gap-1.5",children:[o.jsx(Z_,{className:"w-4 h-4"}),"THERMAL LASER SPOOL LOG: HP-LASER-STUDY"]}),o.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950 text-red-400 font-black border border-red-800",children:"11:41:22 PM (PRE-CRIME)"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-500 block",children:"DOCUMENT:"}),o.jsx("span",{className:"font-bold text-amber-300",children:'"MEERA_PATEL_INCIDENTS_SUMMARY.pdf"'})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-gray-500 block",children:"CHRONO PARADOX:"}),o.jsx("span",{className:"font-bold text-red-400",children:"Printed 6 minutes BEFORE the 11:47 PM strike!"})]})]})]}),o.jsxs("div",{className:"p-3 bg-red-950/40 border-l-4 border-red-600 rounded text-xs text-red-200",children:[o.jsx("span",{className:"font-black text-red-400 block mb-0.5",children:"⚡ THE MASTER CONSPIRACY:"}),"Someone prepared the incriminating dossier ",o.jsx("span",{className:"underline font-bold",children:"BEFORE"})," the crime occurred! Meera was targeted as the designated scapegoat from the very start."]})]})]})};function o1(t){const e=[];let n=0;const i=100;(t.attacker||"").toLowerCase().includes("meera")?(n+=20,e.push("✓ Attacker identified: Dr. Meera Patel assaulted Sen at 11:47 PM (+20 pts)")):e.push("✗ Attacker incorrect: You failed to distinguish who initiated the 11:47 PM assault."),(t.murderer||"").toLowerCase().includes("dev")?(n+=25,e.push('✓ Murderer identified: Devraj "Dev" Negi committed the actual murder at 12:15 AM (+25 pts)')):e.push("✗ Murderer incorrect: Dev took advantage of the blackout to deliver the fatal blow."),(t.blackoutCauser||"").toLowerCase().includes("kabir")?(n+=15,e.push("✓ Blackout Operator identified: Kabir Varma tripped the transformers at 12:13 AM (+15 pts)")):e.push("✗ Blackout Operator incorrect: Kabir caused the blackout, not the murderer.");const l=(t.trueDeathTime||"").toLowerCase(),c=(t.attackTime||"").toLowerCase(),d=(t.falseEvidenceTime||"").toLowerCase(),h=l.includes("12:15")||l.includes("12:14")||l.includes("blackout"),p=c.includes("11:47"),u=d.includes("11:41");h&&p?(n+=15,e.push("✓ Timeline Breakdown: Correctly separated Attack Time (11:47 PM) from Death Time (12:15 AM) (+15 pts)")):e.push("✗ Timeline Breakdown: Conflated the initial 11:47 PM assault with the 12:15 AM death."),u?(n+=5,e.push("✓ Pre-Crime Evidence Log: Noticed the 11:41 PM printer log preceding the attack (+5 pts)")):e.push("! Pre-Crime Alert: Check the printer spool timestamp (11:41 PM) showing premeditated framing.");const m=(t.aiBiggestError||"").toLowerCase();m.includes("synchroniz")||m.includes("clock")||m.includes("assum")||m.includes("frame")||m.includes("attacker")||m.includes("conflat")?(n+=20,e.push("✓ AI Flaw Exposed: Recognized that the AI blindly assumed all CCTV clocks were synchronized and conflated suspicious framing with fatal culpability (+20 pts)")):e.push("✗ AI Flaw Missed: The AI equated evidence fabrication and assault with the actual fatal moment.");const E=n>=75;return{score:n,maxScore:i,feedback:e,passed:E}}const im=({submission:t,onChangeSubmission:e,evaluated:n,score:i,feedback:r,onSetEvaluation:s,onTriggerClimax:a})=>{const[l,c]=Se.useState(!1),d=u=>{c(!0),$.playHitmarker(),$.playRadioChirp(),setTimeout(()=>{const m=o1(u);s(!0,m.score,m.feedback),c(!1),m.passed?$.playObjectiveComplete():$.playGlitchStatic(.4)},800)},h=u=>{u.preventDefault(),d(t)},p=()=>{$.playHitmarker(),$.playRadioChirp();const u={attacker:"Dr. Meera Patel",murderer:'Devraj "Dev" Negi',blackoutCauser:"Kabir Varma",attackTime:"11:47 PM",trueDeathTime:"12:15 AM (During Blackout)",finalRecordingTime:"12:03 AM",discoveryTime:"12:18 AM",falseEvidenceTime:"11:41 PM (HP Laser Spool)",aiBiggestError:"The AI assumed all CCTV hardware clocks were synchronized, ignored the 9-minute kitchen clock drift, and falsely equated Meera's 11:47 PM assault with the fatal 12:15 AM smothering."};Object.entries(u).forEach(([m,g])=>{e(m,g)}),setTimeout(()=>{d(u)},300)};return o.jsxs("div",{className:"w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(ku,{className:"w-5 h-5 text-red-500 animate-pulse"}),o.jsx("h2",{className:"text-sm md:text-base font-black text-gray-100 tracking-wider uppercase",children:"ROUND 6: THE MASTER FORENSIC MATRIX // CLIMAX READY"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-amber-400 font-bold bg-amber-950/40 px-2.5 py-1 rounded border border-amber-900/60",children:[o.jsx(_h,{className:"w-3 h-3 animate-spin"}),o.jsx("span",{children:"OBJECTIVE: ASSEMBLE TRUTH VECTOR"})]})]}),o.jsxs("div",{className:"p-3.5 rounded border border-red-900/60 bg-red-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Sh,{className:"w-4 h-4 text-red-400 shrink-0"}),o.jsx("span",{className:"text-xs text-red-200 font-serif italic font-bold",children:'"THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."'})]}),o.jsx("span",{className:"text-[10px] text-gray-500 font-mono shrink-0",children:"INDICES: 11:41 → 11:47 → 12:03 → 12:13 → 12:15"})]}),o.jsxs("div",{className:"p-3 bg-gradient-to-r from-red-950/80 via-black to-red-950/80 rounded border border-red-600 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_0_20px_rgba(229,9,20,0.3)]",children:[o.jsxs("div",{className:"text-xs text-red-200",children:[o.jsx("span",{className:"font-black text-red-400 block",children:"⚡ HIGH-SPEED TACTICAL SOLVER:"}),"Auto-inject the verified deduction matrix to dismantle the AI trap with 1 click."]}),o.jsxs("button",{type:"button",onClick:p,className:"w-full sm:w-auto px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-wider rounded transition shadow-[0_0_20px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0",children:[o.jsx(ea,{className:"w-4 h-4 fill-current"}),o.jsx("span",{children:"INJECT MASTER EXPLOIT"})]})]}),o.jsxs("form",{onSubmit:h,className:"p-4 rounded border border-gray-800 bg-black/90 space-y-4",children:[o.jsxs("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider font-black flex items-center gap-1.5 border-b border-gray-800 pb-2",children:[o.jsx(wl,{className:"w-3.5 h-3.5 text-red-500"}),o.jsx("span",{children:"TACTICAL SUSPECT & TIMELINE RECONSTRUCTION"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[o.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"1. PHYSICAL ATTACKER (11:47 PM):"}),o.jsx("input",{type:"text",value:t.attacker||"",onChange:u=>e("attacker",u.target.value),placeholder:"e.g. Dr. Meera Patel",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-200 text-xs outline-none",required:!0}),o.jsxs("div",{className:"flex gap-1.5 pt-1",children:[o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("attacker","Dr. Meera Patel")},className:"flex-1 py-1 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/80 rounded text-[10px] text-amber-300 font-bold transition cursor-pointer",children:"[ ⬡ Meera ]"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("attacker","Kabir Varma")},className:"flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer",children:"[ Kabir ]"})]})]}),o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-red-900/80 space-y-2 shadow-[0_0_10px_rgba(239,68,68,0.15)]",children:[o.jsx("label",{className:"text-red-400 font-black block uppercase text-[11px]",children:"2. TRUE MURDERER (12:15 AM):"}),o.jsx("input",{type:"text",value:t.murderer||"",onChange:u=>e("murderer",u.target.value),placeholder:"e.g. Devraj 'Dev' Negi",className:"w-full bg-black border border-red-900 focus:border-red-600 rounded px-2.5 py-1.5 text-red-200 font-black text-xs outline-none",required:!0}),o.jsxs("div",{className:"flex gap-1.5 pt-1",children:[o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("murderer",'Devraj "Dev" Negi')},className:"flex-1 py-1 bg-red-950/80 hover:bg-red-900 border border-red-700 rounded text-[10px] text-red-200 font-black transition cursor-pointer shadow-sm",children:"[ ⬡ Dev Negi ]"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("murderer","Dr. Meera Patel")},className:"flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer",children:"[ Meera ]"})]})]}),o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-gray-800 space-y-2",children:[o.jsx("label",{className:"text-gray-400 font-bold block uppercase text-[11px]",children:"3. BLACKOUT OPERATOR (12:13 AM):"}),o.jsx("input",{type:"text",value:t.blackoutCauser||"",onChange:u=>e("blackoutCauser",u.target.value),placeholder:"e.g. Kabir Varma",className:"w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-200 text-xs outline-none",required:!0}),o.jsxs("div",{className:"flex gap-1.5 pt-1",children:[o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("blackoutCauser","Kabir Varma")},className:"flex-1 py-1 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/80 rounded text-[10px] text-purple-300 font-bold transition cursor-pointer",children:"[ ⬡ Kabir ]"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("blackoutCauser","Devraj Negi")},className:"flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer",children:"[ Dev ]"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs",children:[o.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5",children:[o.jsx("label",{className:"text-[10px] text-gray-400 uppercase font-bold block",children:"PRE-CRIME PRINT:"}),o.jsx("input",{type:"text",value:t.falseEvidenceTime||"",onChange:u=>e("falseEvidenceTime",u.target.value),placeholder:"11:41 PM",className:"w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("falseEvidenceTime","11:41 PM")},className:"w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer",children:"[ ⚡ 11:41 PM ]"})]}),o.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5",children:[o.jsx("label",{className:"text-[10px] text-gray-400 uppercase font-bold block",children:"ASSAULT TIME:"}),o.jsx("input",{type:"text",value:t.attackTime||"",onChange:u=>e("attackTime",u.target.value),placeholder:"11:47 PM",className:"w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("attackTime","11:47 PM")},className:"w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer",children:"[ ⚡ 11:47 PM ]"})]}),o.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-red-900/60 space-y-1.5",children:[o.jsx("label",{className:"text-[10px] text-red-400 uppercase font-black block",children:"TRUE DEATH TIME:"}),o.jsx("input",{type:"text",value:t.trueDeathTime||"",onChange:u=>e("trueDeathTime",u.target.value),placeholder:"12:15 AM",className:"w-full bg-black border border-red-900 rounded px-2 py-1 text-xs text-red-200 font-bold outline-none"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("trueDeathTime","12:15 AM")},className:"w-full py-0.5 bg-red-950 text-red-300 text-[9px] rounded border border-red-800 cursor-pointer",children:"[ ⚡ 12:15 AM ]"})]}),o.jsxs("div",{className:"p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5",children:[o.jsx("label",{className:"text-[10px] text-gray-400 uppercase font-bold block",children:"DISCOVERY TIME:"}),o.jsx("input",{type:"text",value:t.discoveryTime||"",onChange:u=>e("discoveryTime",u.target.value),placeholder:"12:18 AM",className:"w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("discoveryTime","12:18 AM")},className:"w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer",children:"[ ⚡ 12:18 AM ]"})]})]}),o.jsxs("div",{className:"p-3 bg-[#090b12] rounded border border-cyan-950 space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("label",{className:"text-[11px] text-cyan-400 uppercase font-black tracking-wider block",children:"4. AI'S CRITICAL COGNITIVE FLAW:"}),o.jsx("button",{type:"button",onClick:()=>{$.playHitmarker(),e("aiBiggestError","The AI assumed all CCTV clocks were synchronized and conflated premeditated framing/assault with the actual fatal smothering.")},className:"text-[10px] text-cyan-400 hover:text-cyan-300 underline cursor-pointer",children:"[ ⚡ 1-Click Inject Flaw Description ]"})]}),o.jsx("textarea",{rows:2,value:t.aiBiggestError||"",onChange:u=>e("aiBiggestError",u.target.value),placeholder:"Explain why the AI produced its flawed 97.8% Meera verdict...",className:"w-full bg-black border border-gray-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-gray-200 outline-none",required:!0})]}),o.jsxs("button",{type:"submit",disabled:l,className:"w-full py-3 bg-red-800 hover:bg-red-700 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95",children:[o.jsx(t1,{className:"w-4 h-4"}),o.jsx("span",{children:l?"RUNNING FORENSIC RECONSTRUCTION MATRIX...":"EVALUATE FINAL BOSS SUBMISSION"})]})]}),n&&o.jsxs("div",{className:`p-5 rounded border space-y-4 animate-fade-in shadow-[0_0_30px_rgba(0,0,0,0.8)] ${i>=75?"border-emerald-600 bg-emerald-950/20":"border-red-700 bg-red-950/30"}`,children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[i>=75?o.jsx("div",{className:"p-2 rounded-full bg-emerald-950 border border-emerald-500",children:o.jsx(Qs,{className:"w-6 h-6 text-emerald-400"})}):o.jsx("div",{className:"p-2 rounded-full bg-red-950 border border-red-500",children:o.jsx(yg,{className:"w-6 h-6 text-red-500"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-base font-black text-gray-100 uppercase tracking-wider",children:i>=75?"TRUTH FULLY RECONSTRUCTED":"INCOMPLETE RECONSTRUCTION"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Passing Threshold: 75 / 100"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-3xl font-black font-mono tracking-wider text-emerald-400",children:i}),o.jsx("span",{className:"text-xs text-gray-500 font-mono",children:" / 100"}),i>=75&&o.jsx("div",{className:"text-[10px] text-emerald-400 font-bold uppercase animate-pulse",children:"+500 XP CASE SOLVED"})]})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:r.map((u,m)=>o.jsx("div",{className:`p-2.5 rounded font-mono text-[11px] ${u.startsWith("✓")?"bg-emerald-950/60 text-emerald-300 border border-emerald-900":u.startsWith("!")?"bg-amber-950/60 text-amber-300 border border-amber-900":"bg-red-950/60 text-red-300 border border-red-900"}`,children:u},m))}),i>=75&&o.jsxs("div",{className:"pt-4 border-t border-gray-800 text-center space-y-3",children:[o.jsx("p",{className:"text-xs text-emerald-300 font-bold tracking-widest uppercase",children:"THE HOUSE HAS SURRENDERED ITS FINAL MEMORY."}),o.jsxs("button",{onClick:a,className:"w-full sm:w-auto px-10 py-3.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_35px_rgba(229,9,20,0.8)] animate-pulse cursor-pointer flex items-center justify-center gap-2 mx-auto",children:[o.jsx(W_,{className:"w-4 h-4"}),o.jsx("span",{children:"TRIGGER 60-SECOND HORROR CLIMAX REVEAL ▶"})]})]})]})]})},l1=({onResetGame:t})=>{const[e,n]=Se.useState(0);return Se.useEffect(()=>{$.playBlackout();const i=setTimeout(()=>{$.playTick(!0),n(1)},3500),r=setTimeout(()=>{$.playGlitchStatic(.6),$.playTick(!0),n(2)},9e3),s=setTimeout(()=>{$.playGlitchStatic(.4),n(3)},13500),a=setTimeout(()=>{$.playGlitchStatic(.4),n(4)},18e3),l=setTimeout(()=>{$.playGlitchStatic(.4),n(5)},22500),c=setTimeout(()=>{$.playGlitchStatic(.4),n(6)},27e3),d=setTimeout(()=>{$.playHorrorStinger(),n(7)},32e3),h=setTimeout(()=>{n(8)},39e3),p=setTimeout(()=>{$.playGlitchStatic(.5),n(9)},45e3),u=setTimeout(()=>{$.playHorrorStinger(),n(10)},51e3);return()=>{[i,r,s,a,l,c,d,h,p,u].forEach(clearTimeout)}},[]),o.jsxs("div",{className:"fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden crt-overlay crt-vignette font-mono",children:[e===0&&o.jsxs("div",{className:"text-center space-y-6 animate-pulse",children:[o.jsx("span",{className:"text-8xl text-red-900 block font-black",children:"·"}),o.jsx("p",{className:"text-xs text-gray-700 uppercase tracking-widest",children:"BLACKOUT PROTOCOL INITIATED..."})]}),e===1&&o.jsxs("div",{className:"space-y-4 text-center",children:[o.jsx("div",{className:"text-5xl md:text-7xl font-bold tracking-widest text-red-500 animate-pulse",children:"11:47 PM"}),o.jsx("div",{className:"text-4xl text-gray-600",children:"12:03 AM"}),o.jsx("div",{className:"text-4xl text-gray-700",children:"12:13 AM"}),o.jsx("div",{className:"text-4xl text-gray-800",children:"12:17 AM"})]}),e===2&&o.jsxs("div",{className:"space-y-4 text-center",children:[o.jsx("div",{className:"text-xs text-red-500 uppercase tracking-widest font-bold",children:"THE TIME THAT TRULY MATTERED:"}),o.jsx("div",{className:"text-7xl md:text-9xl font-black text-red-600 tracking-tighter filter drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-bounce",children:"12:15 AM"}),o.jsx("p",{className:"text-sm text-gray-400 uppercase tracking-widest",children:"(The moment of death in total darkness)"})]}),e===3&&o.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[o.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-red-700 bg-red-950/40 flex items-center justify-center text-4xl font-bold text-red-300",children:"M"}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"DR. MEERA PATEL"}),o.jsx("div",{className:"text-2xl md:text-3xl font-black text-red-500 tracking-widest uppercase",children:"SHE ATTACKED HIM."}),o.jsx("p",{className:"text-xs text-gray-400",children:"Confronted Sen at 11:47 PM. Believed she killed him. Fled the room."})]}),e===4&&o.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[o.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-amber-600 bg-amber-950/40 flex items-center justify-center text-4xl font-bold text-amber-300",children:"K"}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"KABIR VARMA"}),o.jsx("div",{className:"text-2xl md:text-3xl font-black text-amber-400 tracking-widest uppercase",children:"HE CAUSED THE BLACKOUT."}),o.jsx("p",{className:"text-xs text-gray-400",children:"Overloaded the transformer at 12:13 AM to wipe security telemetry."})]}),e===5&&o.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[o.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-cyan-600 bg-cyan-950/40 flex items-center justify-center text-4xl font-bold text-cyan-300",children:"R"}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"RIYA SHARMA"}),o.jsx("div",{className:"text-2xl md:text-3xl font-black text-cyan-400 tracking-widest uppercase",children:"SHE KNEW THE TRUTH."}),o.jsx("p",{className:"text-xs text-gray-400",children:"Planted wiretaps to extort Sen over the historic cover-up."})]}),e===6&&o.jsxs("div",{className:"text-center space-y-6 animate-glitch",children:[o.jsx("div",{className:"w-32 h-32 mx-auto rounded-full border-4 border-purple-600 bg-purple-950/40 flex items-center justify-center text-4xl font-bold text-purple-300",children:"A"}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-100",children:"AARAV MEHTA"}),o.jsx("div",{className:"text-2xl md:text-3xl font-black text-purple-400 tracking-widest uppercase",children:"HE STOLE THE EVIDENCE."}),o.jsx("p",{className:"text-xs text-gray-400",children:"Slipped into the East Wing at 11:47 PM to steal Blackwood's research journals."})]}),e===7&&o.jsxs("div",{className:"text-center space-y-8 animate-fade-in",children:[o.jsx("div",{className:"w-36 h-36 mx-auto rounded-full border-4 border-red-500 bg-black flex items-center justify-center text-5xl font-black text-red-500 shadow-[0_0_50px_rgba(255,0,0,0.8)]",children:"DEV"}),o.jsx("h2",{className:"text-4xl md:text-5xl font-black text-gray-100 tracking-tight",children:"DEVRAJ NEGI"}),o.jsx("div",{className:"text-3xl md:text-5xl font-black text-red-600 tracking-widest uppercase glitch-text","data-text":"HE WAITED.",children:"HE WAITED."}),o.jsx("p",{className:"text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed",children:"Twenty years ago, Professor Sen covered up the experiment that killed Dev's child. Dev didn't plan to kill Sen that night—until he found Sen wounded. During the blackout, Dev used the servant passage to end his life at 12:15 AM."})]}),e===8&&o.jsxs("div",{className:"text-center space-y-4 animate-fade-in",children:[o.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-gray-100 tracking-widest uppercase",children:"YOU SOLVED THE MURDER."}),o.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-wider",children:"All layers decrypted. All cognitive traps dismantled."})]}),e===9&&o.jsx("div",{className:"text-center space-y-6 animate-pulse",children:o.jsx("h2",{className:"text-3xl md:text-5xl font-black text-red-500 tracking-widest uppercase",children:"BUT WHO KILLED THE FIRST VICTIM?"})}),e===10&&o.jsxs("div",{className:"max-w-2xl text-center space-y-6 p-8 border border-red-900/80 bg-black/90 rounded-lg shadow-[0_0_50px_rgba(139,0,0,0.5)]",children:[o.jsx("div",{className:"text-xs text-red-500 font-bold tracking-widest uppercase",children:"BLACKWOOD ARCHIVES • CASE FILE 01-A"}),o.jsx("div",{className:"text-4xl md:text-5xl font-black text-gray-100 font-serif",children:"PROFESSOR BLACKWOOD"}),o.jsx("p",{className:"text-lg md:text-xl font-bold text-red-400 uppercase tracking-wider",children:"THE MURDER YOU JUST SOLVED WAS NOT THE FIRST ONE."}),o.jsx("div",{className:"p-4 bg-red-950/30 border border-red-900/60 rounded text-xs text-gray-300 leading-relaxed font-mono",children:"Twenty years ago, Professor Blackwood discovered the truth about the forbidden experiments. He vanished into the foundation walls of this very house. Some say the clocks didn't stop ticking when Sen died—they stopped when Blackwood was buried."}),o.jsx("div",{className:"pt-4",children:o.jsxs("button",{onClick:t,className:"px-6 py-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-200 font-bold text-xs uppercase tracking-wider rounded transition flex items-center gap-2 mx-auto",children:[o.jsx(xg,{className:"w-4 h-4"}),"RESET INVESTIGATION TERMINAL"]})})]})]})},c1=({isOpen:t,onClose:e,currentRound:n,onSelectRound:i,timeRemaining:r,onAdjustTime:s,onUnlockAllLocks:a,onUnlockPrinterLog:l,onUnlockHiddenVideo:c,onTriggerBlackout:d,onTriggerClimax:h,onResetGame:p,onAutoSolveAll:u})=>t?o.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-mono select-none",children:o.jsxs("div",{className:"w-full max-w-2xl bg-[#0e0e14] border-2 border-red-800 rounded-lg p-6 shadow-[0_0_60px_rgba(229,9,20,0.4)] max-h-[90vh] overflow-y-auto crt-overlay text-gray-200",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-5",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(gg,{className:"w-5 h-5 text-red-500"}),o.jsx("h2",{className:"text-base font-bold text-gray-100 uppercase tracking-wider",children:"GAME MASTER / FACILITATOR OVERRIDE HUD"})]}),o.jsx("button",{onClick:e,className:"p-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition cursor-pointer",children:o.jsx(i1,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"p-4 rounded border-2 border-amber-600/80 bg-gradient-to-r from-amber-950/40 via-black to-red-950/40 mb-6 space-y-3 shadow-[0_0_25px_rgba(245,158,11,0.2)]",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2",children:[o.jsx(ea,{className:"w-4 h-4 text-amber-400 fill-amber-400 animate-pulse"}),"JUDGE & EVALUATOR SHORTCUTS (1-CLICK SPEEDRUN):"]}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-bold",children:"SPEEDRUN TOOLS"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[u&&o.jsxs("button",{type:"button",onClick:()=>{u(),e()},className:"p-3 rounded bg-amber-950/70 hover:bg-amber-900 border border-amber-500 text-amber-200 font-black transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95",children:[o.jsx(Qs,{className:"w-4 h-4 text-amber-400 shrink-0"}),o.jsxs("div",{className:"text-left",children:[o.jsx("span",{className:"block text-[11px]",children:"⚡ AUTO-SOLVE ENTIRE CASE"}),o.jsx("span",{className:"text-[9px] text-amber-300 font-normal",children:"Unlocks all clues, solves 100/100 matrix"})]})]}),o.jsxs("button",{type:"button",onClick:()=>{e(),h()},className:"p-3 rounded bg-red-950/80 hover:bg-red-900 border border-red-600 text-red-200 font-black transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95",children:[o.jsx(ku,{className:"w-4 h-4 text-red-400 shrink-0"}),o.jsxs("div",{className:"text-left",children:[o.jsx("span",{className:"block text-[11px]",children:"🔥 LAUNCH 60-SEC CLIMAX"}),o.jsx("span",{className:"text-[9px] text-red-300 font-normal",children:"Plays blackout & full epilogue reveal"})]})]})]})]}),o.jsxs("div",{className:"space-y-2 mb-6",children:[o.jsx("span",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider block",children:"JUMP TO ROUND BENCHMARK:"}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",children:[{id:0,label:"0. Arrival (Intro)"},{id:1,label:"1. First Lie"},{id:2,label:"2. Five Locks"},{id:3,label:"3. AI Trap"},{id:4,label:"4. Dead Man"},{id:5,label:"5. False Culprit"},{id:6,label:"6. Final Boss"}].map(m=>o.jsx("button",{onClick:()=>{i(m.id),$.playTick(!1)},className:`px-3 py-2 rounded text-left transition font-semibold ${n===m.id?"bg-red-800 text-white border border-red-500 shadow-[0_0_10px_rgba(229,9,20,0.5)]":"bg-black/60 border border-gray-800 text-gray-400 hover:text-gray-100 hover:border-gray-700"}`,children:m.label},m.id))})]}),o.jsxs("div",{className:"p-4 rounded border border-gray-800 bg-black/50 space-y-3 mb-6",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5",children:[o.jsx($r,{className:"w-4 h-4 text-amber-400"}),"SESSION TIMER ADJUSTMENT:"]}),o.jsxs("span",{className:"text-sm font-bold text-amber-300",children:[Math.floor(r/60),"m ",r%60,"s remaining"]})]}),o.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[o.jsx("button",{onClick:()=>s(-300),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"-5 Minutes"}),o.jsx("button",{onClick:()=>s(-60),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"-1 Minute"}),o.jsx("button",{onClick:()=>s(60),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"+1 Minute"}),o.jsx("button",{onClick:()=>s(300),className:"px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition",children:"+5 Minutes"})]})]}),o.jsxs("div",{className:"space-y-3 mb-6",children:[o.jsx("span",{className:"text-xs text-gray-400 font-bold uppercase tracking-wider block",children:"ROOM OVERRIDES & SFX TRIGGERS:"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[o.jsxs("button",{onClick:()=>{a(),$.playHorrorStinger()},className:"p-3 rounded border border-gray-800 bg-black/60 hover:border-emerald-700 text-left text-gray-300 hover:text-emerald-300 transition flex items-center gap-2",children:[o.jsx(Uu,{className:"w-4 h-4 text-emerald-400 shrink-0"}),o.jsx("span",{children:"Unlock All 5 Suspect Locks"})]}),o.jsxs("button",{onClick:()=>{l(),$.playTick(!0)},className:"p-3 rounded border border-gray-800 bg-black/60 hover:border-cyan-700 text-left text-gray-300 hover:text-cyan-300 transition flex items-center gap-2",children:[o.jsx(Qs,{className:"w-4 h-4 text-cyan-400 shrink-0"}),o.jsx("span",{children:"Force Unlock 11:41 PM Printer Log"})]}),o.jsxs("button",{onClick:()=>{d(),$.playBlackout()},className:"p-3 rounded border border-gray-800 bg-black/60 hover:border-amber-700 text-left text-gray-300 hover:text-amber-300 transition flex items-center gap-2",children:[o.jsx(ea,{className:"w-4 h-4 text-amber-400 shrink-0"}),o.jsx("span",{children:"Trigger Blackout SFX & Lights Out"})]}),o.jsxs("button",{onClick:()=>{e(),h()},className:"p-3 rounded border border-red-900 bg-red-950/40 hover:bg-red-950 text-left text-red-200 transition flex items-center gap-2",children:[o.jsx(ku,{className:"w-4 h-4 text-red-500 shrink-0"}),o.jsx("span",{children:"Launch 60-Sec Horror Climax Reveal"})]})]})]}),o.jsxs("div",{className:"p-4 rounded border border-red-950 bg-black/80 text-xs space-y-1.5 text-gray-400 mb-5",children:[o.jsx("p",{className:"text-red-400 font-bold uppercase text-[10px] tracking-wider mb-2",children:"FACILITATOR CHEAT SHEET:"}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"text-gray-200 font-semibold",children:"11:41 PM:"})," Pre-crime fake evidence printed to frame Meera."]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"text-gray-200 font-semibold",children:"11:47 PM:"})," Meera attacks Sen; Sen survives wounded."]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"text-gray-200 font-semibold",children:"12:03 AM:"}),` Sen records video ("Killer isn't who you suspect").`]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"text-gray-200 font-semibold",children:"12:13 AM:"})," Kabir triggers power cut (blackout)."]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"text-red-400 font-bold",children:"12:15 AM:"})," Dev slips in via servant passage and kills Sen."]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"text-cyan-400 font-semibold",children:"AI Flaw:"})," Assumed CCTV clocks were synchronized."]})]}),o.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-gray-800",children:[o.jsxs("button",{onClick:()=>{confirm("Reset investigation back to beginning?")&&(p(),e())},className:"flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition",children:[o.jsx(xg,{className:"w-3.5 h-3.5"}),"Reset Entire Session"]}),o.jsx("button",{onClick:e,className:"px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded transition uppercase",children:"CLOSE HUD"})]})]})}):null,d1=({isOpen:t,fromRound:e,toRound:n,title:i,discovery:r,nextObjective:s,onProceed:a})=>t?o.jsx("div",{className:"fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none font-mono animate-fade-in crt-overlay",children:o.jsxs("div",{className:"w-full max-w-xl bg-[#0d090c] border-2 border-red-700 rounded-lg p-6 shadow-[0_0_60px_rgba(229,9,20,0.6)] space-y-5 text-gray-200",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-red-950",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Js,{className:"w-5 h-5 text-red-500 animate-pulse"}),o.jsx("span",{className:"text-xs font-bold text-red-500 uppercase tracking-widest",children:"INVESTIGATION MILESTONE UNLOCKED"})]}),o.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-red-950 border border-red-800 text-red-300 font-bold",children:["ROUND ",e," ➔ ROUND ",n]})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl font-bold text-gray-100 tracking-wide uppercase font-serif",children:i}),o.jsx("p",{className:"text-xs text-red-400/90 font-semibold mt-1",children:"Forensic Linkage Established"})]}),o.jsxs("div",{className:"p-4 rounded border border-red-900/60 bg-red-950/20 space-y-2",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-red-400 font-bold uppercase tracking-wider",children:[o.jsx(fo,{className:"w-4 h-4 text-red-400"}),"CRITICAL TRUTH EXPOSED:"]}),o.jsx("p",{className:"text-xs md:text-sm text-gray-200 leading-relaxed font-mono",children:r})]}),o.jsxs("div",{className:"p-3 bg-black/60 rounded border border-gray-800 space-y-1",children:[o.jsx("span",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-wider block",children:"HOW THIS LEADS TO THE NEXT LAYER:"}),o.jsx("p",{className:"text-xs text-amber-300/90 font-mono leading-relaxed",children:s})]}),o.jsxs("button",{onClick:()=>{$.playHorrorStinger(),a()},className:"cursor-pointer w-full py-3.5 bg-red-800 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2",children:[o.jsxs("span",{children:["PROCEED TO ROUND ",n]}),o.jsx(z_,{className:"w-4 h-4"})]})]})}):null,u1=({currentRound:t,suspectLocks:e,audioRevealedSecret:n,reasoningInspected:i,hiddenVideoUnlocked:r,printerLogUnlocked:s,finalEvaluated:a})=>{const l=Object.values(e).every(Boolean);return o.jsxs("div",{className:"w-full bg-[#16120e] border-4 border-[#3d2817] rounded-lg p-6 shadow-[inset_0_0_80px_rgba(0,0,0,0.9),0_10px_40px_rgba(0,0,0,0.8)] font-mono select-none relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(#8b5a2b 1px, transparent 0)",backgroundSize:"12px 12px"}}),o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b-2 border-[#4a321d] mb-6 relative z-10",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Du,{className:"w-5 h-5 text-red-500 fill-red-500 animate-pulse"}),o.jsx("h2",{className:"text-base md:text-lg font-bold text-[#e6d5be] tracking-wider uppercase",children:"BLACKWOOD HOMICIDE CONSPIRACY WALL — RED THREAD AUDIT"})]}),o.jsx("span",{className:"text-xs text-[#a88d6e] bg-[#22170f] px-3 py-1 rounded border border-[#4a321d]",children:t>=6?"ALL FORENSIC STRINGS LINKED":"TRACING CAUSALITY NETWORK"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"p-3.5 bg-[#f5ebd7] text-[#1c130b] rounded shadow-md transform -rotate-1 border-t-8 border-red-800",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-red-950 mb-1",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx($r,{className:"w-3.5 h-3.5"})," EAST CLOCK (11:47)"]}),o.jsx("span",{className:"text-[10px] px-1 bg-red-200 rounded",children:"FIXED FACE"})]}),o.jsx("p",{className:"text-[11px] leading-tight text-gray-800",children:"Arrested with graphite sliver. Pendulum was stopped intentionally before midnight."})]}),o.jsxs("div",{className:`p-3.5 rounded shadow-md transform rotate-1 border-t-8 transition ${n?"bg-[#f5ebd7] text-[#1c130b] border-amber-800":"bg-[#3b3229] text-gray-500 border-gray-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-bold mb-1",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(Bi,{className:"w-3.5 h-3.5"})," REEL TAPE #4"]}),o.jsx("span",{className:"text-[10px]",children:n?"SUB-BASS LINK":"LOCKED"})]}),o.jsx("p",{className:"text-[11px] leading-tight",children:n?'REVEALED: "Someone started BEFORE the house stopped" (Attack occurred prior to 12:13 blackout).':"Scrub tape at 0.5x speed in Round 1 to decode hidden frequency."})]}),o.jsxs("div",{className:`p-3.5 rounded shadow-md transform -rotate-2 border-t-8 transition ${s?"bg-[#f5ebd7] text-[#1c130b] border-red-700 animate-pulse":"bg-[#3b3229] text-gray-500 border-gray-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-bold mb-1",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(Gr,{className:"w-3.5 h-3.5"})," 11:41 PM SPOOL"]}),o.jsx("span",{className:"text-[10px]",children:s?"CRITICAL LINK":"UNSEAL IN R5"})]}),o.jsx("p",{className:"text-[11px] leading-tight",children:s?"SMOKING GUN: Meera was framed 6 minutes BEFORE she confronted Sen!":"Challenge AI in Round 5 to expose evidence fabrication."})]})]}),o.jsxs("div",{className:"flex flex-col justify-between space-y-4",children:[o.jsxs("div",{className:"p-4 bg-[#f8f1e0] text-[#1c130b] rounded-lg shadow-xl border-4 border-red-900 transform rotate-0 text-center relative",children:[o.jsx("div",{className:"w-3 h-3 rounded-full bg-red-700 shadow mx-auto -mt-6 mb-2 border border-white"}),o.jsx("span",{className:"text-[10px] font-bold text-red-700 uppercase tracking-widest block",children:"CENTRAL VICTIM"}),o.jsx("h3",{className:"text-base font-black tracking-wide text-gray-950 font-serif",children:"PROFESSOR VIKRAM SEN"}),o.jsx("p",{className:"text-[11px] text-red-900 font-bold mt-0.5",children:"STATUS: DECEASED IN STUDY 17-B"}),o.jsxs("div",{className:"mt-3 pt-2 border-t border-gray-300 text-[10px] text-left space-y-1 text-gray-800",children:[o.jsxs("p",{children:["• ",o.jsx("span",{className:"font-bold",children:"11:47 PM:"})," Struck by brass paperweight (survived wounded)"]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"font-bold",children:"12:03 AM:"})," Alive & recorded final webcam video"]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"font-bold text-red-700",children:"12:15 AM:"})," Smothered during blackout"]}),o.jsxs("p",{children:["• ",o.jsx("span",{className:"font-bold",children:"12:18 AM:"})," Body discovered by team"]})]})]}),o.jsxs("div",{className:"p-3 bg-[#241910] border border-[#523821] rounded text-center text-xs space-y-1 text-[#e0cfb8]",children:[o.jsx("span",{className:"text-red-400 font-bold uppercase tracking-widest text-[10px] block",children:"CAUSAL PROGRESSION"}),o.jsxs("div",{className:"flex items-center justify-center gap-1 text-[11px]",children:[o.jsx("span",{className:n?"text-emerald-400":"text-gray-500",children:"R1 Tape"})," ➔",o.jsx("span",{className:l?"text-emerald-400":"text-gray-500",children:"R2 Locks"})," ➔",o.jsx("span",{className:i?"text-emerald-400":"text-gray-500",children:"R3 AI Trap"})," ➔",o.jsx("span",{className:r?"text-emerald-400":"text-gray-500",children:"R4 Video"})," ➔",o.jsx("span",{className:s?"text-emerald-400":"text-gray-500",children:"R5 Pre-Crime"})," ➔",o.jsx("span",{className:a?"text-emerald-400":"text-gray-500",children:"R6 Climax"})]})]})]}),o.jsx("div",{className:"space-y-3",children:[{id:"meera",name:"Dr. Meera Patel",crime:"11:47 PM Assault with paperweight (Sen survived)"},{id:"dev",name:'Devraj "Dev" Negi',crime:"12:15 AM Murder via secret servant passage"},{id:"kabir",name:"Kabir Varma",crime:"12:13 AM Transformer overload & blackout"},{id:"riya",name:"Riya Sharma",crime:"Planted directional wiretaps for extortion"},{id:"aarav",name:"Aarav Mehta",crime:"Stole Blackwood 20-yr experiment logs"}].map(c=>{const d=e[c.id];return o.jsxs("div",{className:`p-2.5 rounded shadow border-l-4 transition ${d?c.id==="dev"?"bg-[#f5ebd7] text-[#1c130b] border-red-600":"bg-[#f5ebd7] text-[#1c130b] border-emerald-700":"bg-[#2b221a] text-gray-500 border-gray-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[o.jsx("span",{children:c.name}),o.jsx("span",{className:"text-[10px]",children:d?"IDENTIFIED":"UNVERIFIED"})]}),o.jsx("p",{className:"text-[10px] text-gray-700 mt-0.5",children:d?c.crime:"Disarm suspect lock in Round 2 to expose non-murder motive."})]},c.id)})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="186",f1=0,rm=1,h1=2,Al=1,_g=2,La=3,Zr=0,wn=1,ri=2,Hi=0,Ga=1,sm=2,am=3,om=4,p1=5,bs=100,m1=101,x1=102,g1=103,v1=104,y1=200,_1=201,S1=202,b1=203,Sg=204,bg=205,M1=206,E1=207,T1=208,w1=209,A1=210,C1=211,N1=212,R1=213,P1=214,Ou=0,Fu=1,Bu=2,ho=3,zu=4,Vu=5,Hu=6,ju=7,Mg=0,I1=1,L1=2,Ei=0,Eg=1,Tg=2,wg=3,Ag=4,Cg=5,Ng=6,Rg=7,Pg=300,Qr=301,ta=302,sd=303,ad=304,wc=306,Br=1e3,zi=1001,Gu=1002,qt=1003,D1=1004,Go=1005,Kt=1006,od=1007,zr=1008,In=1009,Ig=1010,Lg=1011,po=1012,Mh=1013,wi=1014,_i=1015,Ai=1016,Eh=1017,Th=1018,mo=1020,Dg=35902,kg=35899,Ug=1021,Og=1022,ai=1023,qi=1026,Vr=1027,Fg=1028,wh=1029,Jr=1030,Ah=1031,Ch=1033,Cl=33776,Nl=33777,Rl=33778,Pl=33779,Wu=35840,Xu=35841,Yu=35842,qu=35843,Ku=36196,$u=37492,Zu=37496,Qu=37488,Ju=37489,ic=37490,ef=37491,tf=37808,nf=37809,rf=37810,sf=37811,af=37812,of=37813,lf=37814,cf=37815,df=37816,uf=37817,ff=37818,hf=37819,pf=37820,mf=37821,xf=36492,gf=36494,vf=36495,yf=36283,_f=36284,rc=36285,Sf=36286,k1=3200,bf=0,U1=1,ur="",Hn="srgb",sc="srgb-linear",ac="linear",pt="srgb",ld=7680,O1=519,F1=512,B1=513,z1=514,Nh=515,V1=516,H1=517,Rh=518,j1=519,G1=35044,lm="300 es",Si=2e3,xo=2001;function W1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function X1(){const t=oc("canvas");return t.style.display="block",t}const cm={};function dm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Bg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=Bg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=Bg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function js(...t){const e=t.join(" ");e in cm||(cm[e]=!0,ze(...t))}function Y1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const q1={[Ou]:Fu,[Bu]:Hu,[zu]:ju,[ho]:Vu,[Fu]:Ou,[Hu]:Bu,[ju]:zu,[Vu]:ho};class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,lc=180/Math.PI;function Mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function K1(t,e){return(t%e+e)%e}function dd(t,e,n){return(1-n)*t+n*e}function ba(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Uh=class Uh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uh.prototype.isVector2=!0;let tt=Uh;class aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],d=i[r+1],h=i[r+2],p=i[r+3],u=s[a+0],m=s[a+1],g=s[a+2],E=s[a+3];if(p!==E||c!==u||d!==m||h!==g){let x=c*u+d*m+h*g+p*E;x<0&&(u=-u,m=-m,g=-g,E=-E,x=-x);let f=1-l;if(x<.9995){const v=Math.acos(x),T=Math.sin(v);f=Math.sin(f*v)/T,l=Math.sin(l*v)/T,c=c*f+u*l,d=d*f+m*l,h=h*f+g*l,p=p*f+E*l}else{c=c*f+u*l,d=d*f+m*l,h=h*f+g*l,p=p*f+E*l;const v=1/Math.sqrt(c*c+d*d+h*h+p*p);c*=v,d*=v,h*=v,p*=v}}e[n]=c,e[n+1]=d,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],d=i[r+2],h=i[r+3],p=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[n]=l*g+h*p+c*m-d*u,e[n+1]=c*g+h*u+d*p-l*m,e[n+2]=d*g+h*m+l*u-c*p,e[n+3]=h*g-l*p-c*u-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,d=l(i/2),h=l(r/2),p=l(s/2),u=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*p+d*m*g,this._y=d*m*p-u*h*g,this._z=d*h*g+u*m*p,this._w=d*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+d*m*g,this._y=d*m*p-u*h*g,this._z=d*h*g-u*m*p,this._w=d*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-d*m*g,this._y=d*m*p+u*h*g,this._z=d*h*g+u*m*p,this._w=d*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-d*m*g,this._y=d*m*p+u*h*g,this._z=d*h*g-u*m*p,this._w=d*h*p+u*m*g;break;case"YZX":this._x=u*h*p+d*m*g,this._y=d*m*p+u*h*g,this._z=d*h*g-u*m*p,this._w=d*h*p-u*m*g;break;case"XZY":this._x=u*h*p-d*m*g,this._y=d*m*p-u*h*g,this._z=d*h*g+u*m*p,this._w=d*h*p+u*m*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],d=n[2],h=n[6],p=n[10],u=i+l+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-d)*m,this._z=(a-r)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+d)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(s-d)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(a-r)/m,this._x=(s+d)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,d=n._z,h=n._w;return this._x=i*h+a*l+r*d-s*c,this._y=r*h+a*c+s*l-i*d,this._z=s*h+a*d+i*c-r*l,this._w=a*h-i*l-r*c-s*d,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const d=Math.acos(l),h=Math.sin(d);c=Math.sin(c*d)/h,n=Math.sin(n*d)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oh=class Oh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,d=2*(a*r-l*i),h=2*(l*n-s*r),p=2*(s*i-a*n);return this.x=n+c*d+a*p-l*h,this.y=i+c*h+l*d-s*p,this.z=r+c*p+s*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oh.prototype.isVector3=!0;let W=Oh;const ud=new W,um=new aa,Fh=class Fh{constructor(e,n,i,r,s,a,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d)}set(e,n,i,r,s,a,l,c,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],d=i[1],h=i[4],p=i[7],u=i[2],m=i[5],g=i[8],E=r[0],x=r[3],f=r[6],v=r[1],T=r[4],S=r[7],b=r[2],w=r[5],C=r[8];return s[0]=a*E+l*v+c*b,s[3]=a*x+l*T+c*w,s[6]=a*f+l*S+c*C,s[1]=d*E+h*v+p*b,s[4]=d*x+h*T+p*w,s[7]=d*f+h*S+p*C,s[2]=u*E+m*v+g*b,s[5]=u*x+m*T+g*w,s[8]=u*f+m*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8];return n*a*h-n*l*d-i*s*h+i*l*c+r*s*d-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8],p=h*a-l*d,u=l*c-h*s,m=d*s-a*c,g=n*p+i*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=p*E,e[1]=(r*d-h*i)*E,e[2]=(l*i-r*a)*E,e[3]=u*E,e[4]=(h*n-r*c)*E,e[5]=(r*s-l*n)*E,e[6]=m*E,e[7]=(i*c-d*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),d=Math.sin(s);return this.set(i*c,i*d,-i*(c*a+d*l)+a+e,-r*d,r*c,-r*(-d*a+c*l)+l+n,0,0,1),this}scale(e,n){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fd.makeScale(e,n)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fd.makeRotation(-e)),this}translate(e,n){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;let He=Fh;const fd=new He,fm=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $1(){const t={enabled:!0,workingColorSpace:sc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?ac:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[sc]:{primaries:e,whitePoint:i,transfer:ac,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const Qe=$1();function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class Z1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=oc("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q1=0;class Ph{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(hd(r[a].image)):s.push(hd(r[a]))}else s=hd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let J1=0;const pd=new W;class ln extends ns{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=zi,r=zi,s=Kt,a=zr,l=ai,c=In,d=ln.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Mo(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Pg;ln.DEFAULT_ANISOTROPY=1;const Bh=class Bh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,d=c[0],h=c[4],p=c[8],u=c[1],m=c[5],g=c[9],E=c[2],x=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(g+x)<.1&&Math.abs(d+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(d+1)/2,S=(m+1)/2,b=(f+1)/2,w=(h+u)/4,C=(p+E)/4,y=(g+x)/4;return T>S&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-g)*(x-g)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(p-E)/v,this.z=(u-h)/v,this.w=Math.acos((d+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bh.prototype.isVector4=!0;let Ct=Bh;class eS extends ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ph(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends eS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zg extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const cc=class cc{constructor(e,n,i,r,s,a,l,c,d,h,p,u,m,g,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,d,h,p,u,m,g,E,x)}set(e,n,i,r,s,a,l,c,d,h,p,u,m,g,E,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=l,f[13]=c,f[2]=d,f[6]=h,f[10]=p,f[14]=u,f[3]=m,f[7]=g,f[11]=E,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*p,g=l*h,E=l*p;n[0]=c*h,n[4]=-c*p,n[8]=d,n[1]=m+g*d,n[5]=u-E*d,n[9]=-l*c,n[2]=E-u*d,n[6]=g+m*d,n[10]=a*c}else if(e.order==="YXZ"){const u=c*h,m=c*p,g=d*h,E=d*p;n[0]=u+E*l,n[4]=g*l-m,n[8]=a*d,n[1]=a*p,n[5]=a*h,n[9]=-l,n[2]=m*l-g,n[6]=E+u*l,n[10]=a*c}else if(e.order==="ZXY"){const u=c*h,m=c*p,g=d*h,E=d*p;n[0]=u-E*l,n[4]=-a*p,n[8]=g+m*l,n[1]=m+g*l,n[5]=a*h,n[9]=E-u*l,n[2]=-a*d,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const u=a*h,m=a*p,g=l*h,E=l*p;n[0]=c*h,n[4]=g*d-m,n[8]=u*d+E,n[1]=c*p,n[5]=E*d+u,n[9]=m*d-g,n[2]=-d,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*d,g=l*c,E=l*d;n[0]=c*h,n[4]=E-u*p,n[8]=g*p+m,n[1]=p,n[5]=a*h,n[9]=-l*h,n[2]=-d*h,n[6]=m*p+g,n[10]=u-E*p}else if(e.order==="XZY"){const u=a*c,m=a*d,g=l*c,E=l*d;n[0]=c*h,n[4]=-p,n[8]=d*h,n[1]=u*p+E,n[5]=a*h,n[9]=m*p-g,n[2]=g*p-m,n[6]=l*h,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nS,e,iS)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),tr.crossVectors(i,Cn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),tr.crossVectors(i,Cn)),tr.normalize(),Wo.crossVectors(Cn,tr),r[0]=tr.x,r[4]=Wo.x,r[8]=Cn.x,r[1]=tr.y,r[5]=Wo.y,r[9]=Cn.y,r[2]=tr.z,r[6]=Wo.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],d=i[12],h=i[1],p=i[5],u=i[9],m=i[13],g=i[2],E=i[6],x=i[10],f=i[14],v=i[3],T=i[7],S=i[11],b=i[15],w=r[0],C=r[4],y=r[8],A=r[12],I=r[1],P=r[5],R=r[9],F=r[13],U=r[2],k=r[6],Z=r[10],q=r[14],H=r[3],B=r[7],X=r[11],Q=r[15];return s[0]=a*w+l*I+c*U+d*H,s[4]=a*C+l*P+c*k+d*B,s[8]=a*y+l*R+c*Z+d*X,s[12]=a*A+l*F+c*q+d*Q,s[1]=h*w+p*I+u*U+m*H,s[5]=h*C+p*P+u*k+m*B,s[9]=h*y+p*R+u*Z+m*X,s[13]=h*A+p*F+u*q+m*Q,s[2]=g*w+E*I+x*U+f*H,s[6]=g*C+E*P+x*k+f*B,s[10]=g*y+E*R+x*Z+f*X,s[14]=g*A+E*F+x*q+f*Q,s[3]=v*w+T*I+S*U+b*H,s[7]=v*C+T*P+S*k+b*B,s[11]=v*y+T*R+S*Z+b*X,s[15]=v*A+T*F+S*q+b*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],d=e[13],h=e[2],p=e[6],u=e[10],m=e[14],g=e[3],E=e[7],x=e[11],f=e[15],v=c*m-d*u,T=l*m-d*p,S=l*u-c*p,b=a*m-d*h,w=a*u-c*h,C=a*p-l*h;return n*(E*v-x*T+f*S)-i*(g*v-x*b+f*w)+r*(g*T-E*b+f*C)-s*(g*S-E*w+x*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10];return n*(a*h-l*d)-i*(s*h-l*c)+r*(s*d-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],d=e[7],h=e[8],p=e[9],u=e[10],m=e[11],g=e[12],E=e[13],x=e[14],f=e[15],v=n*l-i*a,T=n*c-r*a,S=n*d-s*a,b=i*c-r*l,w=i*d-s*l,C=r*d-s*c,y=h*E-p*g,A=h*x-u*g,I=h*f-m*g,P=p*x-u*E,R=p*f-m*E,F=u*f-m*x,U=v*F-T*R+S*P+b*I-w*A+C*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return e[0]=(l*F-c*R+d*P)*k,e[1]=(r*R-i*F-s*P)*k,e[2]=(E*C-x*w+f*b)*k,e[3]=(u*w-p*C-m*b)*k,e[4]=(c*I-a*F-d*A)*k,e[5]=(n*F-r*I+s*A)*k,e[6]=(x*S-g*C-f*T)*k,e[7]=(h*C-u*S+m*T)*k,e[8]=(a*R-l*I+d*y)*k,e[9]=(i*I-n*R-s*y)*k,e[10]=(g*w-E*S+f*v)*k,e[11]=(p*S-h*w-m*v)*k,e[12]=(l*A-a*P-c*y)*k,e[13]=(n*P-i*A+r*y)*k,e[14]=(E*T-g*b-x*v)*k,e[15]=(h*b-p*T+u*v)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,d=s*a,h=s*l;return this.set(d*a+i,d*l-r*c,d*c+r*l,0,d*l+r*c,h*l+i,h*c-r*a,0,d*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,d=s+s,h=a+a,p=l+l,u=s*d,m=s*h,g=s*p,E=a*h,x=a*p,f=l*p,v=c*d,T=c*h,S=c*p,b=i.x,w=i.y,C=i.z;return r[0]=(1-(E+f))*b,r[1]=(m+S)*b,r[2]=(g-T)*b,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(u+f))*w,r[6]=(x+v)*w,r[7]=0,r[8]=(g+T)*C,r[9]=(x-v)*C,r[10]=(1-(u+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=cs.set(r[0],r[1],r[2]).length();const l=cs.set(r[4],r[5],r[6]).length(),c=cs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);const d=1/a,h=1/l,p=1/c;return Qn.elements[0]*=d,Qn.elements[1]*=d,Qn.elements[2]*=d,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=p,Qn.elements[9]*=p,Qn.elements[10]*=p,n.setFromRotationMatrix(Qn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=Si,c=!1){const d=this.elements,h=2*s/(n-e),p=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let g,E;if(c)g=s/(a-s),E=a*s/(a-s);else if(l===Si)g=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(l===xo)g=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=u,d[12]=0,d[1]=0,d[5]=p,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=g,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=Si,c=!1){const d=this.elements,h=2/(n-e),p=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,E;if(c)g=1/(a-s),E=a/(a-s);else if(l===Si)g=-2/(a-s),E=-(a+s)/(a-s);else if(l===xo)g=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=h,d[4]=0,d[8]=0,d[12]=u,d[1]=0,d[5]=p,d[9]=0,d[13]=m,d[2]=0,d[6]=0,d[10]=g,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};cc.prototype.isMatrix4=!0;let Rt=cc;const cs=new W,Qn=new Rt,nS=new W(0,0,0),iS=new W(1,1,1),tr=new W,Wo=new W,Cn=new W,pm=new Rt,mm=new aa;class Tr{constructor(e=0,n=0,i=0,r=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],d=r[5],h=r[9],p=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const xm=new W,ds=new aa,Ri=new Rt,Xo=new W,Ma=new W,sS=new W,aS=new aa,gm=new W(1,0,0),vm=new W(0,1,0),ym=new W(0,0,1),_m={type:"added"},oS={type:"removed"},us={type:"childadded",child:null},md={type:"childremoved",child:null};class Zt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new W,n=new Tr,i=new aa,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new He}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ma,Xo,this.up):Ri.lookAt(Xo,Ma,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ri),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),us.child=e,this.dispatchEvent(us),us.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oS),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,aS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const p=c[d];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),d=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new W(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pr extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lS={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),f=this._getHandJoint(d,E);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;d.inputState.pinching&&u>m+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=m-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(lS)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function gd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=K1(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gd(a,s,e+1/3),this.g=gd(a,s,e),this.b=gd(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=Hg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Qe.workingToColorSpace(sn.copy(this),e),Math.round(Je(sn.r*255,0,255))*65536+Math.round(Je(sn.g*255,0,255))*256+Math.round(Je(sn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,d;const h=(l+a)/2;if(l===a)c=0,d=0;else{const p=a-l;switch(d=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Hn){Qe.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(Yo);const i=dd(nr.h,Yo.h,n),r=dd(nr.s,Yo.s,n),s=dd(nr.l,Yo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new et;et.NAMES=Hg;class Ih{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=n}clone(){return new Ih(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cS extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new W,Pi=new W,vd=new W,Ii=new W,fs=new W,hs=new W,Sm=new W,yd=new W,_d=new W,Sd=new W,bd=new Ct,Md=new Ct,Ed=new Ct;class si{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Pi.subVectors(i,n),vd.subVectors(e,n);const a=Jn.dot(Jn),l=Jn.dot(Pi),c=Jn.dot(vd),d=Pi.dot(Pi),h=Pi.dot(vd),p=a*d-l*l;if(p===0)return s.set(0,0,0),null;const u=1/p,m=(d*c-l*h)*u,g=(a*h-l*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(a,Ii.y),c.addScaledVector(l,Ii.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return bd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),bd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),Ed.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bd,s.x),a.addScaledVector(Md,s.y),a.addScaledVector(Ed,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Pi.subVectors(e,n),Jn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;fs.subVectors(r,i),hs.subVectors(s,i),yd.subVectors(e,i);const c=fs.dot(yd),d=hs.dot(yd);if(c<=0&&d<=0)return n.copy(i);_d.subVectors(e,r);const h=fs.dot(_d),p=hs.dot(_d);if(h>=0&&p<=h)return n.copy(r);const u=c*p-h*d;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(fs,a);Sd.subVectors(e,s);const m=fs.dot(Sd),g=hs.dot(Sd);if(g>=0&&m<=g)return n.copy(s);const E=m*d-c*g;if(E<=0&&d>=0&&g<=0)return l=d/(d-g),n.copy(i).addScaledVector(hs,l);const x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return Sm.subVectors(s,r),l=(p-h)/(p-h+(m-g)),n.copy(r).addScaledVector(Sm,l);const f=1/(x+E+u);return a=E*f,l=u*f,n.copy(i).addScaledVector(fs,a).addScaledVector(hs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Eo{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Ko.subVectors(this.max,Ea),ps.subVectors(e.a,Ea),ms.subVectors(e.b,Ea),xs.subVectors(e.c,Ea),ir.subVectors(ms,ps),rr.subVectors(xs,ms),Nr.subVectors(ps,xs);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Nr.z,Nr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Nr.z,0,-Nr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Nr.y,Nr.x,0];return!Td(n,ps,ms,xs,Ko)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,ps,ms,xs,Ko))?!1:($o.crossVectors(ir,rr),n=[$o.x,$o.y,$o.z],Td(n,ps,ms,xs,Ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new W,new W,new W,new W,new W,new W,new W,new W],ei=new W,qo=new Eo,ps=new W,ms=new W,xs=new W,ir=new W,rr=new W,Nr=new W,Ea=new W,Ko=new W,$o=new W,Rr=new W;function Td(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Rr.fromArray(t,s);const l=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),c=e.dot(Rr),d=n.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>l)return!1}return!0}const Ft=new W,Zo=new tt;let dS=0;class Ti extends ns{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=G1,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zo.fromBufferAttribute(this,n),Zo.applyMatrix3(e),this.setXY(n,Zo.x,Zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ba(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ba(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ba(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ba(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ba(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jg extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gg extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}const uS=new Eo,Ta=new W,wd=new W;class Ac{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const n=Ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(wd)),this.expandByPoint(Ta.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fS=0;const Vn=new Rt,Ad=new Zt,gs=new W,Nn=new Eo,wa=new Eo,Gt=new W;class Fn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W1(e)?Gg:jg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];wa.setFromBufferAttribute(l),this.morphTargetsRelative?(Gt.addVectors(Nn.min,wa.min),Nn.expandByPoint(Gt),Gt.addVectors(Nn.max,wa.max),Nn.expandByPoint(Gt)):(Nn.expandByPoint(wa.min),Nn.expandByPoint(wa.max))}Nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let d=0,h=l.count;d<h;d++)Gt.fromBufferAttribute(l,d),c&&(gs.fromBufferAttribute(e,d),Gt.add(gs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let y=0;y<i.count;y++)l[y]=new W,c[y]=new W;const d=new W,h=new W,p=new W,u=new tt,m=new tt,g=new tt,E=new W,x=new W;function f(y,A,I){d.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,I),u.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,I),h.sub(d),p.sub(d),m.sub(u),g.sub(u);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(P),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),l[y].add(E),l[A].add(E),l[I].add(E),c[y].add(x),c[A].add(x),c[I].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,A=v.length;y<A;++y){const I=v[y],P=I.start,R=I.count;for(let F=P,U=P+R;F<U;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new W,S=new W,b=new W,w=new W;function C(y){b.fromBufferAttribute(r,y),w.copy(b);const A=l[y];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(w,A);const P=S.dot(c[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,P)}for(let y=0,A=v.length;y<A;++y){const I=v[y],P=I.start,R=I.count;for(let F=P,U=P+R;F<U;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new W,s=new W,a=new W,l=new W,c=new W,d=new W,h=new W,p=new W;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),E=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),l.add(h),c.add(h),d.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(l,c){const d=l.array,h=l.itemSize,p=l.normalized,u=new d.constructor(c.length*h);let m=0,g=0;for(let E=0,x=c.length;E<x;E++){l.isInterleavedBufferAttribute?m=c[E]*l.data.stride+l.offset:m=c[E]*h;for(let f=0;f<h;f++)u[g++]=d[m++]}return new Ti(u,h,p)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],d=e(c,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const c=[],d=s[l];for(let h=0,p=d.length;h<p;h++){const u=d[h],m=e(u,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let p=0,u=d.length;p<u;p++){const m=d[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(n))}const s=e.morphAttributes;for(const d in s){const h=[],p=s[d];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(n));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,h=a.length;d<h;d++){const p=a[d];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cd=new W,hS=new W,pS=new He;class lr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cd.subVectors(i,n).cross(hS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Cd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pS.getNormalMatrix(e),r=this.coplanarPoint(Cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let mS=0;class oa extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=Ga,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sg,this.blendDst=bg,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ld,this.stencilZFail=ld,this.stencilZPass=ld,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new lr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new W,Nd=new W,Qo=new W,Jo=new W;class Wg{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nd.copy(e).add(n).multiplyScalar(.5),Qo.copy(n).sub(e).normalize(),Jo.copy(this.origin).sub(Nd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Qo),l=Jo.dot(this.direction),c=-Jo.dot(Qo),d=Jo.lengthSq(),h=Math.abs(1-a*a);let p,u,m,g;if(h>0)if(p=a*c-l,u=a*l-c,g=s*h,p>=0)if(u>=-g)if(u<=g){const E=1/h;p*=E,u*=E,m=p*(p+a*u+2*l)+u*(a*p+u+2*c)+d}else u=s,p=Math.max(0,-(a*u+l)),m=-p*p+u*(u+2*c)+d;else u=-s,p=Math.max(0,-(a*u+l)),m=-p*p+u*(u+2*c)+d;else u<=-g?(p=Math.max(0,-(-a*s+l)),u=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+u*(u+2*c)+d):u<=g?(p=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+d):(p=Math.max(0,-(a*s+l)),u=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+u*(u+2*c)+d);else u=a>0?-s:s,p=Math.max(0,-(a*u+l)),m=-p*p+u*(u+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Nd).addScaledVector(Qo,u),m}intersectSphere(e,n){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const d=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return d>=0?(i=(e.min.x-u.x)*d,r=(e.max.x-u.x)*d):(i=(e.max.x-u.x)*d,r=(e.min.x-u.x)*d),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(l=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,l=this.direction,c=l.x,d=l.y,h=l.z,p=e.x-a.x,u=e.y-a.y,m=e.z-a.z,g=n.x-a.x,E=n.y-a.y,x=n.z-a.z,f=i.x-a.x,v=i.y-a.y,T=i.z-a.z,S=Math.abs(c),b=Math.abs(d),w=Math.abs(h);let C,y,A,I,P,R,F,U,k,Z,q,H;if(S>=b&&S>=w?(A=c,R=p,k=g,H=f,c>=0?(C=d,y=h,I=u,P=m,F=E,U=x,Z=v,q=T):(C=h,y=d,I=m,P=u,F=x,U=E,Z=T,q=v)):b>=w?(A=d,R=u,k=E,H=v,d>=0?(C=h,y=c,I=m,P=p,F=x,U=g,Z=T,q=f):(C=c,y=h,I=p,P=m,F=g,U=x,Z=f,q=T)):(A=h,R=m,k=x,H=T,h>=0?(C=c,y=d,I=p,P=u,F=g,U=E,Z=f,q=v):(C=d,y=c,I=u,P=p,F=E,U=g,Z=v,q=f)),A===0)return null;const B=C/A,X=y/A,Q=1/A,ue=I-B*R,_e=P-X*R,Xe=F-B*k,Oe=U-X*k,Fe=Z-B*H,K=q-X*H,ie=Fe*Oe-K*Xe,ye=ue*K-_e*Fe,ke=Xe*_e-Oe*ue;if(r){if(ie<0||ye<0||ke<0)return null}else if((ie<0||ye<0||ke<0)&&(ie>0||ye>0||ke>0))return null;const ge=ie+ye+ke;if(ge===0)return null;const Be=Q*(ie*R+ye*k+ke*H);return(ge>0?Be<0:Be>0)?null:this.at(Be/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wa extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=Mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bm=new Rt,Pr=new Wg,el=new Ac,Mm=new W,tl=new W,nl=new W,il=new W,Rd=new W,rl=new W,Em=new W,sl=new W;class ft extends Zt{constructor(e=new Fn,n=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){rl.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const h=l[c],p=s[c];h!==0&&(Rd.fromBufferAttribute(p,e),a?rl.addScaledVector(Rd,h):rl.addScaledVector(Rd.sub(n),h))}n.add(rl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(el.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(el,Mm)===null||Pr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(bm.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const x=u[g],f=a[x.materialIndex],v=Math.max(x.start,m.start),T=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=v,b=T;S<b;S+=3){const w=l.getX(S),C=l.getX(S+1),y=l.getX(S+2);r=al(this,f,e,i,d,h,p,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=g,f=E;x<f;x+=3){const v=l.getX(x),T=l.getX(x+1),S=l.getX(x+2);r=al(this,a,e,i,d,h,p,v,T,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const x=u[g],f=a[x.materialIndex],v=Math.max(x.start,m.start),T=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let S=v,b=T;S<b;S+=3){const w=S,C=S+1,y=S+2;r=al(this,f,e,i,d,h,p,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let x=g,f=E;x<f;x+=3){const v=x,T=x+1,S=x+2;r=al(this,a,e,i,d,h,p,v,T,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function xS(t,e,n,i,r,s,a,l){let c;if(e.side===wn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Zr,l),c===null)return null;sl.copy(l),sl.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(sl);return d<n.near||d>n.far?null:{distance:d,point:sl.clone(),object:t}}function al(t,e,n,i,r,s,a,l,c,d){t.getVertexPosition(l,tl),t.getVertexPosition(c,nl),t.getVertexPosition(d,il);const h=xS(t,e,n,i,tl,nl,il,Em);if(h){const p=new W;si.getBarycoord(Em,tl,nl,il,p),r&&(h.uv=si.getInterpolatedAttribute(r,l,c,d,p,new tt)),s&&(h.uv1=si.getInterpolatedAttribute(s,l,c,d,p,new tt)),a&&(h.normal=si.getInterpolatedAttribute(a,l,c,d,p,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:c,c:d,normal:new W,materialIndex:0};si.getNormal(tl,nl,il,u.normal),h.face=u,h.barycoord=p}return h}class gS extends ln{constructor(e=null,n=1,i=1,r,s,a,l,c,d=qt,h=qt,p,u){super(null,a,l,c,d,h,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ir=new Ac,vS=new tt(.5,.5),ol=new W;class Lh{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],d=s[3],h=s[4],p=s[5],u=s[6],m=s[7],g=s[8],E=s[9],x=s[10],f=s[11],v=s[12],T=s[13],S=s[14],b=s[15];if(r[0].setComponents(d-a,m-h,f-g,b-v).normalize(),r[1].setComponents(d+a,m+h,f+g,b+v).normalize(),r[2].setComponents(d+l,m+p,f+E,b+T).normalize(),r[3].setComponents(d-l,m-p,f-E,b-T).normalize(),i)r[4].setComponents(c,u,x,S).normalize(),r[5].setComponents(d-c,m-u,f-x,b-S).normalize();else if(r[4].setComponents(d-c,m-u,f-x,b-S).normalize(),n===Si)r[5].setComponents(d+c,m+u,f+x,b+S).normalize();else if(n===xo)r[5].setComponents(c,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=vS.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xg extends oa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new Rt,Mf=new Wg,ll=new Ac,cl=new W;class yS extends Zt{constructor(e=new Fn,n=new Xg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;Tm.copy(r).invert(),Mf.copy(e.ray).applyMatrix4(Tm);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=i.index,p=i.attributes.position;if(d!==null){const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,E=m;g<E;g++){const x=d.getX(g);cl.fromBufferAttribute(p,x),wm(cl,x,c,r,e,n,this)}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,E=m;g<E;g++)cl.fromBufferAttribute(p,g),wm(cl,g,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function wm(t,e,n,i,r,s,a){const l=Mf.distanceSqToPoint(t);if(l<n){const c=new W;Mf.closestPointToPoint(t,c),c.applyMatrix4(i);const d=r.ray.origin.distanceTo(c);if(d<r.near||d>r.far)return;s.push({distance:d,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yg extends ln{constructor(e=[],n=Qr,i,r,s,a,l,c,d,h){super(e,n,i,r,s,a,l,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vs extends ln{constructor(e,n,i,r,s,a,l,c,d){super(e,n,i,r,s,a,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class go extends ln{constructor(e,n,i=wi,r,s,a,l=qt,c=qt,d,h=qi,p=1){if(h!==qi&&h!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,r,s,a,l,c,h,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ph(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class _S extends go{constructor(e,n=wi,i=Qr,r,s,a=qt,l=qt,c,d=qi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,c,d),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qg extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yi extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],d=[],h=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(p,2));function g(E,x,f,v,T,S,b,w,C,y,A){const I=S/C,P=b/y,R=S/2,F=b/2,U=w/2,k=C+1,Z=y+1;let q=0,H=0;const B=new W;for(let X=0;X<Z;X++){const Q=X*P-F;for(let ue=0;ue<k;ue++){const _e=ue*I-R;B[E]=_e*v,B[x]=Q*T,B[f]=U,d.push(B.x,B.y,B.z),B[E]=0,B[x]=0,B[f]=w>0?1:-1,h.push(B.x,B.y,B.z),p.push(ue/C),p.push(1-X/y),q+=1}}for(let X=0;X<y;X++)for(let Q=0;Q<C;Q++){const ue=u+Q+k*X,_e=u+Q+k*(X+1),Xe=u+(Q+1)+k*(X+1),Oe=u+(Q+1)+k*X;c.push(ue,_e,Oe),c.push(_e,Xe,Oe),H+=6}l.addGroup(m,H,A),m+=H,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xa extends Fn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const d=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],u=[],m=[];let g=0;const E=[],x=i/2;let f=0;v(),a===!1&&(e>0&&T(!0),n>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(m,2));function v(){const S=new W,b=new W;let w=0;const C=(n-e)/i;for(let y=0;y<=s;y++){const A=[],I=y/s,P=I*(n-e)+e;for(let R=0;R<=r;R++){const F=R/r,U=F*c+l,k=Math.sin(U),Z=Math.cos(U);b.x=P*k,b.y=-I*i+x,b.z=P*Z,p.push(b.x,b.y,b.z),S.set(k,C,Z).normalize(),u.push(S.x,S.y,S.z),m.push(F,1-I),A.push(g++)}E.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const I=E[A][y],P=E[A+1][y],R=E[A+1][y+1],F=E[A][y+1];(e>0||A!==0)&&(h.push(I,P,F),w+=3),(n>0||A!==s-1)&&(h.push(P,R,F),w+=3)}d.addGroup(f,w,0),f+=w}function T(S){const b=g,w=new tt,C=new W;let y=0;const A=S===!0?e:n,I=S===!0?1:-1;for(let R=1;R<=r;R++)p.push(0,x*I,0),u.push(0,I,0),m.push(.5,.5),g++;const P=g;for(let R=0;R<=r;R++){const U=R/r*c+l,k=Math.cos(U),Z=Math.sin(U);C.x=A*Z,C.y=x*I,C.z=A*k,p.push(C.x,C.y,C.z),u.push(0,I,0),w.x=k*.5+.5,w.y=Z*.5*I+.5,m.push(w.x,w.y),g++}for(let R=0;R<r;R++){const F=b+R,U=P+R;S===!0?h.push(U,U+1,F):h.push(U+1,U,F),y+=3}d.addGroup(f,y,S===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rn extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),d=l+1,h=c+1,p=e/l,u=n/c,m=[],g=[],E=[],x=[];for(let f=0;f<h;f++){const v=f*u-a;for(let T=0;T<d;T++){const S=T*p-s;g.push(S,-v,0),E.push(0,0,1),x.push(T/l),x.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<l;v++){const T=v+d*f,S=v+d*(f+1),b=v+1+d*(f+1),w=v+1+d*f;m.push(T,S,w),m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dh extends Fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let d=0;const h=[],p=new W,u=new W,m=[],g=[],E=[],x=[];for(let f=0;f<=i;f++){const v=[],T=f/i,S=a+T*l,b=e*Math.cos(S),w=Math.sqrt(e*e-b*b);let C=0;f===0&&a===0?C=.5/n:f===i&&c===Math.PI&&(C=-.5/n);for(let y=0;y<=n;y++){const A=y/n,I=r+A*s;p.x=-w*Math.cos(I),p.y=b,p.z=w*Math.sin(I),g.push(p.x,p.y,p.z),u.copy(p).normalize(),E.push(u.x,u.y,u.z),x.push(A+C,1-T),v.push(d++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const T=h[f][v+1],S=h[f][v],b=h[f+1][v],w=h[f+1][v+1];(f!==0||a>0)&&m.push(T,S,w),(f!==i-1||c<Math.PI)&&m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function na(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Am(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Am(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=na(t[n]);for(const r in i)e[r]=i[r]}return e}function Am(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function SS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const bS={clone:na,merge:un};var MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ES=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=ES,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=SS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class TS extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends oa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wS extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AS extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kh extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Pd=new Rt,Cm=new W,Nm=new W;class $g{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cm),Nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Nm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Pd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,d=r?r.y/s.y:0;e.coordinateSystem===xo||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),n.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dl=new W,ul=new aa,pi=new W;class Zg extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,ul,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,ul,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(dl,ul,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,ul,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new W,Rm=new tt,Pm=new tt;class Sn extends Zg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/d,r*=a.width/c,i*=a.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class CS extends $g{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=lc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class NS extends kh{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new CS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class RS extends $g{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}}class PS extends kh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new RS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Qg extends Zg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IS extends kh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ys=-90,_s=1;class LS extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(ys,_s,e,n);r.layers=this.layers,this.add(r);const s=new Sn(ys,_s,e,n);s.layers=this.layers,this.add(s);const a=new Sn(ys,_s,e,n);a.layers=this.layers,this.add(a);const l=new Sn(ys,_s,e,n);l.layers=this.layers,this.add(l);const c=new Sn(ys,_s,e,n);c.layers=this.layers,this.add(c);const d=new Sn(ys,_s,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const d of n)this.remove(d);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,d,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class DS extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zh=class zh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};zh.prototype.isMatrix2=!0;let Im=zh;function Lm(t,e,n,i){const r=kS(i);switch(n){case Ug:return t*e;case Fg:return t*e/r.components*r.byteLength;case wh:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case Ah:return t*e*2/r.components*r.byteLength;case Og:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case Ch:return t*e*4/r.components*r.byteLength;case Cl:case Nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xu:case qu:return Math.max(t,16)*Math.max(e,8)/4;case Wu:case Yu:return Math.max(t,8)*Math.max(e,8)/2;case Ku:case $u:case Qu:case Ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zu:case ic:case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case pf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case mf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xf:case gf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yf:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rc:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kS(t){switch(t){case In:case Ig:return{byteLength:1,components:1};case po:case Lg:case Ai:return{byteLength:2,components:1};case Eh:case Th:return{byteLength:2,components:4};case wi:case Mh:case _i:return{byteLength:4,components:1};case Dg:case kg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jg(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function US(t){const e=new WeakMap;function n(l,c){const d=l.array,h=l.usage,p=d.byteLength,u=t.createBuffer();t.bindBuffer(c,u),t.bufferData(c,d,h),l.onUploadCallback();let m;if(d instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)m=t.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=t.SHORT;else if(d instanceof Uint32Array)m=t.UNSIGNED_INT;else if(d instanceof Int32Array)m=t.INT;else if(d instanceof Int8Array)m=t.BYTE;else if(d instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,d){const h=c.array,p=c.updateRanges;if(t.bindBuffer(d,l),p.length===0)t.bufferSubData(d,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],E=p[m];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,p[u]=E)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const E=p[m];t.bufferSubData(d,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:r,remove:s,update:a}}var OS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FS=`#ifdef USE_ALPHAHASH
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
#endif`,BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,GS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WS=`#ifdef USE_BATCHING
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
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$S=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
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
#endif`,kb=`uniform sampler2D dfgLUT;
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
}`,Ub=`
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,eM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
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
#endif`,oM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,TM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,IM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
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
}`,GM=`#if DEPTH_PACKING == 3200
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
}`,WM=`#define DISTANCE
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
}`,XM=`#define DISTANCE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
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
}`,$M=`uniform vec3 diffuse;
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
}`,ZM=`#include <common>
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
}`,QM=`uniform vec3 diffuse;
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
}`,JM=`#define LAMBERT
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define MATCAP
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
}`,nE=`#define MATCAP
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
}`,iE=`#define NORMAL
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
}`,rE=`#define NORMAL
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
}`,sE=`#define PHONG
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
}`,aE=`#define PHONG
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
}`,oE=`#define STANDARD
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
}`,lE=`#define STANDARD
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
}`,cE=`#define TOON
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
}`,dE=`#define TOON
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
}`,uE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,pE=`uniform vec3 color;
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
}`,mE=`uniform float rotation;
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
}`,xE=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:OS,alphahash_pars_fragment:FS,alphamap_fragment:BS,alphamap_pars_fragment:zS,alphatest_fragment:VS,alphatest_pars_fragment:HS,aomap_fragment:jS,aomap_pars_fragment:GS,batching_pars_vertex:WS,batching_vertex:XS,begin_vertex:YS,beginnormal_vertex:qS,bsdfs:KS,iridescence_fragment:$S,bumpmap_pars_fragment:ZS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:JS,clipping_planes_pars_vertex:eb,clipping_planes_vertex:tb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:rb,color_vertex:sb,common:ab,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:db,emissivemap_fragment:ub,emissivemap_pars_fragment:fb,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:xb,envmap_pars_fragment:gb,envmap_pars_vertex:vb,envmap_physical_pars_fragment:Nb,envmap_vertex:yb,fog_vertex:_b,fog_pars_vertex:Sb,fog_fragment:bb,fog_pars_fragment:Mb,gradientmap_pars_fragment:Eb,lightmap_pars_fragment:Tb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Ab,lights_pars_begin:Cb,lights_toon_fragment:Rb,lights_toon_pars_fragment:Pb,lights_phong_fragment:Ib,lights_phong_pars_fragment:Lb,lights_physical_fragment:Db,lights_physical_pars_fragment:kb,lights_fragment_begin:Ub,lights_fragment_maps:Ob,lights_fragment_end:Fb,lightprobes_pars_fragment:Bb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:jb,map_fragment:Gb,map_pars_fragment:Wb,map_particle_fragment:Xb,map_particle_pars_fragment:Yb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:$b,morphcolor_vertex:Zb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:eM,normal_fragment_begin:tM,normal_fragment_maps:nM,normal_pars_fragment:iM,normal_pars_vertex:rM,normal_vertex:sM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:oM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:cM,iridescence_pars_fragment:dM,opaque_fragment:uM,packing:fM,premultiplied_alpha_fragment:hM,project_vertex:pM,dithering_fragment:mM,dithering_pars_fragment:xM,roughnessmap_fragment:gM,roughnessmap_pars_fragment:vM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:_M,shadowmap_vertex:SM,shadowmask_pars_fragment:bM,skinbase_vertex:MM,skinning_pars_vertex:EM,skinning_vertex:TM,skinnormal_vertex:wM,specularmap_fragment:AM,specularmap_pars_fragment:CM,tonemapping_fragment:NM,tonemapping_pars_fragment:RM,transmission_fragment:PM,transmission_pars_fragment:IM,uv_pars_fragment:LM,uv_pars_vertex:DM,uv_vertex:kM,worldpos_vertex:UM,background_vert:OM,background_frag:FM,backgroundCube_vert:BM,backgroundCube_frag:zM,cube_vert:VM,cube_frag:HM,depth_vert:jM,depth_frag:GM,distance_vert:WM,distance_frag:XM,equirect_vert:YM,equirect_frag:qM,linedashed_vert:KM,linedashed_frag:$M,meshbasic_vert:ZM,meshbasic_frag:QM,meshlambert_vert:JM,meshlambert_frag:eE,meshmatcap_vert:tE,meshmatcap_frag:nE,meshnormal_vert:iE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:aE,meshphysical_vert:oE,meshphysical_frag:lE,meshtoon_vert:cE,meshtoon_frag:dE,points_vert:uE,points_frag:fE,shadow_vert:hE,shadow_frag:pE,sprite_vert:mE,sprite_frag:xE},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},gi={basic:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:un([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:un([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:un([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:un([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:un([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};gi.physical={uniforms:un([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const fl={r:0,b:0,g:0},gE=new Rt,ev=new He;ev.set(-1,0,0,0,1,0,0,0,1);function vE(t,e,n,i,r,s){const a=new et(0);let l=r===!0?0:1,c,d,h=null,p=0,u=null;function m(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const S=v.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(v){let T=!1;const S=m(v);S===null?x(a,l):S&&S.isColor&&(x(S,1),T=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,T){const S=m(T);S&&(S.isCubeTexture||S.mapping===wc)?(d===void 0&&(d=new ft(new yi(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:na(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(gE.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(ev),d.material.toneMapped=Qe.getTransfer(S.colorSpace)!==pt,(h!==S||p!==S.version||u!==t.toneMapping)&&(d.material.needsUpdate=!0,h=S,p=S.version,u=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ft(new Rn(2,2),new Ci({name:"BackgroundMaterial",uniforms:na(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,T){v.getRGB(fl,Kg(t)),n.buffers.color.setClear(fl.r,fl.g,fl.b,T,s)}function f(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(a,l)},render:g,addToRenderList:E,dispose:f}}function yE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function l(P,R,F,U,k){let Z=!1;const q=p(P,U,F,R);s!==q&&(s=q,d(s.object)),Z=m(P,U,F,k),Z&&g(P,U,F,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(P,R,F,U),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return t.createVertexArray()}function d(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function p(P,R,F,U){const k=U.wireframe===!0;let Z=i[R.id];Z===void 0&&(Z={},i[R.id]=Z);const q=P.isInstancedMesh===!0?P.id:0;let H=Z[q];H===void 0&&(H={},Z[q]=H);let B=H[F.id];B===void 0&&(B={},H[F.id]=B);let X=B[k];return X===void 0&&(X=u(c()),B[k]=X),X}function u(P){const R=[],F=[],U=[];for(let k=0;k<n;k++)R[k]=0,F[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:U,object:P,attributes:{},index:null}}function m(P,R,F,U){const k=s.attributes,Z=R.attributes;let q=0;const H=F.getAttributes();for(const B in H)if(H[B].location>=0){const Q=k[B];let ue=Z[B];if(ue===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;q++}return s.attributesNum!==q||s.index!==U}function g(P,R,F,U){const k={},Z=R.attributes;let q=0;const H=F.getAttributes();for(const B in H)if(H[B].location>=0){let Q=Z[B];Q===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),k[B]=ue,q++}s.attributes=k,s.attributesNum=q,s.index=U}function E(){const P=s.newAttributes;for(let R=0,F=P.length;R<F;R++)P[R]=0}function x(P){f(P,0)}function f(P,R){const F=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;F[P]=1,U[P]===0&&(t.enableVertexAttribArray(P),U[P]=1),k[P]!==R&&(t.vertexAttribDivisor(P,R),k[P]=R)}function v(){const P=s.newAttributes,R=s.enabledAttributes;for(let F=0,U=R.length;F<U;F++)R[F]!==P[F]&&(t.disableVertexAttribArray(F),R[F]=0)}function T(P,R,F,U,k,Z,q){q===!0?t.vertexAttribIPointer(P,R,F,k,Z):t.vertexAttribPointer(P,R,F,U,k,Z)}function S(P,R,F,U){E();const k=U.attributes,Z=F.getAttributes(),q=R.defaultAttributeValues;for(const H in Z){const B=Z[H];if(B.location>=0){let X=k[H];if(X===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const Q=X.normalized,ue=X.itemSize,_e=e.get(X);if(_e===void 0)continue;const Xe=_e.buffer,Oe=_e.type,Fe=_e.bytesPerElement,K=Oe===t.INT||Oe===t.UNSIGNED_INT||X.gpuType===Mh;if(X.isInterleavedBufferAttribute){const ie=X.data,ye=ie.stride,ke=X.offset;if(ie.isInstancedInterleavedBuffer){for(let ge=0;ge<B.locationSize;ge++)f(B.location+ge,ie.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ge=0;ge<B.locationSize;ge++)x(B.location+ge);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ge=0;ge<B.locationSize;ge++)T(B.location+ge,ue/B.locationSize,Oe,Q,ye*Fe,(ke+ue/B.locationSize*ge)*Fe,K)}else{if(X.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)f(B.location+ie,X.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<B.locationSize;ie++)x(B.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ie=0;ie<B.locationSize;ie++)T(B.location+ie,ue/B.locationSize,Oe,Q,ue*Fe,ue/B.locationSize*ie*Fe,K)}}else if(q!==void 0){const Q=q[H];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(B.location,Q);break;case 3:t.vertexAttrib3fv(B.location,Q);break;case 4:t.vertexAttrib4fv(B.location,Q);break;default:t.vertexAttrib1fv(B.location,Q)}}}}v()}function b(){A();for(const P in i){const R=i[P];for(const F in R){const U=R[F];for(const k in U){const Z=U[k];for(const q in Z)h(Z[q].object),delete Z[q];delete U[k]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const R=i[P.id];for(const F in R){const U=R[F];for(const k in U){const Z=U[k];for(const q in Z)h(Z[q].object),delete Z[q];delete U[k]}}delete i[P.id]}function C(P){for(const R in i){const F=i[R];for(const U in F){const k=F[U];if(k[P.id]===void 0)continue;const Z=k[P.id];for(const q in Z)h(Z[q].object),delete Z[q];delete k[P.id]}}}function y(P){for(const R in i){const F=i[R],U=P.isInstancedMesh===!0?P.id:0,k=F[U];if(k!==void 0){for(const Z in k){const q=k[Z];for(const H in q)h(q[H].object),delete q[H];delete k[Z]}delete F[U],Object.keys(F).length===0&&delete i[R]}}}function A(){I(),a=!0,s!==r&&(s=r,d(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:A,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:x,disableUnusedAttributes:v}}function _E(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function l(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let u=0;for(let m=0;m<h;m++)u+=d[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function SE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ai&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const y=C===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==In&&C!==_i&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const h=c(d);h!==d&&(ze("WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:b,samples:w}}function bE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,l=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||r;return r=u,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?h(null):d();else{const v=s?0:i,T=v*4;let S=f.clippingState||null;c.value=S,S=h(g,u,T,m);for(let b=0;b!==T;++b)S[b]=n[b];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,m,g){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=c.value,g!==!0||x===null){const f=m+E*4,v=u.matrixWorldInverse;l.getNormalMatrix(v),(x===null||x.length<f)&&(x=new Float32Array(f));for(let T=0,S=m;T!==E;++T,S+=4)a.copy(p[T]).applyMatrix4(v,l),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const ks=4,ME=6,EE=20,TE=256,Aa=new Qg,Dm=new et;let Id=null,Ld=0,Dd=0,kd=!1;const wE=new W,Lr=new W;class km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=wE}=s;Id=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ld,Dd),this._renderer.xr.enabled=kd,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ai,format:ai,colorSpace:sc,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=AE(s)),this._blurMaterial=NE(s,e,n),this._ggxMaterial=CE(s,e,n)}return r}_compileMaterial(e){const n=new ft(new Fn,e);this._renderer.compile(n,Aa)}_sceneToCubeUV(e,n,i,r,s){const c=new Sn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Dm),p.toneMapping=Ei,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new yi,new Wa({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let f=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,f=!0):(x.color.copy(Dm),f=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,d[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):S===1?(c.up.set(0,0,d[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,d[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const b=this._cubeSize;Ss(r,S*b,T>2?b:0,b,b),p.setRenderTarget(r),f&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Ss(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Aa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,d=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(d*d-h*h),u=d*1.25,m=p*u,{_lodMax:g}=this,E=this._sizeLods[i],x=3*E*(i>g-ks?i-g+ks:0),f=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-n,Ss(s,x,f,3*E,2*E),r.setRenderTarget(s),r.render(l,Aa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Ss(e,x,f,3*E,2*E),r.setRenderTarget(e),r.render(l,Aa)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;const d=l.uniforms;d.envMap.value=e.texture,d.sigma.value=s,d.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-ks?r-this._lodMax+ks:0),u=4*(this._cubeSize-h);Ss(n,p,u,3*h,2*h),a.setRenderTarget(n),a.render(c,Aa)}}function AE(t){const e=[],n=[];let i=t;const r=t-ks+1+ME;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const l=1/(a-2),c=-l,d=1+l,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,u=6,m=3,g=new Float32Array(m*u*p),E=new Float32Array(m*u*p);for(let f=0;f<p;f++){const v=f%3*2/3-1,T=f>2?0:-1,S=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(S,m*u*f);for(let b=0;b<u;b++){const w=h[b*2]*2-1,C=h[b*2+1]*2-1;f===0?Lr.set(1,C,w):f===1?Lr.set(-w,1,-C):f===2?Lr.set(-w,C,1):f===3?Lr.set(-1,C,-w):f===4?Lr.set(-w,-1,C):Lr.set(w,C,-1),Lr.toArray(E,(f*u+b)*m)}}const x=new Fn;x.setAttribute("position",new Ti(g,m)),x.setAttribute("outputDirection",new Ti(E,m)),n.push(new ft(x,null)),i>ks&&i--}return{lodMeshes:n,sizeLods:e}}function Um(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CE(t,e,n){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function NE(t,e,n){return new Ci({name:"SphericalGaussianBlur",defines:{SAMPLES:EE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Om(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Fm(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class tv extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yi(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Hi});s.uniforms.tEquirect.value=n;const a=new ft(r,s),l=n.minFilter;return n.minFilter===zr&&(n.minFilter=Kt),new LS(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function RE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===sd||m===ad)if(e.has(u)){const g=e.get(u).texture;return l(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const E=new tv(g.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",d),l(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,g=m===sd||m===ad,E=m===Qr||m===ta;if(g||E){let x=n.get(u);const f=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new km(t)),x=g?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const v=u.image;return g&&v&&v.height>0||E&&v&&c(v)?(i===null&&(i=new km(t)),x=g?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function l(u,m){return m===sd?u.mapping=Qr:m===ad&&(u.mapping=ta),u}function c(u){let m=0;const g=6;for(let E=0;E<g;E++)u[E]!==void 0&&m++;return m===g}function d(u){const m=u.target;m.removeEventListener("dispose",d);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function PE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&js("WebGLRenderer: "+i+" extension not supported."),r}}}function IE(t,e,n,i){const r={},s=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function l(p,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function c(p){const u=p.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function d(p){const u=[],m=p.index,g=p.attributes.position;let E=0;if(g===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let T=0,S=v.length;T<S;T+=3){const b=v[T+0],w=v[T+1],C=v[T+2];u.push(b,w,w,C,C,b)}}else{const v=g.array;E=g.version;for(let T=0,S=v.length/3-1;T<S;T+=3){const b=T+0,w=T+1,C=T+2;u.push(b,w,w,C,C,b)}}const x=new(g.count>=65535?Gg:jg)(u,1);x.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,x)}function h(p){const u=s.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&d(p)}else d(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function LE(t,e,n){let i;function r(p){i=p}let s,a;function l(p){s=p.type,a=p.bytesPerElement}function c(p,u){t.drawElements(i,u,s,p*a),n.update(u,i,1)}function d(p,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,p*a,m),n.update(u,i,m))}function h(p,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,m);let E=0;for(let x=0;x<m;x++)E+=u[x];n.update(E,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function DE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kE(t,e,n){const i=new WeakMap,r=new Ct;function s(a,l,c){const d=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(l);if(u===void 0||u.count!==p){let I=function(){y.dispose(),i.delete(l),l.removeEventListener("dispose",I)};var m=I;u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),E===!0&&(S=2),x===!0&&(S=3);let b=l.attributes.position.count*S,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*w*4*p),y=new zg(C,b,w,p);y.type=_i,y.needsUpdate=!0;const A=S*4;for(let P=0;P<p;P++){const R=f[P],F=v[P],U=T[P],k=b*w*4*P;for(let Z=0;Z<R.count;Z++){const q=Z*A;g===!0&&(r.fromBufferAttribute(R,Z),C[k+q+0]=r.x,C[k+q+1]=r.y,C[k+q+2]=r.z,C[k+q+3]=0),E===!0&&(r.fromBufferAttribute(F,Z),C[k+q+4]=r.x,C[k+q+5]=r.y,C[k+q+6]=r.z,C[k+q+7]=0),x===!0&&(r.fromBufferAttribute(U,Z),C[k+q+8]=r.x,C[k+q+9]=r.y,C[k+q+10]=r.z,C[k+q+11]=U.itemSize===4?r.w:1)}}u={count:p,texture:y,size:new tt(b,w)},i.set(l,u),l.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<d.length;x++)g+=d[x];const E=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",E),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function UE(t,e,n,i,r){let s=new WeakMap;function a(d){const h=r.render.frame,p=d.geometry,u=e.get(d,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==h&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const m=d.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function l(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const OE={[Eg]:"LINEAR_TONE_MAPPING",[Tg]:"REINHARD_TONE_MAPPING",[wg]:"CINEON_TONE_MAPPING",[Ag]:"ACES_FILMIC_TONE_MAPPING",[Ng]:"AGX_TONE_MAPPING",[Rg]:"NEUTRAL_TONE_MAPPING",[Cg]:"CUSTOM_TONE_MAPPING"};function FE(t,e,n,i,r,s){const a=new ci(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null;const d=new Fn;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const h=new TS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ft(d,h),u=new Qg(-1,1,1,-1,0,1);let m=null,g=null,E=!1,x,f=null,v=[],T=!1;this.setSize=function(S,b){a.setSize(S,b),l!==null&&l.setSize(S,b),c!==null&&c.setSize(S,b);for(let w=0;w<v.length;w++){const C=v[w];C.setSize&&C.setSize(S,b)}},this.setEffects=function(S){v=S,T=v.length>0&&v[0].isRenderPass===!0;const b=a.width,w=a.height;v.length>0&&l===null&&(l=new ci(b,w,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),c=new ci(b,w,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const y=v[C];y.setSize&&y.setSize(b,w)}},this.begin=function(S,b){if(E||S.toneMapping===Ei&&v.length===0)return!1;if(f=b,b!==null){const w=b.width,C=b.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return T===!1&&S.setRenderTarget(a),x=S.toneMapping,S.toneMapping=Ei,!0},this.hasRenderPass=function(){return T},this.end=function(S,b){S.toneMapping=x,E=!0;let w=a,C=l;for(let y=0;y<v.length;y++){const A=v[y];A.enabled!==!1&&(A.render(S,C,w,b),A.needsSwap!==!1&&(w=C,C=C===l?c:l))}if(m!==S.outputColorSpace||g!==S.toneMapping){m=S.outputColorSpace,g=S.toneMapping,h.defines={},Qe.getTransfer(m)===pt&&(h.defines.SRGB_TRANSFER="");const y=OE[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(f),S.render(p,u),f=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),d.dispose(),h.dispose()}}const nv=new ln,Ef=new go(1,1),iv=new zg,rv=new tS,sv=new Yg,Bm=[],zm=[],Vm=new Float32Array(16),Hm=new Float32Array(9),jm=new Float32Array(4);function la(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bm[r];if(s===void 0&&(s=new Float32Array(r),Bm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Ht(n,i))return;jm.set(i),t.uniformMatrix2fv(this.addr,!1,jm),jt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Ht(n,i))return;Hm.set(i),t.uniformMatrix3fv(this.addr,!1,Hm),jt(n,i)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Ht(n,i))return;Vm.set(i),t.uniformMatrix4fv(this.addr,!1,Vm),jt(n,i)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function $E(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ef.compareFunction=n.isReversedDepthBuffer()?Rh:Nh,s=Ef):s=nv,n.setTexture2D(e||s,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rv,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sv,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iv,r)}function rT(t){switch(t){case 5126:return BE;case 35664:return zE;case 35665:return VE;case 35666:return HE;case 35674:return jE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return YE;case 35668:case 35672:return qE;case 35669:case 35673:return KE;case 5125:return $E;case 36294:return ZE;case 36295:return QE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function sT(t,e){t.uniform1fv(this.addr,e)}function aT(t,e){const n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function oT(t,e){const n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function lT(t,e){const n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function cT(t,e){const n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dT(t,e){const n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uT(t,e){const n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fT(t,e){t.uniform1iv(this.addr,e)}function hT(t,e){t.uniform2iv(this.addr,e)}function pT(t,e){t.uniform3iv(this.addr,e)}function mT(t,e){t.uniform4iv(this.addr,e)}function xT(t,e){t.uniform1uiv(this.addr,e)}function gT(t,e){t.uniform2uiv(this.addr,e)}function vT(t,e){t.uniform3uiv(this.addr,e)}function yT(t,e){t.uniform4uiv(this.addr,e)}function _T(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Ef:a=nv;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function ST(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||rv,s[a])}function bT(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||sv,s[a])}function MT(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||iv,s[a])}function ET(t){switch(t){case 5126:return sT;case 35664:return aT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return dT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return xT;case 36294:return gT;case 36295:return vT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return MT}}class TT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rT(n.type)}}class wT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ET(n.type)}}class AT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Gm(t,e){t.seq.push(e),t.map[e.id]=e}function CT(t,e,n){const i=t.name,r=i.length;for(Ud.lastIndex=0;;){const s=Ud.exec(i),a=Ud.lastIndex;let l=s[1];const c=s[2]==="]",d=s[3];if(c&&(l=l|0),d===void 0||d==="["&&a+2===r){Gm(n,d===void 0?new TT(l,t,e):new wT(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new AT(l),Gm(n,p)),n=p}}}class Il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);CT(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NT=37297;let RT=0;function PT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Xm=new He;function IT(t){Qe._getMatrix(Xm,Qe.workingColorSpace,t);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case ac:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+PT(t.getShaderSource(e),l)}else return s}function LT(t,e){const n=IT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const DT={[Eg]:"Linear",[Tg]:"Reinhard",[wg]:"Cineon",[Ag]:"ACESFilmic",[Ng]:"AgX",[Rg]:"Neutral",[Cg]:"Custom"};function kT(t,e){const n=DT[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new W;function UT(){Qe.getLuminanceCoefficients(hl);const t=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function FT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Da(t){return t!==""}function qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(t){return t.replace(zT,HT)}const VT=new Map;function HT(t,e){let n=qe[e];if(n===void 0){const i=VT.get(e);if(i!==void 0)n=qe[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tf(n)}const jT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(t){return t.replace(jT,GT)}function GT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const WT={[Al]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function XT(t){return WT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YT={[Qr]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function qT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":YT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const KT={[ta]:"ENVMAP_MODE_REFRACTION"};function $T(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":KT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZT={[Mg]:"ENVMAP_BLENDING_MULTIPLY",[I1]:"ENVMAP_BLENDING_MIX",[L1]:"ENVMAP_BLENDING_ADD"};function QT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ZT[t.combine]||"ENVMAP_BLENDING_NONE"}function JT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ew(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=XT(n),d=qT(n),h=$T(n),p=QT(n),u=JT(n),m=OT(n),g=FT(s),E=r.createProgram();let x,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Da).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Da).join(`
`),f.length>0&&(f+=`
`)):(x=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),f=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?qe.tonemapping_pars_fragment:"",n.toneMapping!==Ei?kT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,LT("linearToOutputTexel",n.outputColorSpace),UT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Da).join(`
`)),a=Tf(a),a=qm(a,n),a=Km(a,n),l=Tf(l),l=qm(l,n),l=Km(l,n),a=$m(a),l=$m(l),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=v+x+a,S=v+f+l,b=Wm(r,r.VERTEX_SHADER,T),w=Wm(r,r.FRAGMENT_SHADER,S);r.attachShader(E,b),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(P){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(E)||"",F=r.getShaderInfoLog(b)||"",U=r.getShaderInfoLog(w)||"",k=R.trim(),Z=F.trim(),q=U.trim();let H=!0,B=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,b,w);else{const X=Ym(r,b,"vertex"),Q=Ym(r,w,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+X+`
`+Q)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(Z===""||q==="")&&(B=!1);B&&(P.diagnostics={runnable:H,programLog:k,vertexShader:{log:Z,prefix:x},fragmentShader:{log:q,prefix:f}})}r.deleteShader(b),r.deleteShader(w),y=new Il(r,E),A=BT(r,E)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(E,NT)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=w,this}let tw=0;class nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iw(e),n.set(e,i)),i}}class iw{constructor(e){this.id=tw++,this.code=e,this.usedTimes=0}}function rw(t){return t===Jr||t===ic||t===rc}function sw(t,e,n,i,r,s){const a=new Vg,l=new nw,c=new Set,d=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function E(y,A,I,P,R,F){const U=P.fog,k=R.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||Z,q),B=H&&H.mapping===wc?H.image.height:null,X=m[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ue=Q!==void 0?Q.length:0;let _e=0;k.morphAttributes.position!==void 0&&(_e=1),k.morphAttributes.normal!==void 0&&(_e=2),k.morphAttributes.color!==void 0&&(_e=3);let Xe,Oe,Fe,K;if(X){const dt=gi[X];Xe=dt.vertexShader,Oe=dt.fragmentShader}else{Xe=y.vertexShader,Oe=y.fragmentShader;const dt=l.getVertexShaderStage(y),it=l.getFragmentShaderStage(y);l.update(y,dt,it),Fe=dt.id,K=it.id}const ie=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),ke=R.isInstancedMesh===!0,ge=R.isBatchedMesh===!0,Be=!!y.map,vt=!!y.matcap,Ve=!!H,Ke=!!y.aoMap,rt=!!y.lightMap,Ge=!!y.bumpMap&&y.wireframe===!1,nt=!!y.normalMap,Tt=!!y.displacementMap,kt=!!y.emissiveMap,lt=!!y.metalnessMap,ct=!!y.roughnessMap,L=y.anisotropy>0,De=y.clearcoat>0,Le=y.dispersion>0,N=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,Y=y.transmission>0,J=L&&!!y.anisotropyMap,ae=De&&!!y.clearcoatMap,ce=De&&!!y.clearcoatNormalMap,ee=De&&!!y.clearcoatRoughnessMap,ne=_&&!!y.iridescenceMap,de=_&&!!y.iridescenceThicknessMap,Ne=z&&!!y.sheenColorMap,me=z&&!!y.sheenRoughnessMap,fe=!!y.specularMap,Re=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Ue=Y&&!!y.transmissionMap,O=Y&&!!y.thicknessMap,he=!!y.gradientMap,te=!!y.alphaMap,pe=y.alphaTest>0,oe=!!y.alphaHash,re=!!y.extensions;let we=Ei;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(we=t.toneMapping);const Te={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:Oe,defines:y.defines,customVertexShaderID:Fe,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ge,batchingColor:ge&&R._colorsTexture!==null,instancing:ke,instancingColor:ke&&R.instanceColor!==null,instancingMorph:ke&&R.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:vt,envMap:Ve,envMapMode:Ve&&H.mapping,envMapCubeUVHeight:B,aoMap:Ke,lightMap:rt,bumpMap:Ge,normalMap:nt,displacementMap:Tt,emissiveMap:kt,normalMapObjectSpace:nt&&y.normalMapType===U1,normalMapTangentSpace:nt&&y.normalMapType===bf,packedNormalMap:nt&&y.normalMapType===bf&&rw(y.normalMap.format),metalnessMap:lt,roughnessMap:ct,anisotropy:L,anisotropyMap:J,clearcoat:De,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:ee,dispersion:Le,retroreflection:N,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:me,specularMap:fe,specularColorMap:Re,specularIntensityMap:Ie,transmission:Y,transmissionMap:Ue,thicknessMap:O,gradientMap:he,opaque:y.transparent===!1&&y.blending===Ga&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:oe,combine:y.combine,mapUv:Be&&g(y.map.channel),aoMapUv:Ke&&g(y.aoMap.channel),lightMapUv:rt&&g(y.lightMap.channel),bumpMapUv:Ge&&g(y.bumpMap.channel),normalMapUv:nt&&g(y.normalMap.channel),displacementMapUv:Tt&&g(y.displacementMap.channel),emissiveMapUv:kt&&g(y.emissiveMap.channel),metalnessMapUv:lt&&g(y.metalnessMap.channel),roughnessMapUv:ct&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:ae&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(y.sheenRoughnessMap.channel),specularMapUv:fe&&g(y.specularMap.channel),specularColorMapUv:Re&&g(y.specularColorMap.channel),specularIntensityMapUv:Ie&&g(y.specularIntensityMap.channel),transmissionMapUv:Ue&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:te&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(nt||L),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(Be||te),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&nt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:_e,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ri,flipSided:y.side===wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function x(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(A,y),v(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function f(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){const A=m[y.type];let I;if(A){const P=gi[A];I=bS.clone(P.uniforms)}else I=y.uniforms;return I}function S(y,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new ew(t,A,y,r),d.push(I),h.set(A,I)),I}function b(y){if(--y.usedTimes===0){const A=d.indexOf(y);d[A]=d[d.length-1],d.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:T,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:d,dispose:C}}function aw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ow(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function l(u,m,g,E,x,f){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:x,group:f},t[e]=v):(v.id=u.id,v.object=u,v.geometry=m,v.material=g,v.materialVariant=a(u),v.groupOrder=E,v.renderOrder=u.renderOrder,v.z=x,v.group=f),e++,v}function c(u,m,g,E,x,f,v){v.reversedDepth===!0&&(x=-x);const T=l(u,m,g,E,x,f);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):n.push(T)}function d(u,m,g,E,x,f){const v=l(u,m,g,E,x,f);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function h(u,m){n.length>1&&n.sort(u||ow),i.length>1&&i.sort(m||Qm),r.length>1&&r.sort(m||Qm)}function p(){for(let u=e,m=t.length;u<m;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:d,finish:p,sort:h}}function lw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jm,t.set(i,[a])):r>=s.length?(a=new Jm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new W,color:new et};break;case"SpotLight":n={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function dw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uw=0;function fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hw(t){const e=new cw,n=dw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new W);const r=new W,s=new Rt,a=new Rt;function l(d){let h=0,p=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,g=0,E=0,x=0,f=0,v=0,T=0,S=0,b=0,w=0,C=0,y=0,A=0,I=0;d.sort(fw);for(let R=0,F=d.length;R<F;R++){const U=d[R],k=U.color,Z=U.intensity,q=U.distance;let H=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Jr?H=U.shadow.map.texture:H=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=k.r*Z,p+=k.g*Z,u+=k.b*Z;else if(U.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(U.sh.coefficients[B],Z);I++}else if(U.isSunLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,Q=n.get(U);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=H;const ue=X.getViewportCount();for(let _e=0;_e<ue;_e++)i.sunShadowMatrix[E+_e]=X.getMatrix(_e),i.sunShadowCascade[E+_e]=X._cascadeData[_e];E+=ue,g++}i.sun[m]=B,m++}else if(U.isDirectionalLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,Q=n.get(U);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=H,i.directionalShadowMatrix[x]=U.shadow.matrix,b++}i.directional[x]=B,x++}else if(U.isSpotLight){const B=e.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(k).multiplyScalar(Z),B.distance=q,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,i.spot[v]=B;const X=U.shadow;if(U.map&&(i.spotLightMap[y]=U.map,y++,X.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[v]=X.matrix,U.castShadow){const Q=n.get(U);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=H,C++}v++}else if(U.isRectAreaLight){const B=e.get(U);B.color.copy(k).multiplyScalar(Z),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),i.rectArea[T]=B,T++}else if(U.isPointLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){const X=U.shadow,Q=n.get(U);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=U.shadow.matrix,w++}i.point[f]=B,f++}else if(U.isHemisphereLight){const B=e.get(U);B.skyColor.copy(U.color).multiplyScalar(Z),B.groundColor.copy(U.groundColor).multiplyScalar(Z),i.hemi[S]=B,S++}}T>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const P=i.hash;(P.sunLength!==m||P.directionalLength!==x||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==C||P.numSpotMaps!==y||P.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=x,i.spot.length=v,i.rectArea.length=T,i.point.length=f,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,P.sunLength=m,P.directionalLength=x,P.pointLength=f,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=C,P.numSpotMaps=y,P.numLightProbes=I,i.version=uw++)}function c(d,h){let p=0,u=0,m=0,g=0,E=0,x=0;const f=h.matrixWorldInverse;for(let v=0,T=d.length;v<T;v++){const S=d[v];if(S.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(S.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),E++}else if(S.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),x++}}}return{setup:l,setupView:c,state:i}}function e0(t){const e=new hw(t),n=[],i=[],r=[];function s(u){p.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function l(u){i.push(u)}function c(u){r.push(u)}function d(){e.setup(n)}function h(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:d,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function pw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new e0(t),e.set(r,[l])):s>=a.length?(l=new e0(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
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
}`,gw=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],vw=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],t0=new Rt,Ca=new W,Od=new W;function yw(t,e,n){let i=new Lh;const r=new tt,s=new tt,a=new Ct,l=new wS,c=new AS,d={},h=n.maxTextureSize,p={[Zr]:wn,[wn]:Zr,[ri]:ri},u=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:mw,fragmentShader:xw}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ft(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let f=this.type;this.render=function(w,C,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===_g&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Al);const A=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),R=t.state;R.setBlending(Hi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const F=f!==this.type;F&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=w.length;U<k;U++){const Z=w[U],q=Z.shadow;if(q===void 0){ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const H=q.getFrameExtents();r.multiply(H),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,q.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=B,q.map===null||F===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===La){if(Z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ci(r.x,r.y,{format:Jr,type:Ai,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new go(r.x,r.y,_i),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=qi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt}else Z.isPointLight?(q.map=new tv(r.x),q.map.depthTexture=new _S(r.x,wi)):(q.map=new ci(r.x,r.y),q.map.depthTexture=new go(r.x,r.y,wi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=qi,this.type===Al?(q.map.depthTexture.compareFunction=B?Rh:Nh,q.map.depthTexture.minFilter=Kt,q.map.depthTexture.magFilter=Kt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const X=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,y);for(let Q=0;Q<X;Q++){const ue=q.getCamera(Q);if(Z.isPointLight){const _e=q.camera,Xe=q.matrix,Oe=Z.distance||_e.far;Oe!==_e.far&&(_e.far=Oe,_e.updateProjectionMatrix()),Ca.setFromMatrixPosition(Z.matrixWorld),_e.position.copy(Ca),Od.copy(_e.position),Od.add(gw[Q]),_e.up.copy(vw[Q]),_e.lookAt(Od),_e.updateMatrixWorld(),Xe.makeTranslation(-Ca.x,-Ca.y,-Ca.z),t0.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),q._frustum.setFromProjectionMatrix(t0,_e.coordinateSystem,_e.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Q),t.clear();else{Q===0&&(t.setRenderTarget(q.map),t.clear());const _e=q.getViewport(Q);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),R.viewport(a)}i=q.getFrustum(Q),S(C,y,ue,Z,this.type)}q.isPointLightShadow!==!0&&this.type===La&&v(q,y),q.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(A,I,P)};function v(w,C){const y=e.update(E);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new ci(r.x,r.y,{format:Jr,type:Ai}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,y,u,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,y,m,E,null)}function T(w,C,y,A){let I=null;const P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?c:l,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const R=I.uuid,F=C.uuid;let U=d[R];U===void 0&&(U={},d[R]=U);let k=U[F];k===void 0&&(k=I.clone(),U[F]=k,C.addEventListener("dispose",b)),I=k}if(I.visible=C.visible,I.wireframe=C.wireframe,A===La?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:p[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const R=t.properties.get(I);R.light=y}return I}function S(w,C,y,A,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===La)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const F=e.update(w),U=w.material;if(Array.isArray(U)){const k=F.groups;for(let Z=0,q=k.length;Z<q;Z++){const H=k[Z],B=U[H.materialIndex];if(B&&B.visible){const X=T(w,B,A,I);w.onBeforeShadow(t,w,C,y,F,X,H),t.renderBufferDirect(y,null,F,X,w,H),w.onAfterShadow(t,w,C,y,F,X,H)}}}else if(U.visible){const k=T(w,U,A,I);w.onBeforeShadow(t,w,C,y,F,k,null),t.renderBufferDirect(y,null,F,k,w,null),w.onAfterShadow(t,w,C,y,F,k,null)}}const R=w.children;for(let F=0,U=R.length;F<U;F++)S(R[F],C,y,A,I)}function b(w){w.target.removeEventListener("dispose",b);for(const y in d){const A=d[y],I=w.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function _w(t,e){function n(){let O=!1;const he=new Ct;let te=null;const pe=new Ct(0,0,0,0);return{setMask:function(oe){te!==oe&&!O&&(t.colorMask(oe,oe,oe,oe),te=oe)},setLocked:function(oe){O=oe},setClear:function(oe,re,we,Te,dt){dt===!0&&(oe*=Te,re*=Te,we*=Te),he.set(oe,re,we,Te),pe.equals(he)===!1&&(t.clearColor(oe,re,we,Te),pe.copy(he))},reset:function(){O=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let O=!1,he=!1,te=null,pe=null,oe=null;return{setReversed:function(re){if(he!==re){const we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Te=oe;oe=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(re){re?ie(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(re){te!==re&&!O&&(t.depthMask(re),te=re)},setFunc:function(re){if(he&&(re=q1[re]),pe!==re){switch(re){case Ou:t.depthFunc(t.NEVER);break;case Fu:t.depthFunc(t.ALWAYS);break;case Bu:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case zu:t.depthFunc(t.EQUAL);break;case Vu:t.depthFunc(t.GEQUAL);break;case Hu:t.depthFunc(t.GREATER);break;case ju:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=re}},setLocked:function(re){O=re},setClear:function(re){oe!==re&&(oe=re,he&&(re=1-re),t.clearDepth(re))},reset:function(){O=!1,te=null,pe=null,oe=null,he=!1}}}function r(){let O=!1,he=null,te=null,pe=null,oe=null,re=null,we=null,Te=null,dt=null;return{setTest:function(it){O||(it?ie(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(it){he!==it&&!O&&(t.stencilMask(it),he=it)},setFunc:function(it,gn,vn){(te!==it||pe!==gn||oe!==vn)&&(t.stencilFunc(it,gn,vn),te=it,pe=gn,oe=vn)},setOp:function(it,gn,vn){(re!==it||we!==gn||Te!==vn)&&(t.stencilOp(it,gn,vn),re=it,we=gn,Te=vn)},setLocked:function(it){O=it},setClear:function(it){dt!==it&&(t.clearStencil(it),dt=it)},reset:function(){O=!1,he=null,te=null,pe=null,oe=null,re=null,we=null,Te=null,dt=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,d=new WeakMap;let h={},p={},u={},m=new WeakMap,g=[],E=null,x=!1,f=null,v=null,T=null,S=null,b=null,w=null,C=null,y=new et(0,0,0),A=0,I=!1,P=null,R=null,F=null,U=null,k=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=H>=2);let X=null,Q={};const ue=t.getParameter(t.SCISSOR_BOX),_e=t.getParameter(t.VIEWPORT),Xe=new Ct().fromArray(ue),Oe=new Ct().fromArray(_e);function Fe(O,he,te,pe){const oe=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<te;we++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(he+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return re}const K={};K[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ie(t.DEPTH_TEST),a.setFunc(ho),Ge(!1),nt(rm),ie(t.CULL_FACE),Ke(Hi);function ie(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function ye(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function ke(O,he){return u[O]!==he?(t.bindFramebuffer(O,he),u[O]=he,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(O,he){let te=g,pe=!1;if(O){te=m.get(he),te===void 0&&(te=[],m.set(he,te));const oe=O.textures;if(te.length!==oe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let re=0,we=oe.length;re<we;re++)te[re]=t.COLOR_ATTACHMENT0+re;te.length=oe.length,pe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,pe=!0);pe&&t.drawBuffers(te)}function Be(O){return E!==O?(t.useProgram(O),E=O,!0):!1}const vt={[bs]:t.FUNC_ADD,[m1]:t.FUNC_SUBTRACT,[x1]:t.FUNC_REVERSE_SUBTRACT};vt[g1]=t.MIN,vt[v1]=t.MAX;const Ve={[y1]:t.ZERO,[_1]:t.ONE,[S1]:t.SRC_COLOR,[Sg]:t.SRC_ALPHA,[A1]:t.SRC_ALPHA_SATURATE,[T1]:t.DST_COLOR,[M1]:t.DST_ALPHA,[b1]:t.ONE_MINUS_SRC_COLOR,[bg]:t.ONE_MINUS_SRC_ALPHA,[w1]:t.ONE_MINUS_DST_COLOR,[E1]:t.ONE_MINUS_DST_ALPHA,[C1]:t.CONSTANT_COLOR,[N1]:t.ONE_MINUS_CONSTANT_COLOR,[R1]:t.CONSTANT_ALPHA,[P1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ke(O,he,te,pe,oe,re,we,Te,dt,it){if(O===Hi){x===!0&&(ye(t.BLEND),x=!1);return}if(x===!1&&(ie(t.BLEND),x=!0),O!==p1){if(O!==f||it!==I){if((v!==bs||b!==bs)&&(t.blendEquation(t.FUNC_ADD),v=bs,b=bs),it)switch(O){case Ga:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case om:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",O);break}else switch(O){case Ga:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case am:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case om:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",O);break}T=null,S=null,w=null,C=null,y.set(0,0,0),A=0,f=O,I=it}return}oe=oe||he,re=re||te,we=we||pe,(he!==v||oe!==b)&&(t.blendEquationSeparate(vt[he],vt[oe]),v=he,b=oe),(te!==T||pe!==S||re!==w||we!==C)&&(t.blendFuncSeparate(Ve[te],Ve[pe],Ve[re],Ve[we]),T=te,S=pe,w=re,C=we),(Te.equals(y)===!1||dt!==A)&&(t.blendColor(Te.r,Te.g,Te.b,dt),y.copy(Te),A=dt),f=O,I=!1}function rt(O,he){O.side===ri?ye(t.CULL_FACE):ie(t.CULL_FACE);let te=O.side===wn;he&&(te=!te),Ge(te),O.blending===Ga&&O.transparent===!1?Ke(Hi):Ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const pe=O.stencilWrite;l.setTest(pe),pe&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){P!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),P=O)}function nt(O){O!==f1?(ie(t.CULL_FACE),O!==R&&(O===rm?t.cullFace(t.BACK):O===h1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),R=O}function Tt(O){O!==F&&(q&&t.lineWidth(O),F=O)}function kt(O,he,te){O?(ie(t.POLYGON_OFFSET_FILL),(U!==he||k!==te)&&(U=he,k=te,a.getReversed()&&(he=-he),t.polygonOffset(he,te))):ye(t.POLYGON_OFFSET_FILL)}function lt(O){O?ie(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ct(O){O===void 0&&(O=t.TEXTURE0+Z-1),X!==O&&(t.activeTexture(O),X=O)}function L(O,he,te){te===void 0&&(X===null?te=t.TEXTURE0+Z-1:te=X);let pe=Q[te];pe===void 0&&(pe={type:void 0,texture:void 0},Q[te]=pe),(pe.type!==O||pe.texture!==he)&&(X!==te&&(t.activeTexture(te),X=te),t.bindTexture(O,he||K[O]),pe.type=O,pe.texture=he)}function De(){const O=Q[X];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Le(){try{t.compressedTexImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function _(){try{t.texSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function z(){try{t.texSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function ae(){try{t.texStorage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function ce(){try{t.texStorage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function ee(){try{t.texImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function ne(){try{t.texImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function de(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function Ne(O,he){p[O]!==he&&(t.pixelStorei(O,he),p[O]=he)}function me(O){Xe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Xe.copy(O))}function fe(O){Oe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function Re(O,he){let te=d.get(he);te===void 0&&(te=new WeakMap,d.set(he,te));let pe=te.get(O);pe===void 0&&(pe=t.getUniformBlockIndex(he,O.name),te.set(O,pe))}function Ie(O,he){const pe=d.get(he).get(O);c.get(he)!==pe&&(t.uniformBlockBinding(he,pe,O.__bindingPointIndex),c.set(he,pe))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},X=null,Q={},u={},m=new WeakMap,g=[],E=null,x=!1,f=null,v=null,T=null,S=null,b=null,w=null,C=null,y=new et(0,0,0),A=0,I=!1,P=null,R=null,F=null,U=null,k=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ie,disable:ye,bindFramebuffer:ke,drawBuffers:ge,useProgram:Be,setBlending:Ke,setMaterial:rt,setFlipSided:Ge,setCullFace:nt,setLineWidth:Tt,setPolygonOffset:kt,setScissorTest:lt,activeTexture:ct,bindTexture:L,unbindTexture:De,compressedTexImage2D:Le,compressedTexImage3D:N,texImage2D:ee,texImage3D:ne,pixelStorei:Ne,getParameter:de,updateUBOMapping:Re,uniformBlockBinding:Ie,texStorage2D:ae,texStorage3D:ce,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:me,viewport:fe,reset:Ue}}function Sw(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new tt,h=new WeakMap,p=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,_){return g?new OffscreenCanvas(N,_):oc("canvas")}function x(N,_,z){let Y=1;const J=Le(N);if((J.width>z||J.height>z)&&(Y=z/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ae=Math.floor(Y*J.width),ce=Math.floor(Y*J.height);u===void 0&&(u=E(ae,ce));const ee=_?E(ae,ce):u;return ee.width=ae,ee.height=ce,ee.getContext("2d").drawImage(N,0,0,ae,ce),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ae+"x"+ce+")."),ee}else return"data"in N&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function f(N){return N.generateMipmaps}function v(N){t.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(N,_,z,Y,J,ae=!1){if(N!==null){if(t[N]!==void 0)return t[N];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce;Y&&(ce=e.get("EXT_texture_norm16"),ce||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===t.RED&&(z===t.FLOAT&&(ee=t.R32F),z===t.HALF_FLOAT&&(ee=t.R16F),z===t.UNSIGNED_BYTE&&(ee=t.R8),z===t.UNSIGNED_SHORT&&ce&&(ee=ce.R16_EXT),z===t.SHORT&&ce&&(ee=ce.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.R8UI),z===t.UNSIGNED_SHORT&&(ee=t.R16UI),z===t.UNSIGNED_INT&&(ee=t.R32UI),z===t.BYTE&&(ee=t.R8I),z===t.SHORT&&(ee=t.R16I),z===t.INT&&(ee=t.R32I)),_===t.RG&&(z===t.FLOAT&&(ee=t.RG32F),z===t.HALF_FLOAT&&(ee=t.RG16F),z===t.UNSIGNED_BYTE&&(ee=t.RG8),z===t.UNSIGNED_SHORT&&ce&&(ee=ce.RG16_EXT),z===t.SHORT&&ce&&(ee=ce.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RG8UI),z===t.UNSIGNED_SHORT&&(ee=t.RG16UI),z===t.UNSIGNED_INT&&(ee=t.RG32UI),z===t.BYTE&&(ee=t.RG8I),z===t.SHORT&&(ee=t.RG16I),z===t.INT&&(ee=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),z===t.UNSIGNED_INT&&(ee=t.RGB32UI),z===t.BYTE&&(ee=t.RGB8I),z===t.SHORT&&(ee=t.RGB16I),z===t.INT&&(ee=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),z===t.UNSIGNED_INT&&(ee=t.RGBA32UI),z===t.BYTE&&(ee=t.RGBA8I),z===t.SHORT&&(ee=t.RGBA16I),z===t.INT&&(ee=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&ce&&(ee=ce.RGB16_EXT),z===t.SHORT&&ce&&(ee=ce.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),_===t.RGBA){const ne=ae?ac:Qe.getTransfer(J);z===t.FLOAT&&(ee=t.RGBA32F),z===t.HALF_FLOAT&&(ee=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ee=ne===pt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&ce&&(ee=ce.RGBA16_EXT),z===t.SHORT&&ce&&(ee=ce.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(N,_){let z;return N?_===null||_===wi||_===mo?z=t.DEPTH24_STENCIL8:_===_i?z=t.DEPTH32F_STENCIL8:_===po&&(z=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===mo?z=t.DEPTH_COMPONENT24:_===_i?z=t.DEPTH_COMPONENT32F:_===po&&(z=t.DEPTH_COMPONENT16),z}function w(N,_){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==qt&&N.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?_.mipmaps.length:1}function C(N){const _=N.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(N){const _=N.target;_.removeEventListener("dispose",y),P(_)}function A(N){const _=i.get(N);if(_.__webglInit===void 0)return;const z=N.source,Y=m.get(z);if(Y){const J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(N),Object.keys(Y).length===0&&m.delete(z)}i.remove(N)}function I(N){const _=i.get(N);t.deleteTexture(_.__webglTexture);const z=N.source,Y=m.get(z);delete Y[_.__cacheKey],a.memory.textures--}function P(N){const _=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)t.deleteFramebuffer(_.__webglFramebuffer[Y]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=N.textures;for(let Y=0,J=z.length;Y<J;Y++){const ae=i.get(z[Y]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(N)}let R=0;function F(){R=0}function U(){return R}function k(N){R=N}function Z(){const N=R;return N>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),R+=1,N}function q(N){const _=[];return _.push(N.wrapS),_.push(N.wrapT),_.push(N.wrapR||0),_.push(N.magFilter),_.push(N.minFilter),_.push(N.anisotropy),_.push(N.internalFormat),_.push(N.format),_.push(N.type),_.push(N.generateMipmaps),_.push(N.premultiplyAlpha),_.push(N.flipY),_.push(N.unpackAlignment),_.push(N.colorSpace),_.join()}function H(N,_){const z=i.get(N);if(N.isVideoTexture&&L(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&z.__version!==N.version){const Y=N.image;if(Y===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(z,N,_);return}}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function B(N,_){const z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){ye(z,N,_);return}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function X(N,_){const z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){ye(z,N,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function Q(N,_){const z=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&z.__version!==N.version){ke(z,N,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const ue={[Br]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[Gu]:t.MIRRORED_REPEAT},_e={[qt]:t.NEAREST,[D1]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[od]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},Xe={[F1]:t.NEVER,[j1]:t.ALWAYS,[B1]:t.LESS,[Nh]:t.LEQUAL,[z1]:t.EQUAL,[Rh]:t.GEQUAL,[V1]:t.GREATER,[H1]:t.NOTEQUAL};function Oe(N,_){if(_.type===_i&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===od||_.magFilter===Go||_.magFilter===zr||_.minFilter===Kt||_.minFilter===od||_.minFilter===Go||_.minFilter===zr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,ue[_.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,ue[_.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,ue[_.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,_e[_.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==Go&&_.minFilter!==zr||_.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(N,_){let z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,_.addEventListener("dispose",C));const Y=_.source;let J=m.get(Y);J===void 0&&(J={},m.set(Y,J));const ae=q(_);if(ae!==N.__cacheKey){J[ae]===void 0&&(J[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ae].usedTimes++;const ce=J[N.__cacheKey];ce!==void 0&&(J[N.__cacheKey].usedTimes--,ce.usedTimes===0&&I(_)),N.__cacheKey=ae,N.__webglTexture=J[ae].texture}return z}function K(N,_,z){return Math.floor(Math.floor(N/z)/_)}function ie(N,_,z,Y){const ae=N.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,Y,_.data);else{ae.sort((Ne,me)=>Ne.start-me.start);let ce=0;for(let Ne=1;Ne<ae.length;Ne++){const me=ae[ce],fe=ae[Ne],Re=me.start+me.count,Ie=K(fe.start,_.width,4),Ue=K(me.start,_.width,4);fe.start<=Re+1&&Ie===Ue&&K(fe.start+fe.count-1,_.width,4)===Ie?me.count=Math.max(me.count,fe.start+fe.count-me.start):(++ce,ae[ce]=fe)}ae.length=ce+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,me=ae.length;Ne<me;Ne++){const fe=ae[Ne],Re=Math.floor(fe.start/4),Ie=Math.ceil(fe.count/4),Ue=Re%_.width,O=Math.floor(Re/_.width),he=Ie,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ue,O,he,te,z,Y,_.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function ye(N,_,z){let Y=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=t.TEXTURE_3D);const J=Fe(N,_),ae=_.source;n.bindTexture(Y,N.__webglTexture,t.TEXTURE0+z);const ce=i.get(ae);if(ae.version!==ce.__version||J===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const te=Qe.getPrimaries(Qe.workingColorSpace),pe=_.colorSpace===ur?null:Qe.getPrimaries(_.colorSpace),oe=_.colorSpace===ur||te===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=x(_.image,!1,r.maxTextureSize);ne=De(_,ne);const de=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let me=S(_.internalFormat,de,Ne,_.normalized,_.colorSpace,_.isVideoTexture);Oe(Y,_);let fe;const Re=_.mipmaps,Ie=_.isVideoTexture!==!0,Ue=ce.__version===void 0||J===!0,O=ae.dataReady,he=w(_,ne);if(_.isDepthTexture)me=b(_.format===Vr,_.type),Ue&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,me,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,me,ne.width,ne.height,0,de,Ne,null));else if(_.isDataTexture)if(Re.length>0){Ie&&Ue&&n.texStorage2D(t.TEXTURE_2D,he,me,Re[0].width,Re[0].height);for(let te=0,pe=Re.length;te<pe;te++)fe=Re[te],Ie?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,fe.width,fe.height,de,Ne,fe.data):n.texImage2D(t.TEXTURE_2D,te,me,fe.width,fe.height,0,de,Ne,fe.data);_.generateMipmaps=!1}else Ie?(Ue&&n.texStorage2D(t.TEXTURE_2D,he,me,ne.width,ne.height),O&&ie(_,ne,de,Ne)):n.texImage2D(t.TEXTURE_2D,0,me,ne.width,ne.height,0,de,Ne,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,Re[0].width,Re[0].height,ne.depth);for(let te=0,pe=Re.length;te<pe;te++)if(fe=Re[te],_.format!==ai)if(de!==null)if(Ie){if(O)if(_.layerUpdates.size>0){const oe=Lm(fe.width,fe.height,_.format,_.type);for(const re of _.layerUpdates){const we=fe.data.subarray(re*oe/fe.data.BYTES_PER_ELEMENT,(re+1)*oe/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,re,fe.width,fe.height,1,de,we)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,de,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,me,fe.width,fe.height,ne.depth,0,fe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,de,Ne,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,me,fe.width,fe.height,ne.depth,0,de,Ne,fe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ie&&Ue&&n.texStorage2D(t.TEXTURE_2D,he,me,Re[0].width,Re[0].height);for(let te=0,pe=Re.length;te<pe;te++)fe=Re[te],_.format!==ai?de!==null?Ie?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,te,me,fe.width,fe.height,0,fe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,fe.width,fe.height,de,Ne,fe.data):n.texImage2D(t.TEXTURE_2D,te,me,fe.width,fe.height,0,de,Ne,fe.data)}else if(_.isDataArrayTexture)if(Ie){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,ne.width,ne.height,ne.depth),O)if(_.layerUpdates.size>0){const te=Lm(ne.width,ne.height,_.format,_.type);for(const pe of _.layerUpdates){const oe=ne.data.subarray(pe*te/ne.data.BYTES_PER_ELEMENT,(pe+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,de,Ne,oe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,Ne,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,de,Ne,ne.data);else if(_.isData3DTexture)Ie?(Ue&&n.texStorage3D(t.TEXTURE_3D,he,me,ne.width,ne.height,ne.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,Ne,ne.data)):n.texImage3D(t.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,de,Ne,ne.data);else if(_.isFramebufferTexture){if(Ue)if(Ie)n.texStorage2D(t.TEXTURE_2D,he,me,ne.width,ne.height);else{let te=ne.width,pe=ne.height;for(let oe=0;oe<he;oe++)n.texImage2D(t.TEXTURE_2D,oe,me,te,pe,0,de,Ne,null),te>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),p.add(_),te.onpaint=pe=>{const oe=pe.changedElements;for(const re of p)oe.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const oe=t.RGBA,re=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,oe,re,we,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ie&&Ue){const te=Le(Re[0]);n.texStorage2D(t.TEXTURE_2D,he,me,te.width,te.height)}for(let te=0,pe=Re.length;te<pe;te++)fe=Re[te],Ie?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de,Ne,fe):n.texImage2D(t.TEXTURE_2D,te,me,de,Ne,fe);_.generateMipmaps=!1}else if(Ie){if(Ue){const te=Le(ne);n.texStorage2D(t.TEXTURE_2D,he,me,te.width,te.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ne,ne)}else n.texImage2D(t.TEXTURE_2D,0,me,de,Ne,ne);f(_)&&v(Y),ce.__version=ae.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function ke(N,_,z){if(_.image.length!==6)return;const Y=Fe(N,_),J=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+z);const ae=i.get(J);if(J.version!==ae.__version||Y===!0){n.activeTexture(t.TEXTURE0+z);const ce=Qe.getPrimaries(Qe.workingColorSpace),ee=_.colorSpace===ur?null:Qe.getPrimaries(_.colorSpace),ne=_.colorSpace===ur||ce===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!de&&!Ne?me[re]=x(_.image[re],!0,r.maxCubemapSize):me[re]=Ne?_.image[re].image:_.image[re],me[re]=De(_,me[re]);const fe=me[0],Re=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type),Ue=S(_.internalFormat,Re,Ie,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,he=ae.__version===void 0||Y===!0,te=J.dataReady;let pe=w(_,fe);Oe(t.TEXTURE_CUBE_MAP,_);let oe;if(de){O&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,fe.width,fe.height);for(let re=0;re<6;re++){oe=me[re].mipmaps;for(let we=0;we<oe.length;we++){const Te=oe[we];_.format!==ai?Re!==null?O?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,Ue,Te.width,Te.height,0,Te.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,0,0,Te.width,Te.height,Re,Ie,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,Ue,Te.width,Te.height,0,Re,Ie,Te.data)}}}else{if(oe=_.mipmaps,O&&he){oe.length>0&&pe++;const re=Le(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,re.width,re.height)}for(let re=0;re<6;re++)if(Ne){O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,Re,Ie,me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,me[re].width,me[re].height,0,Re,Ie,me[re].data);for(let we=0;we<oe.length;we++){const dt=oe[we].image[re].image;O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,0,0,dt.width,dt.height,Re,Ie,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,Ue,dt.width,dt.height,0,Re,Ie,dt.data)}}else{O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Ie,me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,Re,Ie,me[re]);for(let we=0;we<oe.length;we++){const Te=oe[we];O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,0,0,Re,Ie,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,Ue,Re,Ie,Te.image[re])}}}f(_)&&v(t.TEXTURE_CUBE_MAP),ae.__version=J.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function ge(N,_,z,Y,J,ae){const ce=s.convert(z.format,z.colorSpace),ee=s.convert(z.type),ne=S(z.internalFormat,ce,ee,z.normalized,z.colorSpace),de=i.get(_),Ne=i.get(z);if(Ne.__renderTarget=_,!de.__hasExternalTextures){const me=Math.max(1,_.width>>ae),fe=Math.max(1,_.height>>ae);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ae,ne,me,fe,_.depth,0,ce,ee,null):n.texImage2D(J,ae,ne,me,fe,0,ce,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),ct(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,Ne.__webglTexture,0,lt(_)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,Ne.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(N,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,N),_.depthBuffer){const Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ae=b(_.stencilBuffer,J),ce=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ct(_)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt(_),ae,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,N)}else{const Y=_.textures;for(let J=0;J<Y.length;J++){const ae=Y[J],ce=s.convert(ae.format,ae.colorSpace),ee=s.convert(ae.type),ne=S(ae.internalFormat,ce,ee,ae.normalized,ae.colorSpace);ct(_)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt(_),ne,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt(_),ne,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ne,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function vt(N,_,z){const Y=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,_.depthTexture);const de=s.convert(_.depthTexture.format),Ne=s.convert(_.depthTexture.type);let me;_.depthTexture.format===qi?me=t.DEPTH_COMPONENT24:_.depthTexture.format===Vr&&(me=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,_.width,_.height,0,de,Ne,null)}}else H(_.depthTexture,0);const ae=J.__webglTexture,ce=lt(_),ee=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ne=_.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===qi)ct(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ae,0);else if(_.depthTexture.format===Vr)ct(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ae,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(N){const _=i.get(N),z=N.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==N.depthTexture){const Y=N.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(N.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)vt(_.__webglFramebuffer[Y],N,Y);else{const Y=N.texture.mipmaps;Y&&Y.length>0?vt(_.__webglFramebuffer[0],N,0):vt(_.__webglFramebuffer,N,0)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=t.createRenderbuffer(),Be(_.__webglDepthbuffer[Y],N,!1);else{const J=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ae)}}else{const Y=N.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Be(_.__webglDepthbuffer,N,!1);else{const J=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(N,_,z){const Y=i.get(N);_!==void 0&&ge(Y.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ve(N)}function rt(N){const _=N.texture,z=i.get(N),Y=i.get(_);N.addEventListener("dispose",y);const J=N.textures,ae=N.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=_.version,a.memory.textures++),ae){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let ne=0;ne<_.mipmaps.length;ne++)z.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else z.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[ee]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ce)for(let ee=0,ne=J.length;ee<ne;ee++){const de=i.get(J[ee]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&ct(N)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ne=J[ee];z.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);const de=s.convert(ne.format,ne.colorSpace),Ne=s.convert(ne.type),me=S(ne.internalFormat,de,Ne,ne.normalized,ne.colorSpace,N.isXRRenderTarget===!0),fe=lt(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,me,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)ge(z.__webglFramebuffer[ee][ne],N,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else ge(z.__webglFramebuffer[ee],N,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let ee=0,ne=J.length;ee<ne;ee++){const de=J[ee],Ne=i.get(de);let me=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Ne.__webglTexture),Oe(me,de),ge(z.__webglFramebuffer,N,de,t.COLOR_ATTACHMENT0+ee,me,0),f(de)&&v(me)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,Y.__webglTexture),Oe(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)ge(z.__webglFramebuffer[ne],N,_,t.COLOR_ATTACHMENT0,ee,ne);else ge(z.__webglFramebuffer,N,_,t.COLOR_ATTACHMENT0,ee,0);f(_)&&v(ee),n.unbindTexture()}N.depthBuffer&&Ve(N)}function Ge(N){const _=N.textures;for(let z=0,Y=_.length;z<Y;z++){const J=_[z];if(f(J)){const ae=T(N),ce=i.get(J).__webglTexture;n.bindTexture(ae,ce),v(ae),n.unbindTexture()}}}const nt=[],Tt=[];function kt(N){if(N.samples>0){if(ct(N)===!1){const _=N.textures,z=N.width,Y=N.height;let J=t.COLOR_BUFFER_BIT;const ae=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(N),ee=_.length>1;if(ee)for(let de=0;de<_.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ne=N.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<_.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Ne=i.get(_[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,z,Y,0,0,z,Y,J,t.NEAREST),c===!0&&(nt.length=0,Tt.length=0,nt.push(t.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(nt.push(ae),Tt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<_.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const Ne=i.get(_[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){const _=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function lt(N){return Math.min(r.maxSamples,N.samples)}function ct(N){const _=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(N){const _=a.render.frame;h.get(N)!==_&&(h.set(N,_),N.update())}function De(N,_){const z=N.colorSpace,Y=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||z!==sc&&z!==ur&&(Qe.getTransfer(z)===pt?(Y!==ai||J!==In)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",z)),_}function Le(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=F,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Ke,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bw(t,e){function n(i,r=ur){let s;const a=Qe.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Eh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Th)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Dg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===kg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ig)return t.BYTE;if(i===Lg)return t.SHORT;if(i===po)return t.UNSIGNED_SHORT;if(i===Mh)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===Ug)return t.ALPHA;if(i===Og)return t.RGB;if(i===ai)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===Fg)return t.RED;if(i===wh)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===Ah)return t.RG_INTEGER;if(i===Ch)return t.RGBA_INTEGER;if(i===Cl||i===Nl||i===Rl||i===Pl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wu||i===Xu||i===Yu||i===qu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ku||i===$u||i===Zu||i===Qu||i===Ju||i===ic||i===ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ku||i===$u)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qu)return s.COMPRESSED_R11_EAC;if(i===Ju)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ic)return s.COMPRESSED_RG11_EAC;if(i===ef)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===df||i===uf||i===ff||i===hf||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===af)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===of)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===df)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ff)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xf||i===gf||i===vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xf)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yf||i===_f||i===rc||i===Sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
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

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new qg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ci({vertexShader:Mw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ft(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends ns{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,d=null,h=null,p=null,u=null,m=null,g=null;const E=typeof XRWebGLBinding<"u",x=new Tw,f={},v=n.getContextAttributes();let T=null,S=null;const b=[],w=[],C=new tt;let y=null,A=null;const I=new Sn;I.viewport=new Ct;const P=new Sn;P.viewport=new Ct;const R=[I,P],F=new DS;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=b[K];return ie===void 0&&(ie=new xd,b[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=b[K];return ie===void 0&&(ie=new xd,b[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=b[K];return ie===void 0&&(ie=new xd,b[K]=ie),ie.getHandSpace()};function Z(K){const ie=w.indexOf(K.inputSource);if(ie===-1)return;const ye=b[ie];ye!==void 0&&(ye.update(K.inputSource,K.frame,d||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let K=0;K<b.length;K++){const ie=w[K];ie!==null&&(w[K]=null,b[K].disconnect(ie))}U=null,k=null,x.reset();for(const K in f)delete f[K];if(e.setRenderTarget(T),m=null,u=null,p=null,r=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,ge=null;v.depth&&(ge=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=v.stencil?Vr:qi,ke=v.stencil?mo:wi);const Be={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ci(u.textureWidth,u.textureHeight,{format:ai,type:In,depthTexture:new go(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ci(m.framebufferWidth,m.framebufferHeight,{format:ai,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),d=null,a=await r.requestReferenceSpace(l),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(K){for(let ie=0;ie<K.removed.length;ie++){const ye=K.removed[ie],ke=w.indexOf(ye);ke>=0&&(w[ke]=null,b[ke].disconnect(ye))}for(let ie=0;ie<K.added.length;ie++){const ye=K.added[ie];let ke=w.indexOf(ye);if(ke===-1){for(let Be=0;Be<b.length;Be++)if(Be>=w.length){w.push(ye),ke=Be;break}else if(w[Be]===null){w[Be]=ye,ke=Be;break}if(ke===-1)break}const ge=b[ke];ge&&ge.connect(ye)}}const B=new W,X=new W;function Q(K,ie,ye){B.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);const ke=B.distanceTo(X),ge=ie.projectionMatrix.elements,Be=ye.projectionMatrix.elements,vt=ge[14]/(ge[10]-1),Ve=ge[14]/(ge[10]+1),Ke=(ge[9]+1)/ge[5],rt=(ge[9]-1)/ge[5],Ge=(ge[8]-1)/ge[0],nt=(Be[8]+1)/Be[0],Tt=vt*Ge,kt=vt*nt,lt=ke/(-Ge+nt),ct=lt*-Ge;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=vt+lt,De=Ve+lt,Le=Tt-ct,N=kt+(ke-ct),_=Ke*Ve/De*L,z=rt*Ve/De*L;K.projectionMatrix.makePerspective(Le,N,_,z,L,De),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,ye=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),F.near=P.near=I.near=ie,F.far=P.far=I.far=ye,(U!==F.near||k!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,k=F.far),F.layers.mask=K.layers.mask|6,I.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const ke=K.parent,ge=F.cameras;ue(F,ke);for(let Be=0;Be<ge.length;Be++)ue(ge[Be],ke);ge.length===2?Q(F,I,P):F.projectionMatrix.copy(I.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),_e(K,F,ke)};function _e(K,ie,ye){ye===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=lc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(K){return f[K]};let Xe=null;function Oe(K,ie){if(h=ie.getViewerPose(d||a),g=ie,h!==null){const ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ke=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let Ve=0;Ve<ye.length;Ve++){const Ke=ye[Ve];let rt=null;if(m!==null)rt=m.getViewport(Ke);else{const nt=p.getViewSubImage(u,Ke);rt=nt.viewport,Ve===0&&(e.setRenderTargetTextures(S,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(S))}let Ge=R[Ve];Ge===void 0&&(Ge=new Sn,Ge.layers.enable(Ve),Ge.viewport=new Ct,R[Ve]=Ge),Ge.matrix.fromArray(Ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(rt.x,rt.y,rt.width,rt.height),Ve===0&&(F.matrix.copy(Ge.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(Ge)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Ve=p.getDepthInformation(ye[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(Ve,r.renderState)}if(ge&&ge.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Ve=0;Ve<ye.length;Ve++){const Ke=ye[Ve].camera;if(Ke){let rt=f[Ke];rt||(rt=new qg,f[Ke]=rt);const Ge=p.getCameraImage(Ke);rt.sourceTexture=Ge}}}}for(let ye=0;ye<b.length;ye++){const ke=w[ye],ge=b[ye];ke!==null&&ge!==void 0&&ge.update(ke,ie,d||a)}Xe&&Xe(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Fe=new Jg;Fe.setAnimationLoop(Oe),this.setAnimationLoop=function(K){Xe=K},this.dispose=function(){}}}const Aw=new Rt,av=new He;av.set(-1,0,0,0,1,0,0,0,1);function Cw(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Kg(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,v,T,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),u(x,f),f.isMeshPhysicalMaterial&&m(x,f,S)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),E(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(a(x,f),f.isLineDashedMaterial&&l(x,f)):f.isPointsMaterial?c(x,f,v,T):f.isSpriteMaterial?d(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===wn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===wn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const v=e.get(f),T=v.envMap,S=v.envMapRotation;T&&(x.envMap.value=T,x.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(av),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function a(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function l(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function c(x,f,v,T){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*v,x.scale.value=T*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function d(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function u(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,v){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function E(x,f){const v=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nw(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const w=b.program;i.uniformBlockBinding(S,w)}function d(S,b){let w=r[S.id];w===void 0&&(x(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",v));const C=b.program;i.updateUBOMapping(S,C);const y=e.render.frame;s[S.id]!==y&&(u(S),s[S.id]=y)}function h(S){const b=p();S.__bindingPointIndex=b;const w=t.createBuffer(),C=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,w),w}function p(){for(let S=0;S<l;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=r[S.id],w=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,A=w.length;y<A;y++){const I=w[y];if(Array.isArray(I))for(let P=0,R=I.length;P<R;P++)m(I[P],y,P,C);else m(I,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,b,w,C){if(E(S,b,w,C)===!0){const y=S.__offset,A=S.value;if(Array.isArray(A)){let I=0;for(let P=0;P<A.length;P++){const R=A[P],F=f(R);g(R,S.__data,I),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(I+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function g(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function E(S,b,w,C){const y=S.value,A=b+"_"+w;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{const I=C[A];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function x(S){const b=S.uniforms;let w=0;const C=16;for(let A=0,I=b.length;A<I;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let R=0,F=P.length;R<F;R++){const U=P[R],k=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,q=k.length;Z<q;Z++){const H=k[Z],B=f(H),X=w%C,Q=X%B.boundary,ue=X+Q;w+=Q,ue!==0&&C-ue<B.storage&&(w+=C-ue),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=B.storage}}}const y=w%C;return y>0&&(w+=C-y),S.__size=w,S.__cache={},this}function f(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),b}function v(S){const b=S.target;b.removeEventListener("dispose",v);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function T(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:d,dispose:T}}const Rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function Pw(){return mi===null&&(mi=new gS(Rw,16,16,Jr,Ai),mi.name="DFG_LUT",mi.minFilter=Kt,mi.magFilter=Kt,mi.wrapS=zi,mi.wrapT=zi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class Iw{constructor(e={}){const{canvas:n=X1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=In}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const E=m,x=new Set([Ch,Ah,wh]),f=new Set([In,wi,po,mo,Eh,Th]),v=new Uint32Array(4),T=new Int32Array(4),S=new W;let b=null,w=null;const C=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,R=null,F=null,U=null,k=null;this._outputColorSpace=Hn;let Z=0,q=0,H=null,B=-1,X=null;const Q=new Ct,ue=new Ct;let _e=null;const Xe=new et(0);let Oe=0,Fe=n.width,K=n.height,ie=1,ye=null,ke=null;const ge=new Ct(0,0,Fe,K),Be=new Ct(0,0,Fe,K);let vt=!1;const Ve=new Lh;let Ke=!1,rt=!1;const Ge=new Rt,nt=new W,Tt=new Ct,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ct(){return H===null?ie:1}let L=i;function De(M,D){return n.getContext(M,D)}let Le,N,_,z,Y,J,ae,ce,ee,ne,de,Ne,me,fe,Re,Ie,Ue,O,he,te,pe,oe,re;try{const M={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bh}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",gn,!1),L===null){const D="webgl2";if(L=De(D,M),L===null)throw De(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(M){throw n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),ot("WebGLRenderer: "+M.message),M}function we(){Le=new PE(L),Le.init(),pe=new bw(L,Le),N=new SE(L,Le,e,pe),_=new _w(L,Le),N.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=L.createFramebuffer(),U=L.createFramebuffer(),k=L.createFramebuffer(),z=new DE(L),Y=new aw,J=new Sw(L,Le,_,Y,N,pe,z),ae=new RE(I),ce=new US(L),oe=new yE(L,ce),ee=new IE(L,ce,z,oe),ne=new UE(L,ee,ce,oe,z),O=new kE(L,N,J),Re=new bE(Y),de=new sw(I,ae,Le,N,oe,Re),Ne=new Cw(I,Y),me=new lw,fe=new pw(Le),Ue=new vE(I,ae,_,ne,g,c),Ie=new yw(I,ne,N),re=new Nw(L,z,N,_),he=new _E(L,Le,z),te=new LE(L,Le,z),z.programs=de.programs,I.capabilities=N,I.extensions=Le,I.properties=Y,I.renderLists=me,I.shadowMap=Ie,I.state=_,I.info=z}E!==In&&(A=new FE(E,n.width,n.height,l,r,s));const Te=new ww(I,L);this.xr=Te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(Fe,K,!1))},this.getSize=function(M){return M.set(Fe,K)},this.setSize=function(M,D,V=!0){if(Te.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=M,K=D,n.width=Math.floor(M*ie),n.height=Math.floor(D*ie),V===!0&&(n.style.width=M+"px",n.style.height=D+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Fe*ie,K*ie).floor()},this.setDrawingBufferSize=function(M,D,V){Fe=M,K=D,ie=V,n.width=Math.floor(M*V),n.height=Math.floor(D*V),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(E===In){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,D,V,j){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,D,V,j),_.viewport(Q.copy(ge).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,D,V,j){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,D,V,j),_.scissor(ue.copy(Be).multiplyScalar(ie).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(M){_.setScissorTest(vt=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,V=!0){let j=0;if(M){let G=!1;if(H!==null){const le=H.texture.format;G=x.has(le)}if(G){const le=H.texture.type,be=f.has(le),ve=Ue.getClearColor(),Ae=Ue.getClearAlpha(),Pe=ve.r,Ye=ve.g,$e=ve.b;be?(v[0]=Pe,v[1]=Ye,v[2]=$e,v[3]=Ae,L.clearBufferuiv(L.COLOR,0,v)):(T[0]=Pe,T[1]=Ye,T[2]=$e,T[3]=Ae,L.clearBufferiv(L.COLOR,0,T))}else j|=L.COLOR_BUFFER_BIT}D&&(j|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),R=M},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),Ue.dispose(),me.dispose(),fe.dispose(),Y.dispose(),ae.dispose(),ne.dispose(),oe.dispose(),re.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",da),Te.removeEventListener("sessionend",ua),ui.stop()};function dt(M){M.preventDefault(),dm("WebGLRenderer: Context Lost."),P=!0}function it(){dm("WebGLRenderer: Context Restored."),P=!1;const M=z.autoReset,D=Ie.enabled,V=Ie.autoUpdate,j=Ie.needsUpdate,G=Ie.type;we(),z.autoReset=M,Ie.enabled=D,Ie.autoUpdate=V,Ie.needsUpdate=j,Ie.type=G}function gn(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vn(M){const D=M.target;D.removeEventListener("dispose",vn),is(D)}function is(M){To(M),Y.remove(M)}function To(M){const D=Y.get(M).programs;D!==void 0&&(D.forEach(function(V){de.releaseProgram(V)}),M.isShaderMaterial&&de.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,V,j,G,le){D===null&&(D=kt);const be=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=Bn(M,D,V,j,G);_.setMaterial(j,be);let Ae=V.index,Pe=1;if(j.wireframe===!0){if(Ae=ee.getWireframeAttribute(V),Ae===void 0)return;Pe=2}const Ye=V.drawRange,$e=V.attributes.position;let Ce=Ye.start*Pe,ut=(Ye.start+Ye.count)*Pe;le!==null&&(Ce=Math.max(Ce,le.start*Pe),ut=Math.min(ut,(le.start+le.count)*Pe)),Ae!==null?(Ce=Math.max(Ce,0),ut=Math.min(ut,Ae.count)):$e!=null&&(Ce=Math.max(Ce,0),ut=Math.min(ut,$e.count));const Ot=ut-Ce;if(Ot<0||Ot===1/0)return;oe.setup(G,j,ve,V,Ae);let bt,gt=he;if(Ae!==null&&(bt=ce.get(Ae),gt=te,gt.setIndex(bt)),G.isMesh)j.wireframe===!0?(_.setLineWidth(j.wireframeLinewidth*ct()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(G.isLine){let en=j.linewidth;en===void 0&&(en=1),_.setLineWidth(en*ct()),G.isLineSegments?gt.setMode(L.LINES):G.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else G.isPoints?gt.setMode(L.POINTS):G.isSprite&&gt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const en=G._multiDrawStarts,Me=G._multiDrawCounts,dn=G._multiDrawCount,st=Ae?ce.get(Ae).bytesPerElement:1,zn=Y.get(j).currentProgram.getUniforms();for(let fi=0;fi<dn;fi++)zn.setValue(L,"_gl_DrawID",fi),gt.render(en[fi]/st,Me[fi])}else if(G.isInstancedMesh)gt.renderInstances(Ce,Ot,G.count);else if(V.isInstancedBufferGeometry){const en=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,en);gt.renderInstances(Ce,Ot,Me)}else gt.render(Ce,Ot)};function ca(M,D,V,j){R!==null&&M.isNodeMaterial&&R.setObject(j,M),Ke===!0&&Re.setState(M,V,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=wn,M.needsUpdate=!0,yt(M,D,j),M.side=Zr,M.needsUpdate=!0,yt(M,D,j),M.side=ri):yt(M,D,j)}this.compile=function(M,D,V=null){V===null&&(V=M),R!==null&&R.renderStart(M,D,V),w=fe.get(V),w.init(D),y.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==V&&M.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),R!==null&&R.updateLights(w.state.lightsArray),rt=this.localClippingEnabled,Ke=Re.init(this.clippingPlanes,rt),Ke===!0&&Re.setGlobalState(this.clippingPlanes,D),R!==null&&Ie.render(w.state.shadowsArray,V,D);const j=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let be=0;be<le.length;be++){const ve=le[be];ca(ve,V,D,G),j.add(ve)}else ca(le,V,D,G),j.add(le)}),w=y.pop(),R!==null&&R.renderEnd(),j},this.compileAsync=function(M,D,V=null){const j=this.compile(M,D,V);return new Promise(G=>{function le(){if(j.forEach(function(be){const Ae=Y.get(be).currentProgram;(Ae===void 0||Ae.isReady())&&j.delete(be)}),j.size===0){G(M);return}setTimeout(le,10)}Le.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let rs=null;function wo(M){rs&&rs(M)}function da(){ui.stop()}function ua(){ui.start()}const ui=new Jg;ui.setAnimationLoop(wo),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(M){rs=M,Te.setAnimationLoop(M),M===null?ui.stop():ui.start()},Te.addEventListener("sessionstart",da),Te.addEventListener("sessionend",ua),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R!==null&&R.renderStart(M,D);const V=Te.enabled===!0&&Te.isPresenting===!0,j=A!==null&&(H===null||V)&&A.begin(I,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(D),D=Te.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,D,H),w=fe.get(M,y.length),w.init(D),w.state.textureUnits=J.getTextureUnits(),y.push(w),Ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ve.setFromProjectionMatrix(Ge,Si,D.reversedDepth),rt=this.localClippingEnabled,Ke=Re.init(this.clippingPlanes,rt),b=me.get(M,C.length),b.init(),C.push(b),Te.enabled===!0&&Te.isPresenting===!0){const be=I.xr.getDepthSensingMesh();be!==null&&$i(be,D,-1/0,I.sortObjects)}$i(M,D,0,I.sortObjects),b.finish(),R!==null&&R.updateLights(w.state.lightsArray),I.sortObjects===!0&&b.sort(ye,ke),lt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,lt&&Ue.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Re.beginShadows();const G=w.state.shadowsArray;if(Ie.render(G,M,D),Ke===!0&&Re.endShadows(),(j&&A.hasRenderPass())===!1){const be=b.opaque,ve=b.transmissive;if(w.setupLights(),D.isArrayCamera){const Ae=D.cameras;if(ve.length>0)for(let Pe=0,Ye=Ae.length;Pe<Ye;Pe++){const $e=Ae[Pe];ha(be,ve,M,$e)}lt&&Ue.render(M);for(let Pe=0,Ye=Ae.length;Pe<Ye;Pe++){const $e=Ae[Pe];fa(b,M,$e,$e.viewport)}}else ve.length>0&&ha(be,ve,M,D),lt&&Ue.render(M),fa(b,M,D)}H!==null&&q===0&&(J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H)),j&&A.end(I),M.isScene===!0&&M.onAfterRender(I,M,D),oe.resetDefaultState(),B=-1,X=null,y.pop(),y.length>0?(w=y[y.length-1],J.setTextureUnits(w.state.textureUnits),Ke===!0&&Re.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,R!==null&&R.renderEnd()};function $i(M,D,V,j){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ve)){j&&Tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ge);const be=ne.update(M),ve=M.material;ve.visible&&b.push(M,be,ve,V,Tt.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ve))){const be=ne.update(M),ve=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Tt.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Tt.copy(be.boundingSphere.center)),Tt.applyMatrix4(M.matrixWorld).applyMatrix4(Ge)),Array.isArray(ve)){const Ae=be.groups;for(let Pe=0,Ye=Ae.length;Pe<Ye;Pe++){const $e=Ae[Pe],Ce=ve[$e.materialIndex];Ce&&Ce.visible&&b.push(M,be,Ce,V,Tt.z,$e,D)}}else ve.visible&&b.push(M,be,ve,V,Tt.z,null,D)}}const le=M.children;for(let be=0,ve=le.length;be<ve;be++)$i(le[be],D,V,j)}function fa(M,D,V,j){const{opaque:G,transmissive:le,transparent:be}=M;w.setupLightsView(V),Ke===!0&&Re.setGlobalState(I.clippingPlanes,V),j&&_.viewport(Q.copy(j)),G.length>0&&je(G,D,V),le.length>0&&je(le,D,V),be.length>0&&je(be,D,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ha(M,D,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){const Ce=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:Ce?Ai:In,minFilter:zr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const le=w.state.transmissionRenderTarget[j.id],be=j.viewport||Q;le.setSize(be.z*I.transmissionResolutionScale,be.w*I.transmissionResolutionScale);const ve=I.getRenderTarget(),Ae=I.getActiveCubeFace(),Pe=I.getActiveMipmapLevel();I.setRenderTarget(le),I.getClearColor(Xe),Oe=I.getClearAlpha(),Oe<1&&I.setClearColor(16777215,.5),I.clear(),lt&&Ue.render(V);const Ye=I.toneMapping;I.toneMapping=Ei;const $e=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),Ke===!0&&Re.setGlobalState(I.clippingPlanes,j),je(M,V,j),J.updateMultisampleRenderTarget(le),J.updateRenderTargetMipmap(le),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ut=0,Ot=D.length;ut<Ot;ut++){const bt=D[ut],{object:gt,geometry:en,material:Me,group:dn}=bt;if(Me.side===ri&&gt.layers.test(j.layers)){const st=Me.side;Me.side=wn,Me.needsUpdate=!0,Ut(gt,V,j,en,Me,dn),Me.side=st,Me.needsUpdate=!0,Ce=!0}}Ce===!0&&(J.updateMultisampleRenderTarget(le),J.updateRenderTargetMipmap(le))}I.setRenderTarget(ve,Ae,Pe),I.setClearColor(Xe,Oe),$e!==void 0&&(j.viewport=$e),I.toneMapping=Ye}function je(M,D,V){const j=D.isScene===!0?D.overrideMaterial:null;for(let G=0,le=M.length;G<le;G++){const be=M[G],{object:ve,geometry:Ae,group:Pe}=be;let Ye=be.material;Ye.allowOverride===!0&&j!==null&&(Ye=j),ve.layers.test(V.layers)&&Ut(ve,D,V,Ae,Ye,Pe)}}function Ut(M,D,V,j,G,le){R!==null&&G.isNodeMaterial&&R.setObject(M,G),M.onBeforeRender(I,D,V,j,G,le),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(I,D,V,j,M,le),G.transparent===!0&&G.side===ri&&G.forceSinglePass===!1?(G.side=wn,G.needsUpdate=!0,I.renderBufferDirect(V,D,j,G,M,le),G.side=Zr,G.needsUpdate=!0,I.renderBufferDirect(V,D,j,G,M,le),G.side=ri):I.renderBufferDirect(V,D,j,G,M,le),M.onAfterRender(I,D,V,j,G,le)}function yt(M,D,V){D.isScene!==!0&&(D=kt);const j=Y.get(M),G=w.state.lights,le=w.state.shadowsArray,be=G.state.version,ve=de.getParameters(M,G.state,le,D,V,w.state.lightProbeGridArray),Ae=de.getProgramCacheKey(ve);let Pe=j.programs;j.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,j.fog=D.fog;const Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;j.envMap=ae.get(M.envMap||j.environment,Ye),j.envMapRotation=j.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",vn),Pe=new Map,j.programs=Pe);let $e=Pe.get(Ae);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===be)return Kn(M,ve),$e}else ve.uniforms=de.getUniforms(M),R!==null&&M.isNodeMaterial&&R.build(M,V,ve),M.onBeforeCompile(ve,I),$e=de.acquireProgram(ve,Ae),Pe.set(Ae,$e),j.uniforms=ve.uniforms;const Ce=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Re.uniform),Kn(M,ve),j.needsLights=ht(M),j.lightsStateVersion=be,j.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.sunLights.value=G.state.sun,Ce.sunLightShadows.value=G.state.sunShadow,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.sunShadowMatrix.value=G.state.sunShadowMatrix,Ce.sunShadowCascade.value=G.state.sunShadowCascade,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),j.lightProbeGrid=w.state.lightProbeGridArray.length>0,j.currentProgram=$e,j.uniformsList=null,$e}function An(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Il.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Kn(M,D){const V=Y.get(M);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Ni(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let V=0,j=M.length;V<j;V++){const G=M[V];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Bn(M,D,V,j,G){D.isScene!==!0&&(D=kt),J.resetTextureUnits();const le=D.fog,be=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?D.environment:null,ve=H===null?I.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Qe.workingColorSpace,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Pe=ae.get(j.envMap||be,Ae),Ye=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$e=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ce=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,Ot=!!V.morphAttributes.color;let bt=Ei;j.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(bt=I.toneMapping);const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,en=gt!==void 0?gt.length:0,Me=Y.get(j),dn=w.state.lights;if(Ke===!0&&(rt===!0||M!==X)){const _t=M===X&&j.id===B;Re.setState(j,M,_t)}let st=!1;j.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==dn.state.version||Me.outputColorSpace!==ve||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Pe||j.fog===!0&&Me.fog!==le||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Re.numPlanes||Me.numIntersection!==Re.numIntersection)||Me.vertexAlphas!==Ye||Me.vertexTangents!==$e||Me.morphTargets!==Ce||Me.morphNormals!==ut||Me.morphColors!==Ot||Me.toneMapping!==bt||Me.morphTargetsCount!==en||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Me.__version=j.version);let zn=Me.currentProgram;st===!0&&(zn=yt(j,D,G),R&&j.isNodeMaterial&&R.onUpdateProgram(j,zn,Me));let fi=!1,Zi=!1,ss=!1;const xt=zn.getUniforms(),Lt=Me.uniforms;if(_.useProgram(zn.program)&&(fi=!0,Zi=!0,ss=!0),j.id!==B&&(B=j.id,Zi=!0),Me.needsLights){const _t=Ni(w.state.lightProbeGridArray,G);Me.lightProbeGrid!==_t&&(Me.lightProbeGrid=_t,Zi=!0)}if(fi||X!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",M.projectionMatrix),xt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Ji=xt.map.cameraPosition;Ji!==void 0&&Ji.setValue(L,nt.setFromMatrixPosition(M.matrixWorld)),N.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Zi=!0,ss=!0)}if(Me.needsLights&&(dn.state.sunShadowMap.length>0&&xt.setValue(L,"sunShadowMap",dn.state.sunShadowMap,J),dn.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",dn.state.directionalShadowMap,J),dn.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",dn.state.spotShadowMap,J),dn.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",dn.state.pointShadowMap,J)),G.isSkinnedMesh){xt.setOptional(L,G,"bindMatrix"),xt.setOptional(L,G,"bindMatrixInverse");const _t=G.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),xt.setValue(L,"boneTexture",_t.boneTexture,J))}G.isBatchedMesh&&(xt.setOptional(L,G,"batchingTexture"),xt.setValue(L,"batchingTexture",G._matricesTexture,J),xt.setOptional(L,G,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",G._indirectTexture,J),xt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",G._colorsTexture,J));const Qi=V.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&O.update(G,V,zn),(Zi||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,xt.setValue(L,"receiveShadow",G.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=Pw()),Zi){if(xt.setValue(L,"toneMappingExposure",I.toneMappingExposure),Me.needsLights&&$n(Lt,ss),le&&j.fog===!0&&Ne.refreshFogUniforms(Lt,le),Ne.refreshMaterialUniforms(Lt,j,ie,K,w.state.transmissionRenderTarget[M.id]),Me.needsLights&&Me.lightProbeGrid){const _t=Me.lightProbeGrid;Lt.probesSH.value=_t.texture,Lt.probesMin.value.copy(_t.boundingBox.min),Lt.probesMax.value.copy(_t.boundingBox.max),Lt.probesResolution.value.copy(_t.resolution)}Il.upload(L,An(Me),Lt,J)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Il.upload(L,An(Me),Lt,J),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(L,"center",G.center),xt.setValue(L,"modelViewMatrix",G.modelViewMatrix),xt.setValue(L,"normalMatrix",G.normalMatrix),xt.setValue(L,"modelMatrix",G.matrixWorld),j.uniformsGroups!==void 0){const _t=j.uniformsGroups;for(let Ji=0,as=_t.length;Ji<as;Ji++){const Vh=_t[Ji];re.update(Vh,zn),re.bind(Vh,zn)}}return zn}function $n(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function ht(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,D,V){const j=Y.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=D,Y.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:V,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const V=Y.get(M);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,V=0){H=M,Z=D,q=V;let j=null,G=!1,le=!1;if(M){const ve=Y.get(M);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,ve.__webglFramebuffer),Q.copy(M.viewport),ue.copy(M.scissor),_e=M.scissorTest,_.viewport(Q),_.scissor(ue),_.setScissorTest(_e),B=-1;return}else if(ve.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(ve.__hasExternalTextures)J.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(ve.__boundDepthTexture!==Ye){if(Ye!==null&&Y.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Pe=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?j=Pe[D][V]:j=Pe[D],G=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?j=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?j=Pe[V]:j=Pe,Q.copy(M.viewport),ue.copy(M.scissor),_e=M.scissorTest}else Q.copy(ge).multiplyScalar(ie).floor(),ue.copy(Be).multiplyScalar(ie).floor(),_e=vt;if(V!==0&&(j=F),_.bindFramebuffer(L.FRAMEBUFFER,j)&&_.drawBuffers(M,j),_.viewport(Q),_.scissor(ue),_.setScissorTest(_e),G){const ve=Y.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,V)}else if(le){const ve=D;for(let Ae=0;Ae<M.textures.length;Ae++){const Pe=Y.get(M.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,V,ve)}}else if(M!==null&&V!==0){const ve=Y.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,V)}B=-1};function Jt(M){const D=Y.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=N.textureFormatReadable(M.format),D.__typeReadable=N.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,V,j,G,le,be,ve=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){_.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Pe=M.textures[ve],Ye=Pe.format,$e=Pe.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve);const Ce=Jt(Pe);if(Ce.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-j&&V>=0&&V<=M.height-G&&L.readPixels(D,V,j,G,pe.convert(Ye),pe.convert($e),le)}finally{const Pe=H!==null?Y.get(H).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,D,V,j,G,le,be,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae)if(D>=0&&D<=M.width-j&&V>=0&&V<=M.height-G){_.bindFramebuffer(L.FRAMEBUFFER,Ae);const Pe=M.textures[ve],Ye=Pe.format,$e=Pe.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve);const Ce=Jt(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ut),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),L.readPixels(D,V,j,G,pe.convert(Ye),pe.convert($e),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ot=H!==null?Y.get(H).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ot);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Y1(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ut),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ut),L.deleteSync(bt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,V=0){const j=Math.pow(2,-V),G=Math.floor(M.image.width*j),le=Math.floor(M.image.height*j),be=D!==null?D.x:0,ve=D!==null?D.y:0;J.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,be,ve,G,le),_.unbindTexture()},this.copyTextureToTexture=function(M,D,V=null,j=null,G=0,le=0){let be,ve,Ae,Pe,Ye,$e,Ce,ut,Ot;const bt=M.isCompressedTexture?M.mipmaps[le]:M.image;if(V!==null)be=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ae=V.isBox3?V.max.z-V.min.z:1,Pe=V.min.x,Ye=V.min.y,$e=V.isBox3?V.min.z:0;else{const Lt=Math.pow(2,-G);be=Math.floor(bt.width*Lt),ve=Math.floor(bt.height*Lt),M.isDataArrayTexture?Ae=bt.depth:M.isData3DTexture?Ae=Math.floor(bt.depth*Lt):Ae=1,Pe=0,Ye=0,$e=0}j!==null?(Ce=j.x,ut=j.y,Ot=j.z):(Ce=0,ut=0,Ot=0);const gt=pe.convert(D.format),en=pe.convert(D.type);let Me;D.isData3DTexture?(J.setTexture3D(D,0),Me=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),Me=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const dn=_.getParameter(L.UNPACK_ROW_LENGTH),st=_.getParameter(L.UNPACK_IMAGE_HEIGHT),zn=_.getParameter(L.UNPACK_SKIP_PIXELS),fi=_.getParameter(L.UNPACK_SKIP_ROWS),Zi=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),_.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),_.pixelStorei(L.UNPACK_SKIP_IMAGES,$e);const ss=M.isDataArrayTexture||M.isData3DTexture,xt=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const Lt=Y.get(M),Qi=Y.get(D),_t=Y.get(Lt.__renderTarget),Ji=Y.get(Qi.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let as=0;as<Ae;as++)ss&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,G,$e+as),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(D).__webglTexture,le,Ot+as)),L.blitFramebuffer(Pe,Ye,be,ve,Ce,ut,be,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Y.has(M)){const Lt=Y.get(M),Qi=Y.get(D);_.bindFramebuffer(L.READ_FRAMEBUFFER,U),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let _t=0;_t<Ae;_t++)ss?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,G,$e+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,G),xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qi.__webglTexture,le,Ot+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qi.__webglTexture,le),G!==0?L.blitFramebuffer(Pe,Ye,be,ve,Ce,ut,be,ve,L.COLOR_BUFFER_BIT,L.NEAREST):xt?L.copyTexSubImage3D(Me,le,Ce,ut,Ot+_t,Pe,Ye,be,ve):L.copyTexSubImage2D(Me,le,Ce,ut,Pe,Ye,be,ve);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Me,le,Ce,ut,Ot,be,ve,Ae,gt,en,bt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,le,Ce,ut,Ot,be,ve,Ae,gt,bt.data):L.texSubImage3D(Me,le,Ce,ut,Ot,be,ve,Ae,gt,en,bt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,le,Ce,ut,be,ve,gt,en,bt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,le,Ce,ut,bt.width,bt.height,gt,bt.data):L.texSubImage2D(L.TEXTURE_2D,le,Ce,ut,be,ve,gt,en,bt);_.pixelStorei(L.UNPACK_ROW_LENGTH,dn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),_.pixelStorei(L.UNPACK_SKIP_PIXELS,zn),_.pixelStorei(L.UNPACK_SKIP_ROWS,fi),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Zi),le===0&&D.generateMipmaps&&L.generateMipmap(Me),_.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){Z=0,q=0,H=null,_.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const n0={"ev-2":{id:"ev-2",title:"EAST GRANDFATHER CLOCK",code:"OBJ-01 // TIME ARRESTED",clueId:"ev-2",bullet1:"CLOCK HALTED: 11:47 PM precisely.",bullet2:"ANOMALY: Graphite sliver wedged in escapement wheel.",bullet3:"TACTICAL FACT: Deliberately frozen before midnight to fabricate time of death."},"ev-11":{id:"ev-11",title:"STUDY 17-B CRIME SCENE",code:"BREACH // DEADBOLT SEALED",clueId:"ev-11",bullet1:"BREACH STATUS: Heavy oak door locked from inside.",bullet2:"TIMELINE CONFLICT: Assault recorded at 11:47 PM; Sen alive at 12:03 AM.",bullet3:"FATAL WINDOW: True smothering occurred during Kabir's 12:13 AM blackout."},"ev-4":{id:"ev-4",title:"DICTAPHONE CASSETTE REEL #4",code:"INTEL-04 // AUDIO RECON",clueId:"ev-4",bullet1:'NORMAL TAPE (1.0x): "When the house stopped... someone started."',bullet2:'SUB-BASS SLOWDOWN (0.5x): "Someone started BEFORE the house stopped."',bullet3:"FORENSIC LINK: Tampering initiated prior to the blackout."},"ev-3":{id:"ev-3",title:"ARCHIVE CABINET VAULT",code:"CLUE-03 // FORCED ENTRY",clueId:"ev-3",bullet1:"VAULT COMPROMISED: Chisel marks match Aarav Mehta's tool.",bullet2:"STOLEN INTEL: 20 years of Blackwood memory-erasure experiments.",bullet3:"SECONDARY CRIME: Aarav committed corporate espionage, not murder."},"ev-13":{id:"ev-13",title:"CARETAKER SERVICE GRATE",code:"ROUTE // SECRET SHAFT",clueId:"ev-13",bullet1:"CONCEALED TUNNEL: Directly bypasses the locked Study 17-B door.",bullet2:"BOOT PRINTS: Muddy tread matches caretaker Devraj Negi.",bullet3:"KILLER ROUTE: Dev entered silently during the 12:13 blackout."}},Lw=({onInspectClue:t,onOpenTerminal:e,onTriggerTrauma:n})=>{const i=Se.useRef(null),[r,s]=Se.useState(null),[a,l]=Se.useState(!0),[c,d]=Se.useState(!1),[h,p]=Se.useState(null),[u,m]=Se.useState(0),[g,E]=Se.useState(null),[x,f]=Se.useState(null),[v,T]=Se.useState(null),S=Se.useRef(()=>{}),b=Se.useRef(()=>{}),w=(P,R,F="#00ffcc")=>{const U=document.createElement("canvas");U.width=512,U.height=256;const k=U.getContext("2d");return k.clearRect(0,0,512,256),k.shadowColor=F,k.shadowBlur=24,k.fillStyle=F,k.font='bold 24px "Courier New", monospace',k.textAlign="center",k.fillText(P,256,100),R&&(k.font='bold 16px "Courier New", monospace',k.fillStyle="#ff66ff",k.shadowColor="#ff00ff",k.shadowBlur=18,k.fillText(R,256,150)),k.strokeStyle=F,k.lineWidth=3,k.strokeRect(20,20,472,216),new vs(U)},C=()=>{const P=document.createElement("canvas");P.width=512,P.height=512;const R=P.getContext("2d");R.fillStyle="#22080c",R.fillRect(0,0,512,512),R.strokeStyle="#3d1016",R.lineWidth=4;for(let k=0;k<512;k+=64){R.beginPath(),R.moveTo(k,0),R.lineTo(k,512),R.stroke();for(let Z=32;Z<512;Z+=64)R.fillStyle="#4a141b",R.beginPath(),R.arc(k,Z,8,0,Math.PI*2),R.fill()}const F=R.createLinearGradient(0,0,0,512);F.addColorStop(0,"rgba(0,0,0,0.6)"),F.addColorStop(.5,"rgba(0,0,0,0.1)"),F.addColorStop(1,"rgba(0,0,0,0.8)"),R.fillStyle=F,R.fillRect(0,0,512,512);const U=new vs(P);return U.wrapS=Br,U.wrapT=Br,U.repeat.set(4,1),U},y=()=>{const P=document.createElement("canvas");P.width=512,P.height=512;const R=P.getContext("2d");R.fillStyle="#140c08",R.fillRect(0,0,512,512),R.strokeStyle="#080503",R.lineWidth=3;for(let U=0;U<512;U+=32){R.beginPath(),R.moveTo(0,U),R.lineTo(512,U),R.stroke();for(let k=U%64===0?0:40;k<512;k+=80)R.fillStyle=Math.random()>.5?"#1a100a":"#120a06",R.fillRect(k,U,78,30),R.beginPath(),R.moveTo(k,U),R.lineTo(k,U+32),R.stroke()}const F=new vs(P);return F.wrapS=Br,F.wrapT=Br,F.repeat.set(2,6),F},A=()=>{const P=document.createElement("canvas");P.width=256,P.height=1024;const R=P.getContext("2d");return R.fillStyle="#38060b",R.fillRect(0,0,256,1024),R.strokeStyle="#997a3d",R.lineWidth=8,R.strokeRect(12,12,232,1e3),R.strokeStyle="#1a243b",R.lineWidth=4,R.strokeRect(24,24,208,976),R.fillStyle="rgba(90, 0, 0, 0.85)",R.beginPath(),R.moveTo(110,800),R.bezierCurveTo(140,600,90,300,130,50),R.lineTo(150,50),R.bezierCurveTo(110,300,160,600,130,800),R.fill(),new vs(P)},I=(P,R,F=!1)=>{const U=document.createElement("canvas");U.width=256,U.height=340;const k=U.getContext("2d");return k.fillStyle="#8a6d2b",k.fillRect(0,0,256,340),k.fillStyle="#543f12",k.fillRect(8,8,240,324),k.fillStyle="#100b08",k.fillRect(18,18,220,304),k.fillStyle="#261914",k.beginPath(),k.arc(128,120,55,0,Math.PI*2),k.fill(),k.beginPath(),k.ellipse(128,240,75,60,0,0,Math.PI*2),k.fill(),k.fillStyle="#ff3333",k.beginPath(),k.arc(115,115,3.5,0,Math.PI*2),k.arc(141,115,3.5,0,Math.PI*2),k.fill(),F&&(k.fillStyle="#8b0000",k.beginPath(),k.moveTo(115,120),k.lineTo(112,280),k.lineTo(118,280),k.fill()),k.fillStyle="#c9b277",k.fillRect(50,285,156,26),k.fillStyle="#1a1005",k.font="bold 11px Courier New",k.textAlign="center",k.fillText(P,128,302),new vs(U)};return Se.useEffect(()=>{if(!i.current)return;const P=new cS;P.fog=new Ih(394506,.09);const R=new Sn(70,i.current.clientWidth/i.current.clientHeight,.1,100);R.position.set(0,1.6,12);const F=new Iw({antialias:!0,powerPreference:"high-performance"});F.setSize(i.current.clientWidth,i.current.clientHeight),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.shadowMap.enabled=!0,F.shadowMap.type=_g,i.current.appendChild(F.domElement);const U=new IS(656906,.8);P.add(U);const k=new NS(16772829,4.2,26,Math.PI/5.5,.5,1.1);k.castShadow=!0,R.add(k),k.position.set(.2,-.2,0),k.target.position.set(0,0,-5),R.add(k.target),P.add(R);const Z=new PS(16742178,1.4,12,1.2);Z.position.set(0,2.8,0),P.add(Z);const q=new Rn(8,36),H=new an({map:y(),roughness:.6,metalness:.2}),B=new ft(q,H);B.rotation.x=-Math.PI/2,B.receiveShadow=!0,P.add(B);const X=new Rn(2.4,34),Q=new an({map:A(),roughness:.9}),ue=new ft(X,Q);ue.rotation.x=-Math.PI/2,ue.position.set(0,.015,0),ue.receiveShadow=!0,P.add(ue);const _e=new ft(new Rn(8,36),new an({color:657677,roughness:.9}));_e.rotation.x=Math.PI/2,_e.position.y=3.2,P.add(_e);const Xe=new Rn(36,3.2),Oe=new an({map:C(),roughness:.7}),Fe=new ft(Xe,Oe);Fe.rotation.y=Math.PI/2,Fe.position.set(-4,1.6,0),P.add(Fe);const K=new ft(Xe,Oe);K.rotation.y=-Math.PI/2,K.position.set(4,1.6,0),P.add(K);const ie=new ft(new Rn(8,3.2),Oe);ie.position.set(0,1.6,18),ie.rotation.y=Math.PI,P.add(ie);const ye=400,ke=new Fn,ge=new Float32Array(ye*3);for(let je=0;je<ye*3;je+=3)ge[je]=(Math.random()-.5)*7.5,ge[je+1]=Math.random()*3,ge[je+2]=(Math.random()-.5)*34;ke.setAttribute("position",new Ti(ge,3));const Be=new Xg({color:14534816,size:.04,transparent:!0,opacity:.55}),vt=new yS(ke,Be);P.add(vt);const Ve=new Rn(1.2,1.6),Ke=new ft(Ve,new an({map:I("PROF. V. SEN","1968-DECEASED",!0)}));Ke.rotation.y=Math.PI/2,Ke.position.set(-3.95,1.8,6),P.add(Ke);const rt=new ft(Ve,new an({map:I("A. BLACKWOOD","MISSING 20 YRS",!1)}));rt.rotation.y=-Math.PI/2,rt.position.set(3.95,1.8,0),P.add(rt);const Ge=new ft(Ve,new an({map:I("DR. M. PATEL","PRIMARY SUSPECT",!0)}));Ge.rotation.y=Math.PI/2,Ge.position.set(-3.95,1.8,-8),P.add(Ge);const nt=new pr;nt.position.set(0,0,16);const Tt=new ft(new yi(1,2.7,.65),new an({color:2363655,roughness:.5,metalness:.2}));Tt.position.y=1.35,nt.add(Tt);const kt=new ft(new Xa(.35,.35,.06,32),new an({color:15127731,roughness:.3}));kt.rotation.x=Math.PI/2,kt.position.set(0,2.1,.35),nt.add(kt);const lt=new ft(new Xa(.02,.02,1,8),new an({color:13938487,metalness:.9,roughness:.1}));lt.position.set(0,1.05,.15),nt.add(lt),P.add(nt);const ct=new pr;ct.position.set(0,0,-17.8);const L=new ft(new yi(1.8,2.9,.12),new an({color:3016712,roughness:.4}));L.position.y=1.45,ct.add(L);const De=new ft(new Dh(.09,16,16),new an({color:13145662,metalness:.95,roughness:.1}));De.position.set(.65,1.35,.12),ct.add(De);const Le=new ft(new Rn(1.7,.22),new an({color:16771584,roughness:.3}));Le.position.set(0,1.6,.15),ct.add(Le),P.add(ct);const N=new pr;N.position.set(-3.2,0,-4);const _=new ft(new yi(1.1,.9,1.4),new an({color:2035719,roughness:.7}));_.position.y=.45,N.add(_);const z=new ft(new yi(.55,.18,.45),new an({color:3355448,metalness:.7}));z.position.set(0,.99,0),N.add(z),P.add(N);const Y=new pr;Y.position.set(3.2,0,4);const J=new ft(new yi(.9,2.3,1.3),new an({color:1579039,roughness:.6}));J.position.y=1.15,Y.add(J),P.add(Y);const ae=new ft(new Xa(.38,.48,1.85,16),new Wa({color:0}));ae.position.set(-2.5,.92,-15),P.add(ae);let ce=!0;const ee=[],ne=(je,Ut,yt,An=3,Kn=1.4)=>{const Ni=new Rn(An,Kn),Bn=new Wa({map:w(je,Ut,yt),transparent:!0,opacity:0,visible:!1,depthWrite:!1,side:ri});return ee.push(Bn),new ft(Ni,Bn)},de=ne("DON'T TRUST KITCHEN CLOCK","+16 MIN FORWARD OFFSET","#00ffcc",3.2,1.5);de.position.set(-3.94,1.5,9),de.rotation.y=Math.PI/2,P.add(de);const Ne=ne("MEERA STRUCK HIM AT 11:47 PM","SEN WAS BREATHING AT 12:03 AM","#00ff88",2.5,1.3);Ne.position.set(0,.03,0),Ne.rotation.x=-Math.PI/2,P.add(Ne);const me=ne("DEV IS IN THE WALLS","SERVICE TUNNEL BYPASSES 17-B LOCK","#ff00ea",3.2,1.5);me.position.set(3.94,1.5,-8),me.rotation.y=-Math.PI/2,P.add(me);const fe=ne("SPOOL 12: PRINTED AT 11:41 PM","PRE-CRIME FABRICATION DETECTED","#00ffff",1.6,.9);fe.position.set(0,2,-17.7),P.add(fe);const Re=[],Ie=(je,Ut,yt,An,Kn,Ni)=>{const Bn=document.createElement("canvas");Bn.width=512,Bn.height=140;const $n=new vs(Bn);$n.minFilter=Kt;const ht=new Wa({map:$n,transparent:!0,opacity:.95,depthWrite:!1,side:ri}),Jt=new ft(new Rn(2.6,.7),ht);Jt.position.copy(Ni),P.add(Jt),Re.push({id:je,clueId:Ut,code:yt,title:An,pos:Ni,mesh:Jt,color:Kn,canvas:Bn,texture:$n})};Ie("wp-clock","ev-2","OBJ 01 // HALTED 11:47 PM","GRANDFATHER CLOCK","#f59e0b",new W(0,2.7,16)),Ie("wp-door","ev-11","BREACH // LOCKED SCENE","STUDY 17-B DOOR","#ef4444",new W(0,3.1,-17.5)),Ie("wp-tape","ev-4","INTEL 04 // AUDIO REEL","DICTAPHONE TAPE #4","#06b6d4",new W(-3.2,1.8,-4)),Ie("wp-cabinet","ev-3","CLUE 03 // EVIDENCE THEFT","ARCHIVE CABINET","#a855f7",new W(3.2,2,4)),Ie("wp-grate","ev-13","ROUTE // CARETAKER ACCESS","SERVICE TUNNEL GRATE","#10b981",new W(2.8,1.3,-10));let Ue=!0,O=!1;const he=(je,Ut)=>{je?Ut?(k.color.setHex(10309341),k.intensity=6.2,U.color.setHex(393740)):(k.color.setHex(16772829),k.intensity=4.2,U.color.setHex(656906)):k.intensity=0,ee.forEach(yt=>{yt.visible=Ut&&je,yt.opacity=Ut&&je?.96:0})},te=()=>{Ue=!Ue,l(Ue),$.playTick(!1),he(Ue,O)},pe=()=>{O=!O,d(O),$.playNightVisionToggle(),O&&$.playHorrorStinger(),he(Ue,O)};S.current=te,b.current=pe;const oe={};let re=0,we=0,Te=!1,dt=0,it=0,gn=0,vn=0,is=0;const To=je=>{oe[je.code]=!0,is=0,je.code==="KeyF"&&te(),je.code==="KeyL"&&pe(),je.code==="KeyE"&&ua(!0),je.code==="Tab"&&(je.preventDefault(),e(),$.playTick(!1))},ca=je=>{oe[je.code]=!1},rs=je=>{Te=!0,dt=je.clientX,it=je.clientY},wo=()=>{Te=!1},da=je=>{if(!Te)return;const Ut=je.clientX-dt,yt=je.clientY-it;dt=je.clientX,it=je.clientY,we-=Ut*.003,re-=yt*.003,re=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,re))};window.addEventListener("keydown",To),window.addEventListener("keyup",ca),window.addEventListener("mousedown",rs),window.addEventListener("mouseup",wo),window.addEventListener("mousemove",da);const ua=(je=!1)=>{const Ut=R.position;let yt=null;if(Ut.distanceTo(nt.position)<3.8?yt={title:"GRANDFATHER CLOCK (HALTED AT 11:47 PM)",clueId:"ev-2"}:Ut.distanceTo(ct.position)<4.2?(yt={title:"STUDY 17-B LOCKED CRIME SCENE DOOR",clueId:"ev-11"},je&&($.playDoorRattle(),$.playTerrifyingScream(),n())):Ut.distanceTo(N.position)<3.2?yt={title:"DICTAPHONE CASSETTE RECORDER #4",clueId:"ev-4"}:Ut.distanceTo(Y.position)<3.2?yt={title:"ARCHIVE CABINET (AARAV STOLEN NOTEBOOK)",clueId:"ev-3"}:Ut.distanceTo(new W(2.8,0,-10))<3&&(yt={title:"HIDDEN CARETAKER SERVICE GRATE (DEV ROUTE)",clueId:"ev-13"}),s(yt),je&&yt){$.playHitmarker(),$.playRadioChirp();const An=n0[yt.clueId];An?(f(An),T({title:An.title,pts:100}),$.playObjectiveComplete(),setTimeout(()=>T(null),2500)):t(yt.clueId)}};let ui,$i=0;const fa=()=>{ui=requestAnimationFrame(fa),$i+=.02,lt.rotation.z=Math.sin($i*2.8)*.28,Z.intensity=1+Math.sin($i*18)*.3+(Math.random()>.96?-.7:0);const je=vt.geometry.attributes.position.array;for(let ht=1;ht<je.length;ht+=3)je[ht]-=.002,je[ht]<0&&(je[ht]=3);vt.geometry.attributes.position.needsUpdate=!0,m(we);const Ut=R.position;let yt=null,An=3.8;if(Re.forEach(ht=>{ht.mesh.lookAt(R.position),ht.mesh.position.y=ht.pos.y+Math.sin($i*2.8+ht.pos.z)*.06;const Jt=Ut.distanceTo(ht.pos);Jt<An&&(An=Jt,yt={id:ht.id,title:ht.title,clueId:ht.clueId,code:ht.code,dist:Jt,summary:""});const M=Jt<3.8,D=ht.canvas.getContext("2d");D.clearRect(0,0,512,140),D.strokeStyle=M?"#ff0033":ht.color,D.lineWidth=M?5:3,D.shadowColor=M?"#ff0033":ht.color,D.shadowBlur=M?22:10;const V=8,j=512-V*2,G=140-V*2,le=25;D.beginPath(),D.moveTo(V,V+le),D.lineTo(V,V),D.lineTo(V+le,V),D.moveTo(V+j-le,V),D.lineTo(V+j,V),D.lineTo(V+j,V+le),D.moveTo(V,V+G-le),D.lineTo(V,V+G),D.lineTo(V+le,V+G),D.moveTo(V+j-le,V+G),D.lineTo(V+j,V+G),D.lineTo(V+j,V+G-le),D.stroke(),D.fillStyle=M?"rgba(50, 0, 10, 0.88)":"rgba(8, 8, 16, 0.75)",D.fillRect(V+3,V+3,j-6,G-6),D.fillStyle=M?"#ff0033":ht.color,D.beginPath(),D.moveTo(40,70),D.lineTo(55,50),D.lineTo(70,70),D.lineTo(55,90),D.closePath(),D.fill(),D.fillStyle="#888888",D.font='bold 16px "Courier New", monospace',D.textAlign="left",D.fillText(ht.code,85,48),D.fillStyle="#ffffff",D.font='bold 22px "Courier New", monospace',D.fillText(ht.title,85,76),D.fillStyle=M?"#ff3344":"#00ffcc",D.font='bold 18px "Courier New", monospace';const be=M?`[E] SECURE INTEL (${Jt.toFixed(1)}m)`:`DISTANCE: ${Jt.toFixed(1)}m`;D.fillText(be,85,104),ht.texture.needsUpdate=!0}),E(yt),ce&&R.position.z<1&&(ce=!1,P.remove(ae),$.playTerrifyingScream(),$.playViolinShriek(),n()),is++,is>700){is=0;const ht=["He's behind you...","The clock lied...","Meera didn't kill him...","Dev was waiting in the dark..."],Jt=ht[Math.floor(Math.random()*ht.length)];p(Jt),$.playBinauralWhisper(Jt),setTimeout(()=>p(null),3e3)}R.rotation.order="YXZ",R.rotation.y=we,R.rotation.x=re;const Kn=.085,Ni=new W(0,0,-1).applyAxisAngle(new W(0,1,0),we),Bn=new W(1,0,0).applyAxisAngle(new W(0,1,0),we);let $n=!1;(oe.KeyW||oe.ArrowUp)&&(R.position.addScaledVector(Ni,Kn),$n=!0),(oe.KeyS||oe.ArrowDown)&&(R.position.addScaledVector(Ni,-Kn),$n=!0),(oe.KeyA||oe.ArrowLeft)&&(R.position.addScaledVector(Bn,-Kn),$n=!0),(oe.KeyD||oe.ArrowRight)&&(R.position.addScaledVector(Bn,Kn),$n=!0),R.position.x=Math.max(-3.4,Math.min(3.4,R.position.x)),R.position.z=Math.max(-16.5,Math.min(16.5,R.position.z)),$n?(gn+=.16,R.position.y=1.6+Math.sin(gn)*.04,vn++,vn>18&&($.playFootstep(),vn=0)):R.position.y=1.6,ua(!1),F.render(P,R)};fa();const ha=()=>{i.current&&(R.aspect=i.current.clientWidth/i.current.clientHeight,R.updateProjectionMatrix(),F.setSize(i.current.clientWidth,i.current.clientHeight))};return window.addEventListener("resize",ha),()=>{cancelAnimationFrame(ui),window.removeEventListener("resize",ha),window.removeEventListener("keydown",To),window.removeEventListener("keyup",ca),window.removeEventListener("mousedown",rs),window.removeEventListener("mouseup",wo),window.removeEventListener("mousemove",da),F.dispose(),i.current&&(i.current.innerHTML="")}},[]),o.jsxs("div",{className:"relative w-full h-[78vh] min-h-[550px] bg-black rounded-lg overflow-hidden border-2 border-red-950 shadow-[0_0_60px_rgba(0,0,0,0.95)] select-none font-mono crt-overlay",children:[o.jsx("div",{ref:i,className:"w-full h-full cursor-crosshair"}),o.jsxs("div",{className:"absolute top-2 left-1/2 -translate-x-1/2 w-[340px] sm:w-[480px] h-8 bg-black/80 backdrop-blur-md border border-gray-800/90 rounded-sm overflow-hidden pointer-events-none z-30 shadow-2xl flex flex-col items-center justify-center",children:[o.jsx("div",{className:"absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 shadow-[0_0_8px_#ff0000]"}),o.jsx("div",{className:"absolute -top-1 w-2 h-2 rotate-45 bg-red-500 z-10"}),o.jsx("div",{className:"flex items-center gap-6 text-[10px] font-mono tracking-widest text-gray-400 select-none whitespace-nowrap transition-transform ease-out duration-75",style:{transform:`translateX(${-(u*(180/Math.PI)*2.2)%360}px)`},children:[-360,0,360].map(P=>o.jsxs(h0.Fragment,{children:[o.jsxs("span",{children:["000° ",o.jsx("strong",{className:"text-white",children:"N"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["045° ",o.jsx("strong",{className:"text-amber-400",children:"NE"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["090° ",o.jsx("strong",{className:"text-white",children:"E"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["135° ",o.jsx("strong",{className:"text-amber-400",children:"SE"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["180° ",o.jsx("strong",{className:"text-red-500",children:"S"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["225° ",o.jsx("strong",{className:"text-amber-400",children:"SW"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["270° ",o.jsx("strong",{className:"text-white",children:"W"})]}),o.jsx("span",{children:"•"}),o.jsxs("span",{children:["315° ",o.jsx("strong",{className:"text-amber-400",children:"NW"})]}),o.jsx("span",{children:"•"})]},P))})]}),o.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center z-20",children:g?o.jsxs("div",{className:"relative flex items-center justify-center animate-pulse",children:[o.jsx("div",{className:"w-10 h-10 border-2 border-red-500/80 rounded-sm rotate-45 shadow-[0_0_15px_rgba(255,0,0,0.9)]"}),o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 absolute shadow-[0_0_8px_#ff0000]"}),o.jsxs("span",{className:"absolute -top-8 text-[10px] bg-black/95 px-2.5 py-0.5 rounded border border-red-600 text-red-400 font-black tracking-widest uppercase whitespace-nowrap shadow-xl",children:["[E] ",g.title," (",g.dist.toFixed(1),"m)"]})]}):o.jsxs("div",{className:"relative flex items-center justify-center",children:[o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_6px_#ff0000]"}),o.jsx("div",{className:"absolute w-4 h-0.5 bg-red-500/40 -left-5"}),o.jsx("div",{className:"absolute w-4 h-0.5 bg-red-500/40 -right-5"}),o.jsx("div",{className:"absolute h-4 w-0.5 bg-red-500/40 -top-5"}),o.jsx("div",{className:"absolute h-4 w-0.5 bg-red-500/40 -bottom-5"})]})}),c&&o.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10",children:[o.jsx("div",{className:"absolute inset-0 shadow-[inset_0_0_120px_rgba(147,51,234,0.7)]"}),o.jsxs("div",{className:"absolute top-12 left-4 flex items-center gap-3 text-[10px] text-purple-300 font-mono font-bold tracking-widest bg-purple-950/85 px-3 py-1 rounded border border-purple-600 shadow-xl",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 animate-ping"}),o.jsx("span",{children:"NVG // UV LUMINOL OPTICS [ACTIVE]"}),o.jsx("span",{className:"text-purple-400",children:"BATTERY: 98%"})]})]}),o.jsxs("div",{className:"absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20",children:[o.jsxs("div",{className:"px-3 py-1.5 rounded bg-black/85 border border-red-900 text-xs text-red-400 font-black flex items-center gap-2 shadow-2xl tracking-wider",children:[o.jsx(Js,{className:"w-4 h-4 text-red-500 animate-pulse"}),o.jsx("span",{children:"BLACKWOOD HALLWAY // 3D RECON"})]}),o.jsxs("button",{onClick:()=>S.current(),className:`cursor-pointer px-3 py-1.5 rounded text-xs border font-bold flex items-center gap-1.5 shadow transition ${a?"bg-amber-950/80 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]":"bg-black/80 border-gray-800 text-gray-500"}`,title:"Toggle Halogen Flashlight [F]",children:[o.jsx(X_,{className:"w-3.5 h-3.5"}),o.jsxs("span",{children:["[F] ",a?"LIGHT ON":"LIGHT OFF"]})]}),o.jsxs("button",{onClick:()=>b.current(),className:`cursor-pointer px-3 py-1.5 rounded text-xs border font-bold flex items-center gap-1.5 shadow transition ${c?"bg-purple-950 border-purple-500 text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.8)] animate-pulse":"bg-black/80 border-gray-800 text-purple-400/80 hover:text-purple-300"}`,title:"Toggle UV Blacklight [L]",children:[o.jsx(Pu,{className:"w-3.5 h-3.5 text-purple-400"}),o.jsxs("span",{children:["[L] UV LUMINOL ",c?"ON":"OFF"]})]})]}),o.jsx("div",{className:"absolute top-4 right-4 z-20",children:o.jsxs("button",{onClick:e,className:"px-4 py-2 bg-red-950 hover:bg-red-900 border-2 border-red-600 text-white font-black text-xs rounded transition shadow-[0_0_25px_rgba(229,9,20,0.6)] flex items-center gap-2 tracking-wider uppercase cursor-pointer",children:[o.jsx(Gr,{className:"w-4 h-4"}),o.jsx("span",{children:"CASE TERMINAL [TAB]"})]})}),v&&o.jsx("div",{className:"absolute top-14 right-4 z-30 pointer-events-none animate-bounce",children:o.jsxs("div",{className:"px-4 py-2 bg-emerald-950/95 border-2 border-emerald-500 rounded text-emerald-200 font-mono text-xs font-black shadow-[0_0_30px_rgba(16,185,129,0.9)] flex items-center gap-2",children:[o.jsx("span",{className:"text-emerald-400 text-base",children:"✓"}),o.jsxs("span",{children:["+",v.pts," XP INTEL SECURED // ",v.title]})]})}),h&&o.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-pulse",children:o.jsxs("div",{className:"px-6 py-2 rounded-full bg-red-950/80 border border-red-600 text-red-200 text-xs font-serif italic tracking-widest flex items-center gap-2 shadow-2xl",children:[o.jsx(Bi,{className:"w-4 h-4 text-red-400 animate-bounce"}),o.jsxs("span",{children:['"',h,'"']})]})}),x&&o.jsx("div",{className:"absolute inset-0 z-40 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none font-mono animate-fade-in",children:o.jsxs("div",{className:"w-full max-w-lg bg-[#0b0b14] border-2 border-cyan-500/80 rounded-lg p-6 shadow-[0_0_50px_rgba(6,182,212,0.4)] space-y-4 text-gray-200 relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"}),o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-cyan-950",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Js,{className:"w-5 h-5 text-cyan-400 animate-pulse"}),o.jsx("span",{className:"text-xs font-black text-cyan-400 tracking-widest uppercase",children:"CALL OF DUTY // TACTICAL INTEL"})]}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold rounded",children:x.code})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-black text-white tracking-wide uppercase font-serif",children:x.title}),o.jsx("p",{className:"text-[11px] text-cyan-400/90 font-mono tracking-wider mt-0.5",children:"PHYSICAL RECONNAISSANCE VERIFIED"})]}),o.jsxs("div",{className:"p-4 bg-black/60 rounded border border-cyan-900/50 space-y-2 text-xs",children:[o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"text-cyan-400 font-black",children:"►"}),o.jsx("span",{className:"text-gray-100",children:x.bullet1})]}),o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"text-amber-400 font-black",children:"►"}),o.jsx("span",{className:"text-amber-200",children:x.bullet2})]}),o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"text-red-400 font-black",children:"►"}),o.jsx("span",{className:"text-red-300 font-bold",children:x.bullet3})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[o.jsxs("button",{onClick:()=>{$.playHitmarker(),$.playRadioChirp(),t(x.clueId),f(null)},className:"cursor-pointer py-3 px-4 bg-cyan-800 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2",children:[o.jsx(Gr,{className:"w-4 h-4"}),o.jsx("span",{children:"ANALYZE IN TERMINAL"})]}),o.jsx("button",{onClick:()=>{$.playHitmarker(),f(null)},className:"cursor-pointer py-3 px-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold text-xs uppercase tracking-widest rounded transition flex items-center justify-center gap-2",children:o.jsx("span",{children:"RESUME RECON"})})]})]})}),r&&!x&&o.jsx("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 z-30 animate-bounce",children:o.jsxs("button",{onClick:()=>{$.playHitmarker(),$.playRadioChirp();const P=n0[r.clueId];P?(f(P),T({title:P.title,pts:100}),$.playObjectiveComplete(),setTimeout(()=>T(null),2500)):t(r.clueId)},className:"cursor-pointer px-8 py-3.5 bg-red-700 hover:bg-red-600 border-2 border-red-300 text-white font-black text-sm rounded-lg shadow-[0_0_35px_rgba(255,0,0,0.9)] tracking-widest uppercase flex items-center gap-3",children:[o.jsx(Pu,{className:"w-5 h-5"}),o.jsxs("span",{children:["[E] SECURE INTEL: ",r.title]})]})}),o.jsxs("div",{className:"absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 bg-black/80 backdrop-blur-md border border-gray-800 rounded px-4 py-2 pointer-events-none z-20",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3",children:[o.jsx("span",{className:"text-red-400 font-bold uppercase tracking-wider",children:"CONTROLS:"}),o.jsxs("span",{children:[o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold",children:"W"}),o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1",children:"A"}),o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1",children:"S"}),o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1",children:"D"})," Move"]}),o.jsx("span",{children:"• Mouse Look"}),o.jsxs("span",{children:["• ",o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold",children:"E"})," Intel"]}),o.jsxs("span",{children:["• ",o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-purple-300 font-bold",children:"L"})," UV Goggles"]}),o.jsxs("span",{children:["• ",o.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-amber-300 font-bold",children:"TAB"})," Mode"]})]}),o.jsx("div",{className:"text-red-400 font-semibold tracking-wide italic mt-1 sm:mt-0",children:"Walk toward Waypoints: Clock (16m), Study 17-B (26m), Tape (8m)"})]})]})},Dw=({activeDrips:t,intenseTrauma:e})=>{const[n,i]=Se.useState([{id:1,x:12,initialHeight:40,speed:.8},{id:2,x:28,initialHeight:70,speed:1.2},{id:3,x:45,initialHeight:35,speed:.6},{id:4,x:62,initialHeight:85,speed:1.5},{id:5,x:78,initialHeight:50,speed:.9},{id:6,x:91,initialHeight:65,speed:1.1}]),[r,s]=Se.useState([0,0,0,0,0,0]);return Se.useEffect(()=>{if(!t)return;const a=setInterval(()=>{s(l=>l.map((c,d)=>{const h=n[d].speed;return c>140?0:c+h}))},50);return()=>clearInterval(a)},[t]),o.jsxs("div",{className:`pointer-events-none fixed inset-0 z-50 overflow-hidden select-none transition-all duration-200 ${e?"animate-glitch filter contrast-200 saturate-200 scale-105":""}`,children:[e&&o.jsx("div",{className:"absolute inset-0 bg-red-950/70 animate-ping pointer-events-none mix-blend-hard-light"}),o.jsx("div",{className:"absolute inset-0 pointer-events-none transition-all duration-300",style:{boxShadow:e?"inset 0 0 180px rgba(220, 20, 60, 0.95), inset 0 0 90px rgba(120, 0, 0, 0.95)":"inset 0 0 110px rgba(120, 0, 10, 0.65), inset 0 0 45px rgba(50, 0, 0, 0.5)"}}),o.jsx("div",{className:"absolute top-0 left-0 right-0 h-40 pointer-events-none",children:n.map((a,l)=>o.jsxs("div",{className:"absolute top-0 flex flex-col items-center",style:{left:`${a.x}%`},children:[o.jsx("div",{className:"w-2 bg-gradient-to-b from-red-950 via-red-900 to-red-800 rounded-b-full shadow-[0_2px_12px_rgba(139,0,0,0.8)]",style:{height:`${a.initialHeight+r[l]}px`,transition:"height 0.05s linear"}}),o.jsx("div",{className:"w-3.5 h-4 -mt-1 rounded-full bg-red-900 shadow-[0_0_8px_rgba(255,0,0,0.7)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"})]},a.id))}),o.jsx("div",{className:"absolute top-4 left-4 w-48 h-48 opacity-90",children:o.jsx("svg",{viewBox:"0 0 200 200",className:"w-full h-full filter drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]",children:o.jsx("path",{d:`M 20,20 C 50,40 80,10 110,40 C 130,60 110,90 90,110 C 70,130 30,120 15,90 C 0,60 10,30 20,20 Z 
               M 90,25 C 105,10 115,20 110,35 C 105,45 95,40 90,25 Z 
               M 35,110 C 45,130 25,145 15,135 C 5,125 20,115 35,110 Z`,fill:"url(#visceralBlood)"})})}),o.jsx("div",{className:"absolute bottom-4 right-4 w-56 h-56 opacity-85",children:o.jsx("svg",{viewBox:"0 0 200 200",className:"w-full h-full filter drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]",children:o.jsx("path",{d:`M 180,180 C 140,150 160,110 130,90 C 100,70 70,110 60,130 C 50,160 90,190 120,195 C 150,200 190,195 180,180 Z 
               M 110,70 C 95,50 110,40 120,55 C 130,70 120,80 110,70 Z`,fill:"url(#visceralBlood)"})})}),o.jsx("div",{className:`absolute bottom-16 left-12 transition-all duration-700 pointer-events-none ${e?"opacity-90 scale-110":"opacity-35 scale-100"}`,children:o.jsxs("svg",{viewBox:"0 0 100 130",className:"w-32 h-40 filter drop-shadow-[0_0_18px_rgba(139,0,0,0.9)]",children:[o.jsx("ellipse",{cx:"50",cy:"80",rx:"26",ry:"32",fill:"#580005"}),o.jsx("ellipse",{cx:"20",cy:"62",rx:"8",ry:"17",transform:"rotate(-32 20 62)",fill:"#580005"}),o.jsx("ellipse",{cx:"36",cy:"30",rx:"7",ry:"22",fill:"#4d0004"}),o.jsx("ellipse",{cx:"50",cy:"22",rx:"7.5",ry:"24",fill:"#4d0004"}),o.jsx("ellipse",{cx:"64",cy:"27",rx:"7",ry:"22",fill:"#4d0004"}),o.jsx("ellipse",{cx:"78",cy:"40",rx:"6",ry:"18",fill:"#4d0004"}),o.jsx("path",{d:"M 38,90 Q 42,125 46,140 Q 52,140 50,110 Z",fill:"#3a0003",opacity:"0.8"})]})}),o.jsx("svg",{className:"hidden",children:o.jsx("defs",{children:o.jsxs("radialGradient",{id:"visceralBlood",cx:"40%",cy:"40%",r:"65%",children:[o.jsx("stop",{offset:"0%",stopColor:"#a30008"}),o.jsx("stop",{offset:"55%",stopColor:"#570004"}),o.jsx("stop",{offset:"100%",stopColor:"#1f0001",stopOpacity:"0.95"})]})})})]})},kw=()=>{const[t,e]=Se.useState(0),[n,i]=Se.useState(55*60),[r,s]=Se.useState(!1),[a,l]=Se.useState(!1),[c,d]=Se.useState(!1),[h,p]=Se.useState(!1),[u,m]=Se.useState("3d"),[g,E]=Se.useState("split"),[x,f]=Se.useState(!1),[v,T]=Se.useState({isOpen:!1,fromRound:1,toRound:2,title:"",discovery:"",nextObjective:""}),[S,b]=Se.useState(1),[w,C]=Se.useState(!1),[y,A]=Se.useState({aarav:!1,riya:!1,kabir:!1,meera:!1,dev:!1}),[I,P]=Se.useState([]),[R,F]=Se.useState(!1),[U,k]=Se.useState(!1),[Z,q]=Se.useState({attackTime:"",deathTime:"",discoveryTime:""}),[H,B]=Se.useState("pending"),[X,Q]=Se.useState(!1),[ue,_e]=Se.useState({}),[Xe,Oe]=Se.useState(!1),[Fe,K]=Se.useState(0),[ie,ye]=Se.useState([]);Se.useEffect(()=>{let L;return r&&n>0&&(L=setInterval(()=>{i(De=>De<=1?(clearInterval(L),s(!1),$.playHorrorStinger(),0):(De<180&&De%5===0&&$.playHeartbeat(),De-1))},1e3)),()=>clearInterval(L)},[r,n]),Se.useEffect(()=>{const L=De=>{De.ctrlKey&&De.shiftKey&&De.key.toLowerCase()==="h"&&(De.preventDefault(),d(Le=>!Le)),De.key==="Tab"&&!De.ctrlKey&&!De.shiftKey&&(De.preventDefault(),m(Le=>Le==="3d"?"terminal":Le==="terminal"?"board":"3d"),$.playTick(!1))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[]);const ke=()=>{s(!r),$.playTick(!1)},ge=()=>{const L=!a;l(L),$.setMuted(L)},Be=()=>{C(!0),t===1&&setTimeout(()=>{T({isOpen:!0,fromRound:1,toRound:2,title:"CHRONOLOGY ANOMALY CONFIRMED: PRE-CRIME RECORDING",discovery:'The 0.5x sub-bass layer on Dictaphone Tape #4 reveals: "Someone started before the house stopped." The 11:47 clock was deliberately arrested with graphite to manufacture a false time of death.',nextObjective:"Audit all 5 suspects in Round 2. Each had opportunity, but 4 committed different secondary crimes. Disarm their locks to expose non-murder motives."})},500)},vt=L=>{A(De=>{const Le={...De,[L]:!0};return Object.values(Le).every(Boolean)&&t===2&&setTimeout(()=>{T({isOpen:!0,fromRound:2,toRound:3,title:"FIVE CONSPIRACIES UNRAVELED: ONLY ONE KILLER REMAINS",discovery:"Aarav stole research, Kabir blew the transformer, Riya bugged the rooms, and Meera struck Sen at 11:47 PM. But Devraj Negi's alibi collapsed—he knows the secret service passages.",nextObjective:"The House AI has formulated its own accusation in Round 3. Probe its logic and expose the core algorithmic bias."})},500),Le})},Ve=()=>{const L=!R;F(L),L&&t===3&&setTimeout(()=>{T({isOpen:!0,fromRound:3,toRound:4,title:"ALGORITHMIC TRAP DETECTED: THE AI DISCARDED SURVIVAL DATA",discovery:"The House AI assumed the 11:47 assault was immediately fatal. It completely discarded telemetry from 12:03 AM showing Professor Sen alive and typing at his terminal.",nextObjective:"Enter Round 4: Establish the definitive forensic distinction between Attack Time (11:47), Death Time (12:15), and Discovery Time (12:18)."})},500)},Ke=()=>{k(!0),t===4&&setTimeout(()=>{T({isOpen:!0,fromRound:4,toRound:5,title:"THE DEAD MAN SPEAKS: SEN WAS ALIVE UNTIL 12:15",discovery:"Professor Sen's encrypted 12:03 webcam feed proves Meera did not kill him! The true fatal smothering occurred at 12:15 AM during Kabir's electrical blackout.",nextObjective:"The House AI is 97.8% confident Meera is the murderer. Challenge its false indictment in Round 5 to retrieve the printer spool logs."})},500)},rt=()=>{B("challenged"),Q(!0),t===5&&setTimeout(()=>{T({isOpen:!0,fromRound:5,toRound:6,title:"SMOKING GUN: THE PRE-CRIME FABRICATION",discovery:"Evidence Spool 12 proves the indictment against Dr. Meera was sent to the network printer at 11:41 PM—six minutes BEFORE she entered Study 17-B! The House and Dev staged the entire crime.",nextObjective:"Enter Round 6: Construct the Master Forensic Indictment prompt to dismantle the House AI and convict Devraj Negi."})},500)},Ge=()=>{e(v.toRound),T(L=>({...L,isOpen:!1})),m("terminal"),$.playHorrorStinger()},nt=(L,De,Le)=>{const N={prompt:L,response:De,reasoning:Le,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};P(_=>[N,..._])},Tt=()=>{e(0),i(55*60),s(!1),p(!1),C(!1),b(1),A({aarav:!1,riya:!1,kabir:!1,meera:!1,dev:!1}),P([]),F(!1),k(!1),q({attackTime:"",deathTime:"",discoveryTime:""}),B("pending"),Q(!1),_e({}),Oe(!1),K(0),ye([]),T({isOpen:!1,fromRound:1,toRound:2,title:"",discovery:"",nextObjective:""}),m("3d")},kt=()=>{$.playObjectiveComplete(),$.playRadioChirp(),A({aarav:!0,riya:!0,kabir:!0,meera:!0,dev:!0}),C(!0),k(!0),Q(!0),q({attackTime:"11:47 PM",deathTime:"12:15 AM (Blackout)",discoveryTime:"12:18 AM"}),B("challenged"),_e({attacker:"Dr. Meera Patel",murderer:'Devraj "Dev" Negi',blackoutCauser:"Kabir Varma",attackTime:"11:47 PM",trueDeathTime:"12:15 AM (During Blackout)",finalRecordingTime:"12:03 AM",discoveryTime:"12:18 AM",falseEvidenceTime:"11:41 PM (HP Laser Spool)",aiBiggestError:"The AI assumed all CCTV hardware clocks were synchronized, ignored the 9-minute kitchen clock drift, and falsely equated Meera's 11:47 PM assault with the fatal 12:15 AM smothering."}),Oe(!0),K(100),ye(["✓ Correctly identified physical attacker: Dr. Meera Patel (+20 pts)","✓ Correctly identified true murderer: Devraj Negi (+25 pts)","✓ Correctly identified blackout operator: Kabir Varma (+15 pts)","✓ Perfect chronology triad (+15 pts)","✓ Pre-crime evidence timestamp accounted for (+5 pts)","✓ Correctly identified AI cognitive flaw (+20 pts)"]),e(6),m("terminal")};if(h)return o.jsx(l1,{onResetGame:Tt});if(t===0)return o.jsx(r1,{onComplete:()=>{e(1),s(!0)},audioMuted:a,onToggleMute:ge});const lt=U_.filter(L=>L.id==="ev-12"?X:L.round<=t),ct=()=>{f(!0),$.playTerrifyingScream(),$.playViolinShriek(),$.playThunderClap(),$.playBloodSplatter(),setTimeout(()=>{f(!1)},1600)};return o.jsxs("div",{className:"min-h-screen bg-[#07070a] text-gray-200 flex flex-col font-mono selection:bg-red-900 selection:text-white analog-grain relative",children:[o.jsx(Dw,{activeDrips:!0,intenseTrauma:x}),o.jsx(a1,{currentRound:t,timeRemainingSeconds:n,isTimerRunning:r,onToggleTimer:ke,audioMuted:a,onToggleMute:ge,onOpenHostModal:()=>d(!0),onSelectRound:L=>{e(L),$.playTick(!1)}}),o.jsx("div",{className:"bg-[#0b0b10] border-b border-red-950 px-4 py-2.5 select-none",children:o.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("button",{onClick:()=>{m("3d"),$.playTick(!1)},className:`px-3.5 py-1.5 rounded font-bold transition flex items-center gap-2 cursor-pointer ${u==="3d"?"bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500":"bg-black/60 text-gray-400 hover:text-white border border-gray-800"}`,children:o.jsx("span",{children:"🏰 3D MANSION (WASD)"})}),o.jsx("button",{onClick:()=>{m("terminal"),$.playTick(!1)},className:`px-3.5 py-1.5 rounded font-bold transition flex items-center gap-2 cursor-pointer ${u==="terminal"?"bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500":"bg-black/60 text-gray-400 hover:text-white border border-gray-800"}`,children:o.jsx("span",{children:"💻 CASE TERMINAL (DECK)"})}),o.jsxs("button",{onClick:()=>{m("board"),$.playTick(!1)},className:`px-3.5 py-1.5 rounded font-bold transition flex items-center gap-2 cursor-pointer ${u==="board"?"bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500":"bg-black/60 text-gray-400 hover:text-white border border-gray-800"}`,children:[o.jsx(Du,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"}),o.jsx("span",{children:"📌 CONSPIRACY WALL (RED THREADS)"})]})]}),u==="terminal"&&o.jsxs("div",{className:"flex items-center gap-1 bg-black/60 p-1 rounded border border-gray-800",children:[o.jsx("span",{className:"text-[10px] text-gray-500 px-1.5 hidden lg:inline font-bold",children:"FRAME LAYOUT:"}),o.jsxs("button",{onClick:()=>{E("split"),$.playTick(!1)},className:`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer ${g==="split"?"bg-red-950 border border-red-500 text-red-200":"text-gray-400 hover:text-gray-200"}`,title:"Split Command Deck: Mission Puzzle on left, Live Intel Locker on right",children:[o.jsx(H_,{className:"w-3 h-3"}),o.jsx("span",{children:"SPLIT DECK"})]}),o.jsxs("button",{onClick:()=>{E("puzzle"),$.playTick(!1)},className:`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer ${g==="puzzle"?"bg-red-950 border border-red-500 text-red-200":"text-gray-400 hover:text-gray-200"}`,title:"Focused View: Full width active mission puzzle",children:[o.jsx(K_,{className:"w-3 h-3"}),o.jsx("span",{children:"PUZZLE ONLY"})]}),o.jsxs("button",{onClick:()=>{E("intel"),$.playTick(!1)},className:`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer ${g==="intel"?"bg-red-950 border border-red-500 text-red-200":"text-gray-400 hover:text-gray-200"}`,title:"Evidence Locker: Full width multi-column grid of all files",children:[o.jsx(q_,{className:"w-3 h-3"}),o.jsx("span",{children:"FULL INTEL"})]})]}),o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("button",{onClick:ct,className:"px-2.5 py-1 rounded bg-red-950/40 hover:bg-red-950 border border-red-900/80 text-red-300 font-bold transition flex items-center gap-1.5 shadow cursor-pointer text-xs",title:"Test Jumpscare & Blood Splatter",children:o.jsx("span",{children:"🩸 TEST HORROR JUMPSCARE"})}),o.jsx("span",{className:"text-[11px] text-gray-500 hidden md:inline",children:"[TAB] Toggle View"})]})]})}),o.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6",children:[u==="3d"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"tactical-frame tactical-corners rounded-lg p-3 text-xs text-gray-300 flex flex-wrap items-center justify-between gap-2",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 hud-pulse-green"}),o.jsx("span",{className:"font-bold text-gray-100 uppercase tracking-wider",children:"LIVE TACTICAL 3D SENSORS — BLACKWOOD MANOR EST. 1894"}),o.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-gray-900 text-gray-400 border border-gray-800",children:"SECTOR: EAST WING 17-B"})]}),o.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-gray-400",children:[o.jsx("span",{children:"WASD: Move"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"Mouse: Look"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"[E]: Inspect Clue"}),o.jsx("span",{children:"•"}),o.jsx("span",{className:"text-purple-400 font-bold",children:"[L]: UV Luminol"})]})]}),o.jsx(Lw,{onInspectClue:L=>{m("terminal"),$.playHorrorStinger()},onOpenTerminal:()=>m("terminal"),onTriggerTrauma:ct}),o.jsxs("div",{className:"p-4 bg-[#0d0d14] rounded border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[o.jsx(Gr,{className:"w-4 h-4 text-red-500"}),o.jsx("span",{children:"EVIDENCE ACCESSIBLE IN 3D: Walk close to Grandfather Clock, Tape Recorder, or Study 17-B Door. Press [L] for UV Luminol."})]}),o.jsx("button",{onClick:()=>m("terminal"),className:"px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded transition cursor-pointer shrink-0",children:"SWITCH TO DOSSIER & PUZZLES →"})]})]}),u==="board"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"tactical-frame tactical-corners rounded-lg p-3 text-xs text-gray-300 flex flex-wrap items-center justify-between gap-2",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500 hud-pulse-cyan"}),o.jsx("span",{className:"font-bold text-gray-100 uppercase tracking-wider",children:"CONSPIRACY CORKBOARD & RED THREAD CAUSALITY NETWORK"})]}),o.jsx("div",{className:"text-[11px] text-gray-400",children:"12 EVIDENCE NODES • 5 SUSPECT MOTIVES • RELATIONAL MAPPING"})]}),o.jsx(u1,{currentRound:t,suspectLocks:y,audioRevealedSecret:w,reasoningInspected:R,hiddenVideoUnlocked:U,printerLogUnlocked:X,finalEvaluated:Xe}),o.jsxs("div",{className:"p-4 bg-[#0d0d14] rounded border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3",children:[o.jsxs("div",{className:"text-xs text-gray-400 flex items-center gap-2",children:[o.jsx(Du,{className:"w-4 h-4 text-red-500 fill-red-500"}),o.jsx("span",{children:"The red thread network tracks how each clue transforms across rounds. Solve suspect locks and AI traps to complete the wall."})]}),o.jsx("button",{onClick:()=>m("terminal"),className:"px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded transition cursor-pointer shrink-0",children:"RETURN TO PUZZLE TERMINAL →"})]})]}),u==="terminal"&&o.jsxs(o.Fragment,{children:[g==="split"&&o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",children:[o.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[o.jsxs("div",{className:"tactical-frame tactical-corners rounded-lg p-4 font-mono text-gray-200 shadow-md",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 hud-pulse-red"}),o.jsxs("span",{className:"text-[10px] text-red-400 font-bold uppercase tracking-widest",children:["ACTIVE OBJECTIVE • ROUND 0",t]}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.2 bg-red-950 text-red-300 border border-red-900 rounded font-mono",children:"TACTICAL OPS"})]}),o.jsxs("h2",{className:"text-base sm:text-lg font-bold text-gray-100",children:[t===1&&"The First Lie — Audit 11:47 Clue & Audio Reel",t===2&&"Five Suspects — Break Alibis & Secondary Crimes",t===3&&"The Impossible Timeline — 12:03 CCTV vs 12:05 Audio",t===4&&"Dead Man's Message — Separate Attack, Death & Discovery",t===5&&"The False Murderer — Challenge 97.8% AI Indictment",t===6&&"The House Remembers — Final Boss Reconstruction"]})]}),t<6&&o.jsxs("button",{onClick:()=>{e(L=>L+1),$.playTick(!0)},className:"px-3 py-1.5 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded flex items-center gap-1 shrink-0 transition cursor-pointer",children:[o.jsxs("span",{children:["PROCEED R",t+1]}),o.jsx(id,{className:"w-3.5 h-3.5"})]})]})]}),t===1&&o.jsxs("div",{className:"tactical-frame tactical-corners rounded-lg p-5 font-mono text-gray-200",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx($r,{className:"w-4 h-4 text-red-500"}),o.jsx("h3",{className:"text-sm font-bold text-gray-100 uppercase tracking-wider",children:"ROUND 01 AUDIT // CLOCK ESCAPEMENT & TAPE REEL"})]}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 bg-red-950/60 border border-red-900/60 text-red-300 rounded font-bold",children:"INITIAL BREACH"})]}),o.jsx("p",{className:"text-xs text-gray-400 mb-4 leading-relaxed",children:"The prosecution claims Professor Sen died at 11:47 PM because the East Hallway clock was frozen at that time. Audit the physical evidence and the audio reel to shatter this fabricated timeline."}),o.jsxs("div",{className:"space-y-3 mb-5",children:[o.jsxs("div",{className:"text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5",children:[o.jsx(fo,{className:"w-3.5 h-3.5 text-amber-400"}),o.jsx("span",{children:"1-CLICK TACTICAL DEDUCTIONS:"})]}),o.jsxs("button",{onClick:()=>{$.playTick(!0),$.playGlitchStatic(.2)},className:"w-full text-left p-3 rounded bg-black/60 border border-gray-800 hover:border-red-500 text-xs transition cursor-pointer group",children:[o.jsxs("div",{className:"flex items-center justify-between text-red-400 font-bold mb-1",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(Sh,{className:"w-3.5 h-3.5 text-red-500"}),o.jsx("span",{children:"DEDUCTION 1: AUDIT CLOCK ESCAPEMENT (#EV-02)"})]}),o.jsx("span",{className:"text-[10px] text-gray-500 group-hover:text-red-400",children:"DISCOVERED ✓"})]}),o.jsx("p",{className:"text-gray-400 text-[11px]",children:"A graphite sliver was jammed between the teeth of the escapement wheel. The clock was intentionally stopped hours prior!"})]}),o.jsxs("button",{onClick:()=>{Be(),$.playTick(!0)},className:`w-full text-left p-3 rounded border text-xs transition cursor-pointer group ${w?"bg-amber-950/30 border-amber-600 text-amber-200":"bg-black/60 border-amber-900/60 hover:border-amber-500 text-gray-300"}`,children:[o.jsxs("div",{className:"flex items-center justify-between text-amber-400 font-bold mb-1",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(Bi,{className:"w-3.5 h-3.5 text-amber-500"}),o.jsx("span",{children:"DEDUCTION 2: 0.5x SUB-BASS SPECTRAL REVEAL (#EV-04)"})]}),o.jsx("span",{className:"text-[10px] text-amber-400",children:w?"REVEALED ✓":"RUN 0.5x SLOWDOWN AUDIT →"})]}),o.jsx("p",{className:"text-gray-400 text-[11px]",children:'"Someone started BEFORE the house stopped." — Reverse frequency decode proves the attack occurred BEFORE the 12:13 blackout!'})]})]}),o.jsxs("div",{className:"pt-3 border-t border-gray-800 flex items-center justify-between",children:[o.jsx("span",{className:"text-[11px] text-gray-500",children:w?"Both anomalies confirmed.":"Trigger deductions above or proceed to Round 2:"}),o.jsxs("button",{onClick:()=>{w?(e(2),$.playTick(!0)):Be()},className:"px-4 py-2 bg-red-700 hover:bg-red-600 text-white font-bold text-xs rounded transition flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.5)]",children:[o.jsx("span",{children:"PROCEED TO ROUND 2: FIVE SUSPECTS"}),o.jsx(id,{className:"w-4 h-4"})]})]})]}),t===2&&o.jsx(Jp,{suspectLocks:y,onSolveLock:vt}),t===3&&o.jsx(em,{queries:I,onAddQuery:nt,reasoningInspected:R,onInspectReasoning:Ve}),t===4&&o.jsx(tm,{hiddenVideoUnlocked:U,onUnlockHiddenVideo:Ke,sliderDistinction:Z,onChangeDistinction:(L,De)=>{q(Le=>({...Le,[L]:De}))}}),t===5&&o.jsx(nm,{round5Choice:H,onAccuseMeera:()=>B("accused_meera"),onChallengeAi:rt,printerLogUnlocked:X}),t===6&&o.jsx(im,{submission:ue,onChangeSubmission:(L,De)=>{_e(Le=>({...Le,[L]:De}))},evaluated:Xe,score:Fe,feedback:ie,onSetEvaluation:(L,De,Le)=>{Oe(L),K(De),ye(Le)},onTriggerClimax:()=>p(!0)})]}),o.jsx("div",{className:"lg:col-span-5 lg:sticky lg:top-4 space-y-4",children:o.jsx(Qp,{evidenceList:lt,currentRound:t,audioSpeed:S,onSetAudioSpeed:b,audioRevealedSecret:w,onAudioRevealedSecret:Be,compact:!0})})]}),g==="puzzle"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"tactical-frame tactical-corners rounded-lg p-4 font-mono text-gray-200 shadow-md",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 hud-pulse-red"}),o.jsxs("span",{className:"text-[10px] text-red-400 font-bold uppercase tracking-widest",children:["ACTIVE OBJECTIVE • ROUND 0",t]}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.2 bg-red-950 text-red-300 border border-red-900 rounded font-mono",children:"FOCUSED MODE"})]}),o.jsxs("h2",{className:"text-base sm:text-lg font-bold text-gray-100",children:[t===1&&"The First Lie — Audit the 11:47 Clue & Distorted Audio Reel",t===2&&"Five Suspects — Break the Alibis & Identify Non-Murder Crimes",t===3&&"The Impossible Timeline — Reconcile 12:03 CCTV with 12:05 Audio",t===4&&"The Dead Man's Message — Separate Attack, Death, and Discovery",t===5&&"The False Murderer — Challenge the 97.8% AI Indictment",t===6&&"The House Remembers — Final Boss Prompt & Reconstruction"]})]}),t<6&&o.jsxs("button",{onClick:()=>{e(L=>L+1),$.playTick(!0)},className:"px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded flex items-center gap-1.5 shrink-0 transition cursor-pointer",children:[o.jsxs("span",{children:["PROCEED TO ROUND ",t+1]}),o.jsx(id,{className:"w-4 h-4"})]})]})]}),t===1&&o.jsxs("div",{className:"tactical-frame tactical-corners rounded-lg p-5 font-mono text-gray-200",children:[o.jsx("span",{className:"corner-tl text-red-500"}),o.jsx("span",{className:"corner-tr text-red-500"}),o.jsx("span",{className:"corner-bl text-red-500"}),o.jsx("span",{className:"corner-br text-red-500"}),o.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-gray-800 mb-4",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx($r,{className:"w-4 h-4 text-red-500"}),o.jsx("h3",{className:"text-sm font-bold text-gray-100 uppercase tracking-wider",children:"ROUND 01 AUDIT // CLOCK ESCAPEMENT & TAPE REEL"})]})}),o.jsx("p",{className:"text-xs text-gray-400 mb-4 leading-relaxed",children:"The prosecution claims Professor Sen died at 11:47 PM. Audit the physical evidence and the audio reel to dismantle this fabricated timeline."}),o.jsxs("div",{className:"space-y-3 mb-5",children:[o.jsxs("button",{onClick:()=>{$.playTick(!0),$.playGlitchStatic(.2)},className:"w-full text-left p-3 rounded bg-black/60 border border-gray-800 hover:border-red-500 text-xs transition cursor-pointer",children:[o.jsx("div",{className:"text-red-400 font-bold mb-1",children:"DEDUCTION 1: AUDIT CLOCK ESCAPEMENT (#EV-02)"}),o.jsx("p",{className:"text-gray-400 text-[11px]",children:"A graphite sliver stopped the clock prior to the murder."})]}),o.jsxs("button",{onClick:()=>{Be(),$.playTick(!0)},className:"w-full text-left p-3 rounded bg-black/60 border border-amber-900 hover:border-amber-500 text-xs transition cursor-pointer",children:[o.jsx("div",{className:"text-amber-400 font-bold mb-1",children:"DEDUCTION 2: 0.5x SUB-BASS SPECTRAL REVEAL (#EV-04)"}),o.jsx("p",{className:"text-gray-400 text-[11px]",children:'"Someone started BEFORE the house stopped." Attack occurred before 12:13 blackout!'})]})]})]}),t===2&&o.jsx(Jp,{suspectLocks:y,onSolveLock:vt}),t===3&&o.jsx(em,{queries:I,onAddQuery:nt,reasoningInspected:R,onInspectReasoning:Ve}),t===4&&o.jsx(tm,{hiddenVideoUnlocked:U,onUnlockHiddenVideo:Ke,sliderDistinction:Z,onChangeDistinction:(L,De)=>{q(Le=>({...Le,[L]:De}))}}),t===5&&o.jsx(nm,{round5Choice:H,onAccuseMeera:()=>B("accused_meera"),onChallengeAi:rt,printerLogUnlocked:X}),t===6&&o.jsx(im,{submission:ue,onChangeSubmission:(L,De)=>{_e(Le=>({...Le,[L]:De}))},evaluated:Xe,score:Fe,feedback:ie,onSetEvaluation:(L,De,Le)=>{Oe(L),K(De),ye(Le)},onTriggerClimax:()=>p(!0)}),o.jsxs("div",{className:"p-3 bg-black/60 border border-gray-800 rounded-lg flex items-center justify-between text-xs text-gray-400 font-mono",children:[o.jsx("span",{children:"💡 Want to inspect clues side-by-side with this puzzle? Enable Split Deck layout."}),o.jsx("button",{onClick:()=>{E("split"),$.playTick(!1)},className:"px-3 py-1 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 font-bold rounded transition cursor-pointer",children:"SWITCH TO SPLIT DECK →"})]})]}),g==="intel"&&o.jsx("div",{className:"space-y-4",children:o.jsx(Qp,{evidenceList:lt,currentRound:t,audioSpeed:S,onSetAudioSpeed:b,audioRevealedSecret:w,onAudioRevealedSecret:Be,compact:!1})})]})]}),o.jsx(d1,{isOpen:v.isOpen,fromRound:v.fromRound,toRound:v.toRound,title:v.title,discovery:v.discovery,nextObjective:v.nextObjective,onProceed:Ge}),o.jsx(c1,{isOpen:c,onClose:()=>d(!1),currentRound:t,onSelectRound:L=>{e(L),d(!1)},timeRemaining:n,onAdjustTime:L=>i(De=>Math.max(0,De+L)),onUnlockAllLocks:()=>{A({aarav:!0,riya:!0,kabir:!0,meera:!0,dev:!0})},onUnlockPrinterLog:()=>Q(!0),onUnlockHiddenVideo:()=>k(!0),onTriggerBlackout:()=>{$.playBlackout()},onTriggerClimax:()=>{p(!0)},onResetGame:Tt,onAutoSolveAll:kt}),o.jsx("footer",{className:"border-t border-gray-900 py-3 text-center text-[10px] text-gray-600 font-mono",children:"PROMPT WAR 2.0 • THE HOUSE THAT REMEMBERS • 55-MINUTE LIVE ESCAPE PROTOCOL • PRESS [CTRL+SHIFT+H] FOR HOST HUD"})]})};Fd.createRoot(document.getElementById("root")).render(o.jsx(h0.StrictMode,{children:o.jsx(kw,{})}));
