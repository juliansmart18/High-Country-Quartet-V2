// accordion 

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".icon");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = "+";
        button.appendChild(icon);
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "-";
        button.appendChild(icon);
      }
    });
  });
});


// hamburger menu

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);



// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  const scrollUpButton = document.getElementById("scrollUp");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpButton.classList.add("show");
  } else {
    scrollUpButton.classList.remove("show");
  }
}

document.getElementById('scrollUpButton').addEventListener('mouseover', function() {
  this.src = 'images/scroll-up-button-hover.png';
});
document.getElementById('scrollUpButton').addEventListener('mouseout', function() {
  this.src = 'images/scroll-up-button.png';
});


// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollUp").addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// hover effect for social media buttons
document.getElementById('instagram').addEventListener('mouseover', function() {
  this.src = 'images/instagram-hover.png';
});
document.getElementById('instagram').addEventListener('mouseout', function() {
  this.src = 'images/instagram-blue.png';
});

document.getElementById('youtube').addEventListener('mouseover', function() {
  this.src = 'images/youtube-hover.png';
});
document.getElementById('youtube').addEventListener('mouseout', function() {
  this.src = 'images/youtube-blue.png';
});