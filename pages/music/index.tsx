import React, { useState } from "react";

function Page() {
    const [count, setCount] = useState(0);

    function onButtonClick() {
        setCount(count + 1);
    }

    return (
        <div>
            🌱You clicked {count} times.<br/><br/>
            <button onClick={onButtonClick}>Increment the Count</button>
        </div>
    );
}

export default Page;
