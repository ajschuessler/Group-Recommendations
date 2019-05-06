import React from 'react';
import ReactDOM from 'react-dom';

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log('component mounted');
    }
}


ReactDOM.render(<Recommendations />, document.getElementById('app'));