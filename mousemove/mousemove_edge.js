/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['rammetto-one, sans-serif']='<script src=\"http://use.edgefonts.net/rammetto-one:n4:all.js\"></script>';

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
    scaleToFit: "height",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'IMG_3516',
                type: 'image',
                rect: ['-202px', '0px','140.3%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_3516.jpg",'0px','0px']
            },
            {
                id: 'logo',
                type: 'rect',
                rect: ['128', '138','auto','auto','auto', 'auto']
            },
            {
                id: 'bottomText',
                type: 'rect',
                rect: ['50', '240','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'bottomText',
                symbolName: 'bottomText'
            },
            {
                id: 'logo',
                symbolName: 'logo'
            }
            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '78px'],
                ["style", "letter-spacing", '0px'],
                ["style", "left", '331px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '401px'],
                ["style", "width", '707px']
            ],
            "${_bottomText}": [
                ["style", "left", '446px'],
                ["style", "top", '195px']
            ],
            "${_IMG_3516}": [
                ["style", "height", '100%'],
                ["style", "top", '0px'],
                ["style", "left", '-27px'],
                ["style", "width", '140.33%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid110", tween: [ "style", "${_logo}", "top", '140px', { fromValue: '78px'}], position: 0, duration: 15000 },
                { id: "eid108", tween: [ "style", "${_logo}", "letter-spacing", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_IMG_3516}", "left", '-202px', { fromValue: '-27px'}], position: 0, duration: 15000 },
                { id: "eid98", tween: [ "style", "${_bottomText}", "left", '240px', { fromValue: '446px'}], position: 0, duration: 15000 },
                { id: "eid50", tween: [ "style", "${_logo}", "left", '27px', { fromValue: '331px'}], position: 0, duration: 15000 },
                { id: "eid99", tween: [ "style", "${_bottomText}", "top", '300px', { fromValue: '195px'}], position: 0, duration: 15000 }            ]
        }
    }
},
"logo": {
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
                    boxShadow: ['', -2, -5, 3, 0, 'rgba(255,255,255,0.99)'],
                    rect: ['0px', '0px', '99.9%', '99.5%', 'auto', 'auto'],
                    borderRadius: ['0px', '55px 55px', '0px', '55px 55px'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'RoundRect',
                    opacity: 0.7008547008547,
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [270, [['rgba(97,0,247,1.00)', 0], ['rgba(0,0,0,1.00)', 100]]]]
                },
                {
                    rect: ['23px', '5px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['rammetto-one, sans-serif', 16, 'rgba(255,255,255,0.65)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'www.S2KDesign.com',
                    textShadow: ['rgba(0,0,0,0.80)', 3, 3, 3],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.99)'],
                ["gradient", "background-image", [270,[['rgba(97,0,247,1.00)',0],['rgba(0,0,0,1.00)',100]]]],
                ["style", "border-top-right-radius", [55,55], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '99.9%'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [55,55], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.7008547008547'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '99.5%'],
                ["subproperty", "boxShadow.offsetV", '-5px'],
                ["subproperty", "boxShadow.offsetH", '-2px'],
                ["style", "left", '0px']
            ],
            "${_Text}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,0.65)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '23px'],
                ["style", "font-size", '16px'],
                ["style", "top", '5px'],
                ["style", "font-family", 'rammetto-one, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)']
            ],
            "${symbolSelector}": [
                ["style", "height", '38px'],
                ["style", "width", '253px']
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
"bottomText": {
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
                    rect: ['546px', '25px', '100%', '203.5%', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)', [270, [['rgba(0,0,0,1.00)', 0], ['rgba(81,0,163,1.00)', 100]]]]
                },
                {
                    rect: ['271px', '30px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'center',
                    font: ['rammetto-one, sans-serif', 16, 'rgba(255,255,255,0.651)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Mouse Move <br>Event',
                    textShadow: ['rgba(0,0,0,0)', 0, 0, 0],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '57px'],
                ["style", "width", '225px']
            ],
            "${_Text2}": [
                ["style", "top", '2px'],
                ["style", "text-align", 'center'],
                ["style", "left", '50px'],
                ["style", "font-size", '16px']
            ],
            "${_RoundRect2}": [
                ["style", "border-top-left-radius", [218,218], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [218,218], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [270,[['rgba(0,0,0,1.00)',0],['rgba(81,0,163,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", '0px'],
                ["style", "opacity", '0.62393164634705'],
                ["subproperty", "boxShadow.offsetV", '-8px'],
                ["style", "height", '100.6%'],
                ["subproperty", "boxShadow.spread", '-1px'],
                ["subproperty", "boxShadow.offsetH", '-5px'],
                ["subproperty", "boxShadow.color", 'rgba(251,251,251,0.65)']
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
})(jQuery, AdobeEdge, "EDGE-19727300");
