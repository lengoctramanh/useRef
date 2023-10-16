import { Fragment, useRef, useState } from "react";

const Test6 = () => {
  const textStyle = {
    WebkitLineClamp: 3,
    webkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const handleShow=()=> {
setIsClick(!isClick) 
  }
  const [showMoreText,setShowMoreText]=useState(true)
  const [isClick,setIsClick]=useState(true)
  const textRef = useRef();
  return (
    <Fragment>
      <div className="test-6">
        <p ref={textRef} style={isClick?textStyle:null}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem
          iusto, sequi totam dolore ratione voluptatem sed explicabo! Labore
          eaque, laudantium sequi voluptas dolorum voluptatem tempore similique
          exercitationem commodi nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor alias est inventore voluptas. Minus quo
          aliquam quidem laudantium nam nihil aliquid assumenda, sunt accusamus
          natus nesciunt neque quasi magni. Deleniti!Labore Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consequuntur ullam dolor
          laborum, beatae nobis maiores at veritatis, asperiores voluptates
          ducimus natus ipsam? Minus aliquam officia laboriosam odio sapiente,
          rerum possimus.
        </p>
        {
            showMoreText && (
                <button 
                id="test-6-btn"
                onClick={handleShow}>{
                    isClick?'Read more':'Read less'
                }</button>

            )
        }
       
      </div>
    </Fragment>
  );
};

export default Test6;
