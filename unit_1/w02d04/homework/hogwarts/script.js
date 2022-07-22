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
	let $h4wand = $("<h4>").text("New wand");
	$h2.addClass("name");
	$h3.addClass("house");
	$h4.addClass("pet");
	$h4v2.addClass("wand");
	$h4wand.addClass("wand");

	$container.append($h2, $h3, $h4, $h4v2);

	let $ul = $("<ul>");

	$ul.addClass("storage");

	let $li = $("<li>").text("butter beer");
	let $li2 = $("<li>").text("invisible cloak").addClass("secret");
	let $li3 = $("<li>").text("magic map").addClass("secret");
	let $li4 = $("<li>").text("time turner").addClass("secret");
	let $li5 = $("<li>").text("leash").addClass("pet");
	let $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
	$ul.attr("storage", "trunk");

	$ul.append($li, $li2, $li3, $li4, $li5, $li6);

	$container.prepend($ul);
	let $table = $("<table>");
	let $thead1 = $("<thead>");
	let $thead1th1 = $("<th>");
	let $thead1th2 = $("<th>");
	let $tr1 = $("<tr>");
	let $td1 = $("<td>");
	let $td2 = $("<td>");
	let $tr2 = $("<tr>");
	let $td3 = $("<td>");
	let $td4 = $("<td>");
	let $tr3 = $("<tr>");
	let $td5 = $("<td>");
	let $td6 = $("<td>");
	let $tr4 = $("<tr>");
	let $td7 = $("<td>");
	let $td8 = $("<td>");
	let $tr5 = $("<tr>");
	let $td9 = $("<td>");
	let $td10 = $("<td>");
	let $tr6 = $("<tr>");
	let $td11 = $("<td>");
	let $td12 = $("<td>");
	let $tr7 = $("<tr>");
	let $td13 = $("<td>");
	let $td14 = $("<td>");

	$table.append($thead1);
	$thead1.append($thead1th1.text("Day"), $thead1th2.text("Classes"));

	$tr1.append($td1.text("Monday"), $td2.text("Herbology"));

	$tr2.append($td3.text("Tuesday"), $td4.text("Charms"));

	$tr3.append($td5.text("Wednesday"), $td6.text("Potions"));

	$tr4.append($td7.text("Thursday"), $td8.text("Monsters"));

	$tr5.append($td9.text("Friday"), $td10.text("Mugglescript"));

	$tr6.append($td11.text("Saturday"), $td12.text("Transfiguration"));

	$tr7.append($td13.text("Sunday"), $td14.text("Healing"));

	$table.append($tr1, $tr2, $tr3, $tr4, $tr5, $tr6, $tr7);
	$table.addClass("table");
	$container.append($table);

	$h4v2.remove();
	$li.remove();
});
