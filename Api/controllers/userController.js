const User = require('../models/user') /* Importamos el modelo de los datos */


exports.create = (req, res) => { /* Se crea la promesa que se encargara de registrar los datos */
  const nUser = new User({ /* Se almacenan los datos de la peticion en los campos del modelo */
    code: req.body.code,
    userName: req.body.userName,
    email: req.body.email,
   
  })


   nUser.save().then( /* si existe el role entonces registramos */
        data => {
          res.send(data) /* Nos devuelve como respuesta los datos almacenados */
        }
      ).catch(
        error => { /* Si hay un error de servidor, nos mostrara el error o el mensaje */
          res.status(500).send({
            message: error.message + ' Error to create the user'
          })
        }
      ).catch(err => { /* Si hay un error de servidor */
      res
        .status(500)
        .send({ message: "Error retrieving Role with id=" + id });
    });
}

exports.findAll = (req, res) => { /* Promesa para mostrar todos los datos almacenados en la base de datos */

  User.find({}) /* Encontrar todos los datos con estas coincidadencias, dejamos el arreglo vacio ya que los queremos todos */
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.findOne = (req, res) => { /* Encontrar usuarios por ID */
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data) /* Si el usuario no existe  */
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data); /* Sino hay error muestreme el usuario */
    })
    .catch(err => { /* Si hay un error de servidor */
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

exports.update = (req, res) => { /* Actualizacion de datos */
  const id = req.params.id; /* Se actualizara por id */

  if (!req.body) { /* Si el id actualizar es diferente o no existe */
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  /* Buscamos el usuario por id y actualizamos */
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ /* Sino se encuentre el id */
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
        /* Si actualizamos los datos */
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.delete = (req, res) => { /* Eliminar usuario por ID */
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};
/* FILTRO DE WEB */
exports.findAllWeb = (req, res) => {
  User.find({ position: 'Desarrollo web' })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};