// ��ʵ����ļ�����'t'�Ҳ��Ǻ�����ԭ����freewind����˼���Ҿ��ý���'lib.js'����
// 'helper.js'�ȽϺ��ʣ���Ϊ�����涼��Щ����������


exports.inc = function(n, callback, timeout) {
    //������n����1֮��Ľ�����ظ�async
    timeout = timeout || 200;
    setTimeout(function() {
        callback(null, n+1);
    }, timeout);
};

exports.fire = function(obj, callback, timeout) {
    //ֱ�ӽ�obj�����ݷ��ظ�async
    timeout = timeout || 200;
    setTimeout(function() {
        callback(null, obj);
    }, timeout);
};

exports.err = function(errMsg, callback, timeout) {
    //ģ��һ������Ĳ�������async��������ĩβ��callback���յ���
    timeout = timeout || 200;
    setTimeout(function() {
        callback(errMsg);
    }, timeout);
};


exports.wait = function(mils) {
    //����ȴ�mils��ʱ�䣬mils�ĵ�λ�Ǻ��롣
    var now = new Date;
    while(new Date - now <= mils);
};

