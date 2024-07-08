const loginSchema = {
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Invalid email format",
    },
    notEmpty: {
      errorMessage: "Email is required",
    },
  },
  password: {
    in: ["body"],
    isLength: {
      errorMessage: "Password should be at least 6 characters long",
      options: { min: 6 },
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
  },
};

export default loginSchema;
