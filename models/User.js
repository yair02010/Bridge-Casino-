  const mongoose = require('mongoose');

  const RatingSchema = new mongoose.Schema({
    elo: { type: Number, default: 1000 },
    imp: { type: Number, default: 0 },
    mp:  { type: Number, default: 0 }
  }, { _id: false });

  const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country:  { type: String, required: true },
    avatar:   { type: String },

    coins: { type: Number, default: 1000 },

    role: {
      type: String,
      enum: ['player', 'admin'],
      default: 'player'
    },

    rating: { type: RatingSchema, default: () => ({}) },

    status: {
      type: String,
      enum: ['active', 'suspended', 'banned'],
      default: 'active'
    },

    isVerified: {
      type: Boolean,
      default: true 
    }

  }, { timestamps: true });

  module.exports = mongoose.model('User', UserSchema);
