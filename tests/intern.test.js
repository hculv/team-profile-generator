const Intern = require('../lib/intern');
test('creates intern object', () => {
    const intern = new Intern(100, 'Hannah', 'test@test.com', 'UM');
    expect(intern.school) .toEqual(expect.any(String));
});
test('gets intern school', () => {
    const intern = new Intern(100, 'Hannah', 'test@test.com', 'UM');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('gets employee title', () => {
    const intern = new Intern(100, 'Hannah', 'test@test.com', 'UM');
    expect(intern.getTitle()).toEqual("Intern");
}); 