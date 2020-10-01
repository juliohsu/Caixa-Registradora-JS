function checkCashRegister(price, cash, cid) {
    for(var i = 0, total = 0; i < cid.length; i++){
    total += cid[i][1]};
    var money = total.toFixed(1);
    var changes = cash-price;
    var obj = {status: '', change: []};
    var arr2 = [], arr2Model = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
    arr2Model.reverse();


    if (money == changes) {
      obj.status = 'CLOSED';
      obj.change = cid;
    } else {
    
      if (money < changes) {
        obj.status = 'INSUFFICIENT_FUNDS';
      } else {
    
    
    var currencyA = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    var amountOfMoney = [], index = 0;
    cid.forEach(function(typeOfMoney){
amountOfMoney.push(Math.round(typeOfMoney[1]/currencyA[index]));
      index++
    });
    


    var inverseCid = cid.reverse(), inverseAm = amountOfMoney.reverse(), inverseCurr = currencyA.reverse() ;
    
    
    for (var index = 0; index < inverseAm.length; index++){
if (inverseAm[index] > 0 && inverseCurr[index] <= changes){
     var count = inverseAm[index], count2 = 0;
     while(count > 0 & changes>=inverseCurr[index]){    
          changes = changes.toFixed(2) - inverseCurr[index]
          count--
          count2++
      }
    arr2Model[index][1] = arr2Model[index][1] * count2
    arr2.push(arr2Model[index])
    }
  }
    
    
    if (changes <= 0){
      obj.status = 'OPEN';
      obj.change = arr2;
    } else {
      obj.status = 'INSUFFICIENT_FUNDS';
      obj.change = [];
    }


    }}

return obj;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
