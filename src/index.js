module.exports = function getZerosCount(number, base) {
  	var kol_5_5 = 1,
	    kol = 0,
	    mass = [],
	    chislo = [],
	    sum = 0,
	    t,
	    c = 10,
	    v,
	    ost,
	    num = number;

	while (c > 1){
		
		ost  = num % base;
		c = num / base;
			chislo.push(ost);
	}

	chislo = chislo.reverse()
	var ch = chislo.join('');

	/*for(var i = 1; i <chislo.length; i++){
		ch = ch + chislo[i];
	}*/
	ch = Number(ch);
	while (kol_5_5 < ch){
		kol_5_5 = kol_5_5 * 5;
		mass.push (kol_5_5);
	}

	for (var i = 0; i < mass.length; i++){
		t = number / mass[i];
		t = Math.floor (t);
		sum = sum + t;
	}

	return sum;
} 