import React, { useState, useEffect } from "react";
import Head from "next/head";

import { theme } from "styles/theme";
import { chineseFonts } from "styles/chinese/chineseFonts";
import WordDB from "data/wordDB";
import { KeyboardHandler } from "input/KeyboardHandler";
import { TouchHandler } from "input/TouchHandler";
import { GamepadHandler } from "input/GamepadHandler";

let keyboardHandler = new KeyboardHandler();
let touchHandler = new TouchHandler();
let gamepadHandler = new GamepadHandler();

keyboardHandler.connect({
    Numpad7: () => {},
    Numpad8: () => {},
    Numpad9: () => {},
    Numpad4: () => {},
    // SKIP Numpad5
    Numpad6: () => {},
    Numpad1: () => {},
    Numpad2: () => {},
    Numpad3: () => {},
});

let words = new Array();
for (let i = 0; i < 8; i++) {
    words.push(WordDB.getRandomWord());
}

let keysPressed = new Set();

// key     = 3,      Meta
// keyCode = 51,     91
// code    = Digit3, MetaLeft
function downHandler(e) {
    keysPressed.add(e.code);
    _setKeysPressedString([...keysPressed].join(",")); // Spread Operator!

    switch (e.code) {
        case "Numpad7":
            words[0] = WordDB.getRandomWord();
            break;
        case "Numpad8":
            words[1] = WordDB.getRandomWord();
            break;
        case "Numpad9":
            words[2] = WordDB.getRandomWord();
            break;
        case "Numpad4":
            words[3] = WordDB.getRandomWord();
            break;
        case "Numpad6":
            words[4] = WordDB.getRandomWord();
            break;
        case "Numpad1":
            words[5] = WordDB.getRandomWord();
            break;
        case "Numpad2":
            words[6] = WordDB.getRandomWord();
            break;
        case "Numpad3":
            words[7] = WordDB.getRandomWord();
            break;
        default:
            console.log("Pressed " + e.code);
            break;
    }
}

function upHandler(e) {
    keysPressed.delete(e.code);
    _setKeysPressedString([...keysPressed].join(",")); // Spread Operator!
}

let _setKeysPressedString: Function;

export default () => {
    useEffect(() => {
        console.log("MOUNT");
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        // Remove event listeners on cleanup
        return () => {
            console.log("UNMOUNT");
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    const [keysPressedString, setKeysPressedString] = useState("");
    _setKeysPressedString = setKeysPressedString;

    return (
        <>
            <Head>
                <title>Chinese Pop</title>
                <meta name="description" content="GameLeaf, Inc." />
                <meta name="author" content="Ron B. Yeh" />
            </Head>
            <div className="grid">
                <div className="item">
                    <div className="text">{words[0].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">{words[1].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">{words[2].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">{words[3].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">🐟</div>
                </div>
                <div className="item">
                    <div className="text">{words[4].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">{words[5].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">{words[6].chinese}</div>
                </div>
                <div className="item">
                    <div className="text">{words[7].chinese}</div>
                </div>
            </div>
            <div className="preload">{WordDB.getAllWords_Chinese()}</div>
            <div className="keys-pressed">Keys Pressed: [{keysPressedString}]</div>
            <script src="/s/j/load-font-sans.js"></script>
            <style jsx global>{``}</style>
            <style jsx>{`
                .grid {
                    display: grid;
                    width: 100vmin;
                    height: 100vmin;
                    margin: 0 auto;
                    grid-gap: 5%;
                    gap: 5%;
                    grid-template-areas:
                        "a b c"
                        "d e f"
                        "g h i";
                    user-select: none;
                }

                .item {
                    background: rgba(0, 0, 0, 0.07);
                    /* The next two lines make sure the .item is square. */
                    padding-top: 100%;
                    position: relative;
                    cursor: pointer;
                }

                .text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    ${chineseFonts.cssForSans}
                    font-size: 20vmin;
                }

                /* This query triggers when the webpage is WIDE. */
                @media only screen and (min-width: 100vmax) {
                    .grid {
                        margin-top: 0;
                    }
                }

                /* This query triggers when the webpage is TALL. */
                @media only screen and (min-height: 100vmax) {
                    .grid {
                        margin-top: calc(50vmax - 50vmin);
                    }
                }

                .keys-pressed {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }

                .preload {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    visibility: hidden;
                }
            `}</style>
        </>
    );
};
