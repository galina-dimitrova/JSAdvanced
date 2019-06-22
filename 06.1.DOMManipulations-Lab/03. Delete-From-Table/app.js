function deleteByEmail() {
    let email = $('input')
    let isMatch = false;
    
    for (let i = 0; i < $('td').length; i++) {
        if (i%2 !== 0) {
            let td = $('td')[i];
            if (td.innerText === email.val()) {          
                td.parentNode.empty();
                td.parentNode.remove();
                isMatch = true;
                $('#result').text("Deleted.")
            }
        }
    }
  
    if (isMatch === false) {
        $('#result').text("Not found.")
    }
    
}