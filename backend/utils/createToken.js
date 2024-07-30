import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  try {
    // Generate a JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set JWT as an HTTP-Only Cookie
    res.cookie("jwt", token, {
      httpOnly: true, // Accessible only by the web server
      secure: process.env.NODE_ENV !== "development", // HTTPS only in production
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    return token;
  } catch (error) {
    console.error('Error generating token:', error.message);
    throw new Error('Token generation failed');
  }
};

export default generateToken;
