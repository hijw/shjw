import React, { useState } from "react";

import "../styles/common/Modifier.css";
import "../styles/common/NodeScreen.css";

import NodeScreen from "../components/common/NodeScreen";
import MyModal from "../components/common/MyModal";
import Modifier from "../components/common/Modifier";
import CodeList from "../components/layer/CodeList";

function Code(props) {
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
        <CodeList />
      </div>
      {/* 노드 화면에 띄우는 컴포넌트 */}
      <div className="info_outer_container">
        <NodeScreen onSelectNode={onSelectNode} />
      </div>
    </div>
  );
}

export default Code;
