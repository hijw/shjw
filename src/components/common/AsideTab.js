import React from 'react';
import layer_icon from "../../img/layer_icon.png";
import info_icon from "../../img/info_icon.png";
import abstract_icon from "../../img/abstract_icon.png";
import code_icon from "../../img/code_icon.png";
import "../../styles/common/AsideTab.css";
import {NavLink} from "react-router-dom";

function AsideTab({children}) {

    const tabList = [
        {
            path: "/layer",
            image: layer_icon,
            alt: "layer icon"
        },
        {
            path: "/info",
            image: info_icon,
            alt: "info icon"
        },
        {
            path: "/abstract",
            image: abstract_icon,
            alt: "abstract_icon"
        },
        {
            path: "/code",
            image: code_icon,
            alt: "code icon"
        },
    ];

    return (
        <aside>
            <div className="aside tab">
                {/* 아이콘 이미지 넣기 */}
                {
                    tabList.map((tab) => (
                        <NavLink to={tab.path} className={({isActive}) => isActive ? "selected" : ""}>
                            <img className="tab_image" src={tab.image} alt={tab.alt}/>
                        </NavLink>
                    ))
                }
            </div>
            <div className="aside main">
                {children}
            </div>
        </aside>
    );
}


export default AsideTab;
