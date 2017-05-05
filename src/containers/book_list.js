import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book, index) => {
            return (
                <li key={index} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
}

// this function is the glue between React and Redux
function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books // map this.props.books to state.books
    };
}

// connect takes a function and a Component, and returns a container (smart component)
export default connect(mapStateToProps)(BookList);
