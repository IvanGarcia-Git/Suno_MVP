const n=(s=10)=>({generatePassword:()=>{const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?></=";let r="";for(let t=0;t<s;t++){const o=Math.floor(Math.random()*e.length);r+=e[o]}return r}});export{n as u};