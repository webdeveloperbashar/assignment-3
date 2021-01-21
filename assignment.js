//https://github.com/webdeveloperbashar/assignment-3

// Convert Kilometer to Meter
function kilometerToMeter(kilometer) {
  var meter;
  if (kilometer < 0) {
    meter = "Distance cannot be negative";
  }else {
    meter = kilometer * 1000; // 1 kilometer = 1000 meter
  }
  return meter;
}


// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  var totalPrice;
  if (watch < 0) {
    totalPrice = "Watch price cannot be negative";
  }else if(phone < 0){
    totalPrice = "Phone price cannot be negative";
  }else if(laptop < 0){
    totalPrice = "Laptop price cannot be negative";
  }else{
    var watch = watch * 50; // per watch price 50
    var phone = phone * 100; // per phone price 100
    var laptop = laptop * 500; // per laptop price 500
    totalPrice = watch + phone + laptop;
  }
  return totalPrice;
}

// Hotel Cost
function hotelCost(nightCount){
    var roomRent;
    if (nightCount < 0) {
        roomRent = 'Night count cannot be negative';
    }else if(nightCount <= 10){
        var firstStep = nightCount * 100; // 1-10 per night = 100
        roomRent = firstStep;
    }else if(nightCount <= 20){
        var getNightCount = nightCount - 10;
        var secondStep = getNightCount * 80; // 11-20 per night = 80
        var firstStep = 10 * 100; // 1-10 per night = 100 (Re-assign)
        roomRent = secondStep + firstStep;
    }else{
        var firstStep = 10 * 100; // 1-10 per night = 100 (Re-assign)
        var secondStep = 10 * 80; // 11-20 per night = 80 (Re-assign)
        var getNightCount = nightCount - 20;
        var thirdStep = getNightCount * 50; // 20 more per night = 50
        roomRent = firstStep + secondStep + thirdStep;
    }
    return roomRent;
}

// Mega Friend
var names = ['Hasan', 'Mazharul', 'Sakil', 'Mohidul', 'Somrat', 'Riyad']
function megaFriend(friendNames){
    var highestName = friendNames[0];
    for (var i = 0; i < friendNames.length; i++) {
        var element = friendNames[i];
        var lengthCheck = element.length; // Name length check
        if (highestName.length < lengthCheck) {
            highestName = element // highest value update
        }
    }
    return highestName;
}