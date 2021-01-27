import React from 'react'
import {StyledFooter} from './FooterStyles'
import payment from '../../assets/payment.png'
import {Link} from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import google from '../../assets/google.svg'
import instagram from '../../assets/instagram.svg'
import veemo from '../../assets/veemo.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-container">
                <div className="upper">
                    <div className="payment">
                        <p className="header">Secure payments with</p>
                        <img src={payment} alt=""/>
                    </div>

                    <div className="about">
                        <p className="header">About</p>
                        <ul>
                            <Link to='/about'><li>About us</li></Link>
                            <Link to='/faq'><li>FAQ</li></Link>
                            <Link to='/contacts'><li>Contacts</li></Link>
                            <Link to='login'><li>Login</li></Link>
                            <Link to='register'><li>Register</li></Link>
                            <Link to='/terms-and-conditions'><li>Terms and conditions</li></Link>
                        </ul>
                    </div>

                    <div className="newsletter">
                        <p className="header">Newsletter</p>
                        <p className="desc">Join our newsletter to keep be informed about offers and news.</p>
                        <input type="email" className="email-address" placeholder='Your email'/>
                        <button>Subscribe</button>
                    </div>

                    <div className="settings">
                        <p className="header">Settings</p>
                        <div className="custom-select">
                            <select name="language" id="language">
                                <option value="english">English</option>
                                <option value="spanish">Español</option>
                                <option value="mexican">Mexican</option>
                                <option value="tagalog">Tagalog</option>
                            </select>
                            <span className="arrow"><i className="fas fa-chevron-down"></i></span>
                        </div>
                        <div className="custom-select">

                            <select name="currency" id="currency">
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="gbp">GBP</option>
                                <option value="php">PHP</option>
                            </select>
                            <span className="arrow"><i className="fas fa-chevron-down"></i></span>
                        </div>
                        


                    </div>
                </div>
            <hr/>
                <div className="lower">
                    <div className="social">
                        <img src={facebook} alt="facebook icon"/>
                        <img src={twitter} alt="twitter icon"/>
                        <img src={google} alt="google icon"/>
                        <img src={instagram} alt="instagram icon"/>
                        <img src={veemo} alt="veemo icon"/>
                    </div>
                    <p className="copyright">© Quick Food 2015</p>
                </div>
            </div>
            
        </StyledFooter>
    )
}

export default Footer
