(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5033:function(e,r,t){Promise.resolve().then(t.bind(t,4128))},4128:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return S}});var s=t(3827),i=t(4090),a=t(2169);let n={spinner:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})};var o=t(575),l=t(2782),d=t(7907),c=t(1270),u=t(9143),A=t(2670),m=t(4602);let f=(0,t(7742).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,s.jsx)(m.f,{ref:r,className:(0,a.cn)(f(),t),...i})});g.displayName=m.f.displayName;let x=A.RV,h=i.createContext({}),p=e=>{let{...r}=e;return(0,s.jsx)(h.Provider,{value:{name:r.name},children:(0,s.jsx)(A.Qr,{...r})})},b=()=>{let e=i.useContext(h),r=i.useContext(v),{getFieldState:t,formState:s}=(0,A.Gc)(),a=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=r;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...a}},v=i.createContext({}),j=i.forwardRef((e,r)=>{let{className:t,...n}=e,o=i.useId();return(0,s.jsx)(v.Provider,{value:{id:o},children:(0,s.jsx)("div",{ref:r,className:(0,a.cn)("space-y-2",t),...n})})});j.displayName="FormItem";let w=i.forwardRef((e,r)=>{let{className:t,...i}=e,{error:n,formItemId:o}=b();return(0,s.jsx)(g,{ref:r,className:(0,a.cn)(n&&"text-destructive",t),htmlFor:o,...i})});w.displayName="FormLabel";let y=i.forwardRef((e,r)=>{let{...t}=e,{error:i,formItemId:a,formDescriptionId:n,formMessageId:o}=b();return(0,s.jsx)(u.g7,{ref:r,id:a,"aria-describedby":i?"".concat(n," ").concat(o):"".concat(n),"aria-invalid":!!i,...t})});y.displayName="FormControl",i.forwardRef((e,r)=>{let{className:t,...i}=e,{formDescriptionId:n}=b();return(0,s.jsx)("p",{ref:r,id:n,className:(0,a.cn)("text-sm text-muted-foreground",t),...i})}).displayName="FormDescription";let N=i.forwardRef((e,r)=>{let{className:t,children:i,...n}=e,{error:o,formMessageId:l}=b(),d=o?String(null==o?void 0:o.message):i;return d?(0,s.jsx)("p",{ref:r,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",t),...n,children:d}):null});N.displayName="FormMessage";var C=t(248),I=t(8009);t(5355);var E=(0,t(3472).$)("945411b12714dcc8434ecd47da48fcbf7f2b4fb7");let k=C.Ry({email:C.Z_().email("Invalid email!"),password:C.Z_()});function B(e){let{className:r,...t}=e,i=(0,d.useRouter)(),u=(0,A.cI)({resolver:(0,c.F)(k)});async function m(e){await I.default.promise(E({username:e.email,password:e.password,info:{type:"admin"}}),{loading:"Loging in...",success:(0,s.jsx)("b",{children:"Logged in!"}),error:e=>(i.refresh(),(0,s.jsx)("b",{children:e.message||"Uh oh! Wrong credentials."}))}),i.replace("/dashboard")}return(0,s.jsx)("div",{className:(0,a.cn)("grid gap-6",r),...t,children:(0,s.jsx)(x,{...u,children:(0,s.jsx)("form",{onSubmit:u.handleSubmit(m),children:(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)("div",{className:"grid gap-1",children:(0,s.jsx)(p,{control:u.control,name:"email",render:e=>{let{field:r}=e;return(0,s.jsxs)(j,{children:[(0,s.jsx)(w,{children:"Email"}),(0,s.jsx)(y,{children:(0,s.jsx)(l.I,{type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:u.formState.isSubmitting,placeholder:"Email",...r})}),(0,s.jsx)(N,{})]})}})}),(0,s.jsx)("div",{className:"grid gap-1",children:(0,s.jsx)(p,{control:u.control,name:"password",render:e=>{let{field:r}=e;return(0,s.jsxs)(j,{children:[(0,s.jsx)(w,{children:"Password"}),(0,s.jsx)(y,{children:(0,s.jsx)(l.I,{type:"password",autoCapitalize:"none",autoComplete:"password",autoCorrect:"off",disabled:u.formState.isSubmitting,placeholder:"Password",...r})}),(0,s.jsx)(N,{})]})}})}),(0,s.jsxs)(o.z,{type:"submit",disabled:u.formState.isSubmitting,className:"text-black",children:[u.formState.isSubmitting&&(0,s.jsx)(n.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Login"]})]})})})})}var F=t(703),Q={src:"/_next/static/media/couple.110ffaa7.jpg",height:3360,width:5040,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJIT/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQMCBBEAIv/aAAgBAQABPwBbU1nSRFGrNUM9S0iW53//xAAYEQACAwAAAAAAAAAAAAAAAAABAwACMf/aAAgBAgEBPwApUdrP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAITUf/aAAgBAwEBPwCj6f/Z",blurWidth:8,blurHeight:5};function S(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0",children:[(0,s.jsxs)("div",{className:"relative hidden h-full flex-col bg-muted p-10 text-slate-950 dark:border-r lg:flex",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-cover",children:(0,s.jsx)(F.default,{alt:"bg",src:Q,priority:!0,className:"w-full h-full object-cover"})}),(0,s.jsx)("div",{className:"relative z-20 flex items-center text-2xl font-medium",children:(0,s.jsx)(F.default,{alt:"logo",src:"/images/logo-white.png",width:150,height:150,priority:!0})})]}),(0,s.jsx)("div",{className:"lg:p-8",children:(0,s.jsxs)("div",{className:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,s.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Admin Login"}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:"Login into your account"})]}),(0,s.jsx)(B,{})]})})]})})}},575:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var s=t(3827),i=t(4090),a=t(9143),n=t(7742),o=t(2169);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,r)=>{let{className:t,variant:i,size:n,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:i,size:n,className:t})),ref:r,...c})});d.displayName="Button"},2782:function(e,r,t){"use strict";t.d(r,{I:function(){return n}});var s=t(3827),i=t(4090),a=t(2169);let n=i.forwardRef((e,r)=>{let{className:t,type:i,...n}=e;return(0,s.jsx)("input",{type:i,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});n.displayName="Input"},2169:function(e,r,t){"use strict";t.d(r,{V:function(){return n},cn:function(){return a}});var s=t(3167),i=t(1367);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m6)((0,s.W)(r))}let n=[{active:!0,icon:"/images/dashboard.svg",key:"dashboard",url:"/dashboard",name:"Dashboard"},{active:!0,icon:"/images/users.svg",key:"users",url:"/users",name:"Users"},{active:!1,icon:"/images/matches.svg",key:"matches",url:"/matches",name:"Matches"}]}},function(e){e.O(0,[749,376,9,924,971,69,744],function(){return e(e.s=5033)}),_N_E=e.O()}]);