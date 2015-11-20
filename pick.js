
/**
 * Created by zhanghongtao on 2015/11/20.
 */
var collection = [
    { first: '赵', last: '子龙', age: 23 },
    { first: '马', last: '超', age: 31 },
    { first: '张', last: '飞', age: 44 },
    { first: '关', last: '羽', age: 38 }
];

//用函数做迭代器
_.map(collection, function(item) {
    return _.pick(item, [ 'first', 'last' ]);
});

// →
// [
//   { first: '赵', last: '子龙'},
//   { first: '马', last: '超'},
//   { first: '张', last: '飞' },
//   { first: '关', last: '羽' }
// ]