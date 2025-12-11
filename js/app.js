import countries from "./date.js";

const CountriesList = document.getElementById("country-list");

/* add from data */

export function addCountries(countries) {
  CountriesList.innerHTML = "";
  countries.map((curVel) => {
    CountriesList.innerHTML += `<div class="country-box" data-id="${curVel.id}">
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
}

addCountries(countries);

CountriesList.addEventListener("click", (e) => {
  const CountryBox = e.target.closest(".country-box");

  const boxId = CountryBox.dataset.id;

  window.location.href = `./detail.html?id=${boxId}`;
});
