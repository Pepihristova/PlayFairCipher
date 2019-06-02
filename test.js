//console.log('Pepi')

var ArrayFileNameWExt = ['i', 'k', 'k', 'k', 'n', 'o', 'p', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < ArrayFileNameWExt.length; i++) {
	if (ArrayFileNameWExt[i] === ArrayFileNameWExt[i+1]) {
		ArrayFileNameWExt.splice(i +1, 0, "x");
		//console.log(ArrayFileNameWExt)
	}
}


function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

var result = chunkArray(ArrayFileNameWExt, 2);
//console.log(result);


var array = [['a','b','c'],['d','e','k'],['o','p','g']];
var number = 'p';

var innerIndex;
var indexOfRemainingArray = array.findIndex(function(sub) {
   innerIndex = sub.indexOf(number);
   return innerIndex !== -1;
});

//console.log(indexOfRemainingArray, innerIndex);
