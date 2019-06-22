function validate() {
    $('#email').on('change', function(){
        console.log($('#email').val())
        if (!/^[a-z]+@[a-z]+\.[a-z]+$/g.test($('#email').val())) {
            $(this).addClass('error')
        } else{
            $(this).removeClass('error')
        }
    });
}