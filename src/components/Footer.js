import React from "react";
import '../components/styles.css';

const FooterBottom = () => {
    return (
        <>

        <div className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>All your motor desires can be found.</p>
                    </div>
                    <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: autotraders@company.com</p>
                    </div>
                    <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default FooterBottom;