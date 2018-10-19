function Page () {
}

Page.prototype.open = function (path) {
    browser.url(path);
};

Page.prototype.close = function () {
    browser.close();
};

module.exports = new Page();
