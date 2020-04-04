'use strict';

var _even = [1, 2, 3, 4, 5, 6].find(function (num) {
    return num % 2 == 0;
});

document.getElementById('result').innerHTML = 'Result is : ' + _even;