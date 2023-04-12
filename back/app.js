// Imports
const express = require("express");
const apiRouter = require("./Routes/users.routes").router;
const models = require("./models");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
AdminJS.registerAdapter(AdminJSSequelize);
require("dotenv").config();
require("./config/config");

// Instantiate server
const app = express();

// Parser config
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// AdminJs config
const adminJs = new AdminJS({
  databases: [models],
  branding: {
    companyName: "SpacePost",
    logo: false,
  },
  rootPath: "/admin",
});
const router = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);

// Routes config
app.use("/api/", apiRouter);



// Server launch
app.listen(process.env.APP_PORT, () => {
  console.log(`Serveur en écoute sur ${process.env.APP_PORT} `);
});
