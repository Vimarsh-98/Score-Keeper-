var p1but = document.querySelector("#p1");
var p2but = document.getElementById("p2");
var resetbut = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input[type='number']");
var winningscores = document.querySelector("#num");
var p2score = 0;
var p1score = 0;

var gameover = false;
var winningscore = 5;

p1but.addEventListener("click", function(){
	if(!gameover){
		p1score++;
		if(p1score === winningscore){
			gameover = true;
			p1display.classList.add("winner");
		}
		p1display.textContent = p1score;
	}
	

});

p2but.addEventListener("click", function(){
	if(!gameover){
		p2score++;
		if(p2score === winningscore){
			gameover = true;
			p2display.classList.add("winner");
		}
		p2display.textContent = p2score;
	}
	

	

});

resetbut.addEventListener("click", function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover = false;
}

numInput.addEventListener("change", function(){
	winningscores.textContent = numInput.value;
	winningscore = Number(numInput.value);
	reset();
});