import * as React from 'react';
import TextArea from './TextArea';
import Button from './Button';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import PostImg from './PostImg';

interface IPostFormProps {
    postImage: string,
    fetched?: boolean,
}

export default class PostForm extends React.Component<IPostFormProps & InjectedFormProps<IPostFormProps>> {
    public render() {
        const { handleSubmit, postImage, fetched } = this.props;

        return (
            <form >
                <Field label='Comentario' placeholder='Comentario' name='comment' type='text' component={TextArea} />
                { !fetched ? <Button block={true}>Agregar imagen</Button> :  <label>testing</label>}

                <PostImg postImage={postImage}/>
                
                <Button block={true}>Subir post</Button>
            </form>
        );
    }
}
/*
export default reduxForm<IPostFormProps> ({
    form: 'post',
})(PostForm);
*/