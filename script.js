 $(document).ready(function(){
// var left = null;
// var operator = null;
// var right = null;
var total = [];
 	$("span").click(function(event) {

	var buttonPressed = $(event.target).text()
	if (buttonPressed === "C"){
		$("#screen").html("")
		total = [];
	}


	if (buttonPressed !== "=" && buttonPressed !== "C" 
		&& buttonPressed !== String.fromCharCode(247)) {
		$("#screen").append(buttonPressed)
		total.push(buttonPressed)
	}

	if (buttonPressed === String.fromCharCode(247)) {
		$("#screen").append(String.fromCharCode(247))
		total.push("/")
	}
	// more complex version

		if (buttonPressed === "=") {

		total = total.join("")


		var re = /[x+-\/]/
		var match = total.match(re)
		total = total.split(re)

		console.log (total, "total")
		console.log(match[0]);
		operator = match[0]



		if (match[0] === "+") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) + parseInt(total[1]))
		}
		if (match[0] === "-") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) - parseInt(total[1]))
		}
		if (match[0] === "x") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) * parseInt(total[1]))
		}
		if (match[0] === "/") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) / parseInt(total[1]))
		}

	}
	// simple version

	// if (buttonPressed === "=") {
	// 	//console.log(4444)
	// 	if (total[1] === "+") {
	// 		$("#screen").html("")
	// 		$("#screen").append(
	// 			 parseInt(total[0]) + parseInt(total[2]))
	// 	}
	// 	if (total[1] === "-") {
	// 		$("#screen").html("")
	// 		$("#screen").append(
	// 			 parseInt(total[0]) - parseInt(total[2]))
	// 	}
	// 	if (total[1] === "x") {
	// 		$("#screen").html("")
	// 		$("#screen").append(
	// 			 parseInt(total[0]) * parseInt(total[2]))
	// 	} else {
	// 		$("#screen").html("")
	// 		$("#screen").append(
	// 			 parseInt(total[0]) / parseInt(total[2]))
	// 	}	


	// total = [];
	// }
	console.log(total)
	

	})
 	


 })	


 // -+=x