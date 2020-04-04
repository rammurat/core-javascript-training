import Header from './header';
import {Button, Link, Para, createImage, Span} from './elements.js';
import Footer from './footer';

import './css/app.css';
import imageUrl from './img/logo.jpg';

document.body.appendChild(Header('I am header'));

document.body.appendChild(Button('Ger user info'));
document.body.appendChild(Link('Click me', 'https://www.google.com'));

document.body.appendChild(Para('I am styled paragraph', 'green'));
document.body.appendChild(createImage(imageUrl));

document.body.appendChild(Footer('I am footer'));

// load data asnchronously on user interation

document.querySelector('button').onclick = function changeContent() {
    import('./users.js').then((res) => {
        const currentUserName = res.getUserName('John','Lewis');
        document.body.appendChild(Span(currentUserName))
    })
}

