import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var getVideoData = function() {
  var randomIdx = Math.floor(Math.random() * exampleVideoData.length);
  return exampleVideoData[randomIdx];
};

var VideoList = (props) => (
  <div className="video-list">
    {/* <div><h5><em><VideoListEntry url={video1.snippet.thumbnails.default.url} title={video1.snippet.title} detail={video1.snippet.description}/></em></h5></div>
    <div><h5><em><VideoListEntry url={video2.snippet.thumbnails.default.url} title={video2.snippet.title} detail={video2.snippet.description}/></em></h5></div>
    <div><h5><em><VideoListEntry url={video3.snippet.thumbnails.default.url} title={video3.snippet.title} detail={video3.snippet.description}/></em></h5></div>
    <div><h5><em><VideoListEntry url={video4.snippet.thumbnails.default.url} title={video4.snippet.title} detail={video4.snippet.description}/></em></h5></div>
    <div><h5><em><VideoListEntry url={video5.snippet.thumbnails.default.url} title={video5.snippet.title} detail={video5.snippet.description}/></em></h5></div> */}


    {props.data.map((v) => {
      return (
        <div><h5><em><VideoListEntry url={v.snippet.thumbnails.default.url} title={v.snippet.title} detail={v.snippet.description}/></em></h5></div>
      );
    }
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
