import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBfdtOl51pmzOaSk5kMzJ3r4-FOl4a0ZCE';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            currentVideo: null
        };

        YTSearch({key: API_KEY, term: 'league'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.currentVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
