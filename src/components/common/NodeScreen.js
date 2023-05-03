import React, {useCallback, useRef, useState} from 'react';
import ReactFlow, {addEdge, Background, ConnectionLineType, Controls, useEdgesState, useNodesState} from "reactflow";
import {initialEdges, initialNodes, nodeTypes} from "../../dummies";
import "../../styles/common/NodeScreen.css";
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
const nodeWidth = 172;
const nodeHeight = 36;
const resNodeWidth= 400;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });
  
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
  
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? 'left' : 'top';
      node.sourcePosition = isHorizontal ? 'right' : 'bottom';
  
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2 - (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) / 2),
        y: nodeWithPosition.y - nodeHeight / 2 + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth)),
      };
  
      return node;
    });
  
    return { nodes, edges };
  };

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);


function NodeScreen({d_nodes,d_edges,onSelectNode}) {

    let id = 20;
    const getId = () => `${id++}`

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        []
    );


    const onLayout = useCallback(
        (direction) => {
          const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            nodes,
            edges,
            direction
          );
    
          setNodes([...layoutedNodes]);
          setEdges([...layoutedEdges]);
        },
        [nodes, edges]
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
                data: {label: `${type}`},
                style: {
                    background: `${backgroundColour}`,
                    fontSize: "20px",
                    width: "200px",
                    boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
                    border: "0px",
                    borderRadius: "10px",
                },
            };

            setNodes((nds) => nds.concat(newNode));

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
                onLayout={onLayout}
                onDrop={onDrop}
                onDragOver={onDragOver}
                defaultViewport={defaultViewport}
                onNodeClick={onSelectNode}
                fitView
            >
              <div className="contButton">
                  <button type="button"  onClick={() => onLayout('TB')}>vertical layout</button>
                  <button type="button"  onClick={() => onLayout('LR')}>horizontal layout</button>
              </div>
              <Controls/>
              <Background />
            </ReactFlow>

        </div>
    );
}

export default NodeScreen;
