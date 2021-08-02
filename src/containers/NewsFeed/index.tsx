import * as React from 'react';

import Post from '../../components/Post';
import Container from '../../components/Container';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import * as postsDuck from '../../ducks/Posts';
import { IState } from '../../ducks';

interface INewsFeedProps {
    fetchPosts: () => void,
    like: (a: string) => void,
    share: (a: string) => void,
    fetched: boolean,
    loading: boolean,
    data: postsDuck.IDataPosts,
}

class NewsFeed extends React.Component<INewsFeedProps> {
    constructor(props: INewsFeedProps){
        super(props);
        const { fetchPosts, fetched } = props;
        if(fetched){
            return
        }
        fetchPosts();
    }

    public render(){
        const { data } = this.props;
        return (
            <Container>
                {Object.keys(data).map(x => {
                    const post = data[x];
                    return <div key={x} style={{ margin: '0 auto'}}>
                        <Post 
                            like={this.handleLike(x)}
                            share={this.handleShare(x)} 
                            image={post.imageUrl}
                        />
                    </div>
                })}

                
            </Container>
        );
    }

    private handleLike = (id: string) => () => {
        const { like } = this.props;
        like(id)
    }

    private handleShare = (id: string) => () => {
        const { share } = this.props;
        share(id)
    }
}

const mapStateToProps = (state: IState) => {
    const { Posts: { data, fetched, fetching } } = state;
    const loading = fetching || fetched
    return {
        fetched, 
        loading,
        data,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(postsDuck, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)