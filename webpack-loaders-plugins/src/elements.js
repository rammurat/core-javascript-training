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

module.exports = {Button, Link, Para, createImage}