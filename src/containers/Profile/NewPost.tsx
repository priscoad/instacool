import * as React from 'react';

import Card from '../../components/Card';
import Container from '../../components/Container';
import Title from '../../components/Title';

import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { IState } from '../../ducks';
import PostImg from '../../components/PostImg';

class NewPost extends React.Component {
    public render(){        
        return (
            <Container center={true}>
                <Card>
                    <Title>Agregar nuevo posts</Title>
                    <PostImg />
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state: IState) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)