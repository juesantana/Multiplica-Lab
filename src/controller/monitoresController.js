const Monitores = require ("../models/monitoresSchema");

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
    const {id} = req.params;
    const monitores = await Monitores.findById();
   
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

const createMonitor = async (req,res) => {
    try {
        const newMonitor = await new Monitores(req.body);
        if(newMonitor.termsOfUse == false) {
            res.status(204).json({ message:"para se cadastrar no banco de dados de monitores é necessário aceitar os termos de uso"});
        }
        const saveMonitores = await newMonitor.save();

        res.status  (201).json ({
            message: " Seu cadastro de monitor no MultiplicaLab foi realizado com sucesso!"
        })
    } catch (error){
        res.status(500).json({ message: error.message})
    }
}


module.exports ={
    getAll,
    getById,
    getByName,
    createMonitor
}