// if (typeof $ == "undefined") {
// 	console.log("oops! I still have to link my jQuery properly!");
// } else {
// 	console.log("I did it! I linked jQuery and this js file properly!");
// }

// let $div = $("<div>");

// console.log($div);

// $(() => {
// 	let $div = $("<div>");
// 	let $body = $("body");

// 	let $h3 = $("<h3>").text(`carne asada`);

// 	$div.addClass("meat");

// 	// $h3.text("Potato");

// 	$div.append($h3);

// 	$body.append($div);
// });

$(() => {
	let $div = $("<div>");
	let $body = $("body");
	let $h3 = $("<h3>");

	$div.addClass("vegetable");
	$h3.text(`Chicken`);
	$div.append($h3);

	$body.prepend($div);
	let $divs = $("div");
	console.log($divs);

	let $meatDivs = $(".meat");

	// $meatDivs.hide(1000);

	// .hide(1000); to hide everything
	// .remove to remove the selected class

	let $img = $("<img>");

	// $img.attr(
	// 	"src",
	// 	"https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
	// );

	$body.prepend($img);

  $divs.eq(2).children().text("sfa");
  

  // .empty will empty the container 
  
});
