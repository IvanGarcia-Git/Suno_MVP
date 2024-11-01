import{g as Z,b as R}from"./chunk-XHQUSKIE-BJ4pqTDI.js";import{r as u,j as P}from"./app-Xg3MWjUp.js";import{$ as ee,a as ae,b as ie,d as se,C as le}from"./chunk-KBN3H6OQ-qxOJiocu.js";import{$ as re,a as oe,c as ne}from"./focusSafely-BGz0Gc4B.js";import{$ as te}from"./useField-DZWb07f-.js";import{$ as de}from"./VisuallyHidden-DUDGVDCO.js";import{$ as ce,a as ue}from"./useFormValidationState-DKcVms6Q.js";import{u as fe,a as ve,f as be}from"./chunk-N2KXC5ZE-s7KBEtmC.js";import{s as pe}from"./chunk-CAFRINWI-BTDo8zfp.js";function me(e,s){let{isDisabled:r,name:d,validationBehavior:f="aria"}=e,{isInvalid:t,validationErrors:a,validationDetails:v}=s.displayValidation,{labelProps:b,fieldProps:i,descriptionProps:l,errorMessageProps:o}=te({...e,labelElementType:"span",isInvalid:t,errorMessage:e.errorMessage||a});ee.set(s,{name:d,descriptionId:l.id,errorMessageId:o.id,validationBehavior:f});let g=re(e,{labelable:!0}),{focusWithinProps:p}=de({onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});return{groupProps:oe(g,{role:"group","aria-disabled":r||void 0,...i,...p}),labelProps:b,descriptionProps:l,errorMessageProps:o,isInvalid:t,validationErrors:a,validationDetails:v}}function ge(e={}){let[s,r]=ne(e.value,e.defaultValue||[],e.onChange),d=!!e.isRequired&&s.length===0,f=u.useRef(new Map),t=ce({...e,value:s}),a=t.displayValidation.isInvalid;var v;return{...t,value:s,setValue(i){e.isReadOnly||e.isDisabled||r(i)},isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isSelected(i){return s.includes(i)},addValue(i){e.isReadOnly||e.isDisabled||s.includes(i)||r(s.concat(i))},removeValue(i){e.isReadOnly||e.isDisabled||s.includes(i)&&r(s.filter(l=>l!==i))},toggleValue(i){e.isReadOnly||e.isDisabled||(s.includes(i)?r(s.filter(l=>l!==i)):r(s.concat(i)))},setInvalid(i,l){let o=new Map(f.current);l.isInvalid?o.set(i,l):o.delete(i),f.current=o,t.updateValidation(ue(...o.values()))},validationState:(v=e.validationState)!==null&&v!==void 0?v:a?"invalid":null,isInvalid:a,isRequired:d}}function $e(e){var s,r;const d=Z(),{as:f,ref:t,classNames:a,children:v,label:b,radius:i,value:l,name:o,defaultValue:g,isInvalid:p,validationState:y,size:V="md",color:k="primary",orientation:h="vertical",lineThrough:N=!1,isDisabled:O=!1,validationBehavior:x=(s=d==null?void 0:d.validationBehavior)!=null?s:"aria",disableAnimation:I=(r=d==null?void 0:d.disableAnimation)!=null?r:!1,isReadOnly:j,isRequired:M,onValueChange:E,description:L,errorMessage:C,className:T,...$}=e,G=f||"div",z=typeof G=="string",S=fe(t),B=u.useMemo(()=>({...$,value:l,name:o,"aria-label":pe($["aria-label"],b),defaultValue:g,isRequired:M,isReadOnly:j,orientation:h,validationBehavior:x,isInvalid:y==="invalid"||p,onChange:ae(e.onChange,E)}),[l,o,b,g,M,j,h,E,p,y,x,$["aria-label"],$]),n=ge(B),{labelProps:W,groupProps:w,descriptionProps:_,errorMessageProps:F,validationErrors:D,validationDetails:U}=me(B,n),H=u.useMemo(()=>({size:V,color:k,radius:i,lineThrough:N,isInvalid:n.isInvalid,isDisabled:O,disableAnimation:I,validationBehavior:x,groupState:n}),[V,k,i,N,O,I,x,n.value,n.isDisabled,n.isReadOnly,n.isInvalid,n.isSelected]),c=u.useMemo(()=>ie({isRequired:M,isInvalid:n.isInvalid,disableAnimation:I}),[M,n.isInvalid,,I]),q=R(a==null?void 0:a.base,T),J=u.useCallback(()=>({ref:S,className:c.base({class:q}),...se(w,ve($,{enabled:z}))}),[c,S,q,w,$]),K=u.useCallback(()=>({className:c.label({class:a==null?void 0:a.label}),...W}),[c,W,a==null?void 0:a.label]),Q=u.useCallback(()=>({className:c.wrapper({class:a==null?void 0:a.wrapper}),role:"presentation","data-orientation":h}),[c,h,a==null?void 0:a.wrapper]),X=u.useCallback((m={})=>({...m,..._,className:c.description({class:R(a==null?void 0:a.description,m==null?void 0:m.className)})}),[c,_,a==null?void 0:a.description]),Y=u.useCallback((m={})=>({...m,...F,className:c.errorMessage({class:R(a==null?void 0:a.errorMessage,m==null?void 0:m.className)})}),[c,F,a==null?void 0:a.errorMessage]);return{Component:G,children:v,label:b,context:H,description:L,isInvalid:n.isInvalid,errorMessage:typeof C=="function"?C({isInvalid:n.isInvalid,validationErrors:D,validationDetails:U}):C||(D==null?void 0:D.join(" ")),getGroupProps:J,getLabelProps:K,getWrapperProps:Q,getDescriptionProps:X,getErrorMessageProps:Y}}var A=be((e,s)=>{const{children:r,context:d,label:f,description:t,isInvalid:a,errorMessage:v,getGroupProps:b,getLabelProps:i,getWrapperProps:l,getDescriptionProps:o,getErrorMessageProps:g}=$e({...e,ref:s}),p=u.useMemo(()=>v,[a]);return P.jsxs("div",{...b(),children:[f&&P.jsx("span",{...i(),children:f}),P.jsx("div",{...l(),children:P.jsx(le,{value:d,children:r})}),a&&p?P.jsx("div",{...g(),children:p}):t?P.jsx("div",{...o(),children:t}):null]})});A.displayName="NextUI.CheckboxGroup";var Ve=A;export{Ve as c};