const form = document.querySelector('form');
const list = document.querySelector('.list');
const items = JSON.parse(localStorage.getItem('items')) || [];

function handleFormSubmit(event) {
  event.preventDefault();
  const itemText = form.item.value;
  const item = { itemText, done: false};
  items.push(item);
  const itemEvent = new CustomEvent('itemUpdate', null);
  form.dispatchEvent(itemEvent);
  form.reset();
}

function renderItemList() {
  localStorage.setItem('items', JSON.stringify(items));
  const itemList = items.map((item, index) => {
    return `<li class="shopping-item">
    <input ${item.done && 'checked'} type="checkbox" id="item${index}" data-index=${index}>
      <label for="item${index}">${item.itemText} </label>
    <button>delete</button>
  </li>`
  }).join('');
  list.innerHTML = itemList;
}

function checkItem(e) {
  if(!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  renderItemList();
}

function deleteItem(e) {
  if(!e.target.matches('button')) return;
  const index = e.target.dataset.index;
  items.splice(index, 1);
  console.log(items);
  renderItemList();
}

renderItemList();
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('itemUpdate', renderItemList);
list.addEventListener('click', checkItem);
list.addEventListener('click', deleteItem);
