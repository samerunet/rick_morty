const createPyramid = (num) => {
	// for loop to check condition
	// createPyramid
	for (let i = 0; i < num; i++) {
		for (a = 1; a <= i; a++) {
			const $pyramid = $("<div>").addClass("pyramid").text(i);
			$pyramid.attr("id", +i);
			$(".wrapper").append($pyramid);
		}
		const $row = $("<div>").addClass("row");
		$(".wrapper").append($row);
		$row.attr("id", +i);
	}
};

$(() => {
	createPyramid(10);
});
