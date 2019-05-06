import React from 'react';
import ReactDOM from 'react-dom';
import Book from './book.jsx';
import Axios from 'axios';

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allBooks: []
        }

        this.getAllBooks = this.getAllBooks.bind(this);
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        Axios.get('http://localhost:3000/books')
        .then(results => {
            this.setState({
                allBooks: results.data
            })
        })
        .then(() => {
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.allBooks.length > 0) {
            console.log('rendering on state');
            return (
                <div>
                
                {this.state.allBooks.map(value => {
                    return (
                        <Book bookInfo={value}/>
                    )
                })}
                
                </div>
            )
        } else {
            console.log('rendering on nothing');
            return (
                <div></div>
            )
        }
    }
}


ReactDOM.render(<Recommendations />, document.getElementById('app'));