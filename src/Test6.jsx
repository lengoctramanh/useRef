import { Fragment, useEffect, useRef, useState } from "react";

const Test6 = () => {
  /** CSS cho đoạn văn sau khi Click vào button,sự thay đổi về kích thước đoạn văn*/
  const styleText = {
    backgroundColor: "green",
    color: "white",
    /**Giấu đi những phần bị thừa so vs kích thước trình duyệt*/
    overflow: "hidden",
    /** Giới hạn nội dung đoạn văn chỉ được hiển thị trong 3 dòng,đây là CSS không chuẩn*/
    WebkitLineClamp: 3,
    /**Là CSS không chuẩn,các phần tử con đc xếp theo chiều dọc */
    WebkitBoxOrient: "vertical",
    /*Nội dung bên trong có thể chuyển động đc  */
    display: "-webkit-box",
    fontWeight:'bold'
 
  };
  /** Hiển thị chữ READ MORE mặc định khi trang được tải lần đầu*/
  const [isOpenButton, setIsOpenButton] = useState(true);
  /**Chi tiết được hiển thị mặc định khi trang được tải lần đầu*/
  const [showDetails, setShowDetails] = useState(true);
  const handleClickShow = () => {
    {/**Khi giá trị của biến !isOpenButton khác giá trị mặc định là true,
  thì giá trị lúc đó là false,hàm setIsOpenButton thực thi trả về null*/}
    setIsOpenButton(!isOpenButton);
  };
  const textRef = useRef();
  {/* mảng rỗng[] chỉ được thực thi một lần duy nh khi render lần đầu tiên */}
  useEffect(() => {
    {/**Nếu tồn tại thẻ p thì thực thi các lệnh sau */}
    if (textRef.current) {
      console.log(textRef.current.scrollHeight, textRef.current.clientHeight);
      setShowDetails(/**LOGIC */
        textRef.current.scrollHeight !== textRef.current.clientHeight
      );
    }
  }, []);
{/**textRef.current.scrollHeight:chiều cao thực
textRef.current.clientHeight: chiều cao hiển thị trên trình duyệt
 */}
  return (
    <Fragment>
      <div className="test-6">
        <p ref={textRef} style={isOpenButton ? styleText : null}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          ipsum sapiente expedita explicabo ducimus at sequi culpa consequatur
          iste quas. Error repellendus suscipit eaque nobis voluptate placeat
          nulla omnis est. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fuga ipsam ratione voluptatem consequuntur natus consequatur
          officiis non voluptate tempore omnis ad eveniet, molestiae dolorum
          consectetur reiciendis architecto magnam voluptates deleniti? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Ratione eligendi
          vero deserunt est numquam exercitationem iure sapiente, sint error
          tempore sit provident, tenetur vel! Nesciunt numquam doloremque unde
          rerum fugiat.
        </p>
        {/*Kiểm tra giá trị của biến showDetails.
        Nếu true thì code trong () thực thi,còn false thì bỏ qua *
         */}
        {showDetails && (
          <button id="test-6-btn" onClick={handleClickShow}>
            {/**Để giá trị mặc định là TRUE thì hiện ra READ MORE,FALSE thì hiện ra READ LESS
             */}
            {isOpenButton ? "Read more" : "Read less"}
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Test6;
