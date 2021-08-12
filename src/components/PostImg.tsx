import * as React from 'react';
import { reduxForm, InjectedFormProps, Field, WrappedFieldProps, WrappedFieldInputProps } from 'redux-form';

const style = {
    img: {
        borderRadius: '100%',
        width: '100px',
        height: '100px',
    },
    file: {
        display: 'none',
    }
}

const handleChange = (input: WrappedFieldInputProps) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { onChange } = input;
    const { files } = e.target;
    if(files){
        await onChange(files[0]);
    }
}


interface IPostImg {
    postImage: string,
}

const RenderField: React.FunctionComponent<WrappedFieldProps & IPostImg> = ({ input, postImage }) => 
    <div>
        <input onChange={handleChange(input)} style={style.file} type='file' id='postImage' />
        <label htmlFor='postImage' >
            <img style={style.img} src={postImage} />
        </label>
    </div>
    
export default class PostImg extends React.Component<IPostImg> {
    public render(){
        const { postImage } = this.props;
        return (
            <form >
                <Field postImage={postImage} name='postImage' component={RenderField} />
            </form>
        );
    }
}