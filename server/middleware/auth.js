const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  //varify token
  try {
    await jwt.verify(token, "secret", (error, decoded) => {
      if (error) {
        res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};
