import{j as s,q as u,W as h,d as j,B as v}from"./app-Xg3MWjUp.js";import{t as d}from"./translations-CBxNckOR.js";import{c as N}from"./chunk-J333S7JQ-CHBYUrki.js";import{u as g,c as y,a as _}from"./chunk-H4VOEXHF-BKPwUzkW.js";import{f as b,u as S}from"./chunk-N2KXC5ZE-s7KBEtmC.js";import{b as C}from"./chunk-XHQUSKIE-BJ4pqTDI.js";import{b as F}from"./chunk-DBLREEYE-kXYMn-PH.js";import"./chunk-6NL67ZRH-C6QNaIJW.js";import"./extend-tailwind-merge-DDA0jNcl.js";var m=b((a,n)=>{var o;const{as:t,className:r,children:e,...l}=a,p=t||"div",f=S(n),{slots:c,classNames:i}=g(),x=C(i==null?void 0:i.footer,r);return s.jsx(p,{ref:f,className:(o=c.footer)==null?void 0:o.call(c,{class:x}),...l,children:e})});m.displayName="NextUI.CardFooter";var M=m;const z=()=>{const{sessions:a,user:n}=u().props,{delete:o}=h(),t=r=>{o(route("dashboard.session.invalidate",{id:r}),{only:["sessions"],preserveScroll:!0,onSuccess:e=>{e.props.flash&&e.props.flash.success&&v.success(d(e.props.flash.success))},onError:e=>console.log("error",e)})};return a.length?s.jsx(s.Fragment,{children:s.jsxs(y,{shadow:"none",children:[s.jsx(N,{className:"px-8 pt-5",children:d("Sessions")}),s.jsx(_,{className:"space-y-3 py-1 pl-8 pr-6",children:a.map(({id:r,ip_address:e,last_activity:l})=>s.jsxs("div",{className:"flex gap-5 justify-between items-center",children:[s.jsxs("div",{className:"text-sm font-light space-x-3",children:[s.jsx("i",{className:"ri-mac-line ri-xl"}),s.jsx("span",{children:e})]}),s.jsxs("div",{className:"space-x-4",children:[s.jsx("span",{className:"text-sm text-foreground-500",children:j(l).format("YYYY-MM-DD")}),s.jsx(F,{isIconOnly:!0,color:"danger",size:"sm",radius:"lg",variant:"light",onPress:()=>t(r),children:s.jsx("i",{className:"ri-delete-bin-2-line ri-xl"})})]})]},r))}),s.jsx(M,{})]})}):s.jsx(s.Fragment,{})};export{z as SessionsManager};