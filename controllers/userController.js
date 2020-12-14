const axios = require("axios");

class UserController {
  constructor() {
    this.names = [];
  }
// Muestra usuarios
  showNames(req, res) {
    res.send (this.names)
  }

// Agrega usuarios
  postName(req, res) {
    const {body , headers} = req;

    if (body.name && headers.token == 'r2d2') {
      this.names.push(body.name)
      res.status(200).send("Usuario agregado con exito")
    } else if (headers.token != 'r2d2') {
      res.status(401).send("token incorrecto")
    } else {
      res.status(400).send("No puede agregarse un usuario vacio")
    }
  }

// Modifica usuarios
  modifyName(req, res) {
    const {body} = req;
    
    if (body.name && body.index) {
      this.names[body.index] = body.name;
      res.status(200).send(`Usuario modificado`)
    } else {
      res.status(400).send("Usuario no pudo ser modificado")
    }
  }

// Elimina usuarios 

  deleteName(req, res) {
    const userIndex = req.params.index;

    if (this.names[userIndex] && userIndex) {
      this.names.splice(userIndex, 1);
      res.status(200).send(`Usuario eliminado en posicion ${req.params.index}`)
    } else {
      res.status(400).send(`El indice ${userIndex} no existe`)
    }
  }

}

module.exports = UserController;