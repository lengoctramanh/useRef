import { Fragment, useEffect, useRef, useState } from 'react'

const Test3 = () => {
    const [valueInput,setValueInput]=useState("")
    const input=useRef()
    useEffect(()=> {
        /**Làm border ô tự động nháy lên khi reload lại trang */
        input.current.focus()
    },[])
    const handleClear=()=>{
        input.current.value=''
}
    
    const handleReset=()=> {
        {/**khi gõ vào ô input,bấm button Clear thì ô
    input trống ko, rồi nó focus ô input,hiện lại 
    input.current.value*/}
    //    setValueInput('')
       input.current.focus()
       input.current.value='Bye'
   
    }

    const handleChangeInput=(e)=> {
   setValueInput(e.target.value)
    }
console.log(valueInput)
  return (
    <Fragment>
        <div className='Test-3'></div>
<input 
type="text"
/**tạo một element trong HTML,muốn dùng thì
 * element đó.current.thuộc tính nào đó
 */
ref={input} 
value={valueInput}
onChange={handleChangeInput}
/**Ví dụ, nếu bạn có một trường nhập liệu cho mật khẩu, bạn có thể sử dụng autoComplete="off"
 *  để ngăn trình duyệt lưu mật khẩu đã nhập trước đó và không đề xuất nó cho người dùng. */
autoComplete='off'/>
<button onClick={handleReset} >Reset</button>
<button onClick={handleClear}>Clear</button>
    </Fragment>
  )
}

export default Test3