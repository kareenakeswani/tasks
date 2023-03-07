import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <span>Attempts: {attempts}</span>
            <Button
                onClick={startQuiz}
                disabled={progress === true || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setProgress(false)}
                disabled={progress === false}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={progress === true}
            >
                Mulligan
            </Button>
        </div>
    );
}
