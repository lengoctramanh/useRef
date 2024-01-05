import { Fragment, useState, useRef, useEffect } from "react";

const Test2 = () => {
  const [value, setValue] = useState(0);
  const preValueRef = useRef();
  /**useEffect được sử dụng để theo dõi sự thay đổi của biến value */
  useEffect(() => {
    preValueRef.current = value;
    {
      /**useEffect với mảng phụ thuộc [value] đảm bảo rằng hàm được truyền 
    vào chỉ được gọi khi value thay đổi.  */
    }
  }, [value]);
  /**preValueRef.current lưu giá trị hiện tại value,
   * khi bấm button thì nó thực thi hàm handleClickValue,
   * value thay đổi lúc đó Test 2 đc re-render lại,
   * lúc đó hàm trong useEffect chưa chạy mà phải in ra màn hình
   * giá trị của value đã thay đổi, xong rồi lúc đó nó
   * mới chạy useEffect,lúc đó preValueRef.current=value
   * lưu giá trị cũ của value lúc chưa re-render lại
   *
   */
  const handleClickValue = () => {
    setValue(value + 1);
  };

  return (
    <Fragment>
      <div className="btn">
        <h1>Present Value: {value}</h1>
        <h1>Previous Value: {preValueRef.current}</h1>
      </div>

      <button onClick={handleClickValue}>
        Click me to see a previous value
      </button>
    </Fragment>
  );
};

export default Test2;
