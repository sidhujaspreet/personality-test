import * as React from 'react';
import {mount} from 'enzyme';
import NumberRangeAnswer
  from "../../../../../app/pages/personality-test/components/answer-types/NumberRangeAnswerComponent";

describe("Question Component: ", () => {
  
  let numberRangeComponent = mount(<NumberRangeAnswer
      onRangeChange={() => {
      }}
      range={{from: 18, to: 140}}
  />);
  
  it("should have correct state range values", () => {
    expect(numberRangeComponent.state().range).toEqual({from: 18, to: 140});
  });
  
  it("should have both range input fields", () => {
    expect(numberRangeComponent.find('.range-input').length).toBe(2);
  });
  
});
