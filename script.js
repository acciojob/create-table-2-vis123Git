function createTable() {
	let rn = parseInt(prompt("Input number of rows"));
	let cn = parseInt(prompt("Input number of columns"));
	let tb = document.getElementById("myTable");
	for (let i = 0; i < rn; i++) {
		let tr = document.createElement("tr");
		for (let j = 0; j < cn; j++) {
			let td = document.createElement("td");
			td.innerText = `Row-${i} Column-${j}`
			tr.append(td);
		}
		tb.append(tr);
	}
	

  
}
