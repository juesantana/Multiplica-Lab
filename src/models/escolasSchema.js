mongoose = require ("mongoose");

const EscolaSchema = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true

    },
    endereço: {
        type: String,
        required: true,
        select: false,
        unique: true
    },
     email:{
         type: String,
         required: true,
         unique: true
     },

     phone:{
        type: Number,
        required: true
     },

     EnsinoMédio:{
        type: Boolean,
        required: true,
        default: false
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
 
const escolas = mongoose.model("Escolas", EscolaSchema)

module.exports =  escolas