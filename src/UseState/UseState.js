/*import React, {useState} from 'react';


const UseStateCourse = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter +1)
  }
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseStateCourse;
*/

import React, {useState} from 'react';


const UseStateCourse = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
     const newValue = event.target.value;
     setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default UseStateCourse;
