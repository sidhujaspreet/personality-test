'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');
  
  // Action Routes
  app.route('/questions')
    .get(controller.readAllQuestions);
    
  app.route('/answers')
    .get(controller.readAllAnswers);
  
  app.route('/:answers/:answerId')
    .get(controller.readAnswersById);
  
  app.route('/:answers')
    .post(controller.addAnswer);

};

