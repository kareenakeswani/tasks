import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);
    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAttemptsRequested(parseInt(event.target.value) || 0);
    }
    return (
        <div>
            <div>Attempts: {attemptsLeft}</div>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequested)
                }
            >
                gain
            </Button>
        </div>
    );
}
