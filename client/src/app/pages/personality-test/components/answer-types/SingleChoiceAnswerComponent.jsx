import * as React from 'react';

class SingleChoiceAnswer extends React.Component {
  
  renderOption = () => this.props.options.map((option) => (
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
