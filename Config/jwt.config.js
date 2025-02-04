const jwt = require("jsonwebtoken");

function generateToken(user) {
  const { _id, name, email, role, city, country, state } = user;

  const signature = process.env.TOKEN_SIGN_SECRET;
  const expiration = "12h";

  return jwt.sign({ _id, name, email, role, city, country, state }, signature, {
    expiresIn: expiration,
  });
}

module.exports = generateToken;
