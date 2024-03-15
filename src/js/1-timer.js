import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let timeInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    timeInterval = userSelectedDate - options.defaultDate;

    if (timeInterval < 1) {
      iziToast.error({
        color: '#EF4040',
        title: 'Error',
        titleColor: '#ffffff',
        position: 'topRight',
        messageColor: '#ffffff',
        message: `Please choose a date in the future`,
      });
    } else {
      btnStart.classList.remove('startBtnNoActive');

      btnStart.disabled = false;
      inputDateTime.disabled = true;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const inputDateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const calendar = flatpickr(inputDateTime, options);
const showTime = document.querySelectorAll('.value');

btnStart.classList.add('startBtnNoActive');
btnStart.disabled = true;

btnStart.addEventListener('click', event => {
  btnStart.classList.add('startBtnNoActive');

  const changeTime = setInterval(() => {
    timeInterval = userSelectedDate - new Date();
    event.preventDefault();
    inputDateTime.disabled = true;

    if (timeInterval < 1) {
      btnStart.disabled = true;
      inputDateTime.disabled = false;
      clearInterval(changeTime);
      return;
    }

    const countDown = convertMs(timeInterval);

    showTime[0].innerText = countDown.days.toString().padStart(2, '0');
    showTime[1].innerText = countDown.hours.toString().padStart(2, '0');
    showTime[2].innerText = countDown.minutes.toString().padStart(2, '0');
    showTime[3].innerText = countDown.seconds.toString().padStart(2, '0');
  }, 1000);
});
