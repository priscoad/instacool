import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    borderRadius: '4px',
    width: 'calc(100% - 30px)',
    height: '100px',
    marginBottom: '10px',
    resize: 'none',
} as React.CSSProperties;

const spanStyle = {
    fontSize: '12px',
    color: '#777',
    textTransform: 'uppercase',
    fontWeight: 900,
} as React.CSSProperties

interface ITextAreaProps {
    placeholder?: string,
    label: string,
}


const TextArea: React.FunctionComponent<WrappedFieldProps & ITextAreaProps> = props => {
    const { label, input } = props;
    return (
        <div>
            <span style={spanStyle}>
                {label}
            </span>
            <textarea {...props} {...input} style={style} />
        </div>
    );
}

export default TextArea;