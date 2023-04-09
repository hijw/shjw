import React from 'react';
import "../../styles/abstract/AbstractList.css";


function AbstractList(props) {
    const onDragStart = (event, nodeType, backgroundColour) => {
        console.log(event, nodeType, backgroundColour)
        event.dataTransfer.setData(
            "application/reactflow",
            nodeType,
            backgroundColour
        );
        event.dataTransfer.setData("backgroundColour", backgroundColour);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <div className="abstract_container">
            <div className="abstract_list">
                <div className="tab_title">Abstract Network</div>
                
                <div className="groupInformation_button">
                    <div className="groupInformation_title">Auto Group</div>
                        <button type="button" className="btn2">
                            Level 1
                        </button>
                        <button type="button" className="btn2">
                            Level 2
                        </button>
                        <button type="button" className="btn2">
                            Level 3
                        </button>

                    <div className="groupInformation_title">Custom Group</div>
                        <button type="button" className="btn2">
                            Group
                        </button>
                        <button type="button" className="btn2">
                            Ungroup
                        </button>
                </div>
                <div className="groupInformation_title">Group Information</div>
                {/* Group1 토글 */}
                <Group1 onDragStart={onDragStart}/>
                {/* Group2 토글 */}
                <Group2 onDragStart={onDragStart}/>

            </div>
            <div className="layer_info">
                <div className="layer_info_title">Layer Information</div>
            </div>
        </div>
    );
}


const Group1 = ({onDragStart}) => {

    const toggleItems = [
        {
            nodeName: "Conv2d",
            nodeColor: "#F2E3DC"
        }
    ];

    return (
        <details open>
            <summary className="groupInformation_name">Group1</summary>
            {
                toggleItems.map((item, index) => (
                    <div
                        key={index}
                        className="dndnode Convolutional"
                        onDragStart={(event) => onDragStart(event, item.nodeName, item.nodeColor)}
                        draggable
                    >
                        {item.nodeName}
                    </div>
                ))
            }
        </details>
    );
};

const Group2 = ({onDragStart}) => {

    const toggleItems = [
        {
            nodeName: "MaxPool2d",
            nodeColor: "#FAF1CB"
        },
        {
            nodeName: "AvgPool2d",
            nodeColor: "#FAF1CB"
        },
        {
            nodeName: "AdaptiveAvgPool2d",
            nodeColor: "#FAF1CB"
        },
    ];

    return (
        <details open>
            <summary className="groupInformation_name">Group2</summary>
            {
                toggleItems.map((item, index) => (
                    <div
                        key={index}
                        className="dndnode Pooling"
                        onDragStart={(event) => onDragStart(event, item.nodeName, item.nodeColor)}
                        draggable
                    >
                        {item.nodeName}
                    </div>
                ))
            }
        </details>
    );
};



export default AbstractList;
