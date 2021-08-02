import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    borderRadius: '4px',
    width: 'calc(100% - 30px)',
    marginBottom: '10px',
};

const spanStyle = {
    fontSize: '12px',
    color: '#777',
    textTransform: 'uppercase',
    fontWeight: 900,
} as React.CSSProperties

interface IInputProps {
    placeholder?: string,
    label: string,
}


const Input: React.FunctionComponent<WrappedFieldProps & IInputProps> = props => {
    const { label, input } = props;
    return (
        <div>
            <span style={spanStyle}>
                {label}
            </span>
            <input {...props} {...input} style={style} />
        </div>
    );
}

export default Input;