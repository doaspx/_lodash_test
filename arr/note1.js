/**
 * Created by zhanghongtao on 2015/12/24.
 */
//21.pull �Ƴ�ֵ��ֱ����ԭ�����Ͻ��в���
//�÷���_.pull(array, [values])
//var array = [1, 2, 3, 1, 2, 3];
//_.pull(array, 2, 3);
//console.log(array);
//// �� [1, 1]
//22. pullAt
// ������Ƴ�ֵ,ֱ�Ӳ���ԭ���鲢�ҷ����Ƴ���ֵ��ɵ����顣���Կ��������Ƴ�1,3λ�õ�Ԫ�ش��߼�����˵��ͬʱ�Ƴ��ġ�����������Խ������⡣
//�÷���_.pullAt(array, [indexes])
//var array = [5, 10, 15, 20];
//var evens = _.pullAt(array, 1, 3);
//console.log(array); �� [5, 15]
//console.log(evens); �� [10, 20]
//23.remove �Ƴ�Ԫ��,��ԭ������в��������ҷ����Ƴ�Ԫ�صļ��ϡ�
//�÷���_.remove(array, [predicate=_.identity], [thisArg])
//�Ӳ������Կ������������Ĵ����߼���������ǰ���dropRightWhile�����ġ�
//24. rest �Ƴ�������Ԫ�� ��initial�����س���ĩβԪ�ص����飩�෴
//�÷���_.rest(array)
//25.slice �����ȡ
//�÷���_.slice(array, [start=0], [end=array.length])
//��ô��ԭ����slice��ʲô��ͬ�أ�
//API:This method is used instead of Array#slice to support node lists in IE < 9 and to ensure dense arrays are returned.
//26.sortedIndex �ڶ�һ����������array���в����ʱ�򣬷���valueӦ�ò����λ�á��������Ҽ��㡣
//�÷���_.sortedIndex(array, value, [iteratee=_.identity], [thisArg])
//_.sortedIndex([30, 50], 40);  �� 1
//_.sortedIndex([4, 4, 5, 5], 5);  �� 2
//var dict = { ��data��: { ��thirty��: 30, ��forty��: 40, ��fifty��: 50 } };
//// using an iteratee function
//_.sortedIndex([��thirty��, ��fifty��], ��forty��, function(word) {
//    return this.data[word];
//}, dict);  �� 1
//// using the `_.property` callback shorthand
//_.sortedIndex([{ ��x��: 30 }, { ��x��: 50 }], { ��x��: 40 }, ��x��);  �� 1
//27. sortedLastIndex �÷�������sortedindex,��ͬ���Ǵ��������������λ��
//�÷���_.sortedLastIndex(array, value, [iteratee=_.identity], [thisArg])
//_.sortedLastIndex([4, 4, 5, 5], 5); �� 4
//28. tail �Ƴ�������Ԫ�� ��rest �÷���ͬ
//�÷���_.tail(array)
//29. take ������Ƭ
//�÷���_.take(array, [n=1])
//API��Creates a slice of array with n elements taken from the beginning.
//    _.take([1, 2, 3]); [1]
//_.take([1, 2, 3], 2);�� [1, 2]
//_.take([1, 2, 3], 5); �� [1, 2, 3]
//_.take([1, 2, 3], 0); �� []
//30.takeRight ������take������ִ�з���ͬ��
//31. takeRightWhile
//�÷���_.takeRightWhile(array, [predicate=_.identity], [thisArg])
//32. takeWhile ������takeRightWhile ִ��˳���෴
//�÷���_.takeWhile(array, [predicate=_.identity], [thisArg])
//33.union ����ϲ���ȥ���ظ�ֵ
//�÷���_.union([arrays])
//_.union([1, 2], [4, 2], [2, 1]); �� [1, 2, 4]
//34.uniq/unique ����ȥ��
//_.uniq([2, 1, 2]);�� [2, 1]
//// using `isSorted`
//_.uniq([1, 1, 2], true); �� [1, 2]
//// using an iteratee function
//_.uniq([1, 2.5, 1.5, 2], function(n) {
//    return this.floor(n);
//}, Math); �� [1, 2.5]
//// using the `_.property` callback shorthand
//_.uniq([{ ��x��: 1 }, { ��x��: 2 }, { ��x��: 1 }], ��x��);  �� [{ ��x��: 1 }, { ��x��: 2 }]
//35. unzip  zip�������㣬��ԭzip�������
//�÷���_.unzip(array)
//var zipped = _.zip([��fred��, ��barney��], [30, 40], [true, false]); �� [[��fred��, 30, true], [��barney��, 40, false]]
//_.unzip(zipped);  �� [[��fred��, ��barney��], [30, 40], [true, false]]
//var zipped2=_.zip([��fre��,��shike��],[30,40,50],[true,false]);
//// �� [[��fred��, 30, true], [��barney��, 40, false],[undefined,50,undefined]]
//36. unzipWith zipWith �����������ʱ��ͬʱ����ĳЩ����
//�÷���_.unzipWith(array, [iteratee], [thisArg])
//    [iteratee] (Function): The function to combine regrouped values.
//    var zipped = _.zip([1, 2], [10, 20], [100, 200]); �� [[1, 10, 100], [2, 20, 200]]
//_.unzipWith(zipped, _.add); �� [3, 30, 300]
//���Կ���������unZip֮����Ϊiteratee��_.add��������˽�unZip�Ľ����������ӡ�
//37. without  ��������ȥ��ĳЩֵ
//�÷���_.without(array, [values])
//_.without([1, 2, 1, 3], 1, 2);   �� [3]
//��ͬ��difference��������values�������Բ���һ�����飬���ǽ���array����֮�����ɢ������
//38.xor
//�Գ������ظ�ֵ
//API:Creates an array that is the symmetric difference of the provided arrays.
//    symmetric:�ԳƵģ����ȵġ�
//�÷���_.xor([arrays])
//_.xor([1, 2], [4, 2]); [1, 4]
//_.xor([1,2],[3,4]) [1, 2, 3, 4]
//_.xor([1,2],[3,4,1]) [2, 3, 4]
//_.xor([1,2],[1,2]) []
//�������һ��̽����
//_.xor([1,2],[1,2],[1])  [1]
//_.xor([1,2],[1,2],[3,4])  [3, 4]
//_.xor([1,2],[1,2],[1,4])  [1, 4]
//_.xor([1,2],[1,2],[1,4],[1,4])  []
//_.xor([1,2],[1,2],[3,4,1]) [3, 4, 1]
//�ǲ��Ǻ���Ȥ�� �Ʋ����ǰ�������������������ˣ���������鼴ʹ���ظ���Ԫ�أ����ǻᱣ����
//.xor([1,2],[1,2],[1,2])  [1, 2]
//����˵,xor�������Ӧ���ǲ����������������ظ�ֵ�����ġ�
//_.xor([1,2],[1,2,3],[1,2])
//���n��n+1����δ�����ķ��ظ�ֵ����ô���n+2��n+3��������������������кϲ���
//39. zipObject  ����ת����   ._pair�ķ�������//
//�÷���_.zipObject(props, [values=[]])
//API:The inverse of _.pairs; this method returns an object composed from arrays of property names and values. Provide either a single two dimensional array, e.g. [[key1, value1], [key2,value2]] or two arrays, one of property names and one of corresponding values.
//    Arguments
//props (Array): The property names.
//    [values=[]] (Array): The property values.
//    _.zipObject([[��fred��, 30], [��barney��, 40]]);
//// �� { ��fred��: 30, ��barney��: 40 }
//_.zipObject([��fred��, ��barney��], [30, 40]);
//// �� { ��fred��: 30, ��barney��: 40 }
//���Կ���������ֻ��һ�����������ʱ����ײ�����鱻���Ϊ[key,value]
//�����������������ʱ������������ֱ𱻽���Ϊname��key�ļ��ϡ� Ȼ����װΪobject���ء�



