function timer() {
   let seconds = $('#seconds');
   let minutes = $('#minutes');
   let hours  = $('#hours');
   let timer;
   let isTicking = false;
   let startBtn = $('#start-timer').on('click', function(){
      if (isTicking === false) {
         timer =  setInterval(secondsUpdate, 1000);
         isTicking = true;
      }
      
   });
   let stopBtn = $('#stop-timer').on('click', stopTimer);

   function secondsUpdate(){
         seconds.text(formater(+seconds.text()+1))
      
      if(+seconds.text()===60){        
         seconds.text('00');
         minutes.text(formater(+minutes.text()+1))
      }
      if (+minutes.text()===60) {
         minutes.text('00');
         hours.text(formater(+hours.text()+1))
      }

   }

   function stopTimer(){
      clearInterval(timer);
      isTicking = false;
   }

   function formater(time){
      return ("0"+time).slice(-2);
   }
}