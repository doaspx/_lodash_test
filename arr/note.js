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
//目前测试不支持对象取差异  _.difference([1, 2, {a: 1}], [4, 2, {a: 1}]); [ 1, { a: 1 } ]
//4. drop  
//数组元素删除
//用法：类似于原生js方法中的slice   _.drop(array,number)
//从头开始删除number个数组元素。number不传的话默认按1处理
//_.drop([1, 2, 3]);
//// → [2, 3]
//_.drop([1, 2, 3], 2);
//// → [3]
//_.drop([1, 2, 3], 5);
//// → []
//_.drop([1, 2, 3], 0);
//// → [1, 2, 3]
//5. dropRight    数组元素删除
//用法几乎和drop一样，不同的是从数组末尾开始删除。
//6. dropRightWhile   数组元素过滤
//用法 _.dropRightWhile(array,[predicate=_.identity],[thisArg])
//-- Creates a slice of array excluding elements dropped from the end.
//-- Elements are dropped until predicate returns false
//-- The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
//    参数1：待处理的数组
//    参数2：可以是(Function|Object|string)，会对数组的每个元素调用 。
//    参数3：判断是否删除的谓词。  
//_.dropRightWhile([1, 2, 3], function(n) {
//    return n > 1;
//});  → [1]
//var users = [
//    { ‘user‘: ‘barney‘,  ‘active‘: true },
//{ ‘user‘: ‘fred‘,    ‘active‘: false },
//{ ‘user‘: ‘pebbles‘, ‘active‘: false }
//];
//// using the `_.matches` callback shorthand
//_.pluck(_.dropRightWhile(users, { ‘user‘: ‘pebbles‘, ‘active‘: false }), ‘user‘);  → [‘barney‘, ‘fred‘]
//
//// using the `_.matchesProperty` callback shorthand
//_.pluck(_.dropRightWhile(users, ‘active‘, false), ‘user‘);  → [‘barney‘]
//
//// using the `_.property` callback shorthand  此处的解释应该是要drop不存在active属性的对象。
//_.pluck(_.dropRightWhile(users, ‘active‘), ‘user‘); / → [‘barney‘, ‘fred‘, ‘pebbles‘]
//刚开始看的时候对第三条有点迷糊。怎么会一个都没有过滤掉呢？  查看了一下api.
//参数predicate实际上是有几种可能的值类型的，根据参数predicate的值类型的不同，会有如下几种不同的处理：
//*、 function  此种情况下, 如果函数返回true,会把这一项drop掉。这种情况下函数一般只有两个参数：array和function
//*. string    如果参数predicate是一个属性名（string类型）的话，则返回值将会是此次遍历此属性的value。然后根据value进行drop。
//并且如果参数3 thisArg也有值的话，则会比较thisArg和predicate的返回值的不同。根据比较的值来进行drop。
//*. object  此种情况下。如果array中的某一项的属性和object中的属性一致，则返回true,否则就返回false.
//    在测试的过程中，发现一个奇怪的例子：
//var obj=[{‘a‘:0,‘b‘:‘sa‘},{‘a‘:2,‘b‘:‘sadff‘},{‘a‘:3,‘b‘:21}]; 
// _.pluck(_.dropRightWhile(obj,‘a‘,0),‘a‘);   →[0, 2, 3]
//7. dropWhile  数组元素过滤
//和dropRightWhile是基本一致的，不同点是从头到尾来进行计算的。
//8. fill  数组元素填充
//用法：  _.fill(array, value, [start=0], [end=array.length])
//从开始参数到结束参数，用value来替代或者填补数组元素。
//因为数组的下标是从0开始的，所以填充的范围是个左闭右开区间-填充的index范围包括start而不包括end.
//
//注意：此方法直接改变array，而不是返回一个数组。
//var array = [1, 2, 3];
//_.fill(array, ‘a‘);
//console.log(array); → [‘a‘, ‘a‘, ‘a‘]
//_.fill(Array(3), 2); → [2, 2, 2]
//_.fill([4, 6, 8], ‘*‘, 1, 2); → [4, ‘*‘, 8]
//9. findIndex  查询元素序号，遍历数组，如果查询到了符合要求的第一个元素则返回序号，如果没查询到符合要求的元素则返回-1.
//用法： _.findIndex(array, [predicate=_.identity], [thisArg])   _.identity()方法返回传给它的第一个参数。
//var users = [
//    { ‘user‘: ‘barney‘,  ‘active‘: false },
//{ ‘user‘: ‘fred‘,    ‘active‘: false },
//{ ‘user‘: ‘pebbles‘, ‘active‘: true }
//];
//_.findIndex(users, function(chr) {
//    return chr.user == ‘barney‘;
//});  → 0
//// using the `_.matches` callback shorthand
//_.findIndex(users, { ‘user‘: ‘fred‘, ‘active‘: false });  → 1
//// using the `_.matchesProperty` callback shorthand
//_.findIndex(users, ‘active‘, false);  → 0
//// using the `_.property` callback shorthand
//_.findIndex(users, ‘active‘);  → 2
//10. findLastIndex 类似于findIndex,只不过其返回的序列号是符合要求的最后一个。
//用法：_.findLastIndex(array, [predicate=_.identity], [thisArg])
//11. first  返回数组第一个元素.
//    用法：_.first(array)
//没什么好说的，如果数组为[]则返回undefined。
//12. flatten 抹平嵌套数组
//用法：_.flatten(array, [isDeep])
//isDeep为空或者false的情况下，只抹平第一层嵌套。为true的情况下，递归的进行抹平。
//_.flatten([1, [2, 3, [4]]]);
//// → [1, 2, 3, [4]]
//// using `isDeep`
//_.flatten([1, [2, 3, [4]]], true);
//// → [1, 2, 3, 4]
//13. flattenDeep 递归的抹平嵌套数组
//用法：_.flattenDeep(array)
//_.flattenDeep([1, [2, 3, [4]]]);
//// → [1, 2, 3, 4]
//14. head  返回数组第一个元素. 同 first
//    用法：_.first(array)
//没什么好说的，如果数组为[]则返回undefined。
//15. indexOf
//用法：_.indexOf(array, value, [fromIndex=0])  从数组array中查询value的序号，参数3如果是true的话，执行二分查找。
//_.indexOf([1, 2, 1, 2], 2);  → 1
//// using `fromIndex`
//_.indexOf([1, 2, 1, 2], 2, 2);  → 3
//// performing a binary search
//_.indexOf([1, 1, 2, 2], 2, true);  → 2
//16.initial  返回除了末尾元素的数组
//用法：_.initial(array)
//_.initial([1, 2, 3]);  → [1, 2]
//17. intersection 返回新数组，其值就是数组参数的交集
//用法：_.intersection([arrays])
//_.intersection([1, 2], [4, 2], [2, 1]); → [2]
//18. last 返回参数数组的末尾元素 
//用法：_.last(array) 
//19. lastIndexOf  类似于indexOf,搜索方向为从末尾到开头 
//用法：_.lastIndexOf(array, value, [fromIndex=array.length-1]) 
//_.lastIndexOf([1, 2, 1, 2], 2);  → 3 
//// using `fromIndex`
//_.lastIndexOf([1, 2, 1, 2], 2, 2);  → 1 
//// performing a binary search
//_.lastIndexOf([1, 1, 2, 2], 2, true);  → 3
//20.object 
//用法：同zipObject