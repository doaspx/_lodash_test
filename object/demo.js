/**
 * Created by zhanghongtao on 2015/12/24.
 */

var _ = require ('lodash');
 function Foo() {
   this.a = 1;
   this.b = 2;
 }

 Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
      console.log(key);
   });

for(var i in new Foo){
    console.log(i);
}