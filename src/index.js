const Handlebars = require("handlebars");
const precompiledTemplate1 = require('./template1.hbs');
const precompiledTemplate2 = require('./template2.hbs');

function sum(a, b) {
    return a + b;
}

function hbs1(name) {
    const template = Handlebars.template(precompiledTemplate1);

    return template({ name });
}

function hbs2(name) {
    const template = Handlebars.template(precompiledTemplate2);

    return template({ name });
}

module.exports = { sum, hbs1, hbs2 };