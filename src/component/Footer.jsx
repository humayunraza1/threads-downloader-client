import { Link, NavLink } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-container">

                <div className="footer-logo">
                    <h1>Thread Media Downloader</h1>
                </div>
                <div className="other-contents">
                    <nav>

                        <ul>
                            <li>
                                <Link to="/terms-and-condition">
                                    Terms and Condition
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">
                                    Privacy & Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq">
                                    <a>FAQ</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <p>&copy; {currentYear}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
