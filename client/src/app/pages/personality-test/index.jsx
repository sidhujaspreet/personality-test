import * as React from 'react';
import QuestionComponent from "./components/question/QuestionComponent";

import './index.scss';

class FormComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      groupedQuestionList: [],
      isFetching: false
    };
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.questionList !== prevState.questionList) {
      return ({questionList: nextProps.questionList});
    }
    return null;
  }
  
  componentDidMount() {
    this.props.fetchQuestionData();
  }
  
  createGroupedCategory() {
    if (this.state.questionList && this.state.questionList.length > 0) {
      let groupedCategory = [...this.state.questionList];
      groupedCategory = groupedCategory.reduce((acc, current) => {
        acc[current.category] = acc[current.category] || [];
        acc[current.category].push(current);
        return acc;
      }, {});
      return groupedCategory;
    }
    return {};
  }
  
  renderQuestionCategories() {
    let groupedQuestionList = this.createGroupedCategory();
    return (
        Object.entries(groupedQuestionList).map(([key, value], index) => {
          const id = `question-${index + 1}`;
          return (
              <div key={index} className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title form-qa">
                    <a data-toggle="collapse" data-parent="#accordion" href={`#${id}`}>
                      {key}
                    </a>
                  </h4>
                </div>
                <div id={id} className="panel-collapse collapse in">
                  <div className="panel-body">
                    <QuestionComponent questions={value}/>
                  </div>
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
        </div>
    );
  }
}

export default FormComponent;
