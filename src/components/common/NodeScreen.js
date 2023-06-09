import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { initialEdges, initialNodes, nodeTypes } from "../../dummies";
import "../../styles/common/NodeScreen.css";
import BottleNeck from "../../img/bottleneck.png"; // residual block 사진나오게
import BasicBlock from "../../img/basicblock.png";

function NodeScreen({ d_nodes, d_edges, onSelectNode }) {
  let id = 15;
  const getId = () => `${id++}`;

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const backgroundColour = event.dataTransfer.getData("backgroundColour");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
        style: {
          background: `${backgroundColour}`,
          fontSize: "20px",
          width: "200px",
          boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
          border: "0px",
          borderRadius: "10px",
        },
      };
      const newResidualNode1 = {
        // 노드 내부에 residual block 이미지 넣기 - bottleneck
        id: getId(),
        type,
        position,
        style: {
          background: `${backgroundColour}`,
          fontSize: "20px",
          width: "200px",
          height: "500px",
          boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
          border: "0px",
          borderRadius: "10px",
          backgroundImage: `url(${BottleNeck})`, //사진 나오게
          backgroundPosition: "center",
          backgroundSize: "180px 500px",
          backgroundRepeat: "no-repeat",
        },
      };
      const newResidualNode2 = {
        // 노드 내부에 residual block 이미지 넣기 - basic block
        id: getId(),
        type,
        position,
        style: {
          background: `${backgroundColour}`,
          fontSize: "20px",
          width: "200px",
          height: "340px",
          boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
          border: "0px",
          borderRadius: "10px",
          backgroundImage: `url(${BasicBlock})`, //사진 나오게
          backgroundPosition: "center",
          backgroundSize: "180px 340px",
          backgroundRepeat: "no-repeat",
        },
      };

      if (type == "BottleNeck") {
        // residual block일 경우
        setNodes((nds) => nds.concat(newResidualNode1));
      } 
      else if (type == "BasicBlock") {
        // residual block일 경우
        setNodes((nds) => nds.concat(newResidualNode2));
      } 
      else {
        setNodes((nds) => nds.concat(newNode));
      }

      // axios post 호출
    },
    [reactFlowInstance]
  );

  return (
    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={onSelectNode}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default NodeScreen;
