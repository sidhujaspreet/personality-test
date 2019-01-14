import * as React from 'react';
import NumberRangeAnswer from "./NumberRangeAnswerComponent";

class SingleChoiceConditionalAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      selectedAge: 18,
      selectedRange: {
        from: 18,
        to: 140
      }
    };
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);
  }
  
  onRadioBtnClick = (e) => {
    this.setState({selectedValue: e.target.value});
    if (e.target.value === 'not important') {
      const question = this.props.question;
      this.props.answerOnChange({questionId: question.id, text: question.question, value: e.target.value});
    }
  };
  
  
  displayCondition(option) {
    if (option === this.state.selectedValue)
      switch (this.state.selectedValue) {
        case 'important': {
          return (<span><input type="range" name="points" min="18" max="140" value={this.state.selectedAge}
                               onChange={this.onNumberChange}/> {this.state.selectedAge}</span>);
        }
        case 'very important': {
          return (<NumberRangeAnswer onRangeChange={this.onRangeChange} range={this.state.selectedRange}/>);
        }
        default:
          return;
      }
  }
  
  onNumberChange(e) {
    let value = e.target.value;
    const question = this.props.question;
    this.setState({selectedAge: value});
    value = (this.state.selectedValue === 'not important') ? this.state.selectedValue : value;
    this.props.answerOnChange({questionId: question.id, text: question.question, value});
  }
  
  onRangeChange(value) {
    const question = this.props.question;
    this.setState({selectedRange: value});
    value = (this.state.selectedValue === 'not important') ? this.state.selectedValue : `${value.from}-${value.to}`;
    this.props.answerOnChange({questionId: question.id, text: question.question, value})
  }
  
  render() {
    const options = (this.props.question && this.props.question.question_type) ? this.props.question.question_type.options : [];
    return (
        <form>
          {options && options.map((option) => (
              <div key={option}>
                <p className='radio-select'><input type="radio" name="gender" value={option} onClick={this.onRadioBtnClick}/> {option}</p>
                {this.displayCondition(option)}
              </div>
          ))}
        </form>
    );
  }
}

export default SingleChoiceConditionalAnswer;
