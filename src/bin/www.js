const app = require("../app");
require("dotenv").config();

app.listen((port = process.env.PORT || 3000), () => {
   console.log("App listen on port", port);
});
