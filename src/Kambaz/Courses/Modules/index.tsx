import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";

import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

import * as db from "../../Database";

export default function Modules() {
    const { cid = "" } = useParams();

    const modules = db.modules.filter((m: any) => m.course === cid);

    return (
        <div id="wd-modules-screen">
            <ModulesControls />
            <br />

            <ListGroup className="rounded-0" id="wd-modules">
                {modules.map((module: any) => (
                    <ListGroup.Item
                        key={module._id}
                        className="wd-module p-0 mb-5 fs-5 border-gray"
                    >
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            {module.name}
                            <ModuleControlButtons />
                        </div>

                        <ListGroup className="wd-lessons rounded-0">
                            {(module.lessons || []).map((lesson: any) => (
                                <ListGroup.Item
                                    key={lesson._id}
                                    className="wd-lesson p-3 ps-1"
                                >
                                    <BsGripVertical className="me-2 fs-3" />
                                    {lesson.name}
                                    <LessonControlButtons />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
