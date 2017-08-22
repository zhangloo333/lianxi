
var consistentHashing = function(n) {
      var result = [];
      var machine = [];
      machine.push(0);
      machine.push(359);
      machine.push(1);
      result.push(machine);

      for(var i = 1; i < n; ++i) {
        var new_machine = [];
        var index = 0;

        console.log('-----------');
        console.log('i ', i);
        console.log('result ', result);

        for(var j = 1; j <i ; ++j) {
          console.log('j= ', j, 'index-prev= ',index,' result=', result);
          if(result[j][1] - result[j][0] +1 > result[index][1] -result[index][0] +1) {
            index = j;
          }
        }
          console.log("index=  ", index);

          var x = result[index][0];
          var y = result[index][1];
          result[index][1] = parseInt((x+y)/2);

          new_machine.push(parseInt(x+y)/2+1);
          new_machine.push(y);
          new_machine.push(i+1);
          result.push(new_machine);

          console.log('result= ', result);
          console.log('-----------', '\n');

      }

    return result;
}


console.log(consistentHashing(5));