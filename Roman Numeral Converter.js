function convertToRoman(num) {
    var roman = '';

    let romanValues = [
    [ 1000, 'M' ],
    [ 900, 'CM' ],
    [ 500, 'D' ],
    [ 400, 'CD' ],
    [ 100, 'C' ],
    [ 90, 'XC' ],
    [ 50, 'L' ],
    [ 40, 'XL' ],
    [ 10, 'X' ],
    [ 9, 'IX' ],
    [ 5, 'V' ],
    [ 4, 'IV' ],
    [ 1, 'I' ]
  ];

  function convert(currentNum){
      for(var i = 0; i < romanValues.length; i++){
          if(currentNum >= romanValues[i][0]){
              roman += romanValues[i][1].repeat(Math.floor(currentNum/romanValues[i][0]));
              convert(currentNum % romanValues[i][0]);
              break;
          }
      }
  }
  convert(num);

 return roman;
}

console.log(convertToRoman(1596));
