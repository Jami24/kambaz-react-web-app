import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import {
    FaSearch,
    FaPlus,
    FaCheckCircle,
    FaRegFileAlt,
    FaCaretDown,
    FaCaretRight,
} from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    const { cid = "1234" } = useParams();
    const [open, setOpen] = useState(true);

    return (
        <div id="wd-assignments" className="mt-3">
            {/* Top toolbar: search + buttons */}
            <div className="d-flex align-items-center mb-3">
                {/* Search field (left) */}
                <Form className="flex-grow-1 me-3">
                    <InputGroup>
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                        <Form.Control
                            id="wd-search-assignment"
                            placeholder="Search for Assignment"
                        />
                    </InputGroup>
                </Form>

                {/* Buttons (right) */}
                <Button id="wd-add-assignment-group" variant="secondary" className="me-2">
                    + Group
                </Button>
                <Button id="wd-add-assignment" variant="danger">
                    + Assignment
                </Button>
            </div>

            {/* Assignment group header + list */}
            <div className="border rounded">
                {/* Header row (NOT clickable; caret only is clickable) */}
                <div
                    id="wd-assignments-title"
                    className="d-flex justify-content-between align-items-center px-3 py-2 bg-light"
                >
                    <div className="d-flex align-items-center">
                        {/* Left handle + page icon */}
                        <div className="d-flex align-items-center justify-content-center me-2">
                            <BsGripVertical className="text-secondary me-2" />
                        </div>

                        {/* Caret ONLY (clickable) */}
                        <span
                            className="d-inline-flex align-items-center justify-content-center me-2"
                            style={{ width: 16, cursor: "pointer" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen((prev) => !prev);
                            }}
                        >
              {open ? <FaCaretDown /> : <FaCaretRight />}
            </span>

                        <span className="fw-bold">ASSIGNMENTS</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <Button
                            size="sm"
                            variant="light"
                            className="me-2 border rounded-pill px-3"
                            onClick={(e) => e.stopPropagation()}
                        >
                            40% of Total
                        </Button>

                        <Button
                            size="sm"
                            variant="light"
                            className="border rounded-circle me-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaPlus />
                        </Button>

                        <IoEllipsisVertical
                            className="text-secondary fs-5"
                            onClick={(e) => e.stopPropagation()}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </div>

                {/* Assignment items – only render when group is open */}
                {open && (
                    <ListGroup id="wd-assignment-list" variant="flush">
                        {/* A1 */}
                        <ListGroup.Item
                            className="d-flex align-items-center"
                            style={{ borderLeft: "4px solid green" }}
                        >
                            {/* Left icons, centered */}
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{ minWidth: "40px" }}
                            >
                                <BsGripVertical className="text-secondary me-2" />
                                <FaRegFileAlt className="text-success" />
                            </div>

                            {/* Text content */}
                            <div className="flex-grow-1">
                                <Link
                                    to={`/Kambaz/Courses/${cid}/Assignments/101`}
                                    className="wd-assignment-link fw-bold text-decoration-none text-dark"
                                >
                                    A1 – ENV + HTML
                                </Link>
                                <div className="wd-assignment-details text-muted small">
                                    <span className="text-danger">Multiple Modules</span> | Not
                                    available until May 6 @ 12:00am | Due May 13 @ 11:59pm | 100
                                    pts
                                </div>
                            </div>

                            {/* Right icons, centered */}
                            <div className="d-flex align-items-center ms-3">
                                <FaCheckCircle className="text-success me-3" />
                                <IoEllipsisVertical className="text-secondary" />
                            </div>
                        </ListGroup.Item>

                        {/* A2 */}
                        <ListGroup.Item
                            className="d-flex align-items-center"
                            style={{ borderLeft: "4px solid green" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{ minWidth: "40px" }}
                            >
                                <BsGripVertical className="text-secondary me-2" />
                                <FaRegFileAlt className="text-success" />
                            </div>

                            <div className="flex-grow-1">
                                <Link
                                    to={`/Kambaz/Courses/${cid}/Assignments/102`}
                                    className="wd-assignment-link fw-bold text-decoration-none text-dark"
                                >
                                    A2 – CSS + BOOTSTRAP
                                </Link>
                                <div className="wd-assignment-details text-muted small">
                                    <span className="text-danger">Multiple Modules</span> | Not
                                    available until May 13 @ 12:00am | Due May 20 @ 11:59pm | 100
                                    pts
                                </div>
                            </div>

                            <div className="d-flex align-items-center ms-3">
                                <FaCheckCircle className="text-success me-3" />
                                <IoEllipsisVertical className="text-secondary" />
                            </div>
                        </ListGroup.Item>

                        {/* A3 */}
                        <ListGroup.Item
                            className="d-flex align-items-center"
                            style={{ borderLeft: "4px solid green" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center me-3"
                                style={{ minWidth: "40px" }}
                            >
                                <BsGripVertical className="text-secondary me-2" />
                                <FaRegFileAlt className="text-success" />
                            </div>

                            <div className="flex-grow-1">
                                <Link
                                    to={`/Kambaz/Courses/${cid}/Assignments/103`}
                                    className="wd-assignment-link fw-bold text-decoration-none text-dark"
                                >
                                    A3 – JAVASCRIPT + REACT
                                </Link>
                                <div className="wd-assignment-details text-muted small">
                                    <span className="text-danger">Multiple Modules</span> | Not
                                    available until May 20 @ 12:00am | Due May 27 @ 11:59pm | 100
                                    pts
                                </div>
                            </div>

                            <div className="d-flex align-items-center ms-3">
                                <FaCheckCircle className="text-success me-3" />
                                <IoEllipsisVertical className="text-secondary" />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                )}
            </div>
        </div>
    );
}
