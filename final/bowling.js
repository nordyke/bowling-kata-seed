var bowlingGame = function(){

	var currentRoll = 0,
			rolls = [];

	//initialize all rolls to zero
	for(var i = 0; i < 21; i++){
		rolls[i] = 0;
	}

	function isSpare(frameIndex){
		return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
	}

	function spareBonus(frameIndex){
		return rolls[frameIndex+2];
	}

	function isStrike(frameIndex){
		return rolls[frameIndex] === 10;
	}

	function strikeBonus(frameIndex){
		return rolls[frameIndex+1] + rolls[frameIndex+2];
	}

	function sumOfBallsInFrame(frameIndex){
		return rolls[frameIndex] + rolls[frameIndex+1];
	}

	return {
		roll : function(pins){
			rolls[currentRoll++] = pins;
		},
		score: function(){
			var score = 0,
					frameIndex  = 0;
			for(var frame = 0; frame < 10; frame++){
				if(isStrike(frameIndex)){
					score += 10 + strikeBonus(frameIndex);
					frameIndex++;
				}
				else if(isSpare(frameIndex)){
					score += 10 + spareBonus(frameIndex);
					frameIndex += 2;
				}
				else {
					score += sumOfBallsInFrame(frameIndex);
					frameIndex+=2;
				}
			}
			return score;
		}
	};
};
