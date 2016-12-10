var crystalImages = [
	"assets/images/redcrystal.png",
	"assets/images/bluecrystal.png",
	"assets/images/greencrystal.png",
	"assets/images/yellowcrystal.png",
];
var maxCrystals= 4;

var goalScore = 0;

var counter = 0;

var wins = 0;

var losses = 0;

var	crystalMinimum = 1;

var crystalMaximum = 15;

var randMinimum = 40;

var randMaximum = 200;

var crystalScore = [];

		function randomScore(a,b){
	
			return(Math.floor(Math.random() * b) + a);
		}


		function crystalNumber(){
		
		var crystal = [];
		var number;
			


			for (var i = 0; i < maxCrystals ; i++) {
				
				number = randomScore(crystalMinimum, crystalMaximum);

				if (crystal.indexOf(number)>=0) {
					i--;
				}
				


				else{
					crystal[i] = number;
				}
			}		
	
				return crystal;
	
}

function restart(){
	crystalScore = []; 
	goalScore = 0 ;
	counter = 0;
	$("#numberToGuess, #scoreDiv, #gemsDiv").empty();
}

function startGame(){
	

	goalScore = randomScore(randMinimum, randMaximum);

	

	$("#numberToGuess").text(goalScore);

	

	crystalScore = crystalNumber();

		for (var i = 0; i < crystalImages.length; i++) {
		

		var crystal = $("<img>").addClass("crystalImage").attr("src", crystalImages[i]).attr("data-crystalvalue", crystalScore[i]);
		
		$("#gemsDiv").append(crystal);
		
		console.log(crystal[0]);
	}

}


$(document).ready(function(){
	if(wins == 0 && losses == 0){
		startGame();

	}

	$(document).on('click', '.crystalImage', function() {
		
		var crystalValue = ($(this).data("crystalvalue"));

		counter = counter + crystalValue;

		$("#scoreDiv").text("New score: " + counter);

				if (counter === goalScore) {
					
					wins++;
					
					$("#message").text("You win!!!!!1!");
					
					$("#wins").text(wins);
					
					restart();
					
					startGame();
				}

						else if (counter > goalScore) {
							
							losses++;
						  	
						  	$("#message").text("You lose!!!!!");
						  	
						  	console.log(losses);
						  	
						  	$("#losses").text(losses);
						  	
						  	restart();
							
							startGame();
						}

	});


});
