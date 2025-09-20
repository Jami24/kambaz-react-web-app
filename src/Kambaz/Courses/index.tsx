import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

export default function Courses() {
    const { cid = "1234" } = useParams();

    return (
        <div id="wd-courses">
            <h2>Course {cid}</h2>
            <hr />
            <table>
                <tbody>
                <tr>
                    <td valign="top"><CourseNavigation /></td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="People" element={<h2>People</h2>} />
                        </Routes>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
