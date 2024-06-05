"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[863],{4564:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=s(6070),i=s(6113);const t={title:"Glossary"},o=void 0,a={id:"basics/glossary",title:"Glossary",description:"Here is a list of some words and phrases found throughout the Entropy documentation that you might not be familar with.",source:"@site/docs/basics/glossary.md",sourceDirName:"basics",slug:"/basics/glossary",permalink:"/basics/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/docs/basics/glossary.md",tags:[],version:"current",frontMatter:{title:"Glossary"},sidebar:"sidebar",previous:{title:"Support",permalink:"/basics/support"},next:{title:"Joining the network",permalink:"/concepts/joining-the-network"}},d={},l=[{value:"Account",id:"account",level:2},{value:"Admin key",id:"admin-key",level:2},{value:"Adapter",id:"adapter",level:2},{value:"Autonomous Agents",id:"autonomous-agents",level:2},{value:"Consumer key",id:"consumer-key",level:2},{value:"Device keys",id:"device-keys",level:2},{value:"Entropy chain",id:"entropy-chain",level:2},{value:"Entropy network",id:"entropy-network",level:2},{value:"Intelligent program",id:"intelligent-program",level:2},{value:"Partition",id:"partition",level:2},{value:"Program",id:"program",level:2},{value:"Program developer",id:"program-developer",level:2},{value:"Program dev key",id:"program-dev-key",level:2},{value:"Registration",id:"registration",level:2},{value:"Signature request account",id:"signature-request-account",level:2},{value:"Signing committee",id:"signing-committee",level:2},{value:"Signing subgroup",id:"signing-subgroup",level:2},{value:"SS58",id:"ss58",level:2},{value:"TSS account",id:"tss-account",level:2},{value:"Threshold Signing",id:"threshold-signing",level:2},{value:"Threshold server",id:"threshold-server",level:2},{value:"Threshold signature server Account",id:"threshold-signature-server-account",level:2},{value:"Transactions",id:"transactions",level:2},{value:"User",id:"user",level:2},{value:"Validator",id:"validator",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Here is a list of some words and phrases found throughout the Entropy documentation that you might not be familar with."}),"\n",(0,r.jsx)(n.h2,{id:"account",children:"Account"}),"\n",(0,r.jsxs)(n.p,{children:["All of the information associated with a specific program for a particular user or entity. An account is established with an ",(0,r.jsx)(n.a,{href:"#admin-key",children:"admin key"}),". An admin key can assign capabilities to ",(0,r.jsx)(n.a,{href:"#device-keys",children:"device keys"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"admin-key",children:"Admin key"}),"\n",(0,r.jsx)(n.p,{children:"A key that allows you to deploy programs and modify the settings of those programs. Admin keys cannot request signatures. This key must be funded in order to perform some actions."}),"\n",(0,r.jsx)(n.h2,{id:"adapter",children:"Adapter"}),"\n",(0,r.jsx)(n.p,{children:"Plugins that provide support for different chains and program configurations. For example, an adapter can be used to define a specific hashing function to use when signing. Different chains have different signing algorithms; this allows us to support them all."}),"\n",(0,r.jsx)(n.h2,{id:"autonomous-agents",children:"Autonomous Agents"}),"\n",(0,r.jsxs)(n.p,{children:["A program designed to act independently, capable of executing tasks and making decisions based on predefined rules or algorithms. Autonomous agents are seen as key players in the evolution towards digital environments where AI and blockchains intersect, often call ",(0,r.jsx)(n.em,{children:"autonomous worlds"}),". Sometimes called an ",(0,r.jsx)(n.a,{href:"#intelligent-program",children:"intelligent program"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"consumer-key",children:"Consumer key"}),"\n",(0,r.jsxs)(n.p,{children:["A synonym for ",(0,r.jsx)(n.a,{href:"#device-key",children:"deploy key"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"device-keys",children:"Device keys"}),"\n",(0,r.jsx)(n.p,{children:"A key that can request signatures from programs. By default, device keys cannot install programs or modify the settings of programs -- however programs can be given admin-key privalages. This key does not need to hold funds in order to perform actions."}),"\n",(0,r.jsx)(n.h2,{id:"entropy-chain",children:"Entropy chain"}),"\n",(0,r.jsx)(n.p,{children:"An application blockchain with the purpose of coordinating distributed signing."}),"\n",(0,r.jsx)(n.h2,{id:"entropy-network",children:"Entropy network"}),"\n",(0,r.jsx)(n.p,{children:"The set of Entropy validators."}),"\n",(0,r.jsx)(n.h2,{id:"intelligent-program",children:"Intelligent program"}),"\n",(0,r.jsxs)(n.p,{children:["A synonym for an ",(0,r.jsx)(n.a,{href:"#autonomous-agent",children:"autonomous agent"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"partition",children:"Partition"}),"\n",(0,r.jsxs)(n.p,{children:["Also called a ",(0,r.jsx)(n.em,{children:"signing subgroup"}),". A set of threshold servers which all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup."]}),"\n",(0,r.jsx)(n.h2,{id:"program",children:"Program"}),"\n",(0,r.jsx)(n.p,{children:"The logic\xa0defining\xa0what conditions a threshold Server should participate in signing a particular transaction or message. Programs\xa0are compiled\xa0into WebAssembly blobs that\xa0are uploaded\xa0to the blockchain, and can be updated."}),"\n",(0,r.jsxs)(n.p,{children:["Programs run when a ",(0,r.jsx)(n.a,{href:"#device-key",children:"device key"})," requests a signature from the program. Each program returns ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"}),". If the program returns ",(0,r.jsx)(n.code,{children:"true"}),", the Entropy network executes signing, and a signature is returned to the requesting device key."]}),"\n",(0,r.jsx)(n.h2,{id:"program-developer",children:"Program developer"}),"\n",(0,r.jsx)(n.p,{children:"Refers to whoever is using the Entropy network to build and deploy programs."}),"\n",(0,r.jsx)(n.h2,{id:"program-dev-key",children:"Program dev key"}),"\n",(0,r.jsx)(n.p,{children:"Can deploy programs to be installed by admin keys. Program dev keys do not need to be registered."}),"\n",(0,r.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,r.jsx)(n.p,{children:"The process of establishing an account. Registered accounts can be initialized with programs and modify those programs later."}),"\n",(0,r.jsx)(n.h2,{id:"signature-request-account",children:"Signature request account"}),"\n",(0,r.jsx)(n.p,{children:"The account on the Entropy chain that is used to initiate signature requests."}),"\n",(0,r.jsx)(n.h2,{id:"signing-committee",children:"Signing committee"}),"\n",(0,r.jsx)(n.p,{children:"A set of threshold servers that have been selected to participate in signing a particular message. This is composed of validators from different subgroups."}),"\n",(0,r.jsx)(n.h2,{id:"signing-subgroup",children:"Signing subgroup"}),"\n",(0,r.jsxs)(n.p,{children:["Also called a ",(0,r.jsx)(n.em,{children:"partition"}),". A set of Threshold servers that all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup."]}),"\n",(0,r.jsx)(n.h2,{id:"ss58",children:"SS58"}),"\n",(0,r.jsx)(n.p,{children:"The default Substrate address format. The SS58 encoded address format is based on the Bitcoin Base-58-check format but with a few modifications specifically designed to suit Substrate-based chains."}),"\n",(0,r.jsx)(n.h2,{id:"tss-account",children:"TSS account"}),"\n",(0,r.jsxs)(n.p,{children:["Also called a ",(0,r.jsx)(n.em,{children:"Threshold signature server account"}),". The Entropy chain account IDs for the threshold servers."]}),"\n",(0,r.jsx)(n.h2,{id:"threshold-signing",children:"Threshold Signing"}),"\n",(0,r.jsx)(n.p,{children:"A cryptographic technique that allows a group of participants to collectively produce a digital signature on a message without any single participant having access to the complete private signing key. The private signing key is divided into multiple shares, with each participant holding one share. To produce a valid signature, a predetermined threshold number of shares (e.g., 3 out of 5) must be combined. This way, no single entity possesses the entire private key."}),"\n",(0,r.jsx)(n.h2,{id:"threshold-server",children:"Threshold server"}),"\n",(0,r.jsxs)(n.p,{children:["An instance of the Entropy ",(0,r.jsx)(n.a,{href:"/concepts/threshold-signature-scheme",children:"threshold signature server"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"threshold-signature-server-account",children:"Threshold signature server Account"}),"\n",(0,r.jsxs)(n.p,{children:["Also called a ",(0,r.jsx)(n.em,{children:"TSS account"}),". The Entropy chain account IDs for the threshold servers."]}),"\n",(0,r.jsx)(n.h2,{id:"transactions",children:"Transactions"}),"\n",(0,r.jsx)(n.p,{children:"A transaction submitted to the Entropy chain or a transaction intended to be signed by the Entropy network."}),"\n",(0,r.jsx)(n.h2,{id:"user",children:"User"}),"\n",(0,r.jsx)(n.p,{children:"Refers to whoever is using the Entropy network to sign transactions or messages. This may be an individual, an organisation, or some other entity."}),"\n",(0,r.jsx)(n.h2,{id:"validator",children:"Validator"}),"\n",(0,r.jsxs)(n.p,{children:["A device running an ",(0,r.jsx)(n.em,{children:"Entropy chain node"}),", and a ",(0,r.jsx)(n.em,{children:"threshold server"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6113:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(758);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);