import{u as K,$ as P}from"./chunk-NQM3AZQR-CKZZ5xcp.js";import{e as F}from"./chunk-XHQUSKIE-B16IZcCX.js";import{f as Q}from"./chunk-N2KXC5ZE-DBD4xwut.js";import{r as o,j as l}from"./app-B73aNjnd.js";function T(){return T=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},T.apply(null,arguments)}function V(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.includes(r))continue;t[r]=n[r]}return t}var ee=o.useLayoutEffect,te=function(e){var t=o.useRef(e);return ee(function(){t.current=e}),t},M=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},re=function(e,t){var r=o.useRef();return o.useCallback(function(i){e.current=i,r.current&&M(r.current,null),r.current=t,t&&M(t,i)},[t])},$={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},ne=function(e){Object.keys($).forEach(function(t){e.style.setProperty(t,$[t],"important")})},B=ne,a=null,A=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function ie(n,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),a||(a=document.createElement("textarea"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-hidden","true"),B(a)),a.parentNode===null&&document.body.appendChild(a);var i=n.paddingSize,u=n.borderSize,s=n.sizingStyle,v=s.boxSizing;Object.keys(s).forEach(function(p){var x=p;a.style[x]=s[x]}),B(a),a.value=e;var d=A(a,n);a.value=e,d=A(a,n),a.value="x";var h=a.scrollHeight-i,c=h*t;v==="border-box"&&(c=c+i+u),d=Math.max(c,d);var f=h*r;return v==="border-box"&&(f=f+i+u),d=Math.min(f,d),[d,h]}var N=function(){},ae=function(e,t){return e.reduce(function(r,i){return r[i]=t[i],r},{})},oe=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],se=!!document.documentElement.currentStyle,de=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=ae(oe,t),i=r.boxSizing;if(i==="")return null;se&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var u=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),s=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:u,borderSize:s}},ue=de;function O(n,e,t){var r=te(t);o.useLayoutEffect(function(){var i=function(s){return r.current(s)};if(n)return n.addEventListener(e,i),function(){return n.removeEventListener(e,i)}},[])}var le=function(e){O(window,"resize",e)},ce=function(e){O(document.fonts,"loadingdone",e)},fe=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],he=function(e,t){var r=e.cacheMeasurements,i=e.maxRows,u=e.minRows,s=e.onChange,v=s===void 0?N:s,d=e.onHeightChange,h=d===void 0?N:d,c=V(e,fe),f=c.value!==void 0,p=o.useRef(null),x=re(p,t),H=o.useRef(0),y=o.useRef(),b=function(){var g=p.current,z=r&&y.current?y.current:ue(g);if(z){y.current=z;var m=ie(z,g.value||g.placeholder||"x",u,i),S=m[0],w=m[1];H.current!==S&&(H.current=S,g.style.setProperty("height",S+"px","important"),h(S,{rowHeight:w}))}},C=function(g){f||b(),v(g)};return o.useLayoutEffect(b),le(b),ce(b),o.createElement("textarea",T({},c,{onChange:C,ref:x}))},pe=o.forwardRef(he),k=Q(({style:n,minRows:e=3,maxRows:t=8,cacheMeasurements:r=!1,disableAutosize:i=!1,onHeightChange:u,...s},v)=>{const{Component:d,label:h,description:c,startContent:f,endContent:p,hasHelper:x,shouldLabelBeOutside:H,shouldLabelBeInside:y,isInvalid:b,errorMessage:C,getBaseProps:R,getLabelProps:g,getInputProps:z,getInnerWrapperProps:m,getInputWrapperProps:S,getHelperWrapperProps:w,getDescriptionProps:_,getErrorMessageProps:U}=K({...s,ref:v,isMultiline:!0}),[Y,D]=o.useState(e>1),[G,X]=o.useState(!1),W=h?l.jsx("label",{...g(),children:h}):null,L=z(),Z=(E,j)=>{if(e===1&&D(E>=j.rowHeight*2),t>e){const J=E>=t*j.rowHeight;X(J)}u==null||u(E,j)},I=i?l.jsx("textarea",{...L,style:P(L.style,n??{})}):l.jsx(pe,{...L,cacheMeasurements:r,"data-hide-scroll":F(!G),maxRows:t,minRows:e,style:P(L.style,n??{}),onHeightChange:Z}),q=o.useMemo(()=>f||p?l.jsxs("div",{...m(),children:[f,I,p]}):l.jsx("div",{...m(),children:I}),[f,L,p,m]);return l.jsxs(d,{...R(),children:[H?W:null,l.jsxs("div",{...S(),"data-has-multiple-rows":F(Y),children:[y?W:null,q]}),x?l.jsx("div",{...w(),children:b&&C?l.jsx("div",{...U(),children:C}):c?l.jsx("div",{..._(),children:c}):null}):null]})});k.displayName="NextUI.Textarea";var me=k;export{me as t};
