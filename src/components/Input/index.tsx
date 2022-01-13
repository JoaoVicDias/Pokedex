import React from 'react'

import { InputComponent } from './styles'

interface IIpuntProps {
    type: string;
    name: string;
    placeHolder: string;
    otherClassName?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IIpuntProps> = ({ name, otherClassName, placeHolder, type, onChange }) =>
    <InputComponent
        type={type}
        name={name}
        placeholder={placeHolder}
        className={otherClassName}
        onChange={onChange}
        autoComplete='off'
    />


export default Input