const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const createToken = ({ username, email }, secret, expiresIn) => {
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getPosts: async (_, args, { Post }) => {
      // { Post } - mongoose Post model from context object

      // Find posts in the DB
      const posts = await Post.find({})
        .sort({ createdDate: 'desc' })
        .populate({
          path: 'createdBy',
          model: 'User'
        });

      return posts;
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, description, imageUrl, categories, creatorId },
      { Post }
    ) => {
      // { Post } - mongoose Post model from context object

      // Create new post and save it
      const newPost = await new Post({
        title,
        description,
        imageUrl,
        categories,
        createdBy: creatorId
      }).save();

      return newPost;
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }

      const isValidPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) reject(err);

          resolve(res);
        });
      });

      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      return { token: createToken(user, process.env.SECRET, '1hr') };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      // { User } - mongoose User model from context object
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

      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    }
  }
};
