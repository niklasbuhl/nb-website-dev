"use strict";(self.webpackChunkniklas_buhl_personal_website=self.webpackChunkniklas_buhl_personal_website||[]).push([[68],{5035:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"Test"),"\n",r.createElement(t.p,null,"Is it just Paragraphs?"),"\n",r.createElement(t.p,null,"For the hip. Why is this."),"\n",r.createElement(t.h2,null,"Restaurants"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Bistro 123"),"\n",r.createElement(t.li,null,"VØ Pizza Bar"),"\n"),"\n",r.createElement(t.h2,null,"Cafees"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Break"),"\n",r.createElement(t.li,null,"Lanternen"),"\n"),"\n",r.createElement(t.h2,null,"Sightseeing"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Isbjerget"),"\n",r.createElement(t.li,null,"Bøgsted Rende"),"\n",r.createElement(t.li,null,"Lodbjerg Fyr"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://www.folkecenter.net/"},"Nordisk Folkecenter For Vedvarende Energi")),"\n"),"\n",r.createElement(t.h2,null,"Activities"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Mountain Bike: Driftwood"),"\n",r.createElement(t.li,null,"Foraging"),"\n",r.createElement(t.li,null,"Yoga"),"\n",r.createElement(t.li,null,"Windsurfing"),"\n",r.createElement(t.li,null,"Kitesurfing"),"\n",r.createElement(t.li,null,"Windfoiling"),"\n",r.createElement(t.li,null,"Foilboarding"),"\n",r.createElement(t.li,null,"Surfing..."),"\n"),"\n",r.createElement(t.h2,null,"Surfing"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Spots"),"\n"),"\n",r.createElement(t.h2,null,"Shopping"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"VØ Surfshop"),"\n",r.createElement(t.li,null,"Westwind VØ"),"\n"),"\n",r.createElement(t.h2,null,"Cowork Spaces"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Silicon VØ / SURF & WORK"),"\n"),"\n",r.createElement(t.h2,null,"Sleeping / Accomodation"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vorupør Badehotel"),"\n",r.createElement(t.li,null,"Thypisk"),"\n",r.createElement(t.li,null,"Vesterhavsgaarden"),"\n"),"\n",r.createElement(t.h2,null,"Surf Camps"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(4160),c=n(3886),u=n(6172),m=n(1424),s=n(8211);const d={Link:i.rU},g=e=>{let{data:t,children:n,...a}=e;const{typographyStyle:o}=(0,r.useContext)(m.Z);return r.createElement(c.Z,{PageProps:a},r.createElement(u.Z,{typography:o.writing},r.createElement(s.Z,{title:t.mdx.frontmatter.title,author:t.mdx.frontmatter.author,authorLink:"/about",date:t.mdx.frontmatter.date,version:t.mdx.frontmatter.version,tldr:t.mdx.frontmatter.tldr}),r.createElement(l.Zo,{components:d},n)))};function p(e){return r.createElement(g,e,r.createElement(o,e))}},8211:function(e,t,n){n.d(t,{Z:function(){return k}});var l=n(7294),r=n(4160),a=n(5086);const o=(0,a.styled)(r.rU).withConfig({displayName:"headerstyles__WritingsBackLink",componentId:"sc-iuizch-0"})(["text-decoration:none;margin:16px;color:gray;code{font-size:0.8rem;}font-size:0.8rem;"]),i=a.styled.div.withConfig({displayName:"headerstyles__Info",componentId:"sc-iuizch-1"})(["margin-left:8px;display:flex;flex-direction:row;"]);var c=n(7984),u=n(6866),m=n(1273);const s=(0,a.styled)(r.rU).withConfig({displayName:"authorcomponent__StyledLink",componentId:"sc-1d4o85j-0"})(["font-family:",";font-size:0.8rem;color:black;"],c.Z.code),d=a.styled.span.withConfig({displayName:"authorcomponent__AuthorSpan",componentId:"sc-1d4o85j-1"})(["font-size:0.8rem;"," margin:",";margin-top:0;"],u.Z.code,(e=>e.gutter));var g=e=>{let{author:t,to:n}=e;const{layout:r}=(0,l.useContext)(m.Z);return l.createElement(d,{gutter:r.gutter},"Author: ",l.createElement(s,{to:n},t))};const p=a.styled.span.withConfig({displayName:"dateAgocomponent__DateSpan",componentId:"sc-1q3l33p-0"})(["font-size:0.8rem;"," margin:",";margin-top:0;"],u.Z.code,(e=>e.gutter));var f=e=>{let{date:t}=e;const{layout:n}=(0,l.useContext)(m.Z),{0:r,1:a}=(0,l.useState)("2 days"),o=new Date(t);(0,l.useEffect)((()=>{a(i(t))}),[t]);const i=e=>{const t=new Date,n=new Date(e),l=t.getTime()-n.getTime(),r=Math.floor(l/36e5),a=Math.floor(l/864e5),o=Math.floor(l/6048e5),i=Math.floor(l/2592e6),c=Math.floor(l/31536e6);return c>0?c+(1===c?" year ago":" years ago"):i>0?i+(1===i?" month ago":" months ago"):o>0?o+(1===o?" week ago":" weeks ago"):a>0?a+(1===a?" day ago":" days ago"):r+(1===r?" hour ago":" hours ago")};return l.createElement(p,{gutter:n.gutter},"Date:"," ",o.getDate()+" "+o.toLocaleString("default",{month:"long"})+" "+o.getUTCFullYear()," ","(",r,")")};(0,a.styled)(r.rU).withConfig({displayName:"versioncomponent__StyledLink",componentId:"sc-1mel4fi-0"})(["font-family:",";font-size:0.8rem;"],c.Z.code);const h=a.styled.span.withConfig({displayName:"versioncomponent__VersionSpan",componentId:"sc-1mel4fi-1"})(["font-size:0.8rem;"," margin:",";margin-top:0;"],u.Z.code,(e=>e.gutter));var E=e=>{let{version:t}=e;const{layout:n}=(0,l.useContext)(m.Z);return l.createElement(h,{gutter:n.gutter},"Version ",t)};const y=a.styled.div.withConfig({displayName:"tldrcomponent__TldrP",componentId:"sc-1a9sr4w-0"})(["font-size:1.2rem;margin:",";margin-top:12px;font-family:",";"],(e=>e.gutter),c.Z.articleHeader);var w=e=>{let{tldr:t}=e;const{layout:n}=(0,l.useContext)(m.Z);return l.createElement(y,{gutter:n.gutter},t)};var k=e=>{let{title:t,author:n,authorLink:r,date:a,version:c,tldr:u}=e;return l.createElement("header",null,l.createElement(o,{to:"/writings"},l.createElement("span",{style:{fontFamily:"Space Grotesk"}},"Back to "),l.createElement("code",null,"/writings")),l.createElement("h1",null,t),l.createElement(i,null,l.createElement(g,{author:n,to:r}),l.createElement(f,{date:a}),l.createElement(E,{version:c})),l.createElement(w,{tldr:u}))}},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return a}});var l=n(7294);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:a(e),l.createElement(r.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-layouts-writing-page-layout-component-tsx-content-file-path-src-content-writings-guides-thy-guide-index-mdx-527fe52d1f9b00d1cd69.js.map