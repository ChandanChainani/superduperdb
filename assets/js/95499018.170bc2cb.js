"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:6,tags:["quickstart"]},i="Glossary of concepts and classes",l={unversionedId:"docs/glossary",id:"docs/glossary",title:"Glossary of concepts and classes",description:"| Concept | Description |",source:"@site/content/docs/06_glossary.md",sourceDirName:"docs",slug:"/docs/glossary",permalink:"/docs/docs/glossary",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/06_glossary.md",tags:[{label:"quickstart",permalink:"/docs/tags/quickstart"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,tags:["quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Minimum working example",permalink:"/docs/docs/minimum_working_example"},next:{title:"Overview of the SuperDuperDB datalayer",permalink:"/docs/docs/datalayer_overview"}},d={},s=[],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary-of-concepts-and-classes"},"Glossary of concepts and classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/datalayer_overview"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Datalayer")))),(0,r.kt)("td",{parentName:"tr",align:null},"the main class used to connect with SuperDuperDB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/connecting"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"db")))),(0,r.kt)("td",{parentName:"tr",align:null},"name, by convention, of the instance of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Datalayer")," built at the beginning of all ",(0,r.kt)("inlineCode",{parentName:"td"},"superduperdb")," programs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/component_abstraction"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Component")))),(0,r.kt)("td",{parentName:"tr",align:null},"the base class which manages meta-data and serialization of all developer-added functionality")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Predictor")),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"A mixin class for ",(0,r.kt)("inlineCode",{parentName:"td"},"Component")," descendants, to implement predictions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/supported_ai_frameworks"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Model")))),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"Component")," type responsible for wrapping AI models")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/document_encoder_abstraction"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Document")))),(0,r.kt)("td",{parentName:"tr",align:null},"the wrapper around dictionaries which ",(0,r.kt)("inlineCode",{parentName:"td"},"superduperdb")," uses to send data back-and-forth to ",(0,r.kt)("inlineCode",{parentName:"td"},"db"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/document_encoder_abstraction"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Encoder")))),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"Component")," type responsible for encoding special data-types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/document_encoder_abstraction"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Schema")))),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"Component")," type used to work with columnar data including special data-types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/apply_models"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Listener")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Component"),' to "listen" and ',(0,r.kt)("inlineCode",{parentName:"td"},".predict")," on incoming data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/vector_search"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"VectorIndex")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Component")," to perform vector-search - builds on ",(0,r.kt)("inlineCode",{parentName:"td"},"Model")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Listener"))))))}m.isMDXComponent=!0}}]);