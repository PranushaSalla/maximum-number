var countChar = function (str) {
    var counts = {};
    for (var i = 0, str_1 = str; _i < str_1.length; _i++) {
        var s = str_1[_i];
        if (counts[s]) {
            counts[s]++;
        }
        else {
            counts[s] = 1;
        }
    }
    return counts;
};
var str = "Tech at core";
console.log(countChar(str));
