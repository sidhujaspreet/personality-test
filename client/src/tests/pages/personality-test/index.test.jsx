import * as React from 'react';
import {mount} from 'enzyme';
import FormComponent from "../../../app/pages/personality-test";

describe("Personality test page:", ()=> {
  
  let formComponent = mount(<FormComponent
      fetchQuestionData={()=>{}}
      submitAnswer={() => {}}
      />);
  
  it("submit button should be present", ()=> {
    console.log(formComponent.find('.submit-ans-btn').text());
    expect(formComponent.find('.submit-ans-btn').length).toBe(1);
  });
  
  it("submit button should contain correct text", ()=> {
    console.log(formComponent.find('.submit-ans-btn').text());
    expect(formComponent.find('.submit-ans-btn').text()).toContain('Submit Form');
  });
});
