"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[320],{17624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var n=a(87462),o=a(67294),r=a(3905),i=a(25365),s=a(34209),u=a(99603);const l=e=>{let{responseText:t}=e;return o.createElement("div",{className:"box-border"},o.createElement(i.D,{children:t,components:{code(e){let{node:t,inline:a,className:r,children:i,...l}=e;const p=/language-(\w+)/.exec(r||"");return!a&&p?o.createElement(s.Z,(0,n.Z)({},l,{children:String(i).replace(/\n$/,""),style:u.Z,language:p[1],PreTag:"div"})):o.createElement("code",(0,n.Z)({},l,{className:r}),i)}}}))},p=e=>{let{inputText:t,setInputText:a,setResponseText:n,question:r}=e;return o.createElement("div",null,o.createElement("input",{type:"text",placeholder:r,value:t,onChange:e=>{a(e.target.value)},size:"25"}),o.createElement("button",{className:"submit",onClick:async()=>{await(async e=>{let{inputText:t,setResponseText:a}=e;try{a('Awaiting response to "'+t+'"...');const e=await fetch("https://question-the-docs.fly.dev/documents/query",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:t,collection_name:"superduperdb"})});a((await e.json()).answer)}catch(n){console.error("Error:",n)}})({inputText:t,setResponseText:n})}},"Submit"))};const d=function(e){let{question:t,answer:a}=e;const[n,r]=(0,o.useState)(a),[i,s]=(0,o.useState)("");return o.createElement(o.Fragment,null,o.createElement("em",null,o.createElement(p,{inputText:i,setInputText:s,setResponseText:r,question:t}),o.createElement("br",null),o.createElement(l,{responseText:n})))},c={slug:"building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb",title:"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB",authors:["nenb"],tags:["RAG","vector-search"]},h=void 0,m={permalink:"/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb",editUrl:"https://github.com/SuperDuperDB/superduperdb/blog/2023-09-12-rag-question-answering.mdx",source:"@site/blog/2023-09-12-rag-question-answering.mdx",title:"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB",description:"Imagine effortlessly infusing AI into your data repositories\u2014databases, data warehouses, or data lakes\u2014without breaking a sweat. With SuperDuperDB, we aim to make this dream a reality. We want to provide everyone with the tools to build AI applications directly on top of their data stores, with just a pinch of Python magic sprinkled on top! \ud83d\udc0d\u2728",date:"2023-09-12T00:00:00.000Z",formattedDate:"September 12, 2023",tags:[{label:"RAG",permalink:"/blog/tags/rag"},{label:"vector-search",permalink:"/blog/tags/vector-search"}],readingTime:7.485,hasTruncateMarker:!0,authors:[{name:"Nick Byrne",title:"Founding Engineer at SuperDuperDB",url:"https://github.com/nenb",imageURL:"https://avatars.githubusercontent.com/u/55434794?v=4",key:"nenb"}],frontMatter:{slug:"building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb",title:"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB",authors:["nenb"],tags:["RAG","vector-search"]},nextItem:{title:"Introduce vector search to your favourite database with SuperDuperDB",permalink:"/blog/introduce-vector-search-to-your-favourite-database-with-superduperdb"}},g={authorsImageUrls:[void 0]},f=[{value:"Choosing our stack",id:"choosing-our-stack",level:3},{value:"Setting up the code",id:"setting-up-the-code",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Components",id:"components",level:3},{value:"Querying the database",id:"querying-the-database",level:3},{value:"Building queries",id:"building-queries",level:3},{value:"Dispatching QA queries",id:"dispatching-qa-queries",level:3},{value:"Summary",id:"summary",level:3},{value:"SuperDuperDB into the future!",id:"superduperdb-into-the-future",level:3},{value:"Useful links",id:"useful-links",level:3}],b={toc:f},k="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Imagine effortlessly infusing AI into your data repositories\u2014databases, data warehouses, or data lakes\u2014without breaking a sweat. With SuperDuperDB, we aim to make this dream a reality. We want to provide everyone with the tools to build AI applications directly on top of their data stores, with just a pinch of Python magic sprinkled on top!")," \ud83d\udc0d\u2728"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In this latest blog post we take a dive into one such example - a Retrieval Augmented Generation (RAG) app we built directly on top of our MongoDB store.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Since we\u2019re in the business of building open-source software, a logical in-house application of our own technology is a question-answering app, directly on our own documentation. We built this app using SuperDuperDB together with FastAPI, React and MongoDB (the \u201cFARMS\u201d stack)."),(0,r.kt)("p",null,"We use retrieval augmented generation, or RAG, to integrate an existing Large Language Model (LLM) with our own data; including documents found in vector-search in an initial pass, enables using an LLM on a domain it was not trained on. SuperDuperDB allows developers to apply RAG to their own standard database, instead of insisting that users migrate a portion of their data to a vector-search database such as Pinecone, Chroma or Milvus."),(0,r.kt)("p",null,"Although SuperDuperDB\u2019s functionality is more general than simply RAG and vector search, if a model\u2019s output does indeed consist of vectors, it\u2019s dead easy with SuperDuperDB to use these vectors downstream in vector search and RAG applications. We\u2019ll post more about the range of possibilities with SuperDuperDB in the coming weeks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83e\udd16 Let's ask the chatbot to tell us more about SuperDuperDB.")),(0,r.kt)(d,{question:"What is SuperDuperDB?",answer:"SuperDuperDB is a Python package that provides tools for developers to apply AI and machine learning in their already deployed datastore. It also facilitates the setup of a scalable, open-source, and auditable environment for AI development. SuperDuperDB aims to make the integration of AI and data easier, extensible, and comprehensive. It allows for easy evaluation of model predictions and insertion back into the datastore and enables training deployment with a simple one-line command.",mdxType:"Bot"}),(0,r.kt)("h3",{id:"choosing-our-stack"},"Choosing our stack"),(0,r.kt)("p",null,"Right out of the box, SuperDuperDB supports MongoDB, a popular NoSQL database among full-stack developers. MongoDB's cloud service also provides a generous free-tier offering, and and we chose this for our storage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83d\udea7 SuperDuperDB has experimental support for SQL databases which will be greatly expanded in the coming weeks and months!")),(0,r.kt)("p",null,"We chose FastAPI for the web framework because it creates a self-documenting server, it\u2019s extremely full-featured, and has a large community of users - and yes, because it\u2019s trendy. The FARM stack combines both MongoDB and FastAPI, and so it seemed natural to build our RAG app by adding SuperDuperDB to FARM to make FARMS!"),(0,r.kt)("h3",{id:"setting-up-the-code"},"Setting up the code"),(0,r.kt)("p",null,"We decided to stick fairly closely to a typical FastAPI directory structure, the major difference being that we now have a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ai/")," subdirectory that contains two new modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts.py")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"components.py"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backend\n|___ ai\n|   |___ __init__.py\n\u2502   |___ artifacts.py\n|   |___ components.py\n\u2502   |___ utils      # AI helper functions here\n\u2502        |__ ...\n|___ documents      # Our REST backend has a single 'documents' route\n|   |___ __init__.py\n|   |___ models.py  # Pydantic models here\n|   |___ routes.py  # AI-enhanced CRUD logic here\n|___ __init__.py\n|___ app.py\n|___ config.py\n|___ main.py\n")),(0,r.kt)("h3",{id:"artifacts"},"Artifacts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83e\udd16 Let's Question The Docs to learn more about Artifacts.")),(0,r.kt)(d,{question:"What is an Artifact?",answer:"An Artifact carries the necessary information and serialization method to save an object in a configured artifact store. The Artifact ensures that an object can be serialized and stored in a permanent and centralized location for future retrieval. An example of an artifact could be an image file named my_image.jpg that is saved in a configured artifact store, such as gridfs on MongoDB.",mdxType:"Bot"}),(0,r.kt)("p",null,"To build a program, you first must understand its data, and a RAG app is no different. Here, our data source are Markdown files, and we want to process them in a way which is most suitable for answering the questions we would like the LLM to answer. Here there's a trade-off: splitting the text into too large chunks, makes it harder to get good specificity in the vector-search step of RAG. However, splitting the docs into larger chunks, allows the LLM to use coherently ordered text to contextualize the answer it formulates."),(0,r.kt)("p",null,"SuperDuperDB supports a wide range of models for prediction and training, and flexible serialization: for instance, we might use ",(0,r.kt)("inlineCode",{parentName:"p"},"spacy")," for pre-processing labels, ",(0,r.kt)("inlineCode",{parentName:"p"},"torchvision")," for vectorizing images and ",(0,r.kt)("inlineCode",{parentName:"p"},"transformers")," for multi-modal retrieval. (But the program is not dependent on all these models! \u201cDon\u2019t pay for what you don\u2019t use\u201d is our motto.)"),(0,r.kt)("p",null,"Once we have our artifacts, ",(0,r.kt)("inlineCode",{parentName:"p"},"superduperdb")," takes care of the rest. All serialization, creation and tracking of metadata, and job orchestration is handled automatically: the ultimate goal is to make the development of AI applications possible for anyone. For our RAG app, this step looks roughly like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from superduperdb.container.document import Document\nfrom superduperdb.db.mongodb.query import Collection\n...\n\n# `artifacts` are chunked Markdown files\ndocuments = [Document({"KEY": v}) for v in artifacts]\ndb.execute(Collection(name="NAME").insert_many(documents))\n')),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83e\udd16 QtD again!")),(0,r.kt)(d,{question:"Give examples of Components.",answer:"SuperDuperDB has several components that work together to provide a unified user experience for the programmer. The DB component handles the underlying datastore and provides the functionality for storing and retrieving data. It is the core component of SuperDuperDB. The Models component defines the structure and behavior of the data to be stored in the DB. It includes classes or structures that represent different types of data and their relationships. The Encoders component is responsible for encoding and decoding data between different formats. It allows data to be transformed into a compatible format for storage in the DB. These are only some of the components that are provided by SuperDuperDB.",mdxType:"Bot"}),(0,r.kt)("p",null,"We are only going to use that first feature, and install our AI models inside our database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83d\udca1 But Components can also listen for specific events before performing an action, track statistics of database artifacts over time and even train models.")),(0,r.kt)("p",null,"We chose ",(0,r.kt)("inlineCode",{parentName:"p"},"text-embedding-ada-002")," for our text embedding model, which we compute on the app's own server. For the chatbot, we selected the well-known ",(0,r.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo"),"; now we can start talking to our chatbot!"),(0,r.kt)("h3",{id:"querying-the-database"},"Querying the database"),(0,r.kt)("p",null,"Our app is a particularly simple example of a CRUD app without the UPDATE or DELETE actions: once we have created our artifacts, we just have to READ the database for the text most similar to our question."),(0,r.kt)("h3",{id:"building-queries"},"Building queries"),(0,r.kt)("p",null,"Using SuperDuperDB to build a query to search for relevant text snippets is very similar to using a standard MongoDB driver such as ",(0,r.kt)("inlineCode",{parentName:"p"},"pymongo"),", but with additional keyword arguments like n in this example, which says how many similar items to return from the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from superduperdb.db.mongodb.query import Collection            \n\ncontext = (\n    Collection(name="NAME")\n    .like(\n        {"KEY": query},  # Example: \'What is SuperDuperDB?\'\n        n=5,\n        vector_index="NAME2",\n    )\n    .find()\n)\n')),(0,r.kt)("h3",{id:"dispatching-qa-queries"},"Dispatching QA queries"),(0,r.kt)("p",null,"Under the hood, SuperDuperDB can be configured to perform searches and comparisons using a vector database like the open-source LanceDB, or MongoDB Atlas, which is what we used in QtD."),(0,r.kt)("p",null,"Executing a query is also very similar to a standard CRUD application, except that the database needs to be wrapped in a SuperDuperDB after it is created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pymongo import MongoClient\n\nfrom superduperdb import superduper\n\nMONGO_URI = ...\n\nmongo_db = MongoClient(MONGO_URI)\ndb = superduper(mongo_db)  # It's now a super duper database!\n\ndb.execute(context)  # proceed as normal\n")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The FARM stack works well with SuperDuperDB in Python to build RAG applications."),(0,r.kt)("p",null,"SuperDuperDB\u2019s support for vector search allows developers to minimize the problems with LLM hallucinations, as well as extending LLM coverage to domains the LLM was not trained on."),(0,r.kt)("p",null,"Many RAG and question-answering applications use ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain"),", but SuperDuperDB stands out with its lightweight third-party integrations, support for \u201cbring your own model\u201d, and greater scope, incorporating scalable inference and training directly in your database."),(0,r.kt)("h3",{id:"superduperdb-into-the-future"},"SuperDuperDB into the future!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83e\udd16 Let's see if the bot can help us decide what to do next.")),(0,r.kt)(d,{question:"What is SuperDuperDB's mission?",answer:"SuperDuperDB's mission is to facilitate and accelerate the developer journey between data and AI models by creating an easy-to-use, extensible, and comprehensive Python framework for integrating AI and ML directly to the datastore. They aim to empower developers, data scientists, and architects to leverage the open-source ecosystem in their datastore deployments. They also aim to enable scalability and industrial scale deployment, provide easy-to-use tools for individual developers, allow continued use of already existing or deployed datastores without data migration, follow a fully open-source approach, and enable individuals and organizations to circumvent vendor lock-in strategies.",mdxType:"Bot"}),(0,r.kt)("p",null,"Thanks for reading! If you have any questions about this article, or SuperDuperDB in general, please don\u2019t hesitate to contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:opensource@superduperdb.com"},"opensource@superduperdb.com"),"."),(0,r.kt)("h3",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.qtd.superduperdb.com/"},"Question the docs online"),"!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SuperDuperDB/superduperdb"},"SuperDuperDB on GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SuperDuperDB/superduperdb/tree/main/apps/question-the-docs"},"Play with the code on GitHub"))))}y.isMDXComponent=!0}}]);