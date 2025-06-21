import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not Authorized! No token' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (
      decoded.email !== process.env.ADMIN_EMAIL ||
      decoded.password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(403).json({ success: false, message: 'Not Authorized! Invalid admin' });
    }

    next();
  } catch (error) {
    console.log('adminAuth error:', error.message);
    res.status(403).json({ success: false, message: 'Forbidden. Invalid or expired token.' });
  }
};

export default adminAuth;
