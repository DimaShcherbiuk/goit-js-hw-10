import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as f}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.delay.value,r=e.currentTarget.elements.state.value;new Promise((o,s)=>{setTimeout(()=>{r==="fulfilled"?o():r==="rejected"&&s()},t)}).then(o=>{f.success({color:"#59A10D",title:"OK",titleColor:"#ffffff",position:"topRight",message:`✅ Fulfilled promise in ${t}ms`,messageColor:"#ffffff"})}).catch(o=>{f.error({color:"#EF4040",title:"Error",titleColor:"#ffffff",position:"topRight",message:`❌ Rejected promise in ${t}ms`,messageColor:"#ffffff"})})});
//# sourceMappingURL=commonHelpers2.js.map