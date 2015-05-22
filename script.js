 $(document).ready(function(){
var left = null;
var operator = null;
var right = null;
var total = [];
 	$("#calculator").click(function(event) {
	//$(this).css("backgroundColor","black")
	
	//event.target.style.backgroundColor="white"
	//console.log($(event.target).text())
	var buttonPressed = $(event.target).text()
	//$("#screen").html(buttonPressed)
	if (buttonPressed === "C"){
		$("#screen").html("")
		total = [];
	}

	if (buttonPressed !== "=" && buttonPressed !== "C") {
		$("#screen").append(buttonPressed)
		total.push(buttonPressed)
	}
	if (buttonPressed === "=") {
		//console.log(4444)
		if (total[1] === "+") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) + parseInt(total[2]))
		}
		if (total[1] === "-") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) - parseInt(total[2]))
		}
		if (total[1] === "x") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) * parseInt(total[2]))
		} else {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) / parseInt(total[2]))
		}	
		//console.log("\&divide", "foooo");

		// if (total[1] === "&divide;") {
		// 	$("#screen").html("")
		// 	$("#screen").append(
		// 		 parseInt(total[0]) / parseInt(total[2]))
		// }
					


	total = [];
	}
	console.log(total)
	

	// if (total === null) {   //first entry
	// 	store = buttonPressed
	// 	total += 1
	// }
	// if (total.length === 1) {
	// 	console.log('LEFT is', buttonPressed)
	// 	left = buttonPressed
	// 	total += 1
	// }
	// if (total.length === 1) {
	// 		console.log('right is', buttonPressed)
	// 	right = buttonPressed
	// }

	// if (buttonPressed === "+"){  // + operator

	// }
	// if (buttonPressed === "=") {

	// 	$("#screen").html("dd")
	// 	console.log("touched =")
	// } 
	// else {
	// 	store += buttonPressed	
	// }
	//console.log (store);
	//console.log (buttonPressed === NaN)
	})
 	
 	// $("calculator").on("click",function(){
 	// 	console.log(this "was clicked") 
 	// });

 })	


 // -+=x