import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    /* background-color: var(--gray); */
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 100;
    transform: translateX(-50%);
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: unset;
        align-items: unset;
        padding: 1rem;
    }

    .logo-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hamburger{
            position: relative;
            width: 40px;
            height: 28px;
            cursor: pointer;
            display: none;
            @media screen and (max-width: 768px){
                display: block;
            }
            span{
                position: absolute;
                width: 100%;
                height: 4px;
                background-color: white;
                border-radius: 10px;
                &:nth-child(1){
                    top: 0;
                    left: 0;
                }
                &:nth-child(4){
                    bottom: 0;
                    left: 0;
                }
                &:nth-child(2){
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:nth-child(3){
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        .hamburger.active{
            span{
                &:nth-child(1){
                    transform: scaleX(0)
                }
                &:nth-child(4){
                    transform: scaleX(0)
                }
                &:nth-child(2){
                    transform: translateY(-50%) rotate(45deg);
                }
                &:nth-child(3){
                    transform: translateY(-50%) rotate(-45deg);
                }
            }
        }
    }
    .nav-list{
        display: flex;
        gap: 2rem;
        @media screen and (max-width: 768px){
            flex-direction: column;
            position: absolute;
            width: 100%;
            background-color: var(--gray);
            top: 0;
            left: 0;
            margin-top: 71px;
            height: 0;
            padding: 0 1rem;
            overflow: hidden;
        }
        a{
            color: white;
        }
    }
    .nav-list.active{
        padding: 3rem 1rem !important;
        height: 370px !important;
    }
`