(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9661)}])},3686:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"Image",{enumerable:!0,get:function(){return j}});let i=t(8754),r=t(1757),o=t(5893),a=r._(t(7294)),l=i._(t(3935)),n=i._(t(6665)),d=t(1908),c=t(4706),h=t(5670);t(1558);let m=t(1973),u=i._(t(3293)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,s,t,i,r,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==s&&r(!0),null==t?void 0:t.current){let s=new Event("load");Object.defineProperty(s,"target",{writable:!1,value:e});let i=!1,r=!1;t.current({...s,nativeEvent:s,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,s.preventDefault()},stopPropagation:()=>{r=!0,s.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function p(e){let[s,t]=a.version.split(".",2),i=parseInt(s,10),r=parseInt(t,10);return i>18||18===i&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let _=(0,a.forwardRef)((e,s)=>{let{src:t,srcSet:i,sizes:r,height:l,width:n,decoding:d,className:c,style:h,fetchPriority:m,placeholder:u,loading:g,unoptimized:_,fill:x,onLoadRef:j,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:b,onLoad:y,onError:N,...S}=e;return(0,o.jsx)("img",{...S,...p(m),loading:g,width:n,height:l,decoding:d,"data-nimg":x?"fill":"1",className:c,style:h,sizes:r,srcSet:i,src:t,ref:(0,a.useCallback)(e=>{s&&("function"==typeof s?s(e):"object"==typeof s&&(s.current=e)),e&&(N&&(e.src=e.src),e.complete&&f(e,u,j,v,w,_))},[t,u,j,v,w,N,_,s]),onLoad:e=>{f(e.currentTarget,u,j,v,w,_)},onError:e=>{b(!0),"empty"!==u&&w(!0),N&&N(e)}})});function x(e){let{isAppRouter:s,imgAttributes:t}=e,i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...p(t.fetchPriority)};return s&&l.default.preload?(l.default.preload(t.src,i),null):(0,o.jsx)(n.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let j=(0,a.forwardRef)((e,s)=>{let t=(0,a.useContext)(m.RouterContext),i=(0,a.useContext)(h.ImageConfigContext),r=(0,a.useMemo)(()=>{let e=g||i||c.imageConfigDefault,s=[...e.deviceSizes,...e.imageSizes].sort((e,s)=>e-s),t=e.deviceSizes.sort((e,s)=>e-s);return{...e,allSizes:s,deviceSizes:t}},[i]),{onLoad:l,onLoadingComplete:n}=e,f=(0,a.useRef)(l);(0,a.useEffect)(()=>{f.current=l},[l]);let p=(0,a.useRef)(n);(0,a.useEffect)(()=>{p.current=n},[n]);let[j,v]=(0,a.useState)(!1),[w,b]=(0,a.useState)(!1),{props:y,meta:N}=(0,d.getImgProps)(e,{defaultLoader:u.default,imgConf:r,blurComplete:j,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{...y,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:f,onLoadingCompleteRef:p,setBlurComplete:v,setShowAltText:b,ref:s}),N.priority?(0,o.jsx)(x,{isAppRouter:!t,imgAttributes:y}):null]})});("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},1908:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"getImgProps",{enumerable:!0,get:function(){return l}}),t(1558);let i=t(7386),r=t(4706);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,s){var t;let l,n,d,{src:c,sizes:h,unoptimized:m=!1,priority:u=!1,loading:g,className:f,quality:p,width:_,height:x,fill:j=!1,style:v,onLoad:w,onLoadingComplete:b,placeholder:y="empty",blurDataURL:N,fetchPriority:S,layout:C,objectFit:k,objectPosition:A,lazyBoundary:D,lazyRoot:E,...P}=e,{imgConf:L,showAltText:O,blurComplete:F,defaultLoader:I}=s,M=L||r.imageConfigDefault;if("allSizes"in M)l=M;else{let e=[...M.deviceSizes,...M.imageSizes].sort((e,s)=>e-s),s=M.deviceSizes.sort((e,s)=>e-s);l={...M,allSizes:e,deviceSizes:s}}let R=P.loader||I;delete P.loader,delete P.srcSet;let z="__next_img_default"in R;if(z){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=s=>{let{config:t,...i}=s;return e(i)}}if(C){"fill"===C&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(v={...v,...e});let s={responsive:"100vw",fill:"100vw"}[C];s&&!h&&(h=s)}let U="",H=a(_),T=a(x);if("object"==typeof(t=c)&&(o(t)||void 0!==t.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,d=e.blurHeight,N=N||e.blurDataURL,U=e.src,!j){if(H||T){if(H&&!T){let s=H/e.width;T=Math.round(e.height*s)}else if(!H&&T){let s=T/e.height;H=Math.round(e.width*s)}}else H=e.width,T=e.height}}let G=!u&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:U)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,G=!1),l.unoptimized&&(m=!0),z&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(m=!0),u&&(S="high");let B=a(p),J=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:A}:{},O?{}:{color:"transparent"},v),Y=F||"empty"===y?null:"blur"===y?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:H,heightInt:T,blurWidth:n,blurHeight:d,blurDataURL:N||"",objectFit:J.objectFit})+'")':'url("'+y+'")',q=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},W=function(e){let{config:s,src:t,unoptimized:i,width:r,quality:o,sizes:a,loader:l}=e;if(i)return{src:t,srcSet:void 0,sizes:void 0};let{widths:n,kind:d}=function(e,s,t){let{deviceSizes:i,allSizes:r}=e;if(t){let e=/(^|\s)(1?\d?\d)vw/g,s=[];for(let i;i=e.exec(t);i)s.push(parseInt(i[2]));if(s.length){let e=.01*Math.min(...s);return{widths:r.filter(s=>s>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof s?{widths:i,kind:"w"}:{widths:[...new Set([s,2*s].map(e=>r.find(s=>s>=e)||r[r.length-1]))],kind:"x"}}(s,r,a),c=n.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:n.map((e,i)=>l({config:s,src:t,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:l({config:s,src:t,quality:o,width:n[c]})}}({config:l,src:c,unoptimized:m,width:H,quality:B,sizes:h,loader:R});return{props:{...P,loading:G?"lazy":g,fetchPriority:S,width:H,height:T,decoding:"async",className:f,style:{...J,...q},sizes:W.sizes,srcSet:W.srcSet,src:W.src},meta:{unoptimized:m,priority:u,placeholder:y,fill:j}}}},7386:function(e,s){"use strict";function t(e){let{widthInt:s,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:o,objectFit:a}=e,l=i?40*i:s,n=r?40*r:t,d=l&&n?"viewBox='0 0 "+l+" "+n+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},9267:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{getImageProps:function(){return l},default:function(){return n}});let i=t(8754),r=t(1908),o=t(3686),a=i._(t(3293)),l=e=>{let{props:s}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},n=o.Image},3293:function(e,s){"use strict";function t(e){let{config:s,src:t,width:i,quality:r}=e;return s.path+"?url="+encodeURIComponent(t)+"&w="+i+"&q="+(r||75)}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}}),t.__next_img_default=!0;let i=t},9661:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return P},default:function(){return L}});var i=t(5893),r=t(7294),o=t(8687),a=t.n(o),l=t(5675),n=t.n(l),d=function(){return(0,i.jsxs)("div",{className:a().header,children:[(0,i.jsx)("div",{className:a().isDesktop,children:(0,i.jsxs)("div",{className:a().header_top,children:[(0,i.jsxs)("div",{className:a().header_top_strip,children:[(0,i.jsx)(n(),{src:"/assets/images/element-4.svg",width:16,height:16,alt:"logo"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor"})]}),(0,i.jsxs)("div",{className:a().header_top_strip,children:[(0,i.jsx)(n(),{src:"/assets/images/element-4.svg",width:16,height:16,alt:"logo"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor"})]}),(0,i.jsxs)("div",{className:a().header_top_strip,children:[(0,i.jsx)(n(),{src:"/assets/images/element-4.svg",width:16,height:16,alt:"logo"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor"})]})]})}),(0,i.jsx)("div",{className:a().isMobile,children:(0,i.jsx)("div",{className:a().header_top,children:(0,i.jsxs)("div",{className:a().header_top_strip,children:[(0,i.jsx)(n(),{src:"/assets/images/element-4.svg",width:16,height:16,alt:"logo"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor"})]})})}),(0,i.jsxs)("div",{className:a().header_bottom,children:[(0,i.jsxs)("div",{className:a().header_mob_view,children:[(0,i.jsx)("div",{className:a().isMobile,children:(0,i.jsx)(n(),{src:"/assets/images/hamburger.svg",width:36,height:36,alt:"logo"})}),(0,i.jsx)(n(),{src:"/assets/images/Logo.svg",width:36,height:36,alt:"logo"})]}),(0,i.jsx)("h1",{children:"LOGO"}),(0,i.jsx)("div",{className:a().icon_desktop,children:(0,i.jsxs)("div",{className:a().icon,children:[(0,i.jsx)(n(),{src:"/assets/images/search-normal.svg",width:24,height:24,alt:"Search logo"}),(0,i.jsx)(n(),{src:"/assets/images/heart.svg",width:24,height:24,alt:"whishlist"}),(0,i.jsx)(n(),{src:"/assets/images/shopping-bag.svg",width:24,height:24,alt:"bag logo"}),(0,i.jsx)(n(),{src:"/assets/images/profile.svg",width:24,height:24,alt:"profile"}),(0,i.jsx)("h4",{children:"ENG"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]})}),(0,i.jsx)("div",{className:a().icon_Mob,children:(0,i.jsxs)("div",{className:a().icon,children:[(0,i.jsx)(n(),{src:"/assets/images/search-normal.svg",width:24,height:24,alt:"Search logo"}),(0,i.jsx)(n(),{src:"/assets/images/heart.svg",width:24,height:24,alt:"whishlist"}),(0,i.jsx)(n(),{src:"/assets/images/shopping-bag.svg",width:24,height:24,alt:"bag logo"})]})})]}),(0,i.jsx)("div",{className:a().isDesktop,children:(0,i.jsxs)("div",{className:a().header_tab,children:[(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#000000"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"SHOP"})}),(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#000000"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"SKILLS"})}),(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#000000"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"STORIES"})}),(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#000000"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"ABOUT"})}),(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#000000"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"CONTACT US"})})]})}),(0,i.jsx)("div",{className:a().isMobile,children:(0,i.jsxs)("div",{className:a().header_tab,children:[(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#BFC8CD"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"HOME |"})}),(0,i.jsx)("a",{href:"/",style:{textDecoration:"none",color:"#000000"},children:(0,i.jsx)("div",{className:a().header_tab_menu,children:"SHOP"})})]})})]})},c=t(3896),h=t.n(c),m=t(9677),u=t.n(m),g=function(){let[e,s]=(0,r.useState)(!1),[t,o]=(0,r.useState)(null),a=e=>{o(e),s(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:u().recommended,onClick:()=>{s(!e)},children:[(0,i.jsx)("span",{children:t||"RECOMMENDED"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,className:e?u().rotate:"",alt:"Drop Arrow"})]}),e&&(0,i.jsx)("div",{className:u().dropdown_menu,children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("p",{onClick:()=>a("RECOMMENDED"),children:"RECOMMENDED"}),(0,i.jsx)("p",{onClick:()=>a("Newest first"),children:"Newest first"}),(0,i.jsx)("p",{onClick:()=>a("popular"),children:"popular"}),(0,i.jsx)("p",{onClick:()=>a("Price : high to low"),children:"Price : high to low"}),(0,i.jsx)("p",{onClick:()=>a("Price : low to high"),children:"Price : low to high"})]})})]})},f=function(){let[e,s]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:u().show_filter,children:[(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,onClick:()=>{s(!e)},alt:"Drop Arrow",className:e?u().rotate:""}),e?"Hide Filter":"Show Filter",e&&(0,i.jsxs)("div",{className:u().filter_options,children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox"})," Customizble"]}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"IDEAL FOR"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("p",{children:"unselect all"}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox"})," Men"]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox"})," Women"]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox"})," Baby & Kids"]}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"ocassion"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"work"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"Fabric"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"Segment"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"suitable for"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"raw materials"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("label",{children:"pATTERN"}),(0,i.jsx)(n(),{src:"/assets/images/arrow-left.svg",width:16,height:16,alt:"Drop Arrow"})]}),(0,i.jsx)("ul",{children:"ALL"}),(0,i.jsx)("div",{className:u().bottom_line})]})]})},p=function(e){let{data:s}=e,t=(null==s?void 0:s.data).length;return(0,i.jsxs)("div",{className:u().filter,children:[(0,i.jsxs)("div",{className:u().filter_section,children:[(0,i.jsxs)("p",{children:[t," ITEMS"]}),(0,i.jsx)(f,{})]}),(0,i.jsxs)("div",{className:u().filter_mob,children:["Filter",(0,i.jsx)("div",{style:{border:"1px solid #e5e5e5",margin:"26px 0",height:"25px"}})]}),(0,i.jsx)(g,{})]})},_=function(){return(0,i.jsxs)("div",{className:h().description_box,children:[(0,i.jsx)("h1",{children:"DISCOVER OUR PRODUCTS"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor."})]})},x=t(5783),j=t.n(x),v=function(e){var s;let{data:t}=e,[o,a]=(0,r.useState)([]);(0,r.useEffect)(()=>{a(JSON.parse(localStorage.getItem("bookmarks"))||[])},[]),(0,r.useEffect)(()=>{localStorage.setItem("bookmarks",JSON.stringify(o))},[o]);let l=e=>{o.includes(e)?a(o.filter(s=>s!==e)):a([...o,e])};return(0,i.jsx)("div",{className:j().product,children:null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.map((e,s)=>(0,i.jsxs)("div",{className:j().product_list,children:[(0,i.jsx)(n(),{src:null==e?void 0:e.image,width:300,height:399,alt:null==e?void 0:e.category,loading:"lazy"}),(0,i.jsxs)("div",{className:j().product_title,children:[(0,i.jsx)("h3",{children:null==e?void 0:e.title}),(0,i.jsxs)("div",{className:j().product_details,children:[(0,i.jsx)("p",{children:null==e?void 0:e.description}),o.includes(e.id)?(0,i.jsx)(n(),{src:"/assets/images/heart-1.svg",width:24,height:24,alt:"Bookmark",onClick:()=>l(e.id)}):(0,i.jsx)(n(),{src:"/assets/images/heart.svg",width:24,height:24,alt:"Bookmark",onClick:()=>l(e.id)})]})]})]},s))})},w=function(e){let s=null==e?void 0:e.data;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:h().main,children:[(0,i.jsx)(d,{}),(0,i.jsx)(_,{})]}),(0,i.jsx)(p,{data:s}),(0,i.jsx)(v,{data:s})]})},b=t(9008),y=t.n(b),N=t(7133),S=t.n(N),C=e=>{let{buttonText:s,placeholder:t,onClick:o}=e,[a,l]=r.useState("");return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",placeholder:t,value:a,onChange:e=>{l(e.target.value)}}),(0,i.jsx)("button",{onClick:()=>{o(a),l("")},children:s})]})},k=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Be the first to know"}),(0,i.jsx)("p",{children:"Sign up for updates from mettā muse."}),(0,i.jsx)(C,{buttonText:"SUBSCRIBE",placeholder:"Enter your e-mail...",onClick:e=>{console.log("Email-id:",e)}})]})},A=function(){return(0,i.jsxs)("h3",{children:["mettā muse Accepts",(0,i.jsxs)("div",{className:S().footer_card_details,children:[(0,i.jsx)(n(),{src:"/assets/images/Group_136188.svg",width:56,height:35,alt:"Gpay"}),(0,i.jsx)(n(),{src:"/assets/images/Group_136190.svg",width:56,height:35,alt:"Mastro"}),(0,i.jsx)(n(),{src:"/assets/images/Group_136192.svg",width:56,height:35,alt:"p-pay"}),(0,i.jsx)(n(),{src:"/assets/images/Group_136193.svg",width:56,height:35,alt:"Amex"}),(0,i.jsx)(n(),{src:"/assets/images/Group_136194.svg",width:56,height:35,alt:"Apple pay"}),(0,i.jsx)(n(),{src:"/assets/images/Group_136195.svg",width:56,height:35,alt:"pay"})]})]})},D=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:S().footer_card,children:[(0,i.jsxs)("div",{className:S().footer,children:[(0,i.jsx)(k,{}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h3",{children:["CONTACT US",(0,i.jsx)("p",{children:"+44 221Subscribe 133 5360"}),(0,i.jsx)("p",{children:"customercare@mettamuse.com"})]}),(0,i.jsxs)("h3",{children:["CURRENCY",(0,i.jsxs)("div",{className:S().footer_card_details,children:[(0,i.jsx)(n(),{src:"/assets/images/United_States_of_America.svg",width:24,height:24,alt:"Country logo"}),(0,i.jsx)(n(),{src:"/assets/images/Star_1.svg",width:6,height:6,alt:"dot logo"}),"USD"]}),(0,i.jsx)("p",{children:"Transactions will be completed in Euros and a currency reference is available on hover."})]})]})]}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsxs)("div",{className:S().footer,children:[(0,i.jsx)("div",{children:(0,i.jsxs)("h3",{children:["mettā muse",(0,i.jsx)("a",{href:"",children:"About Us"}),(0,i.jsx)("a",{href:"",children:"Stories"}),(0,i.jsx)("a",{href:"",children:"Artisans"}),(0,i.jsx)("a",{href:"",children:"Boutiques"}),(0,i.jsx)("a",{href:"",children:"Contact Us"}),(0,i.jsx)("a",{href:"",children:"EU Compliances Docs"})]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("h3",{children:["Quick Links",(0,i.jsx)("a",{href:"",children:"Orders & Shipping"}),(0,i.jsx)("a",{href:"",children:"Join/Login as a Seller"}),(0,i.jsx)("a",{href:"",children:"Payment & Pricing"}),(0,i.jsx)("a",{href:"",children:"Return & Refunds"}),(0,i.jsx)("a",{href:"",children:"FAQs"}),(0,i.jsx)("a",{href:"",children:"Privacy Policy"}),(0,i.jsx)("a",{href:"",children:"Terms & Conditions"})]})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h3",{children:["Follow Us",(0,i.jsxs)("div",{className:S().footer_card_details,children:[(0,i.jsx)(n(),{src:"/assets/images/a.svg",width:32,height:32,alt:"icon"}),(0,i.jsx)(n(),{src:"/assets/images/Insta.svg",width:32,height:32,alt:"insta logo"})]})]}),(0,i.jsx)(A,{})]})]}),(0,i.jsx)("p",{style:{fontFamily:"Simplon Norm",fontWeight:400,size:"14px",lineHeight:"16.8px",textAlign:"center",padding:"37px",color:"#fff"},children:"Copyright \xa9 2023 mettamuse. All rights reserved."})]})})},E=function(){let[e,s]=(0,r.useState)(!1),[t,o]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:S().footer_card,children:[(0,i.jsx)("div",{className:S().footer,children:(0,i.jsx)(k,{})}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsxs)("h3",{children:["CALL US",(0,i.jsxs)("div",{className:S().footer_contact_details,children:[(0,i.jsx)("span",{children:"+44 221 133 5360"}),(0,i.jsx)(n(),{src:"/assets/images/Star_1.svg",width:6,height:6,alt:"dot logo"}),(0,i.jsx)("span",{children:"customercare@mettamuse.com"})]})]}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsxs)("h3",{children:["CURRENCY",(0,i.jsxs)("div",{className:S().footer_card_details,children:[(0,i.jsx)(n(),{src:"/assets/images/United_States_of_America.svg",width:24,height:24,alt:"Country logo"}),(0,i.jsx)(n(),{src:"/assets/images/Star_1.svg",width:6,height:6,alt:"dot logo"}),"USD"]})]}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsxs)("div",{className:S().footer_drop_down,children:[(0,i.jsx)("h3",{children:"mettā muse"}),(0,i.jsx)(n(),{src:"/assets/images/down-arrow.svg",width:16,height:16,alt:"Drop Arrow",style:{background:"#fff"},className:e?S().rotate:"",onClick:()=>{s(!e)}}),e&&(0,i.jsxs)("div",{className:S().filter_options,children:[(0,i.jsx)("a",{href:"#",children:"About Us"}),(0,i.jsx)("a",{href:"#",children:"Stories"}),(0,i.jsx)("a",{href:"#",children:"Artisans"}),(0,i.jsx)("a",{href:"#",children:"Boutiques"}),(0,i.jsx)("a",{href:"#",children:"Contact Us"}),(0,i.jsx)("a",{href:"#",children:"EU Compliances Docs"})]})]}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsxs)("div",{className:S().footer_drop_down,children:[(0,i.jsx)("h3",{children:"Quick Links"}),(0,i.jsx)(n(),{src:"/assets/images/down-arrow.svg",width:16,height:16,alt:"Drop Arrow",style:{background:"#fff"},className:a?S().rotate:" ",onClick:()=>{l(!a)}}),a&&(0,i.jsxs)("div",{className:S().filter_options,children:[(0,i.jsx)("a",{href:"#",children:"Orders & Shipping"}),(0,i.jsx)("a",{href:"#",children:"Join/Login as a Seller"}),(0,i.jsx)("a",{href:"#",children:"Payment & Pricing"}),(0,i.jsx)("a",{href:"#",children:"Return & Refunds"}),(0,i.jsx)("a",{href:"#",children:"FAQs"}),(0,i.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,i.jsx)("a",{href:"#",children:"Terms & Conditions"})]})]}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsxs)("div",{className:S().footer_drop_down,children:[(0,i.jsx)("h3",{children:"Follow Us"}),(0,i.jsx)(n(),{src:"/assets/images/down-arrow.svg",width:16,height:16,alt:"Drop Arrow",className:t?S().rotate:"",onClick:()=>{o(!t)},style:{background:"#fff",cursor:"pointer"}}),t&&(0,i.jsxs)("div",{className:S().footer_card_detail,children:[(0,i.jsx)(n(),{src:"/assets/images/a.svg",width:32,height:32,alt:"icon"}),(0,i.jsx)(n(),{src:"/assets/images/Insta.svg",width:32,height:32,alt:"insta logo"})]})]}),(0,i.jsx)("div",{className:S().bottom_line}),(0,i.jsx)(A,{}),(0,i.jsx)("p",{style:{fontFamily:"Simplon Norm",fontWeight:400,size:"14px",lineHeight:"16.8px",textAlign:"center",padding:"37px",color:"#fff"},children:"Copyright \xa9 2023 mettamuse. All rights reserved."})]})},P=!0;function L(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(y(),{children:[(0,i.jsx)("meta",{name:"description",content:"Discover top-quality products and unbeatable deals at our online store! From trendy fashion to must-have gadgets, shop now and enjoy fast shipping. Find everything you need, all in one convenient place. Explore our wide selection today!"},"desc"),(0,i.jsx)("meta",{property:"og:title",content:"Your Ultimate Destination for Online Shopping: Shop Trendy Fashion, Electronics, and More!"}),(0,i.jsx)("meta",{property:"og:description",content:"Stay ahead of the trends and shop with confidence! Explore our wide range of products, from fashion to electronics, and discover unbeatable deals. Join our online community of savvy shoppers today"}),(0,i.jsx)("meta",{property:"og:image",content:"https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/08/ecommerce-website-design.png.webp"}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({_html:'{\n      "@context": "https://schema.org/",\n      "@type": "Product",\n      "name": "Descritption",\n      url: "",\n      "image": [\n        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",\n        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",\n        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"\n       ],\n      "description": "Discover top-quality products and unbeatable deals at our online store! From trendy fashion to must-have gadgets, shop now and enjoy fast shipping. Find everything you need, all in one convenient place. Explore our wide selection today",\n    }'})}},"product-jsonld")]}),(0,i.jsx)(w,{data:e}),(0,i.jsxs)("div",{className:S().footer_section,children:[(0,i.jsx)("div",{className:S().isDesktop,children:(0,i.jsx)(D,{})}),(0,i.jsx)("div",{className:S().isMob,children:(0,i.jsx)(E,{})})]})]})}},7133:function(e){e.exports={footer_section:"Footer_footer_section__v0l1K",footer_card:"Footer_footer_card__a4l06",footer:"Footer_footer__JrJN9",bottom_line:"Footer_bottom_line__LIgwp",footer_card_details:"Footer_footer_card_details__jv4zZ",isDesktop:"Footer_isDesktop__qbIxS",isMob:"Footer_isMob__HZZtj",footer_contact_details:"Footer_footer_contact_details__XLSlS",filter_options:"Footer_filter_options__ixGWB",rotate:"Footer_rotate__YSvPd",footer_card_detail:"Footer_footer_card_detail__GftHW",footer_drop_down:"Footer_footer_drop_down__0taRD"}},8687:function(e){e.exports={header:"Header_header__b6rsY",header_top_strip:"Header_header_top_strip__NV5yO",header_top:"Header_header_top__74dz8",header_bottom:"Header_header_bottom__ZEPbz",header_tab:"Header_header_tab__ja38N",header_tab_menu:"Header_header_tab_menu__FGsfa",icon:"Header_icon__wEn76",isDesktop:"Header_isDesktop__yRAo0",icon_Mob:"Header_icon_Mob__BCC6b",isMobile:"Header_isMobile__kakUJ",icon_desktop:"Header_icon_desktop__fOxq7",header_mob_view:"Header_header_mob_view__2JsLx"}},3896:function(e){e.exports={main:"Home_main__2uIek",description_box:"Home_description_box__HP1fz"}},9677:function(e){e.exports={filter:"filter_filter__I1iTR",filter_section:"filter_filter_section__vFtqS",recommended:"filter_recommended__ErRxn",show_filter:"filter_show_filter___bYP7",dropdown_menu:"filter_dropdown_menu__uKJvw",filter_options:"filter_filter_options__b57Wc",bottom_line:"filter_bottom_line___vHIm",filter_mob:"filter_filter_mob__rPVaP",rotate:"filter_rotate__nKG2e"}},5783:function(e){e.exports={product:"item_product__jAyKX",product_list:"item_product_list__PxozR",product_title:"item_product_title__DPM1O",product_details:"item_product_details__tZE7V"}},9008:function(e,s,t){e.exports=t(6665)},5675:function(e,s,t){e.exports=t(9267)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);