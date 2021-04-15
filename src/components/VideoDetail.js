import React from "react";

const VideoDetail = ({ video }) => {
    console.log(video);
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed" style={{borderRadius: '4px', boxShadow: '0 0 4px grey'}}>
                <iframe title='Video Player' src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="meta description">{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;