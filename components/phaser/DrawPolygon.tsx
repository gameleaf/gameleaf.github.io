import React, { useEffect } from "react";
import Phaser from "phaser";

function preload() {
    console.log("PRELOAD");
}

function create() {
    let data = [
        [0, 30], // top left corner of the arrow
        [80, 30],
        [80, 0], // top of the arrow head
        [120, 50], // tip of the arrow
        [80, 100], // bottom of the arrow head
        [80, 70],
        [0, 70], // bottom left corner of the arrow
    ];
    let p1 = this.add.polygon(500, 500, data, 0xffffff, 0.5);
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
        game.scene.scen;
    }, []);

    useEffect(() => {
        console.log("useEffect");
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
