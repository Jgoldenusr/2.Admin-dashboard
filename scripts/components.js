const sidebarBtn = document.querySelector("#bars");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  const fullBodySize = document.body.getBoundingClientRect();
  sidebar.style.minHeight = fullBodySize.height + "px";
  sidebar.classList.toggle("toggledSidebar");
}
function restartSidebar() {
  const fullBodySize = document.body.getBoundingClientRect();
  sidebar.style.minHeight = fullBodySize.height + "px";
  sidebar.classList.remove("toggledSidebar");
}

sidebarBtn.addEventListener("click", toggleSidebar);

window.addEventListener("resize", restartSidebar);
