/**
 * Created by zhanghongtao on 2015/12/24.
 */
    var _ =  require('lodash');
_([1, 4, 3, 5]).tap(function(array) {
        array.pop();              //��array���в���
        console.log(array);       //��ӡ
        return array.reverse();   //����ֵ��Ҳ���Բ�����ֵ
    })
    .value();                   //ȡֵ
// �� [3,4,1]