document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu_cuadro button");
  const tabs = document.querySelectorAll(".tab");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      tabs.forEach(tab => tab.classList.remove("active"));

      button.classList.add("active");
      const targetId = button.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
