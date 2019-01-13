import React, {Component} from 'react';

class SingleChoiceAnswer extends Component {
  
  renderOption = () => this.props.options.map(option => (
      <p key={option}><input type="radio" name="gender" value={option}/> {option}</p>));
  
  render() {
    return (
        <form>
          {this.renderOption()}
        </form>
    );
  }
}

export default SingleChoiceAnswer;
