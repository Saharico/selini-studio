"use client";

import { useEffect, useRef, useState } from "react";
import type VimeoPlayer from "@vimeo/player";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

type Props = {
  vimeoId: string;
  hash?: string;
  title: string;
  buttonClassName?: string;
};

export default function VimeoBackground({ vimeoId, hash, title, buttonClassName }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { default: Player } = await import("@vimeo/player");
      if (cancelled || !iframeRef.current) return;
      const player = new Player(iframeRef.current);
      playerRef.current = player;
      player.setMuted(true).catch(() => {});
    })();

    return () => {
      cancelled = true;
      playerRef.current?.unload().catch(() => {});
      playerRef.current = null;
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const player = playerRef.current;
    if (!player) return;
    const next = !muted;
    player.setMuted(next).catch(() => {});
    setMuted(next);
  };

  const params = new URLSearchParams({
    autoplay: "1",
    loop: "1",
    muted: "1",
    controls: "0",
    title: "0",
    byline: "0",
    portrait: "0",
    playsinline: "1",
  });
  if (hash) params.set("h", hash);

  return (
    <>
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; picture-in-picture"
        title={title}
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
