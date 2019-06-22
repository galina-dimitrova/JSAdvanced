function stopwatch() { 
    let runTimer = false;
    let time = $('#time')
    let timer;

    if (!runTimer) {
        $('#startBtn').on('click', startTimer);
    }
  
    function stopTimer() {
        clearInterval(timer);
        $('#stopBtn').attr('disabled',true);
        $('#startBtn').attr('disabled',false)
        runTimer = false;
    }

    function startTimer() {
        time.text('00:00');
        timer =  setInterval(timeUpdate, 1000)
        $('#stopBtn').attr('disabled',false);
        $('#stopBtn').on('click', stopTimer);
        $('#startBtn').attr('disabled',true)
        runTimer = true;
    }

    function timeUpdate(){
        let seconds = time.text().split(':')[1];
        let minutes = time.text().split(':')[0];

        seconds = +seconds+1;
      
        if(+seconds === 60){        
           seconds='00';
           minutes = +minutes+1;
        }

        time.text(`${formater(minutes)}:${formater(seconds)}`);
    }

    function formater(time){
        return ("0"+time).slice(-2);
     }
}