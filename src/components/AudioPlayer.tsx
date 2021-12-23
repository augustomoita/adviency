import React, { useEffect, useState } from 'react';

function AudioPlayer() {
  const [playing, setPlaying] = useState<boolean>(false);
  const music = new Audio('christmas.mp3');
  music.volume = 0.1;
  music.loop = true;
  const [audio] = useState<HTMLAudioElement>(music);

  const toggleSound = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing, audio]);

  return (
    <>
      <button className="text-2xl" onClick={toggleSound}>
        {playing ? '⏸️' : '▶️'}
      </button>
    </>
  );
}

export default AudioPlayer;
