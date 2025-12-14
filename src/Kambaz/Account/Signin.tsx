import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="p-3" style={{ maxWidth: 350 }}>
            <h1 className="mb-3">Signin</h1>

            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
            />

            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"
            />

            <Link
                id="wd-signin-btn"
                to="/Kambaz/Dashboard"
                className="btn btn-primary w-100 mb-2"
            >
                Signin
            </Link>

            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
                Signup
            </Link>
        </div>
    );
}
