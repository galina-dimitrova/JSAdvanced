function solution() {

		let type = $('#toyType');
		let price = $('#toyPrice');
		let description = $('#toyDescription');
		let giftList = $('#christmasGiftShop')

		if (type.val() && +price.val() && description.val()) {
			let gift = $('<div>');
			gift.addClass('gift');
			let img = $('<img src="gift.png">');
			let h2 = $('<h2>');
			h2.text(type.val());
			let p = $('<p>');
			p.text(description.val());
			let btn = $('<button>');
			btn.text(`Buy it for $${price.val()}`);
			
			gift.append(img);
			gift.append(h2);
			gift.append(p);
			gift.append(btn);
			giftList.append(gift)

			btn.on('click', function(){
				gift.remove()
			})
			
			type.val("");
			price.val('');
			description.val('');
		}
	
}