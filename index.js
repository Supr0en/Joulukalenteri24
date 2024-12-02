let card = document.getElementById("cover");
let back = document.getElementById("back");
let checkBox = document.getElementById("devMode");
let dayCounter = document.getElementById("dayInput");
let showHatches = document.getElementById("hatchContainer");
const day = new Date();
let currentDay = day.getDate() - 1;

let questions = [
   { "day": 1, "challenge": "Joulumuarin nimi?"},
   { "day": 2, "challenge": "Mistä Frosty lumiukon nenä on tehty?"},
   { "day": 3, "challenge": "Joulupukin porojen nimet?"},
   { "day": 4, "challenge": "Milloin Jinggel bells kirjoitettiin?"}
]

async function getData() {
   try {
      const response = await fetch('./JSON/dailyChallenge.json');
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);
   }
}

function setDevMode(currentDay) {
   if (checkBox.checked == true) {
      currentDay = 0;
      dayCounter.style.display = "block";
   } else {
      currentDay = day.getDate();
      dayCounter.style.display = "none";
   }
}

function dateCheak(currentDay) {
   let hatches = document.querySelectorAll(".hatch");
   hatches.forEach((hatch) => {
      if (hatch.id <= currentDay) {
         hatch.style.background =
            "repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)";
      }
   });
}
dateCheak(currentDay);

card.addEventListener("click", function (currentDay) {
   card.classList.add("move");
   back.classList.add("move");
   let day = new Date().getDate();
   prompt(`${questions[day].challenge}`);
   setTimeout(() => {
      card.classList.add("open");
      setTimeout(() => {
         card.classList.add("afterAnimation");
      }, 500);
      setTimeout(() => {
         showHatches.style.display = "grid";
      }, 1000);
   }, 1000);
   this.style.pointerEvents = "none";
});