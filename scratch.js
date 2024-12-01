const hatches = document.querySelectorAll(".hatch");
let getDay = new Date().getDate();
let paintArea = hatches[currentDay];

const areaWidth = paintArea.offsetWidth;
const areaHeight = paintArea.offsetHeight;
const totalArea = areaWidth * areaHeight;

let paintedArea = 0;
const strokeSize = 5 * 5;

function paint(event) {
   const rect = paintArea.getBoundingClientRect();
   const x = event.clientX - rect.left;
   const y = event.clientY - rect.top;

   const paintDiv = document.createElement("div");
   paintDiv.className = "paint";
   paintDiv.style.left = `${x - 10}px`;
   paintDiv.style.top = `${y - 10}px`;

   paintArea.appendChild(paintDiv);

   paintedArea += strokeSize;

   if (paintedArea / totalArea >= 0.1) {
      fillAreaCompletely();
   }
}

function fillAreaCompletely() {
   paintArea.style.background = `repeating-linear-gradient(
      45deg,
      #606dbc,
      #606dbc 10px,
      #465298 10px,
      #465298 20px
   )`;
}

paintArea.addEventListener("mousemove", (event) => {
   if (event.buttons === 1) {
      paint(event);
   }
});
