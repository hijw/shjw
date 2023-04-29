const position = { x: 0, y: 0 };

export const initialNodes = [
    {
        id: "1",
        type: "Group 1",
        data: {label: "Group 1"},
        position,
        style: {
            background: "#ACBDDC",
            fontSize: "20px",
            width: "167px",
            height: "110px",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            border: "1px dashed #4E5058",
            borderRadius: "10px",
        },
    },
    {
        id: "2",
        type: "Group 1",
        data: {label: "Group 1"},
        position,
        style: {
            background: "#ACBDDC",
            fontSize: "20px",
            width: "167px",
            height: "110px",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            border: "1px dashed #4E5058",
            borderRadius: "10px",
        },
    },
    {
        id: "3",
        type: "MaxPool2d",
        data: {label: "MaxPool2d"},
        position,
        style: {
            background: "#faf1cb",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "4",
        type: "Group 1",
        data: {label: "Group 1"},
        position,
        style: {
            background: "#ACBDDC",
            fontSize: "20px",
            width: "167px",
            height: "110px",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            border: "1px dashed #4E5058",
            borderRadius: "10px",
        },
    },
    {
        id: "5",
        type: "Group 1",
        data: {label: "Group 1"},
        position,
        style: {
            background: "#ACBDDC",
            fontSize: "20px",
            width: "167px",
            height: "110px",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            border: "1px dashed #4E5058",
            borderRadius: "10px",
        },
    },
    {
        id: "6",
        type: "MaxPool2d",
        data: {label: "MaxPool2d"},
        position,
        style: {
            background: "#d9e3e8",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "7",
        type: "Group 2",
        data: {label: "Group 2"},
        position,
        style: {
            background: "#A5D5D7",
            fontSize: "20px",
            width: "167px",
            height: "110px",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            border: "1px dashed #4E5058",
            borderRadius: "10px",
        },
    },
    {
        id: "8",
        type: "Linear",
        data: {label: "Linear"},
        position,
        style: {
            background: "#F4E7D3",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.25)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    
];

export const initialEdges = [
    {id: "1-2", source: "1", target: "2"},
    {id: "2-3", source: "2", target: "3"},
    {id: "3-4", source: "3", target: "4"},
    {id: "4-5", source: "4", target: "5"},
    {id: "5-6", source: "5", target: "6"},
    {id: "6-7", source: "6", target: "7"},
    {id: "7-8", source: "7", target: "8"},

];

