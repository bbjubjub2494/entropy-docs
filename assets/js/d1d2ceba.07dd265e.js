"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[167],{9930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(6070),a=t(6113);const i={title:"Manage accounts"},r=void 0,o={id:"guides/manage-accounts",title:"Manage accounts",description:"This page details some of the ways you can create and maintain your Entropy accounts.",source:"@site/docs/guides/manage-accounts.md",sourceDirName:"guides",slug:"/guides/manage-accounts",permalink:"/guides/manage-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/edit/main/docs/guides/manage-accounts.md",tags:[],version:"current",frontMatter:{title:"Manage accounts"},sidebar:"sidebar",previous:{title:"Validators",permalink:"/concepts/validators"},next:{title:"Get test funds",permalink:"/guides/get-test-funds"}},c={},l=[{value:"CLI",id:"cli",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create an account",id:"create-an-account",level:3},{value:"Import an account",id:"import-an-account",level:3},{value:"Subkey",id:"subkey",level:2},{value:"Install Subkey",id:"install-subkey",level:3},{value:"Create an account",id:"create-an-account-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page details some of the ways you can create and maintain your Entropy accounts."}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsx)(n.p,{children:"The CLI has a built-in account manager. This is useful for running quick, one-time transactions. The CLI account manager can also be helpful for testing purposes."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["You need to have the Entropy CLI installed. ",(0,s.jsx)(n.a,{href:"/reference/cli",children:"Take a look at the CLI page for details on how to install the CLI"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"create-an-account",children:"Create an account"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the CLI by running ",(0,s.jsx)(n.code,{children:"yarn start"})," within your local copy of the ",(0,s.jsx)(n.code,{children:"entropyxyz/cli"})," repository."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Manage Accounts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Type ",(0,s.jsx)(n.code,{children:"n"})," and press ",(0,s.jsx)(n.code,{children:"ENTER"})," when asked ",(0,s.jsx)(n.em,{children:"Would you like to import a key?"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"? Would you like to import a key? n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter the name of your new account. The CLI will output some information about it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"New account:\n{\n        name: Ludleth\n        address: 5HMnksPMRPqsDqyCj31VoQFgpiswsr12bk2YTyfMUEKCm2bv\n        type: seed\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Type ",(0,s.jsx)(n.code,{children:"Y"})," and press ",(0,s.jsx)(n.code,{children:"ENTER"})," to go back to the main menu."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"import-an-account",children:"Import an account"}),"\n",(0,s.jsxs)(n.p,{children:["You can import an account by the ",(0,s.jsx)(n.code,{children:"seed"})," for the account. Most Substrate-based wallets allow you to export your account information."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the CLI by running ",(0,s.jsx)(n.code,{children:"yarn start"})," within your local copy of the ",(0,s.jsx)(n.code,{children:"entropyxyz/cli"})," repository."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Manage Accounts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Type ",(0,s.jsx)(n.code,{children:"y"})," and press ",(0,s.jsx)(n.code,{children:"ENTER"})," when asked ",(0,s.jsx)(n.em,{children:"Would you like to import a key?"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"? Would you like to import a key? y\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter your seed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you specified a ",(0,s.jsx)(n.code,{children:"path"})," when originally creating the account you want to import, enter it when prompted:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"path: ____\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter a name for the account you want to import. The CLI will output some information about your new account:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"New account:\n{\n        name: Hawkwood\n        address: 5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y\n        type: seed\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Type ",(0,s.jsx)(n.code,{children:"Y"})," and press ",(0,s.jsx)(n.code,{children:"ENTER"})," to go back to the main menu."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"subkey",children:"Subkey"}),"\n",(0,s.jsxs)(n.p,{children:["Subkey is a command line utility created by ",(0,s.jsx)(n.a,{href:"https://www.parity.io/",children:"Parity Technologies"})," and allows generating and restoring keys for Substrate-based chains, such as Entropy. It provides a few sub-commands to generate keys, check keys, sign messages, verify messages,"]}),"\n",(0,s.jsx)(n.h3,{id:"install-subkey",children:"Install Subkey"}),"\n",(0,s.jsx)(n.p,{children:"The easiest way to start using Subkey is to use the Docker image supplied by Parity. This method requires that you have Docker installed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -it --pull=always docker.io/parity/subkey:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should output something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"latest: Pulling from parity/subkey\nDigest: sha256:ad9097c83147efde6c79fc913266961d813c1ed451270b72284c0cf80c2092b6\nStatus: Image is up to date for parity/subkey:latest\nWARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested\nUtility for generating and restoring with Substrate keys\n\nUsage: subkey <COMMAND>\n\nCommands:\n  generate-node-key  Generate a random node key, write it to a file or stdout and write the corresponding peer-id to stderr\n  generate           Generate a random account\n  inspect            Gets a public key and a SS58 address from the provided Secret URI\n  inspect-node-key   Load a node key from a file or stdin and print the corresponding peer-id\n  sign               Sign a message, with a given (secret) key\n  vanity             Generate a seed that provides a vanity address\n  verify             Verify a signature for a message, provided on STDIN, with a given (public or secret) key\n  help               Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help\n  -V, --version  Print version\n"})}),"\n",(0,s.jsx)(n.p,{children:"You are now ready to use Subkey."}),"\n",(0,s.jsx)(n.admonition,{title:"Install with Cargo",type:"note",children:(0,s.jsxs)(n.p,{children:["If you'd prefer to install Subkey using Rust's Cargo framework, check out the ",(0,s.jsx)(n.a,{href:"https://paritytech.github.io/polkadot-sdk/master/subkey/index.html",children:"official Subkey documentation"})]})}),"\n",(0,s.jsx)(n.h3,{id:"create-an-account-1",children:"Create an account"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"generate"})," command against Subkey to generate a new account. Assuming you have the latest Subkey Docker image ready, run the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -it --pull=always docker.io/parity/subkey:latest generate\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should output something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Secret phrase `hotel forest jar hover kite book view eight stuff angle legend defense` is account:\n  Secret seed:      0xa05c75731970cc7868a2fb7cb577353cd5b31f62dccced92c441acd8fee0c92d\n  Public key (hex): 0xfec70cfbf1977c6965b5af10a4534a6a35d548eb14580594d0bc543286892515\n  Account ID:       0xfec70cfbf1977c6965b5af10a4534a6a35d548eb14580594d0bc543286892515\n  SS58 Address:     5Hpm9fq3W3dQgwWpAwDS2ZHKAdnk86QRCu7iX4GnmDxycrte\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can use these credentials to interact with the Entropy network."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6113:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(758);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);