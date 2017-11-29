const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
  address: {
    type: String
  },
  session: Number,
  balance: Number, // for demo store balance here
  contracts : [{
    address: String,
    hash : String,
    partyA : String,
    partyB : String,
    arbitrator: String,
    timeout: Number,
    email: String,
    description: String,
    disputeId: Number,
    evidences: [{
      name: String,
      description: String,
      url: String
    }]
  }],
  disputes : [{
    hash: String, // use to fetch dispute
    isJuror: Boolean,
    hasRuled: Boolean,
    votes: [Number]
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
},
{
  versionKey: false
})

module.exports = mongoose.model('profiles', ProfileSchema)
