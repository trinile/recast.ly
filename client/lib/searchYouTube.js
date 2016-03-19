var searchYouTube = (options, callback) => {
  // TODO
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=';
  $.ajax({

    url: `${url}${options.max}&q=${options.query}&type=video&vvideoEmbeddable=true&key=${options.key}`,
    type: 'GET',
    success: function(data) {
      callback(data);
    },
    error: function(error) {
      console.log(error, "request not successful");
    }
  });
};

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key={YOUR_API_KEY}

window.searchYouTube = searchYouTube;
