import * as React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Center from './Center';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { ILogin } from '../ducks/Users'

class RegisterForm extends React.Component<InjectedFormProps<ILogin>> {
    public render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
                <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
                <Button block={true}>Enviar</Button>
                <Center>
                    <Link to='/'>Iniciar sesión</Link>
                </Center>
            </form>
        );
    }
}

export default reduxForm<ILogin> ({
    form: 'register',
})(RegisterForm);