import React, { useState } from 'react';

const PlayerController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <video id="audioPlayer">
      <source id="audioSource" src="" />
    </video>
  );
}

export default PlayerController;