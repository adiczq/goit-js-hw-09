function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const formEl = document.querySelector('.form');
console.log(formEl);
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const firstDelay = parseInt(formData.get('delay'), 10);
  const step = parseInt(formData.get('step'), 10);
  const amount = parseInt(formData.get('amount'), 10);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, firstDelay + i * step)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay} ms `);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay} ms `);
      });
  }
});
