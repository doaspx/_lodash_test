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