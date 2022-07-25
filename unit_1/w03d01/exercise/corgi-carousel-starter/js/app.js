// console.log("corgi carousel connected to app.js!");
$(() => {
	let currentImageIndex = 0;
	$("next").on("click", () => {
		$(".carousel-images")
			.children()
			.eq(currentImageIndex)
			.css("display", "none");
		currentImageIndex++;
		$(".carousel-images")
			.children()
			.eq(currentImageIndex)
			.css("display", "block");

		currentImageIndex;
	});
});
