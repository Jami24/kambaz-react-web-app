import {
    Navigate,
    Route,
    Routes,
    useParams,
    useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAlignJustify } from "react-icons/fa6";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import People from "./People";

export default function Courses() {
    const { cid = "1234" } = useParams();
    const location = useLocation();

    const { courses } = useSelector(
        (state: any) => state.coursesReducer
    );

    const course = courses.find((course: any) => course._id === cid);

    const section = location.pathname.split("/").pop();

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course?.name} &gt; {section}
            </h2>
            <hr />

            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>

                <div className="flex-fill">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="Home" replace />}
                        />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:aid"
                            element={<AssignmentEditor />}
                        />
                        <Route path="People" element={<People />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}