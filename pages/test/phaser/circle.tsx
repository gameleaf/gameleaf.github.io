import React from "react";
import dynamic from "next/dynamic";

const DrawCircle = dynamic(() => import("components/phaser/DrawCircle"), { ssr: false });

export default function () {
    return <DrawCircle />;
}
