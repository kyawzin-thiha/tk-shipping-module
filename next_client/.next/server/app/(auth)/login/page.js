(()=>{var e={};e.id=665,e.ids=[665],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9217:e=>{e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},2698:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var s=n(482),i=n(9108),r=n(2563),a=n.n(r),o=n(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let d=["",{children:["(auth)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,2169)),"/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(auth)/login/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,4295)),"/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(auth)/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(auth)/login/page.tsx"],c="/(auth)/login/page",h={require:n,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(auth)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},246:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},829:()=>{},8315:(e,t,n)=>{Promise.resolve().then(n.bind(n,3473))},6506:(e,t,n)=>{"use strict";n.d(t,{default:()=>i.a});var s=n(1476),i=n.n(s)},8428:(e,t,n)=>{"use strict";var s=n(4767);n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}})},3473:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var s=n(5344),i=n(6506),r=n(4311),a=n(5183),o=n(8666),l=n.n(o),d=n(3729),u=n(8428);let c=async e=>(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),mode:"cors",credentials:"include"})).ok;function h(){let e=(0,u.useRouter)(),[t,n]=(0,d.useState)({identifier:"",password:""}),o=e=>{n({...t,[e.target.name]:e.target.value})},h=async n=>{n.preventDefault(),await c(t)&&e.replace("/")};return(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:l().title,children:"Login"}),(0,s.jsxs)("form",{className:l()["form-container"],onSubmit:h,children:[s.jsx("div",{className:l().input,children:s.jsx(r.Z,{label:"Username",variant:"outlined",fullWidth:!0,required:!0,name:"identifier",onChange:o})}),s.jsx("div",{className:l().input,children:s.jsx(r.Z,{label:"Password",variant:"outlined",fullWidth:!0,required:!0,name:"password",onChange:o})}),s.jsx("div",{className:l().button,children:s.jsx(a.Z,{variant:"contained",type:"submit",fullWidth:!0,children:"Login"})}),s.jsx("hr",{className:l().divider}),s.jsx("div",{className:l().button,children:s.jsx(i.default,{href:"/register",children:s.jsx(a.Z,{variant:"contained",fullWidth:!0,type:"button",sx:{background:"#B5E3C8","&:hover":{background:"#B5E3C8"}},disableElevation:!0,children:"Register"})})})]})]})}},9687:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js):\nError: resolve-url-loader: CSS error\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:85:16)\n    at onFailure (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:71:18)")},8666:()=>{throw Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js):\nError: resolve-url-loader: CSS error\n  PostCSS received undefined instead of CSS string\n  at new Input (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/postcss/lib/input.js:24:13)\n    at encodeError (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:85:16)\n    at onFailure (/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js:71:18)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)")},4295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h,metadata:()=>u});var s=n(5036),i=n(9217),r=n.n(i),a=n(9687),o=n.n(a),l=n(867),d=n(7439);let u={title:"T.K. Graphics - Login",description:"Login to your account."},c=async e=>(await fetch(`${process.env.API_URL}/auth/authenticate`,{method:"GET",headers:{"Content-Type":"application/json",Cookie:`token=${e}`},credentials:"include",mode:"cors",cache:"no-cache"})).ok;async function h({children:e}){let t=(0,d.cookies)(),n=t.get("token")?.value;return await c(n)&&(0,l.redirect)("/"),s.jsx("html",{lang:"en",children:s.jsx("body",{className:r().className,children:s.jsx("main",{children:s.jsx("div",{className:o().form,children:e})})})})}},2169:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>r,__esModule:()=>i,default:()=>a});let s=(0,n(6843).createProxy)(String.raw`/Users/kyawzinthiha/Desktop/KyawZinThiha/tk-shipping-module/next_client/src/app/(auth)/login/page.tsx`),{__esModule:i,$$typeof:r}=s,a=s.default}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[22,968,754],()=>n(2698));module.exports=s})();