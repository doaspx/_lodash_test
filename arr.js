/**
 * Created by zhanghongtao on 2015/11/16.
 */
var _ = require('lodash');
console.log('begin');
//chunk##################˵��
// 1��chunk
// n. ��飻���ֵ��˻���
// �÷��� _.chunk(array,number)  ����number��array���о��ȵķֿ飬���array���ܱ�numberƽ�֣��������һ�����µĿ顣
// �� size<=1��ʱ�򣬶��ǰ�1�ȷ�
//2��compact
// adj. ���յģ����ܵģ�����
// vt. ʹ��ࣻʹ���ܽ��
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//3��difference �������й���Ԫ��
//�÷���_.difference(array,[values])
//����˵���� array:Ҫ�����/���˵����顣
//values:Ҫ����array���޳���ֵ�ļ���



// var q =  _.last([1,{},'c']);
//var q = _.initial([1,{},'c'])
//var q = _.chunk(['a', 'b', 'c', 1,3,4,'d'], 3) //[ [ 'a', 'b', 'c' ], [ 1, 3, 4 ], [ 'd' ] ]
//var q = _.compact([0, 1, false, 2, 'v', '4', '4',null,undefined, 3]); //[ 1, 2, 'v', '4', '4', 3 ]
var q = _.difference([1, 2, {a: 1}], [4, 2, {a: 1}]); //[ 1, { a: 1 } ]

console.log(q)

console.log('end');