import  { Fragment, useEffect, useRef, useState } from 'react'

const Test4 = () => {
    {/**khi user nhập thông tin vào ô input quá dài thì bấm button
để tăng diện tích ô input để nhập thêm,lúc đó ô input được mở rộng
nếu dữ liệu đó tiếp tực dài thì bấm button lần nữa nó sẽ tự động
quay lại chữ cái bắt đầu */}
    const [size,setSize]=useState()
    const handleClickSize=()=> {
        sizeRef.current.style.width='400px'
    }
    const sizeRef=useRef()
    useEffect(()=> {
        sizeRef.current.focus()
    },[])
    const handleValueInput=(e)=> {
        setSize(e.target.value)
    }
  return (
    <Fragment>
        <div className='test-4'></div>
        <input 
        type="text"
        ref={sizeRef}
        value={size}
        autoComplete='off'
        onChange={handleValueInput}
        style={{width:100 }} />
        <button onClick={handleClickSize}>Click me to expand the size of input</button>
    </Fragment>
  )
}

export default Test4