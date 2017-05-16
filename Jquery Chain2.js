/**
 * Created by leizha on 5/16/17.
 */

function exec(fn){
    var doneCallback, failCallback, fnCallback,  fnEnded=false, _error, _data;

    exec.done = function(cb){
        doneCallback = cb;
        if(fnEnded && !_error){
            cb(_data);
        }
        return exec;
    };

    exec.fail = function(cb){
        failCallback = cb;
        if(fnEnded &&_error){
            cb(_error);
        }
        return exec;
    };

    fnCallback = function(error, data){
        _error = error;
        _data= data;
        if(failCallback && error){
            failCallback(error);
        }else if(doneCallback){
            doneCallback(data);
        }
        fnEnded=true;
    };

    fnStarted=true;
    fn(fnCallback);
    return exec;
}

function slow(callback) {
    setTimeout(function(){
        if (Math.random() > 0.5) {
            return callback("Error 417",null)
        }
        callback(null, {id:123})
    },500);
}

exec(slow).done(function(data){
    console.log(data);
}).fail(function(err){
    console.log("Error: " + err);
});




