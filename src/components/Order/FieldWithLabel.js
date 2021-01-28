import React from 'react'
import styled from 'styled-components'

const StyledField = styled.div`
    margin-top: 2rem;
    width: 100%;
    label{
        display: block;
        font-weight: 700;
    }
    input[type='text']{
        padding: 0.8rem;
        font-size: 1rem;
        border: none;
        border: 2px solid var(--light-gray);
        margin-top: 0.5rem;
        width: 100%;
        outline: none;
    }
    textarea{
        padding: 0.8rem;
        font-size: 1rem;
        border: none;
        border: 2px solid var(--light-gray);
        margin-top: 0.5rem;
        width: 100%;
        min-height: 200px;
        outline: none;
        resize: none;
        &::placeholder{
            font-family: 'Roboto', sans-serif;
            font-size: 0.9rem;
        }
    }
`

const FieldWithLabel = ({id, label, placeholder, type}) => {
    return (
        <StyledField id={id}>
            <label htmlFor={id}> {label}</label>
            {type == 'text' && <input type="text" id={id} placeholder={placeholder}/>}
            {type == 'textarea' && <textarea type="text" id={id} placeholder={placeholder} />}
        </StyledField>
    )
}

export default FieldWithLabel
