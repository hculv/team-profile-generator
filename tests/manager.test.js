const Manager = require('../lib/manager');
test('creates manager object', () => {
    const manager = new Manager(100, 'Hannah', 'test@test.com', 123);
    expect(manager.office).toEqual(expect.any(Number));
});
test('gets employee title', () => {
    const manager = new Manager(100, 'Hannah', 'test@test.com', 123);
    expect(manager.getTitle()).toEqual("Manager");
}); 