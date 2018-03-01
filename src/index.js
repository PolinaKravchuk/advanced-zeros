module.exports = function getZerosCount(number, base) {
 var kol_5_5 = 1, mass = [], sum = 0, c = 300, ost, v = "", str = "", t, chislo;
   while (true){
  		if (c < base) break;
		ost  = number % base;
		c = (number - ost) / base;
		v = String(ost);
		str = v + str;
	}
	
	str = str + c;
	console.log(str);
	str = str.reverse();
	console.log(str);
	chislo = Number(str);
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
