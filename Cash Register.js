var cashValues = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  
  // var currencyUnit = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  // var totalCid = 0;
  var returnCash = cash-price;
  var objectCash = {
    status: '',
    change: []
  };

  // for(var i =0; i < cid.length; i++){
  //   totalCurrency[i] = cid[i][1]/currencyUnit[i]; 
  //   totalCid += cid[i][1];
  // }

  var register = cid.reduce(function(acc,curr){
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  },
  {total: 0}
  );

    if (register.total === returnCash) {
      objectCash.status = "CLOSED";
      objectCash.change = cid;
      return objectCash;
    }

    if (register.total < returnCash) {
      objectCash.status = "INSUFFICIENT_FUNDS";
      return objectCash;
    }

    var changeValue = cashValues.reduce(function(acc,curr){
        var value = 0;

        while(register[curr.name] > 0 && returnCash >= curr.val){
            returnCash -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            returnCash = Math.round(returnCash*100)/100;
        }

        if(value > 0){
          acc.push([curr.name,value]);
        }
        return acc;
      },[]);

      if (changeValue.length < 1 || returnCash > 0) {
      objectCash.status = "INSUFFICIENT_FUNDS";
      return objectCash;
      }

      objectCash.status = "OPEN";
      objectCash.change = changeValue;

    console.log(objectCash);
      return objectCash;
      
}


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
