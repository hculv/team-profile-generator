const Manager = require('../lib/manager');
test('creates an Manager object', () => {
    const manager = new Manager(100, 'Hannah', 'test@test.com', 123);
    expect(manager.office).toEqual(expect.any(Number));
});
test('gets title of employee', () => {
    const manager = new Manager(100, 'Hannah', 'test@test.com', 123);
    expect(manager.getTitle()).toEqual("Manager");
}); 