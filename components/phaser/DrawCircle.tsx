import React, { useEffect } from "react";
import Phaser from "phaser";

function preload() {
    console.log("PRELOAD");
}

function create() {
    let circle = new Phaser.Geom.Circle(500, 500, 100);
    let graphics: Phaser.GameObjects.Graphics = this.add.graphics({
        lineStyle: { width: 10, color: 0x00ff00 },
        fillStyle: { color: 0xff0000 },
    });
    graphics.fillCircleShape(circle);
    graphics.strokeCircleShape(circle);
}

function update() {
    // NOTHING
}

let game = null;

export default function () {
    useEffect(() => {
        let config = {
            type: Phaser.AUTO,
            parent: "__next",
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1000,
            height: 1000,
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
            pixelArt: false,
        };
        game = new Phaser.Game(config);
    }, []);

    useEffect(() => {
        console.log("MULTIPLE TIMES");
    });

    return (
        <>
            <style jsx global>{`
                html,
                body {
                    background-color: #101010;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                }
                #__next {
                }
            `}</style>
        </>
    );
}
