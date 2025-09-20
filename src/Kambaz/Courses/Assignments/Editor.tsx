import { Link, useParams } from "react-router-dom";

export default function AssignmentEditor() {
    const { cid = "1234" } = useParams();

    return (
        <div id="wd-assignments-editor">
            <label
                htmlFor="wd-name"
                style={{ display: "block", fontWeight: 700, marginBottom: 4 }}
            >
                Assignment Name
            </label>

            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br /><br />

            <textarea id="wd-description" rows={8} cols={60}>
The assignment is available online. Submit a link to the landing page of your Web application running on Vercel.

The landing page should include:
- Your full name and section
- Links to each lab assignment
- Link to the Kambaz application
- Links to relevant source code repositories

The Kambaz app should include a link back to the landing page.
      </textarea>

            <br /><br />
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" type="number" defaultValue={100} />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" defaultValue="Percentage">
                            <option>Percentage</option>
                            <option>Points</option>
                            <option>Complete/Incomplete</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" defaultValue="Online">
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </select>

                        <div style={{ marginTop: 8 }}>
                            <div><strong>Online Entry Options</strong></div>

                            <input id="wd-text-entry" type="checkbox" />
                            <label htmlFor="wd-text-entry"> Text Entry</label><br />

                            <input id="wd-website-url" type="checkbox" defaultChecked />
                            <label htmlFor="wd-website-url"> Website URL</label><br />

                            <input id="wd-media-recordings" type="checkbox" />
                            <label htmlFor="wd-media-recordings"> Media Recordings</label><br />

                            <input id="wd-student-annotation" type="checkbox" />
                            <label htmlFor="wd-student-annotation"> Student Annotation</label><br />

                            <input id="wd-file-upload" type="checkbox" />
                            <label htmlFor="wd-file-upload"> File Uploads</label>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <select id="wd-assign-to" defaultValue="Everyone">
                            <option>Everyone</option>
                            <option>Section 1</option>
                            <option>Section 2</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="wd-available-until">Until</label>
                        &nbsp;
                        <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
                    </td>
                </tr>
                </tbody>
            </table>

            <br />
            <Link to={`/Kambaz/Courses/${cid}/Assignments`}>Cancel</Link>
            &nbsp;
            <button>Save</button>
        </div>
    );
}
