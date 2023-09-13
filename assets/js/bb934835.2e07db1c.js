"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="Change data capture",s={unversionedId:"docs/cluster/change_data_capture",id:"docs/cluster/change_data_capture",title:"Change data capture",description:"SuperDuperDB has been designed from the ground up to provide first class",source:"@site/content/docs/cluster/change_data_capture.md",sourceDirName:"docs/cluster",slug:"/docs/cluster/change_data_capture",permalink:"/docs/docs/cluster/change_data_capture",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/cluster/change_data_capture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperDuperDB architecture",permalink:"/docs/docs/cluster/architecture"},next:{title:"Client-server implementation",permalink:"/docs/docs/cluster/client_server"}},i={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"change-data-capture"},"Change data capture"),(0,a.kt)("p",null,"SuperDuperDB has been designed from the ground up to provide first class\nsupport for keeping AI predictions up-to-date with database changes."),(0,a.kt)("p",null,"If SuperDuperDB is deployed in standalone mode, then changes are detected\nby the same process as data is inserted, resp., updated and deleted by."),(0,a.kt)("p",null,"For deployments involving multiple stakeholders, and roles, this may be\noverly restrictive. Data inserts and updates may occur from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CI/ CD processes triggering data ingestion to the data store"),(0,a.kt)("li",{parentName:"ul"},"Ingestion/ updates from non-SuperDuperDB client libraries, for example in MongoDB:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pymongo.readthedocs.io/en/stable/"},(0,a.kt)("inlineCode",{parentName:"a"},"pymongo"))),(0,a.kt)("li",{parentName:"ul"},"The MongoDB shell: ",(0,a.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/v4.4/mongo/"},(0,a.kt)("inlineCode",{parentName:"a"},"mongo"))),(0,a.kt)("li",{parentName:"ul"},"Client libraries from non-Python programming languages")))),(0,a.kt)("p",null,"SuperDuperDB aims to allow it's AI models to be updated and kept in-sync with changes\nfrom all of the above sources."),(0,a.kt)("p",null,"Correspondingly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseListener")," class is a Python implementation of a Change Data Capture (CDC). It allows you to monitor changes in a specified collection by utilizing a daemon thread that listens to the change stream."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Import the necessary dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.db.mongodb.cdc import DatabaseListener\n")),(0,a.kt)("p",null,"Instantiate a ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseListener")," object by providing the MongoDB database and the collection to be monitored:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"listener = DatabaseListener(db=db, on=Collection(name='docs'))\n")),(0,a.kt)("p",null,"Start the listener thread to initiate the change stream monitoring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"listener.listen()\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/how_to/mongo_cdc.html"},"here")," for an example of usage of CDC."))}d.isMDXComponent=!0}}]);