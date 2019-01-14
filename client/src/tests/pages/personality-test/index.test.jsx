import * as React from 'react';
import {mount} from 'enzyme';
import FormComponent from "../../../app/pages/personality-test";
import {questions} from "../../../app/data/questions";

describe("Personality Test Page: Submit button", () => {
  
  let formComponent = mount(<FormComponent
      fetchQuestionData={() => {}}
      submitAnswer={() => {}}
  />);
  
  it("submit button should be present", () => {
    expect(formComponent.find('.submit-ans-btn').length).toBe(1);
  });
  
  it("submit button should contain correct text", () => {
    expect(formComponent.find('.submit-ans-btn').text()).toContain('Submit Form');
  });
});

describe("Personality test page:", () => {
  
  let formComponent = mount(<FormComponent
      fetchQuestionData={() => {}}
      submitAnswer={() => {}}
      questionList={questions}
  />);
  
  it("questions list state should have correct length", () => {
    expect(formComponent.state().questionList.length).toBe(25);
  });
  
  it("should contain question type sections", () => {
    expect(formComponent.find('.question-slot').length).toBe(4);
  });
  
});
