import{r as u}from"./app-Xg3MWjUp.js";let a=!1,g=0;function p(){a=!0,setTimeout(()=>{a=!1},50)}function m(d){d.pointerType==="touch"&&p()}function T(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",m):document.addEventListener("touchend",p),g++,()=>{g--,!(g>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",m):document.removeEventListener("touchend",p))}}function b(d){let{onHoverStart:v,onHoverChange:i,onHoverEnd:f,isDisabled:r}=d,[H,E]=u.useState(!1),t=u.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;u.useEffect(T,[]);let{hoverProps:$,triggerHoverEnd:h}=u.useMemo(()=>{let c=(e,n)=>{if(t.pointerType=n,r||n==="touch"||t.isHovered||!e.currentTarget.contains(e.target))return;t.isHovered=!0;let s=e.currentTarget;t.target=s,v&&v({type:"hoverstart",target:s,pointerType:n}),i&&i(!0),E(!0)},l=(e,n)=>{if(t.pointerType="",t.target=null,n==="touch"||!t.isHovered)return;t.isHovered=!1;let s=e.currentTarget;f&&f({type:"hoverend",target:s,pointerType:n}),i&&i(!1),E(!1)},o={};return typeof PointerEvent<"u"?(o.onPointerEnter=e=>{a&&e.pointerType==="mouse"||c(e,e.pointerType)},o.onPointerLeave=e=>{!r&&e.currentTarget.contains(e.target)&&l(e,e.pointerType)}):(o.onTouchStart=()=>{t.ignoreEmulatedMouseEvents=!0},o.onMouseEnter=e=>{!t.ignoreEmulatedMouseEvents&&!a&&c(e,"mouse"),t.ignoreEmulatedMouseEvents=!1},o.onMouseLeave=e=>{!r&&e.currentTarget.contains(e.target)&&l(e,"mouse")}),{hoverProps:o,triggerHoverEnd:l}},[v,i,f,r,t]);return u.useEffect(()=>{r&&h({currentTarget:t.target},t.pointerType)},[r]),{hoverProps:$,isHovered:H}}export{b as $};
