import{a as n,$ as C,c as O}from"./focusSafely-BGz0Gc4B.js";import{$ as R,a as I}from"./useFocusable-DL-dGcJ1.js";import{b as f}from"./usePress-D8L0wOwc.js";function A(e,a,i){let{isDisabled:l=!1,isReadOnly:s=!1,value:d,name:r,children:b,"aria-label":$,"aria-labelledby":u,validationState:c="valid",isInvalid:o}=e,p=t=>{t.stopPropagation(),a.setSelected(t.target.checked)},P=b!=null,S=$!=null||u!=null;!P&&!S&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:v,isPressed:g}=f({isDisabled:l}),{pressProps:m,isPressed:y}=f({isDisabled:l||s,onPress(){a.toggle()}}),{focusableProps:h}=R(e,i),x=n(v,h),D=C(e,{labelable:!0});return I(i,a.isSelected,a.setSelected),{labelProps:n(m,{onClick:t=>t.preventDefault()}),inputProps:n(D,{"aria-invalid":o||c==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:p,disabled:l,...d==null?{}:{value:d},name:r,type:"checkbox",...x}),isSelected:a.isSelected,isPressed:g||y,isDisabled:l,isReadOnly:s,isInvalid:o||c==="invalid"}}function j(e={}){let{isReadOnly:a}=e,[i,l]=O(e.isSelected,e.defaultSelected||!1,e.onChange);function s(r){a||l(r)}function d(){a||l(!i)}return{isSelected:i,setSelected:s,toggle:d}}export{A as $,j as a};
