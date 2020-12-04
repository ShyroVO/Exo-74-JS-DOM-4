let catPic = document.getElementById("cat-pic");

let onCatClick = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let stashePic = document.getElementById("mustache-pic");
    stashePic.style.top = (y - 20) + "px";
    stashePic.style.left = (x - 45) + "px";
};

catPic.addEventListener("click", onCatClick);



