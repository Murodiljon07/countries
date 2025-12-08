import countries from "./date.js";
import { addCountries } from "./app.js";

const SearchInput = document.getElementById("search-input");
const Region = document.querySelector("#select-region");

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

Region.addEventListener("change", (e) => {
  const filterRegion = countries.filter(
    (curVel) => curVel.region.toLowerCase() === e.target.value.toLowerCase()
  );
  if (e.target.value == "Default") {
    return addCountries(countries);
  }
  addCountries(filterRegion);
});
