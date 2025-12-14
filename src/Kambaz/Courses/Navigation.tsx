import { ListGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

type CourseLink =
    | {
    label: string;
    path: string;
    id: string;
    external?: false;
}
    | {
    label: string;
    href: string;
    external: true;
};

export default function CourseNavigation() {
    const { cid = "1234" } = useParams();

    const makeClass =
        ({ isActive }: { isActive: boolean }) =>
            `list-group-item border-0 ${
                isActive ? "active" : "text-danger"
            }`;

    const links: CourseLink[] = [
        { label: "Home", path: "Home", id: "wd-course-home-link" },
        { label: "Modules", path: "Modules", id: "wd-course-modules-link" },
        { label: "Piazza", href: "https://piazza.com/", external: true },
        {
            label: "Zoom",
            href: "https://zoom.com/?cms_guid=false",
            external: true,
        },
        {
            label: "Assignments",
            path: "Assignments",
            id: "wd-course-assignments-link",
        },
        { label: "Quizzes", path: "Quizzes", id: "wd-course-quizzes-link" },
        { label: "Grades", path: "Grades", id: "wd-course-grades-link" },
        { label: "People", path: "People", id: "wd-course-people-link" },
    ];

    return (
        <div id="wd-courses-navigation">
            <ListGroup className="wd fs-5 rounded-0">
                {links.map((link) =>
                    link.external ? (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="list-group-item border-0 text-danger"
                        >
                            {link.label}
                        </a>
                    ) : (
                        <NavLink
                            key={link.label}
                            end={link.path === "Home"}
                            to={`/Kambaz/Courses/${cid}/${link.path}`}
                            id={link.id}
                            className={makeClass}
                        >
                            {link.label}
                        </NavLink>
                    )
                )}
            </ListGroup>
        </div>
    );
}
