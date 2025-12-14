import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

type NavConfig = {
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    activePrefix: string;
    id: string;
};

export default function Navigation() {
    const { pathname } = useLocation();

    const links: NavConfig[] = [
        {
            label: "Dashboard",
            path: "/Kambaz/Dashboard",
            icon: AiOutlineDashboard,
            activePrefix: "/Kambaz/Dashboard",
            id: "wd-dashboard-link",
        },
        {
            // As in book: Courses points to Dashboard
            label: "Courses",
            path: "/Kambaz/Dashboard",
            icon: LiaBookSolid,
            activePrefix: "/Kambaz/Courses",
            id: "wd-course-link",
        },
        {
            label: "Calendar",
            path: "/Kambaz/Calendar",
            icon: IoCalendarOutline,
            activePrefix: "/Kambaz/Calendar",
            id: "wd-calendar-link",
        },
        {
            label: "Inbox",
            path: "/Kambaz/Inbox",
            icon: FaInbox,
            activePrefix: "/Kambaz/Inbox",
            id: "wd-inbox-link",
        },
        {
            label: "Labs",
            path: "/Labs",
            icon: LiaCogSolid,
            activePrefix: "/Labs",
            id: "wd-labs-link",
        },
    ];

    const activeClass = (active: boolean) =>
        active ? "text-danger bg-white" : "text-white bg-black";

    return (
        <ListGroup
            id="wd-kambaz-navigation"
            style={{ width: 120 }}
            className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            <ListGroupItem
                className="bg-black border-0 text-center"
                as="a"
                href="https://www.northeastern.edu/"
                target="_blank"
                rel="noreferrer"
                id="wd-neu-link"
            >
                <img src="/images/NEU.png" width="75" alt="Northeastern University" />
            </ListGroupItem>

            {/* Account special styling */}
            {(() => {
                const active = pathname.includes("/Kambaz/Account");
                return (
                    <ListGroupItem
                        as={Link}
                        to="/Kambaz/Account"
                        id="wd-account-link"
                        className={`text-center border-0 bg-black ${activeClass(active)}`}
                    >
                        <FaRegCircleUser
                            className={`fs-1 ${active ? "text-danger" : "text-white"}`}
                        />
                        <br />
                        Account
                    </ListGroupItem>
                );
            })()}

            {/* The rest */}
            {links.map((link) => {
                const active = pathname.startsWith(link.activePrefix);
                const Icon = link.icon;

                return (
                    <ListGroupItem
                        key={link.id}
                        as={Link}
                        to={link.path}
                        id={link.id}
                        className={`bg-black text-center border-0 ${activeClass(active)}`}
                    >
                        <Icon className="fs-1 text-danger" />
                        <br />
                        {link.label}
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
}
