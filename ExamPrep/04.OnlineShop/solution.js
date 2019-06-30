function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let name = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let button = $('#submit');

    name.on('input', ()=>button.attr('disabled', false));
    button.on('click', checkAdd)

    function checkAdd(){
        let capacity = $('#capacity').val();
        if (+capacity+Number(quantity.val())<=150) {
            addProd(capacity, Number($('#sum').val()));    
        }      
    }

    function addProd(capacity, totalPrice) {
        $('#capacity').val(`${+capacity+Number(quantity.val())}`)
        $('#sum').val(`${totalPrice+Number(price.val())}`)
        let p = $('<li>');
        p.text(`Product: ${name.val()} Price: ${price.val()} Quantity: ${quantity.val()}`);
        $('.display').append(p);
        if (+$('#capacity').val()===150) {
            full();
        }
    
        reset();
    }

    function reset() {
        name.val('');
        price.val(1);
        quantity.val(1);
        button.prop('disabled', true);
    }

    function full(){
    $('#capacity').attr('class', 'fullCapacity');
    $('#capacity').val('full');
    button.prop('disabled', true);
    name.prop('disabled', true);
    price.prop('disabled', true);
    quantity.prop('disabled', true);

    }
   
}
