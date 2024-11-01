import{r as n,R as m,j as o}from"./app-B73aNjnd.js";import{L as R}from"./Layout-CyryUbzw.js";import{t as d}from"./translations-CBxNckOR.js";import{P as B}from"./PageHeader-CBsXy6T3.js";import{P as F}from"./index-CLA8QPfP.js";import{CreateEditForm as L}from"./CreateEditForm-B0prFETE.js";import{PermissionsList as M}from"./PermissionsList-BSwNgmSm.js";import{DeletePermission as q}from"./DeletePermission-C7qyj9HO.js";import{u as A}from"./index-DmNp4kFG.js";import{b as H}from"./chunk-DBLREEYE-D6vzpY_n.js";import"./useColorMode-5v_XiiRX.js";import"./chunk-3XVMTUU7-Dp_cF4cz.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./chunk-VMWQTXAV-D2ifQli6.js";import"./chunk-XHQUSKIE-B16IZcCX.js";import"./chunk-N2KXC5ZE-DBD4xwut.js";import"./chunk-CIZQCQPA-C2ysd0Fb.js";import"./index-BKHz38cK.js";import"./useToggleState-DPTtk9cz.js";import"./focusSafely-ayMLw8ui.js";import"./useFocusable-KNJiKUgw.js";import"./useSyncRef-BnJNsFWS.js";import"./useFocus-Jb_1JH4M.js";import"./usePress-BxsRSbXd.js";import"./textSelection-Bdx306yo.js";import"./context-C8SwmHwE.js";import"./VisuallyHidden-CVybe5pM.js";import"./template.executive.config-JRgdiSJO.js";import"./chunk-44JHHBS2-B7E72yne.js";import"./layout-Cnm3eq9B.js";import"./useDialog-DinOM5Fu.js";import"./useLabels-CqVFLFT_.js";import"./isScrollable-C-zzJ19Q.js";import"./FocusScope-Q_seLLKW.js";import"./chunk-6NL67ZRH-DD6EpadO.js";import"./useOverlayTriggerState-DhG8YGBS.js";import"./useMenuTriggerState-Bdg_6lWL.js";import"./Item-Cr_3adQs.js";import"./getChildNodes-BbnIxB5F.js";import"./chunk-WQVQ7P2I-CG_H71MO.js";import"./chunk-2GZPFWUB-DujZQCQ1.js";import"./chunk-QXREVWCS-Cwo7OCcW.js";import"./chunk-CAFRINWI-BTDo8zfp.js";import"./index-BnsDL4B6.js";import"./index-Bl1PYzdV.js";import"./chunk-NQM3AZQR-CKZZ5xcp.js";import"./useField-B_F-zLXq.js";import"./useLabel-ChkjK81L.js";import"./useFormValidationState-LLVN8A0f.js";import"./chunk-6EHM2IL6-Dej1pyxF.js";import"./chunk-KBN3H6OQ-CQsmlBiE.js";import"./index-CMoRDRPr.js";import"./chunk-MRXO6UUP-Cy_Uh5KD.js";import"./chunk-YRZGWF2W-CfVRf2QO.js";import"./getScrollParent-BeofMkPJ.js";import"./chunk-7F3ZLNJ6-BI72z8-K.js";import"./chunk-P2T5LMDM-DE6aEvc8.js";function u(){return u=Object.assign||function(i){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e])}return i},u.apply(this,arguments)}var T=function(r,t){var e={left:{top:0,left:0,transform:"translate3d(-100%, 0, 0)",width:t,height:"100vh"},right:{top:0,right:0,transform:"translate3d(100%, 0, 0)",width:t,height:"100vh"},bottom:{left:0,right:0,bottom:0,transform:"translate3d(0, 100%, 0)",width:"100%",height:t},top:{left:0,right:0,top:0,transform:"translate3d(0, -100%, 0)",width:"100%",height:t}};return e[r]},G=function(r){var t=r.open,e=r.onClose,l=e===void 0?function(){}:e,s=r.children,c=r.style,f=r.enableOverlay,S=f===void 0?!0:f,v=r.overlayColor,D=v===void 0?"#000":v,h=r.overlayOpacity,j=h===void 0?.4:h,y=r.zIndex,g=y===void 0?100:y,x=r.duration,P=x===void 0?500:x,C=r.direction,_=r.size,O=_===void 0?250:_,N=r.className,w=r.customIdSuffix,b=r.lockBackgroundScroll,Z=b===void 0?!1:b,E=r.overlayClassName,k=E===void 0?"":E,p=n.useRef(null);n.useEffect(function(){var I=function(){p.current=window.document.querySelector("body"),p.current&&Z&&(p.current.style.overflow=t?"hidden":"")};I()},[t]);var a=n.useMemo(function(){return w||(Math.random()+1).toString(36).substring(7)},[w]),$={backgroundColor:D.toString(),opacity:j,zIndex:g},z=u({zIndex:g+1,transitionDuration:P+"ms"},T(C,O),c);return m.createElement("div",{id:"EZDrawer"+a,className:"EZDrawer"},m.createElement("input",{type:"checkbox",id:"EZDrawer__checkbox"+a,className:"EZDrawer__checkbox",onChange:l,checked:t}),m.createElement("nav",{role:"navigation",id:"EZDrawer__container"+a,style:z,className:"EZDrawer__container "+N},s),S&&m.createElement("label",{htmlFor:"EZDrawer__checkbox"+a,id:"EZDrawer__overlay"+a,className:"EZDrawer__overlay "+k,style:$}))};const J=()=>{const[i,r]=n.useState(!1),[t,e]=n.useState(null),{isOpen:l,onOpen:s,onOpenChange:c}=A();return o.jsxs(o.Fragment,{children:[o.jsx(B,{title:d("Permissions"),children:o.jsx("div",{className:"flex justify-end",children:o.jsx(H,{size:"sm",color:"primary",className:"px-6",variant:"flat",onPress:()=>{r(!0),e(null)},children:d("Add new permission")})})}),o.jsx(F,{children:o.jsx(M,{setDrawerOpen:r,setSelectedPermission:e,onOpen:s})}),o.jsx("div",{className:"h-20"}),o.jsx(G,{open:i,direction:"bottom",size:370,duration:250,className:"!bg-transparent flex !shadow-none",children:o.jsx(L,{setDrawerOpen:r,selectedPermission:t,setSelectedPermission:e,drawerOpen:i})}),o.jsx(q,{selectedPermission:t,setSelectedPermission:e,isOpen:l,onOpen:s,onOpenChange:c})]})};J.layout=i=>o.jsx(R,{children:i,pageTitle:String(d("Permissions"))});export{J as default};