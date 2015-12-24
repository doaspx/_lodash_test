/**
 * Created by zhanghongtao on 2015/12/24.
 */
//21.pull 移除值，直接在原数组上进行操作
//用法：_.pull(array, [values])
//var array = [1, 2, 3, 1, 2, 3];
//_.pull(array, 2, 3);
//console.log(array);
//// → [1, 1]
//22. pullAt
// 按序号移除值,直接操作原数组并且返回移除的值组成的数组。可以看出来，移除1,3位置的元素从逻辑上来说是同时移除的。避免了数组越界的问题。
//用法：_.pullAt(array, [indexes])
//var array = [5, 10, 15, 20];
//var evens = _.pullAt(array, 1, 3);
//console.log(array); → [5, 15]
//console.log(evens); → [10, 20]
//23.remove 移除元素,对原数组进行操作，并且返回移除元素的集合。
//用法：_.remove(array, [predicate=_.identity], [thisArg])
//从参数可以看出来，参数的处理逻辑是类似于前面的dropRightWhile方法的。
//24. rest 移除数组首元素 和initial（返回除了末尾元素的数组）相反
//用法：_.rest(array)
//25.slice 数组截取
//用法：_.slice(array, [start=0], [end=array.length])
//那么和原生的slice有什么不同呢？
//API:This method is used instead of Array#slice to support node lists in IE < 9 and to ensure dense arrays are returned.
//26.sortedIndex 在对一个有序数组array进行插入的时候，返回value应该插入的位置。从左向右计算。
//用法：_.sortedIndex(array, value, [iteratee=_.identity], [thisArg])
//_.sortedIndex([30, 50], 40);  → 1
//_.sortedIndex([4, 4, 5, 5], 5);  → 2
//var dict = { ‘data‘: { ‘thirty‘: 30, ‘forty‘: 40, ‘fifty‘: 50 } };
//// using an iteratee function
//_.sortedIndex([‘thirty‘, ‘fifty‘], ‘forty‘, function(word) {
//    return this.data[word];
//}, dict);  → 1
//// using the `_.property` callback shorthand
//_.sortedIndex([{ ‘x‘: 30 }, { ‘x‘: 50 }], { ‘x‘: 40 }, ‘x‘);  → 1
//27. sortedLastIndex 用法类似于sortedindex,不同的是从右至左计算插入的位置
//用法：_.sortedLastIndex(array, value, [iteratee=_.identity], [thisArg])
//_.sortedLastIndex([4, 4, 5, 5], 5); → 4
//28. tail 移除数组首元素 和rest 用法相同
//用法：_.tail(array)
//29. take 数组切片
//用法：_.take(array, [n=1])
//API：Creates a slice of array with n elements taken from the beginning.
//    _.take([1, 2, 3]); [1]
//_.take([1, 2, 3], 2);→ [1, 2]
//_.take([1, 2, 3], 5); → [1, 2, 3]
//_.take([1, 2, 3], 0); → []
//30.takeRight 类似于take方法，执行方向不同。
//31. takeRightWhile
//用法：_.takeRightWhile(array, [predicate=_.identity], [thisArg])
//32. takeWhile 类似于takeRightWhile 执行顺序相反
//用法：_.takeWhile(array, [predicate=_.identity], [thisArg])
//33.union 数组合并，去除重复值
//用法：_.union([arrays])
//_.union([1, 2], [4, 2], [2, 1]); → [1, 2, 4]
//34.uniq/unique 数组去重
//_.uniq([2, 1, 2]);→ [2, 1]
//// using `isSorted`
//_.uniq([1, 1, 2], true); → [1, 2]
//// using an iteratee function
//_.uniq([1, 2.5, 1.5, 2], function(n) {
//    return this.floor(n);
//}, Math); → [1, 2.5]
//// using the `_.property` callback shorthand
//_.uniq([{ ‘x‘: 1 }, { ‘x‘: 2 }, { ‘x‘: 1 }], ‘x‘);  → [{ ‘x‘: 1 }, { ‘x‘: 2 }]
//35. unzip  zip的逆运算，还原zip后的数组
//用法：_.unzip(array)
//var zipped = _.zip([‘fred‘, ‘barney‘], [30, 40], [true, false]); → [[‘fred‘, 30, true], [‘barney‘, 40, false]]
//_.unzip(zipped);  → [[‘fred‘, ‘barney‘], [30, 40], [true, false]]
//var zipped2=_.zip([‘fre‘,‘shike‘],[30,40,50],[true,false]);
//// → [[‘fred‘, 30, true], [‘barney‘, 40, false],[undefined,50,undefined]]
//36. unzipWith zipWith 在数组重组的时候同时进行某些操作
//用法：_.unzipWith(array, [iteratee], [thisArg])
//    [iteratee] (Function): The function to combine regrouped values.
//    var zipped = _.zip([1, 2], [10, 20], [100, 200]); → [[1, 10, 100], [2, 20, 200]]
//_.unzipWith(zipped, _.add); → [3, 30, 300]
//可以看出来，在unZip之后，因为iteratee是_.add函数，因此将unZip的结果进行了相加。
//37. without  从数组中去除某些值
//用法：_.without(array, [values])
//_.without([1, 2, 1, 3], 1, 2);   → [3]
//不同于difference方法。其values参数可以不是一个数组，而是接在array参数之后的零散参数。
//38.xor
//对称消除重复值
//API:Creates an array that is the symmetric difference of the provided arrays.
//    symmetric:对称的，均匀的。
//用法：_.xor([arrays])
//_.xor([1, 2], [4, 2]); [1, 4]
//_.xor([1,2],[3,4]) [1, 2, 3, 4]
//_.xor([1,2],[3,4,1]) [2, 3, 4]
//_.xor([1,2],[1,2]) []
//如果更进一步探究：
//_.xor([1,2],[1,2],[1])  [1]
//_.xor([1,2],[1,2],[3,4])  [3, 4]
//_.xor([1,2],[1,2],[1,4])  [1, 4]
//_.xor([1,2],[1,2],[1,4],[1,4])  []
//_.xor([1,2],[1,2],[3,4,1]) [3, 4, 1]
//是不是很有趣？ 推测如果前面的数组参数两两消除了，后面的数组即使有重复的元素，还是会保留。
//.xor([1,2],[1,2],[1,2])  [1, 2]
//所以说,xor这个函数应该是参数两个两个进行重复值消除的。
//_.xor([1,2],[1,2,3],[1,2])
//如果n和n+1还有未消除的非重复值，那么会和n+2和n+3消除后保留下来的数组进行合并。
//39. zipObject  数组转对象   ._pair的反操作，//
//用法：_.zipObject(props, [values=[]])
//API:The inverse of _.pairs; this method returns an object composed from arrays of property names and values. Provide either a single two dimensional array, e.g. [[key1, value1], [key2,value2]] or two arrays, one of property names and one of corresponding values.
//    Arguments
//props (Array): The property names.
//    [values=[]] (Array): The property values.
//    _.zipObject([[‘fred‘, 30], [‘barney‘, 40]]);
//// → { ‘fred‘: 30, ‘barney‘: 40 }
//_.zipObject([‘fred‘, ‘barney‘], [30, 40]);
//// → { ‘fred‘: 30, ‘barney‘: 40 }
//可以看出来，当只有一个数组参数的时候，最底层的数组被解读为[key,value]
//当有两个数组参数的时候，这两个数组分别被解释为name和key的集合。 然后被组装为object返回。



