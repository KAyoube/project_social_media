const fetch = require("node-fetch");
const LocalStorage = require("node-localstorage").LocalStorage;
let localStorage = new LocalStorage("./storageToken");
require("dotenv").config();

// FUNCTIONS CRUD COMM

// CREATE
exports.newCom = async (req, res) => {
  await fetch(
    `http://${process.env.API_HOST}/api/posts/${req.params.id}/comments/new/`,
    {
      // Adding method type
      method: "POST",

      // Adding headers to the request
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",

      // Adding body or contents to send
      body: JSON.stringify({
        text: req.body.text,
      }),
    }
  )
    // Converting to JSON
    .then((res) => {
      return res.json();
    })

    // Displaying results to console
    .then((json) => {
      if (json.successCom) {
        req.flash("success", "votre commentaire a bien été envoye");
        res.redirect(`/posts/${req.params.id}`);
      } else {
        res.redirect(`/posts/${req.params.id}`);
      }
    })

    .catch((err) => {
      console.log("ERR ----", err);
    });
};

// READ
// Jointure dans la partie get post by ID

// UPDATE
exports.updateCom = async (req, res) => {
  fetch(
    `http://${process.env.API_HOST}/api/posts/${req.params.id}/comments/update/${req.params.comId}`,
    {
      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify({
        text: req.body.text,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"), //Token à récupérer
      },
    }
  )
    // Converting to JSON
    .then((response) => response.json())

    .then((json) => {
      if (json.success) {
        req.flash("success", "votre com a bien ete modifier");
        res.redirect(`/posts/${req.params.id}`);
      } else {
        req.flash("success", "votre com n'a pas été modifier");
        res.redirect(`/posts/${req.params.id}`);
      }
    })
    .catch((err) => console.log(err));
};

// DELETE
exports.deleteCom = async (req, res) => {
  const postDelete = await fetch(
    `http://${process.env.API_HOST}/api/posts/${req.params.id}/comments/delete/${req.params.comId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"), // Token à récupérer
      },
    }
  );
  myDelete = await postDelete.json();

  if (myDelete.success) {
    req.flash("success", "votre com a bien ete supprimé");
    res.redirect(`/posts/${req.params.id}`);
  } else {
    req.flash("success", "votre com n'a pas ete supprimé");
    res.redirect(`/posts/${req.params.id}`);
  }
};
