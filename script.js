"use strict";

const form = document.querySelector(".form");
const alert = document.querySelector(".alert");
const login = document.getElementById("login");
const logOut = document.getElementById("logOut");
const text = document.querySelector(".text");
const popUp = document.querySelector(".popUp");

// Login Button
login.addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (password === "password" && username !== "") {
    form.classList.add("visually-hidden");
    popUp.classList.remove("visually-hidden");
    text.textContent = "Hi, " + username;
  } else {
    alert.classList.remove("visually-hidden");
  }
});

// LogOut Button
logOut.addEventListener("click", function () {
  popUp.classList.add("visually-hidden");
  form.classList.remove("visually-hidden");
  alert.classList.add("visually-hidden");
  username = document.getElementById("username").value = "";
});
