// /Users/matthew/Desktop/cs260/startupv3/service/middleware/auth.js
module.exports = function(req, res, next) {
    const userEmail = req.headers['x-user-email'];
    
    if (!userEmail) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
  
    req.userEmail = userEmail;
    next();
  };
  