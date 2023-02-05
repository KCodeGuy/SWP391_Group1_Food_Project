var patt_name = /^[a-zA-Z][a-zA-Z0-9 _ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
function checkAllData() {
    isValidName = checkName();
    isValidPrice = checkPrice();
    isValidSalesOff = checkSalesOff();
    isValid = isValidName && isValidPrice && isValidSalesOff ;
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

    $("#myForm").bind({
        'submit': function () {
            return checkAllData();
        }
    });
});