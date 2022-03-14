const employee = require('./employee')

class manager extends employee {
    constructor(id, name, email, office){
        super(id, name, email)
        this.office = office
    }
    getOffice() {
        return this.office
    }
    getTitle() {
        return 'Manager'
    }
}
module.exports = manager;