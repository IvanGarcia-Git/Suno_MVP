import{v as i,s as l}from"./focusSafely-BGz0Gc4B.js";import{r as s}from"./app-Xg3MWjUp.js";function b(u){let{isDisabled:n,onFocus:e,onBlur:t,onFocusChange:r}=u;const c=s.useCallback(o=>{if(o.target===o.currentTarget)return t&&t(o),r&&r(!1),!0},[t,r]),a=i(c),f=s.useCallback(o=>{const d=l(o.target);o.target===o.currentTarget&&d.activeElement===o.target&&(e&&e(o),r&&r(!0),a(o))},[r,e,a]);return{focusProps:{onFocus:!n&&(e||r||t)?f:void 0,onBlur:!n&&(t||r)?c:void 0}}}export{b as $};