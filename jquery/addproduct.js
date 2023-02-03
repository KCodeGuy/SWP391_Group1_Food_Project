var patt_name = /^[a-zA-Z][a-zA-Z0-9 _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
function checkAllData() {
    isValidName = checkName();
    isValidName1 = checkName1();
    isValid = isValidName&&isValidName1;
    return isValid;
}

function checkName() {
    fullName = $("#name").val();
    if (fullName === "") {
        $("#txtNameMessage").html("Name can't be empty");
    } else if (patt_name.test(fullName) === false) {
        $("#txtNameMessage").html("Name is invalid");
    } else {
        $("#txtNameMessage").html("");
    }
    return patt_name.test(fullName) && fullName !== "";
}
function checkName1() {
    fullName = $("#name1").val();
    if (fullName === "") {
        $("#txtNameMessage1").html("Name can't be empty");
    } else if (patt_name.test(fullName) === false) {
        $("#txtNameMessage1").html("Name is invalid");
    } else {
        $("#txtNameMessage").html("");
    }
    return patt_name.test(fullName) && fullName !== "";
}

$(document).ready(function () {
    $("#name").blur(function () {
        checkName();
    });
    $("#name1").blur(function () {
        checkName1();
    });
    $("#myForm").bind({
        'submit': function () {
            return checkAllData();
        }
    });
});