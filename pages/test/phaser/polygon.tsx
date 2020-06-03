import React from "react";
import dynamic from "next/dynamic";

const DrawPolygon = dynamic(() => import("components/phaser/DrawPolygon"), { ssr: false });

export default function () {
    return <DrawPolygon />;
}
