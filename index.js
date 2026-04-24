const express = require("express");
const app = express();

// health check
app.get("/", (req, res) => {
  res.send("Mock timeout API is running");
});

// configurable timeout endpoint
app.get("/timeout", async (req, res) => {
  const delay = parseInt(req.query.delay) || 1200000; // default 20 mins

  console.log(`Request received. Delaying for ${delay} ms`);

  await new Promise(r => setTimeout(r, delay));

  res.status(504).send(`Responded after ${delay} ms`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
