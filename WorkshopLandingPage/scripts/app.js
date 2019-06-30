
(function attachEvents(){
    $('#bookHourBtn').click(addConsultation);

    function addConsultation(e){
        e.preventDefault();
        e.stopPropagation();

        let validUsername = usernameValidation();
        let validLecturerName = lecturerValidation();
        let filledInputFields = filledInputFieldsValidation();

        if (validUsername&&validLecturerName&&filledInputFields) {
            $.notify("Consultation added", "success");
            addNewConsultation();
        } else {
            $.notify("Try again", "error");
        }
    }

    function usernameValidation(){
        let isValid = false;
        const regex = /^([A-Za-z])([A-Za-z0-9_]{2,24})$/gm;       
        let username = $('#username').val();
        if (regex.test(username)) {
            isValid = true;
        }
        return isValid;
    }

    function lecturerValidation(){
        let isValid = false;
        let selectedLecturer = $('#lecturer option:selected').val();
        
        if (selectedLecturer === "Ivaylo"|| selectedLecturer === "Maya"
        || selectedLecturer === "Hristomir" || selectedLecturer === "Antonia"||
        selectedLecturer === "Kiril") {
            isValid = true;
        }
        return isValid;
    }

    function filledInputFieldsValidation(){
        let isValid = false;
        if ($('#datetimepicker').val()!== '') {
            isValid = true;
        }
        return isValid;
    }

    function addNewConsultation(){
        let lecturer = $('#lecturer option:selected').val();
        let dateTime = $('#datetimepicker').val().split(' ');
        let date = dateTime[0].split('/');
        let outputDate = `${date[1]}/${date[2]}`;
        let time = dateTime[1];
        $('.education article:nth-child(3) .box-body ul')
        .append(`<li><span>${lecturer} - ${outputDate} - ${time}</span><i class="fas fa-chevron-circle-right"></i></li>`)
    
        increaseCount()
    }

    function increaseCount(){
        let count = $('.education article:nth-child(3) .box-footer span');
        let currentCount = count.text();
        count.text(++currentCount);
    }
}());