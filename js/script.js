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
          host: myForm.elements.host.value,
          rate_id: myForm.elements.rate_id.value,
          count: myForm.elements.count.value,
          price: myForm.elements.price.value 
        };

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'; //ожидаем от сервера данные в формате json
        xhr.open('POST', 'https://httpbin.org/post'); // Метод post и куда отправляем данные. Адрес сервера сменить на нужный!
        xhr.send(JSON.stringify(data)); // превращаем данные в сроку и отправляем на сервер
        xhr.addEventListener('load', () => {
          if (XPathResult.status >= 400) {
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

