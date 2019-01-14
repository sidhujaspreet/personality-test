import * as React from 'react';
import {mount} from 'enzyme';
import SingleChoiceConditionalAnswer
  from "../../../../../app/pages/personality-test/components/answer-types/SingleChoiceConditionalAnswerComponent";

describe("Question Component: ", () => {
  
  let numberRangeComponent = mount(<SingleChoiceConditionalAnswer
      answerOnChange={() => {
      }}
      question={{questionId: 10, question_type: {options: ['test1', 'test2']}}}
  />);
  
  it("should have correct state range values", () => {
    expect(numberRangeComponent.find('.radio-select').length).toBe(2);
  });
  
});
