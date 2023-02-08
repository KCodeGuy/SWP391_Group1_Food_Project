var reGexPass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function checkAllData() {
  isValidPass = checkPass();
  isValidCPass = checkPassConfirm();

  isValid = isValidPass && isValidCPass;

  return isValid;
}

function checkPass() {
pass = $("#pass").val();
  if (pass === "") {
      $("#errorPass").html("Password cannot be left blank!");
  } else if (reGexPass.test(pass) === false) {
      $("#errorPass").html("Invalid password!");
  } else {
      $("#errorPass").html("");
  }
  return pass !== "" && reGexPass.test(pass);
}

function checkPassConfirm() {
pass = $("#passw").val();
  if (pass === "") {
      $("#errorConPass").html("Confirm password cannot be left blank!");
  } else if (reGexPass.test(pass) === false) {
      $("#errorConPass").html("Invalid confirm password!");
  } else {
      $("#errorConPass").html("");
  }
  return pass !== "" && reGexPass.test(pass);
}

$(document).ready(function () {
  $("#pass").blur(function () {
    checkPass();
  });

  $("#passw").blur(function () {
    checkPass();
  });

  $("#myForm").bind({
      'submit': function () {
          return checkAllData();
      }
  });
});

