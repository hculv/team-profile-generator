const Engineer = require('../lib/Engineer');
test('create engineer object', () => {
    const engineer = new Engineer(100, 'Hannah', 'test@test.com', 'github.com/hculv');
    expect(engineer.github) .toEqual(expect.any(String));
});
test('gets engineer github url', () => {
    const engineer = new Engineer(100, 'Hannah', 'test@test.com', 'github.com/hculv');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test('gets employee title', () => {
    const engineer = new Engineer(100, 'Hannah', 'test@test.com', 'github.com/hculv');
    expect(engineer.getTitle()).toEqual("Engineer");
});
