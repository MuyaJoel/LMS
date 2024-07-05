import jwt from 'jsonwebtoken'
import User from '../models/User.mjs'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30s",
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({
      message: "User already exists",
    });
  } else {
    const usr = await User.create({ name, email, password });
    if (usr) {
      res.status(201).json({
        _id: usr._id,
        name: usr.name,
        email: usr.email,
        token: generateToken(usr._id),
      });
    } else {
      res.status(400).json({
        message: "Invalid user data",
      });
    }
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const usr = await User.findOne({ email });
  if (usr && (await usr.matchPassword(password))) {
    res.json({
      name: User.name,
      email: User.email,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

