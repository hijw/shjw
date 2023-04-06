import React from "react";
import "../../styles/layer/LayerList.css";
import YOLOv5 from "/Users/jungwon/Desktop/shjw/src/img/YOLOv5.png";

function InfoList(props) {
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
        <div className="tab_title">Network Information</div>
        <div className="layer_content">YOLOv5</div>
        <img className="tab_image" src={YOLOv5} alt="yolov5" />
      </div>
      <div className="layer_info">
        <div className="layer_info_title">Layer Information</div>
      </div>
    </div>
  );
}

export default InfoList;
