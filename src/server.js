const app = require("./app");
//const db = require("./database/DBConnection");

const { PORT } = require("./constants/constants");

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log("Express server started and running!");
});
