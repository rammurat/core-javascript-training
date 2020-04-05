import './css/main.css'
import {sum} from './module.js';

const newSum = sum(5,5);
document.getElementById('result').innerHTML = `New sum is: ${newSum}`;

const para = document.createElement("p")
para.innerText ="scss installed automatically"
document.getElementById('result').appendChild(para)
