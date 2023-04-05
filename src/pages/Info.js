import React, { useState } from "react";
import "../styles/info/Info.css";
import MyModal from "../components/common/MyModal";
import NodeScreen from "../components/common/NodeScreen";
function Info(props) {
  const [show, setShow] = useState(false);

  const onClickOpenModal = () => {
    setShow(true);
  };
  const onClickCancel = () => {
    setShow(false);
  };

  return (
    <div className="info_outer_container">
      <button style={{ height: "10%" }} onClick={onClickOpenModal}>
        모달 버튼
      </button>
      <MyModal show={show} onClickCancel={onClickCancel} />
      <NodeScreen />
    </div>
  );
}

export default Info;
