import React, { useState } from "react";
import AbstractNodeScreen from "../components/abstract/AbstractNodeScreen";
import AbstractList from "../components/abstract/AbstractList";
import MyModal from "../components/common/MyModal";
import Modifier from "../components/common/Modifier";

import "../styles/common/Modifier.css";
import "../styles/abstract/AbstractList.css";
import "../styles/abstract/AbstractNodeScreen.css";


function Abstract(props) {
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
        <AbstractList />
      </div>
      {/* 노드 화면에 띄우는 컴포넌트 */}
      <div className="info_outer_container">
        <AbstractNodeScreen onSelectNode={onSelectNode} />
      </div>
    </div>
  );
}

export default Abstract;
