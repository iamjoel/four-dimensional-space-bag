"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4795],{5525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>b,default:()=>N,frontMatter:()=>h,metadata:()=>v,toc:()=>x});var s=a(9772),n=a(8404),r=a(6291),c=a(2364),l=a(1885),i=a(9458),m=a(8936);function o(e){void 0===e&&(e=10);const t=Math.round(Math.random()*e);return 0===t?1:t>e?e:t}function u(){return Math.random()>.5?function(){const e=o(),t=o();return{left:e,right:t,op:"+",res:e+t}}():function(){const e=o(20),t=o(e);return{left:e,right:t,op:"-",res:e-t}}()}function d(e){let{value:t,onChange:a,onEnter:s}=e;const r=e=>{let{text:r}=e;return n.createElement(c.Z,{className:"!w-[80px] !h-[80px] !text-[20px]",onClick:()=>(e=>{switch(e){case"<-":a(t.slice(0,-1));break;case"E":s();break;default:a(`${t}${e}`)}})(r)},r)};return n.createElement("div",{className:"space-y-3"},[[1,2,3],[4,5,6],[7,8,9],["<-",0,"E"]].map(((e,t)=>((e,t)=>n.createElement("div",{className:"flex items-center space-x-3",key:t},e.map((e=>n.createElement(r,{text:e,key:e})))))(e,t))))}const p=()=>{const[e,t,a]=(0,m.Z)(!1),[s,r]=(0,n.useState)(0),[o,p,f]=(0,m.Z)(!1),[h,b,v]=(0,m.Z)(0),E=(()=>{const e=Math.floor(h/60);return`${e>0?`${e}\u5206`:""}${h%60}\u79d2`})(),[x,g,k]=(0,m.Z)(3),[N,w]=(0,n.useState)({}),[y,Z]=(0,n.useState)([]),$=()=>{r(s+1),w(u()),g(3)},[C,M]=(0,n.useState)("");return(0,n.useEffect)((()=>{$();const e=setInterval((()=>{if(!a())return;f()||b(v()+1);const e=k()-1;e>=0&&g(e)}),1e3);return()=>{clearInterval(e)}}),[]),e?o?n.createElement("div",{className:"p-3 shadow-lg text-base"},n.createElement("div",{className:"flex space-x-2"},n.createElement("div",null,"\u7528\u65f6\u95f4\uff1a",E),n.createElement("div",null,"\u9519\u8bef\u6570\uff1a",y.length)),y.length>0&&n.createElement("div",{className:"space-y-1"},n.createElement("div",{className:"mt-2 mb-1"},"\u9519\u8bef\u9898\u76ee:"),y.map(((e,t)=>n.createElement("div",{key:e},t+1,". ",e))))):n.createElement("div",{className:"p-3 shadow-lg"},n.createElement(i.Z,{percent:x/3*100,showText:!1}),n.createElement("div",{className:"text-[#f00] h-[22px]"},0===x?"\u8d85\u65f6\u4e86":" "),n.createElement("div",{className:"mt-3 mb-1 flex justify-between"},n.createElement("div",null,n.createElement("span",{className:"text-[#0f0]"},s)," / ",50)),n.createElement("div",{className:"flex text-[80px]"},N.left," ",N.op," ",N.right," = ",C),n.createElement(d,{value:C,onChange:M,onEnter:()=>{if(Number.parseInt(C)!==N.res)return Z([...y,`${N.left} ${N.op} ${N.right} = ${C}`]),l.Z.error("\u9519\u4e86"),void M("");50!==s?(M(""),$()):p(!0)}})):n.createElement("div",{className:"p-3 shadow-lg"},n.createElement("div",{className:"mb-3"},"\u8981\u6c42\uff1a50\u9053\uff0c\u4e00\u9053\u4e0d\u8d85\u8fc7 3 \u79d2\u3002"),n.createElement(c.Z,{size:"large",type:"primary",onClick:()=>t(!0)},"\u5f00\u59cb"))},f=n.memo(p),h={hide_table_of_contents:!0},b="20 \u4ee5\u5185\u52a0\u51cf\u6cd5",v={unversionedId:"basic/math/plus-minus/index",id:"basic/math/plus-minus/index",title:"20 \u4ee5\u5185\u52a0\u51cf\u6cd5",description:"",source:"@site/docs/basic/math/plus-minus/index.mdx",sourceDirName:"basic/math/plus-minus",slug:"/basic/math/plus-minus/",permalink:"/four-dimensional-space-bag/site/build/docs/basic/math/plus-minus/",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"basic",previous:{title:"\u4e00\u4e9b\u57fa\u7840\u7684\u4e1c\u4e1c",permalink:"/four-dimensional-space-bag/site/build/docs/basic/overview"},next:{title:"\u8bbe\u8ba1\u539f\u5219",permalink:"/four-dimensional-space-bag/site/build/docs/basic/design/rule/"}},E={},x=[],g={toc:x},k="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"20-\u4ee5\u5185\u52a0\u51cf\u6cd5"},"20 \u4ee5\u5185\u52a0\u51cf\u6cd5"),(0,r.kt)(f,{mdxType:"Code"}))}N.isMDXComponent=!0}}]);