// Remove Loader
window.onload = function() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3000);
};

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
}
