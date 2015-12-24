/**
 * Created by zhanghongtao on 2015/12/24.
 */
//1. all 用法类似于every
// 检测集合内是否全部满足 返回true or false
//用法：_.every([true, 1, null, 'yes'], Boolean);    -> false
//2. any 用法同some
// 检测集合内是否部分满足 返回true or false
//用法：_.every([true, 1, null, 'yes'], Boolean);   ->true
//3. at
// 去集合中指定位置的数据；返回一个数组  不传返回[], 传的数字多余数组长度返回undefined
// _.at(['a', 'b', 'c'], [0, 2]);  => ['a', 'c']
// _.at(['a', 'b', 'c']);  => []
// _.at(['a', 'b', 'c'],[0,1,2,3,4]);  => ['a', 'b', 'c',undefined]
//4. collect 用法同map
//* @param {Array|Object|string} collection The collection to iterate over.
//* @param {Function|Object|string} [iteratee=_.identity] The function invoked
// 循环数组或对象，
// _.map([1, 2], timesThree);  => [3, 6]
// _.map({ 'a': 1, 'b': 2 }, timesThree);  => [3, 6] (iteration order is not guaranteed)
//var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
//console.log(_.map(users, { 'user': 'fred' }));   ->  [ false, true ]
//console.log(_.map(users, 'user'))   ->  [ 'barney', 'fred' ]
//5. contains  同 includes
//* @param {Array|Object|string} collection The collection to search.
//* @param {*} target The value to search for.
//* @param {number} [fromIndex=0] The index to search from.
//* @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
//* @returns {boolean} Returns `true` if a matching element is found, else `false`.
//6. countBy 分组返回对象 k
// _.countBy([4.3, 6.1, 6.4], function(n) {
//   *   return Math.floor(n);
//   * });  => { '4': 1, '6': 2 }
//
// _.countBy([4.3, 6.1, 6.4], function(n) {
//   *   return this.floor(n);
//   * }, Math);   => { '4': 1, '6': 2 }
// _.countBy(['one', 'two', 'three'], 'length');  => { '3': 2, '5': 1 }
//var users = [
//    { 'user': 'barney', 'active': true },
//    { 'user': 'fred',   'active': true },
//    { 'user': 'vred',   'active': true }
//];
//console.log(_.countBy(users, 'user','barney'));{ true: 1, false: 2 }
//7. detect 同find
//查找对象或一个Item
// * @param {Array|Object|string} collection The collection to search.
//* @param {Function|Object|string} [predicate=_.identity] The function invoked
//8. each 同forEach
//9.eachRight 同 forEachRight
//10. filter 过滤筛选
//@param {Array|Object|string} collection The collection to iterate over.
//@param {Function|Object|string} [predicate=_.identity] The function invoked
//@param {*} [thisArg] The `this` binding of `predicate`.
//11. find
//* @param {Array|Object|string} collection The collection to search.
//* @param {Function|Object|string} [predicate=_.identity] The function invoked
//*  per iteration.
//* @param {*} [thisArg] The `this` binding of `predicate`.
//* @returns {*} Returns the matched element, else `undefined`.
//12.findLast
//13.findWhere
//* @param {Array|Object|string} collection The collection to search.
//* @param {Object} source The object of property values to match.
//* @returns {*} Returns the matched element, else `undefined`.
//14.flodl 同 reduce inject 累计
//15.flodr 同 reduceRight

//16. pluck提取
//17. sample 随机
//18.partition 划分按条件分组

//19.shuffle 搅乱

//20.reject 不符合标准的

//21 size