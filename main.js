"use strict"

var numbInput = "";
var numberHolder = "";
var operatorHolder = []; 

$(document).ready(init);
function init (){

$(".numb").on("click", grabNumber);
$("#equal").on("click", calculateAnswer);
$(".pseudoOp").on("click", preformPseudoOperation);
$(".operator").on("click", operatorPressed);

};

	function grabNumber(){
	if (numbInput.length < 6){
			var digits = $(this).text();
			numbInput += digits;
	  	// if (operatorHolder.length > 0 &&){
	  	// 	calculateAnswer;
	  	// 	numbInput = "";
	   // 		console.log("numbHolder:" , numberHolder)
	 		// }
	 		console.log("numberInput" + numbInput);
	 		$("#display").text(numbInput);
		}; 	
	};	


	
	function calculateAnswer(){
		console.log("imma calculate the answer")

	//if (operatorHolder.length  ){
			var answer;
			var operator = operatorHolder.join();
					console.log("operator " + operator)
				if ( operator === "+"){
					 answer = parseFloat(numberHolder) + parseFloat(numbInput);
					}else if 	( operator === "+/-")  {
						numbInput = parseFloat(numbInput) * -1; 
						  $("#display").text(numbInput)
						};
			// 	else if ( operator === "-")
			// 			answer = parseFloat(numbHolder.join()) - parseFloat(numbInput);
			//  	else if (operator === "*")
			//  			answer = parseFloat(numbHolder.join()) * parseFloat(numbInput);
			//  	else if (operator === "/")
			//  			answer = parseFloat(numbHolder.join()) / parseFloat(numbInput);
			// 	$("#display").text(answer);	
					//	operatorHolder.pop();
					if (operator !== "+/-"){
						numberHolder = answer;
						$("#display").text(answer)
					}
			// 			 			console.log("numbInput: ", numbInput, "numberHolder: " + numberHolder + "operatorHolder: " + operatorHolder);
			//  			clear();
			// console.log("numbInput: ", numbInput, "numberHolder: " + numberHolder + "operatorHolder: " + operatorHolder);
			 			 	return answer;
			 			 }
	//		 			 	else // CHANGE ANSWER TO GRAB VALUE FROM SCREEN

function clear(){
				 numbInput = "";
				 numberHolder = "";
				 operatorHolder = [];
				 $("#display").text("&nbsp;");
}

//create a state operatorPressed

//define variable operatorPressed;
// let operatorPressed;
// let $e = $(event.target);
// $e.text(operatorPressed);
// $e.data("clicked", operatorPressed);
// console.log("e +" + $e + "operatorPressed:" + operatorPressed)

function operatorPressed(){
		if (operatorHolder <= 1 && numbInput.length > 0) {
		var opPressed = $(this).text();
		operatorHolder.push(opPressed);
		console.log(opPressed)
			if (opPressed !== "+/-"){
 				$("#display").text(opPressed);
			}
			numberHolder = numberHolder.concat(numbInput);
			numbInput = ""
	return opPressed;
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
} // end preformPseudoOperation;

// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
// no more than 6*6 numbers will fit in display, so cut off there


