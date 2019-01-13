import * as React from 'react';
import AnswerComponent from "../answer/AnswerComponent";

import './QuestionComponent.scss';

class QuestionComponent extends React.Component {
  
  renderQuestionAnswer() {
    return this.props.questions.map((question, index) => (
        <div key={index}>
          <p className='question-text'>{`${index + 1}.   ${question.question}`}</p>
          <AnswerComponent question_type={question.question_type}/>
        </div>
    ))
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
