const position = { x: 0, y: 0 };

export const initialNodes = [
    {
        id: "1",
        type: "Conv2d",
        data: {label: "Con2vd"},
        position,
        style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "2",
        type: "BatchNorm2d",
        data: {label: "BatchNorm2d"},
        position,
        style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "3",
        type: "ReLU",
        data: {label: "ReLU"},
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
        id: "4",
        type: "Conv2d",
        data: {label: "Con2vd"},
        position,
        style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "5",
        type: "BatchNorm2d",
        data: {label: "BatchNorm2d"},
        position,
        style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "6",
        type: "ReLU",
        data: {label: "ReLU"},
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
        id: "8",
        type: "Conv2d",
        data: {label: "Con2vd"},
        position,
        style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "9",
        type: "BatchNorm2d",
        data: {label: "BatchNorm2d"},
        position,
        style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "10",
        type: "ReLU",
        data: {label: "ReLU"},
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
        id: "11",
        type: "Conv2d",
        data: {label: "Con2vd"},
        position,
        style: {
            background: "#f2e3dc",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "12",
        type: "BatchNorm2d",
        data: {label: "BatchNorm2d"},
        position,
        style: {
            background: "#dee8e4",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",
        },
    },
    {
        id: "13",
        type: "ReLU",
        data: {label: "ReLU"},
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
        id: "14",
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
        id: "15",
        type: "Residual",
        data: {label: "Residual"},
        position,
        className: 'res',
        style: {
            background: "rgba(255, 0, 0, 0.2)",
            fontSize: "20px",
            width: "400px",
            height: "400px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
            border: "0px",
            borderRadius: "10px",

        },
    },

    {
        id: "16",
        type: "ReLU",
        data: {label: "ReLU"},
        position,
        className: 'res',
        parentNode: '15',
        extent: 'parent',
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
        id: "17",
        type: "MaxPool2d",
        data: {label: "MaxPool2d"},
        position,
        className: 'res',
        parentNode: '15',
        extent: 'parent',
        style: {
            background: "#faf1cb",
            fontSize: "20px",
            width: "200px",
            boxShadow: "7px 7px 7px 0px rgba(0,0,0,.20)",
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
    {id: "8-9", source: "8", target: "9"},
    {id: "9-10", source: "9", target: "10"},
    {id: "10-11", source: "10", target: "11"},
    {id: "11-12", source: "11", target: "12"},
    {id: "12-13", source: "12", target: "13"},
    {id: "13-14", source: "13", target: "14"},
    {id: "14-15", source: "14", target: "15"},
    {id: "14-16", source: "14", target: "16", animated: true},
    {id: "16-17", source: "16", target: "17"},

];

