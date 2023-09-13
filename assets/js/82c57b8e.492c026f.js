"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={},i="How did we get here?",s={unversionedId:"docs/background/our_journey",id:"docs/background/our_journey",title:"How did we get here?",description:"SuperDuperDB was born out of the need to work quickly and flexibly with AI models in",source:"@site/content/docs/background/our_journey.md",sourceDirName:"docs/background",slug:"/docs/background/our_journey",permalink:"/docs/docs/background/our_journey",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/background/our_journey.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common issues in AI-data development",permalink:"/docs/docs/background/common_issues"}},l={},d=[{value:"Desiderata for AI-data environment",id:"desiderata-for-ai-data-environment",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-did-we-get-here"},"How did we get here?"),(0,o.kt)("p",null,'SuperDuperDB was born out of the need to work quickly and flexibly with AI models in\nconjunction with a database of individual "entities", as for instance commonly encountered\nin content-based recommendation and semantic search.'),(0,o.kt)("p",null,"For example, in e-Commerce, product data is often multi-faceted, involving:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple textual attributes, which are hierarchically organized and not of equivalent relevance"),(0,o.kt)("li",{parentName:"ul"},"Multiple images, which may have different significance for customers")),(0,o.kt)("p",null,"In order to make sense of this data using AI, a canonical approach is to achieve a vectorial\nembedding of each of the sub-attributes/ images and also a single embedding of the entire document.\nThis implies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Maintaining a database of outputs for each of several models, applied to each of the sub-entities."),(0,o.kt)("li",{parentName:"ul"},"Updating this database whenever new data comes in"),(0,o.kt)("li",{parentName:"ul"},"Monitoring the performance of models, as new data comes in")),(0,o.kt)("p",null,"Once we have a database of vectors/ features for each of the entities (products) in the database,\nthen these can be used in downstream tasks. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vector-search"),(0,o.kt)("li",{parentName:"ul"},"Building models on top of these features, e.g. classifiers")),(0,o.kt)("p",null,'In addition, once we have features for several collections or tables or data, these\ncan be "semantically joined". This might mean, for example:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Conditioning vector-search on additional inputs (e.g. product search, conditioned on user embeddings)"),(0,o.kt)("li",{parentName:"ul"},"Training cross-modality search, for instance, aligning textual queries resulting for typed queries,\nwith product features.")),(0,o.kt)("p",null,"From this point of view, we believe that the ultimate production environment for AI, is a database, where\nall documents/ rows are game to be fed through AI models, and the outputs may be saved in the database,\nto be used downstream as inputs to further AI models, and for use in vector-search, and further approaches\nto navigating data with AI models. This is an extension of the now-standard vector-database paradigm,\nwhich enables documents to be encoded as vectors and for these to be searched. We believe that the\nvector-database paradigm is unnecessarily limiting, as evidenced, for example, by the fact that\nvectors are simultaneously featurizations of their documents, and logically can and should be used\nin additional machine learning/ AI tasks."),(0,o.kt)("h2",{id:"desiderata-for-ai-data-environment"},"Desiderata for AI-data environment"),(0,o.kt)("p",null,"In building SuperDuperDB, considering this background, we wanted to build an AI-data environment whicih could\ndo the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{important}"},"Any row (row+column) or document (subdocument/ subfield) of data should be game to be processed by configured AI models\n")),(0,o.kt)("p",null,"This is inline with the background of individual documents corresponding to entities in the application-domain.\nFor instance, in e-Commerce, one wants to be able to encode individual attributes, as well as entire products using AI-models."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{important}"},"AI models should be built and defined in a way that they can read data directly from the database and produce outputs which may be written back to the database\n")),(0,o.kt)("p",null,"Only if this is achieved, is it possible to automate computation whereby a model is reloaded and\napplied to incoming data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{important}"},"AI outputs should also be considered data, in order to enable outputs to be used as input features\n")),(0,o.kt)("p",null,"By saving AI-outputs to the database, our system becomes essentially recursive. We can\nconfigure further models to consume the outputs of upstream models. This is a vital component\nof modern AI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{important}"},"AI models should be configurable to optionally depend on upstream models\n")),(0,o.kt)("p",null,"This and the previous point are two sides of the same coin. If model outputs are treatable\nas data, then we still want to order model computations, to respect the fact that certain\nmodels depend on the computations of their upstream models, for feasibility."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{important}"},"The environment should be flexible enough to enable AI models with diverse inputs and outputs\n")),(0,o.kt)("p",null,"This is an absolute must if we are to cater to the most promising recent areas in AI,\nincluding computer vision, video comprehension, speech recognition and generation, and more."))}p.isMDXComponent=!0}}]);