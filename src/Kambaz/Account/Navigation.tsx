import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector(
        (state: any) => state.accountReducer
    );

    const makeClass =
        ({ isActive }: { isActive: boolean }) =>
            `list-group-item border-0 ${
                isActive ? "active" : "text-danger"
            }`;

    return (
        <div id="wd-account-navigation" className="ms-3 mt-4">
            <ListGroup className="wd fs-5 rounded-0">
                {!currentUser && (
                    <>
                        <NavLink
                            to="/Kambaz/Account/Signin"
                            className={makeClass}
                            end
                        >
                            Signin
                        </NavLink>

                        <NavLink
                            to="/Kambaz/Account/Signup"
                            className={makeClass}
                        >
                            Signup
                        </NavLink>
                    </>
                )}

                {currentUser && (
                    <>
                        <NavLink
                            to="/Kambaz/Account/Profile"
                            className={makeClass}
                        >
                            Profile
                        </NavLink>

                        {currentUser.role === "ADMIN" && (
                            <NavLink
                                to="/Kambaz/Account/Users"
                                className={makeClass}
                            >
                                Users
                            </NavLink>
                        )}
                    </>
                )}
            </ListGroup>
        </div>
    );
}