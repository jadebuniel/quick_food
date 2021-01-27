import React, {useContext, useState, useEffect, useRef} from 'react'
import {IsMobileContext} from '../../context/IsMobile'
import logo from '../../assets/logo.svg'
import {StyledNavbar} from './NavbarStyles'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [isMobile] = useContext(IsMobileContext)
    const [hamburger, setHamburger] = useState(false)
    const nav = useRef()

    useEffect(() => {
        setHamburger(!isMobile && false)
    }, [isMobile])

    document.addEventListener('scroll', () => {
        if (nav.current){
            if (window.scrollY <= 100){
                nav.current.style.backgroundColor = 'transparent'
            } else{
                nav.current.style.backgroundColor = 'var(--gray)'
            }
        }
    })


    return (
        <StyledNavbar ref={nav}>
            <div className="logo-container">
                <Link to='/'><img src={logo} alt=""/></Link>
                <div className={hamburger ? "hamburger active" : "hamburger"} onClick={() => setHamburger(!hamburger)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={hamburger ? "nav-list active" : "nav-list"}>
                <Link to='/'><li className="nav-item">Home</li></Link>
                <Link to='/restaurants'><li className="nav-item">Restaurants</li></Link>
                <Link to='/about'><li className="nav-item">About Us</li></Link>
                <Link to='/faq'><li className="nav-item">FAQ</li></Link>
                <Link to='/pages'><li className="nav-item">Pages</li></Link>
                <Link to='/login'><li className="nav-item">Login</li></Link>
                
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
