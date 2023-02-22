"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1154],{8069:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=l(8476),a=l(8404),o=l(6291),r=l(3282),s=l(2682),u=l(9821);const m=()=>{let e={current:5};return console.log(Math.random()),(0,a.useEffect)((()=>{const t=setInterval((()=>{e.current=e.current+1,console.log(e.current),e.current>30&&clearInterval(t)}),3e3);return()=>{clearInterval(t)}}),[]),a.createElement("div",null,"value: ",e.current)},i={},c="\u51fd\u6570\u7ec4\u4ef6(Hooks)",d={unversionedId:"frontend/framework/react/api/hooks",id:"frontend/framework/react/api/hooks",title:"\u51fd\u6570\u7ec4\u4ef6(Hooks)",description:"\u7b80\u4ecb",source:"@site/docs/frontend/framework/react/api/hooks.mdx",sourceDirName:"frontend/framework/react/api",slug:"/frontend/framework/react/api/hooks",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/framework/react/api/hooks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\u64cd\u4f5c\u5a92\u4f53",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/base/js/media/overview"},next:{title:"Demo",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/framework/react/demo/"}},k={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Hooks API",id:"hooks-api",level:2},{value:"useState",id:"usestate",level:3},{value:"useEffect",id:"useeffect",level:3},{value:"useContext",id:"usecontext",level:3},{value:"useCallback",id:"usecallback",level:3},{value:"useMemo",id:"usememo",level:3},{value:"\u81ea\u5b9a\u4e49 Hooks",id:"\u81ea\u5b9a\u4e49-hooks",level:3},{value:"\u7ec4\u4ef6\u95f4\u901a\u4fe1",id:"\u7ec4\u4ef6\u95f4\u901a\u4fe1",level:2},{value:"\u7236 =&gt; \u5b50",id:"\u7236--\u5b50",level:3},{value:"\u5b50 =&gt; \u7236",id:"\u5b50--\u7236",level:3},{value:"\u7956\u5148 =&gt; \u7956\u5148",id:"\u7956\u5148--\u7956\u5148",level:3},{value:"\u5b50\u5b59 =&gt; \u7956\u5148",id:"\u5b50\u5b59--\u7956\u5148",level:3},{value:"\u5144\u5f1f\u95f4",id:"\u5144\u5f1f\u95f4",level:3},{value:"\u4ee3\u7801\u590d\u7528",id:"\u4ee3\u7801\u590d\u7528",level:2},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:2},{value:"\u4f55\u65f6\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u88ab\u91cd\u65b0\u6e32\u67d3",id:"\u4f55\u65f6\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u88ab\u91cd\u65b0\u6e32\u67d3",level:3},{value:"\u907f\u514d\u4e0d\u5fc5\u8981\u91cd\u65b0\u6e32\u67d3\u7684\u65b9\u5f0f",id:"\u907f\u514d\u4e0d\u5fc5\u8981\u91cd\u65b0\u6e32\u67d3\u7684\u65b9\u5f0f",level:3},{value:"\u627e\u5230\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u7684\u539f\u56e0",id:"\u627e\u5230\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u7684\u539f\u56e0",level:3},{value:"\u5e38\u7528\u7b2c\u4e09\u65b9 Hooks",id:"\u5e38\u7528\u7b2c\u4e09\u65b9-hooks",level:2}],v={toc:p};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u51fd\u6570\u7ec4\u4ef6hooks"},"\u51fd\u6570\u7ec4\u4ef6(Hooks)"),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"React 16.8 \u4e4b\u540e\uff0c\u652f\u6301\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6\u662f\u7eaf\u51fd\u6570\uff0c\u6ca1\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\u3002 \u7528 Hooks \u6765\u7ba1\u7406\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u751f\u547d\u5468\u671f\u7b49\u3002React \u5185\u7f6e\u4e86 Hooks \u5305\u62ec\uff1a useState, useEffect, useContext \u7b49\u3002\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u81ea\u5b9a\u4e49 Hooks \u6765\u628a\u53ef\u590d\u7528\u7684\u72b6\u6001\u903b\u8f91\u4ece\u5e94\u7528\u4e2d\u62bd\u79bb\u51fa\u6765\uff0c\u5e76\u4e14\u4e0d\u5fc5\u62c5\u5fc3\u7ec4\u4ef6\u7684\u5c42\u7ea7\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6\u6bd4 class \u7ec4\u4ef6",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u7b80\u5355\uff0c\u66f4\u5bb9\u6613\u7ef4\u62a4\uff0c\u800c\u4e14\u6027\u80fd\u66f4\u9ad8"),"\u3002"),(0,o.kt)("h2",{id:"hooks-api"},(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/hooks-reference.html"},"Hooks API")),(0,o.kt)("p",null,"Hooks API \u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57fa\u7840 Hooks: useState, useEffect, useContext"),(0,o.kt)("li",{parentName:"ul"},"\u989d\u5916 Hooks: useCallback, useMemo, useLayoutEffect,")),(0,o.kt)("h3",{id:"usestate"},"useState"),(0,o.kt)("p",null,"useState \u7528\u6765\u5b58\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u53d8\u91cf\u53d8\u5316\uff0c\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002\u6253\u5f00\u63a7\u5236\u53f0\u67e5\u770b\u6548\u679c\u3002"),(0,o.kt)(r.Z,{mdxType:"Demo"},(0,o.kt)(m,{mdxType:"ChangeVarNotReRender"})),(0,o.kt)("h3",{id:"useeffect"},"useEffect"),(0,o.kt)("h3",{id:"usecontext"},"useContext"),(0,o.kt)("p",null,"\u7528\u4e8e\u5171\u4eab\u72b6\u6001\u3002\u5728\u7ec4\u4ef6\u4e2d\uff0c\u7528 context \u8bbe\u7f6e\u4e86\u503c\u3002\u65e0\u8bba\u591a\u6df1\u7684\u5b50\u7ec4\u4ef6\uff0c\u65e0\u9700\u4e00\u5c42\u5c42\u7684\u4f20\u9012\uff0c\u90fd\u80fd\u83b7\u5f97context \u7684\u503c\u3002"),(0,o.kt)(r.Z,{mdxType:"Demo"},(0,o.kt)(u.Z,{mdxType:"UseContextDemo"})),(0,o.kt)(s.Z,{content:"//1. \u521b\u5efacontext\nconst NameContext = React.createContext<INameContext>({\n  name: '',\n  setName: () => null\n}) \n\n// 2. \u5728\u7236\u7ec4\u4ef6\u4e0a\u8bbe\u7f6e\u8981\u5171\u4eab\u7684\u503c\nimport NameContext from './name-context'\n<NameContext.Provider value={{\n  name,\n  setName\n}}>...</NameContext.Provider>\n\n// 3. \u5b50\u7ec4\u4ef6\u6d88\u8d39\nconst {name, setName} = React.useContext(NameContext)\n",mdxType:"Code"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8c03\u7528\u4e86 useContext \u7684\u7ec4\u4ef6\u603b\u4f1a\u5728 context \u503c\u53d8\u5316\u65f6\u91cd\u65b0\u6e32\u67d3\u3002\u5982\u679c\u91cd\u6e32\u67d3\u7ec4\u4ef6\u7684\u5f00\u9500\u8f83\u5927\uff0c\u4f60\u53ef\u4ee5 \u901a\u8fc7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"},"memoization \u6765\u4f18\u5316"),"\u3002")),(0,o.kt)("h3",{id:"usecallback"},"useCallback"),(0,o.kt)("p",null,"useCallback \u7528\u6765\u7f13\u5b58\u3002"),(0,o.kt)("h3",{id:"usememo"},"useMemo"),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49-hooks"},"\u81ea\u5b9a\u4e49 Hooks"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u95f4\u901a\u4fe1"},"\u7ec4\u4ef6\u95f4\u901a\u4fe1"),(0,o.kt)("p",null,"\u901a\u4fe1\u7684\u5f62\u5f0f\u5305\u62ec\uff1a\u6570\u636e \u548c \u89e6\u53d1\u4e8b\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u7236--\u5b50"},"\u7236 => \u5b50"),(0,o.kt)("p",null,"\u4f20\u9012\u6570\u636e\uff1a\u901a\u8fc7\u5c5e\u6027\u3002\u89e6\u53d1\u4e8b\u4ef6\uff1a\u901a\u8fc7\u5b50\u7ec4\u4ef6\u76d1\u542c\u5c5e\u6027\u7684\u53d8\u5316\u3002"),(0,o.kt)("p",null,"\u7236\u7ec4\u4ef6\u8bbe\u7f6e\u5b50\u7ec4\u4ef6\u7684\u72b6\u6001\u3002\n\u7236\u7ec4\u4ef6\u8ba9\u5b50\u7ec4\u4ef6\u83b7\u5f97\u7126\u70b9\u3002"),(0,o.kt)("h3",{id:"\u5b50--\u7236"},"\u5b50 => \u7236"),(0,o.kt)("p",null,"\u4f20\u9012\u6570\u636e\uff1a\u51fd\u6570\u5c5e\u6027\u7684\u53c2\u6570\u3002 \u4e8b\u4ef6\uff1a\u8c03\u7528\u51fd\u6570\u5c5e\u6027\u3002"),(0,o.kt)("h3",{id:"\u7956\u5148--\u7956\u5148"},"\u7956\u5148 => \u7956\u5148"),(0,o.kt)("h3",{id:"\u5b50\u5b59--\u7956\u5148"},"\u5b50\u5b59 => \u7956\u5148"),(0,o.kt)("h3",{id:"\u5144\u5f1f\u95f4"},"\u5144\u5f1f\u95f4"),(0,o.kt)("h2",{id:"\u4ee3\u7801\u590d\u7528"},"\u4ee3\u7801\u590d\u7528"),(0,o.kt)("p",null,"\u5de5\u5177\u51fd\u6570\uff0c\u81ea\u5b9a\u4e49 hooks\uff0c \u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u7ec4\u4ef6\uff1a\u9ad8\u9636\u7ec4\u4ef6\uff0crenderProps\u3002"),(0,o.kt)("h2",{id:"\u6027\u80fd\u4f18\u5316"},"\u6027\u80fd\u4f18\u5316"),(0,o.kt)("p",null,"\u8fd9\u8fb9\u7684\u6027\u80fd\u4f18\u5316\u6307\u8fd0\u884c\u65f6\u6027\u80fd\u4f18\u5316\u3002"),(0,o.kt)("h3",{id:"\u4f55\u65f6\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u88ab\u91cd\u65b0\u6e32\u67d3"},"\u4f55\u65f6\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u88ab\u91cd\u65b0\u6e32\u67d3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Props \u53d8\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"State \u53d8\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002")),(0,o.kt)("h3",{id:"\u907f\u514d\u4e0d\u5fc5\u8981\u91cd\u65b0\u6e32\u67d3\u7684\u65b9\u5f0f"},"\u907f\u514d\u4e0d\u5fc5\u8981\u91cd\u65b0\u6e32\u67d3\u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"React.memo\uff0c useCallback\uff0c useMemo\u3002"),(0,o.kt)("h3",{id:"\u627e\u5230\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u7684\u539f\u56e0"},"\u627e\u5230\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u7684\u539f\u56e0"),(0,o.kt)("h2",{id:"\u5e38\u7528\u7b2c\u4e09\u65b9-hooks"},"\u5e38\u7528\u7b2c\u4e09\u65b9 Hooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN"},"ahooks")," \u662f Hooks \u5e93\u3002\u5e38\u7528\u7684\u6709\uff1auseBoolean, useGetState, useClickAway, useDebounce, useTimeout\u3002"),(0,o.kt)("p",null,"\u5176\u4ed6\uff1a usePortal\u3002"))}h.isMDXComponent=!0},9821:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(8404);const a=n.createContext({name:"",setName:()=>null}),o=()=>{const{name:e,setName:t}=(0,n.useContext)(a);return n.createElement("div",null,"\u503c\uff1a",n.createElement("input",{value:e,onChange:e=>t(e.target.value)}))},r=n.memo(o),s=e=>{let{name:t,children:l}=e;return n.createElement("div",null,t,n.createElement("div",{style:{paddingLeft:"2em"}},l))},u=n.memo(s),m=()=>{const[e,t]=(0,n.useState)("\u6539\u6211\u8bd5\u8bd5");return n.createElement(a.Provider,{value:{name:e,setName:t}},"\u503c: ",n.createElement("input",{value:e,onChange:e=>t(e.target.value)}),n.createElement(u,{name:"\u7b2c\u4e00\u7ea7\u5b50\u5143\u7d20"},n.createElement(u,{name:"\u7b2c\u4e8c\u7ea7\u5b50\u5143\u7d20"},n.createElement(u,{name:"\u7b2c\u4e09\u7ea7\u5b50\u5143\u7d20"},n.createElement(r,null)))))},i=n.memo(m)},2480:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(8404),a=l(9489);function o(e){let{children:t,fallback:l}=e;return(0,a.Z)()?n.createElement(n.Fragment,null,t?.()):l??null}},2682:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(8404),a=l(1706);const o=e=>{let{language:t="jsx",title:l,content:o}=e;const[r,s]=(0,n.useState)(!1);return n.createElement("div",{className:"code mt-5"},n.createElement("div",{className:"mb-3 flex justify-end space-x-3"},n.createElement("div",{className:"box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer",style:{borderColor:r?"rgb(29, 33, 41)":"rgb(229, 230, 225)",backgroundColor:r?"rgb(29, 33, 41)":"transparent",color:r?"#fff":"inherit"},onClick:()=>s(!r)},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})))),r&&n.createElement(a.Z,{language:t,title:l,showLineNumbers:!0,children:o}))},r=n.memo(o)},3282:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(8404),a=l(2480),o=l(4640);const r=e=>{let{children:t,contentSize:l="full",padding:r="p-12",className:s,browserOnly:u}=e;const m="full"===l?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[l],i=n.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${r}\n    `},n.createElement("div",{className:(0,o.Z)(m,"mx-auto",s)},t));return n.createElement(n.Fragment,null,u?n.createElement(a.Z,null,(()=>n.createElement(n.Fragment,null,i))):i)}}}]);