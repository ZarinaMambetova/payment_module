"use strict";!function(){var r=document.querySelector("#myForm"),e=document.querySelector("#sendButton"),s=document.querySelector("#result");e.addEventListener("click",function(e){e.preventDefault();var t={host:r.elements.host.value,rate_id:r.elements.rate_id.value,count:r.elements.count.value,price:r.elements.price.value},n=new XMLHttpRequest;n.responseType="json",n.open("POST","https://httpbin.org/post"),n.send(JSON.stringify(t)),n.addEventListener("load",function(){400<=XPathResult.status?s.innerText="Что-то пошло не так":(s.insertAdjacentText("beforebegin",s.innerText),s.innerText=n.response.data),console.log(n)})})}();
//# sourceMappingURL=script-dist.js.map