import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var getVideoData = function() {
  var randomIdx = Math.floor(Math.random() * exampleVideoData.length);
  return exampleVideoData[randomIdx];
};

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((v, index) => {
      return (
        <VideoListEntry video={v} clickVideo={props.clickVideo} key={JSON.stringify(index)}/>
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
