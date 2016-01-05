//Complete the following function that will return the difference in years (age) for a birthdate, and optionally a //"now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either //positive or negative.

function getAge(bday, currentDate) {
    var differenceInMs = currentDate - bday;
    var years = Math.round(difference/1000) / 31536000;
    console.log(Math.round(years));
}

//test
//getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
//getAge(new Date('1913/01/01'), new Date('2013/01/01')) //=== 100
//getAge(new Date('2008/02/29'), new Date('2032/03/01'))// === 24
//getAge(new Date('2008/01/01'), new Date('2000/01/01')) //=== -8


//In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the //rules, here they are:

//Years divisible by 4 are leap years
//But years divisible by 100 are not leap years
//But years divisible by 400 are leap years

function isLeapYear(year) {
    var leapYear = true;

    if (year % 4 !== 0) {
        leapYear = false;
    } else if (year % 100 !== 0) {
        leapYear = true;
    } else if (year % 400 !== 0) {
        leapYear = false;
    }
    console.log(leapYear);
}

//test
isLeapYear(1912); //true
isLeapYear(1900); //false
isLeapYear(2260); //true
isLeapYear(2400); //true
isLeapYear(1989); //false
