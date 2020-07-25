import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({counter1: 0, counter2: 0, counter3: 0, counter4: 0, counter5: 0});
  const [totalSum, setTotalSum] = useState(0);
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    let arr = Object.values(values);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    setTotalSum(values.counter1 + values.counter2 + values.counter3 + values.counter4 + values.counter5);
    setAverage((values.counter1 + values.counter2 + values.counter3 + values.counter4 + values.counter5) / 5)
    setMax(max)
    setMin(min)
  }, [values])

  const decrementCount = type => {
    if(type === "counter1"){
      setValues({...values, counter1: values.counter1 - 1})
    }
    if(type === "counter2"){
      setValues({...values, counter2: values.counter2 - 1})
    }
    if(type === "counter3"){
      setValues({...values, counter3: values.counter3 - 1})
    }
    if(type === "counter4"){
      setValues({...values, counter4: values.counter4 - 1})
    }
    if(type === "counter5"){
      setValues({...values, counter5: values.counter5 - 1})
    }
  }

  const incrementCount = type => {
    if(type === "counter1"){
      setValues({...values, counter1: values.counter1 + 1})
    }
    if(type === "counter2"){
      setValues({...values, counter2: values.counter2 + 1})
    }
    if(type === "counter3"){
      setValues({...values, counter3: values.counter3 + 1})
    }
    if(type === "counter4"){
      setValues({...values, counter4: values.counter4 + 1})
    }
    if(type === "counter5"){
      setValues({...values, counter5: values.counter5 + 1})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter-button">
          <button type="button" onClick={() => decrementCount("counter1")}>-</button><button type="button" onClick={() => incrementCount("counter1")}>+</button> <span>counter - 1: {values.counter1}</span>
        </div>
        <div className="counter-button">
          <button type="button" onClick={() => decrementCount("counter2")}>-</button><button type="button" onClick={() => incrementCount("counter2")}>+</button> <span>counter - 2: {values.counter2}</span>
        </div>
        <div className="counter-button">
          <button type="button" onClick={() => decrementCount("counter3")}>-</button><button type="button" onClick={() => incrementCount("counter3")}>+</button> <span>counter - 3: {values.counter3}</span>
        </div>
        <div className="counter-button">
          <button type="button" onClick={() => decrementCount("counter4")}>-</button><button type="button" onClick={() => incrementCount("counter4")}>+</button> <span>counter - 4: {values.counter4}</span>
        </div>
        <div className="counter-button">
          <button type="button" onClick={() => decrementCount("counter5")}>-</button><button type="button" onClick={() => incrementCount("counter5")}>+</button> <span>counter - 5: {values.counter5}</span>
        </div>
        <div>
          <p>Total Sum: {totalSum}</p>
          <p>Average: {average}</p>
          <p>Max: {max}</p>
          <p>Min: {min}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
