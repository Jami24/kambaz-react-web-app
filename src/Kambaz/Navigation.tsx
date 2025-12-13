import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function Navigation() {
    const location = useLocation();
    const { pathname } = location;

    const isActive = (to: string) => pathname.startsWith(to);

    return (
        <ListGroup
            id="wd-kambaz-navigation"
            style={{ width: 120 }}
            className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            {/* NEU logo at top */}
            <ListGroupItem
                className="bg-black border-0 text-center"
                as="a"
                href="https://www.northeastern.edu/"
                target="_blank"
                id="wd-neu-link"
            >
                <img
                    src="/images/NEU.png"
                    width="75"
                    alt="Northeastern University"
                />
            </ListGroupItem>

            {/* Account (white icon, black background when inactive) */}
            <ListGroupItem
                className={`border-0 text-center ${
                    isActive("/Kambaz/Account") ? "bg-white" : "bg-black"
                }`}
            >
                <Link
                    to="/Kambaz/Account"
                    id="wd-account-link"
                    className={`text-decoration-none ${
                        isActive("/Kambaz/Account") ? "text-danger" : "text-white"
                    }`}
                >
                    <FaRegCircleUser
                        className={`fs-1 ${
                            isActive("/Kambaz/Account") ? "text-danger" : "text-white"
                        }`}
                    />

                    <br />
                    <span className="small">Account</span>
                </Link>
            </ListGroupItem>

            {/* Dashboard (red icon/text when active, red icon always) */}
            <ListGroupItem
                className={`border-0 text-center ${
                    isActive("/Kambaz/Dashboard") ? "bg-white" : "bg-black"
                }`}
            >
                <Link
                    to="/Kambaz/Dashboard"
                    id="wd-dashboard-link"
                    className={`text-decoration-none ${
                        isActive("/Kambaz/Dashboard") ? "text-danger" : "text-white"
                    }`}
                >
                    <AiOutlineDashboard className="fs-1 text-danger" />
                    <br />
                    <span className="small">Dashboard</span>
                </Link>
            </ListGroupItem>

            {/* Courses – send to some default course home */}
            <ListGroupItem
                className={`border-0 text-center ${
                    isActive("/Kambaz/Courses") ? "bg-white" : "bg-black"
                }`}
            >
                <Link
                    to="/Kambaz/Courses/1234/Home"
                    id="wd-course-link"
                    className={`text-decoration-none ${
                        isActive("/Kambaz/Courses") ? "text-danger" : "text-white"
                    }`}
                >
                    <LiaBookSolid className="fs-1 text-danger" />
                    <br />
                    <span className="small">Courses</span>
                </Link>
            </ListGroupItem>

            {/* Calendar */}
            <ListGroupItem
                className={`border-0 text-center ${
                    isActive("/Kambaz/Calendar") ? "bg-white" : "bg-black"
                }`}
            >
                <Link
                    to="/Kambaz/Calendar"
                    id="wd-calendar-link"
                    className={`text-decoration-none ${
                        isActive("/Kambaz/Calendar") ? "text-danger" : "text-white"
                    }`}
                >
                    <IoCalendarOutline className="fs-1 text-danger" />
                    <br />
                    <span className="small">Calendar</span>
                </Link>
            </ListGroupItem>

            {/* Inbox */}
            <ListGroupItem
                className={`border-0 text-center ${
                    isActive("/Kambaz/Inbox") ? "bg-white" : "bg-black"
                }`}
            >
                <Link
                    to="/Kambaz/Inbox"
                    id="wd-inbox-link"
                    className={`text-decoration-none ${
                        isActive("/Kambaz/Inbox") ? "text-danger" : "text-white"
                    }`}
                >
                    <FaInbox className="fs-1 text-danger" />
                    <br />
                    <span className="small">Inbox</span>
                </Link>
            </ListGroupItem>

            {/* Labs */}
            <ListGroupItem
                className={`border-0 text-center ${
                    isActive("/Labs") ? "bg-white" : "bg-black"
                }`}
            >
                <Link
                    to="/Labs"
                    id="wd-labs-link"
                    className={`text-decoration-none ${
                        isActive("/Labs") ? "text-danger" : "text-white"
                    }`}
                >
                    <LiaCogSolid className="fs-1 text-danger" />
                    <br />
                    <span className="small">Labs</span>
                </Link>
            </ListGroupItem>
        </ListGroup>
    );
}
