import * as React from 'react';
import firebase from 'firebase';

import Footer from '../components/Footer';

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px', 
    marginBottom: '10px',
    width: '300px',
};

interface IPostProps {
    image: string,
    like: () => void,
    share: () => void,
    created_at?: firebase.firestore.Timestamp,
}

export default class Post extends React.Component<IPostProps> {
    public render(){
        const { image, like, share, created_at } = this.props;
        return (
            <div style={style}>
                <img style={{width: '300px'}} src={image} />
                <Footer like={like} share={share}/>
                { created_at && <label>Created at:{created_at.toDate().toDateString()}</label> }
            </div>
        );
    }
}