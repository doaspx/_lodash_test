/**
 * Created by zhanghongtao on 2015/11/16.
 */
var _ = require('lodash');

console.log('begin');
var q = _.chunk(['a','b','c','d'],-1); // [กฎaกฎ,กฎbกฎ,กฎcกฎ,กฎdกฎ]


// var q =  _.last([1,{},'c']);
//var q = _.initial([1,{},'c'])
//var q = _.chunk(['a', 'b', 'c', 1,3,4,'d'], 3) //[ [ 'a', 'b', 'c' ], [ 1, 3, 4 ], [ 'd' ] ]
//var q = _.compact([0, 1, false, 2, 'v', '4', '4',null,undefined, 3]); //[ 1, 2, 'v', '4', '4', 3 ]
var q = _.difference([1, 2, {a: 1}], [4, 2, {a: 1}]); //[ 1, { a: 1 } ]

var users = [{ 'user': 'barney',  'active': false, 'a': false },
    { 'user': 'fred',    'active': false, 'a': true },
  { 'user': 'pebbles', 'active': true, 'a': false }
];
// using the `_.property` callback shorthand
 var q = _.findIndex(users, 'a');
// => 2


console.log(q)

console.log('end');