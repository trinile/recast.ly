var VideoList = (props) => {

  // var handleClick = (currentVideo) => {
  //   console.log(currentVideo);
  //   props.onUserClick(currentVideo);
  // };

  return (
      <div className="video-list media">
      { props.videos.map((video) => 
        <VideoListEntry whenClicked={props.onUserClick} videoEntry={video} /> 
        )}
      </div> 
  );
};

window.VideoList = VideoList;
