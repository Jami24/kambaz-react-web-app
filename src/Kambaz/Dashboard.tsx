import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {/* 1. CS1234 React JS (textbook example) */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/reactjs.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS1234 React JS
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 2. CS4550 Web Dev */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS4550/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/webdev.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS4550 Web Dev
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        HTML • CSS • JS
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 3. CS5001 OOD */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS5001/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/OOD.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS5001 OOD
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Java &amp; Patterns
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 4. CS5610 Web Apps */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS5610/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/apps.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS5610 Web Apps
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Node • React
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 5. CS5800 Algorithms */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS5800/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/algo.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS5800 Algorithms
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Design &amp; Analysis
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 6. CS6650 SD */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS6650/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/scale.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS6650 SDS
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Scalable Dist. Systems
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    {/* 7. CS6120 Compilers */}
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link
                                to="/Kambaz/Courses/CS6120/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <Card.Img
                                    variant="top"
                                    src="/images/compiler.jpg"
                                    width="100%"
                                    height={160}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS6120 Compilers
                                    </Card.Title>
                                    <Card.Text
                                        className="wd-dashboard-course-description overflow-hidden"
                                        style={{ height: "100px" }}
                                    >
                                        Parse • IR • Opt
                                    </Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
}
