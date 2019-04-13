const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create post
// If the person delete his profile, his post will still be visible,
// because we don't want to delete all the post from him,
// some of them are possible very important
// There is other aproach, with populate, but we want the post to be there
// Even if the profile user is deleted.
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      // if the person likes the post, user id will go inside of
      // the array, if he clicks two times like will be disabled,
      //user id will go outside from the array
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
