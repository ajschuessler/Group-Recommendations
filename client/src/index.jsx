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

    handleSubmit() {
        Axios.post('http://localhost:3000/addBook', {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            link: document.getElementById('link').value
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {

            return (
                <div>

                    <h1>Book Recommendations</h1>

                    <form onSubmit={this.handleSubmit}>
                    
                        <label>Title</label>
                        <input type="text" id="title" />
                        
                        <label>Author</label>
                        <input type="text" id="author" />

                        <label>Link</label>
                        <input type="text" id="link" />

                        <button >Add To List</button>
                    
                    </form>

                
                    {this.state.allBooks.map(value => {
                        return (
                            <Book bookInfo={value} getAllBooks={this.getAllBooks}/>
                        )
                    })}
                
                </div>
            )
    }
}


ReactDOM.render(<Recommendations />, document.getElementById('app'));