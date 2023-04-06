import React from "react";
import "../../styles/layer/LayerList.css";

function CodeList(props) {
  const onDragStart = (event, nodeType, backgroundColour) => {
    console.log(event, nodeType, backgroundColour);
    event.dataTransfer.setData(
      "application/reactflow",
      nodeType,
      backgroundColour
    );
    event.dataTransfer.setData("backgroundColour", backgroundColour);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="layer_container">
      <div className="layer_list">
        <div className="tab_title">Code</div>
        <div className="layer_content">Framework</div>
        <br />
        <button>Pytorch</button>
        <button>Tensorflow</button>
        <br />
        <br />
        <div className="layer_content">Code</div>
        <br />
        <div className="code_box">
          Conv2d(3, 64, kernel_size=(3,3), stride=(1,1), bias=False)
        </div>
      </div>

      <div className="layer_info">
        <div className="layer_info_title">Layer Information</div>
      </div>
    </div>
  );
}

export default CodeList;
