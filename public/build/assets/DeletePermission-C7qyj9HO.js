import{W as n,j as s,B as d}from"./app-B73aNjnd.js";import{t as e}from"./translations-CBxNckOR.js";import{m as p,a as c,b as f,c as u,d as h}from"./chunk-P2T5LMDM-DE6aEvc8.js";import{b as t}from"./chunk-DBLREEYE-D6vzpY_n.js";import"./chunk-N2KXC5ZE-DBD4xwut.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./chunk-XHQUSKIE-B16IZcCX.js";import"./useOverlayTriggerState-DhG8YGBS.js";import"./FocusScope-Q_seLLKW.js";import"./focusSafely-ayMLw8ui.js";import"./VisuallyHidden-CVybe5pM.js";import"./useDialog-DinOM5Fu.js";import"./useLabels-CqVFLFT_.js";import"./isScrollable-C-zzJ19Q.js";import"./context-C8SwmHwE.js";import"./getScrollParent-BeofMkPJ.js";import"./chunk-6NL67ZRH-DD6EpadO.js";const R=({isOpen:i,onOpen:x,onOpenChange:a,selectedPermission:l})=>{const{delete:m}=n();return s.jsx(p,{isOpen:i,onOpenChange:a,isDismissable:!1,isKeyboardDismissDisabled:!0,children:s.jsx(c,{children:r=>s.jsxs(s.Fragment,{children:[s.jsx(f,{className:"flex flex-col gap-1 select-none",children:e("Confirm permission deletion")}),s.jsx(u,{className:"pt-0",children:s.jsx("p",{className:"text-sm",children:e("This action may not be undone.")})}),s.jsxs(h,{className:"gap-x-4",children:[s.jsx(t,{fullWidth:!0,variant:"ghost",onPress:r,children:e("Cancel")}),s.jsx(t,{fullWidth:!0,color:"danger",onPress:()=>{m(route("dashboard.permissions.destroy",{permission:l}),{preserveScroll:!0,onSuccess:o=>{o.props.flash&&o.props.flash.success&&d.success(e(o.props.flash.success)),r()}})},children:e("Confirm")})]})]})})})};export{R as DeletePermission};