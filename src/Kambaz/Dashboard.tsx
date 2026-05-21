import { useEffect, useState } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./Courses/client";


import {
    addCourse,
    deleteCourse,
    updateCourse,
    setCourse,
    setCourses,
} from "./Courses/reducer";

import {
    enroll,
    unenroll,
    setEnrollments,
} from "./enrollmentsReducer";

export default function Dashboard() {
    const dispatch = useDispatch();

    const [showAllCourses, setShowAllCourses] = useState(false);

    const { currentUser } = useSelector(
        (state: any) => state.accountReducer
    );

    const { courses, course } = useSelector(
        (state: any) => state.coursesReducer
    );

    const { enrollments } = useSelector(
        (state: any) => state.enrollmentsReducer
    );

    const isFaculty = currentUser?.role === "FACULTY";

    const displayedCourses = courses;

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser?._id &&
                enrollment.course === courseId
        );
    };

    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);

        dispatch(addCourse(newCourse));

        dispatch(
            enroll({
                user: currentUser._id,
                course: newCourse._id,
            })
        );
    };

    const onDeleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);

        dispatch(
            setCourses(
                courses.filter(
                    (course: any) => course._id !== courseId
                )
            )
        );
    };

    const onUpdateCourse = async () => {
        await client.updateCourse(course);

        dispatch(
            setCourses(
                courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    } else {
                        return c;
                    }
                })
            )
        );
    };

    const fetchCourses = async () => {
        const courses = showAllCourses
            ? await client.fetchAllCourses()
            : await client.findMyCourses();

        dispatch(setCourses(courses));
    };

    const fetchEnrollments = async () => {
        if (!currentUser?._id) {
            return;
        }

        const enrollments = await client.findEnrollmentsForUser(currentUser._id);
        dispatch(setEnrollments(enrollments));
    };

    const onEnroll = async (courseId: string) => {
        const enrollment = await client.enrollUserInCourse(
            currentUser._id,
            courseId
        );

        dispatch(enroll(enrollment));
    };

    const onUnenroll = async (courseId: string) => {
        await client.unenrollUserFromCourse(currentUser._id, courseId);

        dispatch(
            unenroll({
                user: currentUser._id,
                course: courseId,
            })
        );
    };

    useEffect(() => {
        fetchCourses();
        fetchEnrollments();
    }, [showAllCourses, currentUser]);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            <Button
                variant="primary"
                className="float-end"
                onClick={() =>
                    setShowAllCourses(!showAllCourses)
                }
            >
                Enrollments
            </Button>

            <br />
            <br />

            {isFaculty && (
                <>
                    <h5>
                        New Course

                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={onAddNewCourse}
                        >
                            Add
                        </button>

                        <button
                            onClick={onUpdateCourse}
                            className="btn btn-secondary float-end"
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>

                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) =>
                            dispatch(
                                setCourse({
                                    ...course,
                                    name: e.target.value,
                                })
                            )
                        }
                    />

                    <FormControl
                        value={course.description}
                        as="textarea"
                        rows={3}
                        onChange={(e) =>
                            dispatch(
                                setCourse({
                                    ...course,
                                    description:
                                    e.target.value,
                                })
                            )
                        }
                    />

                    <hr />
                </>
            )}

            <h2 id="wd-dashboard-published">
                Published Courses (
                {displayedCourses.length})
            </h2>

            <hr />

            <div id="wd-dashboard-courses">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    {displayedCourses.map((course: any) => (
                        <div
                            key={course._id}
                            className="col wd-dashboard-course"
                            style={{ width: "300px" }}
                        >
                            <Card>
                                <Link
                                    to={`/Kambaz/Courses/${course._id}/Home`}
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
                                            {course.name}
                                        </Card.Title>

                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: "100px" }}
                                        >
                                            {course.description}
                                        </Card.Text>

                                        <Button variant="primary">
                                            Go
                                        </Button>

                                        {isEnrolled(course._id) ? (
                                            <Button
                                                variant="danger"
                                                className="float-end"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    onUnenroll(course._id);
                                                }}
                                            >
                                                Unenroll
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="success"
                                                className="float-end"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    onEnroll(course._id);
                                                }}
                                            >
                                                Enroll
                                            </Button>
                                        )}

                                        {isFaculty && (
                                            <>
                                                <Button
                                                    variant="danger"
                                                    className="float-end me-2"
                                                    id="wd-delete-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        onDeleteCourse(course._id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>

                                                <Button
                                                    variant="warning"
                                                    className="float-end me-2"
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();

                                                        dispatch(
                                                            setCourse(course)
                                                        );
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                            </>
                                        )}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}