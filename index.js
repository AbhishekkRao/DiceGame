function roll() {
	var ran = Math.floor(Math.random() * 6 + 1);
	var ran2 = Math.floor(Math.random() * 6 + 1);

	document.querySelector(".img1").setAttribute("src", "./images/dice" + ran + ".png");
	document.querySelector(".img2").setAttribute("src", "./images/dice" + ran2 + ".png");


	if (ran > ran2) {
		document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
	} else if (ran2 > ran) {
		document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
	} else {
		document.querySelector("h1").innerHTML = "Draw!";
	}
}

document.querySelector("button").addEventListener("click", roll);