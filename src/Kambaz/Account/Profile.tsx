import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="p-3" style={{ maxWidth: 350 }}>
            <h1 className="mb-3">Profile</h1>

            <input defaultValue="alice" className="form-control mb-2" />
            <input defaultValue="123" type="password" className="form-control mb-2" />
            <input defaultValue="Alice" className="form-control mb-2" />
            <input defaultValue="Wonderland" className="form-control mb-2" />
            <input defaultValue="2000-01-01" type="date" className="form-control mb-2" />
            <input defaultValue="alice@wonderland" type="email" className="form-control mb-2" />

            <select defaultValue="FACULTY" id="wd-role" className="form-select mb-3">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <Link to="/Kambaz/Account/Signin" id="wd-signout-btn" className="btn btn-danger w-100">
                Signout
            </Link>
        </div>
    );
}
