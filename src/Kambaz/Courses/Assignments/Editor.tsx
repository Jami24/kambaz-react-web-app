import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
    const { cid = "1234" } = useParams();

    return (
        <div id="wd-assignments-editor" className="mt-3">
            <Form>
                {/* Assignment Name */}
                <Form.Group className="mb-3" controlId="wd-name">
                    <Form.Label className="fw-bold">Assignment Name</Form.Label>
                    <Form.Control defaultValue="A1 - ENV + HTML" />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-4" controlId="wd-description">
                    <Form.Control
                        as="textarea"
                        rows={8}
                        defaultValue={`The assignment is available online. Submit a link to the 
                        landing page of your Web application running on Vercel.

                        The landing page should include:
                        - Your full name and section
                        - Links to each lab assignment
                        - Link to the Kambaz application
                        - Links to relevant source code repositories
                        
                        The Kambaz app should include a link back to the landing page.`}
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
                            <Form.Control id="wd-points" type="number" defaultValue={100} />
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
                            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
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
                            <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
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
                                        defaultValue="Online"
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
                                    />
                                    <Form.Check
                                        id="wd-website-url"
                                        type="checkbox"
                                        label="Website URL"
                                        defaultChecked
                                        className="mb-2"
                                    />
                                    <Form.Check
                                        id="wd-media-recordings"
                                        type="checkbox"
                                        label="Media Recordings"
                                        className="mb-2"
                                    />
                                    <Form.Check
                                        id="wd-student-annotation"
                                        type="checkbox"
                                        label="Student Annotation"
                                        className="mb-2"
                                    />
                                    <Form.Check
                                        id="wd-file-upload"
                                        type="checkbox"
                                        label="File Uploads"
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
                                    defaultValue="Everyone"
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
                                        defaultValue="2024-05-13"
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
                                                defaultValue="2024-05-06"
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
                                                defaultValue="2024-05-20"
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
