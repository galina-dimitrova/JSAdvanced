function focus() {
        $('input').on('focus', function(){
            $(this).parent().addClass('focused')
        });
        $('input').on('blur', function(){
            $(this).parent().removeClass('focused')
        });
       
}