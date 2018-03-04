module.exports =
 function getZerosCount(number, base) {
  	var prost = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,
  	89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];

  	var delitel = [], stepen_delitel = [],
  		stepen = [], t, b = base;
  	for (var i = 0; i < prost.length; i++){
  		if (base % prost[i] == 0){
  			delitel.push(prost[i]);
  			base = base / prost[i];
  		}
  	}
  	for (var i = 0; i < delitel.length; i++) stepen_delitel[i] = 0;
  	for (var i = 0; i < delitel.length; i++){
  		while (b % delitel[i] == 0){
  			stepen_delitel[i]++;
  			b /= delitel[i];
  		}
  	}
  	//console.log(delitel);
  	//console.log(stepen_delitel);
  	for (var i = 0; i < delitel.length; i++) stepen[i] = 0;
  	for (var i = 2; i <= number; i++){
  		t = i;
  		for ( var j = 0; j < delitel.length; j++){
  			while(t % delitel[j] == 0){
  				stepen[j]++;
  				t /= delitel[j];
  			}
  		}
  	}
  	//console.log(stepen);
  	t = stepen[0]/stepen_delitel[0];
  	var minimalnoe = t;
  	for (var i = 1; i < stepen.length; i++){
  		if (stepen[i]/stepen_delitel[i] < minimalnoe) minimalnoe = stepen[i]/stepen_delitel[i];
  	}
  	//console.log(Math.floor(minimalnoe));
  	minimalnoe = Math.floor(minimalnoe);
  	return minimalnoe;
} 

//getZerosCount (5923896, 178);











/*//module.exports =
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
				//c = Math.floor (c);

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

var k = getZerosCount (46899647, 232);
console.log(k);*/