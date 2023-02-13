"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[249],{5569:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(8404);const o=function(e=!1,t){const[r,o]=(0,n.useState)(e);return[r,(0,n.useMemo)((()=>{const r=void 0===t?!e:t;return{toggle:()=>o((t=>t===e?r:e)),set:e=>o(e),setLeft:()=>o(e),setRight:()=>o(r)}}),[])]};function s(e=!1){const[t,{toggle:r,set:s}]=o(e);return[t,(0,n.useMemo)((()=>({toggle:r,set:e=>s(!!e),setTrue:()=>s(!0),setFalse:()=>s(!1)})),[])]}},1332:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(8404);const o=function(e){const t=(0,n.useRef)(e);return t.current=e,t},s=e=>"function"==typeof e,l=!("undefined"==typeof window||!window.document||!window.document.createElement);function a(e,t){if(!l)return;if(!e)return t;let r;return r=s(e)?e():"current"in e?e.current:e,r}const c=e=>{if(!e||!document.getRootNode)return document;const t=Array.isArray(e)?e:[e];return(e=>e.every((e=>{const t=a(e);return!!t&&(t.getRootNode()instanceof ShadowRoot||void 0)})))(t)&&(r=a(t[0]))?r.getRootNode():document;var r},u=e=>{const t=o(e);(0,n.useEffect)((()=>()=>{t.current()}),[])};function i(e,t){if(e===t)return!0;for(let r=0;r<e.length;r++)if(!Object.is(e[r],t[r]))return!1;return!0}const d=(e=>(t,r,o)=>{const s=(0,n.useRef)(!1),l=(0,n.useRef)([]),c=(0,n.useRef)([]),d=(0,n.useRef)();e((()=>{var e;const n=(Array.isArray(o)?o:[o]).map((e=>a(e)));if(!s.current)return s.current=!0,l.current=n,c.current=r,void(d.current=t());n.length===l.current.length&&i(n,l.current)&&i(r,c.current)||(null===(e=d.current)||void 0===e||e.call(d),l.current=n,c.current=r,d.current=t())})),u((()=>{var e;null===(e=d.current)||void 0===e||e.call(d),s.current=!1}))})(n.useEffect);function m(e,t,r="click"){const n=o(e);d((()=>{const e=e=>{(Array.isArray(t)?t:[t]).some((t=>{const r=a(t);return!r||r.contains(e.target)}))||n.current(e)},o=c(t),s=Array.isArray(r)?r:[r];return s.forEach((t=>o.addEventListener(t,e))),()=>{s.forEach((t=>o.removeEventListener(t,e)))}}),Array.isArray(r)?r:[r],t)}},9073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>b});var n=r(8476),o=r(8404),s=r(6291),l=r(3282),a=r(2682),c=r(9880),u=r(5569),i=r(1332);const d=()=>{const e=function(e){void 0===e&&(e=document.body);const[t,r]=o.useState({render:()=>null,remove:()=>null}),n=o.useCallback((e=>({render:t=>{let{children:r}=t;return c.createPortal(r,e)},remove:()=>c.unmountComponentAtNode(e)})),[]);return(0,o.useEffect)((()=>{e&&t.remove();const o=n(e);return r(o),()=>{o.remove()}}),[e]),t.render}(),[t,{setTrue:r,setFalse:n}]=(0,u.Z)(!1),[s,l]=(0,o.useState)({left:0,top:0}),a=(0,o.useRef)(null),d=(0,o.useCallback)((e=>{const t=document.body.getBoundingClientRect().top;l({left:e.pageX,top:e.pageY+t}),r()}),[]);return(0,i.Z)((()=>{n()}),a),o.createElement("div",{className:" flex justify-center items-center h-20 shadow overflow-hidden text-center cursor-pointer ",onClick:d,ref:a},"\u8fd9\u662f\u4e00\u4e2a\u8d85\u51fa overflow: hidden \u7684\u5143\u7d20\u3002\u70b9\u6211\u5f39\u51fa\u5185\u5bb9\u3002",o.createElement(e,null,o.createElement("div",{className:"fixed p-3 rounded bg-indigo-500 text-white",style:{display:t?"block":"none",left:s.left,top:s.top}},"\u5b50\u5143\u7d20\u5185\u5bb9")))},m={},f="\u5de5\u5177 hooks",p={unversionedId:"libs/hooks/overview",id:"libs/hooks/overview",title:"\u5de5\u5177 hooks",description:"usePortal",source:"@site/docs/libs/hooks/overview.mdx",sourceDirName:"libs/hooks",slug:"/libs/hooks/overview",permalink:"/four-dimensional-space-bag/site/build/docs/libs/hooks/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"libs",previous:{title:"\u64ad\u653e\u5668\u8fdb\u5ea6\u63a7\u5236\u6761",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/compound/media-player-progress"},next:{title:"\u5de5\u5177\u65b9\u6cd5",permalink:"/four-dimensional-space-bag/site/build/docs/libs/utils/overview"}},v={},b=[{value:"usePortal",id:"useportal",level:2}],g={toc:b};function h(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5de5\u5177-hooks"},"\u5de5\u5177 hooks"),(0,s.kt)("h2",{id:"useportal"},"usePortal"),(0,s.kt)("p",null,"\u5c06\u67d0\u4e2a\u5143\u7d20\u79fb\u52a8\u5230\u5c42\u7ea7\u66f4\u6d45\u7684\u5b50\u5143\u7d20\u4e0a\u3002",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u573a\u666f\uff1a")," \u5b50\u5143\u7d20\u7684\u90e8\u5206\u5185\u5bb9\u60f3\u8d85\u51fa overflow: hidden \u6216 \u5e26\u6eda\u52a8\u6761\u7684\u7236\u5143\u7d20\u65f6\uff0c\u4ecd\u7136\u663e\u793a\u5168\u3002"),(0,s.kt)(l.Z,{browserOnly:!0,className:"space-x-3",mdxType:"Demo"},(0,s.kt)(d,{mdxType:"UsePortalDemo"})),(0,s.kt)(a.Z,{content:"const Portal = usePortal(portal\u5230\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u662f document.body)\n\nreturn (\n  <Portal>\n    <div\n      className='...'\n      style={{\n        display: isShow ? 'block' : 'none'\n      }}\n    >\n      Portal \u5185\u5bb9\n    </div>\n  </Portal>\n)",mdxType:"Code"}))}h.isMDXComponent=!0},2480:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(8404),o=r(9489);function s(e){let{children:t,fallback:r}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,t?.()):r??null}},2682:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(8404),o=r(1706);const s=e=>{let{language:t="jsx",title:r,content:s}=e;const[l,a]=(0,n.useState)(!1);return n.createElement("div",{className:"code mt-5"},n.createElement("div",{className:"mb-3 flex justify-end space-x-3"},n.createElement("div",{className:"box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer",style:{borderColor:l?"rgb(29, 33, 41)":"rgb(229, 230, 225)",backgroundColor:l?"rgb(29, 33, 41)":"transparent",color:l?"#fff":"inherit"},onClick:()=>a(!l)},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})))),l&&n.createElement(o.Z,{language:t,title:r,showLineNumbers:!0,children:s}))},l=n.memo(s)},3282:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(8404),o=r(2480),s=r(4640);const l=e=>{let{children:t,contentSize:r="full",padding:l="p-12",className:a,browserOnly:c}=e;const u="full"===r?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[r],i=n.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${l}\n    `},n.createElement("div",{className:(0,s.Z)(u,"mx-auto",a)},t));return n.createElement(n.Fragment,null,c?n.createElement(o.Z,null,(()=>n.createElement(n.Fragment,null,i))):i)}}}]);