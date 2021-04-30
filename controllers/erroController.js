const handleValidationErrorDB = (err, res) => {
  return res.status(400).json(err.errors);
};

module.exports = (err, req, res, next) => {
  if (err.name === "ValidationError") handleValidationErrorDB(err, res);

  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
  });
};
