import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    function settingColorIndex() {
        setColorIndex(1 + DEFAULT_COLOR_INDEX);
        if (colorIndex === 2) {
            setColorIndex(0);
        }
    }
    return <Button onClick={() => settingColorIndex()}>Next Color</Button>;
}

function ColorPreview() {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
