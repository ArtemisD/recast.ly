var searchYouTube = (options, callback) => {
  options.max = options.max || 5;

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      console.log('get success', data);
      callback(data.items);
    },
    error: function() {
      console.error('get failure');
    }
  });
};

window.searchYouTube = searchYouTube;
