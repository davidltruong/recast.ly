// import exampleVideoData from '../data/exampleVideoData.js';


// var getVideoData = function() {
//   var randomIdx = Math.floor(Math.random() * exampleVideoData.length);
//   return exampleVideoData[randomIdx];
// };

// var props = getVideoData();


// var VideoListEntry = (prop) => (
//   <div className="video-list-entry media">
//     <div className="media-left media-middle">
//       <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">Video Title</div>
//       <div className="video-list-entry-detail">Video Description</div>
//     </div>
//   </div>
// );


var VideoListEntry = (prop) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={prop.url} alt="" />
      {/* <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" /> */}
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{prop.title}</div>
      <div className="video-list-entry-detail">{prop.detail}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
