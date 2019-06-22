function realEstateAgency () {
	$('#regOffer button').on('click', regOffer);
	$('#findOffer button').on('click', findOffer);

	function regOffer(){
		let rent = $('input[name="apartmentRent"]').val();
		let type = $('input[name="apartmentType"]').val();
		let commission = $('input[name="agencyCommission"]').val();

		if (Number(rent)&&rent>0&&Number(commission)
		&&commission>=0&&commission<=100
		&&type!==''&&!type.includes(':')) {
			
			let div = $('<div>');
			div.addClass('apartment');
			let pRent = $('<p>');
			pRent.text(`Rent: ${rent}`);
			let pType = $('<p>');
			pType.text(`Type: ${type}`);
			let pComm = $('<p>');
			pComm.text(`Commission: ${commission}`);
			div.append(pRent).append(pType).append(pComm);
			$('#building').append(div);

			$('#message').text('Your offer was created successfully.');
			
			$('input[name="apartmentRent"]').val('');
			$('input[name="apartmentType"]').val('');
			$('input[name="agencyCommission"]').val('');
		} else{
			$('#message').text('Your offer registration went wrong, try again.');
		}
		

	}

	function findOffer(){
		let budget = $('input[name="familyBudget"]').val();
		let apType = $('input[name="familyApartmentType"]').val();
		let name = $('input[name="familyName"]').val();

		if (Number(budget)&&budget>0
		&&apType!==''&&name!=='') {
			let isHomeless = true;
			for(let apartment of Array.from($('.apartment'))){
				if ($(apartment).children().eq(1).text().split(': ')[1] === apType&&
				+$(apartment).children().eq(0).text().split(': ')[1]+Number($(apartment).children().eq(2).text().split(': ')[1])<=budget) {
					let totalProfit = +$('#roof h1').text().split(' ')[2];
					let profit = +$(apartment).children().eq(0).text().split(': ')[1]*(+$(apartment).children().eq(2).text().split(': ')[1]/100)*2;
					$('#roof h1').text(`Agency profit: ${totalProfit+profit} lv.`)
					$(apartment).css('border', '2px solid red')
					$(apartment).children().eq(0).text(`${name}`);
					$(apartment).children().eq(1).text('live here now');
					$(apartment).children().eq(2).remove();
					$(apartment).append($('<button>MomveOut</button>'))
					$(apartment).children().eq(2).on('click', ()=>{
						$(apartment).remove();
						$('#message').text(`They had found cockroaches in ${name}\'s apartment`);
					})

					$('#message').text('Enjoy your new home! :))');
					isHomeless = false;
					break;
				}
				
			}
			if (isHomeless) {
				$('#message').text('We were unable to find you a home, so sorry :(');
			}
	
		} else {
			$('#message').text('We were unable to find you a home, so sorry :(');
		}
		$('input[name="familyBudget"]').val('');
		$('input[name="familyApartmentType"]').val('');
		$('input[name="familyName"]').val('');

	}
}