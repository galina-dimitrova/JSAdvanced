function acceptance() {
	let company = $('#fields input').eq(0).val();
	let product = $('#fields input').eq(1).val();
	let quantity = $('#fields input').eq(2).val();
	let scrape = $('#fields input').eq(3).val();

	if(company !== ''&&product!==''&&Number(quantity)&&Number(scrape)&&quantity-scrape>0){
		let div = $('<div>');
		let p = $('<p>');
		p.text(`[${company}] ${product} - ${quantity-scrape} pieces`);
		let btn = $('<button>');
		btn.attr("type='button'");
		btn.text('Out of stock');
		btn.on('click', ()=>{
			btn.parent().remove();
		})
		div.append(p);
		div.append(btn);
		$('#warehouse').append(div)
	
	} 

	$('#fields input').eq(0).val('');
	$('#fields input').eq(1).val('');
	$('#fields input').eq(2).val('');
	$('#fields input').eq(3).val('');
}