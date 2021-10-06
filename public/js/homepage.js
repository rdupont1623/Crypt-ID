const cryptidButton = document.getElementById("cryptid-button");
const ufoButton = document.getElementById("ufo-button");
const paranormalButton = document.getElementById("paranormal-button");
const otherButton = document.getElementById("other-button");
const reportSightingButton = document.getElementById("report-sighting-button");

function getData(categoryName) {
    fetch("/api/posts?categoryName="+categoryName);
}

cryptidButton.addEventListener("click", () => {
    getData("cryptids")
});

ufoButton.addEventListener("click", () => {
    getData("ufo")
});

paranormalButton.addEventListener("click", () => {
    getData("paranormal")
});

otherButton.addEventListener("click", () => {
    getData("other/randon")
});

reportSightingButton.addEventListener("click", () => {

});


//   /blog/"category name"