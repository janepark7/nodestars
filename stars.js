/* Stars Assignment */

// set the rows of the stars
var stars = 10;

//  for loop on printing the stars
var draw = function (num, sym){
  var output = '';
  for(var i=0; i < num; i++){
    output += sym;
  }
  console.log(num,output);

};
//  setting a setTimeout function as stars decrease duration the amount of secondsnode 
var run = function(){
	draw(stars,'*');
	stars= stars -1;
	if(stars > 0){
		setTimeout(run, 1000);
	}
};
setTimeout(run, 1000);
