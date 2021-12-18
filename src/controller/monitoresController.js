const Monitores = require ("../models/monitoresSchema");
const {hashPassword} = require ("../helpers/auth")
const bcrypt = require ("bcrypt");
const  jwt = require ("jsonwebtoken")

const getAll = async (req, res) => {
    try{
    const monitores = await Monitores.find();
    res.status(200).json({
        message: "monitores encontrados com sucesso", monitores
    })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

};

const getById = async (req, res) => {
try {
    const { id } = req.params;
    const monitores = await Monitores.findById(id);
   
    if(monitores == undefined || id == "") {
        return res.status(404).json ({
            message:"ID do monitor não foi localizado!"
        })
    }
    return res.status(200).json(monitores)
} catch (error) {
    return  res.status(500).json ({message: error.message})
}
};

const getByName = async (req, res) => {
 try{   
    const name = req.query.name;
        const nameMonitor = await Monitores.find( {name: name});


        if(nameMonitor == undefined ||  name == "") {
            return res.status(404).json ({
                message:`monitor(a) ${name} não foi localizado!`})
        }
        return res.status (200).send (nameMonitor);
} catch (error) {
    return  res.status(500).json ({message: error.message})
}
};

const getByBairro = async (req, res) => {
    try{   
       const bairro = req.query.bairro;
           const bairroMonitor = await Monitores.find( {bairro: bairro});
   
   
           if(bairroMonitor == undefined ||  bairro == "") {
               return res.status(404).json ({
                   message:`não foi localizado nenhum monitor(a) do ${bairro}!`})
           }
           return res.status (200).send (bairroMonitor);
   } catch (error) {
       return  res.status(500).json ({message: error.message})
   }
};

const getBySubject = async (req, res) => {
    try{   
       const materia = req.query.subject;
           const materiaMonitor = await Monitores.find( {subject: materia});
   
   
           if(materiaMonitor == undefined ||  materia == "") {
               return res.status(404).json ({
                   message:`não foi localizado nenhum monitor(a) que aulas de ${materia}!`})
           }
           return res.status (200).send (materiaMonitor);
   } catch (error) {
       return  res.status(500).json ({message: error.message})
   }
};

const createMonitor = async (req,res) => {
    try {
        const newMonitor = await new Monitores(req.body);
        if(newMonitor.termsOfUse == false) {
            res.status(204).json({ message:"para se cadastrar no banco de dados de monitores é necessário aceitar os termos de uso"});
        }

        const passwordHased = await hashPassword (newMonitor.password , res);
        newMonitor.password = passwordHased
        const saveMonitores = await newMonitor.save();




        res.status(201).json ({
            message: " Seu cadastro de monitor no MultiplicaLab foi realizado com sucesso!", saveMonitores
        })
    } catch (error){
        res.status(500).json({ message: error.message})
    }
};

const updateMonitor = async (req, res) => {
    try {
        const updateMonitores = await Monitores.findById (req.params.id);
        if (updateMonitores){
            updateMonitores.name = req.body.name || updateMonitores.name
            updateMonitores.cpf = req.body.cpf || updateMonitores.cpf
            updateMonitores.email = req.body.email  || updateMonitores.email
            updateMonitores.age = req.body.age || updateMonitores.age
            updateMonitores.university = req.body.university || updateMonitores.university
            updateMonitores.course = req.body.course || updateMonitores.course
            updateMonitores.subject = req.body.subject || updateMonitores.subject
            updateMonitores.experience  = req.body.experience || updateMonitores.experience
            updateMonitores.termsOfUse = req.body.termsOfUse || updateMonitores.termsOfUse

            const saveUpdateMonitor = await updateMonitores.save();
            res.status(200).json({
                message: "Dados do monitor atualizado com sucesso",
                saveUpdateMonitor
            })

        }

        res.status(400).json({
            mensagem: "monitor(a) não foi localizado(a)!"
        })
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

const deleteMonitor = async (req, res) => {
    try {
        const deleteMonitores = await Monitores.findById(req.params.id);
        if ( deleteMonitores == null) {
            return res.status(404).json ({
                message: "Monitor não foi encotrado."});
        }
     await deleteMonitores.delete();
     return res.status(200).json ({ message: "Cadastro foi deletado com sucesso!" })
    } catch (error){
        return  res.status (500).json({ message: error.message})
    }
}

const loginMonitores = async (req, res) => {
    const {email, password} = req.body;
    try{
    const userRequired = await Monitores.findOne({email: email});
  
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



module.exports ={
    getAll,
    getById,
    getByName,
    getByBairro,
    getBySubject,
    createMonitor,
    updateMonitor,
    deleteMonitor,
    loginMonitores
}