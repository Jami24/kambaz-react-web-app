import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
    const makeClass =
        ({ isActive }: { isActive: boolean }) =>
            `list-group-item border-0 ${
                isActive ? "active" : "text-danger"
            }`;

    return (
        <div id="wd-account-navigation" className="ms-3 mt-4">
            <ListGroup className="wd fs-5 rounded-0">
                <NavLink to="/Kambaz/Account/Signin" className={makeClass} end>
                    Signin
                </NavLink>
                <NavLink to="/Kambaz/Account/Signup" className={makeClass}>
                    Signup
                </NavLink>
                <NavLink to="/Kambaz/Account/Profile" className={makeClass}>
                    Profile
                </NavLink>
            </ListGroup>
        </div>
    );
}
