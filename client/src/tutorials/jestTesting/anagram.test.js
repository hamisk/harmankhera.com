const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"dormiTORY" is an anagram of "DIRty room##', () => {
    expect(isAnagram('dormiTORY', 'DIRty room##')).toBeTruthy();
});

test('"hello" is NOT an anagram of "aloha', () => {
    expect(isAnagram('hello', 'aloha')).toBeFalsy();
});