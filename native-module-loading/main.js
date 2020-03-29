import {sum} from './module.js';

const newSum = sum(5,5);

document.getElementById('result').innerHTML = `New sum is: ${newSum}`;

// dynamic module loading
import('./moduleondemand.js')
  .then((module) => {
    // Do something with the module.
    document.getElementById('dynamic-module').innerHTML = "Dynamic module loaded"
  });