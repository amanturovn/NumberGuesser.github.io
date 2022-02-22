let input = document.querySelector("input");
let guessBtn = document.getElementById("guess-btn");
let message = document.querySelector(".message");
let innerB = document.querySelector(".inner");

let random = Math.floor(10 * Math.random()) + 1;
count = 2;

guessBtn.addEventListener("click", function () {
    if (input.value == random) {
        input.style.border = "2px solid green";
        message.style.color = "green";
        message.style.fontSize = "24px";
        message.innerHTML = "Урааа вы выиграли!";
        let newGame = guessBtn.innerHTML = "Новая игра";

        if (newGame) {
            guessBtn.addEventListener("click", function () {
                location.reload();
            })
        }
    }
    else {
        input.style.border = "2px solid red";
        message.style.color = "red";
        message.innerHTML = "вы не угадали: осталось попыток " + count;
        input.value = "";
    }

    count = count - 1;
    if (count == -1 && input.value != random) {
        message.innerHTML = "Игра окончена.  Вы проиграли.  Было загадано чило :" + random;
        guessBtn.innerHTML = "Новая игра";
        guessBtn.addEventListener("click", function () {
            location.reload();
        })
    }
})

