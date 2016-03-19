var searchYouTube = (options, callback) => {
  // TODO
  var url = 'https://www.googleapis.com/youtube/v3/search?';
  $.ajax({

    url: `${url}part=snippet&maxResults=${options.max}&q=${options.query}&type=video&vvideoEmbeddable=true&key=${options.key}`,
    type: 'GET',
    beforeSend: function() {  
      callback(window.dummyVideoList, window.dummyVideo);
    },
    success: function(data) {
      var debounced = _.debounce(callback, 2000);
      debounced(data.items, data.items[0]); //returned data.items => video list ; data.items[0] = currentVideo
      console.log('success');
    },
    error: function(error) {
      console.log(error, 'request not successful');
    }
  });
};

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key={YOUR_API_KEY}
//options { max: 5, query: ' , key: window.YOUTUBE_API_KEY}
window.searchYouTube = searchYouTube;

window.createDummyVideos = function(number) {
  var list = [];
  for (var i = 0; i < number; i++) {
    list.push(
    { 
    "kind": "youtube#searchResult",
    "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "l4bDVq-nP-0"
    },
    "snippet": {
      "publishedAt": "2015-08-02T20:52:58.000Z",
      "channelId": "UCJbPGzawDH1njbqV-D5HqKw",
      "title": "No video found yet",
      "description": "Loading Video, please wait",
      "thumbnails": {
        "default": {
          "url": "https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/5/96196420.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/5/96196420.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://s3.amazonaws.com/pet-uploads.adoptapet.com/d/6/5/96196420.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "nothinghere",
      "liveBroadcastContent": "none" 
      } 
    });

  }
  return list;
};

window.dummyVideoList = createDummyVideos(5);

window.dummyVideo = dummyVideoList[0];