"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[401],{7585:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var s=n(758),a=n(7761),i=n(1947),l=n(6070);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(3526),m=n(5500),h=n(5124),b=n(7330);function x(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,l.jsxs)(b.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function p(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(x,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(x,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,l.jsx)(p,{previous:e.previous,next:e.next})}var g=n(5574),j=n(490),f=n(1618),_=n(96),A=n(1999);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(b.A,{to:n,onClick:s,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,_.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,j.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(N,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function k(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,l.jsx)(T,{className:t,versionMetadata:n}):null}function M(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const B={tag:"tag_hFUX",tagRegular:"tagRegular_uUF6",tagWithCount:"tagWithCount_mJJl"};function w(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(b.A,{href:t,className:(0,u.A)(B.tag,s?B.tagWithCount:B.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const y={tags:"tags_zzBY",tag:"tag_B3iP"};function H(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(y.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:y.tag,children:(0,l.jsx)(w,{label:t,permalink:n})},n)}))})]})}var I=n(1546);function V(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(t||n||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(H,{tags:a})})}),o&&(0,l.jsx)(I.A,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var G=n(7169),P=n(7193);const U={tocCollapsibleButton:"tocCollapsibleButton_Wiyn",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MwiB"};function F(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",U.tocCollapsibleButton,!t&&U.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R={tocCollapsible:"tocCollapsible_dq07",tocCollapsibleContent:"tocCollapsibleContent_G_dc",tocCollapsibleExpanded:"tocCollapsibleExpanded_OnFY"};function E(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,G.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(R.tocCollapsible,!i&&R.tocCollapsibleExpanded,n),children:[(0,l.jsx)(F,{collapsed:i,onClick:o}),(0,l.jsx)(G.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(P.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const S={tocMobile:"tocMobile_yzL0"};function z(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(E,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,S.tocMobile)})}var D=n(4668);function O(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(D.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var W=n(9740),Y=n(2159);function J(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(W.A,{as:"h1",children:n})}),(0,l.jsx)(Y.A,{children:t})]})}var q=n(3614),Q=n(3976),X=n(6893);function $(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_CR_2"};function Z(){const e=(0,X.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(b.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)($,{className:K.breadcrumbHomeIcon})})})}const ee={breadcrumbsContainer:"breadcrumbsContainer_lMMY"};function te(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(b.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function ne(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function se(){const e=(0,q.OF)(),t=(0,Q.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,ee.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(Z,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ne,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(te,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ae=n(3580);const ie={docItemContainer:"docItemContainer_QHuU",docItemCol:"docItemCol_H9zY"};function le(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(z,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(O,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ie.docItemCol),children:[s&&(0,l.jsx)(ae.A,{}),(0,l.jsx)(k,{}),(0,l.jsxs)("div",{className:ie.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(se,{}),(0,l.jsx)(M,{}),n.mobile,(0,l.jsx)(J,{children:t}),(0,l.jsx)(V,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function oe(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(le,{children:(0,l.jsx)(n,{})})]})})}}}]);