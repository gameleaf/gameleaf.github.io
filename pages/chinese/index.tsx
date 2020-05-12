import React, { useState } from "react";

function Page() {
    return (
        <>
            <div className="grid">
                <div className="item"><div className="text">Item 1</div></div>
                <div className="item"><div className="text">Item 2</div></div>
                <div className="item"><div className="text">Item 3</div></div>
                <div className="item"><div className="text">Item 4</div></div>
                <div className="item"><div className="text">Item 5</div></div>
                <div className="item"><div className="text">Item 6</div></div>
                <div className="item"><div className="text">Item 7</div></div>
                <div className="item"><div className="text">Item 8</div></div>
                <div className="item"><div className="text">Item 9</div></div>
            </div>
            <style jsx>{`
                .grid {
                    border: 1px solid red;
                    display: grid;
                    grid-gap: 5%;
                    gap: 5%;
                    grid-template-areas:
                        "a b c"
                        "d e f"
                        "g h i";
                }

                .item {
                    background: rgba(0, 0, 0, 0.1);
                    border: 1px white blue;
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
            `}</style>
        </>
    );
}

export default Page;
