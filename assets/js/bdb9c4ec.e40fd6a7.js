"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[535],{5655:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(6070),i=s(6113);const o={title:"Signing"},r=void 0,c={id:"concepts/signing",title:"Signing",description:"The signing process can only take place when a user is already registered on Entropy. The process involves the user and a committee of validators collectively performing the signing.",source:"@site/docs/concepts/signing.md",sourceDirName:"concepts",slug:"/concepts/signing",permalink:"/concepts/signing",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/docs/concepts/signing.md",tags:[],version:"current",frontMatter:{title:"Signing"},sidebar:"sidebar",previous:{title:"Registering",permalink:"/concepts/registering"},next:{title:"Threshold signature scheme",permalink:"/concepts/threshold-signature-scheme"}},h={},a=[{value:"Signing process",id:"signing-process",level:2},{value:"Signing Group Selection",id:"signing-group-selection",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The signing process can only take place when a user is already registered on Entropy. The process involves the user and a committee of validators collectively performing the signing."}),"\n",(0,t.jsx)(n.p,{children:"The committee requires one Validator from each signing group as well as the user. The current version of the program will be executed here to determine whether or not to proceed with the signing protocol."}),"\n",(0,t.jsxs)(n.p,{children:["For details on how signatures are actually created, see ",(0,t.jsx)(n.a,{href:"/concepts/threshold-signature-scheme",children:"Threshold Signature Scheme"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"signing-process",children:"Signing process"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Signing Flow New",src:s(4812).A+"",width:"1424",height:"698"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The user computes the hash of the message they wish to sign and selects a signing committee by deterministically selecting a member of each signing group based on this hash. They can get the details of the signing groups as they were published on-chain when the user ",(0,t.jsx)(n.a,{href:"./registering",children:"registered"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The user contacts all threshold servers in the signing committee and makes a POST to ",(0,t.jsx)(n.code,{children:"/user/sign_tx"})," with the message to be signed (encrypted for that node)."]}),"\n",(0,t.jsx)(n.li,{children:"On receiving a message, each node checks that it is a member of the signing committee for that message using the hash."}),"\n",(0,t.jsx)(n.li,{children:"The Threshold server retrieves the latest version of the associated program from the entropy chain, and executes it with the message to be signed as input. Only on getting successful program output do they continue to the next step."}),"\n",(0,t.jsxs)(n.li,{children:["The Threshold server sets up websocket connections to or from the rest of the committee to use for threshold signing protocol messages. They decide whether to make an outgoing connection, or accept an incoming one by comparing account IDs. These connections are secured using the ",(0,t.jsx)(n.a,{href:"https://noiseprotocol.org/noise.html",children:"noise protocol"}),". Signing protocol messages can be either 'broadcast' to all of the committee or 'p2p' to a specific member."]}),"\n",(0,t.jsx)(n.li,{children:"Once all members of the signing committee have subscribed, nodes participate in the signing protocol to produce a signature using the key-shares retrieved from their key-value store."}),"\n",(0,t.jsx)(n.li,{children:"If the signing process fails, nodes broadcast who the malicious/faulty signer was, which is included in the next block. Following that, the next block contains details of a new signing committee. The misbehaving signer will be 'slashed' (not yet implemented)."}),"\n",(0,t.jsxs)(n.li,{children:["If the process is successful, the signature is returned to the user. Currently, this requires the user to repeatedly poll POST ",(0,t.jsx)(n.code,{children:"signer/signature"})," with the signature hash until it successfully retrieves a signature."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"signing-group-selection",children:"Signing Group Selection"}),"\n",(0,t.jsx)(n.p,{children:"Signing groups are chosen and held on-chain. Every time a new validator joins or gets removed, the chain will place or remove them from a subgroup such that:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Subgroups do not shuffle current validators."}),"\n",(0,t.jsx)(n.li,{children:"Subgroups remain the same size or off by one."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4812:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/signing-new-d77303756536e577c0b29050e859c3a0.svg"},6113:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(758);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);