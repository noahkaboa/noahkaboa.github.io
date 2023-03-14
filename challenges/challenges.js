// const template = document.querySelector('template');
// const node = document.importNode(template.content, true);
// document.body.appendChild(node);

var btn = document.querySelectorAll("button.modal-button");
var modals = document.querySelectorAll(".modal");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++){
    btn[i].onclick = function(e) {
        e.preventDefault();
        // console.log(1);
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

for (var i = 0; i < spans.length; i++){
    spans[i].onclick = function() {
        for (var index in modals) {
            if (typeof modals[index].style !== "undefined") modals[index].style.display="none";
        }
    }
}

window.onclick = function(event) {
    console.log("x");
    if (event.target.classList.contains('challenge_modal')) {
        console.log("y");
        for (var index in modals) {
            if (typeof modals[index].style !== "undefined") modals[index].style.display="none";
        }
    }
}


// let challenges = [ //name, description, hint
//     ["Doors", "I've hidden my secret favorite door, and it's your job to find it. Good luck!", "The developers have been communicating with 'https://noahkaboa.github.io/doors/notes/', maybe check it out!"]
// ]

// function showChallenges(){
//     var temp, name, a, i;
//     temp = document.getElementsByTagName('template')[0];
//     name = temp.content.getElementById("chal_name");
//     desc = temp.content.getElementById("chal_description");
//     for (i=0; i < challenges.length; i++){
//         a = document.importNode(name, true);
//         a.textContent += challenges[i];
//     }
// }