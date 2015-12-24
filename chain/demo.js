/**
 * Created by zhanghongtao on 2015/12/24.
 */
    var _ =  require('lodash');
_([1, 4, 3, 5]).tap(function(array) {
        array.pop();              //对array进行操作
        console.log(array);       //打印
        return array.reverse();   //返回值，也可以不返回值
    })
    .value();                   //取值
// → [3,4,1]