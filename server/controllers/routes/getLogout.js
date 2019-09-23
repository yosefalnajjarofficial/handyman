module.exports = (req, res) => {
  res.clearCookie('jwt');
  res.send({
    message: 'logged out successfully',
    statusCode: 200,
  });
};
