/* Rutas de los Usuarios */
module.exports = (app) => {
    const user = require('../controllers/userController')

    app.post('/user/create', user.create) /* Crear un usuario */
    app.get('/user/get', user.findAll) /* Mostrar todos los usuarios */
    app.get('/user/getOne/:id', user.findOne) /* Buscar un usuario en especifico */
    app.put('/user/update/:id', user.update) /* Actualizar un usuario por id */
    app.delete('/user/delete/:id', user.delete) /* Eliminar un usuario por id */

}