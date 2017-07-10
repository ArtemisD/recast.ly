var VideoList = () => (
  <div className="video-list media">

    <VideoListEntry
    link={exampleVideoData[0].snippet.thumbnails.medium.url}
    title={exampleVideoData[0].snippet.title}
    description={exampleVideoData[0].snippet.description} />

    <VideoListEntry
    link={exampleVideoData[1].snippet.thumbnails.medium.url}
    title={exampleVideoData[1].snippet.title}
    description={exampleVideoData[1].snippet.description} />

    <VideoListEntry
    link={exampleVideoData[2].snippet.thumbnails.medium.url}
    title={exampleVideoData[2].snippet.title}
    description={exampleVideoData[2].snippet.description} />

    <VideoListEntry
    link={exampleVideoData[3].snippet.thumbnails.medium.url}
    title={exampleVideoData[3].snippet.title}
    description={exampleVideoData[3].snippet.description} />

    <VideoListEntry
    link={exampleVideoData[4].snippet.thumbnails.medium.url}
    title={exampleVideoData[4].snippet.title}
    description={exampleVideoData[4].snippet.description} />

  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
