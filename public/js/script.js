const input = document.querySelector('#addlist');
input.addEventListener('keyup', e => {
  e.target.value = e.target.value.trim();
});
