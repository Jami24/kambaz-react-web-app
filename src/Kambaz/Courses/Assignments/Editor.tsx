import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import * as client from "../client";

export default function AssignmentEditor() {
    const { cid = "1234", aid = "new" } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector(
        (state: any) => state.accountReducer
    );

    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );

    const isFaculty = currentUser?.role === "FACULTY";

    const existingAssignment = assignments.find(
        (a: any) => a.course === cid && String(a._id) === String(aid)
    );

    const [assignment, setAssignment] = useState<any>(
        aid === "new"
            ? {
                _id: "new",
                course: cid,
                title: "New Assignment",
                description: "New Assignment Description",
                points: 100,
                assignmentGroup: "ASSIGNMENTS",
                displayGradeAs: "Percentage",
                submissionType: "Online",
                onlineEntryOptions: {
                    textEntry: false,
                    websiteURL: true,
                    mediaRecordings: false,
                    studentAnnotation: false,
                    fileUploads: false,
                },
                assignTo: "Everyone",
                dueDate: "",
                availableFrom: "",
                availableUntil: "",
            }
            : {
                description: "",
                points: 100,
                assignmentGroup: "ASSIGNMENTS",
                displayGradeAs: "Percentage",
                submissionType: "Online",
                onlineEntryOptions: {
                    textEntry: false,
                    websiteURL: true,
                    mediaRecordings: false,
                    studentAnnotation: false,
                    fileUploads: false,
                },
                assignTo: "Everyone",
                dueDate: "",
                availableFrom: "",
                availableUntil: "",
                ...existingAssignment,
            }
    );

    if (!isFaculty) {
        return <Navigate to={`/Kambaz/Courses/${cid}/Assignments`} />;
    }

    if (aid !== "new" && !existingAssignment) {
        return (
            <div id="wd-assignments-editor" className="mt-3">
                <div className="alert alert-warning">
                    Assignment not found.
                </div>

                <button
                    className="btn btn-light border"
                    onClick={() =>
                        navigate(`/Kambaz/Courses/${cid}/Assignments`)
                    }
                >
                    Back
                </button>
            </div>
        );
    }

    const save = async () => {
        if (aid === "new") {
            await client.createAssignmentForCourse(cid as string, assignment);
        } else {
            await client.updateAssignment(assignment);
        }

        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    const cancel = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="mt-3">
            <Form>
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label className="fw-bold">
                        Assignment Name
                    </Form.Label>
                    <Form.Control
                        value={assignment.title}
                        onChange={(e) =>
                            setAssignment({
                                ...assignment,
                                title: e.target.value,
                            })
                        }
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="wd-description">
                    <Form.Control
                        as="textarea"
                        rows={8}
                        value={assignment.description}
                        onChange={(e) =>
                            setAssignment({
                                ...assignment,
                                description: e.target.value,
                            })
                        }
                    />
                </Form.Group>

                <div className="border-top pt-4">
                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-points" className="mb-0">
                                Points
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Control
                                id="wd-points"
                                type="number"
                                value={assignment.points}
                                onChange={(e) =>
                                    setAssignment({
                                        ...assignment,
                                        points: parseInt(e.target.value),
                                    })
                                }
                            />
                        </Col>
                    </Row>

                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-group" className="mb-0">
                                Assignment Group
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Select
                                id="wd-group"
                                value={assignment.assignmentGroup}
                                onChange={(e) =>
                                    setAssignment({
                                        ...assignment,
                                        assignmentGroup: e.target.value,
                                    })
                                }
                            >
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label
                                htmlFor="wd-display-grade-as"
                                className="mb-0"
                            >
                                Display Grade as
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Select
                                id="wd-display-grade-as"
                                value={assignment.displayGradeAs}
                                onChange={(e) =>
                                    setAssignment({
                                        ...assignment,
                                        displayGradeAs: e.target.value,
                                    })
                                }
                            >
                                <option>Percentage</option>
                                <option>Points</option>
                                <option>Complete/Incomplete</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={3} className="text-md-end">
                            <Form.Label
                                htmlFor="wd-submission-type"
                                className="pt-2 mb-0"
                            >
                                Submission Type
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Card>
                                <Card.Body className="p-3">
                                    <Form.Select
                                        id="wd-submission-type"
                                        value={assignment.submissionType}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                submissionType: e.target.value,
                                            })
                                        }
                                        className="mb-3"
                                    >
                                        <option>Online</option>
                                        <option>On Paper</option>
                                        <option>No Submission</option>
                                    </Form.Select>

                                    <div className="fw-bold mb-2">
                                        Online Entry Options
                                    </div>

                                    <Form.Check
                                        id="wd-text-entry"
                                        type="checkbox"
                                        label="Text Entry"
                                        className="mb-2"
                                        checked={Boolean(
                                            assignment.onlineEntryOptions?.textEntry
                                        )}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    textEntry: e.target.checked,
                                                },
                                            })
                                        }
                                    />

                                    <Form.Check
                                        id="wd-website-url"
                                        type="checkbox"
                                        label="Website URL"
                                        className="mb-2"
                                        checked={Boolean(
                                            assignment.onlineEntryOptions?.websiteURL
                                        )}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    websiteURL: e.target.checked,
                                                },
                                            })
                                        }
                                    />

                                    <Form.Check
                                        id="wd-media-recordings"
                                        type="checkbox"
                                        label="Media Recordings"
                                        className="mb-2"
                                        checked={Boolean(
                                            assignment.onlineEntryOptions
                                                ?.mediaRecordings
                                        )}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    mediaRecordings:
                                                    e.target.checked,
                                                },
                                            })
                                        }
                                    />

                                    <Form.Check
                                        id="wd-student-annotation"
                                        type="checkbox"
                                        label="Student Annotation"
                                        className="mb-2"
                                        checked={Boolean(
                                            assignment.onlineEntryOptions
                                                ?.studentAnnotation
                                        )}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    studentAnnotation:
                                                    e.target.checked,
                                                },
                                            })
                                        }
                                    />

                                    <Form.Check
                                        id="wd-file-upload"
                                        type="checkbox"
                                        label="File Uploads"
                                        checked={Boolean(
                                            assignment.onlineEntryOptions
                                                ?.fileUploads
                                        )}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                onlineEntryOptions: {
                                                    ...assignment.onlineEntryOptions,
                                                    fileUploads: e.target.checked,
                                                },
                                            })
                                        }
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={3} className="text-md-end">
                            <Form.Label
                                htmlFor="wd-assign-to"
                                className="pt-2 mb-0"
                            >
                                Assign
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <div className="border rounded p-3">
                                <Form.Label className="fw-bold mb-2">
                                    Assign to
                                </Form.Label>
                                <Form.Select
                                    id="wd-assign-to"
                                    value={assignment.assignTo}
                                    onChange={(e) =>
                                        setAssignment({
                                            ...assignment,
                                            assignTo: e.target.value,
                                        })
                                    }
                                    className="mb-3"
                                >
                                    <option>Everyone</option>
                                    <option>Section 1</option>
                                    <option>Section 2</option>
                                </Form.Select>

                                <Form.Label className="fw-bold mb-2">
                                    Due
                                </Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        id="wd-due-date"
                                        type="date"
                                        value={assignment.dueDate}
                                        onChange={(e) =>
                                            setAssignment({
                                                ...assignment,
                                                dueDate: e.target.value,
                                            })
                                        }
                                    />
                                    <InputGroup.Text>
                                        <FaCalendarAlt />
                                    </InputGroup.Text>
                                </InputGroup>

                                <Row>
                                    <Col md={6}>
                                        <Form.Label className="fw-bold mb-2">
                                            Available from
                                        </Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control
                                                id="wd-available-from"
                                                type="date"
                                                value={assignment.availableFrom}
                                                onChange={(e) =>
                                                    setAssignment({
                                                        ...assignment,
                                                        availableFrom:
                                                        e.target.value,
                                                    })
                                                }
                                            />
                                            <InputGroup.Text>
                                                <FaCalendarAlt />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Label className="fw-bold mb-2">
                                            Until
                                        </Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control
                                                id="wd-available-until"
                                                type="date"
                                                value={
                                                    assignment.availableUntil
                                                }
                                                onChange={(e) =>
                                                    setAssignment({
                                                        ...assignment,
                                                        availableUntil:
                                                        e.target.value,
                                                    })
                                                }
                                            />
                                            <InputGroup.Text>
                                                <FaCalendarAlt />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="d-flex justify-content-end gap-2 border-top pt-3 mt-4">
                    <button
                        type="button"
                        className="btn btn-light border"
                        onClick={cancel}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={save}
                    >
                        Save
                    </button>
                </div>
            </Form>
        </div>
    );
}