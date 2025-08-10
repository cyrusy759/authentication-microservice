const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/auth', (req, res) => {
  const { operation, app_id, credentials } = req.body;

  if (operation === "login" && app_id === "artur") {
    if (credentials.username === "testuser" && credentials.password === "testpass") {
      return res.json({ status: "success" });
    } else {
      return res.json({ status: "failed", message: "Invalid credentials" });
    }
  }
  return res.status(400).json({ message: "Bad request" });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});