import React from "react";
import SearchBar from "./SearchBar.js";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onFormSubmit('spiderman')
    }

    onFormSubmit = async searchTerm => {
        const response = await youtube.get('/search', {
            params: {
                q: {searchTerm}
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        document.documentElement.scrollTop = 0;
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container"  style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;