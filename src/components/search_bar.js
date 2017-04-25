import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {searchTerm: ''};
    }

    onInputChanged(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }

    render() {
        return (
          <input value={this.state.searchTerm}
              onChange={event => this.onInputChanged(event.target.value)} />
        );
    }
}
