const mongoose = require ("mongoose");

const monitoresSchema = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true

    },
    cpf: {
        type: Number,
        required: true,
        select: false,
        unique: true
    },
     email:{
         type: String,
         required: true,
         unique: true
     },

     age:{
        type: Number,
        required: true
     },

     university:{
         type: String,
         required: true
     },
    

     course: {
         type: String,
         required: true
     },

     subject:{
         type: String,
         required: true
     },


     experiece:{
         type: String,
         required:true,
     },

     termsOfUse: {
        type: Boolean,
        required: true,
        default: false
     },

    created: {
        type: Date,
        required: true,
        default: new Date
}
})
 
const Monitores = mongoose.model("Monitores", monitoresSchema)

module.exports =  Monitores