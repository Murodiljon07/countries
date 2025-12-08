const ThemeBtn = document.querySelector("#theme-btn");
const ThemeBtnIcon = document.querySelector(".bx-moon");
const ThemeText = document.querySelector(".theme-text");

/* change theme */

const saveTheme = localStorage.getItem("mode");

const changeTheme = function () {
  let mainTheme = document.documentElement.classList.toggle("dark-theme");
  ThemeBtnIcon.classList.toggle("bx-sun");
  mainTheme
    ? (ThemeText.textContent = "Light Mode")
    : (ThemeText.textContent = "Dark Mode");

  return mainTheme;
};

if (saveTheme) {
  changeTheme();
}

ThemeBtn.addEventListener("click", () => {
  if (changeTheme()) {
    localStorage.setItem("mode", "dark-mode");
  } else {
    localStorage.setItem("mode", "");
  }
});
