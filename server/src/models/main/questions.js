'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Questions = new Schema({});

module.exports = mongoose.model('questions', Questions);
