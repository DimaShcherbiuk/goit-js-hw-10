import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";let s,r;const c={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],r=s-c.defaultDate,r<1?h.error({color:"#EF4040",title:"Error",titleColor:"#ffffff",position:"topRight",messageColor:"#ffffff",message:"Please choose a date in the future"}):(e.classList.remove("startBtnNoActive"),e.disabled=!1,a.disabled=!0)}};function p(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:u,seconds:f}}const a=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]");m(a,c);const n=document.querySelectorAll(".value");e.classList.add("startBtnNoActive");e.disabled=!0;e.addEventListener("click",t=>{e.classList.add("startBtnNoActive");const i=setInterval(()=>{if(r=s-new Date,t.preventDefault(),a.disabled=!0,r<1){e.disabled=!0,a.disabled=!1,clearInterval(i);return}const o=p(r);n[0].innerText=o.days.toString().padStart(2,"0"),n[1].innerText=o.hours.toString().padStart(2,"0"),n[2].innerText=o.minutes.toString().padStart(2,"0"),n[3].innerText=o.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
