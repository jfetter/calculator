"use strict"

//the placce where each digit that is input is held
var numbInput = "";
// when an operator is pressed the digits are moved into an array
// and converted into numbers
var numberHolder = [];
//when an operator is pressed it is moved into an array 
// and its operation is preformed on the 0th and 1st numbers in the numberHolder.
var operatorHolder = []; 

$(document).ready(init);
function init (){

$(".numb").on("click", grabNumber);
$("#equal").on("click", calculateAnswer);
$(".pseudoOp").on("click", preformPseudoOperation);
$(".operator").on("click", operatorPressed);

};

	function grabNumber(){
		//do not take numbers longer than you can display
	if (numbInput.length < 6 ){
		// if there is already a digit, move the new digit elsewhere
		// this prolly needs to take place in the operator area. 
			var digits = $(this).text();
			//bind the input digits to the numbInput
			// and display that input on the "calc screen"
			numbInput += digits;
	 		$("#display").text(numbInput);
		}; 	
	};	
	
	function calculateAnswer(){

	//if (operatorHolder.length  ){
	var answer;
	var operator = operatorHolder[0]//.join();
	console.log("OPERATOR BEFORE", operatorHolder)
	console.log("numbInput BEFORE", numbInput)
	console.log("NUMBER HOLDER BEFORE", numberHolder)
		if ( operator === "+"){
			 answer = parseFloat(numberHolder[0]) + parseFloat(numbInput);
			}
		else if ( operator === "-"){ answer = parseFloat(numberHolder[0]) - parseFloat(numbInput)
		}
	 	else if (operator === "*"){ answer = parseFloat(numberHolder[0]) * parseFloat(numbInput)
		}
	 	else if (operator === "/"){ answer = Number(numberHolder[0]) / Number(numbInput)
		} 
	$("#display").text(answer);	
	operatorHolder.pop();
	numberHolder.pop();
	numberHolder.push(answer);
	numbInput = "";
	$("#display").text(answer)
	return answer;
}

function clear(){
				 numbInput = "";
				 numberHolder = [];
				 operatorHolder = [];
				 $("#display").html("&nbsp;");
}

function operatorPressed(){
		if ($("#display").length === 0)
		return;
		var opPressed = $(this).text();
		console.log("OP PRESSED", opPressed)
		operatorHolder.push(opPressed);
		$("#display").text(opPressed);
		//if this is the first set of numbers to add
		if (numberHolder.length > 0 && numbInput.length > 0){
			calculateAnswer();
		} // if this is the very first number entered
		else if(numberHolder.length === 0) {
			numberHolder.push(numbInput);
			numbInput = "";
			// but if you already calculated an answer and are storing that
			} else {
			 return;
			}
}


function preformPseudoOperation () {
	console.log("pseudoOp");
	  var itemText = $(this).text();
	console.log("this text:" +  typeof itemText );
		if(itemText === "clear"){
		clear();
		 console.log("triggered clear");
		} else if(itemText === "."){
			numberHolder += ".";
		}
		else if 	( itemText === "+/-")  {
						numbInput = parseFloat(numbInput) * -1; 
						  $("#display").text(numbInput)
						}
} 

// I was thinking that if I assigned the current number being used into the first position of an array and 
// the operator pressed to the second position of an array and pushed that array
// into a larger array and then reduced the array of arrays based on conditions that
// take the second item of each smaller array as the condition (eg: if + then do the add function)
// and then I operate on the first item in the smaller array, then I can save a lot of DOM
// manipulation

