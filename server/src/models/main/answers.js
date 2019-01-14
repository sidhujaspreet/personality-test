'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Answers = new Schema({
  timestamp: {
    type: Number
  },
  answer_list: {
    type: Object
  },
});

module.exports = mongoose.model('answers', Answers);
