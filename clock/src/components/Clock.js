import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString('en-GB', {weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric', second:'numeric'})
        }
    }

    componentDidMount() {
        setInterval(
            () => this.setState({
                time: new Date().toLocaleString('en-GB', {weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric', second:'numeric'})
            }),
            1000
        );
    }
    
    render() { 
        return (
            <p className="App-clock">
                Now is: {this.state.time}.
            </p>

        );
    } 
}
 
export default Clock;