function handle(req, res, next) {
  res.handle = (err, data) => res.status( err ? 400 : 200).send(err || data)
  next()
}

module.exports = handle;
