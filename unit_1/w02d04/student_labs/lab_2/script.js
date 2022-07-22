// if (typeof $ == "undefined") {
// 	console.log("oops! I still have to link my jQuery properly!");
// } else {
// 	console.log("I did it! I linked jQuery and this js file properly!");
// }

$(() => {
	const $topContainer = $("<div>");

	$topContainer.addClass("top");

	const $h1 = $("<h1>").text(
		"Trois couleurs: PerformanceResourceTiming, blanc, et blue"
	);

	const $red = $("<div>");
	$red.addClass("red");

	const $white = $("<div>");

	$white.addClass("white");

	const $blue = $("<div>");
	$blue.addClass("blue");

	const $bottomContainer = $("<div>");

	$bottomContainer.addClass("bottom");

	let $img = $("<img>");

	$img.attr(
		"src",
		"https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
	);

	$img.append($bottomContainer);

	$("body").append($topContainer);
	$("body").append($bottomContainer);
	$("body").prepend($h1);
	$topContainer.append($red);
	$topContainer.append($white);
	$topContainer.append($blue);
	$bottomContainer.append($img);
});
