import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

var getVideoData = function() {
  var randomIdx = Math.floor(Math.random() * exampleVideoData.length);
  return exampleVideoData[randomIdx];
};

var video = getVideoData();

class App extends React.Component {
  constructor() {
    super();
    // this.state = state;
  }

  clickVideo(e) {
    console.log(e);

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={video} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={exampleVideoData} clicked={this.clickVideo}/></div>
          </div>
        </div>
      </div>
    );
  }




  changeVideo() {
    document.getElementsByClassName('.video-list-entry-title').attr('title', 'Item Added');
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
