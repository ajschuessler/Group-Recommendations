import React from 'react';


class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            
            <p>{this.props.bookInfo.title}, {this.props.bookInfo.author}</p>
            
            </div>
        )
    }
}

module.exports = Book;