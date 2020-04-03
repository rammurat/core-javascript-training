import Header from './header'
import {Button, Link, Para, createImage} from './elements'
import Footer from './footer'

import css from './css/app.css';
import imageUrl from './img/js.jpg';

document.body.appendChild(Header('I am header'))

document.body.appendChild(Button('Submit'))
document.body.appendChild(Link('Click me', 'https://www.google.com'))

document.body.appendChild(Para('I am styled paragraph', 'red'))
document.body.appendChild(createImage(imageUrl))

document.body.appendChild(Footer('I am footer'))
