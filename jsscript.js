function ShowTable(){
  String.prototype.trimAll = function() {
return this.replace(/\s+/g,"");
}
      var table=document.getElementById("table");
      table.style.display = 'block';
      var form=document.getElementById("form");
      form.style.display = 'none';
      var key_word1=document.getElementById("key_word").value;
      key_word = key_word1.trimAll().toLowerCase();  
      var cipher_word_first1=document.getElementById("cipher_word").value;
     cipher_word_first = cipher_word_first1.trimAll().toLowerCase();    
      var ArrayKeyName = key_word.split('');
      for (var t = 0; t < ArrayKeyName.length; t++) {
         if (ArrayKeyName[t] === 'j') {
          //console.log('ima j')
          ArrayKeyName[t] = 'i';
         }
      }

var ArrayKeyNameWExt = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var FinalArray = [];

var unique = [...new Set(ArrayKeyName)];
for (var i = 0; i < ArrayKeyNameWExt.length; ++i) {
    var temp = ArrayKeyNameWExt[i];
    var found = false;
    
    for (var j = 0; j < ArrayKeyName.length; ++j) {
        if (ArrayKeyName[j] === temp[0]) {
            found = true;
            break;
        }
    }
    
    if (!found) {
      FinalArray = unique;
        FinalArray.push(ArrayKeyNameWExt[i]);
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

console.log(cipher_word_first);

var cipher_word_array = cipher_word_first.split('');
console.log(cipher_word_array);
for (var w = 0; w < cipher_word_array.length; w++) {
         if (cipher_word_array[w] === 'j') {
          //console.log('ima j')
          cipher_word_array[w] = 'i';
         }
      }

for (var k = 0; k < cipher_word_array.length; k++) {
  if (cipher_word_array[k] === cipher_word_array[k+1]) {
    cipher_word_array.splice(k +1, 0, "x");
    //console.log(cipher_word_array)
    var cipher_word = cipher_word_array.join('');
  }else{
    var cipher_word = cipher_word_array.join('');
  }
}

var t = [];
  var final_result = '';
for(var l = 0; l < cipher_word.length; l += 2){
    var cripting_two_letters_odd = cipher_word[l];
    var cripting_two_letters_even = cipher_word[l + 1];
    console.log(cripting_two_letters_odd,  cripting_two_letters_even)
    var odd_x, odd_y, even_x, even_y;
    for(var p = 0; p < result.length; p++) {
      for(var h = 0; h < result[p].length; h++){
        if (result[p][h] == cripting_two_letters_odd){
          odd_x = p;
          odd_y = h;
        }
        if (result[p][h] == cripting_two_letters_even){
          even_x = p;
          even_y = h;
        }
      }
    }
    console.log(odd_x, odd_y, even_x, even_y  )
    var coordinates_first = '', coordinates_second = '';
    
    if(odd_x === even_x) {
      if(odd_y === 4) {
        coordinates_first = result[odd_x][0];
      }
      else {
        coordinates_first = result[odd_x][odd_y + 1];
      }
      if(even_y === 4) {
        coordinates_second = result[even_x][0];
      }
      else {
        coordinates_second = result[even_x][even_y + 1]
      }
    }
    if(odd_x === even_y) {
      if(odd_x === 4) {
        coordinates_first = result[0][odd_y];
      }
      else {
        coordinates_first = result[odd_x + 1][odd_y];
      }
      if(even_x === 4) {
        coordinates_second = result[0][even_y];
      }
      else {
        coordinates_second = result[even_x + 1][even_y]
      }
    }
    if(odd_x !== even_x && odd_y !== even_y) {
      coordinates_first = result[odd_x][even_y];
      coordinates_second = result[even_x][odd_y];
    }
    final_result = final_result + coordinates_first + coordinates_second;
  }
  document.getElementById("print").innerHTML = 'Your new word is: ' +final_result;
  return final_result;
}

