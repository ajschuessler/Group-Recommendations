import React from 'react';
import ReactDOM from 'react-dom';
import Book from './book.jsx';
import Axios from 'axios';

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allBooks: [],
            currentContentType: 'bookSelect',
        }

        this.getAllBooks = this.getAllBooks.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
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
            purchaseUrl: document.getElementById('purchaseUrl').value,
            imageUrl: document.getElementById('imageUrl').value,
            contentType: document.getElementById('contentType').value,
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleContentChange(e) {
        this.setState({
            currentContentType: e.target.id
        })
    }

    render() {

            return (
                <div>

                    <h1>My Recommendations</h1>
                    
                    <div id='bookSelectContainer'>
                        <img onClick={(e) => this.handleContentChange(e)} id='bookSelect' src={`https://image.flaticon.com/icons/png/512/130/130304.png`}></img>
                    </div>

                    <div id='movieSelectContainer'>
                        <img onClick={(e) => this.handleContentChange(e)} id='movieSelect' src={`http://cdn.onlinewebfonts.com/svg/img_572192.png`}></img>
                    </div>

                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <label>Title</label>
                            <input type="text" id="title" />
                        </div>
                        
                        <div>
                            <label>Author</label>
                            <input type="text" id="author" />
                        </div>
                        
                        <div>
                            <label>ImageUrl</label>
                            <input type="text" id="imageUrl" />
                        </div>

                        <div>
                            <label>purchaseUrl</label>
                            <input type="text" id="purchaseUrl" />
                        </div>

                        

                        <div>
                            <label>This is a:</label>
                            <select id='contentType'>
                                <option value="bookSelect">Book</option>
                                <option value="movieSelect">Movie</option>
                                <option value="tvShowSelect">TV Show</option>
                            </select>
                        </div>

                        <div>
                            <button id='addToListButton'>Add To List</button>
                        </div>

                    </form>

                
                    {this.state.allBooks
                    .filter(value => {
                        if (value.contentType === this.state.currentContentType) {
                            return value;
                        }
                    })
                    .map(value => {
                        return (
                            <Book bookInfo={value} getAllBooks={this.getAllBooks}/>
                        )
                    })}
                
                </div>
            )
    }
}


ReactDOM.render(<Recommendations />, document.getElementById('app'));