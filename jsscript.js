
		function ShowTable(){
			var table=document.getElementById("table");
			table.style.display = 'block';
			var form=document.getElementById("form");
			form.style.display = 'none';
			var key_word=document.getElementById("key_word").value;
			var ArrayFileName = key_word.split('');
			var cipher_word=document.getElementById("cipher_word").value;
			var ArrayCipherName = cipher_word.split('');
			console.log(ArrayCipherName);
	

var ArrayFileNameWExt = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var FinalArray = [];

var unique = [...new Set(ArrayFileName)];
for (var i = 0; i < ArrayFileNameWExt.length; ++i) {
    var temp = ArrayFileNameWExt[i];
    var found = false;
    
    for (var j = 0; j < ArrayFileName.length; ++j) {
        if (ArrayFileName[j] === temp[0]) {
            found = true;
            break;
        }
    }
    
    if (!found) {
      FinalArray = unique;
        FinalArray.push(ArrayFileNameWExt[i]);
    }
}

console.log(FinalArray);

function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

// Split in group of 5 items
var result = chunkArray(FinalArray, 5);
console.log(result);

var cipher_result = chunkArray(ArrayCipherName, 2);
console.log(cipher_result);
            
            var 
                table = document.getElementById("table");
       
           
           for(var i = 0; i < result.length; i++)
           {
               // create a new row
               var newRow = table.insertRow(table.length);
               for(var j = 0; j < result[i].length; j++)
               {
                   // create a new cell
                   var cell = newRow.insertCell(j);
                   
                   // add value to the cell
                   cell.innerHTML =result[i][j];
               }
           }
           }
      