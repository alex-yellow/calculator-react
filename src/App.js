import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [number, setNumber] = useState('0');

  function handleDigit(d){
    
    if (number === '0') {
      setNumber(d);
    } 
    else {
      setNumber(`${number}${d}`);
    }
    
  }

  useEffect(() => {
    const input = document.querySelector(".input");
    input.textContent = number;
  }, [number]);

  function handleRemove() {
    if (number === '0')
    {
      return;
    } 

    const len = String(number).length;

    if (len <= 1) {
      setNumber('0');
    } 
    else{
      setNumber(String(number).slice(0, len - 1));
    } 
  }

  function calc() {
    const res = eval(number);

    const output = document.querySelector(".output");    
    output.textContent = res;

    setNumber(res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculator</h2>
      </header>

      <main className="container">
        <div className="calculator">
          <div className="input"></div>
          <div className="output"></div>
          <div className="digits">
            <div className="item-container">
              <div className="item" onClick={() => handleDigit('1')}>1</div>
              <div className="item" onClick={() => handleDigit('2')}>2</div>
              <div className="item" onClick={() => handleDigit('3')}>3</div>
              <div className="item" onClick={() => handleDigit('4')}>4</div>
              <div className="item" onClick={() => handleDigit('5')}>5</div>
              <div className="item" onClick={() => handleDigit('6')}>6</div>
              <div className="item" onClick={() => handleDigit('7')}>7</div>
              <div className="item" onClick={() => handleDigit('8')}>8</div>
              <div className="item" onClick={() => handleDigit('9')}>9</div>
              <div className="item" onClick={handleRemove}>CE</div>
              <div className="item" onClick={() => handleDigit(0)}>0</div>
              <div className="item" onClick={() => { setNumber('0') }}>C</div>
            </div>
          </div>
          <div className="calculator-operation">
            <div className="plus" onClick={() => handleDigit('+')}>+</div>
            <div className="minus" onClick={() => handleDigit('-')}>-</div>
            <div className="multiply" onClick={() => handleDigit('*')}>*</div>
            <div className="divide" onClick={() => handleDigit('/')}>/</div>
            <div className="square" onClick={() => handleDigit('**')}>^2</div>
            <div className="power" onClick={() => handleDigit('.')}>.</div>
            <div className="modulus" onClick={() => handleDigit('%')}>%</div>
            <div className="calc" onClick={calc}>=</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
