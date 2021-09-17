const {findBy} = require('../users/users-model')

const validateRegister = async (req, res, next) =>{
    try{
        const user = await findBy({ 
        username: req.body.username,
        password: req.body.password
    })
    if(!user) {
        next({ status: 422, message: "username and password required"})
    }
    } catch (err) {
        next(err)
    }
}


const validateLogin = async(req, res, next) =>{
    try{
        const user = await findBy({ 
        username: req.body.username,
        password: req.body.password
    })
    if(!user) {
        next({ status: 422, message: "username and password required"})
    }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateRegister,
    validateLogin
}