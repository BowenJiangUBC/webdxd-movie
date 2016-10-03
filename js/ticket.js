var data = [
	{
		"name": "Captain America: Cival War",
		"date": "sep.5 2014",
		"price": 15,
		"sold": false,
		"left": 6
	},
	{
		"name": "Frankenstein",
		"date": "Oct.2 2014",
		"price": 10,
		"sold": false,
		"left": 3
	},
	{
		"name": "Fast And Furious 6",
		"date": "March.19 2014",
		"price": 15,
		"sold": true,
		"left":0
	}
];

// var tableRow = "<tr>" + 
// "<td>Captain America: Cival War</td>" +
// "<td>Sep.5 2016</td>"+
// "<td>$15</td>"+
// "<td><button>Purchase</button></td>" +
// "</tr>";

// $('table tbody').append(tableRow);

function sellTicket(i){
	// if(data[i].left >1){
	// 	data[i].left --;
	// 	loadData(data);
	// } else {
	// 	data[i].left --;
	// 	data[i].sold = true;
	// 	loadData(data);
	// }

	data[i].left--;
	if (data[i].left == 0) {
		data[i].sold = true;
	}
	loadData(data);
	
	//console.log(i);
}

function loadData(d) {
	$(".table-data").remove();
	for (i=0;i<d.length;i++) {
		if(d[i].price>=10) {

			if(d[i].sold){
				var btn = "<button disabled>Sold Out</button>";
			} else {
				var btn = "<button onClick='sellTicket("+i+")'>Purchase</button>";
			}
		var tableRow = "<tr class='table-data'>" + 
			"<td>" + d[i].name + "</td>" +
			"<td>"+ d[i].date + "</td>"+
			"<td>"+ d[i].price + "</td>"+
			"<td>"+ btn + "</td>" +
			"<td>"+ d[i].left + "</td>" +
			"</tr>";
		$('table tbody').append(tableRow);
		}
	}
}
loadData(data);