function create(words) {
   let content = $('#content');
   
   words.forEach(element => {
      let div = $('<div>');
      div.on('click', function () {
         $(this).find('p').css('display', 'block');
      })
      let p = $('<p>');
      p.css('display', 'none');
      p.text(element);
      div.append(p);
      content.append(div);
   });

}