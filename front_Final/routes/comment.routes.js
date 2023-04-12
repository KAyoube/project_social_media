// import des modules de npm
const express = require("express");

// import des fonctions des autres fichiers
const userCtrl = require("../controllers/userCtrlF");
const commentCtrl = require("../controllers/commentCtrlF")

// creation des routes
exports.router = (() => {
    let comRouter = express.Router();
  //CREATE
    comRouter.route('/newCom/:id').post(userCtrl.isLog,commentCtrl.newCom)

    //UPDATE
    comRouter.route('/delete/post/:id/com/:comId').post(commentCtrl.deleteCom)

    // DELETE
    comRouter.route('/update/post/:id/com/:comId').post(commentCtrl.updateCom)
    
    return comRouter;
  })();