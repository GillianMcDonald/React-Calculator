import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0
  }

  btnUpFunc = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }

  btnDownFunc = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }

  render(){
  return (
    <div className="App">
     <h1>{this.state.counter}</h1>
        <div>
          <a onClick={this.btnUpFunc} className="mybtn" href="#">Increment</a>
        </div>
        <div>
          <a onClick={this.btnDownFunc} className="mybtn" href="#">Decrement</a>
        </div>
    </div>
  );
 }
}

export default Counter;
