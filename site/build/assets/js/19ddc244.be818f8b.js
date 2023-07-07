"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6263],{6291:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(8404);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||g[h]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(9772),r=(n(8404),n(6291));const o={},i="\u4ee3\u7406(Agent)",l={unversionedId:"ai/tech/agent/overview",id:"ai/tech/agent/overview",title:"\u4ee3\u7406(Agent)",description:"-- \u300aLLM Powered Autonomous Agents\u300b",source:"@site/docs/ai/tech/agent/overview.mdx",sourceDirName:"ai/tech/agent",slug:"/ai/tech/agent/overview",permalink:"/four-dimensional-space-bag/site/build/docs/ai/tech/agent/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ai",previous:{title:"\u5d4c\u5165(Embedding)",permalink:"/four-dimensional-space-bag/site/build/docs/ai/tech/embedding/overview"},next:{title:"\u5e94\u7528",permalink:"/four-dimensional-space-bag/site/build/docs/ai/app/"}},s={},c=[{value:"Agent \u7c7b\u578b",id:"agent-\u7c7b\u578b",level:2},{value:"Action agents",id:"action-agents",level:3},{value:"Plan-and-execute agents",id:"plan-and-execute-agents",level:3},{value:"\u4efb\u52a1\u5206\u89e3",id:"\u4efb\u52a1\u5206\u89e3",level:2},{value:"Chain of thought(CoT, \u601d\u8003\u94fe)",id:"chain-of-thoughtcot-\u601d\u8003\u94fe",level:3},{value:"Tree of Thoughts(\u601d\u8003\u6811)",id:"tree-of-thoughts\u601d\u8003\u6811",level:3},{value:"Self-Reflection \u81ea\u6211\u53cd\u7701",id:"self-reflection-\u81ea\u6211\u53cd\u7701",level:2},{value:"ReAct \u6846\u67b6",id:"react-\u6846\u67b6",level:3},{value:"Reflexion \u6846\u67b6",id:"reflexion-\u6846\u67b6",level:3},{value:"Chain of Hindsight",id:"chain-of-hindsight",level:3},{value:"\u7528 Agent \u505a\u7684\u4ea7\u54c1",id:"\u7528-agent-\u505a\u7684\u4ea7\u54c1",level:2},{value:"Hugging GPT",id:"hugging-gpt",level:3},{value:"\u6587\u7ae0",id:"\u6587\u7ae0",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ee3\u7406agent"},"\u4ee3\u7406(Agent)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7647).Z,width:"1200",height:"476"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"-- ",(0,r.kt)("a",{parentName:"p",href:"https://lilianweng.github.io/posts/2023-06-23-agent/"},"\u300aLLM Powered Autonomous Agents\u300b"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Agents use an LLM to determine which actions to take and in what order. An action can either be using a tool and observing its output, or returning a response to the user.",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee3\u7406\u4f7f\u7528LLM\u6765\u786e\u5b9a\u8981\u91c7\u53d6\u54ea\u4e9b\u64cd\u4f5c\u4ee5\u53ca\u4ee5\u4f55\u79cd\u987a\u5e8f\u8fdb\u884c\u3002\u64cd\u4f5c\u53ef\u4ee5\u662f\u4f7f\u7528\u5de5\u5177\u5e76\u89c2\u5bdf\u5176\u8f93\u51fa\uff0c\u4e5f\u53ef\u4ee5\u662f\u5411\u7528\u6237\u8fd4\u56de\u54cd\u5e94\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","-- ",(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/modules/agents/"},"LangChain agents"))),(0,r.kt)("h2",{id:"agent-\u7c7b\u578b"},"Agent \u7c7b\u578b"),(0,r.kt)("h3",{id:"action-agents"},"Action agents"),(0,r.kt)("p",null,"\u6839\u636e\u4e4b\u524d\u6240\u6709\u7684\u52a8\u4f5c\u6765\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u52a8\u4f5c\u3002\u4e5f\u5c31\u662f\u89c1\u673a\u884c\u4e8b\u3002"),(0,r.kt)("h3",{id:"plan-and-execute-agents"},"Plan-and-execute agents"),(0,r.kt)("p",null,"\u89c4\u5212\u548c\u6267\u884c\u3002\u9884\u5148\u89c4\u5212\u884c\u52a8\u7684\u5168\u90e8\u987a\u5e8f\uff0c\u7136\u540e\u5728\u4e0d\u66f4\u65b0\u8ba1\u5212\u7684\u60c5\u51b5\u4e0b\u5168\u90e8\u6267\u884c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Subgoal and decomposition: The agent breaks down large tasks into smaller, manageable subgoals, enabling efficient handling of complex tasks.",(0,r.kt)("br",{parentName:"p"}),"\n","\u5b50\u76ee\u6807\u548c\u5206\u89e3\uff1a\u4ee3\u7406\u5c06\u5927\u578b\u4efb\u52a1\u5206\u89e3\u4e3a\u66f4\u5c0f\u7684\u3001\u53ef\u7ba1\u7406\u7684\u5b50\u76ee\u6807\uff0c\u4ece\u800c\u80fd\u591f\u9ad8\u6548\u5730\u5904\u7406\u590d\u6742\u7684\u4efb\u52a1\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Reflection and refinement: The agent can do self-criticism and self-reflection over past actions, learn from mistakes and refine them for future steps, thereby improving the quality of final results.",(0,r.kt)("br",{parentName:"p"}),"\n","\u53cd\u601d\u4e0e\u63d0\u70bc\uff1a\u4ee3\u7406\u4eba\u53ef\u4ee5\u5bf9\u8fc7\u53bb\u7684\u884c\u4e3a\u8fdb\u884c\u81ea\u6211\u6279\u8bc4\u548c\u81ea\u6211\u53cd\u601d\uff0c\u4ece\u9519\u8bef\u4e2d\u5438\u53d6\u6559\u8bad\uff0c\u5e76\u4e3a\u672a\u6765\u7684\u6b65\u9aa4\u6539\u8fdb\u5b83\u4eec\uff0c\u4ece\u800c\u63d0\u9ad8\u6700\u7ec8\u7ed3\u679c\u7684\u8d28\u91cf\u3002  ")),(0,r.kt)("h2",{id:"\u4efb\u52a1\u5206\u89e3"},"\u4efb\u52a1\u5206\u89e3"),(0,r.kt)("h3",{id:"chain-of-thoughtcot-\u601d\u8003\u94fe"},(0,r.kt)("a",{parentName:"h3",href:"https://arxiv.org/abs/2201.11903"},"Chain of thought(CoT, \u601d\u8003\u94fe)")),(0,r.kt)("p",null,"\u8be5\u6a21\u578b\u88ab\u6307\u793a\u201c\u4e00\u6b65\u4e00\u6b65\u5730\u601d\u8003\u201d\uff0c\u4ee5\u5229\u7528\u66f4\u591a\u7684\u65f6\u95f4\u8ba1\u7b97\u5c06\u96be\u7684\u4efb\u52a1\u5206\u89e3\u6210\u66f4\u5c0f\u66f4\u7b80\u5355\u7684\u6b65\u9aa4\u3002\u89e6\u53d1 COT \u7684\u63d0\u793a\u8bcd\u5982\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Steps for XYZ\uff1bWhat are the subgoals for achieving XYZ"),(0,r.kt)("li",{parentName:"ol"},"Write a story outline")),(0,r.kt)("h3",{id:"tree-of-thoughts\u601d\u8003\u6811"},(0,r.kt)("a",{parentName:"h3",href:"https://arxiv.org/abs/2305.10601"},"Tree of Thoughts(\u601d\u8003\u6811)")),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u6bcf\u4e2a\u6b65\u9aa4\u63a2\u7d22\u591a\u79cd\u53ef\u80fd\u6027\u6765\u6269\u5c55CoT\u3002\u5b83\u9996\u5148\u5c06\u95ee\u9898\u5206\u89e3\u4e3a\u591a\u4e2a\u6b65\u9aa4\uff0c\u5e76\u5728\u6bcf\u4e00\u6b65\u751f\u6210\u591a\u4e2a\u601d\u8003\uff0c\u4ece\u800c\u521b\u5efa\u4e00\u4e2a\u6811\u7ed3\u6784\u3002\u641c\u7d22\u8fc7\u7a0b\u53ef\u4ee5\u662fBFS\uff08\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff09\u6216DFS\uff08\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\uff09\uff0c\u5176\u4e2d\u6bcf\u4e2a\u72b6\u6001\u7531\u5206\u7c7b\u5668\uff08\u7ecf\u7531\u63d0\u793a\uff09\u6216\u591a\u6570\u6295\u7968\u6765\u8bc4\u4f30\u3002"),(0,r.kt)("h2",{id:"self-reflection-\u81ea\u6211\u53cd\u7701"},"Self-Reflection \u81ea\u6211\u53cd\u7701"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea\u6211\u53cd\u601d\u662f\u4e00\u4e2a\u81f3\u5173\u91cd\u8981\u7684\u65b9\u9762\uff0c\u5b83\u5141\u8bb8\u4ee3\u7406\u901a\u8fc7\u6539\u8fdb\u8fc7\u53bb\u7684\u884c\u52a8\u51b3\u7b56\u548c\u7ea0\u6b63\u4ee5\u524d\u7684\u9519\u8bef\u6765\u8fed\u4ee3\u6539\u8fdb\u3002\u5b83\u5728\u73b0\u5b9e\u4e16\u754c\u7684\u4efb\u52a1\u4e2d\u53d1\u6325\u7740\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u5728\u90a3\u91cc\u8bd5\u9519\u662f\u4e0d\u53ef\u907f\u514d\u7684\u3002")),(0,r.kt)("h3",{id:"react-\u6846\u67b6"},"ReAct \u6846\u67b6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ReAct(Reason + Act): integrates reasoning and acting within LLM by extending the action space to be a combination of task-specific discrete actions and the language space. The former enables LLM to interact with the environment (e.g. use Wikipedia search API), while the latter prompting LLM to generate reasoning traces in natural language.\n-- ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2210.03629"},"ReAct"))),(0,r.kt)("p",null,"ReAct \u7684\u63d0\u793a\u8bcd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Thought: ...\nAction: ...\nObservation: ...\n... (Repeated many times)\n")),(0,r.kt)("p",null,"\u9488\u5bf9\u77e5\u8bc6\u5bc6\u96c6\u578b\u548c\u51b3\u7b56\u4efb\u52a1\u4f1a\u6709\u4e0d\u540c\u5904\u7406\u3002\u5728\u51b3\u7b56\u4efb\u52a1\u4e2d\uff0c Thought \u6b65\u9aa4\u4f1a\u88ab\u79fb\u9664\u3002"),(0,r.kt)("h3",{id:"reflexion-\u6846\u67b6"},"Reflexion \u6846\u67b6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reflexion \u4e3a\u667a\u80fd\u4f53\u914d\u5907\u52a8\u6001\u8bb0\u5fc6\u548c\u81ea\u6211\u53cd\u601d\u80fd\u529b\uff0c\u4ee5\u63d0\u9ad8\u63a8\u7406\u6280\u80fd\u3002Reflexion\u5177\u6709\u6807\u51c6RL\u8bbe\u7f6e\uff0c\u5176\u4e2d\u5956\u52b1\u6a21\u578b\u63d0\u4f9b\u7b80\u5355\u7684\u4e8c\u8fdb\u5236\u5956\u52b1\uff0c\u52a8\u4f5c\u7a7a\u95f4\u9075\u5faaReAct\u4e2d\u7684\u8bbe\u7f6e\uff0c\u5176\u4e2d\u4efb\u52a1\u7279\u5b9a\u7684\u52a8\u4f5c\u7a7a\u95f4\u7528\u8bed\u8a00\u589e\u5f3a\u4ee5\u5b9e\u73b0\u590d\u6742\u7684\u63a8\u7406\u6b65\u9aa4\u3002\u5728\u6bcf\u4e2a\u52a8\u4f5c\u4e4b\u540e \uff0c\u4ee3\u7406\u8ba1\u7b97\u542f\u53d1\u5f0f \uff0c\u5e76\u4e14\u53ef\u9009\u5730\u53ef\u4ee5\u6839\u636e\u81ea\u6211\u53cd\u601d\u7ed3\u679c\u51b3\u5b9a\u91cd\u7f6e\u73af\u5883\u4ee5\u5f00\u59cb\u65b0\u7684\u8bd5\u9a8c\u3002\n-- ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2303.11366"},"Reflexion"))),(0,r.kt)("h3",{id:"chain-of-hindsight"},"Chain of Hindsight"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9f13\u52b1\u6a21\u578b\u901a\u8fc7\u663e\u5f0f\u5730\u5448\u73b0\u4e00\u7cfb\u5217\u8fc7\u53bb\u7684\u8f93\u51fa\u6765\u6539\u8fdb\u5176\u81ea\u8eab\u7684\u8f93\u51fa\uff0c\u6bcf\u4e2a\u8f93\u51fa\u90fd\u5e26\u6709\u53cd\u9988\u6ce8\u91ca\u3002")),(0,r.kt)("h2",{id:"\u7528-agent-\u505a\u7684\u4ea7\u54c1"},"\u7528 Agent \u505a\u7684\u4ea7\u54c1"),(0,r.kt)("p",null,"Auto GPT\nGPT Engineer\nBabyAGI"),(0,r.kt)("h3",{id:"hugging-gpt"},"Hugging GPT"),(0,r.kt)("p",null,"\u4f7f\u7528 ChatGPT\u4f5c\u4e3a\u4efb\u52a1\u89c4\u5212\u5668\uff0c\u6839\u636e\u6a21\u578b\u63cf\u8ff0\u9009\u62e9 HuggingFace \u5e73\u53f0\u4e2d\u53ef\u7528\u7684\u6a21\u578b\uff0c\u5e76\u6839\u636e\u6267\u884c\u7ed3\u679c\u603b\u7ed3\u54cd\u5e94\u3002"),(0,r.kt)("h2",{id:"\u6587\u7ae0"},"\u6587\u7ae0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lilianweng.github.io/posts/2023-06-23-agent/"},"\u300aLLM Powered Autonomous Agents\u300b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/e2b-dev/awesome-ai-agents"},"Awesome AI Agents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2304.03442"},"Generative Agents: Interactive Simulacra of Human Behavior"))))}g.isMDXComponent=!0},7647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/struct-e4c49d56bb0d937a2a78a169b9534f80.jpg"}}]);