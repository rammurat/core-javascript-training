import Header from './header';
import {Button, Span} from './elements.js';
import Footer from './footer';

import {currentTheme} from './config.js';

import './css/app.css';

const installTheme = (theme) => import(`./css/themes/${theme}.css`);


document.body.appendChild(Header('I am header'));
document.body.appendChild(Button('Ger user details and theme'));
document.body.appendChild(Footer('I am footer'));

// load data asnchronously on user interaction
document.querySelector('button').onclick = function changeContent() {
    import('./users.js').then((res) => {
        const currentUserName = res.getUserName('John','Lewis');
        document.body.appendChild(Span(currentUserName));

        // load new theme
        installTheme(currentTheme)
    })
}

