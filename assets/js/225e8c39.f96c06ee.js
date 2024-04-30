"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[474],{1747:(I,i,M)=>{M.r(i),M.d(i,{assets:()=>g,contentTitle:()=>e,default:()=>z,frontMatter:()=>j,metadata:()=>D,toc:()=>n});var N=M(4848),c=M(8453);const j={},e="Joining The Network",D={id:"JoiningTheNetwork",title:"Joining The Network",description:"This describes the process by which a new validator node can join the network.",source:"@site/docs/10-JoiningTheNetwork.md",sourceDirName:".",slug:"/JoiningTheNetwork",permalink:"/JoiningTheNetwork",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/tree/master/docs/10-JoiningTheNetwork.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Node Encryption and Authentication",permalink:"/NodeEncryptionAndAuthentication"},next:{title:"Threshold Signature Scheme",permalink:"/ThresholdSignatureScheme"}},g={},n=[{value:"Information needed from a Validator to join the network",id:"information-needed-from-a-validator-to-join-the-network",level:2}];function T(I){const i={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.R)(),...I.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i.h1,{id:"joining-the-network",children:"Joining The Network"}),"\n",(0,N.jsx)(i.p,{children:"This describes the process by which a new validator node can join the network."}),"\n",(0,N.jsx)(i.p,{children:(0,N.jsx)(i.img,{alt:"Joining The Network Flow",src:M(2643).A+"",width:"879",height:"393"})}),"\n",(0,N.jsxs)(i.ol,{children:["\n",(0,N.jsx)(i.li,{children:"The new validator runs both an Entropy chain node and threshold server."}),"\n",(0,N.jsx)(i.li,{children:"New validator registers with the chain, and the chain is assigns it to a signing 'subgroup'."}),"\n"]}),"\n",(0,N.jsxs)(i.ol,{children:["\n",(0,N.jsxs)(i.li,{children:["Once a new validator knows which subgroup it has joined, it asks current validators in that group for a copy of the key shares which that group holds, by calling POST ",(0,N.jsx)(i.code,{children:"validator/sync_kvdb"})," with database keys of the shares it needs."]}),"\n",(0,N.jsx)(i.li,{children:"Once all shares have been received, informs the chain that it has successfully synced."}),"\n"]}),"\n",(0,N.jsx)(i.h2,{id:"information-needed-from-a-validator-to-join-the-network",children:"Information needed from a Validator to join the network"}),"\n",(0,N.jsxs)(i.ul,{children:["\n",(0,N.jsxs)(i.li,{children:[(0,N.jsx)(i.code,{children:"Endpoint"})," -  The IP address of it's threshold server"]}),"\n",(0,N.jsxs)(i.li,{children:[(0,N.jsx)(i.code,{children:"X25519PublicKey"})," - Its public encryption key for encrypting messages to and from other validators"]}),"\n",(0,N.jsxs)(i.li,{children:[(0,N.jsx)(i.code,{children:"Threshold Server Signing Account"})," - Account for the threshold server to submit transactions to the Entropy chain"]}),"\n"]})]})}function z(I={}){const{wrapper:i}={...(0,c.R)(),...I.components};return i?(0,N.jsx)(i,{...I,children:(0,N.jsx)(T,{...I})}):T(I)}},2643:(I,i,M)=>{M.d(i,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NzguNTI1OTEzMjM4NTI1NHB4IiBoZWlnaHQ9IjM5Mi41MjQzMDE1Mjg5MzA2NnB4IiBjbGFzcz0ic2VxdWVuY2Ugc2ltcGxlIj48ZGVzYz5Kb2luaW5nIFRoZSBOZXR3b3JrPC9kZXNjPjxkZWZzPjxtYXJrZXIgdmlld0JveD0iMCAwIDUgNSIgbWFya2VyV2lkdGg9IjUiIG1hcmtlckhlaWdodD0iNSIgb3JpZW50PSJhdXRvIiByZWZYPSI1IiByZWZZPSIyLjUiIGlkPSJtYXJrZXJBcnJvd0Jsb2NrIj48cGF0aCBkPSJNIDAgMCBMIDUgMi41IEwgMCA1IHoiLz48L21hcmtlcj48bWFya2VyIHZpZXdCb3g9IjAgMCA5LjYgMTYiIG1hcmtlcldpZHRoPSI0IiBtYXJrZXJIZWlnaHQ9IjE2IiBvcmllbnQ9ImF1dG8iIHJlZlg9IjkuNiIgcmVmWT0iOCIgaWQ9Im1hcmtlckFycm93T3BlbiI+PHBhdGggZD0iTSA5LjYsOCAxLjkyLDE2IDAsMTMuNyA1Ljc2LDggMCwyLjI4NiAxLjkyLDAgOS42LDggeiIvPjwvbWFya2VyPjwvZGVmcz48ZyBjbGFzcz0idGl0bGUiPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE5Mi40MzI3MjM5OTkwMjM0NCIgaGVpZ2h0PSIyOC4wNTU1NTUzNDM2Mjc5MyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjx0ZXh0IHg9IjE1IiB5PSIyOS41ODMzMzMwMTU0NDE4OTUiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtBbmRhbGUgTW9ubyZxdW90OywgbW9ub3NwYWNlOyI+PHRzcGFuIHg9IjE1Ij5Kb2luaW5nIFRoZSBOZXR3b3JrPC90c3Bhbj48L3RleHQ+PC9nPjxnIGNsYXNzPSJhY3RvciI+PHJlY3QgeD0iMTAiIHk9IjQ4LjA1NTU1NTM0MzYyNzkzIiB3aWR0aD0iMTQ0LjgyMDk2MDk5ODUzNTE2IiBoZWlnaHQ9IjM4LjA2NzcwNzA2MTc2NzU4IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHRleHQgeD0iMjAiIHk9IjcyLjYzODg4ODM1OTA2OTgyIiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogJnF1b3Q7QW5kYWxlIE1vbm8mcXVvdDssIG1vbm9zcGFjZTsiPjx0c3BhbiB4PSIyMCI+TmV3X1ZhbGlkYXRvcjwvdHNwYW4+PC90ZXh0PjwvZz48ZyBjbGFzcz0iYWN0b3IiPjxyZWN0IHg9IjEwIiB5PSIzMzQuNDU2NTk0NDY3MTYzMSIgd2lkdGg9IjE0NC44MjA5NjA5OTg1MzUxNiIgaGVpZ2h0PSIzOC4wNjc3MDcwNjE3Njc1OCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjx0ZXh0IHg9IjIwIiB5PSIzNTkuMDM5OTI3NDgyNjA1IiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogJnF1b3Q7QW5kYWxlIE1vbm8mcXVvdDssIG1vbm9zcGFjZTsiPjx0c3BhbiB4PSIyMCI+TmV3X1ZhbGlkYXRvcjwvdHNwYW4+PC90ZXh0PjwvZz48bGluZSB4MT0iODIuNDEwNDgwNDk5MjY3NTgiIHgyPSI4Mi40MTA0ODA0OTkyNjc1OCIgeTE9Ijg2LjEyMzI2MjQwNTM5NTUxIiB5Mj0iMzM0LjQ1NjU5NDQ2NzE2MzEiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsiLz48ZyBjbGFzcz0iYWN0b3IiPjxyZWN0IHg9IjU3Ny4yOTAwMjc2MTg0MDgyIiB5PSI0OC4wNTU1NTUzNDM2Mjc5MyIgd2lkdGg9IjE4My4yMjY5ODk3NDYwOTM3NSIgaGVpZ2h0PSIzOC4wNjc3MDcwNjE3Njc1OCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjZmZmZmZmIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjx0ZXh0IHg9IjU4Ny4yOTAwMjc2MTg0MDgyIiB5PSI3Mi42Mzg4ODgzNTkwNjk4MiIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6ICZxdW90O0FuZGFsZSBNb25vJnF1b3Q7LCBtb25vc3BhY2U7Ij48dHNwYW4geD0iNTg3LjI5MDAyNzYxODQwODIiPkN1cnJlbnRfVmFsaWRhdG9yPC90c3Bhbj48L3RleHQ+PC9nPjxnIGNsYXNzPSJhY3RvciI+PHJlY3QgeD0iNTc3LjI5MDAyNzYxODQwODIiIHk9IjMzNC40NTY1OTQ0NjcxNjMxIiB3aWR0aD0iMTgzLjIyNjk4OTc0NjA5Mzc1IiBoZWlnaHQ9IjM4LjA2NzcwNzA2MTc2NzU4IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHRleHQgeD0iNTg3LjI5MDAyNzYxODQwODIiIHk9IjM1OS4wMzk5Mjc0ODI2MDUiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtBbmRhbGUgTW9ubyZxdW90OywgbW9ub3NwYWNlOyI+PHRzcGFuIHg9IjU4Ny4yOTAwMjc2MTg0MDgyIj5DdXJyZW50X1ZhbGlkYXRvcjwvdHNwYW4+PC90ZXh0PjwvZz48bGluZSB4MT0iNjY4LjkwMzUyMjQ5MTQ1NTEiIHgyPSI2NjguOTAzNTIyNDkxNDU1MSIgeTE9Ijg2LjEyMzI2MjQwNTM5NTUxIiB5Mj0iMzM0LjQ1NjU5NDQ2NzE2MzEiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsiLz48ZyBjbGFzcz0iYWN0b3IiPjxyZWN0IHg9Ijc4MC41MTcwMTczNjQ1MDIiIHk9IjQ4LjA1NTU1NTM0MzYyNzkzIiB3aWR0aD0iNjguMDA4ODk1ODc0MDIzNDQiIGhlaWdodD0iMzguMDY3NzA3MDYxNzY3NTgiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsiLz48dGV4dCB4PSI3OTAuNTE3MDE3MzY0NTAyIiB5PSI3Mi42NDQ5NjQyMTgxMzk2NSIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6ICZxdW90O0FuZGFsZSBNb25vJnF1b3Q7LCBtb25vc3BhY2U7Ij48dHNwYW4geD0iNzkwLjUxNzAxNzM2NDUwMiI+Q2hhaW48L3RzcGFuPjwvdGV4dD48L2c+PGcgY2xhc3M9ImFjdG9yIj48cmVjdCB4PSI3ODAuNTE3MDE3MzY0NTAyIiB5PSIzMzQuNDU2NTk0NDY3MTYzMSIgd2lkdGg9IjY4LjAwODg5NTg3NDAyMzQ0IiBoZWlnaHQ9IjM4LjA2NzcwNzA2MTc2NzU4IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PHRleHQgeD0iNzkwLjUxNzAxNzM2NDUwMiIgeT0iMzU5LjA0NjAwMzM0MTY3NDgiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtBbmRhbGUgTW9ubyZxdW90OywgbW9ub3NwYWNlOyI+PHRzcGFuIHg9Ijc5MC41MTcwMTczNjQ1MDIiPkNoYWluPC90c3Bhbj48L3RleHQ+PC9nPjxsaW5lIHgxPSI4MTQuNTIxNDY1MzAxNTEzNyIgeDI9IjgxNC41MjE0NjUzMDE1MTM3IiB5MT0iODYuMTIzMjYyNDA1Mzk1NTEiIHkyPSIzMzQuNDU2NTk0NDY3MTYzMSIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjxnIGNsYXNzPSJzaWduYWwiPjx0ZXh0IHg9IjEwNy40MTA0ODA0OTkyNjc1OCIgeT0iMTIwLjE1MTA0MDA3NzIwOTQ3IiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogJnF1b3Q7QW5kYWxlIE1vbm8mcXVvdDssIG1vbm9zcGFjZTsiPjx0c3BhbiB4PSIxMDcuNDEwNDgwNDk5MjY3NTgiPlNwaW5zIHVwIGNoYWluIGluc3RhbmNlPC90c3Bhbj48L3RleHQ+PGxpbmUgeDE9IjgyLjQxMDQ4MDQ5OTI2NzU4IiB4Mj0iMTAyLjQxMDQ4MDQ5OTI2NzU4IiB5MT0iMTA2LjEyMzI2MjQwNTM5NTUxIiB5Mj0iMTA2LjEyMzI2MjQwNTM5NTUxIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PGxpbmUgeDE9IjEwMi40MTA0ODA0OTkyNjc1OCIgeDI9IjEwMi40MTA0ODA0OTkyNjc1OCIgeTE9IjEwNi4xMjMyNjI0MDUzOTU1MSIgeTI9IjEyOS4xNzg4MTc3NDkwMjM0NCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjxsaW5lIHgxPSIxMDIuNDEwNDgwNDk5MjY3NTgiIHgyPSI4Mi40MTA0ODA0OTkyNjc1OCIgeTE9IjEyOS4xNzg4MTc3NDkwMjM0NCIgeTI9IjEyOS4xNzg4MTc3NDkwMjM0NCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyBtYXJrZXItZW5kOiB1cmwoJnF1b3Q7I21hcmtlckFycm93QmxvY2smcXVvdDspOyIvPjwvZz48ZyBjbGFzcz0ic2lnbmFsIj48dGV4dCB4PSIxMDcuNDEwNDgwNDk5MjY3NTgiIHk9IjE1OC4yMDY1OTU0MjA4Mzc0IiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogJnF1b3Q7QW5kYWxlIE1vbm8mcXVvdDssIG1vbm9zcGFjZTsiPjx0c3BhbiB4PSIxMDcuNDEwNDgwNDk5MjY3NTgiPlN0YXJ0cyB0aHJlc2hvbGQgc2VydmVyPC90c3Bhbj48L3RleHQ+PGxpbmUgeDE9IjgyLjQxMDQ4MDQ5OTI2NzU4IiB4Mj0iMTAyLjQxMDQ4MDQ5OTI2NzU4IiB5MT0iMTQ0LjE3ODgxNzc0OTAyMzQ0IiB5Mj0iMTQ0LjE3ODgxNzc0OTAyMzQ0IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7Ii8+PGxpbmUgeDE9IjEwMi40MTA0ODA0OTkyNjc1OCIgeDI9IjEwMi40MTA0ODA0OTkyNjc1OCIgeTE9IjE0NC4xNzg4MTc3NDkwMjM0NCIgeTI9IjE2Ny4yMzQzNzMwOTI2NTEzNyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyIvPjxsaW5lIHgxPSIxMDIuNDEwNDgwNDk5MjY3NTgiIHgyPSI4Mi40MTA0ODA0OTkyNjc1OCIgeTE9IjE2Ny4yMzQzNzMwOTI2NTEzNyIgeTI9IjE2Ny4yMzQzNzMwOTI2NTEzNyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAyOyBtYXJrZXItZW5kOiB1cmwoJnF1b3Q7I21hcmtlckFycm93QmxvY2smcXVvdDspOyIvPjwvZz48ZyBjbGFzcz0ic2lnbmFsIj48dGV4dCB4PSIzMTQuMDQyMTQ0Nzc1MzkwNiIgeT0iMTkyLjc4OTkyODQzNjI3OTMiIHN0eWxlPSJmb250LXNpemU6IDE2cHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtBbmRhbGUgTW9ubyZxdW90OywgbW9ub3NwYWNlOyI+PHRzcGFuIHg9IjMxNC4wNDIxNDQ3NzUzOTA2Ij5QbGFjZXMgdmFsaWRhdG9yIGluIHN1Ymdyb3VwPC90c3Bhbj48L3RleHQ+PGxpbmUgeDE9IjgxNC41MjE0NjUzMDE1MTM3IiB4Mj0iODIuNDEwNDgwNDk5MjY3NTgiIHkxPSIyMDAuMjg5OTI4NDM2Mjc5MyIgeTI9IjIwMC4yODk5Mjg0MzYyNzkzIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2Utd2lkdGg6IDI7IG1hcmtlci1lbmQ6IHVybCgmcXVvdDsjbWFya2VyQXJyb3dCbG9jayZxdW90Oyk7Ii8+PC9nPjxnIGNsYXNzPSJzaWduYWwiPjx0ZXh0IHg9IjE2NC40MjExMTU4NzUyNDQxNCIgeT0iMjMwLjg0NTQ4Mzc3OTkwNzIzIiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogJnF1b3Q7QW5kYWxlIE1vbm8mcXVvdDssIG1vbm9zcGFjZTsiPjx0c3BhbiB4PSIxNjQuNDIxMTE1ODc1MjQ0MTQiPkNvbnRhY3RzIHZhbGlkYXRvciBpbiBzdWJncm91cCBhc2tzIGZvciBrZXlzPC90c3Bhbj48L3RleHQ+PGxpbmUgeDE9IjgyLjQxMDQ4MDQ5OTI2NzU4IiB4Mj0iNjY4LjkwMzUyMjQ5MTQ1NTEiIHkxPSIyMzguMzQ1NDgzNzc5OTA3MjMiIHkyPSIyMzguMzQ1NDgzNzc5OTA3MjMiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsgbWFya2VyLWVuZDogdXJsKCZxdW90OyNtYXJrZXJBcnJvd0Jsb2NrJnF1b3Q7KTsiLz48L2c+PGcgY2xhc3M9InNpZ25hbCI+PHRleHQgeD0iOTIuNDEwNDgwNDk5MjY3NTgiIHk9IjI2OC45MDEwMzkxMjM1MzUxNiIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6ICZxdW90O0FuZGFsZSBNb25vJnF1b3Q7LCBtb25vc3BhY2U7Ij48dHNwYW4geD0iOTIuNDEwNDgwNDk5MjY3NTgiPlZhbGlkYXRlcyB2YWxpZGF0b3IncyBzdWJncm91cCB0aGVuIGVuY3J5cHRzIGFuZCBzZW5kcyBrZXlzPC90c3Bhbj48L3RleHQ+PGxpbmUgeDE9IjY2OC45MDM1MjI0OTE0NTUxIiB4Mj0iODIuNDEwNDgwNDk5MjY3NTgiIHkxPSIyNzYuNDAxMDM5MTIzNTM1MTYiIHkyPSIyNzYuNDAxMDM5MTIzNTM1MTYiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsgbWFya2VyLWVuZDogdXJsKCZxdW90OyNtYXJrZXJBcnJvd0Jsb2NrJnF1b3Q7KTsiLz48L2c+PGcgY2xhc3M9InNpZ25hbCI+PHRleHQgeD0iMTg5LjIyMzkwNzQ3MDcwMzEyIiB5PSIzMDYuOTU2NTk0NDY3MTYzMSIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6ICZxdW90O0FuZGFsZSBNb25vJnF1b3Q7LCBtb25vc3BhY2U7Ij48dHNwYW4geD0iMTg5LjIyMzkwNzQ3MDcwMzEyIj5PbmNlIGFsbCBrZXlzIGFyZSByZWNpZXZlZCBpbmZvcm1zIGNoYWluIGl0IGhhcyBzeW5jZWQ8L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iODIuNDEwNDgwNDk5MjY3NTgiIHgyPSI4MTQuNTIxNDY1MzAxNTEzNyIgeTE9IjMxNC40NTY1OTQ0NjcxNjMxIiB5Mj0iMzE0LjQ1NjU5NDQ2NzE2MzEiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS13aWR0aDogMjsgbWFya2VyLWVuZDogdXJsKCZxdW90OyNtYXJrZXJBcnJvd0Jsb2NrJnF1b3Q7KTsiLz48L2c+PC9zdmc+"},8453:(I,i,M)=>{M.d(i,{R:()=>e,x:()=>D});var N=M(6540);const c={},j=N.createContext(c);function e(I){const i=N.useContext(j);return N.useMemo((function(){return"function"==typeof I?I(i):{...i,...I}}),[i,I])}function D(I){let i;return i=I.disableParentContext?"function"==typeof I.components?I.components(c):I.components||c:e(I.components),N.createElement(j.Provider,{value:i},I.children)}}}]);