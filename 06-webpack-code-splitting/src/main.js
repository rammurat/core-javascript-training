import Header from './header';
import {Button, Span} from './elements.js';
import Footer from './footer';

import {currentTheme} from './config/config.js';

import './css/app.css';

const installTheme = (theme) => import(
    /* webpackChunkName: 'user-theme' */ 
    `./css/themes/${theme}.css`
);

const nextPageUrls = () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: 'app-urls' */
    `./config/url-config.js`
);

document.body.appendChild(Header('I am header'));
document.body.appendChild(Button('Ger user details and theme'));
document.body.appendChild(Footer('I am footer'));

// load data asnchronously on user interaction
document.querySelector('button').onclick = function changeContent() {
    import(/* webpackChunkName: 'user-info' */ './users.js').then((res) => {
        const currentUserName = res.getUserName('John','Lewis');
        document.body.appendChild(Span(currentUserName));

        // load new theme
        installTheme(currentTheme)
        nextPageUrls()
    })
}

