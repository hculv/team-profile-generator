const Intern = require('../lib/intern');
test('creates an Intern object', () => {
    const intern = new Intern(100, 'Hannah', 'test@test.com', 'UM');
    expect(intern.school) .toEqual(expect.any(String));
});
test('gets intern school', () => {
    const intern = new Intern(100, 'Hannah', 'test@test.com', 'UM');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('gets title of employee', () => {
    const intern = new Intern(100, 'Hannah', 'test@test.com', 'UM');
    expect(intern.getTitle()).toEqual("Intern");
}); 