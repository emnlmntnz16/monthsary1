const stars =
    document.getElementById("stars");

for (let i = 0; i < 90; i++) {

    const star =
        document.createElement("span");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}



function openLetter() {

    const letterBox =
        document.getElementById("letterBox");

    const openButton =
        document.getElementById("openBtn");

    const celebrateButton =
        document.getElementById("celebrateBtn");


    letterBox.classList.remove("hidden");

    openButton.classList.add("hidden");

    celebrateButton.classList.remove("hidden");


    burst(18);
}




function burst(count = 30) {

    const hearts =
        document.getElementById("hearts");


    for (let i = 0; i < count; i++) {

        const heart =
            document.createElement("span");

        heart.className = "heart";


        const symbols = [
            "💜     ",
            "🤍",
            "🫶",
            "💗"
        ];


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        heart.style.fontSize =
            (16 + Math.random() * 18) + "px";


        hearts.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 7500);

    }

}


function celebrate() {

    burst(55);


    const button =
        document.getElementById(
            "celebrateBtn"
        );


    button.textContent =
        "💜 Happy Monthsary, lovee! ";


    setTimeout(() => {

        button.textContent =
            "🎉 Celebrate Again!";

    }, 2500);

}


setInterval(() => {

    burst(2);

}, 1600);
