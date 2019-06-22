function addItem() {
    let item = document.getElementById('newItemText').value;
    let newItem = document.createElement('li');
    newItem.textContent = item;
    document.getElementById('items').appendChild(newItem);
}