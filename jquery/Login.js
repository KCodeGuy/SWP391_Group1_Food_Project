var patt_name = /^[a-zA-Z][a-zA-Z0-9 _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
var patt_phone = /^0[1-9]\d{8}$/;
var patt_email = /^\w+([\.-_]\w+)*@\w+([\.-_]\w+)*(\.\w{2,3})+$/;

function checkAllData() {
    isValidEmail = checkEmail();
    isValid = isValidAddressEmail;

    return isValid;
}

function checkEmail() {
    email = $("#email").val();
    if (email === "") {
        $("#txtEmailMessage").html("Email can't be empty");
    } else if (patt_email.test(email) === false) {
        $("#txtEmailMessage").html("Email is invalid");
    } else {
        $("#txtEmailMessage").html("");
    }
    return patt_email.test(email) && email !== "";
}

function checkPassword() {
    password = $("#password").val();
    if (password === "") {
        $("#txtPasswordMessage").html("Password can't be empty");
    } else if (patt_password.test(password) === false) {
        $("#txtPasswordMessage").html("Password is invalid");
    } else {
        $("#txtPasswordMessage").html("");
    }
    return patt_password.test(password) && password !== "";
}

$(document).ready(function () {
    $("#email").blur(function () {
        checkEmail();
    });
    $("#password").blur(function () {
        checkPassword();
    });

    $("#myForm").bind({
        'submit': function () {
            return checkAllData();
        }
    });
});