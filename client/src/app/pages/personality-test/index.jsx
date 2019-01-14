import * as React from 'react';
import QuestionComponent from "./components/question/QuestionComponent";

import './index.scss';
import {groupBy, updateArray} from "../../util/util";

class FormComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      groupedQuestionList: [],
      isFetching: false,
      answerList: [],
      questionTypes: {hard_fact: 'Hard Fact', lifestyle: 'Life Style', introversion: 'Introversion', passion: 'Passion'}
    };
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    return (nextProps.questionList !== prevState.questionList) ? ({questionList: nextProps.questionList}) : prevState;
  }
  
  componentDidMount() {
    this.props.fetchQuestionData();
  }
  
  submitAnswer() {
    this.props.submitAnswer({
      timestamp: Math.round((new Date()).getTime() / 1000),
      answer_list: this.state.answerList
    });
    this.setState({answerList: []});
  }
  
  answerModified(ansList) {
    let list = [...this.state.answerList];
    this.setState({answerList: updateArray(list, ansList, 'questionId')});
  }
  
  renderQuestionCategories() {
    const groupedQuestionList = this.state.questionList ? groupBy(this.state.questionList, 'category') : {};
    return (
        Object.entries(groupedQuestionList).map(([key, value], index) => {
          const id = `question-${index + 1}`;
          return (
              <div key={index + 1} className="panel panel-default question-slot">
                <button className='btn btn-primary question-type-btn' data-toggle="collapse" data-parent="#accordion"
                        href={`#${id}`}>
                  <span>{this.state.questionTypes[key]}</span>
                </button>
                <div id={id} className="panel-collapse collapse in">
                  <QuestionComponent questions={value} getAnswers={(ansList) => this.answerModified(ansList, key)}/>
                </div>
              </div>
          );
        })
    );
  }
  
  render() {
    return (
        <div className="panel-group form-wrapper" id="accordion">
          {this.props.isFetching ? <span>Fetching...</span> : this.renderQuestionCategories()}
          <div className='submit-wrap'>
            <button className='btn btn-secondary submit-ans-btn' onClick={this.submitAnswer}>Submit Form</button>
          </div>
        </div>
    );
  }
}

export default FormComponent;
