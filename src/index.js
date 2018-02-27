module.exports = function getZerosCount(number, base) {
  	var kol_5_5 = 1,
	    kol = 0,
	    mass = [],
	    chislo = [],
	    sum = 0,
	    t,
	    c = 0,
	    v,
	    ost,
	    num = number;

	while (c != 1){
		
		ost  = num % base;
		c = num / base - ost;
			chislo.push(ost);
	}

	for (var i = 0; i < chislo.length / 2; i++){
		v = chislo[i];
		chislo[i] = chislo[length-i-1];
		chislo[length-i-1] = v;
	}
	var ch = chislo.join('');
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