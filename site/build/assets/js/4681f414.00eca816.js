"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[172],{5564:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>M,contentTitle:()=>L,default:()=>B,frontMatter:()=>D,metadata:()=>q,toc:()=>V});var a=l(6760),n=l(8404),r=l(6291),s=l(3282),c=l(4766),i=l.n(c),o=l(4640);const m=e=>{let{title:t,items:l}=e;const a=!!l.find((e=>{let{expectValue:t,actuallyValue:l}=e;return!i().isEqual(t,l)})),r=e=>"string"==typeof e?`'${e}'`:"object"==typeof e?JSON.stringify(e):`${e}`;return n.createElement(s.Z,{padding:"p-6"},n.createElement("div",null,n.createElement("div",{className:(0,o.Z)("mb-2",a?"text-red-500":"text-green-500")},t),n.createElement("div",{className:"pl-4x"},l.map((e=>(e=>{let{title:t,expectValue:l,actuallyValue:a}=e;const s=i().isEqual(l,a);return n.createElement("div",{key:t,className:(0,o.Z)("mb-1 text-sm",s?"text-green-500":"text-red-500")},n.createElement("div",{className:"flex items-center"},n.createElement("span",{className:"mr-1 h-6"},s?u:p),t," \u7684\u7ed3\u679c\u5e94\u8be5\u662f: ",r(l),"\u3002"),!s&&n.createElement("div",{className:"ml-3 pl-4 text-xs"},"\u5b9e\u9645\u503c: ",r(a),"\u3002"))})(e))))))},d=n.memo(m),u=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),p=n.createElement("div",{className:"flex justify-center items-center w-6 h-6"},n.createElement("div",{className:"flex justify-center items-center w-5 h-5 border-solid rounded-full border border-red-500"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-3 h-3"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))));var k=l(4583);const h=k.Z.Group,v=e=>{let{}=e;const[t,l]=(0,n.useState)("top"),a={top:"items-start",middle:"items-center",bottom:"items-end"}[t];return n.createElement("div",null,n.createElement("label",{className:"block mb-2"},"\u5bf9\u9f50\u65b9\u5f0f\uff1a",n.createElement(h,null,n.createElement(k.Z,{type:"top"===t?"primary":"outline",shape:"round",onClick:()=>l("top")},"top"),n.createElement(k.Z,{type:"middle"===t?"primary":"outline",shape:"round",onClick:()=>l("middle")},"middle"),n.createElement(k.Z,{type:"bottom"===t?"primary":"outline",shape:"round",onClick:()=>l("bottom")},"bottom"))),n.createElement("div",{className:`flex ${a} h-40 rounded bg-stripes-indigo gap-4`},n.createElement("div",{className:"grow h-16 rounded bg-indigo-500"}),n.createElement("div",{className:"grow h-8 rounded bg-indigo-500"}),n.createElement("div",{className:"grow h-32 rounded bg-indigo-500"})))},f=n.memo(v);function E(e){let{className:t=""}=e;return n.createElement("div",{className:`\n      relative\n      flex justify-center items-center\n      w-14 h-14 rounded-full\n      bg-indigo-500\n      ${t}\n    `},n.createElement("div",{className:"w-10 h-1 bg-white"}),n.createElement("div",{className:" absolute top-2 left-1/2 -translate-x-1/2 w-1 h-10 bg-white "}))}function b(){return n.createElement(E,{className:"rotate-45"})}var g=l(519),x=l(8980);function N(e,t){return void 0===t&&(t=1),[e.slice(0,t),e.slice(t)]}function w(e){for(var t=arguments.length,l=new Array(t>1?t-1:0),a=1;a<t;a++)l[a-1]=arguments[a];return[...e,...l.flatMap((e=>(Array.isArray(e),e)))]}var y=l(7644);const C=()=>{const[e,t]=(0,n.useState)("giveNum"),[l,a]=(0,n.useState)(null),[r,s]=(0,n.useState)(null),[c,i]=(0,n.useState)(1),[o,m]=(0,n.useState)(100),[d,u]=(0,n.useState)(""),p=(0,n.useCallback)((()=>{t("guessNum")}),[]),k=(0,n.useCallback)((()=>{r===l?t("finished"):r>l?(m(Math.min(r,o)),u("\u731c\u5927\u4e86")):(i(Math.max(r,c)),u("\u731c\u5c0f\u4e86")),s("")}),[l,r]);return n.createElement("div",null,"giveNum"===e&&n.createElement("div",{className:"space-x-2 "},n.createElement("span",null,"\u8bf7\u7ed9\u51fa\u6570\u5b57:"),n.createElement("input",{value:l,onChange:e=>a(Number.parseInt(e.target.value,10)),placeholder:"1 ~ 100 \u4e4b\u95f4\u7684\u6570\u5b57"}),n.createElement("button",{onClick:p},"\u786e\u5b9a")),"guessNum"===e&&n.createElement("div",null,n.createElement("div",{className:"space-x-2"},n.createElement("span",null,"\u8bf7\u731c\u6570\u5b57:"),n.createElement("input",{value:r,onChange:e=>s(Number.parseInt(e.target.value,10)),placeholder:"0 ~ 100 \u4e4b\u95f4\u7684\u6570\u5b57"}),n.createElement("button",{onClick:k},"\u786e\u5b9a")),""!==d&&n.createElement("div",{className:"mt-2 text-sm"},d,": ",c," ~ ",o)),"finished"===e&&"\u606d\u559c\u4f60\uff0c\u7b54\u5bf9\u4e86")},Z=n.memo(C);var S=l(9821),T=l(8981),_=l(2347),j=l(9780);const D={},L="\u7f16\u7a0b\u7ec3\u4e60\u9898",q={unversionedId:"frontend/kata/readme",id:"frontend/kata/readme",title:"\u7f16\u7a0b\u7ec3\u4e60\u9898",description:"CSS",source:"@site/docs/frontend/kata/readme.mdx",sourceDirName:"frontend/kata",slug:"/frontend/kata/",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/kata/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\u81ea\u5b9a\u4e49\u4ee3\u7801\u7247\u6bb5(VSCode Snippets)",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/tools/vscode/snippet"}},M={},V=[{value:"CSS",id:"css",level:2},{value:"\u5782\u76f4\u65b9\u5411\u5bf9\u9f50 #flex-ver",id:"\u5782\u76f4\u65b9\u5411\u5bf9\u9f50-flex-ver",level:3},{value:"\u5723\u676f\u5e03\u5c40",id:"\u5723\u676f\u5e03\u5c40",level:3},{value:"+ \u53f7\u548c x \u53f7\u6309\u94ae #plus-close-btn",id:"-\u53f7\u548c-x-\u53f7\u6309\u94ae-plus-close-btn",level:3},{value:"\u9ab0\u5b50",id:"\u9ab0\u5b50",level:3},{value:"\u7efc\u5408\u9875\u9762",id:"\u7efc\u5408\u9875\u9762",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"\u5b9e\u73b0 loadash \u7684 <code>_.chunk</code> \u65b9\u6cd5 #_.chunk",id:"\u5b9e\u73b0-loadash-\u7684-_chunk-\u65b9\u6cd5-_chunk",level:3},{value:"\u5b9e\u73b0 loadash \u7684 <code>_.concat</code> \u65b9\u6cd5 #_.concat",id:"\u5b9e\u73b0-loadash-\u7684-_concat-\u65b9\u6cd5-_concat",level:3},{value:"\u5b9e\u73b0  loadash \u7684 <code>_.curry</code> \u65b9\u6cd5 #_.curry <strong>[\u672a\u5b8c\u6210]</strong>",id:"\u5b9e\u73b0--loadash-\u7684-_curry-\u65b9\u6cd5-_curry-\u672a\u5b8c\u6210",level:3},{value:"DOM",id:"dom",level:2},{value:"\u5217\u8868\u65e0\u9650\u52a0\u8f7d #infinite-list",id:"\u5217\u8868\u65e0\u9650\u52a0\u8f7d-infinite-list",level:3},{value:"BOM",id:"bom",level:2},{value:"\u89e3\u6790\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u5185 #parse-search",id:"\u89e3\u6790\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u5185-parse-search",level:3},{value:"\u5b9e\u73b0 useLocalStroge",id:"\u5b9e\u73b0-uselocalstroge",level:3},{value:"\u6846\u67b6",id:"\u6846\u67b6",level:2},{value:"\u8ba1\u6570\u5668 #count",id:"\u8ba1\u6570\u5668-count",level:3},{value:"\u731c\u6570\u5b57",id:"\u731c\u6570\u5b57",level:3},{value:"\u7b80\u5355\u7684\u4e0b\u62c9\u9009\u62e9\u5668 #select",id:"\u7b80\u5355\u7684\u4e0b\u62c9\u9009\u62e9\u5668-select",level:3},{value:"\u7ed9\u5f88\u6df1\u7684\u5b50\u7ec4\u4ef6\u4f20\u503c #passToDeepChildren",id:"\u7ed9\u5f88\u6df1\u7684\u5b50\u7ec4\u4ef6\u4f20\u503c-passtodeepchildren",level:3},{value:"\u8fd0\u52a8\u7684\u7403 #ball",id:"\u8fd0\u52a8\u7684\u7403-ball",level:3},{value:"\u5f85\u529e\u4e8b\u5b9c <strong>[\u672a\u5b8c\u6210]</strong>",id:"\u5f85\u529e\u4e8b\u5b9c-\u672a\u5b8c\u6210",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}],I={toc:V},A="wrapper";function B(e){let{components:t,...l}=e;return(0,r.kt)(A,(0,a.Z)({},I,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7f16\u7a0b\u7ec3\u4e60\u9898"},"\u7f16\u7a0b\u7ec3\u4e60\u9898"),(0,r.kt)("h2",{id:"css"},"CSS"),(0,r.kt)("h3",{id:"\u5782\u76f4\u65b9\u5411\u5bf9\u9f50-flex-ver"},"\u5782\u76f4\u65b9\u5411\u5bf9\u9f50 #flex-ver"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7528 Flex \u5e03\u5c40\uff0c\u5b9e\u73b0\u591a\u4e2a\u5b50\u9879\u5728\u5782\u76f4\u65b9\u5411\u7684\u5c45\u9876\uff0c\u5c45\u4e2d\uff0c\u5c45\u5e95\u7684\u5bf9\u9f50\u3002")),(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)(f,{mdxType:"AlignVer"})),(0,r.kt)("h3",{id:"\u5723\u676f\u5e03\u5c40"},"\u5723\u676f\u5e03\u5c40"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u5782\u76f4\u65b9\u5411: header, footer \u56fa\u5b9a\u9ad8\u5ea6\u3002\u4e2d\u95f4\u90e8\u5206\u6491\u6ee1\u5bb9\u5668\u5269\u4f59\u90e8\u5206\u3002"),(0,r.kt)("li",null,"\u6c34\u5e73\u65b9\u5411: left, right \u56fa\u5b9a\u5bbd\u5ea6\u3002\u4e2d\u95f4\u90e8\u5206\u6491\u6ee1\u5bb9\u5668\u5269\u4f59\u90e8\u5206\u3002"))),(0,r.kt)("p",null,"\u8981\u5b9e\u73b0\u7684\u6837\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)(g.Z,{mdxType:"Cup"})),(0,r.kt)("h3",{id:"-\u53f7\u548c-x-\u53f7\u6309\u94ae-plus-close-btn"},"+ \u53f7\u548c x \u53f7\u6309\u94ae #plus-close-btn"),(0,r.kt)("p",null,"\u8981\u5b9e\u73b0\u7684\u6837\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)("div",{className:"flex justify-center space-x-3"},(0,r.kt)(E,{mdxType:"PlusBtn"}),(0,r.kt)(b,{mdxType:"CloseBtn"}))),(0,r.kt)("h3",{id:"\u9ab0\u5b50"},"\u9ab0\u5b50"),(0,r.kt)("p",null,"\u7528 Flex \u6216 Grid \u5e03\u5c40\uff0c\u5b9e\u73b0\u7684\u6837\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)(x.Z,{mdxType:"Dice"})),(0,r.kt)("h3",{id:"\u7efc\u5408\u9875\u9762"},"\u7efc\u5408\u9875\u9762"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://8fd86458b7e4267f.demo.carrd.co/"},"Hernry Case")),(0,r.kt)("li",{parentName:"ul"},"\u7985\u610f\u82b1\u56ed")),(0,r.kt)("h2",{id:"javascript"},"JavaScript"),(0,r.kt)("h3",{id:"\u5b9e\u73b0-loadash-\u7684-_chunk-\u65b9\u6cd5-_chunk"},"\u5b9e\u73b0 loadash \u7684 ",(0,r.kt)("a",{parentName:"h3",href:"https://lodash.com/docs/4.17.15#chunk"},(0,r.kt)("inlineCode",{parentName:"a"},"_.chunk"))," \u65b9\u6cd5 #_.chunk"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6570\u7ec4\u7684\u5207\u5206\u3002")),(0,r.kt)(d,{title:"_.chunk \u9700\u6c42\uff1a",items:[{title:"_.chunk(['a', 'b', 'c', 'd'], 2)",expectValue:[["a","b"],["c","d"]],actuallyValue:N(["a","b","c","d"],2)},{title:"_.chunk(['a', 'b', 'c', 'd'], 3)",expectValue:[["a","b","c"],["d"]],actuallyValue:N(["a","b","c","d"],3)}],mdxType:"TestCase"}),(0,r.kt)("h3",{id:"\u5b9e\u73b0-loadash-\u7684-_concat-\u65b9\u6cd5-_concat"},"\u5b9e\u73b0 loadash \u7684 ",(0,r.kt)("a",{parentName:"h3",href:"https://lodash.com/docs/4.17.15#concat"},(0,r.kt)("inlineCode",{parentName:"a"},"_.concat"))," \u65b9\u6cd5 #_.concat"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6570\u7ec4\u7684\u62fc\u63a5\u3002")),(0,r.kt)(d,{title:"_.concat \u9700\u6c42\uff1a",items:[{title:"_.concat([1], 2, [3], [[4]])",expectValue:[1,2,3,[4]],actuallyValue:w([1],2,[3],[[4]])},{title:"_.concat([1], 2, [3, 4, 5], [[4]])",expectValue:[1,2,3,4,5,[4]],actuallyValue:w([1],2,[3,4,5],[[4]])}],mdxType:"TestCase"}),(0,r.kt)("h3",{id:"\u5b9e\u73b0--loadash-\u7684-_curry-\u65b9\u6cd5-_curry-\u672a\u5b8c\u6210"},"\u5b9e\u73b0  loadash \u7684 ",(0,r.kt)("a",{parentName:"h3",href:"https://lodash.com/docs/4.17.15#curry"},(0,r.kt)("inlineCode",{parentName:"a"},"_.curry"))," \u65b9\u6cd5 #_.curry ",(0,r.kt)("strong",{parentName:"h3"},"[","\u672a\u5b8c\u6210","]")),(0,r.kt)("h2",{id:"dom"},"DOM"),(0,r.kt)("h3",{id:"\u5217\u8868\u65e0\u9650\u52a0\u8f7d-infinite-list"},"\u5217\u8868\u65e0\u9650\u52a0\u8f7d #infinite-list"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5217\u8868\u6eda\u52a8\u5230\u5e95\u90e8\uff0c\u52a0\u8f7d\u66f4\u591a\u5185\u5bb9\u3002")),(0,r.kt)("p",null,"\u652f\u6301\u5782\u76f4\u548c\u6c34\u5e73\u65b9\u5411\u7684\u5217\u8868\u3002\u793a\u4f8b\uff1a"),(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)(T.Z,{mdxType:"InfiniteListDemo"})),(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)(T.Z,{dir:"hor",mdxType:"InfiniteListDemo"})),(0,r.kt)("h2",{id:"bom"},"BOM"),(0,r.kt)("h3",{id:"\u89e3\u6790\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u5185-parse-search"},"\u89e3\u6790\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u5185 #parse-search"),(0,r.kt)("h3",{id:"\u5b9e\u73b0-uselocalstroge"},"\u5b9e\u73b0 useLocalStroge"),(0,r.kt)("h2",{id:"\u6846\u67b6"},"\u6846\u67b6"),(0,r.kt)("p",null,"React\uff0cVue \u7b49\u3002"),(0,r.kt)("h3",{id:"\u8ba1\u6570\u5668-count"},"\u8ba1\u6570\u5668 #count"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b9e\u73b0\u8ba1\u6570\u5668\u529f\u80fd\u3002\u8ba1\u6570\u5668\u662f\u7528\u4ee5\u6765\u8ba1\u6570\u7684\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u5c55\u793a\u6570\u503c\u3002\u7528\u8f93\u5165\u6846\u6765\u5c55\u793a\u5f53\u524d\u6570\u503c\u3002"),(0,r.kt)("li",null,"\u4fee\u6539\u6570\u503c\u3002\u652f\u6301\u901a\u8fc7\u8f93\u5165\u6846\uff0c+ \u548c - \u6309\u94ae\u6765\u6539\u6570\u503c\u3002\u70b9\u51fb+\uff0c\u6570\u503c\u589e\u52a01\u3002\u70b9\u51fb-\uff0c\u6570\u503c\u51cf\u5c111\u3002"),(0,r.kt)("li",null,"\u6570\u503c\u5fc5\u987b\u662f\u6574\u6570\u3002"),(0,r.kt)("li",null,"\u6570\u503c\u7684\u8303\u56f4\u662f: 5 \u5230 15\u3002",(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u5f53\u6570\u503c\u8fbe\u5230\u6700\u5927\u6216\u6700\u5c0f\u503c\u65f6\uff0c\u9690\u85cf\u5bf9\u5e94\u7684\u6309\u94ae\u3002"),(0,r.kt)("li",null,"\u5f53\u8f93\u5165\u7684\u6570\u503c\u5927\u4e8e\u6700\u5927\u503c\u65f6\uff0c\u663e\u793a\u6700\u5927\u503c\u3002"),(0,r.kt)("li",null,"\u5f53\u8f93\u5165\u7684\u6570\u503c\u5c0f\u4e8e\u6700\u5927\u503c\u65f6\uff0c\u663e\u793a\u6700\u5c0f\u503c\u3002"))),(0,r.kt)("li",null,"\u4f18\u5316\u9879: \u7528 \u81ea\u5b9a\u4e49 hooks \u6765\u62bd\u79bb\u903b\u8f91\u3002"))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)(s.Z,{contentSize:"md",mdxType:"Demo"},(0,r.kt)(y.H,{mdxType:"CountDemo"})),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:"<CountDemo />"}}),(0,r.kt)("h3",{id:"\u731c\u6570\u5b57"},"\u731c\u6570\u5b57"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8f7b\u677e\u7684\u805a\u4f1a\u6e38\u620f\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u4e3b\u6301\u4eba\u5199\u4e0b 1 \u5230 100 \u4e4b\u95f4\u7684\u4e00\u4e2a\u6570\u5b57\u3002"),(0,r.kt)("li",null,"\u5176\u4ed6\u4eba\u8f6e\u6d41\u731c\uff0c\u731c\u5230\u4e3b\u6301\u4eba\u5199\u7684\u6570\u5b57\uff0c\u5219\u6e38\u620f\u7ed3\u675f\u3002"),(0,r.kt)("li",null,"\u5176\u4ed6\u4eba\u731c\u7684\u7b54\u6848\u6bd4\u5199\u4e0b\u6570\u5b57\u5927\uff0c\u4e3b\u6301\u4eba\u4f1a\u8bf4\u5927\u4e86\u3002\u731c\u7684\u6bd4\u5199\u4e0b\u6570\u5b57\u5c0f\uff0c\u4e3b\u6301\u4eba\u4f1a\u8bf4\u5c0f\u4e86\u3002"))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)(s.Z,{contentSize:"md",mdxType:"Demo"},(0,r.kt)(Z,{mdxType:"GuessNum"})),(0,r.kt)("h3",{id:"\u7b80\u5355\u7684\u4e0b\u62c9\u9009\u62e9\u5668-select"},"\u7b80\u5355\u7684\u4e0b\u62c9\u9009\u62e9\u5668 #select"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u62c9\u9009\u62e9\u5668")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",null,'\u5c55\u793a\u4e0b\u62c9\u9009\u9879\u3002\u70b9\u51fb\u4e0b\u62c9\u6846 \u6216 "\u70b9\u6211\u5f39\u51fa\u9009\u9879" \u6309\u94ae\uff0c\u5c55\u793a\u4e0b\u62c9\u9009\u9879\u3002'),(0,r.kt)("li",null,"\u53ef\u4ee5\u901a\u8fc7"),(0,r.kt)("li",null,"\u9009\u62e9\u9009\u9879\u3002\u70b9\u51fb\u9009\u9879\uff0c\u5219\u9009\u62e9\u9009\u9879\uff0c\u5e76\u9690\u85cf\u4e0b\u62c9\u5185\u5bb9\u3002"),(0,r.kt)("li",null,"\u70b9\u51fb\u4e0b\u62c9\u9009\u62e9\u5668\u5916\u4fa7\uff0c\u9690\u85cf\u4e0b\u62c9\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)(s.Z,{contentSize:"md",mdxType:"Demo"},(0,r.kt)(_.L,{mdxType:"SimpleSelectDemo"})),(0,r.kt)("h3",{id:"\u7ed9\u5f88\u6df1\u7684\u5b50\u7ec4\u4ef6\u4f20\u503c-passtodeepchildren"},"\u7ed9\u5f88\u6df1\u7684\u5b50\u7ec4\u4ef6\u4f20\u503c #passToDeepChildren"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7236\u7ec4\u4ef6\u76f4\u63a5\u4f20\u503c\u7ed9\u5f88\u6df1\u7684\u5b50\u7ec4\u4ef6\u4f20\u503c\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u7236\u7ec4\u4ef6\u76f4\u63a5\u4f20\u503c\u7ed9\u5f88\u6df1\u7684\u5b50\u7ec4\u4ef6\u4f20\u503c\uff0c\u4f46\u4e0d\u901a\u8fc7\u4e2d\u95f4\u7ec4\u4ef6\u4f20\u9012\u3002\u7236\u7ec4\u4ef6\u548c\u5b50\u7ec4\u4ef6\u5747\u80fd\u83b7\u53d6\u548c\u4fee\u6539\u503c\u3002"),(0,r.kt)("li",null,"React \u7528 Context API \u5b9e\u73b0\u3002Vue \u7528 Project/Inject \u5b9e\u73b0\u3002"))),"\u793a\u4f8b\uff1a",(0,r.kt)(s.Z,{mdxType:"Demo"},(0,r.kt)(S.Z,{mdxType:"UseContextDemo"})),(0,r.kt)("h3",{id:"\u8fd0\u52a8\u7684\u7403-ball"},"\u8fd0\u52a8\u7684\u7403 #ball"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a7\u5236\u7403\u7684\u8fd0\u52a8\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u80fd\u63a7\u5236\u7403\u7684\u8fd0\u52a8\u548c\u6682\u505c\u3002"),(0,r.kt)("li",null,"\u6682\u505c\u65f6\uff0c\u53ef\u4ee5\u4fee\u6539\u7403\u7684\u4f4d\u7f6e\uff0c\u8fd0\u52a8\u65b9\u5411\u548c\u901f\u5ea6\u3002"),(0,r.kt)("li",null,"\u7403\u78b0\u5230\u8fb9\u754c\u540e\uff0c\u4f1a\u5f39\u56de\u6765\u3002\u901f\u5ea6\u4e0d\u53d8\uff0c\u65b9\u5411\u53d8\u53cd\u3002"),(0,r.kt)("li",null,"\u4e00\u5171\u6709\u4e09\u6761\u547d\u3002\u78b0\u5230\u56db\u9762\u7684\u8fb9\u754c\uff0c\u547d\u51cf1\u3002\u547d\u7684\u503c\u4e3a0\u65f6\uff0c\u6e38\u620f\u7ed3\u675f\u3002"),(0,r.kt)("li",null,"\u6e38\u620f\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u91cd\u65b0\u5f00\u59cb\u6e38\u620f\u3002"),(0,r.kt)("li",null,"\u4e0d\u540c\u7684\u547d\u7684\u7403\u7684\u989c\u8272\u4e0d\u540c\u3002\u4e09\u6761\u547d\u65f6\uff0c\u4e3a\u7eff\u8272\uff0c\u4e24\u6761\u547d\u65f6\uff0c\u4e3a\u9ec4\u8272\uff0c\u4e00\u6761\u547d\u65f6\uff0c\u4e3a\u7ea2\u8272\u3002"))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)(s.Z,{contentSize:"md",mdxType:"Demo"},(0,r.kt)(j.Z,{mdxType:"BallGame"})),(0,r.kt)("h3",{id:"\u5f85\u529e\u4e8b\u5b9c-\u672a\u5b8c\u6210"},"\u5f85\u529e\u4e8b\u5b9c ",(0,r.kt)("strong",{parentName:"h3"},"[","\u672a\u5b8c\u6210","]")),(0,r.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62f3\u7687\u8fde\u62db\u7ec3\u4e60\u5de5\u5177 - \u81f4\u9752\u6625"),(0,r.kt)("li",{parentName:"ul"},"\u5eb7\u5a01\u751f\u547d\u6e38\u620f - \u4e0a\u5e1d\u89c6\u89d2\u770b\u751f\u547d\u7684\u751f\u548c\u6b7b"),(0,r.kt)("li",{parentName:"ul"},"\u827e\u5bbe\u6d69\u65af\u8bb0\u5fc6\u66f2\u7ebf - \u6297\u9057\u5fd8\u5229\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u56fe\u7247\u9690\u5199\u6280\u672f - \u4f18\u96c5\u7684\u9690\u85cf\u4fe1\u606f")))}B.isMDXComponent=!0},519:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(8404);const n=e=>{let{}=e;return a.createElement("div",{className:" flex flex-col mx-auto w-2/3 h-28 text-white "},a.createElement("div",{className:"h-6 shrink-0 bg-indigo-500 text-center "},"header"),a.createElement("div",{className:"grow flex bg-red-500"},a.createElement("div",{className:"flex justify-center items-center w-12 shrink-0 bg-lime-500"},"left"),a.createElement("div",{className:"flex justify-center items-center  grow bg-orange-500"},"center"),a.createElement("div",{className:"flex  justify-center items-center w-12 shrink-0 bg-lime-500"},"right")),a.createElement("div",{className:"h-6 shrink-0 bg-indigo-500 text-center text-white"},"footer"))},r=a.memo(n)},8980:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(8404);const n=e=>{let{}=e;return a.createElement("div",{className:"flex justify-center"},a.createElement("div",{className:"flex space-x-3"},a.createElement("div",{className:" flex justify-center items-center w-12 h-12 rounded bg-indigo-500 "},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:" flex justify-between w-12 h-12 rounded p-1 bg-indigo-500 "},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"self-end w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:" flex justify-between w-12 h-12 rounded p-1 bg-indigo-500 "},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"self-center w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"self-end w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:" flex flex-col justify-between w-12 h-12 rounded p-1 bg-indigo-500 "},a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}))),a.createElement("div",{className:" flex flex-col justify-between w-12 h-12 rounded p-1 bg-indigo-500 "},a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:"flex justify-center"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}))),a.createElement("div",{className:" flex flex-col justify-between w-12 h-12 rounded p-1 bg-indigo-500 "},a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})),a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"}),a.createElement("div",{className:"w-3 h-3 rounded-full bg-white"})))))},r=a.memo(n)},9821:(e,t,l)=>{l.d(t,{Z:()=>m});var a=l(8404);const n=a.createContext({name:"",setName:()=>null}),r=()=>{const{name:e,setName:t}=(0,a.useContext)(n);return a.createElement("div",null,"\u503c\uff1a",a.createElement("input",{value:e,onChange:e=>t(e.target.value)}))},s=a.memo(r),c=e=>{let{name:t,children:l}=e;return a.createElement("div",null,t,a.createElement("div",{style:{paddingLeft:"2em"}},l))},i=a.memo(c),o=()=>{const[e,t]=(0,a.useState)("\u6539\u6211\u8bd5\u8bd5");return a.createElement(n.Provider,{value:{name:e,setName:t}},"\u503c: ",a.createElement("input",{value:e,onChange:e=>t(e.target.value)}),a.createElement(i,{name:"\u7b2c\u4e00\u7ea7\u5b50\u5143\u7d20"},a.createElement(i,{name:"\u7b2c\u4e8c\u7ea7\u5b50\u5143\u7d20"},a.createElement(i,{name:"\u7b2c\u4e09\u7ea7\u5b50\u5143\u7d20"},a.createElement(s,null)))))},m=a.memo(o)},9780:(e,t,l)=>{l.d(t,{Z:()=>u});var a=l(8404),n=l(8837),r=l(4583),s=l(2848),c=l(8372);const i=10;var o=function(e){return e[e.slow=10]="slow",e[e.middle=20]="middle",e[e.fast=40]="fast",e}(o||{}),m=function(e){return e.left="left",e.right="right",e.top="top",e.bottom="bottom",e}(m||{});const d=e=>{let{}=e;const[t,{toggle:l}]=(0,s.Z)(!1),[d,u,p]=(0,c.Z)(100),[k,h,v]=(0,c.Z)(100),[f,E,b]=(0,c.Z)(o.fast),[g,x,N]=(0,c.Z)(m.right);let w;const y=(0,a.useCallback)((()=>{let e=p(),t=v();const l=25*b()/1e3;let a;switch(N()){case m.top:t-=l,a=-t+i,a>0&&(t=a+20,x(m.bottom));break;case m.bottom:t+=l,a=t-200+i,a>0&&(t=200-a-i,x(m.top));break;case m.left:e-=l,a=-e+i,a>0&&(e=a+20,x(m.right));break;case m.right:e+=l,a=e-200+i,a>0&&(e=200-a-i,x(m.left))}u(e),h(t)}),[]);return(0,a.useEffect)((()=>(t?(y(),w=setInterval(y,25)):clearInterval(w),()=>{clearInterval(w)})),[t]),a.createElement("div",{className:"mb-4"},a.createElement("div",{className:"relative w-[200px] h-[200px] shadow"},a.createElement("div",{className:"\n          absolute\n          w-5 h-5\n          rounded-full bg-green-500\n        ",style:{left:d-i,top:k-i}})),a.createElement("div",{className:"mt-5"},a.createElement("div",{className:"flex items-center"},a.createElement("div",{className:"flex items-center space-x-3"},a.createElement("div",{className:"flex items-center space-x-2"},a.createElement("div",null,"x: "),a.createElement("div",{className:"w-32"},a.createElement(n.Z,{mode:"button",className:"",value:d,onChange:u,step:5,disabled:t}))),a.createElement("div",{className:"flex items-center space-x-2"},a.createElement("div",null,"y: "),a.createElement("div",{className:"w-32"},a.createElement(n.Z,{mode:"button",className:"",value:k,onChange:h,step:5,disabled:t}))))),a.createElement("div",{className:"flex items-center mt-3"},a.createElement("div",{className:"flex items-center space-x-2"},a.createElement("div",null,"\u65b9\u5411: "),a.createElement(r.Z.Group,null,a.createElement(r.Z,{type:g===m.top?"primary":"outline",onClick:()=>!t&&x(m.top),disabled:t,shape:"round"},"\u4e0a"),a.createElement(r.Z,{type:g===m.bottom?"primary":"outline",onClick:()=>!t&&x(m.bottom),disabled:t},"\u4e0b"),a.createElement(r.Z,{type:g===m.left?"primary":"outline",onClick:()=>!t&&x(m.left),disabled:t},"\u5de6"),a.createElement(r.Z,{type:g===m.right?"primary":"outline",onClick:()=>!t&&x(m.right),disabled:t,shape:"round"},"\u53f3")))),a.createElement("div",{className:"flex items-center mt-3"},a.createElement("div",{className:"flex items-center space-x-3"},a.createElement("div",{className:"flex items-center space-x-2"},a.createElement("div",null,"\u901f\u5ea6: "),a.createElement(r.Z.Group,null,a.createElement(r.Z,{type:f===o.slow?"primary":"outline",onClick:()=>!t&&E(o.slow),disabled:t,shape:"round"},"\u6162"),a.createElement(r.Z,{type:f===o.middle?"primary":"outline",onClick:()=>!t&&E(o.middle),disabled:t},"\u4e2d"),a.createElement(r.Z,{type:f===o.fast?"primary":"outline",onClick:()=>!t&&E(o.fast),disabled:t,shape:"round"},"\u5feb")),a.createElement("div",{className:"text-xs"},f,"px/\u79d2")))),a.createElement("div",{className:"flex items-center mt-3"},a.createElement(r.Z,{type:"primary",onClick:l},t?"\u6682\u505c":"\u5f00\u59cb"))))},u=a.memo(d)},7644:(e,t,l)=>{l.d(t,{H:()=>r});var a=l(8404);const n=e=>{let{value:t,onChange:l}=e;const n=(0,a.useCallback)((()=>{l(t-1)}),[t]),r=(0,a.useCallback)((()=>{l(t+1)}),[t]),s=(0,a.useCallback)((e=>{const t=e.target.value;/^[0-9]+$/.test(t)&&l(Number.parseInt(t))}),[]);return a.createElement("div",{className:"flex space-x-1"},a.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:n},"-"),a.createElement("input",{type:"text",className:"w-24",value:t,onChange:s}),a.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:r},"+"))};function r(){const[e,t]=(0,a.useState)(10);return a.createElement("div",null,a.createElement(n,{value:e,onChange:t}),a.createElement("div",null,"\u5f53\u524d\u503c: ",e))}},2347:(e,t,l)=>{l.d(t,{L:()=>r});var a=l(8404);const n=e=>{let{list:t,controlShow:l,onChange:n}=e;const[r,s]=(0,a.useState)(!1),[c,i]=(0,a.useState)(0),o=(0,a.useRef)(0);return(0,a.useEffect)((()=>{const e=()=>{var e;s(!1),e=o.current+1,i(e),o.current=e};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,a.useEffect)((()=>{const e=setInterval((()=>{}),3e3);return()=>{clearInterval(e)}}),[]),(0,a.useEffect)((()=>{l&&s(!0)}),[l]),a.createElement("div",{className:"relative w-24 text-white cursor-pointer",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},a.createElement("div",{className:"px-2 h-8 leading-8 border bg-green-500",onClick:()=>{s(!0)}},"\u8bf7\u9009\u62e9"),a.createElement("div",{className:"absolute top-8 w-full",style:{display:r?"block":"none"}},t.map((e=>a.createElement("div",{key:e.id,className:"px-2 h-8 leading-8 border border-b bg-green-600",onClick:()=>{n(e.id),s(!1)}},e.title)))))};function r(){const[e,t]=(0,a.useState)(""),[l,r]=(0,a.useState)(0);return a.createElement("div",null,"\u9009\u4e2d\u503c: ",""===e?"\u672a\u9009\u62e9":e,"\u3002",a.createElement("button",{onClick:()=>r(Date.now())},"\u70b9\u6211\u5f39\u51fa\u9009\u9879"),a.createElement(n,{list:[{id:1,title:"\u9009\u98791"},{id:2,title:"\u9009\u98792"},{id:3,title:"\u9009\u98793"}],onChange:t,controlShow:l}))}},8981:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(8404),n=l(2848),r=l(4640);let s=function(e){return e.hor="hor",e.ver="ver",e}({});const c=e=>{let{direction:t=s.ver,className:l="",height:n=0,width:r=0,children:c,isLoading:i,isLoadAll:o,onReachBottom:m}=e;const d=t===s.ver,u=d?{height:n}:{width:r},p=(0,a.useRef)(null);return a.createElement("div",{ref:p,className:`${d?"overflow-y-auto":"flex items-center overflow-x-auto"} ${l}`,style:u,onScroll:e=>{if(i||o)return;const t=p.current;if(!t)return;const{scrollTop:l,scrollHeight:a,clientHeight:n,scrollLeft:r,scrollWidth:s,clientWidth:c}=t;(d?l+n===a:r+c===s)&&m()}},c,i&&a.createElement("div",{className:d?"text-center":"flex-shrink-0 px-3"},"\u52a0\u8f7d\u4e2d..."))},i=a.memo(c);const o=function(e){let{dir:t=s.ver}=e;const l=t===s.ver,[c,o]=(0,a.useState)([]),[m,d]=(0,a.useState)(1),[u,{setTrue:p}]=(0,n.Z)(!1),[k,{setTrue:h,setFalse:v}]=(0,n.Z)(!1),f=async()=>{h();const e=await function(e){void 0===e&&(e=1);if(e>5)return new Promise((e=>{setTimeout((()=>{e({isLoadedAll:!0,list:[]})}),1e3)}));{const t=[],l=10*(e-1);for(let e=1;e<11;e++){const a=l+e;t.push({id:a,name:`Holly ${a}`})}return new Promise((e=>{setTimeout((()=>{e({isLoadedAll:!1,list:t})}),1e3)}))}}(m);v(),o([...c,...e.list]),d(m+1),e.isLoadedAll&&p()};return(0,a.useEffect)((()=>{f()}),[]),a.createElement("div",{className:(0,r.Z)("mx-auto",l?"w-24":"w-[520px]")},a.createElement(i,{height:182,width:520,isLoading:k,isLoadAll:u,onReachBottom:f,direction:t},c.map((e=>a.createElement("div",{key:e.id,className:(0,r.Z)("h-7 leading-7 shadow-md pl-3",!l&&"w-20 flex-shrink-0")},e.name)))))}},3282:(e,t,l)=>{l.d(t,{Z:()=>s});var a=l(8404),n=l(4419),r=l(4640);const s=e=>{let{children:t,contentSize:l="full",padding:s="p-12",className:c,browserOnly:i=!0}=e;const o="full"===l?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[l],m=a.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${s}\n    `},a.createElement("div",{className:(0,r.Z)(o,"mx-auto",c)},t));return a.createElement(a.Fragment,null,i?a.createElement(n.Z,null,(()=>a.createElement(a.Fragment,null,m))):m)}}}]);