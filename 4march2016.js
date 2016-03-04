function generateEmails(fname, lname, company) {
    var emails  = [];

    emails.push(fname + '.' + lname + '@' + company + '.com');
    emails.push(fname[0] + '.' + lname + '@' + company + '.com');
    emails.push(lname + '.' + fname + '@' + company + '.com');
    emails.push(fname[0] + lname + '@' + company + '.com');

    return emails;
}

console.log(generateEmails('lissa', 'walzer', 'awesome'));
