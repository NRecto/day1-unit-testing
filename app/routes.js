const { names } = require("../src/util");

module.exports = (app) => {
  app.get("/", (req, res) => {
      return res.send({' data ' : {}})
  });
};
