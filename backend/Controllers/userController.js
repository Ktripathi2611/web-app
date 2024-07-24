import User from '../models/userModels.js'; // Correct import
import asyncHandler from '../middlewares/asyncHandler.js';
import bcrypt from 'bcryptjs';//  use of bcrypt is to hash the password (hashing means=encrypting the password)

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user already exists
  const userExists = await User.findOne({ email }); // Correct use of User model

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }


  
  // Create new user
  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save(); // Save user to the database
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin, // Assuming `isAdmin` exists in the model
    });
  } catch (error) {
    console.error(error.message); // Log the error for debugging
    if (error.name === 'ValidationError') {
      // Handle validation errors
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: errors.join(', ') });
    } else {
      // Handle other errors (e.g., database errors)
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

export { createUser };
