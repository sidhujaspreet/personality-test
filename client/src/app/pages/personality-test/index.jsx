import * as React from 'react';
import QuestionComponent from "./components/question/QuestionComponent";

import './index.scss';
import {groupBy} from "../../util/util";

class FormComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      groupedQuestionList: [],
      isFetching: false,
      answerList: [],
      questionTypes: {
        hard_fact: 'Hard Fact',
        lifestyle: 'Life Style',
        introversion: 'Introversion',
        passion: 'Passion',
      }
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
    this.props.submitAnswer(this.state.answerList);
  }
  
  answerModified(ansList) {
    let list = [...this.state.answerList];
    ansList.forEach(ans => {
      let index = list.map(i => i.questionId).indexOf(ans.questionId);
      index > -1 ? list.splice(index, 1, ans) : list.push(ans);
    });
    this.setState({answerList: list});
  }
  
  renderQuestionCategories() {
    const groupedQuestionList = this.state.questionList ? groupBy(this.state.questionList, 'category') : {};
    return (
        Object.entries(groupedQuestionList).map(([key, value], index) => {
          const id = `question-${index + 1}`;
          return (
              <div key={index + 1} className="panel panel-default">
                <h4 className="panel-title form-qa">
                  <a data-toggle="collapse" data-parent="#accordion" href={`#${id}`}>
                    <span>{this.state.questionTypes[key]}</span>
                  </a>
                </h4>
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
          {this.renderQuestionCategories()}
          <button className='btn btn-secondary' onClick={this.submitAnswer}>Submit</button>
        </div>
    );
  }
}

export default FormComponent;
