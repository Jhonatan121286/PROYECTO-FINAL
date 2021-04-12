/* Modelo para los usuarios */
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    code: { type: Number, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },


    /* Relacionar los usuarios con role, le damos el schema de mongoose, donde traiga el objectId y con el ref, de donde se debe sacar ese id  */
    /* Con el arreglo puede tener varios roles y sin ellas un unico role */
})

module.exports = mongoose.model('User', userSchema)