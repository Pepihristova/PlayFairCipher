function ShowTable(){
  // take all empty spaces out
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
      // replace j with i in the key word
      for (var t = 0; t < ArrayKeyName.length; t++) {
         if (ArrayKeyName[t] === 'j') {
          //console.log('ima j')
          ArrayKeyName[t] = 'i';
         }
      }

var ArrayKeyNameWExt = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var FinalArray = [];

var unique = [...new Set(ArrayKeyName)]; // make it unique
// check if the letter is in the alphabet
for (var i = 0; i < ArrayKeyNameWExt.length; ++i) {
    var temp = ArrayKeyNameWExt[i];
    var found = false;
    
    for (var j = 0; j < ArrayKeyName.length; ++j) {
        if (ArrayKeyName[j] === temp[0]) {
            found = true;
            break;
        }
    }
    // the array to fill the matrix
    if (!found) {
      FinalArray = unique;
        FinalArray.push(ArrayKeyNameWExt[i]);
    }
}

//console.log(FinalArray);
// divide into subarrays function
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

          // fill the matrix
            
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

console.log(cipher_word_first); // the word

var cipher_word_array = cipher_word_first.split(''); // the word in arrays
console.log(cipher_word_array);
// replace j with i in the cripting word
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
    var cripting_two_letters_odd = cipher_word[l]; //first of pair
    var cripting_two_letters_even = cipher_word[l + 1]; //second of pair
    console.log(cripting_two_letters_odd,  cripting_two_letters_even)
    var odd_x, odd_y, even_x, even_y;
    // odd_x - big array place for odd plase letter
    // odd_y - small place for odd plase letter
    // even_x - big array place for even plase letter
    // even_y - small place for even plase letter
    for(var p = 0; p < result.length; p++) {
      for(var h = 0; h < result[p].length; h++){
        if (result[p][h] == cripting_two_letters_odd){
          odd_x = p;
          odd_y = h;
          // taking the values of the odd letter
        }
        if (result[p][h] == cripting_two_letters_even){
          even_x = p;
          even_y = h;
          // taking the values of the even letter
        }
      }
    }
    console.log(odd_x, odd_y, even_x, even_y  )
    var new_letter_first = '', new_letter_second = '';
    // the result of the new cripted word
    if(odd_x === even_x) { // if the letters are on one row
      if(even_y === 4) { // if even letter is last on row
        new_letter_second = result[even_x][0];
      }
      else {  // if even letter is not last on row
        new_letter_second = result[even_x][even_y + 1]
      }
      if(odd_y === 4) { // if odd letter is last on row
        new_letter_first = result[odd_x][0];
      }
      else {
        new_letter_first = result[odd_x][odd_y + 1]; // if the odd letter is not last on row
      }
    }
    if(odd_y === even_y) { // if on one column other
      if(odd_x === 4) { // if odd letter is last on column 
        new_letter_first = result[0][odd_y];
      }
      else { // if odd letter is not last on column 
        new_letter_first = result[odd_x + 1][odd_y];
      }
      if(even_x === 4) { // if even letter is last on column 
        new_letter_second = result[0][even_y];
      }
      else { // if even letter is not last on column 
        new_letter_second = result[even_x + 1][even_y]
      }
    }
    if(odd_x !== even_x && odd_y !== even_y) { // if the letters make a square or rectangle
      new_letter_first = result[odd_x][even_y];
      new_letter_second = result[even_x][odd_y];
    }
    console.log(new_letter_first, new_letter_second)
    final_result = final_result + new_letter_first + new_letter_second;
  }
  document.getElementById("print").innerHTML = 'Your new word is: ' +final_result;
  return final_result;
}

