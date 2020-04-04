import Header from './header';
import {Button, Link, Para, createImage} from './elements';
import Footer from './footer';

import './css/app.css';
import imageUrl from './img/js.jpg';

import {getUserName} from './ecma-latest';

document.body.appendChild(Header('I am header'));

document.body.appendChild(Button('Submit'));
document.body.appendChild(Link('Click me', 'https://www.google.com'));

document.body.appendChild(Para('I am styled paragraph', 'red'));
document.body.appendChild(createImage(imageUrl));

document.body.appendChild(Footer('I am footer'));

const userName = getUserName('John','Lewis');
document.body.appendChild(Para(userName))
