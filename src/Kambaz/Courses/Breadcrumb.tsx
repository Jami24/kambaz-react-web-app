import { useLocation, useParams } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../Database";

export default function Breadcrumb() {
    const { cid } = useParams();
    const location = useLocation();

    const course = courses.find((c) => c._id === cid);

    // last part of the URL: Home | Modules | Assignments | People | etc.
    const section = location.pathname.split("/").pop();

    return (
        <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course?.name} &gt; {section}
        </h2>
    );
}
