import countries from "./date.js";

const RetuBtn = document.getElementById("retu-btn");
const InformationDesc = document.getElementById("information-deck");
const CountiesID = Number(window.location.href.split("=").slice(-1).join());

RetuBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const getInfo = countries.find((curVel) => curVel.id === CountiesID);

InformationDesc.innerHTML = `
          <img class="flag" src="${getInfo.flag}" />
          <div class="description">
            <h2 class="country-name">${getInfo.name}</h2>
            <div class="dates">
              <div class="main-info">
                <div class="info">
                  <p class="key">Native Name:</p>
                  <p class="value">${getInfo.native}</p>
                </div>

                <div class="info">
                  <p class="key">Population:</p>
                  <p class="value">${getInfo.population}</p>
                </div>

                <div class="info">
                  <p class="key">Region:</p>
                  <p class="value">${getInfo.region}</p>
                </div>

                <div class="info">
                  <p class="key">Sub Region:</p>
                  <p class="value">${getInfo.subReg}</p>
                </div>

                <div class="info">
                  <p class="key">Capital:</p>
                  <p class="value">${getInfo.capital}</p>
                </div>
              </div>
              <div class="domain">
                <div class="info">
                  <p class="key">Top Level Domain:</p>
                  <p class="value">${getInfo.domain}</p>
                </div>
                <div class="info">
                  <p class="key">Currencies:</p>
                  <p class="value">${getInfo.currencies}</p>
                </div>
                <div class="info">
                  <p class="key">Languages:</p>
                  <p class="value">${getInfo.languages}</p>
                </div>
              </div>
              <div  id="borders">
                <p class="key">Border Countries:</p>
                  <div id="border-country-link">
                    
                  </div>
              </div>
            </div>
          </div>

`;

const BordersLink = document.getElementById("border-country-link");
const Borders = getInfo.borders;

Borders.forEach((curVel) => {
  BordersLink.innerHTML += `
<button class="border-country">${curVel}</button>
`;
});
