//Complete the following function that will return the difference in years (age) for a birthdate, and optionally a //"now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either //positive or negative.

function getAge(bday, currentDate) {
    var currentDate = currentDate || new Date();

    var differenceInMs = currentDate - bday;
    var years = Math.round(differenceInMs/1000) / 31536000;
    var currentMonth = currentDate.getMonth();
    var birthMonth = bday.getMonth();
    var currentDay = currentDate.getDate();
    var birthDay = bday.getDate();

    //if both birth month and birth day are less than current month and current day, subtract one from age
    if (currentDay < birthDay && currentMonth === birthMonth) {
        years--;

    }
    console.log(Math.round(years));
}

//test
getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01')) //=== 100
getAge(new Date('2008/02/29'), new Date('2032/03/01'))// === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) //=== -8
getAge(new Date('2008/02/29'), new Date('2009/02/28')) //=== 0
getAge(new Date('1976/11/19'), new Date('2013/01/01')) //=== 36


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
//isLeapYear(1912); //true
//isLeapYear(1900); //false
//isLeapYear(2260); //true
//isLeapYear(2400); //true
//isLeapYear(1989); //false
