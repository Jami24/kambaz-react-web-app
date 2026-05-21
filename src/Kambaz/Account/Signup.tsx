import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const [verifyPassword, setVerifyPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = async () => {
        if (user.password !== verifyPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const currentUser = await client.signup(user);
            dispatch(setCurrentUser(currentUser));
            navigate("/Kambaz/Account/Profile");
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div id="wd-signup-screen" className="p-3" style={{ maxWidth: 350 }}>
            <h1 className="mb-3">Signup</h1>

            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                value={user.username || ""}
                onChange={(e) =>
                    setUser({
                        ...user,
                        username: e.target.value,
                    })
                }
            />

            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"
                value={user.password || ""}
                onChange={(e) =>
                    setUser({
                        ...user,
                        password: e.target.value,
                    })
                }
            />

            <input
                id="wd-password-verify"
                placeholder="verify password"
                type="password"
                className="form-control mb-2"
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
            />

            <button
                id="wd-signup-btn"
                className="btn btn-primary w-100 mb-2"
                onClick={signup}
            >
                Signup
            </button>

            <Link to="/Kambaz/Account/Signin" id="wd-signin-link">
                Signin
            </Link>
        </div>
    );
}