module.exports = department => {
  return (req, res, next) => {
    
    if (department === req.user.department) {
      next();
    } else {
      res.status(403).json({ you: "can't touch this!" });
    }
  };
};
