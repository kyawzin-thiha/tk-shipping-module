(()=>{var e={};e.id=890,e.ids=[890],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},359:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>r.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>c,routeModule:()=>p,tree:()=>o});var i=t(482),a=t(9108),n=t(2563),r=t.n(n),l=t(8300),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);t.d(s,d);let o=["",{children:["(dashboard)",{children:["boxes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5113)),"/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(dashboard)/boxes/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3840)),"/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(dashboard)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(dashboard)/boxes/page.tsx"],h="/(dashboard)/boxes/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(dashboard)/boxes/page",pathname:"/boxes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},246:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},7812:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,1900,23)),Promise.resolve().then(t.t.bind(t,1476,23)),Promise.resolve().then(t.bind(t,4272)),Promise.resolve().then(t.bind(t,5690)),Promise.resolve().then(t.bind(t,9680)),Promise.resolve().then(t.bind(t,4343)),Promise.resolve().then(t.bind(t,4714)),Promise.resolve().then(t.bind(t,1879)),Promise.resolve().then(t.bind(t,459))},632:(e,s,t)=>{Promise.resolve().then(t.bind(t,2305))},2305:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var i=t(5344),a=t(3729),n=t(3908),r=t.n(n),l=t(6303),d=t(4311),o=t(5183),c=t(3427),h=t(3856),u=t(6365),p=t(321),m=t.n(p),x=t(8522),g=t(1232);let b=async()=>{let e=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/box/get-all`,{method:"GET",mode:"cors",credentials:"include",cache:"no-cache"});return e.ok?await e.json():[]};function v(){let[e,s]=(0,a.useState)([]),[t,n]=(0,a.useState)([]),[p,v]=(0,a.useState)(0),[f,k]=(0,a.useState)(""),[A,y]=(0,a.useState)(!1),_=(0,a.useCallback)(r()(s=>{n(e.filter(e=>Object.values(e).some(e=>e?.toString().toLowerCase().includes(s.toLowerCase()))))},500),[e]),N=async()=>{};return(0,a.useEffect)(()=>{(async()=>{let e=await b();s(e),n(e)})()},[p]),i.jsx(u.Z,{title:"Boxes",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:m()["tools-bar"],children:[i.jsx(d.Z,{label:"Search",variant:"outlined",className:"search-field",name:"search",value:f,onChange:e=>{k(e.target.value),_(e.target.value)}}),i.jsx(o.Z,{className:"plus-button",startIcon:i.jsx(h.Z,{}),sx:{background:"#0F172A",color:"white","&:hover":{background:"#0F172A"}},size:"large",onClick:()=>{y(!0)},children:"Box"})]}),i.jsx(l._$,{rows:t,columns:j,autoHeight:!0,disableRowSelectionOnClick:!0,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10,20,50]}),i.jsx(c.Z,{title:"Create New Box",width:"lg",isOpen:A,handleClose:()=>{y(!1)},handleSubmit:N,children:(0,i.jsxs)("div",{className:m()["dialog-content"],children:[i.jsx("div",{className:m().subtitle,children:"Only items with the same Ship Method and Ship Address can be added to the same box."}),i.jsx("hr",{className:m().divider}),i.jsx("div",{className:m().line,children:(0,i.jsxs)("div",{className:m().item,children:[i.jsx("label",{htmlFor:"boxType",className:m().label,children:"Package Type"}),(0,i.jsxs)(x.Z,{labelId:"boxType",id:"boxType",size:"small",name:"boxType",sx:{marginTop:"5px",width:"300px"},children:[i.jsx(g.Z,{value:"Box",children:"Box"}),i.jsx(g.Z,{value:"Roll",children:"Roll"}),i.jsx(g.Z,{value:"Custom",children:"Custom"}),i.jsx(g.Z,{value:"Envelope",children:"Envelope"})]})]})}),i.jsx("div",{className:m().line,children:i.jsx("div",{className:m().item,children:i.jsx(l._$,{rows:t,columns:w,autoHeight:!0,disableRowSelectionOnClick:!0,columnVisibilityModel:{},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10,20,50]})})})]})})]})})}let j=[{field:"name",headerName:"Name",width:200},{field:"contents",headerName:"Contents",width:400,renderCell:e=>i.jsx("div",{style:{whiteSpace:"pre-line"},children:e.value})},{field:"shipMethod",headerName:"Ship Method",width:200},{field:"shipAddress",headerName:"Ship Address",width:300},{field:"shipBy",headerName:"Ship By",width:200,type:"date"}],w=[{field:"id",headerName:"ID",width:0,hideable:!0},{field:"description",headerName:"Description",width:400},{field:"salesOrder",headerName:"SO#",width:150},{field:"qty",headerName:"Qty",type:"number",width:120},{field:"shippingAddress",headerName:"Ship Address",width:300,valueGetter:e=>e.row.isManual?e.row.shippingAddress.split(",").slice(1).join(",").trim():`${e.row.shippingContact?.street}, ${e.row.shippingContact?.city}, ${e.row.shippingContact?.state}, ${e.row.shippingContact?.country}`},{field:"shipBy",headerName:"Ship By",width:150,type:"string",valueGetter:({value:e})=>e&&new Date(e)}]},3427:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var i=t(5344),a=t(5183),n=t(5728),r=t(6141),l=t(6647),d=t(7199);function o({title:e,isOpen:s,handleClose:t,handleSubmit:o,width:c="sm",children:h}){return i.jsx(i.Fragment,{children:(0,i.jsxs)(n.Z,{open:s,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:c,children:[i.jsx(d.Z,{id:"alert-dialog-title",fontWeight:600,sx:{fontSize:"30px"},children:e}),i.jsx(l.Z,{children:h}),i.jsx(r.Z,{children:i.jsx(a.Z,{onClick:o,variant:"contained",sx:{background:"#0F172A","&:hover":{background:"#0F172A"}},children:"Submit"})})]})})}},6365:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var i=t(5344),a=t(6648),n=t.n(a);function r({title:e,children:s}){return(0,i.jsxs)("div",{className:n()["page-wrapper"],id:e.toLowerCase().replace(/\s+/g,"-"),children:[i.jsx("div",{className:n().title,children:e}),i.jsx("div",{className:n().children,children:s})]})}},321:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js):\nError: resolve-url-loader: CSS error\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:85:16)\n    at onFailure (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:71:18)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runNextTicks (node:internal/process/task_queues:64:3)\n    at process.processImmediate (node:internal/timers:447:9)")},7888:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js):\nError: resolve-url-loader: CSS error\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:85:16)\n    at onFailure (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:71:18)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)")},6648:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js):\nError: resolve-url-loader: CSS error\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:85:16)\n    at onFailure (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:71:18)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at runNextTicks (node:internal/process/task_queues:64:3)\n    at process.processImmediate (node:internal/timers:447:9)")},5113:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>n,__esModule:()=>a,default:()=>r});let i=(0,t(6843).createProxy)(String.raw`/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(dashboard)/boxes/page.tsx`),{__esModule:a,$$typeof:n}=i,r=i.default},3840:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>A,metadata:()=>w});var i=t(5036),a=t(41),n=t.n(a);t(5241);var r=t(2813),l=t(6274);let d={src:"/_next/static/media/TKGraphics.a78c0588.png",height:45,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGM8fnvvf21GvvV8Kqb1rm5Of08cO/n395+/fxkg4C/j2aNX/xt+PbOByS2+xt3elv3YqdN/fv9n+AmUBIH/ACehHnpgXMAyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},o={src:"/_next/static/media/item.7f9c5619.svg",height:512,width:448,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/boxes.9a4b10e4.svg",height:512,width:576,blurWidth:0,blurHeight:0},h={src:"/_next/static/media/delivery.73aadcdd.svg",height:512,width:640,blurWidth:0,blurHeight:0},u={src:"/_next/static/media/folder.4cdf9ee1.svg",height:512,width:576,blurWidth:0,blurHeight:0},p={src:"/_next/static/media/search.db75639c.svg",height:512,width:512,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/logout.bdb39ca4.svg",height:512,width:512,blurWidth:0,blurHeight:0};var x=t(7888),g=t.n(x);function b({user:e}){return i.jsx("nav",{className:g()["nav-container"],children:(0,i.jsxs)("div",{className:g().nav,children:[i.jsx("div",{className:g()["logo-container"],children:i.jsx(r.default,{src:d,alt:"Logo",fill:!0})}),(0,i.jsxs)("div",{className:g()["user-container"],children:[i.jsx("div",{className:g().profile}),i.jsx("div",{className:g().name,children:e})]}),(0,i.jsxs)("div",{className:g()["menu-container"],children:[(0,i.jsxs)(l.default,{href:"/",className:g().link,children:[i.jsx("div",{className:g().icon,children:i.jsx(r.default,{src:o,alt:"Items"})}),i.jsx("div",{className:g().text,children:"Items"})]}),(0,i.jsxs)(l.default,{href:"/boxes",className:g().link,children:[i.jsx("div",{className:g().icon,children:i.jsx(r.default,{src:c,alt:"Boxes"})}),i.jsx("div",{className:g().text,children:"Boxes"})]}),(0,i.jsxs)(l.default,{href:"/deliveries",className:g().link,children:[i.jsx("div",{className:g().icon,children:i.jsx(r.default,{src:h,alt:"Deliveries"})}),i.jsx("div",{className:g().text,children:"Deliveries"})]})]}),i.jsx("hr",{className:g().divider}),(0,i.jsxs)("div",{className:g()["menu-container"],children:[(0,i.jsxs)(l.default,{href:"/reports",className:g().link,children:[i.jsx("div",{className:g().icon,children:i.jsx(r.default,{src:u,alt:"Reports"})}),i.jsx("div",{className:g().text,children:"Reports"})]}),(0,i.jsxs)(l.default,{href:"/history",className:g().link,children:[i.jsx("div",{className:g().icon,children:i.jsx(r.default,{src:p,alt:"History"})}),i.jsx("div",{className:g().text,children:"History"})]})]}),i.jsx("hr",{className:g().divider}),i.jsx("div",{className:g()["menu-container"],children:(0,i.jsxs)("button",{className:g().link,children:[i.jsx("div",{className:g().icon,children:i.jsx(r.default,{src:m,alt:"LogOut"})}),i.jsx("div",{className:g().text,children:"Logout"})]})})]})})}var v=t(7439),j=t(867);let w={title:"T.K. Graphics",description:"T.K. Graphics - Pack the items and ship them in one place"},f=async e=>(await fetch(`${process.env.API_URL}/auth/authenticate`,{method:"GET",headers:{"Content-Type":"application/json",Cookie:`token=${e}`},credentials:"include",mode:"cors",cache:"no-cache"})).ok,k=async e=>{let s=await fetch(`${process.env.API_URL}/user`,{method:"GET",headers:{"Content-Type":"application/json",Cookie:`token=${e}`},credentials:"include",mode:"cors",cache:"no-cache"});return s.ok?await s.json():null};async function A({children:e}){let s=(0,v.cookies)(),t=s.get("token")?.value;t||(0,j.redirect)("/login"),await f(t)||(0,j.redirect)("/login");let a=await k(t);return i.jsx("html",{lang:"en",children:(0,i.jsxs)("body",{className:n().className,children:[i.jsx(b,{user:a.name}),i.jsx("main",{children:e})]})})}},4272:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/boxes.9a4b10e4.svg",height:512,width:576,blurWidth:0,blurHeight:0}},5690:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/delivery.73aadcdd.svg",height:512,width:640,blurWidth:0,blurHeight:0}},9680:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/folder.4cdf9ee1.svg",height:512,width:576,blurWidth:0,blurHeight:0}},4343:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/item.7f9c5619.svg",height:512,width:448,blurWidth:0,blurHeight:0}},4714:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/logout.bdb39ca4.svg",height:512,width:512,blurWidth:0,blurHeight:0}},1879:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/search.db75639c.svg",height:512,width:512,blurWidth:0,blurHeight:0}},459:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i={src:"/_next/static/media/TKGraphics.a78c0588.png",height:45,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGM8fnvvf21GvvV8Kqb1rm5Of08cO/n395+/fxkg4C/j2aNX/xt+PbOByS2+xt3elv3YqdN/fv9n+AmUBIH/ACehHnpgXMAyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},5241:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[22,968,882,754,292],()=>t(359));module.exports=i})();