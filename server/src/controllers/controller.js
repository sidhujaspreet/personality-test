'use strict';

var mongoose = require('mongoose'),
    Collection;

function setDb(dbName) {
  Collection = mongoose.model(dbName);
};


exports.readAllQuestions = function (req, res) {
  setDb('questions');
  console.log(".... not for packages - " + req.params.collectionName);
  Collection.find({}, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.readAllAnswers = function (req, res) {
  setDb('answers');
  var new_entry = new Collection(req.body);
  console.log(new_entry);
  new_entry.save(function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.readAnswersById = function (req, res) {
  setDb(req.params.collectionName);
  switch (req.params.collectionName) {
    case 'packages': {
      Collection.findById(req.params.collectionId).populate('cityList.city', 'name').exec(function (err, data) {
        if (err)
          res.send(err);
        res.json(data);
      });
    }
      break;
    default: {
      Collection.findById(req.params.collectionId, function (err, data) {
        if (err)
          res.send(err);
        res.json(data);
      });
    }
  }
};


exports.addAnswer = function (req, res) {
  setDb('answers');
  Collection.create(req.body, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

