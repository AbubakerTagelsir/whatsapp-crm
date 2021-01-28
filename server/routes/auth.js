const { verifySignUp } = require("../middlewares");
const authControllers = require("../controllers/auth");
const router = require("express").Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  authControllers.signup
);

router.post("/signin", authControllers.signin);

module.exports = router;
