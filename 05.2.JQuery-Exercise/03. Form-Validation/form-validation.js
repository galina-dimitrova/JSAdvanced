function validate() {
	let companyInfo = $('#companyInfo');

	$('#submit').on('click', checkData);
	$('#company').on('click', showHideCompanyInfo);

	function checkData(ev){
		ev.preventDefault();

		let username = $('#username');
		let email = $('#email');
		let password = $('#password');
		let confirmPassword = $('#confirm-password');
		let companyNumber = $('#companyNumber');
		let isValid = true;

		if (!/^[A-Za-z0-9]{3,20}$/g.test(username.val())) {
			username.css('border-color', 'red')
			isValid = false;
		}
		if (!/(.+)?@(.+)?\.(.+)?/g.test(email.val())) {
			email.css('border-color', 'red')
			isValid = false;
		}
		if(!/^\w{5,15}$/.test(password.val())){
			password.css('border-color', 'red')
			isValid = false;
		}
		if (!/^\w{5,15}$/.test(confirmPassword.val())||password.val()!==confirmPassword.val()) {
			password.css('border-color', 'red')
			confirmPassword.css('border-color', 'red')
			isValid = false;
		}
		if (companyInfo.css('display') === 'block' &&
			(+companyNumber.val()<1000 || +companyNumber.val()>9999)) {
				companyNumber.css('border-color', 'red');
			isValid = false;
		}

		if (isValid === true) {
			$('#valid').css('display', 'block')
		}
	}

	function showHideCompanyInfo(){
		if (companyInfo.css('display') === 'none') {
			companyInfo.css('display', 'block');
		} else {
			companyInfo.css('display', 'none');
		}
	}
}
