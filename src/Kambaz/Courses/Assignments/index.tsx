import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { deleteAssignment } from "./reducer";

export default function Assignments() {
    const { cid = "RS101" } = useParams();
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch();

    const { currentUser } = useSelector(
        (state: any) => state.accountReducer
    );

    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );

    const isFaculty = currentUser?.role === "FACULTY";

    const assignmentsForCourse = assignments.filter(
        (a: any) => a.course === cid
    );

    return (
        <div id="wd-assignments" className="mt-3">
            <div className="d-flex align-items-center mb-3">
                <Form className="flex-grow-1 me-3">
                    <InputGroup>
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                        <Form.Control placeholder="Search..." />
                    </InputGroup>
                </Form>

                {isFaculty && (
                    <>
                        <Button variant="secondary" className="me-2">
                            + Group
                        </Button>

                        <Link
                            to={`/Kambaz/Courses/${cid}/Assignments/new`}
                            className="btn btn-danger"
                            id="wd-add-assignment"
                        >
                            + Assignment
                        </Link>
                    </>
                )}
            </div>

            <div className="border rounded">
                <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-light">
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="text-secondary me-2" />

                        <span
                            style={{ width: 16, cursor: "pointer" }}
                            onClick={() => setOpen(!open)}
                            className="me-2"
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
                        >
                            40% of Total
                        </Button>

                        {isFaculty && (
                            <>
                                <Button
                                    size="sm"
                                    variant="light"
                                    className="me-2 rounded-circle"
                                >
                                    <FaPlus />
                                </Button>
                                <IoEllipsisVertical className="fs-5 text-secondary" />
                            </>
                        )}
                    </div>
                </div>

                {open && (
                    <ListGroup variant="flush">
                        {assignmentsForCourse.map((a: any) => (
                            <ListGroup.Item
                                key={a._id}
                                className="d-flex align-items-center"
                                style={{ borderLeft: "4px solid green" }}
                            >
                                <div className="me-3 d-flex align-items-center">
                                    <BsGripVertical className="text-secondary me-2" />
                                    <FaRegFileAlt className="text-success" />
                                </div>

                                <div className="flex-grow-1">
                                    <Link
                                        to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                                        className="fw-bold text-decoration-none text-dark"
                                    >
                                        {a.title}
                                    </Link>

                                    <div className="text-muted small">
                                        <span className="text-danger">
                                            Multiple Modules
                                        </span>
                                        {" | "}
                                        Not available yet
                                        {" | "}
                                        Due {a.dueDate || "TBD"}
                                        {" | "}
                                        {a.points || "__"} pts
                                    </div>
                                </div>

                                <div className="ms-3 d-flex align-items-center">
                                    <FaCheckCircle className="text-success me-3" />

                                    {isFaculty && (
                                        <>
                                            <button
                                                className="btn btn-link text-danger p-0 me-3"
                                                onClick={() => {
                                                    const ok = window.confirm(
                                                        "Are you sure you want to remove this assignment?"
                                                    );

                                                    if (ok) {
                                                        dispatch(deleteAssignment(a._id));
                                                    }
                                                }}
                                            >
                                                Delete
                                            </button>

                                            <IoEllipsisVertical className="text-secondary" />
                                        </>
                                    )}
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </div>
        </div>
    );
}