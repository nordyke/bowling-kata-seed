describe("Bowling Game",function(){

	var g;

	beforeEach(function(){
		g = bowlingGame();
	});

	function rollMany(n,pins){
		for(var i = 0; i < n; i++){
			g.roll(pins);
		}
	}

	function rollSpare(){
		g.roll(5);
		g.roll(5);
	}

	function rollStrike(){
		g.roll(10);
	}

	it("should score zero",function(){
		rollMany(20,0);
		expect(g.score()).toBe(0);
	});
	
	it("should score one",function(){
		rollMany(20,1);
		expect(g.score()).toBe(20);
	});

	it("should score spare",function(){
		rollSpare();
		g.roll(3);
		rollMany(17,0);
		expect(g.score()).toBe(16);
	});

	it("should score strike",function(){
		rollStrike();
		g.roll(3);
		g.roll(4);
		rollMany(17,0);
		expect(g.score()).toBe(24);
	});

	it("should roll perfect game",function(){
		rollMany(12,10);
		expect(g.score()).toBe(300);
	});
});
