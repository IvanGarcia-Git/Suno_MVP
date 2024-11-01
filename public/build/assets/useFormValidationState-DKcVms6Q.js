import{r as s}from"./app-Xg3MWjUp.js";import{d as R,r as g,C as T}from"./focusSafely-BGz0Gc4B.js";function G(t,e,a){let{validationBehavior:i,focus:v}=t;R(()=>{if(i==="native"&&(a!=null&&a.current)){let l=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";a.current.setCustomValidity(l),a.current.hasAttribute("title")||(a.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(j(a.current))}});let r=g(()=>{e.resetValidation()}),u=g(l=>{var n;e.displayValidation.isInvalid||e.commitValidation();let c=a==null||(n=a.current)===null||n===void 0?void 0:n.form;if(!l.defaultPrevented&&a&&c&&F(c)===a.current){var f;v?v():(f=a.current)===null||f===void 0||f.focus(),T("keyboard")}l.preventDefault()}),o=g(()=>{e.commitValidation()});s.useEffect(()=>{let l=a==null?void 0:a.current;if(!l)return;let n=l.form;return l.addEventListener("invalid",u),l.addEventListener("change",o),n==null||n.addEventListener("reset",r),()=>{l.removeEventListener("invalid",u),l.removeEventListener("change",o),n==null||n.removeEventListener("reset",r)}},[a,u,o,r,i])}function U(t){let e=t.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function j(t){return{isInvalid:!t.validity.valid,validationDetails:U(t),validationErrors:t.validationMessage?[t.validationMessage]:[]}}function F(t){for(let e=0;e<t.elements.length;e++){let a=t.elements[e];if(!a.validity.valid)return a}return null}const M={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},C={...M,customError:!0,valid:!1},m={isInvalid:!1,validationDetails:M,validationErrors:[]},Q=s.createContext({}),D="__formValidationState"+Date.now();function H(t){if(t[D]){let{realtimeValidation:e,displayValidation:a,updateValidation:i,resetValidation:v,commitValidation:r}=t[D];return{realtimeValidation:e,displayValidation:a,updateValidation:i,resetValidation:v,commitValidation:r}}return k(t)}function k(t){let{isInvalid:e,validationState:a,name:i,value:v,builtinValidation:r,validate:u,validationBehavior:o="aria"}=t;a&&(e||(e=a==="invalid"));let l=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:C}:null,n=s.useMemo(()=>L(q(u,v)),[u,v]);r!=null&&r.validationDetails.valid&&(r=null);let c=s.useContext(Q),f=s.useMemo(()=>i?Array.isArray(i)?i.flatMap(d=>I(c[d])):I(c[i]):[],[c,i]),[w,A]=s.useState(c),[S,V]=s.useState(!1);c!==w&&(A(c),V(!1));let b=s.useMemo(()=>L(S?[]:f),[S,f]),x=s.useRef(m),[p,E]=s.useState(m),$=s.useRef(m),O=()=>{if(!B)return;y(!1);let d=n||r||x.current;h(d,$.current)||($.current=d,E(d))},[B,y]=s.useState(!1);return s.useEffect(O),{realtimeValidation:l||b||n||r||m,displayValidation:o==="native"?l||b||p:l||b||n||r||p,updateValidation(d){o==="aria"&&!h(p,d)?E(d):x.current=d},resetValidation(){let d=m;h(d,$.current)||($.current=d,E(d)),o==="native"&&y(!1),V(!0)},commitValidation(){o==="native"&&y(!0),V(!0)}}}function I(t){return t?Array.isArray(t)?t:[t]:[]}function q(t,e){if(typeof t=="function"){let a=t(e);if(a&&typeof a!="boolean")return I(a)}return[]}function L(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:C}:null}function h(t,e){return t===e?!0:t&&e&&t.isInvalid===e.isInvalid&&t.validationErrors.length===e.validationErrors.length&&t.validationErrors.every((a,i)=>a===e.validationErrors[i])&&Object.entries(t.validationDetails).every(([a,i])=>e.validationDetails[a]===i)}function J(...t){let e=new Set,a=!1,i={...M};for(let u of t){var v,r;for(let o of u.validationErrors)e.add(o);a||(a=u.isInvalid);for(let o in i)(v=i)[r=o]||(v[r]=u.validationDetails[o])}return i.valid=!a,{isInvalid:a,validationErrors:[...e],validationDetails:i}}export{H as $,J as a,G as b,m as c,D as d};