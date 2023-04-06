import React, { useEffect, useState } from "react";
import LayerList from "../components/layer/LayerList";
import "../styles/common/Modifier.css";
import "../styles/layer/Layer.css";
import Modifier from "../components/common/Modifier";
import NodeScreen from "../components/common/NodeScreen";

function Layer(props) {
  /** 서버에서 불러온 node, edge 초기화 **/
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  /** 수정 정보 관련 request **/
  const [request, setRequest] = useState({
    in_channels: "",
    out_channels: "",
  });
  /** 클릭한 노드 정보 **/
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    /** node, edges 서버로부터 불러오기 **/
    /*  서버에 저장된 node 정보 불러오기
            axios.get(`url`)
                .then(res => setNodes(res))
                .catch(err => 예외처리)
        */
    /*  서버에 저장된 edge 정보 불러오기
            axios.get(`url`)
                .then(res => setEdges(res))
                .catch(err => 예외처리)
        */
  }, []);

  /** 클릭한 노드 selectedNode에 설정 **/
  const onSelectNode = (event, nodeInfo) => {
    setSelectedNode(nodeInfo);
  };

  /** Modifier 컴포넌트 input의 onChange **/
  const onChange = ({ target: { name, value } }) => {
    const next = {
      ...request,
      [name]: value,
    };
    console.log(next);
    setRequest(next);
  };

  /** 수정 버튼 눌렀을 때 API 요청 처리 **/
  const onClickModify = () => {
    /** 수정 API **/
    // ex) axios.update(`url`,{request})
    //          .then(res => local Node 수정)
    //          .catch(err => 예외처리)
  };

  /** 수정 취소 눌렀을 때 **/
  const onCancelModify = () => {
    setSelectedNode(null);
  };

  return (
    <div className="layer_outer_container">
      <div className="aside_function_container">
        {/* 토글 관련 컴포넌트 */}
        <LayerList />
        {/* 노드 눌렀을때 수정? 하는거랬나 그거 관련 컴포넌트 */}
        <div className={"modifier_outer_container"}>
          {selectedNode && (
            <Modifier
              request={request}
              onChange={onChange}
              selectedNode={selectedNode}
            />
          )}
        </div>
      </div>
      {/* 노드 화면에 띄우는 컴포넌트 */}
      <NodeScreen onSelectNode={onSelectNode} />
    </div>
  );
}

export default Layer;
