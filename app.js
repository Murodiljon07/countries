import countries from "./date.js";

const ThemeBtn = document.getElementById("theme-btn");
const ThemeBtnIcon = document.querySelector(".bx-moon");
const ThemeText = document.querySelector(".theme-text");
const SearchInput = document.getElementById("search-input");
const Region = document.querySelector("#select-region");

const CountriesList = document.getElementById("country-list");

/* change theme */
ThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  ThemeBtnIcon.classList.toggle("bx-sun");

  document.documentElement.classList.contains("dark-theme")
    ? (ThemeText.textContent = "Light Mode")
    : (ThemeText.textContent = "Dark Mode");
});

/* add from data */
const addCountries = (countries) => {
  CountriesList.innerHTML = "";
  countries.map((curVel) => {
    CountriesList.innerHTML += `<div class="country-box">
        <img src="${curVel.flag}" alt="Undefind" class="flag" />
        <div class="country-desc">
          <h2 class="country-name">${curVel.name}</h2>
          <p class="population key">
            Population: <span class="value">${curVel.population}</span>
          </p>
          <p class="region key">Region: <span class="value">${curVel.region}</span></p>
          <p class="capital key">Capital: <span class="value">${curVel.capital}</span></p>
        </div>
      </div>`;
  });
};
addCountries(countries);

/* search by name and capital*/
SearchInput.addEventListener("input", () => {
  const searchEd = SearchInput.value.toLowerCase();
  const filterEd = countries.filter(
    (curVel) =>
      curVel.name.toLowerCase().includes(searchEd) ||
      curVel.capital.toLowerCase().includes(searchEd)
  );
  addCountries(filterEd);
});
