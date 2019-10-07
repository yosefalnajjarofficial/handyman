module.exports = (req, res) => {
  res.send(req.user);
  // !! you would just unlock the httpOnly from the req.send,
  // instead of making a dumb request like this
};
