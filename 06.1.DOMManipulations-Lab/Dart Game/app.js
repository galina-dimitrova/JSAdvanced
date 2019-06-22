function dart(){
	const colorMapping = {
		firstLayer: 0,
		secondLayer: 1,
		thirdLayer: 2,
		fourthLayer: 3,
		fifthLayer: 4,
		sixthLayer: 5,
	}

	let isHome = true;

	$('#playBoard').on('click', 'div', onPlayBoardClick)

	function onPlayBoardClick(e) {
		e.stopPropagation();

		let points = getScore(e.target.id);
		selectPlayer(points);
	}

	function getScore(id){
		return $('#scoreBoard')
		.find('tbody tr')
		.eq(colorMapping[id])
		.children()
		.eq(1)
		.text()
		.split(' ')[0];
	}

	function selectPlayer(points){
		
		let selector = '';
		isHome ? selector = '#Home' : selector = '#Away'
		isHome = !isHome;
		changePlayer(selector)
		applyScore(selector, points)

	}

	function applyScore(idName, points){
		if (+$(`${idName}`).children().eq(0).text()<100) {
			$(`${idName}`).children().eq(0)
			.text(+points+Number($(`${idName}`).children().eq(0).text()))
		}
		if (+$(`${idName}`).children().eq(0).text()>=100){
			endGame();
		}
	}

	function changePlayer(player){
		if (player === '#Home') {
			$('#turns').children().eq(0).text('Turn on Away');
			$('#turns').children().eq(1).text('Next is Home');
		} else {
			$('#turns').children().eq(0).text('Turn on Home');
			$('#turns').children().eq(1).text('Next is Away');
		}
	}

	function endGame(){
		if (+$('#Home').children().eq(0).text()>=100){
			$('#Home').children().eq(1).css('background', 'green')
			$('#Away').children().eq(1).css('background', 'red')
		} else {
			$('#Away').children().eq(1).css('background', 'green')
			$('#Home').children().eq(1).css('background', 'red')
		}
		$('#playBoard').off('click')

	}
}

