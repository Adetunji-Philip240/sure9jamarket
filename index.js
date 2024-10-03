//Loader

document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 3000); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }

  function showContent() {
    const content = document.getElementById("content");
    content.style.display = "block";
  }
});

//sidebar
function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

function checkOut() {
  var x = document.getElementById("check_out_list");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-blue";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-blue", "");
  }
}

// greeting visitors
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet =
    "Good Morning! Hope you woke up strong. Check out some products or services you need here😊.";
else if (hrs >= 12 && hrs <= 17)
  greet =
    "Good Afternoon! Hope your day has been good. Do you need any product or service? Browse through😉.";
else if (hrs >= 17 && hrs <= 24)
  greet =
    "Good Evening! Hope your day was not hectic. Any thing you wish to buy? Check out😀. ";

document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";
// #greeting visitors
