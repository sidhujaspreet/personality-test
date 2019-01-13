import * as React from 'react';

export class NumberRangeAnswer extends React.Component {
  constructor() {
    super();
    this.state = {
      range: {
        from: '',
        to: ''
      }
    };
    this.fromRangeChange = this.fromRangeChange.bind(this);
    this.toRangeChange = this.toRangeChange.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps) {
    return ({range: nextProps.range});
  }
  
  fromRangeChange(e) {
    const range = {...this.state.range, from: Number(e.target.value)};
    this.setState({range});
    this.props.onRangeChange(range);
  }
  
  toRangeChange(e) {
    const range = {...this.state.range, to: Number(e.target.value)};
    this.setState({range});
    this.props.onRangeChange(range);
  }
  
  render() {
    return (
        <div>
          {this.props.range && (<div>
            <p>From: <input type="range" name="points" min="18" max="140" value={this.state.range.from}
                            onChange={this.fromRangeChange}/> {this.state.range.from}</p>
            <p>To: <input type="range" name="points" min="18" max="140" value={this.state.range.to}
                          onChange={this.toRangeChange}/> {this.state.range.to}</p>
          </div>)}
        </div>
    );
  }
}

export default NumberRangeAnswer;
