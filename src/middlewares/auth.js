import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ msg: "Invalid token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(404).json({ msg: "Invalid token" });
    }

    req.body.id = decoded.id;

    return next();
  });
};

export default authenticateUser;
