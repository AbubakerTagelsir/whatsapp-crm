const { verifySignUp } = require("../middlewares");
const authControllers = require("../controllers/auth");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    authControllers.signup
  );

  app.post("/api/auth/signin", authControllers.signin);
};
