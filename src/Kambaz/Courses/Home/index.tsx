import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
        <div id="wd-home">
            {/* flex layout instead of table */}
            <div className="d-flex" id="wd-home">
                {/* Left: modules content */}
                <div className="flex-fill me-3">
                    <Modules />
                </div>

                {/* Right: course status sidebar */}
                <div className="d-none d-lg-block">
                    <CourseStatus />
                </div>
            </div>
        </div>
    );
}
