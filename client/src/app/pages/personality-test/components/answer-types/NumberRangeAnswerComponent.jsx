import * as React from 'react';

class NumberRangeAnswer extends React.Component {
  
  renderOption = () => (<p><input type="number" name="age" min={this.props.range.min} max={this.props.range.max}/></p>);
  
  render() {
    return (
        <form>
          {this.renderOption()}
        </form>
    );
  }
}

export default NumberRangeAnswer;
