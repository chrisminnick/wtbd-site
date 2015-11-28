/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

    //Edge symbol: 'stage'
    (function (symbolName) {


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function (sym, e) {
            // Play the timeline at a label or specific time. For example:
            // sym.play(500); or sym.play("myLabel");
            sym.play(0);


        });
        //Edge binding end


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8200, function (sym, e) {
            // insert code here
            // Play the timeline at a label or specific time. For example:
            // sym.play(500); or sym.play("myLabel");
            sym.play(5000);

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4930, function (sym, e) {

            // Play an audio track
            sym.$("i-aint-no-joke")[0].play();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${toneArm}", "click", function (sym, e) {


            switch (playingTrack) {

                case 0:
                    sym.getSymbol("toneArm").play("track1");
                    playingTrack = 1;
                    // Play an audio track
                    // Jump to a playback time (in seconds)
                    sym.$("i-aint-no-joke")[0].currentTime = 0;
                    sym.$("i-aint-no-joke")[0].play();


                    break;

                case 1:
                    sym.getSymbol("toneArm").play("track2");
                    playingTrack = 2;
                    sym.$("i-aint-no-joke")[0].pause();

                    // Play an audio track
                    sym.$("raw")[0].currentTime = 0;
                    sym.$("raw")[0].play();

                    break;

                case 2:
                    sym.getSymbol("toneArm").play("track3");
                    playingTrack = 3;
                    sym.$("raw")[0].pause();


                    sym.$("planetrock")[0].currentTime = 0;
                    sym.$("planetrock")[0].play();


                    break;

                case 3:
                    sym.getSymbol("toneArm").play("track4");
                    playingTrack = 4;

                    sym.$("planetrock")[0].pause();

                    sym.$("hotmusic")[0].currentTime = 0;
                    sym.$("hotmusic")[0].play();


                    break;

                case 4:
                    sym.getSymbol("toneArm").play("track5");
                    playingTrack = 5;

                    sym.$("hotmusic")[0].pause();
                    sym.$("downontheground")[0].currentTime = 0;
                    sym.$("downontheground")[0].play();


                    break;

                case 5:
                    sym.getSymbol("toneArm").play("track6");
                    playingTrack = 6;

                    sym.$("downontheground")[0].pause();

                    sym.$("bangbang")[0].currentTime = 6;
                    sym.$("bangbang")[0].play();


                    break;

                case 6:
                    sym.getSymbol("toneArm").play("track7");
                    playingTrack = 7;

                    sym.$("bangbang")[0].pause();
                    sym.$("iknowyougotsoul")[0].currentTime = 0;
                    sym.$("iknowyougotsoul")[0].play();


                    break;

                case 7:
                    sym.getSymbol("toneArm").play("track0");
                    playingTrack = 0;

                    sym.$("iknowyougotsoul")[0].pause();
                    break;
            }

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            $("#Stage").css("margin", "auto");
            playingTrack = 0;
            muted = 0;

            // Hide an element
            sym.getSymbol("clickme").$("click1").hide();
            sym.getSymbol("clickme").$("click2").hide();
            sym.getSymbol("clickme").$("click3").hide();

            sym.getSymbol("speaker_playpause").stop(2000);


        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            // insert code here


        });
        //Edge binding end


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function (sym, e) {
            // insert code here
        });
        //Edge binding end


        Symbol.bindElementAction(compId, symbolName, "${speaker-on-off}", "click", function (sym, e) {
            // insert code for mouse click here

            if (muted === 0) {
                // Mute all audio tracks in the composition. Set muted to false to toggle off
                $("audio").prop("muted", true);
                muted = 1;

                switch (playingTrack) {

                    case 1:
                        sym.$("i-aint-no-joke")[0].pause();
                        break;

                    case 2:
                        sym.$("raw")[0].pause();
                        break;

                    case 3:
                        sym.$("planetrock")[0].pause();
                        break;

                    case 4:
                        sym.$("hotmusic")[0].pause();
                        break;

                    case 5:
                        sym.$("downontheground")[0].pause();
                        break;

                    case 6:
                        sym.$("bangbang")[0].pause();
                        break;

                    case 7:
                        sym.$("iknowyougotsoul")[0].pause();
                        break;
                }


            } else {
                $("audio").prop("muted", false);
                muted = 0;

                switch (playingTrack) {

                    case 1:
                        sym.$("i-aint-no-joke")[0].play();
                        break;

                    case 2:
                        sym.$("raw")[0].play();
                        break;

                    case 3:
                        sym.$("planetrock")[0].play();
                        break;

                    case 4:
                        sym.$("hotmusic")[0].play();
                        break;

                    case 5:
                        sym.$("downontheground")[0].play();
                        break;

                    case 6:
                        sym.$("bangbang")[0].play();
                        break;

                    case 7:
                        sym.$("iknowyougotsoul")[0].play();
                        break;
                }

            }


        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'SpinningRecord'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function (sym, e) {
            // insert code here
            // Play the timeline at a label or specific time. For example:
            // sym.play(500); or sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("SpinningRecord");
    //Edge symbol end:'SpinningRecord'

    //=========================================================

    //Edge symbol: 'toneArm'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // insert code to be run when the symbol is created here

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            // insert code here

            // Show an element
            // insert code here


            sym.getComposition().getStage().getSymbol("clickme").$("click1").show();
            sym.getComposition().getStage().getSymbol("clickme").play();


            sym.stop();


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${turntableArm}", "click", function (sym, e) {
            // insert code for mouse click here


            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");


        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function (sym, e) {
            // insert code here
            sym.stop();

        });
        //Edge binding end

    })("toneArm");
    //Edge symbol end:'toneArm'

    //=========================================================

    //Edge symbol: 'speaker_playpause'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${speaker_on}", "click", function (sym, e) {
            // insert code for mouse click here
            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");
            sym.stop("pause");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${speaker_mute}", "click", function (sym, e) {
            // insert code for mouse click here
            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");
            sym.stop("play");


        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            // insert code here
        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2022, function (sym, e) {
            // insert code here
        });
        //Edge binding end

    })("speaker_playpause");
    //Edge symbol end:'speaker_playpause'

    //=========================================================

    //Edge symbol: 'Preloader'
    (function (symbolName) {

    })("Preloader");
    //Edge symbol end:'Preloader'

    //=========================================================

    //Edge symbol: 'clickme'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function (sym, e) {
            // insert code here
            sym.stop();
            this.deleteSymbol();

        });
        //Edge binding end

    })("clickme");
    //Edge symbol end:'clickme'

    //=========================================================

    //Edge symbol: 'red-button'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${redbutton}", "click", function (sym, e) {
            // insert code for mouse click here
            // Navigate to a new URL in the current window
            // (replace "_self" with appropriate target attribute)
            window.open("http://www.whenthebassdrops.com/about.html", "_self");


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${redbutton}", "mouseover", function (sym, e) {
            // insert code to be run when the mouse hovers over the object


            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");
            sym.stop(1000);


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${redbutton}", "mouseout", function (sym, e) {
            // insert code to be run when the mouse is moved off the object

            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");
            sym.stop(0);

        });
        //Edge binding end

    })("red-button");
    //Edge symbol end:'red-button'

    //=========================================================

    //Edge symbol: 'redbutton'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${redbutton2}", "mouseover", function (sym, e) {
            // insert code to be run when the mouse hovers over the object
            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");
            sym.stop(1000);


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${redbutton2}", "mouseout", function (sym, e) {
            // insert code to be run when the mouse is moved off the object
            // Go to a label or specific time and stop. For example:
            // sym.stop(500); or sym.stop("myLabel");
            sym.stop(0);


        });
        //Edge binding end

    })("redbutton");
    //Edge symbol end:'redbutton'

    //=========================================================

    //Edge symbol: 'speaker-on-off'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${Speaker_On_Icon}", "click", function (sym, e) {
            sym.stop("pause");


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Speaker_Off_Icon}", "click", function (sym, e) {
            sym.stop("play");


        });
        //Edge binding end

    })("speaker-on-off");
    //Edge symbol end:'speaker-on-off'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-331929546");