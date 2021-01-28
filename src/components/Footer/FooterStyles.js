import styled from 'styled-components'

export const StyledFooter = styled.div`
    max-width: 1920px;
    padding: 3rem 0;
    margin: 0 auto;
    .footer-container{
        max-width: 1700px;
        margin: 0 auto;
        padding: 0 3rem;
        .upper{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2rem;
            margin-bottom: 3rem;

            @media screen and (max-width: 1060px){
                grid-template-columns: 1fr 1fr;
                justify-content: center;
            }
            @media screen and (max-width: 590px){
                grid-template-columns: 1fr;
                row-gap: 3rem;
            }
            .header{
            font-size: 1.25rem;
            font-weight: 400;
            margin-bottom: 1rem;

        }
        .payment{
            @media screen and (max-width: 590px){
                text-align: center;
            }
            img{
                width: 60%;
                min-width: 235px;
            }
        }
        .about{
            justify-self: center;
            @media screen and (max-width: 1060px){
                justify-self: start;
            }
            @media screen and (max-width: 590px){
                text-align: center;
                justify-self: center;
            }
            ul{
                li{
                    color: var(--text-lighter);
                    margin-bottom: 5px;
                    font-size: 14px;
                }
            }
        }
        .newsletter{
            @media screen and (max-width: 590px){
                text-align: center;
            }
            .desc{
                color: var(--text-lighter);
                margin-bottom: 1rem;
                font-size: 14px;
            }
            .email-address{
                display: block;
                width: 100%;
                outline: none;
                padding: 1rem;
                border-radius: 5px;
                font-size: 1rem;
                border: none;
                border: 2px solid var(--light-gray);
                min-width: 250px;
            }
            button{
                margin-top: 1rem;
                padding: 0.75rem 2rem;
                font-size: 1rem;
                background-color: var(--text-lighter);
                color: white;
                border-radius: 5px;
                outline: none;
                cursor: pointer;
            }
        }
        .settings{
            @media screen and (max-width: 590px){
                text-align: center;
            }
            .custom-select{
                position: relative;
                display: inline-block;
                    select{
                    display: block;
                    width: 60%;
                    padding: 1rem;
                    margin-bottom: 1rem;
                    outline: none;
                    min-width: 230px;
                    cursor: pointer;
                    background-color: whitesmoke;
                    border: none;
                    }
                    .arrow{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 3rem;
                        height: 3rem;
                        background-color: whitesmoke;
                        pointer-events: none;
                        display: grid;
                        place-items: center;
                    }
            }
        }
        }

        hr{
            display: block;
            border: none;
            border-top: 2px solid var(--light-gray);
        }
        .lower{
            margin-top: 3rem;
            .social{
                text-align: center;
                img{
                    margin: 0 0.5rem;
                    &:hover{
                        transform: scale(1.1)
                    }
                }
            }
            .copyright{
                text-align: center;
                margin-top: 1rem;
                color: var(--text-lighter);
            }
        }
    }
`