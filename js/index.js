// Get all the divs with the class "section"
const sections = document.querySelectorAll("div");

// Set the initial opacity of each section to 0
sections.forEach((section) => (section.style.opacity = 0));

// Set the delay for the first section to 0 and for the rest to 1 second
let delay = 0;

// Loop through each section and gradually increase its opacity
sections.forEach((section) => {
  setTimeout(() => {
    section.style.transition = "opacity 1s";
    section.style.opacity = 1;
  }, delay);
  delay += 1500; // Increase the delay for the next section
});

function spaceAfterh2() {
  let allH2 = document.querySelectorAll("h2");
  allH2.forEach((h2) => {
    h2.innerHTML += "\n";
  });
}

spaceAfterh2();
