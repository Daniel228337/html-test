let value = 'X';

document.querySelectorAll(".game-field").forEach((field) => {
    field.addEventListener("click", function () {
        field.innerText = value;

        if (value === "X") {
            value = "O";

        } else {
            value = "X";
        }


    });
});


