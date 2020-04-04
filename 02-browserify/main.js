// load npm module
const _ = require('underscore')

// load local module
const _localModule = require('./localModule')

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ 
    return num % 2 == 0; 
});

document.getElementById('result').innerHTML = `Result is : ${even}`;

// document.getElementById('result').innerHTML = _localModule(5,5);