var request = require('request');

//Promise Practice

/*
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('This is some data. :');
    }, 1000);
    reject('Rejected');
});

promise1.then(resolved, rejected);
promise1.catch(function(data) {
    console.log('catch: ', data);
})


function resolved(data) {
    console.log('Resolved: ', data);
}

function rejected(data) {
    console.log('Rejected: ', data);
}
*/

var promise3 = promise2.then(function(data) {
    console.log(data.body);
})

promise3.catch(function(error) {
    console.log(error);
    console.log('You hit an error');
})

function proisifyGet(url) {
    return new Promise(function(resolve, reject) {

        request(url, function(err, res, body) {
            if (err) {
                reject(err);
            } else if (res.statusCode !== 200) {
                reject(res);
            } else {
                resolve(res);
            }
        }); //End of the callback for request
    }); //end of the promise constructor
}

promisifyGet()
