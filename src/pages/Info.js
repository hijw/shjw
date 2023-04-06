import React, { useState } from "react";
import "../styles/info/Info.css";
import NodeScreen from "../components/common/NodeScreen";
import "../styles/common/Modifier.css";
import "../styles/layer/Layer.css";
import InfoList from "../components/layer/InfoList";
import MyModal from "../components/common/MyModal";
import Modifier from "../components/common/Modifier";

function Info(props) {
  const [show, setShow] = useState(false);

  const onClickOpenModal = () => {
    setShow(true);
  };
  const onClickCancel = () => {
    setShow(false);
  };

  /** 클릭한 노드 정보 **/
  const [selectedNode, setSelectedNode] = useState(null);
  /** 클릭한 노드 selectedNode에 설정 **/
  const onSelectNode = (event, nodeInfo) => {
    setSelectedNode(nodeInfo);
  };

  return (
    <div className="layer_outer_container">
      <div className="aside_function_container">
        {/* 토글 관련 컴포넌트 */}
        <InfoList />
      </div>
      {/* 노드 화면에 띄우는 컴포넌트 */}
      <div className="info_outer_container">
        <NodeScreen onSelectNode={onSelectNode} />
      </div>
    </div>
  );
}

export default Info;
