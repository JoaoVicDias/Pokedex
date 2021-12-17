import React from 'react'

import { InputComponent } from './styles'

interface IIpuntProps {
    type: string;
    name: string;
    placeHolder: string;
    otherClassName?: string;
    onChange: (e: any) => void;
}

const Input: React.FC<IIpuntProps> = ({ name, otherClassName, placeHolder, type, onChange}) => {

    return <InputComponent
        type={type}
        name={name}
        placeholder={placeHolder}
        className={otherClassName}
        onChange={onChange} 
        autoComplete='off'
        />
}

export default Input