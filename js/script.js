(function() {
  const myForm = document.querySelector('#myForm');
  const sendButton = document.querySelector('#sendButton');
  const result = document.querySelector('#result');
  const form_host = document.querySelector('#form_host');
  const form_price = document.querySelector('#form_price');
  const form_count = document.querySelector('#form_count');
  const form_rate_id = document.querySelector('#form_rate_id');

  //Обработчик события "клик"
  sendButton.addEventListener('click', function(event) {
    event.preventDefault(); //страница не будет перезагружаться после клика

    if (validateForm(myForm)) {
      //запускаем проверку правильности заполнения данных.

      //собираем данные с формы - name
      const data = {
        action: 'addPayment',
        params: {
          host: myForm.elements.host.value,
          price: myForm.elements.price.value,
          count: myForm.elements.count.value,
          rate_id: myForm.elements.rate_id.value
        }
      };

      // код, обрабатывающий данные формы:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json'; //ожидаем от сервера данные в формате json
      xhr.open('POST', 'https://zeta2.dev.sliza.ru/api/v1/payment.php'); // Метод post и куда отправляем данные.
      xhr.send(JSON.stringify(data)); // превращаем данные в сроку и отправляем на сервер
      xhr.addEventListener('load', () => {
        if (xhr.response.status >= 400) {
          result.innerText = 'Что-то пошло не так';
        } else {
          //мультизапись - без удаления предыдущего до перезагрузки:
          result.insertAdjacentHTML('beforebegin', "<div class='old_result'>" + result.innerHTML + '</div>');

          // вывод необходимых значений по колонкам:
          result.innerHTML =
            '<div>' +
            data.params.host +
            '</div>' +
            '<div>' +
            data.params.price +
            '</div>' +
            '<div>' +
            data.params.count +
            '</div>' +
            '<div>' +
            data.params.rate_id +
            '</div>' +
            '<div>' +
            xhr.response.result +
            '</div>';
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
