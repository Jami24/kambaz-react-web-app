import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const HTTP_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: "M101",
        name: "Introduction to Rocket Propulsion",
        description: "Basic principles of rocket propulsion.",
        course: "RS101",
    });

    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;

    return (
        <div id="wd-working-with-objects">

            <h3>Working With Objects</h3>

            <h4>Retrieving Objects</h4>

            <a
                id="wd-retrieve-assignments"
                className="btn btn-primary"
                href={ASSIGNMENT_API_URL}
            >
                Get Assignment
            </a>

            <hr />

            <h4>Retrieving Properties</h4>

            <a
                id="wd-retrieve-assignment-title"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/title`}
            >
                Get Title
            </a>

            <hr />

            <h4>Modifying Properties</h4>

            <div className="row align-items-center mb-3">
                <div className="col-9">
                    <FormControl
                        id="wd-assignment-title"
                        defaultValue={assignment.title}
                        onChange={(e) =>
                            setAssignment({
                                ...assignment,
                                title: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="col-3">
                    <a
                        id="wd-update-assignment-title"
                        className="btn btn-primary w-100"
                        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
                    >
                        Update Title
                    </a>
                </div>
            </div>

            <hr />

            <h4>Working With Modules</h4>

            <div className="mb-3">
                <a
                    id="wd-retrieve-module"
                    className="btn btn-primary me-2"
                    href={MODULE_API_URL}
                >
                    Get Module
                </a>

                <a
                    id="wd-retrieve-module-name"
                    className="btn btn-primary"
                    href={`${MODULE_API_URL}/name`}
                >
                    Get Module Name
                </a>
            </div>

            <hr />

            <h4>Modifying Module</h4>

            <div className="row align-items-center mb-2">
                <div className="col-9">
                    <FormControl
                        id="wd-module-name"
                        defaultValue={module.name}
                        onChange={(e) =>
                            setModule({
                                ...module,
                                name: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="col-3">
                    <a
                        id="wd-update-module-name"
                        className="btn btn-primary w-100"
                        href={`${MODULE_API_URL}/name/${module.name}`}
                    >
                        Update Module Name
                    </a>
                </div>
            </div>

            <div className="row align-items-center mb-3">
                <div className="col-9">
                    <FormControl
                        id="wd-module-description"
                        defaultValue={module.description}
                        onChange={(e) =>
                            setModule({
                                ...module,
                                description: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="col-3">
                    <a
                        id="wd-update-module-description"
                        className="btn btn-primary w-100"
                        href={`${MODULE_API_URL}/description/${module.description}`}
                    >
                        Update Module Description
                    </a>
                </div>
            </div>

            <hr />

            <div className="row align-items-center mb-2">
                <div className="col-9">
                    <FormControl
                        id="wd-assignment-score"
                        type="number"
                        defaultValue={assignment.score}
                        onChange={(e) =>
                            setAssignment({
                                ...assignment,
                                score: parseInt(e.target.value),
                            })
                        }
                    />
                </div>

                <div className="col-3">
                    <a
                        id="wd-update-assignment-score"
                        className="btn btn-primary w-100"
                        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
                    >
                        Update Score
                    </a>
                </div>
            </div>

            <div className="row align-items-center mb-3">
                <div className="col-9">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            id="wd-assignment-completed"
                            type="checkbox"
                            checked={assignment.completed}
                            onChange={(e) =>
                                setAssignment({
                                    ...assignment,
                                    completed: e.target.checked,
                                })
                            }
                        />

                        <label
                            className="form-check-label"
                            htmlFor="wd-assignment-completed"
                        >
                            Completed
                        </label>
                    </div>
                </div>

                <div className="col-3">
                    <a
                        id="wd-update-assignment-completed"
                        className="btn btn-primary w-100"
                        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
                    >
                        Update Completed
                    </a>
                </div>
            </div>

            <hr />

        </div>
    );
}