import React, { useState } from "react";

function Page() {
    return (
        <>
            <div className="grid">
                <div className="item">
                    <div className="text">Item 1</div>
                </div>
                <div className="item">
                    <div className="text">Item 2</div>
                </div>
                <div className="item">
                    <div className="text">Item 3</div>
                </div>
                <div className="item">
                    <div className="text">Item 4</div>
                </div>
                <div className="item">
                    <div className="text">Item 5</div>
                </div>
                <div className="item">
                    <div className="text">Item 6</div>
                </div>
                <div className="item">
                    <div className="text">Item 7</div>
                </div>
                <div className="item">
                    <div className="text">Item 8</div>
                </div>
                <div className="item">
                    <div className="text">Item 9</div>
                </div>
            </div>
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            `}</style>
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
                    padding-top: 100%;
                    position: relative;
                }

                .text {
                    border: 1px solid green;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
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
