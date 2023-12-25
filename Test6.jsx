import { Fragment, useEffect, useRef, useState } from "react";
const styleText = {
  backgroundColor: "red",
  color: "white",
  overflow: "hidden",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  fontWeight: "bold",
};

const Test6 = () => {
  
  const [isOpenButton, setIsOpenButton] = useState(false);

  const [showDetails, setShowDetails] = useState(false);

  const textRef = useRef(null);


  useEffect(() => {
    if (textRef.current) {
      console.log(textRef.current.scrollHeight, textRef.current.clientHeight);
      setShowDetails(
        textRef.current.scrollHeight !== textRef.current.clientHeight
      );
    }
  }, []);

  
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
