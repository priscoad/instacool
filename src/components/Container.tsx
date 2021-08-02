import * as React from 'react';

const style = (center: boolean): React.CSSProperties => ({
    backgroundColor: '#eee',
    height: 'calc(100vh - 20px)',
    padding: '10px 15px',
    width: 'calc(100vw - 30px)',
    display: 'flex',
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
    flexDirection: 'column',
});

interface IContainerProps {
    center?: boolean,
}

export default class Container extends React.Component<IContainerProps> {
    public render(){
        const { children, center = false } = this.props;
        return (
            <div style={style(center)}>
                {children}
            </div>
        );
    }
}