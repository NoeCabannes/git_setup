var textOverlay = document.getElementById("text-overlay");
var image = document.getElementById("logo")

textOverlay.addEventListener("mouseover", function() {
  textOverlay.style.display = "none";
});

image.addEventListener("mouseover", function() {
  textOverlay.style.display = "none";
});

image.addEventListener("mouseout", function() {
  textOverlay.style.display = "block";
});

textOverlay.addEventListener("mouseout", function() {
  textOverlay.style.display = "block";
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const menuList = document.querySelector('ul');
  const menuLinks = document.querySelectorAll('ul li a');

  function closeMenu() {
      menuList.classList.remove('show');
  }

  menuIcon.addEventListener('click', function () {
      menuList.classList.toggle('show');
  });

  menuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
  });
});

