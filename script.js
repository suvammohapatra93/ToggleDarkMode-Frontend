let icon = document.getElementById("icon");

// Function to toggle theme and set icon
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
}

// Event listener for the icon
icon.onclick = toggleTheme;

// Load the saved theme on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
});
