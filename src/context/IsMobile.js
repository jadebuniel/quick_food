import React, {createContext, useState, useEffect} from 'react'

export const IsMobileContext = createContext()

export const IsMobileContextProvider = ( props ) => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768 ? true : false)
    }, [])
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 768 ? true : false)
    })


    return(
        <IsMobileContext.Provider value={[isMobile, setIsMobile]}>
            {props.children}
        </IsMobileContext.Provider>
    )
}   