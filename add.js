 var curry = function (fn) {
            return function () {
                var args = [],
                    accumulate = function accumulate() {
                        args = args.concat(Array.prototype.slice.call(arguments));
                        return accumulate;
                    };
                accumulate.value = function () {
                    return fn.apply(null, args);
                };
                accumulate.apply(null, arguments);
                return accumulate;
            };
        }

     var add = curry(function () {
            return Array.prototype.reduce.call(arguments, function (total, number) {
                return total + number;
            }, 0);
        }
