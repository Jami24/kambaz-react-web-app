import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import {
    FaSearch,
    FaCheckCircle,
    FaRegFileAlt,
    FaCaretDown,
    FaCaretRight,
    FaPlus,
} from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

import * as db from "../../Database"; // <-- adjust if your file is elsewhere

export default function Assignments() {
    const { cid = "1234" } = useParams();
    const [open, setOpen] = useState(true);

    const assignmentsForCourse = db.assignments.filter(
        (a: any) => a.course === cid
    );

    return (
        <div id="wd-assignments" className="mt-3">
            {/* Top toolbar: search + buttons */}
            <div className="d-flex align-items-center mb-3">
                <Form className="flex-grow-1 me-3">
                    <InputGroup>
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                        <Form.Control id="wd-search-assignment" placeholder="Search..." />
                    </InputGroup>
                </Form>

                <Button id="wd-add-assignment-group" variant="secondary" className="me-2">
                    + Group
                </Button>
                <Button id="wd-add-assignment" variant="danger">
                    + Assignment
                </Button>
            </div>

            <div className="border rounded">
                {/* Header row (caret only clickable) */}
                <div
                    id="wd-assignments-title"
                    className="d-flex justify-content-between align-items-center px-3 py-2 bg-light"
                >
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center me-2">
                            <BsGripVertical className="text-secondary me-2" />
                        </div>

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

                {/* Items */}
                {open && (
                    <ListGroup id="wd-assignment-list" variant="flush">
                        {assignmentsForCourse.map((a: any) => (
                            <ListGroup.Item
                                key={a._id}
                                className="d-flex align-items-center"
                                style={{ borderLeft: "4px solid green" }}
                            >
                                {/* Left icons */}
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
                                        to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                                        className="wd-assignment-link fw-bold text-decoration-none text-dark"
                                    >
                                        {a.title}
                                    </Link>

                                    <div className="wd-assignment-details text-muted small">
                                        <span className="text-danger">{a.moduleLabel ?? "Multiple Modules"}</span>
                                        {" | "}
                                        {a.availableText ?? "Not available yet"}
                                        {" | "}
                                        Due {a.dueText ?? a.dueDate}
                                        {" | "}
                                        {a.points} pts
                                    </div>
                                </div>

                                {/* Right icons */}
                                <div className="d-flex align-items-center ms-3">
                                    <FaCheckCircle className="text-success me-3" />
                                    <IoEllipsisVertical className="text-secondary" />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </div>
        </div>
    );
}
