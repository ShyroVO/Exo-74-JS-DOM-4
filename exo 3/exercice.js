let libButton = document.getElementById('lib-button');

let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");

let text = noun.value + adjective.value + person.value;

let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML += text + ".";

};

libButton.addEventListener('click', libIt);

