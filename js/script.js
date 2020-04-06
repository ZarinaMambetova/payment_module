(function() {
  const myForm = document.querySelector('#myForm');
  const sendButton = document.querySelector('#sendButton');
  const result = document.querySelector('#result');

   sendButton.addEventListener('click', function(event) {
    //Обработчик события "клик"
     event.preventDefault(); //страница не будет перезагружаться после клика
     
     if (validateForm(myForm)) {  //запускаем проверку правильности заполнения данных. 

        //собираем данные с формы - name
       const data = {
        action: "addPayment",
        params: {
            host: myForm.elements.host.value,
            price: myForm.elements.price.value,
            count: myForm.elements.count.value,
            rate_id: myForm.elements.rate_id.value,
        }
         
       };
       

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'; //ожидаем от сервера данные в формате json
        xhr.open('POST', 'https://zeta2.dev.sliza.ru/api/v1/payment.php'); // Метод post и куда отправляем данные. 
        xhr.send(JSON.stringify(data)); // превращаем данные в сроку и отправляем на сервер
        xhr.addEventListener('load', () => {
          if (xhr.response.status >= 400) {
            result.innerText = 'Что-то пошло не так';
          } else {
            result.insertAdjacentText('beforebegin', result.innerText); //мультизапись - без удаления предыдущего
            result.innerText = xhr.response.data; 
            
                          
          }
          
          console.log(xhr);
        });
     }
   });
  
  
  // валидация заполнения каждого элемента формы. Если эта часть ок, тогда запрос пройдет:

  function validateForm(form) { 
    let valid = true;

    if (!validateField(form.elements.host)) {
      valid = false;
    }

    if (!validateField(form.elements.rate_id)) {
      valid = false;
    }

    if (!validateField(form.elements.count)) {
      valid = false;
    }

    if (!validateField(form.elements.price)) {
      valid = false;
    }
    return valid;
  }

  function validateField(field) {
      field.nextElementSibling.textContent = field.validationMessage;
      return field.checkValidity();
  }

})();

