"use client";
import { XSquare } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youTubeId }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPLayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-dark"
          onClick={handleVideoPLayer}
        >
          <XSquare size={32} />
        </button>
        <YouTube
          videoId={youTubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("video is broken, please try another!")}
        />
      </div>
    );
  };

  const ReOpen = () => {
    return (
      <div className="fixed bottom-5 right-5 w-32 hover:bg-color-accent bg-color-primary transition-all text-color-dark text-center rounded text-base shadow-xl">
        <button onClick={handleVideoPLayer} className="p-2">
          Tonton Trailer.
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <ReOpen />;
};

export default VideoPlayer;
