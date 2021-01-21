// Function name list
// kilometerToMeter()
//budgetCalculator(watch,mobile,laptop) per price: watch=50,mobile=100,laptop=500
//hotelCost() per night price: 1-10night=100, 11night-20night=80, 20night=50
//megaFriend()


// Convert Kilometer to Meter
function kilometerToMeter(kilometer) {
    var meter;
    if (kilometer > 0) {
        meter = kilometer * 1000;
    }else{
        meter = 'kilometer cannot be negative'
    }
    return meter;
}

// Budget Calculator
function budgetCalculator(watch,mobile,laptop) {
    var totalPrice;
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;
        totalPrice = watch + mobile + laptop;
    return totalPrice;
}
var result = budgetCalculator(2,4,8)
console.log(result);