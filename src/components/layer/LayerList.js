import React from "react";
import "../../styles/layer/LayerList.css";

function LayerList(props) {
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
        <div className="tab_title">Layer</div>
        {/* ResiudalBlock Layers 토글 */}
        <ResidualBlockLayers onDragStart={onDragStart} />
        {/* Convolutional Layers 토글 */}
        <ConvolutionalLayers onDragStart={onDragStart} />
        {/* Pooling Layers 토글 */}
        <PoolingLayers onDragStart={onDragStart} />
        {/* Activations 토글 */}
        <Activations onDragStart={onDragStart} />
        {/* Normalization Layers 토글 */}
        <NormalizationLayers onDragStart={onDragStart} />
      </div>
      <div className="layer_info">
        <div className="layer_info_title">Layer Information</div>
      </div>
    </div>
  );
}

export const ConvolutionalLayers = ({ onDragStart }) => {
  const toggleItems = [
    {
      nodeName: "Conv2d",
      nodeColor: "#F2E3DC",
    },
  ];

  return (
    <details open>
      <summary className="layer_name">Convolutional Layers</summary>
      {toggleItems.map((item, index) => (
        <div
          key={index}
          className="dndnode Convolutional"
          onDragStart={(event) =>
            onDragStart(event, item.nodeName, item.nodeColor)
          }
          draggable
        >
          {item.nodeName}
        </div>
      ))}
    </details>
  );
};

export const PoolingLayers = ({ onDragStart }) => {
  const toggleItems = [
    {
      nodeName: "MaxPool2d",
      nodeColor: "#FAF1CB",
    },
    {
      nodeName: "AvgPool2d",
      nodeColor: "#FAF1CB",
    },
    {
      nodeName: "AdaptiveAvgPool2d",
      nodeColor: "#FAF1CB",
    },
  ];

  return (
    <details open>
      <summary className="layer_name">Pooling Layers</summary>
      {toggleItems.map((item, index) => (
        <div
          key={index}
          className="dndnode Pooling"
          onDragStart={(event) =>
            onDragStart(event, item.nodeName, item.nodeColor)
          }
          draggable
        >
          {item.nodeName}
        </div>
      ))}
    </details>
  );
};

export const Activations = ({ onDragStart }) => {
  const toggleItems = [
    {
      nodeName: "ReLU",
      nodeColor: "#D9E3E8",
    },
    {
      nodeName: "Sigmoid",
      nodeColor: "#D9E3E8",
    },
    {
      nodeName: "LeakyReLU",
      nodeColor: "#D9E3E8",
    },
    {
      nodeName: "Softmax",
      nodeColor: "#D9E3E8",
    },
  ];
  return (
    <details open>
      <summary className="layer_name">Activations</summary>
      {toggleItems.map((item, index) => (
        <div
          key={index}
          className="dndnode Activiation"
          onDragStart={(event) =>
            onDragStart(event, item.nodeName, item.nodeColor)
          }
          draggable
        >
          {item.nodeName}
        </div>
      ))}
    </details>
  );
};

export const NormalizationLayers = ({ onDragStart }) => {
  const toggleItems = [
    {
      nodeName: "BatchNorm2d",
      nodeColor: "#DEE8E4",
    },
  ];

  return (
    <details open>
      <summary className="layer_name">Normalization Layers</summary>
      {toggleItems.map((item, index) => (
        <div
          key={index}
          className="dndnode Normalization"
          onDragStart={(event) =>
            onDragStart(event, item.nodeName, item.nodeColor)
          }
          draggable
        >
          {item.nodeName}
        </div>
      ))}
    </details>
  );
};

export const ResidualBlockLayers = ({ onDragStart }) => {
  const toggleItems = [
    {
      nodeName: "ResidualBlock",
      nodeColor: "#E0D8E4", //새로 생기는 노드 색
    },
  ];

  return (
    <details open>
      <summary className="layer_name">Residual Block</summary>
      {toggleItems.map((item, index) => (
        <div
          key={index}
          className="dndnode ResidualBlock"
          onDragStart={(event) =>
            onDragStart(event, item.nodeName, item.nodeColor)
          }
          draggable
        >
          {item.nodeName}
        </div>
      ))}
    </details>
  );
};

export default LayerList;
