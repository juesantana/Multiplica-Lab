const bcrypt = require('bcrypt')

exports.hashPassword = async(password, res)=>{
    try {
        const salt = await bcrypt.genSalt(8)//genSalt define o tamanho da senha
        const hash = await bcrypt.hash(password, salt)

        return hash
    } catch (error) {
        res.status(500).json({
        messagem: message.error
        })
    }
}
