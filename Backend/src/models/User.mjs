import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
    },
  },
  { timestamps: true }
);
// Before saving a user document, execute this pre-save middleware function.
UserSchema.pre('save', async function(next) {
  // If the password field hasn't been modified, move to the next middleware.
  if (!this.isModified('password')) {
    next();
  }

  // Generate a salt for hashing the password.
  const salt = await bcrypt.genSalt(10);
  // Hash the password with the generated salt and replace the plaintext password with the hashed one.
  this.password = await bcrypt.hash(this.password, salt);
  // Move to the next middleware.
  next();
});

// Define a method on the User schema to compare a plain text password with the hashed password in the database.
UserSchema.methods.matchPassword = async function(enteredPassword) {
  // Use bcrypt to compare the entered password with the hashed password.
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', UserSchema)