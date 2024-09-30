export const userSchema = {
  //Users schema
  name: {
    notEmpty: {
      errorMessage: "name can't be empty",
    },
    isString: {
      errorMessage: "name must be string",
    },
  },
  email: {
    isEmail: {
      errorMessage: "Invalid email format",
    },
    notEmpty: {
      errorMessage: "email can't be empty",
    },
    isString: {
      errorMessage: "email must be string",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "password can't be empty",
    },
    isLength: {
      options: { min: 5, max: 12 },
      errorMessage: "password must be between 5 and 12 characters",
    },
  },
  role: {
    notEmpty: {
      errorMessage: "role can't be empty",
    },
    isString: {
      errorMessage: "role must be string",
    },
  },
};

 export const patchSchema = {
  email: {
    isEmail: {
      errorMessage: "Invalid email format",
    },
    notEmpty: {
      errorMessage: "email can't be empty",
    },
    isString: {
      errorMessage: "email must be string",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "password can't be empty",
    },
    isLength: {
      options: { min: 5, max: 12 },
      errorMessage: "password must be between 5 and 12 characters",
    },
  },
};

