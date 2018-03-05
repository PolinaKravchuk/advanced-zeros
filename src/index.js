module.exports =
 function getZerosCount(number, base) {
  	var prost = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,
  	89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];

  	var delitel = [], stepen_delitel = [],
	    stepen = [], t, b = base, n = 0, k;
  	var len_prost = prost.length,
  		len_delitel = delitel.length,
  		len_stepen = stepen.length;
  		
  	for (var i = 0; i < len_prost; i++){
  		if (base % prost[i] == 0){
  			k = 1;
  			delitel.push(prost[i]);
  			base = base / prost[i];
  			stepen_delitel[n] = k;
	  		
	  		while (base % prost[i] == 0){
	  			k++;
	  			stepen_delitel[n] = k;
	  			base /= prost[i];
	  		}
	  		n++;
  		}
  	}
  	
  	var kol;
  	var sum, q = 0, s, finish = [];

  	for (var j = 0; j < delitel.length; j++){
  			sum = 0;
  			kol = delitel[j];
  			while (kol < number){
  				var t = number / kol;
				sum = sum + Math.floor(t);
  				kol = kol * delitel[j];
  			}
			sum = sum / stepen_delitel[j];
			sum = Math.floor (sum);
			finish.push(sum);
  	}
  	var min = finish[0];
  	for (var i = 0; i<finish.length; i++)
  		if (finish[i] < min) min = finish[i];
  	
  	return min;
}


