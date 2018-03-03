module.exports =
 function getZerosCount(number, base) {
  		var kol_5_5 = 1, mass = [], sum = 0,
  		c = number, ost, v , str = "", t, chislo;
  		var arr = [];
  			while (true) {
  				if (c < base) {
					break;
				}
				ost  = c % base;

				c = (c - ost) / base;
				c = Math.floor (c);

				v = ost.toString();

				arr.push(v);
				
		
			}
							
	c = c.toString();	 
	arr.push(c);	
	arr.reverse();

	var s;
	
	for (var i = 0; i < arr.length; i++){
		s = arr[i];
		var newstr = '', j;
	    for (j = s.length - 1; j >= 0; j--) {
	        newstr += s.charAt(j);
	    }
	    arr[i] = newstr;
		
	}

	tr = arr.join('');

	chislo = Number(tr);

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
