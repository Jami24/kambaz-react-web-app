import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="p-3" style={{ maxWidth: 350 }}>
            <h1 className="mb-3">Signup</h1>

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

            <input
                id="wd-password-verify"
                placeholder="verify password"
                type="password"
                className="form-control mb-2"
            />

            <Link
                id="wd-signup-btn"
                to="/Kambaz/Account/Profile"
                className="btn btn-primary w-100 mb-2"
            >
                Signup
            </Link>

            <Link to="/Kambaz/Account/Signin" id="wd-signin-link">
                Signin
            </Link>
        </div>
    );
}
