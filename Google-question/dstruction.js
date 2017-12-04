/**
 * Created by lee on 10/23/17.
 */
const data = [[{foo: 'foo'}, {bar: 'bar'}]];


// PART 1
// Using a generator, write a function to return the values from the array ['foo', // 'bar', 'baz'].  Each item will be returned in sequence.  When the generator is // done, return the string 'All Done!'
// Example:  getNext() -> 'foo'
//           getNext() => 'bar'
//           getNext() => 'baz'
//           getNext() => 'All Done!'

function * getNext1(){
    const data1 = ['foo', 'bar', 'baz'];
    yield data1.shift();
    yield data1.shift();
    yield data1.shift();
    return 'All Done!';
}

var getNext = getNext1();
console.log(getNext.next.value);


function getBar(data) {
    const [temp] = data;
    var [foo, bar] = temp;
    var {bar} = bar;
    return bar;
}
console.log(getBar(data) == 'bar')