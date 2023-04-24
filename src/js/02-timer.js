import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const pad = value => String(value).padStart(2, '0');

const timer = {
  timestamp: null,
  interval: null,

  ready(stamp) {
    this.timestamp = stamp;
    startButton.addEventListener('click', this.start);
  },

  start() {
    startButton.disabled = true;
    timer.interval = setInterval(() => {
      let diff = timer.timestamp - Date.now();

      if (diff < 1000) {
        timer.stop();
        Notify.failure('Time is up');
      }

      [timerDays, timerHours, timerMinutes, timerSeconds].forEach((el, i) => {
        el.textContent = pad(
          Math.floor(
            (i === 0 ? diff : diff % (86400000 / Math.pow(60, i))) /
              (86400000 / Math.pow(60, i + 1))
          )
        );
      });
    }, 1000);
  },

  stop() {
    clearInterval(timer.interval);
    startButton.removeEventListener('click', this.start);
  },
};

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      startButton.disabled = false;
      timer.stop();
      timer.ready(selectedDates[0]);
      return;
    }
    startButton.disabled = true;
    Notify.failure('Please choose a date in the future');
  },
});
