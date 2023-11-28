"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8657],{6291:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>c});var n=l(8404);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=o(l),d=a,c=k["".concat(p,".").concat(d)]||k[d]||s[d]||r;return l?n.createElement(c,i(i({ref:t},m),{},{components:l})):n.createElement(c,i({ref:t},m))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[k]="string"==typeof e?e:a,i[1]=u;for(var o=2;o<r;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},3034:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=l(6229),a=(l(8404),l(6291));const r={},i="\u9ad8\u8d28\u91cf\u7ec4\u4ef6\u8bbe\u8ba1\u7684\u601d\u8003",u={unversionedId:"frontend/code-quality/component-design/readme",id:"frontend/code-quality/component-design/readme",title:"\u9ad8\u8d28\u91cf\u7ec4\u4ef6\u8bbe\u8ba1\u7684\u601d\u8003",description:"\u9ad8\u8d28\u91cf\u6307\uff1a\u53ef\u7ef4\u62a4\u6027\u9ad8\u7684\u4ee3\u7801\u3002\u4ee3\u7801\u5f88\u5bb9\u6613\u8c03\u6574\u6765\u9002\u5e94\u9700\u6c42\u7684\u53d8\u5316\u3002",source:"@site/docs/frontend/code-quality/component-design/readme.md",sourceDirName:"frontend/code-quality/component-design",slug:"/frontend/code-quality/component-design/",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/code-quality/component-design/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\u6d41\u7a0b",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/scenario/flow/demo"},next:{title:"SVG \u5c5e\u6027\u8f6c\u5316\u4e3a\u9a7c\u5cf0",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/tools/svg-attr-case/"}},p={},o=[{value:"\u4e3a\u4ec0\u4e48",id:"\u4e3a\u4ec0\u4e48",level:3},{value:"\u600e\u4e48\u505a",id:"\u600e\u4e48\u505a",level:3},{value:"\u5408\u9002\u7684\u62bd\u8c61\uff0c\u5728\u4e0d\u5f71\u54cd\u7075\u6d3b\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801",id:"\u5408\u9002\u7684\u62bd\u8c61\u5728\u4e0d\u5f71\u54cd\u7075\u6d3b\u6027\u7684\u60c5\u51b5\u4e0b\u51cf\u5c11\u91cd\u590d\u4ee3\u7801",level:2},{value:"\u4e3a\u4ec0\u4e48",id:"\u4e3a\u4ec0\u4e48-1",level:3},{value:"\u600e\u4e48\u505a",id:"\u600e\u4e48\u505a-1",level:3},{value:"\u4ece\u7ec4\u4ef6\u7684\u5355\u4e00\u804c\u8d23\u770b",id:"\u4ece\u7ec4\u4ef6\u7684\u5355\u4e00\u804c\u8d23\u770b",level:4},{value:"\u4ece\u7ec4\u4ef6\u7684\u5206\u5c42\u6765\u770b",id:"\u4ece\u7ec4\u4ef6\u7684\u5206\u5c42\u6765\u770b",level:4},{value:"\u5bb9\u5668\u7ec4\u4ef6",id:"\u5bb9\u5668\u7ec4\u4ef6",level:3},{value:"\u5c5e\u6027\u7684\u8bbe\u8ba1",id:"\u5c5e\u6027\u7684\u8bbe\u8ba1",level:4},{value:"\u5c55\u793a\u7ec4\u4ef6",id:"\u5c55\u793a\u7ec4\u4ef6",level:3},{value:"\u6570\u636e\u7ec4\u4ef6",id:"\u6570\u636e\u7ec4\u4ef6",level:3},{value:"\u9002\u5e94\u53d8\u5316\u7684\u5177\u4f53\u5b9e\u4f8b",id:"\u9002\u5e94\u53d8\u5316\u7684\u5177\u4f53\u5b9e\u4f8b",level:3},{value:"\u7ea6\u5b9a &amp; \u89c4\u8303",id:"\u7ea6\u5b9a--\u89c4\u8303",level:2},{value:"\u7ec4\u4ef6\u7ed3\u6784",id:"\u7ec4\u4ef6\u7ed3\u6784",level:2},{value:"\u6587\u4ef6\u7ed3\u6784",id:"\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u5177\u4f53\u573a\u666f",id:"\u5177\u4f53\u573a\u666f",level:2},{value:"\u5c5e\u6027\u7684\u5206\u7c7b",id:"\u5c5e\u6027\u7684\u5206\u7c7b",level:2},{value:"\u5217\u8868\u7c7b\u7ec4\u4ef6\u652f\u6301\u7684\u529f\u80fd",id:"\u5217\u8868\u7c7b\u7ec4\u4ef6\u652f\u6301\u7684\u529f\u80fd",level:2}],m={toc:o},k="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9ad8\u8d28\u91cf\u7ec4\u4ef6\u8bbe\u8ba1\u7684\u601d\u8003"},"\u9ad8\u8d28\u91cf\u7ec4\u4ef6\u8bbe\u8ba1\u7684\u601d\u8003"),(0,a.kt)("p",null,"\u9ad8\u8d28\u91cf\u6307\uff1a\u53ef\u7ef4\u62a4\u6027\u9ad8\u7684\u4ee3\u7801\u3002\u4ee3\u7801\u5f88\u5bb9\u6613\u8c03\u6574\u6765\u9002\u5e94\u9700\u6c42\u7684\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u76ee\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f4e\u8026\u5408\uff0c\u9ad8\u5185\u805a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5408\u9002\u7684\u62bd\u8c61\uff0c\u5728\u4e0d\u5f71\u54cd\u7075\u6d3b\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\u3002")),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48"},"\u4e3a\u4ec0\u4e48"),(0,a.kt)("p",null,"\u4f4e\u8026\u5408\u7684\u4ee3\u7801\uff0c\u67d0\u4e2a\u7ec4\u4ef6\u6539\u540e\uff0c\u4e0d\u9700\u8981\u6539\u4e00\u5806\u4ee3\u7801\u3002\u9ad8\u8026\u5408\u7684\u4ee3\u7801\uff0c\u5219\u9700\u8981\u6539\u4e00\u5806\u3002"),(0,a.kt)("h3",{id:"\u600e\u4e48\u505a"},"\u600e\u4e48\u505a"),(0,a.kt)("p",null,"\u4f9d\u8d56\u62bd\u8c61\u800c\u4e0d\u4f9d\u8d56\u5177\u4f53\u5b9e\u73b0\u3002\u5982\uff0c\u7236\u7ec4\u4ef6\u4e3b\u52a8\u8c03\u7528\u5b50\u7ec4\u4ef6\uff0c\u7528\u5c5e\u6027\u7684\u53d8\u5316\uff08\u62bd\u8c61\uff09\uff0c\u800c\u4e0d\u662f\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5(\u5177\u4f53\u5b9e\u73b0\uff09\u3002\u4e0b\u9762\u662f\u7236\u7ec4\u4ef6\u8ba9\u5b50\u7ec4\u4ef6\u4e2d\u7684\u8f93\u5165\u6846\u83b7\u5f97\u7126\u70b9\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// TODO\n")),(0,a.kt)("h2",{id:"\u5408\u9002\u7684\u62bd\u8c61\u5728\u4e0d\u5f71\u54cd\u7075\u6d3b\u6027\u7684\u60c5\u51b5\u4e0b\u51cf\u5c11\u91cd\u590d\u4ee3\u7801"},"\u5408\u9002\u7684\u62bd\u8c61\uff0c\u5728\u4e0d\u5f71\u54cd\u7075\u6d3b\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48-1"},"\u4e3a\u4ec0\u4e48"),(0,a.kt)("p",null,"\u91cd\u590d\u4ee3\u7801\u51fa\u95ee\u9898\u65f6\uff0c\u8981\u628a\u6240\u6709\u91cd\u590d\u7684\u5730\u65b9\u6539\u4e00\u904d\uff0c\u6d6a\u8d39\u65f6\u95f4\uff0c\u5bb9\u6613\u6f0f\u6539\uff0c\u5bfc\u81f4\u51fa\u9519\u3002\n\u4e0d\u5408\u9002\u7684\u62bd\u8c61(\u590d\u7528\uff09\uff0c\u6539\u516c\u7528\u4ee3\u7801\uff0c\u662f\u4e3a\u4e86\u6539\u67d0\u4e2a\u95ee\u9898\uff0c\u4f46\u53ef\u80fd\u6ca1\u6709\u8003\u8651\u5168\u6240\u6709\u8fd9\u4ee3\u7801\u7684\u573a\u666f\u3002"),(0,a.kt)("h3",{id:"\u600e\u4e48\u505a-1"},"\u600e\u4e48\u505a"),(0,a.kt)("h4",{id:"\u4ece\u7ec4\u4ef6\u7684\u5355\u4e00\u804c\u8d23\u770b"},"\u4ece\u7ec4\u4ef6\u7684\u5355\u4e00\u804c\u8d23\u770b"),(0,a.kt)("p",null,"\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5206\u7c7b\u7684\u76ee\u7684\uff0c\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u590d\u7528\u3002"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u6309\u804c\u8d23\u5206\u7c7b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u7c7b\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c55\u793a\u7c7b\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7ec4\u4ef6\u3002")),(0,a.kt)("h4",{id:"\u4ece\u7ec4\u4ef6\u7684\u5206\u5c42\u6765\u770b"},"\u4ece\u7ec4\u4ef6\u7684\u5206\u5c42\u6765\u770b"),(0,a.kt)("p",null,"\u57fa\u7840\u7ec4\u4ef6\uff0c\u9002\u7528\u6027\u6700\u5e7f\u3002\u4e1a\u52a1\u7ec4\u4ef6\u4e00\u5c42\u5c42\u7684\u52a0\u903b\u8f91\uff0c\u4e0e\u5177\u4f53\u4e1a\u52a1\u5173\u8054\u6027\u8d8a\u6765\u8d8a\u5f3a\uff0c\u9002\u7528\u6027\u8d8a\u6765\u8d8a\u7a84\u3002\u4f8b\u5982\n\u57fa\u7840\u7ec4\u4ef6 Item \uff0c\u5b9e\u73b0\u4e86 Item \u7684\u5916\u89c2\uff0c\u5de6\u53f3\u4e24\u90e8\u5206\u7684\u5185\u5bb9\u662f\u81ea\u5b9a\u4e49\u7684\u3002 \u5bf9\u5e94 2 \u4e2a\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"renderLeft")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"renderRight")," \u3002\n\u4e1a\u52a1\u7ec4\u4ef6 TitleItem \u57fa\u4e8e Item \u7ec4\u4ef6\u3002\u5de6\u4fa7\u662f\u6807\u9898\uff0c\u53f3\u4fa7\u5185\u5bb9\u662f\u81ea\u5b9a\u4e49\u7684\u3002 \u5bf9\u5e94 2 \u4e2a\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"renderRight"),"\u3002\n\u4e1a\u52a1\u7ec4\u4ef6 IssueItem \u57fa\u4e8e TitleItem \u7ec4\u4ef6\u3002\u5de6\u4fa7\u662f\u6807\u9898\uff0c\u53f3\u4fa7\u662f\u4e0b\u62c9\u64cd\u4f5c\u3002 \u5bf9\u5e94 2 \u4e2a\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u3002"),(0,a.kt)("h3",{id:"\u5bb9\u5668\u7ec4\u4ef6"},"\u5bb9\u5668\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u662f\u628a\u6570\u636e\u7684\u548c\u5c55\u793a\u7c98\u5408\u5728\u4e00\u8d77\uff0c\u4e5f\u5c31\u662f\u63a7\u5236\u5668\u3002\u5bb9\u5668\u7c7b\u7ec4\u4ef6\u4e00\u822c\u5305\u542b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u76f8\u540c\u5b50\u7ec4\u4ef6\u3002\u4e5f\u5c31\u662f\u5217\u8868\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u4e0d\u540c\u5b50\u7ec4\u4ef6\u3002")),(0,a.kt)("h4",{id:"\u5c5e\u6027\u7684\u8bbe\u8ba1"},"\u5c5e\u6027\u7684\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u5217\u8868\u7ec4\u4ef6\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"itemProps"),(0,a.kt)("li",{parentName:"ul"},"renderItem")),(0,a.kt)("p",null,"itemProps \u548c renderItem \u4e8c\u9009\u4e00\u3002renderItem \u7684\u5b9a\u5236\u6027\u6bd4 itemProps \u66f4\u9ad8\u3002"),(0,a.kt)("p",null,"\u591a\u4e2a\u4e0d\u540c\u5b50\u7ec4\u4ef6:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"includeItems: ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),"\u3002 \u5305\u542b\u7684\u7ec4\u4ef6\u540d\u79f0\u3002\u987a\u5e8f\u4e0e\u6570\u7ec4\u987a\u5e8f\u4e00\u81f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"[item]","Props: \u67d0\u4e2a\u5b50\u7ec4\u4ef6\u7684\u5c5e\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"render","[item]",": \u6e32\u67d3\u5b50\u7ec4\u4ef6\u3002")),(0,a.kt)("p",null,"[item]","Props \u548c render","[item]"," \u4e8c\u9009\u4e00\u3002"),(0,a.kt)("h3",{id:"\u5c55\u793a\u7ec4\u4ef6"},"\u5c55\u793a\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u53ea\u83b7\u53d6\u6570\u636e\u6765\u6e32\u67d3\uff0c\u4e0d\u6539\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u6570\u636e\u7ec4\u4ef6"},"\u6570\u636e\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6570\u636e\u7ec4\u4ef6\u7ed9\u5bb9\u5668\u7ec4\u4ef6\u4e0a\u63d0\u4f9b\u6570\u636e\u548c\u64cd\u4f5c\u6570\u636e\u7684\u65b9\u6cd5\u3002\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IUserListProps {\n  permission: ...// \u6743\u9650\u6570\u636e\u3002@withPermission \u63d0\u4f9b\n  userList: ...// \u7528\u6237\u5217\u8868\u6570\u636e\u3002@withUserService \u63d0\u4f9b\n  fetchUserList: ... // \u83b7\u53d6\u7528\u6237\u6570\u636e\u3002 @withUserService \u63d0\u4f9b\n}\n\n@withPermission\n@withUserService\nclass UserList extends React.Component(<IUserListProps>) {\n  componentDidMount() {\n    this.props.fetchUserList()\n  }\n\n  render() {\n    const {userList} = this.props\n    return (\n      <div>...</div>\n    )\n  }\n}\n")),(0,a.kt)("h3",{id:"\u9002\u5e94\u53d8\u5316\u7684\u5177\u4f53\u5b9e\u4f8b"},"\u9002\u5e94\u53d8\u5316\u7684\u5177\u4f53\u5b9e\u4f8b"),(0,a.kt)("p",null,"TODO: \u63cf\u8ff0\u4f18\u5316\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","item \u53ea\u5b9e\u73b0\u5916\u5c42\u7684ui\uff0c\u5de6\u53f3\u7684\u7ed9\u7236\u7ec4\u4ef6\uff0ccommonitem \u8c03\u7528 item\uff0csubtaskitem \u8c03\u7528commonitem\uff0c\u4f20\u5165\u83b7\u53d6\u6570\u636e\u7684\u65b9\u6cd5\u3002 subtaskitem \u548ccommonitem \u5206\u53c9\u7684\u5f88\u5927\u540e\uff0c\u4ece commonitem\u662f\u62f7\u8d1d\u4e00\u4efd\u51fa\u6765\u6539\u3002"),(0,a.kt)("h2",{id:"\u7ea6\u5b9a--\u89c4\u8303"},"\u7ea6\u5b9a & \u89c4\u8303"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c55\u793a\u7ec4\u4ef6\u4ee5 V \u5f00\u5934\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4ece\u5b57\u5178\u91cc\u62ff")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u7ed3\u6784"},"\u7ec4\u4ef6\u7ed3\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RequirementDetail, AssignmentDetail, DefectDetail",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5de6\u4fa7 Main\u3002 ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5934\u90e8\u6309\u94ae"),(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0"),(0,a.kt)("li",{parentName:"ul"},"\u5b50\u4efb\u52a1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"withPermission",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SubTask",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Header \u5934"),(0,a.kt)("li",{parentName:"ul"},"SubTaskList \u5217\u8868",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SubTaskItem",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RowItem",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ItemStatus",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dropdown",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PortalToFollowElem"))))))))))),(0,a.kt)("li",{parentName:"ul"},"SubTaskQuickCreate \u5feb\u901f\u521b\u5efa",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"QuickCreate",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Input",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ConfirmButton"),(0,a.kt)("li",{parentName:"ul"},"CancelButton"))))))),(0,a.kt)("li",{parentName:"ul"},"SubTaskFullCreate \u5b8c\u6210\u521b\u5efa",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"FullCreate",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dialog",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ConfirmButton"),(0,a.kt)("li",{parentName:"ul"},"CancelButton"))))))),(0,a.kt)("li",{parentName:"ul"},"SubTaskAssociate \u5173\u8054\u5df2\u6709",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Associate",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SearchInput"),(0,a.kt)("li",{parentName:"ul"},"Dropdown",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SubTaskSearchItem"))),(0,a.kt)("li",{parentName:"ul"},"NoData"))))))))))),(0,a.kt)("li",{parentName:"ul"},"\u5173\u8054\u7f3a\u9677"),(0,a.kt)("li",{parentName:"ul"},"\u6d3b\u52a8\u65e5\u5fd7"))),(0,a.kt)("li",{parentName:"ul"},"\u53f3\u4fa7 Slide")))),(0,a.kt)("h2",{id:"\u6587\u4ef6\u7ed3\u6784"},"\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,"\u5c31\u8fd1\u539f\u5219\u3002\u5173\u8054\u6027\u8fd1\u7684\u653e\u4e00\u8d77"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"components \u7ec4\u4ef6\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"base \u4e0e\u4e1a\u52a1\u65e0\u5173\u7684"),(0,a.kt)("li",{parentName:"ul"},"business \u4e0e\u4e1a\u52a1\u76f8\u5173\u7684 "))),(0,a.kt)("li",{parentName:"ul"},"views \u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"assets \u516c\u5171\u8d44\u6e90")))),(0,a.kt)("h2",{id:"\u5177\u4f53\u573a\u666f"},"\u5177\u4f53\u573a\u666f"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5bb9\u5668\u7c7b\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\uff0c\u6709\u4e9b\u4ece\u63a5\u53e3\u62ff\u6570\u636e\uff0c\u4e3a\u4e86\u7075\u6d3b\u6027\uff0c\u63a7\u5236\u5668\u5185\u90e8\u53bb\u83b7\u53d6\uff0c\u4e5f\u4f1a\u4ece"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<XXList\n  list={} // \u53ef\u9009\u3002\u521d\u59cb\u5316\u4ece\u63a5\u53e3\u83b7\u53d6\u7684\u6570\u636e\n  fetchList={} // \u53ef\u9009\u3002\u5185\u90e8\u6709\n  onLoaded={}\n\n>\n</XXList>\n")),(0,a.kt)("h2",{id:"\u5c5e\u6027\u7684\u5206\u7c7b"},"\u5c5e\u6027\u7684\u5206\u7c7b"),(0,a.kt)("p",null,"1 \u548c\u5916\u90e8\u7684\u6570\u636e\u7684\u4ea4\u4e92"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fetchList, fetchDetail, updateItem, deleteItem"),(0,a.kt)("li",{parentName:"ul"},"list, data ...")),(0,a.kt)("p",null,"2 \u4e3b\u52a8\u8c03\u7528\u5b50\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ref"),(0,a.kt)("li",{parentName:"ul"},"controlFocus...")),(0,a.kt)("p",null,"3 \u5b50\u7ec4\u4ef6\u901a\u77e5\u7236\u7ec4\u4ef6 & \u6539\u7ec4\u4ef6\u7684\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onClick, onChange, onLoad, onError ..."),(0,a.kt)("li",{parentName:"ul"},"setList ...")),(0,a.kt)("p",null,"4 \u63a7\u5236\u90e8\u5206\u5b50\u7ec4\u4ef6\u7684 UI & \u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"renderHeader, renderItem ..."),(0,a.kt)("li",{parentName:"ul"},"className, style"),(0,a.kt)("li",{parentName:"ul"},"readOnly, disabled,")),(0,a.kt)("h2",{id:"\u5217\u8868\u7c7b\u7ec4\u4ef6\u652f\u6301\u7684\u529f\u80fd"},"\u5217\u8868\u7c7b\u7ec4\u4ef6\u652f\u6301\u7684\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u5217\u8868 - done\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8131\u62fd"),(0,a.kt)("li",{parentName:"ul"},"\u5b50\u9879\u4e2d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dropdown \u8981 Portal \u51fa\u53bb"),(0,a.kt)("li",{parentName:"ul"},"Dropdown \u7684\u6570\u636e\uff0c\u8981\u60f0\u6027\u8c03\u7528\u63a5\u53e3\uff0c\u5373\u5728\u663e\u793a\u65f6\u518d\u63a5\u53e3\u3002")))))}s.isMDXComponent=!0}}]);