/**
 * Created by zhanghongtao on 2015/11/17.
 */
var users = [
    { 'user': '«Æ∑Ú»À', 'age': 36, 'active': true },
    { 'user': '∞¢Õ¡≤Æ',   'age': 45, 'active': false }
];

_.forEach(users, function(k, index){
    console.log('#'+JSON.stringify(k));
    console.log('@'+index)
})

//#{"user":"«Æ∑Ú»À","age":36,"active":true}
//@0
//#{"user":"∞¢Õ¡≤Æ","age":45,"active":false}
//@1