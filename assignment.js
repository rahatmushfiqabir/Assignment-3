/* Convert Kilometer to Meter */

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Enter Positive value";
    }
    else {
        var meter = kilo * 1000;
        return meter;
    }
}

var result = kilometerToMeter(4);
console.log(result);

/* Convert Kilometer to Meter end */


/* Calculate Budget start */

function budgetCalculator(watch, phone , laptop){
    var result = watch * 50 + phone * 100 + laptop * 500;  // watch price =50,phone price = 100, laptop price =500
    return result;
}

var totalCost = budgetCalculator(2, 1, 2);
console.log(totalCost);


/* Calculate Budget end */

/* Calculate hotel cost start */

function hotelCost(days){
var cost = 0;
    if(days<=10){
        cost = days * 100;
    }
    else if(days<=20){
        var firstPart = 10 * 100;
        var remainingDays = days - 10;
        var secondPart = remainingDays * 80;
        cost = firstPart + secondPart;
    } 

    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDays = days - 20;
        var thirdPart = remainingDays * 50;    
        cost = firstPart + secondPart + thirdPart;
    }

    return cost;
}

var totalCost = hotelCost(22)   // 1000+800+100
console.log(totalCost);

/* Calculate hotel cost end */


/* Return Largest name start */

function megaFriend(name) {
    var large;
    var first = 0;
  
    var i = 0;
    while (i < name.length) {
  
        if (name[i].length > first) {
            var first = name[i].length;
            large = name[i];
        }
    
        else if (typeof name[i] != "string") {
            return ("Enter valid string");
        }
    
        else if (name[i].length == 0 || name[i].length == '') {
            return ("Empty string");
        }
    
        i++;
    }
  
    return large;
  }
  
  var largestName = megaFriend([
    'rahat', 'mushfiq', 'abir', 'abcdefg', 
    // '', '', ''
    //'2', 3, 7
  ]);
  console.log(largestName);

/* Return Largest name end */