import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not Authorized! Login Again',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info (if any) to request
    next(); // proceed to the next middleware/route
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token!',
    });
  }
};

export default authUser;
