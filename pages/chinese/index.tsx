import React, { useState, useEffect } from "react";
import Head from "next/head";

import theme from "../../styles/theme";
import { ChineseFonts } from "../../styles/chinese/ChineseFonts";
import { WordDB } from "../../data/WordDB";

function Page() {
    let keysPressed = new Set();
    let words = new Array();

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    // key     = 3,      Meta
    // keyCode = 51,     91
    // code    = Digit3, MetaLeft
    function downHandler(e) {
        keysPressed.add(e.code);
        setKeysPressedString([...keysPressed].join(",")); // Spread Operator!
    }

    function upHandler(e) {
        keysPressed.delete(e.code);
        setKeysPressedString([...keysPressed].join(",")); // Spread Operator!
    }

    // Array of keys pressed
    const [keysPressedString, setKeysPressedString] = useState("");

    return (
        <>
            <Head>
                <script src="/s/j/load-font-sans.js"></script>
            </Head>
            <div className="grid">
                <div className="item">
                    <div className="text">年</div>
                </div>
                <div className="item">
                    <div className="text">天</div>
                </div>
                <div className="item">
                    <div className="text">上</div>
                </div>
                <div className="item">
                    <div className="text">女</div>
                </div>
                <div className="item">
                    <div className="text">🐟</div>
                </div>
                <div className="item">
                    <div className="text">小</div>
                </div>
                <div className="item">
                    <div className="text">大</div>
                </div>
                <div className="item">
                    <div className="text">鱼</div>
                </div>
                <div className="item">
                    <div className="text">有</div>
                </div>
            </div>
            <div className="keys-pressed">Keys Pressed: [{keysPressedString}]</div>
            <style jsx>{`
                .grid {
                    display: grid;
                    width: 100vmin;
                    height: 100vmin;
                    background: red;
                    margin: 0 auto;
                    grid-gap: 5%;
                    gap: 5%;
                    grid-template-areas:
                        "a b c"
                        "d e f"
                        "g h i";
                }

                .item {
                    background: rgba(0, 0, 0, 0.07);
                    /* The next two lines make sure the .item is square. */
                    padding-top: 100%;
                    position: relative;
                }

                .text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    ${ChineseFonts.getCSSForSans()}
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
            `}</style>
        </>
    );
}

export default Page;
