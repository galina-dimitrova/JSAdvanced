function validateRequest(input) {
    const uriRgx = /^([\w.]+)$gm/; //??
    const messageRgx = /^([^><\\&'"]+)$gm/;
    let validMethod = true;
    let validUri = true;
    let validVersion = true;
    let validMessage = true;

    if (input.hasOwnProperty('method')) {
        validMethod =  methodValidator(input) 
        if (!validMethod) {
            printErrorMsg('Method')
        }
    } else{
        printErrorMsg('Method')
    }
    if (input.hasOwnProperty('uri')) {
        validUri = uriValidator(input) 
        if (!validUri) {
            printErrorMsg('URI')
        }
    }else{
        printErrorMsg('URI')
    }
    if (input.hasOwnProperty('version')) {
        validVersion = versionValidator(input) 
        if (!validVersion) {
            printErrorMsg('Version')
        }
    }else{
        printErrorMsg('Version')
    }
    if (input.hasOwnProperty('message')) {
       validMessage = messageValidator(input)
       if (!validMessage) {
        printErrorMsg('Message')
    } 
    }else{
        printErrorMsg('Message')
    }
    if (validMethod && validUri&&validVersion&&validMessage) {
        return input
    } 

    function printErrorMsg(header){
        throw new Error(`Invalid request header: Invalid ${header}`)
    }

    function methodValidator(input) {
        let valid = false       
            if (input.method === 'GET'||
                input.method === 'POST'||
                input.method === 'DELETE'||
                input.method === 'CONNECT') {
                    return true;
            }
            return valid;  
    }

    function uriValidator(input) {
        
        let valid = false;
        if (uriRgx.test(input.uri)||input.uri === '*') {
            valid = true;
            console.log(input.uri)
        }
        return valid;
    }

    function versionValidator(input) {
        let valid = false       
            if (input.version === 'HTTP/0.9'||
                input.version === 'HTTP/1.0'||
                input.version === 'HTTP/1.1'||
                input.version === 'HTTP/2.0') {
                    return true;
            }
            return valid;  
    }

    function messageValidator(input) {
        let valid = false;
        if (messageRgx.test(input.message)||input.message === '') {
            valid = true;
        }
        return valid;
    }
}
validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  });