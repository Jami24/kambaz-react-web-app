import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

import * as db from "../../Database"; // ✅ adjust path if your Editor.tsx is elsewhere

export default function AssignmentEditor() {
    const { cid = "1234", aid = "101" } = useParams();

    // Find the selected assignment for this course
    const assignment = db.assignments.find(
        (a: any) => a.course === cid && String(a._id) === String(aid)
    );

    // Keep page stable (no crash) if bad URL
    if (!assignment) {
        return (
            <div id="wd-assignments-editor" className="mt-3">
                <div className="alert alert-warning">
                    Assignment not found.
                </div>

                <Link
                    to={`/Kambaz/Courses/${cid}/Assignments`}
                    className="btn btn-light border"
                >
                    Back
                </Link>
            </div>
        );
    }

    return (
        <div id="wd-assignments-editor" className="mt-3">
            <Form>
                {/* Assignment Name */}
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label className="fw-bold">Assignment Name</Form.Label>
                    <Form.Control defaultValue={assignment.title} />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-4" controlId="wd-description">
                    <Form.Control
                        as="textarea"
                        rows={8}
                        defaultValue={assignment.description}
                    />
                </Form.Group>

                {/* Two-column layout like Canvas */}
                <div className="border-top pt-4">
                    {/* Points */}
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
                                defaultValue={assignment.points}
                            />
                        </Col>
                    </Row>

                    {/* Assignment Group */}
                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-group" className="mb-0">
                                Assignment Group
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Select
                                id="wd-group"
                                defaultValue={assignment.assignmentGroup ?? "ASSIGNMENTS"}
                            >
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    {/* Display Grade as */}
                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-display-grade-as" className="mb-0">
                                Display Grade as
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Select
                                id="wd-display-grade-as"
                                defaultValue={assignment.displayGradeAs ?? "Percentage"}
                            >
                                <option>Percentage</option>
                                <option>Points</option>
                                <option>Complete/Incomplete</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    {/* Submission Type + Online Entry Options (ONE outer box like Canvas) */}
                    <Row className="mb-4">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-submission-type" className="pt-2 mb-0">
                                Submission Type
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <Card>
                                <Card.Body className="p-3">
                                    <Form.Select
                                        id="wd-submission-type"
                                        defaultValue={assignment.submissionType ?? "Online"}
                                        className="mb-3"
                                    >
                                        <option>Online</option>
                                        <option>On Paper</option>
                                        <option>No Submission</option>
                                    </Form.Select>

                                    <div className="fw-bold mb-2">Online Entry Options</div>

                                    <Form.Check
                                        id="wd-text-entry"
                                        type="checkbox"
                                        label="Text Entry"
                                        className="mb-2"
                                        defaultChecked={Boolean(assignment.onlineEntryOptions?.textEntry)}
                                    />
                                    <Form.Check
                                        id="wd-website-url"
                                        type="checkbox"
                                        label="Website URL"
                                        className="mb-2"
                                        defaultChecked={
                                            assignment.onlineEntryOptions?.websiteURL !== undefined
                                                ? Boolean(assignment.onlineEntryOptions.websiteURL)
                                                : true // ✅ keep your current defaultChecked behavior
                                        }
                                    />
                                    <Form.Check
                                        id="wd-media-recordings"
                                        type="checkbox"
                                        label="Media Recordings"
                                        className="mb-2"
                                        defaultChecked={Boolean(assignment.onlineEntryOptions?.mediaRecordings)}
                                    />
                                    <Form.Check
                                        id="wd-student-annotation"
                                        type="checkbox"
                                        label="Student Annotation"
                                        className="mb-2"
                                        defaultChecked={Boolean(assignment.onlineEntryOptions?.studentAnnotation)}
                                    />
                                    <Form.Check
                                        id="wd-file-upload"
                                        type="checkbox"
                                        label="File Uploads"
                                        defaultChecked={Boolean(assignment.onlineEntryOptions?.fileUploads)}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Assign block */}
                    <Row className="mb-3">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-assign-to" className="pt-2 mb-0">
                                Assign
                            </Form.Label>
                        </Col>
                        <Col md={7}>
                            <div className="border rounded p-3">
                                <Form.Label className="fw-bold mb-2">Assign to</Form.Label>
                                <Form.Select
                                    id="wd-assign-to"
                                    defaultValue={assignment.assignTo ?? "Everyone"}
                                    className="mb-3"
                                >
                                    <option>Everyone</option>
                                    <option>Section 1</option>
                                    <option>Section 2</option>
                                </Form.Select>

                                <Form.Label className="fw-bold mb-2">Due</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        id="wd-due-date"
                                        type="date"
                                        defaultValue={assignment.dueDate}
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
                                                defaultValue={assignment.availableFrom}
                                            />
                                            <InputGroup.Text>
                                                <FaCalendarAlt />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label className="fw-bold mb-2">Until</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control
                                                id="wd-available-until"
                                                type="date"
                                                defaultValue={assignment.availableUntil}
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

                {/* Bottom right buttons */}
                <div className="d-flex justify-content-end gap-2 border-top pt-3 mt-4">
                    <Link
                        to={`/Kambaz/Courses/${cid}/Assignments`}
                        className="btn btn-light border"
                    >
                        Cancel
                    </Link>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </div>
    );
}
