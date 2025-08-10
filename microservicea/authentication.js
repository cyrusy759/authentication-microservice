const axios = require('axios');

const loginPayload = {
  operation: "login",
  app_id: "artur",
  credentials: {
    username: "testuser",
    password: "testpass"
  }
};

axios.post('http://localhost:3000/auth', loginPayload)
  .then(response => {
    console.log("Response from microservice:", response.data);
    if (response.data.status === "success") {
      console.log("Logged in");
    } else {
      console.log("Invalid login, please try again.");
    }
  })
  .catch(error => {
    console.error("Error from microservice:", error.response?.data || error.message);
    console.log("Login failed due to technical issues.");
  });