const Escolas = require ("../models/escolasSchema");

const bcrypt = require ("bcrypt");
const {hashPassword} = require ("../helpers/auth");
const  jwt = require ("jsonwebtoken")

const createLogin = async (req, res)=> {
    try {
        const body = req.body

        const passwordHased = await hashPassword (body.password , res);
        body.password = passwordHased

        const escolas = await Escolas.create(body);
        escolas.password = undefined;
        return res.status(201).json ({
            message: "Escola cadastrada com sucesso!"
        });


    } catch (error) {
        return res.status(500).json ({
            message:error.message
        })
    }
}


const loginEscola = async (req, res) => {
    const {email, password} = req.body;
    try{
    const userRequired = await Escolas.findOne({email: email});
  
    if (!userRequired) {
      return res.status(404).json({message: "Usuário não encontrado"})
    }
  
    const checkPassword = await bcrypt.compare(password, userRequired.password);
  
    if (!checkPassword) {
      return res.status(404).json({message: "Senha incorreta"})
    }
  
    const secret = process.env.SECRET;
    const token = jwt.sign(
      { id: userRequired._id}, secret)
  
    return res.status(200).json({message: "Auth", token});
  } catch(error) {
    return res.status(500).json({message: error.message})
  }
  }

  
  module.exports = {
      createLogin,
      loginEscola
  }