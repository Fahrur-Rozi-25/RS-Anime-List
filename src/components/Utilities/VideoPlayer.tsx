"use client";
import YouTube from "react-youtube";

const VideoPlayer = ({ youTubeId }: any) => {
  const option = {
    width: "300",
    height: "300",
  };

  const LayarKecil = () => {
    return (
      <div className="block md:hidden">
        <div className="flex flex-col items-center">
          <h2 className="text-color-primary font-bold my-4">Video Trailer.</h2>
          <div className="aspect-video border-4 border-color-accent rounded-lg">
            <YouTube
              videoId={youTubeId}
              onReady={(event) => event.target.pauseVideo()}
              opts={option}
              onError={() => alert("video is broken, please try another!")}
            />
          </div>
        </div>
      </div>
    );
  };
  const LayarLebar = () => {
    return (
      <div className="hidden md:block">
        <div className="flex flex-col items-center">
          <h2 className="text-color-primary font-bold my-4">Video Trailer.</h2>
          <div className="aspect-video border-4 border-color-accent rounded-lg">
            <YouTube
              videoId={youTubeId}
              onReady={(event) => event.target.pauseVideo()}
              onError={() => alert("video is broken, please try another!")}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <LayarKecil />
      <LayarLebar />
    </div>
  );
};

export default VideoPlayer;
