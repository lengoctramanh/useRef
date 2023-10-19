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
/**Lưu giá trị hiện tại của biến count vào biến preCount.current khi biến Count thay đổi
*/
  useEffect(() => {
    preCount.current = count;
  }, [count]);/**Chỉ thực thi lại khi giá trị của count thay đổi. */

 /**kiểm tra giá trị của countRef.current */
  const handleStart = () => {
    /**Nếu countRef.current đã tồn tại,tức là có giá trị khác null or
     * undefined thì dừng lại ko làm gì hết
    */
    if( countRef.current) {
      return
    }
    /**Còn countRef.current vẫn còn giá trị null or undefined thì thực hiện
     * hàm sau
      */
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
     
    </Fragment>
  );
};

export default App;
