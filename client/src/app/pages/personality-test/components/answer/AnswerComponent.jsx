import * as React from 'react';
import SingleChoiceAnswer from '../answer-types/SingleChoiceAnswerComponent'
import SingleChoiceConditionalAnswer from "../answer-types/SingleChoiceConditionalAnswerComponent";
import NumberRangeAnswer from "../answer-types/NumberRangeAnswerComponent";
import './AnswerComponent.scss';


class AnswerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_type: {}
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.question_type && prevState.question_type && (nextProps.question_type.type !== prevState.question_type.type)) {
      return ({question_type: {...nextProps.question_type}});
    }
    return null;
  }
  
  renderAnswer() {
    if (this.props.question_type) {
      let question_type = {...this.props.question_type};
      switch (question_type.type) {
        case 'single_choice': {
          return <SingleChoiceAnswer options={question_type.options}/>;
        }
        case 'single_choice_conditional': {
          return <SingleChoiceConditionalAnswer options={question_type.options} condition={question_type.condition}/>;
        }
        case 'number_range': {
          return <NumberRangeAnswer range={question_type.range}/>;
        }
        default: {
          return;
        }
      }
    }
    return;
  }
  
  render() {
    return (
        <div className="answer-wrapper">
          {this.renderAnswer()}
        </div>
    );
  }
}

export default AnswerComponent;
