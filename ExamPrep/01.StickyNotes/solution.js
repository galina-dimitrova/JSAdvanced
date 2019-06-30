function addSticker(){
    let title = $('.title').val();
    let content = $('.content').val();
    
    function remSticker(e){
        e.preventDefault();
        $(e.target).parent().remove();
    }

    if (title!==''&&content!=='') {
        let li = $('<li class="note-content">');
        li.append($('<a class="button">x</a>'));
        li.children().eq(0).on('click', remSticker)
        li.append($(`<h2>${title}</h2>`))
        li.append($('<hr>'));
        li.append($(`<p>${content}</p>`));
        $('#sticker-list').append(li);

        $('.title').val('');
        $('.content').val('');
    }

}