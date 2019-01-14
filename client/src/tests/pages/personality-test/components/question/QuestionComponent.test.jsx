import * as React from 'react';
import {mount} from 'enzyme';
// import {questions} from "../../../app/data/questions";
import QuestionComponent from "../../../../../app/pages/personality-test/components/question/QuestionComponent";
import SingleChoiceAnswer
  from "../../../../../app/pages/personality-test/components/answer-types/SingleChoiceAnswerComponent";
import SingleChoiceConditionalAnswer
  from "../../../../../app/pages/personality-test/components/answer-types/SingleChoiceConditionalAnswerComponent";
import NumberRangeAnswer from "../../../../../app/pages/personality-test/components/answer-types/NumberRangeAnswerComponent";

describe("Question Component: ", () => {
  
  let questionList = [{
    "question": "How important is the gender of your partner?",
    "category": "hard_fact",
    "question_type": {
      "type": "single_choice",
      "options": [
        "not important",
        "important",
        "very important"
      ]
    }
  }, {
    "question": "How important is the gender of your partner?",
    "category": "hard_fact",
    "question_type": {
      "type": "single_choice_conditional",
      "options": [
        "not important",
        "important",
        "very important"
      ]
    }
  },{
    "question": "How important is the gender of your partner?",
    "category": "hard_fact",
    "question_type": {
      "type": "number_range",
      "options": [
        "not important",
        "important",
        "very important"
      ]
    }
  }];
  
  let questionComponent = mount(<QuestionComponent
      getAnswers={() => {}}
      questions={questionList}
  />);
  
  it("should display single choice component", () => {
    expect(questionComponent.find(SingleChoiceAnswer).length).toBe(1);
  });
  
  it("should display conditional single choice component", () => {
    expect(questionComponent.find(SingleChoiceConditionalAnswer).length).toBe(1);
  });
  
  it("should display number range component", () => {
    expect(questionComponent.find(NumberRangeAnswer).length).toBe(1);
  });
  
});
