const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date("2022-12-1");
  console.log(method, url, time);
  next();
};

module.exports = logger;
