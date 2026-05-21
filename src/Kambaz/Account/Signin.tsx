import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signin = async () => {
        const user = await client.signin(credentials);

        if (!user) {
            return;
        }

        dispatch(setCurrentUser(user));
        navigate("/Kambaz/Dashboard");
    };

    return (
        <div id="wd-signin-screen" className="p-3" style={{ maxWidth: 350 }}>
            <h1 className="mb-3">Signin</h1>

            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                onChange={(e) =>
                    setCredentials({
                        ...credentials,
                        username: e.target.value,
                    })
                }
            />

            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"
                onChange={(e) =>
                    setCredentials({
                        ...credentials,
                        password: e.target.value,
                    })
                }
            />

            <button
                id="wd-signin-btn"
                className="btn btn-primary w-100 mb-2"
                onClick={signin}
            >
                Signin
            </button>

            <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
                Signup
            </Link>
        </div>
    );
}