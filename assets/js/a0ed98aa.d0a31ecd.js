"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1237],{55578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(85893),s=t(11151);const o={},i="Jumpstart AI development on MongoDB with SuperDuperDB",a={permalink:"/blog/2023/09/30/jump-start-ai-development",editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-09-30-jump-start-ai-development.md",source:"@site/blog/2023-09-30-jump-start-ai-development.md",title:"Jumpstart AI development on MongoDB with SuperDuperDB",description:"MongoDB now supports vector-search on Atlas enabling developers to build next-gen AI applications directly on their favourite database. SuperDuperDB now make this process painless by allowing to integrate, train and manage any AI models and APIs directly with your database with simple Python.",date:"2023-09-30T00:00:00.000Z",formattedDate:"September 30, 2023",tags:[],readingTime:2.735,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Walkthrough: How to enable and manage MongoDB Atlas Vector Search with SuperDuperDB",permalink:"/blog/2023/09/31/a-walkthrough-of-vector-search-on-mongodb-atlas-with-superduperdb/content"},nextItem:{title:"SuperDuperDB now supports Cohere and Anthropic APIs",permalink:"/blog/2023/09/29/superduperdb-now-supports-cohere-and-anthropic-apis"}},d={authorsImageUrls:[]},c=[{value:"Using SuperDuperDB to get started with Atlas vector-search",id:"using-superduperdb-to-get-started-with-atlas-vector-search",level:2},{value:"Take AI even further with SuperDuperDB on MongoDB",id:"take-ai-even-further-with-superduperdb-on-mongodb",level:2},{value:"Useful Links",id:"useful-links",level:3},{value:"Contributors are welcome!",id:"contributors-are-welcome",level:3},{value:"Become a Design Partner!",id:"become-a-design-partner",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"MongoDB now supports vector-search on Atlas enabling developers to build next-gen AI applications directly on their favourite database. SuperDuperDB now make this process painless by allowing to integrate, train and manage any AI models and APIs directly with your database with simple Python."}),"\n",(0,r.jsx)(n.p,{children:"Build next-gen AI applications - without the need of complex MLOps pipelines and infrastructure nor data duplication and migration to specialized vector databases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"(RAG) chat applications"})," on documents hosted in MongoDB Atlas"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"semantic-text-search & similiarity-search,"})," using vector embeddings of your data stored in Atlas"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"image similarity & image-search"})," on images hosted in or referred to on MongoDB Atlas"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"video search"})," including search ",(0,r.jsx)(n.em,{children:"within"})," videos for key content"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"content based recommendation"})," based on content hosted in MongoDB Atlas"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"...and much, much more!"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-superduperdb-to-get-started-with-atlas-vector-search",children:"Using SuperDuperDB to get started with Atlas vector-search"}),"\n",(0,r.jsxs)(n.p,{children:["There is great content on the MongoDB website on how to ",(0,r.jsx)(n.a,{href:"https://www.mongodb.com/library/vector-search/building-generative-ai-applications-using-mongodb",children:"get started with vector-search on Atlas"}),". You'll see that there are several steps involved:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Preparing documents for vector-search"}),"\n",(0,r.jsx)(n.li,{children:'Converting text into vectors with an AI "model" and storing these vectors in MongoDB'}),"\n",(0,r.jsx)(n.li,{children:"Setting up a vector-search index on Atlas vector-search"}),"\n",(0,r.jsx)(n.li,{children:"Preparing a production API endpoint to convert searches in real time to vectors"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Each of these steps contains several sub-steps, and can become quite a headache for developers wanting to get started with vector-search."}),"\n",(0,r.jsx)(n.p,{children:"With SuperDuperDB, this preparation process can be boiled down to one simple command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.openai.model import OpenAIEmbedding\nfrom superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.db.mongodb.query import Collection\n\ndb.add(\n    VectorIndex(\n        identifier='my-index',\n        indexing_listener=Listener(\n            model=OpenAIEmbedding(model='text-embedding-ada-002'),\n            key='key',  # path of documents\n            select=Collection('documents').find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n    )\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Under the hood SuperDuperDB does these things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Sets up an Atlas vector-search index in the ",(0,r.jsx)(n.code,{children:'"documents"'})," collection"]}),"\n",(0,r.jsx)(n.li,{children:"Converts all documents into vectors"}),"\n",(0,r.jsxs)(n.li,{children:["Creates a function allow users to directly search using vectors, without needing to handle the conversion to vectors themselves: ",(0,r.jsx)(n.code,{children:"Collection('documents').like({'key': 'This is the text to search with'}).find()"}),". This function can easily be served using, for example, FastAPI. (See ",(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb",children:"here"})," for an example.)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"take-ai-even-further-with-superduperdb-on-mongodb",children:"Take AI even further with SuperDuperDB on MongoDB"}),"\n",(0,r.jsx)(n.p,{children:"AI is not just vector-search over text-documents -- there are countless additional ways in which AI can be leveraged with data. This is where SuperDuperDB excels and other solutions come up short in leveraging data in MongoDB."}),"\n",(0,r.jsx)(n.p,{children:"SuperDuperDB also allows developers to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Search the content of ",(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/use_cases/items/multimodal_image_search_clip",children:"images"}),", videos and ",(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/use_cases/items/voice_memos",children:"voice memos"})," in MongoDB"]}),"\n",(0,r.jsxs)(n.li,{children:["Create ",(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb",children:"talk-to-your documents style chat applications"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Use classical machine learning models ",(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/use_cases/items/resnet_features",children:"together with state-of-the-art computer vision models"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"useful-links",children:"Useful Links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://superduperdb.com/",children:"Website"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb",children:"GitHub"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/category/get-started",children:"Documentation"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/blog",children:"Blog"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/category/use-cases",children:"Example Use Cases & Apps"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA",children:"Slack Community"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.linkedin.com/company/superduperdb/",children:"LinkedIn"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://twitter.com/superduperdb",children:"Twitter"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.youtube.com/@superduperdb",children:"Youtube"})})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"contributors-are-welcome",children:"Contributors are welcome!"}),"\n",(0,r.jsxs)(n.p,{children:["SuperDuperDB is open-source and permissively licensed under the ",(0,r.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/LICENSE",children:"Apache 2.0 license"}),". We would like to encourage developers interested in open-source development to contribute in our discussion forums, issue boards and by making their own pull requests. We'll see you on ",(0,r.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb",children:"GitHub"}),"!"]}),"\n",(0,r.jsx)(n.h3,{id:"become-a-design-partner",children:"Become a Design Partner!"}),"\n",(0,r.jsxs)(n.p,{children:["We are looking for visionary organizations which we can help to identify and implement transformative AI applications for their business and products. We're offering this absolutely for free. If you would like to learn more about this opportunity please reach out to us via email: ",(0,r.jsx)(n.a,{href:"mailto:partnerships@superduperdb.com",children:"partnerships@superduperdb.com"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);