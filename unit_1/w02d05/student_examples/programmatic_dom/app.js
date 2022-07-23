// $(() => {
// 	const addH2 = () => {
// 		const $h2 = $("<h2>").text("Just getting started");
// 		$("body").append($h2);
// 	};

// 	addH2();
// });
// $(()=>{
// 	const $square = $('<div>').addClass('square');
// 	$('body').append($square);
// });

// const generateSquares = () => {
//     for (let i=1; i <= 1000; i++) {
//       console.log(i);
//       const $square = $('<div>').addClass('square');
//       $('body').append($square);
//     }
//   }

//   $(()=>{
//       generateSquares();
//   });

// const generateSquares = (numberOfSquares) => {
// 	for (let i = 1; i <= numberOfSquares; i++) {
// 		console.log(i);
// 		const $square = $("<div>").addClass("square");
// 		$("body").append($square);
// 	}
// };
// const randColorRGB = () => {
// 	const red = Math.floor(Math.random() * 256);
// 	const green = Math.floor(Math.random() * 256);
// 	const blue = Math.floor(Math.random() * 256);
// 	return `rgb(${red}, ${green}, ${blue})`;
// };

// const generateSquares = () => {
// 	for (let i = 1; i <= 1000; i++) {
// 		console.log(i);
// 		const $square = $("<div>").addClass("square");
// 		const randColorRGB = () => {
// 			const red = Math.floor(Math.random() * 256);
// 			const green = Math.floor(Math.random() * 256);
// 			const blue = Math.floor(Math.random() * 256);
// 			return `rgb(${red}, ${green}, ${blue})`;
// 		};

// 		const color = randColorRGB();
// 		$square.css("background-color", color);

// 		$square.text(i);
// 		$("body").append($square);
// 	}
// };

// $(() => {
// 	generateSquares(1000);
// });

// $(() => {
// 	const $btn = $("#btn");
// 	console.log($btn);

// 	$btn.on("click", () => {
// 		console.log("button was clicked!!");
// 	});
// 	$btn.on("click", () => {
// 		$("body").append("It seems as if it has been clicked!");
// 	});
// });

const data = [
	{ name: "Megatron", address: "Cybertron" },
	{ name: "Some guy", address: "Some street" },
	{ name: "Grace Hopper", address: "Arlington, Virginia" },
	{ name: "Ching Shih", address: "The High Seas" },
	{ name: "Slimer", address: "The Library" },
	{ name: "Umbra", address: "The Void" },
	{ name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
	{ name: "Matt Huntington", address: "Remote" },
	{ name: "Ronald McDonald", address: "Casa del McDonalds" },
	{ name: "Jem", address: "Starlight Music" },
];

// for (let i = 0; i < data.length; i++) {
// 	console.log(data[i]);
// }

// $(() => {
// 	for (let i = 0; i < data.length; i++) {
// 		console.log(data[i]);
// 		const $infoContainer = $("<div>").addClass("info-container");
// 		$("body").append($infoContainer);
// 	}
// });

// $(() => {
// 	for (let i = 0; i < data.length; i++) {
// 		console.log(data[i]);
// 		const $infoContainer = $("<div>").addClass("info-container");
// 		const $nameDiv = $("<div>").addClass("name").text(data[i].name);
// 		const $addressDiv = $("<div>").addClass("address").text(data[i].address);
// 		$infoContainer.append($nameDiv);
// 		$infoContainer.append($addressDiv);
// 		$("body").append($infoContainer);
// 	}
// });

const populateData = () => {
	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);
		const $infoContainer = $("<div>").addClass("info-container");
		const $nameDiv = $("<div>").addClass("name").text(data[i].name);
		const $addressDiv = $("<div>").addClass("address").text(data[i].address);
		$infoContainer.append($nameDiv);
		$infoContainer.append($addressDiv);
		$("body").append($infoContainer);
	}
};

// $(() => {
// 	populateData();
// });

const addData = (nameParam, addressParam) => {
	data.push({ name: nameParam, address: addressParam });

	const $infoContainer = $("<div>").addClass("info-container");
	const $nameDiv = $("<div>").addClass("name").text(nameParam);
	const $addressDiv = $("<div>").addClass("address").text(addressParam);

	$infoContainer.append($nameDiv);
	$infoContainer.append($addressDiv);

	$("body").append($infoContainer);
};

$(() => {
	$("#submit").on("click", () => {
		const newName = $("#name").val();
		const newAddress = $("#address").val();
		addData(newName, newAddress);
	});
	//	populateData();
	//	addData("Bilbo", "The Shire");
});
