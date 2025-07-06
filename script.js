//your JS code here. If required.
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

const checkbox = document.getElementById("checkbox");
const existingLogin = document.getElementById("existing");

window.onload = () => {
  if (localStorage.getItem("username")) {
    existingLogin.style.display = "inline-block";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    existingLogin.style.display = "inline-block";
  } else {
    localStorage.clear();
    existingLogin.style.display = "none";
  }
  alert(`Logged in as ${username.value}`);
});

existingLogin.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Logged in as ${localStorage.getItem("username")}`);
});
