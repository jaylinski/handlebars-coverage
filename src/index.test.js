const { sum, hbs1, hbs2 } = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('renders template1', () => {
    expect(hbs1('foo')).toBe('<p>\n<b>foo</b>\n</p>');
});

test('renders template2', () => {
    expect(hbs2(null)).toBe('<p></p>');
});