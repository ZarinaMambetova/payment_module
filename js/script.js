(function() {
  const myForm = document.querySelector('#myForm');
  const sendButton = document.querySelector('#sendButton');
  const result = document.querySelector('#result');
  const form_host = document.querySelector('#form_host');
  const form_price = document.querySelector('#form_price');
  const form_count = document.querySelector('#form_count');
  const form_rate_id = document.querySelector('#form_rate_id');

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
            //мультизапись - без удаления предыдущего:
            result.insertAdjacentText('beforebegin', result.innerText); 
            result.insertAdjacentHTML('beforebegin', '<br>');
            form_host.insertAdjacentText('beforebegin', form_host.innerText);
            form_host.insertAdjacentHTML('beforebegin', '<br>');
            form_price.insertAdjacentText('beforebegin', form_price.innerText);
            form_price.insertAdjacentHTML('beforebegin', '<br>');
            form_count.insertAdjacentText('beforebegin', form_count.innerText);
            form_count.insertAdjacentHTML('beforebegin', '<br>');
            form_rate_id.insertAdjacentText('beforebegin', form_rate_id.innerText);
            form_rate_id.insertAdjacentHTML('beforebegin', '<br>');
            
            // вывод необходимых значений по колонкам:
            result.innerText = xhr.response.result; 
            form_host.innerText = data.params.host; 
            form_price.innerText = data.params.price; 
            form_count.innerText = data.params.count; 
            form_rate_id.innerText = data.params.rate_id; 
                          
          }
          console.log(xhr);
          console.log(data);
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



