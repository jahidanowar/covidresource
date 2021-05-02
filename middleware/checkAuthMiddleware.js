const jwt = require("jsonwebtoken");

//  Token  Authorization
exports.verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  token = token.split(" ")[1];
  if (!token) {
    return res.status(403).send({ message: "Unauthorized Request!" });
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.userId ;
    
    next();
  });
};
