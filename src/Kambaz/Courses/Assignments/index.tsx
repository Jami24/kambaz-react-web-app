export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input
                placeholder="Search for Assignments"
                id="wd-search-assignment"
            />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>

            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>

            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a
                        href="#/Kambaz/Courses/1234/Assignments/101"
                        className="wd-assignment-link"
                    >
                        A1 - ENV + HTML
                    </a>
                    <div className="wd-assignment-details">
                        Multiple Modules | Not available until May 6 @ 12:00am | Due May 13
                        @ 11:59pm | 100 pts
                    </div>
                </li>

                <li className="wd-assignment-list-item">
                    <a
                        href="#/Kambaz/Courses/1234/Assignments/102"
                        className="wd-assignment-link"
                    >
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <div className="wd-assignment-details">
                        Multiple Modules | Not available until May 13 @ 12:00am | Due May 20
                        @ 11:59pm | 100 pts
                    </div>
                </li>

                <li className="wd-assignment-list-item">
                    <a
                        href="#/Kambaz/Courses/1234/Assignments/103"
                        className="wd-assignment-link"
                    >
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <div className="wd-assignment-details">
                        Multiple Modules | Not available until May 20 @ 12:00am | Due May 27
                        @ 11:59pm | 100 pts
                    </div>
                </li>
            </ul>
        </div>
    );
}
