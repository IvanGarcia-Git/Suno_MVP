import{r as c,j as b,R as Se,c as De,Y as Me}from"./app-Xg3MWjUp.js";import{$ as Ie,t as _e,a as ke,b as Ae,c as re,d as He,e as Ne,f as ae}from"./chunk-YRZGWF2W-DLIyo9wq.js";import{t as je,f as X,u as Z,a as fe,m as We,o as Oe}from"./chunk-N2KXC5ZE-s7KBEtmC.js";import{L as ne,u as Re,d as Ve,a as oe,c as k,b as M,e as T,f as Be,m as Ue,g as Ge}from"./chunk-XHQUSKIE-BJ4pqTDI.js";import{$ as ze,a as ee,b as Ye,c as qe}from"./focusSafely-BGz0Gc4B.js";import{$ as be}from"./useLabels-C083MLIf.js";import{$ as Je}from"./usePress-D8L0wOwc.js";import{$ as Qe,a as Xe,b as Ze}from"./Item-CbXxQ6F7.js";import{u as et}from"./index-WJSP6HuD.js";import{d as tt,l as rt}from"./layout-jxVw8Mvo.js";import{$ as at}from"./useListState-BwMmBE1_.js";import{$ as nt}from"./FocusScope-B94nuPOP.js";import"./getChildNodes-D9Y5kHi7.js";import"./isScrollable-BprAQSS1.js";import"./textSelection-CcPLNbaN.js";import"./useFocusable-DL-dGcJ1.js";import"./useSyncRef-BzsjkglV.js";import"./useFocus-nnqdAYxR.js";import"./getScrollParent-BcD73RX6.js";import"./chunk-KBN3H6OQ-qxOJiocu.js";import"./useToggleState-B8OVgiR9.js";import"./index-BKmmPl89.js";import"./index-0WiR-nh7.js";import"./chunk-CAFRINWI-BTDo8zfp.js";import"./useFormValidationState-DKcVms6Q.js";import"./chunk-CIZQCQPA-C7Ey7jFP.js";import"./VisuallyHidden-DUDGVDCO.js";import"./chunk-7F3ZLNJ6-BDbQD4Kz.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./context-CiZxFy97.js";const ot=c.createContext(null),st=t=>!t.isLayoutDirty&&t.willUpdate(!1);function se(){const t=new Set,e=new WeakMap,r=()=>t.forEach(st);return{add:a=>{t.add(a),e.set(a,a.addEventListener("willUpdate",r))},remove:a=>{t.delete(a);const n=e.get(a);n&&(n(),e.delete(a)),r()},dirty:r}}const pe=t=>t===!0,it=t=>pe(t===!0)||t==="id",lt=({children:t,id:e,inherit:r=!0})=>{const a=c.useContext(ne),n=c.useContext(ot),[s,i]=Re(),o=c.useRef(null),d=a.id||n;o.current===null&&(it(r)&&d&&(e=e?d+"-"+e:d),o.current={id:e,group:pe(r)&&a.group||se()});const l=c.useMemo(()=>({...o.current,forceRender:s}),[i]);return b.jsx(ne.Provider,{value:l,children:t})},dt={...Ve,...tt,...rt};var ie=je({slots:{base:"inline-flex",tabList:["flex","p-1","h-fit","gap-2","items-center","flex-nowrap","overflow-x-scroll","scrollbar-hide","bg-default-100"],tab:["z-0","w-full","px-3","py-1","flex","group","relative","justify-center","items-center","outline-none","cursor-pointer","transition-opacity","tap-highlight-transparent","data-[disabled=true]:cursor-not-allowed","data-[disabled=true]:opacity-30","data-[hover-unselected=true]:opacity-disabled",...oe],tabContent:["relative","z-10","text-inherit","whitespace-nowrap","transition-colors","text-default-500","group-data-[selected=true]:text-foreground"],cursor:["absolute","z-0","bg-white"],panel:["py-3","px-1","outline-none","data-[inert=true]:hidden",...oe],wrapper:[]},variants:{variant:{solid:{cursor:"inset-0"},light:{tabList:"bg-transparent dark:bg-transparent",cursor:"inset-0"},underlined:{tabList:"bg-transparent dark:bg-transparent",cursor:"h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"},bordered:{tabList:"bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",cursor:"inset-0"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{tabList:"rounded-medium",tab:"h-7 text-tiny rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"h-8 text-small rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"h-9 text-medium rounded-medium",cursor:"rounded-medium"}},radius:{none:{tabList:"rounded-none",tab:"rounded-none",cursor:"rounded-none"},sm:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"rounded-medium",cursor:"rounded-medium"},full:{tabList:"rounded-full",tab:"rounded-full",cursor:"rounded-full"}},fullWidth:{true:{base:"w-full",tabList:"w-full"}},isDisabled:{true:{tabList:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{tab:"transition-none",tabContent:"transition-none"}},placement:{top:{},start:{tabList:"flex-col",panel:"py-0 px-3",wrapper:"flex"},end:{tabList:"flex-col",panel:"py-0 px-3",wrapper:"flex flex-row-reverse"},bottom:{wrapper:"flex flex-col-reverse"}}},defaultVariants:{color:"default",variant:"solid",size:"md",fullWidth:!1,isDisabled:!1},compoundVariants:[{variant:["solid","bordered","light"],color:"default",class:{cursor:["bg-background","dark:bg-default","shadow-small"],tabContent:"group-data-[selected=true]:text-default-foreground"}},{variant:["solid","bordered","light"],color:"primary",class:{cursor:k.solid.primary,tabContent:"group-data-[selected=true]:text-primary-foreground"}},{variant:["solid","bordered","light"],color:"secondary",class:{cursor:k.solid.secondary,tabContent:"group-data-[selected=true]:text-secondary-foreground"}},{variant:["solid","bordered","light"],color:"success",class:{cursor:k.solid.success,tabContent:"group-data-[selected=true]:text-success-foreground"}},{variant:["solid","bordered","light"],color:"warning",class:{cursor:k.solid.warning,tabContent:"group-data-[selected=true]:text-warning-foreground"}},{variant:["solid","bordered","light"],color:"danger",class:{cursor:k.solid.danger,tabContent:"group-data-[selected=true]:text-danger-foreground"}},{variant:"underlined",color:"default",class:{cursor:"bg-foreground",tabContent:"group-data-[selected=true]:text-foreground"}},{variant:"underlined",color:"primary",class:{cursor:"bg-primary",tabContent:"group-data-[selected=true]:text-primary"}},{variant:"underlined",color:"secondary",class:{cursor:"bg-secondary",tabContent:"group-data-[selected=true]:text-secondary"}},{variant:"underlined",color:"success",class:{cursor:"bg-success",tabContent:"group-data-[selected=true]:text-success"}},{variant:"underlined",color:"warning",class:{cursor:"bg-warning",tabContent:"group-data-[selected=true]:text-warning"}},{variant:"underlined",color:"danger",class:{cursor:"bg-danger",tabContent:"group-data-[selected=true]:text-danger"}},{disableAnimation:!0,variant:"underlined",class:{tab:["after:content-['']","after:absolute","after:bottom-0","after:h-[2px]","after:w-[80%]","after:opacity-0","after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]","data-[selected=true]:after:opacity-100"]}},{disableAnimation:!0,color:"default",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-default data-[selected=true]:text-default-foreground"}},{disableAnimation:!0,color:"primary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"}},{disableAnimation:!0,color:"secondary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground"}},{disableAnimation:!0,color:"success",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-success data-[selected=true]:text-success-foreground"}},{disableAnimation:!0,color:"warning",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground"}},{disableAnimation:!0,color:"danger",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground"}},{disableAnimation:!0,color:"default",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-foreground"}},{disableAnimation:!0,color:"primary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-primary"}},{disableAnimation:!0,color:"secondary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-secondary"}},{disableAnimation:!0,color:"success",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-success"}},{disableAnimation:!0,color:"warning",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-warning"}},{disableAnimation:!0,color:"danger",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-danger"}}],compoundSlots:[{variant:"underlined",slots:["tab","tabList","cursor"],class:["rounded-none"]}]});const ve=typeof document<"u"?Se.useLayoutEffect:()=>{};function ut(t){const e=c.useRef(null);return ve(()=>{e.current=t},[t]),c.useCallback((...r)=>{const a=e.current;return a==null?void 0:a(...r)},[])}let le=new Map;function ct(t,e){if(t===e)return t;let r=le.get(t);if(r)return r(e),e;let a=le.get(e);return a?(a(t),t):e}function me(...t){return(...e)=>{for(let r of t)typeof r=="function"&&r(...e)}}const H=t=>{var e;return(e=t==null?void 0:t.ownerDocument)!==null&&e!==void 0?e:document},F=t=>t&&"window"in t&&t.window===t?t:H(t).defaultView||window;function W(...t){let e={...t[0]};for(let r=1;r<t.length;r++){let a=t[r];for(let n in a){let s=e[n],i=a[n];typeof s=="function"&&typeof i=="function"&&n[0]==="o"&&n[1]==="n"&&n.charCodeAt(2)>=65&&n.charCodeAt(2)<=90?e[n]=me(s,i):(n==="className"||n==="UNSAFE_className")&&typeof s=="string"&&typeof i=="string"?e[n]=De(s,i):n==="id"&&s&&i?e.id=ct(s,i):e[n]=i!==void 0?i:s}}return e}function ft(t){var e;return typeof window>"u"||window.navigator==null?!1:((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.brands.some(r=>t.test(r.brand)))||t.test(window.navigator.userAgent)}function bt(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function pt(){return bt(/^Mac/i)}function vt(){return ft(/Android/i)}function mt(t){return t.mozInputSource===0&&t.isTrusted?!0:vt()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}const ge=new WeakMap;function O(t,e,r){return typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${ge.get(t)}-${r}-${e}`}function gt(t,e,r){let{key:a,isDisabled:n,shouldSelectOnPressUp:s}=t,{selectionManager:i,selectedKey:o}=e,d=a===o,l=n||e.isDisabled||e.selectionManager.isDisabled(a),{itemProps:f,isPressed:v}=Qe({selectionManager:i,key:a,ref:r,isDisabled:l,shouldSelectOnPressUp:s,linkBehavior:"selection"}),m=O(e,a,"tab"),u=O(e,a,"tabpanel"),{tabIndex:p}=f,g=e.collection.getItem(a),E=ze(g==null?void 0:g.props,{labelable:!0});delete E.id;let P=Je(g==null?void 0:g.props);return{tabProps:ee(E,P,f,{id:m,"aria-selected":d,"aria-disabled":l||void 0,"aria-controls":d?u:void 0,tabIndex:l?void 0:p,role:"tab"}),isSelected:d,isDisabled:l,isPressed:v}}function ht(t,e,r){let a=Ie(r)?void 0:0;var n;const s=O(e,(n=t.id)!==null&&n!==void 0?n:e==null?void 0:e.selectedKey,"tabpanel"),i=be({...t,id:s,"aria-labelledby":O(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:ee(i,{tabIndex:a,role:"tabpanel","aria-describedby":t["aria-describedby"],"aria-details":t["aria-details"]})}}class yt{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}isDisabled(e){var r,a;return this.disabledKeys.has(e)||!!(!((a=this.collection.getItem(e))===null||a===void 0||(r=a.props)===null||r===void 0)&&r.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,r,a,n=new Set){this.collection=e,this.flipDirection=r==="rtl"&&a==="horizontal",this.disabledKeys=n}}function $t(t,e,r){let{orientation:a="horizontal",keyboardActivation:n="automatic"}=t,{collection:s,selectionManager:i,disabledKeys:o}=e,{direction:d}=nt(),l=c.useMemo(()=>new yt(s,d,a,o),[s,o,a,d]),{collectionProps:f}=Xe({ref:r,selectionManager:i,keyboardDelegate:l,selectOnFocus:n==="automatic",disallowEmptySelection:!0,scrollRef:r,linkBehavior:"selection"}),v=Ye();ge.set(e,v);let m=be({...t,id:v});return{tabListProps:{...ee(f,m),role:"tablist","aria-orientation":a,tabIndex:void 0}}}class xt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=e}}function he(t){let e=c.useRef({isFocused:!1,observer:null});ve(()=>{const a=e.current;return()=>{a.observer&&(a.observer.disconnect(),a.observer=null)}},[]);let r=ut(a=>{t==null||t(a)});return c.useCallback(a=>{if(a.target instanceof HTMLButtonElement||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement||a.target instanceof HTMLSelectElement){e.current.isFocused=!0;let n=a.target,s=i=>{e.current.isFocused=!1,n.disabled&&r(new xt("blur",i)),e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};n.addEventListener("focusout",s,{once:!0}),e.current.observer=new MutationObserver(()=>{if(e.current.isFocused&&n.disabled){var i;(i=e.current.observer)===null||i===void 0||i.disconnect();let o=n===document.activeElement?null:document.activeElement;n.dispatchEvent(new FocusEvent("blur",{relatedTarget:o})),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:o}))}}),e.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function wt(t){let{isDisabled:e,onFocus:r,onBlur:a,onFocusChange:n}=t;const s=c.useCallback(d=>{if(d.target===d.currentTarget)return a&&a(d),n&&n(!1),!0},[a,n]),i=he(s),o=c.useCallback(d=>{const l=H(d.target);d.target===d.currentTarget&&l.activeElement===d.target&&(r&&r(d),n&&n(!0),i(d))},[n,r,i]);return{focusProps:{onFocus:!e&&(r||n||a)?o:void 0,onBlur:!e&&(a||n)?s:void 0}}}let N=null,Y=new Set,A=new Map,S=!1,q=!1;const Et={Tab:!0,Escape:!0};function te(t,e){for(let r of Y)r(t,e)}function Pt(t){return!(t.metaKey||!pt()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function R(t){S=!0,Pt(t)&&(N="keyboard",te("keyboard",t))}function x(t){N="pointer",(t.type==="mousedown"||t.type==="pointerdown")&&(S=!0,te("pointer",t))}function ye(t){mt(t)&&(S=!0,N="virtual")}function $e(t){t.target===window||t.target===document||(!S&&!q&&(N="virtual",te("virtual",t)),S=!1,q=!1)}function xe(){S=!1,q=!0}function J(t){if(typeof window>"u"||A.get(F(t)))return;const e=F(t),r=H(t);let a=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){S=!0,a.apply(this,arguments)},r.addEventListener("keydown",R,!0),r.addEventListener("keyup",R,!0),r.addEventListener("click",ye,!0),e.addEventListener("focus",$e,!0),e.addEventListener("blur",xe,!1),typeof PointerEvent<"u"?(r.addEventListener("pointerdown",x,!0),r.addEventListener("pointermove",x,!0),r.addEventListener("pointerup",x,!0)):(r.addEventListener("mousedown",x,!0),r.addEventListener("mousemove",x,!0),r.addEventListener("mouseup",x,!0)),e.addEventListener("beforeunload",()=>{we(t)},{once:!0}),A.set(e,{focus:a})}const we=(t,e)=>{const r=F(t),a=H(t);e&&a.removeEventListener("DOMContentLoaded",e),A.has(r)&&(r.HTMLElement.prototype.focus=A.get(r).focus,a.removeEventListener("keydown",R,!0),a.removeEventListener("keyup",R,!0),a.removeEventListener("click",ye,!0),r.removeEventListener("focus",$e,!0),r.removeEventListener("blur",xe,!1),typeof PointerEvent<"u"?(a.removeEventListener("pointerdown",x,!0),a.removeEventListener("pointermove",x,!0),a.removeEventListener("pointerup",x,!0)):(a.removeEventListener("mousedown",x,!0),a.removeEventListener("mousemove",x,!0),a.removeEventListener("mouseup",x,!0)),A.delete(r))};function Lt(t){const e=H(t);let r;return e.readyState!=="loading"?J(t):(r=()=>{J(t)},e.addEventListener("DOMContentLoaded",r)),()=>we(t,r)}typeof document<"u"&&Lt();function Ee(){return N!=="pointer"}const Ct=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Kt(t,e,r){var a;const n=typeof window<"u"?F(r==null?void 0:r.target).HTMLInputElement:HTMLInputElement,s=typeof window<"u"?F(r==null?void 0:r.target).HTMLTextAreaElement:HTMLTextAreaElement,i=typeof window<"u"?F(r==null?void 0:r.target).HTMLElement:HTMLElement,o=typeof window<"u"?F(r==null?void 0:r.target).KeyboardEvent:KeyboardEvent;return t=t||(r==null?void 0:r.target)instanceof n&&!Ct.has(r==null||(a=r.target)===null||a===void 0?void 0:a.type)||(r==null?void 0:r.target)instanceof s||(r==null?void 0:r.target)instanceof i&&(r==null?void 0:r.target.isContentEditable),!(t&&e==="keyboard"&&r instanceof o&&!Et[r.key])}function Tt(t,e,r){J(),c.useEffect(()=>{let a=(n,s)=>{Kt(!!(r!=null&&r.isTextInput),n,s)&&t(Ee())};return Y.add(a),()=>{Y.delete(a)}},e)}function Ft(t){let{isDisabled:e,onBlurWithin:r,onFocusWithin:a,onFocusWithinChange:n}=t,s=c.useRef({isFocusWithin:!1}),i=c.useCallback(l=>{s.current.isFocusWithin&&!l.currentTarget.contains(l.relatedTarget)&&(s.current.isFocusWithin=!1,r&&r(l),n&&n(!1))},[r,n,s]),o=he(i),d=c.useCallback(l=>{!s.current.isFocusWithin&&document.activeElement===l.target&&(a&&a(l),n&&n(!0),s.current.isFocusWithin=!0,o(l))},[a,n,o]);return e?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:d,onBlur:i}}}let V=!1,z=0;function Q(){V=!0,setTimeout(()=>{V=!1},50)}function de(t){t.pointerType==="touch"&&Q()}function St(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",de):document.addEventListener("touchend",Q),z++,()=>{z--,!(z>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",de):document.removeEventListener("touchend",Q))}}function Dt(t){let{onHoverStart:e,onHoverChange:r,onHoverEnd:a,isDisabled:n}=t,[s,i]=c.useState(!1),o=c.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;c.useEffect(St,[]);let{hoverProps:d,triggerHoverEnd:l}=c.useMemo(()=>{let f=(u,p)=>{if(o.pointerType=p,n||p==="touch"||o.isHovered||!u.currentTarget.contains(u.target))return;o.isHovered=!0;let g=u.currentTarget;o.target=g,e&&e({type:"hoverstart",target:g,pointerType:p}),r&&r(!0),i(!0)},v=(u,p)=>{if(o.pointerType="",o.target=null,p==="touch"||!o.isHovered)return;o.isHovered=!1;let g=u.currentTarget;a&&a({type:"hoverend",target:g,pointerType:p}),r&&r(!1),i(!1)},m={};return typeof PointerEvent<"u"?(m.onPointerEnter=u=>{V&&u.pointerType==="mouse"||f(u,u.pointerType)},m.onPointerLeave=u=>{!n&&u.currentTarget.contains(u.target)&&v(u,u.pointerType)}):(m.onTouchStart=()=>{o.ignoreEmulatedMouseEvents=!0},m.onMouseEnter=u=>{!o.ignoreEmulatedMouseEvents&&!V&&f(u,"mouse"),o.ignoreEmulatedMouseEvents=!1},m.onMouseLeave=u=>{!n&&u.currentTarget.contains(u.target)&&v(u,"mouse")}),{hoverProps:m,triggerHoverEnd:v}},[e,r,a,n,o]);return c.useEffect(()=>{n&&l({currentTarget:o.target},o.pointerType)},[n]),{hoverProps:d,isHovered:s}}function Pe(t={}){let{autoFocus:e=!1,isTextInput:r,within:a}=t,n=c.useRef({isFocused:!1,isFocusVisible:e||Ee()}),[s,i]=c.useState(!1),[o,d]=c.useState(()=>n.current.isFocused&&n.current.isFocusVisible),l=c.useCallback(()=>d(n.current.isFocused&&n.current.isFocusVisible),[]),f=c.useCallback(u=>{n.current.isFocused=u,i(u),l()},[l]);Tt(u=>{n.current.isFocusVisible=u,l()},[],{isTextInput:r});let{focusProps:v}=wt({isDisabled:a,onFocusChange:f}),{focusWithinProps:m}=Ft({isDisabled:!a,onFocusWithinChange:f});return{isFocused:s,isFocusVisible:o,focusProps:a?m:v}}var Le=X((t,e)=>{var r,a;const{as:n,tabKey:s,destroyInactiveTabPanel:i,state:o,className:d,slots:l,classNames:f,...v}=t,m=n||"div",u=Z(e),{tabPanelProps:p}=ht({...t,id:String(s)},o,u),{focusProps:g,isFocused:E,isFocusVisible:P}=Pe(),h=o.selectedItem,C=o.collection.getItem(s).props.children,L=M(f==null?void 0:f.panel,d,(r=h==null?void 0:h.props)==null?void 0:r.className),y=s===(h==null?void 0:h.key);return!C||!y&&i?null:b.jsx(m,{ref:u,"data-focus":E,"data-focus-visible":P,"data-inert":y?void 0:"true",inert:y?void 0:"true",...y&&W(p,g,v),className:(a=l.panel)==null?void 0:a.call(l,{class:L}),"data-slot":"panel",children:C})});Le.displayName="NextUI.TabPanel";var Mt=Le,Ce=X((t,e)=>{var r;const{className:a,as:n,item:s,state:i,classNames:o,isDisabled:d,listRef:l,slots:f,motionProps:v,disableAnimation:m,disableCursorAnimation:u,shouldSelectOnPressUp:p,onClick:g,...E}=t,{key:P}=s,h=Z(e),C=n||(t.href?"a":"button"),L=typeof C=="string",{tabProps:y,isSelected:K,isDisabled:I,isPressed:w}=gt({key:P,isDisabled:d,shouldSelectOnPressUp:p},i,h);t.children==null&&delete y["aria-controls"];const _=d||I,{focusProps:B,isFocused:U,isFocusVisible:D}=Pe(),{hoverProps:G,isHovered:j}=Dt({isDisabled:_}),$=M(o==null?void 0:o.tab,a),[,Te]=et({rerender:!0}),Fe=()=>{me(g,y.onClick),!(!(h!=null&&h.current)||!(l!=null&&l.current))&&_e(h.current,{scrollMode:"if-needed",behavior:"smooth",block:"end",inline:"end",boundary:l==null?void 0:l.current})};return b.jsxs(C,{ref:h,"data-disabled":T(I),"data-focus":T(U),"data-focus-visible":T(D),"data-hover":T(j),"data-hover-unselected":T((j||w)&&!K),"data-pressed":T(w),"data-selected":T(K),"data-slot":"tab",...W(y,_?{}:{...B,...G},fe(E,{enabled:L,omitPropNames:new Set(["title"])}),{onClick:Fe}),className:(r=f.tab)==null?void 0:r.call(f,{class:$}),title:E==null?void 0:E.titleValue,type:C==="button"?"button":void 0,children:[K&&!m&&!u&&Te?b.jsx(Be,{features:dt,children:b.jsx(Ue.span,{className:f.cursor({class:o==null?void 0:o.cursor}),"data-slot":"cursor",layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.5},...v})}):null,b.jsx("div",{className:f.tabContent({class:o==null?void 0:o.tabContent}),"data-slot":"tabContent",children:s.rendered})]})});Ce.displayName="NextUI.Tab";var It=Ce;function _t(t){var e;let[r,a]=qe(t.selectedKey,(e=t.defaultSelectedKey)!==null&&e!==void 0?e:null,t.onSelectionChange),n=c.useMemo(()=>r!=null?[r]:[],[r]),{collection:s,disabledKeys:i,selectionManager:o}=at({...t,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:n,onSelectionChange:l=>{var f;let v=(f=l.values().next().value)!==null&&f!==void 0?f:null;v===r&&t.onSelectionChange&&t.onSelectionChange(v),a(v)}}),d=r!=null?s.getItem(r):null;return{collection:s,disabledKeys:i,selectionManager:o,selectedKey:r,setSelectedKey:a,selectedItem:d}}function kt(t){var e;let r=_t({...t,suppressTextValueWarning:!0,defaultSelectedKey:(e=t.defaultSelectedKey)!==null&&e!==void 0?e:ue(t.collection,t.disabledKeys?new Set(t.disabledKeys):new Set)}),{selectionManager:a,collection:n,selectedKey:s}=r,i=c.useRef(s);return c.useEffect(()=>{let o=s;(a.isEmpty||!n.getItem(o))&&(o=ue(n,r.disabledKeys),o!=null&&a.setSelectedKeys([o])),(o!=null&&a.focusedKey==null||!a.isFocused&&o!==i.current)&&a.setFocusedKey(o),i.current=o}),{...r,isDisabled:t.isDisabled||!1}}function ue(t,e){let r=null;if(t){for(r=t.getFirstKey();e.has(r)&&r!==t.getLastKey();)r=t.getKeyAfter(r);e.has(r)&&r===t.getLastKey()&&(r=t.getFirstKey())}return r}function At(t){var e,r,a;const n=Ge(),[s,i]=We(t,ie.variantKeys),{ref:o,as:d,className:l,classNames:f,children:v,disableCursorAnimation:m,motionProps:u,isVertical:p=!1,shouldSelectOnPressUp:g=!0,destroyInactiveTabPanel:E=!0,...P}=s,h=d||"div",C=typeof h=="string",L=Z(o),y=(r=(e=t==null?void 0:t.disableAnimation)!=null?e:n==null?void 0:n.disableAnimation)!=null?r:!1,K=kt({children:v,...P}),{tabListProps:I}=$t(P,K,L),w=c.useMemo(()=>ie({...i,className:l,disableAnimation:y,...p?{placement:"start"}:{}}),[Oe(i),l,y,p]),_=M(f==null?void 0:f.base,l),B=c.useMemo(()=>({state:K,slots:w,classNames:f,motionProps:u,disableAnimation:y,listRef:L,shouldSelectOnPressUp:g,disableCursorAnimation:m,isDisabled:t==null?void 0:t.isDisabled}),[K,w,L,u,y,m,g,t==null?void 0:t.isDisabled,f]),U=c.useCallback($=>({"data-slot":"base",className:w.base({class:M(_,$==null?void 0:$.className)}),...W(fe(P,{enabled:C}),$)}),[_,P,w]),D=(a=i.placement)!=null?a:p?"start":"top",G=c.useCallback($=>({"data-slot":"tabWrapper",className:w.wrapper({class:M(f==null?void 0:f.wrapper,$==null?void 0:$.className)}),"data-placement":D,"data-vertical":p||D==="start"||D==="end"?"vertical":"horizontal"}),[f,w,D,p]),j=c.useCallback($=>({ref:L,"data-slot":"tabList",className:w.tabList({class:M(f==null?void 0:f.tabList,$==null?void 0:$.className)}),...W(I,$)}),[L,I,f,w]);return{Component:h,domRef:L,state:K,values:B,destroyInactiveTabPanel:E,getBaseProps:U,getTabListProps:j,getWrapperProps:G}}function Ke(t,e){const{Component:r,values:a,state:n,destroyInactiveTabPanel:s,getBaseProps:i,getTabListProps:o,getWrapperProps:d}=At({...t,ref:e}),l=c.useId(),f=!t.disableAnimation&&!t.disableCursorAnimation,v={state:n,listRef:a.listRef,slots:a.slots,classNames:a.classNames,isDisabled:a.isDisabled,motionProps:a.motionProps,disableAnimation:a.disableAnimation,shouldSelectOnPressUp:a.shouldSelectOnPressUp,disableCursorAnimation:a.disableCursorAnimation},m=[...n.collection].map(p=>b.jsx(It,{item:p,...v,...p.props},p.key)),u=b.jsxs(b.Fragment,{children:[b.jsx("div",{...i(),children:b.jsx(r,{...o(),children:f?b.jsx(lt,{id:l,children:m}):m})}),[...n.collection].map(p=>b.jsx(Mt,{classNames:a.classNames,destroyInactiveTabPanel:s,slots:a.slots,state:a.state,tabKey:p.key},p.key))]});return"placement"in t||"isVertical"in t?b.jsx("div",{...d(),children:u}):u}var Ht=X(Ke);Ke.displayName="NextUI.Tabs";var Nt=Ze,ce=Nt;const vr=({settings:t})=>{const e=c.useRef(Object.entries(t.general));return b.jsxs(b.Fragment,{children:[b.jsx(Me,{title:"Settings"}),b.jsx("section",{className:" mx-6 mt-10 md:max-w-2xl md:mx-auto lg:max-w-4xl",children:b.jsxs(Ht,{"aria-label":"Options",children:[b.jsx(ce,{title:"General",children:b.jsxs(ke,{"aria-label":"General settings",radius:"none",removeWrapper:!0,isStriped:!0,children:[b.jsxs(Ae,{children:[b.jsx(re,{children:"Key"}),b.jsx(re,{children:"Value"})]}),b.jsx(He,{children:e.current.map(r=>b.jsxs(Ne,{children:[b.jsx(ae,{className:"font-semibold capitalize",children:r[0]}),b.jsx(ae,{children:r[1]})]},r[0]))})]})},"general"),b.jsx(ce,{title:"Other"},"other")]})})]})};export{vr as default};