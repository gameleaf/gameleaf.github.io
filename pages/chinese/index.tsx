import React, { useState, useEffect } from "react";
import * as Tone from "tone";

function Page() {
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    function downHandler({ key }) {
        console.log(`DN [${key}]`);
        keysPressed.add(key);
        console.log(keysPressed);
    }

    function upHandler({ key }) {
        console.log(`UP [${key}]`);
        keysPressed.delete(key);
        console.log(keysPressed);
    }


    const [keysPressed, setKeysPressed] = useState(new Set());


    return (
        <>
            <div className="grid">
                <div className="item">
                    <div className="text">年 {1}</div>
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
                    <div className="text"></div>
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
                    background: rgba(0, 0, 0, 0.1);
                    /* The next two lines make sure the .item is square. */
                    padding-top: 100%;
                    position: relative;
                }

                .text {
                    border: 1px solid green;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
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
            `}</style>
        </>
    );
}

export default Page;
