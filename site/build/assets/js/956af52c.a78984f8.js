"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6040],{148:(e,t,n)=>{n.d(t,{c:()=>a});var o=n(1664),l=n(7600);const r=function(e){if(!e||!document.getRootNode)return document;var t,n=Array.isArray(e)?e:[e];return function(e){return e.every((function(e){var t=(0,l.O)(e);return!!t&&(t.getRootNode()instanceof ShadowRoot||void 0)}))}(n)&&(t=(0,l.O)(n[0]))?t.getRootNode():document};var s=n(6136);function a(e,t,n){void 0===n&&(n="click");var a=(0,o.c)(e);(0,s.c)((function(){var e=function(e){(Array.isArray(t)?t:[t]).some((function(t){var n=(0,l.O)(t);return!n||n.contains(e.target)}))||a.current(e)},o=r(t),s=Array.isArray(n)?n:[n];return s.forEach((function(t){return o.addEventListener(t,e)})),function(){s.forEach((function(t){return o.removeEventListener(t,e)}))}}),Array.isArray(n)?n:[n],t)}},7430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>E,default:()=>L,frontMatter:()=>x,metadata:()=>w,toc:()=>k});var o=n(1516),l=n(6844),r=n(8656),s=n(8128),a=n(9476),c=n(638),i=n(148);const m="select_z9dV",u="input_qKPh",d="options_hE2W",p="option_LAyB",b="optionSelected_HW4G",v=e=>{let{value:t,onChange:n,options:o,style:r,showInTop:s}=e;const a=(0,l.useRef)(null),[v,{toggle:f,setFalse:g}]=(0,c.c)(!1);(0,i.c)(g,a);const y=o.find((e=>e.value===t))?.label||"\u8bf7\u9009\u62e9";return l.createElement("div",{className:m,style:r,ref:a},l.createElement("div",{className:u,onClick:f},y),v&&l.createElement("div",{className:d,style:{[s?"bottom":"top"]:32}},o.map((e=>{let{value:t,label:o}=e;return l.createElement("div",{key:t,className:`${p} ${o===y&&b}`,onClick:()=>{n(t),g()}},o)}))))},f=l.memo(v),g=[{value:1,label:"\u8354\u679d"},{value:2,label:"\u9999\u8549"},{value:3,label:"\u83e0\u841d"}],y=e=>{let{showInTop:t}=e;const[n,o]=(0,l.useState)("");return l.createElement("div",null,l.createElement("div",{className:"flex items-center mb-2 space-x-3"},l.createElement("span",null,"\u6c34\u679c\u9009\u62e9\uff1a"),l.createElement(f,{value:n,onChange:o,options:g,showInTop:t})),l.createElement("span",null,"\u9009\u4e2d\u6c34\u679cID: ",n||"null"))},h=l.memo(y),x={},E="\u9009\u62e9\u5668",w={unversionedId:"libs/components/base/select/readme",id:"libs/components/base/select/readme",title:"\u9009\u62e9\u5668",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/docs/libs/components/base/select/readme.mdx",sourceDirName:"libs/components/base/select",slug:"/libs/components/base/select/",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/select/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"libs",previous:{title:"\u6309\u94ae",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/button/"},next:{title:"\u5217\u8868\u65e0\u9650\u52a0\u8f7d",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/infinite-list/"}},N={},k=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u9009\u9879\u5f80\u4e0a\u5c55\u793a",id:"\u9009\u9879\u5f80\u4e0a\u5c55\u793a",level:2}],C={toc:k},T="wrapper";function L(e){let{components:t,...n}=e;return(0,r.yg)(T,(0,o.c)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u9009\u62e9\u5668"},"\u9009\u62e9\u5668"),(0,r.yg)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.yg)(s.c,{className:"space-x-3",mdxType:"Demo"},(0,r.yg)(h,{mdxType:"SelectDemo"})),(0,r.yg)(a.c,{content:"<Select\n  value={fruit}\n  onChange={setFruit}\n  options={fruitList} // \u7ed3\u6784\u5f62\u5982 [...{value: 1, label: '\u8354\u679d'}]\n/>\n",mdxType:"Code"}),(0,r.yg)("h2",{id:"\u9009\u9879\u5f80\u4e0a\u5c55\u793a"},"\u9009\u9879\u5f80\u4e0a\u5c55\u793a"),(0,r.yg)(s.c,{className:"space-x-3",mdxType:"Demo"},(0,r.yg)(h,{showInTop:!0,mdxType:"SelectDemo"})),(0,r.yg)(a.c,{content:"<Select\n  value={fruit}\n  onChange={setFruit}\n  options={fruitList} // \u7ed3\u6784\u5f62\u5982 [...{value: 1, label: '\u8354\u679d'}]\n  showInTop\n/>\n",mdxType:"Code"}))}L.isMDXComponent=!0},9476:(e,t,n)=>{n.d(t,{c:()=>a});var o=n(6844),l=n(820),r=n(3656);const s=e=>{let{language:t="jsx",title:n,content:s}=e;const[a,c]=(0,o.useState)(!1);return o.createElement(r.c,null,(()=>o.createElement("div",{className:"code mt-5"},o.createElement("div",{className:"mb-3 flex justify-end space-x-3"},o.createElement("div",{className:"box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer",style:{borderColor:a?"rgb(29, 33, 41)":"rgb(229, 230, 225)",backgroundColor:a?"rgb(29, 33, 41)":"transparent",color:a?"#fff":"inherit"},onClick:()=>c(!a)},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full"},o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})))),a&&o.createElement(l.c,{language:t,title:n,showLineNumbers:!0,children:s}))))},a=o.memo(s)},8128:(e,t,n)=>{n.d(t,{c:()=>s});var o=n(6844),l=n(3656),r=n(816);const s=e=>{let{children:t,contentSize:n="full",padding:s="p-12",className:a,browserOnly:c=!0}=e;const i="full"===n?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[n],m=o.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${s}\n    `},o.createElement("div",{className:(0,r.c)(i,"mx-auto",a)},t));return o.createElement(o.Fragment,null,c?o.createElement(l.c,null,(()=>o.createElement(o.Fragment,null,m))):m)}}}]);