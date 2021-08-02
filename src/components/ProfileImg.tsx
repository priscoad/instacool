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

const handleChange = (submitProfileImg: () => void, input: WrappedFieldInputProps) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { onChange } = input;
    const { files } = e.target;
    if(files){
        await onChange(files[0]);
        submitProfileImg()
    }
}

interface IProfileImg {
    submitProfileImg: () => void,
    profileImage: string,
}

const RenderField: React.FunctionComponent<WrappedFieldProps & IProfileImg> = ({ input, submitProfileImg, profileImage }) => 
    <div>
        <input onChange={handleChange(submitProfileImg, input)} style={style.file} type='file' id='profileImage' />
        <label htmlFor='profileImage' >
            <img style={style.img} src={profileImage} />
        </label>
    </div>
    
class ProfileImg extends React.Component<InjectedFormProps<{}, IProfileImg> & IProfileImg> {
    public render(){
        const { handleSubmit, submitProfileImg, profileImage } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field profileImage={profileImage} name='profileImg' component={RenderField} submitProfileImg={submitProfileImg} />
            </form>
        );
    }
}

export default reduxForm<{}, IProfileImg>({
    form: 'profileImg',
})(ProfileImg)