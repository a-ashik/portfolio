import React from 'react';

const Footer = () => {
    return (
        <div>
        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h5 className="text-uppercase">ABDULLAH ASHIK</h5>
                        <p>Passionate Frontend Developer </p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social media</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Languages</h5>
                        <ul className="list-unstyled">
                            <li>Bangla</li>
                            <li>English</li>
                            <li>Hindi</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact</h5>
                        <p>Number: 01611904208</p>
                        <p>Email: ashikq100@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright: Abdullah Ashik
            </div>

        </footer>
        </div>
    );
};

export default Footer;