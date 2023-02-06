"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[143],{7239:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>C,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var a=l(8476),n=l(8404),r=l(6291);const s=e=>{let{value:t,onChange:l}=e;const a=(0,n.useCallback)((()=>{l(t-1)}),[t]),r=(0,n.useCallback)((()=>{l(t+1)}),[t]),s=(0,n.useCallback)((e=>{const t=e.target.value;/^[0-9]+$/.test(t)&&l(parseInt(t))}),[]);return n.createElement("div",{className:"flex space-x-1"},n.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:a},"-"),n.createElement("input",{type:"text",className:"w-24",value:t,onChange:s}),n.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:r},"+"))},c=()=>{const[e,t]=(0,n.useState)(10);return n.createElement("div",null,n.createElement(s,{value:e,onChange:t}),n.createElement("div",null,"\u5f53\u524d\u503c: ",e))},i=e=>{let{value:t,setValue:l,maxValue:a}=e;return{minus:(0,n.useCallback)((()=>{l(t-1)}),[t]),plus:(0,n.useCallback)((()=>{l(t+1)}),[t]),isValid:e=>!!/^[0-9]+$/.test(e),isMax:t>=a}},o=e=>{let{value:t,maxValue:l,onChange:a}=e;const{minus:r,plus:s,isValid:c,isMax:o}=i({value:t,maxValue:l,setValue:a}),m=(0,n.useCallback)((e=>{const t=e.target.value;c(t)&&a(parseInt(t))}),[]);return n.createElement("div",{className:"flex space-x-1"},n.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:r},"-"),n.createElement("input",{type:"text",className:"w-24",value:t,onChange:m}),!o&&n.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:s},"+"))},m=()=>{const[e,t]=(0,n.useState)(10);return n.createElement("div",null,n.createElement(o,{value:e,maxValue:12,onChange:t}),n.createElement("div",null,"\u5f53\u524d\u503c: ",e))},u=[{id:1,title:"\u9009\u98791"},{id:2,title:"\u9009\u98792"},{id:3,title:"\u9009\u98793"}],d=e=>{let{controlShow:t,onChange:l}=e;const[a,r]=(0,n.useState)(!1),[s,c]=(0,n.useState)(0),i=(0,n.useRef)(0);return(0,n.useEffect)((()=>{const e=()=>{var e;r(!1),e=i.current+1,c(e),i.current=e};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,n.useEffect)((()=>{const e=setInterval((()=>{console.log(i.current)}),3e3);return()=>{clearInterval(e)}}),[]),(0,n.useEffect)((()=>{t&&r(!0)}),[t]),n.createElement("div",{className:"relative w-24 text-white cursor-pointer",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},n.createElement("div",{className:"px-2 h-8 leading-8 border bg-green-500",onClick:()=>{r(!0)}},"\u8bf7\u9009\u62e9"),n.createElement("div",{className:"absolute top-8 w-full",style:{display:a?"block":"none"}},u.map((e=>n.createElement("div",{key:e.id,className:"px-2 h-8 leading-8 border border-b bg-green-600",onClick:()=>{l(e.id),r(!1)}},e.title)))))},p=()=>{const[e,t]=(0,n.useState)(""),[l,a]=(0,n.useState)(0);return n.createElement("div",null,"\u9009\u4e2d\u503c: ",""===e?"\u672a\u9009\u62e9":e,"\u3002",n.createElement("button",{onClick:()=>a(Date.now())},"\u70b9\u6211\u5f39\u51fa\u9009\u9879"),n.createElement(d,{onChange:t,controlShow:l}))};var v=l(3648),E=l(1075);const k=e=>{let{}=e;return n.createElement("div",{className:"mb-4"},n.createElement("div",{className:"relative w-[200px] h-[200px] shadow"},n.createElement("div",{className:"\n          absolute\n          w-5 h-5\n          rounded-full bg-green-500\n        ",style:{left:50,top:50}})),n.createElement("div",{className:"mt-5"},n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"flex items-center space-x-3"},n.createElement("div",{className:"flex items-center space-x-2"},n.createElement("div",null,"x: "),n.createElement("div",{className:"w-32"},n.createElement(v.Z,{mode:"button",className:""}))),n.createElement("div",{className:"flex items-center space-x-2"},n.createElement("div",null,"y: "),n.createElement("div",{className:"w-32"},n.createElement(v.Z,{mode:"button",className:""}))))),n.createElement("div",{className:"flex items-center mt-3"},n.createElement("div",{className:"flex items-center space-x-2"},n.createElement("div",null,"\u65b9\u5411: "),n.createElement(E.Z.Group,null,n.createElement(E.Z,{type:"primary",shape:"round"},"\u4e0a"),n.createElement(E.Z,{type:"outline"},"\u4e0b"),n.createElement(E.Z,{type:"outline",shape:"round"},"\u5de6"),n.createElement(E.Z,{type:"outline",shape:"round"},"\u53f3")))),n.createElement("div",{className:"flex items-center mt-3"},n.createElement("div",{className:"flex items-center space-x-3"},n.createElement("div",{className:"flex items-center space-x-2"},n.createElement("div",null,"\u901f\u5ea6: "),n.createElement(E.Z.Group,null,n.createElement(E.Z,{type:"primary",shape:"round"},"\u6162"),n.createElement(E.Z,{type:"outline"},"\u4e2d"),n.createElement(E.Z,{type:"outline",shape:"round"},"\u5feb")),n.createElement("div",{className:"text-xs"},"5px/\u79d2")))),n.createElement("div",{className:"flex items-center mt-3"},n.createElement(E.Z,{type:"primary"},"\u5f00\u59cb"))))},x=n.memo(k),f={},g="Demo",h={unversionedId:"frontend/framework/react/demo/index",id:"frontend/framework/react/demo/index",title:"Demo",description:"\u8ba1\u6570\u5668",source:"@site/docs/frontend/framework/react/demo/index.mdx",sourceDirName:"frontend/framework/react/demo",slug:"/frontend/framework/react/demo/",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/framework/react/demo/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\u6982\u89c8",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/overview"}},N={},b=[{value:"\u8ba1\u6570\u5668",id:"\u8ba1\u6570\u5668",level:2},{value:"\u81ea\u5b9a\u4e49hooks \u7684\u8ba1\u6570\u5668",id:"\u81ea\u5b9a\u4e49hooks-\u7684\u8ba1\u6570\u5668",level:2},{value:"\u7b80\u5355\u4e0b\u62c9\u6846",id:"\u7b80\u5355\u4e0b\u62c9\u6846",level:2},{value:"\u6e38\u620f\uff1a\u8fd0\u52a8\u7684\u7403",id:"\u6e38\u620f\u8fd0\u52a8\u7684\u7403",level:2}],w={toc:b};function C(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"demo"},"Demo"),(0,r.kt)("h2",{id:"\u8ba1\u6570\u5668"},"\u8ba1\u6570\u5668"),(0,r.kt)("p",null,"\u4e3b\u8981\u77e5\u8bc6\u70b9\uff1a ",(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u7ed1\u5b9a"),"\uff0c ",(0,r.kt)("strong",{parentName:"p"},"useState"),"\u3002"),(0,r.kt)(c,{mdxType:"CountDemo"}),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49hooks-\u7684\u8ba1\u6570\u5668"},"\u81ea\u5b9a\u4e49hooks \u7684\u8ba1\u6570\u5668"),(0,r.kt)(m,{mdxType:"CountSplitLogicDemo"}),(0,r.kt)("h2",{id:"\u7b80\u5355\u4e0b\u62c9\u6846"},"\u7b80\u5355\u4e0b\u62c9\u6846"),(0,r.kt)("p",null,"\u4e3b\u8981\u77e5\u8bc6\u70b9\uff1a ",(0,r.kt)("strong",{parentName:"p"},"useEffect"),"\u3002"),(0,r.kt)(p,{mdxType:"SimpleSelectDemo"}),(0,r.kt)("h2",{id:"\u6e38\u620f\u8fd0\u52a8\u7684\u7403"},"\u6e38\u620f\uff1a\u8fd0\u52a8\u7684\u7403"),(0,r.kt)(x,{mdxType:"BallGame"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u8981\u5b9e\u73b0\u7684\u529f\u80fd"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u80fd\u63a7\u5236\u7403\u7684\u8fd0\u52a8\u548c\u6682\u505c\u3002"),(0,r.kt)("li",null,"\u6682\u505c\u65f6\uff0c\u53ef\u4ee5\u4fee\u6539\u7403\u7684\u4f4d\u7f6e\uff0c\u8fd0\u52a8\u65b9\u5411\u548c\u901f\u5ea6\u3002"),(0,r.kt)("li",null,"\u7403\u78b0\u5230\u8fb9\u754c\u540e\uff0c\u4f1a\u5f39\u56de\u6765\u3002\u901f\u5ea6\u4e0d\u53d8\uff0c\u65b9\u5411\u53d8\u53cd\u3002"),(0,r.kt)("li",null,"\u4e00\u5171\u6709\u4e09\u6761\u547d\u3002\u78b0\u5230\u56db\u9762\u7684\u8fb9\u754c\uff0c\u547d\u51cf1\u3002\u547d\u7684\u503c\u4e3a0\u65f6\uff0c\u6e38\u620f\u7ed3\u675f\u3002"),(0,r.kt)("li",null,"\u6e38\u620f\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u91cd\u65b0\u5f00\u59cb\u6e38\u620f\u3002"),(0,r.kt)("li",null,"\u4e0d\u540c\u7684\u547d\u7684\u7403\u7684\u989c\u8272\u4e0d\u540c\u3002\u4e09\u6761\u547d\u65f6\uff0c\u4e3a\u7eff\u8272\uff0c\u4e24\u6761\u547d\u65f6\uff0c\u4e3a\u9ec4\u8272\uff0c\u4e00\u6761\u547d\u65f6\uff0c\u4e3a\u7ea2\u8272\u3002"))))}C.isMDXComponent=!0}}]);