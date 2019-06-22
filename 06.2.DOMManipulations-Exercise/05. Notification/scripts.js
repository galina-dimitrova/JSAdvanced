function notify(message) {
    document.getElementById('notification').textContent = message;
    document.getElementById('notification').style.display = 'block';
    function msgHide(){
        document.getElementById('notification').style.display = 'none';
    }
    setTimeout(msgHide, 2000);
}