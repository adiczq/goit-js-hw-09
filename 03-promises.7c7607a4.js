!function(){function n(n,t){return new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))}var t=document.querySelector(".form");console.log(t),t.addEventListener("submit",(function(t){t.preventDefault();for(var e=new FormData(t.target),o=parseInt(e.get("delay"),10),a=parseInt(e.get("step"),10),i=parseInt(e.get("amount"),10),c=0;c<i;c++)n(c+1,o+c*a).then((function(n){var t=n.position,e=n.delay;console.log("Fulfilled promise ".concat(t," in ").concat(e," ms "))})).catch((function(n){var t=n.position,e=n.delay;console.log("Rejected promise ".concat(t," in ").concat(e," ms "))}))}))}();
//# sourceMappingURL=03-promises.7c7607a4.js.map
