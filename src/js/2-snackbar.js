// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = e.currentTarget.elements.delay.value;
  const radioChecked = e.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioChecked === 'fulfilled') {
        resolve();
      } else if (radioChecked === 'rejected') {
        reject();
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        color: '#59A10D',
        title: 'OK',
        titleColor: '#ffffff',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#ffffff',
      });
    })
    .catch(error => {
      iziToast.error({
        color: '#EF4040',
        title: 'Error',
        titleColor: '#ffffff',
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#ffffff',
      });
    });
});
