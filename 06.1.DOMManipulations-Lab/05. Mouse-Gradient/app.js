function attachGradientEvents() { //???
    $('#gradient').on('mousemove', takePosition);

    function takePosition(e){
        let position = e.pageX-$(this).offset().left; 
        document.getElementById('result').textContent=`${Math.floor(position/3)}%`;
    }
    
}