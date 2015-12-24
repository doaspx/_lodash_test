/**
 * Created by zhanghongtao on 2015/12/24.
 */
    var _ = require('lodash');
 var users = [
          { 'user': 'barney', 'active': true },
     { 'user': 'fred',   'active': true },
     { 'user': 'vred',   'active': true }
 ];

 console.log(_.at(users,[0,1,2]));
// => false

 //var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 console.log(_.map(users, { 'user': 'fred' }));//[ false, true ]
console.log(_.map(users, 'user'));//[ 'barney', 'fred' ]


 console.log(_.includes([1, 1, 2],1, 2));
console.log(_.countBy(users, 'user','barney')); //{ true: 1, false: 2 }

 var cc = _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
      result[key] = n * 3;
      return result;
}, 5);
console.log(cc);


 var users = [
 { 'user': 'fred',   'age': 48 },
 { 'user': 'barney', 'age': 34 },
 { 'user': 'fred',   'age': 42 },
 { 'user': 'barney', 'age': 36 }
];
console.log(_.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values));