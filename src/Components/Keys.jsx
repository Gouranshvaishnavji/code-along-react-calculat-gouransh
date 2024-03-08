import { useState } from 'react';
import './Keys.css';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [calculatedResult, setCalculatedResult] = useState('');

  const handleNumberClick = (number) => {
    setResult(result + number);
  };

  const handleOperatorClick = (operator) => {
    const lastChar = result[result.length - 1];
    if (!isNaN(lastChar) && lastChar !== '.') {
      setResult(result + operator);
    }
  };

  const handleClearClick = () => {
    setResult('');
  };

  const handleDeleteClick = () => {
    if (calculatedResult) {
      setResult(String(calculatedResult));
      setCalculatedResult('');
    } else {
      setResult(String(result).slice(0, -1));
    }
  };

  const handleCalculateClick = () => {
    try {
      const expression = result.replace(/\s/g, ''); // Remove spaces
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator_">
      <input type="text" id="result" value={result} readOnly />
      <table>
        <tbody>
          <tr>
            <td colSpan="3"><button onClick={handleClearClick}>AC</button></td>
            <td><button onClick={handleDeleteClick}>DEL</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleNumberClick('7')}>7</button></td>
            <td><button onClick={() => handleNumberClick('8')}>8</button></td>
            <td><button onClick={() => handleNumberClick('9')}>9</button></td>
            <td><button onClick={() => handleOperatorClick('/')}>/</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleNumberClick('4')}>4</button></td>
            <td><button onClick={() => handleNumberClick('5')}>5</button></td>
            <td><button onClick={() => handleNumberClick('6')}>6</button></td>
            <td><button onClick={() => handleOperatorClick('*')}>*</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleNumberClick('1')}>1</button></td>
            <td><button onClick={() => handleNumberClick('2')}>2</button></td>
            <td><button onClick={() => handleNumberClick('3')}>3</button></td>
            <td><button onClick={() => handleOperatorClick('-')}>-</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button onClick={() => handleNumberClick('0')}>0</button></td>
            <td><button onClick={() => handleNumberClick('.')}>.</button></td>
            <td><button onClick={handleCalculateClick}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;