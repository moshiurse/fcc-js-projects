

function rot13(str) { // LBH QVQ VG!
  str = str.toUpperCase();
  var arr = str.split('');
    for(var i = 0; i < arr.length; i++){
      if(arr[i].toUpperCase() !== arr[i].toLowerCase())      {
        var val = str.charCodeAt(i);
        // console.log(str.charCodeAt(1)+13)
        
        if(val> 77){
          arr[i] = String.fromCharCode(str.charCodeAt(i)-13);
          // console.log('R',str[i],i)
        }else{
          arr[i] = String.fromCharCode(str.charCodeAt(i)+13);
        }
        }
      
    }
    return arr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
