//IMMEDIATE INVOKED FUNCTION EXPRESSIONS

/*
function game(){
	var score=Math.random()*10;
	console.log(score>=5);
}
var i=0;
for(i=0;i<5;i++){
game();
}
*/
//this can be done in a better way because if the only motto is t
//to hide the variable then declaring the entire function is
//useless

//iife looks like

(function (){
	var score=Math.random()*10;
	console.log(score>=5);
})();


/*When ever we are writting function() this is a function 
declaration so if we are not giving the name it will throw 
error so we need to make the system believe that it is not a
function declaration but a defination ,so that we do it by putting it
in the brackets and will not be able to access the variable outside 
of the function
*/

//the below statment will throw error because we are accessing the 
//variable outside of the function
//console.log(score);


//passing the parameters
//lets pass the good luck
(function(goodluck){
	var score=Math.random()*10;
	console.log(score>=5-goodluck);
})
(5);
//the above function will always be true because the score 
//will always be greater than 0 5-goodluck (5)