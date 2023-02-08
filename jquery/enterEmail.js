var emailPattern = /^\w+([\.-_]\w+)*@\w+([\.-_]\w+)*(\.\w{2,3})+$/;

function checkEmail() {
    email = $("#email").val();
    if (email === "") {
        $("#txtEmailMessage").html("Email can not be empty");
    } else if (emailPattern.test(email) === false) {
        $("#txtEmailMessage").html("Email invalidate");
    } else {
        $("#txtEmailMessage").html("");
    }
    return email !== "" && emailPattern.test(email);
}

$(document).ready(function () {
    $("#email").blur(function () {
        checkEmail();
    });

    $("#myForm").bind({
        'submit': function () {
            return checkEmail();
        }
    });
});