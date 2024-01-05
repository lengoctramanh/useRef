import { Fragment, useEffect, useRef, useState } from "react";
/*
^ CSS FOR PARAGRAHP */
const styleText = {
  backgroundColor: "red",
  color: "white",
   /**Giấu đi những phần bị thừa so vs kích thước trình duyệt*/
  overflow: "hidden",
   /** Giới hạn nội dung đoạn văn chỉ được hiển thị trong 3 dòng*/
  WebkitLineClamp: 3,
  // các phần tử con đc xếp theo chiều dọc
  WebkitBoxOrient: "vertical",
  /*Nội dung bên trong có thể chuyển động đc  */
  display: "-webkit-box",
  fontWeight: "bold",
};

const Test6 = () => {

  /** Hiển thị gtri mặc định khi trang được tải lần đầu*/
  const [isOpenButton, setIsOpenButton] = useState(false);

/**Chi tiết được hiển thị mặc định khi trang được tải lần đầu*/
  const [showDetails, setShowDetails] = useState(false);

  const textRef = useRef(null);

/*
? CHECK CONTENT IS EXISTED */
  useEffect(() => {
    if (textRef.current) {
      setShowDetails(
        textRef.current.scrollHeight !== textRef.current.clientHeight
      );
    }
  }, []);
 /* mảng rỗng[] chỉ được thực thi một lần duy nh khi render lần đầu tiên */
  
 {
  /**Khi giá trị của biến !isOpenButton khác initialstate cua no,hàm setIsOpenButton run trả về null*/
}
  const handleClickShow = () => {
    setIsOpenButton(!isOpenButton);
  };
  
  return (
    <Fragment>
      <div className="test-6">
        <p ref={textRef} style={isOpenButton ? null:styleText }>
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

        {showDetails && (
          <button className="test-6-btn" onClick={handleClickShow}>
            {isOpenButton ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Test6;
