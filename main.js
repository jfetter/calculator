"use strict"
$(document).ready(init);
function init (){

var numbInput = "";
var numberHolder = [];
var operatorHolder = []; 

$("#equal").on("click", calculateAnswer);

	function calculateAnswer(){
	var answer = "";
	var operator = operatorHolder.join()
	if ( operator === "+")
			answer = parseInt(numbHolder.join()) + parseInt(numbInput);
// 	else if ( operator === "-")
// 			answer = parseInt(numbHolder.join()) - parseInt(numbInput);
//  	else if (operator === "*")
//  			answer = parseInt(numbHolder.join()) * parseInt(numbInput);
//  	else if (operator === "/")
//  			answer = parseInt(numbHolder.join()) / parseInt(numbInput);
// 	$("#display").text(answer);
// 			numberHolder.push(answer);
// 			 			console.log("numbInput: ", numbInput, "numberHolder: " + numberHolder + "operatorHolder: " + operatorHolder);
//  			clear();
// console.log("numbInput: ", numbInput, "numberHolder: " + numberHolder + "operatorHolder: " + operatorHolder);
// 			 	return answer;
};

function clear(){
				 numbInput = "";
				 numberHolder = [];
				 operatorHolder = [];
}

//create a state operatorPressed

//define variable operatorPressed;
// let operatorPressed;
// let $e = $(event.target);
// $e.text(operatorPressed);
// $e.data("clicked", operatorPressed);
// console.log("e +" + $e + "operatorPressed:" + operatorPressed)
		
$(".operator").on("click", operatorPressed);

function operatorPressed(){
		if (operatorHolder <= 1) {
			console.log(opPresses)
		var opPresses = $(this).text();
		operatorHolder.push(opPresses);
 		$("#display").text(opPresses);
		console.log("this.class:", $(this.text));
	}
	operatorHolder.pop();
	if (numberHolder.length ){
	}
	numbInput = "";
	calculateAnswer();
	return opPresses;
}

$(".pseudoOp").on("click", preformPseudoOperation);

function preformPseudoOperation () {
	console.log("pseudoOp");
	  var itemText = $(this).text();
	console.log("this text:" +  itemText);
		if(itemText === "clear"){
		clear;
		 console.log("triggered clear");
		}
		else if(itemText === "+/-"){
 	  var  number = parseInt(numbInput) * -1; 
 	  $("#display").text(number);
		}
		else if(itemText === "."){
			numberHolder += ".";
		}
} // end preformPseudoOperation;

// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
// no more than 6*6 numbers will fit in display, so cut off there
$(".numb").on("click", grabNumber);

	function grabNumber(){
	if (numbInput.length < 6){
			var numbPresses = $(this).text();
			numbInput += numbPresses;
	  	if (operatorHolder.length === 1){
				numberHolder.push(numbInput);
	  		numbInput = [];
	   		console.log("numbHolder:" , numberHolder)
	 		}
	 		console.log(numbInput);
	 		$("#display").text(numbInput);
		}; 	
	};	
};