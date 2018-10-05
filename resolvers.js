module.exports = {
  Query: {
    getUser: () => null
  },
  Mutation: {
    signupUser: async (_, { username, email, password }, { User }) => {
      // { User } - mongoose schema from context object
      const user = await User.findOne({ username });

      if (user) {
        throw new Error('User already exists');
      }

      // Create new user and save it
      const newUser = await new User({
        username,
        email,
        password
      }).save();

      return newUser;
    }
  }
};
