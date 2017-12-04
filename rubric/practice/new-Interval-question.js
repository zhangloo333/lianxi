/**
 * Created by lee on 11/1/17.
 * 这一个题很简单，只要画出图，解决起来不难：
 * 每当写完的情况下，需要把最后一个 newInterval 给推入结果中
 */

var Interval = function (s,e) {
    this.start = s;
    this.end = e;
}

function insert(intervals, newInterval) {
    let result = [];

    for(let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        if(interval.end < newInterval.start) {
            result.push(interval);
        } else if(interval.start > newInterval.end){
            result.push(newInterval);
            newInterval = interval;
        } else {
            let newStart = Math.max(interval.start,newInterval.start);
            let newEnd = Math.max(interval.end, newInterval.end);
            newInterval = new Interval(newStart,newEnd);
        }
    }

    result.push(newInterval)

    return result;
}


var insertInterval = (intervals, newInterval) =>{
    let res = [];

    for(let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        if(interval.end < newInterval.start){
            res.push(interval)
        } else if(interval.start > newInterval.end) {
            res.push(newInterval);
            newInterval = interval;
        } else {
            let newStart = Math.min(interval.start,newInterval.start);
            let newEnd = Math.max(interval.end, newInterval.end);
            newInterval = new Interval(newStart,newEnd);
        }
    }

    res.push(newInterval);
    return res;
}

var insertInterval = (intervals, newInterval) => {
    let res = [];

    for(let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];

        if(interval.end < newInterval.start) {
            res.push(interval);
        } else if(interval.start > newInterval.end){
            res.push(newInterval);
            newInterval = interval;
        } else {
            let newStart = Math.min(interval.start, newInterval.start);
            let newEed = Math.max(interval.end, newInterval.end);
            newInterval = new interval(newStart,newEed);
        }
    }

    res.push(newInterval);
    return res;
}
