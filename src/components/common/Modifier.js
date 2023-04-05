import React from 'react';
import "../../styles/common/Modifier.css";
function Modifier({request, onChange, selectedNode}) {
    return (
        <div className="modifier_container">
            <input className="test" name="in_channels" value={request.in_channels} onChange={onChange}/>
            <input name="out_channels" value={request.out_channels} onChange={onChange}/>
            <input/>
            <span>{selectedNode.id}</span>

            <span> {selectedNode.type}</span>
        </div>
    );
}

export default Modifier;
