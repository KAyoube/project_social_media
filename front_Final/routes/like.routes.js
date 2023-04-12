// import des modules de npm
const express = require("express");

// import des fonctions des autres fichiers
const likeCtrl = require("../controllers/likeCtrlF")

// Creation des routes
exports.router = (() => {
    let likeRouter = express.Router();


    likeRouter.route('/post/like/:id').post(likeCtrl.newLike)
    likeRouter.route('/post/unlike/:id').post(likeCtrl.unLike)
   
    
    return likeRouter;
  })();