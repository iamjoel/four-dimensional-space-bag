"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7371],{2848:(r,n,t)=>{t.d(n,{Z:()=>c});var e=t(5284),u=t(8404);const o=function(r,n){void 0===r&&(r=!1);var t=(0,e.CR)((0,u.useState)(r),2),o=t[0],c=t[1];return[o,(0,u.useMemo)((function(){var t=void 0===n?!r:n;return{toggle:function(){return c((function(n){return n===r?t:r}))},set:function(r){return c(r)},setLeft:function(){return c(r)},setRight:function(){return c(t)}}}),[])]};function c(r){void 0===r&&(r=!1);var n=(0,e.CR)(o(!!r),2),t=n[0],c=n[1],i=c.toggle,f=c.set;return[t,(0,u.useMemo)((function(){return{toggle:i,set:function(r){return f(!!r)},setTrue:function(){return f(!0)},setFalse:function(){return f(!1)}}}),[])]}},7341:(r,n,t)=>{t.d(n,{Z:()=>i});var e=t(5094),u=t(9090);const o=function(r){if(!r||!document.getRootNode)return document;var n,t=Array.isArray(r)?r:[r];return function(r){return r.every((function(r){var n=(0,u.n)(r);return!!n&&(n.getRootNode()instanceof ShadowRoot||void 0)}))}(t)&&(n=(0,u.n)(t[0]))?n.getRootNode():document};var c=t(7159);function i(r,n,t){void 0===t&&(t="click");var i=(0,e.Z)(r);(0,c.Z)((function(){var r=function(r){(Array.isArray(n)?n:[n]).some((function(n){var t=(0,u.n)(n);return!t||t.contains(r.target)}))||i.current(r)},e=o(n),c=Array.isArray(t)?t:[t];return c.forEach((function(n){return e.addEventListener(n,r)})),function(){c.forEach((function(n){return e.removeEventListener(n,r)}))}}),Array.isArray(t)?t:[t],n)}},5094:(r,n,t)=>{t.d(n,{Z:()=>u});var e=t(8404);const u=function(r){var n=(0,e.useRef)(r);return n.current=r,n}},9090:(r,n,t)=>{t.d(n,{n:()=>o});var e=t(5463);const u=!("undefined"==typeof window||!window.document||!window.document.createElement);function o(r,n){if(u)return r?(0,e.mf)(r)?r():"current"in r?r.current:r:n}},5463:(r,n,t)=>{t.d(n,{mf:()=>e});var e=function(r){return"function"==typeof r}},7159:(r,n,t)=>{t.d(n,{Z:()=>f});var e=t(8404),u=t(5094);t(5463);const o=function(r){var n=(0,u.Z)(r);(0,e.useEffect)((function(){return function(){n.current()}}),[])};function c(r,n){if(r===n)return!0;for(var t=0;t<r.length;t++)if(!Object.is(r[t],n[t]))return!1;return!0}var i=t(9090);const f=function(r){return function(n,t,u){var f=(0,e.useRef)(!1),a=(0,e.useRef)([]),s=(0,e.useRef)([]),l=(0,e.useRef)();r((function(){var r,e=(Array.isArray(u)?u:[u]).map((function(r){return(0,i.n)(r)}));if(!f.current)return f.current=!0,a.current=e,s.current=t,void(l.current=n());e.length===a.current.length&&c(e,a.current)&&c(t,s.current)||(null===(r=l.current)||void 0===r||r.call(l),a.current=e,s.current=t,l.current=n())})),o((function(){var r;null===(r=l.current)||void 0===r||r.call(l),f.current=!1}))}}(e.useEffect)},6776:(r,n,t)=>{t.d(n,{Z:()=>o});var e=t(8404),u=t(2669);function o(r){let{children:n,fallback:t}=r;return(0,u.Z)()?e.createElement(e.Fragment,null,n?.()):t??null}},5284:(r,n,t)=>{t.d(n,{CR:()=>e});Object.create;function e(r,n){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var e,u,o=t.call(r),c=[];try{for(;(void 0===n||n-- >0)&&!(e=o.next()).done;)c.push(e.value)}catch(i){u={error:i}}finally{try{e&&!e.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return c}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);