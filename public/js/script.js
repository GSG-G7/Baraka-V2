const input = document.querySelector('#addlist');
input.addEventListener('keyup', e => {
  console.log(e.target.value);
  e.target.value = e.target.value.trim();
});
