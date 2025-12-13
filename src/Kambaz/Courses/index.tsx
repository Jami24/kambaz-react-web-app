import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import People from "./People";

export default function Courses() {
    const { cid = "1234" } = useParams();

    return (
        <div id="wd-courses">
            {/* Styled course header (Chapter 2.4) */}
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                Course {cid}
            </h2>
            <hr />

            {/* flex layout instead of table */}
            <div className="d-flex">
                {/* Left: course navigation (hidden on small screens) */}
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>

                {/* Right: main course content */}
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<People />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
