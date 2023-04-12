// import des modules de npm
const express = require("express");

// import des fonctions des autres fichiers
const userCtrl = require("../controllers/userCtrlF");
const upload = require('../middleware/multerConfig').upload


// creation des routes
exports.router = (() => {
  let userRouter = express.Router();

 
  userRouter.route("/").get(userCtrl.isLog,userCtrl.showHome)
  
  //----------------------------CRUD USER------------------------------------------

  // ----------------------------------------------REGISTER (CREATE)--------------
  userRouter.route("/register").get(userCtrl.isLog,userCtrl.showRegister);
  userRouter.route("/register").post(upload.single('avatar'),userCtrl.register);
  //--------------------------------------------- REGISTER OK -------------------

  // --------------------------GET PROFIL (READ)-----------------
  userRouter.route("/profil").get(userCtrl.isLog,userCtrl.getMe);
  
  //----------------------------GET PROFIL OK -------------


  // -------------------------------------UPDATE profil (UPDATE)---------------
  userRouter.route("/profil").post(upload.single('avatar'),userCtrl.updateProfile);
  //----------------------------------------UPDATE OK -------------------------


  // --------------------------------DELETE profil (DELETE)---------------
  userRouter.route("/profil/delete").post(userCtrl.deleteProfil);
  //------------------------------------DELETE OK------------------------------

  //------------------------------------------------------------------CRUD USER OK


  // -------------------------------------LOGIN-------------------
  userRouter.route("/login").get(userCtrl.isLog,userCtrl.showLogin)
  userRouter.route("/login").post(userCtrl.login);
  //-------------------------------  LOGIN OK------------------------
 
  // --------------------- LOGOUT
  userRouter.route('/logout').post(userCtrl.logout)
  //--------------------------------- LOGOUT OOOOK

  //----------------getUserById-----------------
  userRouter.route("/profil/:id").get(userCtrl.isLog,userCtrl.getUserByID );
  //----------------getUserById OK!-----------------


  return userRouter;
})();
