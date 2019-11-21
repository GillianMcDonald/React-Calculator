import React from 'react';
import './App.css';


class Calc extends React.Component {
    state =  {
        display: [],
        storeNumber1: "",
        symbol: "",
        storeNumber2: "",
        symbol2: "",
        hideDisplay: false,
        hideResult: true
    }

clearFunc = () => {
    this.setState ({
        display: "",
    })
}

reset = () => {
    this.setState ({
        display: [],
        storeNumber1: "",
        symbol: "",
        storeNumber2: "",
        symbol2: "",
        hideDisplay: false,
        hideResult: true
    })
}

//store the symbol from the display
symbolFunc = (symbol) => {
    this.store1Func(this.state.display)
    this.setState ({
        display: symbol,
        symbol:  symbol
    })
    console.log(symbol)
}

//store the current value from the display
store1Func = (value) => {
    this.setState({
        storeNumber1: value.join("")
        //storeNumber1: value
    })
    console.log(value)
}

//if a number button is pressed it's added to display 
displayFunc = (number) => {
    this.setState ({
        //storeNumber1: ""? {storeNumber1: number} : {storeNumber2: number}  
        display: [...this.state.display, number],
        //display: number
    })
    console.log(number)
}

//if equals is pressed stores array 2, clears display, runs the calc functions then shows result
equalsFunc = () => {
    this.store2Func(this.state.display)
    this.clearFunc()
    this.setState ({
        hideDisplay: true,
        hideResult: false,
        // storeNumber1: #resultText.value
    })    

}


store2Func = (value) => {
    
    this.setState({
        storeNumber2: value.join("")
        //storeNumber2: value
        
    })
    console.log(this.state.storeNumber2);
}


  render(){
    console.log(this.state)
    let num1 = parseInt(this.state.storeNumber1);

    let string1 = this.state.storeNumber2;
    let string2 = string1.substr(1);
    let string3 = parseInt(string2)
    
    let result = 0;
    // console.log("num 1 is " + num1);
    // console.log("num 2 is " + string3);
    // console.log(typeof(string3));
    // console.log(typeof(num2));

    switch(this.state.symbol){
        case '+':
            result =  (num1 + string3);
            break;
        case '-':
             result =  (num1 - string3);
            break;
        case '/':
            result = (num1 / string3);
            break;
        case '*':
            result = (num1 * string3);
            break;
        default:
            console.log("it's all gone wrong");
    }

    console.log(result);

  return (
    <div className="App">
        <div id="output">
          <h1 className={!this.state.hideDisplay ? "display" : "display hide"} type="text" href="#" >{this.state.display}</h1>
          <h1 className={this.state.hideResult ? "display hide" : "display"} id="resultText" type="text" href="#" >{result !== 0 ? result : "" }</h1>
          
          {/* {this.state.storeNumber1}{this.state.symbol}{this.state.storeNumber2}{this.state.symbol2}{this.state.result} */}
        </div>
        <div id="row1">
        <a onClick={this.reset} className="resetBtn" href="#">reset</a> 
          <a onClick={this.clearFunc} className="clearBtn" href="#">clear</a>
          <a  onClick={() => this.symbolFunc("/")} className="divideBtn" href="#">/</a>
        </div>
        <div id="row2">
          <a onClick={() => this.displayFunc(7)} className="btn7" href="#">7</a>
          <a  onClick={() => this.displayFunc(8)} className="btn8" href="#">8</a>
          <a  onClick={() => this.displayFunc(9)}className="btn9" href="#">9</a>
          <a  onClick={() => this.symbolFunc("-")} className="minusBtn" href="#">-</a>
        </div>
        <div id="row3">
          <a  onClick={() => this.displayFunc(4)}className="btn4" href="#">4</a>
          <a  onClick={() => this.displayFunc(5)} className="btn5" href="#">5</a>
          <a  onClick={() => this.displayFunc(6)}className="btn6" href="#">6</a>
          <a  onClick={() => this.symbolFunc("+")}className="plusBtn" href="#">+</a>
        </div>
        <div id="row4">
          <a  onClick={() => this.displayFunc(1)}className="btn1" href="#">1</a>
          <a  onClick={() => this.displayFunc(2)}className="btn2" href="#">2</a>
          <a  onClick={() => this.displayFunc(3)}className="btn3" href="#">3</a>
          <a  onClick={() => this.symbolFunc("*")}className="plusBtn" href="#">*</a>
          
        </div>
        <div id="row5">
          <a  onClick={() => this.displayFunc(0)}className="btn0" href="#">0</a>
          <a  onClick={() => this.equalsFunc("=")} className="equalsBtn" href="#">=</a>
        
        </div>

    </div>
  );
 }
}

export default Calc;
