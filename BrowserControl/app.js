// let whereAt = window.location.href
// console.log(whereAt)

// let protocol = window.location.protocol
// console.log(protocol)

// let domain = window.location.hostname
// console.log(domain)

// let port = window.location.port
// console.log(port)

// let path = window.location.pathname
// console.log(path)

// // HTTP: Hyper text transfer protocol
// // HTTPs: Hyper text transfer protocol secure

// let anchor = window.location.hash
// console.log(anchor)

// // window.location.href = "https://www.facebook.com"

let btn = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    event.preventDefault();
    let nme = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log(nme);
    console.log(email);

    localStorage.setItem("userName", nme);
    localStorage.setItem("userEmail", email);

    window.location.href = "welcome.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let getName = document.getElementById("getName");
  let getEmail = document.getElementById("getEmail");
  // getName.innerText

  getName.innerText =
    localStorage.getItem("userName") || "username is incorrect";

  getEmail.innerText =
    localStorage.getItem("userEmail") || "Email is incorrect";
});
