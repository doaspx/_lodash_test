/**
 * Created by zhanghongtao on 2015/11/17.
 */
var users = [
    { 'user': 'Ǯ����', 'age': 36, 'active': true },
    { 'user': '������',   'age': 45, 'active': false }
];

_.forEach(users, function(k, index){
    console.log('#'+JSON.stringify(k));
    console.log('@'+index)
})

//#{"user":"Ǯ����","age":36,"active":true}
//@0
//#{"user":"������","age":45,"active":false}
//@1