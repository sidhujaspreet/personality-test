import * as React from 'react';
import './QuestionComponent.scss';
import SingleChoiceAnswer from "../answer-types/SingleChoiceAnswerComponent";
import SingleChoiceConditionalAnswer from "../answer-types/SingleChoiceConditionalAnswerComponent";
import NumberRangeAnswer from "../answer-types/NumberRangeAnswerComponent";

class QuestionComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      answerList: []
    };
    this.answerOnChange = this.answerOnChange.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.question_type && prevState.question_type && (nextProps.question_type.type !== prevState.question_type.type)) {
      return ({question_type: {...nextProps.question_type}});
    }
    return null;
  }
  
  answerOnChange(item) {
    const answerIndex = this.state.answerList.map(i => i.questionId).indexOf(item.questionId);
    let answerList = [...this.state.answerList];
    answerIndex > -1 ? answerList.splice(answerIndex, 1, item) : answerList.push(item);
    this.setState({answerList});
    this.props.getAnswers(answerList);
  };
  
  renderQuestionAnswer() {
    return this.props.questions.map((question, index) => (
        <div key={question._id}>
          <p className='question-text'>{`${index + 1}.  ${question.question}`}</p>
          <div className="answer-wrapper">
            {this.renderAnswer(question)}
          </div>
        </div>
    ))
  }
  
  renderAnswer(question) {
    if (question) {
      let question_type = question.question_type;
      switch (question_type.type) {
        case 'single_choice': {
          return <SingleChoiceAnswer question={question} answerOnChange={this.answerOnChange}/>;
        }
        case 'single_choice_conditional': {
          return <SingleChoiceConditionalAnswer question={question} answerOnChange={this.answerOnChange}/>;
        }
        case 'number_range': {
          return <NumberRangeAnswer question={question} answerOnChange={this.answerOnChange}/>;
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
        <div className="question-wrapper">
          {this.renderQuestionAnswer()}
        </div>
    );
  }
}

export default QuestionComponent;
