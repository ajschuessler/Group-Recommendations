import React from 'react';


class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            
            {this.props.bookInfo.title}, {this.props.bookInfo.author}
            <button>{`^`}</button>
            12
            
            </div>
        )
    }
}

module.exports = Book;