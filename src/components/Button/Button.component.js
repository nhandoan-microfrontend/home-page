import React from 'react'
import { ButtonWrapper } from './Button.component.style'

const Button = ({children, styles, onClick}) => {
    return (
        <ButtonWrapper onClick={onClick} {...styles}>
            {children}
        </ButtonWrapper>
    )
}

export default Button
