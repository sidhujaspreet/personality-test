import * as React from 'react';
// import SingleChoiceAnswer from "./SingleChoiceAnswerComponent";
import QuestionComponent from "../question/QuestionComponent";
import {arrayContains} from "../../../../util/util";

class SingleChoiceConditionalAnswer extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ''
    };
  }
  
  is_positive = ['important', 'very important'];
  
  onClick = (e) => {
    console.log(e.target.value);
    this.setState({selectedValue: e.target.value});
  };
  
  renderOption = () => this.props.options.map((option) => (
      <p key={option}><input onClick={this.onClick} type="radio" name="gender" value={option}/> {option}</p>));
  
  render() {
    const renderPositive = arrayContains(this.is_positive, this.state.selectedValue);
    return (
        <form>
          {this.renderOption()}
          {/*<SingleChoiceAnswer options={this.props.options}/>;*/}
          {/*{this.props.condition.predicate && }*/}
          {renderPositive && <QuestionComponent questions={[this.props.condition.if_positive]}/>}
        </form>
    );
  }
}

export default SingleChoiceConditionalAnswer;
