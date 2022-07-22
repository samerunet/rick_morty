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

	let $ul = $("<ul>");

	$ul.addClass("storage");

	let $li = $("<li>").text("butter beer");
	let $li2 = $("<li>").text("invisible cloak").addClass("secret");
	let $li3 = $("<li>").text("magic map").addClass("secret");
	let $li4 = $("<li>").text("time turner").addClass("secret");
	let $li5 = $("<li>").text("leash").addClass("pet");
	let $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");

	$ul.append($li, $li2, $li3, $li4, $li5, $li6);

	$container.append($ul);
});
