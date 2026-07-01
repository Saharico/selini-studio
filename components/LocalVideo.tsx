"use client";

import { useRef, useState } from "react";
import { FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";

type Props = {
  src: string;
  title: string;
  buttonClassName?: string;
};

export default function LocalVideo({ src, title, buttonClassName }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={title}
        onClick={togglePlay}
        data-cursor
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-fg backdrop-blur-sm">
          <FiPlay className="ml-1" size={20} />
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        data-cursor
        className={
          buttonClassName ??
          "absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-fg/30 bg-black/40 text-fg backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        }
      >
        {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
      </button>
    </>
  );
}
