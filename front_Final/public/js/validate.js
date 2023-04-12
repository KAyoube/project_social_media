$().ready(function() {
    $("#mainForm").validate({
      rules : {
        firstname : {
          required : true
        },
        lastname : {
          required : true
        },
        email : {
          required : true,
          mail : true
        },
        password : {
          required: true,
        }
      },
      messages : {
        firstname : "Veuillez fournir un prénom",
        lastname :  "Veuillez fournir un nom ",
        email:      "veuillez fournir un email valide",
        password :  "Le mot de passe doit contenir: Au moins une lettre minuscule,une lettre majuscule,un chiffre,huit caractères"
      },
    });
  });