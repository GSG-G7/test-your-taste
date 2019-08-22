const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const name = document.querySelector('.name').value;
  const address = document.querySelector('.address').value;
  const image = document.querySelector('.image').value;
  const rate = document.querySelector('.rate').value;
  const user = document.querySelector('.user').value;
  const user_email = document.querySelector('.user_email').value;
  if (!name.trim() || !address.trim() || !image.trim() || !rate.trim() || !user.trim() || !user_email.trim()) {
    alert('fill all field');
    e.preventDefault();
  } else if (!Number.isInteger(rate)) {
    alert('enter rate as number');
    e.preventDefault();
  }
});
