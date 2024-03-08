// const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({msg: "auth header block"});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "vasanth_kumar");

    
      req.userId = decoded.userId;
      next();
    
  } catch (err) {
    return res.status(403).json({msg:"auth catch block"});
  }
};

module.exports = {
  authMiddleware
};
