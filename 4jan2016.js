/*
Given a schedule and an integer, find out if any gaps exist in the schedule that are n minuites long, then return a new object with the earliest start time possible, and an end time that is n minutes after the start time.

Bonus Add the object at the appropriate index in the array
*/


function findGap(schedule, mins) {
    // your code here
    var end;
    for (var i = 0; i < schedule.length - 1; i++) {
        end = schedule[i].end;
        var start = schedule[i + 1].start;
        var millisecondsDifference = start - end;
        var minDifference = msToMins(millisecondsDifference);
        if (mins <= minDifference) {
            break;
        }
    }
    var newEnd = addTime(end, mins);
    console.log('Earliest start date is ' + end);
    console.log('New end date is ' + newEnd);
}

function msToMins(milliseconds) {
     return Math.round(milliseconds/1000) / 60;
}

function addTime(date, mins) {
    return new Date(date.getTime() + mins * 60000);
}

var schedule = [
    {
        what: "Daily Sync",
        start: new Date(2016,1,4,9,30,0),
        end: new Date(2016,1,4,10,0,0)
    },
    {
        what: "1:1",
        start: new Date(2016,1,4,11,30,0),
        end: new Date(2016,1,4,12,30,0)
    },
    {
        what: "Important Meeting",
        start: new Date(2016,1,4,13,30,0),
        end: new Date(2016,1,4,14,30,0)
    },
    {
        what: "Daily Sync",
        start: new Date(2016,1,5,9,30,0),
        end: new Date(2016,1,5,10,0,0)
    },
    {
        what: "Important Meeting",
        start: new Date(2016,1,5,13,30,0),
        end: new Date(2016,1,5,14,30,0)
    },
    {
        what: "Daily Sync",
        start: new Date(2016,1,6,9,30,0),
        end: new Date(2016,1,6,10,0,0)
    },
    {
        what: "Important Meeting",
        start: new Date(2016,1,6,13,30,0),
        end: new Date(2016,1,6,14,30,0)
    },
    {
        what: "Daily Sync",
        start: new Date(2016,1,7,9,30,0),
        end: new Date(2016,1,7,10,0,0)
    },
    {
        what: "Daily Sync",
        start: new Date(2016,1,8,9,30,0),
        end: new Date(2016,1,8,10,0,0)
    }
]

findGap(schedule, 90);
