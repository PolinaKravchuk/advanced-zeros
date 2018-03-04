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
  	t = stepen[0]/stepen_delitel[0];
  	var minimalnoe = t;
  	for (var i = 1; i < stepen.length; i++){
  		if (stepen[i]/stepen_delitel[i] < minimalnoe) minimalnoe = stepen[i]/stepen_delitel[i];
  	}
  	return minimalnoe;
} 
