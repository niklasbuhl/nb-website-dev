"use strict";(self.webpackChunkniklas_buhl_personal_website=self.webpackChunkniklas_buhl_personal_website||[]).push([[351],{6172:function(e,t,o){o.d(t,{Z:function(){return f}});var n=o(7294),i=o(1273),a=o(5086),l=o(6196);const r=a.styled.div.withConfig({displayName:"positionWrapperstyles__PositionWrapperDiv",componentId:"sc-i32c5d-0"})(["display:flex;align-items:center;flex-direction:column;"," "," "," "," "," ",""],(e=>"pageSection"===e.type?l.Z.pageSection:""),(e=>void 0!==e.sticky?"position: sticky;":"position: relative;"),(e=>"top"===e.sticky?"top: 0;":null),(e=>"bottom"===e.sticky?"bottom: 0;":null),(e=>e.zIndex?"z-index: "+e.zIndex:""),(e=>e.$addCSS?e.$addCSS:""));var c=e=>{let{sticky:t,background:o,zIndex:i,type:a,children:l,$addCSS:c}=e;return n.createElement(r,{sticky:t,background:o,zIndex:i,type:a,$addCSS:c},l)};var s=(0,a.css)(["display:flex;"," "," ",""],(e=>e.direction?"flex-direction: "+e.direction+";":"flex-direction: column;"),(e=>e.horizontal?"column"===e.direction?"align-content: "+e.horizontal:"justify-content: "+e.horizontal:null),(e=>e.vertical?"column"===e.direction?"justify-content: "+e.horizontal:"align-content: "+e.horizontal:null));const d=a.default.div.withConfig({displayName:"contentWrapperstyles__ContentWrapperDiv",componentId:"sc-edvc39-0"})(["display:flex;"," "," "," "," "," ",";"," "," ",""],(e=>e.$props.height?"min-height: "+e.$props.height+";":null),(e=>e.$props.width?"width: "+e.$props.width+";":null),(e=>e.$props.maxWidth?"max-width: "+e.$props.maxWidth+";":null),(e=>e.$props.gutter?"padding: "+e.$props.gutter+";":null),(e=>e.$props.mainGutter?"padding-top: calc("+e.$props.mainGutter+" + "+e.$props.gutter+");":null),(e=>e.$props.mainGutter?"padding-bottom: calc("+e.$props.mainGutter+" + "+e.$props.gutter+");":null),s,(e=>e.$props.typography?e.$props.typography:null),(e=>e.$props.addCSS?e.$props.addCSS:null)),p=(0,a.default)(d).attrs({as:"main"}).withConfig({displayName:"contentWrapperstyles__ContentWrapperMain",componentId:"sc-edvc39-1"})([""]),u=(0,a.default)(d).attrs({as:"nav"}).withConfig({displayName:"contentWrapperstyles__ContentWrapperNav",componentId:"sc-edvc39-2"})([""]),h=(0,a.default)(d).attrs({as:"footer"}).withConfig({displayName:"contentWrapperstyles__ContentWrapperFooter",componentId:"sc-edvc39-3"})([""]);var g=e=>{let{height:t,width:o,maxWidth:i,gutter:a,mainGutter:l,direction:r,vertical:c,horizontal:s,children:g,type:m,addCSS:y,typography:f}=e;const{0:v,1:b}=(0,n.useState)({height:t,width:o,maxWidth:i,gutter:a,mainGutter:l,direction:r,vertical:c,horizontal:s,addCSS:y,typography:f});return n.createElement(n.Fragment,null,"nav"===m?n.createElement(u,{$props:v},g):"main"===m?n.createElement(p,{$props:v},g):"footer"===m?n.createElement(h,{$props:v},g):n.createElement(d,{$props:v},g))};const m=a.default.div.withConfig({displayName:"backgroundWrappercomponent__Background",componentId:"sc-1mc56fk-0"})(["display:flex;"," ",""],(e=>"pageSection"===e.type?l.Z.pageSection:null),(e=>e.backgroundColor?"background: "+e.backgroundColor.hsl().string()+";":null));var y=e=>{let{backgroundColor:t,children:o,type:i}=e;return n.createElement(m,{backgroundColor:t,type:i},o)};var f=e=>{let{children:t,typography:o,backgroundColor:a,height:l}=e;const{layout:r}=(0,n.useContext)(i.Z);return n.createElement(c,{type:"pageSection"},n.createElement(y,{type:"pageSection",backgroundColor:a},n.createElement(g,{height:l?"calc("+l+" - 2 * "+r.gutter+" - 2 * "+r.mainGutter+")":"calc(100vh - 2 * "+r.gutter+" - 2 * "+r.mainGutter+")",width:"calc(100% - 2 * "+r.gutter+")",gutter:r.gutter,mainGutter:r.mainGutter,maxWidth:"calc("+r.pageWidth+" - 2 * "+r.gutter+")",type:"section",typography:o},t)))}},3886:function(e,t,o){o.d(t,{Z:function(){return Z}});var n=o(5086);var i=(0,n.css)(['html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none;}table{border-collapse:collapse;border-spacing:0;}']);var a=(0,n.css)([":root{--disable-scroll:visible;font-size:16px;}"]);const l=(0,n.createGlobalStyle)([""," "," body{overflow:var(--disable-scroll);}"],i,a);var r=o(7294),c=o(8855),s=o(6196);const d=n.default.nav.withConfig({displayName:"navigationBarstyles__Nav",componentId:"sc-1khgkaa-0"})([""," height:",";position:sticky;top:0;z-index:1337;overflow:hidden;animation-timing-function:ease-in;transition:transform 0.2s,height 0.3s ease;background:white;"," ",""],s.Z.pageSection,(e=>e.height),(e=>e.hidden?"transform: translateY(-96px);":""),(e=>e.$showMobileMenu?"background: white;":"")),p=n.default.div.withConfig({displayName:"navigationBarstyles__DesktopMenu",componentId:"sc-1khgkaa-1"})(["display:flex;justify-content:space-between;width:calc( 100vw - "," * 2 );padding-left:",";padding-right:",";max-width:calc(",");"],(e=>e.display===c.FO.Mobile?"0":e.gutter),(e=>e.display===c.FO.Mobile?0:e.gutter),(e=>e.display===c.FO.Mobile?0:e.gutter),(e=>e.width+" - "+e.gutter+" * 2")),u=n.default.div.withConfig({displayName:"navigationBarstyles__Menu",componentId:"sc-1khgkaa-2"})(["display:flex;flex-direction:",";"],(e=>e.display!==c.FO.Mobile?"row":"column")),h=n.default.div.withConfig({displayName:"navigationBarstyles__MobileMenu",componentId:"sc-1khgkaa-3"})(["display flex;flex-direction:column;width:100%;"]);var g=o(1273),m=o(4160);n.default.div.withConfig({displayName:"navLinkstyles__NavLinkWrapper",componentId:"sc-o8z40j-0"})(["display:flex;"]);const y=(0,n.css)(["display:flex;border:none;background:none;padding:16px;height:calc(100% - 32px);align-items:center;"]),f=(0,n.default)(m.rU).withConfig({displayName:"navLinkstyles__StyledLink",componentId:"sc-o8z40j-1"})([""," ",""],y,(e=>e.typography)),v=n.default.button.withConfig({displayName:"navLinkstyles__StyledButton",componentId:"sc-o8z40j-2"})([""," height:48px;cursor:pointer;"," "," ",""],y,(e=>e.typography),(e=>e.$active&&void 0!==e.$activeStyle?(0,n.css)(e.$activeStyle):""),(e=>e.disabled&&(0,n.css)(["opacity:0.5;cursor:not-allowed;"])));n.default.button.withConfig({displayName:"navLinkstyles__DisabledLink",componentId:"sc-o8z40j-3"})([""," height:48px;cursor:pointer;"],y),(0,n.css)(["color:cyan;"]);var b=o(1424);var k=e=>{let{children:t,to:o,$active:n,onClick:i,activeStyle:a,activeLinkStyle:l}=e;const{typography:c}=(0,r.useContext)(b.Z);return r.createElement(r.Fragment,null,void 0!==o?r.createElement(f,{activeStyle:l,partiallyActive:!0,to:o,onClick:i,typography:c.navigationBar},t):void 0!==i?r.createElement(v,{onClick:i,$active:n,$activeStyle:a,typography:c.navigationBar},t):r.createElement(v,{typography:c.navigationBar,disabled:!0},t))};var x=(0,n.styled)(m.rU).withConfig({displayName:"logoTextcomponent__LogoText",componentId:"sc-2zlpiq-0"})(["display:flex;padding:16px;"," animation-timing-function:ease;transition:transform 0.7s;color:black;",""],(e=>e.typography),(e=>e.$hideTextLogo&&"/"===e.pathname?"transform: translateY(-96px);":""));var w=(0,n.styled)(m.rU).withConfig({displayName:"logocomponent__LogoGraphic",componentId:"sc-5dycxm-0"})([""," overflow:hidden;",' &::before{content:"N";}'],y,(e=>e.typography)),C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const E=(e,t)=>{const o=(0,r.forwardRef)((({color:o="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,children:l,...c},s)=>{return(0,r.createElement)("svg",{ref:s,...C,width:n,height:n,stroke:o,strokeWidth:a?24*Number(i)/Number(n):i,className:`lucide lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,...c},[...t.map((([e,t])=>(0,r.createElement)(e,t))),...(Array.isArray(l)?l:[l])||[]]);var d}));return o.displayName=`${e}`,o},S=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$=E("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);var _=()=>{const{view:e,location:t}=(0,r.useContext)(c.ZP),{layout:o}=(0,r.useContext)(g.Z),{typography:n}=(0,r.useContext)(b.Z),{0:i,1:a}=(0,r.useState)(!1),{0:l,1:s}=(0,r.useState)(!1),{0:m,1:y}=(0,r.useState)(!1),{0:f,1:v}=(0,r.useState)({}),C=n.navigationBarActive;(0,r.useEffect)((()=>{e.scroll<o.getHeroHeaderHeightPixel()/2?v({}):v(C)}),[e.scroll]),(0,r.useEffect)((()=>{e.lastScroll>0&&e.scroll>o.getHeroHeaderHeightPixel()+100&&!m?a(!0):a(!1)}),[e.lastScroll]),(0,r.useEffect)((()=>{e.scroll<=e.height/2+o.getHeroHeaderHeightPixel()&&("/"===(null==t?void 0:t.pathname)||void 0===(null==t?void 0:t.pathname)||"/nb-website-dev/"===(null==t?void 0:t.pathname))?setTimeout((()=>s(!0)),500):s(!1)}),[e.scroll,null==t?void 0:t.pathname]);(0,r.useEffect)((()=>{e.display===c.FO.Mobile&&o.disableScroll(m)}),[m]),(0,r.useEffect)((()=>{e.display!==c.FO.Mobile&&(y(!1),o.disableScroll(!1))}),[e.display]);const E=()=>{const t=o.getHeroHeaderHeightPixel();e.display===c.FO.Mobile&&(y(!1),setTimeout((()=>window.scrollTo({top:t,behavior:"smooth"})),100)),e.display!==c.FO.Mobile&&(window.scrollTo(0,e.scroll),window.scrollTo({top:t,behavior:"smooth"})),console.log("getHeroHeaderHeightPixel: "+o.getHeroHeaderHeightPixel())},_=r.createElement(w,{typography:n.navigationBar,activeStyle:f,onClick:E,to:"/"}),H=r.createElement(u,{display:e.display},r.createElement(k,{activeLinkStyle:f,onClick:E,to:"/projects"},"Projects"),r.createElement(k,{to:"/writings",onClick:E,activeLinkStyle:f},"Writings"),r.createElement(k,{to:"/about",onClick:E,activeLinkStyle:f},"About"),r.createElement(k,{activeStyle:C,onClick:()=>{e.display===c.FO.Mobile&&y(!1),window.scrollTo({top:0,behavior:"smooth"})},$active:e.scroll<o.getHeroHeaderHeightPixel()/2},"Contact"));return r.createElement(d,{hidden:i,height:e.display===c.FO.Mobile&&m?"100vh":o.navigationBarHeight,$showMobileMenu:m},e.display===c.FO.Mobile?r.createElement(h,null,r.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},_,r.createElement(k,{onClick:()=>{const e=o.getHeroHeaderHeightPixel();setTimeout((()=>window.scrollTo({top:e,behavior:"smooth"})),10),y(!m)}},m?r.createElement(S,{size:20}):r.createElement($,{size:20}))),m?H:null):r.createElement(p,{display:e.display,width:o.pageWidth,gutter:o.gutter},r.createElement("div",{style:{display:"flex"}},_,r.createElement(x,{onClick:E,to:"/",$hideTextLogo:l,pathname:(null==t?void 0:t.pathname)||"",typography:n.navigationBar,activeStyle:f},"Niklas Buhl")),H))},H=o(6172),M=o(3163);var z=()=>{const{layout:e}=(0,r.useContext)(g.Z),{view:t,location:o,mouse:n,touch:i}=(0,r.useContext)(c.ZP),{color:a}=(0,r.useContext)(b.Z),{0:l,1:s}=(0,r.useState)("9Laze7:jRzz7@dawzLD0Ojz.g79"),{0:d,1:p}=(0,r.useState)("xh3:+AJv1o47iAA"),{0:u,1:h}=(0,r.useState)(""),{0:y,1:f}=(0,r.useState)(""),{0:v,1:k}=(0,r.useState)(0);return(0,r.useEffect)((()=>{void 0===(null==o?void 0:o.pathname)||t.scroll===e.getHeroHeaderHeightPixel()?window.scrollTo(0,e.getHeroHeaderHeightPixel()):(window.scrollTo(0,t.scroll),window.scrollTo({top:e.getHeroHeaderHeightPixel(),behavior:"smooth"}))}),[]),(0,r.useEffect)((()=>{if(l.length||d.length){k(v+1)}}),[n.position,i.touches]),(0,r.useEffect)((()=>{const e="j5m8UHIA7cSlXpaPd0kGRuJMF16Nt9WEs3fhgQzZxLBoywCVOi2nbKYeq4TDvr",t="DYGWmLdw9vR8rjhsCINKHkT4Q07lStF5fOZzUyAp1i3uxXJacPbngVEo6qMB2e";if(v>2){if(l.length){var o="",n=(a=l).slice(0,1);if(-1==e.indexOf(n)){o+=n}else{var i=(e.indexOf(n)-27+62)%62;o+=e.charAt(i)}a=a.slice(1),s(a),f(y+o)}else if(d.length){var a,r="",c=(a=d).slice(0,1);if(-1==t.indexOf(c)){r+=c}else{i=(t.indexOf(c)-15+62)%62;r+=t.charAt(i)}a=a.slice(1),p(a),h(u+r)}k(0)}}),[v]),r.createElement(H.Z,{height:e.heroHeaderHeight,backgroundColor:a.neonPurple},r.createElement("p",null,"Niklas Buhl"),r.createElement("p",null,"Software Engineer @ IBM Client Innovation Center"),r.createElement("p",null,"Email:"," ",r.createElement("a",{href:l.length?"":y},r.createElement("span",{style:{color:M.Z.neonGreen.hsl().string()}},y.slice(7)),r.createElement("span",{style:{color:M.Z.coralOrange.hsl().string()}},l.slice(7)))),r.createElement("p",null,"Signal:"," ",r.createElement("a",{href:d.length?"":u},r.createElement("span",{style:{color:M.Z.neonGreen.hsl().string()}},u.slice(4)),r.createElement("span",{style:{color:M.Z.coralOrange.hsl().string()}},d.slice(4)))),r.createElement("p",null,l.length||d.length?r.createElement("span",{style:{color:M.Z.neonLime.hsl().string()}}," ","(Move mouse to decrypt)"):null),r.createElement("p",null,"Website: ",r.createElement(m.rU,{to:"/"},"niklasbuhl.com")),r.createElement("p",null,i.touches[0]?i.touches[0].clientX:null,","," ",i.touches[0]?i.touches[0].clientY:null))};var N=n.styled.main.withConfig({displayName:"mainContentcomponent__MainContent",componentId:"sc-1q36kbx-0"})(["display:flex;justify-content:center;flex-direction:column;"," ",""],(e=>e.$topMargin?"margin-top: "+e.$topMargin+";":""),(e=>e.$bottomMargin?"margin-bottom: "+e.$bottomMargin+";":""));const W=n.default.section.withConfig({displayName:"creditsstyles__Section",componentId:"sc-5g8o47-0"})([""," height:24px;z-index:1331;justift-content:center;align-items:center;background-color:white;position:sticky;bottom:0;"],s.z);var I=()=>{const{typography:e}=(0,r.useContext)(b.Z);return r.createElement(W,null,r.createElement("div",null),r.createElement("div",null,r.createElement("span",{style:e.tech},"Copyrights © ",(new Date).getFullYear()," Niklas Buhl")),r.createElement("div",null))};var Z=e=>{let{children:t,PageProps:o}=e;const{setLocation:n}=(0,r.useContext)(c.ZP),{layout:i}=(0,r.useContext)(g.Z);return(0,r.useEffect)((()=>{n(o.location)}),[]),r.createElement(r.Fragment,null,r.createElement(l,null),r.createElement(z,null),r.createElement(_,null),r.createElement(N,{$topMargin:i.mainTopMargin,$bottomMargin:i.mainBottomMargin},t),r.createElement(I,null))}},6196:function(e,t,o){o.d(t,{z:function(){return n}});const n=(0,o(5086).css)(["display:flex;justify-content:center;width:100%;max-width:100vw;"]),i={pageSection:n};t.Z=i}}]);
//# sourceMappingURL=commons-abf9c0527620d6c1ed6c.js.map