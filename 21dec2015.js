//Promise Practice

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
