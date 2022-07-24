const _ = require('lodash');
const users = [
    { 'user': 'faisal', 'age': 26, 'active': true },
    { 'user': 'Ndid', 'age': 24, 'active': false },
    { 'user': 'Anhell', 'age': 31, 'active': true }
];
const result = _.find(users, (u) => {
    return u.age > 30;
})
console.log(result);