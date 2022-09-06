console.log('Here are all the available people:', people);
$(onReady);

let currentGuess = "";
let winningGuess = false;
let cheer = new Audio("http://soundbible.com/grab.php?id=480&type=mp3");

function appendDom() {
    let newArray = people.map((e) => e);
    for (let i = 0; i < people.length; i++) {
        // const currentPerson = people[randomNumber(0, 6)];
        // const currentPerson = newArray.splice(randomNumber(0, newArray.length),1);
        let currentPerson = newArray.splice(randomNumber(0, newArray.length - 1), 1)[0];
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
        alert("VICTORY!!  You guessed correct!")
    } else {
        alert("WRONG! Jump off a bridge.")
    }
    victoryDeclaration();
}

function guessReset() {
    winningGuess = false;
    newGuess();
    victoryDeclaration()
}

function newGuess() {
    currentGuess = people[randomNumber(0, 6)].name;
    $("#currentGuess").text(currentGuess);
}

function victoryDeclaration() {
    if (winningGuess === true) {
        $("body").addClass("winner");
        cheer.play();
        $("#winnerDiv").append(`
        <p class="winnerText">Winner!<p>
        `);
        setTimeout(guessReset, 5500);
        // $('body').css('color', 'green');
        // $('body').css('background-color', 'blue');
    } else {
        $("body").removeClass("winner");
        $(".winnerText").remove();
    }
}


function clickHandler() {
    $("#cohortImages").on("click", "img", (event) => {
        let clicked = $(event.target).data("name");
        checkWinner(clicked);
    });
}

function onReady() {
    clickHandler();
    appendDom();
    newGuess();
}
