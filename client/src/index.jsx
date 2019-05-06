import React from 'react';
import ReactDOM from 'react-dom';
import Book from './book.jsx';

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allBooks: [
                {title: 'Where The Crawdads Sing', author: 'Delia Owens'},
                {title: 'East of Eden', author: 'John Steinbeck'},
                {title: 'The Grapes of Wrath', author: 'John Steinbeck'},
                {title: 'Walden', author: 'Henry David Thoreau'},
            ]

        }
    }

    componentDidMount() {
        console.log('component mounted');
    }

    render() {
        return (
            <div>
            
            {this.state.allBooks.map(value => {
                return (
                    <Book bookInfo={value}/>
                )
            })}
            
            </div>
        )
    }
}


ReactDOM.render(<Recommendations />, document.getElementById('app'));