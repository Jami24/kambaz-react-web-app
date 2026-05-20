import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector(
        (state: any) => state.accountReducer
    );

    const fetchProfile = () => {
        if (!currentUser) {
            navigate("/Kambaz/Account/Signin");
            return;
        }

        setProfile(currentUser);
    };

    const signout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div id="wd-profile-screen" className="p-3" style={{ maxWidth: 350 }}>
            <h1 className="mb-3">Profile</h1>

            {profile && (
                <div>
                    <input
                        id="wd-username"
                        defaultValue={profile.username}
                        className="form-control mb-2"
                        onChange={(e) =>
                            setProfile({ ...profile, username: e.target.value })
                        }
                    />

                    <input
                        id="wd-password"
                        defaultValue={profile.password}
                        type="password"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setProfile({ ...profile, password: e.target.value })
                        }
                    />

                    <input
                        id="wd-firstname"
                        defaultValue={profile.firstName}
                        className="form-control mb-2"
                        onChange={(e) =>
                            setProfile({ ...profile, firstName: e.target.value })
                        }
                    />

                    <input
                        id="wd-lastname"
                        defaultValue={profile.lastName}
                        className="form-control mb-2"
                        onChange={(e) =>
                            setProfile({ ...profile, lastName: e.target.value })
                        }
                    />

                    <input
                        id="wd-dob"
                        defaultValue={profile.dob}
                        type="date"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setProfile({ ...profile, dob: e.target.value })
                        }
                    />

                    <input
                        id="wd-email"
                        defaultValue={profile.email}
                        type="email"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                        }
                    />

                    <select
                        id="wd-role"
                        defaultValue={profile.role}
                        className="form-select mb-3"
                        onChange={(e) =>
                            setProfile({ ...profile, role: e.target.value })
                        }
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button
                        onClick={signout}
                        id="wd-signout-btn"
                        className="btn btn-danger w-100"
                    >
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}