"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[697],{2792:(e,i,I)=>{I.r(i),I.d(i,{assets:()=>r,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>M,toc:()=>g});var s=I(4848),t=I(8453);const c={},n="Proactive Refresh",M={id:"ProactiveRefresh",title:"Proactive Refresh",description:"- The concept here is that as validators enter and exit the network their key shares should become invalid",source:"@site/docs/12-ProactiveRefresh.md",sourceDirName:".",slug:"/ProactiveRefresh",permalink:"/ProactiveRefresh",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/tree/master/docs/12-ProactiveRefresh.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Threshold Signature Scheme",permalink:"/ThresholdSignatureScheme"},next:{title:"Slashing",permalink:"/Slashing"}},r={},g=[{value:"Proactive Refresh but I asked ChatGPT3 to make it sound like a Doctor Seuss book.",id:"proactive-refresh-but-i-asked-chatgpt3-to-make-it-sound-like-a-doctor-seuss-book",level:2}];function l(e){const i={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"proactive-refresh",children:"Proactive Refresh"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The concept here is that as validators enter and exit the network their key shares should become invalid"}),"\n",(0,s.jsxs)(i.li,{children:["Every ",(0,s.jsx)(i.a,{href:"https://wiki.polkadot.network/docs/glossary#session",children:"session"})," (2400 blocks, which is 4 hours) the chain will inform the TSS servers that a proactive refresh is happening."]}),"\n",(0,s.jsx)(i.li,{children:"The network (registered keys) will be partitioned as to not refresh the whole network and cause undo strain on the validators."}),"\n",(0,s.jsx)(i.li,{children:"One TSS server from each subgroup is selected deterministically using the current block number modulo the number of TSS servers in that subgroup, similar to the selection process for DKG when registering."}),"\n",(0,s.jsx)(i.li,{children:"The selected TSS servers (one in each subgroup) will connect to each other and run the proactive refresh protocol, producing a new set of keyshares. The protocol is similar to the distributed key generation protocol used during registration."}),"\n",(0,s.jsx)(i.li,{children:"The selected TSS servers send the new keyshares to the other members of their subgroup, and on receiving a keyshare they replace their existing keyshare in their key-value store with the new one."}),"\n",(0,s.jsx)(i.li,{children:"All old keyshares will now be incompatible with the refreshed keyshares. But the public validating key of the distributed signing keypair never changes."}),"\n",(0,s.jsx)(i.li,{children:"The private access mode, an individual trigger will exist where it is initiated by the user (not yet implemented)."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Proactive Refresh Flow New",src:I(7330).A+"",width:"1541",height:"346"})}),"\n",(0,s.jsx)(i.h2,{id:"proactive-refresh-but-i-asked-chatgpt3-to-make-it-sound-like-a-doctor-seuss-book",children:"Proactive Refresh but I asked ChatGPT3 to make it sound like a Doctor Seuss book."}),"\n",(0,s.jsx)(i.p,{children:"In the land of networks and validators so grand,\nA concept arose, quite grand and well planned.\nAs validators entered and left the scene,\nTheir key shares would change, like a magical sheen."}),"\n",(0,s.jsx)(i.p,{children:"Each session, the chain would loudly declare,\nTo TSS servers, a message quite rare.\nA proactive refresh, a dance in the air,\nEnsuring the keys stayed beyond compare."}),"\n",(0,s.jsx)(i.p,{children:"The network, you see, with keys so dear,\nWas partitioned wisely, with nothing to fear.\nNo need to refresh the whole wide expanse,\nLest the validators suffer under the chance."}),"\n",(0,s.jsx)(i.p,{children:"Selected validators, with pride and with glee,\nIn each subgroup, refreshed the network, you see.\nSending key shares like birds on the wing,\nTo the rest of their subgroups, a harmonious fling."}),"\n",(0,s.jsx)(i.p,{children:"Old keys, once so mighty, now lost in the mist,\nInvalid and gone, in the refresh they exist.\nAn individual trigger, a secret to unfold,\nFor private accounts, a story yet to be told."}),"\n",(0,s.jsx)(i.p,{children:"A keyshare held tight by the user's own hand,\nA forceful refresh, like a magical wand.\nNot built just yet, in the code it will be,\nA tale of networks and keys, as you can see."})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7330:(e,i,I)=>{I.d(i,{A:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTQwLjk4MTgyNjc4MjIyNjZweCIgaGVpZ2h0PSIzNDUuNTU1NTQ5NjIxNTgyMDNweCIgY2xhc3M9InNlcXVlbmNlIGhhbmQiPjxkZXNjPlByb2FjdGl2ZSBSZWZyZXNoPC9kZXNjPjxkZWZzPjxtYXJrZXIgdmlld0JveD0iMCAwIDUgNSIgbWFya2VyV2lkdGg9IjUiIG1hcmtlckhlaWdodD0iNSIgb3JpZW50PSJhdXRvIiByZWZYPSI1IiByZWZZPSIyLjUiIGlkPSJtYXJrZXJBcnJvd0Jsb2NrIj48cGF0aCBkPSJNIDAgMCBMIDUgMi41IEwgMCA1IHoiLz48L21hcmtlcj48bWFya2VyIHZpZXdCb3g9IjAgMCA5LjYgMTYiIG1hcmtlcldpZHRoPSI0IiBtYXJrZXJIZWlnaHQ9IjE2IiBvcmllbnQ9ImF1dG8iIHJlZlg9IjkuNiIgcmVmWT0iOCIgaWQ9Im1hcmtlckFycm93T3BlbiI+PHBhdGggZD0iTSA5LjYsOCAxLjkyLDE2IDAsMTMuNyA1Ljc2LDggMCwyLjI4NiAxLjkyLDAgOS42LDggeiIvPjwvbWFya2VyPjwvZGVmcz48ZyBjbGFzcz0idGl0bGUiPjxwYXRoIGQ9Ik0xMCwxMEMzNi41LDE2LjYgNDkuOCwzLjQgMTc1LjksMTAuMEMxNzcuMiwyNC4zIDE3NC42LDM0LjEgMTc1LjksNDIuMkMxMTYuMyw0OC45IDkxLjEsMzUuNiAxMC4wLDQyLjJDMTEuMywxNy43IDguNywzMi4zIDEwLjAsMTAuMCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjx0ZXh0IHg9IjE1IiB5PSIyOC44ODg4ODgzNTkwNjk4MjQiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiBkYW5pZWxiZDsiPjx0c3BhbiB4PSIxNSI+UHJvYWN0aXZlIFJlZnJlc2g8L3RzcGFuPjwvdGV4dD48L2c+PGcgY2xhc3M9ImFjdG9yIj48cGF0aCBkPSJNMTAsNTIuMjIyMjIxMzc0NTExNzJDMTQ0LjYsNTguOCAzNi4zLDQ1LjcgMTc0LjIsNTIuMkMxNzIuNSw2Mi40IDE3NS45LDc1LjAgMTc0LjIsOTQuNEM3OS43LDEwMS4wIDc0LjcsODcuOSAxMC4wLDk0LjRDOC4zLDczLjQgMTEuNyw2MS40IDEwLjAsNTIuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjx0ZXh0IHg9IjIwIiB5PSI3Ni4xMTExMDk3MzM1ODE1NCIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IGRhbmllbGJkOyI+PHRzcGFuIHg9IjIwIj5FbnRyb3B5X0NoYWluPC90c3Bhbj48L3RleHQ+PC9nPjxnIGNsYXNzPSJhY3RvciI+PHBhdGggZD0iTTEwLDI4My4zMzMzMjgyNDcwNzAzQzEwMi43LDI3Ni44IDU5LjMsMjg5LjkgMTc0LjIsMjgzLjNDMTc1LjksMzEyLjMgMTcyLjUsMzE1LjQgMTc0LjIsMzI1LjZDMzYuMywzMzIuMSAxMTAuNSwzMTkuMCAxMC4wLDMyNS42QzguMywzMDkuNyAxMS43LDMxOC44IDEwLjAsMjgzLjMiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsiLz48dGV4dCB4PSIyMCIgeT0iMzA3LjIyMjIxNjYwNjE0MDE0IiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogZGFuaWVsYmQ7Ij48dHNwYW4geD0iMjAiPkVudHJvcHlfQ2hhaW48L3RzcGFuPjwvdGV4dD48L2c+PHBhdGggZD0iTTkyLjEsOTQuNEM5OS42LDEyNC43IDg0LjUsMjUzLjEgOTIuMSwyODMuMyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjxnIGNsYXNzPSJhY3RvciI+PHBhdGggZD0iTTczMi4xMzg2NzE4NzUsNTIuMjIyMjIxMzc0NTExNzJDODI4LjksNTguMyA3NTYuNCw0Ni4yIDg4My43LDUyLjJDODgyLjAsODQuMSA4ODUuNCw4My42IDg4My43LDk0LjRDODMxLjgsODguNCA4NTkuNSwxMDAuNSA3MzIuMSw5NC40QzczMC40LDU5LjAgNzMzLjgsNjIuNyA3MzIuMSw1Mi4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHRleHQgeD0iNzQyLjEzODY3MTg3NSIgeT0iNzYuMTExMTA5NzMzNTgxNTQiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiBkYW5pZWxiZDsiPjx0c3BhbiB4PSI3NDIuMTM4NjcxODc1Ij5WYWxpZGF0b3JfVFNTPC90c3Bhbj48L3RleHQ+PC9nPjxnIGNsYXNzPSJhY3RvciI+PHBhdGggZD0iTTczMi4xMzg2NzE4NzUsMjgzLjMzMzMyODI0NzA3MDNDNzY4LjUsMjc3LjMgODQ3LjMsMjg5LjQgODgzLjcsMjgzLjNDODg1LjQsMzA5LjAgODgyLjAsMjkzLjUgODgzLjcsMzI1LjZDODI5LjIsMzE5LjUgODAxLjksMzMxLjYgNzMyLjEsMzI1LjZDNzMzLjgsMzE4LjggNzMwLjQsMzA1LjAgNzMyLjEsMjgzLjMiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsiLz48dGV4dCB4PSI3NDIuMTM4NjcxODc1IiB5PSIzMDcuMjIyMjE2NjA2MTQwMTQiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiBkYW5pZWxiZDsiPjx0c3BhbiB4PSI3NDIuMTM4NjcxODc1Ij5WYWxpZGF0b3JfVFNTPC90c3Bhbj48L3RleHQ+PC9nPjxwYXRoIGQ9Ik04MDcuOSw5NC40QzgxNS41LDI1My4xIDgwMC40LDE4NS4xIDgwNy45LDI4My4zIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PGcgY2xhc3M9InNpZ25hbCI+PHRleHQgeD0iMTAyLjA4NjU4NTk5ODUzNTE2IiB5PSIxMjIuMjIyMjIwNDIwODM3NCIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IGRhbmllbGJkOyI+PHRzcGFuIHg9IjEwMi4wODY1ODU5OTg1MzUxNiI+VGVsbHMgc2VsZWN0ZWQgdmFsaWRhdG9yIHRvIGRvIFByb2FjdGl2ZSBSZWZyZXNoIChvbmUgdmFsaWRhdG9yIGluIGVhY2ggc3ViZ3JvdXApPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTkyLjEsMTM2LjdDNTM1LjcsMTA4LjAgNjkzLjQsMTY1LjMgODA3LjksMTM2LjciIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsgbWFya2VyLWVuZDogdXJsKCZxdW90OyNtYXJrZXJBcnJvd0Jsb2NrJnF1b3Q7KTsiLz48L2c+PGcgY2xhc3M9InNpZ25hbCI+PHRleHQgeD0iODMyLjkxOTg5ODk4NjgxNjQiIHk9IjE3Mi43Nzc3NzQ4MTA3OTEwMiIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IGRhbmllbGJkOyI+PHRzcGFuIHg9IjgzMi45MTk4OTg5ODY4MTY0Ij5HZXQgcGFydGl0aW9uIG9mIHJlZ2lzdGVyZWQga2V5czwvdHNwYW4+PC90ZXh0PjxwYXRoIGQ9Ik04MDcuOSwxNTYuN0M4MTMuNCwxNTcuNSA4MTIuMCwxNTUuOSA4MjcuOSwxNTYuNyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjxwYXRoIGQ9Ik04MjcuOSwxNTYuN0M4MjkuMCwxNjMuOSA4MjYuOCwxNjQuOSA4MjcuOSwxODMuOSIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjxwYXRoIGQ9Ik04MjcuOSwxODMuOUM4MTkuOCwxODMuMSA4MTQuOCwxODQuNyA4MDcuOSwxODMuOSIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyBtYXJrZXItZW5kOiB1cmwoJnF1b3Q7I21hcmtlckFycm93QmxvY2smcXVvdDspOyIvPjwvZz48ZyBjbGFzcz0ic2lnbmFsIj48dGV4dCB4PSI4MzIuOTE5ODk4OTg2ODE2NCIgeT0iMjE0Ljk5OTk5NjE4NTMwMjczIiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogZGFuaWVsYmQ7Ij48dHNwYW4geD0iODMyLjkxOTg5ODk4NjgxNjQiPkRvZXMgUHJvYWN0aXZlIFJlZnJlc2ggd2l0aCBvdGhlciBzZWxlY3RlZCB2YWxpZGF0b3JzPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTgwNy45LDE5OC45QzgyNC43LDE5OC4xIDgxMS40LDE5OS43IDgyNy45LDE5OC45IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHBhdGggZD0iTTgyNy45LDE5OC45QzgyNi44LDIxNi4zIDgyOS4wLDIxNi42IDgyNy45LDIyNi4xIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHBhdGggZD0iTTgyNy45LDIyNi4xQzgyMy43LDIyNi45IDgxMS4xLDIyNS4zIDgwNy45LDIyNi4xIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7IG1hcmtlci1lbmQ6IHVybCgmcXVvdDsjbWFya2VyQXJyb3dCbG9jayZxdW90Oyk7Ii8+PC9nPjxnIGNsYXNzPSJzaWduYWwiPjx0ZXh0IHg9IjgzMi45NTExNDg5ODY4MTY0IiB5PSIyNTcuMjIyMjE3NTU5ODE0NDUiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiBkYW5pZWxiZDsiPjx0c3BhbiB4PSI4MzIuOTE5ODk4OTg2ODE2NCI+U2VuZHMgbmV3IGtleXNoYXJlIHRvIHJlc3Qgb2YgbWVtYmVycyBvZiBzdWJncm91cCBhbmQgc3RvcmVzIGl0PC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTgwNy45LDI0MS4xQzgxOC4wLDI0MC4zIDgyMC45LDI0MS45IDgyNy45LDI0MS4xIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHBhdGggZD0iTTgyNy45LDI0MS4xQzgyOS4wLDI0NS41IDgyNi44LDI1OS4yIDgyNy45LDI2OC4zIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHBhdGggZD0iTTgyNy45LDI2OC4zQzgxMS4yLDI2Ny41IDgyNC43LDI2OS4xIDgwNy45LDI2OC4zIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7IG1hcmtlci1lbmQ6IHVybCgmcXVvdDsjbWFya2VyQXJyb3dCbG9jayZxdW90Oyk7Ii8+PC9nPjwvc3ZnPg=="},8453:(e,i,I)=>{I.d(i,{R:()=>n,x:()=>M});var s=I(6540);const t={},c=s.createContext(t);function n(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function M(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);