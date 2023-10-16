import "./App.css";
import { Fragment, useEffect, useRef, useState } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import Test5 from "./Test5";
import Test6 from "./Test6";
const App = () => {
  const [count, setCount] = useState(60);
  const countRef = useRef();

  const preCount = useRef();

  useEffect(() => {
    preCount.current = count;
  }, [count]);

  // const ref = useRef();
  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  const handleStart = () => {
    if( countRef.current) {
      return
    }
    countRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    countRef.current=60
  };
  console.log(count, preCount);
  return (
    <Fragment>
      <Test1 />
      <Test2/>
      <Test3/>
      <Test4/>
      <Test5/>
      <Test6/>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <input type="text"  />
    </Fragment>
  );
};

export default App;
