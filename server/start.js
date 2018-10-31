//Import the environment setup
require("dotenv").config({ path: "./settings.env" });

//Start server on Port 7000
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

//Start the app!
const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
