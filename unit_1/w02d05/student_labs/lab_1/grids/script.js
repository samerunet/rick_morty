// const createSquare = (num) => {
// 	for (let i = 0; i < num.length; i++) {
// 		//  if (i % 2 != 0) {
// 		const $square = $("<div>").addClass("square");
// 		$square.attr("id", "square" + i);
// 		$("body").append($square);

// 		//   }
// 	}
// };

// const createSquares = (numOfSq) => {
// 	for (i = 1; i <= numOfSq; i++) {
// 		const $square = $("<div>").addClass("square").text(i);
// 		$square.attr("id", "square" + i);
// 		$("body").append($square);
// 		//all the odd ID's need to be red
// 		//all the even need to black
// 		if (i % 2 != 0) {
// 			$square.css("background-color", "red");
// 		} else {
// 			$square.css("background-color", "black");
// 		}
// remove the code below to have the row
// 		$("#square9").remove();
// 		$("#square18").remove();
// 		$("#square27").remove();
// 		$("#square36").remove();
// 		$("#square45").remove();
// 		$("#square54").remove();
// 		$("#square63").remove();
// 	}
// };

const createSquares = (numOfSq) => {
	for (i = 1; i <= numOfSq; i++) {
		const $square = $("<div>").addClass("square").text(i);
		$square.attr("id", "square" + i);
		$("body").append($square);
		//all the odd ID's need to be red
		//all the even need to black
		if (i % 2 != 0) {
			$square.css("background-color", "red");
		} else {
			$square.css("background-color", "black");
		}
	}
};
$(() => {
	createSquares(71);
});
