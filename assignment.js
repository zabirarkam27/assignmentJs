/*kilometerToMeter*/
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return 'Ha Ha Ha. Are you crazy? Is the length ever negative?';
    }
    else {
        return meter;
    }
}


/*budgetCalculator*/
function budgetCalculator(watch, mobile, laptop) {
    var totalPrice = watch * 50 + mobile * 100 + laptop * 500;
    if (watch < 0) {
        return 'Please enter valid amount';
    }
    if (mobile < 0) {
        return 'Please enter valid amount';
    }
    if (laptop < 0) {
        return 'Please enter valid amount';
    }
    else {
        return totalPrice
    }
}


/*hotelCost*/
function hotelCost(nights) {
    var cost = 0;
    if (nights <= 10) {
        cost = nights * 100;
    } else if (nights <= 20) {
        var firstSpan = 10 * 100;
        var remaining = nights - 10;
        var secondSpan = remaining * 80;
        cost = firstSpan + secondSpan;
    } else {
        var firstSpan = 10 * 100;
        var secondSpan = 10 * 80;
        var remaining = nights - 20;
        var thirdSpan = remaining * 50;
        cost = firstSpan + secondSpan + thirdSpan;
    }
    return cost;
}


/*megaFriend*/
function megaFriend() {
    var friendsName = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i].length > friendsName.length) {
            friendsName = arguments[i];
        }
    }
    return friendsName;
}


console.log(kilometerToMeter(13));
console.log(budgetCalculator(1, 1, 1));
console.log(hotelCost(21));
console.log(megaFriend('Zabir', 'Moshiur', 'Aklima', 'Mariam Begum', 'Abdus Sattar'));
