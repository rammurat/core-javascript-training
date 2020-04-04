const Button = (text) => {
    const _button = document.createElement("button")
    _button.innerText = text;
    return _button;
}

const Para = (text, color) => {
    const _p = document.createElement("p")
    _p.innerText = text;
    _p.style.color = color;
    return _p;
}

const Link = (text, url) => {
    const _anchor = document.createElement("a")
    _anchor.innerText = text;
    _anchor.setAttribute('href', url)
    return _anchor;
}

const createImage = (url) => {
    const _img = document.createElement("img")
    _img.setAttribute('src', url)
    return _img;
}

const Span = (text, color) => {
    const _s = document.createElement("span")
    _s.innerText = text;
    return _s;
}


module.exports = {Button, Link, Para, createImage, Span}