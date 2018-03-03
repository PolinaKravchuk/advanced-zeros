module.exports =
 function getZerosCount(number, base) {
  	var kol_5_5 = 1, mass = [], sum = 0,
  		c = number, ost, v , str = "", t, chislo;
  		var arr = [];
  			while (true) {
  				if (c < base) {
					console.log(c);
					break;
				}
				ost  = c % base;
				console.log(ost);

				c = (c - ost) / base;
				c = Math.floor (c);
				console.log(c);

				//v = ost.toString();
				//console.log(v);

				arr.push(ost);

				console.log(str);
				
		
			}
							
	//c = c.toString();	 
	arr.push(c);	
	console.log(arr);
	console.log(arr[0]);
	console.log(arr[3]);
	/*var tr;
	tr = str + c;
	//console.log(typeOf(tr));
	console.log(tr);
	
	console.log(arr);*/
	//tr.reverse();
	var s = [];
	arr.reverse();
	/*for (var i = 0; i < arr.length; i++){
		s.push(arr[i]);
		s[i].reverse();
		console.log(s);
	}*/
	tr = arr.join('');
	console.log(tr);

	chislo = Number(tr);
	console.log(chislo);

	while (kol_5_5 < chislo){
		kol_5_5 = kol_5_5 * 5;
		mass.push (kol_5_5);
	}

	for (var i = 0; i < mass.length; i++){
		t = chislo / mass[i];
		t = Math.floor (t);
		sum = sum + t;
	}

	return sum;
} 

//getZerosCount (46899647, 232);
//console.log(k);
