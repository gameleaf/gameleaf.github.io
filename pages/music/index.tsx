import React, { useState, useEffect } from "react";
import * as Tone from "tone";

let synth = null;

function Page() {

    useEffect(() => {
        synth = new Tone.Synth().toMaster();
    }, []);

    const [count, setCount] = useState(0);

    function onButtonClick() {
        setCount(count + 1);
        synth.triggerAttackRelease("C4", "8n");
        console.log("Click");
    }

    return (
        <div>
            🌱You clicked {count} times.
            <br />
            <br />
            <button onClick={onButtonClick}>Increment the Count</button>
        </div>
    );
}

export default Page;
