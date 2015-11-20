/**
 * Created by zhanghongtao on 2015/11/19.
 */
//合并数组
var c =  [
    {"id":112,"code":"SH600783","name":"鲁信创投","main_id":7,"type":0,"position_id":0,"created_id":5,"created_account":"sbmc001","p_price":35.4,"p_amount":5500,"remarks":"","r_price":35.4,"r_amount":5500,"commit_id":24101,"commit_account":"bmc888","plan_status":3,"sqcx":0,"pb_no":"34690","status":0,"created_at":"2015-11-19T01:35:50.000Z","updated_at":"2015-11-19T01:43:17.000Z"},
    {"id":113,"code":"SH600547","name":"山东黄金","main_id":7,"type":0,"position_id":0,"created_id":8,"created_account":"sbmc004","p_price":19.7,"p_amount":25300,"remarks":"","r_price":19.7,"r_amount":25300,"commit_id":24101,"commit_account":"bmc888","plan_status":3,"sqcx":0,"pb_no":"84793;87982","status":0,"created_at":"2015-11-19T02:14:48.000Z","updated_at":"2015-11-19T02:21:37.000Z"},
    {"id":114,"code":"SZ000425","name":"徐工机械","main_id":7,"type":0,"position_id":0,"created_id":6,"created_account":"sbmc002","p_price":4.67,"p_amount":21400,"remarks":"","r_price":0,"r_amount":0,"commit_id":24101,"commit_account":"bmc888","plan_status":4,"sqcx":1,"pb_no":"","status":0,"created_at":"2015-11-19T02:27:38.000Z","updated_at":"2015-11-19T02:41:15.000Z"},
    {"id":115,"code":"SH600354","name":"敦煌种业","main_id":7,"type":0,"position_id":0,"created_id":6,"created_account":"sbmc002","p_price":8.85,"p_amount":10100,"remarks":"","r_price":8.85,"r_amount":10100,"commit_id":24101,"commit_account":"bmc888","plan_status":3,"sqcx":0,"pb_no":"98447","status":0,"created_at":"2015-11-19T02:28:06.000Z","updated_at":"2015-11-19T02:31:07.000Z"},
    {"id":116,"code":"SH600234","name":"山水文化","main_id":7,"type":0,"position_id":0,"created_id":5,"created_account":"sbmc001","p_price":15.99,"p_amount":10000,"remarks":"","r_price":16.14,"r_amount":10000,"commit_id":24101,"commit_account":"bmc888","plan_status":3,"sqcx":0,"pb_no":"183198","status":0,"created_at":"2015-11-19T05:09:44.000Z","updated_at":"2015-11-19T07:03:26.000Z"},
    {"id":117,"code":"SZ000425","name":"徐工机械","main_id":7,"type":0,"position_id":0,"created_id":6,"created_account":"sbmc002","p_price":4.71,"p_amount":17200,"remarks":"","r_price":4.71,"r_amount":17200,"commit_id":24101,"commit_account":"bmc888","plan_status":3,"sqcx":0,"pb_no":"97424","status":0,"created_at":"2015-11-19T05:16:19.000Z","updated_at":"2015-11-19T05:18:37.000Z"}]

var v = _.pluck(c, 'pb_no');
var n_key = [];
_.forEach(v, function(item){
    item = item.replace(/；/g, ";");
    var tmp = item.split(';');
    n_key = _.union(n_key, tmp);
})
console.log(n_key);


//[ '34690', '84793', '87982', '', '98447', '183198', '97424' ]