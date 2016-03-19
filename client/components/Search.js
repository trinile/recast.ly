var Search = (props) => {
  
  var handleSearch = (event) => {
    //create options object
    console.log(event);
    console.log(event.target.value);
    var options = {'max': 5, 'key': window.YOUTUBE_API_KEY, 'query': event.target.value};
    searchYouTube(options, props.whenUserSearched);
  };

  //whenUserSearched
  return (
    <div className="search-bar form-inline">
      <input onChange={handleSearch} className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};
window.Search = Search;
