function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const modalText = document.getElementById('modalText');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Создаем объект с данными формы
    const formData = {
      item: document.getElementById('item').value,
      amount: document.getElementById('amount').value,
      measure: document.querySelector('input[name="measureOptions"]:checked')
        .value,
      textarea: document.getElementById('textarea').value,
      location: document.getElementById('location').value,
      vaccinations: document.getElementById('vaccinations').checked,
      feed: document.getElementById('feed').checked,
      email: document.getElementById('email').value,
    };

    if (!isValidEmail(document.getElementById('email').value)) {
      modalText.textContent = 'Форма не отправлена. Пожалуйста, введите корректный адрес электронной почты.';
    } else {
      modalText.textContent = 'Форма отправлена.';
    }
    $('#exampleModal').modal('show');
    // Выводим объект в консоль
    console.log('formData', formData);
 
  });
});
