const Button = (text) => {
    const _button = document.createElement("button")
    _button.innerText = text;
    return _button;
}

const Link = (text, url) => {
    const _anchor = document.createElement("a")
    _anchor.innerText = text;
    _anchor.setAttribute('href', url)
    return _anchor;
}

module.exports = {Button, Link}