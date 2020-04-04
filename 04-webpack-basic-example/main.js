import {sum} from './module';

const calculateSum = sum(5,5);

document.getElementById('result').innerHTML = `The sum is: ${calculateSum}`;