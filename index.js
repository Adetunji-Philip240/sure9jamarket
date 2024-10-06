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

// #loader

// Advertisement
// Function to show the pop-up and overlay
function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to close the pop-up
function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Show the first pop-up when the page loads
window.onload = function () {
  showPopup("popup1");

  // Show the second pop-up after 30 seconds
  setTimeout(function () {
    showPopup("popup2");
  }, 30000); // 30000 milliseconds = 30 seconds

  // Show the third pop-up after 60 seconds
  setTimeout(function () {
    showPopup("popup3");
  }, 60000); // 60000 milliseconds = 60 seconds
};

// Close the pop-up when the overlay is clicked
document.getElementById("overlay").onclick = function () {
  closePopup("popup1");
  closePopup("popup2");
  closePopup("popup3");
};

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
// #sidebar
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
