/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im = 'images/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [
            js + "jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SpinningRecord',
                            symbolName: 'SpinningRecord',
                            type: 'rect',
                            rect: ['18px', '116px', '531', '531', 'auto', 'auto']
                        },
                        {
                            id: 'i-aint-no-joke',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "i-aint-no-joke.mp3", aud + "i-aint-no-joke.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'toneArm',
                            symbolName: 'toneArm',
                            type: 'rect',
                            rect: ['329px', '68px', '536', '585', 'auto', 'auto']
                        },
                        {
                            id: 'downontheground',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "downontheground.mp3", aud + "downontheground.ogg"],
                            preload: 'metadata'
                        },
                        {
                            id: 'bangbang',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "bangbang.mp3", aud + "bangbang.ogg"],
                            preload: 'metadata'
                        },
                        {
                            id: 'hotmusic',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "hotmusic.mp3", aud + "hotmusic.ogg"],
                            preload: 'metadata'
                        },
                        {
                            id: 'raw',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "raw.mp3", aud + "raw.ogg"],
                            preload: 'metadata'
                        },
                        {
                            id: 'speaker-on-off',
                            symbolName: 'speaker-on-off',
                            type: 'rect',
                            rect: ['589px', '550px', '91', '91', 'auto', 'auto']
                        },
                        {
                            id: 'planetrock',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "planetrock.mp3", aud + "planetrock.ogg"],
                            preload: 'metadata'
                        },
                        {
                            id: 'iknowyougotsoul',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud + "iknowyougotsoul.mp3", aud + "iknowyougotsoul.ogg"],
                            preload: 'metadata'
                        },
                        {
                            id: 'clickme',
                            symbolName: 'clickme',
                            type: 'rect',
                            rect: ['435px', '505px', '119', '50', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['51', '49px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '680px', '653px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12458",
                            "top",
                            0,
                            0,
                            "linear",
                            "${speaker-on-off}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid12335",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '653px',
                            '653px'
                        ],
                        [
                            "eid10502",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${clickme}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid11420",
                            "left",
                            0,
                            0,
                            "linear",
                            "${toneArm}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid5691",
                            "top",
                            8200,
                            0,
                            "linear",
                            "${SpinningRecord}",
                            '116px',
                            '116px'
                        ],
                        [
                            "eid10992",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${clickme}",
                            '505px',
                            '505px'
                        ],
                        [
                            "eid5690",
                            "left",
                            8200,
                            0,
                            "linear",
                            "${SpinningRecord}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid12437",
                            "left",
                            0,
                            0,
                            "linear",
                            "${speaker-on-off}",
                            '589px',
                            '589px'
                        ],
                        [
                            "eid11421",
                            "top",
                            0,
                            0,
                            "linear",
                            "${toneArm}",
                            '68px',
                            '68px'
                        ]
                    ]
                }
            },
            "SpinningRecord": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'recordCopy',
                            rect: ['0px', '0px', '531', '531', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/record.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '531px', '531px']
                        }
                    }
                },
                timeline: {
                    duration: 3200,
                    autoPlay: true,
                    data: [
                        [
                            "eid626",
                            "rotateZ",
                            0,
                            400,
                            "linear",
                            "${recordCopy}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid627",
                            "rotateZ",
                            400,
                            400,
                            "linear",
                            "${recordCopy}",
                            '45deg',
                            '90deg'
                        ],
                        [
                            "eid628",
                            "rotateZ",
                            800,
                            400,
                            "linear",
                            "${recordCopy}",
                            '90deg',
                            '135deg'
                        ],
                        [
                            "eid629",
                            "rotateZ",
                            1200,
                            400,
                            "linear",
                            "${recordCopy}",
                            '135deg',
                            '180deg'
                        ],
                        [
                            "eid630",
                            "rotateZ",
                            1600,
                            400,
                            "linear",
                            "${recordCopy}",
                            '180deg',
                            '225deg'
                        ],
                        [
                            "eid631",
                            "rotateZ",
                            2000,
                            400,
                            "linear",
                            "${recordCopy}",
                            '225deg',
                            '270deg'
                        ],
                        [
                            "eid632",
                            "rotateZ",
                            2400,
                            400,
                            "linear",
                            "${recordCopy}",
                            '270deg',
                            '315deg'
                        ],
                        [
                            "eid633",
                            "rotateZ",
                            2800,
                            400,
                            "linear",
                            "${recordCopy}",
                            '315deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "toneArm": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['-48px', '1px', '376px', '473px', 'auto', 'auto'],
                            id: 'turntableArm',
                            transform: [[], ['-17'], [0, 0, 0], [1, 1, 1]],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'photos/turntableArm.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '536px', '585px']
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: true,
                    labels: {
                        "track1": 2000,
                        "track2": 4000,
                        "track3": 6000,
                        "track4": 8000,
                        "track5": 10000,
                        "track6": 12000,
                        "track7": 14003,
                        "track0": 16000
                    },
                    data: [
                        [
                            "eid5701",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-33deg',
                            '-23deg'
                        ],
                        [
                            "eid5827",
                            "rotateZ",
                            2000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-23deg',
                            '-22deg'
                        ],
                        [
                            "eid5788",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-22deg',
                            '-20deg'
                        ],
                        [
                            "eid7134",
                            "rotateZ",
                            6000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-20deg',
                            '-17deg'
                        ],
                        [
                            "eid7138",
                            "rotateZ",
                            8000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-17deg',
                            '-12deg'
                        ],
                        [
                            "eid7140",
                            "rotateZ",
                            10000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-12deg',
                            '-8deg'
                        ],
                        [
                            "eid7142",
                            "rotateZ",
                            12000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-8deg',
                            '-5deg'
                        ],
                        [
                            "eid7144",
                            "rotateZ",
                            14000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-5deg',
                            '-2deg'
                        ],
                        [
                            "eid7172",
                            "rotateZ",
                            16000,
                            1000,
                            "linear",
                            "${turntableArm}",
                            '-2deg',
                            '-23deg'
                        ],
                        [
                            "eid5709",
                            "left",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            '-48px',
                            '-48px'
                        ],
                        [
                            "eid5710",
                            "top",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid5708",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            [76, 21],
                            [76, 21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12469",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            [76, 21],
                            [76, 21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12470",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            [76, 21],
                            [76, 21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12471",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            [76, 21],
                            [76, 21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12472",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            [76, 21],
                            [76, 21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12473",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${turntableArm}",
                            [76, 21],
                            [76, 21],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "speaker_playpause": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            type: 'image',
                            display: 'block',
                            id: 'speaker_mute',
                            opacity: '0.21709857723577',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'photos/speakericon.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            id: 'speaker_on',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'photos/speakericon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "play": 2000,
                        "pause": 3000
                    },
                    data: [
                        [
                            "eid8605",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${speaker_on}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid6665",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '0.21709857723577',
                            '0.21709857723577'
                        ],
                        [
                            "eid6827",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid6826",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${speaker_on}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid6828",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid8608",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8609",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid6663",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6667",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6825",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${speaker_on}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid6664",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${speaker_on}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6666",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${speaker_on}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8604",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${speaker_on}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8606",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8607",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${speaker_mute}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "clickme": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'click1',
                            display: 'block',
                            rect: ['49px', '-22px', '50px', '119px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/click1.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'click22',
                            display: 'none',
                            rect: ['48px', '-22px', '50px', '119px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/click2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'click3',
                            rect: ['48px', '-22px', '50px', '119px', 'auto', 'auto'],
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/click3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '280px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid10600",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10604",
                            "display",
                            250,
                            0,
                            "linear",
                            "${click1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10660",
                            "display",
                            500,
                            0,
                            "linear",
                            "${click1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10851",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${click1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10852",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${click1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10666",
                            "top",
                            0,
                            0,
                            "linear",
                            "${click22}",
                            '-22px',
                            '-22px'
                        ],
                        [
                            "eid10509",
                            "left",
                            0,
                            250,
                            "linear",
                            "${click1}",
                            '161px',
                            '49px'
                        ],
                        [
                            "eid10850",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${click1}",
                            '161px',
                            '49px'
                        ],
                        [
                            "eid10664",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10601",
                            "display",
                            250,
                            0,
                            "linear",
                            "${click22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10603",
                            "display",
                            500,
                            0,
                            "linear",
                            "${click22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10853",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${click22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10856",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${click22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10878",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${click22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10665",
                            "top",
                            0,
                            0,
                            "linear",
                            "${click3}",
                            '-22px',
                            '-22px'
                        ],
                        [
                            "eid10662",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10602",
                            "display",
                            500,
                            0,
                            "linear",
                            "${click3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10854",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${click3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10877",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${click3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10914",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${click3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "red-button": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['-21px', '-21px', '110px', '110px', 'auto', 'auto'],
                            id: 'redbutton',
                            opacity: '0.50215955284553',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/redbutton.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '67px', '67px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid11522",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${redbutton}",
                            '110px',
                            '105px'
                        ],
                        [
                            "eid11524",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${redbutton}",
                            '-21px',
                            '-15px'
                        ],
                        [
                            "eid11481",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${redbutton}",
                            '0.5021600127220154',
                            '1'
                        ],
                        [
                            "eid11535",
                            "top",
                            0,
                            0,
                            "linear",
                            "${redbutton}",
                            '-21px',
                            '-21px'
                        ],
                        [
                            "eid11523",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${redbutton}",
                            '110px',
                            '105px'
                        ]
                    ]
                }
            },
            "redbutton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['3px', '0px', '143px', '143px', 'auto', 'auto'],
                            id: 'redbutton2',
                            opacity: '0.49936483739837',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/redbutton.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid11564",
                            "height",
                            0,
                            0,
                            "linear",
                            "${redbutton2}",
                            '143px',
                            '143px'
                        ],
                        [
                            "eid11566",
                            "top",
                            0,
                            0,
                            "linear",
                            "${redbutton2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11565",
                            "width",
                            0,
                            0,
                            "linear",
                            "${redbutton2}",
                            '143px',
                            '143px'
                        ],
                        [
                            "eid11616",
                            "left",
                            0,
                            0,
                            "linear",
                            "${redbutton2}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid11617",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${redbutton2}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid11569",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${redbutton2}",
                            '0.4993650019168854',
                            '1'
                        ]
                    ]
                }
            },
            "speaker-on-off": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '91px', '91px', 'auto', 'auto'],
                            id: 'Speaker_Off_Icon',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Speaker_Off_Icon.gif', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '91px', '91px', 'auto', 'auto'],
                            id: 'Speaker_On_Icon',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Speaker_On_Icon.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "play": 1000,
                        "pause": 2000
                    },
                    data: [
                        [
                            "eid11992",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Speaker_On_Icon}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid11991",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Speaker_On_Icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11994",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Speaker_On_Icon}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid11997",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Speaker_On_Icon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid11995",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Speaker_On_Icon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11998",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Speaker_Off_Icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11996",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Speaker_Off_Icon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11987",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Speaker_Off_Icon}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid11989",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Speaker_Off_Icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11988",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Speaker_Off_Icon}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid11993",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Speaker_On_Icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11990",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Speaker_Off_Icon}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("wtbd_edgeActions.js");
})("EDGE-331929546");
