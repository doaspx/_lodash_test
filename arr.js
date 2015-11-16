/**
 * Created by zhanghongtao on 2015/11/16.
 */
console.log('begin');

// var q =  _.last([1,{},'c']);
//var q = _.initial([1,{},'c'])
//var q = _.chunk(['a', 'b', 'c', 1,3,4,'d'], 3) //[ [ 'a', 'b', 'c' ], [ 1, 3, 4 ], [ 'd' ] ]
//var q = _.compact([0, 1, false, 2, 'v', '4', '4',null,undefined, 3]); //[ 1, 2, 'v', '4', '4', 3 ]
var q = _.difference([1, 2, {a: 1}], [4, 2, {a: 1}]); //[ 1, { a: 1 } ]

console.log(q)

console.log('end');