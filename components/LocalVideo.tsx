"use client";

import { useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

type Props = {
  src: string;
  title: string;
  buttonClassName?: string;
};

export default function LocalVideo({ src, title, buttonClassName }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
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
        className="absolute inset-0 h-full w-full object-cover"
      />
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
