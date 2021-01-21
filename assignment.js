/*kilometerToMeter*/
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        console.log("Ha Ha Ha. Are you crazy? Is the length ever negative?");
    }
    else {
        return meter;
    }
}

/*budgetCalculator*/
function budgetCalculator(noOfWatch, noOfMobile, noOfLaptop) {
    var totalPrice = noOfWatch * 1500 + noOfMobile * 10000 + noOfLaptop * 50000;
    return totalPrice
}

/*hotelCost*/
function hotelCost(nights) {
    var cost = 0;
    if (nights <= 10) {
        cost = nights * 1000;
    } else if (nights <= 20) {
        var firstSpan = 10 * 1000;
        var remaining = nights - 10;
        var secondSpan = remaining * 800;
        cost = firstSpan + secondSpan;
    } else {
        var firstSpan = 10 * 1000;
        var secondSpan = 10 * 800;
        var remaining = nights - 20;
        var thirdSpan = remaining * 500;
        cost = firstSpan + secondSpan + thirdSpan;
    }
    return cost;
}

/*megaFriend*/
function megaFriend([a, b, c, d]) {
    var friendsName = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i].length > friendsName.length) {
            friendsName = arguments[i];
        }
    }
    return friendsName;
}