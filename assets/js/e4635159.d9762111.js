"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[681],{8442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(6070),r=n(6113);const s={title:"Threshold Signature Scheme"},o=void 0,a={id:"concepts/threshold-signature-scheme",title:"Threshold Signature Scheme",description:"- The TSS Implementation used by Entropy is Synedrion src API",source:"@site/docs/concepts/threshold-signature-scheme.md",sourceDirName:"concepts",slug:"/concepts/threshold-signature-scheme",permalink:"/concepts/threshold-signature-scheme",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/edit/main/docs/concepts/threshold-signature-scheme.md",tags:[],version:"current",frontMatter:{title:"Threshold Signature Scheme"},sidebar:"sidebar",previous:{title:"Signing",permalink:"/concepts/signing"},next:{title:"Validators",permalink:"/concepts/validators"}},h={},c=[{value:"Features of CGGMP21",id:"features-of-cggmp21",level:2},{value:"Identifiable aborts",id:"identifiable-aborts",level:3},{value:"Non-interactive",id:"non-interactive",level:3},{value:"Few communication rounds",id:"few-communication-rounds",level:3},{value:"Proactive security",id:"proactive-security",level:3},{value:"Distributed key generation",id:"distributed-key-generation",level:3},{value:"Key refreshing",id:"key-refreshing",level:3},{value:"Paillier encryption as a commitment scheme",id:"paillier-encryption-as-a-commitment-scheme",level:3},{value:"Links to talks",id:"links-to-talks",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The TSS Implementation used by Entropy is ",(0,i.jsx)(t.strong,{children:"Synedrion"})," ",(0,i.jsx)(t.a,{href:"https://github.com/entropyxyz/synedrion",children:"src"})," ",(0,i.jsx)(t.a,{href:"https://docs.rs/synedrion",children:"API"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The threshold signature scheme used is the 2021 Canetti-Gennaro-Goldfeder-Makriyannis-Peled scheme from the paper ",(0,i.jsx)(t.a,{href:"https://eprint.iacr.org/2021/060",children:"'UC Non-Interactive, Proactive, Threshold ECDSA with Identifiable Aborts'"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For a high-level introduction to threshold signature schemes, see ",(0,i.jsx)(t.a,{href:"../basics/entrosplainer",children:"this section of the 'Entrosplainer'"}),". To summarize, they enable a group of parties to collectively compute a signature without any single party knowing the private key and requiring very little centralized coordination."]}),"\n",(0,i.jsx)(t.p,{children:"Threshold signing with ECDSA is more complicated than with Schnorr-based signature schemes such as EdDSA or RSA. It has taken quite some years of research to develop a scheme that has good security features while not requiring too many communication rounds between parties."}),"\n",(0,i.jsxs)(t.p,{children:["Threshold schemes are commonly referred to as $t$ of $n$, meaning $t$ parties must participate in the protocol to sign a message. Entropy currently uses $n$-of-$n$, meaning rather than choosing a threshold, ",(0,i.jsx)(t.strong,{children:"all"})," parties are needed to sign a message. However, this isn't as dangerous as it might sound, since Entropy has 'signing subgroups' of nodes, of which all members hold identical keyshares. So, even if a portion of Entropy nodes were to go offline, signing messages would still be possible."]}),"\n",(0,i.jsx)(t.h2,{id:"features-of-cggmp21",children:"Features of CGGMP21"}),"\n",(0,i.jsx)(t.h3,{id:"identifiable-aborts",children:"Identifiable aborts"}),"\n",(0,i.jsx)(t.p,{children:"'Identifiable aborts' refers to revealing which party has misbehaved when the signing protocol fails. So, if a party gives faulty or intentionally malicious responses during the signing process, the others can determine who is responsible for the failed signature. In Entropy, the misbehaving party can be made public using Entropy's blockchain, and a new signing committee can be selected for another attempt."}),"\n",(0,i.jsx)(t.h3,{id:"non-interactive",children:"Non-interactive"}),"\n",(0,i.jsx)(t.p,{children:"Only the final round of the signing protocol requires knowledge of the message. The other rounds are known as the 'pre-signing' phase. The paper refers to this as 'non-interactive', as it enables a party to generate its 'signature share' for a given message without interacting with the other parties. The use-case for this is 'cold wallets', which function in isolation. However, to create a 'signature share' from a message, you need the data from the pre-signing stage."}),"\n",(0,i.jsx)(t.h3,{id:"few-communication-rounds",children:"Few communication rounds"}),"\n",(0,i.jsx)(t.p,{children:"The paper proposes two different versions of the protocol, each with a different trade-off between the number of communication rounds needed and the amount of computation required. Either 5 or 8 communication rounds are needed to sign a message, with the 8-round version requiring less computation. However, it is worth noting that the 5-round version's extra computation overhead is only in the case that signing fails. Entropy uses five rounds."}),"\n",(0,i.jsx)(t.h3,{id:"proactive-security",children:"Proactive security"}),"\n",(0,i.jsxs)(t.p,{children:["The paper includes a ",(0,i.jsx)(t.a,{href:"https://eprint.iacr.org/2000/067.pdf",children:"Universally Composable security"})," analysis. The authors claim that 'proactive security' against an adaptive attacker is achieved. An attacker who can control up to $t - 1$ nodes between two consecutive key-refresh phases cannot compromise the scheme."]}),"\n",(0,i.jsx)(t.h3,{id:"distributed-key-generation",children:"Distributed key generation"}),"\n",(0,i.jsx)(t.p,{children:"Distributed key generation means parties can compute their key shares without central coordination or the secret key being known to any party."}),"\n",(0,i.jsx)(t.h3,{id:"key-refreshing",children:"Key refreshing"}),"\n",(0,i.jsx)(t.p,{children:"Key shares can be periodically' refreshed' to allow nodes to join or leave the network and provide proactive security. Without changing the secret key, new key shares are generated that are incompatible with the old ones. This can be achieved in three communication rounds."}),"\n",(0,i.jsx)(t.h3,{id:"paillier-encryption-as-a-commitment-scheme",children:"Paillier encryption as a commitment scheme"}),"\n",(0,i.jsx)(t.p,{children:"The protocol uses Paillier encryption, a type of additive homomorphic encryption. Homomorphic encryption refers to encryption schemes that allow computation on encrypted data, which gives an encrypted result without revealing the data or knowing the encryption key. Paillier is 'additive', so given two encrypted numbers and the public key used to encrypt them, we can compute the encryption of their sum without knowing what the numbers were. Also, given an encrypted number, we can compute the encryption of the multiplication of that number by a known number."}),"\n",(0,i.jsx)(t.p,{children:"Using these primitives, it is possible for two parties, each of which has a secret number, to compute shares of the multiplication of the two secret numbers without learning the other party's secret number. This is referred to in the paper as 'pairwise multiplication'."}),"\n",(0,i.jsx)(t.p,{children:"So, each party has a Paillier keypair and knows the public keys of the other party. Using this pairwise multiplication technique, all parties are able to contribute or' commit' to the random nonce ($k$ value) used in ECDSA signing and to the signature itself using their private key shares."}),"\n",(0,i.jsx)(t.h2,{id:"links-to-talks",children:"Links to talks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.fireblocks.com/blog/ccs-threshold-ecdsa",children:"Presentation on the CGGMP21 scheme from Nikolaos Makriyannis"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://youtu.be/wtxH3PuMAgQ",children:"Presentation of GG20 (CGGMP21's predecessor) from Steven Goldfelder"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6113:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(758);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);