$(() => {
	const $container = $("#container");
	console.log($container);
	const $h1 = $("<h1>").text("Hogwarts");
	$h1.addClass("headTitle");
	$container.append($h1);

	let $h2 = $("<h2>").text("Sami Sipahi");
	let $h3 = $("<h3>").text("Hufflepuff");
	let $h4 = $("<h4>").text("OWL");
	let $h4v2 = $("<h4>").text("Holly Wand with Unicorn Hair Core");

	$h2.addClass("name");
	$h3.addClass("house");
	$h4.addClass("pet");
	$h4v2.addClass("wand");

	$container.append($h2, $h3, $h4, $h4v2);
});
