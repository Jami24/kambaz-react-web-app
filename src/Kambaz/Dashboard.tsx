import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr />

            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">Full Stack software developer</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Add at least 6 more cards (re-use the image for now) */}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
                        <img src="/images/webdev.jpg" width={200} />
                        <div><h5>CS4550 Web Dev</h5><p>HTML • CSS • JS</p><button>Go</button></div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/9012/Home" className="wd-dashboard-course-link">
                        <img src="/images/OOD.jpg" width={200} />
                        <div><h5>CS5001 OOD</h5><p>Java & Patterns</p><button>Go</button></div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2468/Home" className="wd-dashboard-course-link">
                        <img src="/images/apps.jpg" width={200} />
                        <div><h5>CS5610 Web Apps</h5><p>Node • React</p><button>Go</button></div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1357/Home" className="wd-dashboard-course-link">
                        <img src="/images/algo.jpg" width={200} />
                        <div><h5>CS5800 Algorithms</h5><p>Design & Analysis</p><button>Go</button></div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1122/Home" className="wd-dashboard-course-link">
                        <img src="/images/scale.jpg" width={200} />
                        <div><h5>CS6650 SD</h5><p>Scalable Dist. Systems</p><button>Go</button></div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/7788/Home" className="wd-dashboard-course-link">
                        <img src="/images/compiler.jpg" width={200} />
                        <div><h5>CS6120 Compilers</h5><p>Parse • IR • Opt</p><button>Go</button></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
