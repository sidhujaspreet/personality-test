'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Questions = require('./main/questions');
var Answers = require('./main/answers');

module.exports = {
  Questions: Questions,
  Answers: Answers
};

