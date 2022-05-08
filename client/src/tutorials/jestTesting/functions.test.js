const functions = require('./functions');

// can run tests like lifecycle functions, eg initialising a database
// before you use functions on it
// can run functions before and after each test:
// const initDatabase = () => console.log('database initialised...')
// const closeDatabase = () => console.log('database closed')

// beforeEach(() => initDatabase()) //will run before each test
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase()) //will run before all
// afterAll(() => closeDatabase())

const nameCheck = () =>  console.log('Checking name...')

// can also target a specific test with describe()
describe('Checking Names', () => {
    beforeEach(() => nameCheck())
    const user = 'Jeff'
    test('User is Jeff', () => {
        expect(user).toBe('Jeff')
    })
    test('User is Karen', () => {
        expect(user).not.toBe('Karen')
    })

    // will only run nameCheck() for these tests within this describe
})

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
    // put function with parameters you want in expect()
    // toBe() is what's known as a matcher, many types in Jest
    // this function, with these parameters is to be 4

    expect(functions.add(2, 2)).not.toBe(5);
    // can also put a test in for what we don't expect it
    // to be
    // can test for null, undefined, falsy values
})

// Check for Truth & Falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statements treats as true
// toBeFalsy

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

// toEqual
test('User should be Hami Singh object', () => {
    // expect(functions.createUser()).toBe({ firstName: 'Hami', lastName: 'Singh' })
    // toBe() works for primitive types, eg numbers, strings
    // but objects, arrays are reference types, they refer to a particular
    // spot in memory, so two arrays/objects with same contents are !=
    
    // for objects/arrays need toEqual()
    expect(functions.createUser()).toEqual({ firstName: 'Hami', lastName: 'Singh' })
})

// less than and greater than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex - regular expressions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
    // regex not case sensitive so dfine both /I/i
})

// Arrays
test('Admin should be in usernames', () => {
    let usernames = ['john', 'kandy', 'superuser', 'admin'];
    expect(usernames).toContain('admin')
})

// Working with async data
// promise 
// test('User fetched name should be Ervin Howell', () => {
//     // when work with async functions need to add in assertions - verifies that a
//     // a certain number of assertions is called - used with async to ensure promise
//     // are called
//     // expect.assertions(1);
//     // you want to return the promise - without the return, the test will complete
//     // before the fetch/get completes
//     expect.assertions(1);
//     return functions.fetchUser().then((data) => {
//         expect(data.name).toEqual('Ervin Howell');
//     }); 
// });

// async await
test('User fetched name should be Ervin Howell - async', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Ervin Howell');
});