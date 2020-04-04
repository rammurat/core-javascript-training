const Header = (text) => {
    const _header = document.createElement("header")
    _header.innerText = text;
    return _header;
}
module.exports = Header