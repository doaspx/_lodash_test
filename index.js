/**
 * Created by zhanghongtao on 2015/11/16.
 */
var _ = require('lodash');
var t = require('./t');
console.log('begin');


var count = 0, arr = [], arr1 = [];
while(count < 50){
    arr.push(count);
    arr1.push({id: count, type: 'vv', value: count});
    count++;
}
console.log('加载完毕。。。');
//_.forEach(arr, function(type) {
//       console.log(type);
//    t.wait(20);
//});

//_.delay(function(v) {
//    console.log(v);
//}, 1000,'v');
//begin
//加载完毕。。。
//end
//v

// var c = _.result(_.find(arr1, function(chr) {
//      return chr.id < 40;
//    }), 'id');
//console.log(c);

//var collection = [
//    { name: 'Virginia', age: 45 },
//    { name: 'Debra', age: 34 },
//    { name: 'Jerry', age: 55 },
//    { name: 'Earl', age: 29 }
//];
//
//var q = _.pluck(collection, 'age');
//console.log(q);

var numbers = [1, 2, 3, 4, 5];


















console.log('end');