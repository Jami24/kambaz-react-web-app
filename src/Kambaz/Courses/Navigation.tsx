import { ListGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

export default function CourseNavigation() {
    const { cid = "1234" } = useParams();

    const makeClass =
        ({ isActive }: { isActive: boolean }) =>
            `list-group-item border-0 ${
                isActive ? "active" : "text-danger"
            }`;

    return (
        <div id="wd-courses-navigation">
            <ListGroup className="wd fs-5 rounded-0">
                <NavLink
                    end
                    to={`/Kambaz/Courses/${cid}/Home`}
                    id="wd-course-home-link"
                    className={makeClass}
                >
                    Home
                </NavLink>
                <NavLink
                    to={`/Kambaz/Courses/${cid}/Modules`}
                    id="wd-course-modules-link"
                    className={makeClass}
                >
                    Modules
                </NavLink>
                <a
                    href="https://piazza.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="list-group-item border-0 text-danger"
                >
                    Piazza
                </a>

                <a
                    href="https://zoom.com/?cms_guid=false"
                    target="_blank"
                    rel="noreferrer"
                    className="list-group-item border-0 text-danger"
                >
                    Zoom
                </a>

                <NavLink
                    to={`/Kambaz/Courses/${cid}/Assignments`}
                    id="wd-course-assignments-link"
                    className={makeClass}
                >
                    Assignments
                </NavLink>
                <NavLink
                    to={`/Kambaz/Courses/${cid}/Quizzes`}
                    id="wd-course-quizzes-link"
                    className={makeClass}
                >
                    Quizzes
                </NavLink>
                <NavLink
                    to={`/Kambaz/Courses/${cid}/Grades`}
                    id="wd-course-grades-link"
                    className={makeClass}
                >
                    Grades
                </NavLink>
                <NavLink
                    to={`/Kambaz/Courses/${cid}/People`}
                    id="wd-course-people-link"
                    className={makeClass}
                >
                    People
                </NavLink>
            </ListGroup>
        </div>
    );
}
