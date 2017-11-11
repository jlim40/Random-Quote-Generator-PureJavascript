var quotes = [
	{"quote": "q1",
	 "name": "n1"},
	{"quote": "q2",
	 "name": "n2"},
	{"quote": "q3",
	 "name": "n3"},
	{"quote": "q4",
	 "name": "n4"},
	{"quote": "q5",
	 "name": "n5"},
	{"quote": "q6",
	 "name": "n6"},
	{"quote": "q7",
	 "name": "n7"},
];

function newQuote(){
	var rand = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = quotes[rand].quote;
	document.getElementById("name").innerHTML = quotes[rand].name;
}