import React, {useCallback, useRef, useState} from 'react';
import ReactFlow, {addEdge, Background, ConnectionLineType, Controls, useEdgesState, useNodesState} from "reactflow";
import {initialEdges, initialNodes, nodeTypes} from "../../dummies";
import "../../styles/common/NodeScreen.css";
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const nodeWidth = 172;
const nodeHeight = 36;
const resNodeWidth= 400;
const sort = 7;

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
      if(node.className.includes("resnode")){
        if(isHorizontal){
          node.position = {
            x: nodeWithPosition.x - nodeWidth / 2 ,
            y: 50,
          }
          if(node.className.includes("+")){
            node.position = {
              x: 800,
              y: 350,
            }
          }
        } else{
          node.position = {
            x: 80,
            y: 50 + nodeWithPosition.y - nodeHeight / 2,
          }
        }
        if(node.className.includes("+")){
          node.position = {
            x: 350,
            y: 310,
          }
        }

      } else{

        if(isHorizontal){
          node.position = {
            x: nodeWithPosition.x - nodeWidth / 2 + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) / 2),
            y: nodeWithPosition.y - nodeHeight / 2 - (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth)/2),
          };
        }
        else{
          // node.position = {
          //   x: Math.floor(node.id /(sort + 1) ) * 300  + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) ),
          //   y: (node.id % sort === 0 ? sort * 100 : (node.id % sort ) * 100) - nodeHeight /2  ,
          // };
          // node.position = {
          //   x: nodeWithPosition.x - nodeWidth / 2 - (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) / 2),
          //   y: nodeWithPosition.y - nodeHeight / 2 + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth)/5),
          // };

          node.position = {
            x: nodeWithPosition.x - nodeWidth / 2 - (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) / 2),
            y: nodeWithPosition.y - nodeHeight / 2 + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth)/5),
          };

          // if( node.position.y  >= 500 ){
          //   node.position = {
          //     x: nodeWithPosition.x - nodeWidth / 2 - (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) / 2) + 300,
          //     y: nodeWithPosition.y - nodeHeight / 2 + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth)/5) - 600 ,
          //   }
          // }
          if( node.position.y  >= 500 ){
            node.position = {
              x: nodeWithPosition.x - nodeWidth / 2 - (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth) / 2) + 300,
              y: nodeWithPosition.y - nodeHeight / 2 + (node.type.includes("Residual") ? 0 : (nodeWidth - resNodeWidth)/5) - 600 ,
            }
          }
        }
        
 
      }

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
                type: "node",
                position,
                data: {label: `${type}`},
                className: "node",
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
                onNodeClick={onSelectNode}
                fitView
            >
              <div className="contButton">
                  <button type="button"  onClick={() => onLayout('TB')}>vertical layout</button>
                  <button type="button"  onClick={() => onLayout('LR')}>horizontal layout</button>
              </div>
              <Controls/>
            </ReactFlow>

        </div>
    );
}

export default NodeScreen;
