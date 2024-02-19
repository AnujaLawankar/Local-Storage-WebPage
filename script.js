var emailInput = document.querySelector("#email");
var pawwsordInput = document.querySelector("#password");
var signupBtn = document.querySelector("#signup");
var msgdiv = document.querySelector("#msg");
var userEmailspan = document.querySelector("#user-email");
var userpasswordspan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgdiv.textContent = message;
  msgdiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) {
    return;
  }

  userEmailspan.textContent = email;
  userpasswordspan.textContent = password;
}

signupBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === " ") {
    displayMessage("error", "Email cannot found");
  } else if (password === " ") {
    displayMessage("eror", "Password cannot found");
  } else {
    displayMessage("success", "Registed successfully");

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();
  }
});
