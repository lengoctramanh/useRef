import { Fragment, useEffect, useRef, useState } from "react";

const Test5 = () => {
    const [input,setInput]=useState()

    const detailsInputRef=useRef()
    
    useEffect(()=> {
      detailsInputRef.current.focus()
    },[])
/**Thông báo thông tin vừa nhập */
    const handleDetailsInput=()=> {
alert(`Input data: ${detailsInputRef.current.value}`)
    }
/**Đón nhận sự thay đổi giá trị của hàm setInput */
    const handleOnChange=()=> {
setInput(detailsInputRef.current.value)
    }
/**Reset lại ô input thành ô rỗng ban đầu */
    const handleReset=()=> {
      detailsInputRef.current.value=""
      detailsInputRef.current.focus()
    }

  return (
    <Fragment>
      <div className="test-5">
        <input 
        type="text"
        /**Tạo ra một element input trên cây DOM,nghĩa là
         * khi F12 lên thì ở ô element tự động sinh ra 
         * một ô input
         */
        ref={detailsInputRef}
        value={input}
        /**xử lý dữ liệu khi giá trị của phần tử thay đổi.  */
        onChange={handleOnChange}
        autoComplete="off" />
        <button onClick={handleDetailsInput}>Click to see more details</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </Fragment>
  );
};

export default Test5;
