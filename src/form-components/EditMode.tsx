import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="editModeUpdate"
                    label="Edit Mode?"
                    checked={inEditMode}
                    onChange={() => setInEditMode(!inEditMode)}
                />
            </div>
            <div>
                {inEditMode === true && (
                    <Form.Group controlId="formUpdateName">
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control value={userName} onChange={updateName} />
                    </Form.Group>
                )}
            </div>
            <div>
                {inEditMode === true && (
                    <Form.Check
                        type="checkbox"
                        id="studentUpdate"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                )}
            </div>
            <div>
                {userName} is{" "}
                {isStudent === false ? "not a student" : "a student"}
            </div>
        </div>
    );
}
