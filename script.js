function openGit() {
  window.open("https://github.com/manisharikhari2005");
}

// theme toggle
function changeTheme() {
  document.body.classList.toggle("light-mode");
}

// scroll button
let btn = document.getElementById("top");

window.onscroll = function () {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// hide all sections
function hideAll() {
  document.querySelectorAll(".about, .tech, .projects, .contact")
    .forEach(sec => sec.style.display = "none");
}

// show selected section
function showSection(id) {
  hideAll();
  document.getElementById(id).style.display = "block";

  // scroll to section
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
