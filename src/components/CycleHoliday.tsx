import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "💗" | "🎆" | "🪔" | "🦃" | "🎄";
const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "🪔",
    "🪔": "🎆",
    "🎆": "🦃",
    "🦃": "💗",
    "💗": "🎄"
};
const CHRONOLOGICAL_TRANSITIONS: Record<Holiday, Holiday> = {
    "💗": "🎆",
    "🎆": "🪔",
    "🪔": "🦃",
    "🦃": "🎄",
    "🎄": "💗"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("💗");
    function changeHolidayAlphabet(): void {
        const newHoliday = ALPHABET_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayYear(): void {
        const newHoliday = CHRONOLOGICAL_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={changeHolidayAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeHolidayYear}>Advance by Year</Button>
        </div>
    );
}
