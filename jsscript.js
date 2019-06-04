function ShowTable(){
			var table=document.getElementById("table");
			table.style.display = 'block';
			var form=document.getElementById("form");
			form.style.display = 'none';
			var key_word=document.getElementById("key_word").value;
      var cipher_word=document.getElementById("cipher_word").value;
			var ArrayFileName = key_word.split('');
			
	

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

//console.log(FinalArray);

function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

// Split in group of 5 items
var result = chunkArray(FinalArray, 5);
//console.log(result);


            
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



            
var cipher_word_array = cipher_word.split('');
//console.log(cipher_word_array);

for (var k = 0; k < cipher_word_array.length; k++) {
  if (cipher_word_array[k] === cipher_word_array[k+1]) {
    cipher_word_array.splice(k +1, 0, "x");
    //console.log(cipher_word_array)
  }
}

var cipher_word_chunked = chunkArray(cipher_word_array, 2);

//console.log(cipher_word_chunked);

for(var g = 0; g < cipher_word_chunked.length; g++){
  //console.log(cipher_word_chunked[g]);
  new_word = cipher_word_chunked[g];
  for (var s = 0; s < new_word.length; s++) {
   // console.log(new_word[s]);
    var innerIndex;
var indexOfRemainingArray = result.findIndex(function(sub) {
   innerIndex = sub.indexOf(new_word[s]);
   return innerIndex !== -1;
});
var column = indexOfRemainingArray;
var row = innerIndex;
//console.log(indexOfRemainingArray, innerIndex);
if (column!= row) {
//console.log(column, row);
var new_column = row;
var new_row = column;
//console.log(column, row);
console.log(result[new_column][new_row]);
}else{
  //console.log(new_word[s])
}
//console.log(column, row)
  }
 
}




















           }


          