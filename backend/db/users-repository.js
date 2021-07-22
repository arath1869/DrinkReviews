const { User } = require('./models')

async function list() {
    return await User.findAll()
}

async function findOneUser(userId){
    return await User.findByPk(userId)
}

module.exports = {
    list,
    findOneUser,
}

