//需要取user_id的数组
var arr =[
    {"id":1749,"tik_id":0,"creator_id":0,"group_id":26,"user_id":65895,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":1909,"tik_id":0,"creator_id":0,"group_id":26,"user_id":66349,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":1933,"tik_id":0,"creator_id":0,"group_id":26,"user_id":66160,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":1941,"tik_id":0,"creator_id":0,"group_id":26,"user_id":24201,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":1965,"tik_id":0,"creator_id":0,"group_id":26,"user_id":701,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":1977,"tik_id":0,"creator_id":0,"group_id":26,"user_id":24101,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":2005,"tik_id":0,"creator_id":0,"group_id":26,"user_id":23901,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":2011,"tik_id":0,"creator_id":0,"group_id":26,"user_id":5501,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null},
    {"id":2013,"tik_id":0,"creator_id":0,"group_id":26,"user_id":21201,"type_id":0,"group_seq":0,"begin_time":"1999-12-31T16:00:00.000Z","end_time":"2999-12-31T16:00:00.000Z","kv":null,"status":0,"created_at":null,"updated_at":null}];

console.log(_.pluck(arr, 'user_id'));
//[ 65895, 66349, 66160, 24201, 701, 24101, 23901, 5501, 21201 ]