// Parameters

let activeElement = 0;
const timeChange = 5000;

// download all elements you need to work on

const frontImg = document.querySelector(".mountains__front-img");
const backImg = document.querySelector(".mountains__background-img");
const h1Html = document.querySelector(".mountains__description h1");
const h2Html = document.querySelector(".mountains__description h2");

// arrays contain information about other elements that need to appear in a project

const frontImages = ['mount1a.png', 'mount2b.png', 'mount3c.png'];
const backImages = ['mount2.png', 'mount2a.png', 'mount3.png'];
const names = ['Mount Everest', 'Mount Well Known', 'Mount Unknown'];
const description = ['8848 meters - Nepal/Tibet', '9876 meters - Mars/Space', '10.345 meters - The other side of the Black Hole'];

function changeElement() {
    activeElement++;
    if (activeElement == frontImages.lenght) {
        activeElement = 0;
    }

frontImg.src  = frontImages[activeElement];
backImg.src = backImages[activeElement];
h1Html.textContent = names[activeElement];
h2Html.textContent = description[activeElement];

}

setInterval(changeElement, timeChange);