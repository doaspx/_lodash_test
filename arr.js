/**
 * Created by zhanghongtao on 2015/11/16.
 */
var _ = require('lodash');
console.log('begin');
//chunk##################说明
// 1、chunk
// n. 大块；矮胖的人或物
// 用法： _.chunk(array,number)  根据number对array进行均等的分块，如果array不能被number平分，则会留下一个余下的块。
// 当 size<=1的时候，都是按1等分
//2、compact
// adj. 紧凑的，紧密的；简洁的
// vt. 使简洁；使紧密结合
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//3、difference 从数组中过滤元素
//用法：_.difference(array,[values])
//参数说明： array:要被检查/过滤的数组。
//values:要被在array中剔除的值的集合



// var q =  _.last([1,{},'c']);
//var q = _.initial([1,{},'c'])
//var q = _.chunk(['a', 'b', 'c', 1,3,4,'d'], 3) //[ [ 'a', 'b', 'c' ], [ 1, 3, 4 ], [ 'd' ] ]
//var q = _.compact([0, 1, false, 2, 'v', '4', '4',null,undefined, 3]); //[ 1, 2, 'v', '4', '4', 3 ]
var q = _.difference([1, 2, {a: 1}], [4, 2, {a: 1}]); //[ 1, { a: 1 } ]

console.log(q)

console.log('end');