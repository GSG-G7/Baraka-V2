const subitList = document.querySelector('.home__main__add');
const submitItem = document.querySelector('.item__add');

const error = document.querySelector('.error-msg');

const list = document.querySelector('.home__main__input');
const itemName = document.querySelector('.item__name');
const itemContent = document.querySelector('.item__content');
const itemUser = document.querySelector('.item__user');
console.log('asd');
subitList.addEventListener('submit', e => {
  e.preventDefault();
  error.textContent = '';
  const reg = /^[a-zA-Z0-9-\s]*$/;
  if (!list.value.trim() || !reg.test(list.value)) {
    console.log(list.value);
    error.textContent = 'please enter correct name !!';
    return false;
  }
  return true;
});

submitItem.addEventListener('submit', e => {
  e.preventDefault();
  error.textContent = '';
  const reg = /^[a-zA-Z0-9-\s]*$/;
  if (
    !itemName.value.trim() ||
    !reg.test(itemName.value) ||
    !itemContent.value.trim() ||
    !reg.test(itemContent.value) ||
    !itemUser.value.trim() ||
    !reg.test(itemUser.value)
  ) {
    error.textContent = 'please enter correct name !!';
    return false;
  }
  return true;
});
