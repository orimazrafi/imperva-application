import React from 'react'

export const accordionList = [
    {
        headline: <div>WAF</div>,
        subText: [
            "Dashboards",
            "Websites",
            "Policies"
        ]
    }
    , {
        headline: <div>Websites DDos</div>,
        subText: [

        ]
    }
    , {
        headline: <div>Bot Management</div>,
        subText: [

        ]
    }
    , {
        headline: <div style={{ display: "flex", flexGrow: "1" }}>
            <div>
                RASP
            </div>
            <div className="btn_new" >
                New
            </div>

        </div>,
        subText: [

        ]
    }];
export const timeframeChartConfig = {
    chart: {
        type: "areaspline",
        zoomType: "x",
        width: 1100,
        height: 120
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Timeframe (req/sec total)",
        align: "left",
        style: {
            color: 'var(--links-color)',

            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
};
export const trafficCharts = [{
    chart: {
        type: "line",
        zoomType: "x",
        width: 400,
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Req/Sec",
        align: "left",
        style: {
            color: 'var(--links-color)',

            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
},
{
    chart: {
        type: "column",
        zoomType: "x",
        width: 400,
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Bit/Sec",
        align: "left",
        style: {
            color: 'var(--links-color)',

            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
},
{
    chart: {
        type: "areaspline",
        zoomType: "x",
        width: 400,
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Response Time",
        align: "left",
        style: {
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
}
]
export const dataCharts = [{
    chart: {
        type: "line",
        zoomType: "x",
        width: 300,
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Req/Sec",
        align: "left",
        style: {
            color: 'var(--links-color)',

            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
},
{
    chart: {
        type: "column",
        zoomType: "x",
        width: 300,
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Bit/Sec",
        align: "left",
        style: {
            color: 'var(--links-color)',

            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
},
{
    chart: {
        type: "areaspline",
        zoomType: "x",
        width: 600,
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: "Response Time",
        align: "left",
        style: {
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }

    },
    yAxis: { title: { text: "" } },
    xAxis: {
        title: { text: "" },
    },
    series: [{
        data: [
            { name: "13.50", x: 13.5, y: 0.2 },
            { name: "13.51", x: 13.51, y: 0.32 },
            { x: 13.52, y: 0.72 },
            { x: 13.53, y: 0.02 },
            { x: 13.54, y: 0.22 },
            { x: 13.55, y: 0.25 },
            { x: 13.56, y: 0.52 },
            { x: 13.57, y: 0.52 },
            { x: 13.58, y: 0.627 },
            { x: 13.59, y: 0.27 },
            { x: 14.00, y: 0.72 },
            { name: "now", x: 14.02, y: 0.27 },
        ]
    }]
}
]