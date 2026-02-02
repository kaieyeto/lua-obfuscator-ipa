import express from "express";

const app = express();
app.use(express.text({ limit: "1mb" }));

app.post("/obfuscate", (req, res) => {
  const code = req.body;

  // TEMP placeholder obfuscation
  const output = "-- obfuscated\n" + code;

  res.send(output);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API running on port", PORT);
});
