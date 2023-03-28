const express = require("express");
const app = express();
var cors = require("cors");
const routerExchange = require("./routes");

const PORT = 3232;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", routerExchange);
app.use("/validate-id", routerExchange);

app.listen(PORT, () => {
  console.log("Server is now online in port: " + PORT);
});
