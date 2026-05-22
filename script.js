const tabButtons = document.querySelectorAll(".ios-tabbar button");
const screens = document.querySelectorAll(".screen");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    tabButtons.forEach((item) => item.classList.remove("active"));
    screens.forEach((screen) => screen.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
