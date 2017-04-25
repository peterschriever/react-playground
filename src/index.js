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
        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                'videos': videos,
                'currentVideo': videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.currentVideo} />
                <VideoList
                    onVideoSelect={currentVideo => this.setState({currentVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
