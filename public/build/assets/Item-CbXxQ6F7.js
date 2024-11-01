import{r as h,b as _,R as Z}from"./app-Xg3MWjUp.js";import{$ as ee,a as te}from"./FocusScope-B94nuPOP.js";import{e as le,f as re,h as V,a as J,i as q,j as H}from"./focusSafely-BGz0Gc4B.js";import{a as Q,b as oe,c as ie}from"./usePress-D8L0wOwc.js";import{$ as ne,a as se,b as j,c as ce}from"./getChildNodes-D9Y5kHi7.js";function W(i){return le()?i.altKey:i.ctrlKey}function O(i){return re()?i.metaKey:i.ctrlKey}const ae=1e3;function ue(i){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:n}=i,d=h.useRef({search:"",timeout:null}).current,p=u=>{let f=fe(u.key);if(!f||u.ctrlKey||u.metaKey||!u.currentTarget.contains(u.target))return;f===" "&&d.search.trim().length>0&&(u.preventDefault(),"continuePropagation"in u||u.stopPropagation()),d.search+=f;let s=e.getKeyForSearch(d.search,t.focusedKey);s==null&&(s=e.getKeyForSearch(d.search)),s!=null&&(t.setFocusedKey(s),n&&n(s)),clearTimeout(d.timeout),d.timeout=setTimeout(()=>{d.search=""},ae)};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?p:null}}}function fe(i){return i.length===1||!/^[A-Z]/i.test(i)?i:""}function $e(i){let{selectionManager:e,keyboardDelegate:t,ref:n,autoFocus:d=!1,shouldFocusWrap:p=!1,disallowEmptySelection:u=!1,disallowSelectAll:f=!1,selectOnFocus:s=e.selectionBehavior==="replace",disallowTypeAhead:C=!1,shouldUseVirtualFocus:g,allowsTabNavigation:M=!1,isVirtualized:b,scrollRef:c=n,linkBehavior:R="action"}=i,{direction:T}=ee(),v=Q(),I=l=>{if(l.altKey&&l.key==="Tab"&&l.preventDefault(),!n.current.contains(l.target))return;const a=(o,A)=>{if(o!=null){if(e.isLink(o)&&R==="selection"&&s&&!W(l)){_.flushSync(()=>{e.setFocusedKey(o,A)});let E=c.current.querySelector(`[data-key="${CSS.escape(o.toString())}"]`),z=e.getItemProps(o);v.open(E,l,z.href,z.routerOptions);return}if(e.setFocusedKey(o,A),e.isLink(o)&&R==="override")return;l.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(o):s&&!W(l)&&e.replaceSelection(o)}};switch(l.key){case"ArrowDown":if(t.getKeyBelow){var K,y;l.preventDefault();let o=e.focusedKey!=null?t.getKeyBelow(e.focusedKey):(K=t.getFirstKey)===null||K===void 0?void 0:K.call(t);o==null&&p&&(o=(y=t.getFirstKey)===null||y===void 0?void 0:y.call(t,e.focusedKey)),a(o)}break;case"ArrowUp":if(t.getKeyAbove){var m,S;l.preventDefault();let o=e.focusedKey!=null?t.getKeyAbove(e.focusedKey):(m=t.getLastKey)===null||m===void 0?void 0:m.call(t);o==null&&p&&(o=(S=t.getLastKey)===null||S===void 0?void 0:S.call(t,e.focusedKey)),a(o)}break;case"ArrowLeft":if(t.getKeyLeftOf){var L,r;l.preventDefault();let o=t.getKeyLeftOf(e.focusedKey);o==null&&p&&(o=T==="rtl"?(L=t.getFirstKey)===null||L===void 0?void 0:L.call(t,e.focusedKey):(r=t.getLastKey)===null||r===void 0?void 0:r.call(t,e.focusedKey)),a(o,T==="rtl"?"first":"last")}break;case"ArrowRight":if(t.getKeyRightOf){var P,U;l.preventDefault();let o=t.getKeyRightOf(e.focusedKey);o==null&&p&&(o=T==="rtl"?(P=t.getLastKey)===null||P===void 0?void 0:P.call(t,e.focusedKey):(U=t.getFirstKey)===null||U===void 0?void 0:U.call(t,e.focusedKey)),a(o,T==="rtl"?"last":"first")}break;case"Home":if(t.getFirstKey){l.preventDefault();let o=t.getFirstKey(e.focusedKey,O(l));e.setFocusedKey(o),O(l)&&l.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(o):s&&e.replaceSelection(o)}break;case"End":if(t.getLastKey){l.preventDefault();let o=t.getLastKey(e.focusedKey,O(l));e.setFocusedKey(o),O(l)&&l.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(o):s&&e.replaceSelection(o)}break;case"PageDown":if(t.getKeyPageBelow){l.preventDefault();let o=t.getKeyPageBelow(e.focusedKey);a(o)}break;case"PageUp":if(t.getKeyPageAbove){l.preventDefault();let o=t.getKeyPageAbove(e.focusedKey);a(o)}break;case"a":O(l)&&e.selectionMode==="multiple"&&f!==!0&&(l.preventDefault(),e.selectAll());break;case"Escape":!u&&e.selectedKeys.size!==0&&(l.stopPropagation(),l.preventDefault(),e.clearSelection());break;case"Tab":if(!M){if(l.shiftKey)n.current.focus();else{let o=te(n.current,{tabbable:!0}),A,E;do E=o.lastChild(),E&&(A=E);while(E);A&&!A.contains(document.activeElement)&&H(A)}break}}},$=h.useRef({top:0,left:0});ne(c,"scroll",b?null:()=>{$.current={top:c.current.scrollTop,left:c.current.scrollLeft}});let B=l=>{if(e.isFocused){l.currentTarget.contains(l.target)||e.setFocused(!1);return}if(l.currentTarget.contains(l.target)){if(e.setFocused(!0),e.focusedKey==null){let y=S=>{S!=null&&(e.setFocusedKey(S),s&&e.replaceSelection(S))},m=l.relatedTarget;var a,K;m&&l.currentTarget.compareDocumentPosition(m)&Node.DOCUMENT_POSITION_FOLLOWING?y((a=e.lastSelectedKey)!==null&&a!==void 0?a:t.getLastKey()):y((K=e.firstSelectedKey)!==null&&K!==void 0?K:t.getFirstKey())}else b||(c.current.scrollTop=$.current.top,c.current.scrollLeft=$.current.left);if(!b&&e.focusedKey!=null){let y=c.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);y&&(y.contains(document.activeElement)||H(y),q()==="keyboard"&&j(y,{containingElement:n.current}))}}},F=l=>{l.currentTarget.contains(l.relatedTarget)||e.setFocused(!1)};const D=h.useRef(d);h.useEffect(()=>{if(D.current){let l=null;d==="first"&&(l=t.getFirstKey()),d==="last"&&(l=t.getLastKey());let a=e.selectedKeys;if(a.size){for(let K of a)if(e.canSelectItem(K)){l=K;break}}e.setFocused(!0),e.setFocusedKey(l),l==null&&!g&&V(n.current)}},[]);let k=h.useRef(e.focusedKey);h.useEffect(()=>{let l=q();if(e.isFocused&&e.focusedKey!=null&&(c!=null&&c.current)){let a=c.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);a&&(l==="keyboard"||D.current)&&(b||se(c.current,a),l!=="virtual"&&j(a,{containingElement:n.current}))}e.isFocused&&e.focusedKey==null&&k.current!=null&&V(n.current),k.current=e.focusedKey,D.current=!1},[b,c,e.focusedKey,e.isFocused,n]);let x={onKeyDown:I,onFocus:B,onBlur:F,onMouseDown(l){c.current===l.target&&l.preventDefault()}},{typeSelectProps:N}=ue({keyboardDelegate:t,selectionManager:e});C||(x=J(N,x));let w;return g||(w=e.focusedKey==null?0:-1),{collectionProps:{...x,tabIndex:w}}}function he(i){let{selectionManager:e,key:t,ref:n,shouldSelectOnPressUp:d,shouldUseVirtualFocus:p,focus:u,isDisabled:f,onAction:s,allowsDifferentPressOrigin:C,linkBehavior:g="action"}=i,M=Q(),b=r=>{if(r.pointerType==="keyboard"&&W(r))e.toggleSelection(t);else{if(e.selectionMode==="none")return;if(e.isLink(t)){if(g==="selection"){let P=e.getItemProps(t);M.open(n.current,r,P.href,P.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(g==="override"||g==="none")return}e.selectionMode==="single"?e.isSelected(t)&&!e.disallowEmptySelection?e.toggleSelection(t):e.replaceSelection(t):r&&r.shiftKey?e.extendSelection(t):e.selectionBehavior==="toggle"||r&&(O(r)||r.pointerType==="touch"||r.pointerType==="virtual")?e.toggleSelection(t):e.replaceSelection(t)}};h.useEffect(()=>{t===e.focusedKey&&e.isFocused&&!p&&(u?u():document.activeElement!==n.current&&V(n.current))},[n,t,e.focusedKey,e.childFocusStrategy,e.isFocused,p]),f=f||e.isDisabled(t);let c={};!p&&!f?c={tabIndex:t===e.focusedKey?0:-1,onFocus(r){r.target===n.current&&e.setFocusedKey(t)}}:f&&(c.onMouseDown=r=>{r.preventDefault()});let R=e.isLink(t)&&g==="override",T=e.isLink(t)&&g!=="selection"&&g!=="none",v=!f&&e.canSelectItem(t)&&!R,I=(s||T)&&!f,$=I&&(e.selectionBehavior==="replace"?!v:!v||e.isEmpty),B=I&&v&&e.selectionBehavior==="replace",F=$||B,D=h.useRef(null),k=F&&v,x=h.useRef(!1),N=h.useRef(!1),w=r=>{if(s&&s(),T){let P=e.getItemProps(t);M.open(n.current,r,P.href,P.routerOptions)}},l={};d?(l.onPressStart=r=>{D.current=r.pointerType,x.current=k,r.pointerType==="keyboard"&&(!F||Y())&&b(r)},C?(l.onPressUp=$?null:r=>{r.pointerType!=="keyboard"&&v&&b(r)},l.onPress=$?w:null):l.onPress=r=>{if($||B&&r.pointerType!=="mouse"){if(r.pointerType==="keyboard"&&!G())return;w(r)}else r.pointerType!=="keyboard"&&v&&b(r)}):(l.onPressStart=r=>{D.current=r.pointerType,x.current=k,N.current=$,v&&(r.pointerType==="mouse"&&!$||r.pointerType==="keyboard"&&(!I||Y()))&&b(r)},l.onPress=r=>{(r.pointerType==="touch"||r.pointerType==="pen"||r.pointerType==="virtual"||r.pointerType==="keyboard"&&F&&G()||r.pointerType==="mouse"&&N.current)&&(F?w(r):v&&b(r))}),c["data-key"]=t,l.preventFocusOnPress=p;let{pressProps:a,isPressed:K}=oe(l),y=B?r=>{D.current==="mouse"&&(r.stopPropagation(),r.preventDefault(),w(r))}:void 0,{longPressProps:m}=ce({isDisabled:!k,onLongPress(r){r.pointerType==="touch"&&(b(r),e.setSelectionBehavior("toggle"))}}),S=r=>{D.current==="touch"&&x.current&&r.preventDefault()},L=e.isLink(t)?r=>{ie.isOpening||r.preventDefault()}:void 0;return{itemProps:J(c,v||$?a:{},k?m:{},{onDoubleClick:y,onDragStartCapture:S,onClick:L}),isPressed:K,isSelected:e.isSelected(t),isFocused:e.isFocused&&e.focusedKey===t,isDisabled:f,allowsSelection:v,hasAction:F}}function G(){let i=window.event;return(i==null?void 0:i.key)==="Enter"}function Y(){let i=window.event;return(i==null?void 0:i.key)===" "||(i==null?void 0:i.code)==="Space"}function X(i){return null}X.getCollectionNode=function*(e,t){let{childItems:n,title:d,children:p}=e,u=e.title||e.children,f=e.textValue||(typeof u=="string"?u:"")||e["aria-label"]||"";!f&&!(t!=null&&t.suppressTextValueWarning)&&console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:u,textValue:f,"aria-label":e["aria-label"],hasChildNodes:de(e),*childNodes(){if(n)for(let s of n)yield{type:"item",value:s};else if(d){let s=[];Z.Children.forEach(p,C=>{s.push({type:"item",element:C})}),yield*s}}}};function de(i){return i.hasChildItems!=null?i.hasChildItems:!!(i.childItems||i.title&&Z.Children.count(i.children)>0)}let ge=X;export{he as $,$e as a,ge as b,ue as c};