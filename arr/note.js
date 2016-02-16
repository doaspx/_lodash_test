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
//Ŀǰ���Բ�֧�ֶ���ȡ����  _.difference([1, 2, {a: 1}], [4, 2, {a: 1}]); [ 1, { a: 1 } ]
//4. drop  
//����Ԫ��ɾ��
//�÷���������ԭ��js�����е�slice   _.drop(array,number)
//��ͷ��ʼɾ��number������Ԫ�ء�number�����Ļ�Ĭ�ϰ�1����
//_.drop([1, 2, 3]);
//// �� [2, 3]
//_.drop([1, 2, 3], 2);
//// �� [3]
//_.drop([1, 2, 3], 5);
//// �� []
//_.drop([1, 2, 3], 0);
//// �� [1, 2, 3]
//5. dropRight    ����Ԫ��ɾ��
//�÷�������dropһ������ͬ���Ǵ�����ĩβ��ʼɾ����
//6. dropRightWhile   ����Ԫ�ع���
//�÷� _.dropRightWhile(array,[predicate=_.identity],[thisArg])
//-- Creates a slice of array excluding elements dropped from the end.
//-- Elements are dropped until predicate returns false
//-- The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
//    ����1�������������
//    ����2��������(Function|Object|string)����������ÿ��Ԫ�ص��� ��
//    ����3���ж��Ƿ�ɾ����ν�ʡ�  
//_.dropRightWhile([1, 2, 3], function(n) {
//    return n > 1;
//});  �� [1]
//var users = [
//    { ��user��: ��barney��,  ��active��: true },
//{ ��user��: ��fred��,    ��active��: false },
//{ ��user��: ��pebbles��, ��active��: false }
//];
//// using the `_.matches` callback shorthand
//_.pluck(_.dropRightWhile(users, { ��user��: ��pebbles��, ��active��: false }), ��user��);  �� [��barney��, ��fred��]
//
//// using the `_.matchesProperty` callback shorthand
//_.pluck(_.dropRightWhile(users, ��active��, false), ��user��);  �� [��barney��]
//
//// using the `_.property` callback shorthand  �˴��Ľ���Ӧ����Ҫdrop������active���ԵĶ���
//_.pluck(_.dropRightWhile(users, ��active��), ��user��); / �� [��barney��, ��fred��, ��pebbles��]
//�տ�ʼ����ʱ��Ե������е��Ժ�����ô��һ����û�й��˵��أ�  �鿴��һ��api.
//����predicateʵ�������м��ֿ��ܵ�ֵ���͵ģ����ݲ���predicate��ֵ���͵Ĳ�ͬ���������¼��ֲ�ͬ�Ĵ���
//*�� function  ���������, �����������true,�����һ��drop������������º���һ��ֻ������������array��function
//*. string    �������predicate��һ����������string���ͣ��Ļ����򷵻�ֵ�����Ǵ˴α��������Ե�value��Ȼ�����value����drop��
//�����������3 thisArgҲ��ֵ�Ļ������Ƚ�thisArg��predicate�ķ���ֵ�Ĳ�ͬ�����ݱȽϵ�ֵ������drop��
//*. object  ��������¡����array�е�ĳһ������Ժ�object�е�����һ�£��򷵻�true,����ͷ���false.
//    �ڲ��ԵĹ����У�����һ����ֵ����ӣ� 21
//var obj=[{��a��:0,��b��:��sa��},{��a��:2,��b��:��sadff��},{��a��:3,��b��:21}]; 
// _.pluck(_.dropRightWhile(obj,��a��,0),��a��);   ��[0, 2, 3]
//7. dropWhile  ����Ԫ�ع���
//��dropRightWhile�ǻ���һ�µģ���ͬ���Ǵ�ͷ��β�����м���ġ�
//8. fill  ����Ԫ�����
//�÷���  _.fill(array, value, [start=0], [end=array.length])
//�ӿ�ʼ������������������value��������������Ԫ�ء�
//��Ϊ������±��Ǵ�0��ʼ�ģ��������ķ�Χ�Ǹ�����ҿ�����-����index��Χ����start��������end.
//
//ע�⣺�˷���ֱ�Ӹı�array�������Ƿ���һ�����顣
//var array = [1, 2, 3];
//_.fill(array, ��a��);
//console.log(array); �� [��a��, ��a��, ��a��]
//_.fill(Array(3), 2); �� [2, 2, 2]
//_.fill([4, 6, 8], ��*��, 1, 2); �� [4, ��*��, 8]
//9. findIndex  ��ѯԪ����ţ��������飬�����ѯ���˷���Ҫ��ĵ�һ��Ԫ���򷵻���ţ����û��ѯ������Ҫ���Ԫ���򷵻�-1.
//�÷��� _.findIndex(array, [predicate=_.identity], [thisArg])   _.identity()�������ش������ĵ�һ��������
//var users = [
//    { ��user��: ��barney��,  ��active��: false },
//{ ��user��: ��fred��,    ��active��: false },
//{ ��user��: ��pebbles��, ��active��: true }
//];
//_.findIndex(users, function(chr) {
//    return chr.user == ��barney��;
//});  �� 0
//// using the `_.matches` callback shorthand
//_.findIndex(users, { ��user��: ��fred��, ��active��: false });  �� 1
//// using the `_.matchesProperty` callback shorthand
//_.findIndex(users, ��active��, false);  �� 0
//// using the `_.property` callback shorthand
//_.findIndex(users, ��active��);  �� 2
//10. findLastIndex ������findIndex,ֻ�����䷵�ص����к��Ƿ���Ҫ������һ����
//�÷���_.findLastIndex(array, [predicate=_.identity], [thisArg])
//11. first  ���������һ��Ԫ��.
//    �÷���_.first(array)
//ûʲô��˵�ģ��������Ϊ[]�򷵻�undefined��
//12. flatten ĨƽǶ������
//�÷���_.flatten(array, [isDeep])
//isDeepΪ�ջ���false������£�ֻĨƽ��һ��Ƕ�ס�Ϊtrue������£��ݹ�Ľ���Ĩƽ��
//_.flatten([1, [2, 3, [4]]]);
//// �� [1, 2, 3, [4]]
//// using `isDeep`
//_.flatten([1, [2, 3, [4]]], true);
//// �� [1, 2, 3, 4]
//13. flattenDeep �ݹ��ĨƽǶ������
//�÷���_.flattenDeep(array)
//_.flattenDeep([1, [2, 3, [4]]]);
//// �� [1, 2, 3, 4]
//14. head  ���������һ��Ԫ��. ͬ first
//    �÷���_.first(array)
//ûʲô��˵�ģ��������Ϊ[]�򷵻�undefined��
//15. indexOf
//�÷���_.indexOf(array, value, [fromIndex=0])  ������array�в�ѯvalue����ţ�����3�����true�Ļ���ִ�ж��ֲ��ҡ�
//_.indexOf([1, 2, 1, 2], 2);  �� 1
//// using `fromIndex`
//_.indexOf([1, 2, 1, 2], 2, 2);  �� 3
//// performing a binary search
//_.indexOf([1, 1, 2, 2], 2, true);  �� 2
//16.initial  ���س���ĩβԪ�ص�����
//�÷���_.initial(array)
//_.initial([1, 2, 3]);  �� [1, 2]
//17. intersection ���������飬��ֵ������������Ľ���
//�÷���_.intersection([arrays])
//_.intersection([1, 2], [4, 2], [2, 1]); �� [2]
//18. last ���ز��������ĩβԪ�� 
//�÷���_.last(array) 
//19. lastIndexOf  ������indexOf,��������Ϊ��ĩβ����ͷ 
//�÷���_.lastIndexOf(array, value, [fromIndex=array.length-1]) 
//_.lastIndexOf([1, 2, 1, 2], 2);  �� 3 
//// using `fromIndex`
//_.lastIndexOf([1, 2, 1, 2], 2, 2);  �� 1 
//// performing a binary search
//_.lastIndexOf([1, 1, 2, 2], 2, true);  �� 3
//20.object 
//�÷���ͬzipObject