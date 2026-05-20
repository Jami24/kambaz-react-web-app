import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function TOC() {
    return (
        <Nav variant="pills" className="mb-3">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/Labs" end>
                    Labs
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={NavLink} to="/Labs/Lab1">
                    Lab 1
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={NavLink} to="/Labs/Lab2">
                    Lab 2
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={NavLink} to="/Labs/Lab3">
                    Lab 3
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={NavLink} to="/Labs/Lab4">
                    Lab 4
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={NavLink} to="/">
                    Kambaz
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="https://github.com/Jami24" target="_blank" rel="noreferrer">
                    My GitHub
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
