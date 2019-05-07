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
            rating: Number(document.getElementById('rating').value),
            youtubeEmbedTag: document.getElementById('youtubeEmbedTag').value
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

                    <h1>Content Blog</h1>

                    <h2>Filter By:</h2>
                    
                    <div id='bookSelectContainer'>
                        <img onClick={(e) => this.handleContentChange(e)} id='bookSelect' src={`https://freeiconshop.com/wp-content/uploads/edd/book-open-outline-filled.png`}></img>
                    </div>

                    <div id='movieSelectContainer'>
                        <img onClick={(e) => this.handleContentChange(e)} id='movieSelect' src={`https://www.freeiconspng.com/uploads/movie-icon-11.png`}></img>
                    </div>

                    <div id='youtubeSelectContainer'>
                        <img onClick={(e) => this.handleContentChange(e)} id='youtubeSelect' src={`http://logok.org/wp-content/uploads/2014/08/Youtube-logo-2017-640x480.png`}></img>
                    </div>

                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <label>Title</label>
                            <input type="text" id="title" />
                        </div>
                        
                        <div>
                            <label>Author/Director</label>
                            <input type="text" id="author" />
                        </div>
                        
                        <div>
                            <label>Image Url</label>
                            <input type="text" id="imageUrl" />
                        </div>

                        <div>
                            <label>View/Purchase Url</label>
                            <input type="text" id="purchaseUrl" />
                        </div>

                        <div>
                            <label>YouTube Embed Tag</label>
                            <input type="text" id="youtubeEmbedTag" />
                        </div>

                        

                        <div>
                            <label>This is a:</label>
                            <select id='contentType'>
                                <option value="bookSelect">Book</option>
                                <option value="movieSelect">Movie</option>
                                <option value="youtubeSelect">YouTube Clip</option>
                            </select>
                        </div>

                        <div>
                            <label>Rating (# Stars)</label>
                            <select id='rating'>
                                {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10].map(value => {
                                    return (
                                        <option value={value}>{value}</option>
                                    )
                                })}
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