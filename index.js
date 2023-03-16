const axios = require("axios");

axios
  .get("http://localhost:3000/get-name")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
