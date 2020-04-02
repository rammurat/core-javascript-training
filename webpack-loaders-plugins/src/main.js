import Header from './header'
import {Button, Link} from './elements'
import Footer from './footer'


document.body.appendChild(Header('I am header'))

document.body.appendChild(Button('Submit'))
document.body.appendChild(Link('Click me', 'https://www.google.com'))

document.body.appendChild(Footer('I am footer'))
