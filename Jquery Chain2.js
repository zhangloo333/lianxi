/**
 * Created by leizha on 5/16/17.
 */

function exec(fn){
    var doneCallback, failCallback, fnCallback,  fnEnded=false, _error, _data;

    exec.done = function(cb){
        doneCallback = cb;
        if(fnEnded && !_error){
            cb();
        }
        return exec;
    };

    exec.fail = function(cb){
        failCallback = cb;
        if(fnEnded &&_error){
            cb();
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

function slow() {
    setTimeout(function(){
        console.log("401")
    },500);
}

exec(slow).done(function(){
    console.log(1);
}).fail(function(){
    console.log("3");
});




