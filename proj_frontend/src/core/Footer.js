import React from 'react'

const Footer = () => {
    return (
        <>
            
            <hr className="mb-5" style={{
                width: '80%',
                backgroundColor: '#000000',
                height: .1,
                opacity: '0.7',
                borderColor : '#cccccc'
            }}/>

            <div className="row text-dark companies m-auto pt-3 text-center">
                <div className="col-12 brand-text">
                    The most recognized brands in the world love Surl
                </div>
                <div className="col-12 brands d-none d-sm-block">
                    <img className="mt-5 mb-5" src="brand-logos.png" alt="" width="70%" /> 
                </div>
            </div>

            <div className="row text-dark m-auto more">
                <div className="col-12 more-link text-white text-center">
                    More than a link shortener
                </div>
                <div className="col-12 get-started text-center mt-5">
                    <button className="hero-btn btn btn-primary btn-lg text-white">
                        Get Started for Free    
                    </button>
                </div>
            </div>

                <footer className="row m-auto pt-5 pb-3">

                <div className="col-1"></div>
{/* 1 */}
                    <div className="col-12 col-lg-2 pt-4">
                        <div className="footer-item">
                            <ul className="footer-items">
                                <li className="foot-item-head mb-2">Why Surl?</li>
                                <li className="foot-items">Surl 101</li>
                                <li className="foot-items">Integrations and API</li>
                                <li className="foot-items">Enterprise Class</li>
                                <li className="foot-items">Pricing</li>
                            </ul>
                        </div>
                    </div>
{/* 2 */}
                    <div className="col-12 col-lg-2 pt-4">
                        <div className="footer-item">
                            <ul className="footer-items">
                                <li className="foot-item-head mb-2">Solutions</li>
                                <li className="foot-items">Social Media</li>
                                <li className="foot-items">Digital Marketing</li>
                                <li className="foot-items">Customer Service</li>
                                <li className="foot-items">For Developers</li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <ul className="footer-items">
                                <li className="foot-item-head mb-2">Features</li>
                                <li className="foot-items">Link Management</li>
                                <li className="foot-items">Branded Links</li>
                                <li className="foot-items">Mobile Links</li>
                                <li className="foot-items">Campaign Management & Analytics</li>
                            </ul>
                        </div>
                    </div>
{/* 3 */}
                    <div className="col-12 col-lg-2 pt-4">
                        <div className="footer-item">
                            <ul className="footer-items">
                                <li className="foot-item-head mb-2">Resources</li>

                                <li className="foot-items">Blog</li>
                                <li className="foot-items">Resource Library</li>
                                <li className="foot-items">Developers</li>
                                <li className="foot-items">Support</li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <ul className="footer-items">
                            <li className="foot-item-head mb-2">Legal</li>
                                <li className="foot-items">Privacy Policy</li>
                                <li className="foot-items">Terms of Service</li>
                            </ul>
                        </div>
                    </div>
{/* 4 */}
                    <div className="col-12 col-lg-2 pt-4">
                        <div className="footer-item">
                            <ul className="footer-items">
                            <li className="foot-item-head mb-2">Company</li>

                                <li className="foot-items">About Bitly</li>
                                <li className="foot-items">Our Team</li>
                                <li className="foot-items">Careers</li>
                                <li className="foot-items">Press</li>
                                <li className="foot-items">Contact</li>
                                <li className="foot-items">Reviews</li>
                            </ul>
                        </div>
                    </div>
{/* 5 */}
                    <div className="col-12 col-lg-2 pt-4 footer-end d-none d-lg-block">
                        <div className="footer-logo">
                            <img className="foot-logo" src="logo.png" alt="logo" width="30%"/>
                        </div>
                        <div className="row brand mt-3 mb-3">
                            © 2020 Bitly Handmade in NYC, San Francisco, Denver, and all over the world.
                        </div>
                        <div className="row social">
                            <i className="lab la-twitter la-lg"></i>
                            <i className="lab la-discord la-lg"></i>
                            <i className="lab la-linkedin-in la-lg"></i>
                            <i className="lab la-github la-lg"></i>
                        </div>
                    </div>

                </footer>

        </>
    )
}

export default Footer
