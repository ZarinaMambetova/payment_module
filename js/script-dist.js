<<<<<<< HEAD
"use strict";!function(){function i(e){return e.nextElementSibling.textContent=e.validationMessage,e.checkValidity()}var s=document.querySelector("#myForm"),e=document.querySelector("#sendButton"),a=document.querySelector("#result");document.querySelector("#form_host"),document.querySelector("#form_price"),document.querySelector("#form_count"),document.querySelector("#form_rate_id");e.addEventListener("click",function(e){if(e.preventDefault(),o=!0,i((r=s).elements.host)||(o=!1),i(r.elements.rate_id)||(o=!1),i(r.elements.count)||(o=!1),i(r.elements.price)||(o=!1),o){var t={controller:"Payment",action:"addPayment",params:{host:s.elements.host.value,price:s.elements.price.value,count:s.elements.count.value,rate_id:s.elements.rate_id.value}},n=new XMLHttpRequest;n.responseType="json",n.open("POST","https://zeta2.dev.sliza.ru/api/v1/index.php"),n.send(JSON.stringify(t)),n.addEventListener("load",function(){400<=n.response.status?a.innerText="Что-то пошло не так":(a.insertAdjacentHTML("beforebegin","<div class='old_result'>"+a.innerHTML+"</div>"),a.innerHTML="<div>"+t.params.host+"</div><div>"+t.params.price+"</div><div>"+t.params.count+"</div><div>"+t.params.rate_id+"</div><div>"+n.response.result+"</div>"),console.log(n),console.log(t)})}var r,o})}();
=======
"use strict";!function(){function i(e){return e.nextElementSibling.textContent=e.validationMessage,e.checkValidity()}var s=document.querySelector("#myForm"),e=document.querySelector("#sendButton"),a=document.querySelector("#result");document.querySelector("#form_host"),document.querySelector("#form_price"),document.querySelector("#form_count"),document.querySelector("#form_rate_id");e.addEventListener("click",function(e){if(e.preventDefault(),o=!0,i((r=s).elements.host)||(o=!1),i(r.elements.rate_id)||(o=!1),i(r.elements.count)||(o=!1),i(r.elements.price)||(o=!1),o){var t={action:"addPayment",params:{host:s.elements.host.value,price:s.elements.price.value,count:s.elements.count.value,rate_id:s.elements.rate_id.value}},n=new XMLHttpRequest;n.responseType="json",n.open("POST","https://zeta2.dev.sliza.ru/api/v1/payment.php"),n.send(JSON.stringify(t)),n.addEventListener("load",function(){400<=n.response.status?a.innerText="Что-то пошло не так":(a.insertAdjacentHTML("beforebegin","<div class='old_result'>"+a.innerHTML+"</div>"),a.innerHTML="<div>"+t.params.host+"</div><div>"+t.params.price+"</div><div>"+t.params.count+"</div><div>"+t.params.rate_id+"</div><div>"+n.response.result+"</div>"),console.log(n),console.log(t)})}var r,o})}();
>>>>>>> 86a5973108ffef8f66f35f66bafc4e6b831dddb5
//# sourceMappingURL=script-dist.js.map