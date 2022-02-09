// freeCodeCamp project
// Solution for Cash Register
// Author: Felipe Meneses Graca

// Cash register drawer function 
function cashRegister(price, cash, cid) {
  
    // Create output object
    let output = {
      status: null,
      change: []
    };
  
    // Create array of objects to adress currency unit amounts
    let currency = [
      { name: "ONE HUNDRED", val: 100.0 },
      { name: "TWENTY", val: 20.0 },
      { name: "TEN", val: 10.0 },
      { name: "FIVE", val: 5.0 },
      { name: "ONE", val: 1.0 },
      { name: "QUARTER", val: 0.25 },
      { name: "DIME", val: 0.10 },
      { name: "NICKEL", val: 0.05 },
      { name: "PENNY", val: 0.01 },
    ];
  
    // Transform cid array to object
    let register = cid.reduce(
      function (accumulator, currentValue) {
        accumulator.total += currentValue[1];
        accumulator[currentValue[0]] = currentValue[1];
        return accumulator;
      }, 
      { total: 0 }
    );
  
    // Calculate change
    let change = cash - price;
  
    // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
    if (register.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    };
  
    // Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due
    if (register.total < change) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    };
  
    // Loop through the currency array
    let changeArray = currency.reduce(function(accumulator, currentValue) {
      let value = 0;
      // While there is this type of money in the drawer and while it is larger than change remaining
      while (register[currentValue.name] > 0 && change >= currentValue.val) {
        change -= currentValue.val;
        register[currentValue.name] -= currentValue.val;
        value += currentValue.val;
        change = Math.round(change * 100) / 100; //fix decimal precision
      }
      if (value > 0) {
        accumulator.push([currentValue.name, value]);
      } // Add currency to the output only if any was used
      return accumulator; // Return the accumulated changeArray
    }, []); // Initial value empty
    
    //Return {status: "INSUFFICIENT_FUNDS", change: []} if you cannot return the exact change.
    if (changeArray < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    };
  
    // Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
    output.status = "OPEN";
    output.change = changeArray;
    return output;
  }
  
  cashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])