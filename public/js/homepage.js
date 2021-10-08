const cryptidButton = document.getElementById("cryptid-button");
const ufoButton = document.getElementById("ufo-button");
const paranormalButton = document.getElementById("paranormal-button");
const otherButton = document.getElementById("other-button");

function getData(categoryName) {
    document.location.replace(`/blog/${categoryName}`);
}

cryptidButton.addEventListener("click", () => {
    getData("cryptid");
    console.log("hello");
});

ufoButton.addEventListener("click", () => {
    getData("ufo")
});

paranormalButton.addEventListener("click", () => {
    getData("paranormal")
});

otherButton.addEventListener("click", () => {
    getData("other")
});

//   /blog/"category name"