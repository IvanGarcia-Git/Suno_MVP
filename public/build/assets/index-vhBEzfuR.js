import{r as s}from"./app-Xg3MWjUp.js";import{u as S}from"./index-0WiR-nh7.js";function k(E={}){const{loading:t,src:e,srcSet:i,onLoad:a,onError:u,crossOrigin:l,sizes:c,ignoreFallback:f}=E,[d,g]=s.useState("pending");s.useEffect(()=>{g(e?"loading":"pending")},[e]);const n=s.useRef(),p=s.useCallback(()=>{if(!e)return;o();const r=new Image;r.src=e,l&&(r.crossOrigin=l),i&&(r.srcset=i),c&&(r.sizes=c),t&&(r.loading=t),r.onload=m=>{o(),g("loaded"),a==null||a(m)},r.onerror=m=>{o(),g("failed"),u==null||u(m)},n.current=r},[e,l,i,c,a,u,t]),o=()=>{n.current&&(n.current.onload=null,n.current.onerror=null,n.current=null)};return S(()=>{if(!f)return d==="loading"&&p(),()=>{o()}},[d,p,f]),f?"loaded":d}export{k as u};
