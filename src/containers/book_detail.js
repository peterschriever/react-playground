import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <h3>Select a book to get started.</h3>;
        }

        return (
            <div>
                <h3>Book detail</h3>
                title: {this.props.book.title} <br/>
                pages: {this.props.book.pages}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

// connect takes a function and a Component, and returns a container (smart component)
export default connect(mapStateToProps)(BookDetail);
