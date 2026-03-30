import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        setTeam((prevTeam) =>
            prevTeam
                .concat(newMember)
                .filter((member, index, arr) => arr.indexOf(member) === index),
        );
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                            >
                                {option}
                            </button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <button onClick={clearTeam}>Clear Team</button>
                </Col>
            </Row>
        </div>
    );
}
