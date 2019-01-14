import * as React from 'react';
import {mount} from 'enzyme';
import SingleChoiceAnswer
  from "../../../../../app/pages/personality-test/components/answer-types/SingleChoiceAnswerComponent";

describe("Question Component: ", () => {
  
  let numberRangeComponent = mount(<SingleChoiceAnswer
      answerOnChange={() => {
      }}
      question={{questionId: 10, question_type: {options: ['test']}}}
  />);
  
  it("should have correct state range values", () => {
    expect(numberRangeComponent.find('.single-choice').length).toBe(1);
  });
  
});
