var VideoList = (props) => (
  <div className="video-list media">
  { props.videos.map((video) => 
    <VideoListEntry videoEntry={video} /> 
    )}
  </div> 
);

window.VideoList = VideoList;
