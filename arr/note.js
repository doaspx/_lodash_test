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