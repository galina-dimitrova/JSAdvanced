class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId(){
        return this._clientId;
    }
    set clientId(id){
        if (Number.isInteger(+id)&&id.length === 6) {
            this._clientId = id;
        } else{
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }

    get email(){
        return this._email;
    }
    set email(email){
        let emailPattern = /[a-zA-Z]+@[a-zA-Z\.]+/
        if (emailPattern.test(email)) { //reg
            this._email = email;
        } else{
            throw TypeError('Invalid e-mail')
        }
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        if (firstName.length>=3&&firstName.length<=20) {
            let namePat = /^[A-Za-z]+$/
            if (namePat.test(firstName)) {
                this._firstName = firstName;
            } else {
                throw TypeError('First name must contain only Latin characters')
            }
        } else{
            throw TypeError('First name must be between 3 and 20 characters long')
        }
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        if (lastName.length>3&&lastName.length<20) {
            let namePat = /^[A-Za-z]+$/
            if (namePat.test(lastName)) {
                this._lastName = lastName;
            } else {
                throw TypeError('Last name must contain only Latin characters')
            }
        } else{
            throw TypeError('Last name must be between 3 and 20 characters long')
        }
    }
}

let acc = new CheckingAccount('123546', 'ivплa@nome.com', 'Iкйъух', 'Petrov')
console.log(`${acc._clientId} ${acc._email} ${acc._firstName} ${acc._lastName} ${JSON.stringify(acc._products)}`)