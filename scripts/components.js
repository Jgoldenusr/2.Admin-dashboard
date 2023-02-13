const sidebarBtn = document.querySelector("#bars");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("toggledSidebar");
  const size = document.body.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (windowHeight <= 600) {
    sidebar.style.minHeight = size.height + "px";
  } else {
    sidebar.style = "";
  }
}

sidebarBtn.addEventListener("click", toggleSidebar);

window.addEventListener("resize", () => {
  toggleSidebar();
});
