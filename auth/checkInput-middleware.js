module.exports = (req,res,next) => {
    if (!req.body.userName || !req.body.password) {
      res.status(400).json({ message: "Please provide credentials" });
    } else {
      next();
    }
}