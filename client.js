console.log('Here are all the available people:', people);
$(onReady);

let currentGuess = "";
let winningGuess = false;

function appendDom() {
    for (let i = 0; i < people.length; i++) {
        const currentPerson = people[i];
        $("#cohortImages").append(`
            <img data-name="${currentPerson.name}" src="https://github.com/${currentPerson.githubUsername}.png?size=250" alt="Profile image of ${currentPerson.githubUsername}"></img>
        `);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function checkWinner(guess) {
    if (guess === currentGuess) {
        winningGuess = true;
    } else {
        alert("Sorry try again!")
    }
}

function newGuess() {
    currentGuess = people[randomNumber(0, 6)].name;
    $("#currentGuess").text(currentGuess);
}

function clickHandler() {
    $("#cohortImages").on("click", "img", (event) => {
        let clicked = $(event.target).data("name");
        checkWinner(clicked);
    });
}

function onReady() {
    clickHandler()
    appendDom();
    newGuess();
}
