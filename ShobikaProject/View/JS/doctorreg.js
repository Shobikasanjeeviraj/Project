function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


Form.addEventListener('submit', e => {
    e.preventDefault();

    validateForm();
});

function validateForm() {

    var name = document.Form.name.value;
    var password = document.Form.password.value;
    var repassword = document.Form.repassword.value;
    var moblie = document.Form.moblie.value;
    var email = document.Form.email.value;
    var country = document.Form.country.value;
    var gender = document.Form.gender.value;
    var category = document.Form.category.value;
    var fees = document.Form.fees.value;
    var timing = document.Form.timing.value;
    var experience = document.Form.experience.value;


    var nameErr = passwordErr = repasswordErr = moblieErr = emailErr = countryErr = genderErr = categoryErr = feesErr = timingErr = experienceErr = true;


    if (name === "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }

    if (password === "") {
        printError("passwordErr", "Please enter your password");
        var elem = document.getElementById("password");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
        var elem = document.getElementById("password");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }


    if (repassword === "") {
        printError("repasswordErr", "Please enter your password");
        var elem = document.getElementById("repassword");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        if (repassword !== password) {
            printError("repassword", "Password does not match");
        } else {
            printError("repasswordErr", "");
            repasswordErr = false;
            var elem = document.getElementById("repassword");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }



    if (moblie === "") {
        printError("moblieErr", "Please enter your moblie number");
        var elem = document.getElementById("moblie");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[@1-9]\d{9}$/;
        if (regex.test(moblie) === false) {
            printError("moblieErr", "Please enter a valid 10 digit moblie number");
            var elem = document.getElementById("moblie");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("moblieErr", "");
            moblieErr = false;
            var elem = document.getElementById("moblie");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if (email === "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if (country === "Select") {
        printError("countryErr", "Please select your country");
        var elem = document.getElementById("country");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("countryErr", "");
        countryErr = false;
        var elem = document.getElementById("country");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if (gender === "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if (category == "Select") {
        printError("categoryErr", "Please select your category");
        var elem = document.getElementById("category");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("categoryErr", "");
        categoryErr = false;
        var elem = document.getElementById("category");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    if (fees === "Select") {
        printError("feesErr", "Please select your fees");
        var elem = document.getElementById("fees");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("feesErr", "");
        feesErr = false;
        var elem = document.getElementById("fees");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    if (timing === "Select") {
        printError("timingErr", "Please select your timing");
        var elem = document.getElementById("timing");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("timingErr", "");
        timingErr = false;
        var elem = document.getElementById("timing");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    if (experience === "Select") {
        printError("experienceErr", "Please select your experience");
        var elem = document.getElementById("experience");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("experienceErr", "");
        experienceErr = false;
        var elem = document.getElementById("experience");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if ((nameErr || passwordErr || repasswordErr || moblieErr || emailErr || countryErr || genderErr || categoryErr || feesErr || timingErr || experienceErr) == true) {
        return false;
    }
};