const courseSchema = {
    //courses Schema
  title: {
    notEmpty: {
      errorMessage: "title can't be empty",
    },
    isString: {
      errorMessage: "title must be String",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "description can't be empty",
    },
    isString: {
      errorMessage: "desription must be String",
    },
  },
  instructor: {
    notEmpty: {
      errorMessage: "instructor can't be empty",
    },
    isString: {
      errorMessage: "intructor must be String",
    },
  },
  content: {
    notEmpty: {
      errorMessage: "content can't be empty",
    },
    isString: {
      errorMessage: "content must be String",
    },
  },
    email: {
      notEmpty: {
        errorMessage: "content can't be empty",
      },
      isString: {
        errorMessage: "content must be String",
      },
    }
};

export default courseSchema;
