function addItem() {
    let item = $('#newText').val();
    let newItem = $('<li>');
    let btnDel = $('<a href="#">[Delete]</a>');

    newItem.text(item);
    newItem.append(btnDel);
    $('ul').append(newItem);
    

    btnDel.on('click', deleteItem());
    $('#items').append(newItem);

    function deleteItem(){
        $(this).preventDefault();
        $(this).parent().remove();
    }
}