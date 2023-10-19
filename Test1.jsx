import { Fragment, useEffect, useRef, useState } from "react";

const Test1 = () => {
  const [count, setCount] = useState(0);

  const StartCount = useRef();

  const handleStart = () => {
    /**kiểm tra sự tồn tại của StartCount.current trước khi gọi setInterval,
     * tránh việc tạo ra nhiều interval không cần thiết.
     * gây ra các vấn đề không mong muốn như tăng tốc độ thực thi hoặc tiêu tốn tài nguyên.
     */
    if (StartCount.current) {
      return;
    }
    /** chúng ta đảm bảo rằng setInterval chỉ được gọi một lần duy nhất,
     * nếu StartCount.current đã có giá trị khác null or undefined
     * rồi thì nó sẽ ko thực thi hàm SetInterval lần nữa,còn nếu StartCount.current chưa có giá trị nào
     * thì có sẽ thực thi hàm SetInterval
     */
    StartCount.current = setInterval(() => {
      setCount((preCount) => preCount + 1);
    }, 1500);
  };

  const handleStop = () => {
    {
      /**khi bấm Stop thì trình duyệt sẽ lưu lại giá trị hiện tại
       *  của biến StartCount.current*/
    }
    clearInterval(StartCount.current);
    /**đặt lại giá trị của biến StartCount.current sau khi dừng interval.
     * đặt lại biến đếm hoặc chuẩn bị cho việc bắt đầu lại việc đếm hoặc xử lý các tác vụ liên quan.
     */
    StartCount.current = 0;
  };
  const handleReset = () => {
    {
      /*đảm bảo rằng không có interval nào đang chạy và chuẩn bị cho việc bắt đầu lại
    hoặc thực hiện các tác vụ khác liên quan đến biến StartCount.current.
    *
  */
    }
    clearInterval(StartCount.current);
    StartCount.current = 0;
    /**đặt lại giá trị đếm về 0 và chuẩn bị cho việc bắt đầu lại việc đếm hoặc
     * xử lý các tác vụ khác liên quan đến biến count. */
    setCount(0);
  };
  useEffect(() => {
    //  // Thực hiện các tác vụ khi  Test1 được render
    return () => {
      {
        /**trong return thực hiện các tác vụ khi Test1 bị unmount hoặc thay đổi 
    nghĩa là trang Test 1 rớt ra khỏi cây DOM*/
      }
      clearInterval(StartCount.current);
    };
    /** đảm bảo rằng interval sẽ luôn được dừng khi component bị unmount hoặc thay đổi,
     * ngay cả khi người dùng chuyển sang một chỗ khác.
     * Tránh việc tiêu tốn tài nguyên không cần thiết
     * useEffect sẽ được kích hoạt và gọi hàm trả về. */
  }, []);

  return (
    <Fragment>
      <h1>Result:{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </Fragment>
  );
};

export default Test1;
