const e=document.querySelector("body"),t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let a;t.addEventListener("click",(()=>{a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),r.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.36d93920.js.map
