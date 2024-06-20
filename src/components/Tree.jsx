import React, { useState } from "react";

const Tree = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgShow, setImgShow] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleImage = ()=>{
    setImgShow(!imgShow)
  }

  if (node.isFolder) {
    return (
      <div>
        <span onClick={toggle} style={{ cursor: "pointer" }}>
          {isOpen ? "📂" : "📁"} {node.name}
          
        </span>
        <div style={{ display: isOpen ? "block" : "none", paddingLeft: 20 }}>
          {node.children.map((child, index) => (
            <Tree key={index} node={child} />
          ))}
        </div>
        <div>
        </div>
      </div>
    );
} else {
    return (
        <div>
        <span onClick={toggleImage}>{node.name}</span>
        {node.image && imgShow ? 
        <img src={node.image} alt="" /> : ''
    }
      </div>
    );
  }
};

export default Tree;
