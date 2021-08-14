let js = 7;
let csshtml = 8;
let bootstrap = 7;
let jquery = 7;
let node = 2;
let react = 2;
let fireBase = 2;
let notMobile = true;
let currentProject = 0;
let maxProjects = Number(document.querySelectorAll(".c-project").length - 1);
let mouseenter = false;
let project = document.querySelectorAll(".c-project");

createRec(js, "js");
createRec(csshtml, "csshtml");
createRec(bootstrap, "bootstrap");
createRec(jquery, "jquery");
createRec(node, "node");
createRec(react, "react");
createRec(fireBase, "firebase");

function createRec(value, name) {
   for (let i = 0; i <= value; i++) {
      setTimeout(() => {
         document.getElementById(`js-progress-bar-${name}`).innerHTML +=
            "<div class='c-rect'></div>";
      }, 250 + i * 150);
   }
}

function copyText() {
   let text = "thyagoaraujomotta@gmail.com";
   navigator.clipboard.writeText(text);
   document.querySelector(".c-copy").style.display = "inline-block";

   setTimeout(() => {
      document.querySelector(".c-copy").style.display = "none";
   }, 1000);
}

function mouseEnter() {
   mouseenter = true;
   console.log("entrou");
}

function mouseOut() {
   mouseenter = false;
   console.log("saiu");
}

for (let i of project) {
   i.addEventListener("mouseenter", () => {
      mouseEnter();
   });

   i.addEventListener("mouseout", () => {
      mouseOut();
   });
}

setInterval(() => {
   if (!mouseenter) {
      if (window.innerWidth < 768) {
         if (currentProject >= maxProjects) {
            currentProject = 0;
            document.querySelector("#js-box").scrollBy(-245 * maxProjects, 0);
         } else {
            document.querySelector("#js-box").scrollBy(245, 0);
            currentProject++;
         }
         notMobile = false;
      } else if (!notMobile) {
         document.querySelector("#js-box").scrollBy(-900, 0);
         notMobile = true;
      }
   }
}, 4000);

let lastContainer = 0;
function nextPrevProjects(project) {
   document.querySelectorAll(".c-group-button-projects").forEach((i) => {
      i.classList.remove("active");
   });
   document.querySelectorAll(".c-group-projects").forEach((i) => {
      i.classList.remove("active");
   });
   if (lastContainer < project) {
      document
         .querySelector("#js-box")
         .scrollBy(900 * (project - lastContainer), 0);
   } else {
      document
         .querySelector("#js-box")
         .scrollBy(900 * (project - lastContainer), 0);
   }
   lastContainer = project;

   if (project == 1) {
      document.querySelector(".c-projects-1").classList.add("active");
   } else if (project == 2) {
      document.querySelector(".c-projects-2").classList.add("active");
   }
}
