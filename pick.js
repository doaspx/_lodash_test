
/**
 * Created by zhanghongtao on 2015/11/20.
 */
var collection = [
    { first: '��', last: '����', age: 23 },
    { first: '��', last: '��', age: 31 },
    { first: '��', last: '��', age: 44 },
    { first: '��', last: '��', age: 38 }
];

//�ú�����������
_.map(collection, function(item) {
    return _.pick(item, [ 'first', 'last' ]);
});

// ��
// [
//   { first: '��', last: '����'},
//   { first: '��', last: '��'},
//   { first: '��', last: '��' },
//   { first: '��', last: '��' }
// ]