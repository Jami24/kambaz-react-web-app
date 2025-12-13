import { MdDoNotDisturbAlt } from "react-icons/md";
import {FaCheckCircle, FaStream} from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import {IoHomeOutline, IoMegaphoneOutline} from "react-icons/io5";
import {TbReportAnalytics} from "react-icons/tb";
import {IoIosNotifications} from "react-icons/io";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px" }}>
            <h2>Course Status</h2>

            {/* Unpublish / Publish row */}
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-100 text-nowrap"
                    >
                        <MdDoNotDisturbAlt className="me-2 fs-5" />
                        Unpublish
                    </Button>
                </div>
                <div className="w-50 ps-1">
                    <Button
                        variant="success"
                        size="lg"
                        className="w-100"
                    >
                        <FaCheckCircle className="me-2 fs-5" />
                        Publish
                    </Button>
                </div>
            </div>

            <br />

            {/* Canvas-style buttons */}
            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <BiImport className="me-2 fs-5" />
                Import Existing Content
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <LiaFileImportSolid className="me-2 fs-5" />
                Import from Commons
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <IoHomeOutline className="me-2 fs-5" />
                Choose Home Page
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <FaStream className="me-2 fs-5" />
                View Course Stream
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <IoMegaphoneOutline className="me-2 fs-5" />
                New Announcement
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <TbReportAnalytics className="me-2 fs-5" />
                New Analytics
            </Button>

            <Button
                variant="secondary"
                size="lg"
                className="me-2 fs-5"
            >
                <IoIosNotifications className="me-2 fs-5" />
                View Course Notifications
            </Button>
        </div>
    );
}
