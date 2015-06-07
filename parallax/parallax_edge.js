/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['chewy, sans-serif']='<script src=\"http://use.edgefonts.net/chewy:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'pageTwoBack',
                type: 'image',
                rect: ['0', '2650px','1956px','1780px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"big_04358e8b69017aebe68c60ff91c5ae6fa7e226a3.png",'0px','0px']
            },
            {
                id: 'pageOneBack',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['552px', '6738px','auto','auto','auto', 'auto'],
                opacity: 0.4390243902439,
                text: "something<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 159, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'down',
                type: 'image',
                rect: ['888px', '894px','200px','200px','auto', 'auto'],
                clip: ['rect(0px 200px 200px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"down.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['476px', '2046px','auto','auto','auto', 'auto'],
                text: "If you want to see cool parallax effect<br> Keep scroling",
                align: "center",
                font: ['chewy, sans-serif', [993.75, "%"], "rgba(0,0,0,1)", "400", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '2655px','1956px','87px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)",[270,[['rgba(163,145,128,1.00)',0],['rgba(64,64,64,1.00)',89],['rgba(64,64,64,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'paralax',
                type: 'rect',
                rect: ['250', '945','auto','auto','auto', 'auto']
            },
            {
                id: 'paralaxCopy',
                type: 'rect',
                rect: ['1213px', '945','auto','auto','auto', 'auto']
            },
            {
                id: 'fire',
                type: 'image',
                rect: ['218px', '2580px','160px','257px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fire.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'people1',
                type: 'image',
                rect: ['935px', '2758px','124px','390px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"people1.png",'0px','0px','99.6%','99.6%'],
                filter: [0, 0, 1.07, 1, 0, 0, 0, 50, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['129px', '2580px','44px','263px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'people2',
                type: 'image',
                rect: ['2046px', '2690px','63px','286px','auto', 'auto'],
                opacity: 0.5042735042735,
                fill: ["rgba(0,0,0,0)",im+"people2.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'people3',
                type: 'image',
                rect: ['2119px', '2976px','118px','412px','auto', 'auto'],
                opacity: 0.71794871794872,
                fill: ["rgba(0,0,0,0)",im+"people3.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['1505px', '2880px','22px','232px','auto', 'auto'],
                fill: ["rgba(64,64,64,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'people4',
                type: 'image',
                rect: ['2005px', '3100px','324px','532px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"people4.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'element',
                type: 'image',
                rect: ['1794px', '2969px','43px','382px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"element.jpg",'0px','0px']
            },
            {
                id: 'hd-wallpaper-paradise-beach',
                type: 'image',
                rect: ['0', '3600','98.5%','16.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hd-wallpaper-paradise-beach.jpg",'0px','0px']
            },
            {
                id: 'one_direction',
                type: 'image',
                rect: ['196px', '5793px','351px','263px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"one_direction.png",'0px','0px'],
                transform: [[],[],['0','-3']]
            },
            {
                id: 'minion_png_by_justelaine-d6cno1z',
                type: 'image',
                rect: ['1966px', '5632px','221px','221px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"minion_png_by_justelaine-d6cno1z.png",'0px','0px']
            },
            {
                id: 'fire_explosion_rock_79172',
                type: 'image',
                rect: ['227px', '5622px','320px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fire_explosion_rock_7917.png",'0px','0px']
            },
            {
                id: 'bazuka',
                type: 'image',
                rect: ['1213px', '5593px','177px','167px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bazuka.png",'0%','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'rocket_point',
                type: 'image',
                rect: ['1163px', '4768px','249px','153px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rocket_point.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'chair',
                type: 'image',
                rect: ['1301px', '5272px','598px','858px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"chair.png",'0px','0px']
            },
            {
                id: 'minionRocket',
                type: 'image',
                rect: ['-314px', '4810px','236px','277px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"minionRocket.png",'0px','0px']
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['0px', '4374px','1950px','87px','auto', 'auto'],
                fill: ["rgba(39,39,39,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'cloudText',
                type: 'rect',
                rect: ['79', '4379','auto','auto','auto', 'auto']
            },
            {
                id: 'stupidyti',
                type: 'rect',
                rect: ['1372', '4379','auto','auto','auto', 'auto']
            },
            {
                id: 'destroy',
                type: 'rect',
                rect: ['1075', '4379','auto','auto','auto', 'auto']
            },
            {
                id: 'minions',
                type: 'rect',
                rect: ['745', '4379','auto','auto','auto', 'auto']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['771px', '6210px','21.2%','2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px'],
                filter: [0, 0, 1.0666666666667, 1, 0, 0, 0, 0, "rgba(147,147,147,1.00)", 3, 12, 5]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['776px', '6356px','auto','auto','auto', 'auto'],
                text: "Copyright © www.s2kdesign.com 2015",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['0px', '6097px','1956px','51px','auto', 'auto'],
                fill: ["rgba(242,233,216,1)",[270,[['rgba(189,201,252,1.00)',0],['rgba(0,127,255,1.00)',51],['rgba(255,255,255,1.00)',100]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['640px', '6100px','95px','24px','auto', 'auto'],
                text: "THE END",
                align: "left",
                font: ['chewy, sans-serif', 24, "rgba(255,255,255,1.00)", "900", "none", "normal"],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(255,255,255,0.27)", 5, 1, 0],
                transform: [[],[],[],['1.69','1.69']]
            },
            {
                id: 'Text5Copy',
                type: 'text',
                rect: ['1218px', '6100px','95px','24px','auto', 'auto'],
                text: "THE END",
                align: "left",
                font: ['chewy, sans-serif', 24, "rgba(255,255,255,1.00)", "900", "none", "normal"],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(255,255,255,0.27)", 5, 1, 0],
                transform: [[],[],[],['1.69','1.69']]
            }],
            symbolInstances: [
            {
                id: 'cloudText',
                symbolName: 'cloudText',
                autoPlay: {

                }
            },
            {
                id: 'paralax',
                symbolName: 'paralax'
            },
            {
                id: 'paralaxCopy',
                symbolName: 'paralax'
            },
            {
                id: 'destroy',
                symbolName: 'destroy',
                autoPlay: {

                }
            },
            {
                id: 'minions',
                symbolName: 'minions',
                autoPlay: {

                }
            },
            {
                id: 'pageOneBack',
                symbolName: 'pageOneBack',
                autoPlay: {

                }
            },
            {
                id: 'stupidyti',
                symbolName: 'stupidyti',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bazuka}": [
                ["style", "top", '5593px'],
                ["style", "left", '1213px'],
                ["style", "height", '167px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@px'} ],
                ["style", "width", '177px']
            ],
            "${_minionRocket}": [
                ["style", "top", '4810px'],
                ["style", "height", '277px'],
                ["style", "left", '-314px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Text2}": [
                ["style", "top", '6738px'],
                ["style", "opacity", '0.4390243887901306'],
                ["style", "left", '552px']
            ],
            "${_people1}": [
                ["style", "top", '3588px'],
                ["style", "background-size", [99.6,99.6], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["subproperty", "filter.contrast", '1.07'],
                ["subproperty", "filter.blur", '50px'],
                ["style", "height", '277px'],
                ["style", "opacity", '1'],
                ["style", "left", '935px'],
                ["style", "width", '95px']
            ],
            "${_people3}": [
                ["style", "top", '3806px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '412px'],
                ["style", "opacity", '0.71794871794872'],
                ["style", "left", '2119px'],
                ["style", "width", '118px']
            ],
            "${_Text4}": [
                ["style", "top", '6719px'],
                ["style", "opacity", '0'],
                ["style", "left", '768px']
            ],
            "${_logo}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(147,147,147,1.00)'],
                ["subproperty", "filter.contrast", '1.0666666666667'],
                ["style", "opacity", '0'],
                ["style", "left", '771px'],
                ["style", "width", '21.24%'],
                ["style", "top", '6498px'],
                ["style", "height", '2.03%'],
                ["subproperty", "filter.drop-shadow.blur", '5px'],
                ["subproperty", "filter.drop-shadow.offsetV", '12px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px']
            ],
            "${_hd-wallpaper-paradise-beach}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '26.83%'],
                ["style", "top", '4413px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100.31%']
            ],
            "${_pageTwoBack}": [
                ["style", "height", '1780px'],
                ["style", "top", '2650px'],
                ["style", "width", '1956px']
            ],
            "${_minions}": [
                ["style", "left", '639px']
            ],
            "${_pageOneBack}": [
                ["transform", "scaleY", '1.32333'],
                ["style", "top", '194px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '3710px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '232px'],
                ["color", "background-color", 'rgba(30,30,30,1.00)']
            ],
            "${_one_direction}": [
                ["style", "top", '5793px'],
                ["transform", "skewY", '-3deg'],
                ["style", "height", '263px'],
                ["style", "opacity", '1'],
                ["style", "left", '196px'],
                ["style", "width", '351px']
            ],
            "${_down}": [
                ["style", "top", '894px'],
                ["style", "left", '875px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '200px'],
                ["style", "opacity", '0.47008547008547'],
                ["style", "clip", [0,200,190,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '200px']
            ],
            "${_people2}": [
                ["style", "top", '3632px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "height", '87px'],
                ["style", "opacity", '0'],
                ["style", "left", '1252px'],
                ["style", "width", '19px']
            ],
            "${_cloudText}": [
                ["style", "left", '338px']
            ],
            "${_chair}": [
                ["style", "height", '858px'],
                ["style", "top", '5272px'],
                ["style", "left", '1301px'],
                ["style", "width", '598px']
            ],
            "${_stupidyti}": [
                ["style", "left", '1266px']
            ],
            "${_Rectangle}": [
                ["style", "top", '2655px'],
                ["gradient", "background-image", [270,[['rgba(163,145,128,1.00)',0],['rgba(63,63,63,1.00)',89],['rgba(63,63,63,1.00)',100]]]],
                ["color", "background-color", 'rgba(11,4,4,1.00)'],
                ["style", "width", '1956px']
            ],
            "${_paralax}": [
                ["style", "top", '945px'],
                ["style", "opacity", '1']
            ],
            "${_destroy}": [
                ["style", "left", '969px']
            ],
            "${_paralaxCopy}": [
                ["style", "top", '945px'],
                ["style", "opacity", '1'],
                ["style", "left", '1213px']
            ],
            "${_Text5Copy}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,0.27)'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '1218px'],
                ["style", "width", '95px'],
                ["style", "top", '6100px'],
                ["transform", "scaleX", '1.69'],
                ["transform", "scaleY", '1.26'],
                ["style", "font-size", '24px'],
                ["style", "height", '24px'],
                ["style", "font-family", 'chewy, sans-serif'],
                ["subproperty", "filter.drop-shadow.offsetH", '5px'],
                ["subproperty", "filter.drop-shadow.offsetV", '1px']
            ],
            "${_rocket_point}": [
                ["transform", "rotateZ", '0deg'],
                ["style", "opacity", '1'],
                ["style", "left", '1163px'],
                ["style", "width", '146px'],
                ["style", "top", '5581px'],
                ["transform", "skewY", '0deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '65px'],
                ["subproperty", "filter.blur", '2px']
            ],
            "${_fire}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
                ["style", "left", '-252px'],
                ["style", "width", '160px'],
                ["style", "top", '3903px'],
                ["subproperty", "filter.drop-shadow.offsetV", '0px'],
                ["subproperty", "filter.saturate", '0'],
                ["style", "height", '257px'],
                ["subproperty", "filter.blur", '1px'],
                ["subproperty", "filter.drop-shadow.blur", '0px'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px']
            ],
            "${_fire_explosion_rock_79172}": [
                ["style", "top", '6002px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '95px'],
                ["style", "opacity", '0'],
                ["style", "left", '212px']
            ],
            "${_Text5}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,0.27)'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '640px'],
                ["style", "width", '95px'],
                ["style", "top", '6100px'],
                ["subproperty", "filter.drop-shadow.offsetV", '1px'],
                ["transform", "scaleY", '1.26'],
                ["subproperty", "filter.drop-shadow.offsetH", '5px'],
                ["style", "height", '24px'],
                ["style", "font-family", 'chewy, sans-serif'],
                ["style", "font-size", '24px'],
                ["transform", "scaleX", '1.69']
            ],
            "${_people4}": [
                ["style", "top", '3930px'],
                ["style", "opacity", '0'],
                ["style", "height", '532px'],
                ["subproperty", "filter.blur", '1px'],
                ["style", "left", '2005px'],
                ["style", "width", '324px']
            ],
            "${_element}": [
                ["style", "top", '3806px'],
                ["style", "left", '1795px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '3892px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '1'],
                ["style", "left", '129px'],
                ["color", "background-color", 'rgba(22,22,22,1.00)']
            ],
            "${_Text}": [
                ["subproperty", "textShadow.blur", '11px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(158,158,158,0.24)'],
                ["subproperty", "textShadow.offsetV", '130px'],
                ["style", "left", '476px'],
                ["style", "width", '1084px'],
                ["style", "top", '2046px'],
                ["style", "text-align", 'center'],
                ["style", "height", '286px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.74)'],
                ["style", "font-family", 'chewy, sans-serif'],
                ["style", "font-size", '500%']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(39,39,39,1)']
            ],
            "${_Rectangle6}": [
                ["style", "top", '6097px'],
                ["gradient", "background-image", [270,[['rgba(189,201,252,1.00)',0],['rgba(0,127,255,1.00)',51],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1950px'],
                ["style", "height", '6400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_minion_png_by_justelaine-d6cno1z}": [
                ["style", "top", '5632px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '221px'],
                ["style", "left", '1966px'],
                ["style", "width", '221px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7490,
            autoPlay: false,
            timeline: [
                { id: "eid156", tween: [ "style", "${_fire}", "left", '218px', { fromValue: '-252px'}], position: 1652, duration: 598 },
                { id: "eid198", tween: [ "style", "${_people2}", "height", '200px', { fromValue: '87px'}], position: 1807, duration: 979 },
                { id: "eid643", tween: [ "style", "${_minion_png_by_justelaine-d6cno1z}", "top", '5815px', { fromValue: '5632px'}], position: 3274, duration: 816 },
                { id: "eid199", tween: [ "style", "${_people2}", "width", '100px', { fromValue: '19px'}], position: 1807, duration: 979 },
                { id: "eid978", tween: [ "gradient", "${_Rectangle}", "background-image", [270,[['rgba(163,145,128,1.00)',0],['rgba(63,63,63,1.00)',34],['rgba(63,63,63,1.00)',100]]], { fromValue: [270,[['rgba(163,145,128,1.00)',0],['rgba(63,63,63,1.00)',89],['rgba(63,63,63,1.00)',100]]]}], position: 894, duration: 498 },
                { id: "eid144", tween: [ "style", "${_down}", "clip", [0,200,190,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,190,0]}], position: 0, duration: 0 },
                { id: "eid364", tween: [ "style", "${_rocket_point}", "width", '216px', { fromValue: '146px'}], position: 3304, duration: 633 },
                { id: "eid362", tween: [ "style", "${_rocket_point}", "width", '257px', { fromValue: '216px'}], position: 3937, duration: 153 },
                { id: "eid746", tween: [ "transform", "${_minionRocket}", "rotateZ", '37deg', { fromValue: '0deg'}], position: 3274, duration: 130 },
                { id: "eid748", tween: [ "transform", "${_minionRocket}", "rotateZ", '-31deg', { fromValue: '37deg'}], position: 3404, duration: 130 },
                { id: "eid751", tween: [ "transform", "${_minionRocket}", "rotateZ", '44deg', { fromValue: '-31deg'}], position: 3534, duration: 145 },
                { id: "eid754", tween: [ "transform", "${_minionRocket}", "rotateZ", '-24deg', { fromValue: '44deg'}], position: 3679, duration: 151 },
                { id: "eid755", tween: [ "transform", "${_minionRocket}", "rotateZ", '-18deg', { fromValue: '-24deg'}], position: 3830, duration: 276 },
                { id: "eid745", tween: [ "style", "${_minionRocket}", "top", '4951px', { fromValue: '4810px'}], position: 3274, duration: 260 },
                { id: "eid747", tween: [ "style", "${_minionRocket}", "top", '4803px', { fromValue: '4951px'}], position: 3534, duration: 145 },
                { id: "eid750", tween: [ "style", "${_minionRocket}", "top", '4958px', { fromValue: '4803px'}], position: 3679, duration: 151 },
                { id: "eid753", tween: [ "style", "${_minionRocket}", "top", '4684px', { fromValue: '4958px'}], position: 3830, duration: 276 },
                { id: "eid644", tween: [ "transform", "${_minion_png_by_justelaine-d6cno1z}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 3274, duration: 130 },
                { id: "eid645", tween: [ "transform", "${_minion_png_by_justelaine-d6cno1z}", "rotateZ", '13deg', { fromValue: '-12deg'}], position: 3404, duration: 130 },
                { id: "eid646", tween: [ "transform", "${_minion_png_by_justelaine-d6cno1z}", "rotateZ", '-18deg', { fromValue: '13deg'}], position: 3534, duration: 145 },
                { id: "eid659", tween: [ "transform", "${_minion_png_by_justelaine-d6cno1z}", "rotateZ", '23deg', { fromValue: '-18deg'}], position: 3679, duration: 151 },
                { id: "eid686", tween: [ "transform", "${_minion_png_by_justelaine-d6cno1z}", "rotateZ", '-18deg', { fromValue: '23deg'}], position: 3830, duration: 107 },
                { id: "eid687", tween: [ "transform", "${_minion_png_by_justelaine-d6cno1z}", "rotateZ", '5deg', { fromValue: '-18deg'}], position: 3937, duration: 169 },
                { id: "eid776", tween: [ "style", "${_destroy}", "left", '969px', { fromValue: '969px'}], position: 0, duration: 0 },
                { id: "eid778", tween: [ "style", "${_destroy}", "left", '2019px', { fromValue: '969px'}], position: 2714, duration: 832 },
                { id: "eid418", tween: [ "style", "${_rocket_point}", "opacity", '0', { fromValue: '1'}], position: 4074, duration: 15 },
                { id: "eid777", tween: [ "style", "${_cloudText}", "left", '338px', { fromValue: '338px'}], position: 0, duration: 0 },
                { id: "eid780", tween: [ "style", "${_cloudText}", "left", '-642px', { fromValue: '338px'}], position: 2714, duration: 832 },
                { id: "eid286", tween: [ "style", "${_people3}", "top", '3806px', { fromValue: '3806px'}], position: 0, duration: 0 },
                { id: "eid489", tween: [ "style", "${_fire_explosion_rock_79172}", "top", '5552px', { fromValue: '6002px'}], position: 4090, duration: 100 },
                { id: "eid99", tween: [ "style", "${_pageOneBack}", "top", '194px', { fromValue: '194px'}], position: 0, duration: 0 },
                { id: "eid887", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 472 },
                { id: "eid1015", tween: [ "style", "${_paralax}", "top", '1378px', { fromValue: '945px'}], position: 0, duration: 460 },
                { id: "eid104", tween: [ "style", "${_down}", "top", '-266px', { fromValue: '894px'}], position: 0, duration: 1075 },
                { id: "eid363", tween: [ "style", "${_rocket_point}", "height", '105px', { fromValue: '65px'}], position: 3304, duration: 633 },
                { id: "eid361", tween: [ "style", "${_rocket_point}", "height", '148px', { fromValue: '105px'}], position: 3937, duration: 153 },
                { id: "eid475", tween: [ "style", "${_fire_explosion_rock_79172}", "opacity", '0.92307692307692', { fromValue: '0'}], position: 4090, duration: 100 },
                { id: "eid193", tween: [ "style", "${_people4}", "opacity", '1', { fromValue: '0'}], position: 2188, duration: 441 },
                { id: "eid177", tween: [ "style", "${_people4}", "left", '578px', { fromValue: '2005px'}], position: 2188, duration: 441 },
                { id: "eid204", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid1021", tween: [ "style", "${_paralaxCopy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 460 },
                { id: "eid225", tween: [ "transform", "${_rocket_point}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 3303, duration: 133 },
                { id: "eid226", tween: [ "transform", "${_rocket_point}", "rotateZ", '47deg', { fromValue: '-23deg'}], position: 3437, duration: 200 },
                { id: "eid229", tween: [ "transform", "${_rocket_point}", "rotateZ", '-16deg', { fromValue: '47deg'}], position: 3637, duration: 300 },
                { id: "eid232", tween: [ "transform", "${_rocket_point}", "rotateZ", '-80deg', { fromValue: '-16deg'}], position: 3937, duration: 154 },
                { id: "eid176", tween: [ "subproperty", "${_people1}", "filter.blur", '4px', { fromValue: '50px'}], position: 1902, duration: 598 },
                { id: "eid171", tween: [ "style", "${_people1}", "height", '277px', { fromValue: '277px'}], position: 1902, duration: 0 },
                { id: "eid288", tween: [ "style", "${_fire}", "top", '3903px', { fromValue: '3903px'}], position: 0, duration: 0 },
                { id: "eid744", tween: [ "style", "${_minionRocket}", "left", '864px', { fromValue: '-314px'}], position: 3274, duration: 405 },
                { id: "eid749", tween: [ "style", "${_minionRocket}", "left", '1330px', { fromValue: '864px'}], position: 3679, duration: 151 },
                { id: "eid752", tween: [ "style", "${_minionRocket}", "left", '1982px', { fromValue: '1330px'}], position: 3830, duration: 276 },
                { id: "eid130", tween: [ "subproperty", "${_Text}", "textShadow.color", 'rgba(0,0,0,0.74)', { fromValue: 'rgba(0,0,0,0.74)'}], position: 0, duration: 0 },
                { id: "eid1018", tween: [ "style", "${_paralax}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 460 },
                { id: "eid290", tween: [ "style", "${_people4}", "top", '3930px', { fromValue: '3930px'}], position: 0, duration: 0 },
                { id: "eid417", tween: [ "style", "${_one_direction}", "opacity", '0', { fromValue: '1'}], position: 4075, duration: 15 },
                { id: "eid775", tween: [ "style", "${_minions}", "left", '639px', { fromValue: '639px'}], position: 0, duration: 0 },
                { id: "eid781", tween: [ "style", "${_minions}", "left", '-341px', { fromValue: '639px'}], position: 2714, duration: 832 },
                { id: "eid129", tween: [ "subproperty", "${_Text}", "textShadow.blur", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "height", '26.83%', { fromValue: '26.83%'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "transform", "${_down}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid849", tween: [ "style", "${_logo}", "top", '6153px', { fromValue: '6498px'}], position: 4000, duration: 472 },
                { id: "eid1016", tween: [ "style", "${_paralaxCopy}", "top", '1378px', { fromValue: '945px'}], position: 0, duration: 460 },
                { id: "eid488", tween: [ "style", "${_fire_explosion_rock_79172}", "height", '545px', { fromValue: '95px'}], position: 4090, duration: 100 },
                { id: "eid932", tween: [ "transform", "${_Text5Copy}", "scaleX", '4.28', { fromValue: '1.69'}], position: 4250, duration: 472 },
                { id: "eid201", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "width", '100.31%', { fromValue: '100.31%'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${_people3}", "left", '1644px', { fromValue: '2119px'}], position: 2093, duration: 664 },
                { id: "eid195", tween: [ "style", "${_people2}", "left", '1381px', { fromValue: '1252px'}], position: 1807, duration: 979 },
                { id: "eid182", tween: [ "style", "${_people2}", "opacity", '0.5', { fromValue: '0'}], position: 2273, duration: 441 },
                { id: "eid931", tween: [ "transform", "${_Text5Copy}", "scaleY", '1.26', { fromValue: '1.26'}], position: 4250, duration: 0 },
                { id: "eid929", tween: [ "transform", "${_Text5}", "scaleY", '1.26', { fromValue: '1.26'}], position: 4250, duration: 0 },
                { id: "eid291", tween: [ "style", "${_people1}", "top", '3588px', { fromValue: '3588px'}], position: 0, duration: 0 },
                { id: "eid135", tween: [ "subproperty", "${_Text}", "textShadow.offsetV", '-50px', { fromValue: '130px'}], position: 0, duration: 1075, easing: "easeInQuart" },
                { id: "eid853", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 472 },
                { id: "eid293", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "top", '4413px', { fromValue: '4413px'}], position: 0, duration: 0 },
                { id: "eid358", tween: [ "style", "${_rocket_point}", "top", '5581px', { fromValue: '5581px'}], position: 3303, duration: 0 },
                { id: "eid228", tween: [ "style", "${_rocket_point}", "top", '5246px', { fromValue: '5501px'}], position: 3637, duration: 300 },
                { id: "eid231", tween: [ "style", "${_rocket_point}", "top", '5586px', { fromValue: '5246px'}], position: 3937, duration: 154 },
                { id: "eid184", tween: [ "color", "${_Rectangle3}", "background-color", 'rgba(30,30,30,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(30,30,30,1.00)'}], position: 3095, duration: 0 },
                { id: "eid292", tween: [ "style", "${_Rectangle2}", "top", '3892px', { fromValue: '3892px'}], position: 0, duration: 0 },
                { id: "eid289", tween: [ "style", "${_Rectangle3}", "top", '3710px', { fromValue: '3710px'}], position: 0, duration: 0 },
                { id: "eid208", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid1082", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid1083", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid1084", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid1085", tween: [ "style", "${_hd-wallpaper-paradise-beach}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid134", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,0.77)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,158,158,0.24)'}], position: 0, duration: 1075 },
                { id: "eid642", tween: [ "style", "${_minion_png_by_justelaine-d6cno1z}", "left", '971px', { fromValue: '1966px'}], position: 3274, duration: 816 },
                { id: "eid768", tween: [ "color", "${_Rectangle5}", "background-color", 'rgba(21,114,218,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(39,39,39,1)'}], position: 2714, duration: 226 },
                { id: "eid774", tween: [ "style", "${_stupidyti}", "left", '1266px', { fromValue: '1266px'}], position: 0, duration: 0 },
                { id: "eid779", tween: [ "style", "${_stupidyti}", "left", '2316px', { fromValue: '1266px'}], position: 2714, duration: 832 },
                { id: "eid223", tween: [ "style", "${_rocket_point}", "left", '742px', { fromValue: '1163px'}], position: 3303, duration: 333 },
                { id: "eid227", tween: [ "style", "${_rocket_point}", "left", '398px', { fromValue: '742px'}], position: 3637, duration: 300 },
                { id: "eid230", tween: [ "style", "${_rocket_point}", "left", '290px', { fromValue: '398px'}], position: 3937, duration: 154 },
                { id: "eid850", tween: [ "style", "${_Text4}", "top", '6339px', { fromValue: '6719px'}], position: 4000, duration: 472 },
                { id: "eid19", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0.4390243887901306'}], position: 7250, duration: 240 },
                { id: "eid233", tween: [ "subproperty", "${_rocket_point}", "filter.blur", '1px', { fromValue: '2px'}], position: 3274, duration: 662 },
                { id: "eid234", tween: [ "subproperty", "${_rocket_point}", "filter.blur", '0px', { fromValue: '1px'}], position: 3937, duration: 154 },
                { id: "eid194", tween: [ "style", "${_people2}", "top", '3756px', { fromValue: '3632px'}], position: 1807, duration: 979 },
                { id: "eid159", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(22,22,22,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(22,22,22,1.00)'}], position: 1652, duration: 0 },
                { id: "eid916", tween: [ "transform", "${_Text5}", "scaleX", '4.28', { fromValue: '1.69'}], position: 4250, duration: 472 }            ]
        }
    }
},
"pageTwo": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1950px', '1200px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(113,172,128,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1200px'],
                ["style", "width", '1950px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(113,172,128,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"page3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1950px', '1200px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(116,113,172,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1200px'],
                ["style", "width", '1950px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(116,113,172,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"round": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '441px'],
                ["style", "width", '427px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3670,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"flower": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'MTLLboErc',
                    type: 'image',
                    rect: ['782px', '2769px', '1132px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MTLLboErc.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ],
            "${_MTLLboErc}": [
                ["style", "top", '2769px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '500px'],
                ["transform", "scaleX", '1.21'],
                ["style", "left", '782px'],
                ["style", "width", '372px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid66", tween: [ "transform", "${_MTLLboErc}", "scaleY", '0.98', { fromValue: '0'}], position: 3250, duration: 500 }            ]
        }
    }
},
"pageOneBack": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'pageone',
                    type: 'image',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/1802585.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pageone}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100.01%']
            ],
            "${symbolSelector}": [
                ["style", "height", '33.33%'],
                ["style", "width", '100.32%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cloudText": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'auto_xplane_cloud_a',
                    type: 'image',
                    rect: ['0px', '0px', '266px', '76px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auto_xplane_cloud_a.png', '0px', '0px']
                },
                {
                    font: ['chewy, sans-serif', 55, 'rgba(49,198,225,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'HELP',
                    align: 'left',
                    rect: ['60px', '5px', '42px', '19px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '5px'],
                ["style", "width", 'auto'],
                ["style", "height", '19px'],
                ["style", "font-style", 'normal'],
                ["color", "color", 'rgba(49,198,225,1.00)'],
                ["style", "font-family", 'chewy, sans-serif'],
                ["style", "left", '60px'],
                ["style", "font-size", '55px']
            ],
            "${_auto_xplane_cloud_a}": [
                ["style", "top", '0px'],
                ["style", "height", '76px'],
                ["style", "left", '0px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '76px'],
                ["style", "width", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"stupidyti": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'auto_xplane_rotate_a2',
                    type: 'image',
                    rect: ['0px', '0px', '266px', '76px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auto_xplane_rotate_a.png', '0px', '0px']
                },
                {
                    font: ['chewy, sans-serif', 45, 'rgba(49,198,225,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text6',
                    text: 'stupidity',
                    align: 'left',
                    rect: ['53px', '7px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_auto_xplane_rotate_a2}": [
                ["style", "top", '0px'],
                ["style", "height", '76px'],
                ["style", "left", '0px'],
                ["style", "width", '266px']
            ],
            "${_Text6}": [
                ["style", "top", '7px'],
                ["style", "left", '53px'],
                ["style", "font-size", '45px']
            ],
            "${symbolSelector}": [
                ["style", "height", '76px'],
                ["style", "width", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"minions": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'auto_xplane_cloud_a2',
                    type: 'image',
                    rect: ['0px', '0px', '266px', '76px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auto_xplane_cloud_a.png', '0px', '0px']
                },
                {
                    font: ['chewy, sans-serif', 55, 'rgba(49,198,225,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'minions',
                    align: 'left',
                    rect: ['51px', '2px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_auto_xplane_cloud_a2}": [
                ["style", "top", '0px'],
                ["style", "height", '76px'],
                ["style", "left", '0px'],
                ["style", "width", '266px']
            ],
            "${_Text5}": [
                ["style", "top", '2px'],
                ["style", "left", '51px'],
                ["style", "font-size", '55px']
            ],
            "${symbolSelector}": [
                ["style", "height", '76px'],
                ["style", "width", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"destroy": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'auto_xplane_rotate_a',
                    type: 'image',
                    rect: ['0px', '0px', '266px', '76px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auto_xplane_rotate_a.png', '0px', '0px']
                },
                {
                    font: ['chewy, sans-serif', 45, 'rgba(49,198,225,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'destroy',
                    align: 'left',
                    rect: ['72px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "top", '8px'],
                ["style", "left", '72px'],
                ["style", "font-size", '45px']
            ],
            "${_auto_xplane_rotate_a}": [
                ["style", "height", '76px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '266px']
            ],
            "${symbolSelector}": [
                ["style", "height", '76px'],
                ["style", "width", '266px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"paralax": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '506px', '108px', 'auto', 'auto'],
                    borderRadius: ['272px 272px', '272px 272px', '272px 272px', '272px 272px'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'RoundRect',
                    opacity: 0.66666667950832,
                    type: 'rect',
                    fill: ['rgba(11,4,4,1)', [270, [['rgba(209,209,209,0.00)', 0], ['rgba(3,3,3,1.00)', 42], ['rgba(23,22,22,1.00)', 60], ['rgba(67,67,67,0.00)', 100]]]]
                },
                {
                    rect: ['36px', '10px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['chewy, sans-serif', 60, 'rgba(255,255,255,0.77)', '400', 'none', 'normal'],
                    id: 'Text6',
                    text: 'Parallax scrolling',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text6}": [
                ["style", "top", '10px'],
                ["style", "left", '36px'],
                ["style", "font-size", '60px']
            ],
            "${_RoundRect}": [
                ["style", "border-top-left-radius", [272,272], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [272,272], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [270,[['rgba(209,209,209,0.00)',0],['rgba(3,3,3,1.00)',42],['rgba(23,22,22,1.00)',60],['rgba(67,67,67,0.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '506px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [272,272], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.66666667950832'],
                ["style", "height", '108px'],
                ["style", "border-top-right-radius", [272,272], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '108px'],
                ["style", "width", '506px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6624565");
