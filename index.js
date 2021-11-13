function genPassword() {
  var chars = "";
  if (confirm("lowercase?")) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("uppercase?")) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("numeric?")) {
    chars = chars + "0123456789";
  }
  if (confirm("special charachters?")) {
    chars = chars + "!@#$%^&*()";
  }

  var passwordLength = prompt("password length?", 12);

  if (chars == "" || passwordLength < 8 || passwordLength > 128) {
    alert("invalid criteria");
  } else {
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
  }
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
