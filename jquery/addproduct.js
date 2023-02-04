var patt_name = /^[a-zA-Z][a-zA-Z0-9 _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
function checkAllData() {
    isValidName = checkName();
    isValidPrice = checkPrice();
    isValidSalesOff = checkSalesOff();
    isValidDescription = checkDescription();
    isValid = isValidName && isValidPrice && isValidSalesOff && isValidDescription;
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
function checkPrice() {
    price = $("#price").val();
    if (price === "") {
        $("#txtNameMessage1").html("Price can't be empty");
    } else if (price < 0) {
        $("#txtNameMessage1").html("Price greater than or equal 0");
    } else {
        $("#txtNameMessage1").html("");
    }
    return patt_name.test(price) && price !== "";
}
function checkSalesOff() {
    salesoff = $("#salesoff").val();
    if (salesoff === "") {
        $("#txtNameMessage2").html("Sales off can't be empty");
    } else if (salesoff < 0 || salesoff > 100) {
        $("#txtNameMessage2").html("Sale off from 0 to 100");
    } else {
        $("#txtNameMessage2").html("");
    }
    return patt_name.test(salesoff) && salesoff !== "";
}
function checkStatus() {
    statuss = $("#statuss").val();
    if (statuss === "") {
        $("#txtNameMessage3").html("Status can't be empty");
    } else {
        $("#txtNameMessage3").html("");
    }
    return patt_name.test(statuss) && statuss !== "";
}
function checkCategory() {
    category = $("#category").val();
    if (category === "") {
        $("#txtNameMessage4").html("Category can't be empty");
    } else {
        $("#txtNameMessage4").html("");
    }
    return patt_name.test(category) && category !== "";
}
function checkDescription() {
    description = $("#description").val();
    if (description === "") {
        $("#txtNameMessage5").html("Description can't be empty");
    } else {
        $("#txtNameMessage5").html("");
    }
    return patt_name.test(description) && description !== "";
}

$(document).ready(function () {
    $("#name").blur(function () {
        checkName();
    });
    $("#price").blur(function () {
        checkPrice();
    });
    $("#salesoff").blur(function () {
        checkSalesOff();
    });
    $("#statuss").blur(function () {
        checkStatus();
    });
    $("#category").blur(function () {
        checkCategory();
    });
    $("#description").blur(function () {
        checkDescription();
    });
    $("#myForm").bind({
        'submit': function () {
            return checkAllData();
        }
    });
});