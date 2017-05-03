//insert colors
var colors = require("colors/safe");

var startingStars = 10;

	var draw = function (num, sym){
  	var output = '';
  	for (var i=0; i < num; i++){
    output += sym;
  	}
  	console.log(colors.rainbow(output));
	};

	var run = function() {
	draw(startingStars,' *');
		startingStars = startingStars -1;
		if (startingStars > 0) {
		setTimeout(run, 1000);
	}
};
setTimeout(run, 1000);

module.exports = draw;
