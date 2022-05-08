const reverseString = require('./reverseString')

// 1st test to see if function exists
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})

test('string reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh')
})