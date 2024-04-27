const face = document.getElementById("face");
const pupils = document.querySelectorAll(".pupil");

const move = (event) => {
  let x = (event.clientX / (window.innerWidth / 110));
  let y = (event.clientY / 7);
  let fX = (event.clientX / 20);
  let fY = (event.clientY / 20);

  face.style.transform = `translate(${fX/2}px,${fY}px)`;
  
  for (const pupil of pupils) {
    pupil.style.transform = `translate(${x/2}px,${y}px)`;
  }
}

if (window.innerWidth >= 1000) {
  window.addEventListener("mousemove", move);
}


let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title="Reviens chef !"
})
window.addEventListener("focus", () => {
  document.title=docTitle
})


