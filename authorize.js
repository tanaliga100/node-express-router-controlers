module.exports.authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "lara") {
    req.user = { name: "lara", id: 121 };
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
};
