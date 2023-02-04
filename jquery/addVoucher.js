function checkAllData() {
    isValidVoucherID = checkVoucherID();
    isValidVoucherDescription = checkVoucherDescription();
    isValidVoucherPercent = checkVoucherVoucherPercent();

    isValid = isValidVoucherID && isValidVoucherDescription && isValidVoucherPercent;

    return isValid;
}

function checkVoucherID() {
    voucherID = $("#voucherID").val();
    if (voucherID === "") {
        $("#txtVoucherIDMessage").html("ID of voucher can not be empty");
    } else {
        $("#txtVoucherIDMessage").html("");
    }
    return voucherID !== "";
}

function checkVoucherDescription() {
    voucherDescription = $("#voucherDescription").val();
    if (voucherDescription === "") {
        $("#txtVoucherDescriptionMessage").html("Description of voucher can not be empty");
    } else {
        $("#txtVoucherDescriptionMessage").html("");
    }
    return voucherDescription !== "";
}

function checkVoucherVoucherPercent() {
    voucherPercent = $("#voucherPercent").val();
    if (voucherPercent < 0) {
        $("#txtVoucherPercentMessage").html("Discount percentage must be greater than zero");
    } else if (voucherPercent === "") {
        $("#txtVoucherPercentMessage").html("Discount percentage of voucher can not be empty");
    }else {
        $("#txtVoucherPercentMessage").html("");
    }
    return voucherPercent !== "";
}

$(document).ready(function () {
    $("#voucherID").blur(function () {
        checkVoucherID();
    });
    $("#voucherDescription").blur(function () {
        checkVoucherDescription();
    });
    $("#voucherPercent").blur(function () {
        checkVoucherVoucherPercent();
    });
    $("#myForm").bind({
        'submit': function () {
            return checkAllData();
        }
    });
});