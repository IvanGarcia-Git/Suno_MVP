import{W as c,j as e,a as p}from"./app-Xg3MWjUp.js";import{t as r}from"./translations-CBxNckOR.js";import{AuthLayout1 as s}from"./AuthLayout1-CwbUt1o-.js";import{AuthLayout2 as u}from"./AuthLayout2-Iraiu9Cx.js";import{AuthLayout3 as d}from"./AuthLayout3-BUeP4xAG.js";import{StatusMessage as h}from"./StatusMessage-D5INSiNc.js";import{b as a}from"./chunk-DBLREEYE-kXYMn-PH.js";import"./useColorMode-BDGS6CE1.js";import"./Toastify-wwolvz7v.js";import"./template.executive.config-JRgdiSJO.js";import"./chunk-3XVMTUU7-Dp_cF4cz.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./pexels-pramodtiwari-14127564-Cp2S16Fb.js";import"./chunk-XHQUSKIE-BJ4pqTDI.js";import"./chunk-N2KXC5ZE-s7KBEtmC.js";import"./chunk-6NL67ZRH-C6QNaIJW.js";const i=r("Email Verification").toString(),x=({status:t,layout:f})=>{const{post:o,processing:m}=c({}),l=n=>{n.preventDefault(),o(route("verification.send"),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-72 space-y-7",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm",children:r("email-verification-message-0")}),e.jsx("p",{className:"text-sm",children:r("email-verification-message-1")}),e.jsx("p",{className:"text-sm",children:r("email-verification-message-2")})]}),t&&e.jsx(h,{status:t}),e.jsx("form",{onSubmit:l,children:e.jsx(a,{type:"submit",color:"primary",fullWidth:!0,isLoading:m,children:r("Resend Verification Email")})})]}),e.jsx("div",{className:"text-center",children:e.jsx(a,{as:p,disableRipple:!0,color:"primary",variant:"light",className:"p-0 h-auto hover:!bg-transparent",href:route("login"),children:r("Already registered?")})})]})};x.layout=t=>{switch(t.props.layout){case"layout1":return e.jsx(s,{children:t,pageTitle:i});case"layout2":return e.jsx(u,{children:t,pageTitle:i});case"layout3":return e.jsx(d,{children:t,pageTitle:i});default:return e.jsx(s,{children:t,pageTitle:i})}};export{x as default};