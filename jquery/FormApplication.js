var reGexPhone = /^0[1-9]\d{8}$/;
var reGexEmail = /^\w+([\.-_]\w+)*@\w+([\.-_]\w+)*(\.\w{2,3})+$/;
    
function checkAllData() {
  isValidName = checkName();
  isValidPhone = checkPhone();
  isValidEmail = checkEmail();
  isValidAddress = checkAddress();
  isValidPositon = checkPosition();

  isValid =isValidName && isValidPhone && isValidEmail && isValidAddress && isValidPosition;

  return isValid;
}

function checkName() {
  username = $("#name").val();
  if (username === "") {
      $("#errorName").html("Full name cannot be left blank!");
  } else {
      $("#errorName").html("");
  }
  return username.trim() != "";
}

function checkPhone() {
  phone = $("#phone").val();
  if (phone === "") {
      $("#errorPhone").html("Phone cannot be left blank!");
  } else if (reGexPhone.test(phone) === false) {
      $("#errorPhone").html("Invalid phone!");
  } else {
      $("#errorPhone").html("");
  }
  return phone !== "" && reGexPhone.test(phone);
}


function checkEmail() {
  email = $("#email").val();
  if (email === "") {
      $("#errorEmail").html("Email cannot be left blank!");
  } else if (reGexEmail.test(email) === false) {
      $("#errorEmail").html("Invalid email!");
  } else {
      $("#errorEmail").html("");
  }
  return email !== "" && reGexEmail.test(email);
}

function checkAddress() {
  address = $("#address").val();
  if (address === "") {
      $("#errorAddress").html("Address cannot be left blank!");
  } else {
      $("#errorAddress").html("");
  }
  return address.trim() != "";
}
 
function checkPosition() {
  position = $("#position").val();
  if (position === "") {
      $("#errorPosition").html("On-position cannot be left blank!");
  } else {
      $("#errorPosition").html("");
  }
  return position.trim() != "";
}

$(document).ready(function () {
  $("#name").blur(function () {
    checkName();
  });

  $("#phone").blur(function () {
    checkPhone();
  });

  $("#email").blur(function () {
    checkEmail();
  });

  $("#address").blur(function () {
    checkAddress();
  });

  $("#position").blur(function () {
    checkPosition();
  });

  $("#myForm").bind({
      'submit': function () {
          return checkAllData();
      }
  });
});