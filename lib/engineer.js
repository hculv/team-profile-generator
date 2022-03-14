const employee = require('./Employee')

class engineer extends employee {
    constructor(id, name, email, github){
        super(id, name, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getTitle() {
        return 'Engineer'
    }
}

module.exports = engineer;