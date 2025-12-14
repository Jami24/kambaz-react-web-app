import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid = "1234", aid = "101" } = useParams();

    // find base record from the GIVEN json (only has _id/title/course)
    const base = (db.assignments as any[]).find(
        (a) => a.course === cid && String(a._id) === String(aid)
    );

    if (!base) {
        return (
            <div id="wd-assignments-editor" className="mt-3">
                <div className="alert alert-warning">Assignment not found.</div>
                <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-light border">
                    Back
                </Link>
            </div>
        );
    }

    const assignment = {
        _id: base._id,
        course: base.course,
        title: base.title,

        description: `The assignment is available online. Submit a link to the 
        landing page of your Web application running on Vercel.
        
        The landing page should include:
        - Your full name and section
        - Links to each lab assignment
        - Link to the Kambaz application
        - Links to relevant source code repositories
        
        The Kambaz app should include a link back to the landing page.`,

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
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20",

        // if later have fields, can override defaults
        ...base,
    };

    return (
        <div id="wd-assignments-editor" className="mt-3">
            <Form>
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label className="fw-bold">Assignment Name</Form.Label>
                    <Form.Control defaultValue={assignment.title} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="wd-description">
                    <Form.Control as="textarea" rows={8} defaultValue={assignment.description} />
                </Form.Group>

                <div className="border-top pt-4">
                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-points" className="mb-0">Points</Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Control id="wd-points" type="number" defaultValue={assignment.points} />
                        </Col>
                    </Row>

                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-group" className="mb-0">Assignment Group</Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Select id="wd-group" defaultValue={assignment.assignmentGroup}>
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="mb-3 align-items-center">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-display-grade-as" className="mb-0">Display Grade as</Form.Label>
                        </Col>
                        <Col md={7}>
                            <Form.Select id="wd-display-grade-as" defaultValue={assignment.displayGradeAs}>
                                <option>Percentage</option>
                                <option>Points</option>
                                <option>Complete/Incomplete</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-submission-type" className="pt-2 mb-0">Submission Type</Form.Label>
                        </Col>
                        <Col md={7}>
                            <Card>
                                <Card.Body className="p-3">
                                    <Form.Select
                                        id="wd-submission-type"
                                        defaultValue={assignment.submissionType}
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
                                        defaultChecked={Boolean(assignment.onlineEntryOptions?.websiteURL)}
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

                    <Row className="mb-3">
                        <Col md={3} className="text-md-end">
                            <Form.Label htmlFor="wd-assign-to" className="pt-2 mb-0">Assign</Form.Label>
                        </Col>
                        <Col md={7}>
                            <div className="border rounded p-3">
                                <Form.Label className="fw-bold mb-2">Assign to</Form.Label>
                                <Form.Select id="wd-assign-to" defaultValue={assignment.assignTo} className="mb-3">
                                    <option>Everyone</option>
                                    <option>Section 1</option>
                                    <option>Section 2</option>
                                </Form.Select>

                                <Form.Label className="fw-bold mb-2">Due</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control id="wd-due-date" type="date" defaultValue={assignment.dueDate} />
                                    <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                                </InputGroup>

                                <Row>
                                    <Col md={6}>
                                        <Form.Label className="fw-bold mb-2">Available from</Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control
                                                id="wd-available-from"
                                                type="date"
                                                defaultValue={assignment.availableFrom}
                                            />
                                            <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
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
                                            <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="d-flex justify-content-end gap-2 border-top pt-3 mt-4">
                    <Button
                        as={Link}
                        to={`/Kambaz/Courses/${cid}/Assignments`}
                        variant="light"
                        className="border"
                    >
                        Cancel
                    </Button>

                    <Button
                        as={Link}
                        to={`/Kambaz/Courses/${cid}/Assignments`}
                        variant="danger"
                    >
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    );
}
