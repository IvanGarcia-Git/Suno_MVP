import{q as f,r as h,j as e,y as c,B as n}from"./app-Xg3MWjUp.js";import{u as x,a as g}from"./blank-462x265-MGC9sivR.js";import{t as r}from"./translations-CBxNckOR.js";import{c as j,a as N}from"./chunk-H4VOEXHF-BKPwUzkW.js";import{c as y}from"./chunk-J333S7JQ-CHBYUrki.js";import{i as v}from"./chunk-NK4BRF7C-CHSWDFnF.js";import{c as t}from"./chunk-3XVMTUU7-Dp_cF4cz.js";import{c as l}from"./chunk-4WFLSIHH-pHsL0tlp.js";import"./chunk-N2KXC5ZE-s7KBEtmC.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./chunk-XHQUSKIE-BJ4pqTDI.js";import"./chunk-6NL67ZRH-C6QNaIJW.js";import"./index-vhBEzfuR.js";import"./index-0WiR-nh7.js";import"./chunk-M3MASYO7-CHsWdAdY.js";const q=()=>{const s=f().props.auth.user,{fullName:p}=x(s),o=h.useRef(null),m=()=>{c.delete(route("profile.remove_image"),{onSuccess:a=>{a.props.flash&&a.props.flash.success&&n.success(r(a.props.flash.success))},onError:a=>console.log(a)})},d=()=>{o.current&&o.current.click()},u=a=>{a?c.post(route("profile.update_image"),{profile_picture:a},{forceFormData:!0,onSuccess:i=>{i.props.flash&&i.props.flash.success&&n.success(r(i.props.flash.success))},onError:i=>console.log(i)}):console.error("Attempted to update image with null file")};return e.jsx(e.Fragment,{children:e.jsxs(j,{shadow:"none",children:[e.jsxs(y,{className:"pb-4 flex-col p-0 relative group",children:[e.jsx(v,{width:"100%",height:350,removeWrapper:!0,classNames:{img:t("w-full h-full rounded-b-none rounded-t-lg object-cover object-top")},src:s.profile_picture?`/storage/img/users/avatars/${s.profile_picture}`:g}),e.jsx("input",{ref:o,type:"file",style:{height:0,visibility:"hidden"},onChange:a=>{const i=a.target;i.files&&u(i.files[0])}}),e.jsx("div",{className:t("bg-gradient-to-t from-black/60 to-transparent","flex-1 space-y-4 p-5 pt-20 inset-x-0 bottom-0 absolute z-10","transition-opacity group-hover:opacity-100",s.profile_picture&&"opacity-0"),children:e.jsxs("div",{className:"flex gap-x-3 justify-between",children:[e.jsx(l,{size:"sm",color:"primary",avatar:e.jsx(e.Fragment,{children:e.jsx("i",{className:"ri-image-line ri-lg ml-1 -top-px relative"})}),className:t("cursor-pointer select-none md:order-2","hover:opacity-90 focus:opacity-50 active:opacity-disabled"),onClick:d,children:s.profile_picture?r("Change picture"):r("Add profile image")}),e.jsx("div",{children:s.profile_picture&&e.jsx(l,{size:"sm",color:"danger",avatar:e.jsx(e.Fragment,{children:e.jsx("i",{className:"ri-delete-bin-2-line ri-lg ml-1 -top-px relative"})}),className:"cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled",onClick:m,children:r("Remove picture")})})]})})]}),e.jsx(N,{children:e.jsxs("ul",{className:"text-sm px-5 pt-6 pb-10 space-y-5 [&>li]:flex [&>li]:justify-between",children:[e.jsxs("li",{children:[e.jsx("span",{className:"text-foreground-500",children:r("Username")}),e.jsxs("span",{className:"font-light",children:["@",s.username]})]}),s.roles&&e.jsxs("li",{children:[e.jsx("span",{className:"text-foreground-500",children:r("Role")}),e.jsx(l,{size:"sm",color:"primary",variant:"flat",className:"h-5 px-1.5",children:s.roles[0].name})]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-foreground-500",children:r("Name")}),e.jsx("span",{className:"font-light",children:p})]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-foreground-500",children:r("Email")}),e.jsx("span",{className:"font-light",children:s.email})]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-foreground-500",children:r("Phone")}),e.jsx("span",{className:"font-light",children:s.phone})]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-foreground-500",children:r("Company")}),e.jsx("span",{className:"font-light",children:s.company})]})]})})]})})};export{q as ProfileCard};