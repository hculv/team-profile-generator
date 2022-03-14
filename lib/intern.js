const employee = require('./employee')

class intern extends employee {
    constructor(id, name, email, school){
        super(id, name, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getTitle() {
        return 'Intern'
    }
}

module.exports = intern;