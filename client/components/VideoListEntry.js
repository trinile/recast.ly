var VideoListEntry = (props) => {

  var handleClick = () => {
    console.log(this);
    props.whenClicked(props.videoEntry);
  };

  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.videoEntry.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={handleClick}>{props.videoEntry.snippet.title}</div>
        <div className="video-list-entry-detail">{props.videoEntry.snippet.description}</div>
      </div>
    </div>
  );
};

window.VideoListEntry = VideoListEntry;
