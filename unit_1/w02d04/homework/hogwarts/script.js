$(() => {
	const $container = $("#container");
	console.log($container);
	const $h1 = $("<h1>").text("Hogwarts");
	$h1.addClass("headTitle");
	$container.append($h1);
});
